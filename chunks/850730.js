n.d(t, { DB: () => N, ZL: () => S, ln: () => E, t0: () => T });
var a = n(64700),
    i = n(873298),
    l = n(631670),
    s = n(817281),
    r = n(955572),
    o = n(775602),
    d = n(4227),
    c = n(993408),
    u = n(587600),
    m = n(84540),
    h = n(836602),
    x = n(544028),
    p = n(253932),
    g = n(594061),
    _ = n(287809),
    f = n(927578),
    v = n(652215),
    b = n(385803),
    j = n(381941);
let A = [v.NJ8.DARK, v.NJ8.LIGHT, v.NJ8.DARKER, v.NJ8.MIDNIGHT],
    C = [i.NS.COMPACT, i.NS.COZY, i.NS.DEFAULT];
function y(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function T() {
    let e,
        t =
            ((e = _.default.getCurrentUser()),
            f.Ay.canUseClientThemes(e) ? Object.keys(b.ag).map((e) => Number(e)) : []),
        n = t.length > 0 && Math.random() > 0.7;
    try {
        if (n) {
            let e,
                n = [...t, null],
                a = y(n);
            if (null != a) {
                let t = b.ag[a];
                e = t?.theme ?? v.NJ8.DARK;
            } else e = y([v.NJ8.DARK, v.NJ8.DARKER, v.NJ8.MIDNIGHT]);
            await s.u_(
                { theme: e, backgroundGradientPresetId: a ?? void 0, customUserThemeSettings: void 0 },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = y(A);
            await s.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function S() {
    let e = d.A.purchases,
        t = (0, c.x9)(e),
        n = (0, c.$W)(e),
        a = t.length > 0,
        i = n.length > 0;
    if (a || i)
        try {
            let e = {};
            a && (e.avatarDecoration = y([...t, null])), i && (e.nameplate = y([...n, null])), (0, m.p)(e);
            let s = h.A.getPendingChanges(),
                r = (0, u.Sk)(s);
            await (0, l._L)(r).finally(l.pZ);
        } catch (e) {}
}
function E() {
    try {
        let e = y(v.hH7.FONT_SIZES);
        (0, r.XS)(e);
        let t = y(j.qh);
        (0, r.AC)(t);
        let n = y(C);
        p.Xi.updateSetting(n);
    } catch (e) {}
}
function N() {
    a.useEffect(() => {
        let e = _.default.getCurrentUser(),
            t = p.eh.getSetting(),
            n = d.A.purchases,
            a = (0, c.x9)(n),
            i = (0, c.$W)(n),
            f = x.A.theme,
            v = t.backgroundGradientPresetId,
            b = e?.avatarDecoration?.skuId,
            j = e?.collectibles?.nameplate?.skuId,
            A = null != b ? (a.find((e) => e.skuId === b) ?? null) : null,
            C = null != j ? (i.find((e) => e.skuId === j) ?? null) : null,
            y = o.A.fontSize,
            T = o.A.messageGroupSpacing,
            S = p.Xi.getSetting();
        return () => {
            try {
                s.u_(
                    { theme: f, backgroundGradientPresetId: v ?? void 0, customUserThemeSettings: void 0 },
                    g.Sb.INFREQUENT_USER_ACTION,
                ),
                    (0, m.p)({ avatarDecoration: A, nameplate: C });
                let e = h.A.getPendingChanges(),
                    t = (0, u.Sk)(e);
                (0, l._L)(t).finally(l.pZ), (0, r.XS)(y), (0, r.AC)(T), p.Xi.updateSetting(S);
            } catch (e) {}
        };
    }, []);
}
