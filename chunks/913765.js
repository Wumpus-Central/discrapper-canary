"use strict";
n.d(t, { A: () => z });
var i = n(477900),
    r = n(582128),
    a = n(192308),
    s = n(228366),
    l = n(272355);
n(321073);
var o = n(503698),
    d = n.n(o),
    c = n(284009),
    u = n.n(c),
    _ = n(435558),
    E = n.n(_),
    A = n(615300),
    h = n(17928),
    I = n(868285),
    f = n(935462),
    p = n(297264),
    T = n(834730),
    m = n(475358),
    g = n(707554),
    S = n(689175),
    N = n(939249),
    C = n(367385),
    R = n(116305),
    O = n(775121),
    L = n(775602),
    y = n(400492),
    D = n(625494),
    v = n(652215),
    b = n(946990);
function M() {
    return (0, i.jsxs)(
        "div",
        {
            className: b.HR,
            children: [(0, i.jsx)("div", { className: b.tW }), (0, i.jsx)("img", { alt: "", src: n(24160) })],
        },
        "symbol",
    );
}
class P extends r.PureComponent {
    _renderSecondaryTimeout = null;
    _doneTimeout = null;
    state = {
        animating: !1,
        renderSecondary: !1,
        scale: E().random(0.6, 1, !0),
        offsetX: E().random(0, 140, !1) - 70,
        offsetY: E().random(0, 140, !1) - 70,
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
                className: b.e8,
                children: [
                    (0, i.jsx)("img", { alt: "", className: b.Lc, src: n(383922), width: 70, height: 69 }),
                    (0, i.jsx)("img", { alt: "", className: b.QP, src: n(815995), width: 96, height: 95 }),
                    (0, i.jsx)("img", { alt: "", className: b.WB, src: n(32315), width: 183, height: 104 }),
                    (0, i.jsx)("img", { alt: "", className: b.FQ, src: n(144298), width: 69, height: 180 }),
                ],
            },
            "primary-explosion",
        );
    }
    renderSecondary(e, t) {
        return (0, i.jsxs)(
            "div",
            {
                className: b.wv,
                style: { top: t, left: e },
                children: [
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: b.Lc, src: n(61631), width: 61, height: 58 },
                        "circle-inner",
                    ),
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: b.QP, src: n(850166), width: 85, height: 85 },
                        "circle-outer",
                    ),
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: b.WB, src: n(822548), width: 162, height: 173 },
                        "lines-secondary",
                    ),
                    (0, i.jsx)(
                        "img",
                        { alt: "", className: b.FQ, src: n(275242), width: 156, height: 306 },
                        "lines-main",
                    ),
                ],
            },
            "secondary-explosion",
        );
    }
    render() {
        let { renderSecondary: e, offsetX: t, offsetY: n, animating: r, scale: a } = this.state,
            s = [this.renderPrimary()];
        return (
            e && s.push(this.renderSecondary(t, n)),
            (0, i.jsx)("div", {
                className: d()(b.kL, { [b.i0]: r }),
                style: { top: this.props.top, left: this.props.left, transform: `scale(${a})` },
                children: s,
            })
        );
    }
}
class U extends r.PureComponent {
    _timeouts = [];
    children = [];
    state = { explosions: 0, visible: !1 };
    componentDidMount() {
        this.setTimeout(() => {
            this.setState({ visible: !0 }), D._.dispatch(v.jej.SHAKE_APP, { duration: 2400 });
        }, 1800),
            this.setTimeout(this.createExplosion, 1800);
    }
    componentWillUnmount() {
        for (let e of (O.A.enable(), (this.children.length = 0), this._timeouts)) clearTimeout(e);
    }
    setTimeout = (e, t) => {
        let n = setTimeout(e, t);
        return this._timeouts.push(n), n;
    };
    removeExplosion = (e) => {
        let t = this.children,
            n = t.findIndex((t) => {
                if (t.type !== P) return !1;
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
            let r = `expl-${this.state.explosions}`;
            e.push(
                (0, i.jsx)(
                    P,
                    {
                        componentId: r,
                        top: E().random(n - 100, n + 100, !1),
                        left: E().random(t - 200, t + 200, !1),
                        onAnimationComplete: this.removeExplosion,
                    },
                    r,
                ),
            ),
                this.setTimeout(this.createExplosion, 240),
                this.setState({ explosions: this.state.explosions + 1 });
        } else this.setTimeout(this.addSymbol, 750);
    };
    addSymbol = () => {
        (this.children = [(0, i.jsx)(M, {}, "symbol")]), this.forceUpdate(), this.setTimeout(this.delayedClose, 3e3);
    };
    delayedClose = () => {
        this.props.handleDemonClose();
    };
    render() {
        return (0, i.jsx)("div", { className: d()(b.QO, { [b.RK]: this.state.visible }), children: this.children });
    }
}
var w = n(650583),
    G = n(375708),
    x = n(587762);
let k = {
    UP: E().throttle(() => (0, y.Ak)("ddr-up"), 100),
    DOWN: E().throttle(() => (0, y.Ak)("ddr-down"), 100),
    LEFT: E().throttle(() => (0, y.Ak)("ddr-left"), 100),
    RIGHT: E().throttle(() => (0, y.Ak)("ddr-right"), 100),
};
function F(e) {
    switch (e.key) {
        case w.dh.ARROW_UP:
            return "UP";
        case w.dh.ARROW_DOWN:
            return "DOWN";
        case w.dh.ARROW_LEFT:
            return "LEFT";
        case w.dh.ARROW_RIGHT:
            return "RIGHT";
        default:
            return null;
    }
}
let V = [C.Q_.MESSAGE, C.Q_.NAVIGATION, C.Q_.VOICE_AND_VIDEO, C.Q_.CHAT, C.Q_.MISCELLANEOUS];
function B(e) {
    let { showBackdrop: t } = e;
    return (0, i.jsx)("div", { className: d()(x.tB, { [x.WU]: t }) });
}
function H() {
    let e = r.useMemo(
        () =>
            E()((0, C.Bx)())
                .groupBy((e) => e.group)
                .value(),
        [],
    );
    return (0, i.jsx)("div", {
        className: x.Io,
        children: V.map((t) => {
            let n = e[t],
                r = (0, C.Gm)(t),
                a = (0, C.zF)(t);
            return (0, i.jsxs)(
                "div",
                {
                    className: x.ZK,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(p.D, { variant: "heading-lg/semibold", children: r }),
                                null != a &&
                                    (0, i.jsx)(T.E, { className: x.UX, variant: "text-sm/normal", children: a }),
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
                                                      (0, i.jsx)(T.E, {
                                                          variant: "text-sm/normal",
                                                          children: e.description,
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: "keybind-shortcuts",
                                                          children: e.binds.map((e) =>
                                                              (0, i.jsx)(m.e, { className: x.Me, shortcut: e }, e),
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
class j extends r.PureComponent {
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
    scrollerRef = r.createRef();
    lastInputedKeys = [];
    componentDidMount() {
        (this.lastInputedKeys = []),
            D._.subscribe(v.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            D._.subscribe(v.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, { capture: !0 }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        D._.unsubscribe(v.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            D._.unsubscribe(v.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
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
        k[t](), this.setState({ [t]: !0 });
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
            this.lastInputedKeys[0] === v.Ks6.H &&
                this.lastInputedKeys[1] === v.Ks6.H &&
                this.lastInputedKeys[2] === v.Ks6.ARROW_RIGHT &&
                this.lastInputedKeys[3] === v.Ks6.N &&
                this.lastInputedKeys[4] === v.Ks6.K &&
                this.props.activateRagingDemon(),
            this.props.keyboardModeEnabled)
        )
            return;
        let t = F(e);
        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({ direction: t }));
    };
    handleKeyUp = (e) => {
        if (this.props.keyboardModeEnabled) return;
        let t = F(e);
        null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({ direction: t }));
    };
    onArrowClick = (e) => {
        this.arrowDown({ direction: e });
    };
    render() {
        let { UP: e, DOWN: t, LEFT: n, RIGHT: r } = this.state;
        return (0, i.jsxs)(A.A.div, {
            className: x.UV,
            style: this.getStyles(),
            children: [
                (0, i.jsxs)(g.H, {
                    className: x.GK,
                    children: [
                        (0, i.jsx)("div", { className: x.Qs, children: G.intl.string(G.t["1BdUtx"]) }),
                        (0, i.jsx)(m.e, { shortcut: "mod+/" }),
                    ],
                }),
                (0, i.jsx)("div", { className: x.KV, children: G.intl.string(G.t["2t19lU"]) }),
                (0, i.jsxs)("div", {
                    className: x.Pg,
                    children: [
                        (0, i.jsx)(W, { arrow: "LEFT", isActive: n, className: x.kb, children: "left" }),
                        (0, i.jsx)(W, { arrow: "DOWN", isActive: t, className: x.TR, children: "down" }),
                        (0, i.jsx)(W, { arrow: "UP", isActive: e, className: x.up, children: "up" }),
                        (0, i.jsx)(W, { arrow: "RIGHT", isActive: r, className: x.pG, children: "right" }),
                    ],
                }),
                (0, i.jsx)(S.Gt, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, i.jsx)(g.F, { children: (0, i.jsx)(H, {}) }),
                }),
            ],
        });
    }
}
function W(e) {
    let { isActive: t, arrow: n, className: a, children: s } = e,
        [l, o] = r.useState(t),
        c = r.useCallback(() => {
            k[n](), o(!0);
        }, [n]);
    return (
        r.useEffect(() => {
            if (l) {
                let e = setTimeout(() => o(!1), 500);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, i.jsx)(N.D, { onClick: c, className: d()(x.UE, a, { [x.vu]: t || l }), children: s })
    );
}
function Y(e) {
    let { transitionState: t, onClose: n } = e,
        [a, s] = r.useState(!1),
        [l, o] = r.useState(!1),
        c = r.useMemo(() => (__OVERLAY__ ? (0, R.y8)() : (0, C.Bx)()), []),
        { keyboardModeEnabled: u, useReducedMotion: _ } = (0, h.cf)([L.Ay], () => ({
            keyboardModeEnabled: L.Ay.keyboardModeEnabled,
            useReducedMotion: L.Ay.useReducedMotion,
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(B, { showBackdrop: l }),
            (0, i.jsx)(f.EO, {
                className: d()(x._$, { [x.O9]: a }),
                size: f.rI.DYNAMIC,
                "aria-label": G.intl.string(G.t.T9DA2K),
                transitionState: t,
                parentComponent: "KeyboardShortcutsModal",
                children: (0, i.jsx)(I.F, {
                    component: "div",
                    children: a
                        ? (0, i.jsx)(
                              U,
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
                                  keyboardModeEnabled: u,
                                  activateRagingDemon: function () {
                                      _ || (O.A.disable(), s(!0), o(!0));
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
        (0, a.openModal)((e) => (0, i.jsx)(Y, { ...e }), { modalKey: K.P });
    }
    hideKeyboardShortcuts() {
        (0, a.closeModal)(K.P);
    }
}
let z = new $();
