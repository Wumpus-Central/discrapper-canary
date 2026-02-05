a.d(t, { Ay: () => p, Oj: () => m, Q8: () => h });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(397927),
    o = a(532197),
    c = a(331026);
let d = { CENTER: c.Hu, LEFT: c.Vl };
class u extends i.PureComponent {
    static Align = d;
    static defaultProps = { scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 }, align: d.CENTER };
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
        let a = this._paginationItemRefs[e];
        null != a && t.scrollIntoViewNode({ node: a, animate: !0, padding: this.props.scrollToPadding });
    };
    handlePageClick = (e) => {
        let { onSetItem: t } = this.props;
        t(e);
    };
    render() {
        let { renderItem: e, items: t, vertical: a, paginationContainerClass: s, align: o } = this.props,
            d = a ? c.XA : c.BU;
        return (0, n.jsx)(r.GtU, {
            orientation: a ? "vertical" : "horizontal",
            className: l()(d, s, o),
            ref: this.handleSetScrollerRef,
            children: t.map((t, a) =>
                i.cloneElement(e(t, a), {
                    onClick: () => this.handlePageClick(a),
                    key: a,
                    ref: (e) => {
                        this._paginationItemRefs[a] = e;
                    },
                }),
            ),
        });
    }
}
class h extends i.PureComponent {
    handlePrevClick = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, n.jsx)(r.DUT, {
            className: l()(c.t1, e),
            onClick: this.handlePrevClick,
            children: (0, n.jsx)(o.A, { className: c.UE, direction: o.A.Directions.LEFT }),
        });
    }
}
class m extends i.PureComponent {
    handleNextClick = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, n.jsx)(r.DUT, {
            className: l()(c.XS, e),
            onClick: this.handleNextClick,
            children: (0, n.jsx)(o.A, { className: c.UE, direction: o.A.Directions.RIGHT }),
        });
    }
}
let p = u;
