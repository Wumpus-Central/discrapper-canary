n.d(t, { V1: () => B, rF: () => O, yC: () => g, yh: () => S });
var a,
    r,
    s,
    i,
    o = n(627968),
    l = n(64700),
    _ = n(503698),
    E = n.n(_),
    c = n(523939),
    u = n(615300),
    d = n(544048),
    p = n(982147),
    m = n(23679),
    I =
        (((a = I || {}).NORMAL = "normal"),
        (a.SPEED_START = "speed_start"),
        (a.SPEED_LOOP = "speed_loop"),
        (a.FINISH = "finish"),
        (a.IDLE = "idle"),
        a);
let A = {
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
            pauseWhileUnfocused: s,
        } = this.props;
        return (0, o.jsx)(d.t, {
            className: E()(m.AI, e),
            importData: this.importDefault,
            nextScene: r ? "idle" : t,
            sceneSegments: A,
            onScenePlay: n,
            onSceneComplete: a,
            pauseWhileUnfocused: s,
            pause: r,
        });
    }
}
var T =
    (((r = T || {}).NORMAL = "normal"),
    (r.SPEED_START = "speed_start"),
    (r.SPEED_LOOP = "speed_loop"),
    (r.FINISH = "finish"),
    (r.IDLE = "idle"),
    r);
let N = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class O extends l.PureComponent {
    static Scenes = T;
    static getNextScene(e) {
        switch (e) {
            case O.Scenes.SPEED_START:
                return O.Scenes.SPEED_LOOP;
            case O.Scenes.FINISH:
                return O.Scenes.IDLE;
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
            pauseWhileUnfocused: s,
        } = this.props;
        return (0, o.jsx)(d.t, {
            className: E()(m.AI, e),
            importData: this.importDefault,
            nextScene: r ? "idle" : t,
            sceneSegments: N,
            onScenePlay: n,
            onSceneComplete: a,
            pauseWhileUnfocused: s,
            pause: r,
        });
    }
}
var h =
    (((s = h || {}).IDLE_ENTRY = "idle_entry"),
    (s.IDLE_LOOP = "idle_loop"),
    (s.BOOST_START = "boost_start"),
    (s.BOOST_LOOP = "boost_loop"),
    (s.BOOST_END = "boost_end"),
    (s.VICTORY = "victory"),
    (s.ERROR = "error"),
    s);
let D = {
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
            className: m.I5,
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
class g extends l.PureComponent {
    static Scenes = h;
    static getNextScene(e) {
        switch (e) {
            case g.Scenes.IDLE_ENTRY:
                return g.Scenes.IDLE_LOOP;
            case g.Scenes.BOOST_START:
                return g.Scenes.BOOST_LOOP;
            case g.Scenes.BOOST_END:
                return g.Scenes.VICTORY;
            case g.Scenes.VICTORY:
                return g.Scenes.IDLE_ENTRY;
            case g.Scenes.ERROR:
                return g.Scenes.IDLE_LOOP;
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
            className: E()(m.nv, e),
            children: [
                n
                    ? (0, o.jsxs)("div", {
                          className: m.I5,
                          children: [(0, o.jsx)("div", { className: m.RK }), (0, o.jsx)("div", { className: m.aM })],
                      })
                    : (0, o.jsxs)(o.Fragment, {
                          children: [
                              (0, o.jsx)(f, { className: m.RK, animation: this.backgroundAnimation }),
                              (0, o.jsx)(f, { className: m.aM, animation: this.foregroundAnimation }),
                          ],
                      }),
                (0, o.jsx)(d.t, {
                    className: m.AI,
                    importData: this.importData,
                    nextScene: n ? "idle_loop" : t,
                    sceneSegments: D,
                    onScenePlay: this.handleScenePlay,
                    onSceneComplete: a,
                    pauseWhileUnfocused: !1,
                    pause: n,
                }),
            ],
        });
    }
}
var R =
    (((i = R || {}).ENTRY = "entry"),
    (i.IDLE = "idle"),
    (i.STARS = "stars"),
    (i.ERROR = "error"),
    (i.SUCCESS = "success"),
    i);
let y = {
        entry: { BEG: 0, END: 180 },
        idle: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        stars: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        error: { BEG: 360, END: 540 },
        success: { BEG: 540, END: 778 },
    },
    P = Object.freeze({ WHITE: "#ebf0f7", PINK: "#fa6ef6" }),
    w = [
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
        EASING_MIDDLE: u.A.Easing.bezier(0.3, 0.01, 0, 0.99),
        EASING_END: u.A.Easing.bezier(0, -0.01, 0.99, 0),
    });
function C(e) {
    let { animate: t } = e,
        [n, a] = l.useState(0),
        r = (0, p.m)(
            w.length,
            w.map((e, r) => {
                let s = r > 0 ? M.DELAY_STAGGER * r + Math.random() * (M.DELAY_MAX - M.DELAY_MIN) + M.DELAY_MIN : 0,
                    i = Math.random() * (M.SIZE_MAX - M.SIZE_MIN) + M.SIZE_MIN;
                return {
                    from: {
                        scale: M.SCALE_INITIAL,
                        rotate: M.ROTATE_INITIAL,
                        top: e.top,
                        left: e.left,
                        width: i,
                        height: i,
                    },
                    to: async (e) => {
                        t
                            ? (await e({
                                  scale: M.SCALE_MIDDLE,
                                  rotate: M.ROTATE_MIDDLE,
                                  delay: s,
                                  config: { duration: M.DURATION_MIDDLE, easing: M.EASING_MIDDLE },
                              }),
                              await e({
                                  scale: M.SCALE_END,
                                  rotate: M.ROTATE_END,
                                  config: { duration: M.DURATION_END, easing: M.EASING_END },
                              }),
                              await e({ scale: M.SCALE_INITIAL, rotate: M.ROTATE_INITIAL, immediate: !0 }),
                              r === w.length - 1 && a(n + 1))
                            : await e({ scale: M.SCALE_INITIAL, rotate: M.ROTATE_INITIAL });
                    },
                };
            }),
        );
    return (0, o.jsx)(o.Fragment, {
        children: r.map((e, t) => {
            let n = w[t];
            return (0, o.jsx)(
                c.animated.svg,
                {
                    style: e,
                    className: m.Sw,
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
class B extends l.PureComponent {
    static Scenes = R;
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
            pauseWhileUnfocused: s,
        } = this.props;
        return (0, o.jsxs)("div", {
            className: E()(m.JL, e),
            children: [
                (0, o.jsx)(d.t, {
                    className: m.i_,
                    importData: this.importData,
                    nextScene: n ? "idle" : t,
                    sceneSegments: y,
                    onScenePlay: a,
                    onSceneComplete: r,
                    pauseWhileUnfocused: s,
                    pause: n,
                }),
                (0, o.jsx)(C, { animate: !n && "stars" === t }),
            ],
        });
    }
}
