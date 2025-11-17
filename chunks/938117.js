n.d(t, { Z: () => T }), n(388685);
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
    _ = n(672339),
    p = n(898531),
    h = n(636188),
    m = n(678916),
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
function I(e, t) {
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
function T(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: y,
            onSelectBackgroundOption: v,
            currentDeviceId: T,
            smallerBackgroundOptions: S,
            className: A,
        } = e,
        C = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
        [N, R] = i.useState(null),
        P = (0, p.Z)(),
        D = c.ZP.canUseCustomBackgrounds(C);
    i.useEffect(() => {
        (0, u.XV)();
    }, []);
    let w = (0, a.cj)([d.Z], () => (D ? d.Z.videoFilterAssets : {})),
        x = i.useMemo(() => Object.values(w).filter((e) => e.type === m.xV.BACKGROUND), [w]),
        L = (0, s.O)(),
        M = {
            isVideoBackgroundSupported: P,
            onSelectBackgroundOption: v,
            selectedBackgroundOption: y,
        },
        k = i.useRef(M);
    i.useEffect(() => {
        k.current = M;
    }),
        i.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: n } = k.current;
            e ? (0, _.FU)(n, T, { track: !1 }).catch(() => t(null)) : null != n && t(null);
        }, [T]);
    let j = function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return new Promise(async (r) => {
                try {
                    let r = await (0, u.Ff)(e, m.xV.BACKGROUND);
                    U(r), (0, f.g5)(r, t.type === E.m.MP4, n), R(null);
                } catch (e) {
                    R(e.message);
                }
                r();
            });
        },
        U = (e) => {
            v(e),
                (0, _.FU)(e, T, { location: L.location })
                    .then(() => R(null))
                    .catch(() => {
                        R(b.intl.string(b.t.ejrSLe)), (0, _.FU)(null, T, { location: L.location });
                    });
        },
        G = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e("87200").then(n.bind(n, 592163));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        I(O({}, n), {
                            onLearnMore: t,
                            analyticsSource: I(O({}, L.location), { object: g.qAy.BUTTON_CTA }),
                        }),
                    );
            });
        };
    return P
        ? (0, r.jsx)("div", {
              className: A,
              children: (0, r.jsx)(o.gNt, {
                  label: b.intl.string(b.t.lZTUPs),
                  errorMessage: N,
                  children: (0, r.jsx)(h.Z, {
                      canUseCustomBackgrounds: D,
                      customBackgroundOptions: x,
                      selectedOption: y,
                      onSelectOption: U,
                      onUpsellClick: G,
                      onAddBackgroundImage: j,
                      smallerOptions: S,
                  }),
              }),
          })
        : null;
}
