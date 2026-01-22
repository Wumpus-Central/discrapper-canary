n.d(t, { A: () => P }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(311907),
    u = n(803805),
    d = n(827734),
    f = n(397927),
    p = n(497685),
    _ = n(25277),
    h = n(821102),
    m = n(583613),
    g = n(996566),
    E = n(327143),
    b = n(453212),
    y = n(247683),
    O = n(652215),
    A = n(985018),
    v = n(17697);
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
let N = (e, t) => (0, r.jsx)(b.XW, { columns: e }, t);
function R(e) {
    var t;
    let n = l().sample(l().values(e));
    return {
        type: O.dD.FAVORITES,
        name: A.intl.string(A.t.y3LQCG),
        icon: f.Gg5,
        src: null != n ? n.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
        format: null != (t = null == n ? void 0 : n.format) ? t : u.TL.IMAGE,
    };
}
class w extends i.PureComponent {
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, p.k8)();
    }
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: t, type: n } = e;
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)("div", { className: n === O.dD.FAVORITES ? v.H7 : v.FP }),
                (0, r.jsxs)("div", {
                    className: v.O1,
                    children: [
                        n === O.dD.TRENDING_GIFS
                            ? (0, r.jsx)(f.Uy2, {
                                  className: v.Yl,
                                  color: "currentColor",
                              })
                            : null,
                        (0, r.jsx)("span", {
                            className: v.yb,
                            children: t,
                        }),
                    ],
                }),
            ],
        });
    }
    render() {
        return (0, r.jsx)(_.A, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, r.jsx)(E.A, {
                desiredItemWidth: 200,
                maxColumns: 6,
                children: this.renderContent,
            }),
        });
    }
    constructor(...e) {
        super(...e),
            S(this, "_masonryRef", i.createRef()),
            S(this, "state", {
                favoritesTile: R(this.props.favorites),
                selectedIndex: {
                    column: 0,
                    row: 0,
                },
                focusedId: null,
            }),
            S(this, "handleFocus", (e) => {
                let { current: t } = this._masonryRef;
                if (null == t) return;
                let n = t.getCoordsMap()[e];
                null != n &&
                    (t.scrollIntoViewRect({
                        start: n.top - 10,
                        end: n.top + n.height + 10,
                    }),
                    this.setState({ focusedId: e }));
            }),
            S(this, "handleSelect", (e) => {
                let { onSelectItem: t } = this.props,
                    n = this.getData().find((t) => t.name === e);
                null != n && null != t && t(n.type, n.name);
            }),
            S(this, "getItemKey", (e, t) => {
                if (e > 0) return null;
                let n = this.getData()[t];
                return null != n ? n.name : null;
            }),
            S(
                this,
                "memoizedData",
                (0, m.L_)(function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? [...t] : [e, ...t];
                }),
            ),
            S(this, "renderItem", (e, t, n, i) => {
                if (e > 0) return null;
                let a = this.getData()[t];
                if (null == a) return;
                let { onSelectItem: s, imagePool: o, videoPool: l } = this.props,
                    { focusedId: c } = this.state;
                return (0, r.jsx)(
                    y.uG,
                    {
                        format: a.format,
                        color: d.A.unsafe_rawColors.PRIMARY_800.css,
                        src: a.src,
                        item: a,
                        index: t,
                        coords: n,
                        onClick: () => s(a.type, a.name),
                        renderExtras: this.renderCategoryExtras,
                        focused: a.name === c,
                        imagePool: o,
                        videoPool: l,
                    },
                    i,
                );
            }),
            S(this, "renderContent", (e, t, n) => {
                let { className: i, trendingCategories: a } = this.props;
                return 0 === a.length
                    ? (0, r.jsx)(b.oK, {
                          columns: e,
                          width: t,
                          renderColumn: N,
                      })
                    : (0, r.jsx)(f.a0_, {
                          ref: this._masonryRef,
                          fade: !0,
                          className: s()(v.kL, i),
                          itemGutter: 12,
                          getItemKey: this.getItemKey,
                          columns: e,
                          getItemHeight: () => 110,
                          renderItem: this.renderItem,
                          sections: [this.getData().length],
                          chunkSize: 50,
                      });
            }),
            S(this, "getItemGrid", () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getItemGrid() : [];
            }),
            S(this, "getCoordsMap", () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {};
            });
    }
}
function P(e) {
    let t = (0, c.bG)([h.A], () => h.A.getTrendingCategories()),
        n = (0, g.rM)(),
        i = (0, y.d5)();
    return (0, r.jsx)(
        w,
        C(I({}, e, i), {
            trendingCategories: t,
            favorites: n,
        }),
    );
}
