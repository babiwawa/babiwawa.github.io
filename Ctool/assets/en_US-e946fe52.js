import{c as $}from"./_commonjsHelpers-87174ba5.js";var b={},D={get exports(){return b},set exports(h){b=h}};(function(h,B){(function(g,l){h.exports=l()})($,function(){var g="minute",l=/[+-]\d\d(?::?\d\d)?/g,P=/([+-]|\d\d)/g;return function(E,C,A){var r=C.prototype;A.utc=function(a){var i={date:a,utc:!0,args:arguments};return new C(i)},r.utc=function(a){var i=A(this.toDate(),{locale:this.$L,utc:!0});return a?i.add(this.utcOffset(),g):i},r.local=function(){return A(this.toDate(),{locale:this.$L,utc:!1})};var p=r.parse;r.parse=function(a){a.utc&&(this.$u=!0),this.$utils().u(a.$offset)||(this.$offset=a.$offset),p.call(this,a)};var k=r.init;r.init=function(){if(this.$u){var a=this.$d;this.$y=a.getUTCFullYear(),this.$M=a.getUTCMonth(),this.$D=a.getUTCDate(),this.$W=a.getUTCDay(),this.$H=a.getUTCHours(),this.$m=a.getUTCMinutes(),this.$s=a.getUTCSeconds(),this.$ms=a.getUTCMilliseconds()}else k.call(this)};var M=r.utcOffset;r.utcOffset=function(a,i){var T=this.$utils().u;if(T(a))return this.$u?0:T(this.$offset)?M.call(this):this.$offset;if(typeof a=="string"&&(a=function(u){u===void 0&&(u="");var f=u.match(l);if(!f)return null;var c=(""+f[0]).match(P)||["-",0,0],d=c[0],m=60*+c[1]+ +c[2];return m===0?0:d==="+"?m:-m}(a),a===null))return this;var t=Math.abs(a)<=16?60*a:a,o=this;if(i)return o.$offset=t,o.$u=a===0,o;if(a!==0){var U=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(t+U,g)).$offset=t,o.$x.$localOffset=U}else o=this.utc();return o};var e=r.format;r.format=function(a){var i=a||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return e.call(this,i)},r.valueOf=function(){var a=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*a},r.isUTC=function(){return!!this.$u},r.toISOString=function(){return this.toDate().toISOString()},r.toString=function(){return this.toDate().toUTCString()};var s=r.toDate;r.toDate=function(a){return a==="s"&&this.$offset?A(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():s.call(this)};var n=r.diff;r.diff=function(a,i,T){if(a&&this.$u===a.$u)return n.call(this,a,i,T);var t=this.local(),o=A(a).local();return n.call(t,o,i,T)}}})})(D);const G=b;var y={},z={get exports(){return y},set exports(h){y=h}};(function(h,B){(function(g,l){h.exports=l()})($,function(){var g={year:0,month:1,day:2,hour:3,minute:4,second:5},l={};return function(P,E,C){var A,r=function(e,s,n){n===void 0&&(n={});var a=new Date(e),i=function(T,t){t===void 0&&(t={});var o=t.timeZoneName||"short",U=T+"|"+o,u=l[U];return u||(u=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:T,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:o}),l[U]=u),u}(s,n);return i.formatToParts(a)},p=function(e,s){for(var n=r(e,s),a=[],i=0;i<n.length;i+=1){var T=n[i],t=T.type,o=T.value,U=g[t];U>=0&&(a[U]=parseInt(o,10))}var u=a[3],f=u===24?0:u,c=a[0]+"-"+a[1]+"-"+a[2]+" "+f+":"+a[4]+":"+a[5]+":000",d=+e;return(C.utc(c).valueOf()-(d-=d%1e3))/6e4},k=E.prototype;k.tz=function(e,s){e===void 0&&(e=A);var n=this.utcOffset(),a=this.toDate(),i=a.toLocaleString("en-US",{timeZone:e}),T=Math.round((a-new Date(i))/1e3/60),t=C(i).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-T,!0);if(s){var o=t.utcOffset();t=t.add(n-o,"minute")}return t.$x.$timezone=e,t},k.offsetName=function(e){var s=this.$x.$timezone||C.tz.guess(),n=r(this.valueOf(),s,{timeZoneName:e}).find(function(a){return a.type.toLowerCase()==="timezonename"});return n&&n.value};var M=k.startOf;k.startOf=function(e,s){if(!this.$x||!this.$x.$timezone)return M.call(this,e,s);var n=C(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return M.call(n,e,s).tz(this.$x.$timezone,!0)},C.tz=function(e,s,n){var a=n&&s,i=n||s||A,T=p(+C(),i);if(typeof e!="string")return C(e).tz(i);var t=function(f,c,d){var m=f-60*c*1e3,v=p(m,d);if(c===v)return[m,c];var S=p(m-=60*(v-c)*1e3,d);return v===S?[m,v]:[f-60*Math.min(v,S)*1e3,Math.max(v,S)]}(C.utc(e,a).valueOf(),T,i),o=t[0],U=t[1],u=C(o).utcOffset(U);return u.$x.$timezone=i,u},C.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},C.tz.setDefault=function(e){A=e}}})})(z);const K=y,I={"Etc/GMT+12":"(UTC-12:00) 国际日期变更线西","Etc/GMT+11":"(UTC-11:00) 协调世界时-11","America/Adak":"(UTC-10:00) 阿留申群岛","Pacific/Honolulu":"(UTC-10:00) 夏威夷","Pacific/Marquesas":"(UTC-09:30) 马克萨斯群岛","America/Anchorage":"(UTC-09:00) 阿拉斯加","Etc/GMT+9":"(UTC-09:00) 协调世界时-09","America/Tijuana":"(UTC-08:00) 下加利福尼亚州","Etc/GMT+8":"(UTC-08:00) 协调世界时-08","America/Los_Angeles":"(UTC-08:00) 太平洋时间(美国和加拿大)","America/Phoenix":"(UTC-07:00) 亚利桑那","America/Chihuahua":"(UTC-07:00) 奇瓦瓦，拉巴斯，马萨特兰","America/Denver":"(UTC-07:00) 山地时间(美国和加拿大)","America/Whitehorse":"(UTC-07:00) 育空","America/Guatemala":"(UTC-06:00) 中美洲","America/Chicago":"(UTC-06:00) 中部时间(美国和加拿大)","Pacific/Easter":"(UTC-06:00) 复活节岛","America/Mexico_City":"(UTC-06:00) 瓜达拉哈拉，墨西哥城，蒙特雷","America/Regina":"(UTC-06:00) 萨斯喀彻温","America/Bogota":"(UTC-05:00) 波哥大，利马，基多，里奥布朗库","America/Cancun":"(UTC-05:00) 切图马尔","America/New_York":"(UTC-05:00) 东部时间(美国和加拿大)","America/Port-au-Prince":"(UTC-05:00) 海地","America/Havana":"(UTC-05:00) 哈瓦那","America/Indianapolis":"(UTC-05:00) 印地安那州(东部)","America/Grand_Turk":"(UTC-05:00) 特克斯和凯科斯群岛","America/Asuncion":"(UTC-04:00) 亚松森","America/Halifax":"(UTC-04:00) 大西洋时间(加拿大)","America/Caracas":"(UTC-04:00) 加拉加斯","America/Cuiaba":"(UTC-04:00) 库亚巴","America/La_Paz":"(UTC-04:00) 乔治敦，拉巴斯，马瑙斯，圣胡安","America/Santiago":"(UTC-04:00) 圣地亚哥","America/St_Johns":"(UTC-03:30) 纽芬兰","America/Araguaina":"(UTC-03:00) 阿拉瓜伊纳","America/Sao_Paulo":"(UTC-03:00) 巴西利亚","America/Cayenne":"(UTC-03:00) 卡宴，福塔雷萨","America/Buenos_Aires":"(UTC-03:00) 布宜诺斯艾利斯","America/Godthab":"(UTC-03:00) 格陵兰","America/Montevideo":"(UTC-03:00) 蒙得维的亚","America/Punta_Arenas":"(UTC-03:00) 蓬塔阿雷纳斯","America/Miquelon":"(UTC-03:00) 圣皮埃尔和密克隆群岛","America/Bahia":"(UTC-03:00) 萨尔瓦多","Etc/GMT+2":"(UTC-02:00) 协调世界时-02","Atlantic/Azores":"(UTC-01:00) 亚速尔群岛","Atlantic/Cape_Verde":"(UTC-01:00) 佛得角群岛","Etc/GMT":"(UTC) 协调世界时","Europe/London":"(UTC+00:00) 都柏林，爱丁堡，里斯本，伦敦","Atlantic/Reykjavik":"(UTC+00:00) 蒙罗维亚，雷克雅未克","Africa/Sao_Tome":"(UTC+00:00) 圣多美","Africa/Casablanca":"(UTC+01:00) 卡萨布兰卡","Europe/Berlin":"(UTC+01:00) 阿姆斯特丹，柏林，伯尔尼，罗马，斯德哥尔摩，维也纳","Europe/Budapest":"(UTC+01:00) 贝尔格莱德，布拉迪斯拉发，布达佩斯，卢布尔雅那，布拉格","Europe/Paris":"(UTC+01:00) 布鲁塞尔，哥本哈根，马德里，巴黎","Europe/Warsaw":"(UTC+01:00) 萨拉热窝，斯科普里，华沙，萨格勒布","Africa/Lagos":"(UTC+01:00) 中非西部","Asia/Amman":"(UTC+02:00) 安曼","Europe/Bucharest":"(UTC+02:00) 雅典，布加勒斯特","Asia/Beirut":"(UTC+02:00) 贝鲁特","Africa/Cairo":"(UTC+02:00) 开罗","Europe/Chisinau":"(UTC+02:00) 基希讷乌","Asia/Damascus":"(UTC+02:00) 大马士革","Asia/Hebron":"(UTC+02:00) 加沙，希伯伦","Africa/Johannesburg":"(UTC+02:00) 哈拉雷，比勒陀利亚","Europe/Kiev":"(UTC+02:00) 赫尔辛基，基辅，里加，索非亚，塔林，维尔纽斯","Asia/Jerusalem":"(UTC+02:00) 耶路撒冷","Europe/Kaliningrad":"(UTC+02:00) 加里宁格勒","Africa/Khartoum":"(UTC+02:00) 喀土穆","Africa/Tripoli":"(UTC+02:00) 的黎波里","Africa/Windhoek":"(UTC+02:00) 温得和克","Asia/Baghdad":"(UTC+03:00) 巴格达","Europe/Istanbul":"(UTC+03:00) 伊斯坦布尔","Asia/Riyadh":"(UTC+03:00) 科威特，利雅得","Europe/Minsk":"(UTC+03:00) 明斯克","Europe/Moscow":"(UTC+03:00) 莫斯科，圣彼得堡","Africa/Nairobi":"(UTC+03:00) 内罗毕","Europe/Volgograd":"(UTC+04:00) 伏尔加格勒","Asia/Tehran":"(UTC+03:30) 德黑兰","Asia/Dubai":"(UTC+04:00) 阿布扎比，马斯喀特","Europe/Astrakhan":"(UTC+04:00) 阿斯特拉罕，乌里扬诺夫斯克","Asia/Baku":"(UTC+04:00) 巴库","Europe/Samara":"(UTC+04:00) 伊热夫斯克，萨马拉","Indian/Mauritius":"(UTC+04:00) 路易港","Europe/Saratov":"(UTC+04:00) 萨拉托夫","Asia/Tbilisi":"(UTC+04:00) 第比利斯","Asia/Yerevan":"(UTC+04:00) 埃里温","Asia/Kabul":"(UTC+04:30) 喀布尔","Asia/Tashkent":"(UTC+05:00) 阿什哈巴德，塔什干","Asia/Yekaterinburg":"(UTC+05:00) 叶卡捷琳堡","Asia/Karachi":"(UTC+05:00) 伊斯兰堡，卡拉奇","Asia/Qyzylorda":"(UTC+05:00) 克孜洛尔达","Asia/Calcutta":"(UTC+05:30) 钦奈，加尔各答，孟买，新德里","Asia/Colombo":"(UTC+05:30) 斯里加亚渥登普拉","Asia/Katmandu":"(UTC+05:45) 加德满都","Asia/Almaty":"(UTC+06:00) 阿斯塔纳","Asia/Dhaka":"(UTC+06:00) 达卡","Asia/Omsk":"(UTC+06:00) 鄂木斯克","Asia/Rangoon":"(UTC+06:30) 仰光","Asia/Bangkok":"(UTC+07:00) 曼谷，河内，雅加达","Asia/Barnaul":"(UTC+07:00) 巴尔瑙尔，戈尔诺-阿尔泰斯克","Asia/Hovd":"(UTC+07:00) 科布多","Asia/Krasnoyarsk":"(UTC+07:00) 克拉斯诺亚尔斯克","Asia/Novosibirsk":"(UTC+07:00) 新西伯利亚","Asia/Tomsk":"(UTC+07:00) 托木斯克","Asia/Shanghai":"(UTC+08:00) 北京，重庆，香港特别行政区，乌鲁木齐","Asia/Irkutsk":"(UTC+08:00) 伊尔库茨克","Asia/Singapore":"(UTC+08:00) 吉隆坡，新加坡","Australia/Perth":"(UTC+08:00) 珀斯","Asia/Taipei":"(UTC+08:00) 台北","Asia/Ulaanbaatar":"(UTC+08:00) 乌兰巴托","Australia/Eucla":"(UTC+08:45) 尤克拉","Asia/Chita":"(UTC+09:00) 赤塔市","Asia/Tokyo":"(UTC+09:00) 大阪，札幌，东京","Asia/Pyongyang":"(UTC+09:00) 平壤","Asia/Seoul":"(UTC+09:00) 首尔","Asia/Yakutsk":"(UTC+09:00) 雅库茨克","Australia/Adelaide":"(UTC+09:30) 阿德莱德","Australia/Darwin":"(UTC+09:30) 达尔文","Australia/Brisbane":"(UTC+10:00) 布里斯班","Australia/Sydney":"(UTC+10:00) 堪培拉，墨尔本，悉尼","Pacific/Port_Moresby":"(UTC+10:00) 关岛，莫尔兹比港","Australia/Hobart":"(UTC+10:00) 霍巴特","Asia/Vladivostok":"(UTC+10:00) 符拉迪沃斯托克","Australia/Lord_Howe":"(UTC+10:30) 豪勋爵岛","Pacific/Bougainville":"(UTC+11:00) 布干维尔岛","Asia/Srednekolymsk":"(UTC+11:00) 乔库尔达赫","Asia/Magadan":"(UTC+11:00) 马加丹","Pacific/Norfolk":"(UTC+11:00) 诺福克岛","Asia/Sakhalin":"(UTC+11:00) 萨哈林","Pacific/Guadalcanal":"(UTC+11:00) 所罗门群岛，新喀里多尼亚","Asia/Kamchatka":"(UTC+12:00) 阿纳德尔，堪察加彼得罗巴甫洛夫斯克","Pacific/Auckland":"(UTC+12:00) 奥克兰，惠灵顿","Etc/GMT-12":"(UTC+12:00) 协调世界时+12","Pacific/Fiji":"(UTC+12:00) 斐济","Pacific/Chatham":"(UTC+12:45) 查塔姆群岛","Etc/GMT-13":"(UTC+13:00) 协调世界时+13","Pacific/Tongatapu":"(UTC+13:00) 努库阿洛法","Pacific/Apia":"(UTC+13:00) 萨摩亚群岛","Pacific/Kiritimati":"(UTC+14:00) 圣诞岛"},w={"Etc/GMT+12":"(UTC-12:00) International Date Line West","Etc/GMT+11":"(UTC-11:00) Coordinated Universal Time-11","America/Adak":"(UTC-10:00) Aleutian Islands","Pacific/Honolulu":"(UTC-10:00) Hawaii","Pacific/Marquesas":"(UTC-09:30) Marquesas Islands","America/Anchorage":"(UTC-09:00) Alaska","Etc/GMT+9":"(UTC-09:00) Coordinated Universal Time-09","America/Tijuana":"(UTC-08:00) Baja California","Etc/GMT+8":"(UTC-08:00) Coordinated Universal Time-08","America/Los_Angeles":"(UTC-08:00) Pacific Time (US & Canada)","America/Phoenix":"(UTC-07:00) Arizona","America/Chihuahua":"(UTC-07:00) Chihuahua, La Paz, Mazatlan","America/Denver":"(UTC-07:00) Mountain Time (US & Canada)","America/Whitehorse":"(UTC-07:00) Yukon","America/Guatemala":"(UTC-06:00) Central America","America/Chicago":"(UTC-06:00) Central Time (US & Canada)","Pacific/Easter":"(UTC-06:00) Easter Island","America/Mexico_City":"(UTC-06:00) Guadalajara, Mexico City, Monterrey","America/Regina":"(UTC-06:00) Saskatchewan","America/Bogota":"(UTC-05:00) Bogota, Lima, Quito, Rio Branco","America/Cancun":"(UTC-05:00) Chetumal","America/New_York":"(UTC-05:00) Eastern Time (US & Canada)","America/Port-au-Prince":"(UTC-05:00) Haiti","America/Havana":"(UTC-05:00) Havana","America/Indianapolis":"(UTC-05:00) Indiana (East)","America/Grand_Turk":"(UTC-05:00) Turks and Caicos","America/Asuncion":"(UTC-04:00) Asuncion","America/Halifax":"(UTC-04:00) Atlantic Time (Canada)","America/Caracas":"(UTC-04:00) Caracas","America/Cuiaba":"(UTC-04:00) Cuiaba","America/La_Paz":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan","America/Santiago":"(UTC-04:00) Santiago","America/St_Johns":"(UTC-03:30) Newfoundland","America/Araguaina":"(UTC-03:00) Araguaina","America/Sao_Paulo":"(UTC-03:00) Brasilia","America/Cayenne":"(UTC-03:00) Cayenne, Fortaleza","America/Buenos_Aires":"(UTC-03:00) City of Buenos Aires","America/Godthab":"(UTC-03:00) Greenland","America/Montevideo":"(UTC-03:00) Montevideo","America/Punta_Arenas":"(UTC-03:00) Punta Arenas","America/Miquelon":"(UTC-03:00) Saint Pierre and Miquelon","America/Bahia":"(UTC-03:00) Salvador","Etc/GMT+2":"(UTC-02:00) Coordinated Universal Time-02","Atlantic/Azores":"(UTC-01:00) Azores","Atlantic/Cape_Verde":"(UTC-01:00) Cabo Verde Is.","Etc/GMT":"(UTC) Coordinated Universal Time","Europe/London":"(UTC+00:00) Dublin, Edinburgh, Lisbon, London","Atlantic/Reykjavik":"(UTC+00:00) Monrovia, Reykjavik","Africa/Sao_Tome":"(UTC+00:00) Sao Tome","Africa/Casablanca":"(UTC+01:00) Casablanca","Europe/Berlin":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","Europe/Budapest":"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague","Europe/Paris":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris","Europe/Warsaw":"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb","Africa/Lagos":"(UTC+01:00) West Central Africa","Asia/Amman":"(UTC+02:00) Amman","Europe/Bucharest":"(UTC+02:00) Athens, Bucharest","Asia/Beirut":"(UTC+02:00) Beirut","Africa/Cairo":"(UTC+02:00) Cairo","Europe/Chisinau":"(UTC+02:00) Chisinau","Asia/Damascus":"(UTC+02:00) Damascus","Asia/Hebron":"(UTC+02:00) Gaza, Hebron","Africa/Johannesburg":"(UTC+02:00) Harare, Pretoria","Europe/Kiev":"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius","Asia/Jerusalem":"(UTC+02:00) Jerusalem","Europe/Kaliningrad":"(UTC+02:00) Kaliningrad","Africa/Khartoum":"(UTC+02:00) Khartoum","Africa/Tripoli":"(UTC+02:00) Tripoli","Africa/Windhoek":"(UTC+02:00) Windhoek","Asia/Baghdad":"(UTC+03:00) Baghdad","Europe/Istanbul":"(UTC+03:00) Istanbul","Asia/Riyadh":"(UTC+03:00) Kuwait, Riyadh","Europe/Minsk":"(UTC+03:00) Minsk","Europe/Moscow":"(UTC+03:00) Moscow, St. Petersburg","Africa/Nairobi":"(UTC+03:00) Nairobi","Europe/Volgograd":"(UTC+04:00) Volgograd","Asia/Tehran":"(UTC+03:30) Tehran","Asia/Dubai":"(UTC+04:00) Abu Dhabi, Muscat","Europe/Astrakhan":"(UTC+04:00) Astrakhan, Ulyanovsk","Asia/Baku":"(UTC+04:00) Baku","Europe/Samara":"(UTC+04:00) Izhevsk, Samara","Indian/Mauritius":"(UTC+04:00) Port Louis","Europe/Saratov":"(UTC+04:00) Saratov","Asia/Tbilisi":"(UTC+04:00) Tbilisi","Asia/Yerevan":"(UTC+04:00) Yerevan","Asia/Kabul":"(UTC+04:30) Kabul","Asia/Tashkent":"(UTC+05:00) Ashgabat, Tashkent","Asia/Yekaterinburg":"(UTC+05:00) Ekaterinburg","Asia/Karachi":"(UTC+05:00) Islamabad, Karachi","Asia/Qyzylorda":"(UTC+05:00) Qyzylorda","Asia/Calcutta":"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi","Asia/Colombo":"(UTC+05:30) Sri Jayawardenepura","Asia/Katmandu":"(UTC+05:45) Kathmandu","Asia/Almaty":"(UTC+06:00) Astana","Asia/Dhaka":"(UTC+06:00) Dhaka","Asia/Omsk":"(UTC+06:00) Omsk","Asia/Rangoon":"(UTC+06:30) Yangon (Rangoon)","Asia/Bangkok":"(UTC+07:00) Bangkok, Hanoi, Jakarta","Asia/Barnaul":"(UTC+07:00) Barnaul, Gorno-Altaysk","Asia/Hovd":"(UTC+07:00) Hovd","Asia/Krasnoyarsk":"(UTC+07:00) Krasnoyarsk","Asia/Novosibirsk":"(UTC+07:00) Novosibirsk","Asia/Tomsk":"(UTC+07:00) Tomsk","Asia/Shanghai":"(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi","Asia/Irkutsk":"(UTC+08:00) Irkutsk","Asia/Singapore":"(UTC+08:00) Kuala Lumpur, Singapore","Australia/Perth":"(UTC+08:00) Perth","Asia/Taipei":"(UTC+08:00) Taipei","Asia/Ulaanbaatar":"(UTC+08:00) Ulaanbaatar","Australia/Eucla":"(UTC+08:45) Eucla","Asia/Chita":"(UTC+09:00) Chita","Asia/Tokyo":"(UTC+09:00) Osaka, Sapporo, Tokyo","Asia/Pyongyang":"(UTC+09:00) Pyongyang","Asia/Seoul":"(UTC+09:00) Seoul","Asia/Yakutsk":"(UTC+09:00) Yakutsk","Australia/Adelaide":"(UTC+09:30) Adelaide","Australia/Darwin":"(UTC+09:30) Darwin","Australia/Brisbane":"(UTC+10:00) Brisbane","Australia/Sydney":"(UTC+10:00) Canberra, Melbourne, Sydney","Pacific/Port_Moresby":"(UTC+10:00) Guam, Port Moresby","Australia/Hobart":"(UTC+10:00) Hobart","Asia/Vladivostok":"(UTC+10:00) Vladivostok","Australia/Lord_Howe":"(UTC+10:30) Lord Howe Island","Pacific/Bougainville":"(UTC+11:00) Bougainville Island","Asia/Srednekolymsk":"(UTC+11:00) Chokurdakh","Asia/Magadan":"(UTC+11:00) Magadan","Pacific/Norfolk":"(UTC+11:00) Norfolk Island","Asia/Sakhalin":"(UTC+11:00) Sakhalin","Pacific/Guadalcanal":"(UTC+11:00) Solomon Is., New Caledonia","Asia/Kamchatka":"(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky","Pacific/Auckland":"(UTC+12:00) Auckland, Wellington","Etc/GMT-12":"(UTC+12:00) Coordinated Universal Time+12","Pacific/Fiji":"(UTC+12:00) Fiji","Pacific/Chatham":"(UTC+12:45) Chatham Islands","Etc/GMT-13":"(UTC+13:00) Coordinated Universal Time+13","Pacific/Tongatapu":"(UTC+13:00) Nuku'alofa","Pacific/Apia":"(UTC+13:00) Samoa","Pacific/Kiritimati":"(UTC+14:00) Kiritimati Island"};export{w as e,K as t,G as u,I as z};
