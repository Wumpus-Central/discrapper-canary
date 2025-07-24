n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n.n(l),
    o = n(755721),
    s = n(481060),
    c = n(367907),
    u = n(626135),
    d = n(986332),
    p = n(428695),
    h = n(981631),
    f = n(388032),
    g = n(431884);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
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
let b = a().debounce(c.ZP.trackWithMetadata, 500),
    _ = (e) => {
        let { guild: t, title: n, message: l, image: a, type: d, imageMarginX: p, imageMarginTop: m, trackingSource: _, undismissable: O, onDismissed: E, onClick: y, cta: v, ctaColor: I } = e;
        i.useEffect(() => {
            b(h.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: d,
                guild_id: t.id
            });
        }, [t.id, d]);
        let C = null;
        'function' == typeof v
            ? (C = v())
            : null != v &&
              (C = (0, r.jsx)(o.zx, {
                  className: g.btn,
                  size: o.zx.Sizes.SMALL,
                  onClick: () => {
                      (null != d &&
                          u.default.track(h.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                              source: _,
                              guild_id: t.id,
                              notice_type: d
                          }),
                          null == y || y());
                  },
                  fullWidth: !0,
                  color: I,
                  children: v
              }));
        let S = null != p ? ''.concat(p, 'px') : '16px';
        return (0, r.jsxs)('div', {
            className: g.channelNotice,
            children: [
                !0 === O
                    ? null
                    : (0, r.jsx)(s.P3F, {
                          onClick: () => {
                              (c.ZP.trackWithMetadata(h.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: d }), null == E || E());
                          },
                          className: g.close,
                          'aria-label': f.intl.string(f.t.WAI6xs),
                          children: (0, r.jsx)(s.Dio, {
                              size: 'md',
                              color: 'currentColor',
                              className: g.closeIcon
                          })
                      }),
                (0, r.jsx)('div', {
                    className: g.imageContainer,
                    style: {
                        marginTop: ''.concat(m, 'px'),
                        marginLeft: S,
                        marginRight: S
                    },
                    children: (0, r.jsx)('img', {
                        className: g.image,
                        src: a,
                        alt: ''
                    })
                }),
                (0, r.jsxs)('div', {
                    className: g.message,
                    children: [
                        null != n
                            ? (0, r.jsx)(s.X6q, {
                                  variant: 'heading-md/semibold',
                                  className: g.title,
                                  children: n
                              })
                            : null,
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: l
                        }),
                        C
                    ]
                })
            ]
        });
    },
    O = function (e) {
        let { showRedesignedChannelNotice: t } = (0, d.o)(!0);
        return t ? (0, r.jsx)(p.Z, m({}, e)) : (0, r.jsx)(_, m({}, e));
    };
