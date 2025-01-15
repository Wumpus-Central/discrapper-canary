n.r(e);
var o = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(230711),
    i = n(782568),
    d = n(880257),
    s = n(63063),
    c = n(247206),
    u = n(981631),
    I = n(526761),
    h = n(388032),
    m = n(219834),
    _ = n(444812);
e.default = (t) => {
    let { channelId: e, messageId: f, transitionState: E, onClose: C } = t,
        g = (0, d.Z)(),
        v = r.useCallback(
            (t) => {
                (0, c.aP)({
                    action: t,
                    channelId: e,
                    messageId: f
                });
            },
            [e, f]
        );
    return (
        r.useEffect(() => {
            (0, c.aP)({
                action: c.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: e,
                messageId: f
            });
        }, [e, f]),
        (0, o.jsxs)(l.ModalRoot, {
            transitionState: E,
            'aria-label': h.intl.string(h.t.xdm3XF),
            children: [
                (0, o.jsx)(l.ModalHeader, {
                    separator: !1,
                    className: m.modalHeader,
                    children: (0, o.jsx)('img', {
                        src: _,
                        alt: h.intl.string(h.t.id3fND),
                        className: m.headerImg
                    })
                }),
                (0, o.jsxs)(l.ModalContent, {
                    className: m.modalBody,
                    children: [
                        (0, o.jsx)(l.Heading, {
                            variant: 'heading-lg/bold',
                            className: m.modalInteriorHeader,
                            children: h.intl.string(h.t.sGW77u)
                        }),
                        (0, o.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: g ? h.intl.string(h.t.XW3vjo) : h.intl.string(h.t.i4daNj)
                        }),
                        (0, o.jsxs)('div', {
                            className: m.buttonContainer,
                            children: [
                                g
                                    ? (0, o.jsx)(l.Button, {
                                          color: l.Button.Colors.BRAND,
                                          onClick: function () {
                                              v(c.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), a.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: I.FY.EXPLICIT_MEDIA_REDACTION_V2 }), C();
                                          },
                                          fullWidth: !0,
                                          children: h.intl.string(h.t['9D+zGR'])
                                      })
                                    : (0, o.jsx)(l.Button, {
                                          color: l.Button.Colors.BRAND,
                                          onClick: () => {
                                              (0, i.Z)(s.Z.getArticleURL(u.BhN.EXPLICIT_MEDIA_REDACTION));
                                          },
                                          fullWidth: !0,
                                          children: h.intl.string(h.t.hvVgAQ)
                                      }),
                                (0, o.jsx)(l.Button, {
                                    color: l.Button.Colors.PRIMARY,
                                    onClick: function () {
                                        C(), v(c.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                                    },
                                    fullWidth: !0,
                                    children: h.intl.string(h.t.bmbHPD)
                                }),
                                (0, o.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: h.intl.format(h.t.Ge0HUl, {
                                        handleFalsePositiveHook: () => {
                                            C(),
                                                v(c.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                                                (0, l.openModalLazy)(async () => {
                                                    let { default: t } = await n(788679);
                                                    return (n) =>
                                                        (0, o.jsx)(t, {
                                                            channelId: e,
                                                            messageId: f,
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
