"use strict";
r.d(t, { A: () => a });
var n = r(464117),
    o = r(842922);
let a = function (e) {
    if (!(0, o.A)(e)) return !1;
    var t = (0, n.A)(e);
    return (
        "[object Function]" == t ||
        "[object GeneratorFunction]" == t ||
        "[object AsyncFunction]" == t ||
        "[object Proxy]" == t
    );
};
