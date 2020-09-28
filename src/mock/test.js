import Mock from 'mockjs'

const res = {
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
export default ({ mock }) => {
    if (!mock) return;

    Mock.mock(RegExp('/api/test'), 'post', () => {
        return res;
    });
}