n.d(t, {
    PQ: () => _,
    ZP: () => g,
    e3: () => p.e3,
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
    f = n(803038),
    p = n(639745);
let _ = "data-client-themes",
    m = () => {
        let e = (0, s.e7)([d.Z], () => d.Z.gradientPreset);
        return r.useMemo(() => {
            if (null == e) return null;
            let t = d.Z.getLinearGradient();
            return null == t ? null : (0, p.yf)(e, t);
        }, [e]);
    };
function h() {
    let e = f.Mc.useExperiment({ location: "RootThemeContextProvider" }).enabled,
        t = (0, s.e7)([l.Z], () => l.Z.theme),
        { colors: n, chassisMixAmount: i, gradientAngle: a, setAll: d } = (0, u.Ig)(),
        _ = (0, s.e7)([c.Z], () => {
            var e, t;
            return null == (t = c.Z.settings.appearance) || null == (e = t.clientThemeSettings)
                ? void 0
                : e.customUserThemeSettings;
        }),
        m = r.useRef(void 0);
    return (
        r.useEffect(() => {
            if (!(0, o.isEqual)(_, m.current)) {
                var e, t, n;
                (m.current = _),
                    d({
                        colors: null != (e = null == _ ? void 0 : _.colors) ? e : [],
                        gradientAngle: null != (t = null == _ ? void 0 : _.gradientAngle) ? t : 0,
                        chassisMixAmount: null != (n = null == _ ? void 0 : _.baseMix) ? n : u.BH,
                    });
            }
        }, [_, d]),
        r.useMemo(() => (e && 0 !== n.length ? (0, p.gj)(n, a, i, t) : null), [n, i, a, e, t])
    );
}
function g() {
    let e = m(),
        t = h();
    return null != t
        ? {
              clientThemesCSS: t,
              clientThemesClassName: a()(p.e3, p.pX),
          }
        : null === e
          ? {
                clientThemesCSS: "",
                clientThemesClassName: "",
            }
          : {
                clientThemesCSS: e,
                clientThemesClassName: p.e3,
            };
}
