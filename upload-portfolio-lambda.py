import boto3
import zipfile
def lambda_handler(event, context):
    try:
        sns = boto3.resource('sns');
        topic = sns.Topic('arn:aws:sns:us-east-1:557862614096:deployPortfolioTopic')

        # job = event.get('CodePipeline.job');


        # if job:
        #     for artifact in job["data"]["inputArtifacts"]:
        #         if artifact["name"] == "MyAppBuild":
        #             location = artifact["location"]["s3Location"]

        s3 = boto3.resource('s3')
        name = 'portfolio.wesleyhome.com'
        build_bucket = s3.Bucket(name+'-build')
        portfolio_bucket = s3.Bucket(name)

        # On Windows, this will need to be a different location than /tmp
        build_bucket.download_file('portfoliobuild.zip', '/tmp/portfoliobuild.zip')

        with zipfile.ZipFile('/tmp/portfoliobuild.zip') as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm)
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        topic.publish(Subject="Portfolio Deployed", Message="Portfolio deployed successfully")
    except:
        topic.publish(Subject="Portfolio Deployment Unsuccessful", Message="Portfolio was not deployed successfully")
        raise

    return "Deployment"