r.d(t, { A: () => N });
var s = r(627968),
    l = r(64700),
    n = r(503698),
    i = r.n(n),
    o = r(311907),
    a = r(534514),
    c = r(892547),
    u = r(939249),
    d = r(477155),
    h = r(73153),
    m = r(497685),
    f = r(235986),
    p = r(151271),
    g = r(821102),
    E = r(996566),
    _ = r(291147),
    R = r(380544),
    I = r(950301),
    A = r(247683),
    C = r(652215),
    v = r(732139),
    w = r(650583),
    S = r(985018),
    y = r(24878);
let x = (e) => e.stopPropagation();
class T extends l.PureComponent {
    state = { resultType: null };
    componentDidMount() {
        m.V$(),
            document.addEventListener("keydown", this.backToFrontPage),
            "" !== this.props.query && this.search(this.props.query, C.dD.SEARCH);
    }
    componentDidUpdate(e) {
        "" === e.query &&
            "" !== this.props.query &&
            null == this.state.resultType &&
            this.search(this.props.query, C.dD.SEARCH);
    }
    componentWillUnmount() {
        h.h.wait(() => m.Se()), document.removeEventListener("keydown", this.backToFrontPage);
    }
    search(e, t, r) {
        m.$P(e, t, r),
            "" === e
                ? this.setState({ resultType: null })
                : this.state.resultType !== C.dD.SEARCH && this.setState({ resultType: C.dD.SEARCH });
    }
    backToFrontPage = (e) => {
        let { resultType: t } = this.state;
        e.key !== w.dh.ESCAPE || (null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery()));
    };
    handleChangeQuery = (e) => {
        (0, p.Ri)(e), this.search(e, C.dD.SEARCH);
    };
    handleSelectSuggestion = (e) => {
        (0, p.Ri)(""), m.Se(), this.search(e, C.dD.SEARCH_SUGGESTION, !0);
    };
    handleClearQuery = () => {
        let { current: e } = this.props.searchBarRef;
        (0, p.Ri)(""), m.Se(), this.setState({ resultType: null }), null != e && e.focus();
    };
    handleSelectGIF = (e) => {
        let { onSelectGIF: t } = this.props;
        null != t && t(e);
    };
    handleSelectItem = (e, t) => {
        let { current: r } = this.props.searchBarRef;
        switch (e) {
            case C.dD.TRENDING_CATEGORY:
                m.$P(t, C.dD.TRENDING_CATEGORY, !0), null != r && r.focus();
                break;
            case C.dD.TRENDING_GIFS:
                m.Z4();
        }
        this.setState({ resultType: e });
    };
    renderHeaderContent() {
        let { query: e, headingColor: t } = this.props,
            { resultType: r } = this.state;
        switch (r) {
            case C.dD.FAVORITES:
                return (0, s.jsx)(a.D, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: y.wL,
                    children: S.intl.string(S.t.y3LQCG),
                });
            case C.dD.TRENDING_GIFS:
                return (0, s.jsx)(a.D, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: y.wL,
                    children: S.intl.string(S.t.H6zNFz),
                });
            default: {
                let t = (0, R.cf)(),
                    r = (0, _.w)(t);
                return (0, s.jsx)(c.I, {
                    query: e,
                    onChange: this.handleChangeQuery,
                    onClear: this.handleClearQuery,
                    placeholder: r,
                    "aria-label": r,
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
                (t = (0, s.jsx)(u.D, {
                    onClick: this.handleClearQuery,
                    className: y.Gv,
                    "aria-label": S.intl.string(S.t["13/7kX"]),
                    children: (0, s.jsx)(d.r, { size: "md", color: "currentColor" }),
                })),
            (0, s.jsxs)(f.A, { align: f.A.Align.CENTER, children: [t, this.renderHeaderContent()] })
        );
    }
    renderContent() {
        let {
                contentClassName: e,
                resultItems: t,
                resultQuery: r,
                query: l,
                favorites: n,
                searchOffset: i,
                searchLimit: o,
                searchTotalResults: a,
                suggestions: c,
                hideFavorites: u,
            } = this.props,
            { resultType: d } = this.state;
        return null == d
            ? (0, s.jsx)(I.A, { className: e, hideFavoritesTile: u, onSelectItem: this.handleSelectItem })
            : (0, s.jsx)(A.Ay, {
                  className: e,
                  data: d === C.dD.FAVORITES ? n : t,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: d,
                  resultQuery: r,
                  query: l,
                  searchOffset: i,
                  searchLimit: o,
                  searchTotalResults: a,
                  suggestions: c,
                  onSelectSuggestion: this.handleSelectSuggestion,
                  selectedGIF: this.props.selectedGIF,
              });
    }
    render() {
        let { className: e, forwardedRef: t } = this.props;
        return (0, s.jsxs)("div", {
            id: v.ni,
            role: "tabpanel",
            "aria-labelledby": v.g9,
            className: i()(y.kL, e),
            onClick: x,
            ref: t,
            children: [
                (0, s.jsx)("div", { className: i()(y.wx, this.props.headerClassName), children: this.renderHeader() }),
                (0, s.jsx)("div", { className: y.Qs, children: this.renderContent() }),
            ],
        });
    }
}
let N = l.forwardRef((e, t) => {
    l.useEffect(() => {
        e.persistSearch || ((0, p.Ri)(e.initialQuery ?? ""), m.$P(e.initialQuery ?? "", C.dD.SEARCH));
    }, [e.persistSearch, e.initialQuery]);
    let {
            query: r,
            resultQuery: n,
            resultItems: i,
            suggestions: a,
        } = (0, o.cf)([g.A], () => ({
            query: g.A.getQuery(),
            resultQuery: g.A.getResultQuery(),
            resultItems: g.A.getResultItems(),
            suggestions: g.A.getSuggestions(),
        })),
        c = (0, p.RQ)((e) => e.searchQuery),
        u = (0, E.IE)(),
        d = l.useRef(null);
    return (0, s.jsx)(T, {
        ...e,
        forwardedRef: t,
        query: null != r && "" !== r ? r : c,
        resultQuery: n,
        resultItems: i,
        suggestions: a,
        favorites: u,
        searchOffset: 0,
        searchTotalResults: g.A.getResultItems().length,
        searchLimit: null,
        searchBarRef: d,
        selectedGIF: e.selectedGIF,
    });
});
