"use strict";
n.d(t, { w: () => d }), n(321073);
var l = n(64700),
    a = n(735438),
    s = n(724442),
    i = n(998218),
    r = n(36491),
    o = n(304162);
function d(e, t, n) {
    let d = l.useRef(new Map()),
        [, c] = l.useState(null),
        [u, m] = l.useState(null),
        h = l.useMemo(
            () =>
                a.debounce((e, n) => {
                    if (null == n || e || 0 === t) return;
                    let l = n.match(i.A.URL_REGEX);
                    if (null == l || 0 === l.length) {
                        (d.current = new Map()), m(null);
                        return;
                    }
                    m(a.uniq(l).slice(0, o.A8));
                }, 1e3),
            [t, d, m],
        );
    l.useEffect(() => {
        h(e, n);
    }, [h, n, e]),
        l.useEffect(() => {
            !(async function (e, t) {
                if (null == t) return;
                let n = e.current,
                    l = new Set(n.keys()),
                    a = t.filter((e) => !l?.has(e));
                if (0 !== a.length)
                    try {
                        var s, i, o;
                        let t = await r.L4(a);
                        (s = new Map(n)),
                            (i = a),
                            (o = t?.embeds),
                            o?.forEach((e) => {
                                var t, n;
                                let l = ((t = i), (n = e), t.find((e) => n?.url != null && e.startsWith(n.url)));
                                if (null == l) return;
                                let a = s.get(l);
                                null == a ? s.set(l, [e]) : a.push(e);
                            }),
                            (e.current = s),
                            c({});
                    } catch (e) {}
            })(d, u);
        }, [u]);
    let g = (0, s.A)(d),
        x = l.useMemo(() => {
            let e = [];
            return (
                u?.forEach((t) => {
                    let n = g.get(t);
                    null != n && e.push(...n);
                }),
                e.length > 0 ? e : null
            );
        }, [u, g]);
    return { embeds: e ? null : x };
}
