n.d(e, { default: () => h });
var r = n(255367),
    l = n(73800),
    a = n(481060),
    i = n(230711),
    o = n(782568),
    s = n(168107),
    d = n(480916),
    c = n(81643),
    u = n(880257),
    E = n(63063),
    _ = n(247206),
    I = n(981631),
    f = n(526761),
    m = n(388032),
    C = n(618386),
    g = n(444812);
let h = (t) => {
    let { channelId: e, messageId: h, transitionState: A, onClose: v } = t,
        R = (0, u.Z)(),
        L = (0, c.Jm)(),
        x = (0, _.m8)(),
        p = l.useMemo(() => L && x, [L, x]),
        b = l.useCallback(
            (t) => {
                (0, _.aP)({
                    action: t,
                    channelId: e,
                    messageId: h
                });
            },
            [e, h]
        ),
        y = l.useCallback(() => {
            (v(),
                b(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, a.ZDy)(async () => {
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
        }, [e, h, v, b]);
    l.useEffect(() => {
        (0, _.aP)({
            action: _.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
            channelId: e,
            messageId: h
        });
    }, [e, h]);
    let T = l.useCallback(
        () =>
            p
                ? m.intl.format(m.t['TGqx+v'], {
                      handleOnHelpUrlHook: () => {
                          (s.Z.openUrl(E.Z.getArticleURL(I.BhN.TIGGER_PAWTECT_LEARN_MORE)), b(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE));
                      }
                  })
                : x
                  ? null
                  : m.intl.format(m.t.Ge0HUl, {
                        handleFalsePositiveHook: () => {
                            (y(), b(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE));
                        }
                    }),
        [p, x, y, b]
    );
    return (0, r.jsxs)(a.Y0X, {
        transitionState: A,
        'aria-label': m.intl.string(m.t.xdm3XF),
        parentComponent: 'ExplicitMediaLearnMoreModal',
        children: [
            (0, r.jsx)(a.xBx, {
                separator: !1,
                className: C.modalHeader,
                children: (0, r.jsx)('img', {
                    src: g,
                    alt: m.intl.string(m.t.id3fND),
                    className: C.headerImg
                })
            }),
            (0, r.jsxs)(a.hzk, {
                className: C.modalBody,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-lg/bold',
                        className: C.modalInteriorHeader,
                        children: m.intl.string(m.t.sGW77u)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: (function () {
                            if (p) return m.intl.string(m.t.f3ARDQ);
                            let t = m.intl.string(m.t.RUw0ZG),
                                e = m.intl.string(m.t['E/oQYG']);
                            return R ? t : e;
                        })()
                    }),
                    (0, r.jsxs)('div', {
                        className: C.buttonContainer,
                        children: [
                            p
                                ? (0, r.jsx)(a.zxk, {
                                      variant: 'primary',
                                      text: m.intl.string(m.t.KPGVWl),
                                      onClick: function () {
                                          (v(), b(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY), s.Z.showAgeVerificationGetStartedModal(d.cU.SENSITIVE_MEDIA_LEARN_MORE));
                                      },
                                      fullWidth: !0
                                  })
                                : R
                                  ? (0, r.jsx)(a.zxk, {
                                        variant: 'primary',
                                        text: m.intl.string(m.t['9D+zGR']),
                                        onClick: function () {
                                            (b(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), i.Z.open(I.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: f.FY.EXPLICIT_MEDIA_REDACTION_V2 }), v());
                                        },
                                        fullWidth: !0
                                    })
                                  : (0, r.jsx)(a.zxk, {
                                        variant: 'primary',
                                        text: m.intl.string(m.t.hvVgAQ),
                                        onClick: () => {
                                            (0, o.Z)(E.Z.getArticleURL(I.BhN.EXPLICIT_MEDIA_REDACTION));
                                        },
                                        fullWidth: !0
                                    }),
                            (0, r.jsx)(a.zxk, {
                                variant: 'secondary',
                                text: m.intl.string(m.t.bmbHPD),
                                onClick: function () {
                                    (v(), b(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS));
                                },
                                fullWidth: !0
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: T()
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
