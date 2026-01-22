n.d(t, {
    A: () => o,
});
var a = n(627968),
    l = n(64700),
    i = n(735438),
    r = n(182592),
    s = n(517286);
let o = (e) => {
    let { config: t } = e,
        n = l.useMemo(() => (0, i.cloneDeep)(t), [t]),
        o = l.useMemo(() => t.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0), [t]),
        c = l.useMemo(() => {
            if (o) {
                var e;
                let a =
                    1 ===
                    (e = n.effects.reduce((e, t) => {
                        var n;
                        let a = 1 + (null != (n = t.randomizedSources) ? n : []).length;
                        return a > 1 ? (1 === e ? a : Math.min(a, e)) : e;
                    }, 1))
                        ? -1
                        : Math.floor(Math.random() * e);
                a > 0 &&
                    t.effects.forEach((e, t) => {
                        null != e.randomizedSources &&
                            e.randomizedSources.length > 0 &&
                            (n.effects[t].src = e.randomizedSources[a - 1].src);
                    });
            }
            return n;
        }, [t.effects, n, o]),
        { layerData: d } = (0, s.A)(
            {
                config: c,
                skuId: "debug",
            },
            !0,
        );
    return (0, a.jsx)(r.p, {
        profileEffectConfig: c,
        layerData: d,
        skuId: "debug",
    });
};
