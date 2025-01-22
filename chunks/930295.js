r.d(n, {
    H: function () {
        return S;
    }
});
var i,
    a = r(47120);
var o = r(411104);
var s = r(200651),
    l = r(192379),
    u = r(97613),
    c = r.n(u),
    d = r(995295),
    f = r(513431),
    p = r(846519),
    h = r(302901),
    _ = r(539907),
    m = r(952265),
    g = r(481060),
    E = r(40851),
    v = r(314910),
    y = r(920676),
    b = r(981631);
function I(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let T = new Set(['Spacebar', ' ', 'Enter']);
class S extends (i = l.Component) {
    shouldShowPopout(e, n) {
        return null != e.shouldShow ? e.shouldShow : n.shouldShowPopout;
    }
    componentDidMount() {
        this.shouldShowPopout(this.props, this.state) && this.setupShowPopout();
    }
    componentDidUpdate(e, n) {
        e.shouldShow, this.props.shouldShow;
        let r = this.shouldShowPopout(this.props, this.state);
        if (((this.shouldShowPopout(e, n) !== r || n.isLoading !== this.state.isLoading) && (r ? this.setupShowPopout() : this.unsubscribe()), this.props.closeOnScroll !== e.closeOnScroll)) {
            var i, a;
            let e = this.getDomElement();
            this.props.closeOnScroll ? null === (i = e.ownerDocument) || void 0 === i || i.addEventListener('scroll', this.close, !0) : null === (a = e.ownerDocument) || void 0 === a || a.removeEventListener('scroll', this.close, !0);
        }
    }
    getDomElement() {
        let e = d.findDOMNode(this);
        if (!(0, f.k)(e)) throw Error('Popout cannot find DOM node');
        return e;
    }
    setupShowPopout() {
        var e, n, r;
        let i = this.getDomElement();
        null === (e = i.ownerDocument) || void 0 === e || e.addEventListener('mousedown', this.handleDocumentMouseDown, !0), null === (n = i.ownerDocument) || void 0 === n || n.addEventListener('mouseup', this.handleDocumentMouseUp, !0), this.props.closeOnScroll && (null === (r = i.ownerDocument) || void 0 === r || r.addEventListener('scroll', this.close, !0)), this.context.windowDispatch.subscribe(b.CkL.POPOUT_CLOSE, this.close), (this.domElementRef.current = i), (this.isValidClickStart = !1), this.forceUpdate();
    }
    unsubscribe() {
        var e, n, r, i;
        let a = this.domElementRef.current;
        null != a && (null === (n = a.ownerDocument) || void 0 === n || n.removeEventListener('mousedown', this.handleDocumentMouseDown, !0), null === (r = a.ownerDocument) || void 0 === r || r.removeEventListener('mouseup', this.handleDocumentMouseUp, !0), null === (i = a.ownerDocument) || void 0 === i || i.removeEventListener('scroll', this.close, !0)), this.context.windowDispatch.unsubscribe(b.CkL.POPOUT_CLOSE, this.close), null === (e = this.resizeObserver) || void 0 === e || e.disconnect();
    }
    componentWillUnmount() {
        this.unsubscribe(), (this.domElementRef.current = null), this.loadingTimeout.stop(), this.validClickTimeout.stop();
    }
    render() {
        let { children: e, useMouseEnter: n } = this.props,
            r = this.shouldShowPopout(this.props, this.state);
        return (0, s.jsxs)(l.Fragment, {
            children: [
                e(
                    {
                        onMouseDown: this.handlePreload,
                        ...(n ? { onMouseEnter: this.handleMouseEnter } : {}),
                        onKeyDown: this.handleKeyboardPreload,
                        onClick: this.handleClick,
                        'aria-controls': r ? this.popoutId : void 0,
                        'aria-expanded': r
                    },
                    {
                        isShown: r,
                        position: this.state.renderedPosition
                    }
                ),
                (0, s.jsx)(g.HeadingLevel, {
                    forceLevel: 2,
                    children: this.renderLayer()
                })
            ]
        });
    }
    renderLayer() {
        if (!this.shouldShowPopout(this.props, this.state) || null == this.domElementRef.current) return null;
        let { position: e, align: n, nudgeAlignIntoViewport: r, useRawTargetDimensions: i, spacing: a, autoInvert: o, fixed: l, positionKey: u, disablePointerEvents: c, layerContext: d, clickTrap: f = !1 } = this.props,
            { resizeKey: p, isLoading: m, shouldShowLoadingState: g } = this.state;
        return m && !g
            ? null
            : (0, s.jsx)(h.mh, {
                  layerContext: null != d ? d : v.nz,
                  children: (0, s.jsx)(_.j, {
                      ref: this.layerRef,
                      onMount: this.handlePopoutShow,
                      onUnmount: this.handlePopoutHide,
                      id: this.popoutId,
                      targetRef: this.domElementRef,
                      position: e,
                      align: n,
                      nudgeAlignIntoViewport: r,
                      useRawTargetDimensions: i,
                      spacing: a,
                      autoInvert: o,
                      fixed: l,
                      positionKey: null != u ? u : String(p),
                      disablePointerEvents: c,
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
            I(this, 'domElementRef', l.createRef()),
            I(this, 'layerRef', l.createRef()),
            I(this, 'popoutRef', l.createRef()),
            I(this, 'resizeObserver', void 0),
            I(this, 'popoutId', 'popout_'.concat(c()())),
            I(this, 'loadingTimeout', new p.V7()),
            I(this, 'validClickTimeout', new p.V7()),
            I(this, 'isValidClickStart', !1),
            I(this, 'state', {
                renderedPosition: this.props.position,
                shouldShowPopout: !1,
                shouldShowLoadingState: !1,
                isLoading: !1,
                resizeKey: 0
            }),
            I(this, 'handlePopoutShow', () => {
                this.context.windowDispatch.dispatch(b.CkL.POPOUT_SHOW);
            }),
            I(this, 'handlePopoutHide', () => {
                this.context.windowDispatch.dispatch(b.CkL.POPOUT_HIDE);
            }),
            I(this, 'handleSetPopoutRef', (e) => {
                var n;
                let r = null == e ? void 0 : e.ownerDocument.defaultView;
                null != e &&
                    null != r &&
                    ((this.popoutRef.current = e),
                    null === (n = this.resizeObserver) || void 0 === n || n.disconnect(),
                    (this.resizeObserver = new r.ResizeObserver(() => {
                        d.flushSync(() => {
                            this.setState({ resizeKey: this.state.resizeKey + 1 });
                        });
                    })),
                    this.resizeObserver.observe(e));
            }),
            I(this, 'renderPopout', (e, n) => {
                let { renderPopout: r } = this.props;
                return this.state.isLoading
                    ? this.props.loadingComponent
                    : r({
                          ...e,
                          updatePosition: n,
                          closePopout: this.close,
                          setPopoutRef: this.handleSetPopoutRef
                      });
            }),
            I(this, 'close', () => {
                let { onRequestClose: e, shouldShow: n } = this.props;
                null == e || e(), null == n && this.toggleShow(!1);
            }),
            I(this, 'handleClick', (e) => {
                let { onShiftClick: n, shouldShow: r, onRequestOpen: i, onRequestClose: a } = this.props;
                if (e.shiftKey && null != n) {
                    n(e);
                    return;
                }
                let o = null != r;
                (o ? r : this.state.shouldShowPopout) ? null == a || a() : null == i || i(),
                    !o &&
                        this.setState((e) => {
                            let { shouldShowPopout: n } = e;
                            return { shouldShowPopout: !n };
                        });
            }),
            I(this, 'handleMouseEnter', () => {
                let { onRequestOpen: e } = this.props;
                null == e || e(), this.setState({ shouldShowPopout: !0 });
            }),
            I(this, 'handlePreload', async () => {
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
            I(this, 'handleKeyboardPreload', (e) => {
                T.has(e.key) && this.handlePreload();
            }),
            I(this, 'handleDocumentMouseDown', (e) => {
                let { ignoreModalClicks: n } = this.props,
                    r = e.target,
                    i = this.domElementRef.current;
                if (null != i) {
                    if ((0, _.t)(i, r) || (n && (0, m.$s)())) return;
                    this.isValidClickStart = !0;
                }
            }),
            I(this, 'handleDocumentMouseUp', () => {
                this.isValidClickStart && ((this.isValidClickStart = !1), this.close());
            }),
            I(this, 'handlePopoutPositionChange', (e) => {
                this.setState({ renderedPosition: e });
            });
    }
}
I(S, 'defaultProps', {
    autoInvert: !1,
    nudgeAlignIntoViewport: !1,
    spacing: 0,
    loadingComponent: (0, s.jsx)(y.x, {})
}),
    I(S, 'contextType', E.ZP);
