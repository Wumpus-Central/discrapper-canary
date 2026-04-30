"use strict";
n.d(t, { A: () => $ });
var i = n(627968),
    r = n(64700),
    s = n(192308),
    a = n(228366),
    o = n(272355);
n(321073);
var l = n(503698),
    u = n.n(l),
    c = n(284009),
    d = n.n(c),
    _ = n(735438),
    f = n.n(_),
    h = n(615300),
    p = n(17928),
    E = n(868285),
    m = n(534514),
    g = n(834730),
    A = n(475358),
    I = n(707554),
    T = n(689175),
    S = n(939249),
    N = n(935462),
    y = n(337371),
    C = n(116305),
    v = n(775121),
    O = n(775602),
    R = n(400492),
    b = n(625494),
    D = n(652215),
    L = n(868347);
let w = () =>
    (0, i.jsxs)(
        "div",
        {
            className: L.HR,
            children: [(0, i.jsx)("div", { className: L.tW }), (0, i.jsx)("img", { alt: "", src: n(24160) })],
        },
        "symbol",
    );
class M extends r.PureComponent {
    _renderSecondaryTimeout = null;
    _doneTimeout = null;
    state = {
        animating: !1,
        renderSecondary: !1,
        scale: f().random(0.6, 1, !0),
        offsetX: f().random(0, 140, !1) - 70,
        offsetY: f().random(0, 140, !1) - 70,
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
        let { renderSecondary: e, offsetX: t, offsetY: n, animating: r, scale: s } = this.state,
            a = [this.renderPrimary()];
        return (
            e && a.push(this.renderSecondary(t, n)),
            (0, i.jsx)("div", {
                className: u()(L.kL, { [L.i0]: r }),
                style: { top: this.props.top, left: this.props.left, transform: `scale(${s})` },
                children: a,
            })
        );
    }
}
class P extends r.PureComponent {
    _timeouts = [];
    children = [];
    state = { explosions: 0, visible: !1 };
    componentDidMount() {
        this.setTimeout(() => {
            this.setState({ visible: !0 }), b._.dispatch(D.jej.SHAKE_APP, { duration: 2400 });
        }, 1800),
            this.setTimeout(this.createExplosion, 1800);
    }
    componentWillUnmount() {
        for (let e of (v.A.enable(), (this.children.length = 0), this._timeouts)) clearTimeout(e);
    }
    setTimeout = (e, t) => {
        let n = setTimeout(e, t);
        return this._timeouts.push(n), n;
    };
    removeExplosion = (e) => {
        let t = this.children,
            n = t.findIndex((t) => {
                if (t.type !== M) return !1;
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
                    M,
                    {
                        componentId: r,
                        top: f().random(n - 100, n + 100, !1),
                        left: f().random(t - 200, t + 200, !1),
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
        (this.children = [(0, i.jsx)(w, {}, "symbol")]), this.forceUpdate(), this.setTimeout(this.delayedClose, 3e3);
    };
    delayedClose = () => {
        this.props.handleDemonClose();
    };
    render() {
        return (0, i.jsx)("div", { className: u()(L.QO, { [L.RK]: this.state.visible }), children: this.children });
    }
}
var x = n(650583),
    U = n(375708),
    k = n(393509);
let G = {
    UP: f().throttle(() => (0, R.Ak)("ddr-up"), 100),
    DOWN: f().throttle(() => (0, R.Ak)("ddr-down"), 100),
    LEFT: f().throttle(() => (0, R.Ak)("ddr-left"), 100),
    RIGHT: f().throttle(() => (0, R.Ak)("ddr-right"), 100),
};
function F(e) {
    switch (e.key) {
        case x.dh.ARROW_UP:
            return "UP";
        case x.dh.ARROW_DOWN:
            return "DOWN";
        case x.dh.ARROW_LEFT:
            return "LEFT";
        case x.dh.ARROW_RIGHT:
            return "RIGHT";
        default:
            return null;
    }
}
let V = [y.Q_.MESSAGE, y.Q_.NAVIGATION, y.Q_.VOICE_AND_VIDEO, y.Q_.CHAT, y.Q_.MISCELLANEOUS];
function B(e) {
    let { showBackdrop: t } = e;
    return (0, i.jsx)("div", { className: u()(k.tB, { [k.WU]: t }) });
}
function H() {
    let e = r.useMemo(
        () =>
            f()((0, y.Bx)())
                .groupBy((e) => e.group)
                .value(),
        [],
    );
    return (0, i.jsx)("div", {
        className: k.Io,
        children: V.map((t) => {
            let n = e[t],
                r = (0, y.Gm)(t),
                s = (0, y.zF)(t);
            return (0, i.jsxs)(
                "div",
                {
                    className: k.ZK,
                    children: [
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(m.D, { variant: "heading-lg/semibold", children: r }),
                                null != s &&
                                    (0, i.jsx)(g.E, { className: k.UX, variant: "text-sm/normal", children: s }),
                            ],
                        }),
                        (0, i.jsx)(
                            "div",
                            {
                                className: k.tI,
                                children: n.map((e, t) =>
                                    e.predicate?.() === !1
                                        ? null
                                        : (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: k.YI,
                                                  children: [
                                                      (0, i.jsx)(g.E, {
                                                          variant: "text-sm/normal",
                                                          children: e.description,
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: "keybind-shortcuts",
                                                          children: e.binds.map((e) =>
                                                              (0, i.jsx)(A.e, { className: k.Me, shortcut: e }, e),
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
        opacity: new h.A.Value(1),
        scaleX: new h.A.Value(1),
        scaleY: new h.A.Value(0),
        animating: !1,
    };
    scrollerRef = r.createRef();
    lastInputedKeys = [];
    componentDidMount() {
        (this.lastInputedKeys = []),
            b._.subscribe(D.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            b._.subscribe(D.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.addEventListener("keydown", this.handleKeyDown, { capture: !0 }),
            window.addEventListener("keyup", this.handleKeyUp, { capture: !0 });
    }
    componentWillUnmount() {
        b._.unsubscribe(D.jej.SCROLL_PAGE_UP, this.scrollPageUp),
            b._.unsubscribe(D.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
            window.removeEventListener("keydown", this.handleKeyDown, { capture: !0 }),
            window.removeEventListener("keyup", this.handleKeyUp, { capture: !0 });
    }
    scrollPageUp = () => {
        let e = this.scrollerRef.current;
        d()(null != e, "Scroller is pagedUp when not mounted"), e.scrollPageUp({ animate: !0 });
    };
    scrollPageDown = () => {
        let e = this.scrollerRef.current;
        d()(null != e, "Scroller is pagedDown when not mounted"), e.scrollPageDown({ animate: !0 });
    };
    arrowUp = (e) => {
        let { direction: t } = e;
        this.setState({ [t]: !1 });
    };
    arrowDown = (e) => {
        let { direction: t } = e;
        G[t](), this.setState({ [t]: !0 });
    };
    componentWillLeave = (e) => {
        this.setState({ animating: !0 }),
            this.state.opacity.setValue(1),
            this.state.scaleX.setValue(0.5),
            this.state.scaleY.setValue(1),
            h.A.sequence([
                h.A.timing(this.state.opacity, { toValue: 0, duration: 800, easing: h.A.Easing.cubic }),
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
            this.lastInputedKeys[0] === D.Ks6.H &&
                this.lastInputedKeys[1] === D.Ks6.H &&
                this.lastInputedKeys[2] === D.Ks6.ARROW_RIGHT &&
                this.lastInputedKeys[3] === D.Ks6.N &&
                this.lastInputedKeys[4] === D.Ks6.K &&
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
        return (0, i.jsxs)(h.A.div, {
            className: k.UV,
            style: this.getStyles(),
            children: [
                (0, i.jsxs)(I.H, {
                    className: k.GK,
                    children: [
                        (0, i.jsx)("div", { className: k.Qs, children: U.intl.string(U.t["1BdUtx"]) }),
                        (0, i.jsx)(A.e, { shortcut: "mod+/" }),
                    ],
                }),
                (0, i.jsx)("div", { className: k.KV, children: U.intl.string(U.t["2t19lU"]) }),
                (0, i.jsxs)("div", {
                    className: k.Pg,
                    children: [
                        (0, i.jsx)(Y, { arrow: "LEFT", isActive: n, className: k.kb, children: "left" }),
                        (0, i.jsx)(Y, { arrow: "DOWN", isActive: t, className: k.TR, children: "down" }),
                        (0, i.jsx)(Y, { arrow: "UP", isActive: e, className: k.up, children: "up" }),
                        (0, i.jsx)(Y, { arrow: "RIGHT", isActive: r, className: k.pG, children: "right" }),
                    ],
                }),
                (0, i.jsx)(T.Gt, {
                    ref: this.scrollerRef,
                    fade: !0,
                    children: (0, i.jsx)(I.F, { children: (0, i.jsx)(H, {}) }),
                }),
            ],
        });
    }
}
function Y(e) {
    let { isActive: t, arrow: n, className: s, children: a } = e,
        [o, l] = r.useState(t),
        c = r.useCallback(() => {
            G[n](), l(!0);
        }, [n]);
    return (
        r.useEffect(() => {
            if (o) {
                let e = setTimeout(() => l(!1), 500);
                return () => clearTimeout(e);
            }
        }, [o]),
        (0, i.jsx)(S.D, { onClick: c, className: u()(k.UE, s, { [k.vu]: t || o }), children: a })
    );
}
function W(e) {
    let { transitionState: t, onClose: n } = e,
        [s, a] = r.useState(!1),
        [o, l] = r.useState(!1),
        c = r.useMemo(() => (__OVERLAY__ ? (0, C.y8)() : (0, y.Bx)()), []),
        { keyboardModeEnabled: d, useReducedMotion: _ } = (0, p.cf)([O.A], () => ({
            keyboardModeEnabled: O.A.keyboardModeEnabled,
            useReducedMotion: O.A.useReducedMotion,
        }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(B, { showBackdrop: o }),
            (0, i.jsx)(N.EO, {
                className: u()(k._$, { [k.O9]: s }),
                size: N.rI.DYNAMIC,
                "aria-label": U.intl.string(U.t.T9DA2K),
                transitionState: t,
                parentComponent: "KeyboardShortcutsModal",
                children: (0, i.jsx)(E.F, {
                    component: "div",
                    children: s
                        ? (0, i.jsx)(
                              P,
                              {
                                  handleDemonClose: function () {
                                      l(!1), setTimeout(n, 500);
                                  },
                              },
                              "raging-demo",
                          )
                        : (0, i.jsx)(
                              j,
                              {
                                  content: c,
                                  keyboardModeEnabled: d,
                                  activateRagingDemon: function () {
                                      _ || (v.A.disable(), a(!0), l(!0));
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
class z extends o.A {
    _initialize() {
        a.h.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts),
            a.h.subscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts);
    }
    _terminate() {
        a.h.unsubscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts),
            a.h.unsubscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts);
    }
    showKeyboardShortcuts() {
        (0, s.openModal)((e) => (0, i.jsx)(W, { ...e }), { modalKey: K.P });
    }
    hideKeyboardShortcuts() {
        (0, s.closeModal)(K.P);
    }
}
let $ = new z();
