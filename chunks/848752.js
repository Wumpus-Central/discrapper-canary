l.d(t, { Ay: () => m, Oj: () => C, Q8: () => u });
var s = l(627968),
    n = l(64700),
    i = l(503698),
    r = l.n(i),
    a = l(689175),
    o = l(939249),
    c = l(532197),
    d = l(937751);
let p = { CENTER: d.Hu, LEFT: d.Vl };
class h extends n.PureComponent {
    static Align = p;
    static defaultProps = { scrollToPadding: { top: 0, left: 0, bottom: 0, right: 0 }, align: p.CENTER };
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
        let l = this._paginationItemRefs[e];
        null != l && t.scrollIntoViewNode({ node: l, animate: !0, padding: this.props.scrollToPadding });
    };
    handlePageClick = (e) => {
        let { onSetItem: t } = this.props;
        t(e);
    };
    render() {
        let { renderItem: e, items: t, vertical: l, paginationContainerClass: i, align: o } = this.props,
            c = l ? d.XA : d.BU;
        return (0, s.jsx)(a.Gt, {
            orientation: l ? "vertical" : "horizontal",
            className: r()(c, i, o),
            ref: this.handleSetScrollerRef,
            children: t.map((t, l) =>
                n.cloneElement(e(t, l), {
                    onClick: () => this.handlePageClick(l),
                    key: l,
                    ref: (e) => {
                        this._paginationItemRefs[l] = e;
                    },
                }),
            ),
        });
    }
}
class u extends n.PureComponent {
    handlePrevClick = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, s.jsx)(o.D, {
            className: r()(d.t1, e),
            onClick: this.handlePrevClick,
            children: (0, s.jsx)(c.A, { className: d.UE, direction: c.A.Directions.LEFT }),
        });
    }
}
class C extends n.PureComponent {
    handleNextClick = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, s.jsx)(o.D, {
            className: r()(d.XS, e),
            onClick: this.handleNextClick,
            children: (0, s.jsx)(c.A, { className: d.UE, direction: c.A.Directions.RIGHT }),
        });
    }
}
let m = h;
