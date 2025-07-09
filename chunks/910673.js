n.d(e, { default: () => v });
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
    I = n(470734),
    f = n(981631),
    m = n(526761),
    g = n(388032),
    C = n(618386),
    h = n(444812);
let v = (t) => {
    let { channelId: e, messageId: v, transitionState: A, onClose: R } = t,
        L = (0, u.Z)(),
        p = (0, c.Jm)(),
        x = (0, _.m8)(),
        b = (0, I.pn)('SensitiveContentFilterSetting'),
        y = l.useMemo(() => p && x, [p, x]),
        T = l.useCallback(
            (t) => {
                (0, _.aP)({
                    action: t,
                    channelId: e,
                    messageId: v
                });
            },
            [e, v]
        ),
        M = l.useCallback(() => {
            (R(),
                T(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
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
                                    messageId: v
                                },
                                n
                            )
                        );
                }));
        }, [e, v, R, T]);
    l.useEffect(() => {
        (0, _.aP)({
            action: _.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
            channelId: e,
            messageId: v
        });
    }, [e, v]);
    let O = l.useCallback(
        () =>
            y
                ? g.intl.format(g.t['TGqx+v'], {
                      handleOnHelpUrlHook: () => {
                          (s.Z.openUrl(E.Z.getArticleURL(f.BhN.TIGGER_PAWTECT_LEARN_MORE)), T(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE));
                      }
                  })
                : x
                  ? null
                  : g.intl.format(g.t.Ge0HUl, {
                        handleFalsePositiveHook: () => {
                            (M(), T(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE));
                        }
                    }),
        [y, x, M, T]
    );
    return (0, r.jsxs)(a.Y0X, {
        transitionState: A,
        'aria-label': g.intl.string(g.t.xdm3XF),
        parentComponent: 'ExplicitMediaLearnMoreModal',
        children: [
            (0, r.jsx)(a.xBx, {
                separator: !1,
                className: C.modalHeader,
                children: (0, r.jsx)('img', {
                    src: h,
                    alt: g.intl.string(g.t.id3fND),
                    className: C.headerImg
                })
            }),
            (0, r.jsxs)(a.hzk, {
                className: C.modalBody,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-lg/bold',
                        className: C.modalInteriorHeader,
                        children: g.intl.string(g.t.sGW77u)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: (function () {
                            if (y) return g.intl.string(g.t.f3ARDQ);
                            let t = b ? g.intl.string(g.t.RUw0ZG) : g.intl.string(g.t.XW3vjo),
                                e = b ? g.intl.string(g.t['E/oQYG']) : g.intl.string(g.t.i4daNj);
                            return L ? t : e;
                        })()
                    }),
                    (0, r.jsxs)('div', {
                        className: C.buttonContainer,
                        children: [
                            y
                                ? (0, r.jsx)(a.zxk, {
                                      variant: 'primary',
                                      text: g.intl.string(g.t.KPGVWl),
                                      onClick: function () {
                                          (R(), T(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY), s.Z.showAgeVerificationGetStartedModal(d.cU.SENSITIVE_MEDIA_LEARN_MORE));
                                      },
                                      fullWidth: !0
                                  })
                                : L
                                  ? (0, r.jsx)(a.zxk, {
                                        variant: 'primary',
                                        text: g.intl.string(g.t['9D+zGR']),
                                        onClick: function () {
                                            (T(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), i.Z.open(f.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: m.FY.EXPLICIT_MEDIA_REDACTION_V2 }), R());
                                        },
                                        fullWidth: !0
                                    })
                                  : (0, r.jsx)(a.zxk, {
                                        variant: 'primary',
                                        text: g.intl.string(g.t.hvVgAQ),
                                        onClick: () => {
                                            (0, o.Z)(E.Z.getArticleURL(f.BhN.EXPLICIT_MEDIA_REDACTION));
                                        },
                                        fullWidth: !0
                                    }),
                            (0, r.jsx)(a.zxk, {
                                variant: 'secondary',
                                text: g.intl.string(g.t.bmbHPD),
                                onClick: function () {
                                    (R(), T(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS));
                                },
                                fullWidth: !0
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: O()
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
