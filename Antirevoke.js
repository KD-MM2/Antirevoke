var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:8021";

var antirevoke = ["ppq",
		"mesu",
		"ocsp",
		"world-gen"
		"gdmf"];

function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  for(var i = 0; i < antirevoke.length; i++){
    var copyright = antirevoke[i];
    if(shExpMatch(host, "*" + copyright + "*")){
      return PROXY;
    }
  }

  return DIRECT;
}