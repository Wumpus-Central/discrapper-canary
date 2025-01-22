n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(2052),
    o = n(594174),
    c = n(74538),
    d = n(716161),
    u = n(634041),
    m = n(647177),
    g = n(672339),
    h = n(898531),
    p = n(636188),
    x = n(678916),
    f = n(981631),
    E = n(869783),
    _ = n(388032),
    C = n(858495);
function T(e) {
    let { onLearnMore: t, selectedBackgroundOption: T, onSelectBackgroundOption: S, currentDeviceId: b, smallerBackgroundOptions: I, className: N } = e,
        v = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
        [A, j] = r.useState(null),
        O = (0, h.Z)(),
        R = c.ZP.canUseCustomBackgrounds(v),
        P = (0, s.cj)([u.Z], () => (R ? u.Z.videoFilterAssets : {})),
        D = r.useMemo(() => Object.values(P).filter((e) => e.type === x.xV.BACKGROUND), [P]),
        y = (0, l.O)(),
        B = {
            isVideoBackgroundSupported: O,
            onSelectBackgroundOption: S,
            selectedBackgroundOption: T
        },
        Z = r.useRef(B);
    r.useEffect(() => {
        Z.current = B;
    }),
        r.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: n } = Z.current;
            e ? (0, g.FU)(n, b, { track: !1 }).catch(() => t(null)) : null != n && t(null);
        }, [b]);
    let L = (e) => {
        S(e),
            (0, g.FU)(e, b, { location: y.location })
                .then(() => j(null))
                .catch(() => {
                    j(_.intl.string(_.t.ejrSLS)), (0, g.FU)(null, b, { location: y.location });
                });
    };
    return O
        ? (0, i.jsxs)(a.FormItem, {
              title: _.intl.string(_.t.lZTUPj),
              className: N,
              children: [
                  null != A
                      ? (0, i.jsx)(a.FormErrorBlock, {
                            className: C.videoBackgroundError,
                            children: A
                        })
                      : null,
                  (0, i.jsx)(p.Z, {
                      canUseCustomBackgrounds: R,
                      customBackgroundOptions: D,
                      selectedOption: T,
                      onSelectOption: L,
                      onUpsellClick: () => {
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await n.e('87200').then(n.bind(n, 592163));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      onLearnMore: t,
                                      analyticsSource: {
                                          ...y.location,
                                          object: f.qAy.BUTTON_CTA
                                      }
                                  });
                          });
                      },
                      onAddBackgroundImage: function (e, t) {
                          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (i) => {
                              try {
                                  let i = await (0, d.Ff)(e, x.xV.BACKGROUND);
                                  L(i), (0, m.g5)(i, t.type === E.m.MP4, n), j(null);
                              } catch (e) {
                                  j(e.message);
                              }
                              i();
                          });
                      },
                      smallerOptions: I
                  })
              ]
          })
        : null;
}
