"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(873263),
    a = n(607399),
    o = n(397927),
    d = n(830215),
    c = n(854378),
    u = n(309165),
    h = n(976860),
    _ = n(961350),
    p = n(954571),
    g = n(723702),
    m = n(877062),
    f = n(501187),
    A = n(652215),
    x = n(613057),
    E = n(985018);
let I = (e) => {
    let { title: t, subtitle: n, buttonText: s, buttonOnClick: r } = e;
    return (0, i.jsx)(c.Ay, {
        children: (0, i.jsxs)(o.BJc, {
            gap: 24,
            children: [
                (0, i.jsxs)(o.BJc, {
                    gap: 8,
                    children: [(0, i.jsx)(c.hE, { children: t }), (0, i.jsx)(c.tK, { children: n })],
                }),
                (0, i.jsx)(o.Button, { onClick: r, text: s, fullWidth: !0 }),
            ],
        }),
    });
};
function v(e) {
    let { match: t, location: l } = e,
        o = (0, r.parse)(l.search).token,
        [u, v] = s.useState("loading"),
        N = s.useRef(!1),
        j = s.useCallback(async (e) => {
            try {
                p.default.track(A.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                    await d.A.oneTimeLogin(e),
                    v("login_success"),
                    p.default.track(A.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                    n.g.location.assign(A.BVt.APP);
            } catch (t) {
                let e = t instanceof Error ? t.message : "Unknown error";
                p.default.track(A.HAw.ONE_TIME_LOGIN_ERROR, {
                    source: "web_page",
                    error_reason: "api_error",
                    error_message: e,
                }),
                    v("error");
            }
        }, []),
        S = s.useCallback((e) => {
            let t = _.default.getFingerprint() ?? _.default.getId(),
                n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
            m.A.launch(n, (e) => {
                e
                    ? (p.default.track(A.HAw.DEEP_LINK_CLICKED, {
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
                let t = _.default.getFingerprint() ?? _.default.getId(),
                    i = _.default.getInstallationForTracking();
                Promise.resolve()
                    .then(n.bind(n, 129014))
                    .then((n) => {
                        let { default: s } = n;
                        s.request(A.e$_.DEEP_LINK, {
                            type: x.XK.ONE_TIME_LOGIN,
                            params: { token: e, fingerprint: t, installationId: i },
                        })
                            .then((n) => {
                                n
                                    ? (p.default.track(A.HAw.DEEP_LINK_CLICKED, {
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
            let e = null != o && "string" == typeof o,
                t = a.Fr ? "mobile" : a.v1 ? "tablet" : (0, g.isDesktop)() ? "desktop_app" : "web";
            if ((p.default.track(A.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                return void v("error");
            if (a.Fr || a.v1) {
                let e = p.default.getSuperProperties()?.os;
                p.default.track(A.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                    detection_type: "mobile_ui_shown",
                    device_type: t,
                    platform: e,
                });
                return;
            }
            (0, g.isDesktop)() ? j(o) : N.current || ((N.current = !0), v("rpc_attempting"), C(o));
        }, [o, l, j, C]),
        a.Fr || a.v1)
    ) {
        let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
        return (0, i.jsx)(f.W, { token: o, hasError: "error" === u, errorReason: e });
    }
    if ((0, h.MX)()) return null;
    if ("app_launched" === u)
        return (0, i.jsx)(I, {
            title: E.intl.string(E.t.RvUUOy),
            subtitle: E.intl.string(E.t["5/lR0g"]),
            buttonText: E.intl.string(E.t["2ixEBi"]),
            buttonOnClick: () => {
                p.default.track(A.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: u }), j(o);
            },
        });
    if ("app_launch_not_supported" === u)
        return (0, i.jsx)(I, {
            title: E.intl.string(E.t.qq4tjT),
            subtitle: E.intl.string(E.t.CVxYRo),
            buttonText: E.intl.string(E.t["2ixEBi"]),
            buttonOnClick: () => j(o),
        });
    if ("error" === u) {
        let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
        return (0, i.jsx)(I, {
            title: E.intl.string(E.t.RtCSr1),
            subtitle: E.intl.string(E.t["S+YjYJ"]),
            buttonText: E.intl.string(E.t.j3cG2p),
            buttonOnClick: () => {
                p.default.track(A.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                    (0, h.pX)(A.BVt.LOGIN);
            },
        });
    }
    return (0, i.jsx)(c.Ay, { children: (0, i.jsx)(c.CK, {}) });
}
let N = function (e) {
    let { enabled: t } = (0, u.lq)("OneTimeLoginCardWrapper");
    return t ? (0, i.jsx)(v, { ...e }) : (0, i.jsx)(l.rd, { to: A.BVt.LOGIN });
};
