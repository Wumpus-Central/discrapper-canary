"use strict";
n.d(t, { ST: () => D, oM: () => T });
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(340287),
    d = n(580929),
    c = n(607399),
    u = n(621466),
    _ = n(844222),
    E = n(451988);
let A = { tension: 2400, friction: 52 };
var h = n(866323),
    I = n(775602),
    f = n(750506),
    p = n(418519),
    T =
        (((i = {}).PRIMARY = "primary"),
        (i.GREY = "grey"),
        (i.BRAND = "brand"),
        (i.GREEN = "green"),
        (i.RED = "red"),
        i);
let m = Object.freeze({}),
    g = Object.freeze({
        top: p.dn,
        bottom: p.L_,
        left: p.Lf,
        right: p.Uu,
        center: p.F6,
        window_center: p.F6,
        primary: p.A4,
        grey: p.F7,
        brand: p.ZE,
        green: p.x7,
        red: p.Rp,
    });
function S(e, t, n) {
    let i = "left" === e || "right" === e,
        r = "50%",
        a = n;
    return (
        t === (i ? "top" : "left")
            ? ((r = "0%"), (a += 16))
            : t === (i ? "bottom" : "right") && ((r = "100%"), (a -= 20)),
        { [i ? "top" : "left"]: `calc(${r} + ${a}px)` }
    );
}
let N = (e) => {
        let {
                targetElementRef: t,
                align: n = "center",
                position: i,
                color: a,
                children: s,
                onNonAccessibleClick: o,
                tooltipClassName: c,
                tooltipStyle: u,
                tooltipContentClassName: _,
                spacing: E = 8,
                animationStyle: A,
                disableTooltipPointerEvents: h = !1,
                allowOverflow: I = !1,
                tooltipPointerClassName: T,
                positionKeyStemOverride: m,
                dataMeticulousIgnore: N,
            } = e,
            C = `${m ?? ("string" == typeof s ? s : "")}:${i}`;
        return (0, r.jsx)(f.nE, {
            disablePointerEvents: h,
            targetRef: t,
            position: i,
            autoInvert: !0,
            align: n,
            positionKey: C,
            spacing: E,
            nudgeAlignIntoViewport: !0,
            children: (e) => {
                let { position: t, nudge: E } = e;
                return (0, r.jsxs)(d.animated.div, {
                    onClick: o,
                    className: l()(p.YL, g[null != t ? t : i], g[a], { [p.Cy]: h }, c),
                    style: { ...A, ...u },
                    "data-mtctest-ignore": N,
                    children: [
                        (0, r.jsx)("div", { className: l()(p.xQ, p.yH, T), style: S(t ?? i, n, E) }),
                        (0, r.jsx)("div", { className: l()(p.xQ, T), style: S(t ?? i, n, E) }),
                        (0, r.jsx)("div", { className: l()(p.rv, { [p.u2]: I }, _), children: s }),
                    ],
                });
            },
        });
    },
    C = { scale: 0.95, opacity: 0 },
    R = { scale: 1, opacity: 0 },
    O = { scale: 1, opacity: 1 };
function L(e) {
    let { isVisible: t, onAnimationRest: n, targetElementRef: i, ...s } = e,
        { reducedMotion: l } = a.useContext(_.C);
    return (0, h.p)(
        t,
        {
            keys: (e) => (e ? "tooltip" : "empty"),
            config: A,
            from: l.enabled ? R : C,
            enter: O,
            leave: l.enabled ? R : C,
            onRest: n,
        },
        "animate-always",
    )((e, t) =>
        t ? (0, r.jsx)(N, { "data-migration-pending": !0, animationStyle: e, targetElementRef: i, ...s }) : null,
    );
}
class D extends a.Component {
    static Colors = T;
    static defaultProps = {
        hideOnClick: !0,
        position: "top",
        color: "primary",
        forceOpen: !1,
        spacing: 8,
        shouldShow: !0,
        allowOverflow: !1,
        overflowOnly: !1,
    };
    static getDerivedStateFromProps(e, t) {
        return t.shouldShowTooltip && null == e.text ? { shouldShowTooltip: !1 } : null;
    }
    showTimeout = new E.Ep();
    domElementRef = a.createRef();
    hasDomElement = !1;
    siblingDomRef = a.createRef();
    state = { shouldShowTooltip: !1 };
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
            } else if (((e = this.siblingDomRef.current?.previousElementSibling), !(0, u.vq)(e)))
                throw Error("VoidTooltip cannot find DOM node");
            (this.domElementRef.current = e), (this.hasDomElement = !0), this.forceUpdate();
        }
    }
    componentWillUnmount() {
        this.showTimeout.stop(), (this.domElementRef.current = null);
    }
    render() {
        let e,
            { children: t, text: n, "aria-label": i } = this.props;
        if (null == n) return t(m);
        "string" == typeof i ? (e = i) : "string" == typeof n && !1 !== i && (e = n);
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
            (0, r.jsxs)(a.Fragment, {
                children: [
                    t(s),
                    void 0 === this.props.targetElementRef &&
                        (0, r.jsx)("span", { ref: this.siblingDomRef, style: { display: "none" } }),
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
                color: i,
                spacing: a,
                tooltipClassName: s,
                tooltipStyle: l,
                tooltipContentClassName: o,
                disableTooltipPointerEvents: d,
                onAnimationRest: u,
                allowOverflow: _,
                clickableOnMobile: E,
                hideOnClick: A,
                tooltipPointerClassName: h,
                dataMeticulousIgnore: I,
            } = this.props,
            f = (c.Fr || c.v1) && !0 === E && A,
            p = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
            T = null;
        return (
            (T = e instanceof Function ? (p ? e() : null) : e),
            (0, r.jsx)(L, {
                disableTooltipPointerEvents: (!1 !== d && !f) || !0 === d,
                targetElementRef: this.domElementRef,
                tooltipStyle: l,
                tooltipClassName: s,
                tooltipContentClassName: o,
                tooltipPointerClassName: h,
                align: t,
                position: n,
                color: i,
                spacing: a,
                isVisible: p,
                onAnimationRest: u,
                onNonAccessibleClick: f ? this.handleClick : void 0,
                allowOverflow: _,
                positionKeyStemOverride: this.props.positionKeyStemOverride,
                dataMeticulousIgnore: I,
                children: T,
            })
        );
    }
    show() {
        let { delay: e, overflowOnly: t } = this.props;
        if (t) {
            let e = this.domElementRef.current;
            if (null == e || ((0, u.vq)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth)) return;
        }
        null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0);
    }
    hide() {
        this.showTimeout.stop(), this.toggleShow(!1);
    }
    toggleShow(e) {
        this.state.shouldShowTooltip !== e &&
            (e ? this.props.onTooltipShow?.() : this.props.onTooltipHide?.(),
            o.flushSync(() => {
                this.setState({ shouldShowTooltip: e });
            }));
    }
    handleMouseEnter = () => {
        ((c.Fr || c.v1) && !0 === this.props.clickableOnMobile) || this.show();
    };
    handleMouseLeave = () => {
        ((c.Fr || c.v1) && !0 === this.props.clickableOnMobile) || this.hide();
    };
    handleFocus = () => {
        I.Ay.keyboardModeEnabled && this.show();
    };
    handleBlur = () => {
        this.hide();
    };
    handleClick = () => {
        let e = this.hasDomElement;
        e && this.props.hideOnClick
            ? this.hide()
            : !e && (c.Fr || c.v1) && !0 === this.props.clickableOnMobile && this.show();
    };
    handleContextMenu = () => {
        this.hide();
    };
}
