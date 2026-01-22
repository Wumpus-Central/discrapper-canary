n.d(t, {
    A: () => l,
}),
    n(896048);
var r = n(64700),
    i = n(635377),
    a = n.n(i),
    s = n(306044);
let o = new (a())({
    max: 1e3,
});

function l(e, t) {
    let [n, i] = r.useState();
    return (
        r.useEffect(() => {
            if (null == e || null != t) return void i(void 0);
            let n = o.get(e);
            if (null != n) return void i(n);
            let r = !1;
            return (
                (0, s.A)()
                    .then((t) => {
                        null == t ||
                            r ||
                            t.identifyGame(e, (t, n) => {
                                if (r) return;
                                if (0 !== t || null == n.icon || "" === n.icon || null == n.name || "" === n.name)
                                    return void i(void 0);
                                let a = "data:image/png;base64,".concat(n.icon);
                                o.set(e, a), i(a);
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
        null != t ? t : n
    );
}
