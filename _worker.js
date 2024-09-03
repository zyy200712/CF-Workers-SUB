
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'zbb'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

let cacheTTL = 24 ;//小时，缓存时长

//节点链接 + 订阅链接
let MainData = `
vless://b2ca329a-f595-4b17-92ec-c59604e64f9c@zyh.z07.us.kg:443?encryption=none&security=tls&sni=zyh.Z07.Us.Kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=ZYH.z07.US.kg&path=%2FL9MKFdLYAdmLbXSK%2FdHMuaHBjLnR3%3Fed%3D2560#0006
vless://37691131-db68-49bc-b1bb-840277c54390@zula.ir:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#0007
vless://bae36924-69da-4065-bc92-de38d9b041cd@ziz.zcr07.us.kg:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2F%3Fed%3D2048#03
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@yichuan.smartkidskindergarten.com:2096?encryption=none&security=tls&sni=ddd.zcr07.us.Kg&alpn=h3%2Ch2&fp=randomized&type=ws&host=ddd.zcr07.us.Kg&path=vless-ws%2F%3Fed%3D2048#13-vless-worker-ddd.zcr07.us.Kg
vless://bae36924-69da-4065-bc92-de38d9b041cd@xn--b6gac.eu.org:443?encryption=none&security=tls&sni=ziz.zcr07.us.kg&fp=randomized&type=ws&host=ziz.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.104#04
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@x6.zcr07.us.kg:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#05
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@www.zhongyunyang.com:443?encryption=none&security=tls&sni=ddd.zcr07.Us.KG&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=ddd.zcr07.Us.KG&path=vless-ws%2F%3Fed%3D2048#18-vless-worker-ddd.zcr07.Us.KG
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@www.ydxs.cc:2083?encryption=none&security=tls&sni=ddd.zcr07.Us.kG&alpn=h2&fp=safari&type=ws&host=ddd.zcr07.Us.kG&path=vless-ws%2F%3Fed%3D2048#8-vless-worker-ddd.zcr07.Us.kG
trojan://zbb@www.wto.org:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#06
vless://b4c6b261-922d-4732-b634-1cfdba80ec50@www.wn01.cc:443?encryption=none&security=tls&sni=edg.w07.us.kg&alpn=h3&fp=random&type=ws&host=edg.w07.us.kg&path=%2F%3Fproxyip%3Dproxyip.oracle.fxxk.dedyn.io#07
trojan://zbb@www.whatismyip.com:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#08
trojan://zbb@www.visa.com.sg:8443?security=tls&sni=yg3.zcr07.rr.nu&fp=random&type=ws&host=yg3.zcr07.rr.nu&path=%2F%3Fed%3D2560#000001%20T
trojan://trojan@www.udemy.com:2083?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#09
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@www.sxjinshihao.com:443?encryption=none&security=tls&sni=ddd.zcr07.US.Kg&alpn=h3%2Ch2&fp=firefox&type=ws&host=ddd.zcr07.US.Kg&path=vless-ws%2F%3Fed%3D2048#5-vless-worker-ddd.zcr07.US.Kg
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@www.qkk74.com:2053?encryption=none&security=tls&sni=ddd.zcr07.us.kg&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=ddd.zcr07.us.kg&path=vless-ws%2F%3Fed%3D2048#4-vless-worker-ddd.zcr07.us.kg
trojan://zbb@www.piaohua5.com:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#KR
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@www.mrds66.com:443?encryption=none&security=tls&sni=ddd.zcr07.us.kG&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=ddd.zcr07.us.kG&path=vless-ws%2F%3Fed%3D2048#19-vless-worker-ddd.zcr07.us.kG
trojan://zbb@www.lancome.com.tw:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT-clone
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@www.joker.one:8443?encryption=none&security=tls&sni=ddd.zcr07.us.kG&alpn=http%2F1.1&fp=safari&type=ws&host=ddd.zcr07.us.kG&path=vless-ws%2F%3Fed%3D2048#7-vless-worker-ddd.zcr07.us.kG
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@www.jingshuai888.com:2087?encryption=none&security=tls&sni=ddd.zcr07.us.Kg&alpn=h2%2Chttp%2F1.1&fp=edge&type=ws&host=ddd.zcr07.us.Kg&path=vless-ws%2F%3Fed%3D2048#1-vless-worker-ddd.zcr07.us.Kg
vless://37691131-db68-49bc-b1bb-840277c54390@www.iplocation.net:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#xx04
vless://37691131-db68-49bc-b1bb-840277c54390@www.ipaddress.my:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#x08
vless://b4c6b261-922d-4732-b634-1cfdba80ec50@www.iios.club:443?encryption=none&security=tls&sni=edg.w07.us.kg&alpn=h3&fp=random&type=ws&host=edg.w07.us.kg&path=%2F%3Fproxyip%3Dproxyip.aliyun.fxxk.dedyn.io#00009
vless://37691131-db68-49bc-b1bb-840277c54390@www.hugedomains.com:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#xxx09
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@www.hptfap.top:2096?encryption=none&security=tls&sni=ddd.zcr07.Us.Kg&alpn=h3%2Ch2%2Chttp%2F1.1&fp=android&type=ws&host=ddd.zcr07.Us.Kg&path=vless-ws%2F%3Fed%3D2048#4-vless-worker-ddd.zcr07.Us.Kg
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@www.gzgafk.com:2083?encryption=none&security=tls&sni=ddd.zcr07.uS.kG&alpn=h2&fp=chrome&type=ws&host=ddd.zcr07.uS.kG&path=vless-ws%2F%3Fed%3D2048#6-vless-worker-ddd.zcr07.uS.kG
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@www.gov.ua:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=random&type=ws&host=kjg.zbb07.us.kg&path=%2FproxyIP%3D2606%3A4700%3A%3A#0002
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@www.flzt88.net:2053?encryption=none&security=tls&sni=ddd.zcr07.Us.Kg&alpn=h3%2Ch2&fp=ios&type=ws&host=ddd.zcr07.Us.Kg&path=vless-ws%2F%3Fed%3D2048#11-vless-worker-ddd.zcr07.Us.Kg
vless://37691131-db68-49bc-b1bb-840277c54390@www.dushu8.com:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#x06
trojan://zbb@www.digitalocean.com:443?security=tls&sni=tr3.zcr07.us.kg&fp=random&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#7%20T
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjAwMDA2IiwNCiAgImFkZCI6ICJ3d3cuYjd5eS5jYyIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIwM2ZjYzYxOC1iOTNkLTY3OTYtNmFlZC04YTM4Yzk3NWQ1ODEiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImRkZC56Y3IwNy5Vcy5LZyIsDQogICJwYXRoIjogIi9hdmVpcm9yLmNvbTo0NDMvbGlua3Z3cyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJkZGQuemNyMDcuVXMuS2ciLA0KICAiYWxwbiI6ICJoMyxoMixodHRwLzEuMSIsDQogICJmcCI6ICJyYW5kb21pemVkIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInpuIDAyIiwNCiAgImFkZCI6ICJ3d3cuYjJoOTkuY29tIiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjc2MjIxYmZiLWU5MmYtNGU4MC04MWM1LTZmZTQ4ZjUwYWMwYiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZGRkLnpjcjA3LmRucy1keU5hTUljLm5FdCIsDQogICJwYXRoIjogIi9nbHdlaWRmLnNiczo0NDMvbGlua3dzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImRkZC56Y3IwNy5kbnMtZHlOYU1JYy5uRXQiLA0KICAiYWxwbiI6ICJoMyxoMixodHRwLzEuMSIsDQogICJmcCI6ICJyYW5kb21pemVkIg0KfQ==
trojan://zbb@www.anypornxvideos.com:8443?security=tls&sni=yg42.zbb96.dynv6.net&fp=random&type=ws&host=yg42.zbb96.dynv6.net&path=%2F%3Fed%3D2560#000003%20T
trojan://zbb@www.8a8c8.com:443?security=tls&type=ws&host=2.zcr07.filegear-sg.me&path=%2F#000004%20T
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@www.55maohh.com:2096?encryption=none&security=tls&sni=ddd.zcr07.us.kG&alpn=h3%2Ch2%2Chttp%2F1.1&fp=ios&type=ws&host=ddd.zcr07.us.kG&path=vless-ws%2F%3Fed%3D2048#18-vless-worker-ddd.zcr07.us.kG
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@www.17kty.com:2083?encryption=none&security=tls&sni=ddd.zcr07.US.Kg&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=ddd.zcr07.US.Kg&path=vless-ws%2F%3Fed%3D2048#5-vless-worker-ddd.zcr07.US.Kg
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjk0LVx1RDgzQ1x1REZDMVJFTEFZLTE4NS4xNDYuMTczLjU5LTAzMjYtd29ya2VyIiwNCiAgImFkZCI6ICJ3d3cuMTF0eHQuY29tIiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjA1NjQxY2Y1LTU4ZDItNGJhNC1hOWYxLWIzY2RhMGIxZmIxZCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJhdXRvIiwNCiAgImhvc3QiOiAiZGRkLnpjcjA3LnVzLmtnIiwNCiAgInBhdGgiOiAiL29iZGlpLmNmZDo0NDMvbGlua3dzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImRkZC56Y3IwNy51cy5rZyIsDQogICJhbHBuIjogImgyIiwNCiAgImZwIjogImVkZ2UiDQp9
vless://14e3a0f4-96f0-49b8-b4ea-7c26ef211156@wto.org:443?encryption=none&security=tls&sni=BPb.zCr07.com.Mp&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bpB.ZCr07.Com.Mp&path=%2Fcj57bkZZmVIzlgoh%3Fed%3D2560#003
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@wap.oiuok.top:2096?encryption=none&security=tls&sni=ddd.zcr07.US.Kg&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=ddd.zcr07.US.Kg&path=vless-ws%2F%3Fed%3D2048#12-vless-worker-ddd.zcr07.US.Kg
vless://0f06c712-d346-401b-a959-7577a9448142@w.b01.dns-dynamic.net:443?encryption=none&security=tls&sni=w.b01.dns-dynamic.net&fp=randomized&type=ws&host=w.b01.dns-dynamic.net&path=%2F%3Fed%3D2048#004
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@voyeurhit.me:2053?encryption=none&security=tls&sni=ddd.zcr07.us.kG&alpn=h3%2Ch2%2Chttp%2F1.1&fp=randomized&type=ws&host=ddd.zcr07.us.kG&path=vless-ws%2F%3Fed%3D2048#14-vless-worker-ddd.zcr07.us.kG
trojan://zbb@vm.zcr07.filegear-sg.me:443?security=tls&sni=vm.zcr07.filegear-sg.me&fp=randomized&type=ws&host=vm.zcr07.filegear-sg.me&path=%2F%3Fed%3D2560#vm.zcr07.filegear-sg.me
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@victoriahotels.asia:2083?encryption=none&security=tls&sni=ddd.zcr07.Us.KG&alpn=h3%2Ch2%2Chttp%2F1.1&fp=android&type=ws&host=ddd.zcr07.Us.KG&path=vless-ws%2F%3Fed%3D2048#9-vless-worker-ddd.zcr07.Us.KG
trojan://trojan@usa.freesdns.info:443?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#X%2004
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@tzvip1.xyz:2096?encryption=none&security=tls&sni=ddd.zcr07.Us.kg&alpn=h3%2Ch2%2Chttp%2F1.1&fp=firefox&type=ws&host=ddd.zcr07.Us.kg&path=vless-ws%2F%3Fed%3D2048#4-vless-worker-ddd.zcr07.Us.kg
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjAwMDAxIiwNCiAgImFkZCI6ICJ0aW1lLmlzIiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjhjN2M5MjdhLWFiMDgtNDBlNy04YjAwLWY0Nzk0MzU5MzRkZCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZGRkLnpjcjA3LnVzLktHIiwNCiAgInBhdGgiOiAiLzE1Ni43MjQwNjQueHl6OjQ0My9yanRudndzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImRkZC56Y3IwNy51cy5LRyIsDQogICJhbHBuIjogImgzLGgyIiwNCiAgImZwIjogInJhbmRvbWl6ZWQiDQp9
trojan://zbb@steel.footballlovernews.com:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#T%203
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjAwMDA0IiwNCiAgImFkZCI6ICJzcGVlZHRlc3Qub3JnIiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjEwNTJmMjRlLTdiMDktNDVlYi1iMGM1LWQ4NThlYjEyNDE5MiIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZGRkLnpjcjA3LkRucy1EWW5BTUljLk5lVCIsDQogICJwYXRoIjogIi9nbHdlaWRmLmNmZDo0NDMvbGlua3dzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImRkZC56Y3IwNy5EbnMtRFluQU1JYy5OZVQiLA0KICAiYWxwbiI6ICJoMyxoMiIsDQogICJmcCI6ICJjaHJvbWUiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInh4MDciLA0KICAiYWRkIjogInNwZWVkLmNsb3VkZmxhcmUuY29tIiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiMDU2NDFjZjUtNThkMi00YmE0LWE5ZjEtYjNjZGEwYjFmYjFkIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICI1MmFhLXN1cGVyLXJpdmVyLTUyYWEucG9iaW40OTU5OS53b3JrZXJzLmRldiIsDQogICJwYXRoIjogIi9vYmRpaS5jZmQvbGlua3dzIiwNCiAgInRscyI6ICIiLA0KICAic25pIjogIiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiDQp9
trojan://trojan@solid.footballlovernews.com:443?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#Xxx%2005
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@soik.top:2087?encryption=none&security=tls&sni=ddd.zcr07.Us.kg&alpn=h2%2Chttp%2F1.1&fp=firefox&type=ws&host=ddd.zcr07.Us.kg&path=vless-ws%2F%3Fed%3D2048#14-vless-worker-ddd.zcr07.Us.kg
vless://5e0a98c8-282a-43ac-a2dd-c61db56f4e73@socks5data.090227.xyz:443?encryption=none&security=tls&sni=cc.zcr07.us.kg&fp=randomized&type=ws&host=cc.zcr07.us.kg&path=%2Fpyip%3D8.219.0.48#xxxxxx%2004
vless://37691131-db68-49bc-b1bb-840277c54390@singapore.com:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#xxxx04
trojan://trojan@russia.com:2096?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#X%2003
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@ribenav.qhcbn.com:2053?encryption=none&security=tls&sni=ddd.zcr07.US.kg&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=ddd.zcr07.US.kg&path=vless-ws%2F%3Fed%3D2048#12-vless-worker-ddd.zcr07.US.kg
vless://b4c6b261-922d-4732-b634-1cfdba80ec50@qq486.com:443?encryption=none&security=tls&sni=edg.w07.us.kg&alpn=h3&fp=random&type=ws&host=edg.w07.us.kg&path=%2F%3Fproxyip%3Dproxyip.us.fxxk.dedyn.io#%E5%8A%A0%E5%85%A5%E6%88%91%E7%9A%84%E9%A2%91%E9%81%93t.me%2FCMLiussss%E8%A7%A3%E9%94%81%E6%9B%B4%E5%A4%9A%E4%BC%98%E9%80%89%E8%8A%82%E7%82%B9
vless://b4c6b261-922d-4732-b634-1cfdba80ec50@play.cdnmicrosoft.com:443?encryption=none&security=tls&sni=edg.w07.us.kg&alpn=h3&fp=random&type=ws&host=edg.w07.us.kg&path=%2F%3Fproxyip%3Dproxyip.oracle.fxxk.dedyn.io#CT
trojan://trojan@pesu.minusober.com:443?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#X%2002
trojan://zbb@pardazeshvpn-tg20.pages.dev:8443?security=tls&sni=yg3.zcr07.rr.nu&fp=random&type=ws&host=yg3.zcr07.rr.nu&path=%2FproxyIP%3D146.70.175.104#0003
vless://b4c6b261-922d-4732-b634-1cfdba80ec50@pan.axxpan.com:443?encryption=none&security=tls&sni=edg.w07.us.kg&alpn=h3&fp=random&type=ws&host=edg.w07.us.kg&path=%2F%3Fproxyip%3Dproxyip.kr.fxxk.dedyn.io#KR
trojan://zbb@mrds66.com:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#HK
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@motlucky789.com:443?encryption=none&security=tls&sni=ddd.zcr07.uS.kg&alpn=h3%2Ch2%2Chttp%2F1.1&fp=android&type=ws&host=ddd.zcr07.uS.kg&path=vless-ws%2F%3Fed%3D2048#15-vless-worker-ddd.zcr07.uS.kg
trojan://trojan@marly.toptechnonews.com:2053?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#Xxx%2007
vless://37691131-db68-49bc-b1bb-840277c54390@malaysia.com:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#xxx07
trojan://zbb@m.tvfff.com:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#02%60
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@m.oiuok.top:443?encryption=none&security=tls&sni=ddd.zcr07.Us.kg&alpn=h3%2Ch2%2Chttp%2F1.1&fp=firefox&type=ws&host=ddd.zcr07.Us.kg&path=vless-ws%2F%3Fed%3D2048#13-vless-worker-ddd.zcr07.Us.kg
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@m.keycow.com:443?encryption=none&security=tls&sni=ddd.zcr07.Us.kG&alpn=h2&fp=randomized&type=ws&host=ddd.zcr07.Us.kG&path=vless-ws%2F%3Fed%3D2048#20-vless-worker-ddd.zcr07.Us.kG
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@m.hotbk8.net:2096?encryption=none&security=tls&sni=ddd.zcr07.uS.kg&alpn=h3%2Ch2%2Chttp%2F1.1&fp=firefox&type=ws&host=ddd.zcr07.uS.kg&path=vless-ws%2F%3Fed%3D2048#10-vless-worker-ddd.zcr07.uS.kg
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@libra.meme:443?encryption=none&security=tls&sni=ddd.zcr07.Us.KG&alpn=h3%2Ch2&fp=android&type=ws&host=ddd.zcr07.Us.KG&path=vless-ws%2F%3Fed%3D2048#00008
vless://0c96d302-076e-4e46-a5b1-4e3a523beb8b@kjg.zbb07.us.kg:443?encryption=none&security=tls&sni=kjg.zbb07.us.kg&fp=randomized&type=ws&host=kjg.zbb07.us.kg&path=%2F%3Fed%3D2048#005
vless://803f17dc-afc3-44d2-b02b-a1fdfd938882@kj.r08.us.kg:443?encryption=none&security=tls&sni=kj.r08.us.kg&fp=randomized&type=ws&host=kj.r08.us.kg&path=%2F%3Fed%3D2048#xxx%2002
trojan://trojan@japan.com:8443?security=tls&sni=ygtrj.zcr07.us.kg&fp=randomized&type=ws&host=ygtrj.zcr07.us.kg&path=%2F%3Fed%3D2560#Xxx%2006
vless://37691131-db68-49bc-b1bb-840277c54390@iplocation.io:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#xxxx03
vless://5e0a98c8-282a-43ac-a2dd-c61db56f4e73@ipdb.api.030101.xyz:443?encryption=none&security=tls&sni=cc.zcr07.us.kg&fp=randomized&type=ws&host=cc.zcr07.us.kg&path=%2Fpyip%3D8.219.0.48#xxxxxx%2009
vless://14e3a0f4-96f0-49b8-b4ea-7c26ef211156@ip.sb:443?encryption=none&security=tls&sni=bPB.zCR07.cOM.mp&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bPB.zCR07.cOm.Mp&path=%2FJrHgecfUGfRSlQwv%3Fed%3D2560#007
trojan://zbb@ios.zcr07.us.kg:443?security=tls&sni=ios.zcr07.us.kg&fp=random&type=ws&host=ios.zcr07.us.kg&path=%2F%3Fed%3D2560#006
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjAwMDAyIiwNCiAgImFkZCI6ICJpY29vay5oayIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICI4YzdjOTI3YS1hYjA4LTQwZTctOGIwMC1mNDc5NDM1OTM0ZGQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImRkZC56Y3IwNy51cy5LRyIsDQogICJwYXRoIjogIi8xNTYuNzI0MDY0Lnh5ejo0NDMvcmp0bnZ3cyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJkZGQuemNyMDcudXMuS0ciLA0KICAiYWxwbiI6ICJoMyxoMiIsDQogICJmcCI6ICJyYW5kb21pemVkIg0KfQ==
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@hptkstxec.top:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=sg.ipdb.rr.nu#008
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@hotbk8.net:8443?encryption=none&security=tls&sni=ddd.zcr07.us.Kg&alpn=h3%2Ch2%2Chttp%2F1.1&fp=firefox&type=ws&host=ddd.zcr07.us.Kg&path=vless-ws%2F%3Fed%3D2048#6-vless-worker-ddd.zcr07.us.Kg
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@hk.zbb07.us.kg:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#0001
trojan://zbb@gur.gov.ua:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#0008
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@flzt88.net:2096?encryption=none&security=tls&sni=ddd.zcr07.uS.kG&alpn=h3%2Ch2&fp=safari&type=ws&host=ddd.zcr07.uS.kG&path=vless-ws%2F%3Fed%3D2048#9-vless-worker-ddd.zcr07.uS.kG
trojan://zbb@fbi.gov:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#0005
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInh4MDciLA0KICAiYWRkIjogImZhc3QuaXNzdWUudXMua2ciLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiMTA1MmYyNGUtN2IwOS00NWViLWIwYzUtZDg1OGViMTI0MTkyIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJkZGQuemNyMDcudXMuS2ciLA0KICAicGF0aCI6ICIvZ2x3ZWlkZi5jZmQ6NDQzL2xpbmt3cyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJkZGQuemNyMDcudXMuS2ciLA0KICAiYWxwbiI6ICJoMixodHRwLzEuMSIsDQogICJmcCI6ICJmaXJlZm94Ig0KfQ==
trojan://zbb@edtunnel-dgp.pages.dev:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#0004
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@edg.zbb07.us.kg:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&fp=randomized&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#edg.zbb07.us.kg
vless://b4c6b261-922d-4732-b634-1cfdba80ec50@edg.w07.us.kg:443?encryption=none&security=tls&sni=edg.w07.us.kg&fp=randomized&type=ws&host=edg.w07.us.kg&path=%2F%3Fed%3D2560#edg.w07.us.kg
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@dushu8.com:8443?encryption=none&security=tls&sni=ddd.zcr07.US.kg&alpn=h3%2Ch2&fp=ios&type=ws&host=ddd.zcr07.US.kg&path=vless-ws%2F%3Fed%3D2048#10-vless-worker-ddd.zcr07.US.kg
vless://37691131-db68-49bc-b1bb-840277c54390@divide.footballlovernews.com:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#m
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjAwMDAzIiwNCiAgImFkZCI6ICJkZGQuemNyMDcudVMuS0ciLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiMDNmY2M2MTgtYjkzZC02Nzk2LTZhZWQtOGEzOGM5NzVkNTgxIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogImF1dG8iLA0KICAiaG9zdCI6ICJkZGQuemNyMDcuVVMua0ciLA0KICAicGF0aCI6ICIvY2FrZS5jYXBlbGxhcmUuY29tOjQ0My9saW5rdndzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImRkZC56Y3IwNy5VUy5rRyIsDQogICJhbHBuIjogImh0dHAvMS4xIiwNCiAgImZwIjogImlvcyINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIngwMSIsDQogICJhZGQiOiAiZGRkLnpjcjA3LmNsb3VkbnMuYml6IiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjA1NjQxY2Y1LTU4ZDItNGJhNC1hOWYxLWIzY2RhMGIxZmIxZCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZGRkLnpjcjA3LmNMT1VkblMuQklaIiwNCiAgInBhdGgiOiAiL29iZGlpLmNmZDo0NDMvbGlua3dzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImRkZC56Y3IwNy5jTE9VZG5TLkJJWiIsDQogICJhbHBuIjogImgyIiwNCiAgImZwIjogInNhZmFyaSINCn0=
vless://5e0a98c8-282a-43ac-a2dd-c61db56f4e73@cuv6.xxxxxxxx.tk:443?encryption=none&security=tls&sni=cc.zcr07.us.kg&fp=randomized&type=ws&host=cc.zcr07.us.kg&path=%2Fpyip%3D8.219.0.48#xxxxxx%2004%60
vless://5e0a98c8-282a-43ac-a2dd-c61db56f4e73@cnv6.xxxxxxxx.tk:443?encryption=none&security=tls&sni=cc.zcr07.cloudns.biz&fp=randomized&type=ws&host=cc.zcr07.cloudns.biz&path=%2Fpyip%3D8.222.164.209#xxxxxx%2003.
vless://5e0a98c8-282a-43ac-a2dd-c61db56f4e73@cn.xxxxxxxx.tk:443?encryption=none&security=tls&sni=cc.zcr07.us.kg&fp=randomized&type=ws&host=cc.zcr07.us.kg&path=%2Fpyip%3D8.219.0.48#xxxxxx%2004
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjAwMDA1IiwNCiAgImFkZCI6ICJjZi41MTUxODgueHl6IiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjM5Y2VjMThmLWE0MzktNDI3Yy05YTRlLWFlYjZmY2RmNmY1MyIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZGRkLnpjcjA3LkNsT1VkbnMuYml6IiwNCiAgInBhdGgiOiAiL2xpbmphMDUuaHdjYXIuc2JzOjQ0My9saW5rd3MiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiZGRkLnpjcjA3LkNsT1VkbnMuYml6IiwNCiAgImFscG4iOiAiaHR0cC8xLjEiLA0KICAiZnAiOiAiZmlyZWZveCINCn0=
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@cf.090227.xyz:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#%E5%8A%A0%E5%85%A5%E6%88%91%E7%9A%84%E9%A2%91%E9%81%93t.me%2FCMLiussss%E8%A7%A3%E9%94%81%E6%9B%B4%E5%A4%9A%E4%BC%98%E9%80%89%E8%8A%82%E7%82%B9
trojan://zbb@cdntest.yuchen.icu:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#001
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInh4MDgiLA0KICAiYWRkIjogImNkbi5pc3N1ZS51cy5rZyIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICIxMDUyZjI0ZS03YjA5LTQ1ZWItYjBjNS1kODU4ZWIxMjQxOTIiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImRkZC56Y3IwNy51cy5LZyIsDQogICJwYXRoIjogIi9nbHdlaWRmLmNmZDo0NDMvbGlua3dzIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImRkZC56Y3IwNy51cy5LZyIsDQogICJhbHBuIjogImgyLGh0dHAvMS4xIiwNCiAgImZwIjogImZpcmVmb3giDQp9
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@ca.zbb07.us.kg:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2FCOWp9q15gWAXXmbM%3Fed%3D2560#xxxxxx01
trojan://zbb@c.w07.us.kg:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#01%60
vless://37691131-db68-49bc-b1bb-840277c54390@bpfav2.pages.dev:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#x09
vless://14e3a0f4-96f0-49b8-b4ea-7c26ef211156@bpbsg.pages.dev.:443?encryption=none&security=tls&sni=bPb.Zcr07.COm.mp&fp=randomized&type=ws&host=BPb.zcr07.COm.MP&path=%2Fpyip%3D2606%3A4700%3A%3A#v%20x%27
vless://0cac83ba-933c-4798-9e76-715fe6ed9169@b2h99.com:443?encryption=none&security=tls&sni=x6.zcr07.us.kg&fp=randomized&type=ws&host=x6.zcr07.us.kg&path=%2F%3Fed%3D2048#009
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@anypornxvideos.com:2083?encryption=none&security=tls&sni=ddd.zcr07.Us.kg&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=ddd.zcr07.Us.kg&path=vless-ws%2F%3Fed%3D2048#11-vless-worker-ddd.zcr07.Us.kg
vless://37691131-db68-49bc-b1bb-840277c54390@alejandracaiccedo.com:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=random&type=ws&host=xb.zcr07.com.mp&path=%2FproxyIP%3Dproxyip.sg.fxxk.dedyn.io#xxx06
vless://37691131-db68-49bc-b1bb-840277c54390@addressesapi.090227.xyz:443?encryption=none&security=tls&sni=xb.zcr07.com.mp&fp=randomized&type=ws&host=xb.zcr07.com.mp&path=%2Fpyip%3D8.222.164.209#xxxxxx%2002.
trojan://zbb@96110.cf.090227.xyz:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#%E5%8A%A0%E5%85%A5%E6%88%91%E7%9A%84%E9%A2%91%E9%81%93t.me%2FCMLiussss%E8%A7%A3%E9%94%81%E6%9B%B4%E5%A4%9A%E4%BC%98%E9%80%89%E8%8A%82%E7%82%B9
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@91p819.cc:2087?encryption=none&security=tls&sni=ddd.zcr07.Us.KG&alpn=h3%2Ch2%2Chttp%2F1.1&fp=edge&type=ws&host=ddd.zcr07.Us.KG&path=vless-ws%2F%3Fed%3D2048#17-vless-worker-ddd.zcr07.Us.KG
trojan://zbb@8a8c8.com:8443?security=tls&sni=yg2.zcr07.myfw.us&fp=random&type=ws&host=yg2.zcr07.myfw.us&path=%2F%3Fed%3D2560#000002%20T
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@55maohh.com:8443?encryption=none&security=tls&sni=ddd.zcr07.US.kG&alpn=h3%2Ch2%2Chttp%2F1.1&fp=randomized&type=ws&host=ddd.zcr07.US.kG&path=vless-ws%2F%3Fed%3D2048#19-vless-worker-ddd.zcr07.US.kG
vless://1c8a3fb4-1662-5649-a04f-0195d7ad24cb@363so.soik.top:8443?encryption=none&security=tls&sni=ddd.zcr07.uS.kG&alpn=h3%2Ch2%2Chttp%2F1.1&fp=randomized&type=ws&host=ddd.zcr07.uS.kG&path=vless-ws%2F%3Fed%3D2048#2-vless-worker-ddd.zcr07.uS.kG
trojan://zbb@333.zbb.dns-dynamic.net:443?security=tls&sni=tr3.zcr07.us.kg&fp=random&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#0009
trojan://zbb@303.zzzzz.dns-dynamic.net:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#8%20T
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIjAwMDA3IiwNCiAgImFkZCI6ICIyeDJxa2Y5M3YueHl6IiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogImJjODY0MDc4LWRjZjMtNGJmNC04ZGJmLWNhOWYyMDBiNTZiZSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiZGRkLnpjcjA3LkROUy1EWW5BTUljLm5lVCIsDQogICJwYXRoIjogIi9nd2RlZi5zYnM6NDQzL2xpbmt3cyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJkZGQuemNyMDcuRE5TLURZbkFNSWMubmVUIiwNCiAgImFscG4iOiAiaDIiLA0KICAiZnAiOiAicmFuZG9taXplZCINCn0=
trojan://zbb@222.zbb.dns-dynamic.net:443?security=tls&sni=tr3.zcr07.us.kg&fp=randomized&type=ws&host=tr3.zcr07.us.kg&path=%2FproxyIP%3D146.70.175.116#002

`

let urls = [];
let subconverter = "SUBAPI.fxxk.dedyn.io"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		if( subconverter.includes("http://") ){
			subconverter = subconverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subconverter = subconverter.split("//")[1] || subconverter;
		}
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * total * 1099511627776 )/2);
		total = total * 1099511627776 ;
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
			if (envKey) {
				const URLs = await ADD(env[envKey]);
				const URL = URLs[Math.floor(Math.random() * URLs.length)];
				return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
			}
			return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || ( url.searchParams.has('surge') && !userAgent.includes('subconverter'))){
				订阅格式 = 'surge';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			// 初始化缓存
			const cache = caches.default;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')){
				追加UA = 'clash';
			} else if(url.searchParams.has('singbox')){
				追加UA = 'singbox';
			} else if(url.searchParams.has('surge')){
				追加UA = 'surge';
			}
			
			try {
				const responses = await Promise.all(urls.map(async url => {
					const cacheKey = new Request(url);
					
					try {
						// 设置2秒超时
						const controller = new AbortController();
						const timeoutId = setTimeout(() => controller.abort(), 2000);
	
						const response = await fetch(url, {
							method: 'get',
							headers: {
								'Accept': 'text/html,application/xhtml+xml,application/xml;',
								'User-Agent': `${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`
							},
							signal: controller.signal
						});
	
						clearTimeout(timeoutId);
	
						if (response.ok) {
							const content = await response.text();
							
							// 请求成功，写入缓存，设置24小时的缓存时间
							const cacheResponse = new Response(content, {
								headers: {
									...response.headers,
									'Cache-Control': `public, max-age=${cacheTTL * 60 * 60}`
								}
							});
							await cache.put(cacheKey, cacheResponse);
							console.log(`更新缓存 ${url}:\n${content.slice(0, 10)}...`);
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups')) {
								// Clash 配置
								订阅转换URL += "|" + url;
								return ""; // 返回空字符串，因为这种情况下我们不需要内容
							} else if (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								// Singbox 配置
								订阅转换URL += "|" + url;
								return ""; // 返回空字符串，因为这种情况下我们不需要内容
							} else {
								return content;
							}
						} else {
							throw new Error('请求失败');
						}
					} catch (error) {
						// 请求失败或超时，尝试从缓存读取
						const cachedResponse = await cache.match(cacheKey);
						if (cachedResponse) {
							const cachedContent = await cachedResponse.text();
							console.log(`使用缓存内容 ${url}:\n${cachedContent.slice(0, 10)}...`);
							return cachedResponse.text();
						} else {
							console.log(`无缓存可用 ${url}`);
							return ""; // 缓存中也没有，返回空字符串
						}
					}
				}));	
			
				for (const response of responses) {
					if (response) {
						req_data += base64Decode(response) + '\n';
					}
				}
			
			} catch (error) {
				console.error('处理 URL 时发生错误：', error);
			}
			if(env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);
			
			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);
			
			const base64Data = btoa(result);

			if (订阅格式 == 'base64' || token == fakeToken){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=surge&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			}
			//console.log(订阅转换URL);
			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
				if (订阅格式 == 'clash') subconverterContent =await clashFix(subconverterContent);
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
  
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
	return secondHex.toLowerCase();
}

function clashFix(content) {
	if(content.includes('wireguard') && !content.includes('remote-dns-resolve')){
		let lines;
		if (content.includes('\r\n')){
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}
	
		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}
