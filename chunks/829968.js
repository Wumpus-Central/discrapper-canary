n.d(t, { Z: () => l }), n(388685);
var r = n(473749),
    i = n(31775),
    a = n.n(i),
    o = n(439849);
let s = new (a())({ max: 1000 });
function l(e, t) {
    let [n, i] = r.useState();
    return (
        r.useEffect(() => {
            if (null == e || null != t) return void i(void 0);
            let n = s.get(e);
            if (null != n) return void i(n);
            let r = !1;
            return (
                (0, o.Z)()
                    .then((t) => {
                        null == t ||
                            r ||
                            t.identifyGame(e, (t, n) => {
                                if (r) return;
                                if (0 !== t || null == n.icon || "" === n.icon || null == n.name || "" === n.name)
                                    return void i(void 0);
                                let a = "data:image/png;base64,".concat(n.icon);
                                s.set(e, a), i(a);
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
