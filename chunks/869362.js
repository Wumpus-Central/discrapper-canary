l.r(t), l.d(t, { default: () => sq });
var s = l(477900),
    i = l(582128),
    a = l(503698),
    n = l.n(a),
    r = l(435558),
    o = l.n(r),
    c = l(17928),
    d = l(323384),
    u = l(548411),
    h = l(297264),
    m = l(417098),
    p = l(111159),
    g = l(834730),
    x = l(711111),
    v = l(770472),
    j = l(737823),
    A = (l(749638), l(876622)),
    C = l(521974),
    I = l(965660),
    _ = l(976860),
    E = l(280450),
    f = l(287809),
    N = l(174459),
    S = l(993748),
    y = l(416730),
    b = l(212534),
    P = l(38181),
    R = l(939635);
l(323874), l(14289), l(35956);
var T = l(323125),
    L = l(310419),
    D = l(652215);
function O(e, t) {
    let l = L.h.getField("sessionId"),
        s = L.h.getField("guildId"),
        i = L.h.getField("entrypoint")?.name,
        a = f.default.getCurrentUser(),
        n = { ...t, guild_id: s, directory_session_id: l, source: i, user_id: a?.id };
    return N.default.track(e, n);
}
function k() {
    return (0, c.bG)([E.default], () => E.default.isAuthenticated());
}
function G() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let l in e) {
        let s = e[l];
        t.searchParams.set(l, s);
    }
    let l = t.pathname + t.search,
        s = (0, T.T2)(l, !1);
    (0, _.pX)(s);
}
var M = l(435220),
    U = l(375708);
function w() {
    return { id: M.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID, name: U.intl.string(U.t.ijDDwz) };
}
function V() {
    let { query: e, categoryId: t, page: l } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        s = { previousView: (0, L.R4)() },
        i = new URLSearchParams();
    null != e && "" !== e && i.set("q", e),
        null != t && t !== R.lj && i.set("category_id", t.toString()),
        null != l && l > 1 && i.set("page", l.toString()),
        (0, _.pX)(D.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, { state: s, search: i.toString() });
}
function F(e) {
    let {
        location: { state: t },
    } = (0, _.JK)();
    (0, _.bG)(e, t);
}
var B = l(902119),
    H = l(701508),
    Y = l(979590),
    z = l(783531),
    X = l(558611);
let W = "/assets/3aa7e375b23dc56f.svg";
function K(e) {
    let { heading: t = U.intl.string(U.t.NGw8v2), body: l = U.intl.string(U.t["1XZRY4"]), className: i } = e;
    return (0, s.jsxs)("div", {
        className: n()(X.kL, i),
        children: [
            (0, s.jsx)("div", {
                className: X.ZS,
                children: (0, s.jsx)("img", { className: X.Sl, src: W, alt: U.intl.string(U.t["/UJaI2"]) }),
            }),
            (0, s.jsx)(h.D, { variant: "heading-xl/semibold", className: X.wx, children: t }),
            (0, s.jsx)(g.E, { variant: "text-md/normal", color: "text-default", children: l }),
        ],
    });
}
var Z = l(819169),
    $ = l(935573),
    Q = l(702841),
    q = l(932793),
    J = l(111042),
    ee = l(651753),
    et = l(289873),
    el = l(311543);
function es(e) {
    let { loading: t, children: l } = e;
    return (0, s.jsxs)("div", {
        className: el.kL,
        children: [
            t
                ? (0, s.jsx)("div", {
                      className: el.dc,
                      children: (0, s.jsx)(et.y, { className: el.u1, type: et.y.Type.SPINNING_CIRCLE }),
                  })
                : null,
            (0, s.jsx)("div", { className: n()({ [el.Lq]: t }), children: l }),
        ],
    });
}
var ei = l(269115),
    ea = l(735991),
    en = l(635350),
    er = l(486020),
    eo = l(775602),
    ec = l(435582),
    ed = l(283488),
    eu = l(607470),
    eh = l(654107),
    em = l(36667);
let ep = 16 / 9,
    eg = 325 / 72;
function ex(e) {
    let { application: t, isHovered: l, botBannerUrl: a, botBannerUrlAnimated: r, iconURL: o } = e,
        c = (0, ed.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"] }),
        d = i.useMemo(() => {
            let e = (0, ea.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, ec.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        { imageUrl: u, imageUrlAnimated: h } = i.useMemo(
            () => ("fetched" === c.state && null != c.url ? { imageUrl: c.url } : { imageUrl: a, imageUrlAnimated: r }),
            [c.state, c.url, a, r],
        ),
        m = null != u,
        p = null != d;
    return "loading" === c.state
        ? null
        : p
          ? (0, s.jsxs)(s.Fragment, {
                children: [
                    m
                        ? (0, s.jsx)(ev, { isHovered: l, url: u, animatedUrl: void 0 })
                        : (0, s.jsx)(eu.A, { src: d, className: n()(em._e, em.IH), muted: !0 }),
                    (0, s.jsx)(ej, { isHovered: l, url: d, isVideo: !0 }),
                ],
            })
          : m
            ? (0, s.jsx)(ev, { isHovered: l, url: u, animatedUrl: h })
            : (0, s.jsx)(eA, { iconURL: o });
}
function ev(e) {
    let { isHovered: t, url: l, animatedUrl: a } = e,
        [r, o] = i.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("img", { src: l, alt: "", className: n()(em._e, em.IH, { [em.Kc]: r }), onLoad: () => o(!0) }),
            null != a ? (0, s.jsx)(ej, { isHovered: t, url: a, isVideo: !1 }) : null,
        ],
    });
}
function ej(e) {
    let { isHovered: t, url: l, isVideo: a } = e,
        [r, o] = i.useState(!1),
        [c, d] = i.useState(t);
    return (i.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, s.jsx)("div", {
              className: n()(em.hY, { [em.Q]: !t, [em.nR]: t && r }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: a
                  ? (0, s.jsx)(eu.A, {
                        src: l,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: em.IH,
                        onLoadedData: () => o(!0),
                    })
                  : (0, s.jsx)("img", { src: l, alt: "", className: em.IH, onLoad: () => o(!0) }),
          })
        : null;
}
function eA(e) {
    let { iconURL: t } = e,
        { backgroundGradient: l, hasFetchedColors: i } = (function (e) {
            let [t, l, s] = (0, eh.rh)(e, "transparent");
            return { backgroundGradient: `linear-gradient(45deg, ${t}, ${s ?? l})`, hasFetchedColors: (0, eh.D1)(e) };
        })(t);
    return (0, s.jsx)("div", { className: n()(em.IH, em.nY, { [em.Kc]: i }), style: { backgroundImage: l } });
}
let eC = function (e) {
    let { application: t, bannerType: l, iconURL: a } = e,
        n = (0, c.bG)([eo.Ay], () => eo.Ay.useReducedMotion),
        [r, o] = i.useState(!1),
        d = i.useCallback(() => {
            o(!0);
        }, []),
        u = i.useCallback(() => o(!1), []),
        h = (0, ea.Ag)(t),
        m = t.bot,
        { botBannerUrl: p, botBannerUrlAnimated: g } = i.useMemo(
            () =>
                m?.id == null || m?.banner == null
                    ? {}
                    : {
                          botBannerUrl: (0, er.z)({ id: m.id, banner: m.banner, canAnimate: !1, size: 600 }),
                          botBannerUrlAnimated: n
                              ? void 0
                              : (0, er.z)({ id: m.id, banner: m.banner, canAnimate: !0, size: 600 }),
                      },
            [m?.id, m?.banner, n],
        );
    return (0, s.jsx)("div", {
        className: em.cI,
        style: { aspectRatio: "card" === l ? ep : eg },
        onMouseEnter: d,
        onFocus: d,
        onMouseLeave: u,
        onBlur: u,
        children:
            "card" === l && h
                ? (0, s.jsx)(ex, {
                      application: t,
                      isHovered: r,
                      botBannerUrl: null == p ? void 0 : p,
                      botBannerUrlAnimated: null == g ? void 0 : g,
                  })
                : null != p
                  ? (0, s.jsx)(ev, { isHovered: r, url: p, animatedUrl: g })
                  : (0, s.jsx)(eA, { iconURL: a }),
    });
};
var eI = l(240795);
let e_ = function (e) {
    let { application: t, onSelectApplication: l, showCategory: a = !1 } = e,
        n = i.useRef(null),
        r = t.categories?.[0],
        [o, c] = i.useState(!1),
        d = i.useCallback((e) => {
            e && c(!0);
        }, []),
        u = (0, ea.NO)(t),
        m = i.useCallback(() => {
            l(t.id);
        }, [l, t.id]),
        p = i.useMemo(() => (o ? er.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 48 }) : void 0), [o, t]),
        x = a && null != r;
    return (0, s.jsx)(ei.L, {
        innerRef: n,
        onChange: d,
        active: !o,
        children: (0, s.jsx)("div", {
            ref: n,
            className: eI.kL,
            children: (0, s.jsxs)(en.A, {
                className: eI.Nr,
                onClick: m,
                onContextMenu: () => {},
                "aria-label": U.intl.string(U.t.np1Wru),
                children: [
                    (0, s.jsxs)("div", {
                        className: eI.wx,
                        children: [
                            (0, s.jsx)("div", {
                                style: { width: "100%", display: "block", aspectRatio: 16 / 9 },
                                children: o ? (0, s.jsx)(eC, { application: t, bannerType: "card", iconURL: p }) : null,
                            }),
                            (0, s.jsx)("div", {
                                className: eI.H,
                                style: { height: 28 },
                                children: o
                                    ? (0, s.jsx)("img", {
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
                    (0, s.jsxs)("div", {
                        className: eI.eV,
                        children: [
                            (0, s.jsx)("div", {
                                className: eI.gn,
                                children: (0, s.jsx)("div", {
                                    className: eI.DD,
                                    children: (0, s.jsx)(h.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        className: eI.JB,
                                        children: t.name,
                                    }),
                                }),
                            }),
                            x || u
                                ? (0, s.jsxs)("div", {
                                      className: eI.op,
                                      children: [
                                          x
                                              ? (0, s.jsx)(g.E, {
                                                    className: eI.m4,
                                                    variant: "text-xs/medium",
                                                    color: "text-default",
                                                    children: r.name,
                                                })
                                              : null,
                                          x && u
                                              ? (0, s.jsx)(g.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: "\u2022",
                                                })
                                              : null,
                                          u
                                              ? (0, s.jsx)(g.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: U.intl.string(U.t["/eVltv"]),
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            (0, s.jsx)(g.E, {
                                className: eI.h_,
                                variant: "text-sm/medium",
                                color: "text-default",
                                lineClamp: x || u ? 2 : 3,
                                children: t.directory_entry?.short_description ?? t.description,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
var eE = l(297439);
let ef = { results: [], totalPages: 0, loadId: "" },
    eN = function (e) {
        let { categoryId: t, onSelectApplication: l, resetScroll: a } = e,
            [n, r] = i.useState(1),
            o = i.useCallback((e) => {
                r(e);
            }, []);
        i.useEffect(() => {
            r(1);
        }, [t]);
        let c = i.useMemo(() => ({ query: M.EMPTY_QUERY, page: n, pageSize: M.PAGE_SIZE, categoryId: t }), [n, t]),
            d = (0, Q.bG)([ee.A], () =>
                ee.A.getFetchState({ query: M.EMPTY_QUERY, page: n, pageSize: M.PAGE_SIZE, categoryId: t }),
            ),
            u = (0, Q.cf)([ee.A], () => ee.A.getSearchResults(c) ?? ef),
            h = (0, Z.A)(u) ?? ef,
            { results: m, totalPages: p, loadId: g } = i.useMemo(() => (d === J.e.FETCHING ? h : u), [d, h, u]),
            x = i.useMemo(() => m?.filter((e) => e.type === $.j.APPLICATION), [m]),
            v = i.useCallback((e) => {
                let { page: t, activeCategoryId: l, onSuccessCallback: s, guildId: i, fetchCounts: a } = e;
                a && S.$P({ query: M.EMPTY_QUERY, guildId: i }),
                    S.$P({
                        query: M.EMPTY_QUERY,
                        guildId: i,
                        options: { page: t, pageSize: M.PAGE_SIZE, categoryId: l },
                        onSuccessCallback: s,
                    });
            }, []);
        i.useEffect(() => {
            a(), v({ page: n, activeCategoryId: t, onSuccessCallback: () => {} });
        }, [t, a, v, n]);
        let j = i.useCallback(
            (e, t) => {
                O(D.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: L.ev.SEARCH,
                    application_id: e,
                    load_id: g,
                    position: t,
                }),
                    l(e);
            },
            [g, l],
        );
        return d === J.e.ERROR
            ? (0, s.jsx)("div", { className: eE.Un, children: (0, s.jsx)(K, { className: eE.z3 }) })
            : (0, s.jsxs)(es, {
                  loading: d === J.e.FETCHING,
                  children: [
                      (0, s.jsx)("div", {
                          className: eE.Qs,
                          children: x?.map((e, t) => {
                              if (e.type !== $.j.APPLICATION) return e.type, null;
                              {
                                  let l = e.data;
                                  return (0, s.jsx)(e_, { application: l, onSelectApplication: (e) => j(e, t) }, l.id);
                              }
                          }),
                      }),
                      (0, s.jsx)(q.m, {
                          className: eE.JV,
                          totalCount: Math.min(p * M.PAGE_SIZE, M.MAX_PAGES * M.PAGE_SIZE),
                          pageSize: M.PAGE_SIZE,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: n,
                          onPageChange: o,
                      }),
                  ],
              });
    };
var eS = l(289456);
let ey = function (e) {
    let { tabId: t, onSelectApplication: l, onScroll: a } = e,
        n = i.useRef(null),
        r = i.useCallback(() => {
            n.current?.scrollTo({ to: 0 });
        }, []),
        o = (0, c.bG)([P.A], () => P.A.getCategories()),
        d = i.useMemo(() => o.find((e) => e.id === t), [o, t]),
        u = i.useMemo(
            () =>
                null != d
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
                      })(d)
                    : "",
            [d],
        );
    return (0, s.jsxs)(z.A, {
        onScroll: a,
        ref: n,
        children: [
            (0, s.jsx)(H.A, { title: d?.name ?? "", description: u, children: (0, s.jsx)(B.A, {}) }),
            (0, s.jsx)(Y.A, {
                children:
                    null == d
                        ? (0, s.jsx)("div", { className: eS.U, children: (0, s.jsx)(K, { className: eS.z }) })
                        : (0, s.jsx)(eN, { categoryId: d.id, onSelectApplication: l, resetScroll: r }),
            }),
        ],
    });
};
var eb = l(123791),
    eP = l(761508),
    eR = l(149050);
let eT = function (e) {
    let { tabs: t, onTabSelect: l, selectedTab: i, className: a } = e;
    return (0, s.jsx)(eP.V, {
        type: "top-pill",
        selectedItem: i,
        onItemSelect: l,
        className: a,
        children: t.map((e, t) => {
            let { id: l, label: i, count: a } = e;
            return (0, s.jsx)(
                eP.V.Item,
                {
                    id: l,
                    className: n()(eR.V, { [eR.r]: 0 === t }),
                    "aria-label": i,
                    children: null != a && a > 0 ? `${i} (${a})` : i,
                },
                l,
            );
        }),
    });
};
var eL = l(82293),
    eD = l(403362),
    eO = l(939249),
    ek = l(175671),
    eG = l(259407),
    eM = l(451988),
    eU = l(408278),
    ew = l(921853),
    eV = l(477155),
    eF = l(320448),
    eB = l(935286),
    eH = l(228366),
    eY = l(725951),
    ez = l(625494),
    eX = l(1671);
let eW = 16 / 9;
class eK extends i.PureComponent {
    static defaultProps = { includeHitboxPadding: !0 };
    componentDidMount() {
        ez._.subscribe(D.jej.CAROUSEL_PREV, this.handlePrevious), ez._.subscribe(D.jej.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        ez._.unsubscribe(D.jej.CAROUSEL_PREV, this.handlePrevious),
            ez._.unsubscribe(D.jej.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let {
                current: e,
                count: t,
                includeHitboxPadding: l,
                arrowClassName: i,
                paginationDotClassName: a,
                paginationDotSelectedClassName: r,
                paginationArrowIconType: c = "arrow",
            } = this.props,
            d = n()(eX.sb, { [eX.JU]: l }, i);
        return (0, s.jsxs)("div", {
            className: n()(eX.ne, this.props.className),
            children: [
                (0, s.jsx)("div", {
                    className: d,
                    children: (0, s.jsx)(eU.K, {
                        variant: "icon-only",
                        icon: "caret" === c ? ew.n : eV.r,
                        "aria-label": U.intl.string(U.t.vgfxaA),
                        onClick: this.handlePrevious,
                    }),
                }),
                (0, s.jsx)("div", {
                    className: eX.r$,
                    children: o().times(t, (t) =>
                        (0, s.jsx)(
                            eO.D,
                            {
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? n()(eX.NU, r) : n()(eX.Lw, a),
                                "aria-label": U.intl.formatToPlainString(U.t["2SXOrM"], { pageNumber: t + 1 }),
                            },
                            `dot-${t}`,
                        ),
                    ),
                }),
                (0, s.jsx)("div", {
                    className: d,
                    children: (0, s.jsx)(eU.K, {
                        variant: "icon-only",
                        icon: "caret" === c ? eF._ : eB.E,
                        "aria-label": U.intl.string(U.t.XiOHRX),
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
class eZ extends i.PureComponent {
    timer = new eM.IX();
    static defaultProps = { aspectRatio: eW };
    constructor(e) {
        super(e),
            (this.state = {
                visibleIndex: !0 === e.randomize ? o().random(0, e.items.length - 1) : 0,
                direction: eY.f.LEFT,
                paused: !1,
            });
    }
    handleWindowFocusChange = (e) => {
        let { focused: t } = e;
        this.setState({ paused: !t });
    };
    componentDidMount() {
        eH.h.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange),
            this.props.initialPaused || this.state.paused || this.startTimer();
    }
    componentWillUnmount() {
        this.stopTimer(), eH.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange);
    }
    componentDidUpdate(e, t) {
        function l(e, t) {
            return !e.initialPaused && !t.paused;
        }
        let s = l(this.props, this.state),
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
        let i = t > 0 ? eY.f.LEFT : eY.f.RIGHT;
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
                slideAnimatorClassName: i,
                slideAnimatorSpringSettings: a,
                slideAnimatorFadeInOut: r,
                paginationClassName: o,
                paginationArrowClassName: c,
                paginationArrowIconType: d,
                paginationDotClassName: u,
                paginationDotSelectedClassName: h,
                themedPagination: m,
                includeHitboxPadding: p,
                style: g,
                aspectRatio: x,
                children: v,
            } = this.props,
            { visibleIndex: j } = this.state;
        return (0, s.jsxs)("div", {
            className: eX.zr,
            children: [
                (0, s.jsxs)("div", {
                    className: n()(eX.Cf, l),
                    style: g,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, s.jsx)("div", {
                            style: { aspectRatio: x },
                            children: (0, s.jsx)(eY.A, {
                                className: n()(eX.Dk, i),
                                step: j,
                                direction: this.getCurrentDirection(),
                                springSettings: a,
                                fadeInOut: r,
                                children: t(e[j], j),
                            }),
                        }),
                        e.length > 1 &&
                            (0, s.jsx)(eK, {
                                className: n()(o, m ? eX.S$ : eX.X$),
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
                null != v && v({ step: j, direction: this.getCurrentDirection() }),
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
var e$ = l(619517),
    eQ = l(248643),
    eq = l(966245),
    eJ = l(615300),
    e0 = l(456412),
    e1 = l(133296),
    e7 = l(689175),
    e8 = l(532197),
    e2 = l(837344);
let e3 = { CENTER: e2.Hu, LEFT: e2.Vl };
class e9 extends i.PureComponent {
    static Align = e3;
    static defaultProps = { scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 }, align: e3.CENTER };
    _scrollerRef = null;
    _paginationItemRefs = [];
    componentDidUpdate(e) {
        let { selectedIndex: t } = this.props;
        e.selectedIndex !== t && this.handleSelectedIndexChange(t);
    }
    handleSetScrollerRef = (e) => {
        this._scrollerRef = e;
    };
    handleSelectedIndexChange = (e) => {
        let t = this._scrollerRef;
        if (null == t) return;
        let l = this._paginationItemRefs[e];
        null != l && t.scrollIntoViewNode({ node: l, animate: !0, padding: this.props.scrollToPadding });
    };
    handlePageClick = (e) => {
        let { onSetItem: t } = this.props;
        t(e);
    };
    render() {
        let { renderItem: e, items: t, vertical: l, paginationContainerClass: a, align: r } = this.props,
            o = l ? e2.XA : e2.BU;
        return (0, s.jsx)(e7.Gt, {
            orientation: l ? "vertical" : "horizontal",
            className: n()(o, a, r),
            ref: this.handleSetScrollerRef,
            children: t.map((t, l) =>
                i.cloneElement(e(t, l), {
                    onClick: () => this.handlePageClick(l),
                    key: l,
                    ref: (e) => {
                        this._paginationItemRefs[l] = e;
                    },
                }),
            ),
        });
    }
}
class e4 extends i.PureComponent {
    handlePrevClick = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, s.jsx)(eO.D, {
            className: n()(e2.t1, e),
            onClick: this.handlePrevClick,
            children: (0, s.jsx)(e8.A, { className: e2.UE, direction: e8.A.Directions.LEFT }),
        });
    }
}
class e6 extends i.PureComponent {
    handleNextClick = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, s.jsx)(eO.D, {
            className: n()(e2.XS, e),
            onClick: this.handleNextClick,
            children: (0, s.jsx)(e8.A, { className: e2.UE, direction: e8.A.Directions.RIGHT }),
        });
    }
}
var e5 = l(452282),
    te = l(821209),
    tt = l(811306);
let tl = `rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=${D.NzX}`,
    ts = { width: 640, height: 360, margin: 15 },
    ti = { width: 880, height: 495, margin: 20 },
    ta = { width: 1920, height: 1080 },
    tn = { width: 1280, height: 720 };
function tr(e) {
    return (0, eq.$o)({ ...e, className: tt.tN, mediaPlayerClassName: tt.yf });
}
function to(e) {
    return (0, s.jsx)(e$.Ay, { ...e });
}
function tc(e) {
    let t,
        l,
        i,
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
    if (a.type === D.geh.YOUTUBE_VIDEO)
        (t = { url: (0, D.PE$)(a.youtubeVideoId), ...ta }),
            (l = { url: `${(0, D.uJ2)(a.youtubeVideoId)}?${tl}`, ...tn }),
            (i = eG.m.YOUTUBE);
    else {
        let e = null != a.width ? a.width : 0,
            s = null != a.height ? a.height : 0;
        (t = { url: a.thumbnailSrc, width: e, height: s }), (l = { url: a.src, proxyURL: a.src, width: e, height: s });
    }
    let g = (0, s.jsx)(ek.rr, {
        href: null,
        thumbnail: t,
        video: l,
        provider: i,
        allowFullScreen: !0,
        maxHeight: n.height,
        maxWidth: n.width,
        onPlay: r,
        onEnded: o,
        playable: d,
        className: tt.Ki,
        volume: u,
        onVolumeChange: m,
        autoMute: h,
        onMute: p,
        autoPlay: d,
        renderVideoComponent: tr,
        renderImageComponent: to,
        renderLinkComponent: eq.bU,
    });
    return d ? g : (0, s.jsx)(eO.D, { className: tt.AU, onClick: c, children: g });
}
function td() {
    return (0, s.jsx)("div", {
        className: tt.eM,
        children: (0, s.jsx)(te.A, { inactive: !0, className: tt.J6, renderLinkComponent: eq.bU }),
    });
}
class tu extends i.PureComponent {
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
        ez._.subscribe(D.jej.CAROUSEL_PREV, this.manualPrevious), ez._.subscribe(D.jej.CAROUSEL_NEXT, this.manualNext);
    }
    componentWillUnmount() {
        ez._.unsubscribe(D.jej.CAROUSEL_PREV, this.manualPrevious),
            ez._.unsubscribe(D.jej.CAROUSEL_NEXT, this.manualNext);
    }
    getItemSize = () => {
        let { width: e } = this.props,
            t = ti;
        return null != e && e < t.width && (t = ts), t;
    };
    getStyle(e, t) {
        let l = t.interpolate({ inputRange: [0, 1], outputRange: [1, 0], extrapolate: eJ.A.Extrapolate.CLAMP });
        return {
            opacity: t.interpolate({ inputRange: [0, 1], outputRange: [0.3, 1], extrapolate: eJ.A.Extrapolate.CLAMP }),
            filter: eJ.A.template`grayscale(${l})`,
        };
    }
    setItem = (e, t) => {
        let {
                props: { items: l, onIntentionalChange: s },
                state: { currentIndex: i },
            } = this,
            a = (0, e5.U3)(i, l.length),
            n = (0, e5.U3)(e, l.length),
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
            ? (0, s.jsx)(eO.D, {
                  onClick: () => this.handleCurrentItemClick(e, t),
                  className: tt.AU,
                  children: (0, s.jsx)("img", { src: e.src, alt: "", className: tt.NP }),
              })
            : (0, s.jsx)(eO.D, {
                  onClick: () => this.setItem(t, !0),
                  className: tt.AU,
                  children: (0, s.jsx)("img", { alt: "", className: tt.tv, src: e.src, draggable: !1 }),
              });
    renderItem = (e, t, l) => {
        let { currentIndex: i, volume: a, isMuted: r } = this.state,
            o = t === (0, e5.U3)(i, this.props.items.length);
        return (0, s.jsx)(eJ.A.div, {
            className: n()(tt.AS, { [tt.Xt]: o }),
            style: null != l ? this.getStyle(t, l) : null,
            onMouseEnter: o ? null : () => this.handleEdgeItemMouseEnter(t),
            onMouseLeave: o ? null : this.handleEdgeItemMouseLeave,
            children:
                e.type === D.geh.VIDEO || e.type === D.geh.YOUTUBE_VIDEO
                    ? (0, s.jsx)(tc, {
                          item: e,
                          size: this.getItemSize(),
                          onPlay: this.handlePlay,
                          onEnded: this.handleEnded,
                          playable: o,
                          onClick: () => this.handleVideoClick(t),
                          volume: a,
                          onVolumeChange: this.handleVolumeChange,
                          isMuted: r,
                          onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, o),
        });
    };
    renderCarousel() {
        let { items: e } = this.props,
            { currentIndex: t, animate: l, hoveringPreviousItem: i, hoveringNextItem: a } = this.state,
            r = (0, s.jsx)(e5.Ay, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: l,
                edgeItems: 2,
            });
        return e.length <= 1
            ? r
            : (0, s.jsxs)("div", {
                  className: tt.HY,
                  children: [
                      r,
                      (0, s.jsx)(e4, { onClick: this.manualPrevious, className: n()(tt.UE, { [tt.h_]: i }) }),
                      (0, s.jsx)(e6, { onClick: this.manualNext, className: n()(tt.UE, { [tt.h_]: a }) }),
                  ],
              });
    }
    getPaginationSrc(e) {
        switch (e.type) {
            case D.geh.YOUTUBE_VIDEO:
                return (0, D.PE$)(e.youtubeVideoId);
            case D.geh.IMG:
                return e.src;
            case D.geh.VIDEO:
                return e.thumbnailSrc;
            default:
                return null;
        }
    }
    renderPaginationItem = (e, t) => {
        let { currentIndex: l } = this.state,
            i = l === t;
        return (0, s.jsxs)(
            "div",
            {
                className: n()(tt.Yw, i ? tt.sM : tt.N7),
                children: [
                    (0, s.jsx)("img", {
                        alt: null == e.alt ? t : e.alt,
                        className: tt.Pr,
                        src: this.getPaginationSrc(e),
                        draggable: !1,
                    }),
                    e.type === D.geh.YOUTUBE_VIDEO || e.type === D.geh.VIDEO ? (0, s.jsx)(td, {}) : null,
                    i ? (0, s.jsx)("div", { className: tt.SD }) : null,
                ],
            },
            `page-${t}`,
        );
    };
    render() {
        let { items: e, className: t, autoplayInterval: l, paused: i } = this.props,
            { currentIndex: a, playingVideo: n, hasInteracted: r } = this.state;
        return (0, s.jsxs)(e1.A, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: l,
            className: t,
            disable: n || r || i,
            children: [
                this.renderCarousel(),
                (0, s.jsx)("div", {
                    className: tt.X$,
                    children: (0, s.jsx)(e9, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: a,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: tt.XG,
                        align: e.length < 6 ? e9.Align.LEFT : e9.Align.CENTER,
                    }),
                }),
            ],
        });
    }
}
(0, e0.A)(tu);
var th = l(882188);
function tm(e) {
    let { className: t, ...l } = e;
    return (0, s.jsx)(eQ.A, {
        ...l,
        className: n()(th.Zy, t),
        mediaPlayerClassName: th.Zy,
        renderLinkComponent: eq.bU,
    });
}
function tp(e) {
    let { containerClassName: t, className: l, ...i } = e;
    return (0, s.jsx)(e$.Ay, { ...i, className: n()(l, t) });
}
let tg = { width: 1280, height: 720 },
    tx = { width: 640, height: 360 },
    tv = `rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=${D.NzX}`,
    tj = (e) => {
        let t,
            l,
            i,
            { item: a, onPlay: n, volume: r, onVolumeChange: o, onMute: c, isMuted: d, autoPlay: u } = e;
        if (a.type === D.geh.YOUTUBE_VIDEO)
            (t = { url: (0, D.PE$)(a.youtubeVideoId), ...tg }),
                (l = { url: `${(0, D.uJ2)(a.youtubeVideoId)}?${tv}`, ...tx }),
                (i = eG.m.YOUTUBE);
        else {
            let e = null != a.width ? a.width : 0,
                s = null != a.height ? a.height : 0;
            (t = { url: a.thumbnailSrc, width: e, height: s }),
                (l = { url: a.src, proxyURL: a.src, width: e, height: s });
        }
        return (0, s.jsx)("div", {
            className: th.x,
            children: (0, s.jsx)(ek.rr, {
                className: th.Zy,
                iframeWrapperClassName: th.Zy,
                href: null,
                thumbnail: t,
                video: l,
                provider: i,
                maxHeight: ts.height,
                maxWidth: "small",
                onPlay: n,
                playable: !0,
                volume: r,
                onVolumeChange: o,
                autoMute: d,
                onMute: c,
                autoPlay: u,
                renderImageComponent: tp,
                renderVideoComponent: tm,
                renderLinkComponent: eq.bU,
            }),
        });
    };
class tA extends i.PureComponent {
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
            { isMuted: i, volume: a } = this.state,
            { videoAutoPlay: r } = this.props;
        switch (e.type) {
            case D.geh.YOUTUBE_VIDEO:
            case D.geh.VIDEO:
                l = (0, s.jsx)(tj, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: i,
                    volume: a,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: r,
                });
                break;
            case D.geh.IMG:
                if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, s.jsx)(h.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t.UvDfMz) });
                    return (0, s.jsx)("div", {
                        className: th.Un,
                        children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e,
                    });
                }
                {
                    let t = e.alt ?? U.intl.string(U.t.X4IxWL);
                    l = (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(et.y, {
                                className: n()(th.u1, { [th.R]: void 0 !== this.state.status.get(e.src) }),
                                type: et.y.Type.SPINNING_CIRCLE,
                            }),
                            (0, s.jsx)("img", {
                                onError: this.handleOnErrorImg,
                                onLoad: this.handleOnLoadImg,
                                className: n()(th.JD, { [th.R]: "loaded" !== this.state.status.get(e.src) }),
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
        return (0, s.jsx)(eO.D, { className: th.Pj, onClick: () => this.handleCurrentItemClick(e, t), children: l });
    };
    render() {
        let { items: e, autoplayInterval: t, className: l, paused: i, themedPagination: a } = this.props,
            { hasInteracted: r } = this.state;
        return (0, s.jsx)(eZ, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: i || r,
            renderItem: this.renderItem,
            className: n()(th.Gt, l),
            themedPagination: a,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
        });
    }
}
var tC = l(256905),
    tI = l(531685),
    t_ = l(173018);
function tE(e) {
    let { application: t, carouselItems: l } = e,
        a = (0, c.bG)([tI.A], () => tI.A.isFocused()),
        n = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)("img", { className: t_.M, src: W, "aria-hidden": !0, alt: "" }),
                (0, s.jsx)(h.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t.UvDfMz) }),
            ],
        });
    l.forEach((e, s) => {
        e.alt = U.intl.formatToPlainString(U.t.sSEhHb, { index: s + 1, totalImages: l.length, name: t.name });
    });
    let r = i.useCallback(
        (e, t) => {
            if (e.type === D.geh.IMG) {
                let t = l.filter((e) => e.type === D.geh.IMG),
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
                (0, tC.R)({
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
        : (0, s.jsx)(tA, {
              className: t_.D,
              themedPagination: !0,
              items: l,
              autoplayInterval: 8e3,
              paused: !a,
              videoAutoPlay: !0,
              onCurrentItemClick: r,
              errorComponent: n,
          });
}
var tf = l(168186);
l(827669);
var tN = l(853618);
function tS(e) {
    let { application: t } = e,
        l = i.useMemo(() => {
            let e = t.directory_entry?.popular_application_commands;
            return null != e
                ? e.map((e) => (0, tf.Oe)({ rootCommand: e, command: e, applicationId: e.application_id }))
                : [];
        }, [t]);
    return 0 === l.length
        ? null
        : (0, s.jsxs)("div", {
              className: tN.hd,
              children: [
                  (0, s.jsx)(h.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.swIgTL),
                  }),
                  (0, s.jsx)("div", {
                      className: tN.hQ,
                      children: l.map((e) =>
                          (0, s.jsxs)(
                              "div",
                              {
                                  className: tN.dO,
                                  children: [
                                      (0, s.jsxs)(g.E, {
                                          className: tN.p6,
                                          variant: "code",
                                          color: "text-strong",
                                          children: ["/", e.displayName],
                                      }),
                                      (0, s.jsx)(g.E, {
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
var ty = l(534890),
    tb = l(812991),
    tP = l(177953),
    tR = l(203363),
    tT = l(975571),
    tL = l(123917),
    tD = l(98490);
let tO = tT.A.getArticleURL(D.MVz.BOT_DATA_ACCESS);
function tk(e) {
    let { application: t } = e,
        { hasMessageContent: l, hasGuildPresences: a, hasGuildMembers: n, hasIntents: r } = (0, tR.Z)(t),
        o = i.useCallback(() => {
            null != t.privacy_policy_url && (0, tL.h)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, s.jsxs)("div", {
        className: tD.hd,
        children: [
            (0, s.jsx)(h.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: U.intl.string(U.t.QzDgMq),
            }),
            (0, s.jsxs)("div", {
                className: tD.hQ,
                children: [
                    r &&
                        (0, s.jsxs)("ul", {
                            className: tD.In,
                            children: [
                                (0, s.jsx)(h.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-default",
                                    children: U.intl.string(U.t.U6KH5S),
                                }),
                                l &&
                                    (0, s.jsx)(tG, {
                                        icon: ty.ChatIcon,
                                        heading: U.intl.string(U.t.gJpBO2),
                                        body: U.intl.string(U.t["L+QVbh"]),
                                    }),
                                a &&
                                    (0, s.jsx)(tG, {
                                        icon: tb.n,
                                        heading: U.intl.string(U.t["jo0oj/"]),
                                        body: U.intl.string(U.t.Dm0jqx),
                                    }),
                                n &&
                                    (0, s.jsx)(tG, {
                                        icon: tP.n,
                                        heading: U.intl.string(U.t.QZql7O),
                                        body: U.intl.string(U.t["ez/N/R"]),
                                    }),
                            ],
                        }),
                    (0, s.jsx)(g.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: U.intl.format(U.t.b6nqk0, { helpCenterUrl: tO }),
                    }),
                    null != t.privacy_policy_url &&
                        (0, s.jsx)(g.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: tD.hM,
                            children: U.intl.format(U.t.agYVY5, { onClick: o }),
                        }),
                ],
            }),
        ],
    });
}
function tG(e) {
    let { icon: t, heading: l, body: i } = e;
    return (0, s.jsxs)("li", {
        className: tD.KT,
        children: [
            (0, s.jsx)(t, { color: "currentColor", size: "md" }),
            (0, s.jsxs)("div", {
                className: tD.D6,
                children: [
                    (0, s.jsx)(h.D, { variant: "heading-md/semibold", color: "text-default", children: l }),
                    (0, s.jsx)(g.E, { variant: "text-md/normal", color: "text-default", children: i }),
                ],
            }),
        ],
    });
}
var tM = l(692617),
    tU = l(664121),
    tw = l(548118),
    tV = l(773669),
    tF = l(596477);
function tB(e) {
    let {
            application: t,
            mutualGuilds: l,
            className: i,
            textVariant: a = "text-sm/normal",
            guildsClassName: r,
            children: o,
        } = e,
        d = (0, c.bG)([tV.default], () => tV.default.locale),
        u = new Intl.ListFormat(d),
        h = t.directory_entry?.guild_count ?? 0,
        m = l ?? [],
        p = m.length,
        x = Math.max(0, h - p),
        v = (function (e, t, l, s) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === l) return U.intl.formatToPlainString(U.t.pnzE1t, { mutualGuildCount: t });
            let i = t > 0 ? U.t.YR8PSL : U.t.GQjq6c,
                a = new Intl.NumberFormat(s, { notation: "compact", compactDisplay: "short" });
            return U.intl.formatToPlainString(i, {
                guildCount: a.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: a.format(l),
            });
        })(h, p, x, d),
        j =
            m.length > 3
                ? U.intl.formatToPlainString(U.t.m6oRrA, { appNames: u.format(m.slice(2).map((e) => e.name)) })
                : void 0;
    return 0 === m.length && null == v
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  o,
                  (0, s.jsxs)("div", {
                      className: n()(i, tF.iE),
                      children: [
                          (0, s.jsx)("div", {
                              className: n()(tF.Pt, r),
                              children:
                                  m.length > 0
                                      ? (0, s.jsx)(tM.A, {
                                            guilds: m,
                                            maxGuilds: 3,
                                            size: tw.Ay.Sizes.SMOL,
                                            overflowTooltip: j,
                                        })
                                      : (0, s.jsx)(tU.R, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 16,
                                            height: 16,
                                            className: tF.DE,
                                        }),
                          }),
                          null != v ? (0, s.jsx)(g.E, { variant: a, color: "text-default", children: v }) : null,
                      ],
                  }),
              ],
          });
}
var tH = l(973172),
    tY = l(68316);
function tz(e) {
    let { application: t, className: l } = e,
        a = i.useCallback((e) => {
            O(D.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: L.ev.APPLICATION,
            }),
                V({ categoryId: e.id });
        }, []);
    return null == t.categories || 0 === t.categories.length
        ? null
        : (0, s.jsxs)("div", {
              className: l,
              children: [
                  (0, s.jsx)(h.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.s7iald),
                  }),
                  (0, s.jsx)("div", {
                      className: tY.L,
                      children: t.categories.map((e) =>
                          (0, s.jsx)(
                              eO.D,
                              {
                                  className: tY.c,
                                  onClick: () => a(e),
                                  children: (0, s.jsx)(g.E, {
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
    tW = l(514042),
    tK = l(194261),
    tZ = l(173936),
    t$ = l(9578),
    tQ = l(736653),
    tq = l(573648),
    tJ = l(194047);
function t0(e) {
    let { application: t, className: l, innerClassName: i } = e,
        a = t.directory_entry?.external_urls ?? [];
    return null != t.terms_of_service_url || null != t.privacy_policy_url || a.length > 0
        ? (0, s.jsxs)("div", {
              className: n()(tJ.kL, l),
              children: [
                  (0, s.jsx)(h.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.l6DP2n),
                  }),
                  (0, s.jsxs)("div", {
                      className: n()(tJ.p_, i),
                      children: [
                          a.map((e, t) => (0, s.jsx)(t1, { url: e.url, children: e.name }, t)),
                          null != t.terms_of_service_url
                              ? (0, s.jsx)(t7, {
                                    icon: tW.FileIcon,
                                    url: t.terms_of_service_url,
                                    children: U.intl.string(U.t.s7STcY),
                                })
                              : null,
                          null != t.privacy_policy_url
                              ? (0, s.jsx)(t7, {
                                    icon: tK.LockIcon,
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
    let { url: t, children: l } = e,
        i = (0, tQ.Ay)(),
        a = tq.A.getByUrl(t),
        n = (0, tX.M)(i) ? a?.icon?.darkSVG : a?.icon?.lightSVG;
    return (0, s.jsx)(t7, { icon: void 0 === n ? tZ.LinkIcon : void 0, imageSrc: n, url: t, children: l });
}
function t7(e) {
    let { icon: t, imageSrc: l, iconColor: i, url: a, children: r } = e,
        o = k(),
        c = null;
    null != t
        ? (c = (0, s.jsx)(t, { className: tJ.GU, color: i ?? "currentColor", width: 20, height: 20, size: "custom" }))
        : null != l && (c = (0, s.jsx)("img", { className: tJ.GR, src: l, alt: "" }));
    let d = (0, s.jsxs)(s.Fragment, {
        children: [c, (0, s.jsx)(g.E, { className: tJ.so, variant: "text-sm/medium", selectable: !0, children: r })],
    });
    return (0, s.jsx)(t$.A, {
        href: a,
        className: n()(tJ.Aw, tJ.SF),
        trusted: !o,
        useDefaultUnderlineStyles: !1,
        children: d,
    });
}
var t8 = l(449054),
    t2 = l(900002),
    t3 = l(950305),
    t9 = l(573435),
    t4 = l(714991),
    t6 = l(776231),
    t5 = l(149790),
    le = l(882553),
    lt = l(937495),
    ll = l(517061);
function ls(e) {
    let { guild: t, className: l, onClick: i } = e,
        a = (0, tQ.Ay)(),
        r = (0, t5.dangerouslyConstructGuildRecordFromUntypedObject)({ name: t.name, icon: t.icon }),
        o = er.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discovery_splash, size: 192 * (0, t6.mZ)() }),
        c =
            null != o
                ? o
                : (function (e) {
                      switch (e) {
                          case D.NJ8.DARK:
                              return lt;
                          case D.NJ8.LIGHT:
                              return ll;
                      }
                  })(a),
        d = er.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 50 });
    return (0, s.jsxs)(eO.D, {
        className: n()(le.Nr, l),
        onClick: i,
        "aria-label": U.intl.string(U.t.RB4L2x),
        children: [
            (0, s.jsxs)("div", {
                className: le.MY,
                children: [
                    (0, s.jsx)("img", { src: c, alt: "", className: le.j0 }),
                    (0, s.jsx)("div", {
                        className: le.$f,
                        children: (0, s.jsx)(t9.Ay, {
                            mask: t9.Ay.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, s.jsx)("div", {
                                className: le.SA,
                                children: (0, s.jsx)(tw.Ay, {
                                    className: le.__invalid_icon,
                                    iconSrc: d,
                                    guild: r,
                                    size: tw.Ay.Sizes.LARGE,
                                }),
                            }),
                        }),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: le.RN,
                children: [
                    (0, s.jsxs)("div", {
                        className: le.Y_,
                        children: [
                            (0, s.jsx)(t4.A, { className: le.n2, guild: t, tooltipColor: t2.ST.Colors.PRIMARY }),
                            (0, s.jsx)(h.D, { variant: "heading-md/semibold", className: le.J5, children: t.name }),
                        ],
                    }),
                    (0, s.jsx)(g.E, {
                        className: le.eF,
                        variant: "text-sm/normal",
                        color: "text-default",
                        lineClamp: 2,
                        children: t.description,
                    }),
                    (0, s.jsx)("div", {
                        className: le.Fj,
                        children: (0, s.jsxs)("div", {
                            className: le.FG,
                            children: [
                                (0, s.jsx)(t3.UserIcon, { color: "currentColor", className: le.NP, size: "xs" }),
                                (0, s.jsx)(g.E, {
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
let li = "redirect_to_support_server";
function la(e) {
    var t;
    let l,
        a,
        n,
        { application: r, className: o } = e,
        { onGoToSupportServer: d } =
            ((t = r),
            (l = k()),
            (a = (0, c.bG)([E.default], () => E.default.getSessionId())),
            (n = i.useCallback(async () => {
                try {
                    let e = t?.guild?.id;
                    if (null != e) {
                        O(D.HAw.APP_DIRECTORY_SUPPORT_SERVER_JOINED, { application_id: t.id, support_guild_id: e });
                        let l = { page: D.liQ.APPLICATION_DIRECTORY };
                        await (0, t8.Z2)(e, l);
                    }
                } catch {}
            }, [t])),
            i.useEffect(() => {
                let e = new URL(location.href);
                if (null != t && l && null != a && "true" === e.searchParams.get(li)) {
                    e.searchParams.delete(li);
                    let t = e.pathname + e.search;
                    (0, _.bG)(t), n();
                }
            }, [l, n, a, t]),
            {
                onGoToSupportServer: i.useCallback(() => {
                    null != t?.guild?.id && (l ? n() : G({ [li]: "true" }));
                }, [t, n, l]),
            });
    return null != r.guild && r.guild.features.includes(D.GuildFeatures.DISCOVERABLE)
        ? (0, s.jsxs)("div", {
              className: o,
              children: [
                  (0, s.jsx)(h.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.KJEO27),
                  }),
                  (0, s.jsx)(ls, { guild: r.guild, onClick: d }),
              ],
          })
        : null;
}
var ln = l(412645);
let lr = (0, U.getAvailableLocales)();
function lo(e) {
    let { application: t, className: l } = e,
        a = (0, c.bG)([tV.default], () => tV.default.locale),
        { supportedLanguages: r, usersLanguageIsFirst: o } = i.useMemo(() => {
            if (t.directory_entry?.supported_locales != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    l = e.has(a),
                    s = lr.filter((t) => e.has(t.value));
                return (
                    l && s.sort((e, t) => (e.value === a ? -1 : +(t.value === a))),
                    { supportedLanguages: s.map((e) => U.intl.string(e.localizedName)), usersLanguageIsFirst: l }
                );
            }
            return { supportedLanguages: [], usersLanguageIsFirst: !1 };
        }, [t.directory_entry, a]);
    return (0, s.jsxs)("div", {
        className: l,
        children: [
            (0, s.jsx)(h.D, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: U.intl.string(U.t.Fbjlu3),
            }),
            (0, s.jsx)("ul", {
                className: ln.nw,
                children: r.map((e, t) =>
                    (0, s.jsx)(
                        "li",
                        {
                            className: n()(ln.WH, ln.O6),
                            children: (0, s.jsx)(g.E, {
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
var lc = l(527308);
function ld(e) {
    let { className: t, view: l, application: i } = e,
        a = "embedded" === l,
        r = (0, tH.A)({ application: i });
    return (0, s.jsxs)("div", {
        className: n()(t, { [lc.PD]: !a, [lc.UT]: a }),
        children: [
            (0, s.jsxs)("div", {
                className: n()(lc.hd, { [lc.d5]: a }),
                children: [
                    (0, s.jsx)("div", {
                        className: lc.iY,
                        children: (0, s.jsx)(tB, {
                            application: i,
                            mutualGuilds: r,
                            className: lc.wu,
                            guildsClassName: lc.HG,
                            children: (0, s.jsx)(h.D, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: U.intl.string(U.t["3NxHC4"]),
                            }),
                        }),
                    }),
                    (0, s.jsx)(tz, { application: i, className: lc.iY }),
                    (0, s.jsx)(lo, { application: i, className: lc.iY }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: n()(lc.hd, { [lc.d5]: a }),
                children: [
                    (0, s.jsx)(t0, { application: i, className: lc.iY, innerClassName: a ? lc.RU : void 0 }),
                    (0, s.jsx)(la, { application: i, className: lc.iY }),
                ],
            }),
        ],
    });
}
var lu = l(478676),
    lh = l.n(lu),
    lm = l(900797),
    lp = l(847374),
    lg = l(558179),
    lx = l(28863),
    lv = l(376728),
    lj = l(167189),
    lA = l(721779),
    lC = l(481859),
    lI = l(143145);
let l_ = /^discord.gg\/[a-zA-Z0-9-]+/,
    lE = {
        ...lg.A.rules,
        heading: {
            ...lg.A.rules.heading,
            react(e, t, l) {
                let i = `h${Math.min(Math.max(2, e.level + 1), 4)}`;
                return (0, s.jsx)(lC.A, { tag: i, children: t(e.content, l) }, l.key);
            },
        },
        image: { ...lh().defaultRules.image },
        inviteLink: {
            order: lg.A.rules.link.order + 1,
            match: (e, t) => (t.inline ? l_.exec(e) : null),
            parse: (e, t, l) => {
                let s = (0, lA.br)(e[0]);
                return null == s || s.type !== lj.I.INVITE
                    ? { type: "text", content: e[0] }
                    : {
                          type: "inviteLink",
                          content: [{ type: "text", content: e[0] }],
                          onClick: () => {
                              lv.Ay.acceptInviteAndTransitionToInviteChannel({
                                  inviteKey: s.code,
                                  context: { location: "Application Directory" },
                              }),
                                  l.closeModal?.();
                          },
                      };
            },
            react: (e, t, l) =>
                (0, s.jsx)(
                    lx.Anchor,
                    {
                        onClick: (t) => {
                            t.preventDefault(), e.onClick();
                        },
                        children: (0, lI.t)(e, t, l),
                    },
                    l.key,
                ),
        },
    };
var lf = l(148323);
let lN = lh().parserFor(lE),
    lS = lh().reactFor(lh().ruleOutput(lE, "react"));
function ly(e) {
    let { description: t, supportsMarkdown: l } = e,
        [a, r] = i.useState(!1),
        o = i.useRef(null);
    i.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            r((o.current?.scrollHeight ?? 0) - (o.current?.clientHeight ?? 0) > 1);
        });
        return e.observe(o.current), () => e.disconnect();
    }, []);
    let [c, d] = i.useState(!1),
        u = i.useCallback(() => {
            d((e) => !e);
        }, []);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                ref: o,
                className: n()({ [lf.mA]: !c, [lf.ii]: !c && "Safari" === platform.name }),
                children: l
                    ? (0, s.jsx)(lg.A, {
                          className: lf.R4,
                          parser: lN,
                          output: lS,
                          state: { allowLinks: !0 },
                          children: t,
                      })
                    : (0, s.jsx)(g.E, { variant: "text-md/normal", color: "text-default", children: t }),
            }),
            a || c ? (0, s.jsx)(lb, { isShowingMore: c, onToggle: u }) : null,
        ],
    });
}
function lb(e) {
    let { onToggle: t, isShowingMore: l } = e,
        a = i.useMemo(
            () =>
                (0, s.jsxs)("div", {
                    className: lf.eR,
                    children: [
                        (0, s.jsx)(g.E, {
                            variant: "text-md/semibold",
                            color: "interactive-text-default",
                            children: l ? U.intl.string(U.t["vtfc4+"]) : U.intl.string(U.t.ZDRyuq),
                        }),
                        l
                            ? (0, s.jsx)(lm.t, { size: "md", color: "currentColor", className: lf.ys })
                            : (0, s.jsx)(lp.a, { size: "md", color: "currentColor", className: lf.ys }),
                    ],
                }),
            [l],
        );
    return (0, s.jsxs)(eO.D, {
        className: lf.dO,
        onClick: t,
        children: [(0, s.jsx)("div", { className: lf.yF }), a, (0, s.jsx)("div", { className: lf.yF })],
    });
}
let lP = function (e) {
    let { application: t } = e,
        l = t.directory_entry?.detailed_description,
        a = t.directory_entry?.short_description,
        n = i.useMemo(
            () =>
                null != l && l.length > 0
                    ? (0, s.jsx)(ly, { description: l, supportsMarkdown: !0 })
                    : null != a && a.length > 0
                      ? (0, s.jsx)(ly, { description: a, supportsMarkdown: !1 })
                      : null,
            [l, a],
        );
    return null == n
        ? null
        : (0, s.jsxs)("div", {
              className: lf.l4,
              children: [
                  (0, s.jsx)(h.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.txraKS),
                  }),
                  n,
              ],
          });
};
var lR = l(136722),
    lT = l(595738),
    lL = l(376092),
    lD = l(263442);
let lO = function (e) {
    let { application: t } = e,
        l = i.useMemo(() => {
            let e = t?.install_params?.permissions;
            if (null != e) return lL.Q.filter((t) => lR.zy(lR.iu(e), t));
        }, [t?.install_params?.permissions]);
    return null != l && l.length > 0
        ? (0, s.jsxs)("div", {
              className: lD.A,
              children: [
                  (0, s.jsx)(h.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.runNF8),
                  }),
                  (0, s.jsx)(lT.A, {
                      className: lD.h,
                      grantedPermissions: l,
                      grantedPermissionsHeader: U.intl.string(U.t.SLgiNH),
                  }),
              ],
          })
        : null;
};
var lk = l(644647);
function lG(e) {
    let { application: t } = e,
        l = i.useMemo(() => (t.directory_entry?.carousel_items ?? []).map(R.xb).filter(eD.Vq) ?? [], [t]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: lk.Xb,
                children: [
                    (0, s.jsx)(tE, { application: t, carouselItems: l }),
                    (0, s.jsx)(lP, { application: t }),
                    (0, s.jsx)(tS, { application: t }),
                    (0, s.jsx)(lO, { application: t }),
                    (0, s.jsx)(tk, { application: t }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: lk.Q9,
                children: [
                    (0, s.jsx)("div", { className: lk.yF }),
                    (0, s.jsx)(h.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: U.intl.string(U.t["mD+J/i"]),
                    }),
                    (0, s.jsx)(ld, { application: t, view: "embedded" }),
                ],
            }),
        ],
    });
}
l(321073);
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
    lW = l(821609),
    lK = l(782134),
    lZ = l(787389),
    l$ = l(688810),
    lQ = l(361926),
    lq = l(204776),
    lJ = l(50268),
    l0 = l(207371),
    l1 = l(928658),
    l7 = l(395671),
    l8 = l(957565),
    l2 = l(692848),
    l3 = l(108861);
let l9 = "start_application_install",
    l4 = "launch_activity";
function l6(e) {
    let { renderDropdown: t, size: l } = e,
        a = i.useRef(null);
    return (0, s.jsx)(lY.Y, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return t(l);
        },
        position: "left",
        align: "top",
        animation: lY.Y.Animation.NONE,
        children: (e) =>
            (0, s.jsx)(eU.K, {
                buttonRef: a,
                variant: "secondary",
                size: l,
                icon: lz.MoreHorizontalIcon,
                "aria-label": U.intl.string(U.t["UKOtz+"]),
                ...e,
            }),
    });
}
function l5(e) {
    var t;
    let l,
        a,
        { application: n, variant: r, size: o, contentWidth: c } = e,
        { onClickInstallApplication: d, canInstall: u } =
            ((t = n),
            (l = k()),
            (a = i.useCallback(() => {
                let e = L.h.getField("guildId") ?? void 0;
                (0, l2.o)({
                    applicationId: t.id,
                    customInstallUrl: t.custom_install_url,
                    installParams: t.install_params,
                    integrationTypesConfig: t.integration_types_config,
                    guildId: e,
                    source: "product_page",
                });
            }, [t])),
            i.useEffect(() => {
                let e = new URL(location.href);
                if (l && "true" === e.searchParams.get(l9)) {
                    e.searchParams.delete(l9);
                    let t = e.pathname + e.search;
                    (0, _.bG)(t), a();
                }
            }, [l, a]),
            {
                onClickInstallApplication: i.useCallback(() => {
                    if (
                        (O(D.HAw.APP_DIRECTORY_INSTALL_CLICKED, { application_id: t.id }),
                        (lM.Fr || lM.v1) && null == t.custom_install_url)
                    ) {
                        let e = (0, l2.Z)({
                            applicationId: t.id,
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        });
                        if (null != e) return void window.open(e, "_blank");
                    }
                    if (l) a();
                    else {
                        let e = L.h.getField("guildId");
                        N.default.track(D.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: t.id,
                            guild_id: e,
                            auth_type: null != t.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: lM.Fr ? "mobile_web" : "desktop_web",
                        }),
                            G({ [l9]: "true" });
                    }
                }, [t, a, l]),
                canInstall: i.useMemo(
                    () =>
                        (0, lq.Ie)({
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        }),
                    [t],
                ),
            });
    return "icon" === c
        ? (0, s.jsx)(eU.K, {
              variant: r,
              icon: lX.PlusLargeIcon,
              size: o,
              onClick: d,
              "aria-label": U.intl.string(U.t.NgXl3C),
              disabled: !u,
          })
        : (0, s.jsx)(lW.$, {
              variant: r,
              size: o,
              text: "small" === c ? U.intl.string(U.t.qRZ35t) : U.intl.string(U.t.NgXl3C),
              onClick: d,
              disabled: !u,
          });
}
function se(e) {
    let { size: t, contentWidth: l, onClick: i, isSubmitting: a } = e;
    return "icon" === l
        ? (0, s.jsx)(eU.K, {
              variant: "primary",
              icon: lK.PlayIcon,
              size: t,
              onClick: i,
              loading: a,
              "aria-label": U.intl.string(U.t.QO7rO6),
          })
        : (0, s.jsx)(lW.$, { variant: "primary", size: t, text: U.intl.string(U.t.QO7rO6), onClick: i, loading: a });
}
let st = i.forwardRef(function (e, t) {
    let { application: l, size: a } = e,
        { analyticsLocations: r } = (0, l$.Ay)(),
        o = i.useCallback(() => {
            var e;
            O(D.HAw.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: l.id }),
                (0, l8.C)(
                    ((e = l.id), `${location.protocol}//${location.host}${D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e)}`),
                    () => (0, lU.P0)((0, lw.o)(U.intl.string(U.t["L/PwZf"]), lV.Ck.SUCCESS)),
                );
        }, [l.id]),
        d = i.useCallback(() => {
            let e = l7.Ay.createFromServer(l);
            (0, l1.r3)({ application: e, entrypoint: "app_directory" });
        }, [l]),
        u = (0, lJ.A)({
            id: l.id,
            label: U.intl.string(U.t["FfCL+6"]),
            onSuccess: () => (0, lU.P0)((0, lw.o)(U.intl.string(U.t.eNjAah), lV.Ck.SUCCESS)),
        }),
        h = i.useCallback(
            (e, t) =>
                (0, s.jsxs)(lF.W, {
                    "data-menu-migrated-auto": !0,
                    navId: "application-directory-profile",
                    "aria-label": U.intl.string(U.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, s.jsx)(lB.rX, {
                                  children: (0, s.jsx)(lB.Dr, {
                                      id: "copy",
                                      label: U.intl.string(U.t.z4sP5J),
                                      action: o,
                                      icon: tZ.LinkIcon,
                                      leadingAccessory: { type: "icon", icon: tZ.LinkIcon },
                                  }),
                              })
                            : null,
                        (0, s.jsx)(lB.rX, {
                            children: (0, s.jsx)(lB.Dr, {
                                id: "report",
                                label: U.intl.string(U.t.NgA5vp),
                                color: "danger",
                                leadingAccessory: { type: "icon", icon: lH.FlagIcon },
                                action: d,
                            }),
                        }),
                        null != u ? (0, s.jsx)(lB.rX, { children: u }) : null,
                    ],
                }),
            [u, d, o],
        ),
        { onClickLaunchActivity: m, isSubmitting: p } = (function (e, t) {
            let l = e.id,
                s = e?.bot?.id,
                a = (0, l0.x)(e),
                n = (0, lQ.Vr)({ context: { type: "contextless" }, applicationId: l, botUserId: s }),
                r = null != s && (0, ea.$B)(e) && (0, ea.Ag)(e) && (a || n),
                [o, d] = i.useState(!1),
                u = k(),
                h = (0, c.bG)([f.default], () => f.default.getCurrentUser()),
                m = (0, lZ.A)({
                    applicationId: l,
                    analyticsLocations: t,
                    runBeforeLaunchAttempt: () => d(!0),
                    runAfterLaunchAttempt: () => d(!1),
                });
            i.useEffect(() => {
                let e = new URL(location.href),
                    t = "true" === e.searchParams.get(l4);
                if (u && r && t && null != s && null != h) {
                    e.searchParams.delete(l4);
                    let t = e.pathname + e.search;
                    (0, _.bG)(t), m();
                }
            }, [u, r, s, h, m]);
            let p = i.useCallback(async () => {
                if (null != s) {
                    if ((O(D.HAw.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: l }), !u))
                        return void G({ [l4]: "true" });
                    await m();
                }
            }, [l, s, u, m]);
            return { onClickLaunchActivity: r ? p : void 0, isSubmitting: o };
        })(l, r),
        g = null != m,
        x = g ? "secondary" : "primary";
    return (0, s.jsxs)("div", {
        ref: t,
        children: [
            (0, s.jsxs)("div", {
                className: n()(l3.Ik, l3.U),
                children: [
                    g && (0, s.jsx)(se, { size: a, contentWidth: "normal", onClick: m, isSubmitting: p }),
                    (0, s.jsx)(l5, { application: l, size: a, contentWidth: "normal", variant: x }),
                    l8.p5
                        ? (0, s.jsx)(eU.K, {
                              variant: "secondary",
                              size: a,
                              icon: tZ.LinkIcon,
                              onClick: o,
                              "aria-label": U.intl.string(U.t.z4sP5J),
                          })
                        : null,
                    (0, s.jsx)(l6, { renderDropdown: (e) => h(!1, e), size: a }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: n()(l3.Ik, l3.EX),
                children: [
                    g && (0, s.jsx)(se, { size: a, contentWidth: "small", onClick: m, isSubmitting: p }),
                    (0, s.jsx)(l5, { application: l, size: a, contentWidth: "small", variant: x }),
                    (0, s.jsx)(l6, { renderDropdown: (e) => h(l8.p5, e), size: a }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: n()(l3.Ik, l3.nU),
                children: [
                    g && (0, s.jsx)(se, { size: a, contentWidth: "icon", onClick: m, isSubmitting: p }),
                    (0, s.jsx)(l5, { application: l, size: a, contentWidth: "icon", variant: x }),
                    (0, s.jsx)(l6, { renderDropdown: (e) => h(l8.p5, e), size: a }),
                ],
            }),
        ],
    });
});
var sl = l(973489);
let ss = function (e) {
    let { application: t, onButtonsVisibilityChange: l } = e,
        a = i.useRef(null),
        n = i.useMemo(() => er.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 96 }), [t]),
        r = i.useMemo(() => {
            let e = [];
            return (
                (0, ea.b7)(t) && e.push(U.intl.string(U.t.LO4f0P)),
                (0, ea.K4)(t) && (0 !== e.length && e.push("\u2022"), e.push(U.intl.string(U.t["8z5B2U"]))),
                (0, ea.ME)(t) && (0 !== e.length && e.push("\u2022"), e.push(U.intl.string(U.t["5khEk8"]))),
                e
            );
        }, [t]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(eC, { application: t, bannerType: "detail", iconURL: n }),
            (0, s.jsx)("div", {
                className: sl.H,
                style: { height: 52 },
                children: (0, s.jsx)("img", {
                    src: n,
                    alt: "",
                    className: sl.my,
                    height: 96,
                    width: 96,
                    style: { borderWidth: 4, marginLeft: 28 },
                }),
            }),
            (0, s.jsxs)("div", {
                className: sl.op,
                children: [
                    (0, s.jsxs)("div", {
                        className: sl.tJ,
                        children: [
                            (0, s.jsx)(h.D, {
                                variant: "heading-xxl/bold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, s.jsx)("div", {
                                className: sl.A7,
                                children: r.map((e, t) =>
                                    (0, s.jsx)(
                                        g.E,
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
                    (0, s.jsx)(ei.L, {
                        innerRef: a,
                        onChange: l,
                        active: !0,
                        children: (0, s.jsx)(st, { ref: a, application: t, size: "md" }),
                    }),
                ],
            }),
        ],
    });
};
var si = l(172218),
    sa = l(268951);
function sn(e) {
    let { applicationId: t, similarApplications: l, onSelectApplication: a, similarLoadId: n } = e,
        r = (function (e) {
            let { applicationId: t, similarAppIds: l } = e,
                [s, a] = i.useState(),
                n = (0, si.K)(function (e) {
                    e && a(t);
                });
            return (
                i.useEffect(() => {
                    s === t &&
                        O(D.HAw.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: l,
                        });
                }, [s, t, l]),
                n
            );
        })({ applicationId: t, similarAppIds: i.useMemo(() => l.map((e) => e.id), [l]) });
    return (0, s.jsx)("div", {
        className: sa.hQ,
        ref: r,
        children: l.map((e, l) =>
            (0, s.jsx)(
                sr,
                { applicationId: t, similarApplication: e, onSelectApplication: a, similarLoadId: n, position: l },
                e.id,
            ),
        ),
    });
}
function sr(e) {
    let { applicationId: t, similarApplication: l, onSelectApplication: a, position: n, similarLoadId: r } = e,
        o = (0, tH.A)({ application: l }),
        c = l.categories?.[0],
        d = i.useMemo(() => er.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 48 }), [l]),
        u = i.useCallback(() => {
            O(D.HAw.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: "product",
                application_id: t,
                suggested_application_id: l.id,
                position: n,
                load_id: r,
                shown_mutual_guilds_count: o.length,
            }),
                a(l.id);
        }, [a, l.id, t, o.length, r, n]);
    return (0, s.jsxs)(eO.D, {
        onClick: u,
        className: sa.vU,
        children: [
            (0, s.jsxs)("div", {
                className: sa.nT,
                children: [
                    (0, s.jsx)("img", { src: d, alt: "", className: sa.my, height: 48, width: 48 }),
                    (0, s.jsxs)("div", {
                        className: sa.gn,
                        children: [
                            (0, s.jsx)("div", {
                                style: { flex: 1, minWidth: 0, overflow: "hidden" },
                                children: (0, s.jsx)(h.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    className: sa.JB,
                                    children: l.name,
                                }),
                            }),
                            null != c
                                ? (0, s.jsx)(g.E, {
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
            (0, s.jsx)(g.E, {
                className: sa.i3,
                variant: "text-sm/medium",
                color: "text-default",
                lineClamp: 2,
                children: l.directory_entry?.short_description ?? l.description,
            }),
            (0, s.jsx)(tB, { application: l, textVariant: "text-xs/medium", mutualGuilds: o }),
        ],
    });
}
let so = function (e) {
    let { applicationId: t, fetchState: l, similarApplications: i, onSelectApplication: a, similarLoadId: n } = e;
    return l !== eL.e.FETCHING && (null == i || 0 === i.length)
        ? null
        : (0, s.jsxs)("div", {
              className: sa.hd,
              children: [
                  (0, s.jsx)("div", { className: sa.yF }),
                  (0, s.jsx)(h.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      className: sa.bV,
                      children: U.intl.string(U.t.E8wCnk),
                  }),
                  (0, s.jsx)(es, {
                      loading: l === eL.e.FETCHING,
                      children:
                          null != i
                              ? (0, s.jsx)(sn, {
                                    applicationId: t,
                                    similarApplications: i,
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
    sg = l(17815);
function sx(e) {
    let { application: t } = e;
    return (0, s.jsxs)("div", {
        className: sg.ZM,
        children: [(0, s.jsx)(sv, { application: t }), (0, s.jsx)(sA, { application: t })],
    });
}
function sv(e) {
    let { application: t } = e,
        { subscriptions: l, otps: i } = (0, eb.C)(t.id);
    return (0, s.jsxs)("div", {
        className: sg.ZM,
        children: [
            l.length > 0 &&
                (0, s.jsxs)("div", {
                    className: sg.dD,
                    children: [
                        (0, s.jsx)(sh.A, { subscriptions: l, color: "text-strong" }),
                        (0, s.jsx)("div", {
                            className: sg.ZE,
                            children: l.map((e) => {
                                let l = (0, sm.bg)(e.skuFlags) ? "user" : "guild";
                                return (0, s.jsx)(
                                    su.B4,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: l,
                                        onDetails: () =>
                                            F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                );
                            }),
                        }),
                    ],
                }),
            i.length > 0 &&
                (0, s.jsxs)("div", {
                    className: sg.dD,
                    children: [
                        (0, s.jsx)(h.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: U.intl.string(U.t.yUGTs8),
                        }),
                        (0, s.jsx)("div", {
                            className: sg.ZE,
                            children: i.map((e) =>
                                (0, s.jsx)(
                                    su.B8,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () =>
                                            F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, s.jsx)(sd.A, {
                path: D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                exact: !0,
                render: (e) => (0, s.jsx)(sj, { ...e }),
            }),
        ],
    });
}
function sj(e) {
    let {
            match: {
                params: { applicationId: t, skuId: a },
            },
        } = e,
        n = (0, c.bG)([sp.A], () => sp.A.get(a), [a]),
        r = (0, c.bG)([sp.A], () => (null != a ? sp.A.getParentSKU(a) : void 0), [a]),
        o = i.useId(),
        d = i.useCallback(
            () => F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, M.GlobalDiscoveryAppsSections.STORE)),
            [t],
        );
    return (
        i.useLayoutEffect(() => {
            var e;
            switch (n?.type) {
                case D.Puh.CONSUMABLE:
                case D.Puh.DURABLE:
                    return void (0, sc.openModalLazy)(
                        async () => {
                            let { ItemDetailsModal: e } = await Promise.all([
                                l.e("978898"),
                                l.e("406322"),
                                l.e("942571"),
                                l.e("817989"),
                                l.e("480830"),
                                l.e("170104"),
                            ]).then(l.bind(l, 963179));
                            return (l) => (0, s.jsx)(e, { appId: t, skuId: a, ...l });
                        },
                        {
                            modalKey: o,
                            onCloseCallback: () => {
                                sC() ||
                                    F(
                                        D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                            t,
                                            M.GlobalDiscoveryAppsSections.STORE,
                                        ),
                                    );
                            },
                        },
                    );
                case D.Puh.SUBSCRIPTION:
                    if (r?.flags == null) return;
                    return (
                        (e = (0, sm.bg)(r.flags) ? "user" : "guild"),
                        void (0, sc.openModalLazy)(
                            async () => {
                                let { SubscriptionDetailsModal: i } = await Promise.all([
                                    l.e("978898"),
                                    l.e("406322"),
                                    l.e("942571"),
                                    l.e("817989"),
                                    l.e("480830"),
                                    l.e("564850"),
                                ]).then(l.bind(l, 168393));
                                return (l) =>
                                    (0, s.jsx)(i, { appId: t, subscriptionType: e, skuId: a, guildId: void 0, ...l });
                            },
                            {
                                modalKey: o,
                                onCloseCallback: () => {
                                    sC() ||
                                        F(
                                            D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                                t,
                                                M.GlobalDiscoveryAppsSections.STORE,
                                            ),
                                        );
                                },
                            },
                        )
                    );
            }
        }, [t, o, d, r?.flags, n?.flags, n?.type, a]),
        i.useLayoutEffect(
            () => () => {
                (0, sc.closeModal)(o);
            },
            [o],
        ),
        null
    );
}
function sA(e) {
    let { application: t } = e,
        l = k(),
        i = t.terms_of_service_url,
        a = t.privacy_policy_url;
    if (null == i && null == a) return null;
    function n(e, t) {
        return (0, s.jsx)(t$.A, { href: t, trusted: !l, children: e });
    }
    return (0, s.jsx)("div", {
        className: sg.V6,
        children: (0, s.jsx)(g.E, {
            color: "text-strong",
            variant: "text-sm/normal",
            children:
                null != i && null != a
                    ? U.intl.format(U.t.nylPOT, { termsHook: (e) => n(e, i), privacyHook: (e) => n(e, a) })
                    : null != i
                      ? U.intl.format(U.t["0cPyDz"], { termsHook: (e) => n(e, i) })
                      : null != a
                        ? U.intl.format(U.t["loYGC/"], { privacyHook: (e) => n(e, a) })
                        : null,
        }),
    });
}
function sC() {
    return window.location.pathname.startsWith("/login");
}
var sI = l(615052);
let s_ = function (e) {
    let { applicationId: t, onSelectApplication: l, onScroll: a, initialTab: n, onButtonsVisibilityChange: r } = e,
        o = i.useRef(null),
        d = (0, c.bG)([b.A], () => b.A.getApplication(t)),
        u = (0, c.bG)([b.A], () => b.A.getApplicationFetchState(t));
    i.useEffect(() => {
        if (null != t && null == d) {
            let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
            S.Di(t, { noCache: e });
        }
    }, [t, d]),
        i.useEffect(() => {
            S.xZ({ applicationId: t });
        }, [t]),
        i.useEffect(() => () => r(!0), [r]);
    let h = d?.storefront_available,
        [m, p] = i.useState(n ?? M.GlobalDiscoveryAppsSections.ABOUT),
        g = i.useCallback(
            (e) => {
                o.current?.scrollTo({ to: 0 }), p(M.GlobalDiscoveryAppsSections.ABOUT), l(e);
            },
            [l],
        );
    i.useEffect(() => {
        d?.storefront_available && null != t && (0, eb.F)(t);
    }, [d?.storefront_available, t]);
    let x = (0, L.Bn)(),
        v = (0, c.bG)([eL.A], () => eL.A.getFetchState({ applicationId: d?.id })),
        j = (0, c.bG)([eL.A], () => eL.A.getSimilarApplications({ applicationId: d?.id })),
        A = i.useMemo(() => j?.applications.slice(0, 3), [j]),
        C = { displayedSimilarApplications: A, previousView: x },
        I = i.useRef(C);
    i.useEffect(() => {
        I.current = C;
    }),
        i.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = I.current;
            d?.id != null &&
                v !== eL.e.FETCHING &&
                O(D.HAw.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: L.ev.APPLICATION,
                    previous_page: t?.type,
                    application_id: d.id,
                    referrer: document.referrer,
                    suggested_application_ids: e?.map((e) => e.id),
                });
        }, [d?.id, v]);
    let _ = i.useMemo(
            () => [
                { id: M.GlobalDiscoveryAppsSections.ABOUT, label: U.intl.string(U.t.DkyHMK) },
                { id: M.GlobalDiscoveryAppsSections.STORE, label: U.intl.string(U.t.jgEXGB) },
            ],
            [],
        ),
        E = i.useMemo(() => {
            if (null == d) return null;
            switch (m) {
                case M.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, s.jsx)(lG, { application: d });
                case M.GlobalDiscoveryAppsSections.STORE:
                    return (0, s.jsx)(sx, { application: d });
            }
        }, [m, d]),
        f = i.useCallback(
            (e) => {
                O(D.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, { application_id: t, tab_name: e }),
                    p(e),
                    e === M.GlobalDiscoveryAppsSections.ABOUT
                        ? F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t))
                        : F(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t],
        ),
        N = m === M.GlobalDiscoveryAppsSections.ABOUT;
    return (0, s.jsx)(z.A, {
        onScroll: a,
        ref: o,
        children: (0, s.jsx)(Y.A, {
            children:
                null == d
                    ? null == u || u === b.e.FETCHING
                        ? (0, s.jsx)("div", { className: sI.Dg, children: (0, s.jsx)(es, { loading: !0 }) })
                        : (0, s.jsx)("div", { className: sI.Dg, children: (0, s.jsx)(K, { className: sI.z3 }) })
                    : (0, s.jsxs)("div", {
                          className: sI.nM,
                          children: [
                              (0, s.jsx)(ss, { application: d, onButtonsVisibilityChange: r }),
                              (0, s.jsxs)("div", {
                                  className: sI.hQ,
                                  children: [
                                      (0, s.jsxs)("div", {
                                          className: sI.Ne,
                                          children: [
                                              h &&
                                                  (0, s.jsx)("div", {
                                                      className: sI.OF,
                                                      children: (0, s.jsx)(eT, {
                                                          tabs: _,
                                                          onTabSelect: f,
                                                          selectedTab: m,
                                                      }),
                                                  }),
                                              E,
                                              (0, s.jsx)(so, {
                                                  applicationId: t,
                                                  fetchState: v,
                                                  similarApplications: A,
                                                  onSelectApplication: g,
                                                  similarLoadId: j?.loadId,
                                              }),
                                          ],
                                      }),
                                      N && (0, s.jsx)(ld, { className: sI.pz, application: d, view: "side" }),
                                  ],
                              }),
                          ],
                      }),
        }),
    });
};
var sE = l(984516),
    sf = l(724002),
    sN = l(287174),
    sS = l(487899),
    sy = l(239314),
    sb = l(707554),
    sP = l(111162),
    sR = l(195611);
let sT = sN.K.APPLICATION_DIRECTORY;
function sL(e) {
    let { collection: t, index: l, onSelectApplication: a } = e,
        r = (function (e) {
            let { collectionId: t, index: l } = e,
                [s, a] = i.useState(!1),
                n = (0, si.K)(function (e) {
                    e && a(!0);
                });
            return (
                i.useEffect(() => {
                    s && O(D.HAw.APP_DIRECTORY_COLLECTION_VIEWED, { collection_id: t, collection_position: l });
                }, [s, t, l]),
                n
            );
        })({ collectionId: t.id, index: l }),
        o = i.useCallback(
            (e, s) => {
                O(D.HAw.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: s,
                    collection_position: l,
                    application_id: e,
                }),
                    a(e);
            },
            [t.id, l, a],
        );
    return (0, s.jsx)("div", {
        ref: r,
        children: (0, s.jsxs)(sb.F, {
            children: [
                (0, s.jsx)(h.D, {
                    className: n()(sR.Gf, { [sR.SH]: 0 === l }),
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: t.title,
                }),
                (0, s.jsx)(sb.F, {
                    children: (0, s.jsx)("div", {
                        className: sR.Qs,
                        children: t.application_directory_collection_items.map((e, t) =>
                            e.type !== sS.L.APPLICATION || null == e.application
                                ? null
                                : (0, s.jsx)(
                                      e_,
                                      {
                                          application: e.application,
                                          onSelectApplication: () => o(e.application.id, t),
                                          showCategory: !0,
                                      },
                                      e.id,
                                  ),
                        ),
                    }),
                }),
            ],
        }),
    });
}
let sD = function (e) {
    let { onSelectApplication: t } = e,
        l = (0, c.bG)([sP.default], () => sP.default.onlyShowPreviewAppCollections) ? sf.W.PREVIEW : sf.W.ACTIVE,
        a = (0, c.bG)([J.A], () => J.A.getFetchState({ surface: sT, activeState: l })),
        n = (0, c.bG)([J.A], () => J.A.getCollections({ surface: sT, activeState: l }));
    i.useEffect(() => {
        S.An({ surface: sT, activeState: l });
    }, [l]);
    let r = i.useMemo(() => n?.filter((e) => e.type !== sy.Y.GALLERY), [n]);
    return a === J.e.ERROR
        ? (0, s.jsx)("div", { className: sR.Un, children: (0, s.jsx)(K, { className: sR.z3 }) })
        : (0, s.jsx)(es, {
              loading: a === J.e.FETCHING,
              children: r?.map((e, l) => (0, s.jsx)(sL, { collection: e, index: l, onSelectApplication: t }, l)),
          });
};
var sO = l(530472);
let sk = function (e) {
    let { onScroll: t, onSelectApplication: l } = e;
    return (0, s.jsxs)(z.A, {
        onScroll: t,
        children: [
            (0, s.jsx)(H.A, {
                title: U.intl.format(U.t.kEcZ97, {}),
                description: U.intl.string(U.t.XxFts9),
                children: (0, s.jsx)(B.A, {}),
            }),
            (0, s.jsx)(Y.A, {
                children: (0, s.jsxs)("div", {
                    className: sO.h,
                    children: [(0, s.jsx)(sD, { onSelectApplication: l }), (0, s.jsx)(sE.A, { padding: !0 })],
                }),
            }),
        ],
    });
};
var sG = l(806163),
    sM = l(994369),
    sU = l(475743),
    sw = l(191711),
    sV = l(781727);
function sF(e) {
    let { category: t, count: l, onSelectCategory: a, selected: r } = e,
        o = i.useCallback(() => {
            a(t.id);
        }, [t.id, a]),
        c = l.toLocaleString(tV.default.locale);
    return (0, s.jsxs)(eO.D, {
        onClick: o,
        className: n()(sV.L1, { [sV.wH]: r }),
        children: [
            (0, s.jsx)(g.E, { className: sV.UU, variant: "text-sm/medium", color: "text-strong", children: t.name }),
            (0, s.jsx)(g.E, { className: sV.U9, variant: "text-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
function sB(e) {
    let { countsByCategory: t, onSelectCategory: l, selectedCategoryId: a } = e,
        n = (0, c.bG)([P.A], () => P.A.getCategories()),
        r = i.useMemo(() => [(0, R.AU)(), ...n.filter((e) => (t[e.id] ?? 0) !== 0)], [n, t]);
    return 0 === r.length
        ? null
        : (0, s.jsx)("div", {
              className: sV.LZ,
              children: r.map((e) => {
                  let i = e.id,
                      n = t[i] ?? 0;
                  return (0, s.jsx)(sF, { category: e, count: n, selected: i === a, onSelectCategory: () => l(e) }, i);
              }),
          });
}
function sH(e) {
    let { countsByCategory: t, onSelectCategory: l, selectedCategoryId: a } = e,
        n = (0, c.bG)([P.A], () => P.A.getCategories()),
        r = i.useMemo(() => [(0, R.AU)(), ...n.filter((e) => (t[e.id] ?? 0) !== 0)], [n, t]),
        o = i.useMemo(() => r.map((e) => ({ id: `${e.id}`, name: e.name, count: t[e.id] ?? 0 })), [r, t]),
        d = i.useCallback(
            (e) => {
                let t = r.find((t) => t.id === Number(e));
                null != t && l(t);
            },
            [l, r],
        ),
        u = i.useMemo(() => r.find((e) => e.id === a), [a, r]);
    return 0 === o.length
        ? null
        : (0, s.jsxs)("div", {
              className: sV.kL,
              children: [
                  (0, s.jsx)(g.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: U.intl.string(U.t.f09BQJ),
                  }),
                  (0, s.jsx)(sw.A, {
                      items: o,
                      title: u?.name ?? "",
                      onSelect: d,
                      selected: `${a}`,
                      "aria-label": U.intl.string(U.t.WHdCwR),
                      variant: sw.H.FILLED,
                  }),
              ],
          });
}
var sY = l(307950),
    sz = l(842503);
let sX = function (e) {
    let { selectedCategoryId: t, searchAllCategories: l } = e,
        a = (0, c.bG)([P.A], () => P.A.getCategories()),
        n = i.useMemo(() => a.find((e) => e.id === t)?.name, [a, t]),
        r =
            t === R.lj || null == n
                ? U.intl.string(U.t["FVJt+8"])
                : U.intl.formatToPlainString(U.t.FjCaNB, { categoryName: n }),
        o = t === R.lj ? U.intl.string(U.t.GXiMta) : U.intl.format(U.t.JaLoFF, { onClick: l });
    return (0, s.jsxs)("div", {
        className: sY.kL,
        children: [
            (0, s.jsx)("img", { alt: "", src: sz, className: sY.Sl }),
            (0, s.jsx)(h.D, { variant: "heading-xl/semibold", className: sY.wx, children: r }),
            (0, s.jsx)(g.E, { variant: "text-md/normal", color: "text-default", children: o }),
        ],
    });
};
var sW = l(586720);
function sK(e) {
    let { onSelectApplication: t, onScroll: l } = e,
        a = (0, c.bG)([E.default], () => E.default.isAuthenticated()),
        n = i.useRef(null),
        r = (0, sG.zy)(),
        o = i.useRef(null),
        {
            query: d,
            page: u,
            categoryId: h,
        } = i.useMemo(() => {
            let e = new URLSearchParams(r.search),
                t = e.get("page"),
                l = null != t ? Number(t) : 1;
            return {
                query: e.get("q") ?? "",
                page: l,
                categoryId: Number(e.get("category_id")) ?? M.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID,
            };
        }, [r.search]),
        m = (0, c.bG)([P.A], () => P.A.getCategories()),
        p = i.useMemo(() => m?.find((e) => e.id === h), [m, h]),
        g = i.useCallback(
            (e) => {
                O(D.HAw.APP_DIRECTORY_SEARCHED, {
                    search_term: d,
                    num_results: e,
                    current_page: L.ev.SEARCH,
                    result_page: u,
                    category: p?.name,
                    category_id: p?.id,
                });
            },
            [d, u, p?.name, p?.id],
        );
    i.useEffect(() => {
        n.current?.scrollTo({ to: 0 }),
            d !== o.current && ((o.current = d), S.$P({ query: d, options: { source: sM.V.APP_DIRECTORY } })),
            S.$P({
                query: d,
                options: { categoryId: h, page: u, pageSize: M.PAGE_SIZE, source: sM.V.APP_DIRECTORY },
                onSuccessCallback: g,
            });
    }, [h, u, d, g]);
    let { fetchState: x, searchResults: v } = (0, c.cf)([ee.A], () => ({
            fetchState: ee.A.getFetchState({
                query: d,
                categoryId: h,
                page: u,
                pageSize: M.PAGE_SIZE,
                source: sM.V.APP_DIRECTORY,
            }),
            searchResults: ee.A.getSearchResults({
                query: d,
                categoryId: h,
                page: u,
                pageSize: M.PAGE_SIZE,
                source: sM.V.APP_DIRECTORY,
            }),
        })),
        j = (0, c.cf)([ee.A], () => {
            let e = ee.A.getSearchResults({ query: d, source: sM.V.APP_DIRECTORY });
            return null != e ? { [R.lj]: e.totalCount, ...e.countsByCategory } : {};
        }),
        A = (0, sU.Ay)(v),
        C = i.useMemo(() => (x === b.e.FETCHING ? A : v), [x, A, v]),
        I = i.useCallback(
            (e) => {
                V({ query: d, categoryId: h, page: e });
            },
            [h, d],
        ),
        _ = i.useCallback(
            (e) => {
                O(D.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: L.ev.SEARCH,
                }),
                    V({ query: d, categoryId: e.id });
            },
            [d],
        ),
        f = i.useCallback(
            (e, l) => {
                O(D.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: L.ev.SEARCH,
                    application_id: e,
                    load_id: C?.loadId,
                    search_term: d,
                    position: l,
                }),
                    t(e);
            },
            [C?.loadId, t, d],
        ),
        N = w();
    return (0, s.jsxs)("div", {
        className: sW.kL,
        children: [
            (0, s.jsx)(z.A, {
                ref: n,
                onScroll: l,
                children: (0, s.jsxs)("div", {
                    className: sW.WH,
                    children: [
                        a ? null : (0, s.jsx)("div", { className: sW.AW }),
                        (0, s.jsx)(Y.A, {
                            children: (0, s.jsxs)("div", {
                                className: sW.hQ,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: sW.$B,
                                        children: (0, s.jsx)(sH, {
                                            countsByCategory: j,
                                            selectedCategoryId: h,
                                            onSelectCategory: _,
                                        }),
                                    }),
                                    (0, s.jsx)(es, {
                                        loading: x === b.e.FETCHING,
                                        children:
                                            x === b.e.FETCHED && (null == C || C?.results.length === 0)
                                                ? (0, s.jsx)(sX, {
                                                      selectedCategoryId: h ?? N.id,
                                                      searchAllCategories: () => _(N),
                                                  })
                                                : (0, s.jsx)("div", {
                                                      className: sW.Qs,
                                                      children: C?.results.map((e, t) => {
                                                          if (e.type === $.j.APPLICATION) {
                                                              let l = e.data;
                                                              return (0, s.jsx)(
                                                                  e_,
                                                                  {
                                                                      application: l,
                                                                      onSelectApplication: (e) => f(e, t),
                                                                      showCategory: !0,
                                                                  },
                                                                  l.id,
                                                              );
                                                          }
                                                          return null;
                                                      }),
                                                  }),
                                    }),
                                    (0, s.jsx)(q.m, {
                                        className: sW.JV,
                                        totalCount: Math.min(
                                            (C?.totalPages ?? 0) * M.PAGE_SIZE,
                                            M.MAX_PAGES * M.PAGE_SIZE,
                                        ),
                                        pageSize: M.PAGE_SIZE,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: u,
                                        onPageChange: I,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: sW.pn,
                children: (0, s.jsx)("div", {
                    className: sW.jv,
                    children: (0, s.jsx)(sB, { countsByCategory: j, selectedCategoryId: h, onSelectCategory: _ }),
                }),
            }),
        ],
    });
}
var sZ = l(699716);
function s$(e) {
    let { applicationId: t, hideDetailHeaderButtons: l, onClickBack: a } = e,
        r = (0, c.bG)([b.A], () => b.A.getApplication(t)),
        [o, d] = i.useState(l),
        m = i.useCallback(() => {
            d(l);
        }, [l]);
    return (0, s.jsxs)("div", {
        className: sZ._u,
        children: [
            (0, s.jsx)("div", { className: sZ.w$, children: (0, s.jsx)(j.XQ, { icon: u.Z, onClick: a }) }),
            (0, s.jsx)(h.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: sZ.Rm,
                lineClamp: 1,
                children: r?.name,
            }),
            (0, s.jsx)("div", {
                className: n()(sZ.w$, sZ.xY, { [sZ.RK]: !l, [sZ.jD]: l && !o, [sZ.R]: l && o }),
                onTransitionEnd: m,
                children: null != r ? (0, s.jsx)(st, { application: r, size: "sm" }) : null,
            }),
        ],
    });
}
function sQ() {
    let e = i.useCallback(() => {
            let e, t;
            (e = new URL(location.href)),
                (t = `?redirect_to=${encodeURIComponent(e.pathname + e.search)}`),
                (0, _.pX)(D.BVt.REGISTER + t);
        }, []),
        t = i.useCallback(() => {
            G();
        }, []);
    return (0, s.jsxs)(m.$T, {
        color: m.Hv.BRAND,
        className: sZ.aL,
        children: [
            (0, s.jsx)(p.p, { size: "custom", color: "white", className: sZ.wm }),
            (0, s.jsx)(g.E, {
                tag: "span",
                color: "text-overlay-light",
                variant: "text-md/normal",
                children: U.intl.string(U.t.Ol3MIt),
            }),
            (0, s.jsxs)("div", {
                className: sZ.ll,
                children: [
                    (0, s.jsx)(m.Z_, { onClick: e, noticeType: D.kqX.LOGIN, children: U.intl.string(U.t["825cFy"]) }),
                    (0, s.jsx)(m.Z_, {
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
let sq = function () {
    var e;
    let t,
        l,
        a,
        o,
        m,
        p,
        g = (0, c.bG)([E.default], () => !E.default.isAuthenticated()),
        { onScroll: b, scrollPosition: T, resetScrollPosition: G } = (0, x.G)(),
        F = (0, L.R4)(),
        B = k(),
        H = F?.type === L.ev.CATEGORY ? F.categoryId : void 0,
        { applicationId: Y, section: z } = F?.type === L.ev.APPLICATION ? F : {},
        { query: X, categoryId: W } = F?.type === L.ev.SEARCH ? F : {},
        K = (0, c.bG)([P.A], () => P.A.getCategories()),
        Z = i.useMemo(() => [(0, R.AU)(), ...K], [K]),
        $ = i.useMemo(() => Z.find((e) => e.id === Number(W)), [Z, W]),
        {
            tabs: Q,
            selectedTab: q,
            onSelectTab: J,
        } = ((e = H?.toString()),
        (t = (0, c.bG)([P.A], () => P.A.getCategories())),
        (l = w()),
        (a = i.useMemo(
            () => [{ id: l.id.toString(), label: l.name }, ...t.map((e) => ({ id: e.id.toString(), label: e.name }))],
            [t, l],
        )),
        (o = (0, L.R4)()),
        (m = i.useCallback(
            (e) => {
                let t = a.find((t) => t.id === e);
                null != t &&
                    (O(D.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.label,
                        category_id: Number(t.id),
                        current_page: o?.type,
                    }),
                    (function (e) {
                        let { categoryId: t } = e,
                            l = { previousView: (0, L.R4)() };
                        (0, _.pX)(D.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t), { state: l });
                    })({ categoryId: e }));
            },
            [o?.type, a],
        )),
        (p = null != e && a.some((t) => t.id === e) ? e : a[0].id),
        { tabs: a, selectedTab: p, onSelectTab: m }),
        [ee, et] = i.useState(!0),
        el = L.h.useField("trackedOpenedFromExternalEntrypoint"),
        es = L.h.useField("sessionId"),
        ei = (0, c.bG)([f.default], () => f.default.getCurrentUser());
    i.useEffect(() => {
        if (!el && null == es) {
            let e = (0, I.YP)();
            N.default.track(D.HAw.APP_DIRECTORY_OPENED, { source: L.sW.EXTERNAL, session_id: e, user_id: ei?.id }),
                L.h.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: L.sW.EXTERNAL },
                    guildId: null,
                });
        }
    }, [es, el, ei?.id]),
        i.useEffect(() => {
            S.bW();
        }, []),
        i.useEffect(() => {
            B && S.wD();
        }, [B]),
        i.useEffect(() => L.tS.setState({ lastItem: F }), [F]);
    let ea = null != Y,
        en = F?.type === L.ev.SEARCH,
        {
            searchQuery: er,
            onSearchTextChange: eo,
            onClearSearch: ec,
            onSearchSubmit: ed,
        } = (function (e) {
            let { initialQuery: t = "" } = e,
                l = y.A.useField("query");
            i.useEffect(() => y.A.setState({ query: t }), [t]);
            let s = i.useCallback((e) => {
                    y.A.setState({ query: e });
                }, []),
                a = i.useCallback(() => {
                    y.A.setState({ query: "" });
                }, []),
                n = i.useCallback(() => {
                    let e = w();
                    O(D.HAw.APP_DIRECTORY_SEARCH_STARTED, {
                        search_term: l,
                        category: e.name,
                        current_page: L.ev.HOME,
                        category_id: e.id,
                    }),
                        V({ query: l });
                }, [l]);
            return { searchQuery: l, onSearchTextChange: s, onClearSearch: a, onSearchSubmit: n };
        })({ initialQuery: X ?? "" }),
        eu = y.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: eh,
            onCollapsedSearchBarClick: em,
            onSearchBarBlur: ep,
            tabsClassName: eg,
        } = (0, v.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === er.trim(),
            searchBarState: eu,
            setSearchBarState: (e) => y.A.setState({ searchBarState: e }),
        }),
        ex = i.useCallback(
            (e) => {
                J(e), en && ec(), G();
            },
            [en, ec, J, G],
        ),
        ev = i.useCallback(
            (e) =>
                (function (e) {
                    let { applicationId: t } = e,
                        l = { previousView: (0, L.R4)() };
                    (0, _.pX)(D.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t), { state: l });
                })({ applicationId: e }),
            [],
        ),
        ej = ea || en,
        eA = i.useCallback(() => {
            if (null != (0, L.Bn)()) (0, _.aX)();
            else {
                let e;
                (e = { previousView: (0, L.R4)() }), (0, _.pX)(D.BVt.GLOBAL_DISCOVERY_APPS, { state: e });
            }
        }, []),
        eC = i.useMemo(
            () =>
                (0, r.debounce)((e) => {
                    let { scrollTop: t, offsetHeight: l, scrollHeight: s, location: i } = e;
                    t > 0 &&
                        O(D.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
                            scroll_visible_percentile: (t + l) / s,
                            current_page: i,
                        });
                }, 200),
            [],
        ),
        eI = i.useCallback(
            (e, t) => {
                b(e),
                    eC({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: t,
                    });
            },
            [eC, b],
        );
    return (0, s.jsxs)("div", {
        className: n()(sZ.nw, { [sZ.Yz]: g }),
        children: [
            g ? (0, s.jsx)(sQ, {}) : null,
            (0, s.jsxs)("div", {
                className: sZ.WH,
                children: [
                    (0, s.jsxs)(j.Ay, {
                        variant: ej ? j.Z5.RELATIVE : j.Z5.OVERLAY,
                        children: [
                            !ej && (0, s.jsx)(j.ns, { scrollPosition: T }),
                            ea
                                ? (0, s.jsx)(s$, { applicationId: Y, hideDetailHeaderButtons: ee, onClickBack: eA })
                                : (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          en
                                              ? (0, s.jsx)(j.XQ, { icon: u.Z, onClick: eA })
                                              : (0, s.jsx)(j.T4, { icon: d.k }),
                                          en
                                              ? (0, s.jsx)(h.D, {
                                                    variant: "heading-lg/semibold",
                                                    color: "text-strong",
                                                    className: sZ.wL,
                                                    children:
                                                        null != X && "" !== X
                                                            ? U.intl.formatToPlainString(U.t.zHdzqW, { query: X })
                                                            : U.intl.formatToPlainString(U.t.Qhj5Br, {
                                                                  categoryName: $?.name ?? U.intl.string(U.t.E407b7),
                                                              }),
                                                })
                                              : (0, s.jsx)(A.A, {
                                                    className: eg,
                                                    tabs: Q,
                                                    selectedTab: q,
                                                    onTabSelect: ex,
                                                    onAvailableWidthChange: eh,
                                                }),
                                          (0, s.jsx)(C.A, {
                                              query: er,
                                              placeholder: U.intl.string(U.t["5h0QOP"]),
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
                        ? (0, s.jsx)(s_, {
                              onScroll: (e) => eI(e, L.ev.APPLICATION),
                              onSelectApplication: ev,
                              applicationId: Y,
                              initialTab: z,
                              onButtonsVisibilityChange: et,
                          })
                        : en
                          ? (0, s.jsx)(sK, { onSelectApplication: ev, onScroll: (e) => eI(e, L.ev.SEARCH) })
                          : q === M.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, s.jsx)(sk, { onScroll: (e) => eI(e, L.ev.HOME), onSelectApplication: ev })
                            : (0, s.jsx)(ey, {
                                  tabId: Number(q),
                                  onScroll: (e) => eI(e, L.ev.CATEGORY),
                                  onSelectApplication: ev,
                              }),
                ],
            }),
        ],
    });
};
