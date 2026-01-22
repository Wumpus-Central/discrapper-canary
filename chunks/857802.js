n.d(t, {
    A: () => C,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(732955),
    a = n(397927),
    c = n(975807),
    o = n(469993),
    d = n(486802),
    u = n(194362),
    f = n(95035),
    g = n(411671),
    b = n(130771),
    m = n(260509),
    p = n(287809),
    x = n(531685),
    h = n(954571),
    j = n(599941),
    O = n(11351),
    y = n(319225),
    v = n(781289),
    A = n(652215),
    E = n(705751),
    N = n(269927),
    _ = n(985018),
    S = n(486984);

function T(e) {
    let { onCreateTeamClick: t, isGuildOwner: n } = e;
    return (0, r.jsx)("div", {
        className: S.xF,
        children: (0, r.jsx)(s.$nd, {
            text: _.intl.string(_.t["5k6FfR"]),
            disabled: !n,
            onClick: t,
            fullWidth: !0,
        }),
    });
}

function I(e) {
    let { guild: t, eligibleTeams: n, isGuildOwner: l } = e,
        [c, o] = i.useState(),
        { enableGuildMonetizationForTeam: u, submitting: f, error: g } = (0, d.A)(),
        { fetchSubscriptionsSettings: b } = (0, j.XE)(),
        m = (0, O.gN)(),
        p = i.useMemo(
            () =>
                n.map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                })),
            [n],
        ),
        x = async () => {
            (await u(t, c, E.S7.GUILD_ROLE_SUBSCRIPTIONS)) &&
                (b(t.id),
                (0, y.E)({
                    title: _.intl.string(_.t["AP/2qe"]),
                    body: _.intl.string(_.t.kHMgaK),
                }));
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: S.xF,
                children: [
                    (0, r.jsx)(a.l6P, {
                        selectionMode: "single",
                        options: p,
                        placeholder: _.intl.string(_.t.QXf93A),
                        value: c,
                        disabled: 0 === p.length || m || !l,
                        onSelectionChange: o,
                        label: _.intl.string(_.t.QXf93A),
                        hideLabel: !0,
                    }),
                    (0, r.jsx)(s.$nd, {
                        text: _.intl.string(_.t["9HU3ZV"]),
                        onClick: x,
                        loading: f,
                        disabled: null == c || m || !l,
                    }),
                ],
            }),
            null != g &&
                (0, r.jsx)(a.Text, {
                    className: S.z3,
                    variant: "text-sm/normal",
                    children: g.getAnyErrorMessage(),
                }),
        ],
    });
}
let C = (e) => {
    let { guild: t } = e,
        n = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        s = (0, m.bM)(t, n),
        d = (0, o.ME)(t),
        j = (0, l.bG)([x.A], () => x.A.isFocused()),
        { teams: O, loading: y } = (0, b.A)({
            refreshOnDepChange: j,
        }),
        E = i.useMemo(
            () =>
                O.filter((e) => {
                    var t;
                    return (
                        e.payout_account_status !== N.y.BLOCKED &&
                        (0, g.y)(null != (t = null == n ? void 0 : n.id) ? t : A.dJq, e)
                    );
                }),
            [O, n],
        ),
        C = E.length > 0,
        P = i.useCallback(async () => {
            h.default.track(A.HAw.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
                is_onboarding_v2: d,
                has_eligible_team: C,
                guild_id: t.id,
                is_owner: s,
            });
            let e = await (0, u.a)(A.dSh.DEVELOPER_PORTAL_TEAMS);
            (0, c.A)(e);
        }, [t, s, d, C]),
        w = i.useCallback(
            (e) =>
                s
                    ? (0, r.jsx)(f.A, {
                          onClick: P,
                          children: e,
                      })
                    : e,
            [P, s],
        );
    return y
        ? (0, r.jsx)(a.y$y, {})
        : (0, r.jsxs)(a.BJc, {
              gap: 32,
              children: [
                  !s &&
                      (0, r.jsx)("div", {
                          className: S.b8,
                          children: (0, r.jsx)(a.wx6, {
                              type: "warning",
                              children: _.intl.string(_.t.t56qWO),
                          }),
                      }),
                  (0, r.jsx)(a.D0$, {
                      label: _.intl.string(_.t["sYLCY/"]),
                      disabled: !s,
                      description: _.intl.format(_.t["5mfqpW"], {
                          onCreateTeamHook: w,
                      }),
                      children: C
                          ? (0, r.jsx)(I, {
                                guild: t,
                                eligibleTeams: E,
                                isGuildOwner: s,
                            })
                          : (0, r.jsx)(T, {
                                onCreateTeamClick: P,
                                isGuildOwner: s,
                            }),
                  }),
                  (0, r.jsx)(a.D0$, {
                      label: _.intl.string(_.t["0n7R2X"]),
                      children: (0, r.jsx)(v.A, {
                          guildId: t.id,
                          allPeriods: [],
                      }),
                  }),
              ],
          });
};
