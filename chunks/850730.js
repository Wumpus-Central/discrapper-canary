a.d(t, { DB: () => k, ZL: () => S, ln: () => N, t0: () => E });
var n = a(64700),
    l = a(873298),
    i = a(631670),
    s = a(817281),
    r = a(955572),
    o = a(775602),
    d = a(4227),
    c = a(993408),
    u = a(587600),
    m = a(84540),
    h = a(836602),
    p = a(544028),
    x = a(253932),
    g = a(594061),
    v = a(287809),
    b = a(927578),
    _ = a(652215),
    f = a(385803),
    j = a(381941);
let A = [_.NJ8.DARK, _.NJ8.LIGHT, _.NJ8.DARKER, _.NJ8.MIDNIGHT],
    y = [l.NS.COMPACT, l.NS.COZY, l.NS.DEFAULT];
function C(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function E() {
    let e,
        t =
            ((e = v.default.getCurrentUser()),
            b.Ay.canUseClientThemes(e) ? Object.keys(f.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = C(a);
            if (null != n) {
                let t = f.ag[n];
                e = t?.theme ?? _.NJ8.DARK;
            } else e = C([_.NJ8.DARK, _.NJ8.DARKER, _.NJ8.MIDNIGHT]);
            await s.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                g.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = C(A);
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
        a = (0, c.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            n && (e.avatarDecoration = C([...t, null])), l && (e.nameplate = C([...a, null])), (0, m.p)(e);
            let s = h.A.getPendingChanges(),
                r = (0, u.Sk)(s);
            await (0, i._L)(r).finally(i.pZ);
        } catch (e) {}
}
function N() {
    try {
        let e = C(_.hH7.FONT_SIZES);
        (0, r.XS)(e);
        let t = C(j.qh);
        (0, r.AC)(t);
        let a = C(y);
        x.Xi.updateSetting(a);
    } catch (e) {}
}
function k() {
    n.useEffect(() => {
        let e = v.default.getCurrentUser(),
            t = x.eh.getSetting(),
            a = d.A.purchases,
            n = (0, c.x9)(a),
            l = (0, c.$W)(a),
            b = p.A.theme,
            _ = t.backgroundGradientPresetId,
            f = e?.avatarDecoration?.skuId,
            j = e?.collectibles?.nameplate?.skuId,
            A = null != f ? (n.find((e) => e.skuId === f) ?? null) : null,
            y = null != j ? (l.find((e) => e.skuId === j) ?? null) : null,
            C = o.A.fontSize,
            E = o.A.messageGroupSpacing,
            S = x.Xi.getSetting();
        return () => {
            try {
                s.u_(
                    { theme: b, backgroundGradientPresetId: _ ?? void 0, customUserThemeSettings: void 0 },
                    g.Sb.INFREQUENT_USER_ACTION,
                ),
                    (0, m.p)({ avatarDecoration: A, nameplate: y });
                let e = h.A.getPendingChanges(),
                    t = (0, u.Sk)(e);
                (0, i._L)(t).finally(i.pZ), (0, r.XS)(C), (0, r.AC)(E), x.Xi.updateSetting(S);
            } catch (e) {}
        };
    }, []);
}
