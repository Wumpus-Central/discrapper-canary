var i = n(582128);
let r = new Set(),
    a = new Set(),
    s = [];
function l() {
    for (let e of ((s = Array.from(r)), a)) e();
}
function o() {
    return s;
}
n.d(
    t,
    {},
    {
        $d: function (e) {
            let t = !1;
            for (let n of e) r.has(n) || (r.add(n), (t = !0));
            t && l();
        },
        HZ: function (e) {
            i.useLayoutEffect(() => {
                null != e && (r.has(e) || (r.add(e), l()));
            }, [e]);
        },
        Hc: function () {
            let [e, t] = i.useState(o);
            return (
                i.useLayoutEffect(() => {
                    var e;
                    return (
                        (e = () => t(o())),
                        a.add(e),
                        () => {
                            a.delete(e);
                        }
                    );
                }, []),
                e
            );
        },
    },
);
