n.d(t, {
    Cy: () => C,
    DY: () => w,
    FG: () => y,
    u: () => x
}),
    n(411104),
    n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(995295),
    u = n(642128),
    c = n(873546),
    d = n(374470),
    f = n(846519),
    _ = n(377527),
    p = n(186325),
    h = n(481060),
    m = n(607070),
    g = n(314910),
    E = n(200281);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var y = (function (e) {
    return (e.PRIMARY = 'primary'), (e.NESTED = 'nested'), (e.BLACK = 'black'), (e.GREY = 'grey'), (e.BRAND = 'brand'), (e.GREEN = 'green'), (e.YELLOW = 'yellow'), (e.RED = 'red'), (e.PREMIUM = 'premium'), e;
})({});
let I = 16,
    T = 10,
    b = 8,
    S = Object.freeze({}),
    A = Object.freeze({
        top: E.tooltipTop,
        bottom: E.tooltipBottom,
        left: E.tooltipLeft,
        right: E.tooltipRight,
        center: E.tooltipCenter,
        window_center: E.tooltipCenter,
        primary: E.tooltipPrimary,
        nested: E.tooltipNested,
        black: E.tooltipBlack,
        grey: E.tooltipGrey,
        brand: E.tooltipBrand,
        green: E.tooltipGreen,
        yellow: E.tooltipYellow,
        red: E.tooltipRed,
        premium: E.tooltipPremium
    });
function N(e, t, n) {
    let i = 'left' === e || 'right' === e,
        r = i ? 'top' : 'left',
        a = i ? 'top' : 'left',
        s = i ? 'bottom' : 'right',
        o = '50%',
        l = n;
    return t === a ? ((o = '0%'), (l += I)) : t === s && ((o = '100%'), (l -= T + T)), { [r]: 'calc('.concat(o, ' + ').concat(l, 'px)') };
}
let C = (e) => {
        let { targetElementRef: t, align: n = 'center', position: i, color: a, children: s, onNonAccessibleClick: l, tooltipClassName: c, tooltipStyle: d, tooltipContentClassName: f, spacing: _ = b, animationStyle: p, disableTooltipPointerEvents: h = !1, allowOverflow: m = !1, tooltipPointerClassName: v } = e,
            y = ''.concat('string' == typeof s ? s : '', ':').concat(i);
        return (0, r.jsx)(g.W5, {
            disablePointerEvents: h,
            targetRef: t,
            position: i,
            autoInvert: !0,
            align: n,
            positionKey: y,
            spacing: _,
            nudgeAlignIntoViewport: !0,
            children: (e) => {
                let { position: t, nudge: _ } = e;
                return (0, r.jsxs)(u.animated.div, {
                    onClick: l,
                    className: o()(E.tooltip, A[null != t ? t : i], A[a], { [E.tooltipDisablePointerEvents]: h }, c),
                    style: {
                        ...p,
                        ...d
                    },
                    children: [
                        (0, r.jsx)('div', {
                            className: o()(E.tooltipPointer, E.tooltipPointerBg, v),
                            style: N(null != t ? t : i, n, _)
                        }),
                        (0, r.jsx)('div', {
                            className: o()(E.tooltipPointer, v),
                            style: N(null != t ? t : i, n, _)
                        }),
                        (0, r.jsx)('div', {
                            className: o()(E.tooltipContent, { [E.tooltipContentAllowOverflow]: m }, f),
                            children: s
                        })
                    ]
                });
            }
        });
    },
    R = {
        scale: 0.95,
        opacity: 0
    },
    O = {
        scale: 1,
        opacity: 0
    },
    D = {
        scale: 1,
        opacity: 1
    },
    L = (e) => {
        let { isVisible: t, onAnimationRest: n, targetElementRef: i, ...s } = e,
            { reducedMotion: o } = a.useContext(p.S);
        return (0, h.Yzy)(
            t,
            {
                keys: (e) => (e ? 'tooltip' : 'empty'),
                config: _.F,
                from: o.enabled ? O : R,
                enter: D,
                leave: o.enabled ? O : R,
                onRest: n
            },
            'animate-always'
        )((e, t) =>
            t
                ? (0, r.jsx)(C, {
                      animationStyle: e,
                      targetElementRef: i,
                      ...s
                  })
                : null
        );
    };
class x extends (i = a.Component) {
    static getDerivedStateFromProps(e, t) {
        return t.shouldShowTooltip && null == e.text ? { shouldShowTooltip: !1 } : null;
    }
    componentDidMount() {
        this.shouldShowTooltip(this.props, this.state) && this.setDomElement();
    }
    componentDidUpdate(e, t) {
        let n = this.shouldShowTooltip(this.props, this.state);
        n !== this.shouldShowTooltip(e, t) && (n ? this.setDomElement() : (this.hasDomElement = !1));
    }
    setDomElement() {
        let e;
        if (null != this.props.targetElementRef) {
            if (null == (e = this.props.targetElementRef.current)) return;
        } else if (((e = l.findDOMNode(this)), !(0, d.k)(e))) throw Error('Tooltip cannot find DOM node');
        (this.domElementRef.current = e), (this.hasDomElement = !0), this.forceUpdate();
    }
    componentWillUnmount() {
        this.showTimeout.stop(), (this.domElementRef.current = null);
    }
    render() {
        let e;
        let { children: t, text: n, 'aria-label': i } = this.props;
        if (null == n) return t(S);
        'string' == typeof i ? (e = i) : 'string' == typeof n && !1 !== i && (e = n);
        let s = {
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onContextMenu: this.handleContextMenu,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
        };
        return (
            null != e && (s['aria-label'] = e),
            (0, r.jsxs)(a.Fragment, {
                children: [t(s), this.renderTooltip()]
            })
        );
    }
    shouldShowTooltip(e, t) {
        let n = null == e.targetElementRef || null != e.targetElementRef.current;
        return e.shouldShow && (t.shouldShowTooltip || e.forceOpen) && n;
    }
    renderTooltip() {
        let { text: e, align: t, position: n, color: i, spacing: a, tooltipClassName: s, tooltipStyle: o, tooltipContentClassName: l, disableTooltipPointerEvents: u, onAnimationRest: d, allowOverflow: f, clickableOnMobile: _, hideOnClick: p, tooltipPointerClassName: h } = this.props,
            m = (c.tq || c.Em) && !0 === _ && p,
            g = (!1 !== u && !m) || !0 === u,
            E = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
            v = null;
        return (
            (v = e instanceof Function ? (E ? e() : null) : e),
            (0, r.jsx)(L, {
                disableTooltipPointerEvents: g,
                targetElementRef: this.domElementRef,
                tooltipStyle: o,
                tooltipClassName: s,
                tooltipContentClassName: l,
                tooltipPointerClassName: h,
                align: t,
                position: n,
                color: i,
                spacing: a,
                isVisible: E,
                onAnimationRest: d,
                onNonAccessibleClick: m ? this.handleClick : void 0,
                allowOverflow: f,
                children: v
            })
        );
    }
    show() {
        let { delay: e, overflowOnly: t } = this.props;
        if (t) {
            let e = l.findDOMNode(this);
            if (null == e || ((0, d.k)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth)) return;
        }
        null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0);
    }
    hide() {
        this.showTimeout.stop(), this.toggleShow(!1);
    }
    toggleShow(e) {
        if (this.state.shouldShowTooltip !== e) {
            var t, n, i, r;
            e ? null === (t = (n = this.props).onTooltipShow) || void 0 === t || t.call(n) : null === (i = (r = this.props).onTooltipHide) || void 0 === i || i.call(r),
                l.flushSync(() => {
                    this.setState({ shouldShowTooltip: e });
                });
        }
    }
    constructor(...e) {
        super(...e),
            v(this, 'showTimeout', new f.V7()),
            v(this, 'domElementRef', a.createRef()),
            v(this, 'hasDomElement', !1),
            v(this, 'state', { shouldShowTooltip: !1 }),
            v(this, 'handleMouseEnter', () => {
                ((c.tq || c.Em) && !0 === this.props.clickableOnMobile) || this.show();
            }),
            v(this, 'handleMouseLeave', () => {
                ((c.tq || c.Em) && !0 === this.props.clickableOnMobile) || this.hide();
            }),
            v(this, 'handleFocus', () => {
                m.Z.keyboardModeEnabled && this.show();
            }),
            v(this, 'handleBlur', () => {
                this.hide();
            }),
            v(this, 'handleClick', () => {
                let e = this.hasDomElement;
                e && this.props.hideOnClick ? this.hide() : !e && (c.tq || c.Em) && !0 === this.props.clickableOnMobile && this.show();
            }),
            v(this, 'handleContextMenu', () => {
                this.hide();
            });
    }
}
v(x, 'Colors', y),
    v(x, 'defaultProps', {
        hideOnClick: !0,
        position: 'top',
        color: 'primary',
        forceOpen: !1,
        spacing: b,
        shouldShow: !0,
        allowOverflow: !1,
        overflowOnly: !1
    });
let w = (e) => {
    let { children: t, className: n, element: i = 'div', ...s } = e;
    return (0, r.jsx)(x, {
        ...s,
        children: (e) =>
            a.createElement(
                i,
                null != n
                    ? {
                          ...e,
                          className: n
                      }
                    : e,
                t
            )
    });
};
