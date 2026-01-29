n.d(t, {
    DB: () => E,
    ZL: () => O,
    ln: () => T,
    t0: () => S,
}),
    n(896048),
    n(492834);
var a = n(64700),
    l = n(873298),
    r = n(631670),
    i = n(817281),
    s = n(955572),
    o = n(775602),
    c = n(4227),
    d = n(993408),
    u = n(919395),
    m = n(587600),
    p = n(836602),
    h = n(544028),
    x = n(253932),
    g = n(594061),
    f = n(287809),
    b = n(927578),
    v = n(652215),
    j = n(385803),
    _ = n(381941);
let y = [v.NJ8.DARK, v.NJ8.LIGHT, v.NJ8.DARKER, v.NJ8.MIDNIGHT],
    A = [l.NS.COMPACT, l.NS.COZY, l.NS.DEFAULT];

function C(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function S() {
    let e,
        t =
            ((e = f.default.getCurrentUser()),
            b.Ay.canUseClientThemes(e) ? Object.keys(j.ag).map((e) => Number(e)) : []),
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
            await i.u_(
                {
                    theme: e,
                    backgroundGradientPresetId: null != l ? l : void 0,
                    customUserThemeSettings: void 0,
                },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = C(y);
            await i.u_(
                {
                    theme: e,
                    backgroundGradientPresetId: void 0,
                    customUserThemeSettings: void 0,
                },
                g.Sb.INFREQUENT_USER_ACTION,
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
            let e = p.A.getPendingChanges(),
                i = (0, m.Sk)(e);
            await (0, r.yu)(i).finally(r.pZ);
        } catch (e) {}
}

function T() {
    try {
        let e = C(v.hH7.FONT_SIZES);
        (0, s.XS)(e);
        let t = C(_.qh);
        (0, s.AC)(t);
        let n = C(A);
        x.Xi.updateSetting(n);
    } catch (e) {}
}

function E() {
    a.useEffect(() => {
        var e, t, n, a, l;
        let b = f.default.getCurrentUser(),
            v = x.eh.getSetting(),
            j = c.A.purchases,
            _ = (0, d.x9)(j),
            y = (0, d.$W)(j),
            A = h.A.theme,
            C = v.backgroundGradientPresetId,
            S = null == b || null == (n = b.avatarDecoration) ? void 0 : n.skuId,
            O = null == b || null == (l = b.collectibles) || null == (a = l.nameplate) ? void 0 : a.skuId,
            T = null != S && null != (e = _.find((e) => e.skuId === S)) ? e : null,
            E = null != O && null != (t = y.find((e) => e.skuId === O)) ? t : null,
            N = o.A.fontSize,
            w = o.A.messageGroupSpacing,
            I = x.Xi.getSetting();
        return () => {
            try {
                i.u_(
                    {
                        theme: A,
                        backgroundGradientPresetId: null != C ? C : void 0,
                        customUserThemeSettings: void 0,
                    },
                    g.Sb.INFREQUENT_USER_ACTION,
                ),
                    (0, u.Dx)(T),
                    (0, u.pX)(E);
                let e = p.A.getPendingChanges(),
                    t = (0, m.Sk)(e);
                (0, r.yu)(t).finally(r.pZ), (0, s.XS)(N), (0, s.AC)(w), x.Xi.updateSetting(I);
            } catch (e) {}
        };
    }, []);
}
