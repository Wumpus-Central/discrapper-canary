n.d(t, {
    Cy: () => D,
    DY: () => U,
    FG: () => T,
    u: () => j
}),
    n(411104),
    n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(995295),
    c = n(642128),
    u = n(873546),
    d = n(374470),
    f = n(846519),
    _ = n(377527),
    p = n(186325),
    h = n(481060),
    m = n(607070),
    g = n(314910),
    E = n(476767);
function b(e, t, n) {
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
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var T = (function (e) {
    return (e.PRIMARY = 'primary'), (e.NESTED = 'nested'), (e.BLACK = 'black'), (e.GREY = 'grey'), (e.BRAND = 'brand'), (e.GREEN = 'green'), (e.YELLOW = 'yellow'), (e.RED = 'red'), (e.PREMIUM = 'premium'), e;
})({});
let N = 16,
    A = 10,
    C = 8,
    R = Object.freeze({}),
    P = Object.freeze({
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
function w(e, t, n) {
    let r = 'left' === e || 'right' === e,
        i = r ? 'top' : 'left',
        o = r ? 'top' : 'left',
        a = r ? 'bottom' : 'right',
        s = '50%',
        l = n;
    return t === o ? ((s = '0%'), (l += N)) : t === a && ((s = '100%'), (l -= A + A)), { [i]: 'calc('.concat(s, ' + ').concat(l, 'px)') };
}
let D = (e) => {
        let { targetElementRef: t, align: n = 'center', position: r, color: o, children: a, onNonAccessibleClick: l, tooltipClassName: u, tooltipStyle: d, tooltipContentClassName: f, spacing: _ = C, animationStyle: p, disableTooltipPointerEvents: h = !1, allowOverflow: m = !1, tooltipPointerClassName: b } = e,
            v = ''.concat('string' == typeof a ? a : '', ':').concat(r);
        return (0, i.jsx)(g.W5, {
            disablePointerEvents: h,
            targetRef: t,
            position: r,
            autoInvert: !0,
            align: n,
            positionKey: v,
            spacing: _,
            nudgeAlignIntoViewport: !0,
            children: (e) => {
                let { position: t, nudge: _ } = e;
                return (0, i.jsxs)(c.animated.div, {
                    onClick: l,
                    className: s()(E.tooltip, P[null != t ? t : r], P[o], { [E.tooltipDisablePointerEvents]: h }, u),
                    style: y({}, p, d),
                    children: [
                        (0, i.jsx)('div', {
                            className: s()(E.tooltipPointer, E.tooltipPointerBg, b),
                            style: w(null != t ? t : r, n, _)
                        }),
                        (0, i.jsx)('div', {
                            className: s()(E.tooltipPointer, b),
                            style: w(null != t ? t : r, n, _)
                        }),
                        (0, i.jsx)('div', {
                            className: s()(E.tooltipContent, { [E.tooltipContentAllowOverflow]: m }, f),
                            children: a
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
    M = {
        scale: 1,
        opacity: 1
    },
    k = (e) => {
        var { isVisible: t, onAnimationRest: n, targetElementRef: r } = e,
            a = I(e, ['isVisible', 'onAnimationRest', 'targetElementRef']);
        let { reducedMotion: s } = o.useContext(p.S);
        return (0, h.Yzy)(
            t,
            {
                keys: (e) => (e ? 'tooltip' : 'empty'),
                config: _.F,
                from: s.enabled ? x : L,
                enter: M,
                leave: s.enabled ? x : L,
                onRest: n
            },
            'animate-always'
        )((e, t) =>
            t
                ? (0, i.jsx)(
                      D,
                      y(
                          {
                              animationStyle: e,
                              targetElementRef: r
                          },
                          a
                      )
                  )
                : null
        );
    };
class j extends (r = o.Component) {
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
        if (null != this.props.text) {
            if (null != this.props.targetElementRef) {
                if (null == (e = this.props.targetElementRef.current)) return;
            } else {
                var t;
                if (((e = null == (t = this.siblingDomRef.current) ? void 0 : t.previousElementSibling), !(0, d.k)(e))) throw Error('Tooltip cannot find DOM node');
            }
            (this.domElementRef.current = e), (this.hasDomElement = !0), this.forceUpdate();
        }
    }
    componentWillUnmount() {
        this.showTimeout.stop(), (this.domElementRef.current = null);
    }
    render() {
        let e,
            { children: t, text: n, 'aria-label': r } = this.props;
        if (null == n) return t(R);
        'string' == typeof r ? (e = r) : 'string' == typeof n && !1 !== r && (e = n);
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
            (0, i.jsxs)(o.Fragment, {
                children: [
                    t(a),
                    void 0 === this.props.targetElementRef &&
                        (0, i.jsx)('span', {
                            ref: this.siblingDomRef,
                            style: { display: 'none' }
                        }),
                    this.renderTooltip()
                ]
            })
        );
    }
    shouldShowTooltip(e, t) {
        let n = null == e.targetElementRef || null != e.targetElementRef.current;
        return e.shouldShow && (t.shouldShowTooltip || e.forceOpen) && n;
    }
    renderTooltip() {
        let { text: e, align: t, position: n, color: r, spacing: o, tooltipClassName: a, tooltipStyle: s, tooltipContentClassName: l, disableTooltipPointerEvents: c, onAnimationRest: d, allowOverflow: f, clickableOnMobile: _, hideOnClick: p, tooltipPointerClassName: h } = this.props,
            m = (u.tq || u.Em) && !0 === _ && p,
            g = (!1 !== c && !m) || !0 === c,
            E = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
            b = null;
        return (
            (b = e instanceof Function ? (E ? e() : null) : e),
            (0, i.jsx)(k, {
                disableTooltipPointerEvents: g,
                targetElementRef: this.domElementRef,
                tooltipStyle: s,
                tooltipClassName: a,
                tooltipContentClassName: l,
                tooltipPointerClassName: h,
                align: t,
                position: n,
                color: r,
                spacing: o,
                isVisible: E,
                onAnimationRest: d,
                onNonAccessibleClick: m ? this.handleClick : void 0,
                allowOverflow: f,
                children: b
            })
        );
    }
    show() {
        let { delay: e, overflowOnly: t } = this.props;
        if (t) {
            let e = this.domElementRef.current;
            if (null == e || ((0, d.k)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth)) return;
        }
        null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0);
    }
    hide() {
        this.showTimeout.stop(), this.toggleShow(!1);
    }
    toggleShow(e) {
        if (this.state.shouldShowTooltip !== e) {
            var t, n, r, i;
            e ? null == (t = (n = this.props).onTooltipShow) || t.call(n) : null == (r = (i = this.props).onTooltipHide) || r.call(i),
                l.flushSync(() => {
                    this.setState({ shouldShowTooltip: e });
                });
        }
    }
    constructor(...e) {
        super(...e),
            b(this, 'showTimeout', new f.V7()),
            b(this, 'domElementRef', o.createRef()),
            b(this, 'hasDomElement', !1),
            b(this, 'siblingDomRef', o.createRef()),
            b(this, 'state', { shouldShowTooltip: !1 }),
            b(this, 'handleMouseEnter', () => {
                ((u.tq || u.Em) && !0 === this.props.clickableOnMobile) || this.show();
            }),
            b(this, 'handleMouseLeave', () => {
                ((u.tq || u.Em) && !0 === this.props.clickableOnMobile) || this.hide();
            }),
            b(this, 'handleFocus', () => {
                m.Z.keyboardModeEnabled && this.show();
            }),
            b(this, 'handleBlur', () => {
                this.hide();
            }),
            b(this, 'handleClick', () => {
                let e = this.hasDomElement;
                e && this.props.hideOnClick ? this.hide() : !e && (u.tq || u.Em) && !0 === this.props.clickableOnMobile && this.show();
            }),
            b(this, 'handleContextMenu', () => {
                this.hide();
            });
    }
}
b(j, 'Colors', T),
    b(j, 'defaultProps', {
        hideOnClick: !0,
        position: 'top',
        color: 'primary',
        forceOpen: !1,
        spacing: C,
        shouldShow: !0,
        allowOverflow: !1,
        overflowOnly: !1
    });
let U = (e) => {
    var { children: t, className: n, element: r = 'div' } = e,
        a = I(e, ['children', 'className', 'element']);
    return (0, i.jsx)(j, O(y({}, a), { children: (e) => o.createElement(r, null != n ? O(y({}, e), { className: n }) : e, t) }));
};
