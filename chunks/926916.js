(s.r(t), s.d(t, { default: () => tc }));
var n = s(477900),
    r = s(582128),
    l = s(503698),
    i = s.n(l),
    a = s(855986),
    o = s(554146),
    c = s(516521),
    u = s(683071),
    d = s(263775),
    h = s(160963),
    m = s(133986),
    g = s(894880),
    x = s(534514),
    p = s(834730),
    f = s(866665),
    j = s(408278),
    A = s(900797),
    k = s(847374),
    S = s(617713),
    E = s(809291),
    I = s(435558),
    b = s.n(I),
    M = s(118751),
    y = s(342952),
    C = s(778712),
    v = s(570597),
    R = s(792996),
    L = s(993195);
function F(e) {
    let { citations: t, guildId: s } = e,
        l = r.useMemo(
            () =>
                (0, I.uniqBy)(
                    t.map((e) => e.message.author),
                    (e) => e.id,
                ),
            [t],
        );
    return 0 === l.length
        ? null
        : (0, n.jsxs)("div", {
              role: "img",
              "aria-label": (0, v.X)(l.map((e) => e.username)),
              className: L.tF,
              children: [
                  (0, n.jsx)(y.I, {
                      className: L.UX,
                      users: l,
                      maxUsers: 3,
                      size: C._3.SIZE_20,
                      guildId: s,
                      hideOverflowCount: !0,
                      "aria-hidden": !0,
                  }),
                  l.length > 3 &&
                      (0, n.jsxs)(p.E, {
                          variant: "body-md/semibold",
                          color: "text-default",
                          className: L.qs,
                          "aria-hidden": !0,
                          children: ["+", (0, M.tg)(l.length - 3, R.intl.currentLocale)],
                      }),
              ],
          });
}
var N = s(53788),
    T = s(148795),
    _ = s(221355),
    w = s(743175),
    D = s(869720);
function H(e) {
    let { smartSearchQuery: t } = e,
        s = (0, a.bG)([w.A], () => w.A.getResultFeedback(t.guildId, t.requestKey), [t.guildId, t.requestKey]),
        [l] = r.useState(null !== s),
        i = r.useRef(null);
    if (l) return null;
    function o(e) {
        (i.current?.focus(),
            (0, _.X)({ smartSearchQuery: t, hasPositiveFeedback: e, SearchSessionAnalyticsManager: S.A }));
    }
    let c = R.intl.string(D.default["x/H32X"]),
        u = R.intl.string(D.default.FoToeH);
    return (0, n.jsxs)("div", {
        className: L.mp,
        ref: i,
        tabIndex: -1,
        children: [
            (0, n.jsx)("div", {
                role: "status",
                children: (0, n.jsx)(p.E, {
                    variant: "body-sm/medium",
                    color: "text-muted",
                    children: R.intl.string(null === s ? D.default.uij9Dy : R.t.kZbFIO),
                }),
            }),
            null === s &&
                (0, n.jsxs)("div", {
                    className: L.BX,
                    children: [
                        (0, n.jsx)(f.m, {
                            text: c,
                            children: (0, n.jsx)(j.K, {
                                icon: N.ThumbsUpIcon,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": c,
                                onClick: () => o(!0),
                            }),
                        }),
                        (0, n.jsx)(f.m, {
                            text: u,
                            children: (0, n.jsx)(j.K, {
                                icon: T.ThumbsDownIcon,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": u,
                                onClick: () => o(!1),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
var W = s(844222),
    z = s(140735),
    O = s(336288),
    q = s(286251),
    B = s(114212);
function Q(e) {
    let { isCollapsed: t } = e,
        { reducedMotion: s } = r.useContext(W.C),
        l = r.useMemo(
            () =>
                [
                    D.default.ffCCEe,
                    ...b().shuffle([
                        D.default.Sb2fo2,
                        D.default.rXNe0Z,
                        D.default["22g6Ju"],
                        D.default.IogGZY,
                        D.default.UEnMJF,
                        D.default.kk7BVL,
                        D.default.UVa49v,
                    ]),
                ].map((e) => R.intl.string(e)),
            [],
        ),
        a = s.enabled ? 4800 : 2400;
    return (0, n.jsxs)("div", {
        role: "status",
        className: i()(L.qV, { [L.yZ]: t }),
        children: [
            (0, n.jsx)(z.A, { children: R.intl.string(D.default.ffCCEe) }),
            (0, n.jsxs)("div", {
                className: L.uH,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(O.i, { size: 12 }),
                    (0, n.jsx)(q.o, {
                        text: l,
                        variant: "body-sm/semibold",
                        color: "text-subtle",
                        delay: a - (s.enabled ? 450 : 1e3),
                        initialDelay: s.enabled ? 550 : 300,
                        duration: 1e3,
                        className: L.h5,
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: L.Ft,
                "aria-hidden": !0,
                children: Array.from({ length: t ? 3 : 6 }, (e, t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: L._f,
                            children: [
                                (0, n.jsx)(B.F, { width: 32, height: 32, className: L.qf }),
                                (0, n.jsxs)("div", {
                                    className: L.lm,
                                    children: [
                                        (0, n.jsx)(B.F, { width: 128, height: 12, className: L.qf }),
                                        (0, n.jsx)(B.F, { width: 192, height: 16, className: L.qf }),
                                    ],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
var P = s(531685);
s(163839);
let V = Array.from({ length: 101 }, (e, t) => t / 100);
function G(e) {
    return (
        e.intersectionRect.height >= e.boundingClientRect.height - 1 ||
        (null != e.rootBounds && e.rootBounds.height > 0 && e.intersectionRect.height / e.rootBounds.height >= 0.33)
    );
}
let U = r.memo(function (e) {
    let {
            scrollerRoot: t,
            isVisible: s = !0,
            searchSubmissionId: l,
            query: o,
            result: c,
            isKeywordLoading: u,
            isKeywordSearchSettled: d,
            hasKeywordResults: m,
            renderCitations: g,
        } = e,
        [I, b] = r.useState(null),
        M = !d || m,
        y = !M || I === l,
        C = r.useId(),
        v = r.useId(),
        N = r.useRef(null),
        T = (function (e) {
            let { query: t, result: s, hasKeywordResults: n, isShown: l, scrollerRoot: i } = e,
                o = (0, a.bG)([P.A], () => P.A.isFocused() && P.A.isVisible()),
                [c, u] = r.useState(null),
                d = r.useRef(null),
                m = r.useCallback(
                    (e) => {
                        e.target === c && ((d.current = { entry: e, root: i }), E.A.setIsRowViewable(G(e), S.A));
                    },
                    [i, c],
                );
            return (
                r.useEffect(() => {
                    if (!l || null == c || null == i) return;
                    let e = !0,
                        t = new IntersectionObserver(
                            (t) => {
                                e && t.forEach(m);
                            },
                            { root: i, threshold: V },
                        );
                    return (
                        t.observe(c),
                        () => {
                            ((e = !1), t.disconnect());
                        }
                    );
                }, [l, c, i, m]),
                r.useEffect(() => {
                    l && E.A.setIsAppActive(o, S.A);
                }, [o, l]),
                r.useEffect(() => {
                    if (!l) return;
                    let e = d.current;
                    E.A.setIsRowViewable(null != e && e.root === i && e.entry.target === c && G(e.entry), S.A);
                }, [l, c, i]),
                r.useEffect(() => {
                    if (l)
                        return (
                            E.A.setIsNavigationFocused(l, S.A),
                            E.A.setIsTabActive(l, S.A),
                            () => {
                                (E.A.setIsRowViewable(!1, S.A),
                                    E.A.setIsNavigationFocused(!1, S.A),
                                    E.A.setIsTabActive(!1, S.A),
                                    E.A.setAnswer(null, S.A));
                            }
                        );
                }, [l]),
                r.useEffect(() => {
                    l &&
                        E.A.setAnswer(
                            s.status === h.o.LOADED
                                ? {
                                      smartSearchQuery: t,
                                      answerText: s.answerText,
                                      presentedCitations: s.citations,
                                      hasKeywordResults: n,
                                  }
                                : null,
                            S.A,
                        );
                }, [l, t, s.status, s.answerText, s.citations, n]),
                u
            );
        })({ query: o, result: c, hasKeywordResults: m, isShown: s && !u, scrollerRoot: t });
    return (r.useLayoutEffect(() => {
        y || N.current !== document.activeElement || N.current?.scrollIntoView({ block: "nearest" });
    }, [y]),
    !s || u)
        ? null
        : (0, n.jsx)("section", {
              ref: T,
              className: L.om,
              "aria-label": R.intl.string(D.default.ydAwWi),
              children: (0, n.jsxs)("div", {
                  className: i()(L.Gt, { [L.Td]: y && M && c.status === h.o.LOADED }),
                  children: [
                      c.status === h.o.LOADING
                          ? (0, n.jsx)(Q, { isCollapsed: !y })
                          : (0, n.jsxs)("div", {
                                id: v,
                                className: i()(L.VH, { [L.yZ]: !y }),
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: L.wx,
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: L.qd,
                                                children: [
                                                    (0, n.jsx)(x.D, {
                                                        id: C,
                                                        variant: "heading-sm/semibold",
                                                        color: "text-subtle",
                                                        lineClamp: 1,
                                                        children: R.intl.string(D.default.ydAwWi),
                                                    }),
                                                    (0, n.jsx)(p.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-subtle",
                                                        lineClamp: 1,
                                                        children: R.intl.string(D.default.QIdSmb),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsx)(F, { citations: c.citations, guildId: o.guildId }),
                                        ],
                                    }),
                                    (0, n.jsx)(p.E, {
                                        variant: "body-md/normal",
                                        color: "text-default",
                                        className: L.z,
                                        children: c.answerText,
                                    }),
                                    (0, n.jsx)("div", { inert: !y, children: g?.(o, c) }),
                                    (0, n.jsx)("div", { hidden: !y, children: (0, n.jsx)(H, { smartSearchQuery: o }) }),
                                ],
                            }),
                      !y && (0, n.jsx)("div", { className: L.aE, "aria-hidden": !0 }),
                      M &&
                          c.status === h.o.LOADED &&
                          (0, n.jsx)("div", {
                              className: L.fT,
                              children: (0, n.jsx)("div", {
                                  className: L.os,
                                  children: (0, n.jsx)(f.m, {
                                      text: R.intl.string(y ? D.default.FKLBbW : D.default.NuTbB9),
                                      children: (0, n.jsx)(j.K, {
                                          buttonRef: N,
                                          icon: y ? A.ChevronSmallUpIcon : k.ChevronSmallDownIcon,
                                          variant: "secondary",
                                          size: "sm",
                                          "aria-label": R.intl.string(y ? D.default.FKLBbW : D.default.NuTbB9),
                                          onClick: () => {
                                              (b(y ? null : l),
                                                  E.A.trackSmartSearchAnswerToggled(
                                                      { smartSearchQuery: o, isCollapsed: y },
                                                      S.A,
                                                  ));
                                          },
                                          "aria-expanded": y,
                                          "aria-controls": v,
                                      }),
                                  }),
                              }),
                          }),
                  ],
              }),
          });
});
s(321073);
var Z = s(347347),
    K = s(697530),
    Y = s(775602),
    X = s(58241),
    $ = s(856896),
    J = s(457699),
    ee = s(146849),
    et = s(954403),
    es = s(81437),
    en = s(378570),
    er = s(222),
    el = s(354777),
    ei = s(383233),
    ea = s(994500),
    eo = s(517381),
    ec = s(822382),
    eu = s(65600);
function ed(e, t, s, n) {
    let r = (0, K.wG)(t),
        l = [];
    return (
        e.forEach((e) => {
            let t = new ei.Ay(e);
            ((t = (function (e, t) {
                let [s] = t,
                    n = s.getMessage(e.id, e.channel_id);
                return (null != n && (e = e.merge({ attachments: n.attachments, embeds: n.embeds })), e);
            })(t, n)),
                s ||
                    (t = t.set(
                        "customRenderedContent",
                        (0, el.Ay)(t, { postProcessor: r, allowHeading: !0, allowList: !0, allowGameMentions: !0 }),
                    )),
                l.push(t));
        }),
        l
    );
}
let eh = [];
var em = s(253932),
    eg = s(734057),
    ex = s(576705),
    ep = s(583231),
    ef = s(652215);
function ej(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [eg.A, ex.A, ea.A],
        [s, n, r] = t,
        l = s.getChannel(e.channelId);
    return (
        null != l &&
        n.can(ef.xBc.VIEW_CHANNEL, l) &&
        n.can(ef.xBc.READ_MESSAGE_HISTORY, l) &&
        !r.isBlockedForMessage(e.message) &&
        !r.isIgnoredForMessage(e.message)
    );
}
function eA(e) {
    let { query: t, result: s } = e,
        l = (0, ee.I2)({ location: "useRenderedSearchResults" }).enabled,
        i = em.rs.useSetting(),
        o = r.useId(),
        c = r.useRef([]),
        u = (0, a.bG)(
            [J.A],
            () =>
                ed(
                    s.citations.map((e) => e.message),
                    t.queryText,
                    l,
                    [J.A],
                ),
            [s.citations, t.queryText, l],
            a.My,
        ),
        d = r.useCallback(
            (e, n) => {
                let r = s.citations[n];
                null != r &&
                    (E.A.trackSmartSearchCitationOpened(
                        { smartSearchQuery: t, citation: r, index: n, numCitationsPresented: s.citations.length },
                        S.A,
                    ),
                    (async function (e) {
                        if (!ej(e)) return;
                        let t = async () => {
                            if ("conversation" === e.sourceType)
                                try {
                                    let t = await (0, X.Al)({
                                        channelId: e.channelId,
                                        conversationId: (0, ep.E2)(e.sourceId),
                                        messageId: e.messageId,
                                    });
                                    if (!ej(e)) return;
                                    if (t) {
                                        ((0, en.iN)(e.channelId), (0, $.Rl)());
                                        return;
                                    }
                                } catch {}
                            ej(e) && (0, en.ci)(e.channelId, e.messageId);
                        };
                        (0, es.A)(e.message, () => {
                            t();
                        }) && (await t());
                    })(r));
            },
            [t, s.citations],
        ),
        h = (0, Z.Ay)({
            navId: o,
            itemCount: u.length,
            focusedIndex: 0,
            focusOnMount: !1,
            setFocus: (e) => {
                Y.Ay.keyboardModeEnabled && document.getElementById(e)?.focus();
            },
            onSelect: (e) => c.current[e]?.jumpTo(),
        }),
        m = r.useMemo(() => {
            let e = [];
            return (
                u.forEach((t, s) => {
                    let n = eg.A.getChannel(t.channel_id);
                    if (null == n) return;
                    let r = e[e.length - 1];
                    ((null == r || r.channel.id !== n.id) &&
                        ((r = { channel: n, messages: [], startIndex: s }), e.push(r)),
                        r.messages.push(t));
                }),
                e
            );
        }, [u]),
        g = r.useMemo(() => (0, K.wG)(t.queryText), [t.queryText]),
        x = r.useMemo(() => (0, K.th)(t.queryText), [t.queryText]),
        p = r.useCallback(() => {}, []);
    return (0, n.jsx)("div", {
        ...h.getContainerProps(),
        className: L.zH,
        children: (0, n.jsx)(et.G.Provider, {
            value: x,
            children: m.map((e) =>
                (0, n.jsx)(
                    er.l,
                    {
                        ...e,
                        highlighter: g,
                        resultRefs: c,
                        totalResults: u.length,
                        scrollTo: p,
                        renderEmbeds: i,
                        offset: 0,
                        jumpToMessage: d,
                        listNavigator: h,
                        resultIdPrefix: o,
                    },
                    `${e.channel.id}-${e.startIndex}`,
                ),
            ),
        }),
    });
}
var ek = s(765178),
    eS = s(939249),
    eE = s(7689),
    eI = s(753806),
    eb = s(768570);
function eM(e) {
    let { query: t, suggestions: s, suggestionSource: l, isEmptyScreen: i = !1, hasError: a = !1 } = e;
    return (
        r.useEffect(() => {
            0 !== s.length &&
                E.A.trackSuggestedSearchesShownDeduped(
                    { smartSearchQuery: t, suggestedSearches: s, suggestionSource: l },
                    S.A,
                );
        }, [t, s, l]),
        r.useEffect(() => {
            i && ek.O.announce(R.intl.string(a ? R.t.uvDZBZ : R.t.V6nAfF), "polite");
        }, [i, a]),
        (0, n.jsxs)("div", {
            className: L.Gn,
            children: [
                (0, n.jsx)(x.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    children: R.intl.string(D.default.bzswFC),
                }),
                (0, n.jsx)("div", {
                    className: L.aG,
                    children: s.map((e, r) =>
                        (0, n.jsxs)(
                            eS.D,
                            {
                                className: L.bC,
                                onClick: () => {
                                    let n;
                                    return (
                                        E.A.trackSuggestedSearchStarted(
                                            {
                                                smartSearchQuery: t,
                                                suggestedSearch: e,
                                                suggestionSource: l,
                                                index: r,
                                                numSuggestedSearches: s.length,
                                            },
                                            S.A,
                                        ),
                                        (n = (0, ec._o)(t.searchQueryString)
                                            .filter((e) => e.type === ef.LWr.FILTER_IN || e.type === ef.LWr.ANSWER_IN)
                                            .map((e) => t.searchQueryString.slice(e.start, e.end))
                                            .join(" ")),
                                        void (eI.A.dispatchSetSearchQuery({
                                            query: [n, e.suggestedSearchText].filter(Boolean).join(" "),
                                            replace: !0,
                                            performSearch: !0,
                                            searchQuerySource: eb.Q_.SEARCH_RESULTS_HINT,
                                        }),
                                        (0, m.A)(t, S.A, 3))
                                    );
                                },
                                children: [
                                    (0, n.jsx)(eE.MagnifyingGlassIcon, {
                                        size: "sm",
                                        color: "currentColor",
                                        className: L.Av,
                                    }),
                                    (0, n.jsx)(p.E, {
                                        variant: "body-md/medium",
                                        color: "text-muted",
                                        lineClamp: 1,
                                        className: L.vV,
                                        children: e.suggestedSearchText,
                                    }),
                                ],
                            },
                            e.suggestionId,
                        ),
                    ),
                }),
                i &&
                    (0, n.jsx)("div", {
                        className: L.p3,
                        children: a
                            ? (0, n.jsx)(p.E, {
                                  variant: "body-sm/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.uvDZBZ),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(x.D, {
                                          variant: "heading-sm/semibold",
                                          color: "text-muted",
                                          children: R.intl.string(D.default["HX/WYf"]),
                                      }),
                                      (0, n.jsx)(p.E, {
                                          variant: "body-sm/semibold",
                                          color: "text-muted",
                                          children: R.intl.string(D.default["0ySxbu"]),
                                      }),
                                  ],
                              }),
                    }),
            ],
        })
    );
}
var ey = s(705912),
    eC = s(624018),
    ev = s(188567),
    eR = s(224467),
    eL = s(616252),
    eF = s(775427),
    eN = s(477654),
    eT = s(145331),
    e_ = s(43105),
    ew = s(821609),
    eD = s(783977),
    eH = s(289873),
    eW = s(28863),
    ez = s(265872),
    eO = s(165862),
    eq = s(477782),
    eB = s(625903),
    eQ = s(112173),
    eP = s(93055),
    eV = s(975571),
    eG = s(121806),
    eU = s(49999),
    eZ = s(898029);
function eK(e) {
    let t,
        {
            searchContext: s,
            searchMode: l,
            onSearchModeChange: c,
            totalResults: u,
            isIndexing: h,
            isSearching: m,
            documentsIndexed: g,
            selectedChannelId: x,
        } = e,
        p =
            ((t = (0, a.bG)([eu.A], () => {
                let e = (0, ec.bS)(s);
                return eu.A.getSearchResultsQueryString(e);
            })),
            r.useMemo(() => (0, ec._o)(t ?? ""), [t])),
        { totalFilters: f } = (0, eG.vj)(p, s),
        j = r.useMemo(() => {
            if (s.type === ef.I4_.DMS) {
                let e = (0, ec.Zf)(p),
                    t = e.channel_id?.length ?? 0;
                return t > 0 ? R.intl.format(R.t.A2dqWG, { filterCount: t }) : R.intl.string(R.t.tc619d);
            }
            return null;
        }, [s.type, p]),
        [A, k] = r.useState(null),
        S = r.useMemo(() => (m ? [] : [o.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [m]),
        [E, I] = (0, d.kn)(S),
        b = E === o.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        M = r.useCallback(
            (e) => {
                (null != e && b && I(eU.i.USER_DISMISS), k(e));
            },
            [b, I, k],
        ),
        y = r.useCallback(
            (e) => {
                I("user:explicit" === e ? eU.i.USER_DISMISS : eU.i.AUTO_DISMISS);
            },
            [I],
        ),
        C = r.useCallback(() => {
            (M(null), eI.A.openSearchFiltersModal(s));
        }, [M, s]),
        v = r.useMemo(() => (f > 0 ? R.intl.format(R.t.uaR4sI, { filterCount: f }) : R.intl.string(R.t.UdhTtk)), [f]),
        L = !(0, eP.DZ)() && (s.type === ef.I4_.DMS || s.type === ef.I4_.CHANNEL);
    return (0, n.jsxs)("header", {
        className: i()(eZ.wL, { [eZ.g$]: null != j }),
        children: [
            (0, n.jsx)("div", {
                className: eZ.TN,
                role: "status",
                children: (0, n.jsx)(eY, {
                    totalResults: u,
                    subtitle: j,
                    isIndexing: h,
                    isSearching: m,
                    documentsIndexed: g,
                }),
            }),
            (0, n.jsxs)("div", {
                className: eZ.vd,
                children: [
                    (0, n.jsx)(ew.$, {
                        variant: "secondary",
                        onClick: C,
                        text: v,
                        icon: eD.FiltersHorizontalIcon,
                        size: "sm",
                    }),
                    (0, n.jsx)(e3, {
                        searchMode: l,
                        onSearchModeChange: c,
                        isPopoutOpen: "sort" === A,
                        setOpenPopout: M,
                    }),
                    L &&
                        (0, n.jsx)(e2, {
                            searchContext: s,
                            selectedChannelId: x,
                            isPopoutOpen: "settings" === A,
                            setOpenPopout: M,
                            isPopoverVisible: b,
                            onPopoverRequestClose: y,
                        }),
                ],
            }),
        ],
    });
}
function eY(e) {
    let { totalResults: t, subtitle: s, isSearching: r, isIndexing: l, documentsIndexed: i } = e;
    return l
        ? (0, n.jsx)(e$, { documentsIndexed: i })
        : r
          ? (0, n.jsx)(eJ, {})
          : (0, n.jsx)(e1, { totalResults: t, subtitle: s });
}
function eX() {
    return (0, n.jsx)("div", {
        className: eZ.zp,
        children: (0, n.jsx)(eH.y, { type: eH.y.Type.SPINNING_CIRCLE, className: eZ.u1, itemClassName: eZ.pu }),
    });
}
function e$(e) {
    let { documentsIndexed: t } = e;
    return (0, n.jsx)(f.m, {
        asContainer: !0,
        text: R.intl.formatToPlainString(R.t["4Y3O+O"], { count: t ?? "" }),
        children: (0, n.jsxs)("div", {
            className: eZ.q_,
            children: [
                (0, n.jsx)(p.E, {
                    variant: "body-md/medium",
                    color: "text-muted",
                    children: (0, n.jsx)(eW.Anchor, {
                        className: eZ.Zd,
                        href: eV.A.getArticleURL(ef.MVz.SEARCH_INDEXING),
                        children: R.intl.string(R.t["G3EA+4"]),
                    }),
                }),
                (0, n.jsx)(eX, {}),
            ],
        }),
    });
}
function eJ() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(p.E, { variant: "body-md/medium", color: "text-default", children: R.intl.string(R.t.uixzLf) }),
            (0, n.jsx)(eX, {}),
        ],
    });
}
function e1(e) {
    let { totalResults: t, subtitle: s } = e,
        r = (0, n.jsx)(p.E, {
            variant: "body-md/medium",
            color: "text-strong",
            children: R.intl.format(R.t.ZGVL3g, { count: t }),
        });
    return null != s
        ? (0, n.jsxs)("div", {
              className: eZ.hy,
              children: [r, (0, n.jsx)(p.E, { variant: "body-xs/medium", color: "text-subtle", children: s })],
          })
        : r;
}
function e2(e) {
    let {
            searchContext: t,
            selectedChannelId: s,
            isPopoutOpen: l,
            setOpenPopout: i,
            onPopoverRequestClose: a,
            isPopoverVisible: o,
        } = e,
        c = r.useRef(null),
        u = em.Hu.useSetting(),
        d = r.useCallback(
            (e) => {
                if (u !== e) {
                    if (
                        ((0, eT._k)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: em.Hu.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: eT.vy.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: ef.I4_.DMS };
                        eI.A.transitionStateToSearchContext(t, e, eI.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = { type: ef.I4_.CHANNEL, channelId: s };
                        eI.A.transitionStateToSearchContext(t, e);
                    }
                    (i(null), em.Hu.updateSetting(e));
                }
            },
            [u, i, t, s],
        ),
        [h, m] = r.useMemo(
            () => [
                u ? R.intl.string(R.t["8lklch"]) : R.intl.string(R.t.ji3jTF),
                u ? R.intl.string(R.t.RMQZCa) : R.intl.string(R.t["v/PagC"]),
            ],
            [u],
        ),
        g = r.useMemo(() => ({ align: "end" }), []);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ez.Y, {
                targetElementRef: c,
                shouldShow: l,
                animation: ez.Y.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => i(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(eO.W, {
                        "data-menu-migrated-auto": !0,
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": R.intl.string(R.t.fb59v0),
                        onSelect: () => i(null),
                        children: (0, n.jsxs)(
                            eq.rX,
                            {
                                label: R.intl.string(R.t["/tMwrA"]),
                                children: [
                                    (0, n.jsx)(eq.iD, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: R.intl.string(R.t.jRkYAh),
                                        checked: !u,
                                        action: () => d(!1),
                                    }),
                                    (0, n.jsx)(eq.iD, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: R.intl.string(R.t["lWpJ/t"]),
                                        checked: u,
                                        action: () => d(!0),
                                    }),
                                ],
                            },
                            "xdm-search-items",
                        ),
                    });
                },
                children: (e) =>
                    (0, n.jsx)(j.K, {
                        ...e,
                        buttonRef: c,
                        variant: "secondary",
                        icon: eB.SettingsIcon,
                        onClick: () => {
                            i(l ? null : "settings");
                        },
                        "aria-label": R.intl.string(R.t["3D5yo/"]),
                        size: "sm",
                    }),
            }),
            (0, n.jsx)(e_.A, {
                targetElementRef: c,
                shouldShow: o,
                onRequestClose: a,
                title: h,
                body: m,
                caretConfig: g,
                badge: "new",
            }),
        ],
    });
}
function e3(e) {
    let { searchMode: t, onSearchModeChange: s, isPopoutOpen: l, setOpenPopout: i } = e,
        a = r.useRef(null),
        o = r.useMemo(
            () => [
                { label: R.intl.string(R.t.CbaapP), value: ef.BBH.NEWEST },
                { label: R.intl.string(R.t.OukXZj), value: ef.BBH.OLDEST },
                { label: R.intl.string(R.t.q8gB52), value: ef.BBH.MOST_RELEVANT },
            ],
            [],
        ),
        c = r.useCallback(
            (e) => {
                (i(null), s(e));
            },
            [i, s],
        );
    return (0, n.jsx)(ez.Y, {
        targetElementRef: a,
        shouldShow: l,
        animation: ez.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => i(null),
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(eO.W, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: s,
                "aria-label": R.intl.string(R.t.utp2hS),
                onSelect: () => i(null),
                children: (0, n.jsx)(
                    eq.rX,
                    {
                        children: o.map((e) => {
                            let { label: s, value: r } = e;
                            return (0, n.jsx)(
                                eq.iD,
                                {
                                    group: "sort-by",
                                    id: `sort-by-option-${r}`,
                                    label: s,
                                    action: () => c(r),
                                    checked: t === r,
                                },
                                r,
                            );
                        }),
                    },
                    "sort-by",
                ),
            });
        },
        children: (e) =>
            (0, n.jsx)(ew.$, {
                ...e,
                buttonRef: a,
                variant: "secondary",
                icon: eQ.ArrowsUpDownIcon,
                onClick: () => {
                    i(l ? null : "sort");
                },
                text: R.intl.string(R.t.XvNMNk),
                "aria-label": R.intl.string(R.t.XvNMNk),
                size: "sm",
            }),
    });
}
var e0 = s(481613),
    e5 = s.n(e0),
    e6 = s(615300),
    e8 = s(569286);
function e9(e) {
    function t(e) {
        return e.interpolate({ inputRange: [0, 1], outputRange: ["0px", "1px"] });
    }
    return { transform: [{ translateX: t(e.x) }, { translateY: t(e.y) }] };
}
class e4 extends r.Component {
    state = { x: new e6.A.Value(0), y: new e6.A.Value(0) };
    _isMounted = !1;
    componentDidMount() {
        ((this._isMounted = !0), this.startAnimations());
    }
    componentDidUpdate(e) {
        e.reducedMotion !== this.props.reducedMotion &&
            (this.props.reducedMotion ? (this.state.x.setValue(0), this.state.y.setValue(0)) : this.startAnimations());
    }
    componentWillUnmount() {
        this._isMounted = !1;
    }
    shouldLoop = () => this._isMounted && !this.props.reducedMotion && "Firefox" !== e5().name;
    startAnimations() {
        if (!this.shouldLoop()) return;
        let { x: e, y: t } = this.state;
        (e6.A.animate(e, {
            loop: !0,
            toValueMin: -74,
            toValueMax: 95,
            overshootClamping: !0,
            friction: 5,
            tension: 1,
            shouldLoop: this.shouldLoop,
        }),
            e6.A.animate(t, {
                loop: !0,
                toValueMin: -59,
                toValueMax: 75,
                overshootClamping: !0,
                friction: 5,
                tension: 1,
                shouldLoop: this.shouldLoop,
            }));
    }
    render() {
        return (0, n.jsxs)("div", {
            className: e8.dJ,
            children: [
                (0, n.jsx)("div", { className: e8.LU }),
                (0, n.jsxs)("svg", {
                    className: e8.GR,
                    width: "320",
                    height: "280",
                    children: [
                        (0, n.jsx)("defs", {
                            children: (0, n.jsx)("rect", {
                                id: "search-index-foreground-mask-a",
                                width: "80",
                                height: "80",
                                rx: "40",
                            }),
                        }),
                        (0, n.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [
                                (0, n.jsxs)("g", {
                                    transform: "translate(120 80)",
                                    children: [
                                        (0, n.jsx)("mask", {
                                            id: "search-index-foreground-mask-b",
                                            fill: "#fff",
                                            children: (0, n.jsx)(e6.A.use, {
                                                style: e9(this.state),
                                                className: e8.dK,
                                                xlinkHref: "#search-index-foreground-mask-a",
                                            }),
                                        }),
                                        (0, n.jsxs)("g", {
                                            mask: "url(#search-index-foreground-mask-b)",
                                            children: [
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFD773",
                                                    d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-7.1156 170.8361c0 10.68-8.658 19.338-19.339 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.681 0 19.339 8.658 19.339 19.338z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-15.0267 170.8361c0 6.311-5.116 11.427-11.428 11.427-6.31 0-11.426-5.116-11.426-11.427s5.116-11.427 11.426-11.427c6.312 0 11.428 5.116 11.428 11.427z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFD773",
                                                    d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M6.9479 154.135c0 10.68-8.658 19.338-19.338 19.338-10.68 0-19.338-8.658-19.338-19.338 0-10.68 8.658-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-12.39 165.5622c-6.311 0-11.427-5.116-11.427-11.427s5.116-11.427 11.427-11.427 11.427 5.116 11.427 11.427c0 2.727-.955 5.231-2.55 7.196",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFD773",
                                                    d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-4.4789 140.9499c0 10.68-8.658 19.338-19.338 19.338-10.681 0-19.338-8.658-19.338-19.338 0-10.68 8.657-19.338 19.338-19.338 10.68 0 19.338 8.658 19.338 19.338z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-23.8168 129.5232c6.311 0 11.427 5.116 11.427 11.427s-5.116 11.427-11.427 11.427c-6.312 0-11.427-5.116-11.427-11.427",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFD773",
                                                    d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M100.5348-15.3089c-10.639.941-20.026-6.919-20.968-17.558-.941-10.638 6.92-20.026 17.559-20.967 10.638-.942 20.025 6.919 20.967 17.558.941 10.638-6.919 20.026-17.558 20.967z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M110.2125-35.5789c.556 6.286-4.089 11.833-10.375 12.39-6.287.556-11.834-4.089-12.391-10.375-.555-6.286 4.089-11.834 10.376-12.39",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#C2FFF9",
                                                    d: "M-76.4877 122.3928l14.704 5.777-8.133 24.358-25.269-4.57 1.997-15.671",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-76.4877 122.3928l14.704 5.777-8.133 24.358-25.269-4.57 1.997-15.671zm-18.6982 25.5654l33.402-19.788",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-93.1889 132.2868l23.272 20.241-6.571-30.135",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#C2FFF9",
                                                    d: "M151.5172-63.3406l4.276 12.99-20.723 8.042-10.921-19.362 11.546-7.33",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M151.5172-63.3406l4.276 12.99-20.723 8.042-10.921-19.362 11.546-7.33z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M135.6949-69.0003l-.625 26.692 16.447-21.032m-27.3679 1.6701l31.645 11.319",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M59.7897 13.2502l-102.171 25.055c-2.453.602-4.93-.899-5.531-3.352l-17.794-72.557c-.602-2.454.9-4.93 3.353-5.532l102.171-25.055c2.454-.601 4.931.899 5.533 3.353l17.793 72.556c.601 2.454-.9 4.93-3.354 5.532",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#7687B2",
                                                    d: "M45.3502-64.8382c-.602-2.453-3.078-3.954-5.532-3.353l-102.171 25.056c-2.454.601-3.954 3.078-3.353 5.531l3.489 14.228 111.056-27.234-3.489-14.228z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M59.7897 13.2502l-102.171 25.055c-2.453.602-4.93-.899-5.531-3.352l-17.794-72.557c-.602-2.454.9-4.93 3.353-5.532l102.171-25.055c2.454-.601 4.931.899 5.533 3.353l17.793 72.556c.601 2.454-.9 4.93-3.354 5.532zM-62.2172-23.3763l111.057-27.234m-95.9164 3.7287l-8.367 21.844m30.0096-27.1517l-8.366 21.844m30.0096-27.1516l-8.366 21.844M17.8522-62.804L9.4862-40.96m30.0095-27.1516l-8.366 21.844",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FF7B78",
                                                    d: "M28.693-19.9388c3.986 16.254-5.959 32.661-22.213 36.647-16.254 3.986-32.661-5.959-36.646-22.213-3.987-16.253 5.959-32.661 22.213-36.646 16.252-3.986 32.661 5.959 36.646 22.212",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M28.693-19.9388c3.986 16.254-5.959 32.661-22.213 36.647-16.254 3.986-32.661-5.959-36.646-22.213-3.987-16.253 5.959-32.661 22.213-36.646 16.252-3.986 32.661 5.959 36.646 22.212z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-16.3051-26.1936l7.999 32.618 26.541-23.798",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-16.3051-26.1936l7.999 32.618 26.541-23.798z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M101.5895 23.7946l33.137 35.518-29.647-1.029c-2.585-.09-4.608-2.258-4.518-4.843l1.028-29.646z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M134.7262 59.3127l-3.195 92.059c-.089 2.585-2.258 4.608-4.843 4.519l-93.619-3.249c-2.586-.09-4.609-2.258-4.519-4.844l4.223-121.705c.09-2.585 2.259-4.608 4.844-4.518l63.972 2.22",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M134.7262 59.3127l-3.195 92.059c-.089 2.585-2.258 4.608-4.843 4.519l-93.619-3.249c-2.586-.09-4.609-2.258-4.519-4.844l4.223-121.705c.09-2.585 2.259-4.608 4.844-4.518l63.972 2.22",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M101.5895 23.7946l33.137 35.518-29.647-1.029c-2.585-.09-4.608-2.258-4.518-4.843l1.028-29.646z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M104.15 6.4353l39.81 27.834-29.21 5.171c-2.547.451-4.978-1.248-5.429-3.796l-5.171-29.209z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M143.9596 34.2692l16.058 90.704c.45 2.547-1.249 4.978-3.796 5.429l-92.242 16.329c-2.546.452-4.977-1.248-5.428-3.795l-21.229-119.914c-.451-2.547 1.248-4.978 3.796-5.428l63.031-11.159",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M143.9596 34.2692l16.058 90.704c.45 2.547-1.249 4.978-3.796 5.429l-92.242 16.329c-2.546.452-4.977-1.248-5.428-3.795l-21.229-119.914c-.451-2.547 1.248-4.978 3.796-5.428l63.031-11.159",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M104.15 6.4353l39.81 27.834-29.21 5.171c-2.547.451-4.978-1.248-5.429-3.796l-5.171-29.209z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#5871B7",
                                                    d: "M10.7613-26.0428h117.831c2.829 0 5.123 2.294 5.123 5.123v7.341c0 1.565.716 3.045 1.943 4.016l7 5.542c.659.522.646 1.525-.026 2.029l-6.867 5.151c-1.29.967-2.05 2.485-2.05 4.098v7.685c0 2.829-2.294 5.123-5.123 5.123H10.7613c-2.83 0-5.124-2.294-5.124-5.123v-35.862c0-2.829 2.294-5.123 5.124-5.123",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M10.7613-26.0428h117.831c2.829 0 5.123 2.294 5.123 5.123v7.341c0 1.565.716 3.045 1.943 4.016l7 5.542c.659.522.646 1.525-.026 2.029l-6.867 5.151c-1.29.967-2.05 2.485-2.05 4.098v7.685c0 2.829-2.294 5.123-5.123 5.123H10.7613c-2.83 0-5.124-2.294-5.124-5.123v-35.862c0-2.829 2.294-5.123 5.124-5.123zM64.1588 1.2805h-43.147m21.5738-8.1114h-21.574m91.3894 0H49.816m33.9815-8.1118h-62.786",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M166.0641 58.8137l-21.664 89.53c-.608 2.514-3.14 4.06-5.654 3.451l-91.048-22.031c-2.515-.608-4.06-3.14-3.451-5.654l28.64-118.362c.609-2.515 3.14-4.059 5.655-3.451l62.215 15.055",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M140.7574 17.3513l25.307 41.462-28.832-6.976c-2.515-.609-4.06-3.14-3.452-5.654l6.977-28.832z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M166.0641 58.8137l-21.664 89.53c-.608 2.514-3.14 4.06-5.654 3.451l-91.048-22.031c-2.515-.608-4.06-3.14-3.451-5.654l28.64-118.362c.609-2.515 3.14-4.059 5.655-3.451l62.215 15.055",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M140.7574 17.3513l25.307 41.462-28.832-6.976c-2.515-.609-4.06-3.14-3.452-5.654l6.977-28.832z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#5865f2",
                                                    d: "M84.6422 57.6999h-117.832c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.045-1.943-4.017l-7-5.542c-.659-.521-.646-1.525.027-2.029l6.867-5.151c1.29-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h117.832c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M84.6422 57.6999h-117.832c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.045-1.943-4.017l-7-5.542c-.659-.521-.646-1.525.027-2.029l6.867-5.151c1.29-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h117.832c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123zM-26.3637 22.2653h48.67M6.0826 30.3767h68.309m-100.7553 0h22.799m53.1942 8.1118h14.942m-24.3346 0h4.534m-71.1346 0h54.093m-54.093 8.1113h63.186",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#98AFED",
                                                    d: "M63.191 113.1003h-130.64c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.046-1.943-4.017l-7-5.542c-.658-.521-.646-1.525.026-2.029l6.868-5.151c1.291-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h130.64c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M63.191 113.1003h-130.64c-2.829 0-5.123-2.293-5.123-5.123v-7.34c0-1.566-.716-3.046-1.943-4.017l-7-5.542c-.658-.521-.646-1.525.026-2.029l6.868-5.151c1.291-.967 2.049-2.485 2.049-4.098v-7.685c0-2.829 2.294-5.123 5.123-5.123h130.64c2.829 0 5.123 2.294 5.123 5.123v35.862c0 2.83-2.294 5.123-5.123 5.123zM-60.6225 77.6657h99.433m-23.4398 8.1114h7.949m-19.6892 0h-64.253m0 8.1118h47.398m-47.398 8.1113h116.122",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#E4E9F8",
                                                    d: "M37.8805 30.8191h-105.198c-2.527 0-4.574-2.048-4.574-4.574v-74.706c0-2.527 2.047-4.574 4.574-4.574h105.198c2.526 0 4.574 2.047 4.574 4.574v74.706c0 2.526-2.048 4.574-4.574 4.574",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#7687B2",
                                                    d: "M42.4547-33.7181v-14.743c0-2.527-2.048-4.574-4.574-4.574h-105.198c-2.527 0-4.575 2.047-4.575 4.574v14.743h114.347z",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M37.8805 30.8191h-105.198c-2.527 0-4.574-2.048-4.574-4.574v-74.706c0-2.527 2.047-4.574 4.574-4.574h105.198c2.526 0 4.574 2.047 4.574 4.574v74.706c0 2.526-2.048 4.574-4.574 4.574zM-71.892-33.8123H42.455m-94.0442-19.2231l-13.328 19.223m35.6121-19.223l-13.328 19.223m35.6132-19.223l-13.328 19.223m35.6122-19.223l-13.328 19.223m35.6121-19.223l-13.328 19.223",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FF7B78",
                                                    d: "M15.5836-8.8211c0 16.735-13.566 30.302-30.302 30.302-16.735 0-30.302-13.567-30.302-30.302s13.567-30.302 30.302-30.302c16.736 0 30.302 13.567 30.302 30.302",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M15.5836-8.8211c0 16.735-13.566 30.302-30.302 30.302-16.735 0-30.302-13.567-30.302-30.302s13.567-30.302 30.302-30.302c16.736 0 30.302 13.567 30.302 30.302z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                                (0, n.jsx)("path", {
                                                    fill: "#FFF",
                                                    d: "M-26.6293-25.6136v33.584l31.445-16.792",
                                                }),
                                                (0, n.jsx)("path", {
                                                    stroke: "#1E2126",
                                                    strokeWidth: "2",
                                                    d: "M-26.6293-25.6136v33.584l31.445-16.792zM184.3375 8.3772v6.43m3.2149-3.2152h-6.43m-292.9079 79.082v6.43m3.2148-3.2151h-6.43M195.901-43.6692l-1.516 1.515m-6.0611 6.0621l-1.516 1.516m9.0931-.0004l-1.516-1.516m-6.0611-6.0616l-1.516-1.515M-88.642 168.9265l-1.516 1.516m-6.0621 6.0616l-1.516 1.515m9.0941.0001l-1.516-1.515m-6.0621-6.0621l-1.516-1.516M174.3463-8.8211c0 1.775-1.439 3.215-3.215 3.215-1.776 0-3.215-1.44-3.215-3.215s1.439-3.215 3.215-3.215c1.776 0 3.215 1.44 3.215 3.215z",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)(e6.A.g, {
                                    className: e8.KS,
                                    style: e9(this.state),
                                    children: [
                                        (0, n.jsx)("path", {
                                            fill: "#C9D2F0",
                                            d: "M89.8311 190.9259c-2.441-2.441-2.441-6.4 0-8.841l36.771-36.771 8.841 8.841-36.771 36.771c-2.441 2.441-6.4 2.441-8.841 0",
                                        }),
                                        (0, n.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M89.8311 190.9259c-2.441-2.441-2.441-6.4 0-8.841l36.771-36.771 8.841 8.841-36.771 36.771c-2.441 2.441-6.4 2.441-8.841 0z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                        }),
                                        (0, n.jsx)("path", {
                                            fill: "#9F7373",
                                            d: "M100.1458 189.4524l-8.841-8.841c-1.628-1.628-1.628-4.267 0-5.894l17.437-17.437c1.627-1.628 4.266-1.628 5.894 0l8.841 8.841c1.628 1.628 1.628 4.267 0 5.894l-17.437 17.437c-1.627 1.628-4.266 1.628-5.894 0",
                                        }),
                                        (0, n.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M100.1458 189.4524l-8.841-8.841c-1.628-1.628-1.628-4.267 0-5.894l17.437-17.437c1.627-1.628 4.266-1.628 5.894 0l8.841 8.841c1.628 1.628 1.628 4.267 0 5.894l-17.437 17.437c-1.627 1.628-4.266 1.628-5.894 0z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                        }),
                                        (0, n.jsx)("path", {
                                            fill: "#F3F9FF",
                                            d: "M132.1122 148.6448c-15.621-15.621-15.621-40.948 0-56.569 15.621-15.621 40.948-15.621 56.569 0 15.621 15.621 15.621 40.948 0 56.569-15.621 15.621-40.948 15.621-56.569 0m63.895-63.895c-19.667-19.667-51.554-19.667-71.221 0s-19.667 51.554 0 71.221 51.554 19.667 71.221 0 19.667-51.554 0-71.221",
                                        }),
                                        (0, n.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M196.0069 155.9708c-19.667 19.667-51.554 19.667-71.221 0s-19.667-51.554 0-71.221 51.554-19.667 71.221 0 19.667 51.554 0 71.221z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                        }),
                                        (0, n.jsx)("path", {
                                            stroke: "#1E2126",
                                            strokeWidth: "2",
                                            d: "M132.1122 148.6448c-15.621-15.621-15.621-40.948 0-56.569 15.621-15.621 40.948-15.621 56.569 0 15.621 15.621 15.621 40.948 0 56.569-15.621 15.621-40.948 15.621-56.569 0z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                        }),
                                        (0, n.jsx)("path", { d: "M84 66h130v130H84z" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
function e7() {
    let e = (0, a.bG)([Y.Ay], () => Y.Ay.useReducedMotion);
    return (0, n.jsx)(e4, { reducedMotion: e });
}
var te = s(876689),
    tt = s(6993),
    ts = s(36537);
class tn extends r.Component {
    componentDidMount() {
        this.autoAnalytics();
    }
    componentDidUpdate(e) {
        (this.props.searchRequestAnalyticsId !== e.searchRequestAnalyticsId ||
            this.props.searchOffset !== e.searchOffset) &&
            this.autoAnalytics(e.searchRequestAnalyticsId);
    }
    autoAnalytics = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            if (null == e.props.searchRequestAnalyticsId || e.props.isSearching) return;
            let s = 0,
                n = 0,
                r = 0,
                l = 0;
            e.props.messages.forEach((e) => {
                (null != e.content && "" !== e.content && (s++, /https?:\/\/[^\s]+/.test(e.content) && l++),
                    null != e.embeds && e.embeds.length > 0 && r++,
                    null != e.attachments && e.attachments.length > 0 && n++);
            });
            let i = (0, ec.bS)(e.props.searchContext);
            0 === s
                ? (0, eT.oK)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      searchQueryString: eI.A.getSearchInputText(e.props.searchContext),
                      searchQuery: eu.A.getSearchResultsQuery(i),
                  })
                : (0, eT.H9)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      prevSearchRequestAnalyticsId: t !== e.props.searchRequestAnalyticsId ? t : null,
                      isError: e.props.searchHasError,
                      limit: e.props.searchLimit,
                      offset: e.props.searchOffset,
                      page: Math.floor(e.props.searchOffset / e.props.searchLimit) + 1,
                      totalResults: e.props.searchTotalResults,
                      pageResults: null != e.props.messages ? e.props.messages.length : null,
                      isIndexing: e.props.searchIsIndexing,
                      pageNumMessages: s,
                      pageNumLinks: l,
                      pageNumEmbeds: r,
                      pageNumAttachments: n,
                      searchQueryString: eI.A.getSearchInputText(e.props.searchContext),
                      searchQuery: eu.A.getSearchResultsQuery(i),
                  });
        };
    })();
    render() {
        return null;
    }
}
function tr(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: ts.Oq, children: (0, n.jsx)("div", { className: ts.de, children: t }) });
}
function tl(e) {
    let {
            suppressEmptyState: t,
            smartEmptyState: s,
            messages: r,
            blockCount: l,
            ignoreCount: a,
            search: o,
            searchContext: c,
            renderEmbeds: u,
            onClick: d,
            onScrollTo: h,
            onBlockedResultsClick: m,
            searchRequestAnalyticsId: g,
            searchResultsQuery: x,
        } = e,
        { totalResults: p, isSearching: f, isIndexing: j, hasError: A } = o;
    if (A)
        return 0 === o.offset && t
            ? null
            : 0 === o.offset && null != s
              ? s
              : (0, n.jsxs)(tr, {
                    children: [
                        (0, n.jsx)("div", { className: ts.M6 }),
                        (0, n.jsx)("div", { className: i()(ts.pZ, ts.gJ), children: R.intl.string(R.t.uvDZBZ) }),
                    ],
                });
    if (j) {
        let e = (0, ec.Y7)(c);
        return (0, n.jsxs)(tr, {
            children: [(0, n.jsx)(e7, {}), (0, n.jsx)("div", { className: (ts.pZ, ts.Jy), children: e })],
        });
    }
    if (f) return null;
    if (p > 0)
        return (0, n.jsx)(tt.A, {
            search: o,
            messages: r,
            onClick: d,
            blockCount: l,
            ignoreCount: a,
            renderEmbeds: u,
            scrollTo: h,
            onBlockedResultsClick: m,
            searchRequestAnalyticsId: g,
            searchResultsQuery: x,
        });
    if (t) return null;
    if (null != s) return s;
    let { showNoResultsAlt: k } = o,
        S = k ? R.intl.string(R.t["VrK/2R"]) : R.intl.string(R.t.V6nAfF);
    return (0, n.jsxs)(tr, {
        children: [
            (0, n.jsx)("div", { className: i()(ts.$l, { [ts.CC]: k }) }),
            (0, n.jsx)("div", { className: i()(ts.pZ, ts.wV, { [ts.CC]: k }), children: S }),
        ],
    });
}
let ti = [],
    ta = r.memo(function (e) {
        let t,
            s,
            l,
            {
                smartSearchKeywordState: i,
                searchContext: x,
                search: p,
                renderEmbeds: f,
                searchRequestAnalyticsId: j,
                messages: A,
                blockCount: k,
                ignoreCount: E,
                onSearchModeChange: I,
                onPageChange: b,
                searchMode: M,
                onBlockedResultsClick: y,
                searchResultsQuery: C,
                searchResultsQueryString: v,
                selectedChannelId: L,
            } = e,
            F = i.isInitialFetchComplete && !i.isSearching && !i.isIndexing,
            N = i.totalResults > 0 && !(i.hasError && 0 === i.offset),
            [T, _] = r.useState(null),
            D = T?.submissionId;
        r.useLayoutEffect(() => {
            F && D !== i.searchSubmissionId && _({ submissionId: i.searchSubmissionId, hasKeywordResults: N });
        }, [F, D, i.searchSubmissionId, N]);
        let H = D === i.searchSubmissionId ? T : null,
            W = F || null != H,
            z = !W && !i.isIndexing,
            O = F && 0 === i.offset ? N : (H?.hasKeywordResults ?? N),
            q = 0 === p.offset,
            {
                query: B,
                status: Q,
                result: P,
                citationsCount: V,
            } = ((t = r.useMemo(() => (null == v || "" === v.trim() ? null : (0, eC.W)(x, v)), [x, v])),
            (s = (0, ey.fu)(t?.guildId, "fetch_answer")),
            (l = (0, a.bG)(
                [w.A, eg.A, ex.A, ea.A],
                () => {
                    let e = s && null != t ? w.A.getAnswer(t.guildId, t.requestKey) : null;
                    if (null == e || null == t) return { status: h.o.NOT_QUALIFIED, result: null, citationsCount: 0 };
                    let n = (0, ep.Vw)(t.searchContext, t.searchQueryString, O, w.A),
                        r = e.citations.filter((e) => ej(e, [eg.A, ex.A, ea.A])).slice(0, n),
                        l = e.status === h.o.LOADED && 0 === r.length ? h.o.EMPTY : e.status;
                    return {
                        status: l,
                        result: { ...e, status: l, citations: r },
                        citationsCount: l === h.o.LOADED ? r.length : 0,
                    };
                },
                [s, t, O],
                a.My,
            )),
            { query: t, ...l }),
            G = Q === h.o.LOADING || Q === h.o.LOADED,
            Z = Q === h.o.EMPTY || Q === h.o.ERROR,
            K = Z ? B : null,
            { suggestedSearches: Y } = (0, g.H)(K, { source: O ? "smart_search_row" : "error_screen" });
        r.useEffect(() => {
            null == K || i.isSearching || (0, m.E)(K, S.A);
        }, [K, i.isSearching]);
        let X =
                q && null != B && Z && Y.length > 0
                    ? (0, n.jsx)(eM, {
                          query: B,
                          suggestions: Y,
                          suggestionSource: O ? "smart_search_row" : "error_screen",
                          isEmptyScreen: !O && !i.isIndexing,
                          hasError: i.hasError,
                      })
                    : null,
            $ = r.useRef(null),
            [J, ee] = r.useState(null),
            et = r.useCallback((e) => {
                (($.current = e), ee(e?.getScrollerNode() ?? null));
            }, []),
            es =
                G && null != B && null != P
                    ? (0, n.jsx)(
                          U,
                          {
                              scrollerRoot: J,
                              isVisible: q,
                              searchSubmissionId: i.searchSubmissionId,
                              query: B,
                              result: P,
                              isKeywordLoading: z,
                              isKeywordSearchSettled: W,
                              hasKeywordResults: O,
                              renderCitations: (e, t) => (0, n.jsx)(eA, { query: e, result: t }),
                          },
                          B.requestKey,
                      )
                    : !z && (O || i.isIndexing)
                      ? X
                      : null,
            en = r.useCallback(() => {
                eI.A.cleanUpSearchState(x);
            }, [x]);
        r.useEffect(
            () => (
                ev._.subscribe(ef.jej.SEARCH_RESULTS_CLOSE, en),
                () => {
                    ev._.unsubscribe(ef.jej.SEARCH_RESULTS_CLOSE, en);
                }
            ),
            [en],
        );
        let er = r.useRef(p.showBlockedResults);
        r.useEffect(() => {
            if (er.current !== p.showBlockedResults) {
                er.current = p.showBlockedResults;
                let e = $.current;
                null != e && e.scrollToBottom();
            }
        }, [p.showBlockedResults]);
        let el = r.useCallback((e, t, s) => {
                let n = $.current;
                if (null == n) return;
                let r = n.getScrollerState().scrollTop - e;
                n.scrollTo({ to: r, animate: t, callback: s });
            }, []),
            ei = null != v ? `${M}:${v}` : void 0,
            {
                paginationTotalCount: eo,
                paginationMaxVisiblePage: ed,
                isMaxVisiblePageWarningVisible: eh,
                renderPageWrapper: em,
            } = (0, eN.o)({
                totalResults: p.totalResults,
                isSearching: p.isSearching,
                offset: p.offset,
                searchResultsPaginationKey: ei,
            }),
            ek = r.useCallback(
                (e) => {
                    e === M ||
                        p.isSearching ||
                        ((0, eT.L6)({ searchContext: x, searchRequestAnalyticsId: j, mode: e }), I(e));
                },
                [I, p.isSearching, x, M, j],
            ),
            eS = r.useCallback(
                (e, t) => {
                    let s = eg.A.getChannel(e.channel_id),
                        n = null != s ? s.getGuildId() : null,
                        r = (0, ec.bS)(x),
                        { offset: l, totalResults: i } = p;
                    (0, eT.i4)({
                        searchContext: x,
                        searchRequestAnalyticsId: j,
                        guildId: n,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != A ? A.length : null,
                        totalResults: i,
                        limit: 25,
                        page: Math.floor(l / 25) + 1,
                        offset: l,
                        index: t,
                        searchQueryString: eI.A.getSearchInputText(x),
                        searchQuery: eu.A.getSearchResultsQuery(r),
                    });
                },
                [p, x, j, A],
            ),
            eE = r.useCallback(
                (e) => {
                    ((0, eT.kq)({ searchContext: x, searchRequestAnalyticsId: j, newPageIndex: e }), b(e));
                },
                [b, x, j],
            ),
            eb = (0, a.yK)([eu.A], () => {
                if (0 !== p.offset) return ti;
                let e = A.length;
                if (e < 10) return ti;
                let t = 0;
                if (
                    (A.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && t++;
                    }),
                    t / e < 0.75)
                )
                    return ti;
                let s = (0, ec.bS)(x),
                    n = eu.A.getSearchResultsQueryString(s);
                return (0, ec._o)(n ?? "").some((e) => e.type === ef.LWr.FILTER_AUTHOR_TYPE)
                    ? ti
                    : [o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [eL, eF] = (0, d.kn)(eb),
            e_ = eL === o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            ew = r.useCallback(() => {
                if (p.isSearching) return;
                let e = `${eR.Ay[ef.LWr.FILTER_AUTHOR_TYPE].key} ${R.intl.string(R.t.tPZo4p)} `;
                eI.A.appendToSearchInputText(x, e);
            }, [x, p.isSearching]);
        return (0, n.jsxs)("section", {
            className: ts.zt,
            "aria-label": R.intl.string(R.t["zkoeq/"]),
            children: [
                (0, n.jsx)(eK, {
                    searchContext: x,
                    searchMode: M,
                    onSearchModeChange: ek,
                    totalResults: p.totalResults + V,
                    isSearching: p.isSearching,
                    isIndexing: p.isHistoricalIndexing,
                    documentsIndexed: p.documentsIndexed,
                    selectedChannelId: L,
                }),
                (0, n.jsxs)(c.Ch, {
                    ref: et,
                    className: ts.XG,
                    children: [
                        es,
                        eh &&
                            !p.isSearching &&
                            (0, n.jsx)("div", {
                                className: ts.VC,
                                children: (0, n.jsx)(u.w, {
                                    type: "warning",
                                    message: R.intl.formatToPlainString(R.t["E+2azY"], { maxPages: ed }),
                                    role: "status",
                                }),
                            }),
                        e_ &&
                            (0, n.jsx)("div", {
                                className: ts.QR,
                                children: (0, n.jsx)(u.w, {
                                    type: "info",
                                    message: R.intl.format(R.t["gQeg/R"], { handleClick: ew }),
                                    role: "none",
                                }),
                            }),
                        (0, n.jsx)(tl, {
                            suppressEmptyState: q && !O && G,
                            smartEmptyState: O || p.isSearching ? null : X,
                            messages: A,
                            blockCount: k,
                            ignoreCount: E,
                            search: p,
                            searchContext: x,
                            renderEmbeds: f,
                            onClick: eS,
                            onScrollTo: el,
                            onBlockedResultsClick: y,
                            searchRequestAnalyticsId: j,
                            searchResultsQuery: C,
                        }),
                    ],
                }),
                eo > 25 &&
                    (0, n.jsx)(te.A, {
                        className: ts.cu,
                        onPageChange: eE,
                        offset: p.offset,
                        totalCount: eo,
                        pageSize: 25,
                        renderPageWrapper: em,
                    }),
            ],
        });
    });
function to(e) {
    let { searchContext: t, selectedChannelId: s } = e,
        l = (0, ec.bS)(t),
        i = (0, a.cf)([eo.A, eu.A], () => ({
            searchSubmissionId: eu.A.getSearchSubmissionId(l),
            isInitialFetchComplete: eo.A.getIsInitialFetchComplete(l) ?? !1,
            isSearching: eo.A.getIsFetching(l) ?? !1,
            isIndexing: eo.A.getIsIndexing(l) ?? !1,
            isHistoricalIndexing: eo.A.getIsHistoricalIndexing(l) ?? !1,
            documentsIndexed: eo.A.getDocumentsIndexed(l),
            offset: eu.A.getSearchResultsOffset(l) ?? 0,
            totalResults: eo.A.getTotalCount(l) ?? 0,
            hasError: null != eo.A.getError(l),
            showBlockedResults: eu.A.shouldShowBlockedResults(l),
            showNoResultsAlt: eu.A.shouldShowNoResultsAlt(l),
        })),
        o = (0, a.bG)([eo.A], () => eo.A.getAnalyticsId(l)),
        {
            renderedMessages: c,
            ignoreCount: u,
            blockCount: d,
        } = (function (e) {
            let { searchContext: t } = e,
                s = (0, ee.I2)({ location: "useRenderedSearchResults" }).enabled,
                n = (0, a.bG)(
                    [eu.A, eo.A, J.A],
                    () => {
                        let e = (0, ec.bS)(t),
                            n = eu.A.getSearchResultsQuery(e),
                            r = eo.A.getMessages(e);
                        return null == n || null == r || 0 === r.length ? eh : ed(r, (0, ec.dX)(n) ?? "", s, [J.A]);
                    },
                    [t, s],
                    a.My,
                ),
                { blockCount: r, ignoreCount: l } = (0, a.cf)([ea.A], () => {
                    let e = 0,
                        t = 0;
                    return (
                        n.forEach((s) => {
                            let n = ea.A.isBlockedForMessage(s),
                                r = ea.A.isIgnoredForMessage(s);
                            n ? e++ : r && t++;
                        }),
                        { blockCount: e, ignoreCount: t }
                    );
                });
            return { renderedMessages: n, blockCount: r, ignoreCount: l };
        })({ searchContext: t }),
        h = (0, a.bG)([eu.A], () => eu.A.getSearchMode(l) ?? ef.BBH.NEWEST),
        m = r.useCallback(
            (e) => {
                if (i.isSearching) return;
                eL.A.updateSearchMode(t, e);
                let s = eI.A.getSearchInputText(t);
                null != s && eI.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: 0 });
            },
            [i.isSearching, t],
        ),
        g = r.useCallback(
            (e) => {
                let s = eI.A.getSearchInputText(t);
                null != s && eI.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: 25 * e });
            },
            [t],
        ),
        x = (0, a.bG)([eu.A], () => {
            let e = (0, ec.bS)(t);
            return eu.A.getSearchResultsQuery(e);
        }),
        p = (0, a.bG)([eu.A], () => {
            let e = (0, ec.bS)(t);
            return eu.A.getSearchResultsQueryString(e);
        }),
        f = r.useCallback((e) => eL.A.setShowBlockedResults(t, e), [t]),
        j = r.useDeferredValue(c),
        A = r.useDeferredValue(i),
        k = r.useDeferredValue(o);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ta, {
                smartSearchKeywordState: i,
                searchContext: t,
                search: A,
                searchRequestAnalyticsId: k,
                messages: j,
                ignoreCount: u,
                blockCount: d,
                renderEmbeds: em.rs.useSetting(),
                onPageChange: g,
                onSearchModeChange: m,
                searchMode: h,
                onBlockedResultsClick: f,
                searchResultsQuery: x,
                searchResultsQueryString: p,
                selectedChannelId: s,
            }),
            (0, n.jsx)(tn, {
                searchContext: t,
                searchRequestAnalyticsId: k,
                messages: j,
                searchOffset: A.offset,
                searchLimit: 25,
                searchHasError: A.hasError,
                searchTotalResults: A.totalResults,
                searchIsIndexing: A.isHistoricalIndexing,
                isSearching: A.isSearching,
            }),
        ],
    });
}
function tc(e) {
    let { guildId: t, channelId: s } = e,
        r = (0, eF.J)({ guildId: t, channelId: s });
    return null == r ? null : (0, n.jsx)(to, { searchContext: r, selectedChannelId: s });
}
