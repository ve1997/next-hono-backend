import * as cdk from "aws-cdk-lib";
import type { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class NextHonoBackendStack extends cdk.Stack {
	// biome-ignore lint/complexity/noUselessConstructor: <explanation>
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		// The code that defines your stack goes here

		// example resource
		// const queue = new sqs.Queue(this, 'NextHonoBackendQueue', {
		//   visibilityTimeout: cdk.Duration.seconds(300)
		// });
	}
}
