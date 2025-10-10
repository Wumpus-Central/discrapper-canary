n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
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
    b = n(388032),
    y = n(104544);
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
function v(e) {
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
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: O,
            onSelectBackgroundOption: I,
            currentDeviceId: S,
            smallerBackgroundOptions: A,
            className: C,
        } = e,
        N = (0, a.e7)([l.default], () => l.default.getCurrentUser()),
        [R, P] = i.useState(null),
        w = (0, p.Z)(),
        D = c.ZP.canUseCustomBackgrounds(N);
    i.useEffect(() => {
        (0, u.XV)();
    }, []);
    let L = (0, a.cj)([d.Z], () => (D ? d.Z.videoFilterAssets : {})),
        x = i.useMemo(() => Object.values(L).filter((e) => e.type === m.xV.BACKGROUND), [L]),
        M = (0, s.O)(),
        j = {
            isVideoBackgroundSupported: w,
            onSelectBackgroundOption: I,
            selectedBackgroundOption: O,
        },
        k = i.useRef(j);
    i.useEffect(() => {
        k.current = j;
    }),
        i.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: n } = k.current;
            e ? (0, _.FU)(n, S, { track: !1 }).catch(() => t(null)) : null != n && t(null);
        }, [S]);
    let U = function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return new Promise(async (r) => {
                try {
                    let r = await (0, u.Ff)(e, m.xV.BACKGROUND);
                    G(r), (0, f.g5)(r, t.type === E.m.MP4, n), P(null);
                } catch (e) {
                    P(e.message);
                }
                r();
            });
        },
        G = (e) => {
            I(e),
                (0, _.FU)(e, S, { location: M.location })
                    .then(() => P(null))
                    .catch(() => {
                        P(b.intl.string(b.t.ejrSLS)), (0, _.FU)(null, S, { location: M.location });
                    });
        },
        B = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e("87200").then(n.bind(n, 592163));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        T(v({}, n), {
                            onLearnMore: t,
                            analyticsSource: T(v({}, M.location), { object: g.qAy.BUTTON_CTA }),
                        }),
                    );
            });
        };
    return w
        ? (0, r.jsxs)(o.xJW, {
              title: b.intl.string(b.t.lZTUPj),
              className: C,
              children: [
                  null != R
                      ? (0, r.jsx)(o.kzN, {
                            className: y.videoBackgroundError,
                            children: R,
                        })
                      : null,
                  (0, r.jsx)(h.Z, {
                      canUseCustomBackgrounds: D,
                      customBackgroundOptions: x,
                      selectedOption: O,
                      onSelectOption: G,
                      onUpsellClick: B,
                      onAddBackgroundImage: U,
                      smallerOptions: A,
                  }),
              ],
          })
        : null;
}
