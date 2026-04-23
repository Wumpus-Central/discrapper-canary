"use strict";
r.d(t, { A: () => o });
var n = /\s/;
let o = function (e) {
    for (var t = e.length; t-- && n.test(e.charAt(t)); );
    return t;
};
