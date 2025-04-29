n.d(t, { Z: () => O }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(481060),
    a = n(2052),
    o = n(594174),
    c = n(74538),
    d = n(716161),
    u = n(634041),
    m = n(647177),
    p = n(672339),
    g = n(898531),
    h = n(636188),
    f = n(678916),
    b = n(981631),
    _ = n(869783),
    x = n(388032),
    E = n(635968);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { onLearnMore: t, selectedBackgroundOption: O, onSelectBackgroundOption: S, currentDeviceId: v, smallerBackgroundOptions: T, className: N } = e,
        I = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
        [y, A] = r.useState(null),
        P = (0, g.Z)(),
        R = c.ZP.canUseCustomBackgrounds(I);
    r.useEffect(() => {
        (0, d.XV)();
    }, []);
    let D = (0, s.cj)([u.Z], () => (R ? u.Z.videoFilterAssets : {})),
        Z = r.useMemo(() => Object.values(D).filter((e) => e.type === f.xV.BACKGROUND), [D]),
        w = (0, a.O)(),
        k = {
            isVideoBackgroundSupported: P,
            onSelectBackgroundOption: S,
            selectedBackgroundOption: O
        },
        L = r.useRef(k);
    r.useEffect(() => {
        L.current = k;
    }),
        r.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: n } = L.current;
            e ? (0, p.FU)(n, v, { track: !1 }).catch(() => t(null)) : null != n && t(null);
        }, [v]);
    let M = (e) => {
        S(e),
            (0, p.FU)(e, v, { location: w.location })
                .then(() => A(null))
                .catch(() => {
                    A(x.intl.string(x.t.ejrSLS)), (0, p.FU)(null, v, { location: w.location });
                });
    };
    return P
        ? (0, i.jsxs)(l.xJW, {
              title: x.intl.string(x.t.lZTUPj),
              className: N,
              children: [
                  null != y
                      ? (0, i.jsx)(l.kzN, {
                            className: E.videoBackgroundError,
                            children: y
                        })
                      : null,
                  (0, i.jsx)(h.Z, {
                      canUseCustomBackgrounds: R,
                      customBackgroundOptions: Z,
                      selectedOption: O,
                      onSelectOption: M,
                      onUpsellClick: () => {
                          (0, l.ZDy)(async () => {
                              let { default: e } = await n.e('87200').then(n.bind(n, 592163));
                              return (n) =>
                                  (0, i.jsx)(
                                      e,
                                      C(j({}, n), {
                                          onLearnMore: t,
                                          analyticsSource: C(j({}, w.location), { object: b.qAy.BUTTON_CTA })
                                      })
                                  );
                          });
                      },
                      onAddBackgroundImage: function (e, t) {
                          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (i) => {
                              try {
                                  let i = await (0, d.Ff)(e, f.xV.BACKGROUND);
                                  M(i), (0, m.g5)(i, t.type === _.m.MP4, n), A(null);
                              } catch (e) {
                                  A(e.message);
                              }
                              i();
                          });
                      },
                      smallerOptions: T
                  })
              ]
          })
        : null;
}
