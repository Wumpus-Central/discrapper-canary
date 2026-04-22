"use strict";
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(935462),
    l = n(243926);
let u = { SMALL: l.PG, MEDIUM: l.$g, LARGE: l.Pu };
class d extends i.PureComponent {
    static Header = o.rQ;
    static Footer = o.jl;
    static Content = o.$m;
    static ListContent = o.Dc;
    static CloseButton = o.s_;
    static Sizes = u;
    static defaultProps = { fullscreenOnMobile: !0, size: u.SMALL, tag: "div" };
    _scroller = null;
    constructor(e) {
        super(e), (this.state = { hideSeparator: !1 });
    }
    calculateScroll() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._scroller;
        if (null == e) return;
        let { scrollTop: t } = e.getScrollerState(),
            { hideSeparator: n } = this.state;
        0 !== t || n ? t > 0 && n && this.setState({ hideSeparator: !1 }) : this.setState({ hideSeparator: !0 });
    }
    setRef = (e) => {
        (this._scroller = e), null != e && this.calculateScroll();
    };
    getScroller() {
        return this._scroller;
    }
    handleScroll = (e) => {
        this.calculateScroll();
        let { onScroll: t } = this.props;
        t?.(e);
    };
    renderChildren() {
        let { hideSeparator: e } = this.state;
        return i.Children.map(this.props.children, (t) =>
            i.isValidElement(t)
                ? t.type === o.$m || t.type === o.Dc
                    ? i.cloneElement(t, {
                          scrollerRef: this.setRef,
                          onScroll: this.handleScroll,
                          onResize: this.handleScroll,
                      })
                    : t.type === o.rQ && e
                      ? i.cloneElement(t, { separator: !1 })
                      : t
                : t,
        );
    }
    render() {
        let { className: e, children: t, tag: n, size: i, fullscreenOnMobile: s, ...o } = this.props;
        return (0, r.jsx)(n, { className: a()(l.yl, e, i, { [l.z]: s }), ...o, children: this.renderChildren() });
    }
}
