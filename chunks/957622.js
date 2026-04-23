"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(607399),
    a = n(331322),
    o = n(821609),
    c = n(830215),
    d = n(854378),
    u = n(976860),
    _ = n(961350),
    h = n(954571),
    m = n(723702),
    g = n(877062),
    p = n(501187),
    A = n(652215),
    f = n(613057),
    E = n(985018);
let x = (e) => {
        let { title: t, subtitle: n, buttonText: s, buttonOnClick: r } = e;
        return (0, i.jsx)(d.Ay, {
            children: (0, i.jsxs)(a.B, {
                gap: 24,
                children: [
                    (0, i.jsxs)(a.B, {
                        gap: 8,
                        children: [(0, i.jsx)(d.hE, { children: t }), (0, i.jsx)(d.tK, { children: n })],
                    }),
                    (0, i.jsx)(o.$, { onClick: r, text: s, fullWidth: !0 }),
                ],
            }),
        });
    },
    I = function (e) {
        let { match: t, location: a } = e,
            o = (0, r.parse)(a.search).token,
            [I, v] = s.useState("loading"),
            N = s.useRef(!1),
            j = s.useCallback(async (e) => {
                try {
                    h.default.track(A.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await c.A.oneTimeLogin(e),
                        v("login_success"),
                        h.default.track(A.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                        n.g.location.assign(A.BVt.APP);
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Unknown error";
                    h.default.track(A.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_page",
                        error_reason: "api_error",
                        error_message: e,
                    }),
                        v("error");
                }
            }, []),
            C = s.useCallback((e) => {
                let t = _.default.getFingerprint() ?? _.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                g.A.launch(n, (e) => {
                    e
                        ? (h.default.track(A.HAw.DEEP_LINK_CLICKED, {
                              source: "web_page",
                              destination: "discord://login/one-time",
                              deep_link_provider: "protocol",
                              fingerprint: t,
                          }),
                          v("app_launched"))
                        : v("app_launch_not_supported");
                });
            }, []),
            T = s.useCallback(
                (e) => {
                    let t = _.default.getFingerprint() ?? _.default.getId(),
                        i = _.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: s } = n;
                            s.request(A.e$_.DEEP_LINK, {
                                type: f.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: i },
                            })
                                .then((n) => {
                                    n
                                        ? (h.default.track(A.HAw.DEEP_LINK_CLICKED, {
                                              source: "web_page",
                                              destination: "one_time_login_modal",
                                              deep_link_provider: "rpc",
                                              fingerprint: t,
                                          }),
                                          v("app_launched"))
                                        : C(e);
                                })
                                .catch(() => {
                                    C(e);
                                })
                                .then(() => s.disconnect());
                        });
                },
                [C],
            );
        if (
            (s.useEffect(() => {
                let e = null != o && "string" == typeof o,
                    t = l.Fr ? "mobile" : l.v1 ? "tablet" : (0, m.isDesktop)() ? "desktop_app" : "web";
                if ((h.default.track(A.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void v("error");
                if (l.Fr || l.v1) {
                    let e = h.default.getSuperProperties()?.os;
                    h.default.track(A.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, m.isDesktop)() ? j(o) : N.current || ((N.current = !0), v("rpc_attempting"), T(o));
            }, [o, a, j, T]),
            l.Fr || l.v1)
        ) {
            let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
            return (0, i.jsx)(p.W, { token: o, hasError: "error" === I, errorReason: e });
        }
        if ((0, u.MX)()) return null;
        if ("app_launched" === I)
            return (0, i.jsx)(x, {
                title: E.intl.string(E.t.RvUUOy),
                subtitle: E.intl.string(E.t["5/lR0g"]),
                buttonText: E.intl.string(E.t["2ixEBi"]),
                buttonOnClick: () => {
                    h.default.track(A.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: I }), j(o);
                },
            });
        if ("app_launch_not_supported" === I)
            return (0, i.jsx)(x, {
                title: E.intl.string(E.t.qq4tjT),
                subtitle: E.intl.string(E.t.CVxYRo),
                buttonText: E.intl.string(E.t["2ixEBi"]),
                buttonOnClick: () => j(o),
            });
        if ("error" === I) {
            let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
            return (0, i.jsx)(x, {
                title: E.intl.string(E.t.RtCSr1),
                subtitle: E.intl.string(E.t["S+YjYJ"]),
                buttonText: E.intl.string(E.t.j3cG2p),
                buttonOnClick: () => {
                    h.default.track(A.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, u.pX)(A.BVt.LOGIN);
                },
            });
        }
        return (0, i.jsx)(d.Ay, { children: (0, i.jsx)(d.CK, {}) });
    };
