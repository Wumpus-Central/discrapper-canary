n.d(t, { A: () => ei }), n(896048), n(321073), n(938796);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(724002),
    l = n(186510),
    c = n(56797),
    u = n(287174),
    d = n(487899),
    f = n(239314),
    p = n(665260),
    _ = n(311907),
    h = n(397927),
    m = n(155718),
    g = n(10716),
    E = n(795816),
    b = n(887700),
    y = n(26262),
    O = n(711765),
    A = n(58149),
    v = n(842209),
    S = n(392054),
    I = n(429913),
    T = n(954466),
    C = n(354138),
    N = n(111042),
    R = n(767599),
    w = n(111162),
    P = n(403362),
    D = n(989837),
    x = n(500049),
    L = n(869186),
    j = n(676765),
    M = n(933840),
    k = n(735991),
    U = n(485878),
    G = n(169909),
    V = n(155940),
    F = n(902527),
    B = n(444230),
    H = n(783608),
    Y = n(984516),
    W = n(995346);
n(60809);
var K = n(652215),
    z = n(73510),
    q = n(985018),
    X = n(244777);
let Z = [],
    Q = 4,
    $ = 4,
    J = 6,
    ee = 8,
    et = [, , , ,].fill(0).map((e, t) => t),
    en = [
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: G.r0.MEDIUM_BANNER,
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: G.r0.ROW,
        },
        {
            cards: [, , , ,].fill(0).map((e, t) => t),
            look: G.r0.ROW,
        },
    ],
    er = u.K.APP_LAUNCHER_IN_TEXT;
function ei(e) {
    let { context: t, entrypoint: n, searchQuery: a, setSearchQuery: s, setScroller: o, isScrollCloseToBottom: l } = e,
        c = (0, _.bG)([g.A], () => g.A.getIsEnabled(), []),
        u = n === x.s4.TEXT && "channel" === t.type && null != t.channel && !t.channel.isPrivate(),
        d = (0, k.sw)(n),
        f = !(0, k.sw)(n),
        p = n === x.s4.TEXT,
        [m, b] = ep(!0),
        [y, O] = ep(u),
        [A, v] = ep(d),
        [S, I] = ep(f),
        T = m && y && A && S,
        C = (d || u) && !T,
        N = f && c;
    i.useEffect(() => {
        var e;
        let n = "channel" === t.type ? (null == (e = t.channel) ? void 0 : e.guild_id) : void 0;
        (0, E.LV)({
            guildId: n,
            force: !0,
        });
    }, [t]),
        i.useEffect(() => {
            n === x.s4.VOICE && E.LK();
        }, [n]);
    let R = a.length > 0;
    return (0, r.jsxs)("div", {
        className: X.kL,
        children: [
            N ? (0, r.jsx)(ea, {}) : null,
            (0, r.jsx)(es, {
                searchQuery: a,
                setSearchQuery: s,
                placeholder: p ? q.intl.string(q.t.ziyFv2) : q.intl.string(q.t["pw+r5b"]),
            }),
            (0, r.jsx)(h.HOs, {
                ref: o,
                className: X.Ph,
                fade: !0,
                children: R
                    ? (0, r.jsx)(W.A, {
                          context: t,
                          query: a,
                          entrypoint: n,
                          isScrollCloseToBottom: l,
                      })
                    : (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(el, {
                                  context: t,
                                  entrypoint: n,
                                  onEmptyState: b,
                              }),
                              u &&
                                  "channel" === t.type &&
                                  (0, r.jsx)(eu, {
                                      context: t,
                                      onEmptyState: O,
                                  }),
                              d &&
                                  (0, r.jsx)(ed, {
                                      context: t,
                                      entrypoint: n,
                                      onEmptyState: v,
                                  }),
                              f &&
                                  (0, r.jsx)(ec, {
                                      context: t,
                                      onEmptyState: I,
                                  }),
                              T &&
                                  (0, r.jsx)(B.U, {
                                      type: x.wg.HOME_EMPTY,
                                      textContent:
                                          n === x.s4.TEXT ? q.intl.string(q.t.iKZctW) : q.intl.string(q.t.RL7Ncg),
                                  }),
                              C && (0, r.jsx)(Y.A, {}),
                          ],
                      }),
            }),
        ],
    });
}
function ea() {
    return (0, r.jsxs)("div", {
        className: X.G,
        children: [
            (0, r.jsx)(h.Text, {
                className: X.TR,
                variant: "text-sm/normal",
                children: q.intl.string(q.t.tZ3FNs),
            }),
            (0, r.jsx)(O.F, { hideSearch: !0 }),
        ],
    });
}
function es(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: a } = e,
        o = i.useRef(null),
        [l, c] = i.useState(!1),
        u = i.useMemo(
            () =>
                s().debounce(
                    (e) => {
                        (0, A.zV)(K.HAw.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: D.A.entrypoint(),
                            location: S.Oh.APP_LAUNCHER_HOME,
                        });
                    },
                    400,
                    {
                        leading: !1,
                        trailing: !0,
                    },
                ),
            [],
        ),
        d = i.useCallback(() => n(""), [n]),
        f = i.useCallback(() => {
            c(!0),
                (0, A.zV)(K.HAw.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: D.A.entrypoint(),
                    location: S.Oh.APP_LAUNCHER_HOME,
                });
        }, []),
        p = i.useCallback(() => {
            c(!1);
        }, []),
        _ = i.useCallback(
            (e) => {
                l || f(), n(e), u(e);
            },
            [l, n, f, u],
        );
    return (
        i.useEffect(() => {
            let e = o.current;
            if (null == e) return;
            let t = () => {
                l || f();
            };
            return (
                e.addEventListener("click", t),
                () => {
                    e.removeEventListener("click", t);
                }
            );
        }, [l, f]),
        (0, r.jsx)("div", {
            className: X.PP,
            children: (0, r.jsx)(h.IWV, {
                ref: o,
                placeholder: a,
                query: t,
                onChange: _,
                onClear: d,
                onFocus: p,
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
    (0, I.A)(r);
}
function el(e) {
    let { context: t, entrypoint: n, onEmptyState: a } = e,
        s = n === x.s4.VOICE,
        { frecentApps: o, loading: l } = (0, L.k)({
            context: t,
            onlyActivityApps: s,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0,
        }),
        c = i.useMemo(() => {
            let e = [];
            for (let t of o) null != t.application && e.push({ application: t.application });
            return e;
        }, [o]),
        u = q.intl.string(q.t["s+UQpc"]),
        d = u;
    s && (d = q.intl.string(q.t["2pFD8L"]));
    let { items: f, handleViewMore: p } = eg({
        title: d,
        look: n === x.s4.VOICE ? G.r0.LARGE_BANNER : G.r0.ROW,
        items: c,
        limit: ee,
        sectionName: x.yK.RECENT_APPS,
    });
    i.useEffect(() => {
        l ||
            (0 !== f.length &&
                (0, A.zV)(K.HAw.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: f.length,
                    section_name: x.yK.RECENT_APPS,
                    location: x.W8.HOME,
                    source: n,
                }));
    }, [f.length, n, l]);
    let _ = !l && 0 === f.length;
    return (i.useEffect(() => {
        a(_);
    }, [_, a]),
    eo({
        apps: f,
        onlyActivityApps: s,
    }),
    l || _)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(H.A, {
                      title: u,
                      buttonType: H.A.buttonTypes.VIEW_MORE,
                      onClickViewButton: p,
                  }),
                  (0, r.jsx)("div", {
                      className: X._,
                      children: (0, r.jsx)("div", {
                          className: X.Ye,
                          children: f.map((e, n) => {
                              let { application: i } = e;
                              return s
                                  ? (0, r.jsx)(
                                        G.wW,
                                        {
                                            context: t,
                                            application: i,
                                            look: G.r0.ICON,
                                            location: x.W8.HOME,
                                            sectionName: x.yK.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1,
                                        },
                                        i.id,
                                    )
                                  : (0, r.jsx)(
                                        G.Gt,
                                        {
                                            context: t,
                                            application: i,
                                            look: G.r0.ICON,
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
function ec(e) {
    var t;
    let { context: n, onEmptyState: a } = e;
    (0, y.D)();
    let s = (0, b.A)({ guildId: "channel" === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0 }),
        o = G.r0.LARGE_BANNER,
        { trackSectionImpressionRef: l } = (0, F.A)({
            sectionName: x.yK.ACTIVITIES,
            numItems: s.length,
            numVisibleItems: s.length,
        }),
        c = (0, M.f)(),
        u = 0 === s.length;
    return (i.useEffect(() => {
        a(u);
    }, [a, u]),
    u)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)("div", {
                      ref: (e) => {
                          l.current = e;
                      },
                      children: (0, r.jsx)(H.A, { title: q.intl.string(q.t.shUONg) }),
                  }),
                  (0, r.jsx)("div", {
                      className: X.a2,
                      children: s.map((e, t) => {
                          let { application: i } = e;
                          return (0, r.jsx)(
                              G.wW,
                              {
                                  context: n,
                                  application: i,
                                  look: o,
                                  location: S.Oh.APP_LAUNCHER_HOME,
                                  sectionName: x.yK.ACTIVITIES,
                                  resultsPosition: t,
                                  sectionOverallPosition: 0,
                                  isOneClickCTA: !c,
                                  fetchesApplication: !1,
                              },
                              i.id,
                          );
                      }),
                  }),
              ],
          });
}
function eu(e) {
    let { context: t, onEmptyState: n } = e,
        a = x.yK.APPS_IN_THIS_SERVER,
        { appsInThisServer: s, isLoading: o } = (0, j.A)({ context: t }),
        { items: l, handleViewMore: c } = eg({
            title: q.intl.string(q.t.KfkuGc),
            look: G.r0.ROW,
            items: s,
            limit: Q,
            sectionName: a,
        }),
        { trackSectionImpressionRef: u } = (0, F.A)({
            sectionName: a,
            numItems: s.length,
            numVisibleItems: l.length,
        }),
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
                          u.current = e;
                      },
                      children: (0, r.jsx)(H.A, {
                          title: q.intl.string(q.t.KfkuGc),
                          buttonType: H.A.buttonTypes.VIEW_MORE,
                          onClickViewButton: c,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: X.l2,
                      children: o
                          ? et.map((e) => (0, r.jsx)(V.A, { look: G.r0.ROW }, e))
                          : l.map((e, n) => {
                                let { application: i } = e;
                                return null != i
                                    ? (0, r.jsx)(
                                          G.Gt,
                                          {
                                              context: t,
                                              application: i,
                                              look: G.r0.ROW,
                                              sectionName: a,
                                              resultsPosition: n,
                                              location: S.Oh.APP_LAUNCHER_HOME,
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
        {
            fetchState: s,
            recommendationsSections: o,
            isInstallOnDemand: l,
        } = eh({
            context: t,
            entrypoint: n,
        }),
        c = em({
            context: t,
            recommendationsSections: o,
        }),
        u = s === N.e.FETCHING,
        d = !u && 0 === o.length;
    return (i.useEffect(() => {
        a(d);
    }, [d, a]),
    d)
        ? null
        : u
          ? en.map((e, t) => {
                let { cards: n, look: i } = e;
                return (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsx)(H.A.Loading, {}),
                            (0, r.jsx)("div", {
                                className: i === G.r0.ROW ? X.l2 : X.a2,
                                children: n.map((e) => (0, r.jsx)(V.A, { look: i }, e)),
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
                        remainingActivities: c,
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
        { recommendationsSection: a, remainingActivities: s, isInstallOnDemand: o, position: u, context: _ } = e,
        h = a.title;
    switch (a.type) {
        case f.Y.BANNER_CARDS:
            t = G.r0.LARGE_BANNER;
            break;
        case f.Y.SMALL_BANNER_CARDS:
            t = G.r0.MEDIUM_BANNER;
            break;
        default:
            t = G.r0.ROW;
    }
    let m = i.useMemo(() => {
            let e = a.application_directory_collection_items
                .map((e) => {
                    if (e.type === d.L.APPLICATION)
                        return {
                            collectionItemId: e.id,
                            collectionItemImageHash: e.image_hash,
                            showsPromoted: (0, p.Lt)(e.flags, c.$.PROMOTED),
                            application: e.application,
                            installOnDemand: o(e.application),
                        };
                })
                .filter(P.Vq);
            return (
                (0, p.Lt)(a.flags, l.s.APPENDS_REMAINING_ACTIVITIES) &&
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
        case f.Y.BANNER_CARDS:
        case f.Y.SMALL_BANNER_CARDS:
            n = J;
            break;
        case f.Y.EXPANDABLE_LIST:
        default:
            n = $;
    }
    let { items: E, handleViewMore: b } = eg({
            title: h,
            look: t,
            items: m,
            limit: n,
            sectionName: g,
            sectionOverallPosition: u,
        }),
        { trackSectionImpressionRef: y } = (0, F.A)({
            sectionName: g,
            numItems: m.length,
            numVisibleItems: E.length,
        }),
        O = a.type !== f.Y.SMALL_BANNER_CARDS;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)("div", {
                ref: (e) => {
                    y.current = e;
                },
                children: (0, r.jsx)(H.A, {
                    title: a.title,
                    buttonType: H.A.buttonTypes.VIEW_MORE,
                    onClickViewButton: b,
                }),
            }),
            (0, r.jsx)("div", {
                className: t === G.r0.ROW ? X.l2 : X.a2,
                children: E.map((e, n) => {
                    let i,
                        {
                            collectionItemId: a,
                            collectionItemImageHash: s,
                            application: o,
                            installOnDemand: l,
                            showsPromoted: c,
                        } = e;
                    return (
                        null != a &&
                            null != s &&
                            (i = (0, R.DH)({
                                itemId: a,
                                hash: s,
                                containerWidth: 500,
                            })),
                        (0, r.jsx)(
                            G.Gt,
                            {
                                context: _,
                                application: o,
                                look: t,
                                sectionName: g,
                                resultsPosition: n,
                                location: S.Oh.APP_LAUNCHER_HOME,
                                installOnDemand: l,
                                enableVideoBanner: O,
                                sectionOverallPosition: u,
                                overrideImageUrl: i,
                                showsPromoted: c,
                            },
                            "".concat(n, "-").concat(o.id),
                        )
                    );
                }),
            }),
        ],
    });
}
function ep(e) {
    let [t, n] = i.useState(!e);
    return [
        t,
        i.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n(e);
        }, []),
    ];
}
function e_() {
    let e = (0, _.bG)([w.default], () => w.default.onlyShowPreviewAppCollections),
        t = T.A.getCurrentConfig({ location: "App Launcher Home (Web)" }, { autoTrackExposure: !1 }).enabled;
    return e ? o.W.PREVIEW : t ? o.W.NON_STAFF_PREVIEW : o.W.ACTIVE;
}
function eh(e) {
    let { context: t, entrypoint: n } = e,
        r = e_();
    i.useEffect(() => {
        (0, C.An)({
            surface: er,
            activeState: r,
        });
    }, [r]);
    let { sectionDescriptors: a } = v.cu({
            context: t,
            filters: { commandTypes: [m.kc.CHAT] },
            options: {
                placeholderCount: 0,
                limit: z.Hi,
                includeFrecency: !0,
            },
            allowFetch: !0,
        }),
        s = i.useCallback((e) => null == a.find((t) => t.id === e.id), [a]),
        o = (0, _.bG)([N.A], () =>
            N.A.getFetchState({
                surface: er,
                activeState: r,
            }),
        ),
        l = (0, _.bG)([N.A], () =>
            N.A.getCollections({
                surface: er,
                activeState: r,
            }),
        ),
        c = n === x.s4.VOICE;
    return {
        fetchState: o,
        recommendationsSections: i.useMemo(() => (c ? (0, k.hX)(l) : l), [l, c]),
        isInstallOnDemand: s,
    };
}
function em(e) {
    var t;
    let { context: n, recommendationsSections: r } = e;
    (0, y.D)();
    let a = (0, b.A)({ guildId: "channel" === n.type ? (null == (t = n.channel) ? void 0 : t.getGuildId()) : void 0 });
    return i.useMemo(() => {
        if (!r.some((e) => (0, p.Lt)(e.flags, l.s.APPENDS_REMAINING_ACTIVITIES))) return Z;
        let e = new Set();
        return (
            r.forEach((t) => {
                t.application_directory_collection_items.forEach((t) => {
                    t.type === d.L.APPLICATION && e.add(t.application.id);
                });
            }),
            a.filter((t) => !e.has(t.application.id))
        );
    }, [r, a]);
}
function eg(e) {
    let { title: t, look: n, items: r, limit: a, sectionName: s, sectionOverallPosition: o } = e,
        { pushHistory: l } = (0, U.uM)();
    return i.useMemo(
        () =>
            r.length <= a
                ? {
                      items: r,
                      handleViewMore: void 0,
                  }
                : {
                      items: r.slice(0, a),
                      handleViewMore: () => {
                          (0, A.zV)(K.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: s,
                              source: D.A.entrypoint(),
                              num: r.length,
                          }),
                              l({
                                  type: U.Wy.LIST,
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
