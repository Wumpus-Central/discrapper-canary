n.d(t, {
    ST: () => M,
    oM: () => S,
}),
    n(65821),
    n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(340287),
    c = n(108531),
    u = n(607399),
    d = n(621466),
    f = n(158954),
    p = n(451988),
    _ = n(953992),
    h = n(397927),
    m = n(775602),
    g = n(750506),
    E = n(197290);

function b(e, t, n) {
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

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}

function O(e, t) {
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

function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = v(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
var S = (function (e) {
    return (e.PRIMARY = "primary"), (e.GREY = "grey"), (e.BRAND = "brand"), (e.GREEN = "green"), (e.RED = "red"), e;
})({});
let I = 16,
    T = 10,
    C = 8,
    N = Object.freeze({}),
    R = Object.freeze({
        top: E.dn,
        bottom: E.L_,
        left: E.Lf,
        right: E.Uu,
        center: E.F6,
        window_center: E.F6,
        primary: E.A4,
        grey: E.F7,
        brand: E.ZE,
        green: E.x7,
        red: E.Rp,
    });

function w(e, t, n) {
    let r = "left" === e || "right" === e,
        i = r ? "top" : "left",
        a = r ? "top" : "left",
        s = r ? "bottom" : "right",
        o = "50%",
        l = n;
    return (
        t === a ? ((o = "0%"), (l += I)) : t === s && ((o = "100%"), (l -= T + T)),
        {
            [i]: "calc(".concat(o, " + ").concat(l, "px)"),
        }
    );
}
let P = (e) => {
        let {
                targetElementRef: t,
                align: n = "center",
                position: r,
                color: a,
                children: s,
                onNonAccessibleClick: l,
                tooltipClassName: u,
                tooltipStyle: d,
                tooltipContentClassName: f,
                spacing: p = C,
                animationStyle: _,
                disableTooltipPointerEvents: h = !1,
                allowOverflow: m = !1,
                tooltipPointerClassName: b,
                positionKeyStemOverride: O,
                dataMeticulousIgnore: A,
            } = e,
            v = "".concat(null != O ? O : "string" == typeof s ? s : "", ":").concat(r);
        return (0, i.jsx)(g.nE, {
            disablePointerEvents: h,
            targetRef: t,
            position: r,
            autoInvert: !0,
            align: n,
            positionKey: v,
            spacing: p,
            nudgeAlignIntoViewport: !0,
            children: (e) => {
                let { position: t, nudge: p } = e;
                return (0, i.jsxs)(c.animated.div, {
                    onClick: l,
                    className: o()(
                        E.YL,
                        R[null != t ? t : r],
                        R[a],
                        {
                            [E.Cy]: h,
                        },
                        u,
                    ),
                    style: y({}, _, d),
                    "data-mtctest-ignore": A,
                    children: [
                        (0, i.jsx)("div", {
                            className: o()(E.xQ, E.yH, b),
                            style: w(null != t ? t : r, n, p),
                        }),
                        (0, i.jsx)("div", {
                            className: o()(E.xQ, b),
                            style: w(null != t ? t : r, n, p),
                        }),
                        (0, i.jsx)("div", {
                            className: o()(
                                E.rv,
                                {
                                    [E.u2]: m,
                                },
                                f,
                            ),
                            children: s,
                        }),
                    ],
                });
            },
        });
    },
    D = {
        scale: 0.95,
        opacity: 0,
    },
    x = {
        scale: 1,
        opacity: 0,
    },
    L = {
        scale: 1,
        opacity: 1,
    },
    j = (e) => {
        let { isVisible: t, onAnimationRest: n, targetElementRef: r } = e,
            s = A(e, ["isVisible", "onAnimationRest", "targetElementRef"]),
            { reducedMotion: o } = a.useContext(f.CZY);
        return (0, h.pnh)(
            t,
            {
                keys: (e) => (e ? "tooltip" : "empty"),
                config: _.p,
                from: o.enabled ? x : D,
                enter: L,
                leave: o.enabled ? x : D,
                onRest: n,
            },
            "animate-always",
        )((e, t) =>
            t
                ? (0, i.jsx)(
                      P,
                      y(
                          {
                              "data-migration-pending": !0,
                              animationStyle: e,
                              targetElementRef: r,
                          },
                          s,
                      ),
                  )
                : null,
        );
    };
class M extends (r = a.Component) {
    static getDerivedStateFromProps(e, t) {
        return t.shouldShowTooltip && null == e.text
            ? {
                  shouldShowTooltip: !1,
              }
            : null;
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
                if (((e = null == (t = this.siblingDomRef.current) ? void 0 : t.previousElementSibling), !(0, d.vq)(e)))
                    throw Error("VoidTooltip cannot find DOM node");
            }
            (this.domElementRef.current = e), (this.hasDomElement = !0), this.forceUpdate();
        }
    }
    componentWillUnmount() {
        this.showTimeout.stop(), (this.domElementRef.current = null);
    }
    render() {
        let e,
            { children: t, text: n, "aria-label": r } = this.props;
        if (null == n) return t(N);
        "string" == typeof r ? (e = r) : "string" == typeof n && !1 !== r && (e = n);
        let s = {
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onContextMenu: this.handleContextMenu,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
        };
        return (
            null != e && (s["aria-label"] = e),
            (0, i.jsxs)(a.Fragment, {
                children: [
                    t(s),
                    void 0 === this.props.targetElementRef &&
                        (0, i.jsx)("span", {
                            ref: this.siblingDomRef,
                            style: {
                                display: "none",
                            },
                        }),
                    this.renderTooltip(),
                ],
            })
        );
    }
    shouldShowTooltip(e, t) {
        let n = null == e.targetElementRef || null != e.targetElementRef.current;
        return e.shouldShow && (t.shouldShowTooltip || e.forceOpen) && n;
    }
    renderTooltip() {
        let {
                text: e,
                align: t,
                position: n,
                color: r,
                spacing: a,
                tooltipClassName: s,
                tooltipStyle: o,
                tooltipContentClassName: l,
                disableTooltipPointerEvents: c,
                onAnimationRest: d,
                allowOverflow: f,
                clickableOnMobile: p,
                hideOnClick: _,
                tooltipPointerClassName: h,
                dataMeticulousIgnore: m,
            } = this.props,
            g = (u.Fr || u.v1) && !0 === p && _,
            E = (!1 !== c && !g) || !0 === c,
            b = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
            y = null;
        return (
            (y = e instanceof Function ? (b ? e() : null) : e),
            (0, i.jsx)(j, {
                disableTooltipPointerEvents: E,
                targetElementRef: this.domElementRef,
                tooltipStyle: o,
                tooltipClassName: s,
                tooltipContentClassName: l,
                tooltipPointerClassName: h,
                align: t,
                position: n,
                color: r,
                spacing: a,
                isVisible: b,
                onAnimationRest: d,
                onNonAccessibleClick: g ? this.handleClick : void 0,
                allowOverflow: f,
                positionKeyStemOverride: this.props.positionKeyStemOverride,
                dataMeticulousIgnore: m,
                children: y,
            })
        );
    }
    show() {
        let { delay: e, overflowOnly: t } = this.props;
        if (t) {
            let e = this.domElementRef.current;
            if (null == e || ((0, d.vq)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth)) return;
        }
        null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0);
    }
    hide() {
        this.showTimeout.stop(), this.toggleShow(!1);
    }
    toggleShow(e) {
        if (this.state.shouldShowTooltip !== e) {
            var t, n, r, i;
            e
                ? null == (t = (n = this.props).onTooltipShow) || t.call(n)
                : null == (r = (i = this.props).onTooltipHide) || r.call(i),
                l.flushSync(() => {
                    this.setState({
                        shouldShowTooltip: e,
                    });
                });
        }
    }
    constructor(...e) {
        super(...e),
            b(this, "showTimeout", new p.Ep()),
            b(this, "domElementRef", {
                current: null,
            }),
            b(this, "hasDomElement", !1),
            b(this, "siblingDomRef", a.createRef()),
            b(this, "state", {
                shouldShowTooltip: !1,
            }),
            b(this, "handleMouseEnter", () => {
                ((u.Fr || u.v1) && !0 === this.props.clickableOnMobile) || this.show();
            }),
            b(this, "handleMouseLeave", () => {
                ((u.Fr || u.v1) && !0 === this.props.clickableOnMobile) || this.hide();
            }),
            b(this, "handleFocus", () => {
                m.A.keyboardModeEnabled && this.show();
            }),
            b(this, "handleBlur", () => {
                this.hide();
            }),
            b(this, "handleClick", () => {
                let e = this.hasDomElement;
                e && this.props.hideOnClick
                    ? this.hide()
                    : !e && (u.Fr || u.v1) && !0 === this.props.clickableOnMobile && this.show();
            }),
            b(this, "handleContextMenu", () => {
                this.hide();
            });
    }
}
b(M, "Colors", S),
    b(M, "defaultProps", {
        hideOnClick: !0,
        position: "top",
        color: "primary",
        forceOpen: !1,
        spacing: C,
        shouldShow: !0,
        allowOverflow: !1,
        overflowOnly: !1,
    });
