a.d(t, { V1: () => b, rF: () => N, yC: () => R, yh: () => A });
var n,
    s,
    r,
    o,
    i = a(627968),
    l = a(64700),
    E = a(503698),
    c = a.n(E),
    d = a(517738),
    u = a(615300),
    S = a(544048),
    m = a(982147),
    I = a(526399),
    p =
        (((n = p || {}).NORMAL = "normal"),
        (n.SPEED_START = "speed_start"),
        (n.SPEED_LOOP = "speed_loop"),
        (n.FINISH = "finish"),
        (n.IDLE = "idle"),
        n);
let D = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class A extends l.PureComponent {
    static Scenes = p;
    static getNextScene(e) {
        switch (e) {
            case A.Scenes.SPEED_START:
                return A.Scenes.SPEED_LOOP;
            case A.Scenes.FINISH:
                return A.Scenes.IDLE;
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
            className: c()(I.AI, e),
            importData: this.importDefault,
            nextScene: s ? "idle" : t,
            sceneSegments: D,
            onScenePlay: a,
            onSceneComplete: n,
            pauseWhileUnfocused: r,
            pause: s,
        });
    }
}
var _ =
    (((s = _ || {}).NORMAL = "normal"),
    (s.SPEED_START = "speed_start"),
    (s.SPEED_LOOP = "speed_loop"),
    (s.FINISH = "finish"),
    (s.IDLE = "idle"),
    s);
let h = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class N extends l.PureComponent {
    static Scenes = _;
    static getNextScene(e) {
        switch (e) {
            case N.Scenes.SPEED_START:
                return N.Scenes.SPEED_LOOP;
            case N.Scenes.FINISH:
                return N.Scenes.IDLE;
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
            className: c()(I.AI, e),
            importData: this.importDefault,
            nextScene: s ? "idle" : t,
            sceneSegments: h,
            onScenePlay: a,
            onSceneComplete: n,
            pauseWhileUnfocused: r,
            pause: s,
        });
    }
}
var T =
    (((r = T || {}).IDLE_ENTRY = "idle_entry"),
    (r.IDLE_LOOP = "idle_loop"),
    (r.BOOST_START = "boost_start"),
    (r.BOOST_LOOP = "boost_loop"),
    (r.BOOST_END = "boost_end"),
    (r.VICTORY = "victory"),
    (r.ERROR = "error"),
    r);
let O = {
    idle_entry: { BEG: 0, END: 50 },
    idle_loop: { BEG: 50, END: 230, shouldForcePlayAfter: !0 },
    boost_start: { BEG: 230, END: 275 },
    boost_loop: { BEG: 275, END: 290 },
    boost_end: { BEG: 386, END: 455 },
    victory: { BEG: 470, END: 525 },
    error: { BEG: 290, END: 375 },
};
class L extends l.PureComponent {
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
            className: I.I5,
            children: [
                (0, i.jsx)(u.A.div, { className: e, style: this.getStyle(!1) }),
                (0, i.jsx)(u.A.div, { className: e, style: this.getStyle(!0) }),
            ],
        });
    }
}
let g = Object.freeze({
    IDLE_ENTRY: { toValue: 1, duration: 1500 },
    IDLE_LOOP: { toValue: 1, duration: 6e3, easing: u.A.Easing.linear },
    BOOST_START: { toValue: 0, duration: 2e3, delay: 500 },
    ERROR: { toValue: 1, duration: 1500, delay: 1e3 },
});
class R extends l.PureComponent {
    static Scenes = T;
    static getNextScene(e) {
        switch (e) {
            case R.Scenes.IDLE_ENTRY:
                return R.Scenes.IDLE_LOOP;
            case R.Scenes.BOOST_START:
                return R.Scenes.BOOST_LOOP;
            case R.Scenes.BOOST_END:
                return R.Scenes.VICTORY;
            case R.Scenes.VICTORY:
                return R.Scenes.IDLE_ENTRY;
            case R.Scenes.ERROR:
                return R.Scenes.IDLE_LOOP;
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
        this.animateEntry(g.IDLE_ENTRY);
    }
    animateError() {
        this.animateEntry(g.ERROR);
    }
    animateIdleLoop() {
        this.animateIdleLoopBackground(), this.animateIdleLoopForeground();
    }
    animateIdleLoopBackground = () => {
        this.didUnmount ||
            (this.backgroundAnimation.x.setValue(0),
            u.A.timing(this.backgroundAnimation.x, {
                toValue: g.IDLE_LOOP.toValue,
                duration: 1.2 * g.IDLE_LOOP.duration,
                easing: u.A.Easing.linear,
            }).start(this.animateIdleLoopBackground));
    };
    animateIdleLoopForeground = () => {
        this.didUnmount ||
            (this.foregroundAnimation.x.setValue(0),
            u.A.timing(this.foregroundAnimation.x, {
                toValue: g.IDLE_LOOP.toValue,
                duration: g.IDLE_LOOP.duration,
                easing: g.IDLE_LOOP.easing,
            }).start(this.animateIdleLoopForeground));
    };
    animateBoostStart() {
        u.A.parallel([
            u.A.timing(this.foregroundAnimation.y, {
                toValue: g.BOOST_START.toValue,
                duration: g.BOOST_START.duration,
                delay: g.BOOST_START.delay,
            }),
            u.A.timing(this.backgroundAnimation.y, {
                toValue: g.BOOST_START.toValue,
                duration: 1.2 * g.BOOST_START.duration,
                delay: g.BOOST_START.delay,
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
            className: c()(I.nv, e),
            children: [
                a
                    ? (0, i.jsxs)("div", {
                          className: I.I5,
                          children: [(0, i.jsx)("div", { className: I.RK }), (0, i.jsx)("div", { className: I.aM })],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(L, { className: I.RK, animation: this.backgroundAnimation }),
                              (0, i.jsx)(L, { className: I.aM, animation: this.foregroundAnimation }),
                          ],
                      }),
                (0, i.jsx)(S.t, {
                    className: I.AI,
                    importData: this.importData,
                    nextScene: a ? "idle_loop" : t,
                    sceneSegments: O,
                    onScenePlay: this.handleScenePlay,
                    onSceneComplete: n,
                    pauseWhileUnfocused: !1,
                    pause: a,
                }),
            ],
        });
    }
}
var f =
    (((o = f || {}).ENTRY = "entry"),
    (o.IDLE = "idle"),
    (o.STARS = "stars"),
    (o.ERROR = "error"),
    (o.SUCCESS = "success"),
    o);
let y = {
        entry: { BEG: 0, END: 180 },
        idle: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        stars: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        error: { BEG: 360, END: 540 },
        success: { BEG: 540, END: 778 },
    },
    P = Object.freeze({ WHITE: "#ebf0f7", PINK: "#fa6ef6" }),
    x = [
        { left: 29, top: 100, color: P.WHITE },
        { left: 245, top: 11, color: P.PINK },
        { left: 393, top: 22, color: P.WHITE },
        { left: 74, top: 30, color: P.PINK },
        { left: 188, top: 9, color: P.WHITE },
        { left: 379, top: 97, color: P.PINK },
    ],
    B = Object.freeze({
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
function G(e) {
    let { animate: t } = e,
        [a, n] = l.useState(0),
        s = (0, m.m)(
            x.length,
            x.map((e, s) => {
                let r = s > 0 ? B.DELAY_STAGGER * s + Math.random() * (B.DELAY_MAX - B.DELAY_MIN) + B.DELAY_MIN : 0,
                    o = Math.random() * (B.SIZE_MAX - B.SIZE_MIN) + B.SIZE_MIN;
                return {
                    from: {
                        scale: B.SCALE_INITIAL,
                        rotate: B.ROTATE_INITIAL,
                        top: e.top,
                        left: e.left,
                        width: o,
                        height: o,
                    },
                    to: async (e) => {
                        t
                            ? (await e({
                                  scale: B.SCALE_MIDDLE,
                                  rotate: B.ROTATE_MIDDLE,
                                  delay: r,
                                  config: { duration: B.DURATION_MIDDLE, easing: B.EASING_MIDDLE },
                              }),
                              await e({
                                  scale: B.SCALE_END,
                                  rotate: B.ROTATE_END,
                                  config: { duration: B.DURATION_END, easing: B.EASING_END },
                              }),
                              await e({ scale: B.SCALE_INITIAL, rotate: B.ROTATE_INITIAL, immediate: !0 }),
                              s === x.length - 1 && n(a + 1))
                            : await e({ scale: B.SCALE_INITIAL, rotate: B.ROTATE_INITIAL });
                    },
                };
            }),
        );
    return (0, i.jsx)(i.Fragment, {
        children: s.map((e, t) => {
            let a = x[t];
            return (0, i.jsx)(
                d.animated.svg,
                {
                    style: e,
                    className: I.Sw,
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
class b extends l.PureComponent {
    static Scenes = f;
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
            className: c()(I.JL, e),
            children: [
                (0, i.jsx)(S.t, {
                    className: I.i_,
                    importData: this.importData,
                    nextScene: a ? "idle" : t,
                    sceneSegments: y,
                    onScenePlay: n,
                    onSceneComplete: s,
                    pauseWhileUnfocused: r,
                    pause: a,
                }),
                (0, i.jsx)(G, { animate: !a && "stars" === t }),
            ],
        });
    }
}
