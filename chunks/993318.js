a.d(t, { AnnouncementModal: () => v });
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
    b = a(388032),
    p = a(418822),
    f = a(6210),
    h = a(313460),
    m = a(686936),
    _ = a(326238);
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
let x = a(450390),
    j = (e) => {
        var t, a;
        return (0, r.jsx)(
            s.zx,
            ((t = g({}, e)),
            (a = a =
                {
                    'aria-label': b.intl.string(b.t.cpT0Cg),
                    look: s.zx.Looks.BLANK,
                    size: s.zx.Sizes.NONE,
                    children: (0, r.jsx)('img', {
                        src: x,
                        alt: 'Close Modal',
                        className: p.closeButtonIcon
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
    C = (e) => {
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
    y = (e) => {
        let { header: t, subHeader: a, staticAsset: s, animatedAsset: c } = e;
        return (0, r.jsxs)('div', {
            className: p.featureCard,
            children: [
                (0, r.jsx)(C, {
                    staticAssetURL: s,
                    animatedAssetURL: c,
                    className: p.orbAsset
                }),
                (0, r.jsxs)('div', {
                    className: p.featureCardTextGroup,
                    children: [
                        (0, r.jsx)(n.X6q, {
                            variant: 'heading-md/extrabold',
                            className: p.featureCardTextHeader,
                            children: t
                        }),
                        (0, r.jsx)('div', {
                            className: p.featureCardTextSubHeader,
                            children: a
                        })
                    ]
                })
            ]
        });
    },
    v = (e) => {
        let { onClose: t, ctaOnClick: a, transitionState: s } = e,
            c = (0, d.Dt)(),
            { showBetaTag: o } = u.Z.useExperiment({ location: 'virtual_currency_announcement_modal_v2' }),
            i = [
                {
                    header: b.intl.string(b.t['2Nvn8/']),
                    subHeader: b.intl.string(b.t.F1lGFx),
                    staticAsset: m.Z
                },
                {
                    header: b.intl.string(b.t['1IEs7+']),
                    subHeader: b.intl.string(b.t.mej05u),
                    staticAsset: _.Z
                }
            ];
        return (0, r.jsxs)(n.Y0X, {
            className: p.root,
            transitionState: s,
            'aria-labelledby': c,
            hideShadow: !0,
            parentComponent: 'AnnouncementModalV2',
            children: [
                (0, r.jsx)(j, {
                    className: p.closeButton,
                    onClick: t
                }),
                (0, r.jsx)(C, {
                    staticAssetURL: f.Z,
                    animatedAssetURL: h.Z,
                    className: p.heroAsset
                }),
                (0, r.jsxs)(n.hzk, {
                    className: p.content,
                    children: [
                        (0, r.jsxs)('div', {
                            className: p.headerContainer,
                            children: [
                                (0, r.jsx)(n.X6q, {
                                    variant: 'display-md',
                                    className: p.header,
                                    children: b.intl.string(b.t.XKlAys)
                                }),
                                o && (0, r.jsx)(l.Z, { className: p.betaBadge })
                            ]
                        }),
                        (0, r.jsx)(n.X6q, {
                            variant: 'heading-lg/semibold',
                            className: p.subHeader,
                            children: b.intl.string(b.t.icWQKi)
                        }),
                        i.length > 0 &&
                            (0, r.jsx)('div', {
                                className: p.featureCardGroup,
                                children: i.map((e, t) => (0, r.jsx)(y, g({}, e), ''.concat(e.header, '_').concat(t)))
                            }),
                        (0, r.jsx)(n.gtL, {
                            onClick: a,
                            color: p.buttonColor,
                            className: p.button,
                            children: b.intl.string(b.t.ynollp)
                        })
                    ]
                })
            ]
        });
    };
