(s.r(t), s.d(t, { default: () => tx }));
var n = s(477900),
    l = s(582128),
    r = s(503698),
    i = s.n(r),
    a = s(855986),
    o = s(554146),
    c = s(516521),
    d = s(683071),
    u = s(964486),
    h = s(263775),
    m = s(220162),
    x = s(160963),
    g = s(133986),
    p = s(894880),
    f = s(534514),
    j = s(834730),
    k = s(866665),
    S = s(408278),
    A = s(900797),
    E = s(847374),
    b = s(435558),
    M = s.n(b),
    I = s(118751),
    C = s(342952),
    y = s(778712),
    v = s(570597),
    R = s(792996),
    L = s(993195);
function F(e) {
    let { citations: t, guildId: s } = e,
        r = l.useMemo(
            () =>
                (0, b.uniqBy)(
                    t.map((e) => e.message.author),
                    (e) => e.id,
                ),
            [t],
        );
    return 0 === r.length
        ? null
        : (0, n.jsxs)("div", {
              role: "img",
              "aria-label": (0, v.X)(r.map((e) => e.username)),
              className: L.tF,
              children: [
                  (0, n.jsx)(C.I, {
                      className: L.UX,
                      users: r,
                      maxUsers: 3,
                      size: y._3.SIZE_20,
                      guildId: s,
                      hideOverflowCount: !0,
                      "aria-hidden": !0,
                  }),
                  r.length > 3 &&
                      (0, n.jsxs)(j.E, {
                          variant: "body-md/semibold",
                          color: "text-default",
                          className: L.qs,
                          "aria-hidden": !0,
                          children: ["+", (0, I.tg)(r.length - 3, R.intl.currentLocale)],
                      }),
              ],
          });
}
var N = s(53788),
    T = s(148795),
    _ = s(617713),
    D = s(221355),
    w = s(743175),
    H = s(869720);
function z(e) {
    let { smartSearchQuery: t } = e,
        s = (0, a.bG)([w.A], () => w.A.getResultFeedback(t.guildId, t.requestKey), [t.guildId, t.requestKey]),
        [r] = l.useState(null !== s),
        i = l.useRef(null);
    if (r) return null;
    function o(e) {
        (i.current?.focus(),
            (0, D.X)({ smartSearchQuery: t, hasPositiveFeedback: e, SearchSessionAnalyticsManager: _.A }));
    }
    let c = R.intl.string(H.default["x/H32X"]),
        d = R.intl.string(H.default.FoToeH);
    return (0, n.jsxs)("div", {
        className: L.mp,
        ref: i,
        tabIndex: -1,
        children: [
            (0, n.jsx)("div", {
                role: "status",
                children: (0, n.jsx)(j.E, {
                    variant: "body-sm/medium",
                    color: "text-muted",
                    children: R.intl.string(null === s ? H.default.uij9Dy : R.t.kZbFIO),
                }),
            }),
            null === s &&
                (0, n.jsxs)("div", {
                    className: L.BX,
                    children: [
                        (0, n.jsx)(k.m, {
                            text: c,
                            children: (0, n.jsx)(S.K, {
                                icon: N.ThumbsUpIcon,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": c,
                                onClick: () => o(!0),
                            }),
                        }),
                        (0, n.jsx)(k.m, {
                            text: d,
                            children: (0, n.jsx)(S.K, {
                                icon: T.ThumbsDownIcon,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": d,
                                onClick: () => o(!1),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
var W = s(844222),
    O = s(140735),
    q = s(336288),
    B = s(286251),
    P = s(114212);
function G(e) {
    let { isCollapsed: t } = e,
        { reducedMotion: s } = l.useContext(W.C),
        r = l.useMemo(
            () =>
                [
                    H.default.ffCCEe,
                    ...M().shuffle([
                        H.default.Sb2fo2,
                        H.default.rXNe0Z,
                        H.default["22g6Ju"],
                        H.default.IogGZY,
                        H.default.UEnMJF,
                        H.default.kk7BVL,
                        H.default.UVa49v,
                    ]),
                ].map((e) => R.intl.string(e)),
            [],
        ),
        a = s.enabled ? 4800 : 2400;
    return (0, n.jsxs)("div", {
        role: "status",
        className: i()(L.qV, { [L.yZ]: t }),
        children: [
            (0, n.jsx)(O.A, { children: R.intl.string(H.default.ffCCEe) }),
            (0, n.jsxs)("div", {
                className: L.uH,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(q.i, { size: 12 }),
                    (0, n.jsx)(B.o, {
                        text: r,
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
                                (0, n.jsx)(P.F, { width: 32, height: 32, className: L.qf }),
                                (0, n.jsxs)("div", {
                                    className: L.lm,
                                    children: [
                                        (0, n.jsx)(P.F, { width: 128, height: 12, className: L.qf }),
                                        (0, n.jsx)(P.F, { width: 192, height: 16, className: L.qf }),
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
let V = l.memo(function (e) {
    let {
            isVisible: t = !0,
            searchSubmissionId: s,
            query: r,
            result: a,
            isKeywordLoading: o,
            isKeywordSearchSettled: c,
            hasKeywordResults: d,
            renderCitations: u,
        } = e,
        [h, m] = l.useState(null),
        g = !c || d,
        p = !g || h === s,
        b = l.useId(),
        M = l.useId(),
        I = l.useRef(null);
    return (l.useLayoutEffect(() => {
        p || I.current !== document.activeElement || I.current?.scrollIntoView({ block: "nearest" });
    }, [p]),
    !t || o)
        ? null
        : (0, n.jsx)("section", {
              className: L.om,
              "aria-label": R.intl.string(H.default.ydAwWi),
              children: (0, n.jsxs)("div", {
                  className: i()(L.Gt, { [L.Td]: p && g && a.status === x.o.LOADED }),
                  children: [
                      a.status === x.o.LOADING
                          ? (0, n.jsx)(G, { isCollapsed: !p })
                          : (0, n.jsxs)("div", {
                                id: M,
                                className: i()(L.VH, { [L.yZ]: !p }),
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: L.wx,
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: L.qd,
                                                children: [
                                                    (0, n.jsx)(f.D, {
                                                        id: b,
                                                        variant: "heading-sm/semibold",
                                                        color: "text-subtle",
                                                        lineClamp: 1,
                                                        children: R.intl.string(H.default.ydAwWi),
                                                    }),
                                                    (0, n.jsx)(j.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-subtle",
                                                        lineClamp: 1,
                                                        children: R.intl.string(H.default.QIdSmb),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsx)(F, { citations: a.citations, guildId: r.guildId }),
                                        ],
                                    }),
                                    (0, n.jsx)(j.E, {
                                        variant: "body-md/normal",
                                        color: "text-default",
                                        className: L.z,
                                        children: a.answerText,
                                    }),
                                    (0, n.jsx)("div", { inert: !p, children: u?.(r, a) }),
                                    (0, n.jsx)("div", { hidden: !p, children: (0, n.jsx)(z, { smartSearchQuery: r }) }),
                                ],
                            }),
                      !p && (0, n.jsx)("div", { className: L.aE, "aria-hidden": !0 }),
                      g &&
                          a.status === x.o.LOADED &&
                          (0, n.jsx)("div", {
                              className: L.fT,
                              children: (0, n.jsx)("div", {
                                  className: L.os,
                                  children: (0, n.jsx)(k.m, {
                                      text: R.intl.string(p ? H.default.FKLBbW : H.default.NuTbB9),
                                      children: (0, n.jsx)(S.K, {
                                          buttonRef: I,
                                          icon: p ? A.ChevronSmallUpIcon : E.ChevronSmallDownIcon,
                                          variant: "secondary",
                                          size: "sm",
                                          "aria-label": R.intl.string(p ? H.default.FKLBbW : H.default.NuTbB9),
                                          onClick: () => m(p ? null : s),
                                          "aria-expanded": p,
                                          "aria-controls": M,
                                      }),
                                  }),
                              }),
                          }),
                  ],
              }),
          });
});
s(321073);
var Q = s(347347),
    U = s(697530),
    K = s(775602),
    Z = s(58241),
    Y = s(856896),
    X = s(457699),
    $ = s(146849),
    J = s(954403),
    ee = s(81437),
    et = s(378570),
    es = s(222),
    en = s(354777),
    el = s(383233),
    er = s(994500),
    ei = s(517381),
    ea = s(822382),
    eo = s(65600);
function ec(e, t, s, n) {
    let l = (0, U.wG)(t),
        r = [];
    return (
        e.forEach((e) => {
            let t = new el.Ay(e);
            ((t = (function (e, t) {
                let [s] = t,
                    n = s.getMessage(e.id, e.channel_id);
                return (null != n && (e = e.merge({ attachments: n.attachments, embeds: n.embeds })), e);
            })(t, n)),
                s ||
                    (t = t.set(
                        "customRenderedContent",
                        (0, en.Ay)(t, { postProcessor: l, allowHeading: !0, allowList: !0, allowGameMentions: !0 }),
                    )),
                r.push(t));
        }),
        r
    );
}
let ed = [];
var eu = s(253932),
    eh = s(734057),
    em = s(576705),
    ex = s(583231),
    eg = s(652215);
function ep(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [eh.A, em.A, er.A],
        [s, n, l] = t,
        r = s.getChannel(e.channelId);
    return (
        null != r &&
        n.can(eg.xBc.VIEW_CHANNEL, r) &&
        n.can(eg.xBc.READ_MESSAGE_HISTORY, r) &&
        !l.isBlockedForMessage(e.message) &&
        !l.isIgnoredForMessage(e.message)
    );
}
function ef(e) {
    let { query: t, result: s } = e,
        r = (0, $.I2)({ location: "useRenderedSearchResults" }).enabled,
        i = eu.rs.useSetting(),
        o = l.useId(),
        c = l.useRef([]),
        d = (0, a.bG)(
            [X.A],
            () =>
                ec(
                    s.citations.map((e) => e.message),
                    t.queryText,
                    r,
                    [X.A],
                ),
            [s.citations, t.queryText, r],
            a.My,
        ),
        u = l.useCallback(
            (e, t) => {
                let n = s.citations[t];
                null != n &&
                    (async function (e) {
                        if (!ep(e)) return;
                        let t = async () => {
                            if ("conversation" === e.sourceType)
                                try {
                                    let t = await (0, Z.Al)({
                                        channelId: e.channelId,
                                        conversationId: (0, ex.E2)(e.sourceId),
                                        messageId: e.messageId,
                                    });
                                    if (!ep(e)) return;
                                    if (t) {
                                        ((0, et.iN)(e.channelId), (0, Y.Rl)());
                                        return;
                                    }
                                } catch {}
                            ep(e) && (0, et.ci)(e.channelId, e.messageId);
                        };
                        (0, ee.A)(e.message, () => {
                            t();
                        }) && (await t());
                    })(n);
            },
            [s.citations],
        ),
        h = (0, Q.Ay)({
            navId: o,
            itemCount: d.length,
            focusedIndex: 0,
            focusOnMount: !1,
            setFocus: (e) => {
                K.Ay.keyboardModeEnabled && document.getElementById(e)?.focus();
            },
            onSelect: (e) => c.current[e]?.jumpTo(),
        }),
        m = l.useMemo(() => {
            let e = [];
            return (
                d.forEach((t, s) => {
                    let n = eh.A.getChannel(t.channel_id);
                    if (null == n) return;
                    let l = e[e.length - 1];
                    ((null == l || l.channel.id !== n.id) &&
                        ((l = { channel: n, messages: [], startIndex: s }), e.push(l)),
                        l.messages.push(t));
                }),
                e
            );
        }, [d]),
        x = l.useMemo(() => (0, U.wG)(t.queryText), [t.queryText]),
        g = l.useMemo(() => (0, U.th)(t.queryText), [t.queryText]),
        p = l.useCallback(() => {}, []);
    return (0, n.jsx)("div", {
        ...h.getContainerProps(),
        className: L.zH,
        children: (0, n.jsx)(J.G.Provider, {
            value: g,
            children: m.map((e) =>
                (0, n.jsx)(
                    es.l,
                    {
                        ...e,
                        highlighter: x,
                        resultRefs: c,
                        totalResults: d.length,
                        scrollTo: p,
                        renderEmbeds: i,
                        offset: 0,
                        jumpToMessage: u,
                        listNavigator: h,
                        resultIdPrefix: o,
                    },
                    `${e.channel.id}-${e.startIndex}`,
                ),
            ),
        }),
    });
}
var ej = s(765178),
    ek = s(939249),
    eS = s(7689),
    eA = s(753806);
s(163839);
var eE = s(768570);
function eb(e) {
    let { query: t, suggestions: s, isEmptyScreen: r = !1, hasError: i = !1 } = e;
    return (
        l.useEffect(() => {
            r && ej.O.announce(R.intl.string(i ? R.t.uvDZBZ : R.t.V6nAfF), "polite");
        }, [r, i]),
        (0, n.jsxs)("div", {
            className: L.Gn,
            children: [
                (0, n.jsx)(f.D, {
                    variant: "heading-sm/semibold",
                    color: "text-default",
                    children: R.intl.string(H.default.bzswFC),
                }),
                (0, n.jsx)("div", {
                    className: L.aG,
                    children: s.map((e) =>
                        (0, n.jsxs)(
                            ek.D,
                            {
                                className: L.bC,
                                onClick: () => {
                                    let s;
                                    return (
                                        (s = (0, ea._o)(t.searchQueryString)
                                            .filter((e) => e.type === eg.LWr.FILTER_IN || e.type === eg.LWr.ANSWER_IN)
                                            .map((e) => t.searchQueryString.slice(e.start, e.end))
                                            .join(" ")),
                                        void (eA.A.dispatchSetSearchQuery({
                                            query: [s, e.suggestedSearchText].filter(Boolean).join(" "),
                                            replace: !0,
                                            performSearch: !0,
                                            searchQuerySource: eE.Q_.SEARCH_RESULTS_HINT,
                                        }),
                                        (0, g.A)(t, _.A, 3))
                                    );
                                },
                                children: [
                                    (0, n.jsx)(eS.MagnifyingGlassIcon, {
                                        size: "sm",
                                        color: "currentColor",
                                        className: L.Av,
                                    }),
                                    (0, n.jsx)(j.E, {
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
                r &&
                    (0, n.jsx)("div", {
                        className: L.p3,
                        children: i
                            ? (0, n.jsx)(j.E, {
                                  variant: "body-sm/semibold",
                                  color: "text-muted",
                                  children: R.intl.string(R.t.uvDZBZ),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(f.D, {
                                          variant: "heading-sm/semibold",
                                          color: "text-muted",
                                          children: R.intl.string(H.default["HX/WYf"]),
                                      }),
                                      (0, n.jsx)(j.E, {
                                          variant: "body-sm/semibold",
                                          color: "text-muted",
                                          children: R.intl.string(H.default["0ySxbu"]),
                                      }),
                                  ],
                              }),
                    }),
            ],
        })
    );
}
var eM = s(705912),
    eI = s(624018),
    eC = s(188567),
    ey = s(868974),
    ev = s(224467),
    eR = s(616252),
    eL = s(775427),
    eF = s(477654),
    eN = s(145331),
    eT = s(43105),
    e_ = s(821609),
    eD = s(783977),
    ew = s(289873),
    eH = s(28863),
    ez = s(265872),
    eW = s(165862),
    eO = s(477782),
    eq = s(625903),
    eB = s(112173),
    eP = s(93055),
    eG = s(975571),
    eV = s(121806),
    eQ = s(49999),
    eU = s(898029);
function eK(e) {
    let t,
        {
            searchContext: s,
            searchMode: r,
            onSearchModeChange: c,
            totalResults: d,
            isIndexing: u,
            isSearching: m,
            documentsIndexed: x,
            selectedChannelId: g,
        } = e,
        p =
            ((t = (0, a.bG)([eo.A], () => {
                let e = (0, ea.bS)(s);
                return eo.A.getSearchResultsQueryString(e);
            })),
            l.useMemo(() => (0, ea._o)(t ?? ""), [t])),
        { totalFilters: f } = (0, eV.vj)(p, s),
        j = l.useMemo(() => {
            if (s.type === eg.I4_.DMS) {
                let e = (0, ea.Zf)(p),
                    t = e.channel_id?.length ?? 0;
                return t > 0 ? R.intl.format(R.t.A2dqWG, { filterCount: t }) : R.intl.string(R.t.tc619d);
            }
            return null;
        }, [s.type, p]),
        [k, S] = l.useState(null),
        A = l.useMemo(() => (m ? [] : [o.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [m]),
        [E, b] = (0, h.kn)(A),
        M = E === o.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        I = l.useCallback(
            (e) => {
                (null != e && M && b(eQ.i.USER_DISMISS), S(e));
            },
            [M, b, S],
        ),
        C = l.useCallback(
            (e) => {
                b("user:explicit" === e ? eQ.i.USER_DISMISS : eQ.i.AUTO_DISMISS);
            },
            [b],
        ),
        y = l.useCallback(() => {
            (I(null), eA.A.openSearchFiltersModal(s));
        }, [I, s]),
        v = l.useMemo(() => (f > 0 ? R.intl.format(R.t.uaR4sI, { filterCount: f }) : R.intl.string(R.t.UdhTtk)), [f]),
        L = !(0, eP.DZ)() && (s.type === eg.I4_.DMS || s.type === eg.I4_.CHANNEL);
    return (0, n.jsxs)("header", {
        className: i()(eU.wL, { [eU.g$]: null != j }),
        children: [
            (0, n.jsx)("div", {
                className: eU.TN,
                role: "status",
                children: (0, n.jsx)(eZ, {
                    totalResults: d,
                    subtitle: j,
                    isIndexing: u,
                    isSearching: m,
                    documentsIndexed: x,
                }),
            }),
            (0, n.jsxs)("div", {
                className: eU.vd,
                children: [
                    (0, n.jsx)(e_.$, {
                        variant: "secondary",
                        onClick: y,
                        text: v,
                        icon: eD.FiltersHorizontalIcon,
                        size: "sm",
                    }),
                    (0, n.jsx)(e2, {
                        searchMode: r,
                        onSearchModeChange: c,
                        isPopoutOpen: "sort" === k,
                        setOpenPopout: I,
                    }),
                    L &&
                        (0, n.jsx)(e1, {
                            searchContext: s,
                            selectedChannelId: g,
                            isPopoutOpen: "settings" === k,
                            setOpenPopout: I,
                            isPopoverVisible: M,
                            onPopoverRequestClose: C,
                        }),
                ],
            }),
        ],
    });
}
function eZ(e) {
    let { totalResults: t, subtitle: s, isSearching: l, isIndexing: r, documentsIndexed: i } = e;
    return r
        ? (0, n.jsx)(eX, { documentsIndexed: i })
        : l
          ? (0, n.jsx)(e$, {})
          : (0, n.jsx)(eJ, { totalResults: t, subtitle: s });
}
function eY() {
    return (0, n.jsx)("div", {
        className: eU.zp,
        children: (0, n.jsx)(ew.y, { type: ew.y.Type.SPINNING_CIRCLE, className: eU.u1, itemClassName: eU.pu }),
    });
}
function eX(e) {
    let { documentsIndexed: t } = e;
    return (0, n.jsx)(k.m, {
        asContainer: !0,
        text: R.intl.formatToPlainString(R.t["4Y3O+O"], { count: t ?? "" }),
        children: (0, n.jsxs)("div", {
            className: eU.q_,
            children: [
                (0, n.jsx)(j.E, {
                    variant: "body-md/medium",
                    color: "text-muted",
                    children: (0, n.jsx)(eH.Anchor, {
                        className: eU.Zd,
                        href: eG.A.getArticleURL(eg.MVz.SEARCH_INDEXING),
                        children: R.intl.string(R.t["G3EA+4"]),
                    }),
                }),
                (0, n.jsx)(eY, {}),
            ],
        }),
    });
}
function e$() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(j.E, { variant: "body-md/medium", color: "text-default", children: R.intl.string(R.t.uixzLf) }),
            (0, n.jsx)(eY, {}),
        ],
    });
}
function eJ(e) {
    let { totalResults: t, subtitle: s } = e,
        l = (0, n.jsx)(j.E, {
            variant: "body-md/medium",
            color: "text-strong",
            children: R.intl.format(R.t.ZGVL3g, { count: t }),
        });
    return null != s
        ? (0, n.jsxs)("div", {
              className: eU.hy,
              children: [l, (0, n.jsx)(j.E, { variant: "body-xs/medium", color: "text-subtle", children: s })],
          })
        : l;
}
function e1(e) {
    let {
            searchContext: t,
            selectedChannelId: s,
            isPopoutOpen: r,
            setOpenPopout: i,
            onPopoverRequestClose: a,
            isPopoverVisible: o,
        } = e,
        c = l.useRef(null),
        d = eu.Hu.useSetting(),
        u = l.useCallback(
            (e) => {
                if (d !== e) {
                    if (
                        ((0, eN._k)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: eu.Hu.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: eN.vy.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: eg.I4_.DMS };
                        eA.A.transitionStateToSearchContext(t, e, eA.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = { type: eg.I4_.CHANNEL, channelId: s };
                        eA.A.transitionStateToSearchContext(t, e);
                    }
                    (i(null), eu.Hu.updateSetting(e));
                }
            },
            [d, i, t, s],
        ),
        [h, m] = l.useMemo(
            () => [
                d ? R.intl.string(R.t["8lklch"]) : R.intl.string(R.t.ji3jTF),
                d ? R.intl.string(R.t.RMQZCa) : R.intl.string(R.t["v/PagC"]),
            ],
            [d],
        ),
        x = l.useMemo(() => ({ align: "end" }), []);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(ez.Y, {
                targetElementRef: c,
                shouldShow: r,
                animation: ez.Y.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => i(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(eW.W, {
                        "data-menu-migrated-auto": !0,
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": R.intl.string(R.t.fb59v0),
                        onSelect: () => i(null),
                        children: (0, n.jsxs)(
                            eO.rX,
                            {
                                label: R.intl.string(R.t["/tMwrA"]),
                                children: [
                                    (0, n.jsx)(eO.iD, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: R.intl.string(R.t.jRkYAh),
                                        checked: !d,
                                        action: () => u(!1),
                                    }),
                                    (0, n.jsx)(eO.iD, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: R.intl.string(R.t["lWpJ/t"]),
                                        checked: d,
                                        action: () => u(!0),
                                    }),
                                ],
                            },
                            "xdm-search-items",
                        ),
                    });
                },
                children: (e) =>
                    (0, n.jsx)(S.K, {
                        ...e,
                        buttonRef: c,
                        variant: "secondary",
                        icon: eq.SettingsIcon,
                        onClick: () => {
                            i(r ? null : "settings");
                        },
                        "aria-label": R.intl.string(R.t["3D5yo/"]),
                        size: "sm",
                    }),
            }),
            (0, n.jsx)(eT.A, {
                targetElementRef: c,
                shouldShow: o,
                onRequestClose: a,
                title: h,
                body: m,
                caretConfig: x,
                badge: "new",
            }),
        ],
    });
}
function e2(e) {
    let { searchMode: t, onSearchModeChange: s, isPopoutOpen: r, setOpenPopout: i } = e,
        a = l.useRef(null),
        o = l.useMemo(
            () => [
                { label: R.intl.string(R.t.CbaapP), value: eg.BBH.NEWEST },
                { label: R.intl.string(R.t.OukXZj), value: eg.BBH.OLDEST },
                { label: R.intl.string(R.t.q8gB52), value: eg.BBH.MOST_RELEVANT },
            ],
            [],
        ),
        c = l.useCallback(
            (e) => {
                (i(null), s(e));
            },
            [i, s],
        );
    return (0, n.jsx)(ez.Y, {
        targetElementRef: a,
        shouldShow: r,
        animation: ez.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => i(null),
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(eW.W, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: s,
                "aria-label": R.intl.string(R.t.utp2hS),
                onSelect: () => i(null),
                children: (0, n.jsx)(
                    eO.rX,
                    {
                        children: o.map((e) => {
                            let { label: s, value: l } = e;
                            return (0, n.jsx)(
                                eO.iD,
                                {
                                    group: "sort-by",
                                    id: `sort-by-option-${l}`,
                                    label: s,
                                    action: () => c(l),
                                    checked: t === l,
                                },
                                l,
                            );
                        }),
                    },
                    "sort-by",
                ),
            });
        },
        children: (e) =>
            (0, n.jsx)(e_.$, {
                ...e,
                buttonRef: a,
                variant: "secondary",
                icon: eB.ArrowsUpDownIcon,
                onClick: () => {
                    i(r ? null : "sort");
                },
                text: R.intl.string(R.t.XvNMNk),
                "aria-label": R.intl.string(R.t.XvNMNk),
                size: "sm",
            }),
    });
}
var e0 = s(481613),
    e3 = s.n(e0),
    e5 = s(615300),
    e6 = s(569286);
function e8(e) {
    function t(e) {
        return e.interpolate({ inputRange: [0, 1], outputRange: ["0px", "1px"] });
    }
    return { transform: [{ translateX: t(e.x) }, { translateY: t(e.y) }] };
}
class e9 extends l.Component {
    state = { x: new e5.A.Value(0), y: new e5.A.Value(0) };
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
    shouldLoop = () => this._isMounted && !this.props.reducedMotion && "Firefox" !== e3().name;
    startAnimations() {
        if (!this.shouldLoop()) return;
        let { x: e, y: t } = this.state;
        (e5.A.animate(e, {
            loop: !0,
            toValueMin: -74,
            toValueMax: 95,
            overshootClamping: !0,
            friction: 5,
            tension: 1,
            shouldLoop: this.shouldLoop,
        }),
            e5.A.animate(t, {
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
            className: e6.dJ,
            children: [
                (0, n.jsx)("div", { className: e6.LU }),
                (0, n.jsxs)("svg", {
                    className: e6.GR,
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
                                            children: (0, n.jsx)(e5.A.use, {
                                                style: e8(this.state),
                                                className: e6.dK,
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
                                (0, n.jsxs)(e5.A.g, {
                                    className: e6.KS,
                                    style: e8(this.state),
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
function e4() {
    let e = (0, a.bG)([K.Ay], () => K.Ay.useReducedMotion);
    return (0, n.jsx)(e9, { reducedMotion: e });
}
var e7 = s(876689),
    te = s(6993),
    tt = s(192308),
    ts = s(670455),
    tn = s(596500);
function tl(e) {
    let { rating: t, onClick: s } = e,
        r = t === ts.P0.BAD ? T.ThumbsDownIcon : N.ThumbsUpIcon,
        i = l.useCallback(() => {
            s(t);
        }, [s, t]);
    return (0, n.jsx)(ek.D, {
        onClick: i,
        className: tn.zc,
        children: (0, n.jsx)(r, { size: "md", color: "currentColor", className: tn.Kk }),
    });
}
let tr = function (e) {
    let { searchContext: t, dismissFeedbackEntrypoint: r } = e;
    l.useEffect(() => {
        (0, eN.J$)({ searchContext: t });
    }, [t]);
    let i = l.useCallback(
        (e) => {
            (r(),
                (0, tt.mM)(async () => {
                    let { default: l } = await Promise.all([s.e(139032), s.e(155925), s.e(964747)]).then(
                        s.bind(s, 770950),
                    );
                    return (s) => (0, n.jsx)(l, { ...s, searchContext: t, rating: e });
                }));
        },
        [r, t],
    );
    return (0, n.jsxs)("div", {
        className: tn.kL,
        children: [
            (0, n.jsx)(j.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: R.intl.string(R.t["I+4OJC"]),
            }),
            (0, n.jsxs)("div", {
                className: tn.Pt,
                children: [
                    (0, n.jsx)(tl, { rating: ts.P0.GOOD, onClick: i }),
                    (0, n.jsx)(tl, { rating: ts.P0.BAD, onClick: i }),
                ],
            }),
        ],
    });
};
var ti = s(36537);
class ta extends l.Component {
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
                l = 0,
                r = 0;
            e.props.messages.forEach((e) => {
                (null != e.content && "" !== e.content && (s++, /https?:\/\/[^\s]+/.test(e.content) && r++),
                    null != e.embeds && e.embeds.length > 0 && l++,
                    null != e.attachments && e.attachments.length > 0 && n++);
            });
            let i = (0, ea.bS)(e.props.searchContext);
            0 === s
                ? (0, eN.oK)({
                      searchContext: e.props.searchContext,
                      searchRequestAnalyticsId: e.props.searchRequestAnalyticsId,
                      searchQueryString: eA.A.getSearchInputText(e.props.searchContext),
                      searchQuery: eo.A.getSearchResultsQuery(i),
                  })
                : (0, eN.H9)({
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
                      pageNumLinks: r,
                      pageNumEmbeds: l,
                      pageNumAttachments: n,
                      searchQueryString: eA.A.getSearchInputText(e.props.searchContext),
                      searchQuery: eo.A.getSearchResultsQuery(i),
                  });
        };
    })();
    render() {
        return null;
    }
}
function to(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", { className: ti.Oq, children: (0, n.jsx)("div", { className: ti.de, children: t }) });
}
function tc(e) {
    let { searchContext: t, isFeedbackVisible: s, dismissFeedbackEntrypoint: l } = e;
    return s ? (0, n.jsx)(tr, { searchContext: t, dismissFeedbackEntrypoint: l }) : null;
}
function td(e) {
    let {
            suppressEmptyState: t,
            smartEmptyState: s,
            messages: l,
            blockCount: r,
            ignoreCount: a,
            search: o,
            searchContext: c,
            renderEmbeds: d,
            onClick: u,
            onScrollTo: h,
            onBlockedResultsClick: m,
            searchRequestAnalyticsId: x,
            searchResultsQuery: g,
        } = e,
        { totalResults: p, isSearching: f, isIndexing: j, hasError: k } = o;
    if (k)
        return 0 === o.offset && t
            ? null
            : 0 === o.offset && null != s
              ? s
              : (0, n.jsxs)(to, {
                    children: [
                        (0, n.jsx)("div", { className: ti.M6 }),
                        (0, n.jsx)("div", { className: i()(ti.pZ, ti.gJ), children: R.intl.string(R.t.uvDZBZ) }),
                    ],
                });
    if (j) {
        let e = (0, ea.Y7)(c);
        return (0, n.jsxs)(to, {
            children: [(0, n.jsx)(e4, {}), (0, n.jsx)("div", { className: (ti.pZ, ti.Jy), children: e })],
        });
    }
    if (f) return null;
    if (p > 0)
        return (0, n.jsx)(te.A, {
            search: o,
            messages: l,
            onClick: u,
            blockCount: r,
            ignoreCount: a,
            renderEmbeds: d,
            scrollTo: h,
            onBlockedResultsClick: m,
            searchRequestAnalyticsId: x,
            searchResultsQuery: g,
        });
    if (t) return null;
    if (null != s) return s;
    let { showNoResultsAlt: S } = o,
        A = S ? R.intl.string(R.t["VrK/2R"]) : R.intl.string(R.t.V6nAfF);
    return (0, n.jsxs)(to, {
        children: [
            (0, n.jsx)("div", { className: i()(ti.$l, { [ti.CC]: S }) }),
            (0, n.jsx)("div", { className: i()(ti.pZ, ti.wV, { [ti.CC]: S }), children: A }),
        ],
    });
}
let tu = [],
    th = l.memo(function (e) {
        let t,
            s,
            r,
            {
                smartSearchKeywordState: i,
                searchContext: u,
                search: m,
                renderEmbeds: f,
                searchRequestAnalyticsId: j,
                messages: k,
                blockCount: S,
                ignoreCount: A,
                isFeedbackVisible: E,
                dismissFeedbackEntrypoint: b,
                onSearchModeChange: M,
                onPageChange: I,
                searchMode: C,
                onBlockedResultsClick: y,
                searchResultsQuery: v,
                searchResultsQueryString: L,
                selectedChannelId: F,
            } = e,
            N = i.isInitialFetchComplete && !i.isSearching && !i.isIndexing,
            T = i.totalResults > 0 && !(i.hasError && 0 === i.offset),
            [D, H] = l.useState(null),
            z = D?.submissionId;
        l.useLayoutEffect(() => {
            N && z !== i.searchSubmissionId && H({ submissionId: i.searchSubmissionId, hasKeywordResults: T });
        }, [N, z, i.searchSubmissionId, T]);
        let W = z === i.searchSubmissionId ? D : null,
            O = N || null != W,
            q = !O && !i.isIndexing,
            B = N && 0 === i.offset ? T : (W?.hasKeywordResults ?? T),
            P = 0 === m.offset,
            {
                query: G,
                status: Q,
                result: U,
                citationsCount: K,
            } = ((t = l.useMemo(() => (null == L || "" === L.trim() ? null : (0, eI.W)(u, L)), [u, L])),
            (s = (0, eM.fu)(t?.guildId, "fetch_answer")),
            (r = (0, a.bG)(
                [w.A, eh.A, em.A, er.A],
                () => {
                    let e = s && null != t ? w.A.getAnswer(t.guildId, t.requestKey) : null;
                    if (null == e || null == t) return { status: x.o.NOT_QUALIFIED, result: null, citationsCount: 0 };
                    let n = (0, ex.Vw)(t.searchContext, t.searchQueryString, B, w.A),
                        l = e.citations.filter((e) => ep(e, [eh.A, em.A, er.A])).slice(0, n),
                        r = e.status === x.o.LOADED && 0 === l.length ? x.o.EMPTY : e.status;
                    return {
                        status: r,
                        result: { ...e, status: r, citations: l },
                        citationsCount: r === x.o.LOADED ? l.length : 0,
                    };
                },
                [s, t, B],
                a.My,
            )),
            { query: t, ...r }),
            Z = Q === x.o.LOADING || Q === x.o.LOADED,
            Y = Q === x.o.EMPTY || Q === x.o.ERROR,
            X = Y ? G : null,
            { suggestedSearches: $ } = (0, p.H)(X, { source: B ? "smart_search_row" : "error_screen" });
        l.useEffect(() => {
            null == X || i.isSearching || (0, g.E)(X, _.A);
        }, [X, i.isSearching]);
        let J =
                P && null != G && Y && $.length > 0
                    ? (0, n.jsx)(eb, {
                          query: G,
                          suggestions: $,
                          isEmptyScreen: !B && !i.isIndexing,
                          hasError: i.hasError,
                      })
                    : null,
            ee =
                Z && null != G && null != U
                    ? (0, n.jsx)(
                          V,
                          {
                              isVisible: P,
                              searchSubmissionId: i.searchSubmissionId,
                              query: G,
                              result: U,
                              isKeywordLoading: q,
                              isKeywordSearchSettled: O,
                              hasKeywordResults: B,
                              renderCitations: (e, t) => (0, n.jsx)(ef, { query: e, result: t }),
                          },
                          G.requestKey,
                      )
                    : !q && (B || i.isIndexing)
                      ? J
                      : null,
            et = l.useRef(null),
            es = l.useCallback(() => {
                eA.A.cleanUpSearchState(u);
            }, [u]);
        l.useEffect(
            () => (
                eC._.subscribe(eg.jej.SEARCH_RESULTS_CLOSE, es),
                () => {
                    eC._.unsubscribe(eg.jej.SEARCH_RESULTS_CLOSE, es);
                }
            ),
            [es],
        );
        let en = l.useRef(m.showBlockedResults);
        l.useEffect(() => {
            if (en.current !== m.showBlockedResults) {
                en.current = m.showBlockedResults;
                let e = et.current;
                null != e && e.scrollToBottom();
            }
        }, [m.showBlockedResults]);
        let el = l.useCallback((e, t, s) => {
                let n = et.current;
                if (null == n) return;
                let l = n.getScrollerState().scrollTop - e;
                n.scrollTo({ to: l, animate: t, callback: s });
            }, []),
            ei = null != L ? `${C}:${L}` : void 0,
            {
                paginationTotalCount: ec,
                paginationMaxVisiblePage: ed,
                isMaxVisiblePageWarningVisible: eu,
                renderPageWrapper: ej,
            } = (0, eF.o)({
                totalResults: m.totalResults,
                isSearching: m.isSearching,
                offset: m.offset,
                searchResultsPaginationKey: ei,
            }),
            ek = l.useCallback(
                (e) => {
                    e === C ||
                        m.isSearching ||
                        ((0, eN.L6)({ searchContext: u, searchRequestAnalyticsId: j, mode: e }), M(e));
                },
                [M, m.isSearching, u, C, j],
            ),
            eS = l.useCallback(
                (e, t) => {
                    let s = eh.A.getChannel(e.channel_id),
                        n = null != s ? s.getGuildId() : null,
                        l = (0, ea.bS)(u),
                        { offset: r, totalResults: i } = m;
                    (0, eN.i4)({
                        searchContext: u,
                        searchRequestAnalyticsId: j,
                        guildId: n,
                        channelId: e.channel_id,
                        messageId: e.id,
                        pageResults: null != k ? k.length : null,
                        totalResults: i,
                        limit: 25,
                        page: Math.floor(r / 25) + 1,
                        offset: r,
                        index: t,
                        searchQueryString: eA.A.getSearchInputText(u),
                        searchQuery: eo.A.getSearchResultsQuery(l),
                    });
                },
                [m, u, j, k],
            ),
            eE = l.useCallback(
                (e) => {
                    ((0, eN.kq)({ searchContext: u, searchRequestAnalyticsId: j, newPageIndex: e }), I(e));
                },
                [I, u, j],
            ),
            ey = (0, a.yK)([eo.A], () => {
                if (0 !== m.offset) return tu;
                let e = k.length;
                if (e < 10) return tu;
                let t = 0;
                if (
                    (k.forEach((e) => {
                        (e.author.bot || null != e.webhookId) && t++;
                    }),
                    t / e < 0.75)
                )
                    return tu;
                let s = (0, ea.bS)(u),
                    n = eo.A.getSearchResultsQueryString(s);
                return (0, ea._o)(n ?? "").some((e) => e.type === eg.LWr.FILTER_AUTHOR_TYPE)
                    ? tu
                    : [o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT];
            }),
            [eR, eL] = (0, h.kn)(ey),
            eT = eR === o.M.SEARCH_AUTHOR_TYPE_SEARCH_RESULTS_HINT,
            e_ = l.useCallback(() => {
                if (m.isSearching) return;
                let e = `${ev.Ay[eg.LWr.FILTER_AUTHOR_TYPE].key} ${R.intl.string(R.t.tPZo4p)} `;
                eA.A.appendToSearchInputText(u, e);
            }, [u, m.isSearching]);
        return (0, n.jsxs)("section", {
            className: ti.zt,
            "aria-label": R.intl.string(R.t["zkoeq/"]),
            children: [
                (0, n.jsx)(eK, {
                    searchContext: u,
                    searchMode: C,
                    onSearchModeChange: ek,
                    totalResults: m.totalResults + K,
                    isSearching: m.isSearching,
                    isIndexing: m.isHistoricalIndexing,
                    documentsIndexed: m.documentsIndexed,
                    selectedChannelId: F,
                }),
                (0, n.jsxs)(c.Ch, {
                    ref: et,
                    className: ti.XG,
                    children: [
                        ee,
                        eu &&
                            !m.isSearching &&
                            (0, n.jsx)("div", {
                                className: ti.VC,
                                children: (0, n.jsx)(d.w, {
                                    type: "warning",
                                    message: R.intl.formatToPlainString(R.t["E+2azY"], { maxPages: ed }),
                                    role: "status",
                                }),
                            }),
                        eT &&
                            (0, n.jsx)("div", {
                                className: ti.QR,
                                children: (0, n.jsx)(d.w, {
                                    type: "info",
                                    message: R.intl.format(R.t["gQeg/R"], { handleClick: e_ }),
                                    role: "none",
                                }),
                            }),
                        (0, n.jsx)(td, {
                            suppressEmptyState: P && !B && Z,
                            smartEmptyState: B || m.isSearching ? null : J,
                            messages: k,
                            blockCount: S,
                            ignoreCount: A,
                            search: m,
                            searchContext: u,
                            renderEmbeds: f,
                            onClick: eS,
                            onScrollTo: el,
                            onBlockedResultsClick: y,
                            searchRequestAnalyticsId: j,
                            searchResultsQuery: v,
                        }),
                    ],
                }),
                (0, n.jsx)(tc, { searchContext: u, isFeedbackVisible: E, dismissFeedbackEntrypoint: b }),
                ec > 25 &&
                    (0, n.jsx)(e7.A, {
                        className: ti.cu,
                        onPageChange: eE,
                        offset: m.offset,
                        totalCount: ec,
                        pageSize: 25,
                        renderPageWrapper: ej,
                    }),
            ],
        });
    });
function tm(e) {
    let { searchContext: t, selectedChannelId: s } = e,
        { isFeedbackVisible: r, dismissFeedbackEntrypoint: i } = (function () {
            let [e, t] = l.useState(!1),
                s = (0, ey.H)({ location: "SearchResults" });
            return (
                (0, u.Ay)(() => {
                    s &&
                        m.A.possiblyShowFeedbackModal(
                            ts.MW.SEARCH_RESULTS,
                            () => t(!0),
                            () => t(!1),
                        );
                }),
                {
                    dismissFeedbackEntrypoint: l.useCallback(() => {
                        t(!1);
                    }, []),
                    isFeedbackVisible: e,
                }
            );
        })(),
        o = (0, ea.bS)(t),
        c = (0, a.cf)([ei.A, eo.A], () => ({
            searchSubmissionId: eo.A.getSearchSubmissionId(o),
            isInitialFetchComplete: ei.A.getIsInitialFetchComplete(o) ?? !1,
            isSearching: ei.A.getIsFetching(o) ?? !1,
            isIndexing: ei.A.getIsIndexing(o) ?? !1,
            isHistoricalIndexing: ei.A.getIsHistoricalIndexing(o) ?? !1,
            documentsIndexed: ei.A.getDocumentsIndexed(o),
            offset: eo.A.getSearchResultsOffset(o) ?? 0,
            totalResults: ei.A.getTotalCount(o) ?? 0,
            hasError: null != ei.A.getError(o),
            showBlockedResults: eo.A.shouldShowBlockedResults(o),
            showNoResultsAlt: eo.A.shouldShowNoResultsAlt(o),
        })),
        d = (0, a.bG)([ei.A], () => ei.A.getAnalyticsId(o)),
        {
            renderedMessages: h,
            ignoreCount: x,
            blockCount: g,
        } = (function (e) {
            let { searchContext: t } = e,
                s = (0, $.I2)({ location: "useRenderedSearchResults" }).enabled,
                n = (0, a.bG)(
                    [eo.A, ei.A, X.A],
                    () => {
                        let e = (0, ea.bS)(t),
                            n = eo.A.getSearchResultsQuery(e),
                            l = ei.A.getMessages(e);
                        return null == n || null == l || 0 === l.length ? ed : ec(l, (0, ea.dX)(n) ?? "", s, [X.A]);
                    },
                    [t, s],
                    a.My,
                ),
                { blockCount: l, ignoreCount: r } = (0, a.cf)([er.A], () => {
                    let e = 0,
                        t = 0;
                    return (
                        n.forEach((s) => {
                            let n = er.A.isBlockedForMessage(s),
                                l = er.A.isIgnoredForMessage(s);
                            n ? e++ : l && t++;
                        }),
                        { blockCount: e, ignoreCount: t }
                    );
                });
            return { renderedMessages: n, blockCount: l, ignoreCount: r };
        })({ searchContext: t }),
        p = (0, a.bG)([eo.A], () => eo.A.getSearchMode(o) ?? eg.BBH.NEWEST),
        f = l.useCallback(
            (e) => {
                if (c.isSearching) return;
                eR.A.updateSearchMode(t, e);
                let s = eA.A.getSearchInputText(t);
                null != s && eA.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: 0 });
            },
            [c.isSearching, t],
        ),
        j = l.useCallback(
            (e) => {
                let s = eA.A.getSearchInputText(t);
                null != s && eA.A.fetchMessages({ searchContext: t, searchQueryString: s, offset: 25 * e });
            },
            [t],
        ),
        k = (0, a.bG)([eo.A], () => {
            let e = (0, ea.bS)(t);
            return eo.A.getSearchResultsQuery(e);
        }),
        S = (0, a.bG)([eo.A], () => {
            let e = (0, ea.bS)(t);
            return eo.A.getSearchResultsQueryString(e);
        }),
        A = l.useCallback((e) => eR.A.setShowBlockedResults(t, e), [t]),
        E = l.useDeferredValue(h),
        b = l.useDeferredValue(c),
        M = l.useDeferredValue(d);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(th, {
                smartSearchKeywordState: c,
                searchContext: t,
                search: b,
                searchRequestAnalyticsId: M,
                messages: E,
                ignoreCount: x,
                blockCount: g,
                renderEmbeds: eu.rs.useSetting(),
                isFeedbackVisible: r,
                dismissFeedbackEntrypoint: i,
                onPageChange: j,
                onSearchModeChange: f,
                searchMode: p,
                onBlockedResultsClick: A,
                searchResultsQuery: k,
                searchResultsQueryString: S,
                selectedChannelId: s,
            }),
            (0, n.jsx)(ta, {
                searchContext: t,
                searchRequestAnalyticsId: M,
                messages: E,
                searchOffset: b.offset,
                searchLimit: 25,
                searchHasError: b.hasError,
                searchTotalResults: b.totalResults,
                searchIsIndexing: b.isHistoricalIndexing,
                isSearching: b.isSearching,
            }),
        ],
    });
}
function tx(e) {
    let { guildId: t, channelId: s } = e,
        l = (0, eL.J)({ guildId: t, channelId: s });
    return null == l ? null : (0, n.jsx)(tm, { searchContext: l, selectedChannelId: s });
}
