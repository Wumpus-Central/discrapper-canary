n.d(e, { default: () => R });
var r = n(951288),
    l = n(647438),
    i = n(82659),
    o = n(481060),
    a = n(230711),
    s = n(782568),
    E = n(168107),
    u = n(480916),
    I = n(81643),
    _ = n(880257),
    c = n(63063),
    d = n(247206),
    f = n(981631),
    C = n(526761),
    A = n(388032);
let R = (t) => {
    let { channelId: e, messageId: R, transitionState: g, onClose: L } = t,
        v = (0, _.Z)(),
        O = (0, I.Jm)(),
        P = (0, d.m8)(),
        h = l.useMemo(() => O && P, [O, P]),
        M = l.useCallback(
            (t) => {
                (0, d.aP)({
                    action: t,
                    channelId: e,
                    messageId: R,
                });
            },
            [e, R],
        ),
        T = l.useCallback(() => {
            L(),
                M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, o.ZDy)(async () => {
                    let { default: t } = await n(788679);
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            (function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (e) {
                                            var r;
                                            (r = n[e]),
                                                e in t
                                                    ? Object.defineProperty(t, e, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (t[e] = r);
                                        });
                                }
                                return t;
                            })(
                                {
                                    channelId: e,
                                    messageId: R,
                                },
                                n,
                            ),
                        );
                });
        }, [e, R, L, M]);
    return (
        l.useEffect(() => {
            (0, d.aP)({
                action: d.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: e,
                messageId: R,
            });
        }, [e, R]),
        (0, r.jsx)(i.Modal, {
            title: A.intl.string(A.t.sGW77u),
            subtitle: (function () {
                if (h)
                    return A.intl.format(A.t["1L0hub"], {
                        handleOnHelpUrlHook: () => {
                            E.Z.openUrl(c.Z.getArticleURL(f.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                                M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                        },
                    });
                let t = A.intl.string(A.t.RUw0ZG),
                    e = A.intl.string(A.t["E/oQYG"]);
                return v ? t : e;
            })(),
            actions: [
                (function () {
                    if (!P && !h)
                        return {
                            text: A.intl.string(A.t.ZH7P2t),
                            onClick: T,
                            variant: "secondary",
                        };
                })(),
                h
                    ? {
                          text: A.intl.string(A.t.KPGVWl),
                          onClick: function () {
                              L(),
                                  M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY),
                                  E.Z.showAgeVerificationGetStartedModal(u.cU.SENSITIVE_MEDIA_LEARN_MORE);
                          },
                      }
                    : v
                      ? {
                            text: A.intl.string(A.t["9D+zGR"]),
                            onClick: function () {
                                M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                    a.Z.open(f.oAB.CONTENT_AND_SOCIAL, null, {
                                        scrollPosition: C.FY.EXPLICIT_MEDIA_REDACTION_V2,
                                    }),
                                    L();
                            },
                        }
                      : {
                            text: A.intl.string(A.t.hvVgAQ),
                            onClick: () => {
                                (0, s.Z)(c.Z.getArticleURL(f.BhN.EXPLICIT_MEDIA_REDACTION));
                            },
                        },
            ].filter((t) => void 0 !== t),
            onClose: () => (L(), M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
            transitionState: g,
        })
    );
};
