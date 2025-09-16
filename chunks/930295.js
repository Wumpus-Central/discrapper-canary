n.d(t, {
    F: () => C,
    H: () => R,
}),
    n(953529),
    n(388685),
    n(415506);
var r,
    i = n(951288),
    a = n(647438),
    o = n(299608),
    s = n.n(o),
    l = n(97613),
    c = n.n(l),
    u = n(603113),
    d = n(374470),
    f = n(846519),
    _ = n(302901),
    p = n(539907),
    h = n(952265),
    m = n(481060),
    g = n(40851),
    E = n(314910),
    b = n(574254),
    y = n(960048),
    O = n(920676),
    v = n(981631);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
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
function A(e, t) {
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
let C = Symbol("POPOUT_PREVENT_CLOSE"),
    N = new Set(["Spacebar", " ", "Enter"]);
class R extends (r = a.Component) {
    shouldShowPopout(e, t) {
        return null != e.shouldShow ? e.shouldShow : t.shouldShowPopout;
    }
    componentDidMount() {
        this.shouldShowPopout(this.props, this.state) && this.setupShowPopout();
    }
    componentDidUpdate(e, t) {
        e.shouldShow, this.props.shouldShow;
        let n = this.shouldShowPopout(this.props, this.state);
        if (
            ((this.shouldShowPopout(e, t) !== n ||
                t.isLoading !== this.state.isLoading ||
                e.ignoreModalClicks !== this.props.ignoreModalClicks) &&
                (n ? this.setupShowPopout() : this.unsubscribe()),
            this.props.scrollBehavior !== e.scrollBehavior)
        ) {
            var r, i, a, o;
            let e = this.getDomElement();
            if (null == e) return;
            null == (r = e.ownerDocument) || r.removeEventListener("scroll", this.handleScroll, !0),
                null == (i = e.ownerDocument) || i.removeEventListener("scroll", this.handleStickyScroll, !0),
                "close" === this.props.scrollBehavior
                    ? null == (a = e.ownerDocument) || a.addEventListener("scroll", this.handleScroll, !0)
                    : "sticky" === this.props.scrollBehavior &&
                      (null == (o = e.ownerDocument) || o.addEventListener("scroll", this.handleStickyScroll, !0));
        }
    }
    getDomElement() {
        var e;
        let t = null == (e = this.props.targetElementRef) ? void 0 : e.current;
        if (!(0, d.kK)(t)) {
            let e = Error("Popout cannot find DOM node");
            return console.error(e), y.Z.captureException(e), null;
        }
        return t;
    }
    get closeAction() {
        return this.props.ignoreModalClicks ? v.CkL.POPOUT_CLOSE_AFTER_MODALS : v.CkL.POPOUT_CLOSE;
    }
    setupShowPopout() {
        var e, t, n, r;
        let i = this.getDomElement();
        null != i &&
            (null == (e = i.ownerDocument) || e.addEventListener("mousedown", this.handleDocumentMouseDown, !0),
            null == (t = i.ownerDocument) || t.addEventListener("mouseup", this.handleDocumentMouseUp, !0),
            "close" === this.props.scrollBehavior
                ? null == (n = i.ownerDocument) || n.addEventListener("scroll", this.handleScroll, !0)
                : "sticky" === this.props.scrollBehavior &&
                  (null == (r = i.ownerDocument) || r.addEventListener("scroll", this.handleStickyScroll, !0)),
            this.context.windowDispatch.subscribe(this.closeAction, this.handleEscapeClose),
            (this.domElementRef.current = i),
            (this.isValidClickStart = !1),
            this.forceUpdate());
    }
    unsubscribe() {
        var e, t, n, r, i;
        let a = this.domElementRef.current;
        null != a &&
            (null == (t = a.ownerDocument) || t.removeEventListener("mousedown", this.handleDocumentMouseDown, !0),
            null == (n = a.ownerDocument) || n.removeEventListener("mouseup", this.handleDocumentMouseUp, !0),
            null == (r = a.ownerDocument) || r.removeEventListener("scroll", this.handleScroll, !0),
            null == (i = a.ownerDocument) || i.removeEventListener("scroll", this.handleStickyScroll, !0)),
            this.context.windowDispatch.unsubscribe(v.CkL.POPOUT_CLOSE, this.handleEscapeClose),
            this.context.windowDispatch.unsubscribe(v.CkL.POPOUT_CLOSE_AFTER_MODALS, this.handleEscapeClose),
            null == (e = this.resizeObserver) || e.disconnect();
    }
    componentWillUnmount() {
        this.unsubscribe(),
            (this.domElementRef.current = null),
            this.loadingTimeout.stop(),
            this.validClickTimeout.stop();
    }
    render() {
        let { children: e, useMouseEnter: t } = this.props,
            n = this.shouldShowPopout(this.props, this.state);
        return (0, i.jsxs)(a.Fragment, {
            children: [
                e(
                    A(T({ onMouseDown: this.handlePreload }, t ? { onMouseEnter: this.handleMouseEnter } : {}), {
                        onKeyDown: this.handleKeyboardPreload,
                        onClick: this.handleClick,
                        "aria-controls": n ? this.popoutId : void 0,
                        "aria-expanded": n,
                    }),
                    {
                        isShown: n,
                        position: this.state.renderedPosition,
                    },
                ),
                (0, i.jsx)(m.y5t, {
                    forceLevel: 2,
                    children: this.renderLayer(),
                }),
            ],
        });
    }
    renderLayer() {
        if (!this.shouldShowPopout(this.props, this.state) || null == this.domElementRef.current) return null;
        let {
                position: e,
                align: t,
                nudgeAlignIntoViewport: n,
                useRawTargetDimensions: r,
                spacing: a,
                autoInvert: o,
                fixed: s,
                positionKey: l,
                disablePointerEvents: c,
                layerContext: u,
                clickTrap: d = !1,
            } = this.props,
            { resizeKey: f, isLoading: h, shouldShowLoadingState: m } = this.state;
        return h && !m
            ? null
            : (0, i.jsx)(_.mh, {
                  layerContext: null != u ? u : E.nz,
                  children: (0, i.jsx)(p.j, {
                      ref: this.layerRef,
                      onMount: this.handlePopoutShow,
                      onUnmount: this.handlePopoutHide,
                      id: this.popoutId,
                      targetRef: this.domElementRef,
                      position: e,
                      align: t,
                      nudgeAlignIntoViewport: n,
                      useRawTargetDimensions: r,
                      spacing: a,
                      autoInvert: o,
                      fixed: s,
                      positionKey: null != l ? l : String(f),
                      disablePointerEvents: c,
                      onPositionChange: this.handlePopoutPositionChange,
                      clickTrap: d,
                      children: this.renderPopout,
                  }),
              });
    }
    toggleShow(e) {
        this.state.shouldShowPopout !== e && this.setState({ shouldShowPopout: e });
    }
    constructor(...e) {
        super(...e),
            I(this, "domElementRef", a.createRef()),
            I(this, "layerRef", a.createRef()),
            I(this, "popoutRef", a.createRef()),
            I(this, "resizeObserver", void 0),
            I(this, "popoutId", "popout_".concat(c()())),
            I(this, "loadingTimeout", new f.V7()),
            I(this, "validClickTimeout", new f.V7()),
            I(this, "isValidClickStart", !1),
            I(this, "state", {
                renderedPosition: this.props.position,
                shouldShowPopout: !1,
                shouldShowLoadingState: !1,
                isLoading: !1,
                resizeKey: 0,
            }),
            I(this, "handlePopoutShow", () => {
                this.context.windowDispatch.dispatch(v.CkL.POPOUT_SHOW, this.props.popoutKey);
            }),
            I(this, "handlePopoutHide", () => {
                this.context.windowDispatch.dispatch(v.CkL.POPOUT_HIDE, this.props.popoutKey);
            }),
            I(this, "handleSetPopoutRef", (e) => {
                var t;
                let n = null == e ? void 0 : e.ownerDocument.defaultView;
                null != e &&
                    null != n &&
                    ((this.popoutRef.current = e),
                    null == (t = this.resizeObserver) || t.disconnect(),
                    (this.resizeObserver = new n.ResizeObserver(() => {
                        u.flushSync(() => {
                            this.setState({ resizeKey: this.state.resizeKey + 1 });
                        });
                    })),
                    this.resizeObserver.observe(e));
            }),
            I(this, "renderPopout", (e, t) => {
                let { renderPopout: n } = this.props;
                return this.state.isLoading
                    ? this.props.loadingComponent
                    : n(
                          A(T({}, e), {
                              updatePosition: t,
                              closePopout: this.close,
                              setPopoutRef: this.handleSetPopoutRef,
                          }),
                      );
            }),
            I(this, "close", (e, t) => {
                let { onRequestClose: n, shouldShow: r } = this.props;
                (null == n ? void 0 : n(e, t)) !== C && null == r && this.toggleShow(!1);
            }),
            I(this, "handleClick", (e) => {
                let { onShiftClick: t, shouldShow: n, onRequestOpen: r, onRequestClose: i } = this.props;
                if ((null == e ? void 0 : e.shiftKey) && null != t) return void t(e);
                let a = null != n;
                (a ? n : this.state.shouldShowPopout)
                    ? null == i || i(null == e ? void 0 : e.nativeEvent, "user:explicit")
                    : null == r || r(),
                    a ||
                        this.setState((e) => {
                            let { shouldShowPopout: t } = e;
                            return { shouldShowPopout: !t };
                        });
            }),
            I(this, "handleMouseEnter", () => {
                let { onRequestOpen: e } = this.props;
                null == e || e(), this.setState({ shouldShowPopout: !0 });
            }),
            I(this, "handlePreload", async () => {
                let { preload: e } = this.props;
                if (null != e) {
                    this.setState({ isLoading: !0 }),
                        this.loadingTimeout.start(250, () => this.setState({ shouldShowLoadingState: !0 }), !1);
                    try {
                        await e();
                    } finally {
                        this.setState({ isLoading: !1 });
                    }
                }
            }),
            I(this, "handleKeyboardPreload", (e) => {
                N.has(e.key) && this.handlePreload();
            }),
            I(this, "handleDocumentMouseDown", (e) => {
                let { ignoreModalClicks: t, closeOnClickOutside: n } = this.props;
                if (!1 === n) return;
                let r = e.target,
                    i = this.domElementRef.current;
                if (null != i) {
                    if ((0, p.t)(i, r) || b.Z.isOpen() || (t && (0, h.$s)())) return;
                    this.isValidClickStart = !0;
                }
            }),
            I(this, "handleDocumentMouseUp", (e) => {
                this.isValidClickStart && ((this.isValidClickStart = !1), this.close(e, "system:click_outside"));
            }),
            I(this, "handlePopoutPositionChange", (e) => {
                this.setState({ renderedPosition: e });
            }),
            I(this, "handleScroll", () => {
                this.close(void 0, "system:scroll");
            }),
            I(this, "handleEscapeClose", (e) => {
                this.close(e, "user:escape");
            }),
            I(
                this,
                "handleStickyScroll",
                s()(() => {
                    requestAnimationFrame(() => {
                        let e = this.popoutRef.current;
                        if (null != e && this.shouldShowPopout(this.props, this.state)) {
                            var t;
                            P(e) || this.close(void 0, "system:viewport_exit"),
                                null == (t = this.layerRef.current) || t.updatePosition();
                        }
                    });
                }, 1000 / 60),
            );
    }
}
I(R, "defaultProps", {
    autoInvert: !1,
    nudgeAlignIntoViewport: !1,
    spacing: 0,
    loadingComponent: (0, i.jsx)(O.x, {}),
    closeOnClickOutside: !0,
}),
    I(R, "contextType", g.ZP);
let P = (e) => {
    var t, n, r, i, a, o;
    let s = e.getBoundingClientRect(),
        l = null != (a = null == (n = e.ownerDocument) || null == (t = n.defaultView) ? void 0 : t.innerHeight) ? a : 0,
        c = null != (o = null == (i = e.ownerDocument) || null == (r = i.defaultView) ? void 0 : r.innerWidth) ? o : 0;
    return s.top < l && s.bottom > 0 && s.left < c && s.right > 0;
};
