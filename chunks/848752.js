n.d(t, {
    Ay: () => f,
    Oj: () => b,
    Q8: () => m,
}),
    n(896048);
var l,
    a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    c = n(397927),
    o = n(532197),
    d = n(331026);

function u(e, t, n) {
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
let p = {
    CENTER: d.Hu,
    LEFT: d.Vl,
};
class h extends (l = r.PureComponent) {
    componentDidUpdate(e) {
        let { selectedIndex: t } = this.props;
        e.selectedIndex !== t && this.handleSelectedIndexChange(t);
    }
    render() {
        let { renderItem: e, items: t, vertical: n, paginationContainerClass: l, align: i } = this.props,
            o = n ? d.XA : d.BU;
        return (0, a.jsx)(c.GtU, {
            orientation: n ? "vertical" : "horizontal",
            className: s()(o, l, i),
            ref: this.handleSetScrollerRef,
            children: t.map((t, n) =>
                r.cloneElement(e(t, n), {
                    onClick: () => this.handlePageClick(n),
                    key: n,
                    ref: (e) => {
                        this._paginationItemRefs[n] = e;
                    },
                }),
            ),
        });
    }
    constructor(...e) {
        super(...e),
            u(this, "_scrollerRef", null),
            u(this, "_paginationItemRefs", []),
            u(this, "handleSetScrollerRef", (e) => {
                this._scrollerRef = e;
            }),
            u(this, "handleSelectedIndexChange", (e) => {
                let t = this._scrollerRef;
                if (null == t) return;
                let n = this._paginationItemRefs[e];
                null != n &&
                    t.scrollIntoViewNode({
                        node: n,
                        animate: !0,
                        padding: this.props.scrollToPadding,
                    });
            }),
            u(this, "handlePageClick", (e) => {
                let { onSetItem: t } = this.props;
                t(e);
            });
    }
}
u(h, "Align", p),
    u(h, "defaultProps", {
        scrollToPadding: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        },
        align: p.CENTER,
    });
class m extends r.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, a.jsx)(c.DUT, {
            className: s()(d.t1, e),
            onClick: this.handlePrevClick,
            children: (0, a.jsx)(o.A, {
                className: d.UE,
                direction: o.A.Directions.LEFT,
            }),
        });
    }
    constructor(...e) {
        super(...e),
            u(this, "handlePrevClick", (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
class b extends r.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, a.jsx)(c.DUT, {
            className: s()(d.XS, e),
            onClick: this.handleNextClick,
            children: (0, a.jsx)(o.A, {
                className: d.UE,
                direction: o.A.Directions.RIGHT,
            }),
        });
    }
    constructor(...e) {
        super(...e),
            u(this, "handleNextClick", (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
let f = h;
