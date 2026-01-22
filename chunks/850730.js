n.d(t, {
    DB: () => N,
    ZL: () => O,
    ln: () => E,
    t0: () => S,
}),
    n(896048),
    n(492834);
var a = n(64700),
    l = n(873298),
    i = n(631670),
    r = n(817281),
    s = n(955572),
    o = n(775602),
    c = n(4227),
    d = n(993408),
    u = n(919395),
    m = n(587600),
    p = n(544028),
    h = n(253932),
    f = n(594061),
    x = n(752319),
    b = n(287809),
    g = n(927578),
    v = n(652215),
    j = n(385803),
    y = n(381941);
let _ = [v.NJ8.DARK, v.NJ8.LIGHT, v.NJ8.DARKER, v.NJ8.MIDNIGHT],
    A = [l.NS.COMPACT, l.NS.COZY, l.NS.DEFAULT];

function C(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function S() {
    let e,
        t =
            ((e = b.default.getCurrentUser()),
            g.Ay.canUseClientThemes(e) ? Object.keys(j.ag).map((e) => Number(e)) : []),
        n = t.length > 0 && Math.random() > 0.7;
    try {
        if (n) {
            let e,
                n = [...t, null],
                l = C(n);
            if (null != l) {
                var a;
                let t = j.ag[l];
                e = null != (a = null == t ? void 0 : t.theme) ? a : v.NJ8.DARK;
            } else e = C([v.NJ8.DARK, v.NJ8.DARKER, v.NJ8.MIDNIGHT]);
            await r.u_(
                {
                    theme: e,
                    backgroundGradientPresetId: null != l ? l : void 0,
                    customUserThemeSettings: void 0,
                },
                f.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = C(_);
            await r.u_(
                {
                    theme: e,
                    backgroundGradientPresetId: void 0,
                    customUserThemeSettings: void 0,
                },
                f.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function O() {
    let e = c.A.purchases,
        t = (0, d.x9)(e),
        n = (0, d.$W)(e),
        a = t.length > 0,
        l = n.length > 0;
    if (a || l)
        try {
            if (a) {
                let e = C([...t, null]);
                (0, u.Dx)(e);
            }
            if (l) {
                let e = C([...n, null]);
                (0, u.pX)(e);
            }
            let e = x.A.getAllPending(),
                r = (0, m.Sk)(e);
            await (0, i.yu)(r).finally(i.pZ);
        } catch (e) {}
}

function E() {
    try {
        let e = C(v.hH7.FONT_SIZES);
        (0, s.XS)(e);
        let t = C(y.qh);
        (0, s.AC)(t);
        let n = C(A);
        h.Xi.updateSetting(n);
    } catch (e) {}
}

function N() {
    a.useEffect(() => {
        var e, t, n, a, l;
        let g = b.default.getCurrentUser(),
            v = h.eh.getSetting(),
            j = c.A.purchases,
            y = (0, d.x9)(j),
            _ = (0, d.$W)(j),
            A = p.A.theme,
            C = v.backgroundGradientPresetId,
            S = null == g || null == (n = g.avatarDecoration) ? void 0 : n.skuId,
            O = null == g || null == (l = g.collectibles) || null == (a = l.nameplate) ? void 0 : a.skuId,
            E = null != S && null != (e = y.find((e) => e.skuId === S)) ? e : null,
            N = null != O && null != (t = _.find((e) => e.skuId === O)) ? t : null,
            T = o.A.fontSize,
            I = o.A.messageGroupSpacing,
            w = h.Xi.getSetting();
        return () => {
            try {
                r.u_(
                    {
                        theme: A,
                        backgroundGradientPresetId: null != C ? C : void 0,
                        customUserThemeSettings: void 0,
                    },
                    f.Sb.INFREQUENT_USER_ACTION,
                ),
                    (0, u.Dx)(E),
                    (0, u.pX)(N);
                let e = x.A.getAllPending(),
                    t = (0, m.Sk)(e);
                (0, i.yu)(t).finally(i.pZ), (0, s.XS)(T), (0, s.AC)(I), h.Xi.updateSetting(w);
            } catch (e) {}
        };
    }, []);
}
