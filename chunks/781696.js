"use strict";
n.d(t, { ST: () => C, oM: () => A });
var r,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(340287),
    u = n(517738),
    d = n(607399),
    c = n(621466),
    _ = n(844222),
    f = n(451988),
    E = n(953992),
    h = n(866323),
    p = n(775602),
    m = n(750506),
    g = n(418519),
    A =
        (((r = {}).PRIMARY = "primary"),
        (r.GREY = "grey"),
        (r.BRAND = "brand"),
        (r.GREEN = "green"),
        (r.RED = "red"),
        r);
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
    let r = "left" === e || "right" === e,
        i = "50%",
        s = n;
    return (
        t === (r ? "top" : "left")
            ? ((i = "0%"), (s += 16))
            : t === (r ? "bottom" : "right") && ((i = "100%"), (s -= 20)),
        { [r ? "top" : "left"]: `calc(${i} + ${s}px)` }
    );
}
let y = (e) => {
        let {
                targetElementRef: t,
                align: n = "center",
                position: r,
                color: s,
                children: a,
                onNonAccessibleClick: l,
                tooltipClassName: d,
                tooltipStyle: c,
                tooltipContentClassName: _,
                spacing: f = 8,
                animationStyle: E,
                disableTooltipPointerEvents: h = !1,
                allowOverflow: p = !1,
                tooltipPointerClassName: A,
                positionKeyStemOverride: I,
                dataMeticulousIgnore: y,
            } = e,
            N = `${I ?? ("string" == typeof a ? a : "")}:${r}`;
        return (0, i.jsx)(m.nE, {
            disablePointerEvents: h,
            targetRef: t,
            position: r,
            autoInvert: !0,
            align: n,
            positionKey: N,
            spacing: f,
            nudgeAlignIntoViewport: !0,
            children: (e) => {
                let { position: t, nudge: f } = e;
                return (0, i.jsxs)(u.animated.div, {
                    onClick: l,
                    className: o()(g.YL, T[null != t ? t : r], T[s], { [g.Cy]: h }, d),
                    style: { ...E, ...c },
                    "data-mtctest-ignore": y,
                    children: [
                        (0, i.jsx)("div", { className: o()(g.xQ, g.yH, A), style: S(t ?? r, n, f) }),
                        (0, i.jsx)("div", { className: o()(g.xQ, A), style: S(t ?? r, n, f) }),
                        (0, i.jsx)("div", { className: o()(g.rv, { [g.u2]: p }, _), children: a }),
                    ],
                });
            },
        });
    },
    N = { scale: 0.95, opacity: 0 },
    O = { scale: 1, opacity: 0 },
    R = { scale: 1, opacity: 1 },
    v = (e) => {
        let { isVisible: t, onAnimationRest: n, targetElementRef: r, ...a } = e,
            { reducedMotion: o } = s.useContext(_.C);
        return (0, h.p)(
            t,
            {
                keys: (e) => (e ? "tooltip" : "empty"),
                config: E.p,
                from: o.enabled ? O : N,
                enter: R,
                leave: o.enabled ? O : N,
                onRest: n,
            },
            "animate-always",
        )((e, t) =>
            t ? (0, i.jsx)(y, { "data-migration-pending": !0, animationStyle: e, targetElementRef: r, ...a }) : null,
        );
    };
class C extends s.Component {
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
    showTimeout = new f.Ep();
    domElementRef = { current: null };
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
            } else if (((e = this.siblingDomRef.current?.previousElementSibling), !(0, c.vq)(e)))
                throw Error("VoidTooltip cannot find DOM node");
            (this.domElementRef.current = e), (this.hasDomElement = !0), this.forceUpdate();
        }
    }
    componentWillUnmount() {
        this.showTimeout.stop(), (this.domElementRef.current = null);
    }
    render() {
        let e,
            { children: t, text: n, "aria-label": r } = this.props;
        if (null == n) return t(I);
        "string" == typeof r ? (e = r) : "string" == typeof n && !1 !== r && (e = n);
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
            (0, i.jsxs)(s.Fragment, {
                children: [
                    t(a),
                    void 0 === this.props.targetElementRef &&
                        (0, i.jsx)("span", { ref: this.siblingDomRef, style: { display: "none" } }),
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
                spacing: s,
                tooltipClassName: a,
                tooltipStyle: o,
                tooltipContentClassName: l,
                disableTooltipPointerEvents: u,
                onAnimationRest: c,
                allowOverflow: _,
                clickableOnMobile: f,
                hideOnClick: E,
                tooltipPointerClassName: h,
                dataMeticulousIgnore: p,
            } = this.props,
            m = (d.Fr || d.v1) && !0 === f && E,
            g = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
            A = null;
        return (
            (A = e instanceof Function ? (g ? e() : null) : e),
            (0, i.jsx)(v, {
                disableTooltipPointerEvents: (!1 !== u && !m) || !0 === u,
                targetElementRef: this.domElementRef,
                tooltipStyle: o,
                tooltipClassName: a,
                tooltipContentClassName: l,
                tooltipPointerClassName: h,
                align: t,
                position: n,
                color: r,
                spacing: s,
                isVisible: g,
                onAnimationRest: c,
                onNonAccessibleClick: m ? this.handleClick : void 0,
                allowOverflow: _,
                positionKeyStemOverride: this.props.positionKeyStemOverride,
                dataMeticulousIgnore: p,
                children: A,
            })
        );
    }
    show() {
        let { delay: e, overflowOnly: t } = this.props;
        if (t) {
            let e = this.domElementRef.current;
            if (null == e || ((0, c.vq)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth)) return;
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
        ((d.Fr || d.v1) && !0 === this.props.clickableOnMobile) || this.show();
    };
    handleMouseLeave = () => {
        ((d.Fr || d.v1) && !0 === this.props.clickableOnMobile) || this.hide();
    };
    handleFocus = () => {
        p.A.keyboardModeEnabled && this.show();
    };
    handleBlur = () => {
        this.hide();
    };
    handleClick = () => {
        let e = this.hasDomElement;
        e && this.props.hideOnClick
            ? this.hide()
            : !e && (d.Fr || d.v1) && !0 === this.props.clickableOnMobile && this.show();
    };
    handleContextMenu = () => {
        this.hide();
    };
}
