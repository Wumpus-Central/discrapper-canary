n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n.n(a),
    r = n(935573),
    o = n(475743),
    c = n(58149),
    d = n(721768),
    u = n(392054),
    m = n(390756),
    p = n(651753),
    _ = n(203982),
    A = n(211401),
    h = n(989837),
    f = n(500049),
    x = n(837983),
    C = n(169909),
    g = n(155940),
    N = n(396533),
    E = n(448137),
    b = n(444230),
    I = n(783608),
    v = n(862183),
    y = n(698779);
n(60809);
var j = n(652215),
    P = n(985018),
    L = n(786783);
let T = Array(6)
        .fill(0)
        .map((e, t) => t),
    S = [, , ,].fill(0).map((e, t) => t),
    R = [, , , ,].fill(0).map((e, t) => t);
function O(e) {
    return (0, i.jsx)(k, { ...e });
}
function k(e) {
    let { context: t, query: n, entrypoint: a, isScrollCloseToBottom: o } = e,
        c = a === f.s4.TEXT,
        d = a === f.s4.TEXT,
        {
            loading: u,
            isEmptyState: m,
            commandResults: _,
            hasCommandResults: A,
            applicationResults: h,
        } = (0, x.j_)({ context: t, query: n, searchesActivities: !0, searchesCommands: c, searchesBots: d }),
        {
            fetchState: C,
            applicationResults: g,
            fetchNextPage: N,
        } = (0, x.pd)({ query: n, context: t, fetches: !0, pageLimit: 5, entrypoint: a });
    l.useEffect(() => {
        o && C === p.e.FETCHED && N();
    }, [N, C, o]);
    let E = null == C || C === p.e.FETCHING,
        I = l.useMemo(() => {
            let e = h.map((e) => ({ application: e, installOnDemand: !0 })),
                t = new Set(
                    h.map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                );
            return [
                ...e,
                ...s().compact(
                    g.map((e) =>
                        e.type === r.j.CONNECTION || t.has(e.data.id)
                            ? null
                            : { application: e.data, installOnDemand: !0 },
                    ),
                ),
            ];
        }, [g, h]),
        v = I.length > 0,
        y = m && !v && !E;
    return u
        ? (0, i.jsx)(H, {})
        : y
          ? (0, i.jsx)(b.U, {
                type: f.wg.SEARCH_EMPTY,
                searchQuery: n,
                textContent: a === f.s4.TEXT ? P.intl.string(P.t.LSNOYf) : P.intl.string(P.t.Clu7Qh),
            })
          : (0, i.jsxs)("div", {
                children: [
                    A && (0, i.jsx)(M, { context: t, commandResults: _, query: n }),
                    (v || E) &&
                        (0, i.jsx)(D, {
                            context: t,
                            applicationResults: I,
                            includePlaceholder: E,
                            query: n,
                            searchesBots: d,
                        }),
                ],
            });
}
function M(e) {
    let { context: t, commandResults: n, query: a } = e,
        s = n.length > 4,
        r = l.useMemo(() => (s ? n.slice(0, 4) : n), [n, s]),
        [p, x] = l.useState(!1),
        C = (0, o.A)(p) ?? p,
        g = l.useCallback(() => x((e) => !e), []),
        E = ((0, o.A)(a) ?? a)[0] !== a[0],
        b = p && !E;
    l.useLayoutEffect(() => x(!1), [E]);
    let {
        ref: y,
        isTransitioning: T,
        onTransitionEnd: S,
    } = (0, N.A)({ key: a, isExpanded: b, durationMs: 200, maxAnimationHeight: 680 });
    l.useEffect(() => {
        !C &&
            p &&
            (0, c.zV)(j.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: f.yK.SEARCH,
                source: h.A.entrypoint(),
                num: n.length,
            });
    }, [n.length, C, p]);
    let R = b || T,
        O = b ? I.A.buttonTypes.VIEW_LESS : I.A.buttonTypes.VIEW_MORE,
        k = R ? n : r;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(I.A, { title: P.intl.string(P.t["0hKkS+"]), buttonType: O, onClickViewButton: s ? g : void 0 }),
            (0, i.jsx)("div", {
                className: L._,
                ref: y,
                onTransitionEnd: S,
                children: k.map((e, n) => {
                    let { command: l, application: s, section: r } = e;
                    return (0, i.jsx)(
                        v.A,
                        {
                            command: l,
                            application: s,
                            query: a,
                            searchResultsPosition: n,
                            onClick: () => {
                                let e = h.A.entrypoint();
                                A.k(f.Se.DISMISSED),
                                    (0, m.Mv)({
                                        command: l,
                                        location: u.Oh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: f.yK.SEARCH,
                                    }),
                                    "channel" === t.type &&
                                        (d.Gf({
                                            channelId: t.channel.id,
                                            command: l,
                                            section: r,
                                            location: u.Oh.APP_LAUNCHER_HOME_SEARCH,
                                            triggerSection: void 0,
                                            queryLength: a.length,
                                            sectionName: f.yK.SEARCH,
                                            query: a,
                                            searchResultsPosition: n,
                                            source: e,
                                        }),
                                        _._.dispatch(j.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.channel.id }));
                            },
                        },
                        l.id,
                    );
                }),
            }),
        ],
    });
}
function w(e) {
    let { trackSearchResultsItemImpressionRef: t } = (0, E.A)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
    return (0, i.jsx)("div", {
        className: L.Gn,
        ref: (e) => {
            t.current = e;
        },
        children: (0, i.jsx)(C.Gt, { ...e, tracksImpression: !1, enableVideoBanner: !0 }),
    });
}
function D(e) {
    let { context: t, applicationResults: n, includePlaceholder: l, query: a, searchesBots: s } = e;
    return s
        ? (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(I.A, { title: P.intl.string(P.t.PHjkRE) }),
                  (0, i.jsxs)("div", {
                      className: L._,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: s } = e;
                              return (0, i.jsx)(
                                  U,
                                  {
                                      context: t,
                                      application: l,
                                      location: u.Oh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: f.yK.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: s,
                                      query: a,
                                  },
                                  l.id,
                              );
                          }),
                          l && S.map((e) => (0, i.jsx)(y.A, {}, e)),
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(I.A, { title: P.intl.string(P.t.shUONg) }),
                  (0, i.jsxs)("div", {
                      className: L.H$,
                      children: [
                          n.map((e, n) => {
                              let { application: l, installOnDemand: s } = e;
                              return (0, i.jsx)(
                                  w,
                                  {
                                      context: t,
                                      application: l,
                                      look: C.r0.LARGE_BANNER,
                                      location: u.Oh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: f.yK.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: s,
                                      query: a,
                                  },
                                  l.id,
                              );
                          }),
                          l && R.map((e) => (0, i.jsx)(g.A, { look: C.r0.LARGE_BANNER }, e)),
                      ],
                  }),
              ],
          });
}
function U(e) {
    let { onClickAppCard: t } = (0, C.Ps)(e);
    return (0, i.jsx)(v.A, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
}
function H() {
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(I.A, { title: P.intl.string(P.t["0hKkS+"]) }),
            (0, i.jsx)("div", { className: L._, children: T.map((e) => (0, i.jsx)(y.A, {}, e)) }),
            (0, i.jsx)(I.A, { title: P.intl.string(P.t.PHjkRE) }),
            (0, i.jsx)("div", { className: L._, children: S.map((e) => (0, i.jsx)(y.A, {}, e)) }),
        ],
    });
}
