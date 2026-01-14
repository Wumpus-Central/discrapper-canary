n.d(e, { default: () => T });
var i = n(54381),
    r = n(473749),
    l = n(793030),
    o = n(481060),
    a = n(782568),
    E = n(168107),
    s = n(480916),
    _ = n(81643),
    I = n(880257),
    c = n(313789),
    u = n(526665),
    C = n(518596),
    d = n(63063),
    A = n(247206),
    L = n(981631),
    R = n(526761),
    f = n(388032);
let T = (t) => {
    let { channelId: e, messageId: T, transitionState: g, onClose: O } = t,
        v = (0, I.Z)(),
        M = (0, _.Jm)(),
        N = (0, A.m8)(),
        P = r.useMemo(() => M && N, [M, N]),
        h = r.useCallback(
            (t) => {
                (0, A.aP)({
                    action: t,
                    channelId: e,
                    messageId: T,
                });
            },
            [e, T],
        ),
        p = r.useCallback(() => {
            O(),
                h(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
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
                                    messageId: T,
                                },
                                n,
                            ),
                        );
                });
        }, [e, T, O, h]);
    return (
        r.useEffect(() => {
            (0, A.aP)({
                action: A.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: e,
                messageId: T,
            });
        }, [e, T]),
        (0, i.jsx)(l.Modal, {
            title: f.intl.string(f.t.sGW77l),
            subtitle: (function () {
                if (P)
                    return f.intl.format(f.t["1L0huf"], {
                        handleOnHelpUrlHook: () => {
                            E.Z.openUrl(d.Z.getArticleURL(L.BhN.TIGGER_PAWTECT_LEARN_MORE)),
                                h(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                        },
                    });
                let t = f.intl.string(f.t.RUw0ZC),
                    e = f.intl.string(f.t["E/oQYL"]);
                return v ? t : e;
            })(),
            actions: [
                (function () {
                    if (!N && !P)
                        return {
                            text: f.intl.string(f.t.ZH7P2h),
                            onClick: p,
                            variant: "secondary",
                        };
                })(),
                P
                    ? {
                          text: f.intl.string(f.t.KPGVWl),
                          onClick: function () {
                              O(),
                                  h(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY),
                                  E.Z.showAgeVerificationGetStartedModal({
                                      entryPoint: s.cU.SENSITIVE_MEDIA_LEARN_MORE,
                                  });
                          },
                      }
                    : v
                      ? {
                            text: f.intl.string(f.t["9D+zGX"]),
                            onClick: function () {
                                h(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS);
                                let t = (0, u.Gl)("ExplicitMediaLearnMoreModal");
                                (0, C.openUserSettings)(
                                    t ? c.n.CONTENT_AND_SOCIAL_CONTENT_FILTERS_SETTING : c.n.CONTENT_AND_SOCIAL_PANEL,
                                    {
                                        section: L.oAB.CONTENT_AND_SOCIAL,
                                        scrollPosition: t ? void 0 : R.FY.EXPLICIT_MEDIA_REDACTION_V2,
                                    },
                                ),
                                    O();
                            },
                        }
                      : {
                            text: f.intl.string(f.t.hvVgAZ),
                            onClick: () => {
                                (0, a.Z)(d.Z.getArticleURL(L.BhN.EXPLICIT_MEDIA_REDACTION));
                            },
                        },
            ].filter((t) => void 0 !== t),
            onClose: () => (O(), h(A.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS), Promise.resolve()),
            transitionState: g,
        })
    );
};
