n.d(t, { A: () => x });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(989349),
    o = n.n(s),
    E = n(417597),
    u = n(990078),
    c = n(397927),
    _ = n(137130),
    d = n(688810),
    A = n(836731),
    g = n(189552),
    T = n(276373),
    I = n(523599),
    N = n(438407),
    h = n(967144),
    m = n(696451),
    S = n(71393),
    G = n(562153),
    O = n(829887),
    R = n(652215),
    C = n(985018),
    L = n(337154),
    D = n(12466);
function f(e) {
    let { log: t, member: n, guild: a } = e,
        { analyticsLocations: s } = (0, d.Ay)(),
        _ = T.getSimpleAuditLogTitleFromChange(t),
        I = T.getSimpleAuditLogTitleContextFromChange(t),
        S = T.findChangeByKey(R.gGk.REASON, t)?.newValue,
        O = T.getSimpleAuditLogChangeDetails(t),
        f = (0, A.L4)(t.id),
        x = (0, E.bG)([m.Ay], () => (null != t.userId ? m.Ay.getMember(n.guildId, t.userId) : null), [
            n.guildId,
            t.userId,
        ]),
        M = (0, h.gn)(x?.guildId, x?.userId, x?.colorStrings ?? null),
        p = r.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, g.Ko)(e, s);
            },
            [s],
        ),
        U = r.useCallback(
            () =>
                null == t.user
                    ? null
                    : (0, l.jsx)(u.m, {
                          asContainer: !0,
                          text: C.intl.string(C.t.mvsi9n),
                          children: (0, l.jsx)(c.DUT, {
                              onClick: p(x),
                              tag: "span",
                              className: L.Xh,
                              children: (0, l.jsxs)(c.Text, {
                                  variant: "text-sm/medium",
                                  tag: "span",
                                  children: [
                                      "@",
                                      (0, l.jsx)(c.gyj, {
                                          name: G.Ay.getName(n.guildId, null, t.user),
                                          colorString: x?.colorString ?? null,
                                          colorStrings: M,
                                      }),
                                  ],
                              }),
                          }),
                      }),
            [p, t.user, n.guildId, x, M],
        )();
    return (0, l.jsxs)("div", {
        className: i()(D.ol, L.$9),
        children: [
            (0, l.jsxs)("div", {
                className: L._6,
                children: [
                    (0, l.jsxs)("div", {
                        className: L.lc,
                        children: [
                            null != _ &&
                                (0, l.jsx)(c.Text, { variant: "text-sm/semibold", color: "text-strong", children: _ }),
                            null != I &&
                                (0, l.jsxs)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: ["(", "string" == typeof I ? I : o()(I).fromNow(), ")"],
                                }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: L.FS,
                        children: (0, l.jsx)(c.Text, { variant: "text-sm/medium", color: "text-strong", children: f }),
                    }),
                ],
            }),
            null != S &&
                (0, l.jsx)("div", {
                    className: L.Xy,
                    children: (0, l.jsxs)("div", {
                        className: L.eH,
                        children: [
                            U,
                            (0, l.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: S,
                            }),
                        ],
                    }),
                }),
            null == S &&
                null != O &&
                (0, l.jsx)("div", {
                    className: L.Xy,
                    children: (0, l.jsxs)("div", {
                        className: L.E9,
                        children: [
                            U,
                            (0, l.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: O,
                            }),
                        ],
                    }),
                }),
            null == S &&
                null == O &&
                (0, l.jsx)("div", {
                    className: L.Xy,
                    children: (0, l.jsx)("div", {
                        className: L.E9,
                        children: (0, l.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            tag: "span",
                            children: (0, l.jsx)(N.r, { log: t, guild: a, onContentClick: () => {}, className: L.zm }),
                        }),
                    }),
                }),
        ],
    });
}
function x(e) {
    let { member: t } = e,
        n = (0, E.bG)([S.A], () => S.A.getGuild(t.guildId), [t.guildId]),
        a = (0, E.bG)([I.A], () => {
            let e = I.A.logs;
            return null == e || null == n ? [] : T.transformLogs(e, n);
        }, [n]);
    return (r.useEffect(() => {
        !(async function (e, t) {
            await _.Qi(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === a.length)
        ? null
        : (0, l.jsx)(c.D0$, {
              label: C.intl.string(C.t.flCxLo),
              children:
                  a.length > 0
                      ? (0, l.jsx)(O.SQ, {
                            children: a.map((e) => (0, l.jsx)(f, { log: e, member: t, guild: n }, e.id)),
                        })
                      : null,
          });
}
