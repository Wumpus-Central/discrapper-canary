l.r(t), l.d(t, { default: () => sq });
var s,
    i = l(627968),
    a = l(64700),
    n = l(503698),
    r = l.n(n),
    o = l(735438),
    c = l.n(o),
    d = l(17928),
    u = l(323384),
    h = l(548411),
    m = l(534514),
    p = l(417098),
    g = l(111159),
    x = l(834730),
    A = l(711111),
    j = l(770472),
    v = l(737823),
    C = (l(749638), l(876622)),
    _ = l(521974),
    I = l(965660),
    E = l(976860),
    N = l(495544),
    S = l(287809),
    f = l(174459),
    y = l(993748),
    b = l(416730),
    R = l(212534),
    P = l(38181),
    L = l(939635);
l(323874), l(14289), l(35956);
var T = l(323125),
    D = l(310419),
    O = l(652215);
function k(e, t) {
    let l = D.h.getField("sessionId"),
        s = D.h.getField("guildId"),
        i = D.h.getField("entrypoint")?.name,
        a = S.default.getCurrentUser(),
        n = { ...t, guild_id: s, directory_session_id: l, source: i, user_id: a?.id };
    return f.default.track(e, n);
}
function G() {
    return (0, d.bG)([N.default], () => N.default.isAuthenticated());
}
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let l in e) {
        let s = e[l];
        t.searchParams.set(l, s);
    }
    let l = t.pathname + t.search,
        s = (0, T.T2)(l, !1);
    (0, E.pX)(s);
}
var U = l(435220),
    w = l(375708);
function V() {
    return { id: U.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID, name: w.intl.string(w.t.ijDDwz) };
}
let F = function () {
        let { query: e, categoryId: t, page: l } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            s = { previousView: (0, D.R4)() },
            i = new URLSearchParams();
        null != e && "" !== e && i.set("q", e),
            null != t && t !== L.lj && i.set("category_id", t.toString()),
            null != l && l > 1 && i.set("page", l.toString()),
            (0, E.pX)(O.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, { state: s, search: i.toString() });
    },
    B = (e) => {
        let {
            location: { state: t },
        } = (0, E.JK)();
        (0, E.bG)(e, t);
    };
var H = l(902119),
    Y = l(701508),
    z = l(979590),
    X = l(783531),
    K = l(624134);
let W = "/assets/3aa7e375b23dc56f.svg";
function Z(e) {
    let { heading: t = w.intl.string(w.t.NGw8v2), body: l = w.intl.string(w.t["1XZRY4"]), className: s } = e;
    return (0, i.jsxs)("div", {
        className: r()(K.kL, s),
        children: [
            (0, i.jsx)("div", {
                className: K.ZS,
                children: (0, i.jsx)("img", { className: K.Sl, src: W, alt: w.intl.string(w.t["/UJaI2"]) }),
            }),
            (0, i.jsx)(m.D, { variant: "heading-xl/semibold", className: K.wx, children: t }),
            (0, i.jsx)(x.E, { variant: "text-md/normal", color: "text-default", children: l }),
        ],
    });
}
var $ = l(935573),
    q = l(702841),
    Q = l(932793),
    J = l(919796),
    ee = l(111042),
    et = l(651753),
    el = l(289873),
    es = l(566984);
function ei(e) {
    let { loading: t, children: l } = e;
    return (0, i.jsxs)("div", {
        className: es.kL,
        children: [
            t
                ? (0, i.jsx)("div", {
                      className: es.dc,
                      children: (0, i.jsx)(el.y, { className: es.u1, type: el.y.Type.SPINNING_CIRCLE }),
                  })
                : null,
            (0, i.jsx)("div", { className: r()({ [es.Lq]: t }), children: l }),
        ],
    });
}
var ea = l(269115),
    en = l(735991),
    er = l(635350),
    eo = l(486020),
    ec = l(775602),
    ed = l(435582),
    eu = l(283488),
    eh = l(607470),
    em = l(654107),
    ep = l(564096);
let eg = 16 / 9,
    ex = 325 / 72;
function eA(e) {
    let { application: t, isHovered: l, botBannerUrl: s, botBannerUrlAnimated: n, iconURL: o } = e,
        c = (0, eu.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"] }),
        d = a.useMemo(() => {
            let e = (0, en.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, ed.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        { imageUrl: u, imageUrlAnimated: h } = a.useMemo(
            () => ("fetched" === c.state && null != c.url ? { imageUrl: c.url } : { imageUrl: s, imageUrlAnimated: n }),
            [c.state, c.url, s, n],
        ),
        m = null != u,
        p = null != d;
    return "loading" === c.state
        ? null
        : p
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    m
                        ? (0, i.jsx)(ej, { isHovered: l, url: u, animatedUrl: void 0 })
                        : (0, i.jsx)(eh.A, { src: d, className: r()(ep._e, ep.IH), muted: !0 }),
                    (0, i.jsx)(ev, { isHovered: l, url: d, isVideo: !0 }),
                ],
            })
          : m
            ? (0, i.jsx)(ej, { isHovered: l, url: u, animatedUrl: h })
            : (0, i.jsx)(eC, { iconURL: o });
}
function ej(e) {
    let { isHovered: t, url: l, animatedUrl: s } = e,
        [n, o] = a.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("img", { src: l, alt: "", className: r()(ep._e, ep.IH, { [ep.Kc]: n }), onLoad: () => o(!0) }),
            null != s ? (0, i.jsx)(ev, { isHovered: t, url: s, isVideo: !1 }) : null,
        ],
    });
}
function ev(e) {
    let { isHovered: t, url: l, isVideo: s } = e,
        [n, o] = a.useState(!1),
        [c, d] = a.useState(t);
    return (a.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, i.jsx)("div", {
              className: r()(ep.hY, { [ep.Q]: !t, [ep.nR]: t && n }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: s
                  ? (0, i.jsx)(eh.A, {
                        src: l,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: ep.IH,
                        onLoadedData: () => o(!0),
                    })
                  : (0, i.jsx)("img", { src: l, alt: "", className: ep.IH, onLoad: () => o(!0) }),
          })
        : null;
}
function eC(e) {
    let { iconURL: t } = e,
        { backgroundGradient: l, hasFetchedColors: s } = (function (e) {
            let [t, l, s] = (0, em.rh)(e, "transparent");
            return { backgroundGradient: `linear-gradient(45deg, ${t}, ${s ?? l})`, hasFetchedColors: (0, em.D1)(e) };
        })(t);
    return (0, i.jsx)("div", { className: r()(ep.IH, ep.nY, { [ep.Kc]: s }), style: { backgroundImage: l } });
}
let e_ = function (e) {
    let { application: t, bannerType: l, iconURL: s } = e,
        n = (0, d.bG)([ec.A], () => ec.A.useReducedMotion),
        [r, o] = a.useState(!1),
        c = a.useCallback(() => {
            o(!0);
        }, []),
        u = a.useCallback(() => o(!1), []),
        h = (0, en.Ag)(t),
        m = t.bot,
        { botBannerUrl: p, botBannerUrlAnimated: g } = a.useMemo(
            () =>
                m?.id == null || m?.banner == null
                    ? {}
                    : {
                          botBannerUrl: (0, eo.z)({ id: m.id, banner: m.banner, canAnimate: !1, size: 600 }),
                          botBannerUrlAnimated: n
                              ? void 0
                              : (0, eo.z)({ id: m.id, banner: m.banner, canAnimate: !0, size: 600 }),
                      },
            [m?.id, m?.banner, n],
        );
    return (0, i.jsx)("div", {
        className: ep.cI,
        style: { aspectRatio: "card" === l ? eg : ex },
        onMouseEnter: c,
        onFocus: c,
        onMouseLeave: u,
        onBlur: u,
        children:
            "card" === l && h
                ? (0, i.jsx)(eA, {
                      application: t,
                      isHovered: r,
                      botBannerUrl: null == p ? void 0 : p,
                      botBannerUrlAnimated: null == g ? void 0 : g,
                  })
                : null != p
                  ? (0, i.jsx)(ej, { isHovered: r, url: p, animatedUrl: g })
                  : (0, i.jsx)(eC, { iconURL: s }),
    });
};
var eI = l(92400);
let eE = function (e) {
    let { application: t, onSelectApplication: l, showCategory: s = !1 } = e,
        n = a.useRef(null),
        r = t.categories?.[0],
        [o, c] = a.useState(!1),
        d = a.useCallback((e) => {
            e && c(!0);
        }, []),
        u = (0, en.NO)(t),
        h = a.useCallback(() => {
            l(t.id);
        }, [l, t.id]),
        p = a.useMemo(() => (o ? eo.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 48 }) : void 0), [o, t]),
        g = s && null != r;
    return (0, i.jsx)(ea.L, {
        innerRef: n,
        onChange: d,
        active: !o,
        children: (0, i.jsx)("div", {
            ref: n,
            className: eI.kL,
            children: (0, i.jsxs)(er.A, {
                className: eI.Nr,
                onClick: h,
                onContextMenu: () => {},
                "aria-label": w.intl.string(w.t.np1Wru),
                children: [
                    (0, i.jsxs)("div", {
                        className: eI.wx,
                        children: [
                            (0, i.jsx)("div", {
                                style: { width: "100%", display: "block", aspectRatio: 16 / 9 },
                                children: o ? (0, i.jsx)(e_, { application: t, bannerType: "card", iconURL: p }) : null,
                            }),
                            (0, i.jsx)("div", {
                                className: eI.H,
                                style: { height: 28 },
                                children: o
                                    ? (0, i.jsx)("img", {
                                          src: p,
                                          alt: "",
                                          className: eI.my,
                                          height: 48,
                                          width: 48,
                                          style: { borderWidth: 4, marginLeft: 12 },
                                      })
                                    : null,
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: eI.eV,
                        children: [
                            (0, i.jsx)("div", {
                                className: eI.gn,
                                children: (0, i.jsx)("div", {
                                    className: eI.DD,
                                    children: (0, i.jsx)(m.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        className: eI.JB,
                                        children: t.name,
                                    }),
                                }),
                            }),
                            g || u
                                ? (0, i.jsxs)("div", {
                                      className: eI.op,
                                      children: [
                                          g
                                              ? (0, i.jsx)(x.E, {
                                                    className: eI.m4,
                                                    variant: "text-xs/medium",
                                                    color: "text-default",
                                                    children: r.name,
                                                })
                                              : null,
                                          g && u
                                              ? (0, i.jsx)(x.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: "\u2022",
                                                })
                                              : null,
                                          u
                                              ? (0, i.jsx)(x.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: w.intl.string(w.t["/eVltv"]),
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            (0, i.jsx)(x.E, {
                                className: eI.h_,
                                variant: "text-sm/medium",
                                color: "text-default",
                                lineClamp: g || u ? 2 : 3,
                                children: t.directory_entry?.short_description ?? t.description,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var eN = l(392896);
let eS = { results: [], totalPages: 0, loadId: "" },
    ef = function (e) {
        let { categoryId: t, onSelectApplication: l, resetScroll: s } = e,
            [n, r] = a.useState(1),
            o = a.useCallback((e) => {
                r(e);
            }, []);
        a.useEffect(() => {
            r(1);
        }, [t]);
        let c = a.useMemo(() => ({ query: U.EMPTY_QUERY, page: n, pageSize: U.PAGE_SIZE, categoryId: t }), [n, t]),
            d = (0, q.bG)([et.A], () =>
                et.A.getFetchState({ query: U.EMPTY_QUERY, page: n, pageSize: U.PAGE_SIZE, categoryId: t }),
            ),
            u = (0, q.cf)([et.A], () => et.A.getSearchResults(c) ?? eS),
            h = (0, J.A)(u) ?? eS,
            { results: m, totalPages: p, loadId: g } = a.useMemo(() => (d === ee.e.FETCHING ? h : u), [d, h, u]),
            x = a.useMemo(() => m?.filter((e) => e.type === $.j.APPLICATION), [m]),
            A = a.useCallback((e) => {
                let { page: t, activeCategoryId: l, onSuccessCallback: s, guildId: i, fetchCounts: a } = e;
                a && y.$P({ query: U.EMPTY_QUERY, guildId: i }),
                    y.$P({
                        query: U.EMPTY_QUERY,
                        guildId: i,
                        options: { page: t, pageSize: U.PAGE_SIZE, categoryId: l },
                        onSuccessCallback: s,
                    });
            }, []);
        a.useEffect(() => {
            s(), A({ page: n, activeCategoryId: t, onSuccessCallback: () => {} });
        }, [t, s, A, n]);
        let j = a.useCallback(
            (e, t) => {
                k(O.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: D.ev.SEARCH,
                    application_id: e,
                    load_id: g,
                    position: t,
                }),
                    l(e);
            },
            [g, l],
        );
        return d === ee.e.ERROR
            ? (0, i.jsx)("div", { className: eN.Un, children: (0, i.jsx)(Z, { className: eN.z3 }) })
            : (0, i.jsxs)(ei, {
                  loading: d === ee.e.FETCHING,
                  children: [
                      (0, i.jsx)("div", {
                          className: eN.Qs,
                          children: x?.map((e, t) => {
                              if (e.type === $.j.APPLICATION) {
                                  let l = e.data;
                                  return (0, i.jsx)(eE, { application: l, onSelectApplication: (e) => j(e, t) }, l.id);
                              }
                              return null;
                          }),
                      }),
                      (0, i.jsx)(Q.m, {
                          className: eN.JV,
                          totalCount: Math.min(p * U.PAGE_SIZE, U.MAX_PAGES * U.PAGE_SIZE),
                          pageSize: U.PAGE_SIZE,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: n,
                          onPageChange: o,
                      }),
                  ],
              });
    };
var ey = l(504797);
let eb = function (e) {
    let { tabId: t, onSelectApplication: l, onScroll: s } = e,
        n = a.useRef(null),
        r = a.useCallback(() => {
            n.current?.scrollTo({ to: 0 });
        }, []),
        o = (0, d.bG)([P.A], () => P.A.getCategories()),
        c = a.useMemo(() => o.find((e) => e.id === t), [o, t]),
        u = a.useMemo(
            () =>
                null != c
                    ? (function (e) {
                          switch (e.id) {
                              case 4:
                                  return w.intl.string(w.t["3m9Egb"]);
                              case 6:
                                  return w.intl.string(w.t.VJRr3Y);
                              case 8:
                                  return w.intl.string(w.t.Uv7mFd);
                              case 9:
                                  return w.intl.string(w.t.TEK9Ax);
                              case 10:
                                  return w.intl.string(w.t.lfBt2T);
                          }
                          return "";
                      })(c)
                    : "",
            [c],
        );
    return (0, i.jsxs)(X.A, {
        onScroll: s,
        ref: n,
        children: [
            (0, i.jsx)(Y.A, { title: c?.name ?? "", description: u, children: (0, i.jsx)(H.A, {}) }),
            (0, i.jsx)(z.A, {
                children:
                    null == c
                        ? (0, i.jsx)("div", { className: ey.U, children: (0, i.jsx)(Z, { className: ey.z }) })
                        : (0, i.jsx)(ef, { categoryId: c.id, onSelectApplication: l, resetScroll: r }),
            }),
        ],
    });
};
var eR = l(123791),
    eP = l(761508),
    eL = l(759057);
let eT = function (e) {
    let { tabs: t, onTabSelect: l, selectedTab: s, className: a } = e;
    return (0, i.jsx)(eP.V, {
        type: "top-pill",
        selectedItem: s,
        onItemSelect: l,
        className: a,
        children: t.map((e, t) => {
            let { id: l, label: s, count: a } = e;
            return (0, i.jsx)(
                eP.V.Item,
                {
                    id: l,
                    className: r()(eL.V, { [eL.r]: 0 === t }),
                    "aria-label": s,
                    children: null != a && a > 0 ? `${s} (${a})` : s,
                },
                l,
            );
        }),
    });
};
var eD = l(82293),
    eO = l(403362),
    ek = l(939249),
    eG = l(175671),
    eM = l(259407),
    eU = l(451988),
    ew = l(408278),
    eV = l(921853),
    eF = l(477155),
    eB = l(320448),
    eH = l(935286),
    eY = l(228366),
    ez = l(725951),
    eX = l(625494),
    eK = l(332412);
let eW = 16 / 9;
class eZ extends a.PureComponent {
    static defaultProps = { includeHitboxPadding: !0 };
    componentDidMount() {
        eX._.subscribe(O.jej.CAROUSEL_PREV, this.handlePrevious), eX._.subscribe(O.jej.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        eX._.unsubscribe(O.jej.CAROUSEL_PREV, this.handlePrevious),
            eX._.unsubscribe(O.jej.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let {
                current: e,
                count: t,
                includeHitboxPadding: l,
                arrowClassName: s,
                paginationDotClassName: a,
                paginationDotSelectedClassName: n,
                paginationArrowIconType: o = "arrow",
            } = this.props,
            d = r()(eK.sb, { [eK.JU]: l }, s);
        return (0, i.jsxs)("div", {
            className: r()(eK.ne, this.props.className),
            children: [
                (0, i.jsx)("div", {
                    className: d,
                    children: (0, i.jsx)(ew.K, {
                        variant: "icon-only",
                        icon: "caret" === o ? eV.n : eF.r,
                        "aria-label": w.intl.string(w.t.vgfxaA),
                        onClick: this.handlePrevious,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: eK.r$,
                    children: c().times(t, (t) =>
                        (0, i.jsx)(
                            ek.D,
                            {
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? r()(eK.NU, n) : r()(eK.Lw, a),
                                "aria-label": w.intl.formatToPlainString(w.t["2SXOrM"], { pageNumber: t + 1 }),
                            },
                            `dot-${t}`,
                        ),
                    ),
                }),
                (0, i.jsx)("div", {
                    className: d,
                    children: (0, i.jsx)(ew.K, {
                        variant: "icon-only",
                        icon: "caret" === o ? eB._ : eH.E,
                        "aria-label": w.intl.string(w.t.XiOHRX),
                        onClick: this.handleNext,
                    }),
                }),
            ],
        });
    }
    handleDotClick = (e) => {
        let { onSetItem: t, onIntentionalChange: l, current: s } = this.props;
        l?.(s, e, "jump"), t(e);
    };
    handleNext = () => {
        let { onIntentionalChange: e, current: t, onChangePage: l } = this.props,
            s = l(1);
        e?.(t, s, "next");
    };
    handlePrevious = () => {
        let { onIntentionalChange: e, current: t, onChangePage: l } = this.props,
            s = l(-1);
        e?.(t, s, "previous");
    };
}
class e$ extends a.PureComponent {
    timer = new eU.IX();
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
        let l = (e, t) => !e.initialPaused && !t.paused,
            s = l(this.props, this.state),
            i = l(e, t);
        s && !i ? this.startTimer() : !s && i && this.stopTimer();
        let { items: a } = this.props,
            { visibleIndex: n } = this.state;
        null == a[n] && this.changeItem(a, 1);
    }
    startTimer() {
        null != this.props.delay && this.timer.start(this.props.delay, this.nextItem);
    }
    stopTimer() {
        null != this.props.delay && this.timer.stop();
    }
    changeItem(e, t) {
        let l = this.state.visibleIndex + t;
        l < 0 ? (l = e.length - 1) : l > e.length - 1 && (l = 0);
        let { onChangeItem: s } = this.props;
        s?.(e[l], this.state.visibleIndex, l);
        let i = t > 0 ? ez.f.LEFT : ez.f.RIGHT;
        return this.setState({ visibleIndex: l, direction: i }), l;
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
                className: l,
                slideAnimatorClassName: s,
                slideAnimatorSpringSettings: a,
                slideAnimatorFadeInOut: n,
                paginationClassName: o,
                paginationArrowClassName: c,
                paginationArrowIconType: d,
                paginationDotClassName: u,
                paginationDotSelectedClassName: h,
                themedPagination: m,
                includeHitboxPadding: p,
                style: g,
                aspectRatio: x,
                children: A,
            } = this.props,
            { visibleIndex: j } = this.state;
        return (0, i.jsxs)("div", {
            className: eK.zr,
            children: [
                (0, i.jsxs)("div", {
                    className: r()(eK.Cf, l),
                    style: g,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, i.jsx)("div", {
                            style: { aspectRatio: x },
                            children: (0, i.jsx)(ez.A, {
                                className: r()(eK.Dk, s),
                                step: j,
                                direction: this.getCurrentDirection(),
                                springSettings: a,
                                fadeInOut: n,
                                children: t(e[j], j),
                            }),
                        }),
                        e.length > 1 &&
                            (0, i.jsx)(eZ, {
                                className: r()(o, m ? eK.S$ : eK.X$),
                                arrowClassName: c,
                                includeHitboxPadding: p,
                                current: j,
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
                null != A && A({ step: j, direction: this.getCurrentDirection() }),
            ],
        });
    }
    handleSetItem = (e) => {
        let { visibleIndex: t } = this.state,
            { items: l } = this.props;
        this.changeItem(l, e - t);
    };
    handleMouseEnter = () => {
        this.setState({ paused: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ paused: !1 });
    };
    handleIntentionalChange = (e, t, l) => {
        let { items: s, onIntentionalChange: i } = this.props;
        return i?.(s[t], e, t, l);
    };
}
var eq = l(619517),
    eQ = l(248643),
    eJ = l(34337),
    e0 = l(615300),
    e1 = l(456412),
    e7 = l(133296),
    e9 = l(848752),
    e3 = l(452282),
    e8 = l(821209),
    e6 = l(795574);
let e2 = `rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=${O.NzX}`,
    e5 = { width: 640, height: 360, margin: 15 },
    e4 = { width: 880, height: 495, margin: 20 },
    te = { width: 1920, height: 1080 },
    tt = { width: 1280, height: 720 },
    tl = (e) => (0, eJ.$o)({ ...e, className: e6.tN, mediaPlayerClassName: e6.yf }),
    ts = (e) => (0, i.jsx)(eq.Ay, { ...e }),
    ti = (e) => {
        let t,
            l,
            s,
            {
                item: a,
                size: n,
                onPlay: r,
                onEnded: o,
                onClick: c,
                playable: d,
                volume: u,
                isMuted: h,
                onVolumeChange: m,
                onMute: p,
            } = e;
        if (a.type === O.geh.YOUTUBE_VIDEO)
            (t = { url: (0, O.PE$)(a.youtubeVideoId), ...te }),
                (l = { url: `${(0, O.uJ2)(a.youtubeVideoId)}?${e2}`, ...tt }),
                (s = eM.mt.YOUTUBE);
        else {
            let e = null != a.width ? a.width : 0,
                s = null != a.height ? a.height : 0;
            (t = { url: a.thumbnailSrc, width: e, height: s }),
                (l = { url: a.src, proxyURL: a.src, width: e, height: s });
        }
        let g = (0, i.jsx)(eG.rr, {
            href: null,
            thumbnail: t,
            video: l,
            provider: s,
            allowFullScreen: !0,
            maxHeight: n.height,
            maxWidth: n.width,
            onPlay: r,
            onEnded: o,
            playable: d,
            className: e6.Ki,
            volume: u,
            onVolumeChange: m,
            autoMute: h,
            onMute: p,
            autoPlay: d,
            renderVideoComponent: tl,
            renderImageComponent: ts,
            renderLinkComponent: eJ.bU,
        });
        return d ? g : (0, i.jsx)(ek.D, { className: e6.AU, onClick: c, children: g });
    },
    ta = () =>
        (0, i.jsx)("div", {
            className: e6.eM,
            children: (0, i.jsx)(e8.A, { inactive: !0, className: e6.J6, renderLinkComponent: eJ.bU }),
        });
class tn extends a.PureComponent {
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
        eX._.subscribe(O.jej.CAROUSEL_PREV, this.manualPrevious), eX._.subscribe(O.jej.CAROUSEL_NEXT, this.manualNext);
    }
    componentWillUnmount() {
        eX._.unsubscribe(O.jej.CAROUSEL_PREV, this.manualPrevious),
            eX._.unsubscribe(O.jej.CAROUSEL_NEXT, this.manualNext);
    }
    getItemSize = () => {
        let { width: e } = this.props,
            t = e4;
        return null != e && e < t.width && (t = e5), t;
    };
    getStyle(e, t) {
        let l = t.interpolate({ inputRange: [0, 1], outputRange: [1, 0], extrapolate: e0.A.Extrapolate.CLAMP });
        return {
            opacity: t.interpolate({ inputRange: [0, 1], outputRange: [0.3, 1], extrapolate: e0.A.Extrapolate.CLAMP }),
            filter: e0.A.template`grayscale(${l})`,
        };
    }
    setItem = (e, t) => {
        let {
                props: { items: l, onIntentionalChange: s },
                state: { currentIndex: i },
            } = this,
            a = (0, e3.U3)(i, l.length),
            n = (0, e3.U3)(e, l.length),
            r = 1 === Math.abs(e - a) || (e === l.length - 1 && 0 === a) || (0 === e && a === l.length - 1);
        this.setState({ playingVideo: !1, currentIndex: n, animate: r, hasInteracted: t }),
            t && null != s && s(l[n], a, n);
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
        let { onCurrentItemClick: l } = this.props;
        null != l && l(e, t), this.setState({ hasInteracted: !0 });
    }
    handleEdgeItemMouseEnter(e) {
        let { currentIndex: t } = this.state;
        e < t ? this.setState({ hoveringPreviousItem: !0 }) : e > t && this.setState({ hoveringNextItem: !0 });
    }
    handleEdgeItemMouseLeave = () => {
        this.setState({ hoveringPreviousItem: !1, hoveringNextItem: !1 });
    };
    renderCarouselImage = (e, t, l) =>
        l
            ? (0, i.jsx)(ek.D, {
                  onClick: () => this.handleCurrentItemClick(e, t),
                  className: e6.AU,
                  children: (0, i.jsx)("img", { src: e.src, alt: "", className: e6.NP }),
              })
            : (0, i.jsx)(ek.D, {
                  onClick: () => this.setItem(t, !0),
                  className: e6.AU,
                  children: (0, i.jsx)("img", { alt: "", className: e6.tv, src: e.src, draggable: !1 }),
              });
    renderItem = (e, t, l) => {
        let { currentIndex: s, volume: a, isMuted: n } = this.state,
            o = t === (0, e3.U3)(s, this.props.items.length);
        return (0, i.jsx)(e0.A.div, {
            className: r()(e6.AS, { [e6.Xt]: o }),
            style: null != l ? this.getStyle(t, l) : null,
            onMouseEnter: o ? null : () => this.handleEdgeItemMouseEnter(t),
            onMouseLeave: o ? null : this.handleEdgeItemMouseLeave,
            children:
                e.type === O.geh.VIDEO || e.type === O.geh.YOUTUBE_VIDEO
                    ? (0, i.jsx)(ti, {
                          item: e,
                          size: this.getItemSize(),
                          onPlay: this.handlePlay,
                          onEnded: this.handleEnded,
                          playable: o,
                          onClick: () => this.handleVideoClick(t),
                          volume: a,
                          onVolumeChange: this.handleVolumeChange,
                          isMuted: n,
                          onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, o),
        });
    };
    renderCarousel() {
        let { items: e } = this.props,
            { currentIndex: t, animate: l, hoveringPreviousItem: s, hoveringNextItem: a } = this.state,
            n = (0, i.jsx)(e3.Ay, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: l,
                edgeItems: 2,
            });
        return e.length <= 1
            ? n
            : (0, i.jsxs)("div", {
                  className: e6.HY,
                  children: [
                      n,
                      (0, i.jsx)(e9.Q8, { onClick: this.manualPrevious, className: r()(e6.UE, { [e6.h_]: s }) }),
                      (0, i.jsx)(e9.Oj, { onClick: this.manualNext, className: r()(e6.UE, { [e6.h_]: a }) }),
                  ],
              });
    }
    getPaginationSrc(e) {
        return e.type === O.geh.YOUTUBE_VIDEO
            ? (0, O.PE$)(e.youtubeVideoId)
            : e.type === O.geh.IMG
              ? e.src
              : e.type === O.geh.VIDEO
                ? e.thumbnailSrc
                : null;
    }
    renderPaginationItem = (e, t) => {
        let { currentIndex: l } = this.state,
            s = l === t;
        return (0, i.jsxs)(
            "div",
            {
                className: r()(e6.Yw, s ? e6.sM : e6.N7),
                children: [
                    (0, i.jsx)("img", {
                        alt: null == e.alt ? t : e.alt,
                        className: e6.Pr,
                        src: this.getPaginationSrc(e),
                        draggable: !1,
                    }),
                    e.type === O.geh.YOUTUBE_VIDEO || e.type === O.geh.VIDEO ? (0, i.jsx)(ta, {}) : null,
                    s ? (0, i.jsx)("div", { className: e6.SD }) : null,
                ],
            },
            `page-${t}`,
        );
    };
    render() {
        let { items: e, className: t, autoplayInterval: l, paused: s } = this.props,
            { currentIndex: a, playingVideo: n, hasInteracted: r } = this.state;
        return (0, i.jsxs)(e7.A, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: l,
            className: t,
            disable: n || r || s,
            children: [
                this.renderCarousel(),
                (0, i.jsx)("div", {
                    className: e6.X$,
                    children: (0, i.jsx)(e9.Ay, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: a,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: e6.XG,
                        align: e.length < 6 ? e9.Ay.Align.LEFT : e9.Ay.Align.CENTER,
                    }),
                }),
            ],
        });
    }
}
(0, e1.A)(tn);
var tr = l(665513);
let to = (e) => {
        let { className: t, ...l } = e;
        return (0, i.jsx)(eQ.A, {
            ...l,
            className: r()(tr.Zy, t),
            mediaPlayerClassName: tr.Zy,
            renderLinkComponent: eJ.bU,
        });
    },
    tc = (e) => {
        let { containerClassName: t, className: l, ...s } = e;
        return (0, i.jsx)(eq.Ay, { ...s, className: r()(l, t) });
    },
    td = { width: 1280, height: 720 },
    tu = { width: 640, height: 360 },
    th = `rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=${O.NzX}`,
    tm = (e) => {
        let t,
            l,
            s,
            { item: a, onPlay: n, volume: r, onVolumeChange: o, onMute: c, isMuted: d, autoPlay: u } = e;
        if (a.type === O.geh.YOUTUBE_VIDEO)
            (t = { url: (0, O.PE$)(a.youtubeVideoId), ...td }),
                (l = { url: `${(0, O.uJ2)(a.youtubeVideoId)}?${th}`, ...tu }),
                (s = eM.mt.YOUTUBE);
        else {
            let e = null != a.width ? a.width : 0,
                s = null != a.height ? a.height : 0;
            (t = { url: a.thumbnailSrc, width: e, height: s }),
                (l = { url: a.src, proxyURL: a.src, width: e, height: s });
        }
        return (0, i.jsx)("div", {
            className: tr.x,
            children: (0, i.jsx)(eG.rr, {
                className: tr.Zy,
                iframeWrapperClassName: tr.Zy,
                href: null,
                thumbnail: t,
                video: l,
                provider: s,
                maxHeight: e5.height,
                maxWidth: "small",
                onPlay: n,
                playable: !0,
                volume: r,
                onVolumeChange: o,
                autoMute: d,
                onMute: c,
                autoPlay: u,
                renderImageComponent: tc,
                renderVideoComponent: to,
                renderLinkComponent: eJ.bU,
            }),
        });
    };
class tp extends a.PureComponent {
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
            e[0].type === O.geh.IMG &&
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
            e.type === O.geh.IMG &&
                this.setState({
                    imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()),
                });
    };
    handleIntentionalChange = (e, t, l, s) => {
        this.setState({ hasInteracted: !0 });
        let { onIntentionalChange: i } = this.props;
        null != i && i(e, t, l, s);
    };
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: l } = this.props;
        null != l && l(e, t), this.setState({ hasInteracted: !0 });
    }
    handleOnErrorImg = (e) => {
        this.setState({ status: new Map(this.state.status).set(e.target.src, "errored") });
    };
    handleOnLoadImg = (e) => {
        let { onImageLoad: t } = this.props;
        this.setState({ status: new Map(this.state.status).set(e.target.src, "loaded") });
        let l = this.state.imageLoadingStartTime.get(e.target.src),
            s = null != l ? Date.now() - l : void 0;
        t?.({ src: e.target.src, loadTimeMs: s });
    };
    renderItem = (e, t) => {
        let l,
            { isMuted: s, volume: a } = this.state,
            { videoAutoPlay: n } = this.props;
        switch (e.type) {
            case O.geh.YOUTUBE_VIDEO:
            case O.geh.VIDEO:
                l = (0, i.jsx)(tm, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: s,
                    volume: a,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: n,
                });
                break;
            case O.geh.IMG:
                if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, i.jsx)(m.D, { variant: "heading-xl/semibold", children: w.intl.string(w.t.UvDfMz) });
                    return (0, i.jsx)("div", {
                        className: tr.Un,
                        children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e,
                    });
                }
                {
                    let t = e.alt ?? w.intl.string(w.t.X4IxWL);
                    l = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(el.y, {
                                className: r()(tr.u1, { [tr.R]: void 0 !== this.state.status.get(e.src) }),
                                type: el.y.Type.SPINNING_CIRCLE,
                            }),
                            (0, i.jsx)("img", {
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
        return (0, i.jsx)(ek.D, { className: tr.Pj, onClick: () => this.handleCurrentItemClick(e, t), children: l });
    };
    render() {
        let { items: e, autoplayInterval: t, className: l, paused: s, themedPagination: a } = this.props,
            { hasInteracted: n } = this.state;
        return (0, i.jsx)(e$, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: s || n,
            renderItem: this.renderItem,
            className: r()(tr.Gt, l),
            themedPagination: a,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
        });
    }
}
var tg = l(256905),
    tx = l(531685),
    tA = l(427019);
function tj(e) {
    let { application: t, carouselItems: l } = e,
        s = (0, d.bG)([tx.A], () => tx.A.isFocused()),
        n = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("img", { className: tA.M, src: W, "aria-hidden": !0, alt: "" }),
                (0, i.jsx)(m.D, { variant: "heading-xl/semibold", children: w.intl.string(w.t.UvDfMz) }),
            ],
        });
    l.forEach((e, s) => {
        e.alt = w.intl.formatToPlainString(w.t.sSEhHb, { index: s + 1, totalImages: l.length, name: t.name });
    });
    let r = a.useCallback(
        (e, t) => {
            if (e.type === O.geh.IMG) {
                let t = l.filter((e) => e.type === O.geh.IMG),
                    s = t.findIndex((t) => t === e);
                if (s < 0) return;
                let i = t.map((e) => {
                    var t;
                    return {
                        url: ((t = e.src), `${t.split("?")[0]}?size=2048`),
                        original: e.src,
                        width: e.width,
                        height: e.height,
                        type: "IMAGE",
                    };
                });
                (0, tg.R)({
                    items: i,
                    startingIndex: s,
                    shouldHideMediaOptions: !0,
                    location: "GlobalDiscoveryAppsDetailCarousel",
                });
            }
        },
        [l],
    );
    return 0 === l.length
        ? null
        : (0, i.jsx)(tp, {
              className: tA.D,
              themedPagination: !0,
              items: l,
              autoplayInterval: 8e3,
              paused: !s,
              videoAutoPlay: !0,
              onCurrentItemClick: r,
              errorComponent: n,
          });
}
var tv = l(168186);
l(827669);
var tC = l(733975);
function t_(e) {
    let { application: t } = e,
        l = a.useMemo(() => {
            let e = t.directory_entry?.popular_application_commands;
            return null != e
                ? e.map((e) => (0, tv.Oe)({ rootCommand: e, command: e, applicationId: e.application_id }))
                : [];
        }, [t]);
    return 0 === l.length
        ? null
        : (0, i.jsxs)("div", {
              className: tC.hd,
              children: [
                  (0, i.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: w.intl.string(w.t.swIgTL),
                  }),
                  (0, i.jsx)("div", {
                      className: tC.hQ,
                      children: l.map((e) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: tC.dO,
                                  children: [
                                      (0, i.jsxs)(x.E, {
                                          className: tC.p6,
                                          variant: "code",
                                          color: "text-strong",
                                          children: ["/", e.displayName],
                                      }),
                                      (0, i.jsx)(x.E, {
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
var tI = l(534890),
    tE = l(812991),
    tN = l(177953),
    tS = l(203363),
    tf = l(975571),
    ty = l(123917),
    tb = l(169795);
let tR = tf.A.getArticleURL(O.MVz.BOT_DATA_ACCESS);
function tP(e) {
    let { application: t } = e,
        { hasMessageContent: l, hasGuildPresences: s, hasGuildMembers: n, hasIntents: r } = (0, tS.Z)(t),
        o = a.useCallback(() => {
            null != t.privacy_policy_url && (0, ty.h)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, i.jsxs)("div", {
        className: tb.hd,
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: w.intl.string(w.t.QzDgMq),
            }),
            (0, i.jsxs)("div", {
                className: tb.hQ,
                children: [
                    r &&
                        (0, i.jsxs)("ul", {
                            className: tb.In,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-default",
                                    children: w.intl.string(w.t.U6KH5S),
                                }),
                                l &&
                                    (0, i.jsx)(tL, {
                                        icon: tI.o,
                                        heading: w.intl.string(w.t.gJpBO2),
                                        body: w.intl.string(w.t["L+QVbh"]),
                                    }),
                                s &&
                                    (0, i.jsx)(tL, {
                                        icon: tE.n,
                                        heading: w.intl.string(w.t["jo0oj/"]),
                                        body: w.intl.string(w.t.Dm0jqx),
                                    }),
                                n &&
                                    (0, i.jsx)(tL, {
                                        icon: tN.n,
                                        heading: w.intl.string(w.t.QZql7O),
                                        body: w.intl.string(w.t["ez/N/R"]),
                                    }),
                            ],
                        }),
                    (0, i.jsx)(x.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: w.intl.format(w.t.b6nqk0, { helpCenterUrl: tR }),
                    }),
                    null != t.privacy_policy_url &&
                        (0, i.jsx)(x.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: tb.hM,
                            children: w.intl.format(w.t.agYVY5, { onClick: o }),
                        }),
                ],
            }),
        ],
    });
}
function tL(e) {
    let { icon: t, heading: l, body: s } = e;
    return (0, i.jsxs)("li", {
        className: tb.KT,
        children: [
            (0, i.jsx)(t, { color: "currentColor", size: "md" }),
            (0, i.jsxs)("div", {
                className: tb.D6,
                children: [
                    (0, i.jsx)(m.D, { variant: "heading-md/semibold", color: "text-default", children: l }),
                    (0, i.jsx)(x.E, { variant: "text-md/normal", color: "text-default", children: s }),
                ],
            }),
        ],
    });
}
l(321073);
var tT = l(990078),
    tD = l(319060),
    tO = l(664121),
    tk = l(573435),
    tG = l(773669),
    tM = l(240248),
    tU = l(805936),
    tw =
        (((s = {})[(s.SMALL = (0, tM.xI)(tD.A.GUILD_COUNT_SMALL_ICON_SIZE))] = "SMALL"),
        (s[(s.LARGE = (0, tM.xI)(tD.A.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE"),
        s);
let tV = { [tw.SMALL]: tU.Ps, [tw.LARGE]: tU.XY },
    tF = { [tw.SMALL]: tU.Bx, [tw.LARGE]: tU.J3 };
function tB(e) {
    let {
            application: t,
            mutualGuilds: l,
            mutualGuildShownMax: s = 4,
            className: n,
            textVariant: o = "text-sm/normal",
            compact: c,
            guildIconSize: u = tw.LARGE,
            guildsClassName: h,
            children: m,
        } = e,
        p = (0, d.bG)([tG.default], () => tG.default.locale),
        g = new Intl.ListFormat(p),
        A = t.directory_entry?.guild_count ?? 0,
        j = l?.length ?? 0,
        v = Math.max(0, A - j),
        { shownMutualGuilds: C, hiddenMutualGuilds: _ } = a.useMemo(() => {
            let e = [],
                t = [];
            return (
                l?.forEach((l) => {
                    e.length < s && null != l.icon ? e.push(l) : t.push(l);
                }),
                e.length === s && t.length > 0 && (t.push(e[s - 1]), (e = e.slice(0, s - 1))),
                { shownMutualGuilds: e, hiddenMutualGuilds: t }
            );
        }, [l, s]),
        I = _.length,
        E = (function (e, t, l, s, i) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === l) return w.intl.formatToPlainString(w.t.pnzE1t, { mutualGuildCount: t });
            let a = t > 0 ? w.t.YR8PSL : w.t.GQjq6c,
                n = new Intl.NumberFormat(s, { notation: i ? "compact" : "standard", compactDisplay: "short" });
            return w.intl.formatToPlainString(a, {
                guildCount: n.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: n.format(l),
            });
        })(A, j, v, p, c);
    return 0 === C.length && null == E
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  m,
                  (0, i.jsxs)("div", {
                      className: r()(n, tU.iE),
                      children: [
                          (0, i.jsx)("div", {
                              className: r()(tU.Pt, h),
                              children:
                                  C.length > 0
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                C.map((e, t) => {
                                                    let l = t === C.length - 1 && 0 === I,
                                                        s = eo.Ay.getGuildIconURL({
                                                            id: e.id,
                                                            icon: e.icon,
                                                            size: u,
                                                            canAnimate: !1,
                                                        }),
                                                        n = (0, i.jsx)(tT.m, {
                                                            text: e.name,
                                                            position: "top",
                                                            children: (0, i.jsx)("img", {
                                                                className: r()(tU.Kk, tF[u]),
                                                                src: s,
                                                                alt: "",
                                                            }),
                                                        });
                                                    return l
                                                        ? (0, i.jsx)(a.Fragment, { children: n }, e.id)
                                                        : (0, i.jsx)(
                                                              tk.Ay,
                                                              {
                                                                  className: tU.SA,
                                                                  height: u,
                                                                  width: u,
                                                                  mask: tk.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                                                                  children: n,
                                                              },
                                                              e.id,
                                                          );
                                                }),
                                                I > 0
                                                    ? (0, i.jsx)(tT.m, {
                                                          text: w.intl.formatToPlainString(w.t.m6oRrA, {
                                                              appNames: g.format(_.map((e) => e.name)),
                                                          }),
                                                          position: "top",
                                                          children: (0, i.jsxs)("div", {
                                                              className: r()(tU.S_, tV[u]),
                                                              children: ["+", I],
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : (0, i.jsx)(tO.R, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: u,
                                            height: u,
                                            className: tU.DE,
                                        }),
                          }),
                          null != E ? (0, i.jsx)(x.E, { variant: o, color: "text-default", children: E }) : null,
                      ],
                  }),
              ],
          });
}
var tH = l(973172),
    tY = l(788021);
function tz(e) {
    let { application: t, className: l } = e,
        s = a.useCallback((e) => {
            k(O.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: D.ev.APPLICATION,
            }),
                F({ categoryId: e.id });
        }, []);
    return null == t.categories || 0 === t.categories.length
        ? null
        : (0, i.jsxs)("div", {
              className: l,
              children: [
                  (0, i.jsx)(m.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: w.intl.string(w.t.s7iald),
                  }),
                  (0, i.jsx)("div", {
                      className: tY.L,
                      children: t.categories.map((e) =>
                          (0, i.jsx)(
                              ek.D,
                              {
                                  className: tY.c,
                                  onClick: () => s(e),
                                  children: (0, i.jsx)(x.E, {
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
var tX = l(462887),
    tK = l(514042),
    tW = l(194261),
    tZ = l(173936),
    t$ = l(9578),
    tq = l(736653),
    tQ = l(573648),
    tJ = l(355584);
function t0(e) {
    let { application: t, className: l, innerClassName: s } = e,
        a = t.directory_entry?.external_urls ?? [];
    return null != t.terms_of_service_url || null != t.privacy_policy_url || a.length > 0
        ? (0, i.jsxs)("div", {
              className: r()(tJ.kL, l),
              children: [
                  (0, i.jsx)(m.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: w.intl.string(w.t.l6DP2n),
                  }),
                  (0, i.jsxs)("div", {
                      className: r()(tJ.p_, s),
                      children: [
                          a.map((e, t) => (0, i.jsx)(t1, { url: e.url, children: e.name }, t)),
                          null != t.terms_of_service_url
                              ? (0, i.jsx)(t7, {
                                    icon: tK.o,
                                    url: t.terms_of_service_url,
                                    children: w.intl.string(w.t.s7STcY),
                                })
                              : null,
                          null != t.privacy_policy_url
                              ? (0, i.jsx)(t7, {
                                    icon: tW.X,
                                    url: t.privacy_policy_url,
                                    children: w.intl.string(w.t.kH3JR5),
                                })
                              : null,
                      ],
                  }),
              ],
          })
        : null;
}
function t1(e) {
    let { url: t, children: l } = e,
        s = (0, tq.Ay)(),
        a = tQ.A.getByUrl(t),
        n = (0, tX.M)(s) ? a?.icon?.darkSVG : a?.icon?.lightSVG;
    return (0, i.jsx)(t7, { icon: void 0 === n ? tZ.q : void 0, imageSrc: n, url: t, children: l });
}
function t7(e) {
    let { icon: t, imageSrc: l, iconColor: s, url: a, children: n } = e,
        o = G(),
        c = null;
    null != t
        ? (c = (0, i.jsx)(t, { className: tJ.GU, color: s ?? "currentColor", width: 20, height: 20, size: "custom" }))
        : null != l && (c = (0, i.jsx)("img", { className: tJ.GR, src: l, alt: "" }));
    let d = (0, i.jsxs)(i.Fragment, {
        children: [c, (0, i.jsx)(x.E, { className: tJ.so, variant: "text-sm/medium", selectable: !0, children: n })],
    });
    return (0, i.jsx)(t$.A, {
        href: a,
        className: r()(tJ.Aw, tJ.SF),
        trusted: !o,
        useDefaultUnderlineStyles: !1,
        children: d,
    });
}
var t9 = l(449054),
    t3 = l(781696),
    t8 = l(950305),
    t6 = l(548118),
    t2 = l(714991),
    t5 = l(776231),
    t4 = l(860689),
    le = l(728968),
    lt = l(937495),
    ll = l(517061);
function ls(e) {
    let { guild: t, className: l, onClick: s } = e,
        a = (0, tq.Ay)(),
        n = (0, t4.dangerouslyConstructGuildRecordFromUntypedObject)({ name: t.name, icon: t.icon }),
        o = eo.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discovery_splash, size: 192 * (0, t5.mZ)() }),
        c =
            null != o
                ? o
                : (function (e) {
                      switch (e) {
                          case O.NJ8.DARK:
                              return lt;
                          case O.NJ8.LIGHT:
                              return ll;
                      }
                  })(a),
        d = eo.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 50 });
    return (0, i.jsxs)(ek.D, {
        className: r()(le.Nr, l),
        onClick: s,
        "aria-label": w.intl.string(w.t.RB4L2x),
        children: [
            (0, i.jsxs)("div", {
                className: le.MY,
                children: [
                    (0, i.jsx)("img", { src: c, alt: "", className: le.j0 }),
                    (0, i.jsx)("div", {
                        className: le.$f,
                        children: (0, i.jsx)(tk.Ay, {
                            mask: tk.Ay.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, i.jsx)("div", {
                                className: le.SA,
                                children: (0, i.jsx)(t6.Ay, {
                                    className: le.__invalid_icon,
                                    iconSrc: d,
                                    guild: n,
                                    size: t6.Ay.Sizes.LARGE,
                                }),
                            }),
                        }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: le.RN,
                children: [
                    (0, i.jsxs)("div", {
                        className: le.Y_,
                        children: [
                            (0, i.jsx)(t2.A, { className: le.n2, guild: t, tooltipColor: t3.ST.Colors.PRIMARY }),
                            (0, i.jsx)(m.D, { variant: "heading-md/semibold", className: le.J5, children: t.name }),
                        ],
                    }),
                    (0, i.jsx)(x.E, {
                        className: le.eF,
                        variant: "text-sm/normal",
                        color: "text-default",
                        lineClamp: 2,
                        children: t.description,
                    }),
                    (0, i.jsx)("div", {
                        className: le.Fj,
                        children: (0, i.jsxs)("div", {
                            className: le.FG,
                            children: [
                                (0, i.jsx)(t8.n, { color: "currentColor", className: le.NP, size: "xs" }),
                                (0, i.jsx)(x.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: w.intl.format(w.t.zRl6XR, { count: t.approximate_member_count }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
let li = "redirect_to_support_server";
function la(e) {
    var t;
    let l,
        s,
        n,
        { application: r, className: o } = e,
        { onGoToSupportServer: c } =
            ((t = r),
            (l = G()),
            (s = (0, d.bG)([N.default], () => N.default.getSessionId())),
            (n = a.useCallback(async () => {
                try {
                    let e = t?.guild?.id;
                    if (null != e) {
                        k(O.HAw.APP_DIRECTORY_SUPPORT_SERVER_JOINED, { application_id: t.id, support_guild_id: e });
                        let l = { page: O.liQ.APPLICATION_DIRECTORY };
                        await (0, t9.Z2)(e, l);
                    }
                } catch {}
            }, [t])),
            a.useEffect(() => {
                let e = new URL(location.href);
                if (null != t && l && null != s && "true" === e.searchParams.get(li)) {
                    e.searchParams.delete(li);
                    let t = e.pathname + e.search;
                    (0, E.bG)(t), n();
                }
            }, [l, n, s, t]),
            {
                onGoToSupportServer: a.useCallback(() => {
                    null != t?.guild?.id && (l ? n() : M({ [li]: "true" }));
                }, [t, n, l]),
            });
    return null != r.guild && r.guild.features.includes(O.GuildFeatures.DISCOVERABLE)
        ? (0, i.jsxs)("div", {
              className: o,
              children: [
                  (0, i.jsx)(m.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: w.intl.string(w.t.KJEO27),
                  }),
                  (0, i.jsx)(ls, { guild: r.guild, onClick: c }),
              ],
          })
        : null;
}
var ln = l(820764);
let lr = (0, w.getAvailableLocales)();
function lo(e) {
    let { application: t, className: l } = e,
        s = (0, d.bG)([tG.default], () => tG.default.locale),
        { supportedLanguages: n, usersLanguageIsFirst: o } = a.useMemo(() => {
            if (t.directory_entry?.supported_locales != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    l = e.has(s),
                    i = lr.filter((t) => e.has(t.value));
                return (
                    l && i.sort((e, t) => (e.value === s ? -1 : +(t.value === s))),
                    { supportedLanguages: i.map((e) => w.intl.string(e.localizedName)), usersLanguageIsFirst: l }
                );
            }
            return { supportedLanguages: [], usersLanguageIsFirst: !1 };
        }, [t.directory_entry, s]);
    return (0, i.jsxs)("div", {
        className: l,
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: w.intl.string(w.t.Fbjlu3),
            }),
            (0, i.jsx)("ul", {
                className: ln.nw,
                children: n.map((e, t) =>
                    (0, i.jsx)(
                        "li",
                        {
                            className: r()(ln.WH, ln.O6),
                            children: (0, i.jsx)(x.E, {
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
var lc = l(78655);
function ld(e) {
    let { className: t, view: l, application: s } = e,
        a = "embedded" === l,
        n = (0, tH.A)({ application: s });
    return (0, i.jsxs)("div", {
        className: r()(t, { [lc.PD]: !a, [lc.UT]: a }),
        children: [
            (0, i.jsxs)("div", {
                className: r()(lc.hd, { [lc.d5]: a }),
                children: [
                    (0, i.jsx)("div", {
                        className: lc.iY,
                        children: (0, i.jsx)(tB, {
                            application: s,
                            mutualGuilds: n,
                            mutualGuildShownMax: 3,
                            className: lc.wu,
                            guildIconSize: tw.SMALL,
                            guildsClassName: lc.HG,
                            compact: !0,
                            children: (0, i.jsx)(m.D, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: w.intl.string(w.t["3NxHC4"]),
                            }),
                        }),
                    }),
                    (0, i.jsx)(tz, { application: s, className: lc.iY }),
                    (0, i.jsx)(lo, { application: s, className: lc.iY }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: r()(lc.hd, { [lc.d5]: a }),
                children: [
                    (0, i.jsx)(t0, { application: s, className: lc.iY, innerClassName: a ? lc.RU : void 0 }),
                    (0, i.jsx)(la, { application: s, className: lc.iY }),
                ],
            }),
        ],
    });
}
var lu = l(791332),
    lh = l.n(lu),
    lm = l(900797),
    lp = l(847374),
    lg = l(558179),
    lx = l(349288),
    lA = l(376728),
    lj = l(167189),
    lv = l(833291),
    lC = l(481859),
    l_ = l(143145);
let lI = /^discord.gg\/[a-zA-Z0-9-]+/,
    lE = {
        ...lg.A.rules,
        heading: {
            ...lg.A.rules.heading,
            react(e, t, l) {
                let s = `h${Math.min(Math.max(2, e.level + 1), 4)}`;
                return (0, i.jsx)(lC.A, { tag: s, children: t(e.content, l) }, l.key);
            },
        },
        image: { ...lh().defaultRules.image },
        inviteLink: {
            order: lg.A.rules.link.order + 1,
            match: (e, t) => (t.inline ? lI.exec(e) : null),
            parse: (e, t, l) => {
                let s = (0, lv.br)(e[0]);
                return null == s || s.type !== lj.I.INVITE
                    ? { type: "text", content: e[0] }
                    : {
                          type: "inviteLink",
                          content: [{ type: "text", content: e[0] }],
                          onClick: () => {
                              lA.Ay.acceptInviteAndTransitionToInviteChannel({
                                  inviteKey: s.code,
                                  context: { location: "Application Directory" },
                              }),
                                  l.closeModal?.();
                          },
                      };
            },
            react: (e, t, l) =>
                (0, i.jsx)(
                    lx.Anchor,
                    {
                        onClick: (t) => {
                            t.preventDefault(), e.onClick();
                        },
                        children: (0, l_.t)(e, t, l),
                    },
                    l.key,
                ),
        },
    };
var lN = l(349202);
let lS = lh().parserFor(lE),
    lf = lh().reactFor(lh().ruleOutput(lE, "react"));
function ly(e) {
    let { description: t, supportsMarkdown: l } = e,
        [s, n] = a.useState(!1),
        o = a.useRef(null);
    a.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            n((o.current?.scrollHeight ?? 0) - (o.current?.clientHeight ?? 0) > 1);
        });
        return e.observe(o.current), () => e.disconnect();
    }, []);
    let [c, d] = a.useState(!1),
        u = a.useCallback(() => {
            d((e) => !e);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                ref: o,
                className: r()({ [lN.mA]: !c, [lN.ii]: !c && "Safari" === platform.name }),
                children: l
                    ? (0, i.jsx)(lg.A, {
                          className: lN.R4,
                          parser: lS,
                          output: lf,
                          state: { allowLinks: !0 },
                          children: t,
                      })
                    : (0, i.jsx)(x.E, { variant: "text-md/normal", color: "text-default", children: t }),
            }),
            s || c ? (0, i.jsx)(lb, { isShowingMore: c, onToggle: u }) : null,
        ],
    });
}
function lb(e) {
    let { onToggle: t, isShowingMore: l } = e,
        s = a.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: lN.eR,
                    children: [
                        (0, i.jsx)(x.E, {
                            variant: "text-md/semibold",
                            color: "interactive-text-default",
                            children: l ? w.intl.string(w.t["vtfc4+"]) : w.intl.string(w.t.ZDRyuq),
                        }),
                        l
                            ? (0, i.jsx)(lm.t, { size: "md", color: "currentColor", className: lN.ys })
                            : (0, i.jsx)(lp.a, { size: "md", color: "currentColor", className: lN.ys }),
                    ],
                }),
            [l],
        );
    return (0, i.jsxs)(ek.D, {
        className: lN.dO,
        onClick: t,
        children: [(0, i.jsx)("div", { className: lN.yF }), s, (0, i.jsx)("div", { className: lN.yF })],
    });
}
let lR = function (e) {
    let { application: t } = e,
        l = t.directory_entry?.detailed_description,
        s = t.directory_entry?.short_description,
        n = a.useMemo(
            () =>
                null != l && l.length > 0
                    ? (0, i.jsx)(ly, { description: l, supportsMarkdown: !0 })
                    : null != s && s.length > 0
                      ? (0, i.jsx)(ly, { description: s, supportsMarkdown: !1 })
                      : null,
            [l, s],
        );
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: lN.l4,
              children: [
                  (0, i.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: w.intl.string(w.t.txraKS),
                  }),
                  n,
              ],
          });
};
var lP = l(136722),
    lL = l(595738),
    lT = l(376092),
    lD = l(925317);
let lO = function (e) {
    let { application: t } = e,
        l = a.useMemo(() => {
            let e = t?.install_params?.permissions;
            if (null != e) return lT.Q.filter((t) => lP.zy(lP.iu(e), t));
        }, [t?.install_params?.permissions]);
    return null != l && l.length > 0
        ? (0, i.jsxs)("div", {
              className: lD.A,
              children: [
                  (0, i.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: w.intl.string(w.t.runNF8),
                  }),
                  (0, i.jsx)(lL.A, {
                      className: lD.h,
                      grantedPermissions: l,
                      grantedPermissionsHeader: w.intl.string(w.t.SLgiNH),
                  }),
              ],
          })
        : null;
};
var lk = l(534740);
function lG(e) {
    let { application: t } = e,
        l = a.useMemo(() => (t.directory_entry?.carousel_items ?? []).map(L.xb).filter(eO.Vq) ?? [], [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: lk.Xb,
                children: [
                    (0, i.jsx)(tj, { application: t, carouselItems: l }),
                    (0, i.jsx)(lR, { application: t }),
                    (0, i.jsx)(t_, { application: t }),
                    (0, i.jsx)(lO, { application: t }),
                    (0, i.jsx)(tP, { application: t }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: lk.Q9,
                children: [
                    (0, i.jsx)("div", { className: lk.yF }),
                    (0, i.jsx)(m.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: w.intl.string(w.t["mD+J/i"]),
                    }),
                    (0, i.jsx)(ld, { application: t, view: "embedded" }),
                ],
            }),
        ],
    });
}
var lM = l(607399),
    lU = l(691540),
    lw = l(857250),
    lV = l(97483),
    lF = l(980707),
    lB = l(477782),
    lH = l(138134),
    lY = l(922016),
    lz = l(365199),
    lX = l(663341),
    lK = l(821609),
    lW = l(782134),
    lZ = l(787389),
    l$ = l(688810),
    lq = l(361926),
    lQ = l(204776),
    lJ = l(50268),
    l0 = l(375802),
    l1 = l(928658),
    l7 = l(395671),
    l9 = l(957565),
    l3 = l(692848),
    l8 = l(440970);
let l6 = "start_application_install",
    l2 = "launch_activity";
function l5(e) {
    let { renderDropdown: t, size: l } = e,
        s = a.useRef(null);
    return (0, i.jsx)(lY.Y, {
        targetElementRef: s,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return t(l);
        },
        position: "left",
        align: "top",
        animation: lY.Y.Animation.NONE,
        children: (e) =>
            (0, i.jsx)(ew.K, {
                buttonRef: s,
                variant: "secondary",
                size: l,
                icon: lz.j,
                "aria-label": w.intl.string(w.t["UKOtz+"]),
                ...e,
            }),
    });
}
function l4(e) {
    var t;
    let l,
        s,
        { application: n, variant: r, size: o, contentWidth: c } = e,
        { onClickInstallApplication: d, canInstall: u } =
            ((t = n),
            (l = G()),
            (s = a.useCallback(() => {
                let e = D.h.getField("guildId") ?? void 0;
                (0, l3.o)({
                    applicationId: t.id,
                    customInstallUrl: t.custom_install_url,
                    installParams: t.install_params,
                    integrationTypesConfig: t.integration_types_config,
                    guildId: e,
                    source: "product_page",
                });
            }, [t])),
            a.useEffect(() => {
                let e = new URL(location.href);
                if (l && "true" === e.searchParams.get(l6)) {
                    e.searchParams.delete(l6);
                    let t = e.pathname + e.search;
                    (0, E.bG)(t), s();
                }
            }, [l, s]),
            {
                onClickInstallApplication: a.useCallback(() => {
                    if (
                        (k(O.HAw.APP_DIRECTORY_INSTALL_CLICKED, { application_id: t.id }),
                        (lM.Fr || lM.v1) && null == t.custom_install_url)
                    ) {
                        let e = (0, l3.Z)({
                            applicationId: t.id,
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        });
                        if (null != e) return void window.open(e, "_blank");
                    }
                    if (l) s();
                    else {
                        let e = D.h.getField("guildId");
                        f.default.track(O.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: t.id,
                            guild_id: e,
                            auth_type: null != t.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: lM.Fr ? "mobile_web" : "desktop_web",
                        }),
                            M({ [l6]: "true" });
                    }
                }, [t, s, l]),
                canInstall: a.useMemo(
                    () =>
                        (0, lQ.Ie)({
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        }),
                    [t],
                ),
            });
    return "icon" === c
        ? (0, i.jsx)(ew.K, {
              variant: r,
              icon: lX.p,
              size: o,
              onClick: d,
              "aria-label": w.intl.string(w.t.NgXl3C),
              disabled: !u,
          })
        : (0, i.jsx)(lK.$, {
              variant: r,
              size: o,
              text: "small" === c ? w.intl.string(w.t.qRZ35t) : w.intl.string(w.t.NgXl3C),
              onClick: d,
              disabled: !u,
          });
}
function se(e) {
    let { size: t, contentWidth: l, onClick: s, isSubmitting: a } = e;
    return "icon" === l
        ? (0, i.jsx)(ew.K, {
              variant: "primary",
              icon: lW.u,
              size: t,
              onClick: s,
              loading: a,
              "aria-label": w.intl.string(w.t.QO7rO6),
          })
        : (0, i.jsx)(lK.$, { variant: "primary", size: t, text: w.intl.string(w.t.QO7rO6), onClick: s, loading: a });
}
let st = a.forwardRef(function (e, t) {
    let { application: l, size: s } = e,
        { analyticsLocations: n } = (0, l$.Ay)(),
        o = a.useCallback(() => {
            let e;
            k(O.HAw.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: l.id }),
                (0, l9.C)(
                    ((e = l.id), `${location.protocol}//${location.host}${O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e)}`),
                    () => (0, lU.P0)((0, lw.o)(w.intl.string(w.t["L/PwZf"]), lV.Ck.SUCCESS)),
                );
        }, [l.id]),
        c = a.useCallback(() => {
            let e = l7.Ay.createFromServer(l);
            (0, l1.r3)({ application: e, entrypoint: "app_directory" });
        }, [l]),
        u = (0, lJ.A)({
            id: l.id,
            label: w.intl.string(w.t["FfCL+6"]),
            onSuccess: () => (0, lU.P0)((0, lw.o)(w.intl.string(w.t.eNjAah), lV.Ck.SUCCESS)),
        }),
        h = a.useCallback(
            (e, t) =>
                (0, i.jsxs)(lF.W, {
                    "data-menu-migrated-auto": !0,
                    navId: "application-directory-profile",
                    "aria-label": w.intl.string(w.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, i.jsx)(lB.rX, {
                                  children: (0, i.jsx)(lB.Dr, {
                                      id: "copy",
                                      label: w.intl.string(w.t.z4sP5J),
                                      action: o,
                                      icon: tZ.q,
                                      leadingAccessory: { type: "icon", icon: tZ.q },
                                  }),
                              })
                            : null,
                        (0, i.jsx)(lB.rX, {
                            children: (0, i.jsx)(lB.Dr, {
                                id: "report",
                                label: w.intl.string(w.t.NgA5vp),
                                color: "danger",
                                leadingAccessory: { type: "icon", icon: lH.i },
                                action: c,
                            }),
                        }),
                        null != u ? (0, i.jsx)(lB.rX, { children: u }) : null,
                    ],
                }),
            [u, c, o],
        ),
        { onClickLaunchActivity: m, isSubmitting: p } = (function (e, t) {
            let l = e.id,
                s = e?.bot?.id,
                i = (0, l0.e)(e),
                n = (0, lq.Vr)({ context: { type: "contextless" }, applicationId: l, botUserId: s }),
                r = null != s && (0, en.$B)(e) && (0, en.Ag)(e) && (i || n),
                [o, c] = a.useState(!1),
                u = G(),
                h = (0, d.bG)([S.default], () => S.default.getCurrentUser()),
                m = (0, lZ.A)({
                    applicationId: l,
                    analyticsLocations: t,
                    runBeforeLaunchAttempt: () => c(!0),
                    runAfterLaunchAttempt: () => c(!1),
                });
            a.useEffect(() => {
                let e = new URL(location.href),
                    t = "true" === e.searchParams.get(l2);
                if (u && r && t && null != s && null != h) {
                    e.searchParams.delete(l2);
                    let t = e.pathname + e.search;
                    (0, E.bG)(t), m();
                }
            }, [u, r, s, h, m]);
            let p = a.useCallback(async () => {
                if (null != s) {
                    if ((k(O.HAw.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: l }), !u))
                        return void M({ [l2]: "true" });
                    await m();
                }
            }, [l, s, u, m]);
            return { onClickLaunchActivity: r ? p : void 0, isSubmitting: o };
        })(l, n),
        g = null != m,
        x = g ? "secondary" : "primary";
    return (0, i.jsxs)("div", {
        ref: t,
        children: [
            (0, i.jsxs)("div", {
                className: r()(l8.Ik, l8.U),
                children: [
                    g && (0, i.jsx)(se, { size: s, contentWidth: "normal", onClick: m, isSubmitting: p }),
                    (0, i.jsx)(l4, { application: l, size: s, contentWidth: "normal", variant: x }),
                    l9.p5
                        ? (0, i.jsx)(ew.K, {
                              variant: "secondary",
                              size: s,
                              icon: tZ.q,
                              onClick: o,
                              "aria-label": w.intl.string(w.t.z4sP5J),
                          })
                        : null,
                    (0, i.jsx)(l5, { renderDropdown: (e) => h(!1, e), size: s }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: r()(l8.Ik, l8.EX),
                children: [
                    g && (0, i.jsx)(se, { size: s, contentWidth: "small", onClick: m, isSubmitting: p }),
                    (0, i.jsx)(l4, { application: l, size: s, contentWidth: "small", variant: x }),
                    (0, i.jsx)(l5, { renderDropdown: (e) => h(l9.p5, e), size: s }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: r()(l8.Ik, l8.nU),
                children: [
                    g && (0, i.jsx)(se, { size: s, contentWidth: "icon", onClick: m, isSubmitting: p }),
                    (0, i.jsx)(l4, { application: l, size: s, contentWidth: "icon", variant: x }),
                    (0, i.jsx)(l5, { renderDropdown: (e) => h(l9.p5, e), size: s }),
                ],
            }),
        ],
    });
});
var sl = l(811308);
let ss = function (e) {
    let { application: t, onButtonsVisibilityChange: l } = e,
        s = a.useRef(null),
        n = a.useMemo(() => eo.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 96 }), [t]),
        r = a.useMemo(() => {
            let e = [];
            return (
                (0, en.b7)(t) && e.push(w.intl.string(w.t.LO4f0P)),
                (0, en.K4)(t) && (0 !== e.length && e.push("\u2022"), e.push(w.intl.string(w.t["8z5B2U"]))),
                (0, en.ME)(t) && (0 !== e.length && e.push("\u2022"), e.push(w.intl.string(w.t["5khEk8"]))),
                e
            );
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(e_, { application: t, bannerType: "detail", iconURL: n }),
            (0, i.jsx)("div", {
                className: sl.H,
                style: { height: 52 },
                children: (0, i.jsx)("img", {
                    src: n,
                    alt: "",
                    className: sl.my,
                    height: 96,
                    width: 96,
                    style: { borderWidth: 4, marginLeft: 28 },
                }),
            }),
            (0, i.jsxs)("div", {
                className: sl.op,
                children: [
                    (0, i.jsxs)("div", {
                        className: sl.tJ,
                        children: [
                            (0, i.jsx)(m.D, {
                                variant: "heading-xxl/bold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, i.jsx)("div", {
                                className: sl.A7,
                                children: r.map((e, t) =>
                                    (0, i.jsx)(
                                        x.E,
                                        {
                                            className: sl.MO,
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
                    (0, i.jsx)(ea.L, {
                        innerRef: s,
                        onChange: l,
                        active: !0,
                        children: (0, i.jsx)(st, { ref: s, application: t, size: "md" }),
                    }),
                ],
            }),
        ],
    });
};
var si = l(172218),
    sa = l(668168);
function sn(e) {
    let { applicationId: t, similarApplications: l, onSelectApplication: s, similarLoadId: n } = e,
        r = (function (e) {
            let { applicationId: t, similarAppIds: l } = e,
                [s, i] = a.useState(),
                n = (0, si.K)((e) => {
                    e && i(t);
                });
            return (
                a.useEffect(() => {
                    s === t &&
                        k(O.HAw.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: l,
                        });
                }, [s, t, l]),
                n
            );
        })({ applicationId: t, similarAppIds: a.useMemo(() => l.map((e) => e.id), [l]) });
    return (0, i.jsx)("div", {
        className: sa.hQ,
        ref: r,
        children: l.map((e, l) =>
            (0, i.jsx)(
                sr,
                { applicationId: t, similarApplication: e, onSelectApplication: s, similarLoadId: n, position: l },
                e.id,
            ),
        ),
    });
}
function sr(e) {
    let { applicationId: t, similarApplication: l, onSelectApplication: s, position: n, similarLoadId: r } = e,
        o = (0, tH.A)({ application: l }),
        c = l.categories?.[0],
        d = a.useMemo(() => eo.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 48 }), [l]),
        u = a.useCallback(() => {
            k(O.HAw.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: "product",
                application_id: t,
                suggested_application_id: l.id,
                position: n,
                load_id: r,
                shown_mutual_guilds_count: o.length,
            }),
                s(l.id);
        }, [s, l.id, t, o.length, r, n]);
    return (0, i.jsxs)(ek.D, {
        onClick: u,
        className: sa.vU,
        children: [
            (0, i.jsxs)("div", {
                className: sa.nT,
                children: [
                    (0, i.jsx)("img", { src: d, alt: "", className: sa.my, height: 48, width: 48 }),
                    (0, i.jsxs)("div", {
                        className: sa.gn,
                        children: [
                            (0, i.jsx)("div", {
                                style: { flex: 1, minWidth: 0, overflow: "hidden" },
                                children: (0, i.jsx)(m.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    className: sa.JB,
                                    children: l.name,
                                }),
                            }),
                            null != c
                                ? (0, i.jsx)(x.E, {
                                      className: sa.m4,
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      children: c.name,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(x.E, {
                className: sa.i3,
                variant: "text-sm/medium",
                color: "text-default",
                lineClamp: 2,
                children: l.directory_entry?.short_description ?? l.description,
            }),
            (0, i.jsx)(tB, {
                application: l,
                textVariant: "text-xs/medium",
                mutualGuilds: o,
                mutualGuildShownMax: 3,
                guildIconSize: tw.SMALL,
                compact: !0,
            }),
        ],
    });
}
let so = function (e) {
    let { applicationId: t, fetchState: l, similarApplications: s, onSelectApplication: a, similarLoadId: n } = e;
    return l !== eD.e.FETCHING && (null == s || 0 === s.length)
        ? null
        : (0, i.jsxs)("div", {
              className: sa.hd,
              children: [
                  (0, i.jsx)("div", { className: sa.yF }),
                  (0, i.jsx)(m.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      className: sa.bV,
                      children: w.intl.string(w.t.E8wCnk),
                  }),
                  (0, i.jsx)(ei, {
                      loading: l === eD.e.FETCHING,
                      children:
                          null != s
                              ? (0, i.jsx)(sn, {
                                    applicationId: t,
                                    similarApplications: s,
                                    onSelectApplication: a,
                                    similarLoadId: n,
                                })
                              : null,
                  }),
              ],
          });
};
l(938796);
var sc = l(192308),
    sd = l(549711),
    su = l(925435),
    sh = l(311321),
    sm = l(163437),
    sp = l(67480),
    sg = l(785936);
function sx(e) {
    let { application: t } = e;
    return (0, i.jsxs)("div", {
        className: sg.ZM,
        children: [(0, i.jsx)(sA, { application: t }), (0, i.jsx)(sv, { application: t })],
    });
}
function sA(e) {
    let { application: t } = e,
        { subscriptions: l, otps: s } = (0, eR.C)(t.id);
    return (0, i.jsxs)("div", {
        className: sg.ZM,
        children: [
            l.length > 0 &&
                (0, i.jsxs)("div", {
                    className: sg.dD,
                    children: [
                        (0, i.jsx)(sh.A, { subscriptions: l, color: "text-strong" }),
                        (0, i.jsx)("div", {
                            className: sg.ZE,
                            children: l.map((e) => {
                                let l = (0, sm.bg)(e.skuFlags) ? "user" : "guild";
                                return (0, i.jsx)(
                                    su.B4,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: l,
                                        onDetails: () =>
                                            B(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                );
                            }),
                        }),
                    ],
                }),
            s.length > 0 &&
                (0, i.jsxs)("div", {
                    className: sg.dD,
                    children: [
                        (0, i.jsx)(m.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: w.intl.string(w.t.yUGTs8),
                        }),
                        (0, i.jsx)("div", {
                            className: sg.ZE,
                            children: s.map((e) =>
                                (0, i.jsx)(
                                    su.B8,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () =>
                                            B(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, i.jsx)(sd.A, {
                path: O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                exact: !0,
                render: (e) => (0, i.jsx)(sj, { ...e }),
            }),
        ],
    });
}
function sj(e) {
    let {
            match: {
                params: { applicationId: t, skuId: s },
            },
        } = e,
        n = (0, d.bG)([sp.A], () => sp.A.get(s), [s]),
        r = (0, d.bG)([sp.A], () => (null != s ? sp.A.getParentSKU(s) : void 0), [s]),
        o = a.useId(),
        c = a.useCallback(
            () => B(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, U.GlobalDiscoveryAppsSections.STORE)),
            [t],
        );
    return (
        a.useLayoutEffect(() => {
            var e;
            switch (n?.type) {
                case O.Puh.CONSUMABLE:
                case O.Puh.DURABLE:
                    return void (0, sc.openModalLazy)(
                        async () => {
                            let { ItemDetailsModal: e } = await Promise.all([
                                l.e("65159"),
                                l.e("53917"),
                                l.e("15186"),
                                l.e("80830"),
                                l.e("70104"),
                            ]).then(l.bind(l, 963179));
                            return (l) => (0, i.jsx)(e, { appId: t, skuId: s, ...l });
                        },
                        {
                            modalKey: o,
                            onCloseCallback: () => {
                                sC() ||
                                    B(
                                        O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                            t,
                                            U.GlobalDiscoveryAppsSections.STORE,
                                        ),
                                    );
                            },
                        },
                    );
                case O.Puh.SUBSCRIPTION:
                    if (r?.flags == null) return;
                    return (
                        (e = (0, sm.bg)(r.flags) ? "user" : "guild"),
                        void (0, sc.openModalLazy)(
                            async () => {
                                let { SubscriptionDetailsModal: a } = await Promise.all([
                                    l.e("65159"),
                                    l.e("53917"),
                                    l.e("15186"),
                                    l.e("80830"),
                                    l.e("64850"),
                                ]).then(l.bind(l, 168393));
                                return (l) =>
                                    (0, i.jsx)(a, { appId: t, subscriptionType: e, skuId: s, guildId: void 0, ...l });
                            },
                            {
                                modalKey: o,
                                onCloseCallback: () => {
                                    sC() ||
                                        B(
                                            O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                                t,
                                                U.GlobalDiscoveryAppsSections.STORE,
                                            ),
                                        );
                                },
                            },
                        )
                    );
            }
        }, [t, o, c, r?.flags, n?.flags, n?.type, s]),
        a.useLayoutEffect(
            () => () => {
                (0, sc.closeModal)(o);
            },
            [o],
        ),
        null
    );
}
function sv(e) {
    let { application: t } = e,
        l = G(),
        s = t.terms_of_service_url,
        a = t.privacy_policy_url;
    if (null == s && null == a) return null;
    let n = (e, t) => (0, i.jsx)(t$.A, { href: t, trusted: !l, children: e });
    return (0, i.jsx)("div", {
        className: sg.V6,
        children: (0, i.jsx)(x.E, {
            color: "text-strong",
            variant: "text-sm/normal",
            children:
                null != s && null != a
                    ? w.intl.format(w.t.nylPOT, { termsHook: (e) => n(e, s), privacyHook: (e) => n(e, a) })
                    : null != s
                      ? w.intl.format(w.t["0cPyDz"], { termsHook: (e) => n(e, s) })
                      : null != a
                        ? w.intl.format(w.t["loYGC/"], { privacyHook: (e) => n(e, a) })
                        : null,
        }),
    });
}
function sC() {
    return window.location.pathname.startsWith("/login");
}
var s_ = l(798385);
let sI = function (e) {
    let { applicationId: t, onSelectApplication: l, onScroll: s, initialTab: n, onButtonsVisibilityChange: r } = e,
        o = a.useRef(null),
        c = (0, d.bG)([R.A], () => R.A.getApplication(t)),
        u = (0, d.bG)([R.A], () => R.A.getApplicationFetchState(t));
    a.useEffect(() => {
        if (null != t && null == c) {
            let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
            y.Di(t, { noCache: e });
        }
    }, [t, c]),
        a.useEffect(() => {
            y.xZ({ applicationId: t });
        }, [t]),
        a.useEffect(() => () => r(!0), [r]);
    let h = c?.storefront_available,
        [m, p] = a.useState(n ?? U.GlobalDiscoveryAppsSections.ABOUT),
        g = a.useCallback(
            (e) => {
                o.current?.scrollTo({ to: 0 }), p(U.GlobalDiscoveryAppsSections.ABOUT), l(e);
            },
            [l],
        );
    a.useEffect(() => {
        c?.storefront_available && null != t && (0, eR.F)(t);
    }, [c?.storefront_available, t]);
    let x = (0, D.Bn)(),
        A = (0, d.bG)([eD.A], () => eD.A.getFetchState({ applicationId: c?.id })),
        j = (0, d.bG)([eD.A], () => eD.A.getSimilarApplications({ applicationId: c?.id })),
        v = a.useMemo(() => j?.applications.slice(0, 3), [j]),
        C = { displayedSimilarApplications: v, previousView: x },
        _ = a.useRef(C);
    a.useEffect(() => {
        _.current = C;
    }),
        a.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = _.current;
            c?.id != null &&
                A !== eD.e.FETCHING &&
                k(O.HAw.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: D.ev.APPLICATION,
                    previous_page: t?.type,
                    application_id: c.id,
                    referrer: document.referrer,
                    suggested_application_ids: e?.map((e) => e.id),
                });
        }, [c?.id, A]);
    let I = a.useMemo(
            () => [
                { id: U.GlobalDiscoveryAppsSections.ABOUT, label: w.intl.string(w.t.DkyHMK) },
                { id: U.GlobalDiscoveryAppsSections.STORE, label: w.intl.string(w.t.jgEXGB) },
            ],
            [],
        ),
        E = a.useMemo(() => {
            if (null == c) return null;
            switch (m) {
                case U.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, i.jsx)(lG, { application: c });
                case U.GlobalDiscoveryAppsSections.STORE:
                    return (0, i.jsx)(sx, { application: c });
            }
        }, [m, c]),
        N = a.useCallback(
            (e) => {
                k(O.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, { application_id: t, tab_name: e }),
                    p(e),
                    e === U.GlobalDiscoveryAppsSections.ABOUT
                        ? B(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t))
                        : B(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t],
        ),
        S = m === U.GlobalDiscoveryAppsSections.ABOUT;
    return (0, i.jsx)(X.A, {
        onScroll: s,
        ref: o,
        children: (0, i.jsx)(z.A, {
            children:
                null == c
                    ? null == u || u === R.e.FETCHING
                        ? (0, i.jsx)("div", { className: s_.Dg, children: (0, i.jsx)(ei, { loading: !0 }) })
                        : (0, i.jsx)("div", { className: s_.Dg, children: (0, i.jsx)(Z, { className: s_.z3 }) })
                    : (0, i.jsxs)("div", {
                          className: s_.nM,
                          children: [
                              (0, i.jsx)(ss, { application: c, onButtonsVisibilityChange: r }),
                              (0, i.jsxs)("div", {
                                  className: s_.hQ,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: s_.Ne,
                                          children: [
                                              h &&
                                                  (0, i.jsx)("div", {
                                                      className: s_.OF,
                                                      children: (0, i.jsx)(eT, {
                                                          tabs: I,
                                                          onTabSelect: N,
                                                          selectedTab: m,
                                                      }),
                                                  }),
                                              E,
                                              (0, i.jsx)(so, {
                                                  applicationId: t,
                                                  fetchState: A,
                                                  similarApplications: v,
                                                  onSelectApplication: g,
                                                  similarLoadId: j?.loadId,
                                              }),
                                          ],
                                      }),
                                      S && (0, i.jsx)(ld, { className: s_.pz, application: c, view: "side" }),
                                  ],
                              }),
                          ],
                      }),
        }),
    });
};
var sE = l(984516),
    sN = l(724002),
    sS = l(287174),
    sf = l(487899),
    sy = l(239314),
    sb = l(111162),
    sR = l(242552);
let sP = sS.K.APPLICATION_DIRECTORY;
function sL(e) {
    let { collection: t, index: l, onSelectApplication: s } = e,
        n = (function (e) {
            let { collectionId: t, index: l } = e,
                [s, i] = a.useState(!1),
                n = (0, si.K)((e) => {
                    e && i(!0);
                });
            return (
                a.useEffect(() => {
                    s && k(O.HAw.APP_DIRECTORY_COLLECTION_VIEWED, { collection_id: t, collection_position: l });
                }, [s, t, l]),
                n
            );
        })({ collectionId: t.id, index: l }),
        o = a.useCallback(
            (e, i) => {
                k(O.HAw.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: i,
                    collection_position: l,
                    application_id: e,
                }),
                    s(e);
            },
            [t.id, l, s],
        );
    return (0, i.jsxs)("div", {
        ref: n,
        children: [
            (0, i.jsx)(m.D, {
                className: r()(sR.Gf, { [sR.SH]: 0 === l }),
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: t.title,
            }),
            (0, i.jsx)("div", {
                className: sR.Qs,
                children: t.application_directory_collection_items.map((e, t) =>
                    e.type !== sf.L.APPLICATION || null == e.application
                        ? null
                        : (0, i.jsx)(
                              eE,
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
let sT = function (e) {
    let { onSelectApplication: t } = e,
        l = (0, d.bG)([sb.default], () => sb.default.onlyShowPreviewAppCollections) ? sN.W.PREVIEW : sN.W.ACTIVE,
        s = (0, d.bG)([ee.A], () => ee.A.getFetchState({ surface: sP, activeState: l })),
        n = (0, d.bG)([ee.A], () => ee.A.getCollections({ surface: sP, activeState: l }));
    a.useEffect(() => {
        y.An({ surface: sP, activeState: l });
    }, [l]);
    let r = a.useMemo(() => n?.filter((e) => e.type !== sy.Y.GALLERY), [n]);
    return s === ee.e.ERROR
        ? (0, i.jsx)("div", { className: sR.Un, children: (0, i.jsx)(Z, { className: sR.z3 }) })
        : (0, i.jsx)(ei, {
              loading: s === ee.e.FETCHING,
              children: r?.map((e, l) => (0, i.jsx)(sL, { collection: e, index: l, onSelectApplication: t }, l)),
          });
};
var sD = l(210349);
let sO = function (e) {
    let { onScroll: t, onSelectApplication: l } = e;
    return (0, i.jsxs)(X.A, {
        onScroll: t,
        children: [
            (0, i.jsx)(Y.A, {
                title: w.intl.format(w.t.kEcZ97, {}),
                description: w.intl.string(w.t.XxFts9),
                children: (0, i.jsx)(H.A, {}),
            }),
            (0, i.jsx)(z.A, {
                children: (0, i.jsxs)("div", {
                    className: sD.h,
                    children: [(0, i.jsx)(sT, { onSelectApplication: l }), (0, i.jsx)(sE.A, { padding: !0 })],
                }),
            }),
        ],
    });
};
var sk = l(873263),
    sG = l(994369),
    sM = l(475743),
    sU = l(191711),
    sw = l(666168);
function sV(e) {
    let { category: t, count: l, onSelectCategory: s, selected: n } = e,
        o = a.useCallback(() => {
            s(t.id);
        }, [t.id, s]),
        c = l.toLocaleString(tG.default.locale);
    return (0, i.jsxs)(ek.D, {
        onClick: o,
        className: r()(sw.L1, { [sw.wH]: n }),
        children: [
            (0, i.jsx)(x.E, { className: sw.UU, variant: "text-sm/medium", color: "text-strong", children: t.name }),
            (0, i.jsx)(x.E, { className: sw.U9, variant: "text-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
function sF(e) {
    let { countsByCategory: t, onSelectCategory: l, selectedCategoryId: s } = e,
        n = (0, d.bG)([P.A], () => P.A.getCategories()),
        r = a.useMemo(() => [(0, L.AU)(), ...n.filter((e) => (t[e.id] ?? 0) !== 0)], [n, t]);
    return 0 === r.length
        ? null
        : (0, i.jsx)("div", {
              className: sw.LZ,
              children: r.map((e) => {
                  let a = e.id,
                      n = t[a] ?? 0;
                  return (0, i.jsx)(sV, { category: e, count: n, selected: a === s, onSelectCategory: () => l(e) }, a);
              }),
          });
}
function sB(e) {
    let { countsByCategory: t, onSelectCategory: l, selectedCategoryId: s } = e,
        n = (0, d.bG)([P.A], () => P.A.getCategories()),
        r = a.useMemo(() => [(0, L.AU)(), ...n.filter((e) => (t[e.id] ?? 0) !== 0)], [n, t]),
        o = a.useMemo(() => r.map((e) => ({ id: `${e.id}`, name: e.name, count: t[e.id] ?? 0 })), [r, t]),
        c = a.useCallback(
            (e) => {
                let t = r.find((t) => t.id === Number(e));
                null != t && l(t);
            },
            [l, r],
        ),
        u = a.useMemo(() => r.find((e) => e.id === s), [s, r]);
    return 0 === o.length
        ? null
        : (0, i.jsxs)("div", {
              className: sw.kL,
              children: [
                  (0, i.jsx)(x.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: w.intl.string(w.t.f09BQJ),
                  }),
                  (0, i.jsx)(sU.A, {
                      items: o,
                      title: u?.name ?? "",
                      onSelect: c,
                      selected: `${s}`,
                      "aria-label": w.intl.string(w.t.WHdCwR),
                      variant: sU.H.FILLED,
                  }),
              ],
          });
}
var sH = l(678871),
    sY = l(842503);
let sz = function (e) {
    let { selectedCategoryId: t, searchAllCategories: l } = e,
        s = (0, d.bG)([P.A], () => P.A.getCategories()),
        n = a.useMemo(() => s.find((e) => e.id === t)?.name, [s, t]),
        r =
            t === L.lj || null == n
                ? w.intl.string(w.t["FVJt+8"])
                : w.intl.formatToPlainString(w.t.FjCaNB, { categoryName: n }),
        o = t === L.lj ? w.intl.string(w.t.GXiMta) : w.intl.format(w.t.JaLoFF, { onClick: l });
    return (0, i.jsxs)("div", {
        className: sH.kL,
        children: [
            (0, i.jsx)("img", { alt: "", src: sY, className: sH.Sl }),
            (0, i.jsx)(m.D, { variant: "heading-xl/semibold", className: sH.wx, children: r }),
            (0, i.jsx)(x.E, { variant: "text-md/normal", color: "text-default", children: o }),
        ],
    });
};
var sX = l(798387);
function sK(e) {
    let { onSelectApplication: t, onScroll: l } = e,
        s = (0, d.bG)([N.default], () => N.default.isAuthenticated()),
        n = a.useRef(null),
        r = (0, sk.zy)(),
        o = a.useRef(null),
        {
            query: c,
            page: u,
            categoryId: h,
        } = a.useMemo(() => {
            let e = new URLSearchParams(r.search),
                t = e.get("page"),
                l = null != t ? Number(t) : 1;
            return {
                query: e.get("q") ?? "",
                page: l,
                categoryId: Number(e.get("category_id")) ?? U.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID,
            };
        }, [r.search]),
        m = (0, d.bG)([P.A], () => P.A.getCategories()),
        p = a.useMemo(() => m?.find((e) => e.id === h), [m, h]),
        g = a.useCallback(
            (e) => {
                k(O.HAw.APP_DIRECTORY_SEARCHED, {
                    search_term: c,
                    num_results: e,
                    current_page: D.ev.SEARCH,
                    result_page: u,
                    category: p?.name,
                    category_id: p?.id,
                });
            },
            [c, u, p?.name, p?.id],
        );
    a.useEffect(() => {
        n.current?.scrollTo({ to: 0 }),
            c !== o.current && ((o.current = c), y.$P({ query: c, options: { source: sG.V.APP_DIRECTORY } })),
            y.$P({
                query: c,
                options: { categoryId: h, page: u, pageSize: U.PAGE_SIZE, source: sG.V.APP_DIRECTORY },
                onSuccessCallback: g,
            });
    }, [h, u, c, g]);
    let { fetchState: x, searchResults: A } = (0, d.cf)([et.A], () => ({
            fetchState: et.A.getFetchState({
                query: c,
                categoryId: h,
                page: u,
                pageSize: U.PAGE_SIZE,
                source: sG.V.APP_DIRECTORY,
            }),
            searchResults: et.A.getSearchResults({
                query: c,
                categoryId: h,
                page: u,
                pageSize: U.PAGE_SIZE,
                source: sG.V.APP_DIRECTORY,
            }),
        })),
        j = (0, d.cf)([et.A], () => {
            let e = et.A.getSearchResults({ query: c, source: sG.V.APP_DIRECTORY });
            return null != e ? { [L.lj]: e.totalCount, ...e.countsByCategory } : {};
        }),
        v = (0, sM.A)(A),
        C = a.useMemo(() => (x === R.e.FETCHING ? v : A), [x, v, A]),
        _ = a.useCallback(
            (e) => {
                F({ query: c, categoryId: h, page: e });
            },
            [h, c],
        ),
        I = a.useCallback(
            (e) => {
                k(O.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: D.ev.SEARCH,
                }),
                    F({ query: c, categoryId: e.id });
            },
            [c],
        ),
        E = a.useCallback(
            (e, l) => {
                k(O.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: D.ev.SEARCH,
                    application_id: e,
                    load_id: C?.loadId,
                    search_term: c,
                    position: l,
                }),
                    t(e);
            },
            [C?.loadId, t, c],
        ),
        S = V();
    return (0, i.jsxs)("div", {
        className: sX.kL,
        children: [
            (0, i.jsx)(X.A, {
                ref: n,
                onScroll: l,
                children: (0, i.jsxs)("div", {
                    className: sX.WH,
                    children: [
                        s ? null : (0, i.jsx)("div", { className: sX.AW }),
                        (0, i.jsx)(z.A, {
                            children: (0, i.jsxs)("div", {
                                className: sX.hQ,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: sX.$B,
                                        children: (0, i.jsx)(sB, {
                                            countsByCategory: j,
                                            selectedCategoryId: h,
                                            onSelectCategory: I,
                                        }),
                                    }),
                                    (0, i.jsx)(ei, {
                                        loading: x === R.e.FETCHING,
                                        children:
                                            x === R.e.FETCHED && (null == C || C?.results.length === 0)
                                                ? (0, i.jsx)(sz, {
                                                      selectedCategoryId: h ?? S.id,
                                                      searchAllCategories: () => I(S),
                                                  })
                                                : (0, i.jsx)("div", {
                                                      className: sX.Qs,
                                                      children: C?.results.map((e, t) => {
                                                          if (e.type === $.j.APPLICATION) {
                                                              let l = e.data;
                                                              return (0, i.jsx)(
                                                                  eE,
                                                                  {
                                                                      application: l,
                                                                      onSelectApplication: (e) => E(e, t),
                                                                      showCategory: !0,
                                                                  },
                                                                  l.id,
                                                              );
                                                          }
                                                          return null;
                                                      }),
                                                  }),
                                    }),
                                    (0, i.jsx)(Q.m, {
                                        className: sX.JV,
                                        totalCount: Math.min(
                                            (C?.totalPages ?? 0) * U.PAGE_SIZE,
                                            U.MAX_PAGES * U.PAGE_SIZE,
                                        ),
                                        pageSize: U.PAGE_SIZE,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: u,
                                        onPageChange: _,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                className: sX.pn,
                children: (0, i.jsx)("div", {
                    className: sX.jv,
                    children: (0, i.jsx)(sF, { countsByCategory: j, selectedCategoryId: h, onSelectCategory: I }),
                }),
            }),
        ],
    });
}
var sW = l(386607);
function sZ(e) {
    let { applicationId: t, hideDetailHeaderButtons: l, onClickBack: s } = e,
        n = (0, d.bG)([R.A], () => R.A.getApplication(t)),
        [o, c] = a.useState(l),
        u = a.useCallback(() => {
            c(l);
        }, [l]);
    return (0, i.jsxs)("div", {
        className: sW._u,
        children: [
            (0, i.jsx)("div", { className: sW.w$, children: (0, i.jsx)(v.XQ, { icon: h.Z, onClick: s }) }),
            (0, i.jsx)(m.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: sW.Rm,
                lineClamp: 1,
                children: n?.name,
            }),
            (0, i.jsx)("div", {
                className: r()(sW.w$, sW.xY, { [sW.RK]: !l, [sW.jD]: l && !o, [sW.R]: l && o }),
                onTransitionEnd: u,
                children: null != n ? (0, i.jsx)(st, { application: n, size: "sm" }) : null,
            }),
        ],
    });
}
function s$() {
    let e = a.useCallback(() => {
            let e, t;
            (e = new URL(location.href)),
                (t = `?redirect_to=${encodeURIComponent(e.pathname + e.search)}`),
                (0, E.pX)(O.BVt.REGISTER + t);
        }, []),
        t = a.useCallback(() => {
            M();
        }, []);
    return (0, i.jsxs)(p.$T, {
        color: p.Hv.BRAND,
        className: sW.aL,
        children: [
            (0, i.jsx)(g.p, { size: "custom", color: "white", className: sW.wm }),
            (0, i.jsx)(x.E, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: w.intl.string(w.t.Ol3MIt),
            }),
            (0, i.jsxs)("div", {
                className: sW.ll,
                children: [
                    (0, i.jsx)(p.Z_, { onClick: e, noticeType: O.kqX.LOGIN, children: w.intl.string(w.t["825cFy"]) }),
                    (0, i.jsx)(p.Z_, {
                        onClick: t,
                        noticeType: O.kqX.REGISTER,
                        minor: !0,
                        children: w.intl.string(w.t.HAkXzo),
                    }),
                ],
            }),
        ],
    });
}
let sq = function () {
    var e;
    let t,
        l,
        s,
        n,
        c,
        p,
        g = (0, d.bG)([N.default], () => !N.default.isAuthenticated()),
        { onScroll: x, scrollPosition: R, resetScrollPosition: T } = (0, A.G)(),
        M = (0, D.R4)(),
        B = G(),
        H = M?.type === D.ev.CATEGORY ? M.categoryId : void 0,
        { applicationId: Y, section: z } = M?.type === D.ev.APPLICATION ? M : {},
        { query: X, categoryId: K } = M?.type === D.ev.SEARCH ? M : {},
        W = (0, d.bG)([P.A], () => P.A.getCategories()),
        Z = a.useMemo(() => [(0, L.AU)(), ...W], [W]),
        $ = a.useMemo(() => Z.find((e) => e.id === Number(K)), [Z, K]),
        {
            tabs: q,
            selectedTab: Q,
            onSelectTab: J,
        } = ((e = H?.toString()),
        (t = (0, d.bG)([P.A], () => P.A.getCategories())),
        (l = V()),
        (s = a.useMemo(
            () => [{ id: l.id.toString(), label: l.name }, ...t.map((e) => ({ id: e.id.toString(), label: e.name }))],
            [t, l],
        )),
        (n = (0, D.R4)()),
        (c = a.useCallback(
            (e) => {
                let t = s.find((t) => t.id === e);
                null != t &&
                    (k(O.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.label,
                        category_id: Number(t.id),
                        current_page: n?.type,
                    }),
                    ((e) => {
                        let { categoryId: t } = e,
                            l = { previousView: (0, D.R4)() };
                        (0, E.pX)(O.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t), { state: l });
                    })({ categoryId: e }));
            },
            [n?.type, s],
        )),
        (p = null != e && s.some((t) => t.id === e) ? e : s[0].id),
        { tabs: s, selectedTab: p, onSelectTab: c }),
        [ee, et] = a.useState(!0),
        el = D.h.useField("trackedOpenedFromExternalEntrypoint"),
        es = D.h.useField("sessionId"),
        ei = (0, d.bG)([S.default], () => S.default.getCurrentUser());
    a.useEffect(() => {
        if (!el && null == es) {
            let e = (0, I.YP)();
            f.default.track(O.HAw.APP_DIRECTORY_OPENED, { source: D.sW.EXTERNAL, session_id: e, user_id: ei?.id }),
                D.h.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: D.sW.EXTERNAL },
                    guildId: null,
                });
        }
    }, [es, el, ei?.id]),
        a.useEffect(() => {
            y.bW();
        }, []),
        a.useEffect(() => {
            B && y.wD();
        }, [B]),
        a.useEffect(() => D.tS.setState({ lastItem: M }), [M]);
    let ea = null != Y,
        en = M?.type === D.ev.SEARCH,
        {
            searchQuery: er,
            onSearchTextChange: eo,
            onClearSearch: ec,
            onSearchSubmit: ed,
        } = (function (e) {
            let { initialQuery: t = "" } = e,
                l = b.A.useField("query");
            a.useEffect(() => b.A.setState({ query: t }), [t]);
            let s = a.useCallback((e) => {
                    b.A.setState({ query: e });
                }, []),
                i = a.useCallback(() => {
                    b.A.setState({ query: "" });
                }, []),
                n = a.useCallback(() => {
                    let e = V();
                    k(O.HAw.APP_DIRECTORY_SEARCH_STARTED, {
                        search_term: l,
                        category: e.name,
                        current_page: D.ev.HOME,
                        category_id: e.id,
                    }),
                        F({ query: l });
                }, [l]);
            return { searchQuery: l, onSearchTextChange: s, onClearSearch: i, onSearchSubmit: n };
        })({ initialQuery: X ?? "" }),
        eu = b.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: eh,
            onCollapsedSearchBarClick: em,
            onSearchBarBlur: ep,
            tabsClassName: eg,
        } = (0, j.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === er.trim(),
            searchBarState: eu,
            setSearchBarState: (e) => b.A.setState({ searchBarState: e }),
        }),
        ex = a.useCallback(
            (e) => {
                J(e), en && ec(), T();
            },
            [en, ec, J, T],
        ),
        eA = a.useCallback(
            (e) =>
                ((e) => {
                    let { applicationId: t } = e,
                        l = { previousView: (0, D.R4)() };
                    (0, E.pX)(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t), { state: l });
                })({ applicationId: e }),
            [],
        ),
        ej = ea || en,
        ev = a.useCallback(() => {
            if (null != (0, D.Bn)()) (0, E.aX)();
            else {
                let e;
                (e = { previousView: (0, D.R4)() }), (0, E.pX)(O.BVt.GLOBAL_DISCOVERY_APPS, { state: e });
            }
        }, []),
        eC = a.useMemo(
            () =>
                (0, o.debounce)((e) => {
                    let { scrollTop: t, offsetHeight: l, scrollHeight: s, location: i } = e;
                    t > 0 &&
                        k(O.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
                            scroll_visible_percentile: (t + l) / s,
                            current_page: i,
                        });
                }, 200),
            [],
        ),
        e_ = a.useCallback(
            (e, t) => {
                x(e),
                    eC({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: t,
                    });
            },
            [eC, x],
        );
    return (0, i.jsxs)("div", {
        className: r()(sW.nw, { [sW.Yz]: g }),
        children: [
            g ? (0, i.jsx)(s$, {}) : null,
            (0, i.jsxs)("div", {
                className: sW.WH,
                children: [
                    (0, i.jsxs)(v.Ay, {
                        variant: ej ? v.Z5.RELATIVE : v.Z5.OVERLAY,
                        children: [
                            !ej && (0, i.jsx)(v.ns, { scrollPosition: R }),
                            ea
                                ? (0, i.jsx)(sZ, { applicationId: Y, hideDetailHeaderButtons: ee, onClickBack: ev })
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          en
                                              ? (0, i.jsx)(v.XQ, { icon: h.Z, onClick: ev })
                                              : (0, i.jsx)(v.T4, { icon: u.k }),
                                          en
                                              ? (0, i.jsx)(m.D, {
                                                    variant: "heading-lg/semibold",
                                                    color: "text-strong",
                                                    className: sW.wL,
                                                    children:
                                                        null != X && "" !== X
                                                            ? w.intl.formatToPlainString(w.t.zHdzqW, { query: X })
                                                            : w.intl.formatToPlainString(w.t.Qhj5Br, {
                                                                  categoryName: $?.name ?? w.intl.string(w.t.E407b7),
                                                              }),
                                                })
                                              : (0, i.jsx)(C.A, {
                                                    className: eg,
                                                    tabs: q,
                                                    selectedTab: Q,
                                                    onTabSelect: ex,
                                                    onAvailableWidthChange: eh,
                                                }),
                                          (0, i.jsx)(_.A, {
                                              query: er,
                                              placeholder: w.intl.string(w.t["5h0QOP"]),
                                              onTextChange: eo,
                                              onClear: ec,
                                              onSubmit: ed,
                                              onCollapsedClick: em,
                                              state: eu,
                                              onBlur: ep,
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                    ea
                        ? (0, i.jsx)(sI, {
                              onScroll: (e) => e_(e, D.ev.APPLICATION),
                              onSelectApplication: eA,
                              applicationId: Y,
                              initialTab: z,
                              onButtonsVisibilityChange: et,
                          })
                        : en
                          ? (0, i.jsx)(sK, { onSelectApplication: eA, onScroll: (e) => e_(e, D.ev.SEARCH) })
                          : Q === U.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, i.jsx)(sO, { onScroll: (e) => e_(e, D.ev.HOME), onSelectApplication: eA })
                            : (0, i.jsx)(eb, {
                                  tabId: Number(Q),
                                  onScroll: (e) => e_(e, D.ev.CATEGORY),
                                  onSelectApplication: eA,
                              }),
                ],
            }),
        ],
    });
};
