n.d(t, { A: () => q });
var i = n(627968),
    l = n(64700),
    s = n(192308),
    r = n(228366),
    a = n(272355);
n(321073);
var o = n(503698),
    d = n.n(o),
    c = n(284009),
    u = n.n(c),
    h = n(735438),
    A = n.n(h),
    _ = n(615300),
    g = n(17928),
    m = n(73939),
    p = n(534514),
    f = n(834730),
    E = n(475358),
    C = n(707554),
    x = n(689175),
    I = n(939249),
    b = n(935462),
    S = n(337371),
    N = n(116305),
    T = n(775121),
    v = n(775602),
    y = n(400492),
    R = n(625494),
    j = n(652215),
    L = n(868347);
let O = () =>
    (0, i.jsxs)(
        "div",
        {
            className: L.HR,
            children: [(0, i.jsx)("div", { className: L.tW }), (0, i.jsx)("img", { alt: "", src: n(24160) })],
        },
        "symbol",
    );
class G extends l.PureComponent {
    _renderSecondaryTimeout = null;
    _doneTimeout = null;
    state = {
        animating: !1,
        renderSecondary: !1,
        scale: A().random(0.6, 1, !0),
        offsetX: A().random(0, 140, !1) - 70,
        offsetY: A().random(0, 140, !1) - 70,
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
                className: L.e8,
                children: [
                    (0, i.jsx)("img", { alt: "", className: L.Lc, src: n(383922), width: 70, height: 69 }),
                    (0, i.jsx)("img", { alt: "", className: L.QP, src: n(815995), width: 96, height: 95 }),
                    (0, i.jsx)("img", { alt: "", className: L.WB, src: n(32315), width: 183, height: 104 }),
                    (0, i.jsx)("img", { alt: "", className: L.FQ, src: n(144298), width: 69, height: 180 }),
                ],
            },
            "primary-explosion",
        );
    }
    renderSecondary(e, t) {
        return (0, i.jsxs)(
            "div",
            {
                className: L.wv,
                style: { top: t, left: e },
                children: [
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: L.Lc, src: n(61631), width: 61, height: 58 },
                        "circle-inner",
                    ),
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: L.QP, src: n(850166), width: 85, height: 85 },
                        "circle-outer",
                    ),
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: L.WB, src: n(822548), width: 162, height: 173 },
                        "lines-secondary",
                    ),
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: L.FQ, src: n(275242), width: 156, height: 306 },
                        "lines-main",
                    ),
                ],
            },
            "secondary-explosion",
        );
    }
    render() {
        let { renderSecondary: e, offsetX: t, offsetY: n, animating: l, scale: s } = this.state,
            r = [this.renderPrimary()];
        return (
            e && r.push(this.renderSecondary(t, n)),
            (0, i.jsx)("div", {
                className: d()(L.kL, { [L.i0]: l }),
                style: { top: this.props.top, left: this.props.left, transform: `scale(${s})` },
                children: r,
            })
        );
    }
}
class M extends l.PureComponent {
    _timeouts = [];
    children = [];
    state = { explosions: 0, visible: !1 };
    componentDidMount() {
        this.setTimeout(() => {
            this.setState({ visible: !0 }), R._.dispatch(j.jej.SHAKE_APP, { duration: 2400 });
        }, 1800),
            this.setTimeout(this.createExplosion, 1800);
    }
    componentWillUnmount() {
        for (let e of (T.A.enable(), (this.children.length = 0), this._timeouts)) clearTimeout(e);
    }
    setTimeout = (e, t) => {
        let n = setTimeout(e, t);
        return this._timeouts.push(n), n;
    };
    removeExplosion = (e) => {
        let t = this.children,
            n = t.findIndex((t) => {
                if (t.type !== G) return !1;
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
            let l = `expl-${this.state.explosions}`;
            e.push(
                (0, i.jsx)(
                    G,
                    {
                        componentId: l,
                        top: A().random(n - 100, n + 100, !1),
                        left: A().random(t - 200, t + 200, !1),
                        onAnimationComplete: this.removeExplosion,
                    },
                    l,
                ),
            ),
                this.setTimeout(this.createExplosion, 240),
                this.setState({ explosions: this.state.explosions + 1 });
        } else this.setTimeout(this.addSymbol, 750);
    };
    addSymbol = () => {
        (this.children = [(0, i.jsx)(O, {}, "symbol")]), this.forceUpdate(), this.setTimeout(this.delayedClose, 3e3);
    };
    delayedClose = () => {
        this.props.handleDemonClose();
    };
    render() {
        return (0, i.jsx)("div", { className: d()(L.QO, { [L.RK]: this.state.visible }), children: this.children });
    }
}
var D = n(650583),
    U = n(985018),
    P = n(393509);
let w = {
    UP: A().throttle(() => (0, y.Ak)("ddr-up"), 100),
    DOWN: A().throttle(() => (0, y.Ak)("ddr-down"), 100),
    LEFT: A().throttle(() => (0, y.Ak)("ddr-left"), 100),
    RIGHT: A().throttle(() => (0, y.Ak)("ddr-right"), 100),
};
function k(e) {
    switch (e.key) {
        case D.dh.ARROW_UP:
            return "UP";
        case D.dh.ARROW_DOWN:
            return "DOWN";
        case D.dh.ARROW_LEFT:
            return "LEFT";
        case D.dh.ARROW_RIGHT:
            return "RIGHT";
        default:
            return null;
    }
}
let V = [S.Q_.MESSAGE, S.Q_.NAVIGATION, S.Q_.VOICE_AND_VIDEO, S.Q_.CHAT, S.Q_.MISCELLANEOUS];
function B(e) {
    let { showBackdrop: t } = e;
    return (0, i.jsx)("div", { className: d()(P.tB, { [P.WU]: t }) });
}
function H() {
    let e = l.useMemo(
        () =>
            A()((0, S.Bx)())
                .groupBy((e) => e.group)
                .value(),
        [],
    );
    return (0, i.jsx)("div", {
        className: P.Io,
        children: V.map((t) => {
            let n = e[t],
                l = (0, S.Gm)(t),
                s = (0, S.zF)(t);
            return (0, i.jsxs)(
                "div",
                {
                    className: P.ZK,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(p.D, { variant: "heading-lg/semibold", children: l }),
                                null != s &&
                                    (0, i.jsx)(f.E, { className: P.UX, variant: "text-sm/normal", children: s }),
                            ],
                        }),
                        (0, i.jsx)(
                            "div",
                            {
                                className: P.tI,
                                children: n.map((e, t) =>
                                    e.predicate?.() === !1
                                        ? null
                                        : (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: P.YI,
                                                  children: [
                                                      (0, i.jsx)(f.E, {
                                                          variant: "text-sm/normal",
                                                          children: e.description,
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: "keybind-shortcuts",
                                                          children: e.binds.map((e) =>
                                                              (0, i.jsx)(E.e, { className: P.Me, shortcut: e }, e),
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
class F extends l.PureComponent {
    state = {
        UP: !1,
        DOWN: !1,
        LEFT: !1,
        RIGHT: !1,
        opacity: new _.A.Value(1),
        scaleX: new _.A.Value(1),
        scaleY: new _.A.Value(0),
        animating: !1,
    };
    scrollerRef = l.createRef();
    lastInputedKeys = [];
    componentDidMount() {
        (this.lastInputedKeys = []),
            R._.subscribe(j.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            R._.subscribe(j.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, { capture: !0 }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        R._.unsubscribe(j.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            R._.unsubscribe(j.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.removeEventListener("keydown", this.handleKeyDown, { capture: !0 }),
            window.removeEventListener("keyup", this.handleKeyUp, { capture: !0 });
    }
    scrollPageUp = () => {
        let e = this.scrollerRef.current;
        u()(null != e, "Scroller is pagedUp when not mounted"), e.scrollPageUp({ animate: !0 });
    };
    scrollPageDown = () => {
        let e = this.scrollerRef.current;
        u()(null != e, "Scroller is pagedDown when not mounted"), e.scrollPageDown({ animate: !0 });
    };
    arrowUp = (e) => {
        let { direction: t } = e;
        this.setState({ [t]: !1 });
    };
    arrowDown = (e) => {
        let { direction: t } = e;
        w[t](), this.setState({ [t]: !0 });
    };
    componentWillLeave = (e) => {
        this.setState({ animating: !0 }),
            this.state.opacity.setValue(1),
            this.state.scaleX.setValue(0.5),
            this.state.scaleY.setValue(1),
            _.A.sequence([
                _.A.timing(this.state.opacity, { toValue: 0, duration: 800, easing: _.A.Easing.cubic }),
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
            this.lastInputedKeys[0] === j.Ks6.H &&
                this.lastInputedKeys[1] === j.Ks6.H &&
                this.lastInputedKeys[2] === j.Ks6.ARROW_RIGHT &&
                this.lastInputedKeys[3] === j.Ks6.N &&
                this.lastInputedKeys[4] === j.Ks6.K &&
                this.props.activateRagingDemon(),
            this.props.keyboardModeEnabled)
        )
            return;
        let t = k(e);
        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
    };
    handleKeyUp = (e) => {
        if (this.props.keyboardModeEnabled) return;
        let t = k(e);
        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
    };
    onArrowClick = (e) => {
        this.arrowDown({ direction: e });
    };
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: l } = this.state;
        return (0, i.jsxs)(_.A.div, {
            className: P.UV,
            style: this.getStyles(),
            children: [
                (0, i.jsxs)(C.H, {
                    className: P.GK,
                    children: [
                        (0, i.jsx)("div", { className: P.Qs, children: U.intl.string(U.t["1BdUtx"]) }),
                        (0, i.jsx)(E.e, { shortcut: "mod+/" }),
                    ],
                }),
                (0, i.jsx)("div", { className: P.KV, children: U.intl.string(U.t["2t19lU"]) }),
                (0, i.jsxs)("div", {
                    className: P.Pg,
                    children: [
                        (0, i.jsx)(W, { arrow: "LEFT", isActive: n, className: P.kb, children: "left" }),
                        (0, i.jsx)(W, { arrow: "DOWN", isActive: t, className: P.TR, children: "down" }),
                        (0, i.jsx)(W, { arrow: "UP", isActive: e, className: P.up, children: "up" }),
                        (0, i.jsx)(W, { arrow: "RIGHT", isActive: l, className: P.pG, children: "right" }),
                    ],
                }),
                (0, i.jsx)(x.Gt, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, i.jsx)(C.F, { children: (0, i.jsx)(H, {}) }),
                }),
            ],
        });
    }
}
function W(e) {
    let { isActive: t, arrow: n, className: s, children: r } = e,
        [a, o] = l.useState(t),
        c = l.useCallback(() => {
            w[n](), o(!0);
        }, [n]);
    return (
        l.useEffect(() => {
            if (a) {
                let e = setTimeout(() => o(!1), 500);
                return () => clearTimeout(e);
            }
        }, [a]),
        (0, i.jsx)(I.D, { onClick: c, className: d()(P.UE, s, { [P.vu]: t || a }), children: r })
    );
}
function K(e) {
    let { transitionState: t, onClose: n } = e,
        [s, r] = l.useState(!1),
        [a, o] = l.useState(!1),
        c = l.useMemo(() => (__OVERLAY__ ? (0, N.y8)() : (0, S.Bx)()), []),
        { keyboardModeEnabled: u, useReducedMotion: h } = (0, g.cf)([v.A], () => ({
            keyboardModeEnabled: v.A.keyboardModeEnabled,
            useReducedMotion: v.A.useReducedMotion,
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(B, { showBackdrop: a }),
            (0, i.jsx)(b.EO, {
                className: d()(P._$, { [P.O9]: s }),
                size: b.rI.DYNAMIC,
                "aria-label": U.intl.string(U.t.T9DA2K),
                transitionState: t,
                parentComponent: "KeyboardShortcutsModal",
                children: (0, i.jsx)(m.F, {
                    component: "div",
                    children: s
                        ? (0, i.jsx)(
                              M,
                              {
                                  handleDemonClose: function () {
                                      o(!1), setTimeout(n, 500);
                                  },
                              },
                              "raging-demo",
                          )
                        : (0, i.jsx)(
                              F,
                              {
                                  content: c,
                                  keyboardModeEnabled: u,
                                  activateRagingDemon: function () {
                                      h || (T.A.disable(), r(!0), o(!0));
                                  },
                              },
                              "modal",
                          ),
                }),
            }),
        ],
    });
}
var Y = n(946974);
class z extends a.A {
    _initialize() {
        r.h.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts),
            r.h.subscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts);
    }
    _terminate() {
        r.h.unsubscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts),
            r.h.unsubscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts);
    }
    showKeyboardShortcuts() {
        (0, s.openModal)((e) => (0, i.jsx)(K, { ...e }), { modalKey: Y.P });
    }
    hideKeyboardShortcuts() {
        (0, s.closeModal)(Y.P);
    }
}
let q = new z();
