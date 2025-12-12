n.d(t, {
    PQ: () => p,
    ZP: () => h,
    e3: () => f.e3,
});
var r = n(473749),
    i = n(120356),
    a = n.n(i),
    o = n(392711),
    s = n(442837),
    l = n(210887),
    c = n(581883),
    u = n(233398),
    d = n(514361),
    f = n(639745);
let p = "data-client-themes",
    _ = () => {
        let e = (0, s.e7)([d.Z], () => d.Z.gradientPreset);
        return r.useMemo(() => {
            if (null == e) return null;
            let t = d.Z.getLinearGradient();
            return null == t ? null : (0, f.yf)(e, t);
        }, [e]);
    };
function m() {
    let e = (0, s.e7)([l.Z], () => l.Z.theme),
        { colors: t, chassisMixAmount: n, gradientAngle: i, setAll: a } = (0, u.Ig)(),
        d = (0, s.e7)([c.Z], () => {
            var e, t;
            return null == (t = c.Z.settings.appearance) || null == (e = t.clientThemeSettings)
                ? void 0
                : e.customUserThemeSettings;
        }),
        p = r.useRef(void 0);
    return (
        r.useEffect(() => {
            if (!(0, o.isEqual)(d, p.current)) {
                var e, t, n;
                (p.current = d),
                    a({
                        colors: null != (e = null == d ? void 0 : d.colors) ? e : [],
                        gradientAngle: null != (t = null == d ? void 0 : d.gradientAngle) ? t : 0,
                        chassisMixAmount: null != (n = null == d ? void 0 : d.baseMix) ? n : u.BH,
                    });
            }
        }, [d, a]),
        r.useMemo(() => (0 === t.length ? null : (0, f.gj)(t, i, n, e)), [t, n, i, e])
    );
}
function h() {
    let e = _(),
        t = m();
    return null != t
        ? {
              clientThemesCSS: t,
              clientThemesClassName: a()(f.e3, f.pX),
          }
        : null === e
          ? {
                clientThemesCSS: "",
                clientThemesClassName: "",
            }
          : {
                clientThemesCSS: e,
                clientThemesClassName: f.e3,
            };
}
