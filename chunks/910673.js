n.d(t, { default: () => E });
var l = n(200651),
    r = n(192379),
    i = n(481060),
    a = n(230711),
    o = n(782568),
    s = n(880257),
    d = n(63063),
    c = n(247206),
    u = n(981631),
    I = n(526761),
    _ = n(388032),
    h = n(664552),
    m = n(444812);
let E = (e) => {
    let { channelId: t, messageId: E, transitionState: f, onClose: C } = e,
        v = (0, s.Z)(),
        g = r.useCallback(
            (e) => {
                (0, c.aP)({
                    action: e,
                    channelId: t,
                    messageId: E
                });
            },
            [t, E]
        );
    return (
        r.useEffect(() => {
            (0, c.aP)({
                action: c.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: t,
                messageId: E
            });
        }, [t, E]),
        (0, l.jsxs)(i.Y0X, {
            transitionState: f,
            'aria-label': _.intl.string(_.t.xdm3XF),
            children: [
                (0, l.jsx)(i.xBx, {
                    separator: !1,
                    className: h.modalHeader,
                    children: (0, l.jsx)('img', {
                        src: m,
                        alt: _.intl.string(_.t.id3fND),
                        className: h.headerImg
                    })
                }),
                (0, l.jsxs)(i.hzk, {
                    className: h.modalBody,
                    children: [
                        (0, l.jsx)(i.X6q, {
                            variant: 'heading-lg/bold',
                            className: h.modalInteriorHeader,
                            children: _.intl.string(_.t.sGW77u)
                        }),
                        (0, l.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: v ? _.intl.string(_.t.XW3vjo) : _.intl.string(_.t.i4daNj)
                        }),
                        (0, l.jsxs)('div', {
                            className: h.buttonContainer,
                            children: [
                                v
                                    ? (0, l.jsx)(i.zxk, {
                                          color: i.zxk.Colors.BRAND,
                                          onClick: function () {
                                              g(c.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), a.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: I.FY.EXPLICIT_MEDIA_REDACTION_V2 }), C();
                                          },
                                          fullWidth: !0,
                                          children: _.intl.string(_.t['9D+zGR'])
                                      })
                                    : (0, l.jsx)(i.zxk, {
                                          color: i.zxk.Colors.BRAND,
                                          onClick: () => {
                                              (0, o.Z)(d.Z.getArticleURL(u.BhN.EXPLICIT_MEDIA_REDACTION));
                                          },
                                          fullWidth: !0,
                                          children: _.intl.string(_.t.hvVgAQ)
                                      }),
                                (0, l.jsx)(i.zxk, {
                                    color: i.zxk.Colors.PRIMARY,
                                    onClick: function () {
                                        C(), g(c.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                                    },
                                    fullWidth: !0,
                                    children: _.intl.string(_.t.bmbHPD)
                                }),
                                (0, l.jsx)(i.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: _.intl.format(_.t.Ge0HUl, {
                                        handleFalsePositiveHook: () => {
                                            C(),
                                                g(c.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                                                (0, i.ZDy)(async () => {
                                                    let { default: e } = await n(788679);
                                                    return (n) =>
                                                        (0, l.jsx)(e, {
                                                            channelId: t,
                                                            messageId: E,
                                                            ...n
                                                        });
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
