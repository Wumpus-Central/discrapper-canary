"use strict";
n.d(t, { yh: () => A, rF: () => S, V1: () => M, yC: () => R });
var i,
    r,
    s,
    a,
    o = n(627968),
    l = n(64700),
    u = n(503698),
    d = n.n(u),
    c = n(580929),
    _ = n(615300),
    h = n(544048),
    f = n(384494),
    E = n(844222),
    p = n(526399),
    m =
        (((i = m || {}).NORMAL = "normal"),
        (i.SPEED_START = "speed_start"),
        (i.SPEED_LOOP = "speed_loop"),
        (i.FINISH = "finish"),
        (i.IDLE = "idle"),
        i);
let g = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class A extends l.PureComponent {
    static Scenes = m;
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
            onSceneComplete: i,
            pause: r,
            pauseWhileUnfocused: s,
        } = this.props;
        return (0, o.jsx)(h.t, {
            className: d()(p.AI, e),
            importData: this.importDefault,
            nextScene: r ? "idle" : t,
            sceneSegments: g,
            onScenePlay: n,
            onSceneComplete: i,
            pauseWhileUnfocused: s,
            pause: r,
        });
    }
}
var I =
    (((r = I || {}).NORMAL = "normal"),
    (r.SPEED_START = "speed_start"),
    (r.SPEED_LOOP = "speed_loop"),
    (r.FINISH = "finish"),
    (r.IDLE = "idle"),
    r);
let T = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class S extends l.PureComponent {
    static Scenes = I;
    static getNextScene(e) {
        switch (e) {
            case S.Scenes.SPEED_START:
                return S.Scenes.SPEED_LOOP;
            case S.Scenes.FINISH:
                return S.Scenes.IDLE;
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
            onSceneComplete: i,
            pause: r,
            pauseWhileUnfocused: s,
        } = this.props;
        return (0, o.jsx)(h.t, {
            className: d()(p.AI, e),
            importData: this.importDefault,
            nextScene: r ? "idle" : t,
            sceneSegments: T,
            onScenePlay: n,
            onSceneComplete: i,
            pauseWhileUnfocused: s,
            pause: r,
        });
    }
}
var N =
    (((s = N || {}).IDLE_ENTRY = "idle_entry"),
    (s.IDLE_LOOP = "idle_loop"),
    (s.BOOST_START = "boost_start"),
    (s.BOOST_LOOP = "boost_loop"),
    (s.BOOST_END = "boost_end"),
    (s.VICTORY = "victory"),
    (s.ERROR = "error"),
    s);
let C = {
    idle_entry: { BEG: 0, END: 50 },
    idle_loop: { BEG: 50, END: 230, shouldForcePlayAfter: !0 },
    boost_start: { BEG: 230, END: 275 },
    boost_loop: { BEG: 275, END: 290 },
    boost_end: { BEG: 386, END: 455 },
    victory: { BEG: 470, END: 525 },
    error: { BEG: 290, END: 375 },
};
class y extends l.PureComponent {
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
            className: p.I5,
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
class R extends l.PureComponent {
    static Scenes = N;
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
        let { className: e, nextScene: t, pause: n, onSceneComplete: i } = this.props;
        return (0, o.jsxs)("div", {
            className: d()(p.nv, e),
            children: [
                n
                    ? (0, o.jsxs)("div", {
                          className: p.I5,
                          children: [(0, o.jsx)("div", { className: p.RK }), (0, o.jsx)("div", { className: p.aM })],
                      })
                    : (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)(y, { className: p.RK, animation: this.backgroundAnimation }),
                              (0, o.jsx)(y, { className: p.aM, animation: this.foregroundAnimation }),
                          ],
                      }),
                (0, o.jsx)(h.t, {
                    className: p.AI,
                    importData: this.importData,
                    nextScene: n ? "idle_loop" : t,
                    sceneSegments: C,
                    onScenePlay: this.handleScenePlay,
                    onSceneComplete: i,
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
let b = {
        entry: { BEG: 0, END: 180 },
        idle: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        stars: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        error: { BEG: 360, END: 540 },
        success: { BEG: 540, END: 778 },
    },
    L = Object.freeze({ WHITE: "#ebf0f7", PINK: "#fa6ef6" }),
    D = [
        { left: 29, top: 100, color: L.WHITE },
        { left: 245, top: 11, color: L.PINK },
        { left: 393, top: 22, color: L.WHITE },
        { left: 74, top: 30, color: L.PINK },
        { left: 188, top: 9, color: L.WHITE },
        { left: 379, top: 97, color: L.PINK },
    ],
    P = Object.freeze({
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
        [n, i] = l.useState(0),
        r = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "respect-motion-settings",
                i = arguments.length > 3 ? arguments[3] : void 0,
                r = l.useContext(E.C).reducedMotion.enabled,
                s = t;
            "animate-always" !== n &&
                ("respect-motion-settings" !== n || r) &&
                (s = "function" == typeof t ? (e, n) => ({ ...t(e, n), ...f.W }) : t.map((e) => ({ ...e, ...f.W })));
            let a = "function" == typeof s,
                [o, u, d] = (0, c.useSprings)(e, s, i);
            return a || 4 == arguments.length ? [o, u, d] : o;
        })(
            D.length,
            D.map((e, r) => {
                let s = r > 0 ? P.DELAY_STAGGER * r + Math.random() * (P.DELAY_MAX - P.DELAY_MIN) + P.DELAY_MIN : 0,
                    a = Math.random() * (P.SIZE_MAX - P.SIZE_MIN) + P.SIZE_MIN;
                return {
                    from: {
                        scale: P.SCALE_INITIAL,
                        rotate: P.ROTATE_INITIAL,
                        top: e.top,
                        left: e.left,
                        width: a,
                        height: a,
                    },
                    to: async (e) => {
                        t
                            ? (await e({
                                  scale: P.SCALE_MIDDLE,
                                  rotate: P.ROTATE_MIDDLE,
                                  delay: s,
                                  config: { duration: P.DURATION_MIDDLE, easing: P.EASING_MIDDLE },
                              }),
                              await e({
                                  scale: P.SCALE_END,
                                  rotate: P.ROTATE_END,
                                  config: { duration: P.DURATION_END, easing: P.EASING_END },
                              }),
                              await e({ scale: P.SCALE_INITIAL, rotate: P.ROTATE_INITIAL, immediate: !0 }),
                              r === D.length - 1 && i(n + 1))
                            : await e({ scale: P.SCALE_INITIAL, rotate: P.ROTATE_INITIAL });
                    },
                };
            }),
        );
    return (0, o.jsx)(o.Fragment, {
        children: r.map((e, t) => {
            let n = D[t];
            return (0, o.jsx)(
                c.animated.svg,
                {
                    style: e,
                    className: p.Sw,
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
            onScenePlay: i,
            onSceneComplete: r,
            pauseWhileUnfocused: s,
        } = this.props;
        return (0, o.jsxs)("div", {
            className: d()(p.JL, e),
            children: [
                (0, o.jsx)(h.t, {
                    className: p.i_,
                    importData: this.importData,
                    nextScene: n ? "idle" : t,
                    sceneSegments: b,
                    onScenePlay: i,
                    onSceneComplete: r,
                    pauseWhileUnfocused: s,
                    pause: n,
                }),
                (0, o.jsx)(w, { animate: !n && "stars" === t }),
            ],
        });
    }
}
