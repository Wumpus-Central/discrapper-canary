n.d(t, { Z: () => i });
var r = /\s/;
let i = function (e) {
    for (var t = e.length; t-- && r.test(e.charAt(t)); );
    return t;
};
