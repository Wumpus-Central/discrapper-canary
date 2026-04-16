l.d(t, { A: () => B });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(989349),
    d = l.n(r),
    c = l(311907),
    o = l(990078),
    u = l(397927),
    x = l(442433),
    m = l(966327),
    h = l(688810),
    j = l(624458),
    _ = l(844944),
    A = l(513461),
    g = l(663997),
    b = l(716416),
    T = l(417718),
    f = l(324023),
    E = l(534400),
    v = l(532197),
    S = l(657331),
    N = l(427157),
    I = l(71393),
    R = l(427262),
    C = l(985018),
    p = l(831084),
    M = l(494213),
    D = l(301050),
    G = l(62255);
function y(e) {
    let t,
        l,
        { status: s } = e;
    switch (s) {
        case A.B5.REJECTED:
            (t = C.t["7YSJ6f"]), (l = C.t.i05OUR);
            break;
        case A.B5.APPROVED:
            (t = C.t.bv82GS), (l = C.t.D4OUHT);
            break;
        default:
            (t = C.t["/wqiSv"]), (l = C.t.o47YZs);
    }
    return (0, n.jsxs)("div", {
        className: p.do,
        children: [
            (0, n.jsx)(u.A9s, { size: "md", color: "currentColor", className: p.AI }),
            (0, n.jsx)(u.Heading, { variant: "heading-md/medium", children: C.intl.string(t) }),
            (0, n.jsx)(u.Text, { color: "text-muted", variant: "text-sm/medium", children: C.intl.string(l) }),
        ],
    });
}
function L(e) {
    let { sortOrder: t, onSortChange: l } = e;
    return (0, n.jsx)("thead", {
        children: (0, n.jsxs)("tr", {
            className: D.Yk,
            children: [
                (0, n.jsx)("th", {
                    className: p.e4,
                    children: (0, n.jsx)(u.Text, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: C.intl.string(C.t.Es7n9c),
                    }),
                }),
                (0, n.jsx)("th", {
                    className: a()(p.e4, G.QB),
                    children: (0, n.jsxs)(u.DUT, {
                        className: p.KF,
                        onClick: l,
                        children: [
                            (0, n.jsx)(u.Text, {
                                variant: "eyebrow",
                                color: "interactive-text-default",
                                children: C.intl.string(C.t.EZ5QWL),
                            }),
                            t === A._e.TIMESTAMP_ASC
                                ? (0, n.jsx)(v.A, { className: p.GM, direction: v.A.Directions.UP })
                                : (0, n.jsx)(v.A, { className: p.GM, direction: v.A.Directions.DOWN }),
                        ],
                    }),
                }),
                (0, n.jsx)("th", {
                    className: a()(p.e4, p.UX),
                    children: (0, n.jsx)(u.Text, {
                        variant: "eyebrow",
                        color: "interactive-text-default",
                        children: C.intl.string(C.t["5Q9xGr"]),
                    }),
                }),
            ],
        }),
    });
}
let U = s.memo(function (e) {
        let { joinRequest: t, user: l } = e,
            { joinRequestId: i, guildId: a } = t,
            { analyticsLocations: r } = (0, h.Ay)(),
            d = s.useCallback(
                (e) => {
                    e.stopPropagation(),
                        e.preventDefault(),
                        (0, S.openUserProfileModal)({ userId: l.id, joinRequestId: i, sourceAnalyticsLocations: r });
                },
                [l, i, r],
            );
        return (0, n.jsxs)("div", {
            className: G.FD,
            children: [
                (0, n.jsx)(u.DUT, { className: G.Wn, onClick: d, children: (0, n.jsx)(m.A, { user: l }) }),
                (0, n.jsx)("div", {
                    className: G.eg,
                    children: (0, n.jsx)(u.Text, {
                        variant: "text-sm/medium",
                        children: (0, n.jsxs)(u.DUT, {
                            onClick: d,
                            className: G.VW,
                            children: [
                                l.globalName,
                                (0, n.jsx)(E.Ay, {
                                    primaryGuild: l?.primaryGuild,
                                    userId: l?.id,
                                    contextGuildId: a,
                                    containerClassName: G.Dz,
                                }),
                            ],
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: G.Br,
                    children: (0, n.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        tag: "span",
                        children: (0, n.jsx)(u.DUT, { onClick: d, tag: "span", children: R.Ay.getUserTag(l) }),
                    }),
                }),
            ],
        });
    }),
    P = s.memo(function (e) {
        let { joinRequest: t, onSelect: i } = e,
            { guildId: r, createdAt: m, applicationStatus: h } = t,
            j = s.useMemo(() => new N.A(t.user), [t.user]),
            _ = (0, b.R)({ guildId: r }),
            g = (0, c.bG)([I.A], () => I.A.getGuild(r)),
            T = h === A.B5.SUBMITTED;
        return null == j
            ? null
            : (0, n.jsxs)("tr", {
                  onClick: i,
                  className: a()(G.yF, G.iA, { [G.wH]: _?.joinRequestId === t.joinRequestId }),
                  children: [
                      (0, n.jsx)("td", { children: (0, n.jsx)(U, { joinRequest: t, user: j }) }),
                      (0, n.jsx)("td", {
                          className: G.QB,
                          children: (0, n.jsx)(u.Text, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: d()(m).format("lll"),
                          }),
                      }),
                      (0, n.jsx)("td", {
                          className: p.UX,
                          children:
                              T &&
                              (0, n.jsx)(o.m, {
                                  text: C.intl.string(C.t.x8Nn4M),
                                  children: (0, n.jsx)(u.DUT, {
                                      onClick: (e) => {
                                          (0, x.L3)(
                                              e,
                                              async () => {
                                                  let { default: e } = await l.e("10279").then(l.bind(l, 772063));
                                                  return (t) => (0, n.jsx)(e, { ...t, guild: g, user: j });
                                              },
                                              { position: "bottom", align: "right" },
                                          );
                                      },
                                      className: G.x6,
                                      children: (0, n.jsx)(u.FHP, {
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
    k = () => {
        let e = `${Math.floor(50 * Math.random()) + 100}px`,
            t = `${Math.floor(50 * Math.random()) + 100}px`,
            l = `${Math.floor(25 * Math.random()) + 50}px`;
        return (0, n.jsxs)("tr", {
            className: a()(G.yF, G.iA),
            children: [
                (0, n.jsx)("td", {
                    children: (0, n.jsxs)("div", {
                        className: G.FD,
                        children: [
                            (0, n.jsx)("div", { className: a()(p.RH, G.Wn) }),
                            (0, n.jsx)("div", {
                                className: G.eg,
                                children: (0, n.jsx)("div", { className: p.RC, style: { width: e } }),
                            }),
                            (0, n.jsx)("div", {
                                className: G.Br,
                                children: (0, n.jsx)("div", { className: p.w7, style: { width: t } }),
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)("td", {
                    className: G.QB,
                    children: (0, n.jsx)("div", { className: p.RC, style: { width: l } }),
                }),
                (0, n.jsx)("td", { className: p.UX }),
            ],
        });
    };
function B(e) {
    let { guildId: t, currentTab: l } = e,
        i = s.useRef(null),
        a = (0, c.bG)([I.A], () => I.A.getGuild(t)),
        r = (0, T.n)({ guildId: t }),
        d = (0, c.bG)([_.A], () => _.A.isFetching()),
        { guildJoinRequests: o } = (0, f.K)({ guildId: t, applicationStatus: l, sortOrder: r }),
        { fetchNextPage: x } = (0, g.K)({ guildId: t, guildJoinRequests: o }),
        m = s.useCallback(async () => {
            let e = r === A._e.TIMESTAMP_ASC ? A._e.TIMESTAMP_DESC : A._e.TIMESTAMP_ASC;
            j.A.setSelectedSortOrder(t, e), await x(e, l);
        }, [r, t, x, l]);
    return null == a
        ? null
        : (0, n.jsx)("div", {
              className: M.FV,
              children: (0, n.jsx)(u.T7Y, {
                  className: M.A0,
                  ref: i,
                  orientation: "horizontal",
                  children: (0, n.jsxs)("table", {
                      className: p.tp,
                      children: [
                          (0, n.jsx)(L, { sortOrder: r, onSortChange: m }),
                          (0, n.jsx)("tbody", {
                              children: d
                                  ? [, , , , ,].fill(0).map((e, t) => (0, n.jsx)(k, {}, `placeholder-${t}`))
                                  : 0 === o.length
                                    ? (0, n.jsx)("td", { colSpan: 3, children: (0, n.jsx)(y, { status: l }) })
                                    : o.map((e) =>
                                          (0, n.jsx)(
                                              P,
                                              { joinRequest: e, onSelect: () => j.A.setSelectedGuildJoinRequest(t, e) },
                                              e.joinRequestId,
                                          ),
                                      ),
                          }),
                      ],
                  }),
              }),
          });
}
