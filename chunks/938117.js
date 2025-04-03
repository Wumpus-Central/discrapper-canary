n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(2052),
    o = n(594174),
    c = n(74538),
    d = n(716161),
    u = n(634041),
    m = n(647177),
    g = n(672339),
    p = n(898531),
    h = n(636188),
    f = n(678916),
    b = n(981631),
    N = n(869783),
    x = n(388032),
    _ = n(635968);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { onLearnMore: t, selectedBackgroundOption: O, onSelectBackgroundOption: C, currentDeviceId: S, smallerBackgroundOptions: v, className: T } = e,
        I = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
        [y, A] = i.useState(null),
        P = (0, p.Z)(),
        R = c.ZP.canUseCustomBackgrounds(I);
    i.useEffect(() => {
        (0, d.XV)();
    }, []);
    let D = (0, s.cj)([u.Z], () => (R ? u.Z.videoFilterAssets : {})),
        Z = i.useMemo(() => Object.values(D).filter((e) => e.type === f.xV.BACKGROUND), [D]),
        w = (0, l.O)(),
        k = {
            isVideoBackgroundSupported: P,
            onSelectBackgroundOption: C,
            selectedBackgroundOption: O
        },
        W = i.useRef(k);
    i.useEffect(() => {
        W.current = k;
    }),
        i.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: n } = W.current;
            e ? (0, g.FU)(n, S, { track: !1 }).catch(() => t(null)) : null != n && t(null);
        }, [S]);
    let L = (e) => {
        C(e),
            (0, g.FU)(e, S, { location: w.location })
                .then(() => A(null))
                .catch(() => {
                    A(x.NW.string(x.t.ejrSLS)), (0, g.FU)(null, S, { location: w.location });
                });
    };
    return P
        ? (0, r.jsxs)(a.xJW, {
              title: x.NW.string(x.t.lZTUPj),
              className: T,
              children: [
                  null != y
                      ? (0, r.jsx)(a.kzN, {
                            className: _.videoBackgroundError,
                            children: y
                        })
                      : null,
                  (0, r.jsx)(h.Z, {
                      canUseCustomBackgrounds: R,
                      customBackgroundOptions: Z,
                      selectedOption: O,
                      onSelectOption: L,
                      onUpsellClick: () => {
                          (0, a.ZDy)(async () => {
                              let { default: e } = await n.e('87200').then(n.bind(n, 592163));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      j(E({}, n), {
                                          onLearnMore: t,
                                          analyticsSource: j(E({}, w.location), { object: b.qAy.BUTTON_CTA })
                                      })
                                  );
                          });
                      },
                      onAddBackgroundImage: function (e, t) {
                          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (r) => {
                              try {
                                  let r = await (0, d.Ff)(e, f.xV.BACKGROUND);
                                  L(r), (0, m.g5)(r, t.type === N.m.MP4, n), A(null);
                              } catch (e) {
                                  A(e.message);
                              }
                              r();
                          });
                      },
                      smallerOptions: v
                  })
              ]
          })
        : null;
}
