import Mock from 'mockjs'

const test = {
    "head": {
        "chanel": "DBK",
        "drbkdt": "20190917",
        "drbktm": "20:30:52",
        "drbksq": "23982132138921398",
        "custid": [],
        "transq": "20190917",
        "transdt": "00008298",
        "respcd": "000000",
        "checkStatus":"1",
        "resptx": "交易成功"
    },
    "body": ["1"]
}
const login = {
    'data': {
        'access_token':'12456',
        'expires_in':'12456'
    }
}
const user = {
    'user': {
        'name':'hongcuiling',
        'avatar':''
    }
}
export default ({ mock }) => {
    if (!mock) return;

    Mock.mock(RegExp('/test'), 'post', () => {
        return test;
    });
    Mock.mock(RegExp('/login'), 'post', () => {
        return login;
    });
    Mock.mock(RegExp('/getInfo'), 'post', () => {
        return user;
    });
    Mock.mock(RegExp('/logout'), 'delete', () => {
        return user;
    });
}