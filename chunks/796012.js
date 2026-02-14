"use strict";
n.d(t, { V1: () => D, rF: () => g, yC: () => S, yh: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(522160),
    l = n(615300),
    u = n(397927),
    c = n(531726),
    d = (function (e) {
        return (
            (e.NORMAL = "normal"),
            (e.SPEED_START = "speed_start"),
            (e.SPEED_LOOP = "speed_loop"),
            (e.FINISH = "finish"),
            (e.IDLE = "idle"),
            e
        );
    })(d || {});
let _ = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class f extends i.PureComponent {
    static Scenes = d;
    static getNextScene(e) {
        switch (e) {
            case f.Scenes.SPEED_START:
                return f.Scenes.SPEED_LOOP;
            case f.Scenes.FINISH:
                return f.Scenes.IDLE;
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
            pause: a,
            pauseWhileUnfocused: o,
        } = this.props;
        return (0, r.jsx)(u.tvC, {
            className: s()(c.AI, e),
            importData: this.importDefault,
            nextScene: a ? "idle" : t,
            sceneSegments: _,
            onScenePlay: n,
            onSceneComplete: i,
            pauseWhileUnfocused: o,
            pause: a,
        });
    }
}
var h = (function (e) {
    return (
        (e.NORMAL = "normal"),
        (e.SPEED_START = "speed_start"),
        (e.SPEED_LOOP = "speed_loop"),
        (e.FINISH = "finish"),
        (e.IDLE = "idle"),
        e
    );
})(h || {});
let p = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class g extends i.PureComponent {
    static Scenes = h;
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
            pause: a,
            pauseWhileUnfocused: o,
        } = this.props;
        return (0, r.jsx)(u.tvC, {
            className: s()(c.AI, e),
            importData: this.importDefault,
            nextScene: a ? "idle" : t,
            sceneSegments: p,
            onScenePlay: n,
            onSceneComplete: i,
            pauseWhileUnfocused: o,
            pause: a,
        });
    }
}
var E = (function (e) {
    return (
        (e.IDLE_ENTRY = "idle_entry"),
        (e.IDLE_LOOP = "idle_loop"),
        (e.BOOST_START = "boost_start"),
        (e.BOOST_LOOP = "boost_loop"),
        (e.BOOST_END = "boost_end"),
        (e.VICTORY = "victory"),
        (e.ERROR = "error"),
        e
    );
})(E || {});
let A = {
    idle_entry: { BEG: 0, END: 50 },
    idle_loop: { BEG: 50, END: 230, shouldForcePlayAfter: !0 },
    boost_start: { BEG: 230, END: 275 },
    boost_loop: { BEG: 275, END: 290 },
    boost_end: { BEG: 386, END: 455 },
    victory: { BEG: 470, END: 525 },
    error: { BEG: 290, END: 375 },
};
class I extends i.PureComponent {
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
        return (0, r.jsxs)("div", {
            className: c.I5,
            children: [
                (0, r.jsx)(l.A.div, { className: e, style: this.getStyle(!1) }),
                (0, r.jsx)(l.A.div, { className: e, style: this.getStyle(!0) }),
            ],
        });
    }
}
let T = Object.freeze({
        IDLE_ENTRY: { toValue: 1, duration: 1500 },
        IDLE_LOOP: { toValue: 1, duration: 6e3, easing: l.A.Easing.linear },
        BOOST_START: { toValue: 0, duration: 2e3, delay: 500 },
        ERROR: { toValue: 1, duration: 1500, delay: 1e3 },
    }),
    y = 1.2;
class S extends i.PureComponent {
    static Scenes = E;
    static getNextScene(e) {
        switch (e) {
            case S.Scenes.IDLE_ENTRY:
                return S.Scenes.IDLE_LOOP;
            case S.Scenes.BOOST_START:
                return S.Scenes.BOOST_LOOP;
            case S.Scenes.BOOST_END:
                return S.Scenes.VICTORY;
            case S.Scenes.VICTORY:
                return S.Scenes.IDLE_ENTRY;
            case S.Scenes.ERROR:
                return S.Scenes.IDLE_LOOP;
            default:
                return e;
        }
    }
    backgroundAnimation = new l.A.ValueXY({ x: 0, y: 0 });
    foregroundAnimation = new l.A.ValueXY({ x: 0, y: 0 });
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
        l.A.parallel([
            l.A.timing(this.foregroundAnimation.y, { toValue: e.toValue, duration: e.duration, delay: e.delay || 0 }),
            l.A.timing(this.backgroundAnimation.y, {
                toValue: e.toValue,
                duration: e.duration * y,
                delay: e.delay || 0,
            }),
        ]).start();
    }
    animateIdleEntry() {
        this.animateEntry(T.IDLE_ENTRY);
    }
    animateError() {
        this.animateEntry(T.ERROR);
    }
    animateIdleLoop() {
        this.animateIdleLoopBackground(), this.animateIdleLoopForeground();
    }
    animateIdleLoopBackground = () => {
        this.didUnmount ||
            (this.backgroundAnimation.x.setValue(0),
            l.A.timing(this.backgroundAnimation.x, {
                toValue: T.IDLE_LOOP.toValue,
                duration: T.IDLE_LOOP.duration * y,
                easing: l.A.Easing.linear,
            }).start(this.animateIdleLoopBackground));
    };
    animateIdleLoopForeground = () => {
        this.didUnmount ||
            (this.foregroundAnimation.x.setValue(0),
            l.A.timing(this.foregroundAnimation.x, {
                toValue: T.IDLE_LOOP.toValue,
                duration: T.IDLE_LOOP.duration,
                easing: T.IDLE_LOOP.easing,
            }).start(this.animateIdleLoopForeground));
    };
    animateBoostStart() {
        l.A.parallel([
            l.A.timing(this.foregroundAnimation.y, {
                toValue: T.BOOST_START.toValue,
                duration: T.BOOST_START.duration,
                delay: T.BOOST_START.delay,
            }),
            l.A.timing(this.backgroundAnimation.y, {
                toValue: T.BOOST_START.toValue,
                duration: T.BOOST_START.duration * y,
                delay: T.BOOST_START.delay,
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
        return (0, r.jsxs)("div", {
            className: s()(c.nv, e),
            children: [
                n
                    ? (0, r.jsxs)("div", {
                          className: c.I5,
                          children: [(0, r.jsx)("div", { className: c.RK }), (0, r.jsx)("div", { className: c.aM })],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(I, { className: c.RK, animation: this.backgroundAnimation }),
                              (0, r.jsx)(I, { className: c.aM, animation: this.foregroundAnimation }),
                          ],
                      }),
                (0, r.jsx)(u.tvC, {
                    className: c.AI,
                    importData: this.importData,
                    nextScene: n ? "idle_loop" : t,
                    sceneSegments: A,
                    onScenePlay: this.handleScenePlay,
                    onSceneComplete: i,
                    pauseWhileUnfocused: !1,
                    pause: n,
                }),
            ],
        });
    }
}
var v = (function (e) {
    return (e.ENTRY = "entry"), (e.IDLE = "idle"), (e.STARS = "stars"), (e.ERROR = "error"), (e.SUCCESS = "success"), e;
})(v || {});
let C = {
        entry: { BEG: 0, END: 180 },
        idle: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        stars: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        error: { BEG: 360, END: 540 },
        success: { BEG: 540, END: 778 },
    },
    b = Object.freeze({ WHITE: "#ebf0f7", PINK: "#fa6ef6" }),
    N = [
        { left: 29, top: 100, color: b.WHITE },
        { left: 245, top: 11, color: b.PINK },
        { left: 393, top: 22, color: b.WHITE },
        { left: 74, top: 30, color: b.PINK },
        { left: 188, top: 9, color: b.WHITE },
        { left: 379, top: 97, color: b.PINK },
    ],
    R = Object.freeze({
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
        EASING_MIDDLE: l.A.Easing.bezier(0.3, 0.01, 0, 0.99),
        EASING_END: l.A.Easing.bezier(0, -0.01, 0.99, 0),
    });
function O(e) {
    let { animate: t } = e,
        [n, a] = i.useState(0),
        s = (0, u.mX6)(
            N.length,
            N.map((e, r) => {
                let i = r > 0 ? R.DELAY_STAGGER * r + Math.random() * (R.DELAY_MAX - R.DELAY_MIN) + R.DELAY_MIN : 0,
                    s = Math.random() * (R.SIZE_MAX - R.SIZE_MIN) + R.SIZE_MIN;
                return {
                    from: {
                        scale: R.SCALE_INITIAL,
                        rotate: R.ROTATE_INITIAL,
                        top: e.top,
                        left: e.left,
                        width: s,
                        height: s,
                    },
                    to: async (e) => {
                        t
                            ? (await e({
                                  scale: R.SCALE_MIDDLE,
                                  rotate: R.ROTATE_MIDDLE,
                                  delay: i,
                                  config: { duration: R.DURATION_MIDDLE, easing: R.EASING_MIDDLE },
                              }),
                              await e({
                                  scale: R.SCALE_END,
                                  rotate: R.ROTATE_END,
                                  config: { duration: R.DURATION_END, easing: R.EASING_END },
                              }),
                              await e({ scale: R.SCALE_INITIAL, rotate: R.ROTATE_INITIAL, immediate: !0 }),
                              r === N.length - 1 && a(n + 1))
                            : await e({ scale: R.SCALE_INITIAL, rotate: R.ROTATE_INITIAL });
                    },
                };
            }),
        );
    return (0, r.jsx)(r.Fragment, {
        children: s.map((e, t) => {
            let n = N[t];
            return (0, r.jsx)(
                o.animated.svg,
                {
                    style: e,
                    className: c.Sw,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 12.14 12.24",
                    children: (0, r.jsx)("path", {
                        d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                        fill: n.color,
                    }),
                },
                t,
            );
        }),
    });
}
class D extends i.PureComponent {
    static Scenes = v;
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
            onSceneComplete: a,
            pauseWhileUnfocused: o,
        } = this.props;
        return (0, r.jsxs)("div", {
            className: s()(c.JL, e),
            children: [
                (0, r.jsx)(u.tvC, {
                    className: c.i_,
                    importData: this.importData,
                    nextScene: n ? "idle" : t,
                    sceneSegments: C,
                    onScenePlay: i,
                    onSceneComplete: a,
                    pauseWhileUnfocused: o,
                    pause: n,
                }),
                (0, r.jsx)(O, { animate: !n && "stars" === t }),
            ],
        });
    }
}
