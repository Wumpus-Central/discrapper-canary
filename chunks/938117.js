n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(2052),
    o = n(594174),
    c = n(74538),
    d = n(716161),
    u = n(634041),
    m = n(647177),
    g = n(672339),
    h = n(898531),
    x = n(636188),
    _ = n(678916),
    p = n(981631),
    E = n(869783),
    C = n(388032),
    f = n(858495);
function T(e) {
    let { onLearnMore: t, selectedBackgroundOption: T, onSelectBackgroundOption: N, currentDeviceId: I, smallerBackgroundOptions: S, className: b } = e,
        v = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        [j, A] = s.useState(null),
        O = (0, h.Z)(),
        R = c.ZP.canUseCustomBackgrounds(v),
        P = (0, r.cj)([u.Z], () => (R ? u.Z.videoFilterAssets : {})),
        D = s.useMemo(() => Object.values(P).filter((e) => e.type === _.xV.BACKGROUND), [P]),
        y = (0, a.O)(),
        Z = {
            isVideoBackgroundSupported: O,
            onSelectBackgroundOption: N,
            selectedBackgroundOption: T
        },
        k = s.useRef(Z);
    s.useEffect(() => {
        k.current = Z;
    }),
        s.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: n } = k.current;
            e ? (0, g.FU)(n, I, { track: !1 }).catch(() => t(null)) : null != n && t(null);
        }, [I]);
    let L = (e) => {
        N(e),
            (0, g.FU)(e, I, { location: y.location })
                .then(() => A(null))
                .catch(() => {
                    A(C.intl.string(C.t.ejrSLS)), (0, g.FU)(null, I, { location: y.location });
                });
    };
    return O
        ? (0, i.jsxs)(l.xJW, {
              title: C.intl.string(C.t.lZTUPj),
              className: b,
              children: [
                  null != j
                      ? (0, i.jsx)(l.kzN, {
                            className: f.videoBackgroundError,
                            children: j
                        })
                      : null,
                  (0, i.jsx)(x.Z, {
                      canUseCustomBackgrounds: R,
                      customBackgroundOptions: D,
                      selectedOption: T,
                      onSelectOption: L,
                      onUpsellClick: () => {
                          (0, l.ZDy)(async () => {
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
                                  L(i), (0, m.g5)(i, t.type === E.m.MP4, n), A(null);
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
