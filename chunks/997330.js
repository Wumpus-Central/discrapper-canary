s.d(t, { yh: () => N, rF: () => T, V1: () => M, yC: () => j });
var n,
    a,
    r,
    i,
    l = s(477900),
    o = s(582128),
    c = s(503698),
    u = s.n(c),
    d = s(941143),
    m = s(615300),
    E = s(544048),
    p = s(844222),
    _ = s(384494),
    L = s(837508),
    A =
        (((n = A || {}).NORMAL = "normal"),
        (n.SPEED_START = "speed_start"),
        (n.SPEED_LOOP = "speed_loop"),
        (n.FINISH = "finish"),
        (n.IDLE = "idle"),
        n);
let h = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class N extends o.PureComponent {
    static Scenes = A;
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
        return s
            .e("678503")
            .then(s.t.bind(s, 635489, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    render() {
        let {
            className: e,
            nextScene: t,
            onScenePlay: s,
            onSceneComplete: n,
            pause: a,
            pauseWhileUnfocused: r,
        } = this.props;
        return (0, l.jsx)(E.t, {
            className: u()(L.AI, e),
            importData: this.importDefault,
            nextScene: a ? "idle" : t,
            sceneSegments: h,
            onScenePlay: s,
            onSceneComplete: n,
            pauseWhileUnfocused: r,
            pause: a,
        });
    }
}
var S =
    (((a = S || {}).NORMAL = "normal"),
    (a.SPEED_START = "speed_start"),
    (a.SPEED_LOOP = "speed_loop"),
    (a.FINISH = "finish"),
    (a.IDLE = "idle"),
    a);
let I = {
    normal: { BEG: 0, END: 600, shouldForcePlayAfter: !0 },
    speed_start: { BEG: 601, END: 636 },
    speed_loop: { BEG: 637, END: 668 },
    finish: { BEG: 669, END: 870 },
    idle: { BEG: 871, END: 878 },
};
class T extends o.PureComponent {
    static Scenes = S;
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
        return s
            .e("119898")
            .then(s.t.bind(s, 262546, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    render() {
        let {
            className: e,
            nextScene: t,
            onScenePlay: s,
            onSceneComplete: n,
            pause: a,
            pauseWhileUnfocused: r,
        } = this.props;
        return (0, l.jsx)(E.t, {
            className: u()(L.AI, e),
            importData: this.importDefault,
            nextScene: a ? "idle" : t,
            sceneSegments: I,
            onScenePlay: s,
            onSceneComplete: n,
            pauseWhileUnfocused: r,
            pause: a,
        });
    }
}
var C =
    (((r = C || {}).IDLE_ENTRY = "idle_entry"),
    (r.IDLE_LOOP = "idle_loop"),
    (r.BOOST_START = "boost_start"),
    (r.BOOST_LOOP = "boost_loop"),
    (r.BOOST_END = "boost_end"),
    (r.VICTORY = "victory"),
    (r.ERROR = "error"),
    r);
let f = {
    idle_entry: { BEG: 0, END: 50 },
    idle_loop: { BEG: 50, END: 230, shouldForcePlayAfter: !0 },
    boost_start: { BEG: 230, END: 275 },
    boost_loop: { BEG: 275, END: 290 },
    boost_end: { BEG: 386, END: 455 },
    victory: { BEG: 470, END: 525 },
    error: { BEG: 290, END: 375 },
};
class x extends o.PureComponent {
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
            className: L.I5,
            children: [
                (0, l.jsx)(m.A.div, { className: e, style: this.getStyle(!1) }),
                (0, l.jsx)(m.A.div, { className: e, style: this.getStyle(!0) }),
            ],
        });
    }
}
let g = Object.freeze({
    IDLE_ENTRY: { toValue: 1, duration: 1500 },
    IDLE_LOOP: { toValue: 1, duration: 6e3, easing: m.A.Easing.linear },
    BOOST_START: { toValue: 0, duration: 2e3, delay: 500 },
    ERROR: { toValue: 1, duration: 1500, delay: 1e3 },
});
class j extends o.PureComponent {
    static Scenes = C;
    static getNextScene(e) {
        switch (e) {
            case j.Scenes.IDLE_ENTRY:
                return j.Scenes.IDLE_LOOP;
            case j.Scenes.BOOST_START:
                return j.Scenes.BOOST_LOOP;
            case j.Scenes.BOOST_END:
                return j.Scenes.VICTORY;
            case j.Scenes.VICTORY:
                return j.Scenes.IDLE_ENTRY;
            case j.Scenes.ERROR:
                return j.Scenes.IDLE_LOOP;
            default:
                return e;
        }
    }
    backgroundAnimation = new m.A.ValueXY({ x: 0, y: 0 });
    foregroundAnimation = new m.A.ValueXY({ x: 0, y: 0 });
    didUnmount = !1;
    componentWillUnmount() {
        this.didUnmount = !0;
    }
    importData() {
        return s
            .e("869421")
            .then(s.t.bind(s, 548375, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    animateEntry(e) {
        m.A.parallel([
            m.A.timing(this.foregroundAnimation.y, { toValue: e.toValue, duration: e.duration, delay: e.delay || 0 }),
            m.A.timing(this.backgroundAnimation.y, {
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
        (this.animateIdleLoopBackground(), this.animateIdleLoopForeground());
    }
    animateIdleLoopBackground = () => {
        this.didUnmount ||
            (this.backgroundAnimation.x.setValue(0),
            m.A.timing(this.backgroundAnimation.x, {
                toValue: g.IDLE_LOOP.toValue,
                duration: 1.2 * g.IDLE_LOOP.duration,
                easing: m.A.Easing.linear,
            }).start(this.animateIdleLoopBackground));
    };
    animateIdleLoopForeground = () => {
        this.didUnmount ||
            (this.foregroundAnimation.x.setValue(0),
            m.A.timing(this.foregroundAnimation.x, {
                toValue: g.IDLE_LOOP.toValue,
                duration: g.IDLE_LOOP.duration,
                easing: g.IDLE_LOOP.easing,
            }).start(this.animateIdleLoopForeground));
    };
    animateBoostStart() {
        m.A.parallel([
            m.A.timing(this.foregroundAnimation.y, {
                toValue: g.BOOST_START.toValue,
                duration: g.BOOST_START.duration,
                delay: g.BOOST_START.delay,
            }),
            m.A.timing(this.backgroundAnimation.y, {
                toValue: g.BOOST_START.toValue,
                duration: 1.2 * g.BOOST_START.duration,
                delay: g.BOOST_START.delay,
            }),
        ]).start();
    }
    handleScenePlay = (e) => {
        switch (e) {
            case "idle_entry":
                (this.animateIdleEntry(), this.animateIdleLoop());
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
        let { className: e, nextScene: t, pause: s, onSceneComplete: n } = this.props;
        return (0, l.jsxs)("div", {
            className: u()(L.nv, e),
            children: [
                s
                    ? (0, l.jsxs)("div", {
                          className: L.I5,
                          children: [(0, l.jsx)("div", { className: L.RK }), (0, l.jsx)("div", { className: L.aM })],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(x, { className: L.RK, animation: this.backgroundAnimation }),
                              (0, l.jsx)(x, { className: L.aM, animation: this.foregroundAnimation }),
                          ],
                      }),
                (0, l.jsx)(E.t, {
                    className: L.AI,
                    importData: this.importData,
                    nextScene: s ? "idle_loop" : t,
                    sceneSegments: f,
                    onScenePlay: this.handleScenePlay,
                    onSceneComplete: n,
                    pauseWhileUnfocused: !1,
                    pause: s,
                }),
            ],
        });
    }
}
var y =
    (((i = y || {}).ENTRY = "entry"),
    (i.IDLE = "idle"),
    (i.STARS = "stars"),
    (i.ERROR = "error"),
    (i.SUCCESS = "success"),
    i);
let R = {
        entry: { BEG: 0, END: 180 },
        idle: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        stars: { BEG: 180, END: 360, shouldForcePlayAfter: !0 },
        error: { BEG: 360, END: 540 },
        success: { BEG: 540, END: 778 },
    },
    O = Object.freeze({ WHITE: "#ebf0f7", PINK: "#fa6ef6" }),
    D = [
        { left: 29, top: 100, color: O.WHITE },
        { left: 245, top: 11, color: O.PINK },
        { left: 393, top: 22, color: O.WHITE },
        { left: 74, top: 30, color: O.PINK },
        { left: 188, top: 9, color: O.WHITE },
        { left: 379, top: 97, color: O.PINK },
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
        EASING_MIDDLE: m.A.Easing.bezier(0.3, 0.01, 0, 0.99),
        EASING_END: m.A.Easing.bezier(0, -0.01, 0.99, 0),
    });
function v(e) {
    let { animate: t } = e,
        [s, n] = o.useState(0),
        a = (function (e, t) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "respect-motion-settings",
                n = arguments.length > 3 ? arguments[3] : void 0,
                a = o.useContext(p.C).reducedMotion.enabled,
                r = t;
            "animate-always" !== s &&
                ("respect-motion-settings" !== s || a) &&
                (r = "function" == typeof t ? (e, s) => ({ ...t(e, s), ..._.W }) : t.map((e) => ({ ...e, ..._.W })));
            let i = "function" == typeof r,
                [l, c, u] = (0, d.useSprings)(e, r, n);
            return i || 4 == arguments.length ? [l, c, u] : l;
        })(
            D.length,
            D.map((e, a) => {
                let r = a > 0 ? P.DELAY_STAGGER * a + Math.random() * (P.DELAY_MAX - P.DELAY_MIN) + P.DELAY_MIN : 0,
                    i = Math.random() * (P.SIZE_MAX - P.SIZE_MIN) + P.SIZE_MIN;
                return {
                    from: {
                        scale: P.SCALE_INITIAL,
                        rotate: P.ROTATE_INITIAL,
                        top: e.top,
                        left: e.left,
                        width: i,
                        height: i,
                    },
                    to: async (e) => {
                        t
                            ? (await e({
                                  scale: P.SCALE_MIDDLE,
                                  rotate: P.ROTATE_MIDDLE,
                                  delay: r,
                                  config: { duration: P.DURATION_MIDDLE, easing: P.EASING_MIDDLE },
                              }),
                              await e({
                                  scale: P.SCALE_END,
                                  rotate: P.ROTATE_END,
                                  config: { duration: P.DURATION_END, easing: P.EASING_END },
                              }),
                              await e({ scale: P.SCALE_INITIAL, rotate: P.ROTATE_INITIAL, immediate: !0 }),
                              a === D.length - 1 && n(s + 1))
                            : await e({ scale: P.SCALE_INITIAL, rotate: P.ROTATE_INITIAL });
                    },
                };
            }),
        );
    return (0, l.jsx)(l.Fragment, {
        children: a.map((e, t) => {
            let s = D[t];
            return (0, l.jsx)(
                d.animated.svg,
                {
                    style: e,
                    className: L.Sw,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 12.14 12.24",
                    children: (0, l.jsx)("path", {
                        d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                        fill: s.color,
                    }),
                },
                t,
            );
        }),
    });
}
class M extends o.PureComponent {
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
        return s
            .e("945870")
            .then(s.t.bind(s, 738503, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            });
    }
    render() {
        let {
            className: e,
            nextScene: t,
            pause: s,
            onScenePlay: n,
            onSceneComplete: a,
            pauseWhileUnfocused: r,
        } = this.props;
        return (0, l.jsxs)("div", {
            className: u()(L.JL, e),
            children: [
                (0, l.jsx)(E.t, {
                    className: L.i_,
                    importData: this.importData,
                    nextScene: s ? "idle" : t,
                    sceneSegments: R,
                    onScenePlay: n,
                    onSceneComplete: a,
                    pauseWhileUnfocused: r,
                    pause: s,
                }),
                (0, l.jsx)(v, { animate: !s && "stars" === t }),
            ],
        });
    }
}
