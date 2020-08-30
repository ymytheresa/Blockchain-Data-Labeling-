import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
// import Link from '../routes'
import Link from "next/link";

class DataLabelingIndex extends Component {
  static async getInitialProps() {
    const DataLabelings = await factory.methods
      .getDeployedDataLabelings()
      .call();
    return { DataLabelings };
  }

  renderDataLabelings() {
    const items = this.props.DataLabelings.map((DataLabeling) => {
      return {
        header: DataLabeling,
        description: (
          <Link
            href={{ pathname: "/DataLabelings/[DataLabeling]" }}
            as={`/DataLabelings/${DataLabeling}`}
          >
            <a>View DataLabeling</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open DataLabelings</h3>
          <Link href="/DataLabelings/new">
            <a>
              <Button
                content="Create DataLabeling"
                icon="add circle"
                primary
                floated="right"
              />
            </a>
          </Link>
          {this.renderDataLabelings()}
        </div>
      </Layout>
    );
  }
}

export default DataLabelingIndex;
