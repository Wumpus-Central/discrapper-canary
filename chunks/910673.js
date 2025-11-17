n.d(e, { default: () => R });
var i = n(54381),
    r = n(473749),
    l = n(793030),
    o = n(481060),
    a = n(782568),
    s = n(168107),
    E = n(480916),
    _ = n(81643),
    I = n(880257),
    c = n(313789),
    u = n(518596),
    C = n(63063),
    A = n(247206),
    d = n(981631),
    L = n(526761),
    f = n(388032);
let R = (t) => {
    let { channelId: e, messageId: R, transitionState: g, onClose: O } = t,
        P = (0, I.Z)(),
        v = (0, _.Jm)(),
        T = (0, A.m8)(),
        h = r.useMemo(() => v && T, [v, T]),
        M = r.useCallback(
            (t) => {
                (0, A.aP)({
                    action: t,
                    channelId: e,
                    messageId: R,
                });
            },
            [e, R],
        ),
        p = r.useCallback(() => {
            O(),
                M(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                (0, o.ZDy)(async () => {
                    let { default: t } = await n(788679);
                    return (n) =>
                        (0, i.jsx)(
                            t,
                            (function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (e) {
                                            var i;
                                            (i = n[e]),
                                                e in t
                                                    ? Object.defineProperty(t, e, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (t[e] = i);
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
        }, [e, R, O, M]);
    return (
        r.useEffect(() => {
            (0, A.aP)({
                action: A.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: e,
                messageId: R,
            });
        }, [e, R]),
        (0, i.jsx)(l.Modal, {
            title: f.intl.string(f.t.sGW77l),
            subtitle: (function () {
                if (h)
                    return f.intl.format(f.t["1L0huf"], {
                        handleOnHelpUrlHook: () => {
                            s.Z.openUrl(C.Z.getArticleURL(d.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                                M(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                        },
                    });
                let t = f.intl.string(f.t.RUw0ZC),
                    e = f.intl.string(f.t["E/oQYL"]);
                return P ? t : e;
            })(),
            actions: [
                (function () {
                    if (!T && !h)
                        return {
                            text: f.intl.string(f.t.ZH7P2h),
                            onClick: p,
                            variant: "secondary",
                        };
                })(),
                h
                    ? {
                          text: f.intl.string(f.t.KPGVWl),
                          onClick: function () {
                              O(),
                                  M(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY),
                                  s.Z.showAgeVerificationGetStartedModal({
                                      entryPoint: E.cU.SENSITIVE_MEDIA_LEARN_MORE,
                                  });
                          },
                      }
                    : P
                      ? {
                            text: f.intl.string(f.t["9D+zGX"]),
                            onClick: function () {
                                M(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
                                    (0, u.openUserSettings)(c.n.CONTENT_AND_SOCIAL_PANEL, {
                                        section: d.oAB.CONTENT_AND_SOCIAL,
                                        scrollPosition: L.FY.EXPLICIT_MEDIA_REDACTION_V2,
                                    }),
                                    O();
                            },
                        }
                      : {
                            text: f.intl.string(f.t.hvVgAZ),
                            onClick: () => {
                                (0, a.Z)(C.Z.getArticleURL(d.BhN.EXPLICIT_MEDIA_REDACTION));
                            },
                        },
            ].filter((t) => void 0 !== t),
            onClose: () => (O(), M(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
            transitionState: g,
        })
    );
};
