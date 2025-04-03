n.d(t, {
    F: () => N,
    H: () => C
}),
    n(266796),
    n(47120),
    n(411104);
var r,
    i = n(200651),
    o = n(192379),
    a = n(299608),
    s = n.n(a),
    l = n(97613),
    c = n.n(l),
    u = n(995295),
    d = n(374470),
    f = n(846519),
    _ = n(302901),
    p = n(539907),
    h = n(952265),
    m = n(481060),
    g = n(40851),
    E = n(314910),
    b = n(960048),
    y = n(920676),
    v = n(981631);
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
let N = Symbol('POPOUT_PREVENT_CLOSE'),
    A = new Set(['Spacebar', ' ', 'Enter']);
class C extends (r = o.Component) {
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
            this.props.closeOnScroll ? null == (r = e.ownerDocument) || r.addEventListener('scroll', this.handleScroll, !0) : null == (i = e.ownerDocument) || i.removeEventListener('scroll', this.handleScroll, !0);
        }
    }
    getDomElement() {
        var e;
        let t = void 0 !== this.props.targetElementRef ? this.props.targetElementRef.current : null == (e = this.siblingDomRef.current) ? void 0 : e.previousElementSibling;
        if (!(0, d.k)(t)) throw Error('Popout cannot find DOM node');
        return this.logPositioningRegression(t), t;
    }
    get closeAction() {
        return this.props.ignoreModalClicks ? v.CkL.POPOUT_CLOSE_AFTER_MODALS : v.CkL.POPOUT_CLOSE;
    }
    setupShowPopout() {
        var e, t, n;
        let r = this.getDomElement();
        null == (e = r.ownerDocument) || e.addEventListener('mousedown', this.handleDocumentMouseDown, !0), null == (t = r.ownerDocument) || t.addEventListener('mouseup', this.handleDocumentMouseUp, !0), this.props.closeOnScroll && (null == (n = r.ownerDocument) || n.addEventListener('scroll', this.handleScroll, !0)), this.context.windowDispatch.subscribe(this.closeAction, this.close), (this.domElementRef.current = r), (this.isValidClickStart = !1), this.forceUpdate();
    }
    unsubscribe() {
        var e, t, n, r;
        let i = this.domElementRef.current;
        null != i && (null == (t = i.ownerDocument) || t.removeEventListener('mousedown', this.handleDocumentMouseDown, !0), null == (n = i.ownerDocument) || n.removeEventListener('mouseup', this.handleDocumentMouseUp, !0), null == (r = i.ownerDocument) || r.removeEventListener('scroll', this.handleScroll, !0)), this.context.windowDispatch.unsubscribe(v.CkL.POPOUT_CLOSE, this.close), this.context.windowDispatch.unsubscribe(v.CkL.POPOUT_CLOSE_AFTER_MODALS, this.close), null == (e = this.resizeObserver) || e.disconnect();
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
                    T(I({ onMouseDown: this.handlePreload }, t ? { onMouseEnter: this.handleMouseEnter } : {}), {
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
                void 0 === this.props.targetElementRef &&
                    (0, i.jsx)('span', {
                        ref: this.siblingDomRef,
                        style: { display: 'none' }
                    }),
                (0, i.jsx)(m.y5t, {
                    forceLevel: 2,
                    children: this.renderLayer()
                })
            ]
        });
    }
    renderLayer() {
        if (!this.shouldShowPopout(this.props, this.state) || null == this.domElementRef.current) return null;
        let { position: e, align: t, nudgeAlignIntoViewport: n, useRawTargetDimensions: r, spacing: o, autoInvert: a, fixed: s, positionKey: l, overridePositionRef: c, disablePointerEvents: u, layerContext: d, clickTrap: f = !1 } = this.props,
            { resizeKey: h, isLoading: m, shouldShowLoadingState: g } = this.state;
        return m && !g
            ? null
            : (0, i.jsx)(_.mh, {
                  layerContext: null != d ? d : E.nz,
                  children: (0, i.jsx)(p.j, {
                      ref: this.layerRef,
                      onMount: this.handlePopoutShow,
                      onUnmount: this.handlePopoutHide,
                      id: this.popoutId,
                      targetRef: null != c ? c : this.domElementRef,
                      position: e,
                      align: t,
                      nudgeAlignIntoViewport: n,
                      useRawTargetDimensions: r,
                      spacing: o,
                      autoInvert: a,
                      fixed: s,
                      positionKey: null != l ? l : String(h),
                      disablePointerEvents: u,
                      onPositionChange: this.handlePopoutPositionChange,
                      clickTrap: f,
                      children: this.renderPopout
                  })
              });
    }
    toggleShow(e) {
        this.state.shouldShowPopout !== e && this.setState({ shouldShowPopout: e });
    }
    constructor(...e) {
        super(...e),
            O(this, 'domElementRef', o.createRef()),
            O(this, 'siblingDomRef', o.createRef()),
            O(this, 'layerRef', o.createRef()),
            O(this, 'popoutRef', o.createRef()),
            O(this, 'resizeObserver', void 0),
            O(this, 'popoutId', 'popout_'.concat(c()())),
            O(this, 'loadingTimeout', new f.V7()),
            O(this, 'validClickTimeout', new f.V7()),
            O(this, 'isValidClickStart', !1),
            O(this, 'state', {
                renderedPosition: this.props.position,
                shouldShowPopout: !1,
                shouldShowLoadingState: !1,
                isLoading: !1,
                resizeKey: 0
            }),
            O(
                this,
                'logPositioningRegression',
                s()((e) => {
                    if (void 0 === this.props.targetElementRef) {
                        let t = e.getBoundingClientRect();
                        0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && b.Z.captureMessage('Incorrectly positioned popout');
                    }
                }, 5000)
            ),
            O(this, 'handlePopoutShow', () => {
                this.context.windowDispatch.dispatch(v.CkL.POPOUT_SHOW);
            }),
            O(this, 'handlePopoutHide', () => {
                this.context.windowDispatch.dispatch(v.CkL.POPOUT_HIDE);
            }),
            O(this, 'handleSetPopoutRef', (e) => {
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
            O(this, 'renderPopout', (e, t) => {
                let { renderPopout: n } = this.props;
                return this.state.isLoading
                    ? this.props.loadingComponent
                    : n(
                          T(I({}, e), {
                              updatePosition: t,
                              closePopout: this.close,
                              setPopoutRef: this.handleSetPopoutRef
                          })
                      );
            }),
            O(this, 'close', (e) => {
                let { onRequestClose: t, shouldShow: n } = this.props;
                (null == t ? void 0 : t(e)) !== N && null == n && this.toggleShow(!1);
            }),
            O(this, 'handleClick', (e) => {
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
            O(this, 'handleMouseEnter', () => {
                let { onRequestOpen: e } = this.props;
                null == e || e(), this.setState({ shouldShowPopout: !0 });
            }),
            O(this, 'handlePreload', async () => {
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
            O(this, 'handleKeyboardPreload', (e) => {
                A.has(e.key) && this.handlePreload();
            }),
            O(this, 'handleDocumentMouseDown', (e) => {
                let { ignoreModalClicks: t, overridePositionRef: n } = this.props,
                    r = e.target,
                    i = (null != n ? n : this.domElementRef).current;
                if (null != i) {
                    if ((0, p.t)(i, r) || (t && (0, h.$s)())) return;
                    this.isValidClickStart = !0;
                }
            }),
            O(this, 'handleDocumentMouseUp', (e) => {
                this.isValidClickStart && ((this.isValidClickStart = !1), this.close(e));
            }),
            O(this, 'handlePopoutPositionChange', (e) => {
                this.setState({ renderedPosition: e });
            }),
            O(this, 'handleScroll', () => {
                this.close();
            });
    }
}
O(C, 'defaultProps', {
    autoInvert: !1,
    nudgeAlignIntoViewport: !1,
    spacing: 0,
    loadingComponent: (0, i.jsx)(y.x, {})
}),
    O(C, 'contextType', g.ZP);
