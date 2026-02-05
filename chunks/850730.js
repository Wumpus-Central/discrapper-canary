n.d(t, { DB: () => E, ZL: () => y, ln: () => N, t0: () => T });
var a = n(64700),
    s = n(873298),
    i = n(631670),
    l = n(817281),
    r = n(955572),
    o = n(775602),
    d = n(4227),
    c = n(993408),
    u = n(919395),
    m = n(587600),
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
    C = [s.NS.COMPACT, s.NS.COZY, s.NS.DEFAULT];
function S(e) {
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
                a = S(n);
            if (null != a) {
                let t = b.ag[a];
                e = t?.theme ?? v.NJ8.DARK;
            } else e = S([v.NJ8.DARK, v.NJ8.DARKER, v.NJ8.MIDNIGHT]);
            await l.u_(
                { theme: e, backgroundGradientPresetId: a ?? void 0, customUserThemeSettings: void 0 },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = S(A);
            await l.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function y() {
    let e = d.A.purchases,
        t = (0, c.x9)(e),
        n = (0, c.$W)(e),
        a = t.length > 0,
        s = n.length > 0;
    if (a || s)
        try {
            if (a) {
                let e = S([...t, null]);
                (0, u.Dx)(e);
            }
            if (s) {
                let e = S([...n, null]);
                (0, u.pX)(e);
            }
            let e = h.A.getPendingChanges(),
                l = (0, m.Sk)(e);
            await (0, i.yu)(l).finally(i.pZ);
        } catch (e) {}
}
function N() {
    try {
        let e = S(v.hH7.FONT_SIZES);
        (0, r.XS)(e);
        let t = S(j.qh);
        (0, r.AC)(t);
        let n = S(C);
        p.Xi.updateSetting(n);
    } catch (e) {}
}
function E() {
    a.useEffect(() => {
        let e = _.default.getCurrentUser(),
            t = p.eh.getSetting(),
            n = d.A.purchases,
            a = (0, c.x9)(n),
            s = (0, c.$W)(n),
            f = x.A.theme,
            v = t.backgroundGradientPresetId,
            b = e?.avatarDecoration?.skuId,
            j = e?.collectibles?.nameplate?.skuId,
            A = null != b ? (a.find((e) => e.skuId === b) ?? null) : null,
            C = null != j ? (s.find((e) => e.skuId === j) ?? null) : null,
            S = o.A.fontSize,
            T = o.A.messageGroupSpacing,
            y = p.Xi.getSetting();
        return () => {
            try {
                l.u_(
                    { theme: f, backgroundGradientPresetId: v ?? void 0, customUserThemeSettings: void 0 },
                    g.Sb.INFREQUENT_USER_ACTION,
                ),
                    (0, u.Dx)(A),
                    (0, u.pX)(C);
                let e = h.A.getPendingChanges(),
                    t = (0, m.Sk)(e);
                (0, i.yu)(t).finally(i.pZ), (0, r.XS)(S), (0, r.AC)(T), p.Xi.updateSetting(y);
            } catch (e) {}
        };
    }, []);
}
