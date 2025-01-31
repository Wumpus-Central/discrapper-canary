n.d(t, {
    F: () => y,
    H: () => b
}),
    n(47120),
    n(411104);
var i,
    r = n(200651),
    a = n(192379),
    s = n(97613),
    o = n.n(s),
    l = n(995295),
    u = n(374470),
    c = n(846519),
    d = n(302901),
    f = n(539907),
    _ = n(952265),
    p = n(481060),
    h = n(40851),
    m = n(314910),
    g = n(920676),
    E = n(981631);
function v(e, t, n) {
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
let y = Symbol('POPOUT_PREVENT_CLOSE'),
    I = new Set(['Spacebar', ' ', 'Enter']);
class b extends (i = a.Component) {
    shouldShowPopout(e, t) {
        return null != e.shouldShow ? e.shouldShow : t.shouldShowPopout;
    }
    componentDidMount() {
        this.shouldShowPopout(this.props, this.state) && this.setupShowPopout();
    }
    componentDidUpdate(e, t) {
        e.shouldShow, this.props.shouldShow;
        let n = this.shouldShowPopout(this.props, this.state);
        if (((this.shouldShowPopout(e, t) !== n || t.isLoading !== this.state.isLoading) && (n ? this.setupShowPopout() : this.unsubscribe()), this.props.closeOnScroll !== e.closeOnScroll)) {
            var i, r;
            let e = this.getDomElement();
            this.props.closeOnScroll ? null === (i = e.ownerDocument) || void 0 === i || i.addEventListener('scroll', this.handleScroll, !0) : null === (r = e.ownerDocument) || void 0 === r || r.removeEventListener('scroll', this.handleScroll, !0);
        }
    }
    getDomElement() {
        let e = l.findDOMNode(this);
        if (!(0, u.k)(e)) throw Error('Popout cannot find DOM node');
        return e;
    }
    setupShowPopout() {
        var e, t, n;
        let i = this.getDomElement();
        null === (e = i.ownerDocument) || void 0 === e || e.addEventListener('mousedown', this.handleDocumentMouseDown, !0), null === (t = i.ownerDocument) || void 0 === t || t.addEventListener('mouseup', this.handleDocumentMouseUp, !0), this.props.closeOnScroll && (null === (n = i.ownerDocument) || void 0 === n || n.addEventListener('scroll', this.handleScroll, !0)), this.context.windowDispatch.subscribe(E.CkL.POPOUT_CLOSE, this.close), (this.domElementRef.current = i), (this.isValidClickStart = !1), this.forceUpdate();
    }
    unsubscribe() {
        var e, t, n, i;
        let r = this.domElementRef.current;
        null != r && (null === (t = r.ownerDocument) || void 0 === t || t.removeEventListener('mousedown', this.handleDocumentMouseDown, !0), null === (n = r.ownerDocument) || void 0 === n || n.removeEventListener('mouseup', this.handleDocumentMouseUp, !0), null === (i = r.ownerDocument) || void 0 === i || i.removeEventListener('scroll', this.handleScroll, !0)), this.context.windowDispatch.unsubscribe(E.CkL.POPOUT_CLOSE, this.close), null === (e = this.resizeObserver) || void 0 === e || e.disconnect();
    }
    componentWillUnmount() {
        this.unsubscribe(), (this.domElementRef.current = null), this.loadingTimeout.stop(), this.validClickTimeout.stop();
    }
    render() {
        let { children: e, useMouseEnter: t } = this.props,
            n = this.shouldShowPopout(this.props, this.state);
        return (0, r.jsxs)(a.Fragment, {
            children: [
                e(
                    {
                        onMouseDown: this.handlePreload,
                        ...(t ? { onMouseEnter: this.handleMouseEnter } : {}),
                        onKeyDown: this.handleKeyboardPreload,
                        onClick: this.handleClick,
                        'aria-controls': n ? this.popoutId : void 0,
                        'aria-expanded': n
                    },
                    {
                        isShown: n,
                        position: this.state.renderedPosition
                    }
                ),
                (0, r.jsx)(p.y5t, {
                    forceLevel: 2,
                    children: this.renderLayer()
                })
            ]
        });
    }
    renderLayer() {
        if (!this.shouldShowPopout(this.props, this.state) || null == this.domElementRef.current) return null;
        let { position: e, align: t, nudgeAlignIntoViewport: n, useRawTargetDimensions: i, spacing: a, autoInvert: s, fixed: o, positionKey: l, disablePointerEvents: u, layerContext: c, clickTrap: _ = !1 } = this.props,
            { resizeKey: p, isLoading: h, shouldShowLoadingState: g } = this.state;
        return h && !g
            ? null
            : (0, r.jsx)(d.mh, {
                  layerContext: null != c ? c : m.nz,
                  children: (0, r.jsx)(f.j, {
                      ref: this.layerRef,
                      onMount: this.handlePopoutShow,
                      onUnmount: this.handlePopoutHide,
                      id: this.popoutId,
                      targetRef: this.domElementRef,
                      position: e,
                      align: t,
                      nudgeAlignIntoViewport: n,
                      useRawTargetDimensions: i,
                      spacing: a,
                      autoInvert: s,
                      fixed: o,
                      positionKey: null != l ? l : String(p),
                      disablePointerEvents: u,
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
            v(this, 'domElementRef', a.createRef()),
            v(this, 'layerRef', a.createRef()),
            v(this, 'popoutRef', a.createRef()),
            v(this, 'resizeObserver', void 0),
            v(this, 'popoutId', 'popout_'.concat(o()())),
            v(this, 'loadingTimeout', new c.V7()),
            v(this, 'validClickTimeout', new c.V7()),
            v(this, 'isValidClickStart', !1),
            v(this, 'state', {
                renderedPosition: this.props.position,
                shouldShowPopout: !1,
                shouldShowLoadingState: !1,
                isLoading: !1,
                resizeKey: 0
            }),
            v(this, 'handlePopoutShow', () => {
                this.context.windowDispatch.dispatch(E.CkL.POPOUT_SHOW);
            }),
            v(this, 'handlePopoutHide', () => {
                this.context.windowDispatch.dispatch(E.CkL.POPOUT_HIDE);
            }),
            v(this, 'handleSetPopoutRef', (e) => {
                var t;
                let n = null == e ? void 0 : e.ownerDocument.defaultView;
                null != e &&
                    null != n &&
                    ((this.popoutRef.current = e),
                    null === (t = this.resizeObserver) || void 0 === t || t.disconnect(),
                    (this.resizeObserver = new n.ResizeObserver(() => {
                        l.flushSync(() => {
                            this.setState({ resizeKey: this.state.resizeKey + 1 });
                        });
                    })),
                    this.resizeObserver.observe(e));
            }),
            v(this, 'renderPopout', (e, t) => {
                let { renderPopout: n } = this.props;
                return this.state.isLoading
                    ? this.props.loadingComponent
                    : n({
                          ...e,
                          updatePosition: t,
                          closePopout: this.close,
                          setPopoutRef: this.handleSetPopoutRef
                      });
            }),
            v(this, 'close', (e) => {
                let { onRequestClose: t, shouldShow: n } = this.props;
                (null == t ? void 0 : t(e)) !== y && null == n && this.toggleShow(!1);
            }),
            v(this, 'handleClick', (e) => {
                let { onShiftClick: t, shouldShow: n, onRequestOpen: i, onRequestClose: r } = this.props;
                if (e.shiftKey && null != t) {
                    t(e);
                    return;
                }
                let a = null != n;
                (a ? n : this.state.shouldShowPopout) ? null == r || r() : null == i || i(),
                    a ||
                        this.setState((e) => {
                            let { shouldShowPopout: t } = e;
                            return { shouldShowPopout: !t };
                        });
            }),
            v(this, 'handleMouseEnter', () => {
                let { onRequestOpen: e } = this.props;
                null == e || e(), this.setState({ shouldShowPopout: !0 });
            }),
            v(this, 'handlePreload', async () => {
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
            v(this, 'handleKeyboardPreload', (e) => {
                I.has(e.key) && this.handlePreload();
            }),
            v(this, 'handleDocumentMouseDown', (e) => {
                let { ignoreModalClicks: t } = this.props,
                    n = e.target,
                    i = this.domElementRef.current;
                if (null != i) {
                    if ((0, f.t)(i, n) || (t && (0, _.$s)())) return;
                    this.isValidClickStart = !0;
                }
            }),
            v(this, 'handleDocumentMouseUp', (e) => {
                this.isValidClickStart && ((this.isValidClickStart = !1), this.close(e));
            }),
            v(this, 'handlePopoutPositionChange', (e) => {
                this.setState({ renderedPosition: e });
            }),
            v(this, 'handleScroll', () => {
                this.close();
            });
    }
}
v(b, 'defaultProps', {
    autoInvert: !1,
    nudgeAlignIntoViewport: !1,
    spacing: 0,
    loadingComponent: (0, r.jsx)(g.x, {})
}),
    v(b, 'contextType', h.ZP);
