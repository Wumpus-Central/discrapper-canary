n.d(t, { default: () => h });
var r = n(200651),
    o = n(192379),
    l = n(481060),
    a = n(230711),
    i = n(782568),
    s = n(880257),
    d = n(63063),
    c = n(247206),
    u = n(981631),
    I = n(526761),
    f = n(388032),
    _ = n(934659),
    m = n(444812);
let h = (e) => {
    let { channelId: t, messageId: h, transitionState: E, onClose: g } = e,
        v = (0, s.Z)(),
        C = o.useCallback(
            (e) => {
                (0, c.aP)({
                    action: e,
                    channelId: t,
                    messageId: h
                });
            },
            [t, h]
        );
    return (
        o.useEffect(() => {
            (0, c.aP)({
                action: c.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: t,
                messageId: h
            });
        }, [t, h]),
        (0, r.jsxs)(l.Y0X, {
            transitionState: E,
            'aria-label': f.NW.string(f.t.xdm3XF),
            children: [
                (0, r.jsx)(l.xBx, {
                    separator: !1,
                    className: _.modalHeader,
                    children: (0, r.jsx)('img', {
                        src: m,
                        alt: f.NW.string(f.t.id3fND),
                        className: _.headerImg
                    })
                }),
                (0, r.jsxs)(l.hzk, {
                    className: _.modalBody,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-lg/bold',
                            className: _.modalInteriorHeader,
                            children: f.NW.string(f.t.sGW77u)
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: v ? f.NW.string(f.t.XW3vjo) : f.NW.string(f.t.i4daNj)
                        }),
                        (0, r.jsxs)('div', {
                            className: _.buttonContainer,
                            children: [
                                v
                                    ? (0, r.jsx)(l.zxk, {
                                          color: l.zxk.Colors.BRAND,
                                          onClick: function () {
                                              C(c.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), a.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: I.FY.EXPLICIT_MEDIA_REDACTION_V2 }), g();
                                          },
                                          fullWidth: !0,
                                          children: f.NW.string(f.t['9D+zGR'])
                                      })
                                    : (0, r.jsx)(l.zxk, {
                                          color: l.zxk.Colors.BRAND,
                                          onClick: () => {
                                              (0, i.Z)(d.Z.getArticleURL(u.BhN.EXPLICIT_MEDIA_REDACTION));
                                          },
                                          fullWidth: !0,
                                          children: f.NW.string(f.t.hvVgAQ)
                                      }),
                                (0, r.jsx)(l.zxk, {
                                    color: l.zxk.Colors.PRIMARY,
                                    onClick: function () {
                                        g(), C(c.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                                    },
                                    fullWidth: !0,
                                    children: f.NW.string(f.t.bmbHPD)
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: f.NW.format(f.t.Ge0HUl, {
                                        handleFalsePositiveHook: () => {
                                            g(),
                                                C(c.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                                                (0, l.ZDy)(async () => {
                                                    let { default: e } = await n(788679);
                                                    return (n) =>
                                                        (0, r.jsx)(
                                                            e,
                                                            (function (e) {
                                                                for (var t = 1; t < arguments.length; t++) {
                                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                                        r = Object.keys(n);
                                                                    'function' == typeof Object.getOwnPropertySymbols &&
                                                                        (r = r.concat(
                                                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                            })
                                                                        )),
                                                                        r.forEach(function (t) {
                                                                            var r;
                                                                            (r = n[t]),
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
                                                            })(
                                                                {
                                                                    channelId: t,
                                                                    messageId: h
                                                                },
                                                                n
                                                            )
                                                        );
                                                });
                                        }
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    );
};
