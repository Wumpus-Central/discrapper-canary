a.d(t, {
    AnnouncementModal: () => O,
    WrappedAnnouncementModal: () => v
});
var r = a(255367);
a(73800);
var s = a(755721),
    n = a(481060),
    c = a(442837),
    o = a(607070),
    d = a(313201),
    i = a(70097),
    l = a(688465),
    u = a(794231),
    b = a(543936),
    p = a(388032),
    f = a(418822),
    h = a(6210),
    m = a(313460),
    _ = a(686936),
    x = a(326238);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(a);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let j = a(450390),
    C = (e) => {
        var t, a;
        return (0, r.jsx)(
            s.zx,
            ((t = g({}, e)),
            (a = a =
                {
                    'aria-label': p.intl.string(p.t.cpT0Cg),
                    look: s.zx.Looks.BLANK,
                    size: s.zx.Sizes.NONE,
                    children: (0, r.jsx)('img', {
                        src: j,
                        alt: 'Close Modal',
                        className: f.closeButtonIcon
                    })
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                : (function (e, t) {
                      var a = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          a.push.apply(a, r);
                      }
                      return a;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            t)
        );
    },
    y = (e) => {
        let { animatedAssetURL: t, staticAssetURL: a, className: s } = e;
        return (0, c.e7)([o.Z], () => o.Z.useReducedMotion) || null == t
            ? (0, r.jsx)('img', {
                  src: a,
                  className: s,
                  alt: ''
              })
            : (0, r.jsx)(i.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: s,
                  children: (0, r.jsx)('source', {
                      src: t,
                      type: 'video/webm'
                  })
              });
    },
    N = (e) => {
        let { header: t, subHeader: a, staticAsset: s, animatedAsset: c } = e;
        return (0, r.jsxs)('div', {
            className: f.featureCard,
            children: [
                (0, r.jsx)(y, {
                    staticAssetURL: s,
                    animatedAssetURL: c,
                    className: f.orbAsset
                }),
                (0, r.jsxs)('div', {
                    className: f.featureCardTextGroup,
                    children: [
                        (0, r.jsx)(n.X6q, {
                            variant: 'heading-md/extrabold',
                            className: f.featureCardTextHeader,
                            children: t
                        }),
                        (0, r.jsx)('div', {
                            className: f.featureCardTextSubHeader,
                            children: a
                        })
                    ]
                })
            ]
        });
    },
    O = (e) => {
        let { onClose: t, ctaOnClick: a, transitionState: s } = e,
            c = (0, d.Dt)(),
            { showBetaTag: o } = u.Z.useExperiment({ location: 'virtual_currency_announcement_modal_v2' }),
            i = [
                {
                    header: p.intl.string(p.t['2Nvn8/']),
                    subHeader: p.intl.string(p.t.F1lGFx),
                    staticAsset: _.Z
                },
                {
                    header: p.intl.string(p.t['1IEs7+']),
                    subHeader: p.intl.string(p.t.mej05u),
                    staticAsset: x.Z
                }
            ];
        return (0, r.jsxs)(n.Y0X, {
            className: f.root,
            transitionState: s,
            'aria-labelledby': c,
            hideShadow: !0,
            parentComponent: 'AnnouncementModalV2',
            children: [
                (0, r.jsx)(C, {
                    className: f.closeButton,
                    onClick: t
                }),
                (0, r.jsx)(y, {
                    staticAssetURL: h.Z,
                    animatedAssetURL: m.Z,
                    className: f.heroAsset
                }),
                (0, r.jsxs)(n.hzk, {
                    className: f.content,
                    children: [
                        (0, r.jsxs)('div', {
                            className: f.headerContainer,
                            children: [
                                (0, r.jsx)(n.X6q, {
                                    variant: 'display-md',
                                    className: f.header,
                                    children: p.intl.string(p.t.XKlAys)
                                }),
                                o && (0, r.jsx)(l.Z, { className: f.betaBadge })
                            ]
                        }),
                        (0, r.jsx)(n.X6q, {
                            variant: 'heading-lg/semibold',
                            className: f.subHeader,
                            children: p.intl.string(p.t.icWQKi)
                        }),
                        i.length > 0 &&
                            (0, r.jsx)('div', {
                                className: f.featureCardGroup,
                                children: i.map((e, t) => (0, r.jsx)(N, g({}, e), ''.concat(e.header, '_').concat(t)))
                            }),
                        (0, r.jsx)(n.gtL, {
                            onClick: a,
                            color: f.buttonColor,
                            className: f.button,
                            children: p.intl.string(p.t.ynollp)
                        })
                    ]
                })
            ]
        });
    },
    v = (e) =>
        (0, r.jsx)(b.x, {
            errorSource: 'ORBS_ANNOUNCEMENT_MODAL',
            children: (0, r.jsx)(O, g({}, e))
        });
