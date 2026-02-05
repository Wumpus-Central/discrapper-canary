"use strict";
n.d(t, { ST: () => D, oM: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(340287),
    l = n(92674),
    u = n(607399),
    c = n(621466),
    d = n(158954),
    _ = n(451988),
    f = n(953992),
    p = n(397927),
    h = n(775602),
    m = n(750506),
    g = n(197290),
    E = (function (e) {
        return (e.PRIMARY = "primary"), (e.GREY = "grey"), (e.BRAND = "brand"), (e.GREEN = "green"), (e.RED = "red"), e;
    })({});
let A = 16,
    I = 10,
    T = 8,
    y = Object.freeze({}),
    S = Object.freeze({
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
function v(e, t, n) {
    let r = "left" === e || "right" === e,
        i = r ? "top" : "left",
        a = r ? "top" : "left",
        s = r ? "bottom" : "right",
        o = "50%",
        l = n;
    return t === a ? ((o = "0%"), (l += A)) : t === s && ((o = "100%"), (l -= I + I)), { [i]: `calc(${o} + ${l}px)` };
}
let C = (e) => {
        let {
                targetElementRef: t,
                align: n = "center",
                position: i,
                color: a,
                children: o,
                onNonAccessibleClick: u,
                tooltipClassName: c,
                tooltipStyle: d,
                tooltipContentClassName: _,
                spacing: f = T,
                animationStyle: p,
                disableTooltipPointerEvents: h = !1,
                allowOverflow: E = !1,
                tooltipPointerClassName: A,
                positionKeyStemOverride: I,
                dataMeticulousIgnore: y,
            } = e,
            C = `${I ?? ("string" == typeof o ? o : "")}:${i}`;
        return (0, r.jsx)(m.nE, {
            disablePointerEvents: h,
            targetRef: t,
            position: i,
            autoInvert: !0,
            align: n,
            positionKey: C,
            spacing: f,
            nudgeAlignIntoViewport: !0,
            children: (e) => {
                let { position: t, nudge: f } = e;
                return (0, r.jsxs)(l.animated.div, {
                    onClick: u,
                    className: s()(g.YL, S[null != t ? t : i], S[a], { [g.Cy]: h }, c),
                    style: { ...p, ...d },
                    "data-mtctest-ignore": y,
                    children: [
                        (0, r.jsx)("div", { className: s()(g.xQ, g.yH, A), style: v(t ?? i, n, f) }),
                        (0, r.jsx)("div", { className: s()(g.xQ, A), style: v(t ?? i, n, f) }),
                        (0, r.jsx)("div", { className: s()(g.rv, { [g.u2]: E }, _), children: o }),
                    ],
                });
            },
        });
    },
    b = { scale: 0.95, opacity: 0 },
    N = { scale: 1, opacity: 0 },
    R = { scale: 1, opacity: 1 },
    O = (e) => {
        let { isVisible: t, onAnimationRest: n, targetElementRef: a, ...s } = e,
            { reducedMotion: o } = i.useContext(d.CZY);
        return (0, p.pnh)(
            t,
            {
                keys: (e) => (e ? "tooltip" : "empty"),
                config: f.p,
                from: o.enabled ? N : b,
                enter: R,
                leave: o.enabled ? N : b,
                onRest: n,
            },
            "animate-always",
        )((e, t) =>
            t ? (0, r.jsx)(C, { "data-migration-pending": !0, animationStyle: e, targetElementRef: a, ...s }) : null,
        );
    };
class D extends i.Component {
    static Colors = E;
    static defaultProps = {
        hideOnClick: !0,
        position: "top",
        color: "primary",
        forceOpen: !1,
        spacing: T,
        shouldShow: !0,
        allowOverflow: !1,
        overflowOnly: !1,
    };
    static getDerivedStateFromProps(e, t) {
        return t.shouldShowTooltip && null == e.text ? { shouldShowTooltip: !1 } : null;
    }
    showTimeout = new _.Ep();
    domElementRef = { current: null };
    hasDomElement = !1;
    siblingDomRef = i.createRef();
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
            { children: t, text: n, "aria-label": a } = this.props;
        if (null == n) return t(y);
        "string" == typeof a ? (e = a) : "string" == typeof n && !1 !== a && (e = n);
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
            (0, r.jsxs)(i.Fragment, {
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
                tooltipStyle: o,
                tooltipContentClassName: l,
                disableTooltipPointerEvents: c,
                onAnimationRest: d,
                allowOverflow: _,
                clickableOnMobile: f,
                hideOnClick: p,
                tooltipPointerClassName: h,
                dataMeticulousIgnore: m,
            } = this.props,
            g = (u.Fr || u.v1) && !0 === f && p,
            E = (!1 !== c && !g) || !0 === c,
            A = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
            I = null;
        return (
            (I = e instanceof Function ? (A ? e() : null) : e),
            (0, r.jsx)(O, {
                disableTooltipPointerEvents: E,
                targetElementRef: this.domElementRef,
                tooltipStyle: o,
                tooltipClassName: s,
                tooltipContentClassName: l,
                tooltipPointerClassName: h,
                align: t,
                position: n,
                color: i,
                spacing: a,
                isVisible: A,
                onAnimationRest: d,
                onNonAccessibleClick: g ? this.handleClick : void 0,
                allowOverflow: _,
                positionKeyStemOverride: this.props.positionKeyStemOverride,
                dataMeticulousIgnore: m,
                children: I,
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
            o.flushSync(() => {
                this.setState({ shouldShowTooltip: e });
            }));
    }
    handleMouseEnter = () => {
        ((u.Fr || u.v1) && !0 === this.props.clickableOnMobile) || this.show();
    };
    handleMouseLeave = () => {
        ((u.Fr || u.v1) && !0 === this.props.clickableOnMobile) || this.hide();
    };
    handleFocus = () => {
        h.A.keyboardModeEnabled && this.show();
    };
    handleBlur = () => {
        this.hide();
    };
    handleClick = () => {
        let e = this.hasDomElement;
        e && this.props.hideOnClick
            ? this.hide()
            : !e && (u.Fr || u.v1) && !0 === this.props.clickableOnMobile && this.show();
    };
    handleContextMenu = () => {
        this.hide();
    };
}
