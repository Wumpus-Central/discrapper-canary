n.d(t, { A: () => O });
var l = n(627968),
    i = n(64700),
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
    N = n(155940),
    g = n(396533),
    E = n(448137),
    v = n(444230),
    b = n(783608),
    I = n(862183),
    y = n(698779);
n(60809);
var j = n(652215),
    P = n(985018),
    T = n(786783);
let L = Array(6)
        .fill(0)
        .map((e, t) => t),
    S = [, , ,].fill(0).map((e, t) => t),
    R = [, , , ,].fill(0).map((e, t) => t);
function O(e) {
    return (0, l.jsx)(k, { ...e });
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
            applicationResults: N,
            fetchNextPage: g,
        } = (0, x.pd)({ query: n, context: t, fetches: !0, pageLimit: 5, entrypoint: a });
    i.useEffect(() => {
        o && C === p.e.FETCHED && g();
    }, [g, C, o]);
    let E = null == C || C === p.e.FETCHING,
        b = i.useMemo(() => {
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
                    N.map((e) =>
                        e.type === r.j.CONNECTION || t.has(e.data.id)
                            ? null
                            : { application: e.data, installOnDemand: !0 },
                    ),
                ),
            ];
        }, [N, h]),
        I = b.length > 0,
        y = m && !I && !E;
    return u
        ? (0, l.jsx)(H, {})
        : y
          ? (0, l.jsx)(v.U, {
                type: f.wg.SEARCH_EMPTY,
                searchQuery: n,
                textContent: a === f.s4.TEXT ? P.intl.string(P.t.LSNOYf) : P.intl.string(P.t.Clu7Qh),
            })
          : (0, l.jsxs)("div", {
                children: [
                    A && (0, l.jsx)(M, { context: t, commandResults: _, query: n }),
                    (I || E) &&
                        (0, l.jsx)(D, {
                            context: t,
                            applicationResults: b,
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
        r = i.useMemo(() => (s ? n.slice(0, 4) : n), [n, s]),
        [p, x] = i.useState(!1),
        C = (0, o.A)(p) ?? p,
        N = i.useCallback(() => x((e) => !e), []),
        E = ((0, o.A)(a) ?? a)[0] !== a[0],
        v = p && !E;
    i.useLayoutEffect(() => x(!1), [E]);
    let {
        ref: y,
        isTransitioning: L,
        onTransitionEnd: S,
    } = (0, g.A)({ key: a, isExpanded: v, durationMs: 200, maxAnimationHeight: 680 });
    i.useEffect(() => {
        !C &&
            p &&
            (0, c.zV)(j.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: f.yK.SEARCH,
                source: h.A.entrypoint(),
                num: n.length,
            });
    }, [n.length, C, p]);
    let R = v || L,
        O = v ? b.A.buttonTypes.VIEW_LESS : b.A.buttonTypes.VIEW_MORE,
        k = R ? n : r;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(b.A, { title: P.intl.string(P.t["0hKkS+"]), buttonType: O, onClickViewButton: s ? N : void 0 }),
            (0, l.jsx)("div", {
                className: T._,
                ref: y,
                onTransitionEnd: S,
                children: k.map((e, n) => {
                    let { command: i, application: s, section: r } = e;
                    return (0, l.jsx)(
                        I.A,
                        {
                            command: i,
                            application: s,
                            query: a,
                            searchResultsPosition: n,
                            onClick: () => {
                                let e = h.A.entrypoint();
                                A.k(f.Se.DISMISSED),
                                    (0, m.Mv)({
                                        command: i,
                                        location: u.Oh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: f.yK.SEARCH,
                                    }),
                                    "channel" === t.type &&
                                        (d.Gf({
                                            channelId: t.channel.id,
                                            command: i,
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
                        i.id,
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
    return (0, l.jsx)("div", {
        className: T.Gn,
        ref: (e) => {
            t.current = e;
        },
        children: (0, l.jsx)(C.Gt, { ...e, tracksImpression: !1, enableVideoBanner: !0 }),
    });
}
function D(e) {
    let { context: t, applicationResults: n, includePlaceholder: i, query: a, searchesBots: s } = e;
    return s
        ? (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(b.A, { title: P.intl.string(P.t.PHjkRE) }),
                  (0, l.jsxs)("div", {
                      className: T._,
                      children: [
                          n.map((e, n) => {
                              let { application: i, installOnDemand: s } = e;
                              return (0, l.jsx)(
                                  U,
                                  {
                                      context: t,
                                      application: i,
                                      location: u.Oh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: f.yK.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: s,
                                      query: a,
                                  },
                                  i.id,
                              );
                          }),
                          i && S.map((e) => (0, l.jsx)(y.A, {}, e)),
                      ],
                  }),
              ],
          })
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(b.A, { title: P.intl.string(P.t.shUONg) }),
                  (0, l.jsxs)("div", {
                      className: T.H$,
                      children: [
                          n.map((e, n) => {
                              let { application: i, installOnDemand: s } = e;
                              return (0, l.jsx)(
                                  w,
                                  {
                                      context: t,
                                      application: i,
                                      look: C.r0.LARGE_BANNER,
                                      location: u.Oh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: f.yK.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: s,
                                      query: a,
                                  },
                                  i.id,
                              );
                          }),
                          i && R.map((e) => (0, l.jsx)(N.A, { look: C.r0.LARGE_BANNER }, e)),
                      ],
                  }),
              ],
          });
}
function U(e) {
    let { onClickAppCard: t } = (0, C.Ps)(e);
    return (0, l.jsx)(I.A, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
}
function H() {
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(b.A, { title: P.intl.string(P.t["0hKkS+"]) }),
            (0, l.jsx)("div", { className: T._, children: L.map((e) => (0, l.jsx)(y.A, {}, e)) }),
            (0, l.jsx)(b.A, { title: P.intl.string(P.t.PHjkRE) }),
            (0, l.jsx)("div", { className: T._, children: S.map((e) => (0, l.jsx)(y.A, {}, e)) }),
        ],
    });
}
