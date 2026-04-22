l.d(t, { A: () => q });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(989349),
    o = l.n(r),
    d = l(311907),
    c = l(990078),
    u = l(933832),
    x = l(534514),
    m = l(834730),
    h = l(939249),
    j = l(530005),
    _ = l(599319),
    A = l(442433),
    g = l(966327),
    f = l(688810),
    E = l(624458),
    v = l(844944),
    b = l(513461),
    N = l(663997),
    S = l(716416),
    C = l(417718),
    p = l(324023),
    I = l(534400),
    T = l(532197),
    R = l(657331),
    M = l(427157),
    D = l(71393),
    y = l(427262),
    G = l(985018),
    L = l(477228),
    k = l(780165),
    P = l(358522),
    w = l(239023);
function B(e) {
    let t,
        l,
        { status: s } = e;
    switch (s) {
        case b.B5.REJECTED:
            (t = G.t["7YSJ6f"]), (l = G.t.i05OUR);
            break;
        case b.B5.APPROVED:
            (t = G.t.bv82GS), (l = G.t.D4OUHT);
            break;
        default:
            (t = G.t["/wqiSv"]), (l = G.t.o47YZs);
    }
    return (0, n.jsxs)("div", {
        className: L.do,
        children: [
            (0, n.jsx)(u.A, { size: "md", color: "currentColor", className: L.AI }),
            (0, n.jsx)(x.D, { variant: "heading-md/medium", children: G.intl.string(t) }),
            (0, n.jsx)(m.E, { color: "text-muted", variant: "text-sm/medium", children: G.intl.string(l) }),
        ],
    });
}
function U(e) {
    let { sortOrder: t, onSortChange: l } = e;
    return (0, n.jsx)("thead", {
        children: (0, n.jsxs)("tr", {
            className: P.Yk,
            children: [
                (0, n.jsx)("th", {
                    className: L.e4,
                    children: (0, n.jsx)(m.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: G.intl.string(G.t.Es7n9c),
                    }),
                }),
                (0, n.jsx)("th", {
                    className: a()(L.e4, w.QB),
                    children: (0, n.jsxs)(h.D, {
                        className: L.KF,
                        onClick: l,
                        children: [
                            (0, n.jsx)(m.E, {
                                variant: "eyebrow",
                                color: "interactive-text-default",
                                children: G.intl.string(G.t.EZ5QWL),
                            }),
                            t === b._e.TIMESTAMP_ASC
                                ? (0, n.jsx)(T.A, { className: L.GM, direction: T.A.Directions.UP })
                                : (0, n.jsx)(T.A, { className: L.GM, direction: T.A.Directions.DOWN }),
                        ],
                    }),
                }),
                (0, n.jsx)("th", {
                    className: a()(L.e4, L.UX),
                    children: (0, n.jsx)(m.E, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: G.intl.string(G.t["5Q9xGr"]),
                    }),
                }),
            ],
        }),
    });
}
let O = s.memo(function (e) {
        let { joinRequest: t, user: l } = e,
            { joinRequestId: i, guildId: a } = t,
            { analyticsLocations: r } = (0, f.Ay)(),
            o = s.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, R.openUserProfileModal)({ userId: l.id, joinRequestId: i, sourceAnalyticsLocations: r });
                },
                [l, i, r],
            );
        return (0, n.jsxs)("div", {
            className: w.FD,
            children: [
                (0, n.jsx)(h.D, { className: w.Wn, onClick: o, children: (0, n.jsx)(g.A, { user: l }) }),
                (0, n.jsx)("div", {
                    className: w.eg,
                    children: (0, n.jsx)(m.E, {
                        variant: "text-sm/medium",
                        children: (0, n.jsxs)(h.D, {
                            onClick: o,
                            className: w.VW,
                            children: [
                                l.globalName,
                                (0, n.jsx)(I.Ay, {
                                    primaryGuild: l?.primaryGuild,
                                    userId: l?.id,
                                    contextGuildId: a,
                                    containerClassName: w.Dz,
                                }),
                            ],
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: w.Br,
                    children: (0, n.jsx)(m.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        tag: "span",
                        children: (0, n.jsx)(h.D, { onClick: o, tag: "span", children: y.Ay.getUserTag(l) }),
                    }),
                }),
            ],
        });
    }),
    F = s.memo(function (e) {
        let { joinRequest: t, onSelect: i } = e,
            { guildId: r, createdAt: u, applicationStatus: x } = t,
            _ = s.useMemo(() => new M.A(t.user), [t.user]),
            g = (0, S.R)({ guildId: r }),
            f = (0, d.bG)([D.A], () => D.A.getGuild(r)),
            E = x === b.B5.SUBMITTED;
        return null == _
            ? null
            : (0, n.jsxs)("tr", {
                  onClick: i,
                  className: a()(w.yF, w.iA, { [w.wH]: g?.joinRequestId === t.joinRequestId }),
                  children: [
                      (0, n.jsx)("td", { children: (0, n.jsx)(O, { joinRequest: t, user: _ }) }),
                      (0, n.jsx)("td", {
                          className: w.QB,
                          children: (0, n.jsx)(m.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: o()(u).format("lll"),
                          }),
                      }),
                      (0, n.jsx)("td", {
                          className: L.UX,
                          children:
                              E &&
                              (0, n.jsx)(c.m, {
                                  text: G.intl.string(G.t.x8Nn4M),
                                  children: (0, n.jsx)(h.D, {
                                      onClick: (e) => {
                                          (0, A.L3)(
                                              e,
                                              async () => {
                                                  let { default: e } = await l.e("32660").then(l.bind(l, 772063));
                                                  return (t) => (0, n.jsx)(e, { ...t, guild: f, user: _ });
                                              },
                                              { position: "bottom", align: "right" },
                                          );
                                      },
                                      className: w.x6,
                                      children: (0, n.jsx)(j.F, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 18,
                                          height: 18,
                                      }),
                                  }),
                              }),
                      }),
                  ],
              });
    }),
    z = () => {
        let e = `${Math.floor(50 * Math.random()) + 100}px`,
            t = `${Math.floor(50 * Math.random()) + 100}px`,
            l = `${Math.floor(25 * Math.random()) + 50}px`;
        return (0, n.jsxs)("tr", {
            className: a()(w.yF, w.iA),
            children: [
                (0, n.jsx)("td", {
                    children: (0, n.jsxs)("div", {
                        className: w.FD,
                        children: [
                            (0, n.jsx)("div", { className: a()(L.RH, w.Wn) }),
                            (0, n.jsx)("div", {
                                className: w.eg,
                                children: (0, n.jsx)("div", { className: L.RC, style: { width: e } }),
                            }),
                            (0, n.jsx)("div", {
                                className: w.Br,
                                children: (0, n.jsx)("div", { className: L.w7, style: { width: t } }),
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)("td", {
                    className: w.QB,
                    children: (0, n.jsx)("div", { className: L.RC, style: { width: l } }),
                }),
                (0, n.jsx)("td", { className: L.UX }),
            ],
        });
    };
function q(e) {
    let { guildId: t, currentTab: l } = e,
        i = s.useRef(null),
        a = (0, d.bG)([D.A], () => D.A.getGuild(t)),
        r = (0, C.n)({ guildId: t }),
        o = (0, d.bG)([v.A], () => v.A.isFetching()),
        { guildJoinRequests: c } = (0, p.K)({ guildId: t, applicationStatus: l, sortOrder: r }),
        { fetchNextPage: u } = (0, N.K)({ guildId: t, guildJoinRequests: c }),
        x = s.useCallback(async () => {
            let e = r === b._e.TIMESTAMP_ASC ? b._e.TIMESTAMP_DESC : b._e.TIMESTAMP_ASC;
            E.A.setSelectedSortOrder(t, e), await u(e, l);
        }, [r, t, u, l]);
    return null == a
        ? null
        : (0, n.jsx)("div", {
              className: k.FV,
              children: (0, n.jsx)(_.Ch, {
                  className: k.A0,
                  ref: i,
                  orientation: "horizontal",
                  children: (0, n.jsxs)("table", {
                      className: L.tp,
                      children: [
                          (0, n.jsx)(U, { sortOrder: r, onSortChange: x }),
                          (0, n.jsx)("tbody", {
                              children: o
                                  ? [, , , , ,].fill(0).map((e, t) => (0, n.jsx)(z, {}, `placeholder-${t}`))
                                  : 0 === c.length
                                    ? (0, n.jsx)("td", { colSpan: 3, children: (0, n.jsx)(B, { status: l }) })
                                    : c.map((e) =>
                                          (0, n.jsx)(
                                              F,
                                              { joinRequest: e, onSelect: () => E.A.setSelectedGuildJoinRequest(t, e) },
                                              e.joinRequestId,
                                          ),
                                      ),
                          }),
                      ],
                  }),
              }),
          });
}
