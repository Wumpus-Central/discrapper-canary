"use strict";
r.d(t, { A: () => a });
var n = r(842922),
    o = Object.create;
let a = (function () {
    function e() {}
    return function (t) {
        if (!(0, n.A)(t)) return {};
        if (o) return o(t);
        e.prototype = t;
        var r = new e();
        return (e.prototype = void 0), r;
    };
})();
