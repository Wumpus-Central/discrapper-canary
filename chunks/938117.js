t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(47120);
var l = t(200651),
    s = t(192379),
    o = t(442837),
    i = t(481060),
    a = t(2052),
    r = t(594174),
    c = t(74538),
    d = t(716161),
    u = t(634041),
    g = t(647177),
    m = t(672339),
    p = t(898531),
    x = t(636188),
    O = t(678916),
    k = t(981631),
    j = t(869783),
    h = t(388032),
    I = t(858495);
function N(e) {
    let { onLearnMore: n, selectedBackgroundOption: N, onSelectBackgroundOption: f, currentDeviceId: v, smallerBackgroundOptions: b } = e,
        T = (0, o.e7)([r.default], () => r.default.getCurrentUser()),
        [_, C] = s.useState(null),
        E = (0, p.Z)(),
        B = c.ZP.canUseCustomBackgrounds(T),
        S = (0, o.cj)([u.Z], () => (B ? u.Z.videoFilterAssets : {})),
        U = s.useMemo(() => Object.values(S).filter((e) => e.type === O.xV.BACKGROUND), [S]),
        y = (0, a.O)(),
        D = {
            isVideoBackgroundSupported: E,
            onSelectBackgroundOption: f,
            selectedBackgroundOption: N
        },
        M = s.useRef(D);
    s.useEffect(() => {
        M.current = D;
    }),
        s.useEffect(() => {
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
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(i.Heading, {
                      className: I.spacingTop24,
                      variant: 'eyebrow',
                      color: 'header-secondary',
                      children: h.intl.string(h.t.lZTUPj)
                  }),
                  null != _
                      ? (0, l.jsx)(i.FormErrorBlock, {
                            className: I.videoBackgroundError,
                            children: _
                        })
                      : null,
                  (0, l.jsx)(x.Z, {
                      canUseCustomBackgrounds: B,
                      customBackgroundOptions: U,
                      selectedOption: N,
                      onSelectOption: Z,
                      onUpsellClick: () => {
                          (0, i.openModalLazy)(async () => {
                              let { default: e } = await t.e('87200').then(t.bind(t, 592163));
                              return (t) =>
                                  (0, l.jsx)(e, {
                                      ...t,
                                      onLearnMore: n,
                                      analyticsSource: {
                                          ...y.location,
                                          object: k.qAy.BUTTON_CTA
                                      }
                                  });
                          });
                      },
                      onAddBackgroundImage: function (e, n) {
                          let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (l) => {
                              try {
                                  let l = await (0, d.Ff)(e, O.xV.BACKGROUND);
                                  Z(l), (0, g.g5)(l, n.type === j.m.MP4, t), C(null);
                              } catch (e) {
                                  C(e.message);
                              }
                              l();
                          });
                      },
                      smallerOptions: b
                  })
              ]
          })
        : null;
}
