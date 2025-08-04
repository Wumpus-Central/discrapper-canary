(n.d(t, { Z: () => O }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(481060),
    l = n(2052),
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
    x = n(869783),
    _ = n(388032),
    j = n(635968);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function E(e, t) {
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
    let { onLearnMore: t, selectedBackgroundOption: O, onSelectBackgroundOption: v, currentDeviceId: S, smallerBackgroundOptions: T, className: N } = e,
        I = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
        [y, A] = r.useState(null),
        P = (0, g.Z)(),
        R = c.ZP.canUseCustomBackgrounds(I);
    r.useEffect(() => {
        (0, d.XV)();
    }, []);
    let D = (0, s.cj)([u.Z], () => (R ? u.Z.videoFilterAssets : {})),
        Z = r.useMemo(() => Object.values(D).filter((e) => e.type === f.xV.BACKGROUND), [D]),
        w = (0, l.O)(),
        k = {
            isVideoBackgroundSupported: P,
            onSelectBackgroundOption: v,
            selectedBackgroundOption: O
        },
        L = r.useRef(k);
    (r.useEffect(() => {
        L.current = k;
    }),
        r.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: n } = L.current;
            e ? (0, p.FU)(n, S, { track: !1 }).catch(() => t(null)) : null != n && t(null);
        }, [S]));
    let B = (e) => {
        (v(e),
            (0, p.FU)(e, S, { location: w.location })
                .then(() => A(null))
                .catch(() => {
                    (A(_.intl.string(_.t.ejrSLS)), (0, p.FU)(null, S, { location: w.location }));
                }));
    };
    return P
        ? (0, i.jsxs)(a.xJW, {
              title: _.intl.string(_.t.lZTUPj),
              className: N,
              children: [
                  null != y
                      ? (0, i.jsx)(a.kzN, {
                            className: j.videoBackgroundError,
                            children: y
                        })
                      : null,
                  (0, i.jsx)(h.Z, {
                      canUseCustomBackgrounds: R,
                      customBackgroundOptions: Z,
                      selectedOption: O,
                      onSelectOption: B,
                      onUpsellClick: () => {
                          (0, a.ZDy)(async () => {
                              let { default: e } = await n.e('87200').then(n.bind(n, 592163));
                              return (n) =>
                                  (0, i.jsx)(
                                      e,
                                      E(C({}, n), {
                                          onLearnMore: t,
                                          analyticsSource: E(C({}, w.location), { object: b.qAy.BUTTON_CTA })
                                      })
                                  );
                          });
                      },
                      onAddBackgroundImage: function (e, t) {
                          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (i) => {
                              try {
                                  let i = await (0, d.Ff)(e, f.xV.BACKGROUND);
                                  (B(i), (0, m.g5)(i, t.type === x.m.MP4, n), A(null));
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
