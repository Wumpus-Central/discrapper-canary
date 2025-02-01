n.d(t, { Z: () => r });
var i = /\s/;
let r = function (e) {
    for (var t = e.length; t-- && i.test(e.charAt(t)); );
    return t;
};
