"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(73153),
    c = n(497685),
    d = n(235986),
    _ = n(151271),
    f = n(821102),
    p = n(996566),
    h = n(291147),
    m = n(380544),
    E = n(950301),
    g = n(247683),
    A = n(652215),
    I = n(732139),
    T = n(650583),
    S = n(985018),
    y = n(666494);
let v = (e) => e.stopPropagation();
class N extends i.PureComponent {
    state = { resultType: null };
    componentDidMount() {
        c.V$(),
            document.addEventListener("keydown", this.backToFrontPage),
            "" !== this.props.query && this.search(this.props.query, A.dD.SEARCH);
    }
    componentDidUpdate(e) {
        "" === e.query &&
            "" !== this.props.query &&
            null == this.state.resultType &&
            this.search(this.props.query, A.dD.SEARCH);
    }
    componentWillUnmount() {
        u.h.wait(() => c.Se()), document.removeEventListener("keydown", this.backToFrontPage);
    }
    search(e, t, n) {
        c.$P(e, t, n),
            "" === e
                ? this.setState({ resultType: null })
                : this.state.resultType !== A.dD.SEARCH && this.setState({ resultType: A.dD.SEARCH });
    }
    backToFrontPage = (e) => {
        let { resultType: t } = this.state;
        e.key !== T.dh.ESCAPE || (null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery()));
    };
    handleChangeQuery = (e) => {
        (0, _.Ri)(e), this.search(e, A.dD.SEARCH);
    };
    handleSelectSuggestion = (e) => {
        (0, _.Ri)(""), c.Se(), this.search(e, A.dD.SEARCH_SUGGESTION, !0);
    };
    handleClearQuery = () => {
        let { current: e } = this.props.searchBarRef;
        (0, _.Ri)(""), c.Se(), this.setState({ resultType: null }), null != e && e.focus();
    };
    handleSelectGIF = (e) => {
        let { onSelectGIF: t } = this.props;
        null != t && t(e);
    };
    handleSelectItem = (e, t) => {
        let { current: n } = this.props.searchBarRef;
        switch (e) {
            case A.dD.TRENDING_CATEGORY:
                c.$P(t, A.dD.TRENDING_CATEGORY, !0), null != n && n.focus();
                break;
            case A.dD.TRENDING_GIFS:
                c.Z4();
        }
        this.setState({ resultType: e });
    };
    renderHeaderContent() {
        let { query: e, headingColor: t } = this.props,
            { resultType: n } = this.state;
        switch (n) {
            case A.dD.FAVORITES:
                return (0, r.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: y.wL,
                    children: S.intl.string(S.t.y3LQCG),
                });
            case A.dD.TRENDING_GIFS:
                return (0, r.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: y.wL,
                    children: S.intl.string(S.t.H6zNFz),
                });
            default: {
                let t = (0, m.cf)(),
                    n = (0, h.w)(t);
                return (0, r.jsx)(l.IWV, {
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
                (t = (0, r.jsx)(l.DUT, {
                    onClick: this.handleClearQuery,
                    className: y.Gv,
                    "aria-label": S.intl.string(S.t["13/7kX"]),
                    children: (0, r.jsx)(l.rJJ, { size: "md", color: "currentColor" }),
                })),
            (0, r.jsxs)(d.A, { align: d.A.Align.CENTER, children: [t, this.renderHeaderContent()] })
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
            ? (0, r.jsx)(E.A, { className: e, hideFavoritesTile: c, onSelectItem: this.handleSelectItem })
            : (0, r.jsx)(g.Ay, {
                  className: e,
                  data: d === A.dD.FAVORITES ? s : t,
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
            id: I.ni,
            role: "tabpanel",
            "aria-labelledby": I.g9,
            className: a()(y.kL, e),
            onClick: v,
            ref: t,
            children: [
                (0, r.jsx)("div", { className: a()(y.wx, this.props.headerClassName), children: this.renderHeader() }),
                (0, r.jsx)("div", { className: y.Qs, children: this.renderContent() }),
            ],
        });
    }
}
let C = i.forwardRef((e, t) => {
    i.useEffect(() => {
        e.persistSearch || ((0, _.Ri)(e.initialQuery ?? ""), c.$P(e.initialQuery ?? "", A.dD.SEARCH));
    }, [e.persistSearch, e.initialQuery]);
    let {
            query: n,
            resultQuery: s,
            resultItems: a,
            suggestions: l,
        } = (0, o.cf)([f.A], () => ({
            query: f.A.getQuery(),
            resultQuery: f.A.getResultQuery(),
            resultItems: f.A.getResultItems(),
            suggestions: f.A.getSuggestions(),
        })),
        u = (0, _.RQ)((e) => e.searchQuery),
        d = null != n && "" !== n ? n : u,
        h = (0, p.IE)(),
        m = i.useRef(null);
    return (0, r.jsx)(N, {
        ...e,
        forwardedRef: t,
        query: d,
        resultQuery: s,
        resultItems: a,
        suggestions: l,
        favorites: h,
        searchOffset: 0,
        searchTotalResults: f.A.getResultItems().length,
        searchLimit: null,
        searchBarRef: m,
        selectedGIF: e.selectedGIF,
    });
});
