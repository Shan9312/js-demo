//1. split: 分割，裂开；如str.split(','); . | / 等;不改变原字符串值 
var str = "192.168.2.1|1239.01|备注|1232|说得对不对"
const [ipv4, ...remark] = str.split('|')
console.log(ipv4, str)

//2. indexOf :有返回当前到index,没有返回-1

//3. includes: 返回Boolen

//4. slice & substring: 提前字符串一部分，不改变原字符串值。str.slice(beginIndex[, endIndex])
// slice & substring ：都是提取部分，区别在于传入第2个参数，传入负数时，sblice是从尾部计算，substing直接把负数作为0处理

const a = str.slice(0, -3); // 剪切到倒数3位；｜ 192.168.2.1|1239.01|备注|1232|说得
const b = str.substring(0, -3); // 相当于（0，0），即将负数识别为0； ｜ "" 

//5. endsWith & startsWith： 是以“”结尾或者以xx开头，返回true｜false
const list = [{
    "id": "5ba25fa9-2361-4860-a764-5b5c05c74edb",
    "name": "ecs-daiminmin-test003",
    "accountName": "\u534e\u4e3a\u4e91\u516c\u5171\u4e2a\u4eba\u8d26\u53f7",
    "zoneName": "\u534e\u4e1c-\u4e0a\u6d77\u4e8c\u53ef\u7528\u533a1",
    "privateIp": "192.168.58.243",
    "publicIp": "121.36.148.221",
    "status": "stopped",
    "sizeId": "s2.small.1",
    "createTime": "2019-10-28 13:59:44",
    "expireTime": null,
    "instanceChargeType": "postPaid",
    "skeyIdList": ["test0814"]
}, {
    "id": "85305038-c30c-437f-bb13-84a64e239638",
    "name": "ecs-daiminmin-test002",
    "accountName": "\u534e\u4e3a\u4e91\u516c\u5171\u4e2a\u4eba\u8d26\u53f7",
    "zoneName": "\u534e\u4e1c-\u4e0a\u6d77\u4e8c\u53ef\u7528\u533a2",
    "privateIp": "192.168.0.175",
    "publicIp": "122.112.255.200",
    "status": "running",
    "sizeId": "s3.small.1",
    "createTime": "2019-10-28 13:30:22",
    "expireTime": null,
    "instanceChargeType": "postPaid",
    "skeyIdList": []
}, {
    "id": "7bec340f-ace5-4d0b-a481-36cf5eddadd8",
    "name": "ecs-daiminmin-test001",
    "accountName": "\u534e\u4e3a\u4e91\u516c\u5171\u4e2a\u4eba\u8d26\u53f7",
    "zoneName": "\u534e\u4e1c-\u4e0a\u6d77\u4e8c\u53ef\u7528\u533a4",
    "privateIp": "192.168.0.187",
    "publicIp": "119.3.16.252",
    "status": "stopped",
    "sizeId": "s3.small.1",
    "createTime": "2019-10-28 13:01:54",
    "expireTime": null,
    "instanceChargeType": "postPaid",
    "skeyIdList": ["test0814"]
}];
const obj = list.find(child => child.status.endsWith('ing'));
console.log(obj);

console.log(list.map(obj => obj.status).includes('stopped'));
[{
    age: 12
}, {
    age: 45
}].sort((a, b) => a.age.localeCompare(b.age))