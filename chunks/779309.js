"use strict";
n.d(t, { A: () => ea }), n(321073), n(938796);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(724002),
    l = n(186510),
    u = n(56797),
    c = n(287174),
    d = n(487899),
    _ = n(239314),
    f = n(665260),
    h = n(311907),
    p = n(397927),
    g = n(155718),
    E = n(10716),
    A = n(795816),
    I = n(887700),
    T = n(26262),
    y = n(711765),
    S = n(58149),
    v = n(842209),
    C = n(392054),
    b = n(429913),
    N = n(954466),
    R = n(354138),
    O = n(111042),
    D = n(767599),
    L = n(111162),
    w = n(403362),
    x = n(989837),
    P = n(500049),
    M = n(869186),
    k = n(676765),
    U = n(933840),
    G = n(735991),
    F = n(485878),
    V = n(169909),
    B = n(155940),
    j = n(902527),
    H = n(444230),
    Y = n(783608),
    W = n(984516),
    K = n(995346);
n(60809);
var $ = n(652215),
    z = n(73510),
    q = n(985018),
    X = n(244777);
let Z = [],
    Q = 4,
    J = 4,
    ee = 6,
    et = 8,
    en = [, , , ,].fill(0).map((e, t) => t),
    er = [
        { cards: [, , , ,].fill(0).map((e, t) => t), look: V.r0.MEDIUM_BANNER },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: V.r0.ROW },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: V.r0.ROW },
    ],
    ei = c.K.APP_LAUNCHER_IN_TEXT;
function ea(e) {
    let { context: t, entrypoint: n, searchQuery: a, setSearchQuery: s, setScroller: o, isScrollCloseToBottom: l } = e,
        u = (0, h.bG)([E.A], () => E.A.getIsEnabled(), []),
        c = n === P.s4.TEXT && "channel" === t.type && null != t.channel && !t.channel.isPrivate(),
        d = (0, G.sw)(n),
        _ = !(0, G.sw)(n),
        f = n === P.s4.TEXT,
        [g, I] = eh(!0),
        [T, y] = eh(c),
        [S, v] = eh(d),
        [C, b] = eh(_),
        N = g && T && S && C,
        R = (d || c) && !N,
        O = _ && u;
    i.useEffect(() => {
        let e = "channel" === t.type ? t.channel?.guild_id : void 0;
        (0, A.LV)({ guildId: e, force: !0 });
    }, [t]),
        i.useEffect(() => {
            n === P.s4.VOICE && A.LK();
        }, [n]);
    let D = a.length > 0;
    return (0, r.jsxs)("div", {
        className: X.kL,
        children: [
            O ? (0, r.jsx)(es, {}) : null,
            (0, r.jsx)(eo, {
                searchQuery: a,
                setSearchQuery: s,
                placeholder: f ? q.intl.string(q.t.ziyFv2) : q.intl.string(q.t["pw+r5b"]),
            }),
            (0, r.jsx)(p.HOs, {
                ref: o,
                className: X.Ph,
                fade: !0,
                children: D
                    ? (0, r.jsx)(K.A, { context: t, query: a, entrypoint: n, isScrollCloseToBottom: l })
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(eu, { context: t, entrypoint: n, onEmptyState: I }),
                              c && "channel" === t.type && (0, r.jsx)(ed, { context: t, onEmptyState: y }),
                              d && (0, r.jsx)(e_, { context: t, entrypoint: n, onEmptyState: v }),
                              _ && (0, r.jsx)(ec, { context: t, onEmptyState: b }),
                              N &&
                                  (0, r.jsx)(H.U, {
                                      type: P.wg.HOME_EMPTY,
                                      textContent:
                                          n === P.s4.TEXT ? q.intl.string(q.t.iKZctW) : q.intl.string(q.t.RL7Ncg),
                                  }),
                              R && (0, r.jsx)(W.A, {}),
                          ],
                      }),
            }),
        ],
    });
}
function es() {
    return (0, r.jsxs)("div", {
        className: X.G,
        children: [
            (0, r.jsx)(p.Text, { className: X.TR, variant: "text-sm/normal", children: q.intl.string(q.t.tZ3FNs) }),
            (0, r.jsx)(y.F, { hideSearch: !0 }),
        ],
    });
}
function eo(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: a } = e,
        o = i.useRef(null),
        [l, u] = i.useState(!1),
        c = i.useMemo(
            () =>
                s().debounce(
                    (e) => {
                        (0, S.zV)($.HAw.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: x.A.entrypoint(),
                            location: C.Oh.APP_LAUNCHER_HOME,
                        });
                    },
                    400,
                    { leading: !1, trailing: !0 },
                ),
            [],
        ),
        d = i.useCallback(() => n(""), [n]),
        _ = i.useCallback(() => {
            u(!0),
                (0, S.zV)($.HAw.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: x.A.entrypoint(),
                    location: C.Oh.APP_LAUNCHER_HOME,
                });
        }, []),
        f = i.useCallback(() => {
            u(!1);
        }, []),
        h = i.useCallback(
            (e) => {
                l || _(), n(e), c(e);
            },
            [l, n, _, c],
        );
    return (
        i.useEffect(() => {
            let e = o.current;
            if (null == e) return;
            let t = () => {
                l || _();
            };
            return (
                e.addEventListener("click", t),
                () => {
                    e.removeEventListener("click", t);
                }
            );
        }, [l, _]),
        (0, r.jsx)("div", {
            className: X.PP,
            children: (0, r.jsx)(p.IWV, {
                ref: o,
                placeholder: a,
                query: t,
                onChange: h,
                onClear: d,
                onFocus: f,
                autoFocus: !0,
            }),
        })
    );
}
function el(e) {
    let { apps: t, onlyActivityApps: n } = e,
        r = i.useMemo(
            () =>
                n
                    ? t.map((e) => {
                          let { application: t } = e;
                          return t.id;
                      })
                    : [],
            [t, n],
        );
    (0, b.A)(r);
}
function eu(e) {
    let { context: t, entrypoint: n, onEmptyState: a } = e,
        s = n === P.s4.VOICE,
        { frecentApps: o, loading: l } = (0, M.k)({
            context: t,
            onlyActivityApps: s,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0,
        }),
        u = i.useMemo(() => {
            let e = [];
            for (let t of o) null != t.application && e.push({ application: t.application });
            return e;
        }, [o]),
        c = q.intl.string(q.t["s+UQpc"]),
        d = c;
    s && (d = q.intl.string(q.t["2pFD8L"]));
    let { items: _, handleViewMore: f } = eE({
        title: d,
        look: n === P.s4.VOICE ? V.r0.LARGE_BANNER : V.r0.ROW,
        items: u,
        limit: et,
        sectionName: P.yK.RECENT_APPS,
    });
    i.useEffect(() => {
        l ||
            (0 !== _.length &&
                (0, S.zV)($.HAw.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: _.length,
                    section_name: P.yK.RECENT_APPS,
                    location: P.W8.HOME,
                    source: n,
                }));
    }, [_.length, n, l]);
    let h = !l && 0 === _.length;
    return (i.useEffect(() => {
        a(h);
    }, [h, a]),
    el({ apps: _, onlyActivityApps: s }),
    l || h)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(Y.A, { title: c, buttonType: Y.A.buttonTypes.VIEW_MORE, onClickViewButton: f }),
                  (0, r.jsx)("div", {
                      className: X._,
                      children: (0, r.jsx)("div", {
                          className: X.Ye,
                          children: _.map((e, n) => {
                              let { application: i } = e;
                              return s
                                  ? (0, r.jsx)(
                                        V.wW,
                                        {
                                            context: t,
                                            application: i,
                                            look: V.r0.ICON,
                                            location: P.W8.HOME,
                                            sectionName: P.yK.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1,
                                        },
                                        i.id,
                                    )
                                  : (0, r.jsx)(
                                        V.Gt,
                                        {
                                            context: t,
                                            application: i,
                                            look: V.r0.ICON,
                                            location: P.W8.HOME,
                                            sectionName: P.yK.RECENT_APPS,
                                            resultsPosition: n,
                                        },
                                        i.id,
                                    );
                          }),
                      }),
                  }),
              ],
          });
}
function ec(e) {
    let { context: t, onEmptyState: n } = e;
    (0, T.D)();
    let a = (0, I.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 }),
        s = V.r0.LARGE_BANNER,
        { trackSectionImpressionRef: o } = (0, j.A)({
            sectionName: P.yK.ACTIVITIES,
            numItems: a.length,
            numVisibleItems: a.length,
        }),
        l = (0, U.f)(),
        u = 0 === a.length;
    return (i.useEffect(() => {
        n(u);
    }, [n, u]),
    u)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)("div", {
                      ref: (e) => {
                          o.current = e;
                      },
                      children: (0, r.jsx)(Y.A, { title: q.intl.string(q.t.shUONg) }),
                  }),
                  (0, r.jsx)("div", {
                      className: X.a2,
                      children: a.map((e, n) => {
                          let { application: i } = e;
                          return (0, r.jsx)(
                              V.wW,
                              {
                                  context: t,
                                  application: i,
                                  look: s,
                                  location: C.Oh.APP_LAUNCHER_HOME,
                                  sectionName: P.yK.ACTIVITIES,
                                  resultsPosition: n,
                                  sectionOverallPosition: 0,
                                  isOneClickCTA: !l,
                                  fetchesApplication: !1,
                              },
                              i.id,
                          );
                      }),
                  }),
              ],
          });
}
function ed(e) {
    let { context: t, onEmptyState: n } = e,
        a = P.yK.APPS_IN_THIS_SERVER,
        { appsInThisServer: s, isLoading: o } = (0, k.A)({ context: t }),
        { items: l, handleViewMore: u } = eE({
            title: q.intl.string(q.t.KfkuGc),
            look: V.r0.ROW,
            items: s,
            limit: Q,
            sectionName: a,
        }),
        { trackSectionImpressionRef: c } = (0, j.A)({ sectionName: a, numItems: s.length, numVisibleItems: l.length }),
        d = !o && 0 === l.length;
    return (i.useEffect(() => {
        n(d);
    }, [d, n]),
    d)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)("div", {
                      ref: (e) => {
                          c.current = e;
                      },
                      children: (0, r.jsx)(Y.A, {
                          title: q.intl.string(q.t.KfkuGc),
                          buttonType: Y.A.buttonTypes.VIEW_MORE,
                          onClickViewButton: u,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: X.l2,
                      children: o
                          ? en.map((e) => (0, r.jsx)(B.A, { look: V.r0.ROW }, e))
                          : l.map((e, n) => {
                                let { application: i } = e;
                                return null != i
                                    ? (0, r.jsx)(
                                          V.Gt,
                                          {
                                              context: t,
                                              application: i,
                                              look: V.r0.ROW,
                                              sectionName: a,
                                              resultsPosition: n,
                                              location: C.Oh.APP_LAUNCHER_HOME,
                                          },
                                          i.id,
                                      )
                                    : null;
                            }),
                  }),
              ],
          });
}
function e_(e) {
    let { context: t, entrypoint: n, onEmptyState: a } = e,
        { fetchState: s, recommendationsSections: o, isInstallOnDemand: l } = em({ context: t, entrypoint: n }),
        u = eg({ context: t, recommendationsSections: o }),
        c = s === O.e.FETCHING,
        d = !c && 0 === o.length;
    return (i.useEffect(() => {
        a(d);
    }, [d, a]),
    d)
        ? null
        : c
          ? er.map((e, t) => {
                let { cards: n, look: i } = e;
                return (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsx)(Y.A.Loading, {}),
                            (0, r.jsx)("div", {
                                className: i === V.r0.ROW ? X.l2 : X.a2,
                                children: n.map((e) => (0, r.jsx)(B.A, { look: i }, e)),
                            }),
                        ],
                    },
                    t,
                );
            })
          : o.map((e, n) =>
                (0, r.jsx)(
                    ef,
                    {
                        recommendationsSection: e,
                        remainingActivities: u,
                        isInstallOnDemand: l,
                        position: n,
                        context: t,
                    },
                    e.id,
                ),
            );
}
function ef(e) {
    let t,
        n,
        { recommendationsSection: a, remainingActivities: s, isInstallOnDemand: o, position: c, context: h } = e,
        p = a.title;
    switch (a.type) {
        case _.Y.BANNER_CARDS:
            t = V.r0.LARGE_BANNER;
            break;
        case _.Y.SMALL_BANNER_CARDS:
            t = V.r0.MEDIUM_BANNER;
            break;
        default:
            t = V.r0.ROW;
    }
    let g = i.useMemo(() => {
            let e = a.application_directory_collection_items
                .map((e) => {
                    if (e.type === d.L.APPLICATION)
                        return {
                            collectionItemId: e.id,
                            collectionItemImageHash: e.image_hash,
                            showsPromoted: (0, f.Lt)(e.flags, u.$.PROMOTED),
                            application: e.application,
                            installOnDemand: o(e.application),
                        };
                })
                .filter(w.Vq);
            return (
                (0, f.Lt)(a.flags, l.s.APPENDS_REMAINING_ACTIVITIES) &&
                    e.push(
                        ...s.map((e) => {
                            let { application: t } = e;
                            return {
                                collectionItemId: void 0,
                                collectionItemImageHash: void 0,
                                showsPromoted: !1,
                                application: t,
                                installOnDemand: !0,
                            };
                        }),
                    ),
                e
            );
        }, [o, a.application_directory_collection_items, a.flags, s]),
        E = a.title;
    switch (a.type) {
        case _.Y.BANNER_CARDS:
        case _.Y.SMALL_BANNER_CARDS:
            n = ee;
            break;
        case _.Y.EXPANDABLE_LIST:
        default:
            n = J;
    }
    let { items: A, handleViewMore: I } = eE({
            title: p,
            look: t,
            items: g,
            limit: n,
            sectionName: E,
            sectionOverallPosition: c,
        }),
        { trackSectionImpressionRef: T } = (0, j.A)({ sectionName: E, numItems: g.length, numVisibleItems: A.length }),
        y = a.type !== _.Y.SMALL_BANNER_CARDS;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)("div", {
                ref: (e) => {
                    T.current = e;
                },
                children: (0, r.jsx)(Y.A, {
                    title: a.title,
                    buttonType: Y.A.buttonTypes.VIEW_MORE,
                    onClickViewButton: I,
                }),
            }),
            (0, r.jsx)("div", {
                className: t === V.r0.ROW ? X.l2 : X.a2,
                children: A.map((e, n) => {
                    let i,
                        {
                            collectionItemId: a,
                            collectionItemImageHash: s,
                            application: o,
                            installOnDemand: l,
                            showsPromoted: u,
                        } = e;
                    return (
                        null != a && null != s && (i = (0, D.DH)({ itemId: a, hash: s, containerWidth: 500 })),
                        (0, r.jsx)(
                            V.Gt,
                            {
                                context: h,
                                application: o,
                                look: t,
                                sectionName: E,
                                resultsPosition: n,
                                location: C.Oh.APP_LAUNCHER_HOME,
                                installOnDemand: l,
                                enableVideoBanner: y,
                                sectionOverallPosition: c,
                                overrideImageUrl: i,
                                showsPromoted: u,
                            },
                            `${n}-${o.id}`,
                        )
                    );
                }),
            }),
        ],
    });
}
function eh(e) {
    let [t, n] = i.useState(!e);
    return [
        t,
        i.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n(e);
        }, []),
    ];
}
function ep() {
    let e = (0, h.bG)([L.default], () => L.default.onlyShowPreviewAppCollections),
        t = N.A.getCurrentConfig({ location: "App Launcher Home (Web)" }, { autoTrackExposure: !1 }).enabled;
    return e ? o.W.PREVIEW : t ? o.W.NON_STAFF_PREVIEW : o.W.ACTIVE;
}
function em(e) {
    let { context: t, entrypoint: n } = e,
        r = ep();
    i.useEffect(() => {
        (0, R.An)({ surface: ei, activeState: r });
    }, [r]);
    let { sectionDescriptors: a } = v.cu({
            context: t,
            filters: { commandTypes: [g.kc.CHAT] },
            options: { placeholderCount: 0, limit: z.Hi, includeFrecency: !0 },
            allowFetch: !0,
        }),
        s = i.useCallback((e) => null == a.find((t) => t.id === e.id), [a]),
        o = (0, h.bG)([O.A], () => O.A.getFetchState({ surface: ei, activeState: r })),
        l = (0, h.bG)([O.A], () => O.A.getCollections({ surface: ei, activeState: r })),
        u = n === P.s4.VOICE;
    return {
        fetchState: o,
        recommendationsSections: i.useMemo(() => (u ? (0, G.hX)(l) : l), [l, u]),
        isInstallOnDemand: s,
    };
}
function eg(e) {
    let { context: t, recommendationsSections: n } = e;
    (0, T.D)();
    let r = (0, I.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 });
    return i.useMemo(() => {
        if (!n.some((e) => (0, f.Lt)(e.flags, l.s.APPENDS_REMAINING_ACTIVITIES))) return Z;
        let e = new Set();
        return (
            n.forEach((t) => {
                t.application_directory_collection_items.forEach((t) => {
                    t.type === d.L.APPLICATION && e.add(t.application.id);
                });
            }),
            r.filter((t) => !e.has(t.application.id))
        );
    }, [n, r]);
}
function eE(e) {
    let { title: t, look: n, items: r, limit: a, sectionName: s, sectionOverallPosition: o } = e,
        { pushHistory: l } = (0, F.uM)();
    return i.useMemo(
        () =>
            r.length <= a
                ? { items: r, handleViewMore: void 0 }
                : {
                      items: r.slice(0, a),
                      handleViewMore: () => {
                          (0, S.zV)($.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: s,
                              source: x.A.entrypoint(),
                              num: r.length,
                          }),
                              l({
                                  type: F.Wy.LIST,
                                  title: t,
                                  look: n,
                                  items: r,
                                  sectionName: s,
                                  sectionOverallPosition: o,
                              });
                      },
                  },
        [r, a, s, l, t, n, o],
    );
}
