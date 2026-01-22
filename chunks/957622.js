n.d(t, {
    A: () => j,
}),
    n(747238),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    s = n(492462),
    l = n(960488),
    a = n(607399),
    o = n(397927),
    c = n(830215),
    u = n(854378),
    d = n(309165),
    h = n(976860),
    f = n(961350),
    p = n(954571),
    g = n(723702),
    m = n(877062),
    A = n(501187),
    x = n(652215),
    _ = n(613057),
    E = n(985018);
let b = (e) => {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: s } = e;
    return (0, r.jsx)(u.Ay, {
        children: (0, r.jsxs)(o.BJc, {
            gap: 24,
            children: [
                (0, r.jsxs)(o.BJc, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(u.hE, {
                            children: t,
                        }),
                        (0, r.jsx)(u.tK, {
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(o.Button, {
                    onClick: s,
                    text: i,
                    fullWidth: !0,
                }),
            ],
        }),
    });
};

function v(e) {
    let { match: t, location: l } = e,
        o = (0, s.parse)(l.search).token,
        [d, v] = i.useState("loading"),
        j = i.useRef(!1),
        y = i.useCallback(async (e) => {
            try {
                p.default.track(x.HAw.ONE_TIME_LOGIN_ATTEMPTED, {
                    source: "web_page",
                }),
                    await c.A.oneTimeLogin(e),
                    v("login_success"),
                    p.default.track(x.HAw.LOGIN_SUCCESSFUL, {
                        source: "web_page",
                        login_method: "one_time_login",
                    }),
                    n.g.location.assign(x.BVt.APP);
            } catch (t) {
                let e = t instanceof Error ? t.message : "Unknown error";
                p.default.track(x.HAw.ONE_TIME_LOGIN_ERROR, {
                    source: "web_page",
                    error_reason: "api_error",
                    error_message: e,
                }),
                    v("error");
            }
        }, []),
        S = i.useCallback((e) => {
            var t;
            let n = null != (t = f.default.getFingerprint()) ? t : f.default.getId(),
                r = "discord://login/one-time?token=".concat(encodeURIComponent(e));
            m.A.launch(r, (e) => {
                e
                    ? (p.default.track(x.HAw.DEEP_LINK_CLICKED, {
                          source: "web_page",
                          destination: "discord://login/one-time",
                          deep_link_provider: "protocol",
                          fingerprint: n,
                      }),
                      v("app_launched"))
                    : v("app_launch_not_supported");
            });
        }, []),
        N = i.useCallback(
            (e) => {
                var t;
                let r = null != (t = f.default.getFingerprint()) ? t : f.default.getId();
                Promise.resolve()
                    .then(n.bind(n, 129014))
                    .then((t) => {
                        let { default: n } = t;
                        n.request(x.e$_.DEEP_LINK, {
                            type: _.XK.ONE_TIME_LOGIN,
                            params: {
                                token: e,
                                fingerprint: r,
                            },
                        })
                            .then((t) => {
                                null != t && t
                                    ? (p.default.track(x.HAw.DEEP_LINK_CLICKED, {
                                          source: "web_page",
                                          destination: "one_time_login_modal",
                                          deep_link_provider: "rpc",
                                          fingerprint: r,
                                      }),
                                      v("app_launched"))
                                    : S(e);
                            })
                            .catch(() => {
                                S(e);
                            })
                            .then(() => n.disconnect());
                    });
            },
            [S],
        );
    if (
        (i.useEffect(() => {
            let e = null != o && "string" == typeof o,
                t = a.Fr ? "mobile" : a.v1 ? "tablet" : (0, g.isDesktop)() ? "desktop_app" : "web";
            if (
                (p.default.track(x.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, {
                    has_token: e,
                    device_type: t,
                }),
                !e)
            )
                return void v("error");
            if (a.Fr || a.v1) {
                var n;
                let e = null == (n = p.default.getSuperProperties()) ? void 0 : n.os;
                p.default.track(x.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                    detection_type: "mobile_ui_shown",
                    device_type: t,
                    platform: e,
                });
                return;
            }
            (0, g.isDesktop)() ? y(o) : j.current || ((j.current = !0), v("rpc_attempting"), N(o));
        }, [o, l, y, N]),
        a.Fr || a.v1)
    ) {
        let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
        return (0, r.jsx)(A.W, {
            token: o,
            hasError: "error" === d,
            errorReason: e,
        });
    }
    if ((0, h.MX)()) return null;
    if ("app_launched" === d)
        return (0, r.jsx)(b, {
            title: E.intl.string(E.t.RvUUOy),
            subtitle: E.intl.string(E.t["5/lR0g"]),
            buttonText: E.intl.string(E.t["2ixEBi"]),
            buttonOnClick: () => {
                p.default.track(x.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, {
                    previous_status: d,
                }),
                    y(o);
            },
        });
    if ("app_launch_not_supported" === d)
        return (0, r.jsx)(b, {
            title: E.intl.string(E.t.qq4tjT),
            subtitle: E.intl.string(E.t.CVxYRo),
            buttonText: E.intl.string(E.t["2ixEBi"]),
            buttonOnClick: () => y(o),
        });
    if ("error" === d) {
        let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
        return (0, r.jsx)(b, {
            title: E.intl.string(E.t.RtCSr1),
            subtitle: E.intl.string(E.t["S+YjYJ"]),
            buttonText: E.intl.string(E.t.j3cG2p),
            buttonOnClick: () => {
                p.default.track(x.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, {
                    error_reason: e,
                }),
                    (0, h.pX)(x.BVt.LOGIN);
            },
        });
    }
    return (0, r.jsx)(u.Ay, {
        children: (0, r.jsx)(u.CK, {}),
    });
}
let j = function (e) {
    let { enabled: t } = (0, d.lq)("OneTimeLoginCardWrapper");
    return t
        ? (0, r.jsx)(
              v,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              }),
                          )),
                          r.forEach(function (t) {
                              var r;
                              (r = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = r);
                          });
                  }
                  return e;
              })({}, e),
          )
        : (0, r.jsx)(l.rd, {
              to: x.BVt.LOGIN,
          });
};
