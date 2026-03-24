"use strict";
n.d(t, { A: () => ei }), n(321073), n(938796);
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
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
    E = n(10716),
    g = n(795816),
    A = n(887700),
    I = n(26262),
    T = n(711765),
    S = n(58149),
    y = n(842209),
    v = n(392054),
    N = n(429913),
    C = n(954466),
    R = n(354138),
    O = n(111042),
    b = n(767599),
    D = n(111162),
    L = n(403362),
    w = n(989837),
    M = n(500049),
    x = n(869186),
    P = n(676765),
    k = n(933840),
    U = n(735991),
    G = n(485878),
    F = n(169909),
    V = n(155940),
    B = n(902527),
    H = n(444230),
    j = n(783608),
    Y = n(984516),
    W = n(995346);
n(60809);
var K = n(652215),
    $ = n(73510),
    z = n(985018),
    q = n(244777);
let Z = [],
    X = 4,
    Q = 4,
    J = 6,
    ee = 8,
    et = [, , , ,].fill(0).map((e, t) => t),
    en = [
        { cards: [, , , ,].fill(0).map((e, t) => t), look: F.r0.MEDIUM_BANNER },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: F.r0.ROW },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: F.r0.ROW },
    ],
    er = c.K.APP_LAUNCHER_IN_TEXT;
function ei(e) {
    let { context: t, entrypoint: n, searchQuery: s, setSearchQuery: a, setScroller: o, isScrollCloseToBottom: l } = e,
        u = (0, p.bG)([E.A], () => E.A.getIsEnabled(), []),
        c = n === M.s4.TEXT && "channel" === t.type && null != t.channel && !t.channel.isPrivate(),
        d = (0, U.sw)(n),
        _ = !(0, U.sw)(n),
        f = n === M.s4.TEXT,
        [m, A] = ef(!0),
        [I, T] = ef(c),
        [S, y] = ef(d),
        [v, N] = ef(_),
        C = m && I && S && v,
        R = (d || c) && !C,
        O = _ && u;
    i.useEffect(() => {
        let e = "channel" === t.type ? t.channel?.guild_id : void 0;
        (0, g.LV)({ guildId: e, force: !0 });
    }, [t]),
        i.useEffect(() => {
            n === M.s4.VOICE && g.LK();
        }, [n]);
    let b = s.length > 0;
    return (0, r.jsxs)("div", {
        className: q.kL,
        children: [
            O ? (0, r.jsx)(es, {}) : null,
            (0, r.jsx)(ea, {
                searchQuery: s,
                setSearchQuery: a,
                placeholder: f ? z.intl.string(z.t.ziyFv2) : z.intl.string(z.t["pw+r5b"]),
            }),
            (0, r.jsx)(h.HOs, {
                ref: o,
                className: q.Ph,
                fade: !0,
                children: b
                    ? (0, r.jsx)(W.A, { context: t, query: s, entrypoint: n, isScrollCloseToBottom: l })
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(el, { context: t, entrypoint: n, onEmptyState: A }),
                              c && "channel" === t.type && (0, r.jsx)(ec, { context: t, onEmptyState: T }),
                              d && (0, r.jsx)(ed, { context: t, entrypoint: n, onEmptyState: y }),
                              _ && (0, r.jsx)(eu, { context: t, onEmptyState: N }),
                              C &&
                                  (0, r.jsx)(H.U, {
                                      type: M.wg.HOME_EMPTY,
                                      textContent:
                                          n === M.s4.TEXT ? z.intl.string(z.t.iKZctW) : z.intl.string(z.t.RL7Ncg),
                                  }),
                              R && (0, r.jsx)(Y.A, {}),
                          ],
                      }),
            }),
        ],
    });
}
function es() {
    return (0, r.jsxs)("div", {
        className: q.G,
        children: [
            (0, r.jsx)(h.Text, { className: q.TR, variant: "text-sm/normal", children: z.intl.string(z.t.tZ3FNs) }),
            (0, r.jsx)(T.F, { hideSearch: !0 }),
        ],
    });
}
function ea(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: s } = e,
        o = i.useRef(null),
        [l, u] = i.useState(!1),
        c = i.useMemo(
            () =>
                a().debounce(
                    (e) => {
                        (0, S.zV)(K.HAw.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
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
                (0, S.zV)(K.HAw.APP_LAUNCHER_SEARCH_FOCUSED, {
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
                placeholder: s,
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
    (0, N.A)(r);
}
function el(e) {
    let { context: t, entrypoint: n, onEmptyState: s } = e,
        a = n === M.s4.VOICE,
        { frecentApps: o, loading: l } = (0, x.k)({
            context: t,
            onlyActivityApps: a,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0,
        }),
        u = i.useMemo(() => {
            let e = [];
            for (let t of o) null != t.application && e.push({ application: t.application });
            return e;
        }, [o]),
        c = z.intl.string(z.t["s+UQpc"]),
        d = c;
    a && (d = z.intl.string(z.t["2pFD8L"]));
    let { items: _, handleViewMore: f } = eE({
        title: d,
        look: n === M.s4.VOICE ? F.r0.LARGE_BANNER : F.r0.ROW,
        items: u,
        limit: ee,
        sectionName: M.yK.RECENT_APPS,
    });
    i.useEffect(() => {
        l ||
            (0 !== _.length &&
                (0, S.zV)(K.HAw.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: _.length,
                    section_name: M.yK.RECENT_APPS,
                    location: M.W8.HOME,
                    source: n,
                }));
    }, [_.length, n, l]);
    let p = !l && 0 === _.length;
    return (i.useEffect(() => {
        s(p);
    }, [p, s]),
    eo({ apps: _, onlyActivityApps: a }),
    l || p)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(j.A, { title: c, buttonType: j.A.buttonTypes.VIEW_MORE, onClickViewButton: f }),
                  (0, r.jsx)("div", {
                      className: q._,
                      children: (0, r.jsx)("div", {
                          className: q.Ye,
                          children: _.map((e, n) => {
                              let { application: i } = e;
                              return a
                                  ? (0, r.jsx)(
                                        F.wW,
                                        {
                                            context: t,
                                            application: i,
                                            look: F.r0.ICON,
                                            location: M.W8.HOME,
                                            sectionName: M.yK.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1,
                                        },
                                        i.id,
                                    )
                                  : (0, r.jsx)(
                                        F.Gt,
                                        {
                                            context: t,
                                            application: i,
                                            look: F.r0.ICON,
                                            location: M.W8.HOME,
                                            sectionName: M.yK.RECENT_APPS,
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
    let s = (0, A.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 }),
        a = F.r0.LARGE_BANNER,
        { trackSectionImpressionRef: o } = (0, B.A)({
            sectionName: M.yK.ACTIVITIES,
            numItems: s.length,
            numVisibleItems: s.length,
        }),
        l = (0, k.f)(),
        u = 0 === s.length;
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
                      children: (0, r.jsx)(j.A, { title: z.intl.string(z.t.shUONg) }),
                  }),
                  (0, r.jsx)("div", {
                      className: q.a2,
                      children: s.map((e, n) => {
                          let { application: i } = e;
                          return (0, r.jsx)(
                              F.wW,
                              {
                                  context: t,
                                  application: i,
                                  look: a,
                                  location: v.Oh.APP_LAUNCHER_HOME,
                                  sectionName: M.yK.ACTIVITIES,
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
        s = M.yK.APPS_IN_THIS_SERVER,
        { appsInThisServer: a, isLoading: o } = (0, P.A)({ context: t }),
        { items: l, handleViewMore: u } = eE({
            title: z.intl.string(z.t.KfkuGc),
            look: F.r0.ROW,
            items: a,
            limit: X,
            sectionName: s,
        }),
        { trackSectionImpressionRef: c } = (0, B.A)({ sectionName: s, numItems: a.length, numVisibleItems: l.length }),
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
                      children: (0, r.jsx)(j.A, {
                          title: z.intl.string(z.t.KfkuGc),
                          buttonType: j.A.buttonTypes.VIEW_MORE,
                          onClickViewButton: u,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: q.l2,
                      children: o
                          ? et.map((e) => (0, r.jsx)(V.A, { look: F.r0.ROW }, e))
                          : l.map((e, n) => {
                                let { application: i } = e;
                                return null != i
                                    ? (0, r.jsx)(
                                          F.Gt,
                                          {
                                              context: t,
                                              application: i,
                                              look: F.r0.ROW,
                                              sectionName: s,
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
    let { context: t, entrypoint: n, onEmptyState: s } = e,
        { fetchState: a, recommendationsSections: o, isInstallOnDemand: l } = eh({ context: t, entrypoint: n }),
        u = em({ context: t, recommendationsSections: o }),
        c = a === O.e.FETCHING,
        d = !c && 0 === o.length;
    return (i.useEffect(() => {
        s(d);
    }, [d, s]),
    d)
        ? null
        : c
          ? en.map((e, t) => {
                let { cards: n, look: i } = e;
                return (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsx)(j.A.Loading, {}),
                            (0, r.jsx)("div", {
                                className: i === F.r0.ROW ? q.l2 : q.a2,
                                children: n.map((e) => (0, r.jsx)(V.A, { look: i }, e)),
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
        { recommendationsSection: s, remainingActivities: a, isInstallOnDemand: o, position: c, context: p } = e,
        h = s.title;
    switch (s.type) {
        case _.Y.BANNER_CARDS:
            t = F.r0.LARGE_BANNER;
            break;
        case _.Y.SMALL_BANNER_CARDS:
            t = F.r0.MEDIUM_BANNER;
            break;
        default:
            t = F.r0.ROW;
    }
    let m = i.useMemo(() => {
            let e = s.application_directory_collection_items
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
                (0, f.Lt)(s.flags, l.s.APPENDS_REMAINING_ACTIVITIES) &&
                    e.push(
                        ...a.map((e) => {
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
        }, [o, s.application_directory_collection_items, s.flags, a]),
        E = s.title;
    switch (s.type) {
        case _.Y.BANNER_CARDS:
        case _.Y.SMALL_BANNER_CARDS:
            n = J;
            break;
        case _.Y.EXPANDABLE_LIST:
        default:
            n = Q;
    }
    let { items: g, handleViewMore: A } = eE({
            title: h,
            look: t,
            items: m,
            limit: n,
            sectionName: E,
            sectionOverallPosition: c,
        }),
        { trackSectionImpressionRef: I } = (0, B.A)({ sectionName: E, numItems: m.length, numVisibleItems: g.length }),
        T = s.type !== _.Y.SMALL_BANNER_CARDS;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)("div", {
                ref: (e) => {
                    I.current = e;
                },
                children: (0, r.jsx)(j.A, {
                    title: s.title,
                    buttonType: j.A.buttonTypes.VIEW_MORE,
                    onClickViewButton: A,
                }),
            }),
            (0, r.jsx)("div", {
                className: t === F.r0.ROW ? q.l2 : q.a2,
                children: g.map((e, n) => {
                    let i,
                        {
                            collectionItemId: s,
                            collectionItemImageHash: a,
                            application: o,
                            installOnDemand: l,
                            showsPromoted: u,
                        } = e;
                    return (
                        null != s && null != a && (i = (0, b.DH)({ itemId: s, hash: a, containerWidth: 500 })),
                        (0, r.jsx)(
                            F.Gt,
                            {
                                context: p,
                                application: o,
                                look: t,
                                sectionName: E,
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
        t = C.A.getConfig({ location: "App Launcher Home (Web)" }).enabled;
    return e ? o.W.PREVIEW : t ? o.W.NON_STAFF_PREVIEW : o.W.ACTIVE;
}
function eh(e) {
    let { context: t, entrypoint: n } = e,
        r = ep();
    i.useEffect(() => {
        (0, R.An)({ surface: er, activeState: r });
    }, [r]);
    let { sectionDescriptors: s } = y.cu({
            context: t,
            filters: { commandTypes: [m.kc.CHAT] },
            options: { placeholderCount: 0, limit: $.Hi, includeFrecency: !0 },
            allowFetch: !0,
        }),
        a = i.useCallback((e) => null == s.find((t) => t.id === e.id), [s]),
        o = (0, p.bG)([O.A], () => O.A.getFetchState({ surface: er, activeState: r })),
        l = (0, p.bG)([O.A], () => O.A.getCollections({ surface: er, activeState: r })),
        u = n === M.s4.VOICE;
    return {
        fetchState: o,
        recommendationsSections: i.useMemo(() => (u ? (0, U.hX)(l) : l), [l, u]),
        isInstallOnDemand: a,
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
function eE(e) {
    let { title: t, look: n, items: r, limit: s, sectionName: a, sectionOverallPosition: o } = e,
        { pushHistory: l } = (0, G.uM)();
    return i.useMemo(
        () =>
            r.length <= s
                ? { items: r, handleViewMore: void 0 }
                : {
                      items: r.slice(0, s),
                      handleViewMore: () => {
                          (0, S.zV)(K.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: a,
                              source: w.A.entrypoint(),
                              num: r.length,
                          }),
                              l({
                                  type: G.Wy.LIST,
                                  title: t,
                                  look: n,
                                  items: r,
                                  sectionName: a,
                                  sectionOverallPosition: o,
                              });
                      },
                  },
        [r, s, a, l, t, n, o],
    );
}
