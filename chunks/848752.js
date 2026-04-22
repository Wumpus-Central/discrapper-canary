a.d(t, { Ay: () => _, Oj: () => p, Q8: () => m });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(599319),
    o = a(939249),
    c = a(532197),
    d = a(937751);
let u = { CENTER: d.Hu, LEFT: d.Vl };
class h extends l.PureComponent {
    static Align = u;
    static defaultProps = { scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 }, align: u.CENTER };
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
        let { renderItem: e, items: t, vertical: a, paginationContainerClass: i, align: o } = this.props,
            c = a ? d.XA : d.BU;
        return (0, n.jsx)(r.Gt, {
            orientation: a ? "vertical" : "horizontal",
            className: s()(c, i, o),
            ref: this.handleSetScrollerRef,
            children: t.map((t, a) =>
                l.cloneElement(e(t, a), {
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
class m extends l.PureComponent {
    handlePrevClick = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, n.jsx)(o.D, {
            className: s()(d.t1, e),
            onClick: this.handlePrevClick,
            children: (0, n.jsx)(c.A, { className: d.UE, direction: c.A.Directions.LEFT }),
        });
    }
}
class p extends l.PureComponent {
    handleNextClick = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, n.jsx)(o.D, {
            className: s()(d.XS, e),
            onClick: this.handleNextClick,
            children: (0, n.jsx)(c.A, { className: d.UE, direction: c.A.Directions.RIGHT }),
        });
    }
}
let _ = h;
