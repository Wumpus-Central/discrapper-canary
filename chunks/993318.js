a.d(t, { AnnouncementModal: () => C });
var r = a(255367);
a(73800);
var s = a(481060),
    c = a(442837),
    n = a(607070),
    o = a(313201),
    d = a(70097),
    i = a(688465),
    l = a(388032),
    u = a(418822),
    b = a(6210),
    p = a(313460),
    f = a(686936),
    h = a(326238);
function m(e) {
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
    _ = (e) => {
        var t, a;
        return (0, r.jsx)(
            s.zxk,
            ((t = m({}, e)),
            (a = a =
                {
                    'aria-label': l.intl.string(l.t.cpT0Cg),
                    look: s.zxk.Looks.BLANK,
                    size: s.zxk.Sizes.NONE,
                    children: (0, r.jsx)('img', {
                        src: x,
                        alt: 'Close Modal',
                        className: u.closeButtonIcon
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
    j = (e) => {
        let { animatedAssetURL: t, staticAssetURL: a, className: s } = e;
        return (0, c.e7)([n.Z], () => n.Z.useReducedMotion) || null == t
            ? (0, r.jsx)('img', {
                  src: a,
                  className: s,
                  alt: ''
              })
            : (0, r.jsx)(d.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: s,
                  children: (0, r.jsx)('source', {
                      src: t,
                      type: 'video/webm'
                  })
              });
    },
    g = (e) => {
        let { header: t, subHeader: a, staticAsset: c, animatedAsset: n } = e;
        return (0, r.jsxs)('div', {
            className: u.featureCard,
            children: [
                (0, r.jsx)(j, {
                    staticAssetURL: c,
                    animatedAssetURL: n,
                    className: u.orbAsset
                }),
                (0, r.jsxs)('div', {
                    className: u.featureCardTextGroup,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-md/extrabold',
                            className: u.featureCardTextHeader,
                            children: t
                        }),
                        (0, r.jsx)('div', {
                            className: u.featureCardTextSubHeader,
                            children: a
                        })
                    ]
                })
            ]
        });
    },
    C = (e) => {
        let { onClose: t, ctaOnClick: a, transitionState: c } = e,
            n = (0, o.Dt)(),
            d = [
                {
                    header: l.intl.string(l.t['2Nvn8/']),
                    subHeader: l.intl.string(l.t.F1lGFx),
                    staticAsset: f.Z
                },
                {
                    header: l.intl.string(l.t['1IEs7+']),
                    subHeader: l.intl.string(l.t.mej05u),
                    staticAsset: h.Z
                }
            ];
        return (0, r.jsxs)(s.Y0X, {
            className: u.root,
            transitionState: c,
            'aria-labelledby': n,
            hideShadow: !0,
            parentComponent: 'AnnouncementModalV2',
            children: [
                (0, r.jsx)(_, {
                    className: u.closeButton,
                    onClick: t
                }),
                (0, r.jsx)(j, {
                    staticAssetURL: b.Z,
                    animatedAssetURL: p.Z,
                    className: u.heroAsset
                }),
                (0, r.jsxs)(s.hzk, {
                    className: u.content,
                    children: [
                        (0, r.jsxs)('div', {
                            className: u.headerContainer,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: 'display-md',
                                    className: u.header,
                                    children: l.intl.string(l.t.XKlAys)
                                }),
                                (0, r.jsx)(i.Z, { className: u.betaBadge })
                            ]
                        }),
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-lg/semibold',
                            className: u.subHeader,
                            children: l.intl.string(l.t.icWQKi)
                        }),
                        d.length > 0 &&
                            (0, r.jsx)('div', {
                                className: u.featureCardGroup,
                                children: d.map((e, t) => (0, r.jsx)(g, m({}, e), ''.concat(e.header, '_').concat(t)))
                            }),
                        (0, r.jsx)(s.gtL, {
                            onClick: a,
                            color: u.buttonColor,
                            className: u.button,
                            children: l.intl.string(l.t.ynollp)
                        })
                    ]
                })
            ]
        });
    };
