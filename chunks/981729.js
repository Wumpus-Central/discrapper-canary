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
    o = r(411104);
var s = r(47120);
var l = r(200651),
    u = r(192379),
    c = r(120356),
    d = r.n(c),
    f = r(995295),
    p = r(642128),
    h = r(873546),
    _ = r(513431),
    m = r(846519),
    g = r(377527),
    E = r(186325),
    v = r(481060),
    y = r(607070),
    b = r(314910),
    I = r(676937);
function T(e, n, r) {
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
    C = 8,
    N = Object.freeze({}),
    R = Object.freeze({
        top: I.tooltipTop,
        bottom: I.tooltipBottom,
        left: I.tooltipLeft,
        right: I.tooltipRight,
        center: I.tooltipCenter,
        window_center: I.tooltipCenter,
        primary: I.tooltipPrimary,
        nested: I.tooltipNested,
        black: I.tooltipBlack,
        grey: I.tooltipGrey,
        brand: I.tooltipBrand,
        green: I.tooltipGreen,
        yellow: I.tooltipYellow,
        red: I.tooltipRed,
        premium: I.tooltipPremium
    });
function O(e, n, r) {
    let i = 'left' === e || 'right' === e,
        a = i ? 'top' : 'left',
        o = i ? 'top' : 'left',
        s = i ? 'bottom' : 'right',
        l = '50%',
        u = r;
    return n === o ? ((l = '0%'), (u += S)) : n === s && ((l = '100%'), (u -= A + A)), { [a]: 'calc('.concat(l, ' + ').concat(u, 'px)') };
}
let D = (e) => {
        let { targetElementRef: n, align: r = 'center', position: i, color: a, children: o, onNonAccessibleClick: s, tooltipClassName: u, tooltipStyle: c, tooltipContentClassName: f, spacing: h = C, animationStyle: _, disableTooltipPointerEvents: m = !1, allowOverflow: g = !1, tooltipPointerClassName: E } = e,
            v = ''.concat('string' == typeof o ? o : '', ':').concat(i);
        return (0, l.jsx)(b.W5, {
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
                return (0, l.jsxs)(p.animated.div, {
                    onClick: s,
                    className: d()(I.tooltip, R[null != n ? n : i], R[a], { [I.tooltipDisablePointerEvents]: m }, u),
                    style: {
                        ..._,
                        ...c
                    },
                    children: [
                        (0, l.jsx)('div', {
                            className: d()(I.tooltipPointer, I.tooltipPointerBg, E),
                            style: O(null != n ? n : i, r, h)
                        }),
                        (0, l.jsx)('div', {
                            className: d()(I.tooltipPointer, E),
                            style: O(null != n ? n : i, r, h)
                        }),
                        (0, l.jsx)('div', {
                            className: d()(I.tooltipContent, { [I.tooltipContentAllowOverflow]: g }, f),
                            children: o
                        })
                    ]
                });
            }
        });
    },
    x = {
        scale: 0.95,
        opacity: 0
    },
    L = {
        scale: 1,
        opacity: 0
    },
    w = {
        scale: 1,
        opacity: 1
    },
    P = (e) => {
        let { isVisible: n, onAnimationRest: r, targetElementRef: i, ...a } = e,
            { reducedMotion: o } = u.useContext(E.S);
        return (0, v.useTransition)(
            n,
            {
                keys: (e) => (e ? 'tooltip' : 'empty'),
                config: g.F,
                from: o.enabled ? L : x,
                enter: w,
                leave: o.enabled ? L : x,
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
        } else if (((e = f.findDOMNode(this)), !(0, _.k)(e))) throw Error('Tooltip cannot find DOM node');
        (this.domElementRef.current = e), (this.hasDomElement = !0), this.forceUpdate();
    }
    componentWillUnmount() {
        this.showTimeout.stop(), (this.domElementRef.current = null);
    }
    render() {
        let e;
        let { children: n, text: r, 'aria-label': i } = this.props;
        if (null == r) return n(N);
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
        let { text: e, align: n, position: r, color: i, spacing: a, tooltipClassName: o, tooltipStyle: s, tooltipContentClassName: u, disableTooltipPointerEvents: c, onAnimationRest: d, allowOverflow: f, clickableOnMobile: p, hideOnClick: _, tooltipPointerClassName: m } = this.props,
            g = (h.tq || h.Em) && !0 === p && _,
            E = (!1 !== c && !g) || !0 === c,
            v = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
            y = null;
        return (
            (y = e instanceof Function ? (v ? e() : null) : e),
            (0, l.jsx)(P, {
                disableTooltipPointerEvents: E,
                targetElementRef: this.domElementRef,
                tooltipStyle: s,
                tooltipClassName: o,
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
                children: y
            })
        );
    }
    show() {
        let { delay: e, overflowOnly: n } = this.props;
        if (n) {
            let e = f.findDOMNode(this);
            if (null == e || ((0, _.k)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth)) return;
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
            T(this, 'showTimeout', new m.V7()),
            T(this, 'domElementRef', u.createRef()),
            T(this, 'hasDomElement', !1),
            T(this, 'state', { shouldShowTooltip: !1 }),
            T(this, 'handleMouseEnter', () => {
                !((h.tq || h.Em) && !0 === this.props.clickableOnMobile) && this.show();
            }),
            T(this, 'handleMouseLeave', () => {
                !((h.tq || h.Em) && !0 === this.props.clickableOnMobile) && this.hide();
            }),
            T(this, 'handleFocus', () => {
                y.Z.keyboardModeEnabled && this.show();
            }),
            T(this, 'handleBlur', () => {
                this.hide();
            }),
            T(this, 'handleClick', () => {
                let e = this.hasDomElement;
                e && this.props.hideOnClick ? this.hide() : !e && (h.tq || h.Em) && !0 === this.props.clickableOnMobile && this.show();
            }),
            T(this, 'handleContextMenu', () => {
                this.hide();
            });
    }
}
T(M, 'Colors', i),
    T(M, 'defaultProps', {
        hideOnClick: !0,
        position: 'top',
        color: 'primary',
        forceOpen: !1,
        spacing: C,
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
