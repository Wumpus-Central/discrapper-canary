n.d(t, { M: () => S }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(554146),
    o = n(506774),
    l = n(397927),
    c = n(73153),
    u = n(817281),
    d = n(47671),
    f = n(826673),
    p = n(379848),
    _ = n(544028),
    h = n(961350),
    m = n(927813),
    g = n(661191),
    E = n(559868),
    b = n(49999),
    y = n(818348);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
let v = 1000;
function S() {
    let [e, t] = i.useState(!1),
        O = (0, l.Ry6)(E.lb),
        S = i.useMemo(() => [s.M.DESKTOP_REFRESH_ONBOARDING_MODAL], []),
        [I, T] = (0, p.kn)(S),
        C = I === s.M.DESKTOP_REFRESH_ONBOARDING_MODAL,
        N = (0, a.bG)([h.default], () => h.default.getId());
    i.useLayoutEffect(() => {
        null != N && g.default.age(N) < m.A.Millis.DAY && (0, f.Dr)(s.M.DESKTOP_REFRESH_ONBOARDING_MODAL);
        let e = "desktop_refresh_theme_migration_key",
            t = "true" === o.w.get(e);
        !C ||
            t ||
            _.A.theme !== y.NJ.DARK ||
            null != d.A.gradientPreset ||
            t ||
            (o.w.set(e, "true"), (0, u.u_)({ theme: y.NJ.DARKER }));
    }, [C, N]),
        i.useLayoutEffect(() => {
            function e() {
                t(!0);
            }
            return (
                c.h.subscribe("CHANGE_LOG_RESOLVED", e),
                () => {
                    c.h.unsubscribe("CHANGE_LOG_RESOLVED", e);
                }
            );
        }, []);
    let R = i.useCallback(() => {
        (0, l.mMO)(
            async () => {
                let { DesktopRefreshOnboardingModal: e } = await n.e("33638").then(n.bind(n, 887781));
                return (t) => (0, r.jsx)(e, A({}, t));
            },
            {
                backdropStyle: l.F2Z.TOP_RADIAL,
                onCloseCallback: () => {
                    T(b.i.USER_DISMISS);
                },
            },
        );
    }, [T]);
    i.useEffect(() => {
        if (C && !O && e) {
            let e = setTimeout(() => {
                R();
            }, v);
            return () => clearTimeout(e);
        }
    }, [e, O, C, R]);
}
