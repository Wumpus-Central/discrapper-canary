n.d(e, { default: () => h });
var r = n(255367),
    a = n(73800),
    l = n(481060),
    i = n(230711),
    o = n(782568),
    s = n(168107),
    c = n(480916),
    d = n(81643),
    _ = n(880257),
    E = n(63063),
    I = n(247206),
    u = n(981631),
    f = n(526761),
    C = n(388032),
    m = n(618386),
    A = n(444812);
let h = (t) => {
    let { channelId: e, messageId: h, transitionState: x, onClose: R } = t,
        L = (0, _.Z)(),
        b = (0, d.Jm)(),
        g = (0, I.m8)(),
        y = a.useMemo(() => b && g, [b, g]),
        M = a.useCallback(
            (t) => {
                (0, I.aP)({
                    action: t,
                    channelId: e,
                    messageId: h
                });
            },
            [e, h]
        ),
        p = a.useCallback(() => {
            (R(),
                M(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, l.ZDy)(async () => {
                    let { default: t } = await n(788679);
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            (function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                            })
                                        )),
                                        r.forEach(function (e) {
                                            var r;
                                            ((r = n[e]),
                                                e in t
                                                    ? Object.defineProperty(t, e, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (t[e] = r));
                                        }));
                                }
                                return t;
                            })(
                                {
                                    channelId: e,
                                    messageId: h
                                },
                                n
                            )
                        );
                }));
        }, [e, h, R, M]);
    a.useEffect(() => {
        (0, I.aP)({
            action: I.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
            channelId: e,
            messageId: h
        });
    }, [e, h]);
    let N = a.useCallback(
        () =>
            y
                ? C.intl.format(C.t['TGqx+v'], {
                      handleOnHelpUrlHook: () => {
                          (s.Z.openUrl(E.Z.getArticleURL(u.BhN.TIGGER_PAWTECT_LEARN_MORE)), M(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE));
                      }
                  })
                : g
                  ? null
                  : C.intl.format(C.t.Ge0HUl, {
                        handleFalsePositiveHook: () => {
                            (p(), M(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE));
                        }
                    }),
        [y, g, p, M]
    );
    return (0, r.jsxs)(l.Y0X, {
        transitionState: x,
        'aria-label': C.intl.string(C.t.xdm3XF),
        parentComponent: 'ExplicitMediaLearnMoreModal',
        children: [
            (0, r.jsx)(l.xBx, {
                separator: !1,
                className: m.modalHeader,
                children: (0, r.jsx)('img', {
                    src: A,
                    alt: C.intl.string(C.t.id3fND),
                    className: m.headerImg
                })
            }),
            (0, r.jsxs)(l.hzk, {
                className: m.modalBody,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-lg/bold',
                        className: m.modalInteriorHeader,
                        children: C.intl.string(C.t.sGW77u)
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: (function () {
                            if (y) return C.intl.string(C.t.f3ARDQ);
                            let t = C.intl.string(C.t.RUw0ZG),
                                e = C.intl.string(C.t['E/oQYG']);
                            return L ? t : e;
                        })()
                    }),
                    (0, r.jsxs)('div', {
                        className: m.buttonContainer,
                        children: [
                            y
                                ? (0, r.jsx)(l.zxk, {
                                      variant: 'primary',
                                      text: C.intl.string(C.t.KPGVWl),
                                      onClick: function () {
                                          (R(), M(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY), s.Z.showAgeVerificationGetStartedModal(c.cU.SENSITIVE_MEDIA_LEARN_MORE));
                                      },
                                      fullWidth: !0
                                  })
                                : L
                                  ? (0, r.jsx)(l.zxk, {
                                        variant: 'primary',
                                        text: C.intl.string(C.t['9D+zGR']),
                                        onClick: function () {
                                            (M(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), i.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: f.FY.EXPLICIT_MEDIA_REDACTION_V2 }), R());
                                        },
                                        fullWidth: !0
                                    })
                                  : (0, r.jsx)(l.zxk, {
                                        variant: 'primary',
                                        text: C.intl.string(C.t.hvVgAQ),
                                        onClick: () => {
                                            (0, o.Z)(E.Z.getArticleURL(u.BhN.EXPLICIT_MEDIA_REDACTION));
                                        },
                                        fullWidth: !0
                                    }),
                            (0, r.jsx)(l.zxk, {
                                variant: 'secondary',
                                text: C.intl.string(C.t.bmbHPD),
                                onClick: function () {
                                    (R(), M(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS));
                                },
                                fullWidth: !0
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: N()
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
