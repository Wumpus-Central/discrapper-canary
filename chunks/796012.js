"use strict";
n.d(t, { V1: () => M, rF: () => T, yC: () => C, yh: () => g });
var r,
    i,
    s,
    a,
    o = n(627968),
    l = n(64700),
    u = n(503698),
    c = n.n(u),
    d = n(419354),
    _ = n(615300),
    f = n(544048),
    p = n(982147),
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
class g extends l.PureComponent {
    static Scenes = E;
    static getNextScene(e) {
        switch (e) {
            case g.Scenes.SPEED_START:
                return g.Scenes.SPEED_LOOP;
            case g.Scenes.FINISH:
                return g.Scenes.IDLE;
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
            pause: i,
            pauseWhileUnfocused: s,
        } = this.props;
        return (0, o.jsx)(f.t, {
            className: c()(h.AI, e),
            importData: this.importDefault,
            nextScene: i ? "idle" : t,
            sceneSegments: m,
            onScenePlay: n,
            onSceneComplete: r,
            pauseWhileUnfocused: s,
            pause: i,
        });
    }
}
var A =
    (((i = A || {}).NORMAL = "normal"),
    (i.SPEED_START = "speed_start"),
    (i.SPEED_LOOP = "speed_loop"),
    (i.FINISH = "finish"),
    (i.IDLE = "idle"),
    i);
let I = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class T extends l.PureComponent {
    static Scenes = A;
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
            pause: i,
            pauseWhileUnfocused: s,
        } = this.props;
        return (0, o.jsx)(f.t, {
            className: c()(h.AI, e),
            importData: this.importDefault,
            nextScene: i ? "idle" : t,
            sceneSegments: I,
            onScenePlay: n,
            onSceneComplete: r,
            pauseWhileUnfocused: s,
            pause: i,
        });
    }
}
var S =
    (((s = S || {}).IDLE_ENTRY = "idle_entry"),
    (s.IDLE_LOOP = "idle_loop"),
    (s.BOOST_START = "boost_start"),
    (s.BOOST_LOOP = "boost_loop"),
    (s.BOOST_END = "boost_end"),
    (s.VICTORY = "victory"),
    (s.ERROR = "error"),
    s);
let y = {
    idle_entry: { BEG: 0, END: 50 },
    idle_loop: { BEG: 50, END: 230, shouldForcePlayAfter: !0 },
    boost_start: { BEG: 230, END: 275 },
    boost_loop: { BEG: 275, END: 290 },
    boost_end: { BEG: 386, END: 455 },
    victory: { BEG: 470, END: 525 },
    error: { BEG: 290, END: 375 },
};
class N extends l.PureComponent {
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
        return (0, o.jsxs)("div", {
            className: h.I5,
            children: [
                (0, o.jsx)(_.A.div, { className: e, style: this.getStyle(!1) }),
                (0, o.jsx)(_.A.div, { className: e, style: this.getStyle(!0) }),
            ],
        });
    }
}
let v = Object.freeze({
    IDLE_ENTRY: { toValue: 1, duration: 1500 },
    IDLE_LOOP: { toValue: 1, duration: 6e3, easing: _.A.Easing.linear },
    BOOST_START: { toValue: 0, duration: 2e3, delay: 500 },
    ERROR: { toValue: 1, duration: 1500, delay: 1e3 },
});
class C extends l.PureComponent {
    static Scenes = S;
    static getNextScene(e) {
        switch (e) {
            case C.Scenes.IDLE_ENTRY:
                return C.Scenes.IDLE_LOOP;
            case C.Scenes.BOOST_START:
                return C.Scenes.BOOST_LOOP;
            case C.Scenes.BOOST_END:
                return C.Scenes.VICTORY;
            case C.Scenes.VICTORY:
                return C.Scenes.IDLE_ENTRY;
            case C.Scenes.ERROR:
                return C.Scenes.IDLE_LOOP;
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
        this.animateEntry(v.IDLE_ENTRY);
    }
    animateError() {
        this.animateEntry(v.ERROR);
    }
    animateIdleLoop() {
        this.animateIdleLoopBackground(), this.animateIdleLoopForeground();
    }
    animateIdleLoopBackground = () => {
        this.didUnmount ||
            (this.backgroundAnimation.x.setValue(0),
            _.A.timing(this.backgroundAnimation.x, {
                toValue: v.IDLE_LOOP.toValue,
                duration: 1.2 * v.IDLE_LOOP.duration,
                easing: _.A.Easing.linear,
            }).start(this.animateIdleLoopBackground));
    };
    animateIdleLoopForeground = () => {
        this.didUnmount ||
            (this.foregroundAnimation.x.setValue(0),
            _.A.timing(this.foregroundAnimation.x, {
                toValue: v.IDLE_LOOP.toValue,
                duration: v.IDLE_LOOP.duration,
                easing: v.IDLE_LOOP.easing,
            }).start(this.animateIdleLoopForeground));
    };
    animateBoostStart() {
        _.A.parallel([
            _.A.timing(this.foregroundAnimation.y, {
                toValue: v.BOOST_START.toValue,
                duration: v.BOOST_START.duration,
                delay: v.BOOST_START.delay,
            }),
            _.A.timing(this.backgroundAnimation.y, {
                toValue: v.BOOST_START.toValue,
                duration: 1.2 * v.BOOST_START.duration,
                delay: v.BOOST_START.delay,
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
        return (0, o.jsxs)("div", {
            className: c()(h.nv, e),
            children: [
                n
                    ? (0, o.jsxs)("div", {
                          className: h.I5,
                          children: [(0, o.jsx)("div", { className: h.RK }), (0, o.jsx)("div", { className: h.aM })],
                      })
                    : (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)(N, { className: h.RK, animation: this.backgroundAnimation }),
                              (0, o.jsx)(N, { className: h.aM, animation: this.foregroundAnimation }),
                          ],
                      }),
                (0, o.jsx)(f.t, {
                    className: h.AI,
                    importData: this.importData,
                    nextScene: n ? "idle_loop" : t,
                    sceneSegments: y,
                    onScenePlay: this.handleScenePlay,
                    onSceneComplete: r,
                    pauseWhileUnfocused: !1,
                    pause: n,
                }),
            ],
        });
    }
}
var O =
    (((a = O || {}).ENTRY = "entry"),
    (a.IDLE = "idle"),
    (a.STARS = "stars"),
    (a.ERROR = "error"),
    (a.SUCCESS = "success"),
    a);
let R = {
        entry: { BEG: 0, END: 180 },
        idle: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        stars: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        error: { BEG: 360, END: 540 },
        success: { BEG: 540, END: 778 },
    },
    b = Object.freeze({ WHITE: "#ebf0f7", PINK: "#fa6ef6" }),
    D = [
        { left: 29, top: 100, color: b.WHITE },
        { left: 245, top: 11, color: b.PINK },
        { left: 393, top: 22, color: b.WHITE },
        { left: 74, top: 30, color: b.PINK },
        { left: 188, top: 9, color: b.WHITE },
        { left: 379, top: 97, color: b.PINK },
    ],
    L = Object.freeze({
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
function w(e) {
    let { animate: t } = e,
        [n, r] = l.useState(0),
        i = (0, p.m)(
            D.length,
            D.map((e, i) => {
                let s = i > 0 ? L.DELAY_STAGGER * i + Math.random() * (L.DELAY_MAX - L.DELAY_MIN) + L.DELAY_MIN : 0,
                    a = Math.random() * (L.SIZE_MAX - L.SIZE_MIN) + L.SIZE_MIN;
                return {
                    from: {
                        scale: L.SCALE_INITIAL,
                        rotate: L.ROTATE_INITIAL,
                        top: e.top,
                        left: e.left,
                        width: a,
                        height: a,
                    },
                    to: async (e) => {
                        t
                            ? (await e({
                                  scale: L.SCALE_MIDDLE,
                                  rotate: L.ROTATE_MIDDLE,
                                  delay: s,
                                  config: { duration: L.DURATION_MIDDLE, easing: L.EASING_MIDDLE },
                              }),
                              await e({
                                  scale: L.SCALE_END,
                                  rotate: L.ROTATE_END,
                                  config: { duration: L.DURATION_END, easing: L.EASING_END },
                              }),
                              await e({ scale: L.SCALE_INITIAL, rotate: L.ROTATE_INITIAL, immediate: !0 }),
                              i === D.length - 1 && r(n + 1))
                            : await e({ scale: L.SCALE_INITIAL, rotate: L.ROTATE_INITIAL });
                    },
                };
            }),
        );
    return (0, o.jsx)(o.Fragment, {
        children: i.map((e, t) => {
            let n = D[t];
            return (0, o.jsx)(
                d.animated.svg,
                {
                    style: e,
                    className: h.Sw,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 12.14 12.24",
                    children: (0, o.jsx)("path", {
                        d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                        fill: n.color,
                    }),
                },
                t,
            );
        }),
    });
}
class M extends l.PureComponent {
    static Scenes = O;
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
            onSceneComplete: i,
            pauseWhileUnfocused: s,
        } = this.props;
        return (0, o.jsxs)("div", {
            className: c()(h.JL, e),
            children: [
                (0, o.jsx)(f.t, {
                    className: h.i_,
                    importData: this.importData,
                    nextScene: n ? "idle" : t,
                    sceneSegments: R,
                    onScenePlay: r,
                    onSceneComplete: i,
                    pauseWhileUnfocused: s,
                    pause: n,
                }),
                (0, o.jsx)(w, { animate: !n && "stars" === t }),
            ],
        });
    }
}
