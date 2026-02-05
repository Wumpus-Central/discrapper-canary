"use strict";
n.d(t, { w: () => d }), n(321073);
var l = n(64700),
    i = n(735438),
    s = n(724442),
    a = n(998218),
    r = n(36491),
    o = n(304162);
function d(e, t, n) {
    let d = l.useRef(new Map()),
        [, c] = l.useState(null),
        [u, m] = l.useState(null),
        h = l.useMemo(
            () =>
                i.debounce((e, n) => {
                    if (null == n || e || 0 === t) return;
                    let l = n.match(a.A.URL_REGEX);
                    if (null == l || 0 === l.length) {
                        (d.current = new Map()), m(null);
                        return;
                    }
                    m(i.uniq(l).slice(0, o.A8));
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
                    i = t.filter((e) => !l?.has(e));
                if (0 !== i.length)
                    try {
                        var s, a, o;
                        let t = await r.L4(i);
                        (s = new Map(n)),
                            (a = i),
                            (o = t?.embeds),
                            o?.forEach((e) => {
                                var t, n;
                                let l = ((t = a), (n = e), t.find((e) => n?.url != null && e.startsWith(n.url)));
                                if (null == l) return;
                                let i = s.get(l);
                                null == i ? s.set(l, [e]) : i.push(e);
                            }),
                            (e.current = s),
                            c({});
                    } catch (e) {}
            })(d, u);
        }, [u]);
    let x = (0, s.A)(d),
        g = l.useMemo(() => {
            let e = [];
            return (
                u?.forEach((t) => {
                    let n = x.get(t);
                    null != n && e.push(...n);
                }),
                e.length > 0 ? e : null
            );
        }, [u, x]);
    return { embeds: e ? null : g };
}
