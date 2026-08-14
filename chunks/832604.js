t.d(n, { A: () => c });
var r = t(582128),
    l = t(635377),
    s = t.n(l),
    u = t(306044);
let a = new (s())({ max: 1e3 });
function c(e, n) {
    let [t, l] = r.useState();
    return (
        r.useEffect(() => {
            if (null == e || null != n) return void l(void 0);
            let t = a.get(e);
            if (null != t) return void l(t);
            let r = !1;
            return (
                (0, u.A)()
                    .then((n) => {
                        null == n ||
                            r ||
                            n.identifyGame(e, (n, t) => {
                                if (r) return;
                                if (0 !== n || null == t.icon || "" === t.icon || null == t.name || "" === t.name)
                                    return void l(void 0);
                                let s = `data:image/png;base64,${t.icon}`;
                                a.set(e, s), l(s);
                            });
                    })
                    .catch(() => {
                        r || l(void 0);
                    }),
                () => {
                    r = !0;
                }
            );
        }, [e, n]),
        n ?? t
    );
}
