n.d(t, { default: () => A });
var l = n(255367),
    r = n(73800),
    i = n(481060),
    o = n(230711),
    a = n(782568),
    s = n(168107),
    d = n(480916),
    c = n(81643),
    u = n(880257),
    E = n(63063),
    _ = n(247206),
    I = n(470734),
    f = n(981631),
    C = n(526761),
    m = n(388032),
    h = n(618386),
    g = n(444812);
let A = (e) => {
    let { channelId: t, messageId: A, transitionState: R, onClose: v } = e,
        L = (0, u.Z)(),
        x = (0, c.Jm)(),
        b = (0, _.m8)(),
        p = (0, I.pn)('SensitiveContentFilterSetting'),
        M = r.useMemo(() => x && b, [x, b]),
        T = r.useCallback(
            (e) => {
                (0, _.aP)({
                    action: e,
                    channelId: t,
                    messageId: A
                });
            },
            [t, A]
        ),
        N = r.useCallback(() => {
            v(),
                T(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, i.ZDy)(async () => {
                    let { default: e } = await n(788679);
                    return (n) =>
                        (0, l.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        l = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (l = l.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        l.forEach(function (t) {
                                            var l;
                                            (l = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: l,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = l);
                                        });
                                }
                                return e;
                            })(
                                {
                                    channelId: t,
                                    messageId: A
                                },
                                n
                            )
                        );
                });
        }, [t, A, v, T]);
    r.useEffect(() => {
        (0, _.aP)({
            action: _.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
            channelId: t,
            messageId: A
        });
    }, [t, A]);
    let P = r.useCallback(
        () =>
            M
                ? m.intl.format(m.t['TGqx+v'], {
                      handleOnHelpUrlHook: () => {
                          s.Z.openUrl(E.Z.getArticleURL(f.BhN.TIGGER_PAWTECT_LEARN_MORE)), T(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                      }
                  })
                : b
                  ? null
                  : m.intl.format(m.t.Ge0HUl, {
                        handleFalsePositiveHook: () => {
                            N(), T(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
                        }
                    }),
        [M, b, N, T]
    );
    return (0, l.jsxs)(i.Y0X, {
        transitionState: R,
        'aria-label': m.intl.string(m.t.xdm3XF),
        parentComponent: 'ExplicitMediaLearnMoreModal',
        children: [
            (0, l.jsx)(i.xBx, {
                separator: !1,
                className: h.modalHeader,
                children: (0, l.jsx)('img', {
                    src: g,
                    alt: m.intl.string(m.t.id3fND),
                    className: h.headerImg
                })
            }),
            (0, l.jsxs)(i.hzk, {
                className: h.modalBody,
                children: [
                    (0, l.jsx)(i.X6q, {
                        variant: 'heading-lg/bold',
                        className: h.modalInteriorHeader,
                        children: m.intl.string(m.t.sGW77u)
                    }),
                    (0, l.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: (function () {
                            if (M) return m.intl.string(m.t.f3ARDQ);
                            let e = p ? m.intl.string(m.t.RUw0ZG) : m.intl.string(m.t.XW3vjo),
                                t = p ? m.intl.string(m.t['E/oQYG']) : m.intl.string(m.t.i4daNj);
                            return L ? e : t;
                        })()
                    }),
                    (0, l.jsxs)('div', {
                        className: h.buttonContainer,
                        children: [
                            M
                                ? (0, l.jsx)(i.zxk, {
                                      color: i.zxk.Colors.BRAND,
                                      onClick: function () {
                                          v(), T(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY), s.Z.showAgeVerificationGetStartedModal(d.cU.SENSITIVE_MEDIA_LEARN_MORE);
                                      },
                                      fullWidth: !0,
                                      children: m.intl.string(m.t.KPGVWl)
                                  })
                                : L
                                  ? (0, l.jsx)(i.zxk, {
                                        color: i.zxk.Colors.BRAND,
                                        onClick: function () {
                                            T(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), o.Z.open(f.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: C.FY.EXPLICIT_MEDIA_REDACTION_V2 }), v();
                                        },
                                        fullWidth: !0,
                                        children: m.intl.string(m.t['9D+zGR'])
                                    })
                                  : (0, l.jsx)(i.zxk, {
                                        color: i.zxk.Colors.BRAND,
                                        onClick: () => {
                                            (0, a.Z)(E.Z.getArticleURL(f.BhN.EXPLICIT_MEDIA_REDACTION));
                                        },
                                        fullWidth: !0,
                                        children: m.intl.string(m.t.hvVgAQ)
                                    }),
                            (0, l.jsx)(i.zxk, {
                                color: i.zxk.Colors.PRIMARY,
                                onClick: function () {
                                    v(), T(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                                },
                                fullWidth: !0,
                                children: m.intl.string(m.t.bmbHPD)
                            }),
                            (0, l.jsx)(i.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                children: P()
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
