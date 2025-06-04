n.d(t, {
    F: () => S,
    H: () => A
}),
    n(953529),
    n(388685),
    n(415506);
var r,
    i = n(255367),
    o = n(73800),
    a = n(97613),
    s = n.n(a),
    l = n(867309),
    c = n(374470),
    u = n(846519),
    d = n(302901),
    f = n(539907),
    _ = n(952265),
    p = n(481060),
    h = n(40851),
    m = n(314910),
    g = n(960048),
    E = n(920676),
    b = n(981631);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
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
function I(e, t) {
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
let S = Symbol('POPOUT_PREVENT_CLOSE'),
    T = new Set(['Spacebar', ' ', 'Enter']);
class A extends (r = o.Component) {
    shouldShowPopout(e, t) {
        return null != e.shouldShow ? e.shouldShow : t.shouldShowPopout;
    }
    componentDidMount() {
        this.shouldShowPopout(this.props, this.state) && this.setupShowPopout();
    }
    componentDidUpdate(e, t) {
        e.shouldShow, this.props.shouldShow;
        let n = this.shouldShowPopout(this.props, this.state);
        if (((this.shouldShowPopout(e, t) !== n || t.isLoading !== this.state.isLoading || e.ignoreModalClicks !== this.props.ignoreModalClicks) && (n ? this.setupShowPopout() : this.unsubscribe()), this.props.closeOnScroll !== e.closeOnScroll)) {
            var r, i;
            let e = this.getDomElement();
            if (null == e) return;
            this.props.closeOnScroll ? null == (r = e.ownerDocument) || r.addEventListener('scroll', this.handleScroll, !0) : null == (i = e.ownerDocument) || i.removeEventListener('scroll', this.handleScroll, !0);
        }
    }
    getDomElement() {
        var e;
        let t = null == (e = this.props.targetElementRef) ? void 0 : e.current;
        if (!(0, c.k)(t)) {
            let e = Error('Popout cannot find DOM node');
            return console.error(e), g.Z.captureException(e), null;
        }
        return t;
    }
    get closeAction() {
        return this.props.ignoreModalClicks ? b.CkL.POPOUT_CLOSE_AFTER_MODALS : b.CkL.POPOUT_CLOSE;
    }
    setupShowPopout() {
        var e, t, n;
        let r = this.getDomElement();
        null != r && (null == (e = r.ownerDocument) || e.addEventListener('mousedown', this.handleDocumentMouseDown, !0), null == (t = r.ownerDocument) || t.addEventListener('mouseup', this.handleDocumentMouseUp, !0), this.props.closeOnScroll && (null == (n = r.ownerDocument) || n.addEventListener('scroll', this.handleScroll, !0)), this.context.windowDispatch.subscribe(this.closeAction, this.close), (this.domElementRef.current = r), (this.isValidClickStart = !1), this.forceUpdate());
    }
    unsubscribe() {
        var e, t, n, r;
        let i = this.domElementRef.current;
        null != i && (null == (t = i.ownerDocument) || t.removeEventListener('mousedown', this.handleDocumentMouseDown, !0), null == (n = i.ownerDocument) || n.removeEventListener('mouseup', this.handleDocumentMouseUp, !0), null == (r = i.ownerDocument) || r.removeEventListener('scroll', this.handleScroll, !0)), this.context.windowDispatch.unsubscribe(b.CkL.POPOUT_CLOSE, this.close), this.context.windowDispatch.unsubscribe(b.CkL.POPOUT_CLOSE_AFTER_MODALS, this.close), null == (e = this.resizeObserver) || e.disconnect();
    }
    componentWillUnmount() {
        this.unsubscribe(), (this.domElementRef.current = null), this.loadingTimeout.stop(), this.validClickTimeout.stop();
    }
    render() {
        let { children: e, useMouseEnter: t } = this.props,
            n = this.shouldShowPopout(this.props, this.state);
        return (0, i.jsxs)(o.Fragment, {
            children: [
                e(
                    I(O({ onMouseDown: this.handlePreload }, t ? { onMouseEnter: this.handleMouseEnter } : {}), {
                        onKeyDown: this.handleKeyboardPreload,
                        onClick: this.handleClick,
                        'aria-controls': n ? this.popoutId : void 0,
                        'aria-expanded': n
                    }),
                    {
                        isShown: n,
                        position: this.state.renderedPosition
                    }
                ),
                (0, i.jsx)(p.y5t, {
                    forceLevel: 2,
                    children: this.renderLayer()
                })
            ]
        });
    }
    renderLayer() {
        if (!this.shouldShowPopout(this.props, this.state) || null == this.domElementRef.current) return null;
        let { position: e, align: t, nudgeAlignIntoViewport: n, useRawTargetDimensions: r, spacing: o, autoInvert: a, fixed: s, positionKey: l, disablePointerEvents: c, layerContext: u, clickTrap: _ = !1 } = this.props,
            { resizeKey: p, isLoading: h, shouldShowLoadingState: g } = this.state;
        return h && !g
            ? null
            : (0, i.jsx)(d.mh, {
                  layerContext: null != u ? u : m.nz,
                  children: (0, i.jsx)(f.j, {
                      ref: this.layerRef,
                      onMount: this.handlePopoutShow,
                      onUnmount: this.handlePopoutHide,
                      id: this.popoutId,
                      targetRef: this.domElementRef,
                      position: e,
                      align: t,
                      nudgeAlignIntoViewport: n,
                      useRawTargetDimensions: r,
                      spacing: o,
                      autoInvert: a,
                      fixed: s,
                      positionKey: null != l ? l : String(p),
                      disablePointerEvents: c,
                      onPositionChange: this.handlePopoutPositionChange,
                      clickTrap: _,
                      children: this.renderPopout
                  })
              });
    }
    toggleShow(e) {
        this.state.shouldShowPopout !== e && this.setState({ shouldShowPopout: e });
    }
    constructor(...e) {
        super(...e),
            y(this, 'domElementRef', o.createRef()),
            y(this, 'layerRef', o.createRef()),
            y(this, 'popoutRef', o.createRef()),
            y(this, 'resizeObserver', void 0),
            y(this, 'popoutId', 'popout_'.concat(s()())),
            y(this, 'loadingTimeout', new u.V7()),
            y(this, 'validClickTimeout', new u.V7()),
            y(this, 'isValidClickStart', !1),
            y(this, 'state', {
                renderedPosition: this.props.position,
                shouldShowPopout: !1,
                shouldShowLoadingState: !1,
                isLoading: !1,
                resizeKey: 0
            }),
            y(this, 'handlePopoutShow', () => {
                this.context.windowDispatch.dispatch(b.CkL.POPOUT_SHOW, this.props.popoutKey);
            }),
            y(this, 'handlePopoutHide', () => {
                this.context.windowDispatch.dispatch(b.CkL.POPOUT_HIDE, this.props.popoutKey);
            }),
            y(this, 'handleSetPopoutRef', (e) => {
                var t;
                let n = null == e ? void 0 : e.ownerDocument.defaultView;
                null != e &&
                    null != n &&
                    ((this.popoutRef.current = e),
                    null == (t = this.resizeObserver) || t.disconnect(),
                    (this.resizeObserver = new n.ResizeObserver(() => {
                        l.flushSync(() => {
                            this.setState({ resizeKey: this.state.resizeKey + 1 });
                        });
                    })),
                    this.resizeObserver.observe(e));
            }),
            y(this, 'renderPopout', (e, t) => {
                let { renderPopout: n } = this.props;
                return this.state.isLoading
                    ? this.props.loadingComponent
                    : n(
                          I(O({}, e), {
                              updatePosition: t,
                              closePopout: this.close,
                              setPopoutRef: this.handleSetPopoutRef
                          })
                      );
            }),
            y(this, 'close', (e) => {
                let { onRequestClose: t, shouldShow: n } = this.props;
                (null == t ? void 0 : t(e)) !== S && null == n && this.toggleShow(!1);
            }),
            y(this, 'handleClick', (e) => {
                let { onShiftClick: t, shouldShow: n, onRequestOpen: r, onRequestClose: i } = this.props;
                if ((null == e ? void 0 : e.shiftKey) && null != t) return void t(e);
                let o = null != n;
                (o ? n : this.state.shouldShowPopout) ? null == i || i() : null == r || r(),
                    o ||
                        this.setState((e) => {
                            let { shouldShowPopout: t } = e;
                            return { shouldShowPopout: !t };
                        });
            }),
            y(this, 'handleMouseEnter', () => {
                let { onRequestOpen: e } = this.props;
                null == e || e(), this.setState({ shouldShowPopout: !0 });
            }),
            y(this, 'handlePreload', async () => {
                let { preload: e } = this.props;
                if (null != e) {
                    this.setState({ isLoading: !0 }), this.loadingTimeout.start(250, () => this.setState({ shouldShowLoadingState: !0 }), !1);
                    try {
                        await e();
                    } finally {
                        this.setState({ isLoading: !1 });
                    }
                }
            }),
            y(this, 'handleKeyboardPreload', (e) => {
                T.has(e.key) && this.handlePreload();
            }),
            y(this, 'handleDocumentMouseDown', (e) => {
                let { ignoreModalClicks: t } = this.props,
                    n = e.target,
                    r = this.domElementRef.current;
                if (null != r) {
                    if ((0, f.t)(r, n) || (t && (0, _.$s)())) return;
                    this.isValidClickStart = !0;
                }
            }),
            y(this, 'handleDocumentMouseUp', (e) => {
                this.isValidClickStart && ((this.isValidClickStart = !1), this.close(e));
            }),
            y(this, 'handlePopoutPositionChange', (e) => {
                this.setState({ renderedPosition: e });
            }),
            y(this, 'handleScroll', () => {
                this.close();
            });
    }
}
y(A, 'defaultProps', {
    autoInvert: !1,
    nudgeAlignIntoViewport: !1,
    spacing: 0,
    loadingComponent: (0, i.jsx)(E.x, {})
}),
    y(A, 'contextType', h.ZP);
