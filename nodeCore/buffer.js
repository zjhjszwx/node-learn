// 进制表示
// 0b 2进制
// 0x 16进制
// 0o 8进制
// 首先你得熟记2的0到12次幂:1,2,4,8,16,32,64,128,256,512,1024,2048,4096，然后就能快速判断了

// 单位
// 1位 Bit 比特
// 8位 = 1字节
// 1024字节 = 1K
// 1024K = 1M
// 1024M = 1G
// 1024G = 1T

let c = 20;
let a = 0b10100;
let b = 0o24;
let d = 0x14;
//进制转换
// console.log(c.toString(8));
// console.log(parseInt("10100", 2));
//buffer 读取二进制数据
//<Buffer 00> 使用十六进制表示, 表示一个字节
const buf1 = Buffer.alloc(1);
const buf2 = Buffer.alloc(10, 1);
const buf3 = Buffer.allocUnsafe(10);
const buf4 = Buffer.from([1, 2, 3]);
const buf5 = Buffer.from("1"); // 默认采用utf8   <Buffer 31>  十六进制49
//buffer内容清0
// buf5.fill(0)
// console.log(buf1, buf2, buf3, buf4, buf5);

/**
 * buf.write
 * @string 要写入buf的字符
 * @offset 开始写入string之前要跳过的字节数,默认0
 * @interger 要写入的字节数 默认buf.length - offset
 * @encoding 默认utf-8
 */
var buf6 = Buffer.alloc(10);
buf6.write("测", 0, 3);
buf6.write("试", 3, 3);
console.log(buf6.toString(), buf6); //测试

//base基于64个可打印字符来表示二进制的表示方法,每6个比特为一个单位
// 3个字节有24个比特，对应于4个Base64单元
