r.d(t, { A: () => $ });
var n = r(477900),
    s = r(582128),
    l = r(503698),
    i = r.n(l),
    a = r(17928),
    o = r(297264),
    u = r(892547),
    c = r(939249),
    d = r(477155),
    h = r(228366),
    m = r(497685),
    p = r(235986),
    g = r(151271),
    f = r(821102),
    I = r(996566),
    E = r(336807),
    R = r(435558),
    _ = r.n(R),
    y = r(803805),
    S = r(661531),
    v = r(27232),
    C = r(555704),
    A = r(92008),
    w = r(25277),
    x = r(583613),
    F = r(327143),
    T = r(615300),
    N = r(676949);
let G = [S.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, S.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"];
class D extends s.PureComponent {
    state = { backgroundColor: _().sample(G) };
    render() {
        let {
            props: { height: e },
            state: { backgroundColor: t },
        } = this;
        return (0, n.jsx)("div", { style: { height: e, backgroundColor: t }, className: N.nX });
    }
}
class j extends s.Component {
    static defaultProps = { direction: -1 };
    constructor(e) {
        super(e);
        const t = Array(10)
            .fill(null)
            .map(() => _().random(40, 150));
        this.state = { blocks: t, height: 2 * t.reduce((e, t) => e + t + 12, 12), translateY: new T.A.Value(0) };
    }
    componentDidMount() {
        this.animateSlide();
    }
    animateSlide = () => {
        let {
            props: { direction: e },
            state: { translateY: t, height: r },
        } = this;
        t.setValue(e > 0 ? 0 : -r / 2 + 12),
            T.A.timing(t, { toValue: e > 0 ? -r / 2 + 12 : 0, duration: 800, easing: T.A.Easing.linear }).start(
                this.animateSlide,
            );
    };
    getAnimatedStyle() {
        let {
            props: { columns: e },
            state: { translateY: t },
        } = this;
        return {
            width: `${100 / e}%`,
            transform: [{ translateY: t.interpolate({ inputRange: [0, 1], outputRange: ["0px", "1px"] }) }],
        };
    }
    render() {
        let { blocks: e } = this.state;
        return (0, n.jsxs)(T.A.div, {
            className: N.fi,
            style: this.getAnimatedStyle(),
            children: [
                e.map((e, t) => (0, n.jsx)(D, { height: e }, t)),
                e.map((e, t) => (0, n.jsx)(D, { height: e }, `alt${t}`)),
            ],
        });
    }
}
function P(e) {
    let { columns: t } = e;
    return (0, n.jsx)("div", {
        className: N.fi,
        style: { width: `${100 / t}%` },
        children: [, , , ,].fill(null).map((e, t) => (0, n.jsx)("div", { className: N.c8 }, t)),
    });
}
class k extends s.PureComponent {
    render() {
        let { columns: e, renderColumn: t } = this.props;
        return (0, n.jsx)("div", {
            className: N.kL,
            children: Array(e)
                .fill(null)
                .map((r, n) => t(e, n)),
        });
    }
}
var L = r(285961),
    b = r(652215),
    M = r(375708),
    U = r(787004);
function O(e, t) {
    return (0, n.jsx)(P, { columns: e }, t);
}
class V extends s.PureComponent {
    _masonryRef = s.createRef();
    state = {
        favoritesTile: (function (e) {
            let t = _().sample(_().values(e));
            return {
                type: b.dD.FAVORITES,
                name: M.intl.string(M.t.y3LQCG),
                icon: v.StarIcon,
                src: null != t ? t.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
                format: t?.format ?? y.TL.IMAGE,
            };
        })(this.props.favorites),
        selectedIndex: { column: 0, row: 0 },
        focusedId: null,
    };
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, m.k8)();
    }
    handleFocus = (e) => {
        let { current: t } = this._masonryRef;
        if (null == t) return;
        let r = t.getCoordsMap()[e];
        null != r &&
            (t.scrollIntoViewRect({ start: r.top - 10, end: r.top + r.height + 10 }), this.setState({ focusedId: e }));
    };
    handleSelect = (e) => {
        let { onSelectItem: t } = this.props,
            r = this.getData().find((t) => t.name === e);
        null != r && null != t && t(r.type, r.name);
    };
    getItemKey = (e, t) => {
        if (e > 0) return null;
        let r = this.getData()[t];
        return null != r ? r.name : null;
    };
    memoizedData = (0, x.L_)(function (e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return r ? [...t] : [e, ...t];
    });
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: t, type: r } = e;
        return (0, n.jsxs)(s.Fragment, {
            children: [
                (0, n.jsx)("div", { className: r === b.dD.FAVORITES ? U.H7 : U.FP }),
                (0, n.jsxs)("div", {
                    className: U.O1,
                    children: [
                        r === b.dD.TRENDING_GIFS ? (0, n.jsx)(C.U, { className: U.Yl, color: "currentColor" }) : null,
                        (0, n.jsx)("span", { className: U.yb, children: t }),
                    ],
                }),
            ],
        });
    }
    renderItem = (e, t, r, s) => {
        if (e > 0) return null;
        let l = this.getData()[t];
        if (null == l) return;
        let { onSelectItem: i, imagePool: a, videoPool: o } = this.props,
            { focusedId: u } = this.state;
        return (0, n.jsx)(
            L.uG,
            {
                format: l.format,
                color: S.A.unsafe_rawColors.PRIMARY_800.css,
                src: l.src,
                item: l,
                index: t,
                coords: r,
                onClick: () => i(l.type, l.name),
                renderExtras: this.renderCategoryExtras,
                focused: l.name === u,
                imagePool: a,
                videoPool: o,
                "aria-label": l.name,
            },
            s,
        );
    };
    renderContent = (e, t, r) => {
        let { className: s, trendingCategories: l } = this.props;
        return 0 === l.length
            ? (0, n.jsx)(k, { columns: e, width: t, renderColumn: O })
            : (0, n.jsx)(A.f, {
                  ref: this._masonryRef,
                  fade: !0,
                  className: i()(U.kL, s),
                  itemGutter: 12,
                  getItemKey: this.getItemKey,
                  columns: e,
                  getItemHeight: () => 110,
                  renderItem: this.renderItem,
                  sections: [this.getData().length],
                  chunkSize: 50,
              });
    };
    getItemGrid = () => {
        let { current: e } = this._masonryRef;
        return null != e ? e.getItemGrid() : [];
    };
    getCoordsMap = () => {
        let { current: e } = this._masonryRef;
        return null != e ? e.getCoordsMap() : {};
    };
    render() {
        return (0, n.jsx)(w.A, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, n.jsx)(F.A, { desiredItemWidth: 200, maxColumns: 6, children: this.renderContent }),
        });
    }
}
function H(e) {
    let t = (0, a.bG)([f.A], () => f.A.getTrendingCategories()),
        r = (0, I.rM)(),
        s = (0, L.d5)();
    return (0, n.jsx)(V, { ...e, ...s, trendingCategories: t, favorites: r });
}
var W = r(732139),
    Q = r(650583),
    K = r(658150);
function q(e) {
    return e.stopPropagation();
}
class B extends s.PureComponent {
    state = { resultType: null };
    componentDidMount() {
        m.V$(),
            document.addEventListener("keydown", this.backToFrontPage),
            "" !== this.props.query && this.search(this.props.query, b.dD.SEARCH);
    }
    componentDidUpdate(e) {
        "" === e.query &&
            "" !== this.props.query &&
            null == this.state.resultType &&
            this.search(this.props.query, b.dD.SEARCH),
            "" !== e.query &&
                "" === this.props.query &&
                this.state.resultType === b.dD.SEARCH &&
                this.setState({ resultType: null });
    }
    componentWillUnmount() {
        h.h.wait(() => m.Se()), document.removeEventListener("keydown", this.backToFrontPage);
    }
    search(e, t, r) {
        m.$P(e, t, r),
            "" === e
                ? this.setState({ resultType: null })
                : this.state.resultType !== b.dD.SEARCH && this.setState({ resultType: b.dD.SEARCH });
    }
    backToFrontPage = (e) => {
        let { resultType: t } = this.state;
        e.key !== Q.dh.ESCAPE || (null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery()));
    };
    handleChangeQuery = (e) => {
        (0, g.Ri)(e), this.search(e, b.dD.SEARCH);
    };
    handleSelectSuggestion = (e) => {
        (0, g.Ri)(""), m.Se(), this.search(e, b.dD.SEARCH_SUGGESTION, !0);
    };
    handleClearQuery = () => {
        let { current: e } = this.props.searchBarRef;
        (0, g.Ri)(""), m.Se(), this.setState({ resultType: null }), null != e && e.focus();
    };
    handleSelectGIF = (e) => {
        let { onSelectGIF: t } = this.props;
        null != t && t(e);
    };
    handleSelectItem = (e, t) => {
        switch (e) {
            case b.dD.TRENDING_CATEGORY:
                m.$P(t, b.dD.TRENDING_CATEGORY, !0);
                break;
            case b.dD.TRENDING_GIFS:
                m.Z4();
        }
        this.setState({ resultType: e }, () => {
            if (e === b.dD.TRENDING_CATEGORY) {
                let { current: e } = this.props.searchBarRef;
                null != e && e.focus();
            }
        });
    };
    renderHeaderContent() {
        let { query: e, favorites: t, headingColor: r } = this.props,
            { resultType: s } = this.state;
        switch (s) {
            case b.dD.FAVORITES:
                return (0, n.jsxs)("div", {
                    className: K.XK,
                    children: [
                        (0, n.jsx)(o.D, {
                            variant: "heading-md/semibold",
                            color: r,
                            className: K.wL,
                            children: M.intl.string(M.t.y3LQCG),
                        }),
                        t.length > 0 &&
                            (0, n.jsx)(u.I, {
                                query: e,
                                onChange: g.Ri,
                                onClear: () => (0, g.Ri)(""),
                                placeholder: M.intl.string(M.t["+Kakw+"]),
                                "aria-label": M.intl.string(M.t["+Kakw+"]),
                                ref: this.props.searchBarRef,
                                autoFocus: !0,
                            }),
                    ],
                });
            case b.dD.TRENDING_GIFS:
                return (0, n.jsx)(o.D, {
                    variant: "heading-md/semibold",
                    color: r,
                    className: K.wL,
                    children: M.intl.string(M.t.H6zNFz),
                });
            default: {
                let t = (0, E.wT)();
                return (0, n.jsx)(u.I, {
                    query: e,
                    onChange: this.handleChangeQuery,
                    onClear: this.handleClearQuery,
                    placeholder: t,
                    "aria-label": t,
                    ref: this.props.searchBarRef,
                    autoFocus: !0,
                });
            }
        }
    }
    renderHeader() {
        let { resultType: e } = this.state,
            t = null;
        return (
            null != e &&
                (t = (0, n.jsx)(c.D, {
                    onClick: this.handleClearQuery,
                    className: K.Gv,
                    "aria-label": M.intl.string(M.t["13/7kX"]),
                    children: (0, n.jsx)(d.r, { size: "md", color: "currentColor" }),
                })),
            (0, n.jsxs)(p.A, { align: p.A.Align.CENTER, children: [t, this.renderHeaderContent()] })
        );
    }
    renderContent() {
        let {
                contentClassName: e,
                resultItems: t,
                resultQuery: r,
                query: s,
                favorites: l,
                searchOffset: i,
                searchLimit: a,
                searchTotalResults: o,
                suggestions: u,
                hideFavorites: c,
            } = this.props,
            { resultType: d } = this.state;
        return null == d
            ? (0, n.jsx)(H, { className: e, hideFavoritesTile: c, onSelectItem: this.handleSelectItem })
            : (0, n.jsx)(L.Ay, {
                  className: e,
                  data:
                      d === b.dD.FAVORITES
                          ? (function (e, t) {
                                if ("" === t) return e;
                                let r = t.toLowerCase().replace(/[-_ ]/g, "");
                                return e.filter((e) => {
                                    let { url: t } = e;
                                    return t.toLowerCase().replace(/[-_]/g, "").includes(r);
                                });
                            })(l, s)
                          : t,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: d,
                  resultQuery: r,
                  query: s,
                  searchOffset: i,
                  searchLimit: a,
                  searchTotalResults: o,
                  suggestions: u,
                  onSelectSuggestion: this.handleSelectSuggestion,
                  selectedGIF: this.props.selectedGIF,
              });
    }
    render() {
        let { className: e, forwardedRef: t } = this.props;
        return (0, n.jsxs)("div", {
            id: W.ni,
            role: "tabpanel",
            "aria-labelledby": W.g9,
            className: i()(K.kL, e),
            onClick: q,
            ref: t,
            children: [
                (0, n.jsx)("div", { className: i()(K.wx, this.props.headerClassName), children: this.renderHeader() }),
                (0, n.jsx)("div", { className: K.Qs, children: this.renderContent() }),
            ],
        });
    }
}
let $ = s.forwardRef((e, t) => {
    s.useEffect(
        () => (
            e.persistSearch || ((0, g.Ri)(e.initialQuery ?? ""), m.$P(e.initialQuery ?? "", b.dD.SEARCH)),
            () => {
                e.persistSearch || (0, g.Ri)("");
            }
        ),
        [e.persistSearch, e.initialQuery],
    );
    let {
            query: r,
            resultQuery: l,
            resultItems: i,
            suggestions: o,
        } = (0, a.cf)([f.A], () => ({
            query: f.A.getQuery(),
            resultQuery: f.A.getResultQuery(),
            resultItems: f.A.getResultItems(),
            suggestions: f.A.getSuggestions(),
        })),
        u = (0, g.RQ)((e) => e.searchQuery),
        c = (0, I.IE)(),
        d = s.useRef(null);
    return (0, n.jsx)(B, {
        ...e,
        forwardedRef: t,
        query: null != r && "" !== r ? r : u,
        resultQuery: l,
        resultItems: i,
        suggestions: o,
        favorites: c,
        searchOffset: 0,
        searchTotalResults: f.A.getResultItems().length,
        searchLimit: null,
        searchBarRef: d,
        selectedGIF: e.selectedGIF,
    });
});
