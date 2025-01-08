r.d(n, {
    Cy: function () {
        return D;
    },
    DY: function () {
        return k;
    },
    FG: function () {
        return i;
    },
    u: function () {
        return M;
    }
});
var i,
    a,
    s = r(411104);
var o = r(47120);
var l = r(200651),
    u = r(192379),
    c = r(120356),
    d = r.n(c),
    f = r(995295),
    _ = r(666912),
    h = r(873546),
    p = r(513431),
    m = r(846519),
    g = r(377527),
    E = r(186325),
    v = r(481060),
    I = r(607070),
    T = r(314910),
    b = r(676937);
function y(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.PRIMARY = 'primary'), (e.NESTED = 'nested'), (e.BLACK = 'black'), (e.GREY = 'grey'), (e.BRAND = 'brand'), (e.GREEN = 'green'), (e.YELLOW = 'yellow'), (e.RED = 'red'), (e.PREMIUM = 'premium');
})(i || (i = {}));
let S = 16,
    A = 10,
    N = 8,
    C = Object.freeze({}),
    R = Object.freeze({
        top: b.tooltipTop,
        bottom: b.tooltipBottom,
        left: b.tooltipLeft,
        right: b.tooltipRight,
        center: b.tooltipCenter,
        window_center: b.tooltipCenter,
        primary: b.tooltipPrimary,
        nested: b.tooltipNested,
        black: b.tooltipBlack,
        grey: b.tooltipGrey,
        brand: b.tooltipBrand,
        green: b.tooltipGreen,
        yellow: b.tooltipYellow,
        red: b.tooltipRed,
        premium: b.tooltipPremium
    });
function O(e, n, r) {
    let i = 'left' === e || 'right' === e,
        a = i ? 'top' : 'left',
        s = i ? 'top' : 'left',
        o = i ? 'bottom' : 'right',
        l = '50%',
        u = r;
    return n === s ? ((l = '0%'), (u += S)) : n === o && ((l = '100%'), (u -= A + A)), { [a]: 'calc('.concat(l, ' + ').concat(u, 'px)') };
}
let D = (e) => {
        let { targetElementRef: n, align: r = 'center', position: i, color: a, children: s, onNonAccessibleClick: o, tooltipClassName: u, tooltipStyle: c, tooltipContentClassName: f, spacing: h = N, animationStyle: p, disableTooltipPointerEvents: m = !1, allowOverflow: g = !1, tooltipPointerClassName: E } = e,
            v = ''.concat('string' == typeof s ? s : '', ':').concat(i);
        return (0, l.jsx)(T.W5, {
            disablePointerEvents: m,
            targetRef: n,
            position: i,
            autoInvert: !0,
            align: r,
            positionKey: v,
            spacing: h,
            nudgeAlignIntoViewport: !0,
            children: (e) => {
                let { position: n, nudge: h } = e;
                return (0, l.jsxs)(_.animated.div, {
                    onClick: o,
                    className: d()(b.tooltip, R[null != n ? n : i], R[a], { [b.tooltipDisablePointerEvents]: m }, u),
                    style: {
                        ...p,
                        ...c
                    },
                    children: [
                        (0, l.jsx)('div', {
                            className: d()(b.tooltipPointer, b.tooltipPointerBg, E),
                            style: O(null != n ? n : i, r, h)
                        }),
                        (0, l.jsx)('div', {
                            className: d()(b.tooltipPointer, E),
                            style: O(null != n ? n : i, r, h)
                        }),
                        (0, l.jsx)('div', {
                            className: d()(b.tooltipContent, { [b.tooltipContentAllowOverflow]: g }, f),
                            children: s
                        })
                    ]
                });
            }
        });
    },
    L = {
        scale: 0.95,
        opacity: 0
    },
    x = {
        scale: 1,
        opacity: 0
    },
    w = {
        scale: 1,
        opacity: 1
    },
    P = (e) => {
        let { isVisible: n, onAnimationRest: r, targetElementRef: i, ...a } = e,
            { reducedMotion: s } = u.useContext(E.S);
        return (0, v.useTransition)(
            n,
            {
                keys: (e) => (e ? 'tooltip' : 'empty'),
                config: g.F,
                from: s.enabled ? x : L,
                enter: w,
                leave: s.enabled ? x : L,
                onRest: r
            },
            'animate-always'
        )((e, n) =>
            n
                ? (0, l.jsx)(D, {
                      animationStyle: e,
                      targetElementRef: i,
                      ...a
                  })
                : null
        );
    };
class M extends (a = u.Component) {
    static getDerivedStateFromProps(e, n) {
        return n.shouldShowTooltip && null == e.text ? { shouldShowTooltip: !1 } : null;
    }
    componentDidMount() {
        this.shouldShowTooltip(this.props, this.state) && this.setDomElement();
    }
    componentDidUpdate(e, n) {
        let r = this.shouldShowTooltip(this.props, this.state);
        r !== this.shouldShowTooltip(e, n) && (r ? this.setDomElement() : (this.hasDomElement = !1));
    }
    setDomElement() {
        let e;
        if (null != this.props.targetElementRef) {
            if (null == (e = this.props.targetElementRef.current)) return;
        } else if (((e = f.findDOMNode(this)), !(0, p.k)(e))) throw Error('Tooltip cannot find DOM node');
        (this.domElementRef.current = e), (this.hasDomElement = !0), this.forceUpdate();
    }
    componentWillUnmount() {
        this.showTimeout.stop(), (this.domElementRef.current = null);
    }
    render() {
        let e;
        let { children: n, text: r, 'aria-label': i } = this.props;
        if (null == r) return n(C);
        'string' == typeof i ? (e = i) : 'string' == typeof r && !1 !== i && (e = r);
        let a = {
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onContextMenu: this.handleContextMenu,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
        };
        return (
            null != e && (a['aria-label'] = e),
            (0, l.jsxs)(u.Fragment, {
                children: [n(a), this.renderTooltip()]
            })
        );
    }
    shouldShowTooltip(e, n) {
        let r = null == e.targetElementRef || null != e.targetElementRef.current;
        return e.shouldShow && (n.shouldShowTooltip || e.forceOpen) && r;
    }
    renderTooltip() {
        let { text: e, align: n, position: r, color: i, spacing: a, tooltipClassName: s, tooltipStyle: o, tooltipContentClassName: u, disableTooltipPointerEvents: c, onAnimationRest: d, allowOverflow: f, clickableOnMobile: _, hideOnClick: p, tooltipPointerClassName: m } = this.props,
            g = (h.tq || h.Em) && !0 === _ && p,
            E = (!1 !== c && !g) || !0 === c,
            v = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
            I = null;
        return (
            (I = e instanceof Function ? (v ? e() : null) : e),
            (0, l.jsx)(P, {
                disableTooltipPointerEvents: E,
                targetElementRef: this.domElementRef,
                tooltipStyle: o,
                tooltipClassName: s,
                tooltipContentClassName: u,
                tooltipPointerClassName: m,
                align: n,
                position: r,
                color: i,
                spacing: a,
                isVisible: v,
                onAnimationRest: d,
                onNonAccessibleClick: g ? this.handleClick : void 0,
                allowOverflow: f,
                children: I
            })
        );
    }
    show() {
        let { delay: e, overflowOnly: n } = this.props;
        if (n) {
            let e = f.findDOMNode(this);
            if (null == e || ((0, p.k)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth)) return;
        }
        null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0);
    }
    hide() {
        this.showTimeout.stop(), this.toggleShow(!1);
    }
    toggleShow(e) {
        if (this.state.shouldShowTooltip !== e) {
            var n, r, i, a;
            e ? null === (n = (r = this.props).onTooltipShow) || void 0 === n || n.call(r) : null === (i = (a = this.props).onTooltipHide) || void 0 === i || i.call(a),
                f.flushSync(() => {
                    this.setState({ shouldShowTooltip: e });
                });
        }
    }
    constructor(...e) {
        super(...e),
            y(this, 'showTimeout', new m.V7()),
            y(this, 'domElementRef', u.createRef()),
            y(this, 'hasDomElement', !1),
            y(this, 'state', { shouldShowTooltip: !1 }),
            y(this, 'handleMouseEnter', () => {
                !((h.tq || h.Em) && !0 === this.props.clickableOnMobile) && this.show();
            }),
            y(this, 'handleMouseLeave', () => {
                !((h.tq || h.Em) && !0 === this.props.clickableOnMobile) && this.hide();
            }),
            y(this, 'handleFocus', () => {
                I.Z.keyboardModeEnabled && this.show();
            }),
            y(this, 'handleBlur', () => {
                this.hide();
            }),
            y(this, 'handleClick', () => {
                let e = this.hasDomElement;
                e && this.props.hideOnClick ? this.hide() : !e && (h.tq || h.Em) && !0 === this.props.clickableOnMobile && this.show();
            }),
            y(this, 'handleContextMenu', () => {
                this.hide();
            });
    }
}
y(M, 'Colors', i),
    y(M, 'defaultProps', {
        hideOnClick: !0,
        position: 'top',
        color: 'primary',
        forceOpen: !1,
        spacing: N,
        shouldShow: !0,
        allowOverflow: !1,
        overflowOnly: !1
    });
let k = (e) => {
    let { children: n, className: r, element: i = 'div', ...a } = e;
    return (0, l.jsx)(M, {
        ...a,
        children: (e) =>
            u.createElement(
                i,
                null != r
                    ? {
                          ...e,
                          className: r
                      }
                    : e,
                n
            )
    });
};
