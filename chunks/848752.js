"use strict";
n.d(t, { Ay: () => _, Oj: () => m, Q8: () => p });
var i = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(689175),
    o = n(939249),
    c = n(532197),
    d = n(937751);
let u = { CENTER: d.Hu, LEFT: d.Vl };
class h extends a.PureComponent {
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
        let n = this._paginationItemRefs[e];
        null != n && t.scrollIntoViewNode({ node: n, animate: !0, padding: this.props.scrollToPadding });
    };
    handlePageClick = (e) => {
        let { onSetItem: t } = this.props;
        t(e);
    };
    render() {
        let { renderItem: e, items: t, vertical: n, paginationContainerClass: s, align: o } = this.props,
            c = n ? d.XA : d.BU;
        return (0, i.jsx)(r.Gt, {
            orientation: n ? "vertical" : "horizontal",
            className: l()(c, s, o),
            ref: this.handleSetScrollerRef,
            children: t.map((t, n) =>
                a.cloneElement(e(t, n), {
                    onClick: () => this.handlePageClick(n),
                    key: n,
                    ref: (e) => {
                        this._paginationItemRefs[n] = e;
                    },
                }),
            ),
        });
    }
}
class p extends a.PureComponent {
    handlePrevClick = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, i.jsx)(o.D, {
            className: l()(d.t1, e),
            onClick: this.handlePrevClick,
            children: (0, i.jsx)(c.A, { className: d.UE, direction: c.A.Directions.LEFT }),
        });
    }
}
class m extends a.PureComponent {
    handleNextClick = (e) => {
        e.stopPropagation(), e.preventDefault();
        let { onClick: t } = this.props;
        t?.(e);
    };
    render() {
        let { className: e } = this.props;
        return (0, i.jsx)(o.D, {
            className: l()(d.XS, e),
            onClick: this.handleNextClick,
            children: (0, i.jsx)(c.A, { className: d.UE, direction: c.A.Directions.RIGHT }),
        });
    }
}
let _ = h;
