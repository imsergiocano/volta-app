import  { CognitoUserPool } from 'amazon-cognito-identity-js';
const poolData = {
    UserPoolId : 'us-east-1_2hF1wS2CS',
    ClientId : '3bv58k9gen8be4gdobg7dks4om',
    GroupName: 'volta-group'
}

export default new CognitoUserPool(poolData);