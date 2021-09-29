import  { CognitoUserPool } from 'amazon-cognito-identity-js';
const poolData = {
    UserPoolId : 'us-east-1_PFqVnhhLJ',
    ClientId : '2jo7ogjfosim4rp08qulaomaf'
}

export default new CognitoUserPool(poolData);