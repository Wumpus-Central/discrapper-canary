n.d(t, { A: () => v });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(793574),
    o = n(58149),
    c = n(546183),
    d = n(962173),
    u = n(954571),
    m = n(817818),
    _ = n(591552),
    x = n(961973),
    p = n(724531),
    g = n(539916),
    h = n(652215),
    f = n(985018),
    A = n(576002);
function v(e) {
    let { guildId: t, onComplete: n, isLastStep: v, isSubmitting: N = !1, disableTracking: j } = e,
        b = s.useRef(!1),
        { onboardingConnections: E, isLoading: C } = (0, l.cf)([_.A], () => ({
            onboardingConnections: _.A.getConnections(t),
            isLoading: _.A.isLoading(),
        })),
        I = (0, l.bG)(
            [c.default, d.A],
            () =>
                E.some((e) => {
                    if (e.connection_type === g.wZ.APPLICATION && null != e.application_id) {
                        let t = c.default.getNewestTokenForApplication(e.application_id);
                        return (
                            c.default.getFetchStateForApplication(e.application_id) === c.FetchState.FETCHED &&
                            null != t
                        );
                    }
                    if (e.connection_type === g.wZ.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
                        let t = d.A.getAccount(null, e.provider_id);
                        return null != t && !t.revoked;
                    }
                    return !1;
                }),
            [E],
        );
    s.useEffect(() => {
        if (j || C || 0 === E.length || b.current) return;
        let e = (0, x.H_)(E),
            n = (0, x.OG)(E);
        u.default.track(h.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
            ...(0, o.H$)(t),
            step: m.l8,
            required: !1,
            provider_connections_connected: e.connected,
            provider_connections_not_connected: e.notConnected,
            application_connections_connected: n.connected,
            application_connections_not_connected: n.notConnected,
        }),
            (b.current = !0);
    }, [t, C, E, j]);
    let O = s.useCallback(() => {
        if (!j) {
            let e = (0, x.H_)(E),
                n = (0, x.OG)(E);
            u.default.track(h.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, o.H$)(t),
                step: m.l8,
                skipped: !I,
                back: !1,
                options_selected: 0,
                in_onboarding: !0,
                is_final_step: v,
                provider_connections_connected: e.connected,
                provider_connections_not_connected: e.notConnected,
                application_connections_connected: n.connected,
                application_connections_not_connected: n.notConnected,
            });
        }
        n();
    }, [n, j, t, E, I, v]);
    return C
        ? (0, i.jsxs)("div", {
              className: A.g4,
              children: [
                  (0, i.jsx)(r.y$y, {}),
                  (0, i.jsx)(r.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: f.intl.string(f.t.ZTNur7),
                  }),
              ],
          })
        : (0, i.jsx)("div", {
              className: A.kL,
              children: (0, i.jsxs)("div", {
                  className: A.Qs,
                  children: [
                      (0, i.jsxs)("div", {
                          className: A.gT,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: A.wx,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: A.qd,
                                          children: (0, i.jsx)(r.Heading, {
                                              variant: "heading-xl/semibold",
                                              children: f.intl.string(f.t.eDVMrA),
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: A.ux,
                                          children: (0, i.jsx)(r.Text, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: f.intl.string(f.t.BozOXu),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: A.A5,
                                  children: (0, i.jsx)("div", {
                                      className: A.eF,
                                      children: E.map((e, n) =>
                                          (0, i.jsx)(
                                              p.A,
                                              { connection: e, guildId: t, location: a.A.GUILD_ONBOARDING },
                                              n,
                                          ),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: A.qr,
                          children: (0, i.jsxs)("div", {
                              className: A.o1,
                              children: [
                                  (0, i.jsx)("div", {}),
                                  (0, i.jsx)("div", {
                                      className: A.E3,
                                      children: (0, i.jsx)(r.Button, {
                                          variant: I ? "primary" : "secondary",
                                          onClick: O,
                                          text: I
                                              ? v
                                                  ? `${f.intl.string(f.t["8SuVoE"])} 🎉`
                                                  : f.intl.string(f.t.PDTjLN)
                                              : f.intl.string(f.t["5Wxrcd"]),
                                          disabled: N,
                                          loading: N,
                                          icon: v ? void 0 : r.KS6,
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
