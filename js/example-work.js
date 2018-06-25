import React from 'react';

class ExampleWork extends React.Component {

    render() {
        return (
            <section className="section section--alignCentered section--description">
                <div className="section__exampleWrapper">
                    <div className="section__example">
                        <img alt="example screenshot of a project involving code"
                             className="section__exampleImage"
                             src="images/example1.png"/>
                        <dl className="color--cloud">
                            <dt className="section__exampleTitle section__text--centered">
                                Work Example
                            </dt>
                            <dd></dd>
                        </dl>
                    </div>
                </div>

                <div className="section__exampleWrapper">
                    <div className="section__example">
                        <img alt="example screenshot of a project involving chemistry"
                             className="section__exampleImage"
                             src="images/example2.png"/>
                        <dl className="color--cloud">
                            <dt className="section__exampleTitle section__text--centered ">
                                Work Example
                            </dt>
                            <dd></dd>
                        </dl>
                    </div>
                </div>

                <div className="section__exampleWrapper">
                    <div className="section__example">
                        <img alt="example screenshot of a project involving cats"
                             className="section__exampleImage"
                             src="images/example3.png"/>
                        <dl className="color--cloud">
                            <dt className="section__exampleTitle section__text--centered">
                                Work Example
                            </dt>
                            <dd></dd>
                        </dl>
                    </div>
                </div>
            </section>
        )
    }
}

export default ExampleWork;