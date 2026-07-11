"use strict";
n.d(t, { $d: () => o, HZ: () => u, Hc: () => c });
var i = n(64700);
let r = new Set(),
    a = new Set(),
    s = [];
function l() {
    for (let e of ((s = Array.from(r)), a)) e();
}
function o(e) {
    let t = !1;
    for (let n of e) r.has(n) || (r.add(n), (t = !0));
    t && l();
}
function d() {
    return s;
}
function c() {
    let [e, t] = i.useState(d);
    return (
        i.useLayoutEffect(() => {
            var e;
            return (
                (e = () => t(d())),
                a.add(e),
                () => {
                    a.delete(e);
                }
            );
        }, []),
        e
    );
}
function u(e) {
    i.useLayoutEffect(() => {
        null != e && (r.has(e) || (r.add(e), l()));
    }, [e]);
}
