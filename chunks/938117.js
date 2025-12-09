n.d(t, { Z: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(2052),
    l = n(594174),
    c = n(74538),
    u = n(716161),
    d = n(634041),
    f = n(647177),
    p = n(672339),
    _ = n(898531),
    m = n(636188),
    h = n(678916),
    g = n(981631),
    E = n(869783),
    b = n(388032);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: y,
            onSelectBackgroundOption: v,
            currentDeviceId: I,
            responsiveBackgroundOptions: T,
            className: A,
        } = e,
        C = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
        [N, P] = i.useState(null),
        R = (0, _.Z)(),
        D = c.ZP.canUseCustomBackgrounds(C);
    i.useEffect(() => {
        (0, u.XV)();
    }, []);
    let w = (0, a.cj)([d.Z], () => (D ? d.Z.videoFilterAssets : {})),
        x = i.useMemo(() => Object.values(w).filter((e) => e.type === h.xV.BACKGROUND), [w]),
        L = (0, s.O)(),
        j = {
            isVideoBackgroundSupported: R,
            onSelectBackgroundOption: v,
            selectedBackgroundOption: y,
        },
        M = i.useRef(j);
    i.useEffect(() => {
        M.current = j;
    }),
        i.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: n } = M.current;
            e ? (0, p.FU)(n, I, { track: !1 }).catch(() => t(null)) : null != n && t(null);
        }, [I]);
    let k = function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return new Promise(async (r) => {
                try {
                    let r = await (0, u.Ff)(e, h.xV.BACKGROUND);
                    U(r), (0, f.g5)(r, t.type === E.m.MP4, n), P(null);
                } catch (e) {
                    P(e.message);
                }
                r();
            });
        },
        U = (e) => {
            v(e),
                (0, p.FU)(e, I, { location: L.location })
                    .then(() => P(null))
                    .catch(() => {
                        P(b.intl.string(b.t.ejrSLe)), (0, p.FU)(null, I, { location: L.location });
                    });
        },
        G = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e("87200").then(n.bind(n, 592163));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        S(O({}, n), {
                            onLearnMore: t,
                            analyticsSource: S(O({}, L.location), { object: g.qAy.BUTTON_CTA }),
                        }),
                    );
            });
        };
    return R
        ? (0, r.jsx)("div", {
              className: A,
              children: (0, r.jsx)(o.gNt, {
                  label: b.intl.string(b.t.lZTUPs),
                  errorMessage: N,
                  children: (0, r.jsx)(m.Z, {
                      canUseCustomBackgrounds: D,
                      customBackgroundOptions: x,
                      selectedOption: y,
                      onSelectOption: U,
                      onUpsellClick: G,
                      onAddBackgroundImage: k,
                      responsive: T,
                  }),
              }),
          })
        : null;
}
