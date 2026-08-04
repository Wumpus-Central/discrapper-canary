n.d(t, { yh: () => T, rF: () => h, V1: () => x, yC: () => R });
var a,
    r,
    i,
    s,
    o = n(477900),
    l = n(582128),
    _ = n(503698),
    E = n.n(_),
    c = n(534740),
    u = n(615300),
    d = n(544048),
    p = n(844222),
    m = n(384494),
    I = n(740807),
    A =
        (((a = A || {}).NORMAL = "normal"),
        (a.SPEED_START = "speed_start"),
        (a.SPEED_LOOP = "speed_loop"),
        (a.FINISH = "finish"),
        (a.IDLE = "idle"),
        a);
let S = {
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
            onSceneComplete: a,
            pause: r,
            pauseWhileUnfocused: i,
        } = this.props;
        return (0, o.jsx)(d.t, {
            className: E()(I.AI, e),
            importData: this.importDefault,
            nextScene: r ? "idle" : t,
            sceneSegments: S,
            onScenePlay: n,
            onSceneComplete: a,
            pauseWhileUnfocused: i,
            pause: r,
        });
    }
}
var N =
    (((r = N || {}).NORMAL = "normal"),
    (r.SPEED_START = "speed_start"),
    (r.SPEED_LOOP = "speed_loop"),
    (r.FINISH = "finish"),
    (r.IDLE = "idle"),
    r);
let O = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class h extends l.PureComponent {
    static Scenes = N;
    static getNextScene(e) {
        switch (e) {
            case h.Scenes.SPEED_START:
                return h.Scenes.SPEED_LOOP;
            case h.Scenes.FINISH:
                return h.Scenes.IDLE;
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
            onSceneComplete: a,
            pause: r,
            pauseWhileUnfocused: i,
        } = this.props;
        return (0, o.jsx)(d.t, {
            className: E()(I.AI, e),
            importData: this.importDefault,
            nextScene: r ? "idle" : t,
            sceneSegments: O,
            onScenePlay: n,
            onSceneComplete: a,
            pauseWhileUnfocused: i,
            pause: r,
        });
    }
}
var D =
    (((i = D || {}).IDLE_ENTRY = "idle_entry"),
    (i.IDLE_LOOP = "idle_loop"),
    (i.BOOST_START = "boost_start"),
    (i.BOOST_LOOP = "boost_loop"),
    (i.BOOST_END = "boost_end"),
    (i.VICTORY = "victory"),
    (i.ERROR = "error"),
    i);
let g = {
    idle_entry: { BEG: 0, END: 50 },
    idle_loop: { BEG: 50, END: 230, shouldForcePlayAfter: !0 },
    boost_start: { BEG: 230, END: 275 },
    boost_loop: { BEG: 275, END: 290 },
    boost_end: { BEG: 386, END: 455 },
    victory: { BEG: 470, END: 525 },
    error: { BEG: 290, END: 375 },
};
class f extends l.PureComponent {
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
            className: I.I5,
            children: [
                (0, o.jsx)(u.A.div, { className: e, style: this.getStyle(!1) }),
                (0, o.jsx)(u.A.div, { className: e, style: this.getStyle(!0) }),
            ],
        });
    }
}
let L = Object.freeze({
    IDLE_ENTRY: { toValue: 1, duration: 1500 },
    IDLE_LOOP: { toValue: 1, duration: 6e3, easing: u.A.Easing.linear },
    BOOST_START: { toValue: 0, duration: 2e3, delay: 500 },
    ERROR: { toValue: 1, duration: 1500, delay: 1e3 },
});
class R extends l.PureComponent {
    static Scenes = D;
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
        return n
            .e("69421")
            .then(n.t.bind(n, 548375, 19))
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
        this.animateEntry(L.IDLE_ENTRY);
    }
    animateError() {
        this.animateEntry(L.ERROR);
    }
    animateIdleLoop() {
        this.animateIdleLoopBackground(), this.animateIdleLoopForeground();
    }
    animateIdleLoopBackground = () => {
        this.didUnmount ||
            (this.backgroundAnimation.x.setValue(0),
            u.A.timing(this.backgroundAnimation.x, {
                toValue: L.IDLE_LOOP.toValue,
                duration: 1.2 * L.IDLE_LOOP.duration,
                easing: u.A.Easing.linear,
            }).start(this.animateIdleLoopBackground));
    };
    animateIdleLoopForeground = () => {
        this.didUnmount ||
            (this.foregroundAnimation.x.setValue(0),
            u.A.timing(this.foregroundAnimation.x, {
                toValue: L.IDLE_LOOP.toValue,
                duration: L.IDLE_LOOP.duration,
                easing: L.IDLE_LOOP.easing,
            }).start(this.animateIdleLoopForeground));
    };
    animateBoostStart() {
        u.A.parallel([
            u.A.timing(this.foregroundAnimation.y, {
                toValue: L.BOOST_START.toValue,
                duration: L.BOOST_START.duration,
                delay: L.BOOST_START.delay,
            }),
            u.A.timing(this.backgroundAnimation.y, {
                toValue: L.BOOST_START.toValue,
                duration: 1.2 * L.BOOST_START.duration,
                delay: L.BOOST_START.delay,
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
        let { className: e, nextScene: t, pause: n, onSceneComplete: a } = this.props;
        return (0, o.jsxs)("div", {
            className: E()(I.nv, e),
            children: [
                n
                    ? (0, o.jsxs)("div", {
                          className: I.I5,
                          children: [(0, o.jsx)("div", { className: I.RK }), (0, o.jsx)("div", { className: I.aM })],
                      })
                    : (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)(f, { className: I.RK, animation: this.backgroundAnimation }),
                              (0, o.jsx)(f, { className: I.aM, animation: this.foregroundAnimation }),
                          ],
                      }),
                (0, o.jsx)(d.t, {
                    className: I.AI,
                    importData: this.importData,
                    nextScene: n ? "idle_loop" : t,
                    sceneSegments: g,
                    onScenePlay: this.handleScenePlay,
                    onSceneComplete: a,
                    pauseWhileUnfocused: !1,
                    pause: n,
                }),
            ],
        });
    }
}
var y =
    (((s = y || {}).ENTRY = "entry"),
    (s.IDLE = "idle"),
    (s.STARS = "stars"),
    (s.ERROR = "error"),
    (s.SUCCESS = "success"),
    s);
let P = {
        entry: { BEG: 0, END: 180 },
        idle: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        stars: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        error: { BEG: 360, END: 540 },
        success: { BEG: 540, END: 778 },
    },
    w = Object.freeze({ WHITE: "#ebf0f7", PINK: "#fa6ef6" }),
    M = [
        { left: 29, top: 100, color: w.WHITE },
        { left: 245, top: 11, color: w.PINK },
        { left: 393, top: 22, color: w.WHITE },
        { left: 74, top: 30, color: w.PINK },
        { left: 188, top: 9, color: w.WHITE },
        { left: 379, top: 97, color: w.PINK },
    ],
    C = Object.freeze({
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
function B(e) {
    let { animate: t } = e,
        [n, a] = l.useState(0),
        r = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "respect-motion-settings",
                a = arguments.length > 3 ? arguments[3] : void 0,
                r = l.useContext(p.C).reducedMotion.enabled,
                i = t;
            "animate-always" !== n &&
                ("respect-motion-settings" !== n || r) &&
                (i = "function" == typeof t ? (e, n) => ({ ...t(e, n), ...m.W }) : t.map((e) => ({ ...e, ...m.W })));
            let s = "function" == typeof i,
                [o, _, E] = (0, c.useSprings)(e, i, a);
            return s || 4 == arguments.length ? [o, _, E] : o;
        })(
            M.length,
            M.map((e, r) => {
                let i = r > 0 ? C.DELAY_STAGGER * r + Math.random() * (C.DELAY_MAX - C.DELAY_MIN) + C.DELAY_MIN : 0,
                    s = Math.random() * (C.SIZE_MAX - C.SIZE_MIN) + C.SIZE_MIN;
                return {
                    from: {
                        scale: C.SCALE_INITIAL,
                        rotate: C.ROTATE_INITIAL,
                        top: e.top,
                        left: e.left,
                        width: s,
                        height: s,
                    },
                    to: async (e) => {
                        t
                            ? (await e({
                                  scale: C.SCALE_MIDDLE,
                                  rotate: C.ROTATE_MIDDLE,
                                  delay: i,
                                  config: { duration: C.DURATION_MIDDLE, easing: C.EASING_MIDDLE },
                              }),
                              await e({
                                  scale: C.SCALE_END,
                                  rotate: C.ROTATE_END,
                                  config: { duration: C.DURATION_END, easing: C.EASING_END },
                              }),
                              await e({ scale: C.SCALE_INITIAL, rotate: C.ROTATE_INITIAL, immediate: !0 }),
                              r === M.length - 1 && a(n + 1))
                            : await e({ scale: C.SCALE_INITIAL, rotate: C.ROTATE_INITIAL });
                    },
                };
            }),
        );
    return (0, o.jsx)(o.Fragment, {
        children: r.map((e, t) => {
            let n = M[t];
            return (0, o.jsx)(
                c.animated.svg,
                {
                    style: e,
                    className: I.Sw,
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
class x extends l.PureComponent {
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
            onScenePlay: a,
            onSceneComplete: r,
            pauseWhileUnfocused: i,
        } = this.props;
        return (0, o.jsxs)("div", {
            className: E()(I.JL, e),
            children: [
                (0, o.jsx)(d.t, {
                    className: I.i_,
                    importData: this.importData,
                    nextScene: n ? "idle" : t,
                    sceneSegments: P,
                    onScenePlay: a,
                    onSceneComplete: r,
                    pauseWhileUnfocused: i,
                    pause: n,
                }),
                (0, o.jsx)(B, { animate: !n && "stars" === t }),
            ],
        });
    }
}
