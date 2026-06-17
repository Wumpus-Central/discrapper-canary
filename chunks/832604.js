"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(635377),
    s = n.n(r),
    a = n(306044);
let o = new (s())({ max: 1e3 });
function l(e, t) {
    let [n, r] = i.useState();
    return (
        i.useEffect(() => {
            if (null == e || null != t) return void r(void 0);
            let n = o.get(e);
            if (null != n) return void r(n);
            let i = !1;
            return (
                (0, a.A)()
                    .then((t) => {
                        null == t ||
                            i ||
                            t.identifyGame(e, (t, n) => {
                                if (i) return;
                                if (0 !== t || null == n.icon || "" === n.icon || null == n.name || "" === n.name)
                                    return void r(void 0);
                                let s = `data:image/png;base64,${n.icon}`;
                                o.set(e, s), r(s);
                            });
                    })
                    .catch(() => {
                        i || r(void 0);
                    }),
                () => {
                    i = !0;
                }
            );
        }, [e, t]),
        t ?? n
    );
}
