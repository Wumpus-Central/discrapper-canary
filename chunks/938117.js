t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(47120);
var s = t(200651),
    l = t(192379),
    o = t(442837),
    a = t(481060),
    i = t(2052),
    r = t(594174),
    c = t(74538),
    d = t(716161),
    u = t(634041),
    g = t(647177),
    m = t(672339),
    p = t(898531),
    x = t(636188),
    k = t(678916),
    O = t(981631),
    j = t(869783),
    h = t(388032),
    I = t(858495);
function N(e) {
    let { onLearnMore: n, selectedBackgroundOption: N, onSelectBackgroundOption: f, currentDeviceId: v, smallerBackgroundOptions: T } = e,
        _ = (0, o.e7)([r.default], () => r.default.getCurrentUser()),
        [b, C] = l.useState(null),
        E = (0, p.Z)(),
        S = c.ZP.canUseCustomBackgrounds(_),
        B = (0, o.cj)([u.Z], () => (S ? u.Z.videoFilterAssets : {})),
        U = l.useMemo(() => Object.values(B).filter((e) => e.type === k.xV.BACKGROUND), [B]),
        y = (0, i.O)(),
        D = {
            isVideoBackgroundSupported: E,
            onSelectBackgroundOption: f,
            selectedBackgroundOption: N
        },
        M = l.useRef(D);
    l.useEffect(() => {
        M.current = D;
    }),
        l.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: n, selectedBackgroundOption: t } = M.current;
            e ? (0, m.FU)(t, v, { track: !1 }).catch(() => n(null)) : null != t && n(null);
        }, [v]);
    let Z = (e) => {
        f(e),
            (0, m.FU)(e, v, { location: y.location })
                .then(() => C(null))
                .catch(() => {
                    C(h.intl.string(h.t.ejrSLS)), (0, m.FU)(null, v, { location: y.location });
                });
    };
    return E
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)(a.Heading, {
                      className: I.spacingTop24,
                      variant: 'eyebrow',
                      color: 'header-secondary',
                      children: h.intl.string(h.t.lZTUPj)
                  }),
                  null != b
                      ? (0, s.jsx)(a.FormErrorBlock, {
                            className: I.videoBackgroundError,
                            children: b
                        })
                      : null,
                  (0, s.jsx)(x.Z, {
                      canUseCustomBackgrounds: S,
                      customBackgroundOptions: U,
                      selectedOption: N,
                      onSelectOption: Z,
                      onUpsellClick: () => {
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await t.e('87200').then(t.bind(t, 592163));
                              return (t) =>
                                  (0, s.jsx)(e, {
                                      ...t,
                                      onLearnMore: n,
                                      analyticsSource: {
                                          ...y.location,
                                          object: O.qAy.BUTTON_CTA
                                      }
                                  });
                          });
                      },
                      onAddBackgroundImage: function (e, n) {
                          let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (s) => {
                              try {
                                  let s = await (0, d.Ff)(e, k.xV.BACKGROUND);
                                  Z(s), (0, g.g5)(s, n.type === j.m.MP4, t), C(null);
                              } catch (e) {
                                  C(e.message);
                              }
                              s();
                          });
                      },
                      smallerOptions: T
                  })
              ]
          })
        : null;
}
