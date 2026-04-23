"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(635377),
    s = n.n(i),
    a = n(306044);
let o = new (s())({ max: 1e3 });
function l(e, t) {
    let [n, i] = r.useState();
    return (
        r.useEffect(() => {
            if (null == e || null != t) return void i(void 0);
            let n = o.get(e);
            if (null != n) return void i(n);
            let r = !1;
            return (
                (0, a.A)()
                    .then((t) => {
                        null == t ||
                            r ||
                            t.identifyGame(e, (t, n) => {
                                if (r) return;
                                if (0 !== t || null == n.icon || "" === n.icon || null == n.name || "" === n.name)
                                    return void i(void 0);
                                let s = `data:image/png;base64,${n.icon}`;
                                o.set(e, s), i(s);
                            });
                    })
                    .catch(() => {
                        r || i(void 0);
                    }),
                () => {
                    r = !0;
                }
            );
        }, [e, t]),
        t ?? n
    );
}
