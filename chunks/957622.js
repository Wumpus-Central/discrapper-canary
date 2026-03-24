"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(607399),
    a = n(397927),
    o = n(830215),
    d = n(854378),
    c = n(976860),
    u = n(961350),
    h = n(954571),
    _ = n(723702),
    p = n(877062),
    g = n(501187),
    m = n(652215),
    f = n(613057),
    A = n(985018);
let x = (e) => {
        let { title: t, subtitle: n, buttonText: s, buttonOnClick: r } = e;
        return (0, i.jsx)(d.Ay, {
            children: (0, i.jsxs)(a.BJc, {
                gap: 24,
                children: [
                    (0, i.jsxs)(a.BJc, {
                        gap: 8,
                        children: [(0, i.jsx)(d.hE, { children: t }), (0, i.jsx)(d.tK, { children: n })],
                    }),
                    (0, i.jsx)(a.Button, { onClick: r, text: s, fullWidth: !0 }),
                ],
            }),
        });
    },
    E = function (e) {
        let { match: t, location: a } = e,
            E = (0, r.parse)(a.search).token,
            [I, v] = s.useState("loading"),
            N = s.useRef(!1),
            j = s.useCallback(async (e) => {
                try {
                    h.default.track(m.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await o.A.oneTimeLogin(e),
                        v("login_success"),
                        h.default.track(m.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                        n.g.location.assign(m.BVt.APP);
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Unknown error";
                    h.default.track(m.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_page",
                        error_reason: "api_error",
                        error_message: e,
                    }),
                        v("error");
                }
            }, []),
            S = s.useCallback((e) => {
                let t = u.default.getFingerprint() ?? u.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                p.A.launch(n, (e) => {
                    e
                        ? (h.default.track(m.HAw.DEEP_LINK_CLICKED, {
                              source: "web_page",
                              destination: "discord://login/one-time",
                              deep_link_provider: "protocol",
                              fingerprint: t,
                          }),
                          v("app_launched"))
                        : v("app_launch_not_supported");
                });
            }, []),
            C = s.useCallback(
                (e) => {
                    let t = u.default.getFingerprint() ?? u.default.getId(),
                        i = u.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: s } = n;
                            s.request(m.e$_.DEEP_LINK, {
                                type: f.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: i },
                            })
                                .then((n) => {
                                    n
                                        ? (h.default.track(m.HAw.DEEP_LINK_CLICKED, {
                                              source: "web_page",
                                              destination: "one_time_login_modal",
                                              deep_link_provider: "rpc",
                                              fingerprint: t,
                                          }),
                                          v("app_launched"))
                                        : S(e);
                                })
                                .catch(() => {
                                    S(e);
                                })
                                .then(() => s.disconnect());
                        });
                },
                [S],
            );
        if (
            (s.useEffect(() => {
                let e = null != E && "string" == typeof E,
                    t = l.Fr ? "mobile" : l.v1 ? "tablet" : (0, _.isDesktop)() ? "desktop_app" : "web";
                if ((h.default.track(m.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void v("error");
                if (l.Fr || l.v1) {
                    let e = h.default.getSuperProperties()?.os;
                    h.default.track(m.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, _.isDesktop)() ? j(E) : N.current || ((N.current = !0), v("rpc_attempting"), C(E));
            }, [E, a, j, C]),
            l.Fr || l.v1)
        ) {
            let e = null == E || "string" != typeof E ? "missing_token" : "invalid_token";
            return (0, i.jsx)(g.W, { token: E, hasError: "error" === I, errorReason: e });
        }
        if ((0, c.MX)()) return null;
        if ("app_launched" === I)
            return (0, i.jsx)(x, {
                title: A.intl.string(A.t.RvUUOy),
                subtitle: A.intl.string(A.t["5/lR0g"]),
                buttonText: A.intl.string(A.t["2ixEBi"]),
                buttonOnClick: () => {
                    h.default.track(m.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: I }), j(E);
                },
            });
        if ("app_launch_not_supported" === I)
            return (0, i.jsx)(x, {
                title: A.intl.string(A.t.qq4tjT),
                subtitle: A.intl.string(A.t.CVxYRo),
                buttonText: A.intl.string(A.t["2ixEBi"]),
                buttonOnClick: () => j(E),
            });
        if ("error" === I) {
            let e = null == E || "string" != typeof E ? "missing_token" : "invalid_token";
            return (0, i.jsx)(x, {
                title: A.intl.string(A.t.RtCSr1),
                subtitle: A.intl.string(A.t["S+YjYJ"]),
                buttonText: A.intl.string(A.t.j3cG2p),
                buttonOnClick: () => {
                    h.default.track(m.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, c.pX)(m.BVt.LOGIN);
                },
            });
        }
        return (0, i.jsx)(d.Ay, { children: (0, i.jsx)(d.CK, {}) });
    };
