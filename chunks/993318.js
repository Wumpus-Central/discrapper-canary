a.d(t, { AnnouncementModal: () => y });
var r = a(255367);
a(73800);
var s = a(481060),
    n = a(442837),
    c = a(607070),
    o = a(313201),
    d = a(70097),
    i = a(688465),
    l = a(794231),
    u = a(388032),
    b = a(418822),
    p = a(6210),
    f = a(313460),
    h = a(686936),
    m = a(326238);
function _(e) {
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
let g = a(450390),
    x = (e) => {
        var t, a;
        return (0, r.jsx)(
            s.zxk,
            ((t = _({}, e)),
            (a = a =
                {
                    'aria-label': u.intl.string(u.t.cpT0Cg),
                    look: s.zxk.Looks.BLANK,
                    size: s.zxk.Sizes.NONE,
                    children: (0, r.jsx)('img', {
                        src: g,
                        alt: 'Close Modal',
                        className: b.closeButtonIcon
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
        return (0, n.e7)([c.Z], () => c.Z.useReducedMotion) || null == t
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
    C = (e) => {
        let { header: t, subHeader: a, staticAsset: n, animatedAsset: c } = e;
        return (0, r.jsxs)('div', {
            className: b.featureCard,
            children: [
                (0, r.jsx)(j, {
                    staticAssetURL: n,
                    animatedAssetURL: c,
                    className: b.orbAsset
                }),
                (0, r.jsxs)('div', {
                    className: b.featureCardTextGroup,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-md/extrabold',
                            className: b.featureCardTextHeader,
                            children: t
                        }),
                        (0, r.jsx)('div', {
                            className: b.featureCardTextSubHeader,
                            children: a
                        })
                    ]
                })
            ]
        });
    },
    y = (e) => {
        let { onClose: t, ctaOnClick: a, transitionState: n } = e,
            c = (0, o.Dt)(),
            { showBetaTag: d } = l.Z.useExperiment({ location: 'virtual_currency_announcement_modal_v2' }),
            g = [
                {
                    header: u.intl.string(u.t['2Nvn8/']),
                    subHeader: u.intl.string(u.t.F1lGFx),
                    staticAsset: h.Z
                },
                {
                    header: u.intl.string(u.t['1IEs7+']),
                    subHeader: u.intl.string(u.t.mej05u),
                    staticAsset: m.Z
                }
            ];
        return (0, r.jsxs)(s.Y0X, {
            className: b.root,
            transitionState: n,
            'aria-labelledby': c,
            hideShadow: !0,
            parentComponent: 'AnnouncementModalV2',
            children: [
                (0, r.jsx)(x, {
                    className: b.closeButton,
                    onClick: t
                }),
                (0, r.jsx)(j, {
                    staticAssetURL: p.Z,
                    animatedAssetURL: f.Z,
                    className: b.heroAsset
                }),
                (0, r.jsxs)(s.hzk, {
                    className: b.content,
                    children: [
                        (0, r.jsxs)('div', {
                            className: b.headerContainer,
                            children: [
                                (0, r.jsx)(s.X6q, {
                                    variant: 'display-md',
                                    className: b.header,
                                    children: u.intl.string(u.t.XKlAys)
                                }),
                                d && (0, r.jsx)(i.Z, { className: b.betaBadge })
                            ]
                        }),
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-lg/semibold',
                            className: b.subHeader,
                            children: u.intl.string(u.t.icWQKi)
                        }),
                        g.length > 0 &&
                            (0, r.jsx)('div', {
                                className: b.featureCardGroup,
                                children: g.map((e, t) => (0, r.jsx)(C, _({}, e), ''.concat(e.header, '_').concat(t)))
                            }),
                        (0, r.jsx)(s.gtL, {
                            onClick: a,
                            color: b.buttonColor,
                            className: b.button,
                            children: u.intl.string(u.t.ynollp)
                        })
                    ]
                })
            ]
        });
    };
