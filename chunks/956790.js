n.d(t, { Ay: () => N, X8: () => I, S8: () => S });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n(761929),
    d = n(333007),
    c = n(615300),
    u = n(621466),
    _ = n(652215);
class E extends r.PureComponent {
    _ref = r.createRef();
    _height = 0;
    _width = 0;
    _dragStart = { x: 0, y: 0 };
    _offsetX = 0;
    _offsetY = 0;
    _removeListeners = () => {};
    static defaultProps = { maxX: 0, maxY: 0, minY: 0, initialX: 0, initialY: 0, disabled: !1, dragAnywhere: !1 };
    constructor(e) {
        super(e);
        const t = new c.A.Value(e.initialX),
            n = new c.A.Value(e.initialY);
        this.state = { dragging: !1, position: new c.A.ValueXY({ x: t, y: n }) };
    }
    componentDidMount() {
        let { initialX: e, initialY: t } = this.props;
        this.setPosition(e, t);
    }
    componentWillUnmount() {
        this._removeListeners();
    }
    animateToPosition(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = arguments.length > 3 ? arguments[3] : void 0,
            r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
        r && this.grabDimensions();
        let a = this.translate(e, t);
        c.A.spring(this.state.position, { toValue: { x: a.x, y: a.y }, ...n }).start(i);
    }
    setPosition(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        n && this.grabDimensions();
        let i = this.translate(e, t);
        this.state.position.setValue({ x: i.x, y: i.y });
    }
    grabDimensions() {
        let e = this._ref.current.refs.node;
        (0, u.vq)(e) && ((this._height = e.clientHeight), (this._width = e.clientWidth));
    }
    getTranslation() {
        let { position: e } = this.state;
        return { x: e.x._value, y: e.y._value };
    }
    translate(e, t) {
        let { maxX: n, maxY: i, minY: r } = this.props;
        return (
            e < 0 ? (e = 0) : e > n - this._width && (e = n - this._width),
            t < r ? (t = r) : t > i - this._height && (t = i - this._height),
            { x: e, y: t }
        );
    }
    render() {
        let { dragging: e, position: t } = this.state,
            { className: n, children: r } = this.props,
            a = [0, 1],
            s = ["0px", "1px"],
            l = c.A.accelerate({
                pointerEvents: e ? "none" : "auto",
                cursor: e ? "grabbing" : "grab",
                transform: [
                    { translateX: t.x.interpolate({ inputRange: a, outputRange: s }) },
                    { translateY: t.y.interpolate({ inputRange: a, outputRange: s }) },
                ],
                ...this.props.style,
            });
        return (0, i.jsx)(c.A.div, {
            ref: this._ref,
            className: n,
            onMouseDown: this.handleMouseDown,
            style: l,
            onDragStart: this.handleHTMLDragStart,
            children: r,
        });
    }
    handleHTMLDragStart = (e) => {
        e.preventDefault();
    };
    handleMouseDown = (e) => {
        let { dragAnywhere: t, disabled: n, selector: i } = this.props;
        if (n) return;
        let { position: r } = this.state,
            a = e.target;
        if (e.button === _.hE4.PRIMARY && (t || (null != i && a.matches(i)))) {
            (this.grabDimensions(),
                (this._dragStart = { x: e.clientX, y: e.clientY }),
                (this._offsetX = e.clientX - r.x._value),
                (this._offsetY = e.clientY - r.y._value));
            let t = e.nativeEvent.view;
            (this._removeListeners(),
                t.addEventListener("mousemove", this.handleMouseMove),
                t.addEventListener("mouseup", this.handleMouseUp),
                (this._removeListeners = () => {
                    (t.removeEventListener("mousemove", this.handleMouseMove),
                        t.removeEventListener("mouseup", this.handleMouseUp));
                }));
        }
    };
    handleMouseMove = (e) => {
        e.preventDefault();
        let { onDragStart: t, onDrag: n, disabled: i } = this.props;
        if (i) return;
        let { dragging: r, dragging: a } = this.state,
            s = r;
        (!r &&
            ((e, t) => {
                let { x: n, y: i } = e,
                    { x: r, y: a } = t;
                return Math.pow(n - r, 2) + Math.pow(i - a, 2);
            })(this._dragStart, { x: e.clientX, y: e.clientY }) > 9 &&
            (s = !0),
            s &&
                (this.animateToPosition(
                    e.clientX - this._offsetX,
                    e.clientY - this._offsetY,
                    { tension: 80, friction: 8 },
                    null,
                    !1,
                ),
                (0, d.flushSync)(() => {
                    (this.setState({ dragging: s }), a || t?.(e.clientX, e.clientY), n?.(e.clientX, e.clientY));
                })));
    };
    handleMouseUp = (e) => {
        (this._removeListeners(),
            this.state.dragging &&
                (0, d.flushSync)(() => {
                    this.setState({ dragging: !1 });
                    let { onDragEnd: t } = this.props;
                    t?.(e.clientX, e.clientY);
                }));
    };
}
var A = n(699426),
    h = n(806931),
    f = n(155819);
let I = { top: 80, bottom: 132, left: 80, right: 80 },
    p = { [_.CUs.TOP_RIGHT]: f.En, [_.CUs.TOP_LEFT]: f.rG, [_.CUs.BOTTOM_LEFT]: f.j$, [_.CUs.BOTTOM_RIGHT]: f.Ue },
    T = {
        [_.CUs.TOP_RIGHT]: o.R.HORIZONTAL_LEFT,
        [_.CUs.TOP_LEFT]: o.R.HORIZONTAL_RIGHT,
        [_.CUs.BOTTOM_LEFT]: o.R.HORIZONTAL_RIGHT,
        [_.CUs.BOTTOM_RIGHT]: o.R.HORIZONTAL_LEFT,
    };
function m(e, t) {
    let n = 40 * Math.round(e / 40);
    return (0, l.clamp)(n, t.minWidth, t.maxWidth);
}
function g(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: a, resizeConfig: l, position: d } = e,
        c = (0, o.A)({
            minDimension: l.minWidth,
            maxDimension: l.maxWidth + 20,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
            orientation: T[d],
            usePointerEvents: !0,
        }),
        u = r.useCallback(
            (e) => {
                (e.stopPropagation(), c(e));
            },
            [c],
        );
    return (0, i.jsx)("div", { onMouseDown: u, className: s()(f.Di, p[d]) });
}
class S extends r.PureComponent {
    static defaultProps = { hidden: !1, roundCorners: !0 };
    state = { isResizing: !1 };
    _draggable;
    _innerDivRef = r.createRef();
    _resizeObserver;
    _width = null;
    _boundWidth = 0;
    _boundHeight = 0;
    _velocityX = 0;
    _velocityY = 0;
    _lastMoveTime;
    _lastMoveX = 0;
    _lastMoveY = 0;
    componentDidMount() {
        this.setPosition(this.props.position);
    }
    componentDidUpdate(e) {
        if (null != this.props.width && null != this.props.resizeConfig && e.width !== this.props.width) {
            let t = this._width ?? e.width ?? this.props.width;
            ((this._width = this.props.width),
                null != this._innerDivRef.current &&
                    (Math.abs(t - this._width) > 40 && (this._innerDivRef.current.style.transition = "none"),
                    (this._innerDivRef.current.style.width = `${this.props.width}px`)));
        }
        (e.edgeOffsetTop !== this.props.edgeOffsetTop ||
            e.edgeOffsetLeft !== this.props.edgeOffsetLeft ||
            e.edgeOffsetBottom !== this.props.edgeOffsetBottom ||
            e.edgeOffsetRight !== this.props.edgeOffsetRight ||
            e.maxX !== this.props.maxX ||
            e.maxY !== this.props.maxY ||
            e.dockedRect !== this.props.dockedRect ||
            e.roundCorners !== this.props.roundCorners) &&
            (this.ensureIsInPosition(), this.ensureWidth());
    }
    componentWillUnmount() {
        this._resizeObserver?.disconnect();
    }
    getPosition(e) {
        let t = this._innerDivRef.current;
        if (null != t) {
            let e = t.getBoundingClientRect();
            ((this._boundWidth = e.width), (this._boundHeight = e.height));
        }
        let {
                edgeOffsetTop: n,
                edgeOffsetLeft: i,
                edgeOffsetBottom: r,
                edgeOffsetRight: a,
                maxX: s,
                maxY: l,
                dockedRect: o,
                getDockedRectPositionY: d,
            } = this.props,
            c = Math.round(n),
            u = Math.round(l - r - this._boundHeight),
            E = Math.round(i),
            A = Math.round(s - a - this._boundWidth);
        if (null != o) return { y: d?.(o.y) ?? o.y ?? 0, x: o?.x ?? 0 };
        switch (e) {
            case _.CUs.TOP_LEFT:
                return { y: c, x: E };
            case _.CUs.BOTTOM_LEFT:
                return { y: u, x: E };
            case _.CUs.TOP_RIGHT:
                return { y: c, x: A };
            default:
                return { y: u, x: A };
        }
    }
    setPosition(e) {
        let { x: t, y: n } = this.getPosition(e);
        this._draggable?.setPosition(t, n);
    }
    animateToPosition(e, t) {
        let { x: n, y: i } = this.getPosition(e);
        this._draggable?.animateToPosition(n, i, {}, t);
    }
    getSettledRect(e) {
        let t = this._innerDivRef.current?.getBoundingClientRect();
        if (null == t || null == this._draggable) return null;
        let n = this._draggable.getTranslation(),
            i = this.getPosition(e),
            r = t.left + i.x - n.x,
            a = t.top + i.y - n.y;
        return { left: r, top: a, right: r + t.width, bottom: a + t.height };
    }
    ensureIsInPosition = () => {
        this.setPosition(this.props.position);
    };
    ensureWidth = () => {
        let { onResize: e, edgeOffsetLeft: t, edgeOffsetRight: n, maxX: i, resizeConfig: r } = this.props;
        if (null == r) return;
        let a = m(i - (t + n), r);
        this.getWidth() > a && ((this._width = a), e?.(a));
    };
    calculateDecayingPosition(e, t, n, i) {
        return { x: e + 200 * n, y: t + 200 * i };
    }
    getXOffset() {
        let { position: e, edgeOffsetLeft: t, edgeOffsetRight: n } = this.props;
        switch (e) {
            case _.CUs.TOP_LEFT:
            case _.CUs.BOTTOM_LEFT:
                return -t;
            default:
                return n;
        }
    }
    getYOffset() {
        let { position: e, edgeOffsetTop: t, edgeOffsetBottom: n } = this.props;
        switch (e) {
            case _.CUs.TOP_LEFT:
            case _.CUs.TOP_RIGHT:
                return -t;
            default:
                return n;
        }
    }
    getWidth() {
        let { width: e } = this.props;
        return this._width ?? e ?? h.fG[h.R8.VIDEO];
    }
    get inPopout() {
        return this.props.appContext === _.BRT.POPOUT;
    }
    handleSetInnerDivRef = (e) => {
        this._innerDivRef.current = e;
        let t = e?.ownerDocument.defaultView;
        null != e &&
            null != t &&
            ((this._resizeObserver = new t.ResizeObserver(this.handleInnerResize)), this._resizeObserver?.observe(e));
    };
    handleInnerResize = () => {
        this.ensureIsInPosition();
        let { id: e, onHeightChange: t } = this.props;
        null != t &&
            null != this._innerDivRef.current &&
            t(e, this._innerDivRef.current.getBoundingClientRect().height);
    };
    handleSetDraggableRef = (e) => {
        this._draggable = e;
    };
    handleResize = (e) => {
        ((this._width = e), this.state.isResizing || this.setState({ isResizing: !0 }));
    };
    handleResizeEnd = (e) => {
        let { onResize: t, resizeConfig: n } = this.props;
        if (null == n) return;
        let i = m(e, n);
        ((this._width = i), t?.(i), this.setState({ isResizing: !1 }), this.ensureWidth());
    };
    handleDragStart = (e, t) => {
        ((this._velocityX = 0),
            (this._velocityY = 0),
            (this._lastMoveX = e),
            (this._lastMoveY = t),
            (this._lastMoveTime = new Date()),
            this.props.onDragStart?.(e, t));
    };
    handleDrag = (e, t) => {
        let n = new Date(),
            i = Number(n) - Number(this._lastMoveTime);
        0 !== i &&
            ((this._velocityX = (e - this._lastMoveX) / i),
            (this._velocityY = (t - this._lastMoveY) / i),
            (this._lastMoveX = e),
            (this._lastMoveY = t),
            (this._lastMoveTime = n));
    };
    handleDragEnd = (e, t) => {
        let n,
            { maxX: i, maxY: r } = this.props,
            a = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY),
            s = !0,
            l = !0;
        (a.x > i / 2 && (l = !1),
            a.y > r / 2 && (s = !1),
            (n =
                s && l
                    ? _.CUs.TOP_LEFT
                    : s && !l
                      ? _.CUs.TOP_RIGHT
                      : !s && l
                        ? _.CUs.BOTTOM_LEFT
                        : _.CUs.BOTTOM_RIGHT));
        let o = this.getSettledRect(n);
        if (
            (this.animateToPosition(n, () => {
                (this.ensureIsInPosition(),
                    this.props.onDragSettle?.(
                        this.props.id,
                        this._innerDivRef.current?.getBoundingClientRect() ?? null,
                    ));
            }),
            n !== this.props.position)
        ) {
            let { id: e, onMove: t } = this.props;
            t?.(e, n);
        }
        (this.props.onDragEnd?.(e, t), this.props.onDragRelease?.(this.props.id, { x: e, y: t }, o));
    };
    render() {
        let {
                maxX: e,
                maxY: t,
                dragInsetTop: n,
                dockedRect: r,
                hidden: a,
                roundCorners: l,
                className: o,
                position: d,
                resizeConfig: c,
            } = this.props,
            u = this.getWidth(),
            _ = {};
        return (
            null != r
                ? (_ = { transform: `translate3d(${r.x}, ${r.y}, 0)`, width: r.width, height: r.height })
                : null != c &&
                  (_ = { width: u, transition: this.state.isResizing ? "none" : "width 0.2s ease-in-out" }),
            (0, i.jsxs)(E, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: s()(f.GE, o, { [f.R]: a, [f.Vq]: l }),
                maxX: e,
                maxY: t,
                minY: n ?? 0,
                disabled: null != r,
                onDragStart: this.handleDragStart,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                children: [
                    (0, i.jsx)("div", { ref: this.handleSetInnerDivRef, style: _, children: this.props.children }),
                    null != c
                        ? (0, i.jsx)(g, {
                              onResize: this.handleResize,
                              onResizeEnd: this.handleResizeEnd,
                              resizableNode: this._innerDivRef,
                              resizeConfig: c,
                              position: d,
                          })
                        : null,
                ],
            })
        );
    }
}
let N = r.memo(function (e) {
    let {
            selectedPIPWindow: t,
            pipWindows: n,
            pipWidth: a,
            maxX: l,
            maxY: o,
            onWindowMove: d,
            onWindowResize: c,
            onWindowHeightChange: u,
            dockedRect: E,
            pictureInPictureComponents: h,
            appContext: p,
            roundCorners: T,
            resizeConfig: m,
            className: g,
            getDockedRectPositionY: N,
        } = e,
        [C, O] = r.useState(!1),
        R = r.useMemo(
            () =>
                null == t
                    ? null
                    : n.map((e) => {
                          if (e.id !== t.id && e.component !== _.o1q.ACTIVITY && e.component !== _.o1q.FRAME)
                              return null;
                          let n = "string" == typeof e.component ? h[e.component] : e.component;
                          return (0, i.jsx)(n, { width: a, ...e.props }, e.id);
                      }),
            [n, t, a, h],
        ),
        L = r.useCallback(() => {
            O(!0);
        }, []),
        y = r.useCallback(() => {
            O(!1);
        }, []),
        D = r.useCallback(
            (e, t) => {
                u?.(t);
            },
            [u],
        ),
        v = r.useMemo(() => n.some((e) => e.component === _.o1q.ACTIVITY), [n]),
        b = r.useMemo(() => n.some((e) => e.component === _.o1q.FRAME), [n]);
    return null == t
        ? (0, i.jsx)(A.Ay, { children: (0, i.jsx)("div", { className: f._I }) })
        : (0, i.jsx)(A.Ay, {
              children: (0, i.jsx)("div", {
                  className: s()(f._I, { [f.cB]: C }, g),
                  children: (0, i.jsx)(S, {
                      appContext: p,
                      position: t.position,
                      id: t.id,
                      hidden: t.hidden,
                      onMove: d,
                      onResize: c,
                      onHeightChange: D,
                      onDragStart: L,
                      onDragEnd: y,
                      maxX: l,
                      maxY: o,
                      width: a,
                      dockedRect: E,
                      getDockedRectPositionY: N,
                      edgeOffsetTop: I.top,
                      edgeOffsetBottom: I.bottom,
                      edgeOffsetLeft: I.left,
                      edgeOffsetRight: I.right,
                      roundCorners: T,
                      resizeConfig: v || b ? void 0 : m,
                      children: R,
                  }),
              }),
          });
});
