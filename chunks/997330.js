a.d(t, { yh: () => _, rF: () => T, V1: () => C, yC: () => f });
var n,
    s,
    r,
    o,
    i = a(627968),
    l = a(64700),
    E = a(503698),
    c = a.n(E),
    d = a(785651),
    u = a(615300),
    S = a(544048),
    m = a(384494),
    I = a(844222),
    p = a(526399),
    D =
        (((n = D || {}).NORMAL = "normal"),
        (n.SPEED_START = "speed_start"),
        (n.SPEED_LOOP = "speed_loop"),
        (n.FINISH = "finish"),
        (n.IDLE = "idle"),
        n);
let A = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class _ extends l.PureComponent {
    static Scenes = D;
    static getNextScene(e) {
        switch (e) {
            case _.Scenes.SPEED_START:
                return _.Scenes.SPEED_LOOP;
            case _.Scenes.FINISH:
                return _.Scenes.IDLE;
            default:
                return e;
        }
    }
    importDefault() {
        return a
            .e("78503")
            .then(a.t.bind(a, 635489, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    render() {
        let {
            className: e,
            nextScene: t,
            onScenePlay: a,
            onSceneComplete: n,
            pause: s,
            pauseWhileUnfocused: r,
        } = this.props;
        return (0, i.jsx)(S.t, {
            className: c()(p.AI, e),
            importData: this.importDefault,
            nextScene: s ? "idle" : t,
            sceneSegments: A,
            onScenePlay: a,
            onSceneComplete: n,
            pauseWhileUnfocused: r,
            pause: s,
        });
    }
}
var h =
    (((s = h || {}).NORMAL = "normal"),
    (s.SPEED_START = "speed_start"),
    (s.SPEED_LOOP = "speed_loop"),
    (s.FINISH = "finish"),
    (s.IDLE = "idle"),
    s);
let N = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class T extends l.PureComponent {
    static Scenes = h;
    static getNextScene(e) {
        switch (e) {
            case T.Scenes.SPEED_START:
                return T.Scenes.SPEED_LOOP;
            case T.Scenes.FINISH:
                return T.Scenes.IDLE;
            default:
                return e;
        }
    }
    importDefault() {
        return a
            .e("19898")
            .then(a.t.bind(a, 262546, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    render() {
        let {
            className: e,
            nextScene: t,
            onScenePlay: a,
            onSceneComplete: n,
            pause: s,
            pauseWhileUnfocused: r,
        } = this.props;
        return (0, i.jsx)(S.t, {
            className: c()(p.AI, e),
            importData: this.importDefault,
            nextScene: s ? "idle" : t,
            sceneSegments: N,
            onScenePlay: a,
            onSceneComplete: n,
            pauseWhileUnfocused: r,
            pause: s,
        });
    }
}
var O =
    (((r = O || {}).IDLE_ENTRY = "idle_entry"),
    (r.IDLE_LOOP = "idle_loop"),
    (r.BOOST_START = "boost_start"),
    (r.BOOST_LOOP = "boost_loop"),
    (r.BOOST_END = "boost_end"),
    (r.VICTORY = "victory"),
    (r.ERROR = "error"),
    r);
let L = {
    idle_entry: { BEG: 0, END: 50 },
    idle_loop: { BEG: 50, END: 230, shouldForcePlayAfter: !0 },
    boost_start: { BEG: 230, END: 275 },
    boost_loop: { BEG: 275, END: 290 },
    boost_end: { BEG: 386, END: 455 },
    victory: { BEG: 470, END: 525 },
    error: { BEG: 290, END: 375 },
};
class g extends l.PureComponent {
    getStyle(e) {
        let { animation: t } = this.props;
        return {
            transform: [
                {
                    translateX: t.x.interpolate({
                        inputRange: [0, 1],
                        outputRange: e ? ["100%", "0%"] : ["0%", "-100%"],
                    }),
                },
                { translateY: t.y.interpolate({ inputRange: [0, 1], outputRange: ["100%", "0%"] }) },
            ],
        };
    }
    render() {
        let { className: e } = this.props;
        return (0, i.jsxs)("div", {
            className: p.I5,
            children: [
                (0, i.jsx)(u.A.div, { className: e, style: this.getStyle(!1) }),
                (0, i.jsx)(u.A.div, { className: e, style: this.getStyle(!0) }),
            ],
        });
    }
}
let R = Object.freeze({
    IDLE_ENTRY: { toValue: 1, duration: 1500 },
    IDLE_LOOP: { toValue: 1, duration: 6e3, easing: u.A.Easing.linear },
    BOOST_START: { toValue: 0, duration: 2e3, delay: 500 },
    ERROR: { toValue: 1, duration: 1500, delay: 1e3 },
});
class f extends l.PureComponent {
    static Scenes = O;
    static getNextScene(e) {
        switch (e) {
            case f.Scenes.IDLE_ENTRY:
                return f.Scenes.IDLE_LOOP;
            case f.Scenes.BOOST_START:
                return f.Scenes.BOOST_LOOP;
            case f.Scenes.BOOST_END:
                return f.Scenes.VICTORY;
            case f.Scenes.VICTORY:
                return f.Scenes.IDLE_ENTRY;
            case f.Scenes.ERROR:
                return f.Scenes.IDLE_LOOP;
            default:
                return e;
        }
    }
    backgroundAnimation = new u.A.ValueXY({ x: 0, y: 0 });
    foregroundAnimation = new u.A.ValueXY({ x: 0, y: 0 });
    didUnmount = !1;
    componentWillUnmount() {
        this.didUnmount = !0;
    }
    importData() {
        return a
            .e("69421")
            .then(a.t.bind(a, 548375, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    animateEntry(e) {
        u.A.parallel([
            u.A.timing(this.foregroundAnimation.y, { toValue: e.toValue, duration: e.duration, delay: e.delay || 0 }),
            u.A.timing(this.backgroundAnimation.y, {
                toValue: e.toValue,
                duration: 1.2 * e.duration,
                delay: e.delay || 0,
            }),
        ]).start();
    }
    animateIdleEntry() {
        this.animateEntry(R.IDLE_ENTRY);
    }
    animateError() {
        this.animateEntry(R.ERROR);
    }
    animateIdleLoop() {
        this.animateIdleLoopBackground(), this.animateIdleLoopForeground();
    }
    animateIdleLoopBackground = () => {
        this.didUnmount ||
            (this.backgroundAnimation.x.setValue(0),
            u.A.timing(this.backgroundAnimation.x, {
                toValue: R.IDLE_LOOP.toValue,
                duration: 1.2 * R.IDLE_LOOP.duration,
                easing: u.A.Easing.linear,
            }).start(this.animateIdleLoopBackground));
    };
    animateIdleLoopForeground = () => {
        this.didUnmount ||
            (this.foregroundAnimation.x.setValue(0),
            u.A.timing(this.foregroundAnimation.x, {
                toValue: R.IDLE_LOOP.toValue,
                duration: R.IDLE_LOOP.duration,
                easing: R.IDLE_LOOP.easing,
            }).start(this.animateIdleLoopForeground));
    };
    animateBoostStart() {
        u.A.parallel([
            u.A.timing(this.foregroundAnimation.y, {
                toValue: R.BOOST_START.toValue,
                duration: R.BOOST_START.duration,
                delay: R.BOOST_START.delay,
            }),
            u.A.timing(this.backgroundAnimation.y, {
                toValue: R.BOOST_START.toValue,
                duration: 1.2 * R.BOOST_START.duration,
                delay: R.BOOST_START.delay,
            }),
        ]).start();
    }
    handleScenePlay = (e) => {
        switch (e) {
            case "idle_entry":
                this.animateIdleEntry(), this.animateIdleLoop();
                break;
            case "error":
                this.animateError();
                break;
            case "boost_start":
                this.animateBoostStart();
        }
        let { onScenePlay: t } = this.props;
        null != t && t(e);
    };
    render() {
        let { className: e, nextScene: t, pause: a, onSceneComplete: n } = this.props;
        return (0, i.jsxs)("div", {
            className: c()(p.nv, e),
            children: [
                a
                    ? (0, i.jsxs)("div", {
                          className: p.I5,
                          children: [(0, i.jsx)("div", { className: p.RK }), (0, i.jsx)("div", { className: p.aM })],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g, { className: p.RK, animation: this.backgroundAnimation }),
                              (0, i.jsx)(g, { className: p.aM, animation: this.foregroundAnimation }),
                          ],
                      }),
                (0, i.jsx)(S.t, {
                    className: p.AI,
                    importData: this.importData,
                    nextScene: a ? "idle_loop" : t,
                    sceneSegments: L,
                    onScenePlay: this.handleScenePlay,
                    onSceneComplete: n,
                    pauseWhileUnfocused: !1,
                    pause: a,
                }),
            ],
        });
    }
}
var y =
    (((o = y || {}).ENTRY = "entry"),
    (o.IDLE = "idle"),
    (o.STARS = "stars"),
    (o.ERROR = "error"),
    (o.SUCCESS = "success"),
    o);
let P = {
        entry: { BEG: 0, END: 180 },
        idle: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        stars: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        error: { BEG: 360, END: 540 },
        success: { BEG: 540, END: 778 },
    },
    x = Object.freeze({ WHITE: "#ebf0f7", PINK: "#fa6ef6" }),
    B = [
        { left: 29, top: 100, color: x.WHITE },
        { left: 245, top: 11, color: x.PINK },
        { left: 393, top: 22, color: x.WHITE },
        { left: 74, top: 30, color: x.PINK },
        { left: 188, top: 9, color: x.WHITE },
        { left: 379, top: 97, color: x.PINK },
    ],
    G = Object.freeze({
        SCALE_INITIAL: 0,
        SCALE_MIDDLE: 1,
        SCALE_END: 0,
        ROTATE_INITIAL: 0,
        ROTATE_MIDDLE: 180,
        ROTATE_END: 360,
        DELAY_MIN: 200,
        DELAY_MAX: 500,
        DELAY_STAGGER: 200,
        DURATION_MIDDLE: 400,
        DURATION_END: 250,
        SIZE_MIN: 7,
        SIZE_MAX: 15,
        EASING_MIDDLE: u.A.Easing.bezier(0.3, 0.01, 0, 0.99),
        EASING_END: u.A.Easing.bezier(0, -0.01, 0.99, 0),
    });
function b(e) {
    let { animate: t } = e,
        [a, n] = l.useState(0),
        s = (function (e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "respect-motion-settings",
                n = arguments.length > 3 ? arguments[3] : void 0,
                s = l.useContext(I.C).reducedMotion.enabled,
                r = t;
            "animate-always" !== a &&
                ("respect-motion-settings" !== a || s) &&
                (r = "function" == typeof t ? (e, a) => ({ ...t(e, a), ...m.W }) : t.map((e) => ({ ...e, ...m.W })));
            let o = "function" == typeof r,
                [i, E, c] = (0, d.useSprings)(e, r, n);
            return o || 4 == arguments.length ? [i, E, c] : i;
        })(
            B.length,
            B.map((e, s) => {
                let r = s > 0 ? G.DELAY_STAGGER * s + Math.random() * (G.DELAY_MAX - G.DELAY_MIN) + G.DELAY_MIN : 0,
                    o = Math.random() * (G.SIZE_MAX - G.SIZE_MIN) + G.SIZE_MIN;
                return {
                    from: {
                        scale: G.SCALE_INITIAL,
                        rotate: G.ROTATE_INITIAL,
                        top: e.top,
                        left: e.left,
                        width: o,
                        height: o,
                    },
                    to: async (e) => {
                        t
                            ? (await e({
                                  scale: G.SCALE_MIDDLE,
                                  rotate: G.ROTATE_MIDDLE,
                                  delay: r,
                                  config: { duration: G.DURATION_MIDDLE, easing: G.EASING_MIDDLE },
                              }),
                              await e({
                                  scale: G.SCALE_END,
                                  rotate: G.ROTATE_END,
                                  config: { duration: G.DURATION_END, easing: G.EASING_END },
                              }),
                              await e({ scale: G.SCALE_INITIAL, rotate: G.ROTATE_INITIAL, immediate: !0 }),
                              s === B.length - 1 && n(a + 1))
                            : await e({ scale: G.SCALE_INITIAL, rotate: G.ROTATE_INITIAL });
                    },
                };
            }),
        );
    return (0, i.jsx)(i.Fragment, {
        children: s.map((e, t) => {
            let a = B[t];
            return (0, i.jsx)(
                d.animated.svg,
                {
                    style: e,
                    className: p.Sw,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 12.14 12.24",
                    children: (0, i.jsx)("path", {
                        d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                        fill: a.color,
                    }),
                },
                t,
            );
        }),
    });
}
class C extends l.PureComponent {
    static Scenes = y;
    static getNextScene(e) {
        switch (e) {
            case "entry":
            case "error":
            case "success":
                return "idle";
            default:
                return e;
        }
    }
    importData() {
        return a
            .e("45870")
            .then(a.t.bind(a, 738503, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    render() {
        let {
            className: e,
            nextScene: t,
            pause: a,
            onScenePlay: n,
            onSceneComplete: s,
            pauseWhileUnfocused: r,
        } = this.props;
        return (0, i.jsxs)("div", {
            className: c()(p.JL, e),
            children: [
                (0, i.jsx)(S.t, {
                    className: p.i_,
                    importData: this.importData,
                    nextScene: a ? "idle" : t,
                    sceneSegments: P,
                    onScenePlay: n,
                    onSceneComplete: s,
                    pauseWhileUnfocused: r,
                    pause: a,
                }),
                (0, i.jsx)(b, { animate: !a && "stars" === t }),
            ],
        });
    }
}
