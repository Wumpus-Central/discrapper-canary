n.d(t, {
    F: () => A,
    H: () => N,
}),
    n(953529),
    n(388685),
    n(415506);
var r,
    i = n(54381),
    a = n(473749),
    o = n(299608),
    s = n.n(o),
    l = n(97613),
    c = n.n(l),
    u = n(24156),
    d = n(374470),
    f = n(793030),
    _ = n(846519),
    p = n(952265),
    h = n(481060),
    m = n(314910),
    g = n(728285),
    E = n(574254),
    b = n(960048),
    y = n(920676),
    O = n(981631);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = Symbol("POPOUT_PREVENT_CLOSE"),
    C = new Set(["Spacebar", " ", "Enter"]);
class N extends (r = a.Component) {
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
            return console.error(e), b.Z.captureException(e), null;
        }
        return t;
    }
    get closeAction() {
        return this.props.ignoreModalClicks ? O.CkL.POPOUT_CLOSE_AFTER_MODALS : O.CkL.POPOUT_CLOSE;
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
            this.context.windowDispatch.unsubscribe(O.CkL.POPOUT_CLOSE, this.handleEscapeClose),
            this.context.windowDispatch.unsubscribe(O.CkL.POPOUT_CLOSE_AFTER_MODALS, this.handleEscapeClose),
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
                    S(I({ onMouseDown: this.handlePreload }, t ? { onMouseEnter: this.handleMouseEnter } : {}), {
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
                (0, i.jsx)(h.y5t, {
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
            { resizeKey: _, isLoading: p, shouldShowLoadingState: g } = this.state;
        return p && !g
            ? null
            : (0, i.jsx)(f.mh4, {
                  layerContext: null != u ? u : m.nz,
                  children: (0, i.jsx)(h.jRF, {
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
                      positionKey: null != l ? l : String(_),
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
            v(this, "domElementRef", a.createRef()),
            v(this, "layerRef", a.createRef()),
            v(this, "popoutRef", a.createRef()),
            v(this, "resizeObserver", void 0),
            v(this, "popoutId", "popout_".concat(c()())),
            v(this, "loadingTimeout", new _.V7()),
            v(this, "validClickTimeout", new _.V7()),
            v(this, "isValidClickStart", !1),
            v(this, "state", {
                renderedPosition: this.props.position,
                shouldShowPopout: !1,
                shouldShowLoadingState: !1,
                isLoading: !1,
                resizeKey: 0,
            }),
            v(this, "handlePopoutShow", () => {
                this.context.windowDispatch.dispatch(O.CkL.POPOUT_SHOW, this.props.popoutKey);
            }),
            v(this, "handlePopoutHide", () => {
                this.context.windowDispatch.dispatch(O.CkL.POPOUT_HIDE, this.props.popoutKey);
            }),
            v(this, "handleSetPopoutRef", (e) => {
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
            v(this, "renderPopout", (e, t) => {
                let { renderPopout: n } = this.props;
                return this.state.isLoading
                    ? this.props.loadingComponent
                    : n(
                          S(I({}, e), {
                              updatePosition: t,
                              closePopout: this.close,
                              setPopoutRef: this.handleSetPopoutRef,
                          }),
                      );
            }),
            v(this, "close", (e, t) => {
                let { onRequestClose: n, shouldShow: r } = this.props;
                (null == n ? void 0 : n(e, t)) !== A && null == r && this.toggleShow(!1);
            }),
            v(this, "handleClick", (e) => {
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
            v(this, "handleMouseEnter", () => {
                let { onRequestOpen: e } = this.props;
                null == e || e(), this.setState({ shouldShowPopout: !0 });
            }),
            v(this, "handlePreload", async () => {
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
            v(this, "handleKeyboardPreload", (e) => {
                C.has(e.key) && this.handlePreload();
            }),
            v(this, "handleDocumentMouseDown", (e) => {
                let { ignoreModalClicks: t, closeOnClickOutside: n } = this.props;
                if (!1 === n) return;
                let r = e.target,
                    i = this.domElementRef.current;
                if (null != i) {
                    if ((0, h.ty$)(i, r) || E.Z.isOpen() || (t && (0, p.$s)())) return;
                    this.isValidClickStart = !0;
                }
            }),
            v(this, "handleDocumentMouseUp", (e) => {
                this.isValidClickStart && ((this.isValidClickStart = !1), this.close(e, "system:click_outside"));
            }),
            v(this, "handlePopoutPositionChange", (e) => {
                this.setState({ renderedPosition: e });
            }),
            v(this, "handleScroll", (e) => {
                let t = e.target;
                (null == t ? void 0 : t.contains(this.domElementRef.current)) && this.close(void 0, "system:scroll");
            }),
            v(this, "handleEscapeClose", (e) => {
                this.close(e, "user:escape");
            }),
            v(
                this,
                "handleStickyScroll",
                s()(() => {
                    requestAnimationFrame(() => {
                        let e = this.popoutRef.current;
                        if (null != e && this.shouldShowPopout(this.props, this.state)) {
                            var t;
                            R(e) || this.close(void 0, "system:viewport_exit"),
                                null == (t = this.layerRef.current) || t.updatePosition();
                        }
                    });
                }, 1000 / 60),
            );
    }
}
v(N, "defaultProps", {
    autoInvert: !1,
    nudgeAlignIntoViewport: !1,
    spacing: 0,
    loadingComponent: (0, i.jsx)(y.x, {}),
    closeOnClickOutside: !0,
}),
    v(N, "contextType", g.ZP);
let R = (e) => {
    var t, n, r, i, a, o;
    let s = e.getBoundingClientRect(),
        l = null != (a = null == (n = e.ownerDocument) || null == (t = n.defaultView) ? void 0 : t.innerHeight) ? a : 0,
        c = null != (o = null == (i = e.ownerDocument) || null == (r = i.defaultView) ? void 0 : r.innerWidth) ? o : 0;
    return s.top < l && s.bottom > 0 && s.left < c && s.right > 0;
};
