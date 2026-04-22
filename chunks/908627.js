n.d(t, { A: () => p });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(989349),
    E = n.n(s),
    _ = n(417597),
    u = n(990078),
    o = n(939249),
    c = n(834730),
    d = n(463930),
    A = n(452027),
    g = n(137130),
    T = n(688810),
    I = n(836731),
    N = n(189552),
    G = n(276373),
    m = n(523599),
    O = n(438407),
    S = n(967144),
    R = n(696451),
    D = n(71393),
    h = n(562153),
    L = n(829887),
    C = n(652215),
    M = n(985018),
    f = n(631234),
    x = n(437874);
function U(e) {
    let { log: t, member: n, guild: r } = e,
        { analyticsLocations: s } = (0, T.Ay)(),
        A = G.getSimpleAuditLogTitleFromChange(t),
        g = G.getSimpleAuditLogTitleContextFromChange(t),
        m = G.findChangeByKey(C.gGk.REASON, t)?.newValue,
        D = G.getSimpleAuditLogChangeDetails(t),
        L = (0, I.L4)(t.id),
        U = (0, _.bG)([R.Ay], () => (null != t.userId ? R.Ay.getMember(n.guildId, t.userId) : null), [
            n.guildId,
            t.userId,
        ]),
        p = (0, S.gn)(U?.guildId, U?.userId, U?.colorStrings ?? null),
        b = a.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, N.Ko)(e, s);
            },
            [s],
        ),
        F = a.useCallback(
            () =>
                null == t.user
                    ? null
                    : (0, l.jsx)(u.m, {
                          asContainer: !0,
                          text: M.intl.string(M.t.mvsi9n),
                          children: (0, l.jsx)(o.D, {
                              onClick: b(U),
                              tag: "span",
                              className: f.Xh,
                              children: (0, l.jsxs)(c.E, {
                                  variant: "text-sm/medium",
                                  tag: "span",
                                  children: [
                                      "@",
                                      (0, l.jsx)(d.g, {
                                          name: h.Ay.getName(n.guildId, null, t.user),
                                          colorString: U?.colorString ?? null,
                                          colorStrings: p,
                                      }),
                                  ],
                              }),
                          }),
                      }),
            [b, t.user, n.guildId, U, p],
        )();
    return (0, l.jsxs)("div", {
        className: i()(x.ol, f.$9),
        children: [
            (0, l.jsxs)("div", {
                className: f._6,
                children: [
                    (0, l.jsxs)("div", {
                        className: f.lc,
                        children: [
                            null != A &&
                                (0, l.jsx)(c.E, { variant: "text-sm/semibold", color: "text-strong", children: A }),
                            null != g &&
                                (0, l.jsxs)(c.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: ["(", "string" == typeof g ? g : E()(g).fromNow(), ")"],
                                }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: f.FS,
                        children: (0, l.jsx)(c.E, { variant: "text-sm/medium", color: "text-strong", children: L }),
                    }),
                ],
            }),
            null != m &&
                (0, l.jsx)("div", {
                    className: f.Xy,
                    children: (0, l.jsxs)("div", {
                        className: f.eH,
                        children: [
                            F,
                            (0, l.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: m,
                            }),
                        ],
                    }),
                }),
            null == m &&
                null != D &&
                (0, l.jsx)("div", {
                    className: f.Xy,
                    children: (0, l.jsxs)("div", {
                        className: f.E9,
                        children: [
                            F,
                            (0, l.jsx)(c.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: D,
                            }),
                        ],
                    }),
                }),
            null == m &&
                null == D &&
                (0, l.jsx)("div", {
                    className: f.Xy,
                    children: (0, l.jsx)("div", {
                        className: f.E9,
                        children: (0, l.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            tag: "span",
                            children: (0, l.jsx)(O.r, { log: t, guild: r, onContentClick: () => {}, className: f.zm }),
                        }),
                    }),
                }),
        ],
    });
}
function p(e) {
    let { member: t } = e,
        n = (0, _.bG)([D.A], () => D.A.getGuild(t.guildId), [t.guildId]),
        r = (0, _.bG)([m.A], () => {
            let e = m.A.logs;
            return null == e || null == n ? [] : G.transformLogs(e, n);
        }, [n]);
    return (a.useEffect(() => {
        !(async function (e, t) {
            await g.Qi(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === r.length)
        ? null
        : (0, l.jsx)(A.D, {
              label: M.intl.string(M.t.flCxLo),
              children:
                  r.length > 0
                      ? (0, l.jsx)(L.SQ, {
                            children: r.map((e) => (0, l.jsx)(U, { log: e, member: t, guild: n }, e.id)),
                        })
                      : null,
          });
}
