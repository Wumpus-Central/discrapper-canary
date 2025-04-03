a.d(t, { AnnouncementModal: () => g });
var r = a(200651);
a(192379);
var s = a(481060),
    c = a(442837),
    n = a(607070),
    o = a(313201),
    d = a(70097),
    i = a(388032),
    l = a(418822),
    u = a(6210),
    b = a(313460),
    p = a(686936),
    f = a(326238);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(a);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let m = a(450390),
    x = (e) => {
        var t, a;
        return (0, r.jsx)(
            s.zxk,
            ((t = h({}, e)),
            (a = a =
                {
                    'aria-label': i.NW.string(i.t.cpT0Cg),
                    look: s.zxk.Looks.BLANK,
                    size: s.zxk.Sizes.NONE,
                    children: (0, r.jsx)('img', {
                        src: m,
                        alt: 'Test',
                        className: l.closeButtonIcon
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
    _ = (e) => {
        let { header: t, subHeader: a, staticAsset: c, animatedAsset: n } = e;
        return (0, r.jsxs)('div', {
            className: l.featureCard,
            children: [
                (0, r.jsx)(j, {
                    staticAssetURL: c,
                    animatedAssetURL: n,
                    className: l.orbAsset
                }),
                (0, r.jsxs)('div', {
                    className: l.featureCardTextGroup,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-md/extrabold',
                            className: l.featureCardTextHeader,
                            children: t
                        }),
                        (0, r.jsx)('div', {
                            className: l.featureCardTextSubHeader,
                            children: a
                        })
                    ]
                })
            ]
        });
    },
    g = (e) => {
        let { onClose: t, ctaOnClick: a, transitionState: c } = e,
            n = (0, o.Dt)(),
            d = [
                {
                    header: i.NW.string(i.t['2Nvn8/']),
                    subHeader: i.NW.string(i.t.F1lGFx),
                    staticAsset: p.Z
                },
                {
                    header: i.NW.string(i.t['1IEs7+']),
                    subHeader: i.NW.string(i.t.mej05u),
                    staticAsset: f.Z
                }
            ];
        return (0, r.jsxs)(s.Y0X, {
            className: l.root,
            transitionState: c,
            'aria-labelledby': n,
            hideShadow: !0,
            children: [
                (0, r.jsx)(x, {
                    className: l.closeButton,
                    onClick: t
                }),
                (0, r.jsx)(j, {
                    staticAssetURL: u.Z,
                    animatedAssetURL: b.Z,
                    className: l.heroAsset
                }),
                (0, r.jsxs)(s.hzk, {
                    className: l.content,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: 'display-md',
                            className: l.header,
                            children: i.NW.string(i.t.XKlAys)
                        }),
                        (0, r.jsx)(s.X6q, {
                            variant: 'heading-lg/semibold',
                            className: l.subHeader,
                            children: i.NW.string(i.t.icWQKi)
                        }),
                        d.length > 0 &&
                            (0, r.jsx)('div', {
                                className: l.featureCardGroup,
                                children: d.map((e, t) => (0, r.jsx)(_, h({}, e), ''.concat(e.header, '_').concat(t)))
                            }),
                        (0, r.jsx)(s.gtL, {
                            onClick: a,
                            color: l.buttonColor,
                            className: l.button,
                            children: i.NW.string(i.t.ynollp)
                        })
                    ]
                })
            ]
        });
    };
