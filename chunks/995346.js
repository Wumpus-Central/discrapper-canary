n.d(t, { A: () => G }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(935573),
    l = n(475743),
    c = n(58149),
    u = n(721768),
    d = n(392054),
    f = n(390756),
    p = n(651753),
    _ = n(203982),
    h = n(211401),
    m = n(989837),
    g = n(500049),
    E = n(837983),
    b = n(169909),
    y = n(155940),
    O = n(396533),
    A = n(448137),
    v = n(444230),
    S = n(783608),
    I = n(862183),
    T = n(698779);
n(60809);
var C = n(652215),
    N = n(985018),
    R = n(515636);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = Array(6)
        .fill(0)
        .map((e, t) => t),
    j = [, , ,].fill(0).map((e, t) => t),
    M = [, , , ,].fill(0).map((e, t) => t),
    k = 4,
    U = 5;
function G(e) {
    return (0, r.jsx)(V, P({}, e));
}
function V(e) {
    let { context: t, query: n, entrypoint: a, isScrollCloseToBottom: l } = e,
        c = a === g.s4.TEXT,
        u = a === g.s4.TEXT,
        {
            loading: d,
            isEmptyState: f,
            commandResults: _,
            hasCommandResults: h,
            applicationResults: m,
        } = (0, E.j_)({
            context: t,
            query: n,
            searchesActivities: !0,
            searchesCommands: c,
            searchesBots: u,
        }),
        {
            fetchState: b,
            applicationResults: y,
            fetchNextPage: O,
        } = (0, E.pd)({
            query: n,
            context: t,
            fetches: !0,
            pageLimit: U,
            entrypoint: a,
        });
    i.useEffect(() => {
        l && b === p.e.FETCHED && O();
    }, [O, b, l]);
    let A = null == b || b === p.e.FETCHING,
        S = i.useMemo(() => {
            let e = m.map((e) => ({
                    application: e,
                    installOnDemand: !0,
                })),
                t = new Set(
                    m.map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                );
            return [
                ...e,
                ...s().compact(
                    y.map((e) =>
                        e.type === o.j.CONNECTION || t.has(e.data.id)
                            ? null
                            : {
                                  application: e.data,
                                  installOnDemand: !0,
                              },
                    ),
                ),
            ];
        }, [y, m]),
        I = S.length > 0,
        T = f && !I && !A;
    return d
        ? (0, r.jsx)(W, {})
        : T
          ? (0, r.jsx)(v.U, {
                type: g.wg.SEARCH_EMPTY,
                searchQuery: n,
                textContent: a === g.s4.TEXT ? N.intl.string(N.t.LSNOYf) : N.intl.string(N.t.Clu7Qh),
            })
          : (0, r.jsxs)("div", {
                children: [
                    h &&
                        (0, r.jsx)(F, {
                            context: t,
                            commandResults: _,
                            query: n,
                        }),
                    (I || A) &&
                        (0, r.jsx)(H, {
                            context: t,
                            applicationResults: S,
                            includePlaceholder: A,
                            query: n,
                            searchesBots: u,
                        }),
                ],
            });
}
function F(e) {
    var t, n;
    let { context: a, commandResults: s, query: o } = e,
        p = s.length > k,
        E = i.useMemo(() => (p ? s.slice(0, k) : s), [s, p]),
        [b, y] = i.useState(!1),
        A = null != (t = (0, l.A)(b)) ? t : b,
        v = i.useCallback(() => y((e) => !e), []),
        T = (null != (n = (0, l.A)(o)) ? n : o)[0] !== o[0],
        w = b && !T;
    i.useLayoutEffect(() => y(!1), [T]);
    let {
        ref: P,
        isTransitioning: D,
        onTransitionEnd: x,
    } = (0, O.A)({
        key: o,
        isExpanded: w,
        durationMs: 200,
        maxAnimationHeight: 680,
    });
    i.useEffect(() => {
        !A &&
            b &&
            (0, c.zV)(C.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                section_name: g.yK.SEARCH,
                source: m.A.entrypoint(),
                num: s.length,
            });
    }, [s.length, A, b]);
    let L = w || D,
        j = w ? S.A.buttonTypes.VIEW_LESS : S.A.buttonTypes.VIEW_MORE,
        M = L ? s : E;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(S.A, {
                title: N.intl.string(N.t["0hKkS+"]),
                buttonType: j,
                onClickViewButton: p ? v : void 0,
            }),
            (0, r.jsx)("div", {
                className: R._,
                ref: P,
                onTransitionEnd: x,
                children: M.map((e, t) => {
                    let { command: n, application: i, section: s } = e;
                    return (0, r.jsx)(
                        I.A,
                        {
                            command: n,
                            application: i,
                            query: o,
                            searchResultsPosition: t,
                            onClick: () => {
                                let e = m.A.entrypoint();
                                h.k(g.Se.DISMISSED),
                                    (0, f.Mv)({
                                        command: n,
                                        location: d.Oh.APP_LAUNCHER_HOME_SEARCH,
                                        sectionName: g.yK.SEARCH,
                                    }),
                                    "channel" === a.type &&
                                        (u.Gf({
                                            channelId: a.channel.id,
                                            command: n,
                                            section: s,
                                            location: d.Oh.APP_LAUNCHER_HOME_SEARCH,
                                            triggerSection: void 0,
                                            queryLength: o.length,
                                            sectionName: g.yK.SEARCH,
                                            query: o,
                                            searchResultsPosition: t,
                                            source: e,
                                        }),
                                        _._.dispatch(C.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: a.channel.id }));
                            },
                        },
                        n.id,
                    );
                }),
            }),
        ],
    });
}
function B(e) {
    let { trackSearchResultsItemImpressionRef: t } = (0, A.A)({
        applicationId: e.application.id,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
    return (0, r.jsx)("div", {
        className: R.Gn,
        ref: (e) => {
            t.current = e;
        },
        children: (0, r.jsx)(
            b.Gt,
            x(P({}, e), {
                tracksImpression: !1,
                enableVideoBanner: !0,
            }),
        ),
    });
}
function H(e) {
    let { context: t, applicationResults: n, includePlaceholder: i, query: a, searchesBots: s } = e;
    return s
        ? (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(S.A, { title: N.intl.string(N.t.PHjkRE) }),
                  (0, r.jsxs)("div", {
                      className: R._,
                      children: [
                          n.map((e, n) => {
                              let { application: i, installOnDemand: s } = e;
                              return (0, r.jsx)(
                                  Y,
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
                          i && j.map((e) => (0, r.jsx)(T.A, {}, e)),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(S.A, { title: N.intl.string(N.t.shUONg) }),
                  (0, r.jsxs)("div", {
                      className: R.H$,
                      children: [
                          n.map((e, n) => {
                              let { application: i, installOnDemand: s } = e;
                              return (0, r.jsx)(
                                  B,
                                  {
                                      context: t,
                                      application: i,
                                      look: b.r0.LARGE_BANNER,
                                      location: d.Oh.APP_LAUNCHER_HOME_SEARCH,
                                      sectionName: g.yK.SEARCH,
                                      resultsPosition: n,
                                      installOnDemand: s,
                                      query: a,
                                  },
                                  i.id,
                              );
                          }),
                          i && M.map((e) => (0, r.jsx)(y.A, { look: b.r0.LARGE_BANNER }, e)),
                      ],
                  }),
              ],
          });
}
function Y(e) {
    let { onClickAppCard: t } = (0, b.Ps)(e);
    return (0, r.jsx)(I.A, {
        application: e.application,
        onClick: t,
        query: e.query,
        searchResultsPosition: e.resultsPosition,
    });
}
function W() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(S.A, { title: N.intl.string(N.t["0hKkS+"]) }),
            (0, r.jsx)("div", {
                className: R._,
                children: L.map((e) => (0, r.jsx)(T.A, {}, e)),
            }),
            (0, r.jsx)(S.A, { title: N.intl.string(N.t.PHjkRE) }),
            (0, r.jsx)("div", {
                className: R._,
                children: j.map((e) => (0, r.jsx)(T.A, {}, e)),
            }),
        ],
    });
}
