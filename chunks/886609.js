t.a(e, async function (e, r) {
    try {
        t.d(n, {
            d: () => u,
        });
        var l = t(627968),
            c = t(64700),
            a = t(840521),
            i = t(78377),
            s = t(302031),
            o = e([a]);

        function u(e) {
            let { children: n, node: t } = e,
                r = c.useMemo(() => Array.from((0, a.t)([t])).some((e) => "link" === e.type), [t]),
                o = (0, i.p)();
            return (
                c.useEffect(() => {
                    var e;
                    null == o || null == (e = o.setHasSpoilerEmbeds) || e.call(o, r);
                }, [o, r]),
                (0, l.jsx)(s.Ay, {
                    type: s.Ay.Types.TEXT,
                    children: () => n,
                })
            );
        }
        (a = (o.then ? (await o)() : o)[0]), r();
    } catch (e) {
        r(e);
    }
});
