n.d(t, { w: () => o }), n(747238), n(896048), n(321073);
var l = n(64700),
    r = n(735438),
    a = n(724442),
    i = n(998218),
    s = n(36491),
    c = n(304162);
function o(e, t, n) {
    let o = l.useRef(new Map()),
        [, d] = l.useState(null),
        [u, m] = l.useState(null),
        h = l.useMemo(
            () =>
                r.debounce((e, n) => {
                    if (null == n || e || 0 === t) return;
                    let l = n.match(i.A.URL_REGEX);
                    if (null == l || 0 === l.length) {
                        (o.current = new Map()), m(null);
                        return;
                    }
                    m(r.uniq(l).slice(0, c.A8));
                }, 1000),
            [t, o, m],
        );
    l.useEffect(() => {
        h(e, n);
    }, [h, n, e]),
        l.useEffect(() => {
            !(async function (e, t) {
                if (null == t) return;
                let n = e.current,
                    l = new Set(n.keys()),
                    r = t.filter((e) => !(null == l ? void 0 : l.has(e)));
                if (0 !== r.length)
                    try {
                        var a, i, c;
                        let t = await s.L4(r);
                        (a = new Map(n)),
                            (i = r),
                            (c = null == t ? void 0 : t.embeds),
                            null == c ||
                                c.forEach((e) => {
                                    var t, n;
                                    let l =
                                        ((t = i),
                                        (n = e),
                                        t.find((e) => (null == n ? void 0 : n.url) != null && e.startsWith(n.url)));
                                    if (null == l) return;
                                    let r = a.get(l);
                                    null == r ? a.set(l, [e]) : r.push(e);
                                }),
                            (e.current = a),
                            d({});
                    } catch (e) {}
            })(o, u);
        }, [u]);
    let f = (0, a.A)(o),
        g = l.useMemo(() => {
            let e = [];
            return (
                null == u ||
                    u.forEach((t) => {
                        let n = f.get(t);
                        null != n && e.push(...n);
                    }),
                e.length > 0 ? e : null
            );
        }, [u, f]);
    return { embeds: e ? null : g };
}
