n.d(t, { A: () => M });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(821609),
    a = n(691885),
    o = n(834730),
    d = n(289873),
    c = n(331322),
    u = n(683071),
    m = n(452027),
    g = n(975807),
    h = n(469993),
    x = n(486802),
    _ = n(194362),
    p = n(95035),
    A = n(411671),
    E = n(130771),
    f = n(260509),
    j = n(287809),
    N = n(531685),
    I = n(954571),
    C = n(599941),
    b = n(11351),
    v = n(319225),
    S = n(781289),
    T = n(652215),
    y = n(705751),
    R = n(269927),
    L = n(985018),
    D = n(931227);
function O(e) {
    let { onCreateTeamClick: t, isGuildOwner: n } = e;
    return (0, i.jsx)("div", {
        className: D.xF,
        children: (0, i.jsx)(r.$, { text: L.intl.string(L.t["5k6FfR"]), disabled: !n, onClick: t, fullWidth: !0 }),
    });
}
function G(e) {
    let { guild: t, eligibleTeams: n, isGuildOwner: s } = e,
        [d, c] = l.useState(),
        { enableGuildMonetizationForTeam: u, submitting: m, error: g } = (0, x.A)(),
        { fetchSubscriptionsSettings: h } = (0, C.XE)(),
        _ = (0, b.gN)(),
        p = l.useMemo(() => n.map((e) => ({ id: e.id, label: e.name, value: e.id })), [n]),
        A = async () => {
            (await u(t, d, y.S7.GUILD_ROLE_SUBSCRIPTIONS)) &&
                (h(t.id), (0, v.E)({ title: L.intl.string(L.t["AP/2qe"]), body: L.intl.string(L.t.kHMgaK) }));
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: D.xF,
                children: [
                    (0, i.jsx)(a.l, {
                        selectionMode: "single",
                        options: p,
                        placeholder: L.intl.string(L.t.QXf93A),
                        value: d,
                        disabled: 0 === p.length || _ || !s,
                        onSelectionChange: c,
                        label: L.intl.string(L.t.QXf93A),
                        hideLabel: !0,
                    }),
                    (0, i.jsx)(r.$, {
                        text: L.intl.string(L.t["9HU3ZV"]),
                        onClick: A,
                        loading: m,
                        disabled: null == d || _ || !s,
                    }),
                ],
            }),
            null != g &&
                (0, i.jsx)(o.E, { className: D.z3, variant: "text-sm/normal", children: g.getAnyErrorMessage() }),
        ],
    });
}
let M = (e) => {
    let { guild: t } = e,
        n = (0, s.bG)([j.default], () => j.default.getCurrentUser()),
        r = (0, f.bM)(t, n),
        a = (0, h.ME)(t),
        o = (0, s.bG)([N.A], () => N.A.isFocused()),
        { teams: x, loading: C } = (0, E.A)({ refreshOnDepChange: o }),
        b = l.useMemo(
            () => x.filter((e) => e.payout_account_status !== R.y.BLOCKED && (0, A.y)(n?.id ?? T.dJq, e)),
            [x, n],
        ),
        v = b.length > 0,
        y = l.useCallback(async () => {
            I.default.track(T.HAw.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                is_onboarding_v2: a,
                has_eligible_team: v,
                guild_id: t.id,
                is_owner: r,
            });
            let e = await (0, _.a)(T.dSh.DEVELOPER_PORTAL_TEAMS);
            (0, g.A)(e);
        }, [t, r, a, v]),
        M = l.useCallback((e) => (r ? (0, i.jsx)(p.A, { onClick: y, children: e }) : e), [y, r]);
    return C
        ? (0, i.jsx)(d.y, {})
        : (0, i.jsxs)(c.B, {
              gap: 32,
              children: [
                  !r &&
                      (0, i.jsx)("div", {
                          className: D.b8,
                          children: (0, i.jsx)(u.w, { type: "warning", children: L.intl.string(L.t.t56qWO) }),
                      }),
                  (0, i.jsx)(m.D, {
                      label: L.intl.string(L.t["sYLCY/"]),
                      disabled: !r,
                      description: L.intl.format(L.t["5mfqpW"], { onCreateTeamHook: M }),
                      children: v
                          ? (0, i.jsx)(G, { guild: t, eligibleTeams: b, isGuildOwner: r })
                          : (0, i.jsx)(O, { onCreateTeamClick: y, isGuildOwner: r }),
                  }),
                  (0, i.jsx)(m.D, {
                      label: L.intl.string(L.t["0n7R2X"]),
                      children: (0, i.jsx)(S.A, { guildId: t.id, allPeriods: [] }),
                  }),
              ],
          });
};
