n.d(t, {
    A: () => y,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    c = n(793574),
    a = n(58149),
    o = n(546183),
    d = n(962173),
    u = n(954571),
    f = n(817818),
    p = n(591552),
    b = n(961973),
    m = n(724531),
    g = n(539916),
    O = n(652215),
    x = n(985018),
    h = n(225305);

function j(e) {
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
}

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function y(e) {
    let { guildId: t, onComplete: n, isLastStep: y, isSubmitting: _ = !1, disableTracking: A } = e,
        N = i.useRef(!1),
        { onboardingConnections: P, isLoading: E } = (0, l.cf)([p.A], () => ({
            onboardingConnections: p.A.getConnections(t),
            isLoading: p.A.isLoading(),
        })),
        D = (0, l.bG)(
            [o.default, d.A],
            () =>
                P.some((e) => {
                    if (e.connection_type === g.wZ.APPLICATION && null != e.application_id) {
                        let t = o.default.getNewestTokenForApplication(e.application_id);
                        return (
                            o.default.getFetchStateForApplication(e.application_id) === o.FetchState.FETCHED &&
                            null != t
                        );
                    }
                    if (e.connection_type === g.wZ.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
                        let t = d.A.getAccount(null, e.provider_id);
                        return null != t && !t.revoked;
                    }
                    return !1;
                }),
            [P],
        );
    i.useEffect(() => {
        if (A || E || 0 === P.length || N.current) return;
        let e = (0, b.H_)(P),
            n = (0, b.OG)(P);
        u.default.track(
            O.HAw.GUILD_ONBOARDING_STEP_VIEWED,
            v(j({}, (0, a.H$)(t)), {
                step: f.l8,
                required: !1,
                provider_connections_connected: e.connected,
                provider_connections_not_connected: e.notConnected,
                application_connections_connected: n.connected,
                application_connections_not_connected: n.notConnected,
            }),
        ),
            (N.current = !0);
    }, [t, E, P, A]);
    let w = i.useCallback(() => {
        if (!A) {
            let e = (0, b.H_)(P),
                n = (0, b.OG)(P);
            u.default.track(
                O.HAw.GUILD_ONBOARDING_STEP_COMPLETED,
                v(j({}, (0, a.H$)(t)), {
                    step: f.l8,
                    skipped: !D,
                    back: !1,
                    options_selected: 0,
                    in_onboarding: !0,
                    is_final_step: y,
                    provider_connections_connected: e.connected,
                    provider_connections_not_connected: e.notConnected,
                    application_connections_connected: n.connected,
                    application_connections_not_connected: n.notConnected,
                }),
            );
        }
        n();
    }, [n, A, t, P, D, y]);
    return E
        ? (0, r.jsxs)("div", {
              className: h.g4,
              children: [
                  (0, r.jsx)(s.y$y, {}),
                  (0, r.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: x.intl.string(x.t.ZTNur7),
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: h.kL,
              children: (0, r.jsxs)("div", {
                  className: h.Qs,
                  children: [
                      (0, r.jsxs)("div", {
                          className: h.gT,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: h.wx,
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: h.qd,
                                          children: (0, r.jsx)(s.Heading, {
                                              variant: "heading-xl/semibold",
                                              children: x.intl.string(x.t.eDVMrA),
                                          }),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: h.ux,
                                          children: (0, r.jsx)(s.Text, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: x.intl.string(x.t.BozOXu),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: h.A5,
                                  children: (0, r.jsx)("div", {
                                      className: h.eF,
                                      children: P.map((e, n) =>
                                          (0, r.jsx)(
                                              m.A,
                                              {
                                                  connection: e,
                                                  guildId: t,
                                                  location: c.A.GUILD_ONBOARDING,
                                              },
                                              n,
                                          ),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: h.qr,
                          children: (0, r.jsxs)("div", {
                              className: h.o1,
                              children: [
                                  (0, r.jsx)("div", {}),
                                  (0, r.jsx)("div", {
                                      className: h.E3,
                                      children: (0, r.jsx)(s.Button, {
                                          variant: D ? "primary" : "secondary",
                                          onClick: w,
                                          text: D
                                              ? y
                                                  ? "".concat(x.intl.string(x.t["8SuVoE"]), " \uD83C\uDF89")
                                                  : x.intl.string(x.t.PDTjLN)
                                              : x.intl.string(x.t["5Wxrcd"]),
                                          disabled: _,
                                          loading: _,
                                          icon: y ? void 0 : s.KS6,
                                          iconPosition: "end",
                                      }),
                                  }),
                              ],
                          }),
                      }),
                  ],
              }),
          });
}
