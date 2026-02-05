"use strict";
r.d(t, { A: () => a });
var n = r(84162),
    o = r(842922);
let a = function (e, t, r) {
    var a = !0,
        i = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    return (
        (0, o.A)(r) && ((a = "leading" in r ? !!r.leading : a), (i = "trailing" in r ? !!r.trailing : i)),
        (0, n.A)(e, t, { leading: a, maxWait: t, trailing: i })
    );
};
