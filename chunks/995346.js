"use strict";
n.d(t, { A: () => M });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(935573),
    l = n(475743),
    u = n(58149),
    c = n(721768),
    d = n(392054),
    _ = n(390756),
    f = n(651753),
    p = n(203982),
    h = n(211401),
    m = n(989837),
    g = n(500049),
    E = n(837983),
    A = n(169909),
    I = n(155940),
    T = n(396533),
    y = n(448137),
    S = n(444230),
    v = n(783608),
    C = n(862183),
    b = n(698779);
n(60809);
var N = n(652215),
    R = n(985018),
    O = n(515636);
let D = Array(6)
        .fill(0)
        .map((e, t) => t),
    L = [, , ,].fill(0).map((e, t) => t),
    w = [, , , ,].fill(0).map((e, t) => t),
    x = 4,
    P = 5;
function M(e) {
    return (0, r.jsx)(k, { ...e });
}
function k(e) {
    let { context: t, query: n, entrypoint: a, isScrollCloseToBottom: l } = e,
        u = a === g.s4.TEXT,
        c = a === g.s4.TEXT,
        {
            loading: d,
            isEmptyState: _,
            commandResults: p,
            hasCommandResults: h,
            applicationResults: m,
        } = (0, E.j_)({ context: t, query: n, searchesActivities: !0, searchesCommands: u, searchesBots: c }),
        {
            fetchState: A,
            applicationResults: I,
            fetchNextPage: T,
        } = (0, E.pd)({ query: n, context: t, fetches: !0, pageLimit: P, entrypoint: a });
    i.useEffect(() => {
        l && A === f.e.FETCHED && T();
    }, [T, A, l]);
    let y = null == A || A === f.e.FETCHING,
        v = i.useMemo(() => {
            let e = m.map((e) => ({ application: e, installOnDemand: !0 })),
                t = new Set(
                    m.map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                );
            return [
                ...e,
                ...s().compact(
                    I.map((e) =>
                        e.type === o.j.CONNECTION || t.has(e.data.id)
                            ? null
                            : { application: e.data, installOnDemand: !0 },
                    ),
                ),
            ];
        }, [I, m]),
        C = v.length > 0,
        b = _ && !C && !y;
    return d
        ? (0, r.jsx)(B, {})
        : b
          ? (0, r.jsx)(S.U, {
                type: g.wg.SEARCH_EMPTY,
                searchQuery: n,
                textContent: a === g.s4.TEXT ? R.intl.string(R.t.LSNOYf) : R.intl.string(R.t.Clu7Qh),
            })
          : (0, r.jsxs)("div", {
                children: [
                    h && (0, r.jsx)(U, { context: t, commandResults: p, query: n }),
                    (C || y) &&
                        (0, r.jsx)(V, {
                            context: t,
                            applicationResults: v,
                            includePlaceholder: y,
                            query: n,
                            searchesBots: c,
                        }),
                ],
            });
}
function U(e) {
    let { context: t, commandResults: n, query: a } = e,
        s = n.length > x,
        o = i.useMemo(() => (s ? n.slice(0, x) : n), [n, s]),
        [f, E] = i.useState(!1),
        A = (0, l.A)(f) ?? f,
        I = i.useCallback(() => E((e) => !e), []),
        y = ((0, l.A)(a) ?? a)[0] !== a[0],
        S = f && !y;
    i.useLayoutEffect(() => E(!1), [y]);
    let {
        ref: b,
        isTransitioning: D,
        onTransitionEnd: L,
    } = (0, T.A)({ key: a, isExpanded: S, durationMs: 200, maxAnimationHeight: 680 });
    i.useEffect(() => {
        !A &&
            f &&
            (0, u.zV)(N.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: g.yK.SEARCH,
                source: m.A.entrypoint(),
                num: n.length,
            });
    }, [n.length, A, f]);
    let w = S || D,
        P = S ? v.A.buttonTypes.VIEW_LESS : v.A.buttonTypes.VIEW_MORE,
        M = w ? n : o;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(v.A, { title: R.intl.string(R.t["0hKkS+"]), buttonType: P, onClickViewButton: s ? I : void 0 }),
            (0, r.jsx)("div", {
                className: O._,
                ref: b,
                onTransitionEnd: L,
                children: M.map((e, n) => {
                    let { command: i, application: s, section: o } = e;
                    return (0, r.jsx)(
                        C.A,
                        {
                            command: i,
                            application: s,
                            query: a,
                            searchResultsPosition: n,
                            onClick: () => {
                                let e = m.A.entrypoint();
                                h.k(g.Se.DISMISSED),
                                    (0, _.Mv)({
                                        command: i,
                                        location: d.Oh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: g.yK.SEARCH,
                                    }),
                                    "channel" === t.type &&
                                        (c.Gf({
                                            channelId: t.channel.id,
                                            command: i,
                                            section: o,
                                            location: d.Oh.APP_LAUNCHER_HOME_SEARCH,
                                            triggerSection: void 0,
                                            queryLength: a.length,
                                            sectionName: g.yK.SEARCH,
                                            query: a,
                                            searchResultsPosition: n,
                                            source: e,
                                        }),
                                        p._.dispatch(N.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: t.channel.id }));
                            },
                        },
                        i.id,
                    );
                }),
            }),
        ],
    });
}
function G(e) {
    let { trackSearchResultsItemImpressionRef: t } = (0, y.A)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
    return (0, r.jsx)("div", {
        className: O.Gn,
        ref: (e) => {
            t.current = e;
        },
        children: (0, r.jsx)(A.Gt, { ...e, tracksImpression: !1, enableVideoBanner: !0 }),
    });
}
function V(e) {
    let { context: t, applicationResults: n, includePlaceholder: i, query: a, searchesBots: s } = e;
    return s
        ? (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(v.A, { title: R.intl.string(R.t.PHjkRE) }),
                  (0, r.jsxs)("div", {
                      className: O._,
                      children: [
                          n.map((e, n) => {
                              let { application: i, installOnDemand: s } = e;
                              return (0, r.jsx)(
                                  F,
                                  {
                                      context: t,
                                      application: i,
                                      location: d.Oh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: g.yK.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: s,
                                      query: a,
                                  },
                                  i.id,
                              );
                          }),
                          i && L.map((e) => (0, r.jsx)(b.A, {}, e)),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(v.A, { title: R.intl.string(R.t.shUONg) }),
                  (0, r.jsxs)("div", {
                      className: O.H$,
                      children: [
                          n.map((e, n) => {
                              let { application: i, installOnDemand: s } = e;
                              return (0, r.jsx)(
                                  G,
                                  {
                                      context: t,
                                      application: i,
                                      look: A.r0.LARGE_BANNER,
                                      location: d.Oh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: g.yK.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: s,
                                      query: a,
                                  },
                                  i.id,
                              );
                          }),
                          i && w.map((e) => (0, r.jsx)(I.A, { look: A.r0.LARGE_BANNER }, e)),
                      ],
                  }),
              ],
          });
}
function F(e) {
    let { onClickAppCard: t } = (0, A.Ps)(e);
    return (0, r.jsx)(C.A, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
}
function B() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(v.A, { title: R.intl.string(R.t["0hKkS+"]) }),
            (0, r.jsx)("div", { className: O._, children: D.map((e) => (0, r.jsx)(b.A, {}, e)) }),
            (0, r.jsx)(v.A, { title: R.intl.string(R.t.PHjkRE) }),
            (0, r.jsx)("div", { className: O._, children: L.map((e) => (0, r.jsx)(b.A, {}, e)) }),
        ],
    });
}
