"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(534514),
    u = n(892547),
    c = n(939249),
    d = n(477155),
    _ = n(73153),
    f = n(497685),
    p = n(235986),
    h = n(151271),
    E = n(821102),
    m = n(996566),
    g = n(291147),
    A = n(380544),
    I = n(950301),
    T = n(247683),
    S = n(652215),
    y = n(732139),
    N = n(650583),
    v = n(985018),
    C = n(874926);
let O = (e) => e.stopPropagation();
class R extends i.PureComponent {
    state = { resultType: null };
    componentDidMount() {
        f.V$(),
            document.addEventListener("keydown", this.backToFrontPage),
            "" !== this.props.query && this.search(this.props.query, S.dD.SEARCH);
    }
    componentDidUpdate(e) {
        "" === e.query &&
            "" !== this.props.query &&
            null == this.state.resultType &&
            this.search(this.props.query, S.dD.SEARCH);
    }
    componentWillUnmount() {
        _.h.wait(() => f.Se()), document.removeEventListener("keydown", this.backToFrontPage);
    }
    search(e, t, n) {
        f.$P(e, t, n),
            "" === e
                ? this.setState({ resultType: null })
                : this.state.resultType !== S.dD.SEARCH && this.setState({ resultType: S.dD.SEARCH });
    }
    backToFrontPage = (e) => {
        let { resultType: t } = this.state;
        e.key !== N.dh.ESCAPE || (null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery()));
    };
    handleChangeQuery = (e) => {
        (0, h.Ri)(e), this.search(e, S.dD.SEARCH);
    };
    handleSelectSuggestion = (e) => {
        (0, h.Ri)(""), f.Se(), this.search(e, S.dD.SEARCH_SUGGESTION, !0);
    };
    handleClearQuery = () => {
        let { current: e } = this.props.searchBarRef;
        (0, h.Ri)(""), f.Se(), this.setState({ resultType: null }), null != e && e.focus();
    };
    handleSelectGIF = (e) => {
        let { onSelectGIF: t } = this.props;
        null != t && t(e);
    };
    handleSelectItem = (e, t) => {
        let { current: n } = this.props.searchBarRef;
        switch (e) {
            case S.dD.TRENDING_CATEGORY:
                f.$P(t, S.dD.TRENDING_CATEGORY, !0), null != n && n.focus();
                break;
            case S.dD.TRENDING_GIFS:
                f.Z4();
        }
        this.setState({ resultType: e });
    };
    renderHeaderContent() {
        let { query: e, headingColor: t } = this.props,
            { resultType: n } = this.state;
        switch (n) {
            case S.dD.FAVORITES:
                return (0, r.jsx)(l.D, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: C.wL,
                    children: v.intl.string(v.t.y3LQCG),
                });
            case S.dD.TRENDING_GIFS:
                return (0, r.jsx)(l.D, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: C.wL,
                    children: v.intl.string(v.t.H6zNFz),
                });
            default: {
                let t = (0, A.cf)(),
                    n = (0, g.w)(t);
                return (0, r.jsx)(u.I, {
                    query: e,
                    onChange: this.handleChangeQuery,
                    onClear: this.handleClearQuery,
                    placeholder: n,
                    "aria-label": n,
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
                (t = (0, r.jsx)(c.D, {
                    onClick: this.handleClearQuery,
                    className: C.Gv,
                    "aria-label": v.intl.string(v.t["13/7kX"]),
                    children: (0, r.jsx)(d.r, { size: "md", color: "currentColor" }),
                })),
            (0, r.jsxs)(p.A, { align: p.A.Align.CENTER, children: [t, this.renderHeaderContent()] })
        );
    }
    renderContent() {
        let {
                contentClassName: e,
                resultItems: t,
                resultQuery: n,
                query: i,
                favorites: s,
                searchOffset: a,
                searchLimit: o,
                searchTotalResults: l,
                suggestions: u,
                hideFavorites: c,
            } = this.props,
            { resultType: d } = this.state;
        return null == d
            ? (0, r.jsx)(I.A, { className: e, hideFavoritesTile: c, onSelectItem: this.handleSelectItem })
            : (0, r.jsx)(T.Ay, {
                  className: e,
                  data: d === S.dD.FAVORITES ? s : t,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: d,
                  resultQuery: n,
                  query: i,
                  searchOffset: a,
                  searchLimit: o,
                  searchTotalResults: l,
                  suggestions: u,
                  onSelectSuggestion: this.handleSelectSuggestion,
                  selectedGIF: this.props.selectedGIF,
              });
    }
    render() {
        let { className: e, forwardedRef: t } = this.props;
        return (0, r.jsxs)("div", {
            id: y.ni,
            role: "tabpanel",
            "aria-labelledby": y.g9,
            className: a()(C.kL, e),
            onClick: O,
            ref: t,
            children: [
                (0, r.jsx)("div", { className: a()(C.wx, this.props.headerClassName), children: this.renderHeader() }),
                (0, r.jsx)("div", { className: C.Qs, children: this.renderContent() }),
            ],
        });
    }
}
let b = i.forwardRef((e, t) => {
    i.useEffect(() => {
        e.persistSearch || ((0, h.Ri)(e.initialQuery ?? ""), f.$P(e.initialQuery ?? "", S.dD.SEARCH));
    }, [e.persistSearch, e.initialQuery]);
    let {
            query: n,
            resultQuery: s,
            resultItems: a,
            suggestions: l,
        } = (0, o.cf)([E.A], () => ({
            query: E.A.getQuery(),
            resultQuery: E.A.getResultQuery(),
            resultItems: E.A.getResultItems(),
            suggestions: E.A.getSuggestions(),
        })),
        u = (0, h.RQ)((e) => e.searchQuery),
        c = (0, m.IE)(),
        d = i.useRef(null);
    return (0, r.jsx)(R, {
        ...e,
        forwardedRef: t,
        query: null != n && "" !== n ? n : u,
        resultQuery: s,
        resultItems: a,
        suggestions: l,
        favorites: c,
        searchOffset: 0,
        searchTotalResults: E.A.getResultItems().length,
        searchLimit: null,
        searchBarRef: d,
        selectedGIF: e.selectedGIF,
    });
});
