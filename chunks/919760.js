a.r(t), a.d(t, { default: () => nZ });
var n,
    l = a(627968),
    i = a(64700),
    s = a(503698),
    r = a.n(s),
    o = a(735438),
    c = a.n(o),
    d = a(17928),
    u = a(323384),
    h = a(548411),
    m = a(534514),
    p = a(417098),
    _ = a(111159),
    g = a(834730),
    x = a(711111),
    A = a(770472),
    f = a(737823),
    C = (a(749638), a(876622)),
    v = a(299593),
    b = a(965660),
    j = a(976860),
    I = a(495544),
    E = a(287809),
    N = a(954571),
    S = a(354138),
    y = a(416730),
    P = a(212534),
    R = a(38181),
    T = a(767599);
a(323874), a(14289), a(35956);
var L = a(323125),
    D = a(310419),
    k = a(652215);
function O(e, t) {
    let a = D.h.getField("sessionId"),
        n = D.h.getField("guildId"),
        l = D.h.getField("entrypoint")?.name,
        i = E.default.getCurrentUser(),
        s = { ...t, guild_id: n, directory_session_id: a, source: l, user_id: i?.id };
    return N.default.track(e, s);
}
function G() {
    return (0, d.bG)([I.default], () => I.default.isAuthenticated());
}
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let a in e) {
        let n = e[a];
        t.searchParams.set(a, n);
    }
    let a = t.pathname + t.search,
        n = (0, L.T2)(a, !1);
    (0, j.pX)(n);
}
var w = a(435220),
    U = a(985018);
function B() {
    return { id: w.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID, name: U.intl.string(U.t.ijDDwz) };
}
let V = function () {
        let { query: e, categoryId: t, page: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = { previousView: (0, D.R4)() },
            l = new URLSearchParams();
        null != e && "" !== e && l.set("q", e),
            null != t && t !== T.lj && l.set("category_id", t.toString()),
            null != a && a > 1 && l.set("page", a.toString()),
            (0, j.pX)(k.BVt.GLOBAL_DISCOVERY_APPS_SEARCH, { state: n, search: l.toString() });
    },
    F = (e) => {
        let {
            location: { state: t },
        } = (0, j.JK)();
        (0, j.bG)(e, t);
    };
var H = a(902119),
    Y = a(701508),
    z = a(979590),
    X = a(783531),
    K = a(624134);
let W = "/assets/3aa7e375b23dc56f.svg";
function $(e) {
    let { heading: t = U.intl.string(U.t.NGw8v2), body: a = U.intl.string(U.t["1XZRY4"]), className: n } = e;
    return (0, l.jsxs)("div", {
        className: r()(K.kL, n),
        children: [
            (0, l.jsx)("div", {
                className: K.ZS,
                children: (0, l.jsx)("img", { className: K.Sl, src: W, alt: U.intl.string(U.t["/UJaI2"]) }),
            }),
            (0, l.jsx)(m.D, { variant: "heading-xl/semibold", className: K.wx, children: t }),
            (0, l.jsx)(g.E, { variant: "text-md/normal", color: "text-default", children: a }),
        ],
    });
}
var Q = a(935573),
    Z = a(702841),
    J = a(932793),
    q = a(919796),
    ee = a(111042),
    et = a(651753),
    ea = a(289873),
    en = a(566984);
function el(e) {
    let { loading: t, children: a } = e;
    return (0, l.jsxs)("div", {
        className: en.kL,
        children: [
            t
                ? (0, l.jsx)("div", {
                      className: en.dc,
                      children: (0, l.jsx)(ea.y, { className: en.u1, type: ea.y.Type.SPINNING_CIRCLE }),
                  })
                : null,
            (0, l.jsx)("div", { className: r()({ [en.Lq]: t }), children: a }),
        ],
    });
}
var ei = a(230109),
    es = a(735991),
    er = a(635350),
    eo = a(486020),
    ec = a(775602),
    ed = a(435582),
    eu = a(283488),
    eh = a(607470),
    em = a(654107),
    ep = a(564096);
let e_ = 16 / 9,
    eg = 325 / 72;
function ex(e) {
    let { application: t, isHovered: a, botBannerUrl: n, botBannerUrlAnimated: s, iconURL: o } = e,
        c = (0, eu.A)({ applicationId: t.id, size: 600, names: ["embedded_cover"] }),
        d = i.useMemo(() => {
            let e = (0, es.Cx)(t);
            return null != e && null != e.activity_preview_video_asset_id
                ? (0, ed.A)(t.id, e.activity_preview_video_asset_id)
                : null;
        }, [t]),
        { imageUrl: u, imageUrlAnimated: h } = i.useMemo(
            () => ("fetched" === c.state && null != c.url ? { imageUrl: c.url } : { imageUrl: n, imageUrlAnimated: s }),
            [c.state, c.url, n, s],
        ),
        m = null != u,
        p = null != d;
    return "loading" === c.state
        ? null
        : p
          ? (0, l.jsxs)(l.Fragment, {
                children: [
                    m
                        ? (0, l.jsx)(eA, { isHovered: a, url: u, animatedUrl: void 0 })
                        : (0, l.jsx)(eh.A, { src: d, className: r()(ep._e, ep.IH), muted: !0 }),
                    (0, l.jsx)(ef, { isHovered: a, url: d, isVideo: !0 }),
                ],
            })
          : m
            ? (0, l.jsx)(eA, { isHovered: a, url: u, animatedUrl: h })
            : (0, l.jsx)(eC, { iconURL: o });
}
function eA(e) {
    let { isHovered: t, url: a, animatedUrl: n } = e,
        [s, o] = i.useState(!1);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("img", { src: a, alt: "", className: r()(ep._e, ep.IH, { [ep.Kc]: s }), onLoad: () => o(!0) }),
            null != n ? (0, l.jsx)(ef, { isHovered: t, url: n, isVideo: !1 }) : null,
        ],
    });
}
function ef(e) {
    let { isHovered: t, url: a, isVideo: n } = e,
        [s, o] = i.useState(!1),
        [c, d] = i.useState(t);
    return (i.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, l.jsx)("div", {
              className: r()(ep.hY, { [ep.Q]: !t, [ep.nR]: t && s }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: n
                  ? (0, l.jsx)(eh.A, {
                        src: a,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: ep.IH,
                        onLoadedData: () => o(!0),
                    })
                  : (0, l.jsx)("img", { src: a, alt: "", className: ep.IH, onLoad: () => o(!0) }),
          })
        : null;
}
function eC(e) {
    let { iconURL: t } = e,
        { backgroundGradient: a, hasFetchedColors: n } = (function (e) {
            let [t, a, n] = (0, em.rh)(e, "transparent");
            return { backgroundGradient: `linear-gradient(45deg, ${t}, ${n ?? a})`, hasFetchedColors: (0, em.D1)(e) };
        })(t);
    return (0, l.jsx)("div", { className: r()(ep.IH, ep.nY, { [ep.Kc]: n }), style: { backgroundImage: a } });
}
let ev = function (e) {
    let { application: t, bannerType: a, iconURL: n } = e,
        s = (0, d.bG)([ec.A], () => ec.A.useReducedMotion),
        [r, o] = i.useState(!1),
        c = i.useCallback(() => {
            o(!0);
        }, []),
        u = i.useCallback(() => o(!1), []),
        h = (0, es.Ag)(t),
        m = t.bot,
        { botBannerUrl: p, botBannerUrlAnimated: _ } = i.useMemo(
            () =>
                m?.id == null || m?.banner == null
                    ? {}
                    : {
                          botBannerUrl: (0, eo.z)({ id: m.id, banner: m.banner, canAnimate: !1, size: 600 }),
                          botBannerUrlAnimated: s
                              ? void 0
                              : (0, eo.z)({ id: m.id, banner: m.banner, canAnimate: !0, size: 600 }),
                      },
            [m?.id, m?.banner, s],
        );
    return (0, l.jsx)("div", {
        className: ep.cI,
        style: { aspectRatio: "card" === a ? e_ : eg },
        onMouseEnter: c,
        onFocus: c,
        onMouseLeave: u,
        onBlur: u,
        children:
            "card" === a && h
                ? (0, l.jsx)(ex, {
                      application: t,
                      isHovered: r,
                      botBannerUrl: null == p ? void 0 : p,
                      botBannerUrlAnimated: null == _ ? void 0 : _,
                  })
                : null != p
                  ? (0, l.jsx)(eA, { isHovered: r, url: p, animatedUrl: _ })
                  : (0, l.jsx)(eC, { iconURL: n }),
    });
};
var eb = a(92400);
let ej = function (e) {
    let { application: t, onSelectApplication: a, showCategory: n = !1 } = e,
        s = i.useRef(null),
        r = t.categories?.[0],
        [o, c] = i.useState(!1),
        d = i.useCallback((e) => {
            e && c(!0);
        }, []),
        u = (0, es.NO)(t),
        h = i.useCallback(() => {
            a(t.id);
        }, [a, t.id]),
        p = i.useMemo(() => (o ? eo.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 48 }) : void 0), [o, t]),
        _ = n && null != r;
    return (0, l.jsx)(ei.L, {
        innerRef: s,
        onChange: d,
        active: !o,
        children: (0, l.jsx)("div", {
            ref: s,
            className: eb.kL,
            children: (0, l.jsxs)(er.A, {
                className: eb.Nr,
                onClick: h,
                onContextMenu: () => {},
                "aria-label": U.intl.string(U.t.np1Wru),
                children: [
                    (0, l.jsxs)("div", {
                        className: eb.wx,
                        children: [
                            (0, l.jsx)("div", {
                                style: { width: "100%", display: "block", aspectRatio: 16 / 9 },
                                children: o ? (0, l.jsx)(ev, { application: t, bannerType: "card", iconURL: p }) : null,
                            }),
                            (0, l.jsx)("div", {
                                className: eb.H,
                                style: { height: 28 },
                                children: o
                                    ? (0, l.jsx)("img", {
                                          src: p,
                                          alt: "",
                                          className: eb.my,
                                          height: 48,
                                          width: 48,
                                          style: { borderWidth: 4, marginLeft: 12 },
                                      })
                                    : null,
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: eb.eV,
                        children: [
                            (0, l.jsx)("div", {
                                className: eb.gn,
                                children: (0, l.jsx)("div", {
                                    className: eb.DD,
                                    children: (0, l.jsx)(m.D, {
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        className: eb.JB,
                                        children: t.name,
                                    }),
                                }),
                            }),
                            _ || u
                                ? (0, l.jsxs)("div", {
                                      className: eb.op,
                                      children: [
                                          _
                                              ? (0, l.jsx)(g.E, {
                                                    className: eb.m4,
                                                    variant: "text-xs/medium",
                                                    color: "text-default",
                                                    children: r.name,
                                                })
                                              : null,
                                          _ && u
                                              ? (0, l.jsx)(g.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: "•",
                                                })
                                              : null,
                                          u
                                              ? (0, l.jsx)(g.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: U.intl.string(U.t["/eVltv"]),
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            (0, l.jsx)(g.E, {
                                className: eb.h_,
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
var eI = a(392896);
let eE = { results: [], totalPages: 0, loadId: "" },
    eN = function (e) {
        let { categoryId: t, onSelectApplication: a, resetScroll: n } = e,
            [s, r] = i.useState(1),
            o = i.useCallback((e) => {
                r(e);
            }, []);
        i.useEffect(() => {
            r(1);
        }, [t]);
        let c = i.useMemo(() => ({ query: w.EMPTY_QUERY, page: s, pageSize: w.PAGE_SIZE, categoryId: t }), [s, t]),
            d = (0, Z.bG)([et.A], () =>
                et.A.getFetchState({ query: w.EMPTY_QUERY, page: s, pageSize: w.PAGE_SIZE, categoryId: t }),
            ),
            u = (0, Z.cf)([et.A], () => et.A.getSearchResults(c) ?? eE),
            h = (0, q.A)(u) ?? eE,
            { results: m, totalPages: p, loadId: _ } = i.useMemo(() => (d === ee.e.FETCHING ? h : u), [d, h, u]),
            g = i.useMemo(() => m?.filter((e) => e.type === Q.j.APPLICATION), [m]),
            x = i.useCallback((e) => {
                let { page: t, activeCategoryId: a, onSuccessCallback: n, guildId: l, fetchCounts: i } = e;
                i && S.$P({ query: w.EMPTY_QUERY, guildId: l }),
                    S.$P({
                        query: w.EMPTY_QUERY,
                        guildId: l,
                        options: { page: t, pageSize: w.PAGE_SIZE, categoryId: a },
                        onSuccessCallback: n,
                    });
            }, []);
        i.useEffect(() => {
            n(), x({ page: s, activeCategoryId: t, onSuccessCallback: () => {} });
        }, [t, n, x, s]);
        let A = i.useCallback(
            (e, t) => {
                O(k.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: D.ev.SEARCH,
                    application_id: e,
                    load_id: _,
                    position: t,
                }),
                    a(e);
            },
            [_, a],
        );
        return d === ee.e.ERROR
            ? (0, l.jsx)("div", { className: eI.Un, children: (0, l.jsx)($, { className: eI.z3 }) })
            : (0, l.jsxs)(el, {
                  loading: d === ee.e.FETCHING,
                  children: [
                      (0, l.jsx)("div", {
                          className: eI.Qs,
                          children: g?.map((e, t) => {
                              if (e.type === Q.j.APPLICATION) {
                                  let a = e.data;
                                  return (0, l.jsx)(ej, { application: a, onSelectApplication: (e) => A(e, t) }, a.id);
                              }
                              return null;
                          }),
                      }),
                      (0, l.jsx)(J.m, {
                          className: eI.JV,
                          totalCount: Math.min(p * w.PAGE_SIZE, w.MAX_PAGES * w.PAGE_SIZE),
                          pageSize: w.PAGE_SIZE,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: s,
                          onPageChange: o,
                      }),
                  ],
              });
    };
var eS = a(504797);
let ey = function (e) {
    let { tabId: t, onSelectApplication: a, onScroll: n } = e,
        s = i.useRef(null),
        r = i.useCallback(() => {
            s.current?.scrollTo({ to: 0 });
        }, []),
        o = (0, d.bG)([R.A], () => R.A.getCategories()),
        c = i.useMemo(() => o.find((e) => e.id === t), [o, t]),
        u = i.useMemo(
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
    return (0, l.jsxs)(X.A, {
        onScroll: n,
        ref: s,
        children: [
            (0, l.jsx)(Y.A, { title: c?.name ?? "", description: u, children: (0, l.jsx)(H.A, {}) }),
            (0, l.jsx)(z.A, {
                children:
                    null == c
                        ? (0, l.jsx)("div", { className: eS.U, children: (0, l.jsx)($, { className: eS.z }) })
                        : (0, l.jsx)(eN, { categoryId: c.id, onSelectApplication: a, resetScroll: r }),
            }),
        ],
    });
};
var eP = a(123791),
    eR = a(761508),
    eT = a(759057);
let eL = function (e) {
    let { tabs: t, onTabSelect: a, selectedTab: n, className: i } = e;
    return (0, l.jsx)(eR.V, {
        type: "top-pill",
        selectedItem: n,
        onItemSelect: a,
        className: i,
        children: t.map((e, t) => {
            let { id: a, label: n, count: i } = e;
            return (0, l.jsx)(
                eR.V.Item,
                {
                    id: a,
                    className: r()(eT.V, { [eT.r]: 0 === t }),
                    "aria-label": n,
                    children: null != i && i > 0 ? `${n} (${i})` : n,
                },
                a,
            );
        }),
    });
};
var eD = a(82293),
    ek = a(403362),
    eO = a(939249),
    eG = a(175671),
    eM = a(259407),
    ew = a(451988),
    eU = a(408278),
    eB = a(921853),
    eV = a(477155),
    eF = a(320448),
    eH = a(935286),
    eY = a(228366),
    ez = a(725951),
    eX = a(625494),
    eK = a(332412);
let eW = 16 / 9;
class e$ extends i.PureComponent {
    static defaultProps = { includeHitboxPadding: !0 };
    componentDidMount() {
        eX._.subscribe(k.jej.CAROUSEL_PREV, this.handlePrevious), eX._.subscribe(k.jej.CAROUSEL_NEXT, this.handleNext);
    }
    componentWillUnmount() {
        eX._.unsubscribe(k.jej.CAROUSEL_PREV, this.handlePrevious),
            eX._.unsubscribe(k.jej.CAROUSEL_NEXT, this.handleNext);
    }
    render() {
        let {
                current: e,
                count: t,
                includeHitboxPadding: a,
                arrowClassName: n,
                paginationDotClassName: i,
                paginationDotSelectedClassName: s,
                paginationArrowIconType: o = "arrow",
            } = this.props,
            d = r()(eK.sb, { [eK.JU]: a }, n);
        return (0, l.jsxs)("div", {
            className: r()(eK.ne, this.props.className),
            children: [
                (0, l.jsx)("div", {
                    className: d,
                    children: (0, l.jsx)(eU.K, {
                        variant: "icon-only",
                        icon: "caret" === o ? eB.n : eV.r,
                        "aria-label": U.intl.string(U.t.vgfxaA),
                        onClick: this.handlePrevious,
                    }),
                }),
                (0, l.jsx)("div", {
                    className: eK.r$,
                    children: c().times(t, (t) =>
                        (0, l.jsx)(
                            eO.D,
                            {
                                onClick: () => this.handleDotClick(t),
                                className: t === e ? r()(eK.NU, s) : r()(eK.Lw, i),
                                "aria-label": U.intl.formatToPlainString(U.t["2SXOrM"], { pageNumber: t + 1 }),
                            },
                            `dot-${t}`,
                        ),
                    ),
                }),
                (0, l.jsx)("div", {
                    className: d,
                    children: (0, l.jsx)(eU.K, {
                        variant: "icon-only",
                        icon: "caret" === o ? eF._ : eH.E,
                        "aria-label": U.intl.string(U.t.XiOHRX),
                        onClick: this.handleNext,
                    }),
                }),
            ],
        });
    }
    handleDotClick = (e) => {
        let { onSetItem: t, onIntentionalChange: a, current: n } = this.props;
        a?.(n, e, "jump"), t(e);
    };
    handleNext = () => {
        let { onIntentionalChange: e, current: t, onChangePage: a } = this.props,
            n = a(1);
        e?.(t, n, "next");
    };
    handlePrevious = () => {
        let { onIntentionalChange: e, current: t, onChangePage: a } = this.props,
            n = a(-1);
        e?.(t, n, "previous");
    };
}
class eQ extends i.PureComponent {
    timer = new ew.IX();
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
        let a = (e, t) => !e.initialPaused && !t.paused,
            n = a(this.props, this.state),
            l = a(e, t);
        n && !l ? this.startTimer() : !n && l && this.stopTimer();
        let { items: i } = this.props,
            { visibleIndex: s } = this.state;
        null == i[s] && this.changeItem(i, 1);
    }
    startTimer() {
        null != this.props.delay && this.timer.start(this.props.delay, this.nextItem);
    }
    stopTimer() {
        null != this.props.delay && this.timer.stop();
    }
    changeItem(e, t) {
        let a = this.state.visibleIndex + t;
        a < 0 ? (a = e.length - 1) : a > e.length - 1 && (a = 0);
        let { onChangeItem: n } = this.props;
        n?.(e[a], this.state.visibleIndex, a);
        let l = t > 0 ? ez.f.LEFT : ez.f.RIGHT;
        return this.setState({ visibleIndex: a, direction: l }), a;
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
                className: a,
                slideAnimatorClassName: n,
                slideAnimatorSpringSettings: i,
                slideAnimatorFadeInOut: s,
                paginationClassName: o,
                paginationArrowClassName: c,
                paginationArrowIconType: d,
                paginationDotClassName: u,
                paginationDotSelectedClassName: h,
                themedPagination: m,
                includeHitboxPadding: p,
                style: _,
                aspectRatio: g,
                children: x,
            } = this.props,
            { visibleIndex: A } = this.state;
        return (0, l.jsxs)("div", {
            className: eK.zr,
            children: [
                (0, l.jsxs)("div", {
                    className: r()(eK.Cf, a),
                    style: _,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    children: [
                        (0, l.jsx)("div", {
                            style: { aspectRatio: g },
                            children: (0, l.jsx)(ez.A, {
                                className: r()(eK.Dk, n),
                                step: A,
                                direction: this.getCurrentDirection(),
                                springSettings: i,
                                fadeInOut: s,
                                children: t(e[A], A),
                            }),
                        }),
                        e.length > 1 &&
                            (0, l.jsx)(e$, {
                                className: r()(o, m ? eK.S$ : eK.X$),
                                arrowClassName: c,
                                includeHitboxPadding: p,
                                current: A,
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
                null != x && x({ step: A, direction: this.getCurrentDirection() }),
            ],
        });
    }
    handleSetItem = (e) => {
        let { visibleIndex: t } = this.state,
            { items: a } = this.props;
        this.changeItem(a, e - t);
    };
    handleMouseEnter = () => {
        this.setState({ paused: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ paused: !1 });
    };
    handleIntentionalChange = (e, t, a) => {
        let { items: n, onIntentionalChange: l } = this.props;
        return l?.(n[t], e, t, a);
    };
}
var eZ = a(619517),
    eJ = a(248643),
    eq = a(34337),
    e0 = a(615300),
    e1 = a(456412),
    e7 = a(133296),
    e6 = a(848752),
    e9 = a(452282),
    e8 = a(821209),
    e5 = a(795574);
let e3 = `rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=${k.NzX}`,
    e4 = { width: 640, height: 360, margin: 15 },
    e2 = { width: 880, height: 495, margin: 20 },
    te = { width: 1920, height: 1080 },
    tt = { width: 1280, height: 720 },
    ta = (e) => (0, eq.$o)({ ...e, className: e5.tN, mediaPlayerClassName: e5.yf }),
    tn = (e) => (0, l.jsx)(eZ.Ay, { ...e }),
    tl = (e) => {
        let t,
            a,
            n,
            {
                item: i,
                size: s,
                onPlay: r,
                onEnded: o,
                onClick: c,
                playable: d,
                volume: u,
                isMuted: h,
                onVolumeChange: m,
                onMute: p,
            } = e;
        if (i.type === k.geh.YOUTUBE_VIDEO)
            (t = { url: (0, k.PE$)(i.youtubeVideoId), ...te }),
                (a = { url: `${(0, k.uJ2)(i.youtubeVideoId)}?${e3}`, ...tt }),
                (n = eM.mt.YOUTUBE);
        else {
            let e = null != i.width ? i.width : 0,
                n = null != i.height ? i.height : 0;
            (t = { url: i.thumbnailSrc, width: e, height: n }),
                (a = { url: i.src, proxyURL: i.src, width: e, height: n });
        }
        let _ = (0, l.jsx)(eG.rr, {
            href: null,
            thumbnail: t,
            video: a,
            provider: n,
            allowFullScreen: !0,
            maxHeight: s.height,
            maxWidth: s.width,
            onPlay: r,
            onEnded: o,
            playable: d,
            className: e5.Ki,
            volume: u,
            onVolumeChange: m,
            autoMute: h,
            onMute: p,
            autoPlay: d,
            renderVideoComponent: ta,
            renderImageComponent: tn,
            renderLinkComponent: eq.bU,
        });
        return d ? _ : (0, l.jsx)(eO.D, { className: e5.AU, onClick: c, children: _ });
    },
    ti = () =>
        (0, l.jsx)("div", {
            className: e5.eM,
            children: (0, l.jsx)(e8.A, { inactive: !0, className: e5.J6, renderLinkComponent: eq.bU }),
        });
class ts extends i.PureComponent {
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
        eX._.subscribe(k.jej.CAROUSEL_PREV, this.manualPrevious), eX._.subscribe(k.jej.CAROUSEL_NEXT, this.manualNext);
    }
    componentWillUnmount() {
        eX._.unsubscribe(k.jej.CAROUSEL_PREV, this.manualPrevious),
            eX._.unsubscribe(k.jej.CAROUSEL_NEXT, this.manualNext);
    }
    getItemSize = () => {
        let { width: e } = this.props,
            t = e2;
        return null != e && e < t.width && (t = e4), t;
    };
    getStyle(e, t) {
        let a = t.interpolate({ inputRange: [0, 1], outputRange: [1, 0], extrapolate: e0.A.Extrapolate.CLAMP });
        return {
            opacity: t.interpolate({ inputRange: [0, 1], outputRange: [0.3, 1], extrapolate: e0.A.Extrapolate.CLAMP }),
            filter: e0.A.template`grayscale(${a})`,
        };
    }
    setItem = (e, t) => {
        let {
                props: { items: a, onIntentionalChange: n },
                state: { currentIndex: l },
            } = this,
            i = (0, e9.U3)(l, a.length),
            s = (0, e9.U3)(e, a.length),
            r = 1 === Math.abs(e - i) || (e === a.length - 1 && 0 === i) || (0 === e && i === a.length - 1);
        this.setState({ playingVideo: !1, currentIndex: s, animate: r, hasInteracted: t }),
            t && null != n && n(a[s], i, s);
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
        let { onCurrentItemClick: a } = this.props;
        null != a && a(e, t), this.setState({ hasInteracted: !0 });
    }
    handleEdgeItemMouseEnter(e) {
        let { currentIndex: t } = this.state;
        e < t ? this.setState({ hoveringPreviousItem: !0 }) : e > t && this.setState({ hoveringNextItem: !0 });
    }
    handleEdgeItemMouseLeave = () => {
        this.setState({ hoveringPreviousItem: !1, hoveringNextItem: !1 });
    };
    renderCarouselImage = (e, t, a) =>
        a
            ? (0, l.jsx)(eO.D, {
                  onClick: () => this.handleCurrentItemClick(e, t),
                  className: e5.AU,
                  children: (0, l.jsx)("img", { src: e.src, alt: "", className: e5.NP }),
              })
            : (0, l.jsx)(eO.D, {
                  onClick: () => this.setItem(t, !0),
                  className: e5.AU,
                  children: (0, l.jsx)("img", { alt: "", className: e5.tv, src: e.src, draggable: !1 }),
              });
    renderItem = (e, t, a) => {
        let { currentIndex: n, volume: i, isMuted: s } = this.state,
            o = t === (0, e9.U3)(n, this.props.items.length);
        return (0, l.jsx)(e0.A.div, {
            className: r()(e5.AS, { [e5.Xt]: o }),
            style: null != a ? this.getStyle(t, a) : null,
            onMouseEnter: o ? null : () => this.handleEdgeItemMouseEnter(t),
            onMouseLeave: o ? null : this.handleEdgeItemMouseLeave,
            children:
                e.type === k.geh.VIDEO || e.type === k.geh.YOUTUBE_VIDEO
                    ? (0, l.jsx)(tl, {
                          item: e,
                          size: this.getItemSize(),
                          onPlay: this.handlePlay,
                          onEnded: this.handleEnded,
                          playable: o,
                          onClick: () => this.handleVideoClick(t),
                          volume: i,
                          onVolumeChange: this.handleVolumeChange,
                          isMuted: s,
                          onMute: this.handleMute,
                      })
                    : this.renderCarouselImage(e, t, o),
        });
    };
    renderCarousel() {
        let { items: e } = this.props,
            { currentIndex: t, animate: a, hoveringPreviousItem: n, hoveringNextItem: i } = this.state,
            s = (0, l.jsx)(e9.Ay, {
                items: e,
                itemSize: this.getItemSize(),
                renderItem: this.renderItem,
                currentIndex: t,
                animate: a,
                edgeItems: 2,
            });
        return e.length <= 1
            ? s
            : (0, l.jsxs)("div", {
                  className: e5.HY,
                  children: [
                      s,
                      (0, l.jsx)(e6.Q8, { onClick: this.manualPrevious, className: r()(e5.UE, { [e5.h_]: n }) }),
                      (0, l.jsx)(e6.Oj, { onClick: this.manualNext, className: r()(e5.UE, { [e5.h_]: i }) }),
                  ],
              });
    }
    getPaginationSrc(e) {
        return e.type === k.geh.YOUTUBE_VIDEO
            ? (0, k.PE$)(e.youtubeVideoId)
            : e.type === k.geh.IMG
              ? e.src
              : e.type === k.geh.VIDEO
                ? e.thumbnailSrc
                : null;
    }
    renderPaginationItem = (e, t) => {
        let { currentIndex: a } = this.state,
            n = a === t;
        return (0, l.jsxs)(
            "div",
            {
                className: r()(e5.Yw, n ? e5.sM : e5.N7),
                children: [
                    (0, l.jsx)("img", {
                        alt: null == e.alt ? t : e.alt,
                        className: e5.Pr,
                        src: this.getPaginationSrc(e),
                        draggable: !1,
                    }),
                    e.type === k.geh.YOUTUBE_VIDEO || e.type === k.geh.VIDEO ? (0, l.jsx)(ti, {}) : null,
                    n ? (0, l.jsx)("div", { className: e5.SD }) : null,
                ],
            },
            `page-${t}`,
        );
    };
    render() {
        let { items: e, className: t, autoplayInterval: a, paused: n } = this.props,
            { currentIndex: i, playingVideo: s, hasInteracted: r } = this.state;
        return (0, l.jsxs)(e7.A, {
            pauseOnHover: !0,
            onInterval: this.autoNext,
            interval: a,
            className: t,
            disable: s || r || n,
            children: [
                this.renderCarousel(),
                (0, l.jsx)("div", {
                    className: e5.X$,
                    children: (0, l.jsx)(e6.Ay, {
                        renderItem: this.renderPaginationItem,
                        scrollToPadding: 85,
                        items: e,
                        selectedIndex: i,
                        onSetItem: (e) => this.setItem(e, !0),
                        paginationContainerClass: e5.XG,
                        align: e.length < 6 ? e6.Ay.Align.LEFT : e6.Ay.Align.CENTER,
                    }),
                }),
            ],
        });
    }
}
(0, e1.A)(ts);
var tr = a(665513);
let to = (e) => {
        let { className: t, ...a } = e;
        return (0, l.jsx)(eJ.A, {
            ...a,
            className: r()(tr.Zy, t),
            mediaPlayerClassName: tr.Zy,
            renderLinkComponent: eq.bU,
        });
    },
    tc = (e) => {
        let { containerClassName: t, className: a, ...n } = e;
        return (0, l.jsx)(eZ.Ay, { ...n, className: r()(a, t) });
    },
    td = { width: 1280, height: 720 },
    tu = { width: 640, height: 360 },
    th = `rel=0&iv_load_policy=3&showinfo=0&modestbranding=1&pageType=${k.NzX}`,
    tm = (e) => {
        let t,
            a,
            n,
            { item: i, onPlay: s, volume: r, onVolumeChange: o, onMute: c, isMuted: d, autoPlay: u } = e;
        if (i.type === k.geh.YOUTUBE_VIDEO)
            (t = { url: (0, k.PE$)(i.youtubeVideoId), ...td }),
                (a = { url: `${(0, k.uJ2)(i.youtubeVideoId)}?${th}`, ...tu }),
                (n = eM.mt.YOUTUBE);
        else {
            let e = null != i.width ? i.width : 0,
                n = null != i.height ? i.height : 0;
            (t = { url: i.thumbnailSrc, width: e, height: n }),
                (a = { url: i.src, proxyURL: i.src, width: e, height: n });
        }
        return (0, l.jsx)("div", {
            className: tr.x,
            children: (0, l.jsx)(eG.rr, {
                className: tr.Zy,
                iframeWrapperClassName: tr.Zy,
                href: null,
                thumbnail: t,
                video: a,
                provider: n,
                maxHeight: e4.height,
                maxWidth: "small",
                onPlay: s,
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
class tp extends i.PureComponent {
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
            e[0].type === k.geh.IMG &&
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
            e.type === k.geh.IMG &&
                this.setState({
                    imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now()),
                });
    };
    handleIntentionalChange = (e, t, a, n) => {
        this.setState({ hasInteracted: !0 });
        let { onIntentionalChange: l } = this.props;
        null != l && l(e, t, a, n);
    };
    handleCurrentItemClick(e, t) {
        let { onCurrentItemClick: a } = this.props;
        null != a && a(e, t), this.setState({ hasInteracted: !0 });
    }
    handleOnErrorImg = (e) => {
        this.setState({ status: new Map(this.state.status).set(e.target.src, "errored") });
    };
    handleOnLoadImg = (e) => {
        let { onImageLoad: t } = this.props;
        this.setState({ status: new Map(this.state.status).set(e.target.src, "loaded") });
        let a = this.state.imageLoadingStartTime.get(e.target.src),
            n = null != a ? Date.now() - a : void 0;
        t?.({ src: e.target.src, loadTimeMs: n });
    };
    renderItem = (e, t) => {
        let a,
            { isMuted: n, volume: i } = this.state,
            { videoAutoPlay: s } = this.props;
        switch (e.type) {
            case k.geh.YOUTUBE_VIDEO:
            case k.geh.VIDEO:
                a = (0, l.jsx)(tm, {
                    item: e,
                    onPlay: this.handlePlay,
                    isMuted: n,
                    volume: i,
                    onVolumeChange: this.handleVolumeChange,
                    onMute: this.handleMute,
                    autoPlay: s,
                });
                break;
            case k.geh.IMG:
                if ("errored" === this.state.status.get(e.src)) {
                    let e = (0, l.jsx)(m.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t.UvDfMz) });
                    return (0, l.jsx)("div", {
                        className: tr.Un,
                        children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e,
                    });
                }
                {
                    let t = e.alt ?? U.intl.string(U.t.X4IxWL);
                    a = (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(ea.y, {
                                className: r()(tr.u1, { [tr.R]: void 0 !== this.state.status.get(e.src) }),
                                type: ea.y.Type.SPINNING_CIRCLE,
                            }),
                            (0, l.jsx)("img", {
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
        return (0, l.jsx)(eO.D, { className: tr.Pj, onClick: () => this.handleCurrentItemClick(e, t), children: a });
    };
    render() {
        let { items: e, autoplayInterval: t, className: a, paused: n, themedPagination: i } = this.props,
            { hasInteracted: s } = this.state;
        return (0, l.jsx)(eQ, {
            items: e.slice(0, 12),
            delay: t,
            initialPaused: n || s,
            renderItem: this.renderItem,
            className: r()(tr.Gt, a),
            themedPagination: i,
            onIntentionalChange: this.handleIntentionalChange,
            onChangeItem: this.handleChangeItem,
        });
    }
}
var t_ = a(256905),
    tg = a(531685),
    tx = a(427019);
function tA(e) {
    let { application: t, carouselItems: a } = e,
        n = (0, d.bG)([tg.A], () => tg.A.isFocused()),
        s = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("img", { className: tx.M, src: W, "aria-hidden": !0, alt: "" }),
                (0, l.jsx)(m.D, { variant: "heading-xl/semibold", children: U.intl.string(U.t.UvDfMz) }),
            ],
        });
    a.forEach((e, n) => {
        e.alt = U.intl.formatToPlainString(U.t.sSEhHb, { index: n + 1, totalImages: a.length, name: t.name });
    });
    let r = i.useCallback(
        (e, t) => {
            if (e.type === k.geh.IMG) {
                let t = a.filter((e) => e.type === k.geh.IMG),
                    n = t.findIndex((t) => t === e);
                if (n < 0) return;
                let l = t.map((e) => {
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
                    items: l,
                    startingIndex: n,
                    shouldHideMediaOptions: !0,
                    location: "GlobalDiscoveryAppsDetailCarousel",
                });
            }
        },
        [a],
    );
    return 0 === a.length
        ? null
        : (0, l.jsx)(tp, {
              className: tx.D,
              themedPagination: !0,
              items: a,
              autoplayInterval: 8e3,
              paused: !n,
              videoAutoPlay: !0,
              onCurrentItemClick: r,
              errorComponent: s,
          });
}
var tf = a(168186);
a(827669);
var tC = a(733975);
function tv(e) {
    let { application: t } = e,
        a = i.useMemo(() => {
            let e = t.directory_entry?.popular_application_commands;
            return null != e
                ? e.map((e) => (0, tf.Oe)({ rootCommand: e, command: e, applicationId: e.application_id }))
                : [];
        }, [t]);
    return 0 === a.length
        ? null
        : (0, l.jsxs)("div", {
              className: tC.hd,
              children: [
                  (0, l.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.swIgTL),
                  }),
                  (0, l.jsx)("div", {
                      className: tC.hQ,
                      children: a.map((e) =>
                          (0, l.jsxs)(
                              "div",
                              {
                                  className: tC.dO,
                                  children: [
                                      (0, l.jsxs)(g.E, {
                                          className: tC.p6,
                                          variant: "code",
                                          color: "text-strong",
                                          children: ["/", e.displayName],
                                      }),
                                      (0, l.jsx)(g.E, {
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
var tb = a(534890),
    tj = a(812991),
    tI = a(177953),
    tE = a(203363),
    tN = a(975571),
    tS = a(76843),
    ty = a(169795);
let tP = tN.A.getArticleURL(k.MVz.BOT_DATA_ACCESS);
function tR(e) {
    let { application: t } = e,
        { hasMessageContent: a, hasGuildPresences: n, hasGuildMembers: s, hasIntents: r } = (0, tE.Z)(t),
        o = i.useCallback(() => {
            null != t.privacy_policy_url && (0, tS.h)({ href: t.privacy_policy_url });
        }, [t.privacy_policy_url]);
    return (0, l.jsxs)("div", {
        className: ty.hd,
        children: [
            (0, l.jsx)(m.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: U.intl.string(U.t.QzDgMq),
            }),
            (0, l.jsxs)("div", {
                className: ty.hQ,
                children: [
                    r &&
                        (0, l.jsxs)("ul", {
                            className: ty.In,
                            children: [
                                (0, l.jsx)(m.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-default",
                                    children: U.intl.string(U.t.U6KH5S),
                                }),
                                a &&
                                    (0, l.jsx)(tT, {
                                        icon: tb.o,
                                        heading: U.intl.string(U.t.gJpBO2),
                                        body: U.intl.string(U.t["L+QVbh"]),
                                    }),
                                n &&
                                    (0, l.jsx)(tT, {
                                        icon: tj.n,
                                        heading: U.intl.string(U.t["jo0oj/"]),
                                        body: U.intl.string(U.t.Dm0jqx),
                                    }),
                                s &&
                                    (0, l.jsx)(tT, {
                                        icon: tI.n,
                                        heading: U.intl.string(U.t.QZql7O),
                                        body: U.intl.string(U.t["ez/N/R"]),
                                    }),
                            ],
                        }),
                    (0, l.jsx)(g.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: U.intl.format(U.t.b6nqk0, { helpCenterUrl: tP }),
                    }),
                    null != t.privacy_policy_url &&
                        (0, l.jsx)(g.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: ty.hM,
                            children: U.intl.format(U.t.agYVY5, { onClick: o }),
                        }),
                ],
            }),
        ],
    });
}
function tT(e) {
    let { icon: t, heading: a, body: n } = e;
    return (0, l.jsxs)("li", {
        className: ty.KT,
        children: [
            (0, l.jsx)(t, { color: "currentColor", size: "md" }),
            (0, l.jsxs)("div", {
                className: ty.D6,
                children: [
                    (0, l.jsx)(m.D, { variant: "heading-md/semibold", color: "text-default", children: a }),
                    (0, l.jsx)(g.E, { variant: "text-md/normal", color: "text-default", children: n }),
                ],
            }),
        ],
    });
}
a(321073);
var tL = a(990078),
    tD = a(319060),
    tk = a(664121),
    tO = a(573435),
    tG = a(773669),
    tM = a(240248),
    tw = a(805936),
    tU =
        (((n = {})[(n.SMALL = (0, tM.xI)(tD.A.GUILD_COUNT_SMALL_ICON_SIZE))] = "SMALL"),
        (n[(n.LARGE = (0, tM.xI)(tD.A.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE"),
        n);
let tB = { [tU.SMALL]: tw.Ps, [tU.LARGE]: tw.XY },
    tV = { [tU.SMALL]: tw.Bx, [tU.LARGE]: tw.J3 };
function tF(e) {
    let {
            application: t,
            mutualGuilds: a,
            mutualGuildShownMax: n = 4,
            className: s,
            textVariant: o = "text-sm/normal",
            compact: c,
            guildIconSize: u = tU.LARGE,
            guildsClassName: h,
            children: m,
        } = e,
        p = (0, d.bG)([tG.default], () => tG.default.locale),
        _ = new Intl.ListFormat(p),
        x = t.directory_entry?.guild_count ?? 0,
        A = a?.length ?? 0,
        f = Math.max(0, x - A),
        { shownMutualGuilds: C, hiddenMutualGuilds: v } = i.useMemo(() => {
            let e = [],
                t = [];
            return (
                a?.forEach((a) => {
                    e.length < n && null != a.icon ? e.push(a) : t.push(a);
                }),
                e.length === n && t.length > 0 && (t.push(e[n - 1]), (e = e.slice(0, n - 1))),
                { shownMutualGuilds: e, hiddenMutualGuilds: t }
            );
        }, [a, n]),
        b = v.length,
        j = (function (e, t, a, n, l) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === a) return U.intl.formatToPlainString(U.t.pnzE1t, { mutualGuildCount: t });
            let i = t > 0 ? U.t.YR8PSL : U.t.GQjq6c,
                s = new Intl.NumberFormat(n, { notation: l ? "compact" : "standard", compactDisplay: "short" });
            return U.intl.formatToPlainString(i, {
                guildCount: s.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: s.format(a),
            });
        })(x, A, f, p, c);
    return 0 === C.length && null == j
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  m,
                  (0, l.jsxs)("div", {
                      className: r()(s, tw.iE),
                      children: [
                          (0, l.jsx)("div", {
                              className: r()(tw.Pt, h),
                              children:
                                  C.length > 0
                                      ? (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                C.map((e, t) => {
                                                    let a = t === C.length - 1 && 0 === b,
                                                        n = eo.Ay.getGuildIconURL({
                                                            id: e.id,
                                                            icon: e.icon,
                                                            size: u,
                                                            canAnimate: !1,
                                                        }),
                                                        s = (0, l.jsx)(tL.m, {
                                                            text: e.name,
                                                            position: "top",
                                                            children: (0, l.jsx)("img", {
                                                                className: r()(tw.Kk, tV[u]),
                                                                src: n,
                                                                alt: "",
                                                            }),
                                                        });
                                                    return a
                                                        ? (0, l.jsx)(i.Fragment, { children: s }, e.id)
                                                        : (0, l.jsx)(
                                                              tO.Ay,
                                                              {
                                                                  className: tw.SA,
                                                                  height: u,
                                                                  width: u,
                                                                  mask: tO.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                                                                  children: s,
                                                              },
                                                              e.id,
                                                          );
                                                }),
                                                b > 0
                                                    ? (0, l.jsx)(tL.m, {
                                                          text: U.intl.formatToPlainString(U.t.m6oRrA, {
                                                              appNames: _.format(v.map((e) => e.name)),
                                                          }),
                                                          position: "top",
                                                          children: (0, l.jsxs)("div", {
                                                              className: r()(tw.S_, tB[u]),
                                                              children: ["+", b],
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : (0, l.jsx)(tk.R, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: u,
                                            height: u,
                                            className: tw.DE,
                                        }),
                          }),
                          null != j ? (0, l.jsx)(g.E, { variant: o, color: "text-default", children: j }) : null,
                      ],
                  }),
              ],
          });
}
var tH = a(973172),
    tY = a(788021);
function tz(e) {
    let { application: t, className: a } = e,
        n = i.useCallback((e) => {
            O(k.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: D.ev.APPLICATION,
            }),
                V({ categoryId: e.id });
        }, []);
    return null == t.categories || 0 === t.categories.length
        ? null
        : (0, l.jsxs)("div", {
              className: a,
              children: [
                  (0, l.jsx)(m.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.s7iald),
                  }),
                  (0, l.jsx)("div", {
                      className: tY.L,
                      children: t.categories.map((e) =>
                          (0, l.jsx)(
                              eO.D,
                              {
                                  className: tY.c,
                                  onClick: () => n(e),
                                  children: (0, l.jsx)(g.E, {
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
var tX = a(462887),
    tK = a(514042),
    tW = a(194261),
    t$ = a(173936),
    tQ = a(9578),
    tZ = a(736653),
    tJ = a(573648),
    tq = a(355584);
function t0(e) {
    let { application: t, className: a, innerClassName: n } = e,
        i = t.directory_entry?.external_urls ?? [];
    return null != t.terms_of_service_url || null != t.privacy_policy_url || i.length > 0
        ? (0, l.jsxs)("div", {
              className: r()(tq.kL, a),
              children: [
                  (0, l.jsx)(m.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.l6DP2n),
                  }),
                  (0, l.jsxs)("div", {
                      className: r()(tq.p_, n),
                      children: [
                          i.map((e, t) => (0, l.jsx)(t1, { url: e.url, children: e.name }, t)),
                          null != t.terms_of_service_url
                              ? (0, l.jsx)(t7, {
                                    icon: tK.o,
                                    url: t.terms_of_service_url,
                                    children: U.intl.string(U.t.s7STcY),
                                })
                              : null,
                          null != t.privacy_policy_url
                              ? (0, l.jsx)(t7, {
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
    let { url: t, children: a } = e,
        n = (0, tZ.Ay)(),
        i = tJ.A.getByUrl(t),
        s = (0, tX.M)(n) ? i?.icon?.darkSVG : i?.icon?.lightSVG;
    return (0, l.jsx)(t7, { icon: void 0 === s ? t$.q : void 0, imageSrc: s, url: t, children: a });
}
function t7(e) {
    let { icon: t, imageSrc: a, iconColor: n, url: i, children: s } = e,
        o = G(),
        c = null;
    null != t
        ? (c = (0, l.jsx)(t, { className: tq.GU, color: n ?? "currentColor", width: 20, height: 20, size: "custom" }))
        : null != a && (c = (0, l.jsx)("img", { className: tq.GR, src: a, alt: "" }));
    let d = (0, l.jsxs)(l.Fragment, {
        children: [c, (0, l.jsx)(g.E, { className: tq.so, variant: "text-sm/medium", selectable: !0, children: s })],
    });
    return (0, l.jsx)(tQ.A, {
        href: i,
        className: r()(tq.Aw, tq.SF),
        trusted: !o,
        useDefaultUnderlineStyles: !1,
        children: d,
    });
}
var t6 = a(449054),
    t9 = a(781696),
    t8 = a(950305),
    t5 = a(548118),
    t3 = a(714991),
    t4 = a(776231),
    t2 = a(860689),
    ae = a(728968),
    at = a(937495),
    aa = a(517061);
function an(e) {
    let { guild: t, className: a, onClick: n } = e,
        i = (0, tZ.Ay)(),
        s = (0, t2.dangerouslyConstructGuildRecordFromUntypedObject)({ name: t.name, icon: t.icon }),
        o = eo.Ay.getGuildDiscoverySplashURL({ id: t.id, splash: t.discovery_splash, size: 192 * (0, t4.mZ)() }),
        c =
            null != o
                ? o
                : (function (e) {
                      switch (e) {
                          case k.NJ8.DARK:
                              return at;
                          case k.NJ8.LIGHT:
                              return aa;
                      }
                  })(i),
        d = eo.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 50 });
    return (0, l.jsxs)(eO.D, {
        className: r()(ae.Nr, a),
        onClick: n,
        "aria-label": U.intl.string(U.t.RB4L2x),
        children: [
            (0, l.jsxs)("div", {
                className: ae.MY,
                children: [
                    (0, l.jsx)("img", { src: c, alt: "", className: ae.j0 }),
                    (0, l.jsx)("div", {
                        className: ae.$f,
                        children: (0, l.jsx)(tO.Ay, {
                            mask: tO.Ay.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, l.jsx)("div", {
                                className: ae.SA,
                                children: (0, l.jsx)(t5.Ay, {
                                    className: ae.__invalid_icon,
                                    iconSrc: d,
                                    guild: s,
                                    size: t5.Ay.Sizes.LARGE,
                                }),
                            }),
                        }),
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: ae.RN,
                children: [
                    (0, l.jsxs)("div", {
                        className: ae.Y_,
                        children: [
                            (0, l.jsx)(t3.A, { className: ae.n2, guild: t, tooltipColor: t9.ST.Colors.PRIMARY }),
                            (0, l.jsx)(m.D, { variant: "heading-md/semibold", className: ae.J5, children: t.name }),
                        ],
                    }),
                    (0, l.jsx)(g.E, {
                        className: ae.eF,
                        variant: "text-sm/normal",
                        color: "text-default",
                        lineClamp: 2,
                        children: t.description,
                    }),
                    (0, l.jsx)("div", {
                        className: ae.Fj,
                        children: (0, l.jsxs)("div", {
                            className: ae.FG,
                            children: [
                                (0, l.jsx)(t8.n, { color: "currentColor", className: ae.NP, size: "xs" }),
                                (0, l.jsx)(g.E, {
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
let al = "redirect_to_support_server";
function ai(e) {
    var t;
    let a,
        n,
        s,
        { application: r, className: o } = e,
        { onGoToSupportServer: c } =
            ((t = r),
            (a = G()),
            (n = (0, d.bG)([I.default], () => I.default.getSessionId())),
            (s = i.useCallback(async () => {
                try {
                    let e = t?.guild?.id;
                    if (null != e) {
                        O(k.HAw.APP_DIRECTORY_SUPPORT_SERVER_JOINED, { application_id: t.id, support_guild_id: e });
                        let a = { page: k.liQ.APPLICATION_DIRECTORY };
                        await (0, t6.Z2)(e, a);
                    }
                } catch {}
            }, [t])),
            i.useEffect(() => {
                let e = new URL(location.href);
                if (null != t && a && null != n && "true" === e.searchParams.get(al)) {
                    e.searchParams.delete(al);
                    let t = e.pathname + e.search;
                    (0, j.bG)(t), s();
                }
            }, [a, s, n, t]),
            {
                onGoToSupportServer: i.useCallback(() => {
                    null != t?.guild?.id && (a ? s() : M({ [al]: "true" }));
                }, [t, s, a]),
            });
    return null != r.guild && r.guild.features.includes(k.GuildFeatures.DISCOVERABLE)
        ? (0, l.jsxs)("div", {
              className: o,
              children: [
                  (0, l.jsx)(m.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.KJEO27),
                  }),
                  (0, l.jsx)(an, { guild: r.guild, onClick: c }),
              ],
          })
        : null;
}
var as = a(820764);
let ar = (0, U.getAvailableLocales)();
function ao(e) {
    let { application: t, className: a } = e,
        n = (0, d.bG)([tG.default], () => tG.default.locale),
        { supportedLanguages: s, usersLanguageIsFirst: o } = i.useMemo(() => {
            if (t.directory_entry?.supported_locales != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    a = e.has(n),
                    l = ar.filter((t) => e.has(t.value));
                return (
                    a && l.sort((e, t) => (e.value === n ? -1 : +(t.value === n))),
                    { supportedLanguages: l.map((e) => U.intl.string(e.localizedName)), usersLanguageIsFirst: a }
                );
            }
            return { supportedLanguages: [], usersLanguageIsFirst: !1 };
        }, [t.directory_entry, n]);
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)(m.D, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: U.intl.string(U.t.Fbjlu3),
            }),
            (0, l.jsx)("ul", {
                className: as.nw,
                children: s.map((e, t) =>
                    (0, l.jsx)(
                        "li",
                        {
                            className: r()(as.WH, as.O6),
                            children: (0, l.jsx)(g.E, {
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
var ac = a(78655);
function ad(e) {
    let { className: t, view: a, application: n } = e,
        i = "embedded" === a,
        s = (0, tH.A)({ application: n });
    return (0, l.jsxs)("div", {
        className: r()(t, { [ac.PD]: !i, [ac.UT]: i }),
        children: [
            (0, l.jsxs)("div", {
                className: r()(ac.hd, { [ac.d5]: i }),
                children: [
                    (0, l.jsx)("div", {
                        className: ac.iY,
                        children: (0, l.jsx)(tF, {
                            application: n,
                            mutualGuilds: s,
                            mutualGuildShownMax: 3,
                            className: ac.wu,
                            guildIconSize: tU.SMALL,
                            guildsClassName: ac.HG,
                            compact: !0,
                            children: (0, l.jsx)(m.D, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: U.intl.string(U.t["3NxHC4"]),
                            }),
                        }),
                    }),
                    (0, l.jsx)(tz, { application: n, className: ac.iY }),
                    (0, l.jsx)(ao, { application: n, className: ac.iY }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: r()(ac.hd, { [ac.d5]: i }),
                children: [
                    (0, l.jsx)(t0, { application: n, className: ac.iY, innerClassName: i ? ac.RU : void 0 }),
                    (0, l.jsx)(ai, { application: n, className: ac.iY }),
                ],
            }),
        ],
    });
}
var au = a(791332),
    ah = a.n(au),
    am = a(900797),
    ap = a(847374),
    a_ = a(558179),
    ag = a(349288),
    ax = a(376728),
    aA = a(167189),
    af = a(833291),
    aC = a(481859),
    av = a(365526);
let ab = /^discord.gg\/[a-zA-Z0-9-]+/,
    aj = {
        ...a_.A.rules,
        heading: {
            ...a_.A.rules.heading,
            react(e, t, a) {
                let n = `h${Math.min(Math.max(2, e.level + 1), 4)}`;
                return (0, l.jsx)(aC.A, { tag: n, children: t(e.content, a) }, a.key);
            },
        },
        image: { ...ah().defaultRules.image },
        inviteLink: {
            order: a_.A.rules.link.order + 1,
            match: (e, t) => (t.inline ? ab.exec(e) : null),
            parse: (e, t, a) => {
                let n = (0, af.br)(e[0]);
                return null == n || n.type !== aA.I.INVITE
                    ? { type: "text", content: e[0] }
                    : {
                          type: "inviteLink",
                          content: [{ type: "text", content: e[0] }],
                          onClick: () => {
                              ax.Ay.acceptInviteAndTransitionToInviteChannel({
                                  inviteKey: n.code,
                                  context: { location: "Application Directory" },
                              }),
                                  a.closeModal?.();
                          },
                      };
            },
            react: (e, t, a) =>
                (0, l.jsx)(
                    ag.Anchor,
                    {
                        onClick: (t) => {
                            t.preventDefault(), e.onClick();
                        },
                        children: (0, av.t)(e, t, a),
                    },
                    a.key,
                ),
        },
    };
var aI = a(349202);
let aE = ah().parserFor(aj),
    aN = ah().reactFor(ah().ruleOutput(aj, "react"));
function aS(e) {
    let { description: t, supportsMarkdown: a } = e,
        [n, s] = i.useState(!1),
        o = i.useRef(null);
    i.useEffect(() => {
        if (null == o.current) return;
        let e = new ResizeObserver(() => {
            s((o.current?.scrollHeight ?? 0) - (o.current?.clientHeight ?? 0) > 1);
        });
        return e.observe(o.current), () => e.disconnect();
    }, []);
    let [c, d] = i.useState(!1),
        u = i.useCallback(() => {
            d((e) => !e);
        }, []);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: o,
                className: r()({ [aI.mA]: !c, [aI.ii]: !c && "Safari" === platform.name }),
                children: a
                    ? (0, l.jsx)(a_.A, {
                          className: aI.R4,
                          parser: aE,
                          output: aN,
                          state: { allowLinks: !0 },
                          children: t,
                      })
                    : (0, l.jsx)(g.E, { variant: "text-md/normal", color: "text-default", children: t }),
            }),
            n || c ? (0, l.jsx)(ay, { isShowingMore: c, onToggle: u }) : null,
        ],
    });
}
function ay(e) {
    let { onToggle: t, isShowingMore: a } = e,
        n = i.useMemo(
            () =>
                (0, l.jsxs)("div", {
                    className: aI.eR,
                    children: [
                        (0, l.jsx)(g.E, {
                            variant: "text-md/semibold",
                            color: "interactive-text-default",
                            children: a ? U.intl.string(U.t["vtfc4+"]) : U.intl.string(U.t.ZDRyuq),
                        }),
                        a
                            ? (0, l.jsx)(am.t, { size: "md", color: "currentColor", className: aI.ys })
                            : (0, l.jsx)(ap.a, { size: "md", color: "currentColor", className: aI.ys }),
                    ],
                }),
            [a],
        );
    return (0, l.jsxs)(eO.D, {
        className: aI.dO,
        onClick: t,
        children: [(0, l.jsx)("div", { className: aI.yF }), n, (0, l.jsx)("div", { className: aI.yF })],
    });
}
let aP = function (e) {
    let { application: t } = e,
        a = t.directory_entry?.detailed_description,
        n = t.directory_entry?.short_description,
        s = i.useMemo(
            () =>
                null != a && a.length > 0
                    ? (0, l.jsx)(aS, { description: a, supportsMarkdown: !0 })
                    : null != n && n.length > 0
                      ? (0, l.jsx)(aS, { description: n, supportsMarkdown: !1 })
                      : null,
            [a, n],
        );
    return null == s
        ? null
        : (0, l.jsxs)("div", {
              className: aI.l4,
              children: [
                  (0, l.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.txraKS),
                  }),
                  s,
              ],
          });
};
var aR = a(136722),
    aT = a(595738),
    aL = a(376092),
    aD = a(925317);
let ak = function (e) {
    let { application: t } = e,
        a = i.useMemo(() => {
            let e = t?.install_params?.permissions;
            if (null != e) return aL.Q.filter((t) => aR.zy(aR.iu(e), t));
        }, [t?.install_params?.permissions]);
    return null != a && a.length > 0
        ? (0, l.jsxs)("div", {
              className: aD.A,
              children: [
                  (0, l.jsx)(m.D, {
                      variant: "heading-lg/semibold",
                      color: "text-strong",
                      children: U.intl.string(U.t.runNF8),
                  }),
                  (0, l.jsx)(aT.A, {
                      className: aD.h,
                      grantedPermissions: a,
                      grantedPermissionsHeader: U.intl.string(U.t.SLgiNH),
                  }),
              ],
          })
        : null;
};
var aO = a(534740);
function aG(e) {
    let { application: t } = e,
        a = i.useMemo(() => (t.directory_entry?.carousel_items ?? []).map(T.xb).filter(ek.Vq) ?? [], [t]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: aO.Xb,
                children: [
                    (0, l.jsx)(tA, { application: t, carouselItems: a }),
                    (0, l.jsx)(aP, { application: t }),
                    (0, l.jsx)(tv, { application: t }),
                    (0, l.jsx)(ak, { application: t }),
                    (0, l.jsx)(tR, { application: t }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: aO.Q9,
                children: [
                    (0, l.jsx)("div", { className: aO.yF }),
                    (0, l.jsx)(m.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: U.intl.string(U.t["mD+J/i"]),
                    }),
                    (0, l.jsx)(ad, { application: t, view: "embedded" }),
                ],
            }),
        ],
    });
}
var aM = a(607399),
    aw = a(691540),
    aU = a(857250),
    aB = a(97483),
    aV = a(550079),
    aF = a(477782),
    aH = a(138134),
    aY = a(922016),
    az = a(365199),
    aX = a(663341),
    aK = a(821609),
    aW = a(782134),
    a$ = a(787389),
    aQ = a(688810),
    aZ = a(361926),
    aJ = a(204776),
    aq = a(50268),
    a0 = a(375802),
    a1 = a(928658),
    a7 = a(395671),
    a6 = a(957565),
    a9 = a(692848),
    a8 = a(440970);
let a5 = "start_application_install",
    a3 = "launch_activity";
function a4(e) {
    let { renderDropdown: t, size: a } = e,
        n = i.useRef(null);
    return (0, l.jsx)(aY.Y, {
        targetElementRef: n,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return t(a);
        },
        position: "left",
        align: "top",
        animation: aY.Y.Animation.NONE,
        children: (e) =>
            (0, l.jsx)(eU.K, {
                buttonRef: n,
                variant: "secondary",
                size: a,
                icon: az.j,
                "aria-label": U.intl.string(U.t["UKOtz+"]),
                ...e,
            }),
    });
}
function a2(e) {
    var t;
    let a,
        n,
        { application: s, variant: r, size: o, contentWidth: c } = e,
        { onClickInstallApplication: d, canInstall: u } =
            ((t = s),
            (a = G()),
            (n = i.useCallback(() => {
                let e = D.h.getField("guildId") ?? void 0;
                (0, a9.o)({
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
                if (a && "true" === e.searchParams.get(a5)) {
                    e.searchParams.delete(a5);
                    let t = e.pathname + e.search;
                    (0, j.bG)(t), n();
                }
            }, [a, n]),
            {
                onClickInstallApplication: i.useCallback(() => {
                    if (
                        (O(k.HAw.APP_DIRECTORY_INSTALL_CLICKED, { application_id: t.id }),
                        (aM.Fr || aM.v1) && null == t.custom_install_url)
                    ) {
                        let e = (0, a9.Z)({
                            applicationId: t.id,
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        });
                        if (null != e) return void window.open(e, "_blank");
                    }
                    if (a) n();
                    else {
                        let e = D.h.getField("guildId");
                        N.default.track(k.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: t.id,
                            guild_id: e,
                            auth_type: null != t.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: aM.Fr ? "mobile_web" : "desktop_web",
                        }),
                            M({ [a5]: "true" });
                    }
                }, [t, n, a]),
                canInstall: i.useMemo(
                    () =>
                        (0, aJ.Ie)({
                            customInstallUrl: t.custom_install_url,
                            installParams: t.install_params,
                            integrationTypesConfig: t.integration_types_config,
                        }),
                    [t],
                ),
            });
    return "icon" === c
        ? (0, l.jsx)(eU.K, {
              variant: r,
              icon: aX.p,
              size: o,
              onClick: d,
              "aria-label": U.intl.string(U.t.NgXl3C),
              disabled: !u,
          })
        : (0, l.jsx)(aK.$, {
              variant: r,
              size: o,
              text: "small" === c ? U.intl.string(U.t.qRZ35t) : U.intl.string(U.t.NgXl3C),
              onClick: d,
              disabled: !u,
          });
}
function ne(e) {
    let { size: t, contentWidth: a, onClick: n, isSubmitting: i } = e;
    return "icon" === a
        ? (0, l.jsx)(eU.K, {
              variant: "primary",
              icon: aW.u,
              size: t,
              onClick: n,
              loading: i,
              "aria-label": U.intl.string(U.t.QO7rO6),
          })
        : (0, l.jsx)(aK.$, { variant: "primary", size: t, text: U.intl.string(U.t.QO7rO6), onClick: n, loading: i });
}
let nt = i.forwardRef(function (e, t) {
    let { application: a, size: n } = e,
        { analyticsLocations: s } = (0, aQ.Ay)(),
        o = i.useCallback(() => {
            let e;
            O(k.HAw.APP_DIRECTORY_APPLICATION_LINK_COPIED, { application_id: a.id }),
                (0, a6.C)(
                    ((e = a.id), `${location.protocol}//${location.host}${k.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(e)}`),
                    () => (0, aw.P0)((0, aU.o)(U.intl.string(U.t["L/PwZf"]), aB.Ck.SUCCESS)),
                );
        }, [a.id]),
        c = i.useCallback(() => {
            let e = a7.Ay.createFromServer(a);
            (0, a1.r3)({ application: e, entrypoint: "app_directory" });
        }, [a]),
        u = (0, aq.A)({
            id: a.id,
            label: U.intl.string(U.t["FfCL+6"]),
            onSuccess: () => (0, aw.P0)((0, aU.o)(U.intl.string(U.t.eNjAah), aB.Ck.SUCCESS)),
        }),
        h = i.useCallback(
            (e, t) =>
                (0, l.jsxs)(aV.W, {
                    "data-menu-migrated-auto": !0,
                    navId: "application-directory-profile",
                    "aria-label": U.intl.string(U.t["/7I4/C"]),
                    onClose: t,
                    onSelect: void 0,
                    children: [
                        e
                            ? (0, l.jsx)(aF.rX, {
                                  children: (0, l.jsx)(aF.Dr, {
                                      id: "copy",
                                      label: U.intl.string(U.t.z4sP5J),
                                      action: o,
                                      icon: t$.q,
                                      leadingAccessory: { type: "icon", icon: t$.q },
                                  }),
                              })
                            : null,
                        (0, l.jsx)(aF.rX, {
                            children: (0, l.jsx)(aF.Dr, {
                                id: "report",
                                label: U.intl.string(U.t.NgA5vp),
                                color: "danger",
                                leadingAccessory: { type: "icon", icon: aH.i },
                                action: c,
                            }),
                        }),
                        null != u ? (0, l.jsx)(aF.rX, { children: u }) : null,
                    ],
                }),
            [u, c, o],
        ),
        { onClickLaunchActivity: m, isSubmitting: p } = (function (e, t) {
            let a = e.id,
                n = e?.bot?.id,
                l = (0, a0.e)(e),
                s = (0, aZ.Vr)({ context: { type: "contextless" }, applicationId: a, botUserId: n }),
                r = null != n && (0, es.$B)(e) && (0, es.Ag)(e) && (l || s),
                [o, c] = i.useState(!1),
                u = G(),
                h = (0, d.bG)([E.default], () => E.default.getCurrentUser()),
                m = (0, a$.A)({
                    applicationId: a,
                    analyticsLocations: t,
                    runBeforeLaunchAttempt: () => c(!0),
                    runAfterLaunchAttempt: () => c(!1),
                });
            i.useEffect(() => {
                let e = new URL(location.href),
                    t = "true" === e.searchParams.get(a3);
                if (u && r && t && null != n && null != h) {
                    e.searchParams.delete(a3);
                    let t = e.pathname + e.search;
                    (0, j.bG)(t), m();
                }
            }, [u, r, n, h, m]);
            let p = i.useCallback(async () => {
                if (null != n) {
                    if ((O(k.HAw.APP_DIRECTORY_LAUNCH_CLICKED, { application_id: a }), !u))
                        return void M({ [a3]: "true" });
                    await m();
                }
            }, [a, n, u, m]);
            return { onClickLaunchActivity: r ? p : void 0, isSubmitting: o };
        })(a, s),
        _ = null != m,
        g = _ ? "secondary" : "primary";
    return (0, l.jsxs)("div", {
        ref: t,
        children: [
            (0, l.jsxs)("div", {
                className: r()(a8.Ik, a8.U),
                children: [
                    _ && (0, l.jsx)(ne, { size: n, contentWidth: "normal", onClick: m, isSubmitting: p }),
                    (0, l.jsx)(a2, { application: a, size: n, contentWidth: "normal", variant: g }),
                    a6.p5
                        ? (0, l.jsx)(eU.K, {
                              variant: "secondary",
                              size: n,
                              icon: t$.q,
                              onClick: o,
                              "aria-label": U.intl.string(U.t.z4sP5J),
                          })
                        : null,
                    (0, l.jsx)(a4, { renderDropdown: (e) => h(!1, e), size: n }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: r()(a8.Ik, a8.EX),
                children: [
                    _ && (0, l.jsx)(ne, { size: n, contentWidth: "small", onClick: m, isSubmitting: p }),
                    (0, l.jsx)(a2, { application: a, size: n, contentWidth: "small", variant: g }),
                    (0, l.jsx)(a4, { renderDropdown: (e) => h(a6.p5, e), size: n }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: r()(a8.Ik, a8.nU),
                children: [
                    _ && (0, l.jsx)(ne, { size: n, contentWidth: "icon", onClick: m, isSubmitting: p }),
                    (0, l.jsx)(a2, { application: a, size: n, contentWidth: "icon", variant: g }),
                    (0, l.jsx)(a4, { renderDropdown: (e) => h(a6.p5, e), size: n }),
                ],
            }),
        ],
    });
});
var na = a(811308);
let nn = function (e) {
    let { application: t, onButtonsVisibilityChange: a } = e,
        n = i.useRef(null),
        s = i.useMemo(() => eo.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 96 }), [t]),
        r = i.useMemo(() => {
            let e = [];
            return (
                (0, es.b7)(t) && e.push(U.intl.string(U.t.LO4f0P)),
                (0, es.K4)(t) && (0 !== e.length && e.push("•"), e.push(U.intl.string(U.t["8z5B2U"]))),
                (0, es.ME)(t) && (0 !== e.length && e.push("•"), e.push(U.intl.string(U.t["5khEk8"]))),
                e
            );
        }, [t]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ev, { application: t, bannerType: "detail", iconURL: s }),
            (0, l.jsx)("div", {
                className: na.H,
                style: { height: 52 },
                children: (0, l.jsx)("img", {
                    src: s,
                    alt: "",
                    className: na.my,
                    height: 96,
                    width: 96,
                    style: { borderWidth: 4, marginLeft: 28 },
                }),
            }),
            (0, l.jsxs)("div", {
                className: na.op,
                children: [
                    (0, l.jsxs)("div", {
                        className: na.tJ,
                        children: [
                            (0, l.jsx)(m.D, {
                                variant: "heading-xxl/bold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            (0, l.jsx)("div", {
                                className: na.A7,
                                children: r.map((e, t) =>
                                    (0, l.jsx)(
                                        g.E,
                                        {
                                            className: na.MO,
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
                    (0, l.jsx)(ei.L, {
                        innerRef: n,
                        onChange: a,
                        active: !0,
                        children: (0, l.jsx)(nt, { ref: n, application: t, size: "md" }),
                    }),
                ],
            }),
        ],
    });
};
var nl = a(172218),
    ni = a(668168);
function ns(e) {
    let { applicationId: t, similarApplications: a, onSelectApplication: n, similarLoadId: s } = e,
        r = (function (e) {
            let { applicationId: t, similarAppIds: a } = e,
                [n, l] = i.useState(),
                s = (0, nl.K)((e) => {
                    e && l(t);
                });
            return (
                i.useEffect(() => {
                    n === t &&
                        O(k.HAw.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: a,
                        });
                }, [n, t, a]),
                s
            );
        })({ applicationId: t, similarAppIds: i.useMemo(() => a.map((e) => e.id), [a]) });
    return (0, l.jsx)("div", {
        className: ni.hQ,
        ref: r,
        children: a.map((e, a) =>
            (0, l.jsx)(
                nr,
                { applicationId: t, similarApplication: e, onSelectApplication: n, similarLoadId: s, position: a },
                e.id,
            ),
        ),
    });
}
function nr(e) {
    let { applicationId: t, similarApplication: a, onSelectApplication: n, position: s, similarLoadId: r } = e,
        o = (0, tH.A)({ application: a }),
        c = a.categories?.[0],
        d = i.useMemo(() => eo.Ay.getApplicationIconURL({ id: a.id, icon: a.icon, size: 48 }), [a]),
        u = i.useCallback(() => {
            O(k.HAw.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: "product",
                application_id: t,
                suggested_application_id: a.id,
                position: s,
                load_id: r,
                shown_mutual_guilds_count: o.length,
            }),
                n(a.id);
        }, [n, a.id, t, o.length, r, s]);
    return (0, l.jsxs)(eO.D, {
        onClick: u,
        className: ni.vU,
        children: [
            (0, l.jsxs)("div", {
                className: ni.nT,
                children: [
                    (0, l.jsx)("img", { src: d, alt: "", className: ni.my, height: 48, width: 48 }),
                    (0, l.jsxs)("div", {
                        className: ni.gn,
                        children: [
                            (0, l.jsx)("div", {
                                style: { flex: 1, minWidth: 0, overflow: "hidden" },
                                children: (0, l.jsx)(m.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    className: ni.JB,
                                    children: a.name,
                                }),
                            }),
                            null != c
                                ? (0, l.jsx)(g.E, {
                                      className: ni.m4,
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      children: c.name,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(g.E, {
                className: ni.i3,
                variant: "text-sm/medium",
                color: "text-default",
                lineClamp: 2,
                children: a.directory_entry?.short_description ?? a.description,
            }),
            (0, l.jsx)(tF, {
                application: a,
                textVariant: "text-xs/medium",
                mutualGuilds: o,
                mutualGuildShownMax: 3,
                guildIconSize: tU.SMALL,
                compact: !0,
            }),
        ],
    });
}
let no = function (e) {
    let { applicationId: t, fetchState: a, similarApplications: n, onSelectApplication: i, similarLoadId: s } = e;
    return a !== eD.e.FETCHING && (null == n || 0 === n.length)
        ? null
        : (0, l.jsxs)("div", {
              className: ni.hd,
              children: [
                  (0, l.jsx)("div", { className: ni.yF }),
                  (0, l.jsx)(m.D, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      className: ni.bV,
                      children: U.intl.string(U.t.E8wCnk),
                  }),
                  (0, l.jsx)(el, {
                      loading: a === eD.e.FETCHING,
                      children:
                          null != n
                              ? (0, l.jsx)(ns, {
                                    applicationId: t,
                                    similarApplications: n,
                                    onSelectApplication: i,
                                    similarLoadId: s,
                                })
                              : null,
                  }),
              ],
          });
};
a(938796);
var nc = a(192308),
    nd = a(549711),
    nu = a(925435),
    nh = a(311321),
    nm = a(163437),
    np = a(67480),
    n_ = a(785936);
function ng(e) {
    let { application: t } = e;
    return (0, l.jsxs)("div", {
        className: n_.ZM,
        children: [(0, l.jsx)(nx, { application: t }), (0, l.jsx)(nf, { application: t })],
    });
}
function nx(e) {
    let { application: t } = e,
        { subscriptions: a, otps: n } = (0, eP.C)(t.id);
    return (0, l.jsxs)("div", {
        className: n_.ZM,
        children: [
            a.length > 0 &&
                (0, l.jsxs)("div", {
                    className: n_.dD,
                    children: [
                        (0, l.jsx)(nh.A, { subscriptions: a, color: "text-strong" }),
                        (0, l.jsx)("div", {
                            className: n_.ZE,
                            children: a.map((e) => {
                                let a = (0, nm.bg)(e.skuFlags) ? "user" : "guild";
                                return (0, l.jsx)(
                                    nu.B4,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: a,
                                        onDetails: () =>
                                            F(k.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                );
                            }),
                        }),
                    ],
                }),
            n.length > 0 &&
                (0, l.jsxs)("div", {
                    className: n_.dD,
                    children: [
                        (0, l.jsx)(m.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: U.intl.string(U.t.yUGTs8),
                        }),
                        (0, l.jsx)("div", {
                            className: n_.ZE,
                            children: n.map((e) =>
                                (0, l.jsx)(
                                    nu.B8,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id,
                                        onDetails: () =>
                                            F(k.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId)),
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, l.jsx)(nd.A, {
                path: k.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                exact: !0,
                render: (e) => (0, l.jsx)(nA, { ...e }),
            }),
        ],
    });
}
function nA(e) {
    let {
            match: {
                params: { applicationId: t, skuId: n },
            },
        } = e,
        s = (0, d.bG)([np.A], () => np.A.get(n), [n]),
        r = (0, d.bG)([np.A], () => (null != n ? np.A.getParentSKU(n) : void 0), [n]),
        o = i.useId(),
        c = i.useCallback(
            () => F(k.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, w.GlobalDiscoveryAppsSections.STORE)),
            [t],
        );
    return (
        i.useLayoutEffect(() => {
            var e;
            switch (s?.type) {
                case k.Puh.CONSUMABLE:
                case k.Puh.DURABLE:
                    return void (0, nc.openModalLazy)(
                        async () => {
                            let { ItemDetailsModal: e } = await a.e("70104").then(a.bind(a, 963179));
                            return (a) => (0, l.jsx)(e, { appId: t, skuId: n, ...a });
                        },
                        {
                            modalKey: o,
                            onCloseCallback: () => {
                                nC() ||
                                    F(
                                        k.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                            t,
                                            w.GlobalDiscoveryAppsSections.STORE,
                                        ),
                                    );
                            },
                        },
                    );
                case k.Puh.SUBSCRIPTION:
                    if (r?.flags == null) return;
                    return (
                        (e = (0, nm.bg)(r.flags) ? "user" : "guild"),
                        void (0, nc.openModalLazy)(
                            async () => {
                                let { SubscriptionDetailsModal: i } = await a.e("64850").then(a.bind(a, 168393));
                                return (a) =>
                                    (0, l.jsx)(i, { appId: t, subscriptionType: e, skuId: n, guildId: void 0, ...a });
                            },
                            {
                                modalKey: o,
                                onCloseCallback: () => {
                                    nC() ||
                                        F(
                                            k.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                                t,
                                                w.GlobalDiscoveryAppsSections.STORE,
                                            ),
                                        );
                                },
                            },
                        )
                    );
            }
        }, [t, o, c, r?.flags, s?.flags, s?.type, n]),
        i.useLayoutEffect(
            () => () => {
                (0, nc.closeModal)(o);
            },
            [o],
        ),
        null
    );
}
function nf(e) {
    let { application: t } = e,
        a = G(),
        n = t.terms_of_service_url,
        i = t.privacy_policy_url;
    if (null == n && null == i) return null;
    let s = (e, t) => (0, l.jsx)(tQ.A, { href: t, trusted: !a, children: e });
    return (0, l.jsx)("div", {
        className: n_.V6,
        children: (0, l.jsx)(g.E, {
            color: "text-strong",
            variant: "text-sm/normal",
            children:
                null != n && null != i
                    ? U.intl.format(U.t.nylPOT, { termsHook: (e) => s(e, n), privacyHook: (e) => s(e, i) })
                    : null != n
                      ? U.intl.format(U.t["0cPyDz"], { termsHook: (e) => s(e, n) })
                      : null != i
                        ? U.intl.format(U.t["loYGC/"], { privacyHook: (e) => s(e, i) })
                        : null,
        }),
    });
}
function nC() {
    return window.location.pathname.startsWith("/login");
}
var nv = a(798385);
let nb = function (e) {
    let { applicationId: t, onSelectApplication: a, onScroll: n, initialTab: s, onButtonsVisibilityChange: r } = e,
        o = i.useRef(null),
        c = (0, d.bG)([P.A], () => P.A.getApplication(t)),
        u = (0, d.bG)([P.A], () => P.A.getApplicationFetchState(t));
    i.useEffect(() => {
        if (null != t && null == c) {
            let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
            S.Di(t, { noCache: e });
        }
    }, [t, c]),
        i.useEffect(() => {
            S.xZ({ applicationId: t });
        }, [t]),
        i.useEffect(() => () => r(!0), [r]);
    let h = c?.storefront_available,
        [m, p] = i.useState(s ?? w.GlobalDiscoveryAppsSections.ABOUT),
        _ = i.useCallback(
            (e) => {
                o.current?.scrollTo({ to: 0 }), p(w.GlobalDiscoveryAppsSections.ABOUT), a(e);
            },
            [a],
        );
    i.useEffect(() => {
        c?.storefront_available && null != t && (0, eP.F)(t);
    }, [c?.storefront_available, t]);
    let g = (0, D.Bn)(),
        x = (0, d.bG)([eD.A], () => eD.A.getFetchState({ applicationId: c?.id })),
        A = (0, d.bG)([eD.A], () => eD.A.getSimilarApplications({ applicationId: c?.id })),
        f = i.useMemo(() => A?.applications.slice(0, 3), [A]),
        C = { displayedSimilarApplications: f, previousView: g },
        v = i.useRef(C);
    i.useEffect(() => {
        v.current = C;
    }),
        i.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = v.current;
            c?.id != null &&
                x !== eD.e.FETCHING &&
                O(k.HAw.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: D.ev.APPLICATION,
                    previous_page: t?.type,
                    application_id: c.id,
                    referrer: document.referrer,
                    suggested_application_ids: e?.map((e) => e.id),
                });
        }, [c?.id, x]);
    let b = i.useMemo(
            () => [
                { id: w.GlobalDiscoveryAppsSections.ABOUT, label: U.intl.string(U.t.DkyHMK) },
                { id: w.GlobalDiscoveryAppsSections.STORE, label: U.intl.string(U.t.jgEXGB) },
            ],
            [],
        ),
        j = i.useMemo(() => {
            if (null == c) return null;
            switch (m) {
                case w.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, l.jsx)(aG, { application: c });
                case w.GlobalDiscoveryAppsSections.STORE:
                    return (0, l.jsx)(ng, { application: c });
            }
        }, [m, c]),
        I = i.useCallback(
            (e) => {
                O(k.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, { application_id: t, tab_name: e }),
                    p(e),
                    e === w.GlobalDiscoveryAppsSections.ABOUT
                        ? F(k.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t))
                        : F(k.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t],
        ),
        E = m === w.GlobalDiscoveryAppsSections.ABOUT;
    return (0, l.jsx)(X.A, {
        onScroll: n,
        ref: o,
        children: (0, l.jsx)(z.A, {
            children:
                null == c
                    ? null == u || u === P.e.FETCHING
                        ? (0, l.jsx)("div", { className: nv.Dg, children: (0, l.jsx)(el, { loading: !0 }) })
                        : (0, l.jsx)("div", { className: nv.Dg, children: (0, l.jsx)($, { className: nv.z3 }) })
                    : (0, l.jsxs)("div", {
                          className: nv.nM,
                          children: [
                              (0, l.jsx)(nn, { application: c, onButtonsVisibilityChange: r }),
                              (0, l.jsxs)("div", {
                                  className: nv.hQ,
                                  children: [
                                      (0, l.jsxs)("div", {
                                          className: nv.Ne,
                                          children: [
                                              h &&
                                                  (0, l.jsx)("div", {
                                                      className: nv.OF,
                                                      children: (0, l.jsx)(eL, {
                                                          tabs: b,
                                                          onTabSelect: I,
                                                          selectedTab: m,
                                                      }),
                                                  }),
                                              j,
                                              (0, l.jsx)(no, {
                                                  applicationId: t,
                                                  fetchState: x,
                                                  similarApplications: f,
                                                  onSelectApplication: _,
                                                  similarLoadId: A?.loadId,
                                              }),
                                          ],
                                      }),
                                      E && (0, l.jsx)(ad, { className: nv.pz, application: c, view: "side" }),
                                  ],
                              }),
                          ],
                      }),
        }),
    });
};
var nj = a(984516),
    nI = a(724002),
    nE = a(287174),
    nN = a(487899),
    nS = a(239314),
    ny = a(111162),
    nP = a(242552);
let nR = nE.K.APPLICATION_DIRECTORY;
function nT(e) {
    let { collection: t, index: a, onSelectApplication: n } = e,
        s = (function (e) {
            let { collectionId: t, index: a } = e,
                [n, l] = i.useState(!1),
                s = (0, nl.K)((e) => {
                    e && l(!0);
                });
            return (
                i.useEffect(() => {
                    n && O(k.HAw.APP_DIRECTORY_COLLECTION_VIEWED, { collection_id: t, collection_position: a });
                }, [n, t, a]),
                s
            );
        })({ collectionId: t.id, index: a }),
        o = i.useCallback(
            (e, l) => {
                O(k.HAw.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: t.id,
                    item_position: l,
                    collection_position: a,
                    application_id: e,
                }),
                    n(e);
            },
            [t.id, a, n],
        );
    return (0, l.jsxs)("div", {
        ref: s,
        children: [
            (0, l.jsx)(m.D, {
                className: r()(nP.Gf, { [nP.SH]: 0 === a }),
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: t.title,
            }),
            (0, l.jsx)("div", {
                className: nP.Qs,
                children: t.application_directory_collection_items.map((e, t) =>
                    e.type !== nN.L.APPLICATION || null == e.application
                        ? null
                        : (0, l.jsx)(
                              ej,
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
let nL = function (e) {
    let { onSelectApplication: t } = e,
        a = (0, d.bG)([ny.default], () => ny.default.onlyShowPreviewAppCollections) ? nI.W.PREVIEW : nI.W.ACTIVE,
        n = (0, d.bG)([ee.A], () => ee.A.getFetchState({ surface: nR, activeState: a })),
        s = (0, d.bG)([ee.A], () => ee.A.getCollections({ surface: nR, activeState: a }));
    i.useEffect(() => {
        S.An({ surface: nR, activeState: a });
    }, [a]);
    let r = i.useMemo(() => s?.filter((e) => e.type !== nS.Y.GALLERY), [s]);
    return n === ee.e.ERROR
        ? (0, l.jsx)("div", { className: nP.Un, children: (0, l.jsx)($, { className: nP.z3 }) })
        : (0, l.jsx)(el, {
              loading: n === ee.e.FETCHING,
              children: r?.map((e, a) => (0, l.jsx)(nT, { collection: e, index: a, onSelectApplication: t }, a)),
          });
};
var nD = a(210349);
let nk = function (e) {
    let { onScroll: t, onSelectApplication: a } = e;
    return (0, l.jsxs)(X.A, {
        onScroll: t,
        children: [
            (0, l.jsx)(Y.A, {
                title: U.intl.format(U.t.kEcZ97, {}),
                description: U.intl.string(U.t.XxFts9),
                children: (0, l.jsx)(H.A, {}),
            }),
            (0, l.jsx)(z.A, {
                children: (0, l.jsxs)("div", {
                    className: nD.h,
                    children: [(0, l.jsx)(nL, { onSelectApplication: a }), (0, l.jsx)(nj.A, { padding: !0 })],
                }),
            }),
        ],
    });
};
var nO = a(873263),
    nG = a(994369),
    nM = a(475743),
    nw = a(191711),
    nU = a(666168);
function nB(e) {
    let { category: t, count: a, onSelectCategory: n, selected: s } = e,
        o = i.useCallback(() => {
            n(t.id);
        }, [t.id, n]),
        c = a.toLocaleString(tG.default.locale);
    return (0, l.jsxs)(eO.D, {
        onClick: o,
        className: r()(nU.L1, { [nU.wH]: s }),
        children: [
            (0, l.jsx)(g.E, { className: nU.UU, variant: "text-sm/medium", color: "text-strong", children: t.name }),
            (0, l.jsx)(g.E, { className: nU.U9, variant: "text-sm/normal", color: "text-muted", children: c }),
        ],
    });
}
function nV(e) {
    let { countsByCategory: t, onSelectCategory: a, selectedCategoryId: n } = e,
        s = (0, d.bG)([R.A], () => R.A.getCategories()),
        r = i.useMemo(() => [(0, T.AU)(), ...s.filter((e) => (t[e.id] ?? 0) !== 0)], [s, t]);
    return 0 === r.length
        ? null
        : (0, l.jsx)("div", {
              className: nU.LZ,
              children: r.map((e) => {
                  let i = e.id,
                      s = t[i] ?? 0;
                  return (0, l.jsx)(nB, { category: e, count: s, selected: i === n, onSelectCategory: () => a(e) }, i);
              }),
          });
}
function nF(e) {
    let { countsByCategory: t, onSelectCategory: a, selectedCategoryId: n } = e,
        s = (0, d.bG)([R.A], () => R.A.getCategories()),
        r = i.useMemo(() => [(0, T.AU)(), ...s.filter((e) => (t[e.id] ?? 0) !== 0)], [s, t]),
        o = i.useMemo(() => r.map((e) => ({ id: `${e.id}`, name: e.name, count: t[e.id] ?? 0 })), [r, t]),
        c = i.useCallback(
            (e) => {
                let t = r.find((t) => t.id === Number(e));
                null != t && a(t);
            },
            [a, r],
        ),
        u = i.useMemo(() => r.find((e) => e.id === n), [n, r]);
    return 0 === o.length
        ? null
        : (0, l.jsxs)("div", {
              className: nU.kL,
              children: [
                  (0, l.jsx)(g.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: U.intl.string(U.t.f09BQJ),
                  }),
                  (0, l.jsx)(nw.A, {
                      items: o,
                      title: u?.name ?? "",
                      onSelect: c,
                      selected: `${n}`,
                      "aria-label": U.intl.string(U.t.WHdCwR),
                      variant: nw.H.FILLED,
                  }),
              ],
          });
}
var nH = a(678871),
    nY = a(842503);
let nz = function (e) {
    let { selectedCategoryId: t, searchAllCategories: a } = e,
        n = (0, d.bG)([R.A], () => R.A.getCategories()),
        s = i.useMemo(() => n.find((e) => e.id === t)?.name, [n, t]),
        r =
            t === T.lj || null == s
                ? U.intl.string(U.t["FVJt+8"])
                : U.intl.formatToPlainString(U.t.FjCaNB, { categoryName: s }),
        o = t === T.lj ? U.intl.string(U.t.GXiMta) : U.intl.format(U.t.JaLoFF, { onClick: a });
    return (0, l.jsxs)("div", {
        className: nH.kL,
        children: [
            (0, l.jsx)("img", { alt: "", src: nY, className: nH.Sl }),
            (0, l.jsx)(m.D, { variant: "heading-xl/semibold", className: nH.wx, children: r }),
            (0, l.jsx)(g.E, { variant: "text-md/normal", color: "text-default", children: o }),
        ],
    });
};
var nX = a(798387);
function nK(e) {
    let { onSelectApplication: t, onScroll: a } = e,
        n = (0, d.bG)([I.default], () => I.default.isAuthenticated()),
        s = i.useRef(null),
        r = (0, nO.zy)(),
        o = i.useRef(null),
        {
            query: c,
            page: u,
            categoryId: h,
        } = i.useMemo(() => {
            let e = new URLSearchParams(r.search),
                t = e.get("page"),
                a = null != t ? Number(t) : 1;
            return {
                query: e.get("q") ?? "",
                page: a,
                categoryId: Number(e.get("category_id")) ?? w.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID,
            };
        }, [r.search]),
        m = (0, d.bG)([R.A], () => R.A.getCategories()),
        p = i.useMemo(() => m?.find((e) => e.id === h), [m, h]),
        _ = i.useCallback(
            (e) => {
                O(k.HAw.APP_DIRECTORY_SEARCHED, {
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
    i.useEffect(() => {
        s.current?.scrollTo({ to: 0 }),
            c !== o.current && ((o.current = c), S.$P({ query: c, options: { source: nG.V.APP_DIRECTORY } })),
            S.$P({
                query: c,
                options: { categoryId: h, page: u, pageSize: w.PAGE_SIZE, source: nG.V.APP_DIRECTORY },
                onSuccessCallback: _,
            });
    }, [h, u, c, _]);
    let { fetchState: g, searchResults: x } = (0, d.cf)([et.A], () => ({
            fetchState: et.A.getFetchState({
                query: c,
                categoryId: h,
                page: u,
                pageSize: w.PAGE_SIZE,
                source: nG.V.APP_DIRECTORY,
            }),
            searchResults: et.A.getSearchResults({
                query: c,
                categoryId: h,
                page: u,
                pageSize: w.PAGE_SIZE,
                source: nG.V.APP_DIRECTORY,
            }),
        })),
        A = (0, d.cf)([et.A], () => {
            let e = et.A.getSearchResults({ query: c, source: nG.V.APP_DIRECTORY });
            return null != e ? { [T.lj]: e.totalCount, ...e.countsByCategory } : {};
        }),
        f = (0, nM.A)(x),
        C = i.useMemo(() => (g === P.e.FETCHING ? f : x), [g, f, x]),
        v = i.useCallback(
            (e) => {
                V({ query: c, categoryId: h, page: e });
            },
            [h, c],
        ),
        b = i.useCallback(
            (e) => {
                O(k.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: D.ev.SEARCH,
                }),
                    V({ query: c, categoryId: e.id });
            },
            [c],
        ),
        j = i.useCallback(
            (e, a) => {
                O(k.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: D.ev.SEARCH,
                    application_id: e,
                    load_id: C?.loadId,
                    search_term: c,
                    position: a,
                }),
                    t(e);
            },
            [C?.loadId, t, c],
        ),
        E = B();
    return (0, l.jsxs)("div", {
        className: nX.kL,
        children: [
            (0, l.jsx)(X.A, {
                ref: s,
                onScroll: a,
                children: (0, l.jsxs)("div", {
                    className: nX.WH,
                    children: [
                        n ? null : (0, l.jsx)("div", { className: nX.AW }),
                        (0, l.jsx)(z.A, {
                            children: (0, l.jsxs)("div", {
                                className: nX.hQ,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: nX.$B,
                                        children: (0, l.jsx)(nF, {
                                            countsByCategory: A,
                                            selectedCategoryId: h,
                                            onSelectCategory: b,
                                        }),
                                    }),
                                    (0, l.jsx)(el, {
                                        loading: g === P.e.FETCHING,
                                        children:
                                            g === P.e.FETCHED && (null == C || C?.results.length === 0)
                                                ? (0, l.jsx)(nz, {
                                                      selectedCategoryId: h ?? E.id,
                                                      searchAllCategories: () => b(E),
                                                  })
                                                : (0, l.jsx)("div", {
                                                      className: nX.Qs,
                                                      children: C?.results.map((e, t) => {
                                                          if (e.type === Q.j.APPLICATION) {
                                                              let a = e.data;
                                                              return (0, l.jsx)(
                                                                  ej,
                                                                  {
                                                                      application: a,
                                                                      onSelectApplication: (e) => j(e, t),
                                                                      showCategory: !0,
                                                                  },
                                                                  a.id,
                                                              );
                                                          }
                                                          return null;
                                                      }),
                                                  }),
                                    }),
                                    (0, l.jsx)(J.m, {
                                        className: nX.JV,
                                        totalCount: Math.min(
                                            (C?.totalPages ?? 0) * w.PAGE_SIZE,
                                            w.MAX_PAGES * w.PAGE_SIZE,
                                        ),
                                        pageSize: w.PAGE_SIZE,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: u,
                                        onPageChange: v,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, l.jsx)("div", {
                className: nX.pn,
                children: (0, l.jsx)("div", {
                    className: nX.jv,
                    children: (0, l.jsx)(nV, { countsByCategory: A, selectedCategoryId: h, onSelectCategory: b }),
                }),
            }),
        ],
    });
}
var nW = a(386607);
function n$(e) {
    let { applicationId: t, hideDetailHeaderButtons: a, onClickBack: n } = e,
        s = (0, d.bG)([P.A], () => P.A.getApplication(t)),
        [o, c] = i.useState(a),
        u = i.useCallback(() => {
            c(a);
        }, [a]);
    return (0, l.jsxs)("div", {
        className: nW._u,
        children: [
            (0, l.jsx)("div", { className: nW.w$, children: (0, l.jsx)(f.XQ, { icon: h.Z, onClick: n }) }),
            (0, l.jsx)(m.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: nW.Rm,
                lineClamp: 1,
                children: s?.name,
            }),
            (0, l.jsx)("div", {
                className: r()(nW.w$, nW.xY, { [nW.RK]: !a, [nW.jD]: a && !o, [nW.R]: a && o }),
                onTransitionEnd: u,
                children: null != s ? (0, l.jsx)(nt, { application: s, size: "sm" }) : null,
            }),
        ],
    });
}
function nQ() {
    let e = i.useCallback(() => {
            let e, t;
            (e = new URL(location.href)),
                (t = `?redirect_to=${encodeURIComponent(e.pathname + e.search)}`),
                (0, j.pX)(k.BVt.REGISTER + t);
        }, []),
        t = i.useCallback(() => {
            M();
        }, []);
    return (0, l.jsxs)(p.$T, {
        color: p.Hv.BRAND,
        className: nW.aL,
        children: [
            (0, l.jsx)(_.p, { size: "custom", color: "white", className: nW.wm }),
            (0, l.jsx)(g.E, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: U.intl.string(U.t.Ol3MIt),
            }),
            (0, l.jsxs)("div", {
                className: nW.ll,
                children: [
                    (0, l.jsx)(p.Z_, { onClick: e, noticeType: k.kqX.LOGIN, children: U.intl.string(U.t["825cFy"]) }),
                    (0, l.jsx)(p.Z_, {
                        onClick: t,
                        noticeType: k.kqX.REGISTER,
                        minor: !0,
                        children: U.intl.string(U.t.HAkXzo),
                    }),
                ],
            }),
        ],
    });
}
let nZ = function () {
    var e;
    let t,
        a,
        n,
        s,
        c,
        p,
        _ = (0, d.bG)([I.default], () => !I.default.isAuthenticated()),
        { onScroll: g, scrollPosition: P, resetScrollPosition: L } = (0, x.G)(),
        M = (0, D.R4)(),
        F = G(),
        H = M?.type === D.ev.CATEGORY ? M.categoryId : void 0,
        { applicationId: Y, section: z } = M?.type === D.ev.APPLICATION ? M : {},
        { query: X, categoryId: K } = M?.type === D.ev.SEARCH ? M : {},
        W = (0, d.bG)([R.A], () => R.A.getCategories()),
        $ = i.useMemo(() => [(0, T.AU)(), ...W], [W]),
        Q = i.useMemo(() => $.find((e) => e.id === Number(K)), [$, K]),
        {
            tabs: Z,
            selectedTab: J,
            onSelectTab: q,
        } = ((e = H?.toString()),
        (t = (0, d.bG)([R.A], () => R.A.getCategories())),
        (a = B()),
        (n = i.useMemo(
            () => [{ id: a.id.toString(), label: a.name }, ...t.map((e) => ({ id: e.id.toString(), label: e.name }))],
            [t, a],
        )),
        (s = (0, D.R4)()),
        (c = i.useCallback(
            (e) => {
                let t = n.find((t) => t.id === e);
                null != t &&
                    (O(k.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.label,
                        category_id: Number(t.id),
                        current_page: s?.type,
                    }),
                    ((e) => {
                        let { categoryId: t } = e,
                            a = { previousView: (0, D.R4)() };
                        (0, j.pX)(k.BVt.GLOBAL_DISCOVERY_APPS_CATEGORY(t), { state: a });
                    })({ categoryId: e }));
            },
            [s?.type, n],
        )),
        (p = null != e && n.some((t) => t.id === e) ? e : n[0].id),
        { tabs: n, selectedTab: p, onSelectTab: c }),
        [ee, et] = i.useState(!0),
        ea = D.h.useField("trackedOpenedFromExternalEntrypoint"),
        en = D.h.useField("sessionId"),
        el = (0, d.bG)([E.default], () => E.default.getCurrentUser());
    i.useEffect(() => {
        if (!ea && null == en) {
            let e = (0, b.YP)();
            N.default.track(k.HAw.APP_DIRECTORY_OPENED, { source: D.sW.EXTERNAL, session_id: e, user_id: el?.id }),
                D.h.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: D.sW.EXTERNAL },
                    guildId: null,
                });
        }
    }, [en, ea, el?.id]),
        i.useEffect(() => {
            S.bW();
        }, []),
        i.useEffect(() => {
            F && S.wD();
        }, [F]),
        i.useEffect(() => D.tS.setState({ lastItem: M }), [M]);
    let ei = null != Y,
        es = M?.type === D.ev.SEARCH,
        {
            searchQuery: er,
            onSearchTextChange: eo,
            onClearSearch: ec,
            onSearchSubmit: ed,
        } = (function (e) {
            let { initialQuery: t = "" } = e,
                a = y.A.useField("query");
            i.useEffect(() => y.A.setState({ query: t }), [t]);
            let n = i.useCallback((e) => {
                    y.A.setState({ query: e });
                }, []),
                l = i.useCallback(() => {
                    y.A.setState({ query: "" });
                }, []),
                s = i.useCallback(() => {
                    let e = B();
                    O(k.HAw.APP_DIRECTORY_SEARCH_STARTED, {
                        search_term: a,
                        category: e.name,
                        current_page: D.ev.HOME,
                        category_id: e.id,
                    }),
                        V({ query: a });
                }, [a]);
            return { searchQuery: a, onSearchTextChange: n, onClearSearch: l, onSearchSubmit: s };
        })({ initialQuery: X ?? "" }),
        eu = y.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: eh,
            onCollapsedSearchBarClick: em,
            onSearchBarBlur: ep,
            tabsClassName: e_,
        } = (0, A.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === er.trim(),
            searchBarState: eu,
            setSearchBarState: (e) => y.A.setState({ searchBarState: e }),
        }),
        eg = i.useCallback(
            (e) => {
                q(e), es && ec(), L();
            },
            [es, ec, q, L],
        ),
        ex = i.useCallback(
            (e) =>
                ((e) => {
                    let { applicationId: t } = e,
                        a = { previousView: (0, D.R4)() };
                    (0, j.pX)(k.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t), { state: a });
                })({ applicationId: e }),
            [],
        ),
        eA = ei || es,
        ef = i.useCallback(() => {
            if (null != (0, D.Bn)()) (0, j.aX)();
            else {
                let e;
                (e = { previousView: (0, D.R4)() }), (0, j.pX)(k.BVt.GLOBAL_DISCOVERY_APPS, { state: e });
            }
        }, []),
        eC = i.useMemo(
            () =>
                (0, o.debounce)((e) => {
                    let { scrollTop: t, offsetHeight: a, scrollHeight: n, location: l } = e;
                    t > 0 &&
                        O(k.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
                            scroll_visible_percentile: (t + a) / n,
                            current_page: l,
                        });
                }, 200),
            [],
        ),
        ev = i.useCallback(
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
    return (0, l.jsxs)("div", {
        className: r()(nW.nw, { [nW.Yz]: _ }),
        children: [
            _ ? (0, l.jsx)(nQ, {}) : null,
            (0, l.jsxs)("div", {
                className: nW.WH,
                children: [
                    (0, l.jsxs)(f.Ay, {
                        variant: eA ? f.Z5.RELATIVE : f.Z5.OVERLAY,
                        children: [
                            !eA && (0, l.jsx)(f.ns, { scrollPosition: P }),
                            ei
                                ? (0, l.jsx)(n$, { applicationId: Y, hideDetailHeaderButtons: ee, onClickBack: ef })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          es
                                              ? (0, l.jsx)(f.XQ, { icon: h.Z, onClick: ef })
                                              : (0, l.jsx)(f.T4, { icon: u.k }),
                                          es
                                              ? (0, l.jsx)(m.D, {
                                                    variant: "heading-lg/semibold",
                                                    color: "text-strong",
                                                    className: nW.wL,
                                                    children:
                                                        null != X && "" !== X
                                                            ? U.intl.formatToPlainString(U.t.zHdzqW, { query: X })
                                                            : U.intl.formatToPlainString(U.t.Qhj5Br, {
                                                                  categoryName: Q?.name ?? U.intl.string(U.t.E407b7),
                                                              }),
                                                })
                                              : (0, l.jsx)(C.A, {
                                                    className: e_,
                                                    tabs: Z,
                                                    selectedTab: J,
                                                    onTabSelect: eg,
                                                    onAvailableWidthChange: eh,
                                                }),
                                          (0, l.jsx)(v.A, {
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
                    ei
                        ? (0, l.jsx)(nb, {
                              onScroll: (e) => ev(e, D.ev.APPLICATION),
                              onSelectApplication: ex,
                              applicationId: Y,
                              initialTab: z,
                              onButtonsVisibilityChange: et,
                          })
                        : es
                          ? (0, l.jsx)(nK, { onSelectApplication: ex, onScroll: (e) => ev(e, D.ev.SEARCH) })
                          : J === w.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, l.jsx)(nk, { onScroll: (e) => ev(e, D.ev.HOME), onSelectApplication: ex })
                            : (0, l.jsx)(ey, {
                                  tabId: Number(J),
                                  onScroll: (e) => ev(e, D.ev.CATEGORY),
                                  onSelectApplication: ex,
                              }),
                ],
            }),
        ],
    });
};
