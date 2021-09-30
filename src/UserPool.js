import  { CognitoUserPool } from 'amazon-cognito-identity-js';
const poolData = {
    UserPoolId : 'us-east-1_POq7jGZaf',
    ClientId : '4l6fn0he8i3b94p47t0grbpesl'
}

export default new CognitoUserPool(poolData);