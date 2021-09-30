import  { CognitoUserPool } from 'amazon-cognito-identity-js';
const poolData = {
    UserPoolId : 'us-east-1_DFxzb8Bdo',
    ClientId : '7r16ick2q0slv96laj7p8k11n7'
}

export default new CognitoUserPool(poolData);