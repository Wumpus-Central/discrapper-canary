"use strict";
n.d(t, { ST: () => L, oM: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(340287),
    l = n(522160),
    u = n(607399),
    c = n(621466),
    d = n(158954),
    _ = n(451988),
    f = n(953992),
    h = n(397927),
    p = n(775602),
    g = n(750506),
    E = n(197290),
    A = (function (e) {
        return (e.PRIMARY = "primary"), (e.GREY = "grey"), (e.BRAND = "brand"), (e.GREEN = "green"), (e.RED = "red"), e;
    })({});
let I = 16,
    T = 10,
    y = 8,
    S = Object.freeze({}),
    v = Object.freeze({
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
function C(e, t, n) {
    let r = "left" === e || "right" === e,
        i = r ? "top" : "left",
        a = r ? "top" : "left",
        s = r ? "bottom" : "right",
        o = "50%",
        l = n;
    return t === a ? ((o = "0%"), (l += I)) : t === s && ((o = "100%"), (l -= T + T)), { [i]: `calc(${o} + ${l}px)` };
}
let b = (e) => {
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
                spacing: f = y,
                animationStyle: h,
                disableTooltipPointerEvents: p = !1,
                allowOverflow: A = !1,
                tooltipPointerClassName: I,
                positionKeyStemOverride: T,
                dataMeticulousIgnore: S,
            } = e,
            b = `${T ?? ("string" == typeof o ? o : "")}:${i}`;
        return (0, r.jsx)(g.nE, {
            disablePointerEvents: p,
            targetRef: t,
            position: i,
            autoInvert: !0,
            align: n,
            positionKey: b,
            spacing: f,
            nudgeAlignIntoViewport: !0,
            children: (e) => {
                let { position: t, nudge: f } = e;
                return (0, r.jsxs)(l.animated.div, {
                    onClick: u,
                    className: s()(E.YL, v[null != t ? t : i], v[a], { [E.Cy]: p }, c),
                    style: { ...h, ...d },
                    "data-mtctest-ignore": S,
                    children: [
                        (0, r.jsx)("div", { className: s()(E.xQ, E.yH, I), style: C(t ?? i, n, f) }),
                        (0, r.jsx)("div", { className: s()(E.xQ, I), style: C(t ?? i, n, f) }),
                        (0, r.jsx)("div", { className: s()(E.rv, { [E.u2]: A }, _), children: o }),
                    ],
                });
            },
        });
    },
    N = { scale: 0.95, opacity: 0 },
    R = { scale: 1, opacity: 0 },
    O = { scale: 1, opacity: 1 },
    D = (e) => {
        let { isVisible: t, onAnimationRest: n, targetElementRef: a, ...s } = e,
            { reducedMotion: o } = i.useContext(d.CZY);
        return (0, h.pnh)(
            t,
            {
                keys: (e) => (e ? "tooltip" : "empty"),
                config: f.p,
                from: o.enabled ? R : N,
                enter: O,
                leave: o.enabled ? R : N,
                onRest: n,
            },
            "animate-always",
        )((e, t) =>
            t ? (0, r.jsx)(b, { "data-migration-pending": !0, animationStyle: e, targetElementRef: a, ...s }) : null,
        );
    };
class L extends i.Component {
    static Colors = A;
    static defaultProps = {
        hideOnClick: !0,
        position: "top",
        color: "primary",
        forceOpen: !1,
        spacing: y,
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
        if (null == n) return t(S);
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
                hideOnClick: h,
                tooltipPointerClassName: p,
                dataMeticulousIgnore: g,
            } = this.props,
            E = (u.Fr || u.v1) && !0 === f && h,
            A = (!1 !== c && !E) || !0 === c,
            I = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
            T = null;
        return (
            (T = e instanceof Function ? (I ? e() : null) : e),
            (0, r.jsx)(D, {
                disableTooltipPointerEvents: A,
                targetElementRef: this.domElementRef,
                tooltipStyle: o,
                tooltipClassName: s,
                tooltipContentClassName: l,
                tooltipPointerClassName: p,
                align: t,
                position: n,
                color: i,
                spacing: a,
                isVisible: I,
                onAnimationRest: d,
                onNonAccessibleClick: E ? this.handleClick : void 0,
                allowOverflow: _,
                positionKeyStemOverride: this.props.positionKeyStemOverride,
                dataMeticulousIgnore: g,
                children: T,
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
        p.A.keyboardModeEnabled && this.show();
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
