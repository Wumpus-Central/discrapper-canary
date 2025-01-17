t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(47120);
var l = t(200651),
    s = t(192379),
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
    f = t(388032),
    I = t(858495);
function N(e) {
    let { onLearnMore: n, selectedBackgroundOption: N, onSelectBackgroundOption: h, currentDeviceId: v, smallerBackgroundOptions: C } = e,
        T = (0, o.e7)([r.default], () => r.default.getCurrentUser()),
        [E, _] = s.useState(null),
        b = (0, p.Z)(),
        S = c.ZP.canUseCustomBackgrounds(T),
        B = (0, o.cj)([u.Z], () => (S ? u.Z.videoFilterAssets : {})),
        D = s.useMemo(() => Object.values(B).filter((e) => e.type === k.xV.BACKGROUND), [B]),
        U = (0, i.O)(),
        y = {
            isVideoBackgroundSupported: b,
            onSelectBackgroundOption: h,
            selectedBackgroundOption: N
        },
        M = s.useRef(y);
    s.useEffect(() => {
        M.current = y;
    }),
        s.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: n, selectedBackgroundOption: t } = M.current;
            e ? (0, m.FU)(t, v, { track: !1 }).catch(() => n(null)) : null != t && n(null);
        }, [v]);
    let Z = (e) => {
        h(e),
            (0, m.FU)(e, v, { location: U.location })
                .then(() => _(null))
                .catch(() => {
                    _(f.intl.string(f.t.ejrSLS)), (0, m.FU)(null, v, { location: U.location });
                });
    };
    return b
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(a.Heading, {
                      className: I.spacingTop24,
                      variant: 'eyebrow',
                      color: 'header-secondary',
                      children: f.intl.string(f.t.lZTUPj)
                  }),
                  null != E
                      ? (0, l.jsx)(a.FormErrorBlock, {
                            className: I.videoBackgroundError,
                            children: E
                        })
                      : null,
                  (0, l.jsx)(x.Z, {
                      canUseCustomBackgrounds: S,
                      customBackgroundOptions: D,
                      selectedOption: N,
                      onSelectOption: Z,
                      onUpsellClick: () => {
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await t.e('87200').then(t.bind(t, 592163));
                              return (t) =>
                                  (0, l.jsx)(e, {
                                      ...t,
                                      onLearnMore: n,
                                      analyticsSource: {
                                          ...U.location,
                                          object: O.qAy.BUTTON_CTA
                                      }
                                  });
                          });
                      },
                      onAddBackgroundImage: function (e, n) {
                          let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (l) => {
                              try {
                                  let l = await (0, d.Ff)(e, k.xV.BACKGROUND);
                                  Z(l), (0, g.g5)(l, n.type === j.m.MP4, t), _(null);
                              } catch (e) {
                                  _(e.message);
                              }
                              l();
                          });
                      },
                      smallerOptions: C
                  })
              ]
          })
        : null;
}
