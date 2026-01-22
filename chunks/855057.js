n.d(t, { A: () => w }), n(747238), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(73153),
    u = n(497685),
    d = n(235986),
    f = n(151271),
    p = n(821102),
    _ = n(996566),
    h = n(291147),
    m = n(380544),
    g = n(950301),
    E = n(247683),
    b = n(652215),
    y = n(732139),
    O = n(650583),
    A = n(985018),
    v = n(418981);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = (e) => e.stopPropagation();
class R extends i.PureComponent {
    componentDidMount() {
        u.V$(),
            document.addEventListener("keydown", this.backToFrontPage),
            "" !== this.props.query && this.search(this.props.query, b.dD.SEARCH);
    }
    componentDidUpdate(e) {
        "" === e.query &&
            "" !== this.props.query &&
            null == this.state.resultType &&
            this.search(this.props.query, b.dD.SEARCH);
    }
    componentWillUnmount() {
        c.h.wait(() => u.Se()), document.removeEventListener("keydown", this.backToFrontPage);
    }
    search(e, t, n) {
        u.$P(e, t, n),
            "" === e
                ? this.setState({ resultType: null })
                : this.state.resultType !== b.dD.SEARCH && this.setState({ resultType: b.dD.SEARCH });
    }
    renderHeaderContent() {
        let { query: e, headingColor: t } = this.props,
            { resultType: n } = this.state;
        switch (n) {
            case b.dD.FAVORITES:
                return (0, r.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: v.wL,
                    children: A.intl.string(A.t.y3LQCG),
                });
            case b.dD.TRENDING_GIFS:
                return (0, r.jsx)(l.Heading, {
                    variant: "heading-md/semibold",
                    color: t,
                    className: v.wL,
                    children: A.intl.string(A.t.H6zNFz),
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
                    className: v.Gv,
                    "aria-label": A.intl.string(A.t["13/7kX"]),
                    children: (0, r.jsx)(l.rJJ, {
                        size: "md",
                        color: "currentColor",
                    }),
                })),
            (0, r.jsxs)(d.A, {
                align: d.A.Align.CENTER,
                children: [t, this.renderHeaderContent()],
            })
        );
    }
    renderContent() {
        let {
                contentClassName: e,
                resultItems: t,
                resultQuery: n,
                query: i,
                favorites: a,
                searchOffset: s,
                searchLimit: o,
                searchTotalResults: l,
                suggestions: c,
                hideFavorites: u,
            } = this.props,
            { resultType: d } = this.state;
        return null == d
            ? (0, r.jsx)(g.A, {
                  className: e,
                  hideFavoritesTile: u,
                  onSelectItem: this.handleSelectItem,
              })
            : (0, r.jsx)(E.Ay, {
                  className: e,
                  data: d === b.dD.FAVORITES ? a : t,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: d,
                  resultQuery: n,
                  query: i,
                  searchOffset: s,
                  searchLimit: o,
                  searchTotalResults: l,
                  suggestions: c,
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
            className: s()(v.kL, e),
            onClick: N,
            ref: t,
            children: [
                (0, r.jsx)("div", {
                    className: s()(v.wx, this.props.headerClassName),
                    children: this.renderHeader(),
                }),
                (0, r.jsx)("div", {
                    className: v.Qs,
                    children: this.renderContent(),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            S(this, "state", { resultType: null }),
            S(this, "backToFrontPage", (e) => {
                let { resultType: t } = this.state;
                e.key !== O.dh.ESCAPE ||
                    (null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery()));
            }),
            S(this, "handleChangeQuery", (e) => {
                (0, f.Ri)(e), this.search(e, b.dD.SEARCH);
            }),
            S(this, "handleSelectSuggestion", (e) => {
                (0, f.Ri)(""), u.Se(), this.search(e, b.dD.SEARCH_SUGGESTION, !0);
            }),
            S(this, "handleClearQuery", () => {
                let { current: e } = this.props.searchBarRef;
                (0, f.Ri)(""), u.Se(), this.setState({ resultType: null }), null != e && e.focus();
            }),
            S(this, "handleSelectGIF", (e) => {
                let { onSelectGIF: t } = this.props;
                null != t && t(e);
            }),
            S(this, "handleSelectItem", (e, t) => {
                let { current: n } = this.props.searchBarRef;
                switch (e) {
                    case b.dD.TRENDING_CATEGORY:
                        u.$P(t, b.dD.TRENDING_CATEGORY, !0), null != n && n.focus();
                        break;
                    case b.dD.TRENDING_GIFS:
                        u.Z4();
                }
                this.setState({ resultType: e });
            });
    }
}
let w = i.forwardRef((e, t) => {
    i.useEffect(() => {
        if (!e.persistSearch) {
            var t;
            (0, f.Ri)(null != (t = e.initialQuery) ? t : "");
        }
    }, [e.persistSearch, e.initialQuery]);
    let {
            query: n,
            resultQuery: a,
            resultItems: s,
            suggestions: l,
        } = (0, o.cf)([p.A], () => ({
            query: p.A.getQuery(),
            resultQuery: p.A.getResultQuery(),
            resultItems: p.A.getResultItems(),
            suggestions: p.A.getSuggestions(),
        })),
        c = (0, f.RQ)((e) => e.searchQuery),
        u = null != n && "" !== n ? n : c,
        d = (0, _.IE)(),
        h = i.useRef(null);
    return (0, r.jsx)(
        R,
        C(I({}, e), {
            forwardedRef: t,
            query: u,
            resultQuery: a,
            resultItems: s,
            suggestions: l,
            favorites: d,
            searchOffset: 0,
            searchTotalResults: p.A.getResultItems().length,
            searchLimit: null,
            searchBarRef: h,
            selectedGIF: e.selectedGIF,
        }),
    );
});
