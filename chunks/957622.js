"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(960488),
    a = n(607399),
    o = n(397927),
    c = n(830215),
    d = n(854378),
    u = n(309165),
    h = n(976860),
    _ = n(961350),
    p = n(954571),
    g = n(723702),
    m = n(877062),
    f = n(501187),
    A = n(652215),
    E = n(613057),
    x = n(985018);
let v = (e) => {
    let { title: t, subtitle: n, buttonText: s, buttonOnClick: r } = e;
    return (0, i.jsx)(d.Ay, {
        children: (0, i.jsxs)(o.BJc, {
            gap: 24,
            children: [
                (0, i.jsxs)(o.BJc, {
                    gap: 8,
                    children: [(0, i.jsx)(d.hE, { children: t }), (0, i.jsx)(d.tK, { children: n })],
                }),
                (0, i.jsx)(o.Button, { onClick: r, text: s, fullWidth: !0 }),
            ],
        }),
    });
};
function I(e) {
    let { match: t, location: l } = e,
        o = (0, r.parse)(l.search).token,
        [u, I] = s.useState("loading"),
        N = s.useRef(!1),
        S = s.useCallback(async (e) => {
            try {
                p.default.track(A.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                    await c.A.oneTimeLogin(e),
                    I("login_success"),
                    p.default.track(A.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                    n.g.location.assign(A.BVt.APP);
            } catch (t) {
                let e = t instanceof Error ? t.message : "Unknown error";
                p.default.track(A.HAw.ONE_TIME_LOGIN_ERROR, {
                    source: "web_page",
                    error_reason: "api_error",
                    error_message: e,
                }),
                    I("error");
            }
        }, []),
        j = s.useCallback((e) => {
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
                      I("app_launched"))
                    : I("app_launch_not_supported");
            });
        }, []),
        C = s.useCallback(
            (e) => {
                let t = _.default.getFingerprint() ?? _.default.getId();
                Promise.resolve()
                    .then(n.bind(n, 129014))
                    .then((n) => {
                        let { default: i } = n;
                        i.request(A.e$_.DEEP_LINK, { type: E.XK.ONE_TIME_LOGIN, params: { token: e, fingerprint: t } })
                            .then((n) => {
                                n
                                    ? (p.default.track(A.HAw.DEEP_LINK_CLICKED, {
                                          source: "web_page",
                                          destination: "one_time_login_modal",
                                          deep_link_provider: "rpc",
                                          fingerprint: t,
                                      }),
                                      I("app_launched"))
                                    : j(e);
                            })
                            .catch(() => {
                                j(e);
                            })
                            .then(() => i.disconnect());
                    });
            },
            [j],
        );
    if (
        (s.useEffect(() => {
            let e = null != o && "string" == typeof o,
                t = a.Fr ? "mobile" : a.v1 ? "tablet" : (0, g.isDesktop)() ? "desktop_app" : "web";
            if ((p.default.track(A.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                return void I("error");
            if (a.Fr || a.v1) {
                let e = p.default.getSuperProperties()?.os;
                p.default.track(A.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                    detection_type: "mobile_ui_shown",
                    device_type: t,
                    platform: e,
                });
                return;
            }
            (0, g.isDesktop)() ? S(o) : N.current || ((N.current = !0), I("rpc_attempting"), C(o));
        }, [o, l, S, C]),
        a.Fr || a.v1)
    ) {
        let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
        return (0, i.jsx)(f.W, { token: o, hasError: "error" === u, errorReason: e });
    }
    if ((0, h.MX)()) return null;
    if ("app_launched" === u)
        return (0, i.jsx)(v, {
            title: x.intl.string(x.t.RvUUOy),
            subtitle: x.intl.string(x.t["5/lR0g"]),
            buttonText: x.intl.string(x.t["2ixEBi"]),
            buttonOnClick: () => {
                p.default.track(A.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: u }), S(o);
            },
        });
    if ("app_launch_not_supported" === u)
        return (0, i.jsx)(v, {
            title: x.intl.string(x.t.qq4tjT),
            subtitle: x.intl.string(x.t.CVxYRo),
            buttonText: x.intl.string(x.t["2ixEBi"]),
            buttonOnClick: () => S(o),
        });
    if ("error" === u) {
        let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
        return (0, i.jsx)(v, {
            title: x.intl.string(x.t.RtCSr1),
            subtitle: x.intl.string(x.t["S+YjYJ"]),
            buttonText: x.intl.string(x.t.j3cG2p),
            buttonOnClick: () => {
                p.default.track(A.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                    (0, h.pX)(A.BVt.LOGIN);
            },
        });
    }
    return (0, i.jsx)(d.Ay, { children: (0, i.jsx)(d.CK, {}) });
}
let N = function (e) {
    let { enabled: t } = (0, u.lq)("OneTimeLoginCardWrapper");
    return t ? (0, i.jsx)(I, { ...e }) : (0, i.jsx)(l.rd, { to: A.BVt.LOGIN });
};
