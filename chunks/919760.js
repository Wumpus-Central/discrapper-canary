"use strict";
n.r(t), n.d(t, { default: () => iq });
var i,
    a = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(735438),
    c = n.n(o),
    d = n(17928),
    u = n(323384),
    h = n(548411),
    p = n(534514),
    m = n(417098),
    _ = n(111159),
    g = n(834730),
    x = n(711111),
    f = n(770472),
    A = n(737823),
    C = (n(749638), n(876622)),
    b = n(299593),
    v = n(965660),
    I = n(976860),
    E = n(495544),
    S = n(287809),
    N = n(954571),
    j = n(354138),
    P = n(416730),
    y = n(212534),
    T = n(38181),
    R = n(767599);
n(323874), n(14289), n(35956);
var L = n(323125),
    O = n(310419),
    D = n(652215);
function k(e, t) {
    let n = O.h.getField("sessionId"),
        i = O.h.getField("guildId"),
        a = O.h.getField("entrypoint")?.name,
        s = S.default.getCurrentUser(),
        l = { ...t, guild_id: i, directory_session_id: n, source: a, user_id: s?.id };
    return N.default.track(e, l);
}
function w() {
    return (0, d.bG)([E.default], () => E.default.isAuthenticated());
}
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let i = e[n];
        t.searchParams.set(n, i);
    }
    let n = t.pathname + t.search,
        i = (0, L.T2)(n, !1);
    (0, I.pX)(i);
}
var G = n(435220),
    U = n(985018);
function F() {
    return { id: G.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID, name: U.intl.string(U.t.ijDDwz) };
}
let B = function () {
        let { query: e, categoryId: t, page: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = { previousView: (0, O.R4)() },
            a = new URLSearchParams();
        null != e && "" !== e && a.set("q", e),
            null != t && t !== R.lj && a.set("category_id", t.toString()),
            null != n && n > 1 && a.set("page", n.toString()),
            (0, I.pX)(D.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, { state: i, search: a.toString() });
    },
    H = (e) => {
        let {
            location: { state: t },
        } = (0, I.JK)();
        (0, I.bG)(e, t);
    };
var V = n(902119),
    Y = n(701508),
    z = n(979590),
    K = n(783531),
    X = n(624134);
let W = "/assets/3aa7e375b23dc56f.svg";
function $(e) {
    let { heading: t = U.intl.string(U.t.NGw8v2), body: n = U.intl.string(U.t["1XZRY4"]), className: i } = e;
    return (0, a.jsxs)("div", {
        className: r()(X.kL, i),
        children: [
            (0, a.jsx)("div", {
                className: X.ZS,
                children: (0, a.jsx)("img", { className: X.Sl, src: W, alt: U.intl.string(U.t["/UJaI2"]) }),
            }),
            (0, a.jsx)(p.D, { variant: "heading-xl/semibold", className: X.wx, children: t }),
            (0, a.jsx)(g.E, { variant: "text-md/normal", color: "text-default", children: n }),
        ],
    });
}
var Z = n(935573),
    J = n(702841),
    Q = n(932793),
    q = n(919796),
    ee = n(111042),
    et = n(651753),
    en = n(289873),
    ei = n(566984);
function ea(e) {
    let { loading: t, children: n } = e;
    return (0, a.jsxs)("div", {
        className: ei.kL,
        children: [
            t
                ? (0, a.jsx)("div", {
                      className: ei.dc,
                      children: (0, a.jsx)(en.y, { className: ei.u1, type: en.y.Type.SPINNING_CIRCLE }),
                  })
                : null,
            (0, a.jsx)("div", { className: r()({ [ei.Lq]: t }), children: n }),
        ],
    });
}
var es = n(230109),
    el = n(735991),
    er = n(635350),
    eo = n(486020),
    ec = n(775602),
    ed = n(435582),
    eu = n(283488),
    eh = n(607470),
    ep = n(654107),
    em = n(564096);
let e_ = 16 / 9,
    eg = 325 / 72;
function ex(e) {
    let { application: t, isHovered: n, botBannerUrl: i, botBannerUrlAnimated: l, iconURL: o } = e,
        c = (0, eu.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"] }),
        d = s.useMemo(() => {
            let e = (0, el.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, ed.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        { imageUrl: u, imageUrlAnimated: h } = s.useMemo(
            () => ("fetched" === c.state && null != c.url ? { imageUrl: c.url } : { imageUrl: i, imageUrlAnimated: l }),
            [c.state, c.url, i, l],
        ),
        p = null != u,
        m = null != d;
    return "loading" === c.state
        ? null
        : m
          ? (0, a.jsxs)(a.Fragment, {
                children: [
                    p
                        ? (0, a.jsx)(ef, { isHovered: n, url: u, animatedUrl: void 0 })
                        : (0, a.jsx)(eh.A, { src: d, className: r()(em._e, em.IH), muted: !0 }),
                    (0, a.jsx)(eA, { isHovered: n, url: d, isVideo: !0 }),
                ],
            })
          : p
            ? (0, a.jsx)(ef, { isHovered: n, url: u, animatedUrl: h })
            : (0, a.jsx)(eC, { iconURL: o });
}
function ef(e) {
    let { isHovered: t, url: n, animatedUrl: i } = e,
        [l, o] = s.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("img", { src: n, alt: "", className: r()(em._e, em.IH, { [em.Kc]: l }), onLoad: () => o(!0) }),
            null != i ? (0, a.jsx)(eA, { isHovered: t, url: i, isVideo: !1 }) : null,
        ],
    });
}
function eA(e) {
    let { isHovered: t, url: n, isVideo: i } = e,
        [l, o] = s.useState(!1),
        [c, d] = s.useState(t);
    return (s.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, a.jsx)("div", {
              className: r()(em.hY, { [em.Q]: !t, [em.nR]: t && l }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: i
                  ? (0, a.jsx)(eh.A, {
                        src: n,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: em.IH,
                        onLoadedData: () => o(!0),
                    })
                  : (0, a.jsx)("img", { src: n, alt: "", className: em.IH, onLoad: () => o(!0) }),
          })
        : null;
}
function eC(e) {
    let { iconURL: t } = e,
        { backgroundGradient: n, hasFetchedColors: i } = (function (e) {
            let [t, n, i] = (0, ep.rh)(e, "transparent");
            return { backgroundGradient: `linear-gradient(45deg, ${t}, ${i ?? n})`, hasFetchedColors: (0, ep.D1)(e) };
        })(t);
    return (0, a.jsx)("div", { className: r()(em.IH, em.nY, { [em.Kc]: i }), style: { backgroundImage: n } });
}
let eb = function (e) {
    let { application: t, bannerType: n, iconURL: i } = e,
        l = (0, d.bG)([ec.A], () => ec.A.useReducedMotion),
        [r, o] = s.useState(!1),
        c = s.useCallback(() => {
            o(!0);
        }, []),
        u = s.useCallback(() => o(!1), []),
        h = (0, el.Ag)(t),
        p = t.bot,
        { botBannerUrl: m, botBannerUrlAnimated: _ } = s.useMemo(
            () =>
                p?.id == null || p?.banner == null
                    ? {}
                    : {
                          botBannerUrl: (0, eo.z)({ id: p.id, banner: p.banner, canAnimate: !1, size: 600 }),
                          botBannerUrlAnimated: l
                              ? void 0
                              : (0, eo.z)({ id: p.id, banner: p.banner, canAnimate: !0, size: 600 }),
                      },
            [p?.id, p?.banner, l],
        );
    return (0, a.jsx)("div", {
        className: em.cI,
        style: { aspectRatio: "card" === n ? e_ : eg },
        onMouseEnter: c,
        onFocus: c,
        onMouseLeave: u,
        onBlur: u,
        children:
            "card" === n && h
                ? (0, a.jsx)(ex, {
                      application: t,
                      isHovered: r,
                      botBannerUrl: null == m ? void 0 : m,
                      botBannerUrlAnimated: null == _ ? void 0 : _,
                  })
                : null != m
                  ? (0, a.jsx)(ef, { isHovered: r, url: m, animatedUrl: _ })
                  : (0, a.jsx)(eC, { iconURL: i }),
    });
};
var ev = n(92400);
let eI = function (e) {
    let { application: t, onSelectApplication: n, showCategory: i = !1 } = e,
        l = s.useRef(null),
        r = t.categories?.[0],
        [o, c] = s.useState(!1),
        d = s.useCallback((e) => {
            e && c(!0);
        }, []),
        u = (0, el.NO)(t),
        h = s.useCallback(() => {
            n(t.id);
        }, [n, t.id]),
        m = s.useMemo(() => (o ? eo.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 48 }) : void 0), [o, t]),
        _ = i && null != r;
    return (0, a.jsx)(es.L, {
        innerRef: l,
        onChange: d,
        active: !o,
        children: (0, a.jsx)("div", {
            ref: l,
            className: ev.kL,
            children: (0, a.jsxs)(er.A, {
                className: ev.Nr,
                onClick: h,
                onContextMenu: () => {},
                "aria-label": U.intl.string(U.t.np1Wru),
                children: [
                    (0, a.jsxs)("div", {
                        className: ev.wx,
                        children: [
                            (0, a.jsx)("div", {
                                style: { width: "100%", display: "block", aspectRatio: 16 / 9 },
                                children: o ? (0, a.jsx)(eb, { application: t, bannerType: "card", iconURL: m }) : null,
                            }),
                            (0, a.jsx)("div", {
                                className: ev.H,
                                style: { height: 28 },
                                children: o
                                    ? (0, a.jsx)("img", {
                                          src: m,
                                          alt: "",
                                          className: ev.my,
                                          height: 48,
                                          width: 48,
                                          style: { borderWidth: 4, marginLeft: 12 },
                                      })
                                    : null,
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: ev.eV,
                        children: [
                            (0, a.jsx)("div", {
                                className: ev.gn,
                                children: (0, a.jsx)("div", {
                                    className: ev.DD,
                                    children: (0, a.jsx)(p.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        className: ev.JB,
                                        children: t.name,
                                    }),
                                }),
                            }),
                            _ || u
                                ? (0, a.jsxs)("div", {
                                      className: ev.op,
                                      children: [
                                          _
                                              ? (0, a.jsx)(g.E, {
                                                    className: ev.m4,
                                                    variant: "text-xs/medium",
                                                    color: "text-default",
                                                    children: r.name,
                                                })
                                              : null,
                                          _ && u
                                              ? (0, a.jsx)(g.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: "•",
                                                })
                                              : null,
                                          u
                                              ? (0, a.jsx)(g.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: U.intl.string(U.t["/eVltv"]),
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            (0, a.jsx)(g.E, {
                                className: ev.h_,
                                variant: "text-sm/medium",
                                color: "text-default",
                                lineClamp: _ || u ? 2 : 3,
                                children: t.directory_entry?.short_description ?? t.description,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var eE = n(392896);
let eS = { results: [], totalPages: 0, loadId: "" },
    eN = function (e) {
        let { categoryId: t, onSelectApplication: n, resetScroll: i } = e,
            [l, r] = s.useState(1),
            o = s.useCallback((e) => {
                r(e);
            }, []);
        s.useEffect(() => {
            r(1);
        }, [t]);
        let c = s.useMemo(() => ({ query: G.EMPTY_QUERY, page: l, pageSize: G.PAGE_SIZE, categoryId: t }), [l, t]),
            d = (0, J.bG)([et.A], () =>
                et.A.getFetchState({ query: G.EMPTY_QUERY, page: l, pageSize: G.PAGE_SIZE, categoryId: t }),
            ),
            u = (0, J.cf)([et.A], () => et.A.getSearchResults(c) ?? eS),
            h = (0, q.A)(u) ?? eS,
            { results: p, totalPages: m, loadId: _ } = s.useMemo(() => (d === ee.e.FETCHING ? h : u), [d, h, u]),
            g = s.useMemo(() => p?.filter((e) => e.type === Z.j.APPLICATION), [p]),
            x = s.useCallback((e) => {
                let { page: t, activeCategoryId: n, onSuccessCallback: i, guildId: a, fetchCounts: s } = e;
                s && j.$P({ query: G.EMPTY_QUERY, guildId: a }),
                    j.$P({
                        query: G.EMPTY_QUERY,
                        guildId: a,
                        options: { page: t, pageSize: G.PAGE_SIZE, categoryId: n },
                        onSuccessCallback: i,
                    });
            }, []);
        s.useEffect(() => {
            i(), x({ page: l, activeCategoryId: t, onSuccessCallback: () => {} });
        }, [t, i, x, l]);
        let f = s.useCallback(
            (e, t) => {
                k(D.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: O.ev.SEARCH,
                    application_id: e,
                    load_id: _,
                    position: t,
                }),
                    n(e);
            },
            [_, n],
        );
        return d === ee.e.ERROR
            ? (0, a.jsx)("div", { className: eE.Un, children: (0, a.jsx)($, { className: eE.z3 }) })
            : (0, a.jsxs)(ea, {
                  loading: d === ee.e.FETCHING,
                  children: [
                      (0, a.jsx)("div", {
                          className: eE.Qs,
                          children: g?.map((e, t) => {
                              if (e.type === Z.j.APPLICATION) {
                                  let n = e.data;
                                  return (0, a.jsx)(eI, { application: n, onSelectApplication: (e) => f(e, t) }, n.id);
                              }
                              return null;
                          }),
                      }),
                      (0, a.jsx)(Q.m, {
                          className: eE.JV,
                          totalCount: Math.min(m * G.PAGE_SIZE, G.MAX_PAGES * G.PAGE_SIZE),
                          pageSize: G.PAGE_SIZE,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: l,
                          onPageChange: o,
                      }),
                  ],
              });
    };
var ej = n(504797);
let eP = function (e) {
    let { tabId: t, onSelectApplication: n, onScroll: i } = e,
        l = s.useRef(null),
        r = s.useCallback(() => {
            l.current?.scrollTo({ to: 0 });
        }, []),
        o = (0, d.bG)([T.A], () => T.A.getCategories()),
        c = s.useMemo(() => o.find((e) => e.id === t), [o, t]),
        u = s.useMemo(
            () =>
                null != c
                    ? (function (e) {
                          switch (e.id) {
                              case 4:
                                  return U.intl.string(U.t["3m9Egb"]);
                              case 6:
                                  return U.intl.string(U.t.VJRr3Y);
                              case 8:
                                  return U.intl.string(U.t.Uv7mFd);
                              case 9:
                                  return U.intl.string(U.t.TEK9Ax);
                              case 10:
                                  return U.intl.string(U.t.lfBt2T);
                          }
                          return "";
                      })(c)
                    : "",
            [c],
        );
    return (0, a.jsxs)(K.A, {
        onScroll: i,
        ref: l,
        children: [
            (0, a.jsx)(Y.A, { title: c?.name ?? "", description: u, children: (0, a.jsx)(V.A, {}) }),
            (0, a.jsx)(z.A, {
                children:
                    null == c
                        ? (0, a.jsx)("div", { className: ej.U, children: (0, a.jsx)($, { className: ej.z }) })
                        : (0, a.jsx)(eN, { categoryId: c.id, onSelectApplication: n, resetScroll: r }),
            }),
        ],
    });
};
var ey = n(123791),
    eT = n(761508),
    eR = n(759057);
let eL = function (e) {
    let { tabs: t, onTabSelect: n, selectedTab: i, className: s } = e;
    return (0, a.jsx)(eT.V, {
        type: "top-pill",
        selectedItem: i,
        onItemSelect: n,
        className: s,
        children: t.map((e, t) => {
            let { id: n, label: i, count: s } = e;
            return (0, a.jsx)(
                eT.V.Item,
                {
                    id: n,
                    className: r()(eR.V, { [eR.r]: 0 === t }),
                    "aria-label": i,
                    children: null != s && s > 0 ? `${i} (${s})` : i,
                },
                n,
            );
        }),
    });
};
var eO = n(82293),
    eD = n(403362),
    ek = n(939249),
    ew = n(175671),
    eM = n(259407),
    eG = n(451988),
    eU = n(408278),
    eF = n(921853),
    eB = n(477155),
    eH = n(320448),
    eV = n(935286),
    eY = n(228366),
    ez = n(725951),
    eK = n(625494),
    eX = n(332412);
let eW = 16 / 9;
class e$ extends s.PureComponent {
    static defaultProps = { includeHitboxPadding: !0 };
    componentDidMount() {
        eK._.subscribe(D.jej.CAROUSEL_PREV, this.handlePrevious), eK._.subscribe(D.jej.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        eK._.unsubscribe(D.jej.CAROUSEL_PREV, this.handlePrevious),
            eK._.unsubscribe(D.jej.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let {
                current: e,
                count: t,
                includeHitboxPadding: n,
                arrowClassName: i,
                paginationDotClassName: s,
                paginationDotSelectedClassName: l,
                paginationArrowIconType: o = "arrow",
            } = this.props,
            d = r()(eX.sb, { [eX.JU]: n }, i);
        return (0, a.jsxs)("div", {
            className: r()(eX.ne, this.props.className),
            children: [
                (0, a.jsx)("div", {
                    className: d,
                    children: (0, a.jsx)(eU.K, {
                        variant: "icon-only",
                        icon: "caret" === o ? eF.n : eB.r,
                        "aria-label": U.intl.string(U.t.vgfxaA),
                        onClick: this.handlePrevious,
                    }),
                }),
                (0, a.jsx)("div", {
                    className: eX.r$,
                    children: c().times(t, (t) =>
                        (0, a.jsx)(
                            ek.D,
                            {
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? r()(eX.NU, l) : r()(eX.Lw, s),
                                "aria-label": U.intl.formatToPlainString(U.t["2SXOrM"], { pageNumber: t + 1 }),
                            },
                            `dot-${t}`,
                        ),
                    ),
                }),
                (0, a.jsx)("div", {
                    className: d,
                    children: (0, a.jsx)(eU.K, {
                        variant: "icon-only",
                        icon: "caret" === o ? eH._ : eV.E,
                        "aria-label": U.intl.string(U.t.XiOHRX),
                        onClick: this.handleNext,
                    }),
                }),
            ],
        });
    }
    handleDotClick = (e) => {
        let { onSetItem: t, onIntentionalChange: n, current: i } = this.props;
        n?.(i, e, "jump"), t(e);
    };
    handleNext = () => {
        let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
            i = n(1);
        e?.(t, i, "next");
    };
    handlePrevious = () => {
        let { onIntentionalChange: e, current: t, onChangePage: n } = this.props,
            i = n(-1);
        e?.(t, i, "previous");
    };
}
class eZ extends s.PureComponent {
    timer = new eG.IX();
    static defaultProps = { aspectRatio: eW };
    constructor(e) {
        super(e),
            (this.state = {
                visibleIndex: !0 === e.randomize ? c().random(0, e.items.length - 1) : 0,
                direction: ez.f.LEFT,
                paused: !1,
            });
    }
    handleWindowFocusChange = (e) => {
        let { focused: t } = e;
        this.setState({ paused: !t });
    };
    componentDidMount() {
        eY.h.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange),
            this.props.initialPaused || this.state.paused || this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), eY.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange);
    }
    componentDidUpdate(e, t) {
        let n = (e, t) => !e.initialPaused && !t.paused,
            i = n(this.props, this.state),
            a = n(e, t);
        i && !a ? this.startTimer() : !i && a && this.stopTimer();
        let { items: s } = this.props,
            { visibleIndex: l } = this.state;
        null == s[l] && this.changeItem(s, 1);
    }
    startTimer() {
        null != this.props.delay && this.timer.start(this.props.delay, this.nextItem);
    }
    stopTimer() {
        null != this.props.delay && this.timer.stop();
    }
    changeItem(e, t) {
        let n = this.state.visibleIndex + t;
        n < 0 ? (n = e.length - 1) : n > e.length - 1 && (n = 0);
        let { onChangeItem: i } = this.props;
        i?.(e[n], this.state.visibleIndex, n);
        let a = t > 0 ? ez.f.LEFT : ez.f.RIGHT;
        return this.setState({ visibleIndex: n, direction: a }), n;
    }
    getCurrentDirection = () => this.state.direction;
    nextItem = () => {
        let { items: e } = this.props;
        this.changeItem(e, 1);
    };
    previousItem = () => {
        let { items: e } = this.props;
        this.changeItem(e, -1);
    };
    render() {
        let {
                items: e,
                renderItem: t,
                className: n,
                slideAnimatorClassName: i,
                slideAnimatorSpringSettings: s,
                slideAnimatorFadeInOut: l,
                paginationClassName: o,
                paginationArrowClassName: c,
                paginationArrowIconType: d,
                paginationDotClassName: u,
                paginationDotSelectedClassName: h,
                themedPagination: p,
                includeHitboxPadding: m,
                style: _,
                aspectRatio: g,
                children: x,
            } = this.props,
            { visibleIndex: f } = this.state;
        return (0, a.jsxs)("div", {
            className: eX.zr,
            children: [
                (0, a.jsxs)("div", {
                    className: r()(eX.Cf, n),
                    style: _,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, a.jsx)("div", {
                            style: { aspectRatio: g },
                            children: (0, a.jsx)(ez.A, {
                                className: r()(eX.Dk, i),
                                step: f,
                                direction: this.getCurrentDirection(),
                                springSettings: s,
                                fadeInOut: l,
                                children: t(e[f], f),
                            }),
                        }),
                        e.length > 1 &&
                            (0, a.jsx)(e$, {
                                className: r()(o, p ? eX.S$ : eX.X$),
                                arrowClassName: c,
                                includeHitboxPadding: m,
                                current: f,
                                count: e.length,
                                onChangePage: (t) => this.changeItem(e, t),
                                onSetItem: this.handleSetItem,
                                onIntentionalChange: this.handleIntentionalChange,
                                paginationArrowIconType: d,
                                paginationDotClassName: u,
                                paginationDotSelectedClassName: h,
                            }),
                    ],
                }),
                null != x && x({ step: f, direction: this.getCurrentDirection() }),
            ],
        });
    }
    handleSetItem = (e) => {
        let { visibleIndex: t } = this.state,
            { items: n } = this.props;
        this.changeItem(n, e - t);
    };
    handleMouseEnter = () => {
        this.setState({ paused: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ paused: !1 });
    };
    handleIntentionalChange = (e, t, n) => {
        let { items: i, onIntentionalChange: a } = this.props;
        return a?.(i[t], e, t, n);
    };
}
var eJ = n(619517),
    eQ = n(248643),
    eq = n(34337),
    e0 = n(615300),
    e1 = n(456412),
    e7 = n(133296),
    e6 = n(848752),
    e9 = n(452282),
    e8 = n(821209),
    e2 = n(795574);
let e3 = `rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=${D.NzX}`,
    e5 = { width: 640, height: 360, margin: 15 },
    e4 = { width: 880, height: 495, margin: 20 },
    te = { width: 1920, height: 1080 },
    tt = { width: 1280, height: 720 },
    tn = (e) => (0, eq.$o)({ ...e, className: e2.tN, mediaPlayerClassName: e2.yf }),
    ti = (e) => (0, a.jsx)(eJ.Ay, { ...e }),
    ta = (e) => {
        let t,
            n,
            i,
            {
                item: s,
                size: l,
                onPlay: r,
                onEnded: o,
                onClick: c,
                playable: d,
                volume: u,
                isMuted: h,
                onVolumeChange: p,
                onMute: m,
            } = e;
        if (s.type === D.geh.YOUTUBE_VIDEO)
            (t = { url: (0, D.PE$)(s.youtubeVideoId), ...te }),
                (n = { url: `${(0, D.uJ2)(s.youtubeVideoId)}?${e3}`, ...tt }),
                (i = eM.mt.YOUTUBE);
        else {
            let e = null != s.width ? s.width : 0,
                i = null != s.height ? s.height : 0;
            (t = { url: s.thumbnailSrc, width: e, height: i }),
                (n = { url: s.src, proxyURL: s.src, width: e, height: i });
        }
        let _ = (0, a.jsx)(ew.rr, {
            href: null,
            thumbnail: t,
            video: n,
            provider: i,
            allowFullScreen: !0,
            maxHeight: l.height,
            maxWidth: l.width,
            onPlay: r,
            onEnded: o,
            playable: d,
            className: e2.Ki,
            volume: u,
            onVolumeChange: p,
            autoMute: h,
            onMute: m,
            autoPlay: d,
            renderVideoComponent: tn,
            renderImageComponent: ti,
            renderLinkComponent: eq.bU,
        });
        return d ? _ : (0, a.jsx)(ek.D, { className: e2.AU, onClick: c, children: _ });
    },
    ts = () =>
        (0, a.jsx)("div", {
            className: e2.eM,
            children: (0, a.jsx)(e8.A, { inactive: !0, className: e2.J6, renderLinkComponent: eq.bU }),
        });
class tl extends s.PureComponent {
    static defaultProps = { autoplayInterval: 8e3, paused: !1 };
    state = {
        currentIndex: 0,
        animate: !0,
        playingVideo: !1,
        hasInteracted: !1,
        hoveringPreviousItem: !1,
        hoveringNextItem: !1,
        volume: 1,
        isMuted: !0,
    };
    componentDidMount() {
        eK._.subscribe(D.jej.CAROUSEL_PREV, this.manualPrevious), eK._.subscribe(D.jej.CAROUSEL_NEXT, this.manualNext);
    }
    componentWillUnmount() {
        eK._.unsubscribe(D.jej.CAROUSEL_PREV, this.manualPrevious),
            eK._.unsubscribe(D.jej.CAROUSEL_NEXT, this.manualNext);
    }
    getItemSize = () => {
        let { width: e } = this.props,
            t = e4;
        return null != e && e < t.width && (t = e5), t;
    };
    getStyle(e, t) {
        let n = t.interpolate({ inputRange: [0, 1], outputRange: [1, 0], extrapolate: e0.A.Extrapolate.CLAMP });
        return {
            opacity: t.interpolate({ inputRange: [0, 1], outputRange: [0.3, 1], extrapolate: e0.A.Extrapolate.CLAMP }),
            filter: e0.A.template`grayscale(${n})`,
        };
    }
    setItem = (e, t) => {
        let {
                props: { items: n, onIntentionalChange: i },
                state: { currentIndex: a },
            } = this,
            s = (0, e9.U3)(a, n.length),
            l = (0, e9.U3)(e, n.length),
            r = 1 === Math.abs(e - s) || (e === n.length - 1 && 0 === s) || (0 === e && s === n.length - 1);
        this.setState({ playingVideo: !1, currentIndex: l, animate: r, hasInteracted: t }),
            t && null != i && i(n[l], s, l);
    };
    autoNext = () => {
        this.setItem(this.state.currentIndex + 1, !1);
    };
    manualNext = () => {
        this.setItem(this.state.currentIndex + 1, !0);
    };
    manualPrevious = () => {
        this.setItem(this.state.currentIndex - 1, !0);
    };
    handlePlay = (e) => this.setState({ playingVideo: !0, hasInteracted: !e });
    handleEnded = () => {
        this.state.hasInteracted || this.autoNext();
    };
    handleVolumeChange = (e) => {
        this.setState({ volume: e, hasInteracted: !0 });
    };
    handleMute = (e) => {
        this.setState({ isMuted: e, hasInteracted: !0 });
    };
    handleVideoClick = (e) => {
        this.setItem(e, !0);
    };
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: n } = this.props;
        null != n && n(e, t), this.setState({ hasInteracted: !0 });
    }
    handleEdgeItemMouseEnter(e) {
        let { currentIndex: t } = this.state;
        e < t ? this.setState({ hoveringPreviousItem: !0 }) : e > t && this.setState({ hoveringNextItem: !0 });
    }
    handleEdgeItemMouseLeave = () => {
        this.setState({ hoveringPreviousItem: !1, hoveringNextItem: !1 });
    };
    renderCarouselImage = (e, t, n) =>
        n
            ? (0, a.jsx)(ek.D, {
                  onClick: () => this.handleCurrentItemClick(e, t),
                  className: e2.AU,
                  children: (0, a.jsx)("img", { src: e.src, alt: "", className: e2.NP }),
              })
            : (0, a.jsx)(ek.D, {
                  onClick: () => this.setItem(t, !0),
                  className: e2.AU,
                  children: (0, a.jsx)("img", { alt: "", className: e2.tv, src: e.src, draggable: !1 }),
              });
    renderItem = (e, t, n) => {
        let { currentIndex: i, volume: s, isMuted: l } = this.state,
            o = t === (0, e9.U3)(i, this.props.items.length);
        return (0, a.jsx)(e0.A.div, {
            className: r()(e2.AS, { [e2.Xt]: o }),
            style: null != n ? this.getStyle(t, n) : null,
            onMouseEnter: o ? null : () => this.handleEdgeItemMouseEnter(t),
            onMouseLeave: o ? null : this.handleEdgeItemMouseLeave,
            children:
                e.type === D.geh.VIDEO || e.type === D.geh.YOUTUBE_VIDEO
                    ? (0, a.jsx)(ta, {
                          item: e,
                          size: this.getItemSize(),
                          onPlay: this.handlePlay,
                          onEnded: this.handleEnded,
                          playable: o,
                          onClick: () => this.handleVideoClick(t),
                          volume: s,
                          onVolumeChange: this.handleVolumeChange,
                          isMuted: l,
                          onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, o),
        });
    };
    renderCarousel() {
        let { items: e } = this.props,
            { currentIndex: t, animate: n, hoveringPreviousItem: i, hoveringNextItem: s } = this.state,
            l = (0, a.jsx)(e9.Ay, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: n,
                edgeItems: 2,
            });
        return e.length <= 1
            ? l
            : (0, a.jsxs)("div", {
                  className: e2.HY,
                  children: [
                      l,
                      (0, a.jsx)(e6.Q8, { onClick: this.manualPrevious, className: r()(e2.UE, { [e2.h_]: i }) }),
                      (0, a.jsx)(e6.Oj, { onClick: this.manualNext, className: r()(e2.UE, { [e2.h_]: s }) }),
                  ],
              });
    }
    getPaginationSrc(e) {
        return e.type === D.geh.YOUTUBE_VIDEO
            ? (0, D.PE$)(e.youtubeVideoId)
            : e.type === D.geh.IMG
              ? e.src
              : e.type === D.geh.VIDEO
                ? e.thumbnailSrc
                : null;
    }
    renderPaginationItem = (e, t) => {
        let { currentIndex: n } = this.state,
            i = n === t;
        return (0, a.jsxs)(
            "div",
            {
                className: r()(e2.Yw, i ? e2.sM : e2.N7),
                children: [
                    (0, a.jsx)("img", {
                        alt: null == e.alt ? t : e.alt,
                        className: e2.Pr,
                        src: this.getPaginationSrc(e),
                        draggable: !1,
                    }),
                    e.type === D.geh.YOUTUBE_VIDEO || e.type === D.geh.VIDEO ? (0, a.jsx)(ts, {}) : null,
                    i ? (0, a.jsx)("div", { className: e2.SD }) : null,
                ],
            },
            `page-${t}`,
        );
    };
    render() {
        let { items: e, className: t, autoplayInterval: n, paused: i } = this.props,
            { currentIndex: s, playingVideo: l, hasInteracted: r } = this.state;
        return (0, a.jsxs)(e7.A, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: n,
            className: t,
            disable: l || r || i,
            children: [
                this.renderCarousel(),
                (0, a.jsx)("div", {
                    className: e2.X$,
                    children: (0, a.jsx)(e6.Ay, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: s,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: e2.XG,
                        align: e.length < 6 ? e6.Ay.Align.LEFT : e6.Ay.Align.CENTER,
                    }),
                }),
            ],
        });
    }
}
(0, e1.A)(tl);
var tr = n(665513);
let to = (e) => {
        let { className: t, ...n } = e;
        return (0, a.jsx)(eQ.A, {
            ...n,
            className: r()(tr.Zy, t),
            mediaPlayerClassName: tr.Zy,
            renderLinkComponent: eq.bU,
        });
    },
    tc = (e) => {
        let { containerClassName: t, className: n, ...i } = e;
        return (0, a.jsx)(eJ.Ay, { ...i, className: r()(n, t) });
    },
    td = { width: 1280, height: 720 },
    tu = { width: 640, height: 360 },
    th = `rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=${D.NzX}`,
    tp = (e) => {
        let t,
            n,
            i,
            { item: s, onPlay: l, volume: r, onVolumeChange: o, onMute: c, isMuted: d, autoPlay: u } = e;
        if (s.type === D.geh.YOUTUBE_VIDEO)
            (t = { url: (0, D.PE$)(s.youtubeVideoId), ...td }),
                (n = { url: `${(0, D.uJ2)(s.youtubeVideoId)}?${th}`, ...tu }),
                (i = eM.mt.YOUTUBE);
        else {
            let e = null != s.width ? s.width : 0,
                i = null != s.height ? s.height : 0;
            (t = { url: s.thumbnailSrc, width: e, height: i }),
                (n = { url: s.src, proxyURL: s.src, width: e, height: i });
        }
        return (0, a.jsx)("div", {
            className: tr.x,
            children: (0, a.jsx)(ew.rr, {
                className: tr.Zy,
                iframeWrapperClassName: tr.Zy,
                href: null,
                thumbnail: t,
                video: n,
                provider: i,
                maxHeight: e5.height,
                maxWidth: "small",
                onPlay: l,
                playable: !0,
                volume: r,
                onVolumeChange: o,
                autoMute: d,
                onMute: c,
                autoPlay: u,
                renderImageComponent: tc,
                renderVideoComponent: to,
                renderLinkComponent: eq.bU,
            }),
        });
    };
class tm extends s.PureComponent {
    static defaultProps = { paused: !1, videoAutoPlay: !0 };
    state = {
        hasInteracted: !1,
        isVideoPlaying: !1,
        isMuted: !0,
        volume: 1,
        status: new Map(),
        imageLoadingStartTime: new Map(),
    };
    componentDidMount() {
        let { items: e } = this.props;
        e.length > 0 &&
            e[0].type === D.geh.IMG &&
            this.setState({
                imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now()),
            });
    }
    handlePlay = (e) => {
        this.setState({ isVideoPlaying: !0, hasInteracted: !e });
    };
    handleVolumeChange = (e) => {
        this.setState({ volume: e, hasInteracted: !0 });
    };
    handleMute = (e) => {
        this.setState({ isMuted: e, hasInteracted: !0 });
    };
    handleChangeItem = (e) => {
        this.setState({ isVideoPlaying: !1 }),
            e.type === D.geh.IMG &&
                this.setState({
                    imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()),
                });
    };
    handleIntentionalChange = (e, t, n, i) => {
        this.setState({ hasInteracted: !0 });
        let { onIntentionalChange: a } = this.props;
        null != a && a(e, t, n, i);
    };
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: n } = this.props;
        null != n && n(e, t), this.setState({ hasInteracted: !0 });
    }
    handleOnErrorImg = (e) => {
        this.setState({ status: new Map(this.state.status).set(e.target.src, "errored") });
    };
    handleOnLoadImg = (e) => {
        let { onImageLoad: t } = this.props;
        this.setState({ status: new Map(this.state.status).set(e.target.src, "loaded") });
        let n = this.state.imageLoadingStartTime.get(e.target.src),
            i = null != n ? Date.now() - n : void 0;
        t?.({ src: e.target.src, loadTimeMs: i });
    };
    renderItem = (e, t) => {
        let n,
            { isMuted: i, volume: s } = this.state,
            { videoAutoPlay: l } = this.props;
        switch (e.type) {
            case D.geh.YOUTUBE_VIDEO:
            case D.geh.VIDEO:
                n = (0, a.jsx)(tp, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: i,
                    volume: s,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: l,
                });
                break;
            case D.geh.IMG:
                if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, a.jsx)(p.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t.UvDfMz) });
                    return (0, a.jsx)("div", {
                        className: tr.Un,
                        children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e,
                    });
                }
                {
                    let t = e.alt ?? U.intl.string(U.t.X4IxWL);
                    n = (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(en.y, {
                                className: r()(tr.u1, { [tr.R]: void 0 !== this.state.status.get(e.src) }),
                                type: en.y.Type.SPINNING_CIRCLE,
                            }),
                            (0, a.jsx)("img", {
                                onError: this.handleOnErrorImg,
                                onLoad: this.handleOnLoadImg,
                                className: r()(tr.JD, { [tr.R]: "loaded" !== this.state.status.get(e.src) }),
                                src: e.src,
                                alt: t,
                            }),
                        ],
                    });
                }
                break;
            default:
                throw Error("Unexpected MediaType");
        }
        return (0, a.jsx)(ek.D, { className: tr.Pj, onClick: () => this.handleCurrentItemClick(e, t), children: n });
    };
    render() {
        let { items: e, autoplayInterval: t, className: n, paused: i, themedPagination: s } = this.props,
            { hasInteracted: l } = this.state;
        return (0, a.jsx)(eZ, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: i || l,
            renderItem: this.renderItem,
            className: r()(tr.Gt, n),
            themedPagination: s,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
        });
    }
}
var t_ = n(256905),
    tg = n(531685),
    tx = n(427019);
function tf(e) {
    let { application: t, carouselItems: n } = e,
        i = (0, d.bG)([tg.A], () => tg.A.isFocused()),
        l = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("img", { className: tx.M, src: W, "aria-hidden": !0, alt: "" }),
                (0, a.jsx)(p.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t.UvDfMz) }),
            ],
        });
    n.forEach((e, i) => {
        e.alt = U.intl.formatToPlainString(U.t.sSEhHb, { index: i + 1, totalImages: n.length, name: t.name });
    });
    let r = s.useCallback(
        (e, t) => {
            if (e.type === D.geh.IMG) {
                let t = n.filter((e) => e.type === D.geh.IMG),
                    i = t.findIndex((t) => t === e);
                if (i < 0) return;
                let a = t.map((e) => {
                    var t;
                    return {
                        url: ((t = e.src), `${t.split("?")[0]}?size=2048`),
                        original: e.src,
                        width: e.width,
                        height: e.height,
                        type: "IMAGE",
                    };
                });
                (0, t_.R)({
                    items: a,
                    startingIndex: i,
                    shouldHideMediaOptions: !0,
                    location: "GlobalDiscoveryAppsDetailCarousel",
                });
            }
        },
        [n],
    );
    return 0 === n.length
        ? null
        : (0, a.jsx)(tm, {
              className: tx.D,
              themedPagination: !0,
              items: n,
              autoplayInterval: 8e3,
              paused: !i,
              videoAutoPlay: !0,
              onCurrentItemClick: r,
              errorComponent: l,
          });
}
var tA = n(168186);
n(827669);
var tC = n(733975);
function tb(e) {
    let { application: t } = e,
        n = s.useMemo(() => {
            let e = t.directory_entry?.popular_application_commands;
            return null != e
                ? e.map((e) => (0, tA.Oe)({ rootCommand: e, command: e, applicationId: e.application_id }))
                : [];
        }, [t]);
    return 0 === n.length
        ? null
        : (0, a.jsxs)("div", {
              className: tC.hd,
              children: [
                  (0, a.jsx)(p.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.swIgTL),
                  }),
                  (0, a.jsx)("div", {
                      className: tC.hQ,
                      children: n.map((e) =>
                          (0, a.jsxs)(
                              "div",
                              {
                                  className: tC.dO,
                                  children: [
                                      (0, a.jsxs)(g.E, {
                                          className: tC.p6,
                                          variant: "code",
                                          color: "text-strong",
                                          children: ["/", e.displayName],
                                      }),
                                      (0, a.jsx)(g.E, {
                                          variant: "text-md/normal",
                                          color: "text-default",
                                          children: e.displayDescription,
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
var tv = n(534890),
    tI = n(812991),
    tE = n(177953),
    tS = n(203363),
    tN = n(975571),
    tj = n(76843),
    tP = n(169795);
let ty = tN.A.getArticleURL(D.MVz.BOT_DATA_ACCESS);
function tT(e) {
    let { application: t } = e,
        { hasMessageContent: n, hasGuildPresences: i, hasGuildMembers: l, hasIntents: r } = (0, tS.Z)(t),
        o = s.useCallback(() => {
            null != t.privacy_policy_url && (0, tj.h)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, a.jsxs)("div", {
        className: tP.hd,
        children: [
            (0, a.jsx)(p.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: U.intl.string(U.t.QzDgMq),
            }),
            (0, a.jsxs)("div", {
                className: tP.hQ,
                children: [
                    r &&
                        (0, a.jsxs)("ul", {
                            className: tP.In,
                            children: [
                                (0, a.jsx)(p.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-default",
                                    children: U.intl.string(U.t.U6KH5S),
                                }),
                                n &&
                                    (0, a.jsx)(tR, {
                                        icon: tv.o,
                                        heading: U.intl.string(U.t.gJpBO2),
                                        body: U.intl.string(U.t["L+QVbh"]),
                                    }),
                                i &&
                                    (0, a.jsx)(tR, {
                                        icon: tI.n,
                                        heading: U.intl.string(U.t["jo0oj/"]),
                                        body: U.intl.string(U.t.Dm0jqx),
                                    }),
                                l &&
                                    (0, a.jsx)(tR, {
                                        icon: tE.n,
                                        heading: U.intl.string(U.t.QZql7O),
                                        body: U.intl.string(U.t["ez/N/R"]),
                                    }),
                            ],
                        }),
                    (0, a.jsx)(g.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: U.intl.format(U.t.b6nqk0, { helpCenterUrl: ty }),
                    }),
                    null != t.privacy_policy_url &&
                        (0, a.jsx)(g.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: tP.hM,
                            children: U.intl.format(U.t.agYVY5, { onClick: o }),
                        }),
                ],
            }),
        ],
    });
}
function tR(e) {
    let { icon: t, heading: n, body: i } = e;
    return (0, a.jsxs)("li", {
        className: tP.KT,
        children: [
            (0, a.jsx)(t, { color: "currentColor", size: "md" }),
            (0, a.jsxs)("div", {
                className: tP.D6,
                children: [
                    (0, a.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: n }),
                    (0, a.jsx)(g.E, { variant: "text-md/normal", color: "text-default", children: i }),
                ],
            }),
        ],
    });
}
n(321073);
var tL = n(990078),
    tO = n(319060),
    tD = n(664121),
    tk = n(573435),
    tw = n(773669),
    tM = n(240248),
    tG = n(805936),
    tU =
        (((i = {})[(i.SMALL = (0, tM.xI)(tO.A.GUILD_COUNT_SMALL_ICON_SIZE))] = "SMALL"),
        (i[(i.LARGE = (0, tM.xI)(tO.A.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE"),
        i);
let tF = { [tU.SMALL]: tG.Ps, [tU.LARGE]: tG.XY },
    tB = { [tU.SMALL]: tG.Bx, [tU.LARGE]: tG.J3 };
function tH(e) {
    let {
            application: t,
            mutualGuilds: n,
            mutualGuildShownMax: i = 4,
            className: l,
            textVariant: o = "text-sm/normal",
            compact: c,
            guildIconSize: u = tU.LARGE,
            guildsClassName: h,
            children: p,
        } = e,
        m = (0, d.bG)([tw.default], () => tw.default.locale),
        _ = new Intl.ListFormat(m),
        x = t.directory_entry?.guild_count ?? 0,
        f = n?.length ?? 0,
        A = Math.max(0, x - f),
        { shownMutualGuilds: C, hiddenMutualGuilds: b } = s.useMemo(() => {
            let e = [],
                t = [];
            return (
                n?.forEach((n) => {
                    e.length < i && null != n.icon ? e.push(n) : t.push(n);
                }),
                e.length === i && t.length > 0 && (t.push(e[i - 1]), (e = e.slice(0, i - 1))),
                { shownMutualGuilds: e, hiddenMutualGuilds: t }
            );
        }, [n, i]),
        v = b.length,
        I = (function (e, t, n, i, a) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === n) return U.intl.formatToPlainString(U.t.pnzE1t, { mutualGuildCount: t });
            let s = t > 0 ? U.t.YR8PSL : U.t.GQjq6c,
                l = new Intl.NumberFormat(i, { notation: a ? "compact" : "standard", compactDisplay: "short" });
            return U.intl.formatToPlainString(s, {
                guildCount: l.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: l.format(n),
            });
        })(x, f, A, m, c);
    return 0 === C.length && null == I
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  p,
                  (0, a.jsxs)("div", {
                      className: r()(l, tG.iE),
                      children: [
                          (0, a.jsx)("div", {
                              className: r()(tG.Pt, h),
                              children:
                                  C.length > 0
                                      ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                C.map((e, t) => {
                                                    let n = t === C.length - 1 && 0 === v,
                                                        i = eo.Ay.getGuildIconURL({
                                                            id: e.id,
                                                            icon: e.icon,
                                                            size: u,
                                                            canAnimate: !1,
                                                        }),
                                                        l = (0, a.jsx)(tL.m, {
                                                            text: e.name,
                                                            position: "top",
                                                            children: (0, a.jsx)("img", {
                                                                className: r()(tG.Kk, tB[u]),
                                                                src: i,
                                                                alt: "",
                                                            }),
                                                        });
                                                    return n
                                                        ? (0, a.jsx)(s.Fragment, { children: l }, e.id)
                                                        : (0, a.jsx)(
                                                              tk.Ay,
                                                              {
                                                                  className: tG.SA,
                                                                  height: u,
                                                                  width: u,
                                                                  mask: tk.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                                                                  children: l,
                                                              },
                                                              e.id,
                                                          );
                                                }),
                                                v > 0
                                                    ? (0, a.jsx)(tL.m, {
                                                          text: U.intl.formatToPlainString(U.t.m6oRrA, {
                                                              appNames: _.format(b.map((e) => e.name)),
                                                          }),
                                                          position: "top",
                                                          children: (0, a.jsxs)("div", {
                                                              className: r()(tG.S_, tF[u]),
                                                              children: ["+", v],
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : (0, a.jsx)(tD.R, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: u,
                                            height: u,
                                            className: tG.DE,
                                        }),
                          }),
                          null != I ? (0, a.jsx)(g.E, { variant: o, color: "text-default", children: I }) : null,
                      ],
                  }),
              ],
          });
}
var tV = n(973172),
    tY = n(788021);
function tz(e) {
    let { application: t, className: n } = e,
        i = s.useCallback((e) => {
            k(D.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: O.ev.APPLICATION,
            }),
                B({ categoryId: e.id });
        }, []);
    return null == t.categories || 0 === t.categories.length
        ? null
        : (0, a.jsxs)("div", {
              className: n,
              children: [
                  (0, a.jsx)(p.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.s7iald),
                  }),
                  (0, a.jsx)("div", {
                      className: tY.L,
                      children: t.categories.map((e) =>
                          (0, a.jsx)(
                              ek.D,
                              {
                                  className: tY.c,
                                  onClick: () => i(e),
                                  children: (0, a.jsx)(g.E, {
                                      variant: "text-sm/semibold",
                                      color: "redesign-button-tertiary-text",
                                      children: e.name,
                                  }),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
var tK = n(462887),
    tX = n(514042),
    tW = n(194261),
    t$ = n(173936),
    tZ = n(9578),
    tJ = n(736653),
    tQ = n(573648),
    tq = n(355584);
function t0(e) {
    let { application: t, className: n, innerClassName: i } = e,
        s = t.directory_entry?.external_urls ?? [];
    return null != t.terms_of_service_url || null != t.privacy_policy_url || s.length > 0
        ? (0, a.jsxs)("div", {
              className: r()(tq.kL, n),
              children: [
                  (0, a.jsx)(p.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.l6DP2n),
                  }),
                  (0, a.jsxs)("div", {
                      className: r()(tq.p_, i),
                      children: [
                          s.map((e, t) => (0, a.jsx)(t1, { url: e.url, children: e.name }, t)),
                          null != t.terms_of_service_url
                              ? (0, a.jsx)(t7, {
                                    icon: tX.o,
                                    url: t.terms_of_service_url,
                                    children: U.intl.string(U.t.s7STcY),
                                })
                              : null,
                          null != t.privacy_policy_url
                              ? (0, a.jsx)(t7, {
                                    icon: tW.X,
                                    url: t.privacy_policy_url,
                                    children: U.intl.string(U.t.kH3JR5),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
}
function t1(e) {
    let { url: t, children: n } = e,
        i = (0, tJ.Ay)(),
        s = tQ.A.getByUrl(t),
        l = (0, tK.M)(i) ? s?.icon?.darkSVG : s?.icon?.lightSVG;
    return (0, a.jsx)(t7, { icon: void 0 === l ? t$.q : void 0, imageSrc: l, url: t, children: n });
}
function t7(e) {
    let { icon: t, imageSrc: n, iconColor: i, url: s, children: l } = e,
        o = w(),
        c = null;
    null != t
        ? (c = (0, a.jsx)(t, { className: tq.GU, color: i ?? "currentColor", width: 20, height: 20, size: "custom" }))
        : null != n && (c = (0, a.jsx)("img", { className: tq.GR, src: n, alt: "" }));
    let d = (0, a.jsxs)(a.Fragment, {
        children: [c, (0, a.jsx)(g.E, { className: tq.so, variant: "text-sm/medium", selectable: !0, children: l })],
    });
    return (0, a.jsx)(tZ.A, {
        href: s,
        className: r()(tq.Aw, tq.SF),
        trusted: !o,
        useDefaultUnderlineStyles: !1,
        children: d,
    });
}
var t6 = n(449054),
    t9 = n(781696),
    t8 = n(950305),
    t2 = n(548118),
    t3 = n(714991),
    t5 = n(776231),
    t4 = n(860689),
    ne = n(728968),
    nt = n(937495),
    nn = n(517061);
function ni(e) {
    let { guild: t, className: n, onClick: i } = e,
        s = (0, tJ.Ay)(),
        l = (0, t4.dangerouslyConstructGuildRecordFromUntypedObject)({ name: t.name, icon: t.icon }),
        o = eo.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discovery_splash, size: 192 * (0, t5.mZ)() }),
        c =
            null != o
                ? o
                : (function (e) {
                      switch (e) {
                          case D.NJ8.DARK:
                              return nt;
                          case D.NJ8.LIGHT:
                              return nn;
                      }
                  })(s),
        d = eo.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 50 });
    return (0, a.jsxs)(ek.D, {
        className: r()(ne.Nr, n),
        onClick: i,
        "aria-label": U.intl.string(U.t.RB4L2x),
        children: [
            (0, a.jsxs)("div", {
                className: ne.MY,
                children: [
                    (0, a.jsx)("img", { src: c, alt: "", className: ne.j0 }),
                    (0, a.jsx)("div", {
                        className: ne.$f,
                        children: (0, a.jsx)(tk.Ay, {
                            mask: tk.Ay.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, a.jsx)("div", {
                                className: ne.SA,
                                children: (0, a.jsx)(t2.Ay, {
                                    className: ne.__invalid_icon,
                                    iconSrc: d,
                                    guild: l,
                                    size: t2.Ay.Sizes.LARGE,
                                }),
                            }),
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ne.RN,
                children: [
                    (0, a.jsxs)("div", {
                        className: ne.Y_,
                        children: [
                            (0, a.jsx)(t3.A, { className: ne.n2, guild: t, tooltipColor: t9.ST.Colors.PRIMARY }),
                            (0, a.jsx)(p.D, { variant: "heading-md/semibold", className: ne.J5, children: t.name }),
                        ],
                    }),
                    (0, a.jsx)(g.E, {
                        className: ne.eF,
                        variant: "text-sm/normal",
                        color: "text-default",
                        lineClamp: 2,
                        children: t.description,
                    }),
                    (0, a.jsx)("div", {
                        className: ne.Fj,
                        children: (0, a.jsxs)("div", {
                            className: ne.FG,
                            children: [
                                (0, a.jsx)(t8.n, { color: "currentColor", className: ne.NP, size: "xs" }),
                                (0, a.jsx)(g.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: U.intl.format(U.t.zRl6XR, { count: t.approximate_member_count }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
let na = "redirect_to_support_server";
function ns(e) {
    var t;
    let n,
        i,
        l,
        { application: r, className: o } = e,
        { onGoToSupportServer: c } =
            ((t = r),
            (n = w()),
            (i = (0, d.bG)([E.default], () => E.default.getSessionId())),
            (l = s.useCallback(async () => {
                try {
                    let e = t?.guild?.id;
                    if (null != e) {
                        k(D.HAw.APP_DIRECTORY_SUPPORT_SERVER_JOINED, { application_id: t.id, support_guild_id: e });
                        let n = { page: D.liQ.APPLICATION_DIRECTORY };
                        await (0, t6.Z2)(e, n);
                    }
                } catch {}
            }, [t])),
            s.useEffect(() => {
                let e = new URL(location.href);
                if (null != t && n && null != i && "true" === e.searchParams.get(na)) {
                    e.searchParams.delete(na);
                    let t = e.pathname + e.search;
                    (0, I.bG)(t), l();
                }
            }, [n, l, i, t]),
            {
                onGoToSupportServer: s.useCallback(() => {
                    null != t?.guild?.id && (n ? l() : M({ [na]: "true" }));
                }, [t, l, n]),
            });
    return null != r.guild && r.guild.features.includes(D.GuildFeatures.DISCOVERABLE)
        ? (0, a.jsxs)("div", {
              className: o,
              children: [
                  (0, a.jsx)(p.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.KJEO27),
                  }),
                  (0, a.jsx)(ni, { guild: r.guild, onClick: c }),
              ],
          })
        : null;
}
var nl = n(820764);
let nr = (0, U.getAvailableLocales)();
function no(e) {
    let { application: t, className: n } = e,
        i = (0, d.bG)([tw.default], () => tw.default.locale),
        { supportedLanguages: l, usersLanguageIsFirst: o } = s.useMemo(() => {
            if (t.directory_entry?.supported_locales != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    n = e.has(i),
                    a = nr.filter((t) => e.has(t.value));
                return (
                    n && a.sort((e, t) => (e.value === i ? -1 : +(t.value === i))),
                    { supportedLanguages: a.map((e) => U.intl.string(e.localizedName)), usersLanguageIsFirst: n }
                );
            }
            return { supportedLanguages: [], usersLanguageIsFirst: !1 };
        }, [t.directory_entry, i]);
    return (0, a.jsxs)("div", {
        className: n,
        children: [
            (0, a.jsx)(p.D, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: U.intl.string(U.t.Fbjlu3),
            }),
            (0, a.jsx)("ul", {
                className: nl.nw,
                children: l.map((e, t) =>
                    (0, a.jsx)(
                        "li",
                        {
                            className: r()(nl.WH, nl.O6),
                            children: (0, a.jsx)(g.E, {
                                variant: 0 === t && o ? "text-sm/bold" : "text-sm/normal",
                                children: e,
                            }),
                        },
                        e,
                    ),
                ),
            }),
            " ",
        ],
    });
}
var nc = n(78655);
function nd(e) {
    let { className: t, view: n, application: i } = e,
        s = "embedded" === n,
        l = (0, tV.A)({ application: i });
    return (0, a.jsxs)("div", {
        className: r()(t, { [nc.PD]: !s, [nc.UT]: s }),
        children: [
            (0, a.jsxs)("div", {
                className: r()(nc.hd, { [nc.d5]: s }),
                children: [
                    (0, a.jsx)("div", {
                        className: nc.iY,
                        children: (0, a.jsx)(tH, {
                            application: i,
                            mutualGuilds: l,
                            mutualGuildShownMax: 3,
                            className: nc.wu,
                            guildIconSize: tU.SMALL,
                            guildsClassName: nc.HG,
                            compact: !0,
                            children: (0, a.jsx)(p.D, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: U.intl.string(U.t["3NxHC4"]),
                            }),
                        }),
                    }),
                    (0, a.jsx)(tz, { application: i, className: nc.iY }),
                    (0, a.jsx)(no, { application: i, className: nc.iY }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: r()(nc.hd, { [nc.d5]: s }),
                children: [
                    (0, a.jsx)(t0, { application: i, className: nc.iY, innerClassName: s ? nc.RU : void 0 }),
                    (0, a.jsx)(ns, { application: i, className: nc.iY }),
                ],
            }),
        ],
    });
}
var nu = n(791332),
    nh = n.n(nu),
    np = n(900797),
    nm = n(847374),
    n_ = n(558179),
    ng = n(349288),
    nx = n(376728),
    nf = n(167189),
    nA = n(833291),
    nC = n(481859),
    nb = n(365526);
let nv = /^discord.gg\/[a-zA-Z0-9-]+/,
    nI = {
        ...n_.A.rules,
        heading: {
            ...n_.A.rules.heading,
            react(e, t, n) {
                let i = `h${Math.min(Math.max(2, e.level + 1), 4)}`;
                return (0, a.jsx)(nC.A, { tag: i, children: t(e.content, n) }, n.key);
            },
        },
        image: { ...nh().defaultRules.image },
        inviteLink: {
            order: n_.A.rules.link.order + 1,
            match: (e, t) => (t.inline ? nv.exec(e) : null),
            parse: (e, t, n) => {
                let i = (0, nA.br)(e[0]);
                return null == i || i.type !== nf.I.INVITE
                    ? { type: "text", content: e[0] }
                    : {
                          type: "inviteLink",
                          content: [{ type: "text", content: e[0] }],
                          onClick: () => {
                              nx.Ay.acceptInviteAndTransitionToInviteChannel({
                                  inviteKey: i.code,
                                  context: { location: "Application Directory" },
                              }),
                                  n.closeModal?.();
                          },
                      };
            },
            react: (e, t, n) =>
                (0, a.jsx)(
                    ng.Anchor,
                    {
                        onClick: (t) => {
                            t.preventDefault(), e.onClick();
                        },
                        children: (0, nb.t)(e, t, n),
                    },
                    n.key,
                ),
        },
    };
var nE = n(349202);
let nS = nh().parserFor(nI),
    nN = nh().reactFor(nh().ruleOutput(nI, "react"));
function nj(e) {
    let { description: t, supportsMarkdown: n } = e,
        [i, l] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            l((o.current?.scrollHeight ?? 0) - (o.current?.clientHeight ?? 0) > 1);
        });
        return e.observe(o.current), () => e.disconnect();
    }, []);
    let [c, d] = s.useState(!1),
        u = s.useCallback(() => {
            d((e) => !e);
        }, []);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                ref: o,
                className: r()({ [nE.mA]: !c, [nE.ii]: !c && "Safari" === platform.name }),
                children: n
                    ? (0, a.jsx)(n_.A, {
                          className: nE.R4,
                          parser: nS,
                          output: nN,
                          state: { allowLinks: !0 },
                          children: t,
                      })
                    : (0, a.jsx)(g.E, { variant: "text-md/normal", color: "text-default", children: t }),
            }),
            i || c ? (0, a.jsx)(nP, { isShowingMore: c, onToggle: u }) : null,
        ],
    });
}
function nP(e) {
    let { onToggle: t, isShowingMore: n } = e,
        i = s.useMemo(
            () =>
                (0, a.jsxs)("div", {
                    className: nE.eR,
                    children: [
                        (0, a.jsx)(g.E, {
                            variant: "text-md/semibold",
                            color: "interactive-text-default",
                            children: n ? U.intl.string(U.t["vtfc4+"]) : U.intl.string(U.t.ZDRyuq),
                        }),
                        n
                            ? (0, a.jsx)(np.t, { size: "md", color: "currentColor", className: nE.ys })
                            : (0, a.jsx)(nm.a, { size: "md", color: "currentColor", className: nE.ys }),
                    ],
                }),
            [n],
        );
    return (0, a.jsxs)(ek.D, {
        className: nE.dO,
        onClick: t,
        children: [(0, a.jsx)("div", { className: nE.yF }), i, (0, a.jsx)("div", { className: nE.yF })],
    });
}
let ny = function (e) {
    let { application: t } = e,
        n = t.directory_entry?.detailed_description,
        i = t.directory_entry?.short_description,
        l = s.useMemo(
            () =>
                null != n && n.length > 0
                    ? (0, a.jsx)(nj, { description: n, supportsMarkdown: !0 })
                    : null != i && i.length > 0
                      ? (0, a.jsx)(nj, { description: i, supportsMarkdown: !1 })
                      : null,
            [n, i],
        );
    return null == l
        ? null
        : (0, a.jsxs)("div", {
              className: nE.l4,
              children: [
                  (0, a.jsx)(p.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.txraKS),
                  }),
                  l,
              ],
          });
};
var nT = n(136722),
    nR = n(595738),
    nL = n(376092),
    nO = n(925317);
let nD = function (e) {
    let { application: t } = e,
        n = s.useMemo(() => {
            let e = t?.install_params?.permissions;
            if (null != e) return nL.Q.filter((t) => nT.zy(nT.iu(e), t));
        }, [t?.install_params?.permissions]);
    return null != n && n.length > 0
        ? (0, a.jsxs)("div", {
              className: nO.A,
              children: [
                  (0, a.jsx)(p.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.runNF8),
                  }),
                  (0, a.jsx)(nR.A, {
                      className: nO.h,
                      grantedPermissions: n,
                      grantedPermissionsHeader: U.intl.string(U.t.SLgiNH),
                  }),
              ],
          })
        : null;
};
var nk = n(534740);
function nw(e) {
    let { application: t } = e,
        n = s.useMemo(() => (t.directory_entry?.carousel_items ?? []).map(R.xb).filter(eD.Vq) ?? [], [t]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: nk.Xb,
                children: [
                    (0, a.jsx)(tf, { application: t, carouselItems: n }),
                    (0, a.jsx)(ny, { application: t }),
                    (0, a.jsx)(tb, { application: t }),
                    (0, a.jsx)(nD, { application: t }),
                    (0, a.jsx)(tT, { application: t }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: nk.Q9,
                children: [
                    (0, a.jsx)("div", { className: nk.yF }),
                    (0, a.jsx)(p.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: U.intl.string(U.t["mD+J/i"]),
                    }),
                    (0, a.jsx)(nd, { application: t, view: "embedded" }),
                ],
            }),
        ],
    });
}
var nM = n(607399),
    nG = n(691540),
    nU = n(857250),
    nF = n(97483),
    nB = n(550079),
    nH = n(477782),
    nV = n(138134),
    nY = n(922016),
    nz = n(365199),
    nK = n(663341),
    nX = n(821609),
    nW = n(782134),
    n$ = n(787389),
    nZ = n(688810),
    nJ = n(361926),
    nQ = n(204776),
    nq = n(50268),
    n0 = n(375802),
    n1 = n(928658),
    n7 = n(395671),
    n6 = n(957565),
    n9 = n(692848),
    n8 = n(440970);
let n2 = "start_application_install",
    n3 = "launch_activity";
function n5(e) {
    let { renderDropdown: t, size: n } = e,
        i = s.useRef(null);
    return (0, a.jsx)(nY.Y, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return t(n);
        },
        position: "left",
        align: "top",
        animation: nY.Y.Animation.NONE,
        children: (e) =>
            (0, a.jsx)(eU.K, {
                buttonRef: i,
                variant: "secondary",
                size: n,
                icon: nz.j,
                "aria-label": U.intl.string(U.t["UKOtz+"]),
                ...e,
            }),
    });
}
function n4(e) {
    var t;
    let n,
        i,
        { application: l, variant: r, size: o, contentWidth: c } = e,
        { onClickInstallApplication: d, canInstall: u } =
            ((t = l),
            (n = w()),
            (i = s.useCallback(() => {
                let e = O.h.getField("guildId") ?? void 0;
                (0, n9.o)({
                    applicationId: t.id,
                    customInstallUrl: t.custom_install_url,
                    installParams: t.install_params,
                    integrationTypesConfig: t.integration_types_config,
                    guildId: e,
                    source: "product_page",
                });
            }, [t])),
            s.useEffect(() => {
                let e = new URL(location.href);
                if (n && "true" === e.searchParams.get(n2)) {
                    e.searchParams.delete(n2);
                    let t = e.pathname + e.search;
                    (0, I.bG)(t), i();
                }
            }, [n, i]),
            {
                onClickInstallApplication: s.useCallback(() => {
                    if (
                        (k(D.HAw.APP_DIRECTORY_INSTALL_CLICKED, { application_id: t.id }),
                        (nM.Fr || nM.v1) && null == t.custom_install_url)
                    ) {
                        let e = (0, n9.Z)({
                            applicationId: t.id,
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        });
                        if (null != e) return void window.open(e, "_blank");
                    }
                    if (n) i();
                    else {
                        let e = O.h.getField("guildId");
                        N.default.track(D.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: t.id,
                            guild_id: e,
                            auth_type: null != t.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: nM.Fr ? "mobile_web" : "desktop_web",
                        }),
                            M({ [n2]: "true" });
                    }
                }, [t, i, n]),
                canInstall: s.useMemo(
                    () =>
                        (0, nQ.Ie)({
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        }),
                    [t],
                ),
            });
    return "icon" === c
        ? (0, a.jsx)(eU.K, {
              variant: r,
              icon: nK.p,
              size: o,
              onClick: d,
              "aria-label": U.intl.string(U.t.NgXl3C),
              disabled: !u,
          })
        : (0, a.jsx)(nX.$, {
              variant: r,
              size: o,
              text: "small" === c ? U.intl.string(U.t.qRZ35t) : U.intl.string(U.t.NgXl3C),
              onClick: d,
              disabled: !u,
          });
}
function ie(e) {
    let { size: t, contentWidth: n, onClick: i, isSubmitting: s } = e;
    return "icon" === n
        ? (0, a.jsx)(eU.K, {
              variant: "primary",
              icon: nW.u,
              size: t,
              onClick: i,
              loading: s,
              "aria-label": U.intl.string(U.t.QO7rO6),
          })
        : (0, a.jsx)(nX.$, { variant: "primary", size: t, text: U.intl.string(U.t.QO7rO6), onClick: i, loading: s });
}
let it = s.forwardRef(function (e, t) {
    let { application: n, size: i } = e,
        { analyticsLocations: l } = (0, nZ.Ay)(),
        o = s.useCallback(() => {
            let e;
            k(D.HAw.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: n.id }),
                (0, n6.C)(
                    ((e = n.id), `${location.protocol}//${location.host}${D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e)}`),
                    () => (0, nG.P0)((0, nU.o)(U.intl.string(U.t["L/PwZf"]), nF.Ck.SUCCESS)),
                );
        }, [n.id]),
        c = s.useCallback(() => {
            let e = n7.Ay.createFromServer(n);
            (0, n1.r3)({ application: e, entrypoint: "app_directory" });
        }, [n]),
        u = (0, nq.A)({
            id: n.id,
            label: U.intl.string(U.t["FfCL+6"]),
            onSuccess: () => (0, nG.P0)((0, nU.o)(U.intl.string(U.t.eNjAah), nF.Ck.SUCCESS)),
        }),
        h = s.useCallback(
            (e, t) =>
                (0, a.jsxs)(nB.W, {
                    "data-menu-migrated-auto": !0,
                    navId: "application-directory-profile",
                    "aria-label": U.intl.string(U.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, a.jsx)(nH.rX, {
                                  children: (0, a.jsx)(nH.Dr, {
                                      id: "copy",
                                      label: U.intl.string(U.t.z4sP5J),
                                      action: o,
                                      icon: t$.q,
                                      leadingAccessory: { type: "icon", icon: t$.q },
                                  }),
                              })
                            : null,
                        (0, a.jsx)(nH.rX, {
                            children: (0, a.jsx)(nH.Dr, {
                                id: "report",
                                label: U.intl.string(U.t.NgA5vp),
                                color: "danger",
                                leadingAccessory: { type: "icon", icon: nV.i },
                                action: c,
                            }),
                        }),
                        null != u ? (0, a.jsx)(nH.rX, { children: u }) : null,
                    ],
                }),
            [u, c, o],
        ),
        { onClickLaunchActivity: p, isSubmitting: m } = (function (e, t) {
            let n = e.id,
                i = e?.bot?.id,
                a = (0, n0.e)(e),
                l = (0, nJ.Vr)({ context: { type: "contextless" }, applicationId: n, botUserId: i }),
                r = null != i && (0, el.$B)(e) && (0, el.Ag)(e) && (a || l),
                [o, c] = s.useState(!1),
                u = w(),
                h = (0, d.bG)([S.default], () => S.default.getCurrentUser()),
                p = (0, n$.A)({
                    applicationId: n,
                    analyticsLocations: t,
                    runBeforeLaunchAttempt: () => c(!0),
                    runAfterLaunchAttempt: () => c(!1),
                });
            s.useEffect(() => {
                let e = new URL(location.href),
                    t = "true" === e.searchParams.get(n3);
                if (u && r && t && null != i && null != h) {
                    e.searchParams.delete(n3);
                    let t = e.pathname + e.search;
                    (0, I.bG)(t), p();
                }
            }, [u, r, i, h, p]);
            let m = s.useCallback(async () => {
                if (null != i) {
                    if ((k(D.HAw.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: n }), !u))
                        return void M({ [n3]: "true" });
                    await p();
                }
            }, [n, i, u, p]);
            return { onClickLaunchActivity: r ? m : void 0, isSubmitting: o };
        })(n, l),
        _ = null != p,
        g = _ ? "secondary" : "primary";
    return (0, a.jsxs)("div", {
        ref: t,
        children: [
            (0, a.jsxs)("div", {
                className: r()(n8.Ik, n8.U),
                children: [
                    _ && (0, a.jsx)(ie, { size: i, contentWidth: "normal", onClick: p, isSubmitting: m }),
                    (0, a.jsx)(n4, { application: n, size: i, contentWidth: "normal", variant: g }),
                    n6.p5
                        ? (0, a.jsx)(eU.K, {
                              variant: "secondary",
                              size: i,
                              icon: t$.q,
                              onClick: o,
                              "aria-label": U.intl.string(U.t.z4sP5J),
                          })
                        : null,
                    (0, a.jsx)(n5, { renderDropdown: (e) => h(!1, e), size: i }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: r()(n8.Ik, n8.EX),
                children: [
                    _ && (0, a.jsx)(ie, { size: i, contentWidth: "small", onClick: p, isSubmitting: m }),
                    (0, a.jsx)(n4, { application: n, size: i, contentWidth: "small", variant: g }),
                    (0, a.jsx)(n5, { renderDropdown: (e) => h(n6.p5, e), size: i }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: r()(n8.Ik, n8.nU),
                children: [
                    _ && (0, a.jsx)(ie, { size: i, contentWidth: "icon", onClick: p, isSubmitting: m }),
                    (0, a.jsx)(n4, { application: n, size: i, contentWidth: "icon", variant: g }),
                    (0, a.jsx)(n5, { renderDropdown: (e) => h(n6.p5, e), size: i }),
                ],
            }),
        ],
    });
});
var ii = n(811308);
let ia = function (e) {
    let { application: t, onButtonsVisibilityChange: n } = e,
        i = s.useRef(null),
        l = s.useMemo(() => eo.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 96 }), [t]),
        r = s.useMemo(() => {
            let e = [];
            return (
                (0, el.b7)(t) && e.push(U.intl.string(U.t.LO4f0P)),
                (0, el.K4)(t) && (0 !== e.length && e.push("•"), e.push(U.intl.string(U.t["8z5B2U"]))),
                (0, el.ME)(t) && (0 !== e.length && e.push("•"), e.push(U.intl.string(U.t["5khEk8"]))),
                e
            );
        }, [t]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eb, { application: t, bannerType: "detail", iconURL: l }),
            (0, a.jsx)("div", {
                className: ii.H,
                style: { height: 52 },
                children: (0, a.jsx)("img", {
                    src: l,
                    alt: "",
                    className: ii.my,
                    height: 96,
                    width: 96,
                    style: { borderWidth: 4, marginLeft: 28 },
                }),
            }),
            (0, a.jsxs)("div", {
                className: ii.op,
                children: [
                    (0, a.jsxs)("div", {
                        className: ii.tJ,
                        children: [
                            (0, a.jsx)(p.D, {
                                variant: "heading-xxl/bold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, a.jsx)("div", {
                                className: ii.A7,
                                children: r.map((e, t) =>
                                    (0, a.jsx)(
                                        g.E,
                                        {
                                            className: ii.MO,
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: e,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    (0, a.jsx)(es.L, {
                        innerRef: i,
                        onChange: n,
                        active: !0,
                        children: (0, a.jsx)(it, { ref: i, application: t, size: "md" }),
                    }),
                ],
            }),
        ],
    });
};
var is = n(172218),
    il = n(668168);
function ir(e) {
    let { applicationId: t, similarApplications: n, onSelectApplication: i, similarLoadId: l } = e,
        r = (function (e) {
            let { applicationId: t, similarAppIds: n } = e,
                [i, a] = s.useState(),
                l = (0, is.K)((e) => {
                    e && a(t);
                });
            return (
                s.useEffect(() => {
                    i === t &&
                        k(D.HAw.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: n,
                        });
                }, [i, t, n]),
                l
            );
        })({ applicationId: t, similarAppIds: s.useMemo(() => n.map((e) => e.id), [n]) });
    return (0, a.jsx)("div", {
        className: il.hQ,
        ref: r,
        children: n.map((e, n) =>
            (0, a.jsx)(
                io,
                { applicationId: t, similarApplication: e, onSelectApplication: i, similarLoadId: l, position: n },
                e.id,
            ),
        ),
    });
}
function io(e) {
    let { applicationId: t, similarApplication: n, onSelectApplication: i, position: l, similarLoadId: r } = e,
        o = (0, tV.A)({ application: n }),
        c = n.categories?.[0],
        d = s.useMemo(() => eo.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: 48 }), [n]),
        u = s.useCallback(() => {
            k(D.HAw.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: "product",
                application_id: t,
                suggested_application_id: n.id,
                position: l,
                load_id: r,
                shown_mutual_guilds_count: o.length,
            }),
                i(n.id);
        }, [i, n.id, t, o.length, r, l]);
    return (0, a.jsxs)(ek.D, {
        onClick: u,
        className: il.vU,
        children: [
            (0, a.jsxs)("div", {
                className: il.nT,
                children: [
                    (0, a.jsx)("img", { src: d, alt: "", className: il.my, height: 48, width: 48 }),
                    (0, a.jsxs)("div", {
                        className: il.gn,
                        children: [
                            (0, a.jsx)("div", {
                                style: { flex: 1, minWidth: 0, overflow: "hidden" },
                                children: (0, a.jsx)(p.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    className: il.JB,
                                    children: n.name,
                                }),
                            }),
                            null != c
                                ? (0, a.jsx)(g.E, {
                                      className: il.m4,
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      children: c.name,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(g.E, {
                className: il.i3,
                variant: "text-sm/medium",
                color: "text-default",
                lineClamp: 2,
                children: n.directory_entry?.short_description ?? n.description,
            }),
            (0, a.jsx)(tH, {
                application: n,
                textVariant: "text-xs/medium",
                mutualGuilds: o,
                mutualGuildShownMax: 3,
                guildIconSize: tU.SMALL,
                compact: !0,
            }),
        ],
    });
}
let ic = function (e) {
    let { applicationId: t, fetchState: n, similarApplications: i, onSelectApplication: s, similarLoadId: l } = e;
    return n !== eO.e.FETCHING && (null == i || 0 === i.length)
        ? null
        : (0, a.jsxs)("div", {
              className: il.hd,
              children: [
                  (0, a.jsx)("div", { className: il.yF }),
                  (0, a.jsx)(p.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      className: il.bV,
                      children: U.intl.string(U.t.E8wCnk),
                  }),
                  (0, a.jsx)(ea, {
                      loading: n === eO.e.FETCHING,
                      children:
                          null != i
                              ? (0, a.jsx)(ir, {
                                    applicationId: t,
                                    similarApplications: i,
                                    onSelectApplication: s,
                                    similarLoadId: l,
                                })
                              : null,
                  }),
              ],
          });
};
n(938796);
var id = n(192308),
    iu = n(549711),
    ih = n(925435),
    ip = n(311321),
    im = n(163437),
    i_ = n(67480),
    ig = n(785936);
function ix(e) {
    let { application: t } = e;
    return (0, a.jsxs)("div", {
        className: ig.ZM,
        children: [(0, a.jsx)(iA, { application: t }), (0, a.jsx)(ib, { application: t })],
    });
}
function iA(e) {
    let { application: t } = e,
        { subscriptions: n, otps: i } = (0, ey.C)(t.id);
    return (0, a.jsxs)("div", {
        className: ig.ZM,
        children: [
            n.length > 0 &&
                (0, a.jsxs)("div", {
                    className: ig.dD,
                    children: [
                        (0, a.jsx)(ip.A, { subscriptions: n, color: "text-strong" }),
                        (0, a.jsx)("div", {
                            className: ig.ZE,
                            children: n.map((e) => {
                                let n = (0, im.bg)(e.skuFlags) ? "user" : "guild";
                                return (0, a.jsx)(
                                    ih.B4,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: n,
                                        onDetails: () =>
                                            H(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                );
                            }),
                        }),
                    ],
                }),
            i.length > 0 &&
                (0, a.jsxs)("div", {
                    className: ig.dD,
                    children: [
                        (0, a.jsx)(p.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: U.intl.string(U.t.yUGTs8),
                        }),
                        (0, a.jsx)("div", {
                            className: ig.ZE,
                            children: i.map((e) =>
                                (0, a.jsx)(
                                    ih.B8,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () =>
                                            H(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, a.jsx)(iu.A, {
                path: D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                exact: !0,
                render: (e) => (0, a.jsx)(iC, { ...e }),
            }),
        ],
    });
}
function iC(e) {
    let {
            match: {
                params: { applicationId: t, skuId: i },
            },
        } = e,
        l = (0, d.bG)([i_.A], () => i_.A.get(i), [i]),
        r = (0, d.bG)([i_.A], () => (null != i ? i_.A.getParentSKU(i) : void 0), [i]),
        o = s.useId(),
        c = s.useCallback(
            () => H(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, G.GlobalDiscoveryAppsSections.STORE)),
            [t],
        );
    return (
        s.useLayoutEffect(() => {
            var e;
            switch (l?.type) {
                case D.Puh.CONSUMABLE:
                case D.Puh.DURABLE:
                    return void (0, id.openModalLazy)(
                        async () => {
                            let { ItemDetailsModal: e } = await n.e("70104").then(n.bind(n, 963179));
                            return (n) => (0, a.jsx)(e, { appId: t, skuId: i, ...n });
                        },
                        {
                            modalKey: o,
                            onCloseCallback: () => {
                                iv() ||
                                    H(
                                        D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                            t,
                                            G.GlobalDiscoveryAppsSections.STORE,
                                        ),
                                    );
                            },
                        },
                    );
                case D.Puh.SUBSCRIPTION:
                    if (r?.flags == null) return;
                    return (
                        (e = (0, im.bg)(r.flags) ? "user" : "guild"),
                        void (0, id.openModalLazy)(
                            async () => {
                                let { SubscriptionDetailsModal: s } = await n.e("64850").then(n.bind(n, 168393));
                                return (n) =>
                                    (0, a.jsx)(s, { appId: t, subscriptionType: e, skuId: i, guildId: void 0, ...n });
                            },
                            {
                                modalKey: o,
                                onCloseCallback: () => {
                                    iv() ||
                                        H(
                                            D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                                t,
                                                G.GlobalDiscoveryAppsSections.STORE,
                                            ),
                                        );
                                },
                            },
                        )
                    );
            }
        }, [t, o, c, r?.flags, l?.flags, l?.type, i]),
        s.useLayoutEffect(
            () => () => {
                (0, id.closeModal)(o);
            },
            [o],
        ),
        null
    );
}
function ib(e) {
    let { application: t } = e,
        n = w(),
        i = t.terms_of_service_url,
        s = t.privacy_policy_url;
    if (null == i && null == s) return null;
    let l = (e, t) => (0, a.jsx)(tZ.A, { href: t, trusted: !n, children: e });
    return (0, a.jsx)("div", {
        className: ig.V6,
        children: (0, a.jsx)(g.E, {
            color: "text-strong",
            variant: "text-sm/normal",
            children:
                null != i && null != s
                    ? U.intl.format(U.t.nylPOT, { termsHook: (e) => l(e, i), privacyHook: (e) => l(e, s) })
                    : null != i
                      ? U.intl.format(U.t["0cPyDz"], { termsHook: (e) => l(e, i) })
                      : null != s
                        ? U.intl.format(U.t["loYGC/"], { privacyHook: (e) => l(e, s) })
                        : null,
        }),
    });
}
function iv() {
    return window.location.pathname.startsWith("/login");
}
var iI = n(798385);
let iE = function (e) {
    let { applicationId: t, onSelectApplication: n, onScroll: i, initialTab: l, onButtonsVisibilityChange: r } = e,
        o = s.useRef(null),
        c = (0, d.bG)([y.A], () => y.A.getApplication(t)),
        u = (0, d.bG)([y.A], () => y.A.getApplicationFetchState(t));
    s.useEffect(() => {
        if (null != t && null == c) {
            let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
            j.Di(t, { noCache: e });
        }
    }, [t, c]),
        s.useEffect(() => {
            j.xZ({ applicationId: t });
        }, [t]),
        s.useEffect(() => () => r(!0), [r]);
    let h = c?.storefront_available,
        [p, m] = s.useState(l ?? G.GlobalDiscoveryAppsSections.ABOUT),
        _ = s.useCallback(
            (e) => {
                o.current?.scrollTo({ to: 0 }), m(G.GlobalDiscoveryAppsSections.ABOUT), n(e);
            },
            [n],
        );
    s.useEffect(() => {
        c?.storefront_available && null != t && (0, ey.F)(t);
    }, [c?.storefront_available, t]);
    let g = (0, O.Bn)(),
        x = (0, d.bG)([eO.A], () => eO.A.getFetchState({ applicationId: c?.id })),
        f = (0, d.bG)([eO.A], () => eO.A.getSimilarApplications({ applicationId: c?.id })),
        A = s.useMemo(() => f?.applications.slice(0, 3), [f]),
        C = { displayedSimilarApplications: A, previousView: g },
        b = s.useRef(C);
    s.useEffect(() => {
        b.current = C;
    }),
        s.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = b.current;
            c?.id != null &&
                x !== eO.e.FETCHING &&
                k(D.HAw.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: O.ev.APPLICATION,
                    previous_page: t?.type,
                    application_id: c.id,
                    referrer: document.referrer,
                    suggested_application_ids: e?.map((e) => e.id),
                });
        }, [c?.id, x]);
    let v = s.useMemo(
            () => [
                { id: G.GlobalDiscoveryAppsSections.ABOUT, label: U.intl.string(U.t.DkyHMK) },
                { id: G.GlobalDiscoveryAppsSections.STORE, label: U.intl.string(U.t.jgEXGB) },
            ],
            [],
        ),
        I = s.useMemo(() => {
            if (null == c) return null;
            switch (p) {
                case G.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, a.jsx)(nw, { application: c });
                case G.GlobalDiscoveryAppsSections.STORE:
                    return (0, a.jsx)(ix, { application: c });
            }
        }, [p, c]),
        E = s.useCallback(
            (e) => {
                k(D.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, { application_id: t, tab_name: e }),
                    m(e),
                    e === G.GlobalDiscoveryAppsSections.ABOUT
                        ? H(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t))
                        : H(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t],
        ),
        S = p === G.GlobalDiscoveryAppsSections.ABOUT;
    return (0, a.jsx)(K.A, {
        onScroll: i,
        ref: o,
        children: (0, a.jsx)(z.A, {
            children:
                null == c
                    ? null == u || u === y.e.FETCHING
                        ? (0, a.jsx)("div", { className: iI.Dg, children: (0, a.jsx)(ea, { loading: !0 }) })
                        : (0, a.jsx)("div", { className: iI.Dg, children: (0, a.jsx)($, { className: iI.z3 }) })
                    : (0, a.jsxs)("div", {
                          className: iI.nM,
                          children: [
                              (0, a.jsx)(ia, { application: c, onButtonsVisibilityChange: r }),
                              (0, a.jsxs)("div", {
                                  className: iI.hQ,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: iI.Ne,
                                          children: [
                                              h &&
                                                  (0, a.jsx)("div", {
                                                      className: iI.OF,
                                                      children: (0, a.jsx)(eL, {
                                                          tabs: v,
                                                          onTabSelect: E,
                                                          selectedTab: p,
                                                      }),
                                                  }),
                                              I,
                                              (0, a.jsx)(ic, {
                                                  applicationId: t,
                                                  fetchState: x,
                                                  similarApplications: A,
                                                  onSelectApplication: _,
                                                  similarLoadId: f?.loadId,
                                              }),
                                          ],
                                      }),
                                      S && (0, a.jsx)(nd, { className: iI.pz, application: c, view: "side" }),
                                  ],
                              }),
                          ],
                      }),
        }),
    });
};
var iS = n(984516),
    iN = n(724002),
    ij = n(287174),
    iP = n(487899),
    iy = n(239314),
    iT = n(111162),
    iR = n(242552);
let iL = ij.K.APPLICATION_DIRECTORY;
function iO(e) {
    let { collection: t, index: n, onSelectApplication: i } = e,
        l = (function (e) {
            let { collectionId: t, index: n } = e,
                [i, a] = s.useState(!1),
                l = (0, is.K)((e) => {
                    e && a(!0);
                });
            return (
                s.useEffect(() => {
                    i && k(D.HAw.APP_DIRECTORY_COLLECTION_VIEWED, { collection_id: t, collection_position: n });
                }, [i, t, n]),
                l
            );
        })({ collectionId: t.id, index: n }),
        o = s.useCallback(
            (e, a) => {
                k(D.HAw.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: a,
                    collection_position: n,
                    application_id: e,
                }),
                    i(e);
            },
            [t.id, n, i],
        );
    return (0, a.jsxs)("div", {
        ref: l,
        children: [
            (0, a.jsx)(p.D, {
                className: r()(iR.Gf, { [iR.SH]: 0 === n }),
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: t.title,
            }),
            (0, a.jsx)("div", {
                className: iR.Qs,
                children: t.application_directory_collection_items.map((e, t) =>
                    e.type !== iP.L.APPLICATION || null == e.application
                        ? null
                        : (0, a.jsx)(
                              eI,
                              {
                                  application: e.application,
                                  onSelectApplication: () => o(e.application.id, t),
                                  showCategory: !0,
                              },
                              e.id,
                          ),
                ),
            }),
        ],
    });
}
let iD = function (e) {
    let { onSelectApplication: t } = e,
        n = (0, d.bG)([iT.default], () => iT.default.onlyShowPreviewAppCollections) ? iN.W.PREVIEW : iN.W.ACTIVE,
        i = (0, d.bG)([ee.A], () => ee.A.getFetchState({ surface: iL, activeState: n })),
        l = (0, d.bG)([ee.A], () => ee.A.getCollections({ surface: iL, activeState: n }));
    s.useEffect(() => {
        j.An({ surface: iL, activeState: n });
    }, [n]);
    let r = s.useMemo(() => l?.filter((e) => e.type !== iy.Y.GALLERY), [l]);
    return i === ee.e.ERROR
        ? (0, a.jsx)("div", { className: iR.Un, children: (0, a.jsx)($, { className: iR.z3 }) })
        : (0, a.jsx)(ea, {
              loading: i === ee.e.FETCHING,
              children: r?.map((e, n) => (0, a.jsx)(iO, { collection: e, index: n, onSelectApplication: t }, n)),
          });
};
var ik = n(210349);
let iw = function (e) {
    let { onScroll: t, onSelectApplication: n } = e;
    return (0, a.jsxs)(K.A, {
        onScroll: t,
        children: [
            (0, a.jsx)(Y.A, {
                title: U.intl.format(U.t.kEcZ97, {}),
                description: U.intl.string(U.t.XxFts9),
                children: (0, a.jsx)(V.A, {}),
            }),
            (0, a.jsx)(z.A, {
                children: (0, a.jsxs)("div", {
                    className: ik.h,
                    children: [(0, a.jsx)(iD, { onSelectApplication: n }), (0, a.jsx)(iS.A, { padding: !0 })],
                }),
            }),
        ],
    });
};
var iM = n(873263),
    iG = n(994369),
    iU = n(475743),
    iF = n(191711),
    iB = n(666168);
function iH(e) {
    let { category: t, count: n, onSelectCategory: i, selected: l } = e,
        o = s.useCallback(() => {
            i(t.id);
        }, [t.id, i]),
        c = n.toLocaleString(tw.default.locale);
    return (0, a.jsxs)(ek.D, {
        onClick: o,
        className: r()(iB.L1, { [iB.wH]: l }),
        children: [
            (0, a.jsx)(g.E, { className: iB.UU, variant: "text-sm/medium", color: "text-strong", children: t.name }),
            (0, a.jsx)(g.E, { className: iB.U9, variant: "text-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
function iV(e) {
    let { countsByCategory: t, onSelectCategory: n, selectedCategoryId: i } = e,
        l = (0, d.bG)([T.A], () => T.A.getCategories()),
        r = s.useMemo(() => [(0, R.AU)(), ...l.filter((e) => (t[e.id] ?? 0) !== 0)], [l, t]);
    return 0 === r.length
        ? null
        : (0, a.jsx)("div", {
              className: iB.LZ,
              children: r.map((e) => {
                  let s = e.id,
                      l = t[s] ?? 0;
                  return (0, a.jsx)(iH, { category: e, count: l, selected: s === i, onSelectCategory: () => n(e) }, s);
              }),
          });
}
function iY(e) {
    let { countsByCategory: t, onSelectCategory: n, selectedCategoryId: i } = e,
        l = (0, d.bG)([T.A], () => T.A.getCategories()),
        r = s.useMemo(() => [(0, R.AU)(), ...l.filter((e) => (t[e.id] ?? 0) !== 0)], [l, t]),
        o = s.useMemo(() => r.map((e) => ({ id: `${e.id}`, name: e.name, count: t[e.id] ?? 0 })), [r, t]),
        c = s.useCallback(
            (e) => {
                let t = r.find((t) => t.id === Number(e));
                null != t && n(t);
            },
            [n, r],
        ),
        u = s.useMemo(() => r.find((e) => e.id === i), [i, r]);
    return 0 === o.length
        ? null
        : (0, a.jsxs)("div", {
              className: iB.kL,
              children: [
                  (0, a.jsx)(g.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: U.intl.string(U.t.f09BQJ),
                  }),
                  (0, a.jsx)(iF.A, {
                      items: o,
                      title: u?.name ?? "",
                      onSelect: c,
                      selected: `${i}`,
                      "aria-label": U.intl.string(U.t.WHdCwR),
                      variant: iF.H.FILLED,
                  }),
              ],
          });
}
var iz = n(678871),
    iK = n(842503);
let iX = function (e) {
    let { selectedCategoryId: t, searchAllCategories: n } = e,
        i = (0, d.bG)([T.A], () => T.A.getCategories()),
        l = s.useMemo(() => i.find((e) => e.id === t)?.name, [i, t]),
        r =
            t === R.lj || null == l
                ? U.intl.string(U.t["FVJt+8"])
                : U.intl.formatToPlainString(U.t.FjCaNB, { categoryName: l }),
        o = t === R.lj ? U.intl.string(U.t.GXiMta) : U.intl.format(U.t.JaLoFF, { onClick: n });
    return (0, a.jsxs)("div", {
        className: iz.kL,
        children: [
            (0, a.jsx)("img", { alt: "", src: iK, className: iz.Sl }),
            (0, a.jsx)(p.D, { variant: "heading-xl/semibold", className: iz.wx, children: r }),
            (0, a.jsx)(g.E, { variant: "text-md/normal", color: "text-default", children: o }),
        ],
    });
};
var iW = n(798387);
function i$(e) {
    let { onSelectApplication: t, onScroll: n } = e,
        i = (0, d.bG)([E.default], () => E.default.isAuthenticated()),
        l = s.useRef(null),
        r = (0, iM.zy)(),
        o = s.useRef(null),
        {
            query: c,
            page: u,
            categoryId: h,
        } = s.useMemo(() => {
            let e = new URLSearchParams(r.search),
                t = e.get("page"),
                n = null != t ? Number(t) : 1;
            return {
                query: e.get("q") ?? "",
                page: n,
                categoryId: Number(e.get("category_id")) ?? G.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID,
            };
        }, [r.search]),
        p = (0, d.bG)([T.A], () => T.A.getCategories()),
        m = s.useMemo(() => p?.find((e) => e.id === h), [p, h]),
        _ = s.useCallback(
            (e) => {
                k(D.HAw.APP_DIRECTORY_SEARCHED, {
                    search_term: c,
                    num_results: e,
                    current_page: O.ev.SEARCH,
                    result_page: u,
                    category: m?.name,
                    category_id: m?.id,
                });
            },
            [c, u, m?.name, m?.id],
        );
    s.useEffect(() => {
        l.current?.scrollTo({ to: 0 }),
            c !== o.current && ((o.current = c), j.$P({ query: c, options: { source: iG.V.APP_DIRECTORY } })),
            j.$P({
                query: c,
                options: { categoryId: h, page: u, pageSize: G.PAGE_SIZE, source: iG.V.APP_DIRECTORY },
                onSuccessCallback: _,
            });
    }, [h, u, c, _]);
    let { fetchState: g, searchResults: x } = (0, d.cf)([et.A], () => ({
            fetchState: et.A.getFetchState({
                query: c,
                categoryId: h,
                page: u,
                pageSize: G.PAGE_SIZE,
                source: iG.V.APP_DIRECTORY,
            }),
            searchResults: et.A.getSearchResults({
                query: c,
                categoryId: h,
                page: u,
                pageSize: G.PAGE_SIZE,
                source: iG.V.APP_DIRECTORY,
            }),
        })),
        f = (0, d.cf)([et.A], () => {
            let e = et.A.getSearchResults({ query: c, source: iG.V.APP_DIRECTORY });
            return null != e ? { [R.lj]: e.totalCount, ...e.countsByCategory } : {};
        }),
        A = (0, iU.A)(x),
        C = s.useMemo(() => (g === y.e.FETCHING ? A : x), [g, A, x]),
        b = s.useCallback(
            (e) => {
                B({ query: c, categoryId: h, page: e });
            },
            [h, c],
        ),
        v = s.useCallback(
            (e) => {
                k(D.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: O.ev.SEARCH,
                }),
                    B({ query: c, categoryId: e.id });
            },
            [c],
        ),
        I = s.useCallback(
            (e, n) => {
                k(D.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: O.ev.SEARCH,
                    application_id: e,
                    load_id: C?.loadId,
                    search_term: c,
                    position: n,
                }),
                    t(e);
            },
            [C?.loadId, t, c],
        ),
        S = F();
    return (0, a.jsxs)("div", {
        className: iW.kL,
        children: [
            (0, a.jsx)(K.A, {
                ref: l,
                onScroll: n,
                children: (0, a.jsxs)("div", {
                    className: iW.WH,
                    children: [
                        i ? null : (0, a.jsx)("div", { className: iW.AW }),
                        (0, a.jsx)(z.A, {
                            children: (0, a.jsxs)("div", {
                                className: iW.hQ,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: iW.$B,
                                        children: (0, a.jsx)(iY, {
                                            countsByCategory: f,
                                            selectedCategoryId: h,
                                            onSelectCategory: v,
                                        }),
                                    }),
                                    (0, a.jsx)(ea, {
                                        loading: g === y.e.FETCHING,
                                        children:
                                            g === y.e.FETCHED && (null == C || C?.results.length === 0)
                                                ? (0, a.jsx)(iX, {
                                                      selectedCategoryId: h ?? S.id,
                                                      searchAllCategories: () => v(S),
                                                  })
                                                : (0, a.jsx)("div", {
                                                      className: iW.Qs,
                                                      children: C?.results.map((e, t) => {
                                                          if (e.type === Z.j.APPLICATION) {
                                                              let n = e.data;
                                                              return (0, a.jsx)(
                                                                  eI,
                                                                  {
                                                                      application: n,
                                                                      onSelectApplication: (e) => I(e, t),
                                                                      showCategory: !0,
                                                                  },
                                                                  n.id,
                                                              );
                                                          }
                                                          return null;
                                                      }),
                                                  }),
                                    }),
                                    (0, a.jsx)(Q.m, {
                                        className: iW.JV,
                                        totalCount: Math.min(
                                            (C?.totalPages ?? 0) * G.PAGE_SIZE,
                                            G.MAX_PAGES * G.PAGE_SIZE,
                                        ),
                                        pageSize: G.PAGE_SIZE,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: u,
                                        onPageChange: b,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: iW.pn,
                children: (0, a.jsx)("div", {
                    className: iW.jv,
                    children: (0, a.jsx)(iV, { countsByCategory: f, selectedCategoryId: h, onSelectCategory: v }),
                }),
            }),
        ],
    });
}
var iZ = n(386607);
function iJ(e) {
    let { applicationId: t, hideDetailHeaderButtons: n, onClickBack: i } = e,
        l = (0, d.bG)([y.A], () => y.A.getApplication(t)),
        [o, c] = s.useState(n),
        u = s.useCallback(() => {
            c(n);
        }, [n]);
    return (0, a.jsxs)("div", {
        className: iZ._u,
        children: [
            (0, a.jsx)("div", { className: iZ.w$, children: (0, a.jsx)(A.XQ, { icon: h.Z, onClick: i }) }),
            (0, a.jsx)(p.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: iZ.Rm,
                lineClamp: 1,
                children: l?.name,
            }),
            (0, a.jsx)("div", {
                className: r()(iZ.w$, iZ.xY, { [iZ.RK]: !n, [iZ.jD]: n && !o, [iZ.R]: n && o }),
                onTransitionEnd: u,
                children: null != l ? (0, a.jsx)(it, { application: l, size: "sm" }) : null,
            }),
        ],
    });
}
function iQ() {
    let e = s.useCallback(() => {
            let e, t;
            (e = new URL(location.href)),
                (t = `?redirect_to=${encodeURIComponent(e.pathname + e.search)}`),
                (0, I.pX)(D.BVt.REGISTER + t);
        }, []),
        t = s.useCallback(() => {
            M();
        }, []);
    return (0, a.jsxs)(m.$T, {
        color: m.Hv.BRAND,
        className: iZ.aL,
        children: [
            (0, a.jsx)(_.p, { size: "custom", color: "white", className: iZ.wm }),
            (0, a.jsx)(g.E, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: U.intl.string(U.t.Ol3MIt),
            }),
            (0, a.jsxs)("div", {
                className: iZ.ll,
                children: [
                    (0, a.jsx)(m.Z_, { onClick: e, noticeType: D.kqX.LOGIN, children: U.intl.string(U.t["825cFy"]) }),
                    (0, a.jsx)(m.Z_, {
                        onClick: t,
                        noticeType: D.kqX.REGISTER,
                        minor: !0,
                        children: U.intl.string(U.t.HAkXzo),
                    }),
                ],
            }),
        ],
    });
}
let iq = function () {
    var e;
    let t,
        n,
        i,
        l,
        c,
        m,
        _ = (0, d.bG)([E.default], () => !E.default.isAuthenticated()),
        { onScroll: g, scrollPosition: y, resetScrollPosition: L } = (0, x.G)(),
        M = (0, O.R4)(),
        H = w(),
        V = M?.type === O.ev.CATEGORY ? M.categoryId : void 0,
        { applicationId: Y, section: z } = M?.type === O.ev.APPLICATION ? M : {},
        { query: K, categoryId: X } = M?.type === O.ev.SEARCH ? M : {},
        W = (0, d.bG)([T.A], () => T.A.getCategories()),
        $ = s.useMemo(() => [(0, R.AU)(), ...W], [W]),
        Z = s.useMemo(() => $.find((e) => e.id === Number(X)), [$, X]),
        {
            tabs: J,
            selectedTab: Q,
            onSelectTab: q,
        } = ((e = V?.toString()),
        (t = (0, d.bG)([T.A], () => T.A.getCategories())),
        (n = F()),
        (i = s.useMemo(
            () => [{ id: n.id.toString(), label: n.name }, ...t.map((e) => ({ id: e.id.toString(), label: e.name }))],
            [t, n],
        )),
        (l = (0, O.R4)()),
        (c = s.useCallback(
            (e) => {
                let t = i.find((t) => t.id === e);
                null != t &&
                    (k(D.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.label,
                        category_id: Number(t.id),
                        current_page: l?.type,
                    }),
                    ((e) => {
                        let { categoryId: t } = e,
                            n = { previousView: (0, O.R4)() };
                        (0, I.pX)(D.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t), { state: n });
                    })({ categoryId: e }));
            },
            [l?.type, i],
        )),
        (m = null != e && i.some((t) => t.id === e) ? e : i[0].id),
        { tabs: i, selectedTab: m, onSelectTab: c }),
        [ee, et] = s.useState(!0),
        en = O.h.useField("trackedOpenedFromExternalEntrypoint"),
        ei = O.h.useField("sessionId"),
        ea = (0, d.bG)([S.default], () => S.default.getCurrentUser());
    s.useEffect(() => {
        if (!en && null == ei) {
            let e = (0, v.YP)();
            N.default.track(D.HAw.APP_DIRECTORY_OPENED, { source: O.sW.EXTERNAL, session_id: e, user_id: ea?.id }),
                O.h.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: O.sW.EXTERNAL },
                    guildId: null,
                });
        }
    }, [ei, en, ea?.id]),
        s.useEffect(() => {
            j.bW();
        }, []),
        s.useEffect(() => {
            H && j.wD();
        }, [H]),
        s.useEffect(() => O.tS.setState({ lastItem: M }), [M]);
    let es = null != Y,
        el = M?.type === O.ev.SEARCH,
        {
            searchQuery: er,
            onSearchTextChange: eo,
            onClearSearch: ec,
            onSearchSubmit: ed,
        } = (function (e) {
            let { initialQuery: t = "" } = e,
                n = P.A.useField("query");
            s.useEffect(() => P.A.setState({ query: t }), [t]);
            let i = s.useCallback((e) => {
                    P.A.setState({ query: e });
                }, []),
                a = s.useCallback(() => {
                    P.A.setState({ query: "" });
                }, []),
                l = s.useCallback(() => {
                    let e = F();
                    k(D.HAw.APP_DIRECTORY_SEARCH_STARTED, {
                        search_term: n,
                        category: e.name,
                        current_page: O.ev.HOME,
                        category_id: e.id,
                    }),
                        B({ query: n });
                }, [n]);
            return { searchQuery: n, onSearchTextChange: i, onClearSearch: a, onSearchSubmit: l };
        })({ initialQuery: K ?? "" }),
        eu = P.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: eh,
            onCollapsedSearchBarClick: ep,
            onSearchBarBlur: em,
            tabsClassName: e_,
        } = (0, f.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === er.trim(),
            searchBarState: eu,
            setSearchBarState: (e) => P.A.setState({ searchBarState: e }),
        }),
        eg = s.useCallback(
            (e) => {
                q(e), el && ec(), L();
            },
            [el, ec, q, L],
        ),
        ex = s.useCallback(
            (e) =>
                ((e) => {
                    let { applicationId: t } = e,
                        n = { previousView: (0, O.R4)() };
                    (0, I.pX)(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t), { state: n });
                })({ applicationId: e }),
            [],
        ),
        ef = es || el,
        eA = s.useCallback(() => {
            if (null != (0, O.Bn)()) (0, I.aX)();
            else {
                let e;
                (e = { previousView: (0, O.R4)() }), (0, I.pX)(D.BVt.GLOBAL_DISCOVERY_APPS, { state: e });
            }
        }, []),
        eC = s.useMemo(
            () =>
                (0, o.debounce)((e) => {
                    let { scrollTop: t, offsetHeight: n, scrollHeight: i, location: a } = e;
                    t > 0 &&
                        k(D.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
                            scroll_visible_percentile: (t + n) / i,
                            current_page: a,
                        });
                }, 200),
            [],
        ),
        eb = s.useCallback(
            (e, t) => {
                g(e),
                    eC({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: t,
                    });
            },
            [eC, g],
        );
    return (0, a.jsxs)("div", {
        className: r()(iZ.nw, { [iZ.Yz]: _ }),
        children: [
            _ ? (0, a.jsx)(iQ, {}) : null,
            (0, a.jsxs)("div", {
                className: iZ.WH,
                children: [
                    (0, a.jsxs)(A.Ay, {
                        variant: ef ? A.Z5.RELATIVE : A.Z5.OVERLAY,
                        children: [
                            !ef && (0, a.jsx)(A.ns, { scrollPosition: y }),
                            es
                                ? (0, a.jsx)(iJ, { applicationId: Y, hideDetailHeaderButtons: ee, onClickBack: eA })
                                : (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          el
                                              ? (0, a.jsx)(A.XQ, { icon: h.Z, onClick: eA })
                                              : (0, a.jsx)(A.T4, { icon: u.k }),
                                          el
                                              ? (0, a.jsx)(p.D, {
                                                    variant: "heading-lg/semibold",
                                                    color: "text-strong",
                                                    className: iZ.wL,
                                                    children:
                                                        null != K && "" !== K
                                                            ? U.intl.formatToPlainString(U.t.zHdzqW, { query: K })
                                                            : U.intl.formatToPlainString(U.t.Qhj5Br, {
                                                                  categoryName: Z?.name ?? U.intl.string(U.t.E407b7),
                                                              }),
                                                })
                                              : (0, a.jsx)(C.A, {
                                                    className: e_,
                                                    tabs: J,
                                                    selectedTab: Q,
                                                    onTabSelect: eg,
                                                    onAvailableWidthChange: eh,
                                                }),
                                          (0, a.jsx)(b.A, {
                                              query: er,
                                              placeholder: U.intl.string(U.t["5h0QOP"]),
                                              onTextChange: eo,
                                              onClear: ec,
                                              onSubmit: ed,
                                              onCollapsedClick: ep,
                                              state: eu,
                                              onBlur: em,
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                    es
                        ? (0, a.jsx)(iE, {
                              onScroll: (e) => eb(e, O.ev.APPLICATION),
                              onSelectApplication: ex,
                              applicationId: Y,
                              initialTab: z,
                              onButtonsVisibilityChange: et,
                          })
                        : el
                          ? (0, a.jsx)(i$, { onSelectApplication: ex, onScroll: (e) => eb(e, O.ev.SEARCH) })
                          : Q === G.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, a.jsx)(iw, { onScroll: (e) => eb(e, O.ev.HOME), onSelectApplication: ex })
                            : (0, a.jsx)(eP, {
                                  tabId: Number(Q),
                                  onScroll: (e) => eb(e, O.ev.CATEGORY),
                                  onSelectApplication: ex,
                              }),
                ],
            }),
        ],
    });
};
