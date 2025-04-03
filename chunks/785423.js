r.d(t, { Z: () => o });
var n = /\s/;
let o = function (e) {
    for (var t = e.length; t-- && n.test(e.charAt(t)); );
    return t;
};
