"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(311907),
    c = n(803805),
    d = n(827734),
    _ = n(397927),
    f = n(497685),
    h = n(25277),
    p = n(821102),
    g = n(583613),
    E = n(996566),
    A = n(327143),
    I = n(453212),
    T = n(247683),
    y = n(652215),
    S = n(985018),
    v = n(17697);
let C = (e, t) => (0, r.jsx)(I.XW, { columns: e }, t);
function b(e) {
    let t = l().sample(l().values(e));
    return {
        type: y.dD.FAVORITES,
        name: S.intl.string(S.t.y3LQCG),
        icon: _.Gg5,
        src: null != t ? t.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
        format: t?.format ?? c.TL.IMAGE,
    };
}
class N extends i.PureComponent {
    _masonryRef = i.createRef();
    state = { favoritesTile: b(this.props.favorites), selectedIndex: { column: 0, row: 0 }, focusedId: null };
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, f.k8)();
    }
    handleFocus = (e) => {
        let { current: t } = this._masonryRef;
        if (null == t) return;
        let n = t.getCoordsMap()[e];
        null != n &&
            (t.scrollIntoViewRect({ start: n.top - 10, end: n.top + n.height + 10 }), this.setState({ focusedId: e }));
    };
    handleSelect = (e) => {
        let { onSelectItem: t } = this.props,
            n = this.getData().find((t) => t.name === e);
        null != n && null != t && t(n.type, n.name);
    };
    getItemKey = (e, t) => {
        if (e > 0) return null;
        let n = this.getData()[t];
        return null != n ? n.name : null;
    };
    memoizedData = (0, g.L_)(function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return n ? [...t] : [e, ...t];
    });
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: t, type: n } = e;
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)("div", { className: n === y.dD.FAVORITES ? v.H7 : v.FP }),
                (0, r.jsxs)("div", {
                    className: v.O1,
                    children: [
                        n === y.dD.TRENDING_GIFS ? (0, r.jsx)(_.Uy2, { className: v.Yl, color: "currentColor" }) : null,
                        (0, r.jsx)("span", { className: v.yb, children: t }),
                    ],
                }),
            ],
        });
    }
    renderItem = (e, t, n, i) => {
        if (e > 0) return null;
        let a = this.getData()[t];
        if (null == a) return;
        let { onSelectItem: s, imagePool: o, videoPool: l } = this.props,
            { focusedId: u } = this.state;
        return (0, r.jsx)(
            T.uG,
            {
                format: a.format,
                color: d.A.unsafe_rawColors.PRIMARY_800.css,
                src: a.src,
                item: a,
                index: t,
                coords: n,
                onClick: () => s(a.type, a.name),
                renderExtras: this.renderCategoryExtras,
                focused: a.name === u,
                imagePool: o,
                videoPool: l,
            },
            i,
        );
    };
    renderContent = (e, t, n) => {
        let { className: i, trendingCategories: a } = this.props;
        return 0 === a.length
            ? (0, r.jsx)(I.oK, { columns: e, width: t, renderColumn: C })
            : (0, r.jsx)(_.a0_, {
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
        return (0, r.jsx)(h.A, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, r.jsx)(A.A, { desiredItemWidth: 200, maxColumns: 6, children: this.renderContent }),
        });
    }
}
function R(e) {
    let t = (0, u.bG)([p.A], () => p.A.getTrendingCategories()),
        n = (0, E.rM)(),
        i = (0, T.d5)();
    return (0, r.jsx)(N, { ...e, ...i, trendingCategories: t, favorites: n });
}
