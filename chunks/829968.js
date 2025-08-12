n.d(t, { Z: () => o }), n(388685);
var r = n(73800),
    i = n(439849);
function o(e, t) {
    let [n, o] = r.useState();
    return (
        r.useEffect(() => {
            if (null == e || null != t) return void o(void 0);
            let n = !1;
            return (
                (0, i.Z)()
                    .then((t) => {
                        null == t ||
                            n ||
                            t.identifyGame(e, (e, t) => {
                                if (!n) {
                                    if (0 !== e || null == t.icon || "" === t.icon || null == t.name || "" === t.name)
                                        return void o(void 0);
                                    o("data:image/png;base64,".concat(t.icon));
                                }
                            });
                    })
                    .catch(() => {
                        n || o(void 0);
                    }),
                () => {
                    n = !0;
                }
            );
        }, [e, t]),
        null != t ? t : n
    );
}
