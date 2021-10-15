import  { CognitoUserPool } from 'amazon-cognito-identity-js';
const poolData = {
    UserPoolId : 'us-east-1_O8U0eBNsT',
    ClientId : '1jjsohehtclptpr064g045eu7j'
}

export default new CognitoUserPool(poolData);