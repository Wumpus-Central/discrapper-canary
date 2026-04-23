n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(289873),
    a = n(834730),
    o = n(534514),
    c = n(821609),
    d = n(554830),
    u = n(793574),
    m = n(58149),
    _ = n(546183),
    p = n(962173),
    x = n(954571),
    g = n(817818),
    h = n(591552),
    f = n(961973),
    A = n(724531),
    v = n(539916),
    N = n(652215),
    E = n(985018),
    j = n(576002);
function b(e) {
    let { guildId: t, onComplete: n, isLastStep: b, isSubmitting: C = !1, disableTracking: I } = e,
        O = s.useRef(!1),
        { onboardingConnections: D, isLoading: y } = (0, l.cf)([h.A], () => ({
            onboardingConnections: h.A.getConnections(t),
            isLoading: h.A.isLoading(),
        })),
        P = (0, l.bG)(
            [_.default, p.A],
            () =>
                D.some((e) => {
                    if (e.connection_type === v.wZ.APPLICATION && null != e.application_id) {
                        let t = _.default.getNewestTokenForApplication(e.application_id);
                        return (
                            _.default.getFetchStateForApplication(e.application_id) === _.FetchState.FETCHED &&
                            null != t
                        );
                    }
                    if (e.connection_type === v.wZ.PROVIDER_CONNECTED_ACCOUNT && null != e.provider_id) {
                        let t = p.A.getAccount(null, e.provider_id);
                        return null != t && !t.revoked;
                    }
                    return !1;
                }),
            [D],
        );
    s.useEffect(() => {
        if (I || y || 0 === D.length || O.current) return;
        let e = (0, f.H_)(D),
            n = (0, f.OG)(D);
        x.default.track(N.HAw.GUILD_ONBOARDING_STEP_VIEWED, {
            ...(0, m.H$)(t),
            step: g.l8,
            required: !1,
            provider_connections_connected: e.connected,
            provider_connections_not_connected: e.notConnected,
            application_connections_connected: n.connected,
            application_connections_not_connected: n.notConnected,
        }),
            (O.current = !0);
    }, [t, y, D, I]);
    let S = s.useCallback(() => {
        if (!I) {
            let e = (0, f.H_)(D),
                n = (0, f.OG)(D);
            x.default.track(N.HAw.GUILD_ONBOARDING_STEP_COMPLETED, {
                ...(0, m.H$)(t),
                step: g.l8,
                skipped: !P,
                back: !1,
                options_selected: 0,
                in_onboarding: !0,
                is_final_step: b,
                provider_connections_connected: e.connected,
                provider_connections_not_connected: e.notConnected,
                application_connections_connected: n.connected,
                application_connections_not_connected: n.notConnected,
            });
        }
        n();
    }, [n, I, t, D, P, b]);
    return y
        ? (0, i.jsxs)("div", {
              className: j.g4,
              children: [
                  (0, i.jsx)(r.y, {}),
                  (0, i.jsx)(a.E, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: E.intl.string(E.t.ZTNur7),
                  }),
              ],
          })
        : (0, i.jsx)("div", {
              className: j.kL,
              children: (0, i.jsxs)("div", {
                  className: j.Qs,
                  children: [
                      (0, i.jsxs)("div", {
                          className: j.gT,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: j.wx,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: j.qd,
                                          children: (0, i.jsx)(o.D, {
                                              variant: "heading-xl/semibold",
                                              children: E.intl.string(E.t.eDVMrA),
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: j.ux,
                                          children: (0, i.jsx)(a.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: E.intl.string(E.t.BozOXu),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: j.A5,
                                  children: (0, i.jsx)("div", {
                                      className: j.eF,
                                      children: D.map((e, n) =>
                                          (0, i.jsx)(
                                              A.A,
                                              { connection: e, guildId: t, location: u.A.GUILD_ONBOARDING },
                                              n,
                                          ),
                                      ),
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: j.qr,
                          children: (0, i.jsxs)("div", {
                              className: j.o1,
                              children: [
                                  (0, i.jsx)("div", {}),
                                  (0, i.jsx)("div", {
                                      className: j.E3,
                                      children: (0, i.jsx)(c.$, {
                                          variant: P ? "primary" : "secondary",
                                          onClick: S,
                                          text: P
                                              ? b
                                                  ? `${E.intl.string(E.t["8SuVoE"])} 🎉`
                                                  : E.intl.string(E.t.PDTjLN)
                                              : E.intl.string(E.t["5Wxrcd"]),
                                          disabled: C,
                                          loading: C,
                                          icon: b ? void 0 : d.K,
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
