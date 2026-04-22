n.d(t, { A: () => en }), n(321073), n(938796);
var l = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    r = n(724002),
    o = n(186510),
    c = n(56797),
    d = n(287174),
    u = n(487899),
    m = n(239314),
    p = n(665260),
    _ = n(311907),
    A = n(573613),
    h = n(834730),
    f = n(892547),
    x = n(155718),
    C = n(10716),
    N = n(795816),
    g = n(887700),
    E = n(26262),
    v = n(711765),
    b = n(58149),
    I = n(842209),
    y = n(392054),
    j = n(429913),
    P = n(954466),
    T = n(354138),
    L = n(111042),
    S = n(767599),
    R = n(111162),
    O = n(403362),
    k = n(989837),
    M = n(500049),
    w = n(869186),
    D = n(676765),
    U = n(933840),
    H = n(735991),
    V = n(485878),
    W = n(169909),
    B = n(155940),
    F = n(902527),
    G = n(444230),
    z = n(783608),
    $ = n(984516),
    K = n(995346);
n(60809);
var Y = n(652215),
    q = n(73510),
    X = n(985018),
    Z = n(62784);
let Q = [],
    J = [, , , ,].fill(0).map((e, t) => t),
    ee = [
        { cards: [, , , ,].fill(0).map((e, t) => t), look: W.r0.MEDIUM_BANNER },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: W.r0.ROW },
        { cards: [, , , ,].fill(0).map((e, t) => t), look: W.r0.ROW },
    ],
    et = d.K.APP_LAUNCHER_IN_TEXT;
function en(e) {
    let { context: t, entrypoint: n, searchQuery: a, setSearchQuery: s, setScroller: r, isScrollCloseToBottom: o } = e,
        c = (0, _.bG)([C.A], () => C.A.getIsEnabled(), []),
        d = n === M.s4.TEXT && "channel" === t.type && null != t.channel && !t.channel.isPrivate(),
        u = (0, H.sw)(n),
        m = !(0, H.sw)(n),
        p = n === M.s4.TEXT,
        [h, f] = ed(!0),
        [x, g] = ed(d),
        [E, v] = ed(u),
        [b, I] = ed(m),
        y = h && x && E && b,
        j = (u || d) && !y,
        P = m && c;
    i.useEffect(() => {
        let e = "channel" === t.type ? t.channel?.guild_id : void 0;
        (0, N.LV)({ guildId: e, force: !0 });
    }, [t]),
        i.useEffect(() => {
            n === M.s4.VOICE && N.LK();
        }, [n]);
    let T = a.length > 0;
    return (0, l.jsxs)("div", {
        className: Z.kL,
        children: [
            P ? (0, l.jsx)(el, {}) : null,
            (0, l.jsx)(ei, {
                searchQuery: a,
                setSearchQuery: s,
                placeholder: p ? X.intl.string(X.t.ziyFv2) : X.intl.string(X.t["pw+r5b"]),
            }),
            (0, l.jsx)(A.Ip, {
                ref: r,
                className: Z.Ph,
                fade: !0,
                children: T
                    ? (0, l.jsx)(K.A, { context: t, query: a, entrypoint: n, isScrollCloseToBottom: o })
                    : (0, l.jsxs)("div", {
                          children: [
                              (0, l.jsx)(ea, { context: t, entrypoint: n, onEmptyState: f }),
                              d && "channel" === t.type && (0, l.jsx)(er, { context: t, onEmptyState: g }),
                              u && (0, l.jsx)(eo, { context: t, entrypoint: n, onEmptyState: v }),
                              m && (0, l.jsx)(es, { context: t, onEmptyState: I }),
                              y &&
                                  (0, l.jsx)(G.U, {
                                      type: M.wg.HOME_EMPTY,
                                      textContent:
                                          n === M.s4.TEXT ? X.intl.string(X.t.iKZctW) : X.intl.string(X.t.RL7Ncg),
                                  }),
                              j && (0, l.jsx)($.A, {}),
                          ],
                      }),
            }),
        ],
    });
}
function el() {
    return (0, l.jsxs)("div", {
        className: Z.G,
        children: [
            (0, l.jsx)(h.E, { className: Z.TR, variant: "text-sm/normal", children: X.intl.string(X.t.tZ3FNs) }),
            (0, l.jsx)(v.F, { hideSearch: !0 }),
        ],
    });
}
function ei(e) {
    let { searchQuery: t, setSearchQuery: n, placeholder: a } = e,
        r = i.useRef(null),
        [o, c] = i.useState(!1),
        d = i.useMemo(
            () =>
                s().debounce(
                    (e) => {
                        (0, b.zV)(Y.HAw.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
                            query: e,
                            source: k.A.entrypoint(),
                            location: y.Oh.APP_LAUNCHER_HOME,
                        });
                    },
                    400,
                    { leading: !1, trailing: !0 },
                ),
            [],
        ),
        u = i.useCallback(() => n(""), [n]),
        m = i.useCallback(() => {
            c(!0),
                (0, b.zV)(Y.HAw.APP_LAUNCHER_SEARCH_FOCUSED, {
                    source: k.A.entrypoint(),
                    location: y.Oh.APP_LAUNCHER_HOME,
                });
        }, []),
        p = i.useCallback(() => {
            c(!1);
        }, []),
        _ = i.useCallback(
            (e) => {
                o || m(), n(e), d(e);
            },
            [o, n, m, d],
        );
    return (
        i.useEffect(() => {
            let e = r.current;
            if (null == e) return;
            let t = () => {
                o || m();
            };
            return (
                e.addEventListener("click", t),
                () => {
                    e.removeEventListener("click", t);
                }
            );
        }, [o, m]),
        (0, l.jsx)("div", {
            className: Z.PP,
            children: (0, l.jsx)(f.I, {
                ref: r,
                placeholder: a,
                query: t,
                onChange: _,
                onClear: u,
                onFocus: p,
                autoFocus: !0,
            }),
        })
    );
}
function ea(e) {
    let { context: t, entrypoint: n, onEmptyState: a } = e,
        s = n === M.s4.VOICE,
        { frecentApps: r, loading: o } = (0, w.k)({
            context: t,
            onlyActivityApps: s,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !0,
        }),
        c = i.useMemo(() => {
            let e = [];
            for (let t of r) null != t.application && e.push({ application: t.application });
            return e;
        }, [r]),
        d = X.intl.string(X.t["s+UQpc"]),
        u = d;
    s && (u = X.intl.string(X.t["2pFD8L"]));
    let { items: m, handleViewMore: p } = eu({
        title: u,
        look: n === M.s4.VOICE ? W.r0.LARGE_BANNER : W.r0.ROW,
        items: c,
        limit: 8,
        sectionName: M.yK.RECENT_APPS,
    });
    i.useEffect(() => {
        o ||
            (0 !== m.length &&
                (0, b.zV)(Y.HAw.APP_LAUNCHER_FRECENTS_SEEN, {
                    num: m.length,
                    section_name: M.yK.RECENT_APPS,
                    location: M.W8.HOME,
                    source: n,
                }));
    }, [m.length, n, o]);
    let _ = !o && 0 === m.length;
    return (i.useEffect(() => {
        a(_);
    }, [_, a]),
    !(function (e) {
        let { apps: t, onlyActivityApps: n } = e,
            l = i.useMemo(
                () =>
                    n
                        ? t.map((e) => {
                              let { application: t } = e;
                              return t.id;
                          })
                        : [],
                [t, n],
            );
        (0, j.A)(l);
    })({ apps: m, onlyActivityApps: s }),
    o || _)
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)(z.A, { title: d, buttonType: z.A.buttonTypes.VIEW_MORE, onClickViewButton: p }),
                  (0, l.jsx)("div", {
                      className: Z._,
                      children: (0, l.jsx)("div", {
                          className: Z.Ye,
                          children: m.map((e, n) => {
                              let { application: i } = e;
                              return s
                                  ? (0, l.jsx)(
                                        W.wW,
                                        {
                                            context: t,
                                            application: i,
                                            look: W.r0.ICON,
                                            location: M.W8.HOME,
                                            sectionName: M.yK.RECENT_APPS,
                                            resultsPosition: n,
                                            isOneClickCTA: !0,
                                            fetchesApplication: !1,
                                        },
                                        i.id,
                                    )
                                  : (0, l.jsx)(
                                        W.Gt,
                                        {
                                            context: t,
                                            application: i,
                                            look: W.r0.ICON,
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
function es(e) {
    let { context: t, onEmptyState: n } = e;
    (0, E.D)();
    let a = (0, g.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 }),
        s = W.r0.LARGE_BANNER,
        { trackSectionImpressionRef: r } = (0, F.A)({
            sectionName: M.yK.ACTIVITIES,
            numItems: a.length,
            numVisibleItems: a.length,
        }),
        o = (0, U.f)(),
        c = 0 === a.length;
    return (i.useEffect(() => {
        n(c);
    }, [n, c]),
    c)
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)("div", {
                      ref: (e) => {
                          r.current = e;
                      },
                      children: (0, l.jsx)(z.A, { title: X.intl.string(X.t.shUONg) }),
                  }),
                  (0, l.jsx)("div", {
                      className: Z.a2,
                      children: a.map((e, n) => {
                          let { application: i } = e;
                          return (0, l.jsx)(
                              W.wW,
                              {
                                  context: t,
                                  application: i,
                                  look: s,
                                  location: y.Oh.APP_LAUNCHER_HOME,
                                  sectionName: M.yK.ACTIVITIES,
                                  resultsPosition: n,
                                  sectionOverallPosition: 0,
                                  isOneClickCTA: !o,
                                  fetchesApplication: !1,
                              },
                              i.id,
                          );
                      }),
                  }),
              ],
          });
}
function er(e) {
    let { context: t, onEmptyState: n } = e,
        a = M.yK.APPS_IN_THIS_SERVER,
        { appsInThisServer: s, isLoading: r } = (0, D.A)({ context: t }),
        { items: o, handleViewMore: c } = eu({
            title: X.intl.string(X.t.KfkuGc),
            look: W.r0.ROW,
            items: s,
            limit: 4,
            sectionName: a,
        }),
        { trackSectionImpressionRef: d } = (0, F.A)({ sectionName: a, numItems: s.length, numVisibleItems: o.length }),
        u = !r && 0 === o.length;
    return (i.useEffect(() => {
        n(u);
    }, [u, n]),
    u)
        ? null
        : (0, l.jsxs)("div", {
              children: [
                  (0, l.jsx)("div", {
                      ref: (e) => {
                          d.current = e;
                      },
                      children: (0, l.jsx)(z.A, {
                          title: X.intl.string(X.t.KfkuGc),
                          buttonType: z.A.buttonTypes.VIEW_MORE,
                          onClickViewButton: c,
                      }),
                  }),
                  (0, l.jsx)("div", {
                      className: Z.l2,
                      children: r
                          ? J.map((e) => (0, l.jsx)(B.A, { look: W.r0.ROW }, e))
                          : o.map((e, n) => {
                                let { application: i } = e;
                                return null != i
                                    ? (0, l.jsx)(
                                          W.Gt,
                                          {
                                              context: t,
                                              application: i,
                                              look: W.r0.ROW,
                                              sectionName: a,
                                              resultsPosition: n,
                                              location: y.Oh.APP_LAUNCHER_HOME,
                                          },
                                          i.id,
                                      )
                                    : null;
                            }),
                  }),
              ],
          });
}
function eo(e) {
    let { context: t, entrypoint: n, onEmptyState: a } = e,
        {
            fetchState: s,
            recommendationsSections: c,
            isInstallOnDemand: d,
        } = (function (e) {
            let t,
                n,
                { context: l, entrypoint: a } = e,
                s =
                    ((t = (0, _.bG)([R.default], () => R.default.onlyShowPreviewAppCollections)),
                    (n = P.A.getConfig({ location: "App Launcher Home (Web)" }).enabled),
                    t ? r.W.PREVIEW : n ? r.W.NON_STAFF_PREVIEW : r.W.ACTIVE);
            i.useEffect(() => {
                (0, T.An)({ surface: et, activeState: s });
            }, [s]);
            let { sectionDescriptors: o } = I.cu({
                    context: l,
                    filters: { commandTypes: [x.kc.CHAT] },
                    options: { placeholderCount: 0, limit: q.Hi, includeFrecency: !0 },
                    allowFetch: !0,
                }),
                c = i.useCallback((e) => null == o.find((t) => t.id === e.id), [o]),
                d = (0, _.bG)([L.A], () => L.A.getFetchState({ surface: et, activeState: s })),
                u = (0, _.bG)([L.A], () => L.A.getCollections({ surface: et, activeState: s })),
                m = a === M.s4.VOICE;
            return {
                fetchState: d,
                recommendationsSections: i.useMemo(() => (m ? (0, H.hX)(u) : u), [u, m]),
                isInstallOnDemand: c,
            };
        })({ context: t, entrypoint: n }),
        m = (function (e) {
            let { context: t, recommendationsSections: n } = e;
            (0, E.D)();
            let l = (0, g.A)({ guildId: "channel" === t.type ? t.channel?.getGuildId() : void 0 });
            return i.useMemo(() => {
                if (!n.some((e) => (0, p.Lt)(e.flags, o.s.APPENDS_REMAINING_ACTIVITIES))) return Q;
                let e = new Set();
                return (
                    n.forEach((t) => {
                        t.application_directory_collection_items.forEach((t) => {
                            t.type === u.L.APPLICATION && e.add(t.application.id);
                        });
                    }),
                    l.filter((t) => !e.has(t.application.id))
                );
            }, [n, l]);
        })({ context: t, recommendationsSections: c }),
        A = s === L.e.FETCHING,
        h = !A && 0 === c.length;
    return (i.useEffect(() => {
        a(h);
    }, [h, a]),
    h)
        ? null
        : A
          ? ee.map((e, t) => {
                let { cards: n, look: i } = e;
                return (0, l.jsxs)(
                    "div",
                    {
                        children: [
                            (0, l.jsx)(z.A.Loading, {}),
                            (0, l.jsx)("div", {
                                className: i === W.r0.ROW ? Z.l2 : Z.a2,
                                children: n.map((e) => (0, l.jsx)(B.A, { look: i }, e)),
                            }),
                        ],
                    },
                    t,
                );
            })
          : c.map((e, n) =>
                (0, l.jsx)(
                    ec,
                    {
                        recommendationsSection: e,
                        remainingActivities: m,
                        isInstallOnDemand: d,
                        position: n,
                        context: t,
                    },
                    e.id,
                ),
            );
}
function ec(e) {
    let t,
        n,
        { recommendationsSection: a, remainingActivities: s, isInstallOnDemand: r, position: d, context: _ } = e,
        A = a.title;
    switch (a.type) {
        case m.Y.BANNER_CARDS:
            t = W.r0.LARGE_BANNER;
            break;
        case m.Y.SMALL_BANNER_CARDS:
            t = W.r0.MEDIUM_BANNER;
            break;
        default:
            t = W.r0.ROW;
    }
    let h = i.useMemo(() => {
            let e = a.application_directory_collection_items
                .map((e) => {
                    if (e.type === u.L.APPLICATION)
                        return {
                            collectionItemId: e.id,
                            collectionItemImageHash: e.image_hash,
                            showsPromoted: (0, p.Lt)(e.flags, c.$.PROMOTED),
                            application: e.application,
                            installOnDemand: r(e.application),
                        };
                })
                .filter(O.Vq);
            return (
                (0, p.Lt)(a.flags, o.s.APPENDS_REMAINING_ACTIVITIES) &&
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
        }, [r, a.application_directory_collection_items, a.flags, s]),
        f = a.title;
    switch (a.type) {
        case m.Y.BANNER_CARDS:
        case m.Y.SMALL_BANNER_CARDS:
            n = 6;
            break;
        case m.Y.EXPANDABLE_LIST:
        default:
            n = 4;
    }
    let { items: x, handleViewMore: C } = eu({
            title: A,
            look: t,
            items: h,
            limit: n,
            sectionName: f,
            sectionOverallPosition: d,
        }),
        { trackSectionImpressionRef: N } = (0, F.A)({ sectionName: f, numItems: h.length, numVisibleItems: x.length }),
        g = a.type !== m.Y.SMALL_BANNER_CARDS;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)("div", {
                ref: (e) => {
                    N.current = e;
                },
                children: (0, l.jsx)(z.A, {
                    title: a.title,
                    buttonType: z.A.buttonTypes.VIEW_MORE,
                    onClickViewButton: C,
                }),
            }),
            (0, l.jsx)("div", {
                className: t === W.r0.ROW ? Z.l2 : Z.a2,
                children: x.map((e, n) => {
                    let i,
                        {
                            collectionItemId: a,
                            collectionItemImageHash: s,
                            application: r,
                            installOnDemand: o,
                            showsPromoted: c,
                        } = e;
                    return (
                        null != a && null != s && (i = (0, S.DH)({ itemId: a, hash: s, containerWidth: 500 })),
                        (0, l.jsx)(
                            W.Gt,
                            {
                                context: _,
                                application: r,
                                look: t,
                                sectionName: f,
                                resultsPosition: n,
                                location: y.Oh.APP_LAUNCHER_HOME,
                                installOnDemand: o,
                                enableVideoBanner: g,
                                sectionOverallPosition: d,
                                overrideImageUrl: i,
                                showsPromoted: c,
                            },
                            `${n}-${r.id}`,
                        )
                    );
                }),
            }),
        ],
    });
}
function ed(e) {
    let [t, n] = i.useState(!e);
    return [
        t,
        i.useCallback(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n(e);
        }, []),
    ];
}
function eu(e) {
    let { title: t, look: n, items: l, limit: a, sectionName: s, sectionOverallPosition: r } = e,
        { pushHistory: o } = (0, V.uM)();
    return i.useMemo(
        () =>
            l.length <= a
                ? { items: l, handleViewMore: void 0 }
                : {
                      items: l.slice(0, a),
                      handleViewMore: () => {
                          (0, b.zV)(Y.HAw.APP_LAUNCHER_SECTION_VIEW_MORE, {
                              section_name: s,
                              source: k.A.entrypoint(),
                              num: l.length,
                          }),
                              o({
                                  type: V.Wy.LIST,
                                  title: t,
                                  look: n,
                                  items: l,
                                  sectionName: s,
                                  sectionOverallPosition: r,
                              });
                      },
                  },
        [l, a, s, o, t, n, r],
    );
}
