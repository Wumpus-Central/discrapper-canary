"use strict";
n.d(t, { ST: () => O, oM: () => A });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(340287),
    u = n(922139),
    c = n(607399),
    d = n(621466),
    _ = n(844222),
    h = n(451988),
    f = n(953992),
    p = n(866323),
    E = n(775602),
    m = n(750506),
    g = n(418519),
    A =
        (((i = {}).PRIMARY = "primary"),
        (i.GREY = "grey"),
        (i.BRAND = "brand"),
        (i.GREEN = "green"),
        (i.RED = "red"),
        i);
let I = Object.freeze({}),
    T = Object.freeze({
        top: g.dn,
        bottom: g.L_,
        left: g.Lf,
        right: g.Uu,
        center: g.F6,
        window_center: g.F6,
        primary: g.A4,
        grey: g.F7,
        brand: g.ZE,
        green: g.x7,
        red: g.Rp,
    });
function S(e, t, n) {
    let i = "left" === e || "right" === e,
        r = "50%",
        s = n;
    return (
        t === (i ? "top" : "left")
            ? ((r = "0%"), (s += 16))
            : t === (i ? "bottom" : "right") && ((r = "100%"), (s -= 20)),
        { [i ? "top" : "left"]: `calc(${r} + ${s}px)` }
    );
}
let y = (e) => {
        let {
                targetElementRef: t,
                align: n = "center",
                position: i,
                color: s,
                children: a,
                onNonAccessibleClick: l,
                tooltipClassName: c,
                tooltipStyle: d,
                tooltipContentClassName: _,
                spacing: h = 8,
                animationStyle: f,
                disableTooltipPointerEvents: p = !1,
                allowOverflow: E = !1,
                tooltipPointerClassName: A,
                positionKeyStemOverride: I,
                dataMeticulousIgnore: y,
            } = e,
            C = `${I ?? ("string" == typeof a ? a : "")}:${i}`;
        return (0, r.jsx)(m.nE, {
            disablePointerEvents: p,
            targetRef: t,
            position: i,
            autoInvert: !0,
            align: n,
            positionKey: C,
            spacing: h,
            nudgeAlignIntoViewport: !0,
            children: (e) => {
                let { position: t, nudge: h } = e;
                return (0, r.jsxs)(u.animated.div, {
                    onClick: l,
                    className: o()(g.YL, T[null != t ? t : i], T[s], { [g.Cy]: p }, c),
                    style: { ...f, ...d },
                    "data-mtctest-ignore": y,
                    children: [
                        (0, r.jsx)("div", { className: o()(g.xQ, g.yH, A), style: S(t ?? i, n, h) }),
                        (0, r.jsx)("div", { className: o()(g.xQ, A), style: S(t ?? i, n, h) }),
                        (0, r.jsx)("div", { className: o()(g.rv, { [g.u2]: E }, _), children: a }),
                    ],
                });
            },
        });
    },
    C = { scale: 0.95, opacity: 0 },
    N = { scale: 1, opacity: 0 },
    v = { scale: 1, opacity: 1 },
    R = (e) => {
        let { isVisible: t, onAnimationRest: n, targetElementRef: i, ...a } = e,
            { reducedMotion: o } = s.useContext(_.C);
        return (0, p.p)(
            t,
            {
                keys: (e) => (e ? "tooltip" : "empty"),
                config: f.p,
                from: o.enabled ? N : C,
                enter: v,
                leave: o.enabled ? N : C,
                onRest: n,
            },
            "animate-always",
        )((e, t) =>
            t ? (0, r.jsx)(y, { "data-migration-pending": !0, animationStyle: e, targetElementRef: i, ...a }) : null,
        );
    };
class O extends s.Component {
    static Colors = A;
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
    showTimeout = new h.Ep();
    domElementRef = s.createRef();
    hasDomElement = !1;
    siblingDomRef = s.createRef();
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
            } else if (((e = this.siblingDomRef.current?.previousElementSibling), !(0, d.vq)(e)))
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
        if (null == n) return t(I);
        "string" == typeof i ? (e = i) : "string" == typeof n && !1 !== i && (e = n);
        let a = {
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onContextMenu: this.handleContextMenu,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
        };
        return (
            null != e && (a["aria-label"] = e),
            (0, r.jsxs)(s.Fragment, {
                children: [
                    t(a),
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
                spacing: s,
                tooltipClassName: a,
                tooltipStyle: o,
                tooltipContentClassName: l,
                disableTooltipPointerEvents: u,
                onAnimationRest: d,
                allowOverflow: _,
                clickableOnMobile: h,
                hideOnClick: f,
                tooltipPointerClassName: p,
                dataMeticulousIgnore: E,
            } = this.props,
            m = (c.Fr || c.v1) && !0 === h && f,
            g = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
            A = null;
        return (
            (A = e instanceof Function ? (g ? e() : null) : e),
            (0, r.jsx)(R, {
                disableTooltipPointerEvents: (!1 !== u && !m) || !0 === u,
                targetElementRef: this.domElementRef,
                tooltipStyle: o,
                tooltipClassName: a,
                tooltipContentClassName: l,
                tooltipPointerClassName: p,
                align: t,
                position: n,
                color: i,
                spacing: s,
                isVisible: g,
                onAnimationRest: d,
                onNonAccessibleClick: m ? this.handleClick : void 0,
                allowOverflow: _,
                positionKeyStemOverride: this.props.positionKeyStemOverride,
                dataMeticulousIgnore: E,
                children: A,
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
        this.state.shouldShowTooltip !== e &&
            (e ? this.props.onTooltipShow?.() : this.props.onTooltipHide?.(),
            l.flushSync(() => {
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
        E.Ay.keyboardModeEnabled && this.show();
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
