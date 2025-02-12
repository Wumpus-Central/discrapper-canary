n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(2052),
    o = n(594174),
    c = n(74538),
    d = n(716161),
    u = n(634041),
    h = n(647177),
    m = n(672339),
    g = n(898531),
    x = n(636188),
    _ = n(678916),
    p = n(981631),
    E = n(869783),
    C = n(388032),
    f = n(870589);
function N(e) {
    let { onLearnMore: t, selectedBackgroundOption: N, onSelectBackgroundOption: I, currentDeviceId: T, smallerBackgroundOptions: S, className: j } = e,
        v = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        [b, A] = s.useState(null),
        O = (0, g.Z)(),
        R = c.ZP.canUseCustomBackgrounds(v),
        D = (0, l.cj)([u.Z], () => (R ? u.Z.videoFilterAssets : {})),
        P = s.useMemo(() => Object.values(D).filter((e) => e.type === _.xV.BACKGROUND), [D]),
        y = (0, a.O)(),
        Z = {
            isVideoBackgroundSupported: O,
            onSelectBackgroundOption: I,
            selectedBackgroundOption: N
        },
        L = s.useRef(Z);
    s.useEffect(() => {
        L.current = Z;
    }),
        s.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: n } = L.current;
            e ? (0, m.FU)(n, T, { track: !1 }).catch(() => t(null)) : null != n && t(null);
        }, [T]);
    let k = (e) => {
        I(e),
            (0, m.FU)(e, T, { location: y.location })
                .then(() => A(null))
                .catch(() => {
                    A(C.intl.string(C.t.ejrSLS)), (0, m.FU)(null, T, { location: y.location });
                });
    };
    return O
        ? (0, i.jsxs)(r.xJW, {
              title: C.intl.string(C.t.lZTUPj),
              className: j,
              children: [
                  null != b
                      ? (0, i.jsx)(r.kzN, {
                            className: f.videoBackgroundError,
                            children: b
                        })
                      : null,
                  (0, i.jsx)(x.Z, {
                      canUseCustomBackgrounds: R,
                      customBackgroundOptions: P,
                      selectedOption: N,
                      onSelectOption: k,
                      onUpsellClick: () => {
                          (0, r.ZDy)(async () => {
                              let { default: e } = await n.e('87200').then(n.bind(n, 592163));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      onLearnMore: t,
                                      analyticsSource: {
                                          ...y.location,
                                          object: p.qAy.BUTTON_CTA
                                      }
                                  });
                          });
                      },
                      onAddBackgroundImage: function (e, t) {
                          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (i) => {
                              try {
                                  let i = await (0, d.Ff)(e, _.xV.BACKGROUND);
                                  k(i), (0, h.g5)(i, t.type === E.m.MP4, n), A(null);
                              } catch (e) {
                                  A(e.message);
                              }
                              i();
                          });
                      },
                      smallerOptions: S
                  })
              ]
          })
        : null;
}
