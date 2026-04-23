"use strict";
i.d(t, { A: () => o });
var n = i(64700),
    l = i(635377),
    r = i.n(l),
    a = i(306044);
let s = new (r())({ max: 1e3 });
function o(e, t) {
    let [i, l] = n.useState();
    return (
        n.useEffect(() => {
            if (null == e || null != t) return void l(void 0);
            let i = s.get(e);
            if (null != i) return void l(i);
            let n = !1;
            return (
                (0, a.A)()
                    .then((t) => {
                        null == t ||
                            n ||
                            t.identifyGame(e, (t, i) => {
                                if (n) return;
                                if (0 !== t || null == i.icon || "" === i.icon || null == i.name || "" === i.name)
                                    return void l(void 0);
                                let r = `data:image/png;base64,${i.icon}`;
                                s.set(e, r), l(r);
                            });
                    })
                    .catch(() => {
                        n || l(void 0);
                    }),
                () => {
                    n = !0;
                }
            );
        }, [e, t]),
        t ?? i
    );
}
