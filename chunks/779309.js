"use strict";
n.d(t, { A: () => ei }), n(321073), n(938796);
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
    p = n(311907),
    h = n(397927),
    m = n(155718),
    g = n(10716),
    E = n(795816),
    A = n(887700),
    I = n(26262),
    T = n(711765),
    y = n(58149),
    S = n(842209),
    v = n(392054),
    C = n(429913),
    b = n(954466),
    N = n(354138),
    R = n(111042),
    O = n(767599),
    D = n(111162),
    L = n(403362),
    w = n(989837),
    x = n(500049),
    P = n(869186),
    M = n(676765),
    k = n(933840),
    U = n(735991),
    G = n(485878),
    V = n(169909),
    F = n(155940),
    B = n(902527),
    j = n(444230),
    H = n(783608),
    Y = n(984516),
    W = n(995346);
n(60809);
var K = n(652215),
    z = n(73510),
    $ = n(985018),
    q = n(244777);
let Z = [],
    Q = 4,
    X = 4,
    J = 6,
    ee = 8,
    et = [, , , ,].fill(0).map((e, t) => t),
    en = [
        { cards: [, , , ,].fill(0).map((e, t) => t), look: V.r0.MEDIUM_BANNER },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: V.r0.ROW },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: V.r0.ROW },
    ],
    er = c.K.APP_LAUNCHER_IN_TEXT;
function ei(e) {
    let { context: t, entrypoint: n, searchQuery: a, setSearchQuery: s, setScroller: o, isScrollCloseToBottom: l } = e,
        u = (0, p.bG)([g.A], () => g.A.getIsEnabled(), []),
        c = n === x.s4.TEXT && "channel" === t.type && null != t.channel && !t.channel.isPrivate(),
        d = (0, U.sw)(n),
        _ = !(0, U.sw)(n),
        f = n === x.s4.TEXT,
        [m, A] = ef(!0),
        [I, T] = ef(c),
        [y, S] = ef(d),
        [v, C] = ef(_),
        b = m && I && y && v,
        N = (d || c) && !b,
        R = _ && u;
    i.useEffect(() => {
        let e = "channel" === t.type ? t.channel?.guild_id : void 0;
        (0, E.LV)({ guildId: e, force: !0 });
    }, [t]),
        i.useEffect(() => {
            n === x.s4.VOICE && E.LK();
        }, [n]);
    let O = a.length > 0;
    return (0, r.jsxs)("div", {
        className: q.kL,
        children: [
            R ? (0, r.jsx)(ea, {}) : null,
            (0, r.jsx)(es, {
                searchQuery: a,
                setSearchQuery: s,
                placeholder: f ? $.intl.string($.t.ziyFv2) : $.intl.string($.t["pw+r5b"]),
            }),
            (0, r.jsx)(h.HOs, {
                ref: o,
                className: q.Ph,
                fade: !0,
                children: O
                    ? (0, r.jsx)(W.A, { context: t, query: a, entrypoint: n, isScrollCloseToBottom: l })
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(el, { context: t, entrypoint: n, onEmptyState: A }),
                              c && "channel" === t.type && (0, r.jsx)(ec, { context: t, onEmptyState: T }),
                              d && (0, r.jsx)(ed, { context: t, entrypoint: n, onEmptyState: S }),
                              _ && (0, r.jsx)(eu, { context: t, onEmptyState: C }),
                              b &&
                                  (0, r.jsx)(j.U, {
                                      type: x.wg.HOME_EMPTY,
                                      textContent:
                                          n === x.s4.TEXT ? $.intl.string($.t.iKZctW) : $.intl.string($.t.RL7Ncg),
                                  }),
                              N && (0, r.jsx)(Y.A, {}),
                          ],
                      }),
            }),
        ],
    });
}
function ea() {
    return (0, r.jsxs)("div", {
        className: q.G,
        children: [
            (0, r.jsx)(h.Text, { className: q.TR, variant: "text-sm/normal", children: $.intl.string($.t.tZ3FNs) }),
            (0, r.jsx)(T.F, { hideSearch: !0 }),
        ],
    });
}
function es(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: a } = e,
        o = i.useRef(null),
        [l, u] = i.useState(!1),
        c = i.useMemo(
            () =>
                s().debounce(
                    (e) => {
                        (0, y.zV)(K.HAw.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: w.A.entrypoint(),
                            location: v.Oh.APP_LAUNCHER_HOME,
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
                (0, y.zV)(K.HAw.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: w.A.entrypoint(),
                    location: v.Oh.APP_LAUNCHER_HOME,
                });
        }, []),
        f = i.useCallback(() => {
            u(!1);
        }, []),
        p = i.useCallback(
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
            className: q.PP,
            children: (0, r.jsx)(h.IWV, {
                ref: o,
                placeholder: a,
                query: t,
                onChange: p,
                onClear: d,
                onFocus: f,
                autoFocus: !0,
            }),
        })
    );
}
function eo(e) {
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
    (0, C.A)(r);
}
function el(e) {
    let { context: t, entrypoint: n, onEmptyState: a } = e,
        s = n === x.s4.VOICE,
        { frecentApps: o, loading: l } = (0, P.k)({
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
        c = $.intl.string($.t["s+UQpc"]),
        d = c;
    s && (d = $.intl.string($.t["2pFD8L"]));
    let { items: _, handleViewMore: f } = eg({
        title: d,
        look: n === x.s4.VOICE ? V.r0.LARGE_BANNER : V.r0.ROW,
        items: u,
        limit: ee,
        sectionName: x.yK.RECENT_APPS,
    });
    i.useEffect(() => {
        l ||
            (0 !== _.length &&
                (0, y.zV)(K.HAw.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: _.length,
                    section_name: x.yK.RECENT_APPS,
                    location: x.W8.HOME,
                    source: n,
                }));
    }, [_.length, n, l]);
    let p = !l && 0 === _.length;
    return (i.useEffect(() => {
        a(p);
    }, [p, a]),
    eo({ apps: _, onlyActivityApps: s }),
    l || p)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(H.A, { title: c, buttonType: H.A.buttonTypes.VIEW_MORE, onClickViewButton: f }),
                  (0, r.jsx)("div", {
                      className: q._,
                      children: (0, r.jsx)("div", {
                          className: q.Ye,
                          children: _.map((e, n) => {
                              let { application: i } = e;
                              return s
                                  ? (0, r.jsx)(
                                        V.wW,
                                        {
                                            context: t,
                                            application: i,
                                            look: V.r0.ICON,
                                            location: x.W8.HOME,
                                            sectionName: x.yK.RECENT_APPS,
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
                                            location: x.W8.HOME,
                                            sectionName: x.yK.RECENT_APPS,
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
function eu(e) {
    let { context: t, onEmptyState: n } = e;
    (0, I.D)();
    let a = (0, A.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 }),
        s = V.r0.LARGE_BANNER,
        { trackSectionImpressionRef: o } = (0, B.A)({
            sectionName: x.yK.ACTIVITIES,
            numItems: a.length,
            numVisibleItems: a.length,
        }),
        l = (0, k.f)(),
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
                      children: (0, r.jsx)(H.A, { title: $.intl.string($.t.shUONg) }),
                  }),
                  (0, r.jsx)("div", {
                      className: q.a2,
                      children: a.map((e, n) => {
                          let { application: i } = e;
                          return (0, r.jsx)(
                              V.wW,
                              {
                                  context: t,
                                  application: i,
                                  look: s,
                                  location: v.Oh.APP_LAUNCHER_HOME,
                                  sectionName: x.yK.ACTIVITIES,
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
function ec(e) {
    let { context: t, onEmptyState: n } = e,
        a = x.yK.APPS_IN_THIS_SERVER,
        { appsInThisServer: s, isLoading: o } = (0, M.A)({ context: t }),
        { items: l, handleViewMore: u } = eg({
            title: $.intl.string($.t.KfkuGc),
            look: V.r0.ROW,
            items: s,
            limit: Q,
            sectionName: a,
        }),
        { trackSectionImpressionRef: c } = (0, B.A)({ sectionName: a, numItems: s.length, numVisibleItems: l.length }),
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
                      children: (0, r.jsx)(H.A, {
                          title: $.intl.string($.t.KfkuGc),
                          buttonType: H.A.buttonTypes.VIEW_MORE,
                          onClickViewButton: u,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: q.l2,
                      children: o
                          ? et.map((e) => (0, r.jsx)(F.A, { look: V.r0.ROW }, e))
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
                                              location: v.Oh.APP_LAUNCHER_HOME,
                                          },
                                          i.id,
                                      )
                                    : null;
                            }),
                  }),
              ],
          });
}
function ed(e) {
    let { context: t, entrypoint: n, onEmptyState: a } = e,
        { fetchState: s, recommendationsSections: o, isInstallOnDemand: l } = eh({ context: t, entrypoint: n }),
        u = em({ context: t, recommendationsSections: o }),
        c = s === R.e.FETCHING,
        d = !c && 0 === o.length;
    return (i.useEffect(() => {
        a(d);
    }, [d, a]),
    d)
        ? null
        : c
          ? en.map((e, t) => {
                let { cards: n, look: i } = e;
                return (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsx)(H.A.Loading, {}),
                            (0, r.jsx)("div", {
                                className: i === V.r0.ROW ? q.l2 : q.a2,
                                children: n.map((e) => (0, r.jsx)(F.A, { look: i }, e)),
                            }),
                        ],
                    },
                    t,
                );
            })
          : o.map((e, n) =>
                (0, r.jsx)(
                    e_,
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
function e_(e) {
    let t,
        n,
        { recommendationsSection: a, remainingActivities: s, isInstallOnDemand: o, position: c, context: p } = e,
        h = a.title;
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
    let m = i.useMemo(() => {
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
                .filter(L.Vq);
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
        g = a.title;
    switch (a.type) {
        case _.Y.BANNER_CARDS:
        case _.Y.SMALL_BANNER_CARDS:
            n = J;
            break;
        case _.Y.EXPANDABLE_LIST:
        default:
            n = X;
    }
    let { items: E, handleViewMore: A } = eg({
            title: h,
            look: t,
            items: m,
            limit: n,
            sectionName: g,
            sectionOverallPosition: c,
        }),
        { trackSectionImpressionRef: I } = (0, B.A)({ sectionName: g, numItems: m.length, numVisibleItems: E.length }),
        T = a.type !== _.Y.SMALL_BANNER_CARDS;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)("div", {
                ref: (e) => {
                    I.current = e;
                },
                children: (0, r.jsx)(H.A, {
                    title: a.title,
                    buttonType: H.A.buttonTypes.VIEW_MORE,
                    onClickViewButton: A,
                }),
            }),
            (0, r.jsx)("div", {
                className: t === V.r0.ROW ? q.l2 : q.a2,
                children: E.map((e, n) => {
                    let i,
                        {
                            collectionItemId: a,
                            collectionItemImageHash: s,
                            application: o,
                            installOnDemand: l,
                            showsPromoted: u,
                        } = e;
                    return (
                        null != a && null != s && (i = (0, O.DH)({ itemId: a, hash: s, containerWidth: 500 })),
                        (0, r.jsx)(
                            V.Gt,
                            {
                                context: p,
                                application: o,
                                look: t,
                                sectionName: g,
                                resultsPosition: n,
                                location: v.Oh.APP_LAUNCHER_HOME,
                                installOnDemand: l,
                                enableVideoBanner: T,
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
function ef(e) {
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
    let e = (0, p.bG)([D.default], () => D.default.onlyShowPreviewAppCollections),
        t = b.A.getCurrentConfig({ location: "App Launcher Home (Web)" }, { autoTrackExposure: !1 }).enabled;
    return e ? o.W.PREVIEW : t ? o.W.NON_STAFF_PREVIEW : o.W.ACTIVE;
}
function eh(e) {
    let { context: t, entrypoint: n } = e,
        r = ep();
    i.useEffect(() => {
        (0, N.An)({ surface: er, activeState: r });
    }, [r]);
    let { sectionDescriptors: a } = S.cu({
            context: t,
            filters: { commandTypes: [m.kc.CHAT] },
            options: { placeholderCount: 0, limit: z.Hi, includeFrecency: !0 },
            allowFetch: !0,
        }),
        s = i.useCallback((e) => null == a.find((t) => t.id === e.id), [a]),
        o = (0, p.bG)([R.A], () => R.A.getFetchState({ surface: er, activeState: r })),
        l = (0, p.bG)([R.A], () => R.A.getCollections({ surface: er, activeState: r })),
        u = n === x.s4.VOICE;
    return {
        fetchState: o,
        recommendationsSections: i.useMemo(() => (u ? (0, U.hX)(l) : l), [l, u]),
        isInstallOnDemand: s,
    };
}
function em(e) {
    let { context: t, recommendationsSections: n } = e;
    (0, I.D)();
    let r = (0, A.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 });
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
function eg(e) {
    let { title: t, look: n, items: r, limit: a, sectionName: s, sectionOverallPosition: o } = e,
        { pushHistory: l } = (0, G.uM)();
    return i.useMemo(
        () =>
            r.length <= a
                ? { items: r, handleViewMore: void 0 }
                : {
                      items: r.slice(0, a),
                      handleViewMore: () => {
                          (0, y.zV)(K.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: s,
                              source: w.A.entrypoint(),
                              num: r.length,
                          }),
                              l({
                                  type: G.Wy.LIST,
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
