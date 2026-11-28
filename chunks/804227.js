(r.r(t), r.d(t, { Search: () => ti, default: () => tc }));
var l,
    n = r(477900),
    s = r(582128),
    a = r(64015),
    o = r.n(a),
    i = r(855986),
    c = r(192308),
    u = r(775602),
    d = r(138298),
    h = r(799704),
    f = r(734057),
    g = r(71393),
    m = r(309010),
    x = r(256796),
    p = r(517381),
    S = r(822382),
    y = r(902008),
    A = r(617713),
    b = r(616252),
    E = r(753806),
    I = r(775427),
    R = r(145331);
r(321073);
var T = r(503698),
    j = r.n(T),
    C = r(719442),
    v = r(235599),
    L = r(765178),
    N = r(265872),
    _ = r(559106),
    F = r(884496),
    O = r(955572),
    k = r(915089),
    M = r(188567),
    P = r(224467),
    W = r(65600),
    w = r(536637),
    H = r.n(w),
    D = r(95362),
    Q = r(939538),
    z = r(692986),
    $ = r(783977),
    q = r(834730),
    G = r(7689),
    U = r(778712),
    B = r(809291),
    Y = r(705912),
    K = r(133986),
    Z = r(672499),
    V = r(624018),
    X = r(351906),
    J = r(5990),
    ee = r(939249),
    et = r(676068);
function er(e) {
    let { icon: t, label: r, sublabel: l, onClick: s, itemProps: a } = e;
    return (0, n.jsx)(ee.D, {
        className: et.DB,
        onClick: s,
        ...a,
        children: (0, n.jsxs)("div", {
            className: et.AS,
            children: [t, null == l ? r : (0, n.jsxs)("div", { children: [r, l] })],
        }),
    });
}
var el = r(866665),
    en = r(241326),
    es = r(97808),
    ea = r(276293),
    eo = r(950305),
    ei = r(935063),
    ec = r(114212),
    eu = r(967198),
    ed = r(287809),
    eh = r(562153),
    ef = r(315059),
    eg = r(121806),
    em = r(988665),
    ex = r(652215),
    ep = r(792996);
function eS(e, t) {
    return { type: e, data: t };
}
function ey(e) {
    switch (e) {
        case ex.x2k.HISTORY:
            return ep.intl.string(ep.t.tSZd5c);
        case ex.LWr.FILTER_FROM:
            return ep.intl.string(ep.t.catERA);
        case ex.LWr.FILTER_MENTIONS:
            return ep.intl.string(ep.t["l3K4B/"]);
        case ex.LWr.FILTER_IN:
            return ep.intl.string(ep.t.vHyCgl);
        case ex.LWr.FILTER_HAS:
            return ep.intl.string(ep.t.IC7gHM);
        default:
            return "";
    }
}
function eA(e) {
    let { modeType: t, result: r, group: l } = e,
        { text: n, channel: s, group: a } = r,
        o = n;
    if ((null != s && (o = (0, S.TZ)(o)), t === ex.o$q.FILTER_ALL)) {
        let e = P.Ay[a ?? l];
        e?.key != null && e?.key !== "" && (o = `${e.key} ${o}`);
    }
    return o;
}
var eb = r(768570);
function eE(e) {
    let { icon: t, label: r, sublabel: l, onSelect: s, navId: a, index: o, selected: i } = e;
    return (0, n.jsx)(er, {
        icon: t,
        label: r,
        sublabel: l,
        onClick: function () {
            s({ searchAutocompleteSelectAction: eb.oi.CLICK, selectedIndex: o });
        },
        itemProps: (function (e) {
            let { navId: t, index: r, selected: l } = e;
            return { id: `${t}-${r}`, role: "option", tabIndex: -1, "aria-selected": l };
        })({ navId: a, index: o, selected: i }),
    });
}
function eI(e) {
    let { label: t, className: r } = e;
    return (0, n.jsx)(q.E, { variant: "body-sm/medium", color: "text-strong", className: r, children: t });
}
function eR(e) {
    let { searchTokenType: t, answer: r } = e,
        l = P.Ay[t]?.key ?? "",
        s = r ?? (0, S.sh)(t);
    return (0, n.jsxs)("div", {
        className: et.Xq,
        children: [
            (0, n.jsx)(q.E, { variant: "body-sm/semibold", color: "text-subtle", children: l }),
            (0, n.jsx)(q.E, { variant: "body-sm/medium", color: "text-muted", children: s }),
        ],
    });
}
function eT(e) {
    let t = (0, S.E3)(e);
    return (0, n.jsxs)("div", {
        className: et.aT,
        children: [
            (0, n.jsx)(ef.A, { channel: e, avatarSize: U._3.SIZE_16, iconClassName: et.er, iconSize: "xs" }),
            (0, n.jsx)(q.E, { variant: "body-sm/semibold", color: "text-strong", className: et.HA, children: t }),
        ],
    });
}
function ej(e) {
    let { searchContext: t } = e;
    return (0, n.jsx)(el.m, {
        asContainer: !0,
        text: ep.intl.string(ep.t.dwAvX1),
        position: "left",
        children: (0, n.jsx)(ee.D, {
            onClick: () => b.A.clearSearchHistory(t),
            className: et.Wf,
            title: ep.intl.string(ep.t.dwAvX1),
            "aria-label": ep.intl.string(ep.t.dwAvX1),
            children: (0, n.jsx)(en.TrashIcon, { size: "sm", color: "currentColor", className: et.f }),
        }),
    });
}
function eC(e) {
    let { title: t, headerId: r, showDivider: l, children: s } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            l && (0, n.jsx)("div", { className: et.yF }),
            (0, n.jsx)("ul", { role: "group", "aria-labelledby": r, className: et.jw, children: s }, t),
        ],
    });
}
function ev(e) {
    let { headerId: t, titleText: r, trailingIcon: l } = e;
    return (0, n.jsxs)("div", {
        id: t,
        className: et.x_,
        children: [(0, n.jsx)(q.E, { variant: "body-xs/semibold", color: "text-subtle", children: r }), l],
    });
}
function eL(e) {
    let { navId: t, item: r, startingIndex: l, selectedIndex: a } = e,
        o = s.useId(),
        i = l,
        { rows: c, title: u, trailingIcon: d, isLoading: h = !1 } = r.data;
    return (0, n.jsxs)(eC, {
        title: u,
        headerId: o,
        showDivider: l > 0,
        children: [
            (0, n.jsx)(ev, { headerId: o, titleText: u, trailingIcon: d }),
            h &&
                Array.from({ length: 3 }, (e, t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: et.AS,
                            "aria-hidden": !0,
                            children: [
                                (0, n.jsx)("div", {
                                    className: et.Fx,
                                    children: (0, n.jsx)(ec.F, { width: 20, height: 20, className: et.WX }),
                                }),
                                (0, n.jsx)("div", {
                                    className: et.mQ,
                                    children: (0, n.jsx)(ec.F, { width: 160, height: 16, className: et.WX }),
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            c.map((e) => {
                let { icon: l, label: s, sublabel: o, onSelect: c } = e.data,
                    d = a === i,
                    h = i;
                return (
                    (i += 1),
                    (0, n.jsx)(
                        eE,
                        { icon: l, label: s, sublabel: o, onSelect: c, navId: t, index: h, selected: d },
                        `${r.type}-${u}-${h}`,
                    )
                );
            }),
        ],
    });
}
function eN(e) {
    let { size: t, user: r, className: l } = e,
        s = (0, i.bG)([eu.A], () => eu.A.getGuildId()),
        a = (0, U.FT)(t);
    return (0, n.jsx)(es.eu, { size: t, src: r.getAvatarURL(s, a), "aria-label": r.username, className: l });
}
function e_(e) {
    let { user: t } = e,
        { selectedGuildId: r, selectedChannelId: l } = (0, i.cf)([eu.A, m.Ay], () => {
            let e = eu.A.getGuildId(),
                t = m.Ay.getChannelId(e);
            return { selectedGuildId: e, selectedChannelId: t };
        }),
        s = eh.Ay.useName(r, l, t);
    return (0, n.jsx)(q.E, { variant: "body-sm/semibold", color: "text-default", children: s });
}
function eF(e) {
    let { value: t, avatarSize: r, iconSize: l } = e,
        s = "",
        a = (0, S._o)(t)
            .map((e, t, r) => (ex.l90.test(e.type) || (0, S.Zh)(e, r[t + 1]) ? e : new em.ou(e.getFullMatch(), em.dL)))
            .map((e, t) => {
                let a = e.getFullMatch();
                if (0 === a.trim().length) return null;
                s += a;
                let o = ex.l90.test(e.type),
                    i = ex.T2E.test(e.type),
                    c = `${e.type}-${a}-${t}`;
                if (i)
                    switch (e.type) {
                        case ex.LWr.ANSWER_USERNAME_FROM:
                        case ex.LWr.ANSWER_USERNAME_MENTIONS:
                            return (0, n.jsx)(ek, { token: e, avatarSize: r }, c);
                        case ex.LWr.ANSWER_IN:
                            return (0, n.jsx)(eM, { token: e, avatarSize: r, iconSize: l }, c);
                        default:
                            return (0, n.jsx)(eO, { text: a, className: et.Mj }, c);
                    }
                return (0, n.jsx)(eO, { text: a, className: o ? et._y : et.Lc }, c);
            });
    return { label: (0, n.jsx)("div", { className: et.fH, children: a }), ariaLabel: s };
}
function eO(e) {
    let { text: t, className: r } = e;
    return (0, n.jsx)(q.E, { variant: "body-sm/semibold", color: "text-strong", className: r, children: t });
}
function ek(e) {
    let { token: t, avatarSize: r } = e,
        l = t.getFullMatch(),
        s = t.getData("userId"),
        a = (0, i.bG)([ed.default], () => ed.default.getUser(s));
    return null == a
        ? (0, n.jsx)(eO, { text: l, className: et.Mj })
        : (0, n.jsxs)("div", {
              className: et.Mj,
              children: [
                  (0, n.jsx)(eN, { size: r, user: a }),
                  (0, n.jsx)(q.E, { variant: "body-sm/semibold", color: "text-strong", children: a.username }),
              ],
          });
}
function eM(e) {
    let { token: t, avatarSize: r, iconSize: l } = e,
        s = t.getFullMatch(),
        a = t.getData("channelIds") ?? [],
        o = (0, i.bG)([f.A], () => f.A.getChannel(a[0]));
    if (null == o) return (0, n.jsx)(eO, { text: s, className: et.Mj });
    let c = (0, S.E3)(o);
    return (0, n.jsxs)("div", {
        className: j()(et.Mj, et.JG),
        children: [
            (0, n.jsx)(ef.A, { channel: o, avatarSize: r, iconClassName: et.Wh, iconSize: l }),
            (0, n.jsx)(q.E, { variant: "body-sm/semibold", color: "text-strong", children: c }),
        ],
    });
}
function eP(e) {
    let { text: t, className: r, size: l } = e,
        s = (0, eg.KD)(t);
    return null != s ? (0, n.jsx)(s, { size: l, color: "currentColor", className: r }) : null;
}
function eW(e) {
    let { text: t, className: r, size: l } = e,
        s = (0, eg.Ht)(t);
    return null != s ? (0, n.jsx)(s, { size: l, color: "currentColor", className: r }) : null;
}
r(163839);
var ew = (((l = {}).ROW = "row"), (l.GROUP = "group"), l);
r(667532);
var eH = r(506774),
    eD = r(73153);
let eQ = eb.nC,
    ez = !1,
    e$ = {};
class eq extends i.Ay.Store {
    static displayName = eb.yQ;
    initialize() {
        var e;
        let t = eH.w.get(eQ);
        (t?.history != null &&
            (Object.keys((e = t.history)).forEach((t) => {
                (Array.isArray(e[t]) && (e[t] = e[t].filter((e) => "string" == typeof e && "" !== e.trim())),
                    (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t]);
            }),
            (e$ = e)),
            (ez = !!eH.w.get("tokenized")));
    }
    isTokenized() {
        return ez;
    }
    getHistory(e) {
        return e$[e];
    }
}
let eG = new eq(eD.h, {
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: function (e) {
        let { id: t } = e;
        (delete e$[t], eH.w.set(eb.nC, { history: e$ }));
    },
    SEARCH_HISTORY_WEB_REMOVE_ITEM: function (e) {
        let { id: t, query: r } = e;
        null != e$[t] && ((e$[t] = e$[t].filter((e) => e !== r)), eH.w.set(eb.nC, { history: e$ }));
    },
    SEARCH_HISTORY_WEB_ADD_ITEM: function (e) {
        let { id: t, query: r } = e;
        if ("string" != typeof r || "" === (r = r.trim())) return;
        let l = (e$[t] = e$[t] ?? []),
            n = l.indexOf(r);
        (-1 !== n
            ? (l.splice(n, 1), l.unshift(r))
            : null != l[0] && "" !== l[0] && r.startsWith(l[0])
              ? (l[0] = r)
              : l.unshift(r),
            l.length > 5 && l.splice(5, l.length),
            eH.w.set(eb.nC, { history: e$ }));
    },
    LOGOUT: function () {
        (eH.w.remove(eb.nC), (e$ = {}));
    },
});
var eU = r(588975),
    eB = r(674142);
let eY = [];
var eK = r(948914);
let eZ = H()("2015-05-15").local();
function eV(e) {
    let { items: t, navId: r, selectedIndex: l } = e,
        s = 0;
    return (0, n.jsx)(n.Fragment, {
        children: t.map((e) => {
            switch (e.type) {
                case ew.ROW:
                    let { icon: t, label: a, onSelect: o } = e.data,
                        i = s;
                    return (
                        (s += 1),
                        (0, n.jsx)(
                            eE,
                            { icon: t, label: a, onSelect: o, navId: r, index: i, selected: l === i },
                            `${e.type}-${i}`,
                        )
                    );
                case ew.GROUP:
                    let { rows: c, title: u } = e.data,
                        d = s;
                    return (
                        (s += c.length),
                        (0, n.jsx)(
                            eL,
                            { navId: r, item: e, startingIndex: d, selectedIndex: l },
                            `${e.type}--${u}-${d}`,
                        )
                    );
                default:
                    return null;
            }
        }),
    });
}
function eX(e) {
    let { searchContext: t, navId: r, resultsState: l, onSelectedIndexChanged: a, selectedChannel: o, ref: c } = e,
        [u, d] = s.useState(-1),
        h = s.useCallback(
            (e) => {
                (d(e), a(e));
                let t = document.getElementById(`${r}-${e}`);
                null != t && t.scrollIntoView({ block: "nearest", inline: "nearest" });
            },
            [r, a],
        ),
        f = s.useCallback(
            (e) => {
                let { query: t, performSearch: r, replace: n } = e;
                (E.A.setSearchQuery({
                    query: t,
                    performSearch: r,
                    replace: n,
                    resultsState: l,
                    searchQuerySource: eb.Q_.SEARCH_POPOUT,
                }),
                    h(-1));
            },
            [l, h],
        ),
        { items: g, itemsData: x } = (function (e) {
            let { resultsState: t, searchContext: r, selectedChannel: l, setSearchQuery: a } = e,
                { autocompletes: o, mode: c } = t,
                u = (function (e) {
                    let { autocompletes: t, mode: r } = e;
                    return s.useCallback(
                        (e) => {
                            let { getAutocompleteRowItem: l, getAutocompleteGroupItem: n } = e,
                                s = 0,
                                a = [],
                                o = [];
                            for (let e of t) {
                                let t = [],
                                    { group: i, results: c } = e;
                                if (e.results.length > 0) {
                                    for (let e of c) {
                                        let n = l({ result: e, modeType: r.type, group: i });
                                        t.push(n);
                                    }
                                    s += c.length;
                                    let e = n({ group: i, rows: t });
                                    (a.push(e), o.push(...t));
                                }
                            }
                            return { autocompleteCount: s, autocompleteGroups: a, allAutocompleteRows: o };
                        },
                        [t, r.type],
                    );
                })({ autocompletes: o, mode: c }),
                d = (function (e) {
                    let { setSearchQuery: t, searchContext: r, mode: l } = e,
                        a = (0, eB.o)(r);
                    return s.useMemo(() => {
                        let e = [
                            {
                                type: ex.LWr.FILTER_FROM,
                                isEligible: a.has(ex.LWr.FILTER_FROM),
                                icon: eo.UserIcon,
                                label: ep.intl.string(ep.t.ktr6z5),
                            },
                            {
                                type: ex.LWr.FILTER_IN,
                                isEligible: a.has(ex.LWr.FILTER_IN),
                                icon: ea.TextIcon,
                                label: ep.intl.string(ep.t.VMjDvS),
                            },
                            {
                                type: ex.LWr.FILTER_HAS,
                                isEligible: a.has(ex.LWr.FILTER_HAS),
                                icon: eU.AttachmentIcon,
                                label: ep.intl.string(ep.t.IhIpc7),
                            },
                            {
                                type: ex.LWr.FILTER_MENTIONS,
                                isEligible: a.has(ex.LWr.FILTER_MENTIONS),
                                icon: ei.AtIcon,
                                label: ep.intl.string(ep.t.fpKv9Y),
                            },
                        ];
                        return e
                            .filter((e) => e.isEligible)
                            .map((s) => {
                                let { icon: a, label: o, type: i } = s;
                                return eS(ew.ROW, {
                                    icon: (0, n.jsx)(a, { size: "sm", color: "currentColor", className: et.Fx }),
                                    label: (0, n.jsx)(eI, { label: o }),
                                    sublabel: (0, n.jsx)(eR, { searchTokenType: i }),
                                    onSelect: function (n) {
                                        let { selectedIndex: s, searchAutocompleteSelectAction: a } = n,
                                            o = P.Ay[i]?.key ?? "",
                                            c = (0, S.bS)(r);
                                        ((0, R.kc)({
                                            searchContext: r,
                                            searchQuery: W.A.getSearchResultsQuery(c),
                                            searchQueryString: E.A.getSearchInputText(r),
                                            searchTokenType: i,
                                            searchAutocompleteGroup: i,
                                            searchAutocompleteMode: l,
                                            searchAutocompleteResultIndex: s - 1,
                                            searchAutocompleteTotalResults: e.length,
                                            isSearchFilterPrefix: !0,
                                            isSearchFilterAnswer: !1,
                                            isSearchFilterComplete: !1,
                                            isInFilterForSelectedChannel: !1,
                                            searchAutocompleteSelectAction: a,
                                        }),
                                            t({ query: `${o} `, performSearch: !1, replace: !1 }));
                                    },
                                });
                            });
                    }, [a, r, l, t]);
                })({ setSearchQuery: a, searchContext: r, mode: c }),
                h = (0, Y.fu)((0, S.mt)(r), "guild_suggestions"),
                f = s.useMemo(
                    () => (h && c.type === ex.o$q.EMPTY && "" === t.query.trim() ? (0, V.W)(r, "") : null),
                    [h, c.type, t.query, r],
                ),
                { suggestedSearches: g, isLoadingSuggestedSearches: x } = (0, Z.H)(f, { source: "guild_suggestions" });
            (s.useLayoutEffect(() => {
                null != f && (0, K.E)(f, A.A);
            }, [f]),
                s.useEffect(() => {
                    if (null == f || 0 === g.length) return;
                    let e = !0,
                        t = { smartSearchQuery: f, suggestedSearches: g, suggestionSource: "search_dropdown" };
                    function r() {
                        e && B.A.trackSuggestedSearchesShownDeduped(t, A.A);
                    }
                    return (
                        null == A.A.getSessionId(f.searchContext) ? A.A.enqueueEvent(f.searchContext, r) : r(),
                        () => {
                            e = !1;
                        }
                    );
                }, [f, g]));
            let p = (0, i.yK)([X.A, m.Ay, eG], () => {
                if (X.A.hidePersonalInformation) return eY;
                let e = (0, S.Jl)(r, m.Ay);
                if (null == e) return eY;
                let t = eG.getHistory(e);
                if (null == t) return eY;
                let l = new Set(),
                    n = [];
                return (
                    t.forEach((e) => {
                        let t = r.type === ex.I4_.CHANNEL ? (0, S.EH)(e) : e;
                        "" === t || l.has(t) || (l.add(t), n.push(t));
                    }),
                    n
                );
            });
            function y(e) {
                let {
                        autocompleteCount: t,
                        selectedIndex: l,
                        searchAutocompleteSelectAction: n,
                        selectedAutocomplete: s,
                        selectedAutocompleteGroup: a,
                    } = e,
                    o = c.type,
                    i = c.filter,
                    { token: u, group: d } = s,
                    h = null != d && (0, P.If)(d) ? d : null,
                    f = u ?? i ?? h,
                    g = s.channel,
                    x = f === ex.LWr.FILTER_IN && null != g && g.id === m.Ay.getChannelId(),
                    p = (0, S.bS)(r);
                (0, R.kc)({
                    searchContext: r,
                    searchQuery: W.A.getSearchResultsQuery(p),
                    searchQueryString: E.A.getSearchInputText(r),
                    searchTokenType: f,
                    searchAutocompleteGroup: a,
                    searchAutocompleteMode: c,
                    searchAutocompleteResultIndex: l,
                    searchAutocompleteTotalResults: t,
                    isSearchFilterPrefix: o === ex.o$q.EMPTY,
                    isSearchFilterAnswer: o === ex.o$q.FILTER,
                    isSearchFilterComplete: o === ex.o$q.FILTER_ALL,
                    isInFilterForSelectedChannel: x,
                    searchAutocompleteSelectAction: n,
                });
            }
            let b = s.useCallback(
                    (e) => {
                        let { hasOtherSearchFiltersVisible: t } = e,
                            l = t ? ep.intl.string(ep.t.diOL4i) : ep.intl.string(ep.t["M1tf+7"]);
                        return eS(ew.ROW, {
                            icon: (0, n.jsx)($.FiltersHorizontalIcon, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: et.Fx,
                            }),
                            label: (0, n.jsx)(eI, { label: l }),
                            sublabel: t
                                ? (0, n.jsx)(q.E, {
                                      variant: "body-sm/medium",
                                      color: "text-muted",
                                      children: ep.intl.string(ep.t["1axf1T"]),
                                  })
                                : void 0,
                            onSelect: () => E.A.openSearchFiltersModal(r),
                        });
                    },
                    [r],
                ),
                I = (0,
                {
                    [ex.o$q.EMPTY]: () => {
                        let e = [];
                        if (null != l && (0, J.HM)(r) && r.type === ex.I4_.DMS) {
                            let t = eT(l),
                                s = eS(ew.ROW, {
                                    icon: (0, n.jsx)(G.MagnifyingGlassIcon, {
                                        size: "sm",
                                        color: "currentColor",
                                        className: et.Fx,
                                    }),
                                    label: (0, n.jsx)(eI, {
                                        label: ep.intl.format(ep.t["VGEH/0"], { channelName: t }),
                                        className: et.YL,
                                    }),
                                    onSelect: (e) => {
                                        let { searchAutocompleteSelectAction: t } = e;
                                        return (function (e) {
                                            let { selectedChannel: t, searchAutocompleteSelectAction: l } = e;
                                            (0, R.rE)({ searchContext: r, searchAutocompleteSelectAction: l });
                                            let n = ex.LWr.FILTER_IN,
                                                s = P.Ay[n],
                                                o = (0, S.Rt)(t);
                                            a({
                                                query: `${s?.key ?? n.toString()} ${o}`,
                                                performSearch: !0,
                                                replace: !1,
                                            });
                                        })({ selectedChannel: l, searchAutocompleteSelectAction: t });
                                    },
                                });
                            e.push(s);
                        }
                        let t = b({ hasOtherSearchFiltersVisible: !0 }),
                            s = [...d, t];
                        if (
                            (e.push(eS(ew.GROUP, { rows: s, title: ep.intl.string(ep.t.UdhTtk) })),
                            null != f && (g.length > 0 || x))
                        ) {
                            let t = g.map((e, t) => {
                                var r;
                                return eS(ew.ROW, {
                                    ...((r = e.suggestedSearchText),
                                    {
                                        icon: (0, n.jsx)(G.MagnifyingGlassIcon, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: et.Fx,
                                        }),
                                        label: (0, n.jsx)(q.E, {
                                            variant: "body-sm/medium",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: r,
                                        }),
                                    }),
                                    ariaLabel: ep.intl.formatToPlainString(ep.t.WoiGrV, {
                                        suggestion: e.suggestedSearchText,
                                    }),
                                    resultText: e.suggestedSearchText,
                                    selectionId: `suggestion:${e.suggestionId}`,
                                    onSelect: () => {
                                        (B.A.trackSuggestedSearchStarted(
                                            {
                                                smartSearchQuery: f,
                                                suggestedSearch: e,
                                                suggestionSource: "search_dropdown",
                                                index: t,
                                                numSuggestedSearches: g.length,
                                            },
                                            A.A,
                                        ),
                                            a({ query: e.suggestedSearchText, performSearch: !0, replace: !0 }),
                                            (0, K.A)(f, A.A, 3));
                                    },
                                });
                            });
                            e.push(
                                eS(ew.GROUP, {
                                    rows: t,
                                    title: ep.intl.string(ep.t.HbJ7eD),
                                    isLoading: x && 0 === g.length,
                                }),
                            );
                        }
                        if (p.length > 0) {
                            let t = p.map((e, t) => {
                                    let { label: l, ariaLabel: s } = eF({
                                        value: e,
                                        avatarSize: U._3.SIZE_16,
                                        iconSize: "xs",
                                    });
                                    return eS(ew.ROW, {
                                        icon: (0, n.jsx)(G.MagnifyingGlassIcon, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: et.Fx,
                                        }),
                                        label: l,
                                        ariaLabel: ep.intl.formatToPlainString(ep.t.WoiGrV, { suggestion: s }),
                                        resultText: e,
                                        selectionId: `history:${e}`,
                                        onSelect: () => {
                                            ((0, R.oR)({
                                                searchContext: r,
                                                searchHistoryIndex: t,
                                                searchHistoryTotalResults: p.length,
                                            }),
                                                a({ query: e, performSearch: !0, replace: !1 }));
                                        },
                                    });
                                }),
                                l = eS(ew.GROUP, {
                                    rows: t,
                                    trailingIcon: (0, n.jsx)(ej, { searchContext: r }),
                                    title: ey(ex.x2k.HISTORY),
                                });
                            e.push(l);
                        }
                        return e;
                    },
                    [ex.o$q.FILTER_ALL]: () => {
                        let e = [];
                        if ("" !== t.query.trim()) {
                            let { label: r } = eF({ value: t.query, avatarSize: U._3.SIZE_16, iconSize: "xs" }),
                                l = eS(ew.ROW, {
                                    icon: (0, n.jsx)(G.MagnifyingGlassIcon, {
                                        size: "sm",
                                        color: "currentColor",
                                        className: et.Fx,
                                    }),
                                    label: (0, n.jsx)(eI, {
                                        label: ep.intl.format(ep.t.rCnaoo, { value: r }),
                                        className: et.YL,
                                    }),
                                    ariaLabel: ep.intl.formatToPlainString(ep.t.rCnaoo, { value: t.query }),
                                    onSelect: () =>
                                        (function (e) {
                                            let { searchEverywhere: t } = e;
                                            M._.dispatch(ex.jej.PERFORM_SEARCH, {
                                                searchEverywhere: t,
                                                searchQuerySource: eb.Q_.SEARCH_POPOUT,
                                            });
                                        })({ searchEverywhere: !1 }),
                                });
                            e.push(l);
                        }
                        let { autocompleteCount: r, autocompleteGroups: l } = u({
                            getAutocompleteRowItem: (e) => {
                                let { result: t, modeType: l, group: s } = e,
                                    o = eA({ modeType: l, result: t, group: s }),
                                    i = (function (e) {
                                        let { result: t, group: r } = e;
                                        switch (r) {
                                            case ex.x2k.HISTORY:
                                                return (0, n.jsx)(G.MagnifyingGlassIcon, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                    className: et.Fx,
                                                });
                                            case ex.LWr.FILTER_IN:
                                                return (0, n.jsx)(ea.TextIcon, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                    className: et.Fx,
                                                });
                                            case ex.LWr.FILTER_FROM:
                                                return (0, n.jsx)(eo.UserIcon, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                    className: et.Fx,
                                                });
                                            case ex.LWr.FILTER_MENTIONS:
                                                return (0, n.jsx)(ei.AtIcon, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                    className: et.Fx,
                                                });
                                            case ex.LWr.FILTER_HAS:
                                                return (0, n.jsx)(eP, { text: t.text, size: "sm", className: et.Fx });
                                            default:
                                                return null;
                                        }
                                    })({ result: t, group: s }),
                                    { label: c, ariaLabel: u } = (function (e) {
                                        let { channel: t, user: r, text: l } = e;
                                        return null != t
                                            ? {
                                                  label: (0, n.jsxs)("div", {
                                                      className: et.YL,
                                                      children: [
                                                          (0, n.jsx)(q.E, {
                                                              variant: "body-sm/medium",
                                                              color: "text-strong",
                                                              children: P.Ay[ex.LWr.FILTER_IN].key ?? "",
                                                          }),
                                                          eT(t),
                                                      ],
                                                  }),
                                                  ariaLabel: (0, S.E3)(t),
                                              }
                                            : null != r
                                              ? {
                                                    label: (0, n.jsxs)("div", {
                                                        className: et.YL,
                                                        children: [
                                                            (0, n.jsx)(eN, { size: U._3.SIZE_16, user: r }),
                                                            (0, n.jsx)(e_, { user: r }),
                                                        ],
                                                    }),
                                                    ariaLabel: r.username,
                                                }
                                              : { label: (0, n.jsx)(eI, { label: l }), ariaLabel: l };
                                    })(t),
                                    d =
                                        s === ex.LWr.FILTER_FROM || s === ex.LWr.FILTER_MENTIONS
                                            ? (0, n.jsx)(eR, { searchTokenType: s, answer: t.user?.username })
                                            : void 0;
                                return eS(ew.ROW, {
                                    icon: i,
                                    label: c,
                                    sublabel: d,
                                    ariaLabel: u,
                                    resultText: o,
                                    onSelect: function (e) {
                                        let { selectedIndex: l, searchAutocompleteSelectAction: n } = e;
                                        (y({
                                            selectedIndex: l,
                                            searchAutocompleteSelectAction: n,
                                            selectedAutocomplete: t,
                                            selectedAutocompleteGroup: s,
                                            autocompleteCount: r,
                                        }),
                                            a({ query: o, performSearch: !1, replace: !1 }));
                                    },
                                });
                            },
                            getAutocompleteGroupItem: (e) => {
                                let { group: t, rows: r } = e,
                                    l = ey(t);
                                return eS(ew.GROUP, { rows: r, title: l });
                            },
                        });
                        if (0 === r) {
                            let t = b({ hasOtherSearchFiltersVisible: !0 }),
                                r = [...d, t];
                            e.push(eS(ew.GROUP, { rows: r, title: ep.intl.string(ep.t.UdhTtk) }));
                        } else {
                            let t = b({ hasOtherSearchFiltersVisible: !1 });
                            e.push(t);
                        }
                        return (r > 0 && e.push(...l), e);
                    },
                    [ex.o$q.FILTER]: () => {
                        let { autocompleteCount: e, autocompleteGroups: t } = u({
                            getAutocompleteRowItem: (t) => {
                                let { result: r, modeType: l, group: s } = t,
                                    o = eA({ modeType: l, result: r, group: s }),
                                    i = (function (e) {
                                        let { result: t, group: r } = e,
                                            { channel: l, user: s } = t;
                                        return null != l
                                            ? (0, n.jsx)(ef.A, {
                                                  channel: l,
                                                  avatarSize: U._3.SIZE_20,
                                                  iconClassName: et.Fx,
                                                  iconSize: "refresh_sm",
                                              })
                                            : null != s
                                              ? (0, n.jsx)(eN, { size: U._3.SIZE_20, user: s, className: et.Fx })
                                              : r === ex.LWr.FILTER_HAS
                                                ? (0, n.jsx)(eP, { size: "sm", text: t.text, className: et.Fx })
                                                : r === ex.LWr.FILTER_AUTHOR_TYPE
                                                  ? (0, n.jsx)(eW, { size: "sm", text: t.text, className: et.Fx })
                                                  : null;
                                    })({ result: r, group: s }),
                                    { label: c, ariaLabel: u } = (function (e) {
                                        let { channel: t, user: r, text: l } = e;
                                        if (null != t) {
                                            let e = (0, S.E3)(t);
                                            return {
                                                label: (0, n.jsx)(q.E, {
                                                    variant: "body-sm/semibold",
                                                    color: "text-strong",
                                                    children: e,
                                                }),
                                                ariaLabel: (0, S.E3)(t),
                                            };
                                        }
                                        return null != r
                                            ? {
                                                  label: (0, n.jsxs)("div", {
                                                      className: et.YL,
                                                      children: [
                                                          (0, n.jsx)(e_, { user: r }),
                                                          (0, n.jsx)(q.E, {
                                                              variant: "body-sm/medium",
                                                              color: "text-subtle",
                                                              children: r.username,
                                                          }),
                                                      ],
                                                  }),
                                                  ariaLabel: r.username,
                                              }
                                            : { label: (0, n.jsx)(eI, { label: l }), ariaLabel: l };
                                    })(r);
                                return eS(ew.ROW, {
                                    icon: i,
                                    label: c,
                                    ariaLabel: u,
                                    resultText: o,
                                    onSelect: function (t) {
                                        let { selectedIndex: l, searchAutocompleteSelectAction: n } = t;
                                        (y({
                                            selectedIndex: l,
                                            searchAutocompleteSelectAction: n,
                                            selectedAutocomplete: r,
                                            selectedAutocompleteGroup: s,
                                            autocompleteCount: e,
                                        }),
                                            a({ query: o, performSearch: !0, replace: !1 }));
                                    },
                                });
                            },
                            getAutocompleteGroupItem: (e) => {
                                let { group: t, rows: r } = e,
                                    l = ey(t);
                                return eS(ew.GROUP, { rows: r, title: l });
                            },
                        });
                        return [...t];
                    },
                }[c.type])(),
                T = s.useMemo(() => {
                    let e = [];
                    return (
                        I.forEach((t) => {
                            switch (t.type) {
                                case ew.ROW:
                                    e.push(t);
                                    break;
                                case ew.GROUP:
                                    t.data.rows.forEach((t) => e.push(t));
                            }
                        }),
                        e
                    );
                }, [I]);
            return { items: I, itemsData: T };
        })({ resultsState: l, searchContext: t, selectedChannel: o, setSearchQuery: f });
    function p(e) {
        let { newSelectedIndex: t, searchAutocompleteSelectAction: r } = e,
            l = t;
        return (
            null == l && (l = u),
            !(l < 0) &&
                !(l > x.length - 1) &&
                (x[l].data.onSelect({ searchAutocompleteSelectAction: r, selectedIndex: l }), !0)
        );
    }
    function y(e) {
        let t;
        ((t = u + e) > x.length - 1 ? (t = 0) : t < 0 && (t = x.length - 1), h(t));
    }
    let b = s.useRef({ itemsData: [], selectedIndex: -1, modeType: l.mode.type, query: l.query });
    s.useEffect(() => {
        let { itemsData: e, selectedIndex: t, modeType: r, query: n } = b.current,
            s = l.mode.type,
            a = l.query;
        if (s !== r) s === ex.o$q.FILTER ? h(0) : h(-1);
        else if (s === ex.o$q.FILTER && l.query !== n && x.length > 0) h(0);
        else if (s === ex.o$q.FILTER && 0 === e.length && x.length > 0) h(0);
        else if (t >= 0 && (t === u || e.length !== x.length)) {
            let r = e[t],
                l = r?.data.selectionId ?? r?.data.resultText;
            if (null != l) {
                let e = x.findIndex((e) => (e.data.selectionId ?? e.data.resultText) === l);
                -1 !== e ? h(e) : s === ex.o$q.EMPTY ? h(-1) : t >= x.length && h(Math.max(0, x.length - 1));
            } else t >= x.length && h(Math.max(0, x.length - 1));
        }
        b.current = { itemsData: x, selectedIndex: u, modeType: s, query: a };
    }, [x, u, l.mode.type, l.query, h]);
    let I = s.useRef(null),
        T = l.query;
    return (
        s.useEffect(() => {
            if ("" === T) {
                I.current = null;
                return;
            }
            let e = x.length;
            I.current !== e &&
                ((I.current = e), L.O.announce(ep.intl.formatToPlainString(ep.t.ZGVL3g, { count: e }), "polite"));
        }, [x.length, T]),
        s.useImperativeHandle(c, () => ({
            selectedIndex: u,
            focusNextOption: () => {
                y(1);
            },
            focusPreviousOption: () => {
                y(-1);
            },
            selectOption: p,
        })),
        (0, n.jsx)(D.d_, {
            onMouseDown: function (e) {
                (e.stopPropagation(), e.preventDefault());
            },
            role: "listbox",
            id: r,
            tabIndex: -1,
            "aria-activedescendant": `${r}-${u}`,
            className: g.length > 0 ? eK.kL : void 0,
            children: (0, n.jsx)(eV, { items: g, navId: r, selectedIndex: u }),
        })
    );
}
function eJ(e) {
    let { navId: t, resultsState: r, searchContext: l, ref: a } = e;
    return (
        s.useImperativeHandle(a, () => ({
            selectedIndex: -1,
            focusNextOption: () => {},
            focusPreviousOption: () => {},
            selectOption: () => {},
        })),
        (0, n.jsx)(D.d_, {
            onMouseDown: function (e) {
                (e.stopPropagation(), e.preventDefault());
            },
            role: "listbox",
            id: t,
            tabIndex: -1,
            "aria-activedescendant": `${t}--1`,
            className: j()(eK.kL, eK.Wl),
            children: (0, n.jsx)(Q.CalendarPicker, {
                onSelect: function (e) {
                    let t = (0, S.bS)(l);
                    ((0, R.kc)({
                        searchContext: l,
                        searchQuery: W.A.getSearchResultsQuery(t),
                        searchQueryString: E.A.getSearchInputText(l),
                        searchTokenType: r.mode.filter,
                        searchAutocompleteGroup: ex.x2k.DATES,
                        searchAutocompleteMode: r.mode,
                        isSearchFilterPrefix: !1,
                        isSearchFilterAnswer: !0,
                        isSearchFilterComplete: !1,
                        searchAutocompleteSelectAction: eb.oi.CLICK,
                    }),
                        E.A.setSearchQuery({
                            query: e.format(ex.ump) + " ",
                            performSearch: !0,
                            replace: !1,
                            resultsState: r,
                            searchQuerySource: eb.Q_.SEARCH_POPOUT,
                        }));
                },
                maxDate: H()().local(),
                minDate: eZ,
                calendarClassName: eK.BJ,
            }),
        })
    );
}
let e0 = function (e) {
    let { searchContext: t, navId: r, onSelectedIndexChanged: l, ref: s } = e,
        [a, o] = (0, i.yK)([z.A, m.Ay, f.A], () => {
            let e = z.A.getState(t),
                r = m.Ay.getChannelId();
            return [e, f.A.getChannel(r)];
        });
    return (0, S.av)(a.mode.filter)
        ? (0, n.jsx)(eJ, { navId: r, resultsState: a, searchContext: t })
        : (0, n.jsx)(eX, {
              ref: s,
              searchContext: t,
              navId: r,
              onSelectedIndexChanged: l,
              resultsState: a,
              selectedChannel: o,
          });
};
var e1 = r(798549);
let e2 = "searchToken";
function e5(e) {
    let { attributes: t, children: r, leaf: l } = e,
        s = l[e2];
    return s === P.v1.FILTER
        ? (0, n.jsx)("span", { ...t, className: e1.nM, children: r })
        : s === P.v1.ANSWER
          ? (0, n.jsx)("span", { ...t, className: e1.pB, children: r })
          : (0, n.jsx)("span", { ...t, children: r });
}
r(76497);
var e6 = r(935675),
    e9 = r(372492);
let e7 = (0, k.Ld)();
function e3(e, t) {
    return { path: [0, 0], offset: Math.min(Math.max(t, 0), C.bP.string(e).length) };
}
function e8(e) {
    return W.A.getQueryText(e) ?? "";
}
function e4(e, t) {
    let { selection: r } = e;
    if (null == r || !C.Q6.isCollapsed(r)) return !1;
    let l = C.Q6.start(r).offset;
    for (let r of (0, S._o)(C.bP.string(e))) {
        let n = P.Ay[r.type];
        if (null != n && !0 !== n.mutable && (t ? l >= r.start && l < r.end : l > r.start && l <= r.end))
            return (C.gB.delete(e, { at: { anchor: e3(e, r.start), focus: e3(e, r.end) } }), !0);
    }
    return !1;
}
let te = { whiteSpace: "pre", wordWrap: "normal" };
function tt(e) {
    let [t, r] = e,
        l = [];
    if (!C.EY.isText(t) || 0 === t.text.length) return l;
    for (let e of (0, S._o)(t.text)) {
        let t = P.Ay[e.type];
        null != t &&
            l.push({ anchor: { path: r, offset: e.start }, focus: { path: r, offset: e.end }, [e2]: t.componentType });
    }
    return l;
}
function tr(e) {
    return (0, n.jsx)(e5, { ...e });
}
function tl(e) {
    let { children: t, attributes: r } = e;
    return (0, n.jsx)("span", { ...r, style: { ...r.style, opacity: 1 }, children: t });
}
let tn = s.memo(function (e) {
    let {
        editor: t,
        initialValue: r,
        placeholder: l,
        navId: s,
        isShown: a,
        onChange: o,
        onKeyDown: i,
        onFocus: c,
        onBlur: u,
    } = e;
    return (0, n.jsx)(v.A, {
        editor: t,
        value: r,
        onChange: o,
        children: (0, n.jsx)(v.Fo, {
            className: e9.E,
            style: te,
            placeholder: l,
            decorate: tt,
            renderLeaf: tr,
            renderPlaceholder: tl,
            onKeyDown: i,
            onFocus: c,
            onBlur: u,
            onPasteCapture: function (e) {
                (t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation());
            },
            role: "combobox",
            "aria-expanded": a,
            "aria-controls": a ? s : void 0,
            "aria-label": l,
            "aria-autocomplete": "list",
            autoCorrect: "off",
            spellCheck: !1,
        }),
    });
});
function ts(e) {
    let {
            className: t,
            searchContext: r,
            isSearching: l,
            hasResults: a,
            keyboardModeEnabled: o,
            onSearch: c,
            placeholder: u,
        } = e,
        d = (0, S.bS)(r),
        h = e8(d),
        [g] = s.useState(() => {
            let e = (function (e) {
                let { insertText: t, deleteBackward: r, deleteForward: l } = e;
                return (
                    (e.insertBreak = () => {}),
                    (e.deleteBackward = (t) => {
                        e4(e, !1) || r(t);
                    }),
                    (e.deleteForward = (t) => {
                        e4(e, !0) || l(t);
                    }),
                    (e.insertText = (r) => {
                        let { selection: l } = e,
                            n = null != l ? C.KE.string(e, l).length : 0,
                            s = 512 - (C.bP.string(e).length - n);
                        if (s <= 0) return;
                        let a = r.replace(/\n/g, "");
                        t(a.length > s ? a.slice(0, s) : a);
                    }),
                    (e.insertData = (t) => {
                        let r = t.getData("text/plain");
                        "" !== r && e.insertText(r);
                    }),
                    e
                );
            })((0, v.o$)((0, C.ie)()));
            return ((e.children = [{ type: "line", children: [{ text: h }] }]), (e.selection = null), e);
        }),
        [p] = s.useState(() => [...g.children]),
        [y, I] = s.useState(!1),
        [T, k] = s.useState(() => h.length > 0),
        w = s.useRef(null),
        H = s.useRef(null),
        D = s.useRef(null),
        Q = s.useRef(!0);
    s.useEffect(
        () => () => {
            Q.current = !1;
        },
        [],
    );
    let z = s.useRef(!1),
        $ = s.useCallback(() => C.bP.string(g), [g]),
        q = s.useCallback(() => {
            Promise.resolve().then(() => {
                (null == g.selection && C.gB.select(g, C.KE.end(g, [])), v.rL.focus(g));
            });
        }, [g]),
        G = s.useCallback(() => {
            Promise.resolve().then(() => v.rL.blur(g));
        }, [g]),
        U = s.useCallback(() => {
            E.A.cleanUpSearchState(r);
        }, [r]),
        B = s.useCallback(
            (e) => {
                if (!Q.current) return;
                let t = e?.relatedTarget,
                    l = document.getElementById(e7);
                (null != t && null != l && l.contains(t)) ||
                    (A.A.setFocused(r, !1),
                    I(!1),
                    v.rL.toDOMNode(g, g).removeAttribute("aria-activedescendant"),
                    0 === $().length && 0 === e8(d).length && U());
            },
            [U, d, g, $, r],
        ),
        Y = s.useCallback(
            (e) => {
                (C.KE.withoutNormalizing(g, () => {
                    (C.gB.select(g, { anchor: C.KE.start(g, []), focus: C.KE.end(g, []) }),
                        C.gB.delete(g),
                        C.gB.insertText(g, e.replace(/\n/g, "").slice(0, 512)));
                }),
                    C.gB.select(g, C.KE.end(g, [])));
            },
            [g],
        ),
        K = s.useCallback(
            (e) => {
                if (l) return !1;
                let { queryString: t, searchEverywhere: r, searchQuerySource: n } = e ?? {};
                (null == t || "" === t) && (t = $());
                let s = (0, S._o)(t),
                    a = (0, S.Zf)(s);
                for (let e = 0; e < s.length; e++)
                    (0, S.Zh)(s[e], s[e + 1]) || (t = t.substring(0, s[e].start) + t.substring(s[e].end));
                return (
                    0 !== s.length &&
                    0 !== Object.keys(a).length &&
                    (c({
                        queryString: t,
                        query: a,
                        searchEverywhere: r ?? !1,
                        searchQuerySource: n ?? eb.Q_.SEARCH_TEXT_INPUT,
                    }),
                    L.O.announce(ep.intl.string(ep.t.pKCxWP)),
                    B(),
                    !0)
                );
            },
            [$, B, l, c],
        ),
        Z = s.useCallback(() => {
            if (!Q.current) return;
            !z.current && v.rL.isFocused(g) && I(!0);
            let e = $();
            (k(e.length > 0), b.A.updateSearchQueryText(r, e));
            let t = (0, S._o)(e),
                { selection: l } = g,
                n = null != l ? C.Q6.end(l).offset : e.length,
                s = null != l ? C.Q6.start(l).offset : e.length,
                a = (0, S.zZ)(t, n, s);
            (x.A.updateAutocompleteQuery({ searchContext: r, tokens: t, cursorScope: a, queryString: e }),
                (function (e) {
                    let t;
                    try {
                        t = v.rL.toDOMNode(e, e);
                    } catch {
                        return;
                    }
                    requestAnimationFrame(() => {
                        let e = t.ownerDocument.getSelection();
                        if (null == e || "Caret" !== e.type || 0 === e.rangeCount) return;
                        let r = e.getRangeAt(0);
                        if (!t.contains(r.commonAncestorContainer)) return;
                        let l = r.getClientRects()[0],
                            n = t.getClientRects()[0];
                        if (null == l || null == n) return;
                        let s = l.left - n.left + t.scrollLeft;
                        s < t.scrollLeft
                            ? (t.scrollLeft = s - 10)
                            : s > t.scrollLeft + t.offsetWidth && (t.scrollLeft = s - t.offsetWidth + 3);
                    });
                })(g));
        }, [g, $, r]),
        V = s.useCallback(() => {
            !0 !== D.current?.selectOption({ searchAutocompleteSelectAction: eb.oi.KEY_PRESS }) &&
                K({ searchQuerySource: eb.Q_.SEARCH_TEXT_INPUT });
        }, [K]),
        X = s.useCallback(
            (e) => {
                switch (e.key) {
                    case "Enter":
                        (e.preventDefault(), V());
                        return;
                    case "Escape":
                        (e.preventDefault(), e.stopPropagation(), 0 === $().length ? G() : (Y(""), I(!0)));
                        return;
                    case "ArrowUp":
                        (e.preventDefault(), e.stopPropagation(), D.current?.focusPreviousOption());
                        return;
                    case "ArrowDown":
                        (e.preventDefault(), e.stopPropagation(), D.current?.focusNextOption());
                        return;
                    case "Tab":
                        if (o) return;
                        (e.stopPropagation(), (0, O.uS)());
                        return;
                }
            },
            [G, $, V, o, Y],
        ),
        J = s.useCallback(
            (e) => {
                let { query: t, anchor: r, focus: l, performSearch: n, replace: s, searchQuerySource: a } = e,
                    o = $();
                (" " !== t.charAt(t.length - 1) && (t += " "),
                    null != r && 0 !== r && " " !== o.charAt(r - 1) && " " !== t.charAt(0) && (t = " " + t),
                    (t = t.replace(/\n/g, "")),
                    (z.current = !0));
                try {
                    (!0 !== n && v.rL.focus(g),
                        !0 === s
                            ? Y(t)
                            : null != r
                              ? (C.gB.select(g, { anchor: e3(g, r), focus: e3(g, l ?? r) }),
                                C.gB.insertText(g, t.slice(0, 512)))
                              : C.gB.insertText(g, t),
                        !0 !== n && I(!0),
                        !0 === n && K({ queryString: $(), searchQuerySource: a }));
                } finally {
                    Promise.resolve().then(() => {
                        z.current = !1;
                    });
                }
            },
            [g, $, Y, K],
        ),
        ee = s.useCallback(
            (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!0 !== t) return void q();
                let l = f.A.getChannel(m.Ay.getChannelId()),
                    n = null != l ? (0, S.Rt)(l) : null;
                null == l || (l.isPrivate() && r.type !== ex.I4_.DMS) || l.isObfuscated() || null == n
                    ? q()
                    : ((0, R.Tf)({ searchContext: r }),
                      Promise.resolve().then(() => {
                          (v.rL.focus(g),
                              J({
                                  query: P.Ay[ex.LWr.FILTER_IN].key + `${n} `,
                                  replace: !0,
                                  searchQuerySource: eb.Q_.SEARCH_TEXT_INPUT,
                              }));
                      }));
            },
            [g, q, J, r],
        );
    s.useEffect(() => {
        (0, S.Pe)();
    }, [r]);
    let et = (0, i.bG)([W.A], () => W.A.getQueryText(d) ?? "");
    (s.useEffect(() => {
        C.bP.string(g) !== et && Y(et);
    }, [et, g, Y]),
        s.useEffect(() => {
            let { selection: e } = g;
            if (null == e) return;
            let t = C.bP.string(g).length;
            (C.Q6.start(e).offset > t || C.Q6.end(e).offset > t) && C.gB.deselect(g);
        }, [d, g]));
    let er = (0, i.bG)([W.A], () => W.A.getIsSearchTokensInitialized());
    (s.useEffect(() => {
        er && g.onChange();
    }, [g, er]),
        s.useEffect(
            () => (
                M._.subscribe(ex.jej.PERFORM_SEARCH, K),
                M._.subscribe(ex.jej.SET_SEARCH_QUERY, J),
                M._.subscribe(ex.jej.FOCUS_SEARCH, ee),
                () => {
                    (M._.unsubscribe(ex.jej.PERFORM_SEARCH, K),
                        M._.unsubscribe(ex.jej.SET_SEARCH_QUERY, J),
                        M._.unsubscribe(ex.jej.FOCUS_SEARCH, ee));
                }
            ),
            [ee, J, K],
        ));
    let el = s.useCallback(
            (e) => {
                if ((e.preventDefault(), e.stopPropagation(), 0 === $().length)) return void q();
                let t = v.rL.isFocused(g);
                (Y(""),
                    v.rL.toDOMNode(g, g).removeAttribute("aria-activedescendant"),
                    (0, R.iK)({ searchContext: r }),
                    U(),
                    t ? q() : G());
            },
            [G, U, g, q, $, Y, r],
        ),
        en = s.useCallback(
            (e) => {
                let t = v.rL.toDOMNode(g, g);
                null != e && e >= 0
                    ? t.setAttribute("aria-activedescendant", `${e7}-${e}`)
                    : t.removeAttribute("aria-activedescendant");
            },
            [g],
        ),
        es = s.useCallback(
            (e) => {
                let t = e.relatedTarget;
                if (null != t) {
                    let e = document.getElementById(e7);
                    if ((null != e && e.contains(t)) || (null != H.current && H.current.contains(t))) return;
                }
                B();
            },
            [B],
        ),
        ea = s.useCallback(
            () =>
                (0, n.jsx)("div", {
                    onBlur: es,
                    children: (0, n.jsx)(e0, { ref: D, searchContext: r, navId: e7, onSelectedIndexChanged: en }),
                }),
            [es, en, r],
        ),
        eo = s.useCallback(() => {
            (v.rL.toDOMNode(g, g).removeAttribute("aria-activedescendant"),
                (function (e) {
                    if (null != e.selection) return;
                    let t = v.rL.findDocumentOrShadowRoot(e),
                        r = "getSelection" in t ? t.getSelection() : null,
                        l = null;
                    if (null != r && r.rangeCount > 0) {
                        let { anchorNode: t, focusNode: n } = r;
                        null != t &&
                            null != n &&
                            v.rL.hasDOMNode(e, t) &&
                            v.rL.hasDOMNode(e, n) &&
                            (l = v.rL.toSlateRange(e, r, { exactMatch: !1, suppressThrow: !0 }));
                    }
                    C.gB.select(e, l ?? C.KE.end(e, []));
                })(g),
                I(!0),
                A.A.setFocused(r, !0),
                L.O.announce(ep.intl.string(ep.t["5h0QOP"])));
        }, [g, r]),
        ei = u ?? ep.intl.string(ep.t["5h0QOP"]);
    return (0, n.jsx)(N.Y, {
        targetElementRef: w,
        renderPopout: ea,
        position: "bottom",
        animation: N.Y.Animation.NONE,
        shouldShow: y,
        onRequestClose: () => B(),
        autoInvert: !1,
        children: (e, l) => {
            let { isShown: s } = l;
            return (0, n.jsx)("div", {
                className: t,
                ref: w,
                children: (0, n.jsx)("div", {
                    className: j()(e6.$P, { [e6.ho]: T || y, [e6.in]: y }),
                    children: (0, n.jsx)(_.vN, {
                        ringTarget: H,
                        children: (0, n.jsxs)(
                            "div",
                            {
                                className: j()(e6.ON, e9.O),
                                ref: H,
                                children: [
                                    (0, n.jsx)(tn, {
                                        editor: g,
                                        initialValue: p,
                                        placeholder: ei,
                                        navId: e7,
                                        isShown: s,
                                        onChange: Z,
                                        onKeyDown: X,
                                        onFocus: eo,
                                        onBlur: B,
                                    }),
                                    (0, n.jsx)(F.B, {
                                        onClear: el,
                                        hasContent: T || a,
                                        className: e6.Kk,
                                        isLoading: !1,
                                    }),
                                ],
                            },
                            (0, S.bS)(r),
                        ),
                    }),
                }),
            });
        },
    });
}
var ta = r(921242);
let to = o()(E.A.fetchMessages, 500);
function ti(e) {
    let { searchContext: t, className: r } = e,
        l = (0, S.bS)(t),
        a = (0, i.bG)([u.Ay], () => u.Ay.keyboardModeEnabled);
    (s.useEffect(() => {
        x.A.initializeAutocomplete(t);
    }, [t]),
        s.useEffect(
            () => (
                d.A.setSelectedSearchContext(l),
                () => {
                    d.A.setSelectedSearchContext(null);
                }
            ),
            [l],
        ));
    let { isSearching: o, hasResults: E } = (0, i.cf)([p.A], () => {
            let e = p.A.getTotalCount(l);
            return { hasResults: null != e && e > 0, isSearching: p.A.getIsFetching(l) };
        }),
        I = (0, i.bG)([h.Ay, m.Ay, f.A], () => {
            let e = m.Ay.getCurrentlySelectedChannelId(),
                t = f.A.getChannel(e);
            return h.Ay.getSection(e, t?.isDM()) === ex.YvQ.SEARCH;
        });
    s.useEffect(() => {
        A.A.setSidebarOpen(t, I);
    }, [t, I]);
    let T = (0, c.Ry)(ta.b);
    s.useEffect(() => {
        A.A.setFiltersModalOpen(t, T);
    }, [t, T]);
    let j = s.useCallback(
            (e) => {
                let { queryString: r, query: l, searchEverywhere: n, searchQuerySource: s } = e;
                (A.A.refreshQueryId(t),
                    (0, R.fd)({ searchContext: t, query: l, queryString: r, searchQuerySource: s }),
                    b.A.updateSearchMode(t, ex.BBH.NEWEST),
                    to({
                        searchContext: t,
                        searchQueryString: r,
                        searchEverywhere: n,
                        offset: 0,
                        includeSmartSearch: !0,
                    }));
            },
            [t],
        ),
        C = (0, i.bG)([g.A, f.A], () => {
            let e = (0, y._)(t) ? t.guildId : null;
            if (null != e) {
                let t = g.A.getGuild(e);
                return null == t ? null : t.name;
            }
            let r = (0, S._b)(t);
            if (null != r) {
                let e = f.A.getChannel(r);
                return null == e ? null : (0, S.E3)(e);
            }
            return null;
        }),
        v = s.useMemo(
            () =>
                t.type === ex.I4_.DMS
                    ? ep.intl.string(ep.t.m7OrlR)
                    : null != C
                      ? ep.intl.formatToPlainString(ep.t.LDZtFO, { name: C })
                      : ep.intl.string(ep.t["5h0QOP"]),
            [t.type, C],
        );
    return (0, n.jsx)(ts, {
        className: r,
        searchContext: t,
        isSearching: o,
        hasResults: E,
        keyboardModeEnabled: a,
        onSearch: j,
        placeholder: v,
    });
}
function tc(e) {
    let { className: t, guildId: r, channelId: l } = e,
        s = (0, I.J)({ guildId: r, channelId: l });
    return null == s ? null : (0, n.jsx)(ti, { className: t, searchContext: s });
}
