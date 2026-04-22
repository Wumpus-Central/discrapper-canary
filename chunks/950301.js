r.d(t, { A: () => T });
var s = r(627968),
    l = r(64700),
    n = r(503698),
    i = r.n(n),
    o = r(735438),
    a = r.n(o),
    c = r(311907),
    u = r(803805),
    d = r(827734),
    h = r(27232),
    m = r(555704),
    f = r(42286),
    p = r(497685),
    g = r(25277),
    E = r(821102),
    _ = r(583613),
    R = r(996566),
    I = r(327143),
    A = r(453212),
    C = r(247683),
    v = r(652215),
    w = r(985018),
    S = r(34516);
let y = (e, t) => (0, s.jsx)(A.XW, { columns: e }, t);
class x extends l.PureComponent {
    _masonryRef = l.createRef();
    state = {
        favoritesTile: (function (e) {
            let t = a().sample(a().values(e));
            return {
                type: v.dD.FAVORITES,
                name: w.intl.string(w.t.y3LQCG),
                icon: h.G,
                src: null != t ? t.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
                format: t?.format ?? u.TL.IMAGE,
            };
        })(this.props.favorites),
        selectedIndex: { column: 0, row: 0 },
        focusedId: null,
    };
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, p.k8)();
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
    memoizedData = (0, _.L_)(function (e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return r ? [...t] : [e, ...t];
    });
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: t, type: r } = e;
        return (0, s.jsxs)(l.Fragment, {
            children: [
                (0, s.jsx)("div", { className: r === v.dD.FAVORITES ? S.H7 : S.FP }),
                (0, s.jsxs)("div", {
                    className: S.O1,
                    children: [
                        r === v.dD.TRENDING_GIFS ? (0, s.jsx)(m.U, { className: S.Yl, color: "currentColor" }) : null,
                        (0, s.jsx)("span", { className: S.yb, children: t }),
                    ],
                }),
            ],
        });
    }
    renderItem = (e, t, r, l) => {
        if (e > 0) return null;
        let n = this.getData()[t];
        if (null == n) return;
        let { onSelectItem: i, imagePool: o, videoPool: a } = this.props,
            { focusedId: c } = this.state;
        return (0, s.jsx)(
            C.uG,
            {
                format: n.format,
                color: d.A.unsafe_rawColors.PRIMARY_800.css,
                src: n.src,
                item: n,
                index: t,
                coords: r,
                onClick: () => i(n.type, n.name),
                renderExtras: this.renderCategoryExtras,
                focused: n.name === c,
                imagePool: o,
                videoPool: a,
            },
            l,
        );
    };
    renderContent = (e, t, r) => {
        let { className: l, trendingCategories: n } = this.props;
        return 0 === n.length
            ? (0, s.jsx)(A.oK, { columns: e, width: t, renderColumn: y })
            : (0, s.jsx)(f.f, {
                  ref: this._masonryRef,
                  fade: !0,
                  className: i()(S.kL, l),
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
        return (0, s.jsx)(g.A, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, s.jsx)(I.A, { desiredItemWidth: 200, maxColumns: 6, children: this.renderContent }),
        });
    }
}
function T(e) {
    let t = (0, c.bG)([E.A], () => E.A.getTrendingCategories()),
        r = (0, R.rM)(),
        l = (0, C.d5)();
    return (0, s.jsx)(x, { ...e, ...l, trendingCategories: t, favorites: r });
}
