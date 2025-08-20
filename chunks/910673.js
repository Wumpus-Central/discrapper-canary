n.d(e, { default: () => f });
var l = n(951288),
    r = n(647438),
    i = n(82659),
    o = n(481060),
    a = n(230711),
    E = n(782568),
    s = n(168107),
    I = n(480916),
    _ = n(81643),
    u = n(880257),
    c = n(63063),
    d = n(247206),
    C = n(981631),
    A = n(526761),
    R = n(388032);
let f = (t) => {
    let { channelId: e, messageId: f, transitionState: g, onClose: L } = t,
        v = (0, u.Z)(),
        O = (0, _.Jm)(),
        P = (0, d.m8)(),
        h = r.useMemo(() => O && P, [O, P]),
        M = r.useCallback(
            (t) => {
                (0, d.aP)({
                    action: t,
                    channelId: e,
                    messageId: f,
                });
            },
            [e, f],
        ),
        T = r.useCallback(() => {
            L(),
                M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, o.ZDy)(async () => {
                    let { default: t } = await n(788679);
                    return (n) =>
                        (0, l.jsx)(
                            t,
                            (function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {},
                                        l = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (l = l.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                            }),
                                        )),
                                        l.forEach(function (e) {
                                            var l;
                                            (l = n[e]),
                                                e in t
                                                    ? Object.defineProperty(t, e, {
                                                          value: l,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (t[e] = l);
                                        });
                                }
                                return t;
                            })(
                                {
                                    channelId: e,
                                    messageId: f,
                                },
                                n,
                            ),
                        );
                });
        }, [e, f, L, M]);
    return (
        r.useEffect(() => {
            (0, d.aP)({
                action: d.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: e,
                messageId: f,
            });
        }, [e, f]),
        (0, l.jsx)(i.Modal, {
            title: R.intl.string(R.t.sGW77u),
            subtitle: (function () {
                if (h)
                    return R.intl.format(R.t["1L0hub"], {
                        handleOnHelpUrlHook: () => {
                            s.Z.openUrl(c.Z.getArticleURL(C.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                                M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                        },
                    });
                let t = R.intl.string(R.t.RUw0ZG),
                    e = R.intl.string(R.t["E/oQYG"]);
                return v ? t : e;
            })(),
            actions: [
                (function () {
                    if (!P && !h)
                        return {
                            text: R.intl.string(R.t.ZH7P2t),
                            onClick: T,
                            variant: "secondary",
                        };
                })(),
                h
                    ? {
                          text: R.intl.string(R.t.KPGVWl),
                          onClick: function () {
                              L(),
                                  M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY),
                                  s.Z.showAgeVerificationGetStartedModal(I.cU.SENSITIVE_MEDIA_LEARN_MORE);
                          },
                      }
                    : v
                      ? {
                            text: R.intl.string(R.t["9D+zGR"]),
                            onClick: function () {
                                M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                    a.Z.open(C.oAB.CONTENT_AND_SOCIAL, null, {
                                        scrollPosition: A.FY.EXPLICIT_MEDIA_REDACTION_V2,
                                    }),
                                    L();
                            },
                        }
                      : {
                            text: R.intl.string(R.t.hvVgAQ),
                            onClick: () => {
                                (0, E.Z)(c.Z.getArticleURL(C.BhN.EXPLICIT_MEDIA_REDACTION));
                            },
                        },
            ].filter((t) => void 0 !== t),
            onClose: () => (L(), M(d.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
            transitionState: g,
        })
    );
};
