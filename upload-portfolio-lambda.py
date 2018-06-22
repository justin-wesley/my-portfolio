import boto3
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns');
    name = 'portfolio.wesleyhome.com'
    topic = sns.Topic('arn:aws:sns:us-east-1:557862614096:deployPortfolioTopic')
    location = {
        "bucketName": name+"-build",
        "objectKey": 'portfoliobuild.zip'
    }
    try:

        job = event.get('CodePipeline.job');


        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "MyAppBuild":
                    location = artifact["location"]["s3Location"]
        print "Location: " + str(location)
        s3 = boto3.resource('s3')
        build_bucket = s3.Bucket(location["bucketName"])
        portfolio_bucket = s3.Bucket(name)

        # On Windows, this will need to be a different location than /tmp
        build_bucket.download_file(location["objectKey"], '/tmp/portfoliobuild.zip')

        with zipfile.ZipFile('/tmp/portfoliobuild.zip') as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        topic.publish(Subject="Portfolio Deployed", Message="Portfolio deployed successfully")
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job["id"])
    except:
        topic.publish(Subject="Portfolio Deployment Unsuccessful", Message="Portfolio was not deployed successfully")
        raise

    return "Deployment"