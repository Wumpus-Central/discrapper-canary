n.d(t, { V1: () => v, rF: () => y, yC: () => R, yh: () => A });
var r,
    a,
    i,
    o,
    l = n(627968),
    s = n(64700),
    d = n(503698),
    u = n.n(d),
    c = n(419354),
    _ = n(615300),
    p = n(544048),
    C = n(982147),
    h = n(526399),
    E =
        (((r = E || {}).NORMAL = "normal"),
        (r.SPEED_START = "speed_start"),
        (r.SPEED_LOOP = "speed_loop"),
        (r.FINISH = "finish"),
        (r.IDLE = "idle"),
        r);
let m = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class A extends s.PureComponent {
    static Scenes = E;
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
        return n
            .e("78503")
            .then(n.t.bind(n, 635489, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    render() {
        let {
            className: e,
            nextScene: t,
            onScenePlay: n,
            onSceneComplete: r,
            pause: a,
            pauseWhileUnfocused: i,
        } = this.props;
        return (0, l.jsx)(p.t, {
            className: u()(h.AI, e),
            importData: this.importDefault,
            nextScene: a ? "idle" : t,
            sceneSegments: m,
            onScenePlay: n,
            onSceneComplete: r,
            pauseWhileUnfocused: i,
            pause: a,
        });
    }
}
var I =
    (((a = I || {}).NORMAL = "normal"),
    (a.SPEED_START = "speed_start"),
    (a.SPEED_LOOP = "speed_loop"),
    (a.FINISH = "finish"),
    (a.IDLE = "idle"),
    a);
let T = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class y extends s.PureComponent {
    static Scenes = I;
    static getNextScene(e) {
        switch (e) {
            case y.Scenes.SPEED_START:
                return y.Scenes.SPEED_LOOP;
            case y.Scenes.FINISH:
                return y.Scenes.IDLE;
            default:
                return e;
        }
    }
    importDefault() {
        return n
            .e("19898")
            .then(n.t.bind(n, 262546, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    render() {
        let {
            className: e,
            nextScene: t,
            onScenePlay: n,
            onSceneComplete: r,
            pause: a,
            pauseWhileUnfocused: i,
        } = this.props;
        return (0, l.jsx)(p.t, {
            className: u()(h.AI, e),
            importData: this.importDefault,
            nextScene: a ? "idle" : t,
            sceneSegments: T,
            onScenePlay: n,
            onSceneComplete: r,
            pauseWhileUnfocused: i,
            pause: a,
        });
    }
}
var g =
    (((i = g || {}).IDLE_ENTRY = "idle_entry"),
    (i.IDLE_LOOP = "idle_loop"),
    (i.BOOST_START = "boost_start"),
    (i.BOOST_LOOP = "boost_loop"),
    (i.BOOST_END = "boost_end"),
    (i.VICTORY = "victory"),
    (i.ERROR = "error"),
    i);
let S = {
    idle_entry: { BEG: 0, END: 50 },
    idle_loop: { BEG: 50, END: 230, shouldForcePlayAfter: !0 },
    boost_start: { BEG: 230, END: 275 },
    boost_loop: { BEG: 275, END: 290 },
    boost_end: { BEG: 386, END: 455 },
    victory: { BEG: 470, END: 525 },
    error: { BEG: 290, END: 375 },
};
class N extends s.PureComponent {
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
        return (0, l.jsxs)("div", {
            className: h.I5,
            children: [
                (0, l.jsx)(_.A.div, { className: e, style: this.getStyle(!1) }),
                (0, l.jsx)(_.A.div, { className: e, style: this.getStyle(!0) }),
            ],
        });
    }
}
let f = Object.freeze({
    IDLE_ENTRY: { toValue: 1, duration: 1500 },
    IDLE_LOOP: { toValue: 1, duration: 6e3, easing: _.A.Easing.linear },
    BOOST_START: { toValue: 0, duration: 2e3, delay: 500 },
    ERROR: { toValue: 1, duration: 1500, delay: 1e3 },
});
class R extends s.PureComponent {
    static Scenes = g;
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
    backgroundAnimation = new _.A.ValueXY({ x: 0, y: 0 });
    foregroundAnimation = new _.A.ValueXY({ x: 0, y: 0 });
    didUnmount = !1;
    componentWillUnmount() {
        this.didUnmount = !0;
    }
    importData() {
        return n
            .e("69421")
            .then(n.t.bind(n, 548375, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    animateEntry(e) {
        _.A.parallel([
            _.A.timing(this.foregroundAnimation.y, { toValue: e.toValue, duration: e.duration, delay: e.delay || 0 }),
            _.A.timing(this.backgroundAnimation.y, {
                toValue: e.toValue,
                duration: 1.2 * e.duration,
                delay: e.delay || 0,
            }),
        ]).start();
    }
    animateIdleEntry() {
        this.animateEntry(f.IDLE_ENTRY);
    }
    animateError() {
        this.animateEntry(f.ERROR);
    }
    animateIdleLoop() {
        this.animateIdleLoopBackground(), this.animateIdleLoopForeground();
    }
    animateIdleLoopBackground = () => {
        this.didUnmount ||
            (this.backgroundAnimation.x.setValue(0),
            _.A.timing(this.backgroundAnimation.x, {
                toValue: f.IDLE_LOOP.toValue,
                duration: 1.2 * f.IDLE_LOOP.duration,
                easing: _.A.Easing.linear,
            }).start(this.animateIdleLoopBackground));
    };
    animateIdleLoopForeground = () => {
        this.didUnmount ||
            (this.foregroundAnimation.x.setValue(0),
            _.A.timing(this.foregroundAnimation.x, {
                toValue: f.IDLE_LOOP.toValue,
                duration: f.IDLE_LOOP.duration,
                easing: f.IDLE_LOOP.easing,
            }).start(this.animateIdleLoopForeground));
    };
    animateBoostStart() {
        _.A.parallel([
            _.A.timing(this.foregroundAnimation.y, {
                toValue: f.BOOST_START.toValue,
                duration: f.BOOST_START.duration,
                delay: f.BOOST_START.delay,
            }),
            _.A.timing(this.backgroundAnimation.y, {
                toValue: f.BOOST_START.toValue,
                duration: 1.2 * f.BOOST_START.duration,
                delay: f.BOOST_START.delay,
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
        let { className: e, nextScene: t, pause: n, onSceneComplete: r } = this.props;
        return (0, l.jsxs)("div", {
            className: u()(h.nv, e),
            children: [
                n
                    ? (0, l.jsxs)("div", {
                          className: h.I5,
                          children: [(0, l.jsx)("div", { className: h.RK }), (0, l.jsx)("div", { className: h.aM })],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(N, { className: h.RK, animation: this.backgroundAnimation }),
                              (0, l.jsx)(N, { className: h.aM, animation: this.foregroundAnimation }),
                          ],
                      }),
                (0, l.jsx)(p.t, {
                    className: h.AI,
                    importData: this.importData,
                    nextScene: n ? "idle_loop" : t,
                    sceneSegments: S,
                    onScenePlay: this.handleScenePlay,
                    onSceneComplete: r,
                    pauseWhileUnfocused: !1,
                    pause: n,
                }),
            ],
        });
    }
}
var L =
    (((o = L || {}).ENTRY = "entry"),
    (o.IDLE = "idle"),
    (o.STARS = "stars"),
    (o.ERROR = "error"),
    (o.SUCCESS = "success"),
    o);
let O = {
        entry: { BEG: 0, END: 180 },
        idle: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        stars: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        error: { BEG: 360, END: 540 },
        success: { BEG: 540, END: 778 },
    },
    P = Object.freeze({ WHITE: "#ebf0f7", PINK: "#fa6ef6" }),
    b = [
        { left: 29, top: 100, color: P.WHITE },
        { left: 245, top: 11, color: P.PINK },
        { left: 393, top: 22, color: P.WHITE },
        { left: 74, top: 30, color: P.PINK },
        { left: 188, top: 9, color: P.WHITE },
        { left: 379, top: 97, color: P.PINK },
    ],
    M = Object.freeze({
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
        EASING_MIDDLE: _.A.Easing.bezier(0.3, 0.01, 0, 0.99),
        EASING_END: _.A.Easing.bezier(0, -0.01, 0.99, 0),
    });
function x(e) {
    let { animate: t } = e,
        [n, r] = s.useState(0),
        a = (0, C.m)(
            b.length,
            b.map((e, a) => {
                let i = a > 0 ? M.DELAY_STAGGER * a + Math.random() * (M.DELAY_MAX - M.DELAY_MIN) + M.DELAY_MIN : 0,
                    o = Math.random() * (M.SIZE_MAX - M.SIZE_MIN) + M.SIZE_MIN;
                return {
                    from: {
                        scale: M.SCALE_INITIAL,
                        rotate: M.ROTATE_INITIAL,
                        top: e.top,
                        left: e.left,
                        width: o,
                        height: o,
                    },
                    to: async (e) => {
                        t
                            ? (await e({
                                  scale: M.SCALE_MIDDLE,
                                  rotate: M.ROTATE_MIDDLE,
                                  delay: i,
                                  config: { duration: M.DURATION_MIDDLE, easing: M.EASING_MIDDLE },
                              }),
                              await e({
                                  scale: M.SCALE_END,
                                  rotate: M.ROTATE_END,
                                  config: { duration: M.DURATION_END, easing: M.EASING_END },
                              }),
                              await e({ scale: M.SCALE_INITIAL, rotate: M.ROTATE_INITIAL, immediate: !0 }),
                              a === b.length - 1 && r(n + 1))
                            : await e({ scale: M.SCALE_INITIAL, rotate: M.ROTATE_INITIAL });
                    },
                };
            }),
        );
    return (0, l.jsx)(l.Fragment, {
        children: a.map((e, t) => {
            let n = b[t];
            return (0, l.jsx)(
                c.animated.svg,
                {
                    style: e,
                    className: h.Sw,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 12.14 12.24",
                    children: (0, l.jsx)("path", {
                        d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                        fill: n.color,
                    }),
                },
                t,
            );
        }),
    });
}
class v extends s.PureComponent {
    static Scenes = L;
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
        return n
            .e("45870")
            .then(n.t.bind(n, 738503, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    render() {
        let {
            className: e,
            nextScene: t,
            pause: n,
            onScenePlay: r,
            onSceneComplete: a,
            pauseWhileUnfocused: i,
        } = this.props;
        return (0, l.jsxs)("div", {
            className: u()(h.JL, e),
            children: [
                (0, l.jsx)(p.t, {
                    className: h.i_,
                    importData: this.importData,
                    nextScene: n ? "idle" : t,
                    sceneSegments: O,
                    onScenePlay: r,
                    onSceneComplete: a,
                    pauseWhileUnfocused: i,
                    pause: n,
                }),
                (0, l.jsx)(x, { animate: !n && "stars" === t }),
            ],
        });
    }
}
