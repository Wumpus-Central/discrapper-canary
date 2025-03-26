n.d(t, {
    Cy: () => M,
    DY: () => F,
    FG: () => C,
    u: () => B
}),
    n(411104),
    n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(299608),
    c = n.n(l),
    u = n(995295),
    d = n(642128),
    f = n(873546),
    _ = n(374470),
    p = n(846519),
    h = n(377527),
    m = n(186325),
    g = n(481060),
    E = n(607070),
    b = n(314910),
    v = n(960048),
    y = n(82778);
function O(e, t, n) {
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
function I(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var C = (function (e) {
    return (e.PRIMARY = 'primary'), (e.NESTED = 'nested'), (e.BLACK = 'black'), (e.GREY = 'grey'), (e.BRAND = 'brand'), (e.GREEN = 'green'), (e.YELLOW = 'yellow'), (e.RED = 'red'), (e.PREMIUM = 'premium'), e;
})({});
let R = 16,
    P = 10,
    w = 8,
    D = Object.freeze({}),
    L = Object.freeze({
        top: y.tooltipTop,
        bottom: y.tooltipBottom,
        left: y.tooltipLeft,
        right: y.tooltipRight,
        center: y.tooltipCenter,
        window_center: y.tooltipCenter,
        primary: y.tooltipPrimary,
        nested: y.tooltipNested,
        black: y.tooltipBlack,
        grey: y.tooltipGrey,
        brand: y.tooltipBrand,
        green: y.tooltipGreen,
        yellow: y.tooltipYellow,
        red: y.tooltipRed,
        premium: y.tooltipPremium
    });
function x(e, t, n) {
    let r = 'left' === e || 'right' === e,
        i = r ? 'top' : 'left',
        o = r ? 'top' : 'left',
        a = r ? 'bottom' : 'right',
        s = '50%',
        l = n;
    return t === o ? ((s = '0%'), (l += R)) : t === a && ((s = '100%'), (l -= P + P)), { [i]: 'calc('.concat(s, ' + ').concat(l, 'px)') };
}
let M = (e) => {
        let { targetElementRef: t, align: n = 'center', position: r, color: o, children: a, onNonAccessibleClick: l, tooltipClassName: c, tooltipStyle: u, tooltipContentClassName: f, spacing: _ = w, animationStyle: p, disableTooltipPointerEvents: h = !1, allowOverflow: m = !1, tooltipPointerClassName: g } = e,
            E = ''.concat('string' == typeof a ? a : '', ':').concat(r);
        return (0, i.jsx)(b.W5, {
            disablePointerEvents: h,
            targetRef: t,
            position: r,
            autoInvert: !0,
            align: n,
            positionKey: E,
            spacing: _,
            nudgeAlignIntoViewport: !0,
            children: (e) => {
                let { position: t, nudge: _ } = e;
                return (0, i.jsxs)(d.animated.div, {
                    onClick: l,
                    className: s()(y.tooltip, L[null != t ? t : r], L[o], { [y.tooltipDisablePointerEvents]: h }, c),
                    style: I({}, p, u),
                    children: [
                        (0, i.jsx)('div', {
                            className: s()(y.tooltipPointer, y.tooltipPointerBg, g),
                            style: x(null != t ? t : r, n, _)
                        }),
                        (0, i.jsx)('div', {
                            className: s()(y.tooltipPointer, g),
                            style: x(null != t ? t : r, n, _)
                        }),
                        (0, i.jsx)('div', {
                            className: s()(y.tooltipContent, { [y.tooltipContentAllowOverflow]: m }, f),
                            children: a
                        })
                    ]
                });
            }
        });
    },
    k = {
        scale: 0.95,
        opacity: 0
    },
    j = {
        scale: 1,
        opacity: 0
    },
    U = {
        scale: 1,
        opacity: 1
    },
    G = (e) => {
        var { isVisible: t, onAnimationRest: n, targetElementRef: r } = e,
            a = A(e, ['isVisible', 'onAnimationRest', 'targetElementRef']);
        let { reducedMotion: s } = o.useContext(m.S);
        return (0, g.Yzy)(
            t,
            {
                keys: (e) => (e ? 'tooltip' : 'empty'),
                config: h.F,
                from: s.enabled ? j : k,
                enter: U,
                leave: s.enabled ? j : k,
                onRest: n
            },
            'animate-always'
        )((e, t) =>
            t
                ? (0, i.jsx)(
                      M,
                      I(
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
class B extends (r = o.Component) {
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
                if (((e = null === (t = this.siblingDomRef.current) || void 0 === t ? void 0 : t.previousElementSibling), !(0, _.k)(e))) throw Error('Tooltip cannot find DOM node');
            }
            this.logPositioningRegression(e), (this.domElementRef.current = e), (this.hasDomElement = !0), this.forceUpdate();
        }
    }
    componentWillUnmount() {
        this.showTimeout.stop(), (this.domElementRef.current = null);
    }
    render() {
        let e;
        let { children: t, text: n, 'aria-label': r } = this.props;
        if (null == n) return t(D);
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
        let { text: e, align: t, position: n, color: r, spacing: o, tooltipClassName: a, tooltipStyle: s, tooltipContentClassName: l, disableTooltipPointerEvents: c, onAnimationRest: u, allowOverflow: d, clickableOnMobile: _, hideOnClick: p, tooltipPointerClassName: h } = this.props,
            m = (f.tq || f.Em) && !0 === _ && p,
            g = (!1 !== c && !m) || !0 === c,
            E = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
            b = null;
        return (
            (b = e instanceof Function ? (E ? e() : null) : e),
            (0, i.jsx)(G, {
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
                onAnimationRest: u,
                onNonAccessibleClick: m ? this.handleClick : void 0,
                allowOverflow: d,
                children: b
            })
        );
    }
    show() {
        let { delay: e, overflowOnly: t } = this.props;
        if (t) {
            let e = this.domElementRef.current;
            if (null == e || ((0, _.k)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth)) return;
        }
        null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0);
    }
    hide() {
        this.showTimeout.stop(), this.toggleShow(!1);
    }
    toggleShow(e) {
        if (this.state.shouldShowTooltip !== e) {
            var t, n, r, i;
            e ? null === (t = (n = this.props).onTooltipShow) || void 0 === t || t.call(n) : null === (r = (i = this.props).onTooltipHide) || void 0 === r || r.call(i),
                u.flushSync(() => {
                    this.setState({ shouldShowTooltip: e });
                });
        }
    }
    constructor(...e) {
        super(...e),
            O(this, 'showTimeout', new p.V7()),
            O(this, 'domElementRef', o.createRef()),
            O(this, 'hasDomElement', !1),
            O(this, 'siblingDomRef', o.createRef()),
            O(this, 'state', { shouldShowTooltip: !1 }),
            O(
                this,
                'logPositioningRegression',
                c()((e) => {
                    if (void 0 === this.props.targetElementRef) {
                        let t = e.getBoundingClientRect();
                        0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && v.Z.captureMessage('Incorrectly positioned popout');
                    }
                }, 5000)
            ),
            O(this, 'handleMouseEnter', () => {
                ((f.tq || f.Em) && !0 === this.props.clickableOnMobile) || this.show();
            }),
            O(this, 'handleMouseLeave', () => {
                ((f.tq || f.Em) && !0 === this.props.clickableOnMobile) || this.hide();
            }),
            O(this, 'handleFocus', () => {
                E.Z.keyboardModeEnabled && this.show();
            }),
            O(this, 'handleBlur', () => {
                this.hide();
            }),
            O(this, 'handleClick', () => {
                let e = this.hasDomElement;
                e && this.props.hideOnClick ? this.hide() : !e && (f.tq || f.Em) && !0 === this.props.clickableOnMobile && this.show();
            }),
            O(this, 'handleContextMenu', () => {
                this.hide();
            });
    }
}
O(B, 'Colors', C),
    O(B, 'defaultProps', {
        hideOnClick: !0,
        position: 'top',
        color: 'primary',
        forceOpen: !1,
        spacing: w,
        shouldShow: !0,
        allowOverflow: !1,
        overflowOnly: !1
    });
let F = (e) => {
    var { children: t, className: n, element: r = 'div' } = e,
        a = A(e, ['children', 'className', 'element']);
    return (0, i.jsx)(B, T(I({}, a), { children: (e) => o.createElement(r, null != n ? T(I({}, e), { className: n }) : e, t) }));
};
