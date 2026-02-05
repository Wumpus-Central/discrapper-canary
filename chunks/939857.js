"use strict";
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(900729);
let u = { SMALL: l.PG, MEDIUM: l.$g, LARGE: l.Pu };
class c extends i.PureComponent {
    static Header = o.rQ0;
    static Footer = o.jlY;
    static Content = o.$mQ;
    static ListContent = o.Dck;
    static CloseButton = o.s_y;
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
                ? t.type === o.$mQ || t.type === o.Dck
                    ? i.cloneElement(t, {
                          scrollerRef: this.setRef,
                          onScroll: this.handleScroll,
                          onResize: this.handleScroll,
                      })
                    : t.type === o.rQ0 && e
                      ? i.cloneElement(t, { separator: !1 })
                      : t
                : t,
        );
    }
    render() {
        let { className: e, children: t, tag: n, size: i, fullscreenOnMobile: a, ...o } = this.props;
        return (0, r.jsx)(n, { className: s()(l.yl, e, i, { [l.z]: a }), ...o, children: this.renderChildren() });
    }
}
