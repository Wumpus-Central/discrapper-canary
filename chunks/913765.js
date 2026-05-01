n.d(t, { A: () => Z });
var i = n(627968),
    a = n(64700),
    r = n(192308),
    s = n(228366),
    l = n(272355);
n(321073);
var o = n(503698),
    d = n.n(o),
    c = n(284009),
    _ = n.n(c),
    E = n(735438),
    u = n.n(E),
    A = n(615300),
    I = n(17928),
    T = n(73939),
    h = n(534514),
    S = n(834730),
    N = n(475358),
    f = n(707554),
    p = n(689175),
    m = n(939249),
    O = n(935462),
    C = n(337371),
    R = n(116305),
    g = n(775121),
    L = n(775602),
    D = n(400492),
    b = n(625494),
    M = n(652215),
    P = n(868347);
let U = () =>
    (0, i.jsxs)(
        "div",
        {
            className: P.HR,
            children: [(0, i.jsx)("div", { className: P.tW }), (0, i.jsx)("img", { alt: "", src: n(24160) })],
        },
        "symbol",
    );
class v extends a.PureComponent {
    _renderSecondaryTimeout = null;
    _doneTimeout = null;
    state = {
        animating: !1,
        renderSecondary: !1,
        scale: u().random(0.6, 1, !0),
        offsetX: u().random(0, 140, !1) - 70,
        offsetY: u().random(0, 140, !1) - 70,
    };
    componentDidMount() {
        this.setState({ animating: !0 }),
            (this._renderSecondaryTimeout = setTimeout(() => {
                this.setState({ renderSecondary: !0 });
            }, 120)),
            (this._doneTimeout = setTimeout(this.done, 1e3));
    }
    componentDidUpdate(e, t) {
        this.state.renderSecondary && t.renderSecondary;
    }
    componentWillUnmount() {
        clearTimeout(this._renderSecondaryTimeout), clearTimeout(this._doneTimeout);
    }
    done = () => {
        this.props.onAnimationComplete(this.props.componentId);
    };
    renderPrimary() {
        return (0, i.jsxs)(
            "div",
            {
                className: P.e8,
                children: [
                    (0, i.jsx)("img", { alt: "", className: P.Lc, src: n(383922), width: 70, height: 69 }),
                    (0, i.jsx)("img", { alt: "", className: P.QP, src: n(815995), width: 96, height: 95 }),
                    (0, i.jsx)("img", { alt: "", className: P.WB, src: n(32315), width: 183, height: 104 }),
                    (0, i.jsx)("img", { alt: "", className: P.FQ, src: n(144298), width: 69, height: 180 }),
                ],
            },
            "primary-explosion",
        );
    }
    renderSecondary(e, t) {
        return (0, i.jsxs)(
            "div",
            {
                className: P.wv,
                style: { top: t, left: e },
                children: [
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: P.Lc, src: n(61631), width: 61, height: 58 },
                        "circle-inner",
                    ),
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: P.QP, src: n(850166), width: 85, height: 85 },
                        "circle-outer",
                    ),
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: P.WB, src: n(822548), width: 162, height: 173 },
                        "lines-secondary",
                    ),
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: P.FQ, src: n(275242), width: 156, height: 306 },
                        "lines-main",
                    ),
                ],
            },
            "secondary-explosion",
        );
    }
    render() {
        let { renderSecondary: e, offsetX: t, offsetY: n, animating: a, scale: r } = this.state,
            s = [this.renderPrimary()];
        return (
            e && s.push(this.renderSecondary(t, n)),
            (0, i.jsx)("div", {
                className: d()(P.kL, { [P.i0]: a }),
                style: { top: this.props.top, left: this.props.left, transform: `scale(${r})` },
                children: s,
            })
        );
    }
}
class y extends a.PureComponent {
    _timeouts = [];
    children = [];
    state = { explosions: 0, visible: !1 };
    componentDidMount() {
        this.setTimeout(() => {
            this.setState({ visible: !0 }), b._.dispatch(M.jej.SHAKE_APP, { duration: 2400 });
        }, 1800),
            this.setTimeout(this.createExplosion, 1800);
    }
    componentWillUnmount() {
        for (let e of (g.A.enable(), (this.children.length = 0), this._timeouts)) clearTimeout(e);
    }
    setTimeout = (e, t) => {
        let n = setTimeout(e, t);
        return this._timeouts.push(n), n;
    };
    removeExplosion = (e) => {
        let t = this.children,
            n = t.findIndex((t) => {
                if (t.type !== v) return !1;
                let n = t.props;
                return null != n.componentId && n.componentId === e;
            });
        n >= 0 && t.splice(n, 1), this.forceUpdate();
    };
    createExplosion = () => {
        let e = this.children,
            t = (window.innerWidth / 2) | 0,
            n = (window.innerHeight / 2) | 0;
        if (this.state.explosions < 8) {
            let a = `expl-${this.state.explosions}`;
            e.push(
                (0, i.jsx)(
                    v,
                    {
                        componentId: a,
                        top: u().random(n - 100, n + 100, !1),
                        left: u().random(t - 200, t + 200, !1),
                        onAnimationComplete: this.removeExplosion,
                    },
                    a,
                ),
            ),
                this.setTimeout(this.createExplosion, 240),
                this.setState({ explosions: this.state.explosions + 1 });
        } else this.setTimeout(this.addSymbol, 750);
    };
    addSymbol = () => {
        (this.children = [(0, i.jsx)(U, {}, "symbol")]), this.forceUpdate(), this.setTimeout(this.delayedClose, 3e3);
    };
    delayedClose = () => {
        this.props.handleDemonClose();
    };
    render() {
        return (0, i.jsx)("div", { className: d()(P.QO, { [P.RK]: this.state.visible }), children: this.children });
    }
}
var G = n(650583),
    w = n(985018),
    x = n(393509);
let V = {
    UP: u().throttle(() => (0, D.Ak)("ddr-up"), 100),
    DOWN: u().throttle(() => (0, D.Ak)("ddr-down"), 100),
    LEFT: u().throttle(() => (0, D.Ak)("ddr-left"), 100),
    RIGHT: u().throttle(() => (0, D.Ak)("ddr-right"), 100),
};
function B(e) {
    switch (e.key) {
        case G.dh.ARROW_UP:
            return "UP";
        case G.dh.ARROW_DOWN:
            return "DOWN";
        case G.dh.ARROW_LEFT:
            return "LEFT";
        case G.dh.ARROW_RIGHT:
            return "RIGHT";
        default:
            return null;
    }
}
let F = [C.Q_.MESSAGE, C.Q_.NAVIGATION, C.Q_.VOICE_AND_VIDEO, C.Q_.CHAT, C.Q_.MISCELLANEOUS];
function k(e) {
    let { showBackdrop: t } = e;
    return (0, i.jsx)("div", { className: d()(x.tB, { [x.WU]: t }) });
}
function H() {
    let e = a.useMemo(
        () =>
            u()((0, C.Bx)())
                .groupBy((e) => e.group)
                .value(),
        [],
    );
    return (0, i.jsx)("div", {
        className: x.Io,
        children: F.map((t) => {
            let n = e[t],
                a = (0, C.Gm)(t),
                r = (0, C.zF)(t);
            return (0, i.jsxs)(
                "div",
                {
                    className: x.ZK,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(h.D, { variant: "heading-lg/semibold", children: a }),
                                null != r &&
                                    (0, i.jsx)(S.E, { className: x.UX, variant: "text-sm/normal", children: r }),
                            ],
                        }),
                        (0, i.jsx)(
                            "div",
                            {
                                className: x.tI,
                                children: n.map((e, t) =>
                                    e.predicate?.() === !1
                                        ? null
                                        : (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: x.YI,
                                                  children: [
                                                      (0, i.jsx)(S.E, {
                                                          variant: "text-sm/normal",
                                                          children: e.description,
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: "keybind-shortcuts",
                                                          children: e.binds.map((e) =>
                                                              (0, i.jsx)(N.e, { className: x.Me, shortcut: e }, e),
                                                          ),
                                                      }),
                                                  ],
                                              },
                                              t,
                                          ),
                                ),
                            },
                            t,
                        ),
                    ],
                },
                t,
            );
        }),
    });
}
class j extends a.PureComponent {
    state = {
        UP: !1,
        DOWN: !1,
        LEFT: !1,
        RIGHT: !1,
        opacity: new A.A.Value(1),
        scaleX: new A.A.Value(1),
        scaleY: new A.A.Value(0),
        animating: !1,
    };
    scrollerRef = a.createRef();
    lastInputedKeys = [];
    componentDidMount() {
        (this.lastInputedKeys = []),
            b._.subscribe(M.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            b._.subscribe(M.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, { capture: !0 }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        b._.unsubscribe(M.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            b._.unsubscribe(M.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.removeEventListener("keydown", this.handleKeyDown, { capture: !0 }),
            window.removeEventListener("keyup", this.handleKeyUp, { capture: !0 });
    }
    scrollPageUp = () => {
        let e = this.scrollerRef.current;
        _()(null != e, "Scroller is pagedUp when not mounted"), e.scrollPageUp({ animate: !0 });
    };
    scrollPageDown = () => {
        let e = this.scrollerRef.current;
        _()(null != e, "Scroller is pagedDown when not mounted"), e.scrollPageDown({ animate: !0 });
    };
    arrowUp = (e) => {
        let { direction: t } = e;
        this.setState({ [t]: !1 });
    };
    arrowDown = (e) => {
        let { direction: t } = e;
        V[t](), this.setState({ [t]: !0 });
    };
    componentWillLeave = (e) => {
        this.setState({ animating: !0 }),
            this.state.opacity.setValue(1),
            this.state.scaleX.setValue(0.5),
            this.state.scaleY.setValue(1),
            A.A.sequence([
                A.A.timing(this.state.opacity, { toValue: 0, duration: 800, easing: A.A.Easing.cubic }),
            ]).start(e);
    };
    toggleOpacity = () => {
        1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1);
    };
    getStyles = () => ({
        opacity: this.state.opacity.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }),
        transform: [
            { scaleX: this.state.scaleX.interpolate({ inputRange: [0, 1], outputRange: [0, 2] }) },
            { scaleY: this.state.scaleY.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) },
        ],
    });
    handleKeyDown = (e) => {
        if (
            (this.lastInputedKeys.push(e.keyCode),
            (this.lastInputedKeys = this.lastInputedKeys.slice(-5)),
            this.lastInputedKeys[0] === M.Ks6.H &&
                this.lastInputedKeys[1] === M.Ks6.H &&
                this.lastInputedKeys[2] === M.Ks6.ARROW_RIGHT &&
                this.lastInputedKeys[3] === M.Ks6.N &&
                this.lastInputedKeys[4] === M.Ks6.K &&
                this.props.activateRagingDemon(),
            this.props.keyboardModeEnabled)
        )
            return;
        let t = B(e);
        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
    };
    handleKeyUp = (e) => {
        if (this.props.keyboardModeEnabled) return;
        let t = B(e);
        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
    };
    onArrowClick = (e) => {
        this.arrowDown({ direction: e });
    };
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: a } = this.state;
        return (0, i.jsxs)(A.A.div, {
            className: x.UV,
            style: this.getStyles(),
            children: [
                (0, i.jsxs)(f.H, {
                    className: x.GK,
                    children: [
                        (0, i.jsx)("div", { className: x.Qs, children: w.intl.string(w.t["1BdUtx"]) }),
                        (0, i.jsx)(N.e, { shortcut: "mod+/" }),
                    ],
                }),
                (0, i.jsx)("div", { className: x.KV, children: w.intl.string(w.t["2t19lU"]) }),
                (0, i.jsxs)("div", {
                    className: x.Pg,
                    children: [
                        (0, i.jsx)(Y, { arrow: "LEFT", isActive: n, className: x.kb, children: "left" }),
                        (0, i.jsx)(Y, { arrow: "DOWN", isActive: t, className: x.TR, children: "down" }),
                        (0, i.jsx)(Y, { arrow: "UP", isActive: e, className: x.up, children: "up" }),
                        (0, i.jsx)(Y, { arrow: "RIGHT", isActive: a, className: x.pG, children: "right" }),
                    ],
                }),
                (0, i.jsx)(p.Gt, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, i.jsx)(f.F, { children: (0, i.jsx)(H, {}) }),
                }),
            ],
        });
    }
}
function Y(e) {
    let { isActive: t, arrow: n, className: r, children: s } = e,
        [l, o] = a.useState(t),
        c = a.useCallback(() => {
            V[n](), o(!0);
        }, [n]);
    return (
        a.useEffect(() => {
            if (l) {
                let e = setTimeout(() => o(!1), 500);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, i.jsx)(m.D, { onClick: c, className: d()(x.UE, r, { [x.vu]: t || l }), children: s })
    );
}
function W(e) {
    let { transitionState: t, onClose: n } = e,
        [r, s] = a.useState(!1),
        [l, o] = a.useState(!1),
        c = a.useMemo(() => (__OVERLAY__ ? (0, R.y8)() : (0, C.Bx)()), []),
        { keyboardModeEnabled: _, useReducedMotion: E } = (0, I.cf)([L.A], () => ({
            keyboardModeEnabled: L.A.keyboardModeEnabled,
            useReducedMotion: L.A.useReducedMotion,
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(k, { showBackdrop: l }),
            (0, i.jsx)(O.EO, {
                className: d()(x._$, { [x.O9]: r }),
                size: O.rI.DYNAMIC,
                "aria-label": w.intl.string(w.t.T9DA2K),
                transitionState: t,
                parentComponent: "KeyboardShortcutsModal",
                children: (0, i.jsx)(T.F, {
                    component: "div",
                    children: r
                        ? (0, i.jsx)(
                              y,
                              {
                                  handleDemonClose: function () {
                                      o(!1), setTimeout(n, 500);
                                  },
                              },
                              "raging-demo",
                          )
                        : (0, i.jsx)(
                              j,
                              {
                                  content: c,
                                  keyboardModeEnabled: _,
                                  activateRagingDemon: function () {
                                      E || (g.A.disable(), s(!0), o(!0));
                                  },
                              },
                              "modal",
                          ),
                }),
            }),
        ],
    });
}
var K = n(946974);
class $ extends l.A {
    _initialize() {
        s.h.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts),
            s.h.subscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts);
    }
    _terminate() {
        s.h.unsubscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts),
            s.h.unsubscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts);
    }
    showKeyboardShortcuts() {
        (0, r.openModal)((e) => (0, i.jsx)(W, { ...e }), { modalKey: K.P });
    }
    hideKeyboardShortcuts() {
        (0, r.closeModal)(K.P);
    }
}
let Z = new $();
