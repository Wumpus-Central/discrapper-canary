n.d(t, { Z: () => P }), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    u = n(433517),
    d = n(481060),
    p = n(205355),
    f = n(607070),
    h = n(38618),
    g = n(197344),
    m = n(460181),
    _ = n(474873),
    b = n(706454),
    E = n(215427),
    O = n(820254),
    y = n(358085),
    v = n(998502),
    I = n(905656),
    C = n(981631),
    S = n(388032),
    T = n(818312);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class j extends i.PureComponent {
    createSound() {
        let { soundpack: e } = this.props,
            t = (0, m.uk)("discodo", e);
        return (t.volume = 1), t;
    }
    componentDidMount() {
        this.setProblemsTimeout();
    }
    componentDidUpdate(e, t) {
        let { ready: n, hide: r, problems: i } = this.state,
            { connected: l, soundpack: a } = this.props,
            s = l && n && !r && !i;
        e.soundpack !== a && (this._connectedSound = this.createSound()),
            e.connected !== l || s
                ? (l && null != this.videoRef && u.K.get(C.wli) && this._connectedSound.play(),
                  this.setState({
                      problems: !1,
                      hide: l,
                  }))
                : t.hide !== r
                  ? (r ? this.clearProblemsTimeout() : this.setProblemsTimeout(),
                    this.setState({ shouldRender: !0 }),
                    setTimeout(() => this.setState({ shouldRender: !r }), 200))
                  : t.problems !== i && i && p.Z.checkIncidents();
    }
    componentWillUnmount() {
        this.clearProblemsTimeout();
    }
    render() {
        let { connected: e, incident: t } = this.props,
            { hide: n } = this.state;
        if (!this.state.shouldRender) return null;
        {
            let i = this._loadingText,
                l = null;
            return (
                null != this._eventLoadingText && (i = this._eventLoadingText),
                null != t && ((i = t.name), (l = t.incident_updates[0].body)),
                (0, r.jsxs)("div", {
                    className: T.container,
                    "data-fade": n,
                    style: {
                        "--connecting-container-fade-duration": "".concat(200, "ms"),
                        "--connecting-content-fade-duration": "".concat(150, "ms"),
                    },
                    children: [
                        (0, r.jsxs)("div", {
                            className: T.content,
                            children: [
                                (0, r.jsx)(I.Z, {
                                    autoPlay: !0,
                                    loop: !e,
                                    setRef: this.setVideoRef,
                                    onReady: this.handleReady,
                                    className: a()(T.spinner, this.state.ready ? T.ready : ""),
                                }),
                                (0, r.jsxs)("div", {
                                    className: T.text,
                                    children: [
                                        null != t
                                            ? null
                                            : (0, r.jsx)("div", {
                                                  className: T.tipTitle,
                                                  children: S.intl.string(S.t.v0R1Lh),
                                              }),
                                        (0, r.jsx)("div", {
                                            className: null != t ? T.title : T.tip,
                                            children: i,
                                        }),
                                        (0, r.jsx)("div", {
                                            className: T.body,
                                            children: l,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: a()(T.problems, { [T.slideIn]: this.state.problems }),
                            children: [
                                (0, r.jsx)("div", {
                                    className: T.problemsText,
                                    children: S.intl.string(S.t.AG2zPM),
                                }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsxs)(d.Anchor, {
                                            className: T.twitterLink,
                                            href: C.yXt.TWITTER_SUPPORT,
                                            target: "_blank",
                                            children: [
                                                (0, r.jsx)(d.TAi, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: T.icon,
                                                }),
                                                S.intl.string(S.t.KlyTbj),
                                            ],
                                        }),
                                        (0, r.jsxs)(d.Anchor, {
                                            className: T.statusLink,
                                            href: C.yXt.STATUS,
                                            target: "_blank",
                                            children: [
                                                (0, r.jsx)(O.Z, { className: T.icon }),
                                                S.intl.string(S.t.AgXXyy),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                })
            );
        }
    }
    constructor(e) {
        super(e),
            N(this, "videoRef", null),
            N(this, "_noProblemsTimeout", null),
            N(this, "_problemsTimeout", null),
            N(this, "_connectedSound", this.createSound()),
            N(
                this,
                "_loadingText",
                (function () {
                    let e = [
                        S.intl.string(S.t.Ex79K6),
                        S.intl.string(S.t["+v5zsT"]),
                        S.intl.string(S.t["RLx6+Y"]),
                        S.intl.string(S.t.Q1PZkN),
                        S.intl.string(S.t.x7sfVg),
                        S.intl.format(S.t.PHuQsQ, {
                            tabHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "tab",
                                        className: T.keybind,
                                    },
                                    t,
                                ),
                        }),
                        S.intl.string(S.t.UorX4T),
                        S.intl.string(S.t["il/GZt"]),
                        S.intl.string(S.t.HKBJvw),
                        S.intl.format(S.t.FVVp79, {
                            F6Hook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "f6",
                                        className: T.keybind,
                                    },
                                    t,
                                ),
                            tabHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "tab",
                                        className: T.keybind,
                                    },
                                    t,
                                ),
                        }),
                        S.intl.string(S.t["7Y1hFH"]),
                        S.intl.string(S.t.UcCW71),
                        S.intl.string(S.t.E5Ghfc),
                        S.intl.string(S.t.bANqo8),
                        S.intl.string(S.t.yOEVDr),
                        S.intl.string(S.t["u0Ra/G"]),
                        S.intl.string(S.t.un4cQ7),
                        S.intl.string(S.t["2cyYx1"]),
                        S.intl.string(S.t.KCmze1),
                        S.intl.string(S.t.I98MEE),
                        S.intl.format(S.t.c0YCIx, {}),
                        S.intl.string(S.t.z8AvIN),
                        S.intl.string(S.t.IjX3P1),
                        S.intl.string(S.t.lg3Ckc),
                        S.intl.string(S.t["4GaLhY"]),
                        S.intl.string(S.t.qHKbUw),
                        S.intl.string(S.t.mJxKDw),
                        S.intl.string(S.t.iiQBXF),
                        S.intl.string(S.t.YPD46Q),
                        S.intl.string(S.t.O8Bpga),
                        S.intl.string(S.t.xzFwfi),
                        S.intl.string(S.t["4G3fsX"]),
                        S.intl.string(S.t["/jPyKC"]),
                        S.intl.string(S.t["8x7D5c"]),
                        S.intl.string(S.t.G6Q8H3),
                        S.intl.string(S.t["9Cx+xL"]),
                        S.intl.string(S.t.WsZ8dW),
                        S.intl.string(S.t.btoe7M),
                        S.intl.string(S.t.E6Y0j7),
                        S.intl.string(S.t["7KZ81/"]),
                        S.intl.string(S.t.hm7OKu),
                        S.intl.string(S.t["H535i+"]),
                        S.intl.string(S.t["08WJUR"]),
                        S.intl.string(S.t.hhtfyi),
                        S.intl.string(S.t.on980U),
                        S.intl.string(S.t.AL6c01),
                        S.intl.string(S.t.iLTeF6),
                        S.intl.string(S.t.b3vSu7),
                        S.intl.string(S.t.f8ao58),
                        S.intl.format(S.t["1v1h8o"], { asterisks: "**" }),
                        S.intl.format(S.t.MUlAVW, {
                            quickSwitcherHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "mod+k",
                                        className: T.keybind,
                                    },
                                    t,
                                ),
                        }),
                        S.intl.format(S.t.aes5VI, {
                            markUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "alt+click",
                                        className: T.keybind,
                                    },
                                    t,
                                ),
                        }),
                        S.intl.format(S.t.md9Svv, {
                            markServerUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "shift+esc",
                                        className: T.keybind,
                                    },
                                    t,
                                ),
                        }),
                        S.intl.format(S.t["X0Tu+u"], {
                            navigateUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "shift+alt+up",
                                        className: T.keybind,
                                    },
                                    t,
                                ),
                            downHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "down",
                                        className: T.keybind,
                                    },
                                    t,
                                ),
                        }),
                        S.intl.format(S.t.AkoeIY, {
                            keyboardShortcutsHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "mod+/",
                                        className: T.keybind,
                                    },
                                    t,
                                ),
                        }),
                        S.intl.format(S.t.P9sfAH, {
                            messageNewlineHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "shift+return",
                                        className: T.keybind,
                                    },
                                    t,
                                ),
                        }),
                        S.intl.format(S.t["3Ox33f"], {
                            shiftHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "shift",
                                        className: T.keybind,
                                    },
                                    t,
                                ),
                        }),
                        S.intl.format(S.t.enCV6b, {
                            upHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "up",
                                        className: T.keybind,
                                    },
                                    t,
                                ),
                        }),
                    ];
                    return (
                        b.default.locale.startsWith("en-") && e.push(S.intl.string(S.t.dQ9Wqk)),
                        e[o().random(e.length - 1)]
                    );
                })(),
            ),
            N(
                this,
                "_eventLoadingText",
                (function () {
                    let e = g.Z.getLoadingTips();
                    if (null != e && e.length > 0) return e[o().random(e.length - 1)];
                })(),
            ),
            N(this, "handleReady", () => {
                this.setState({ ready: !0 }),
                    (0, y.isDesktop)() &&
                        (v.ZP.send("UPDATED_QUOTES", ["Hold Tight \u2014 Loading Discord"]),
                        v.ZP.send("UPDATE_OPEN_ON_STARTUP"));
            }),
            N(this, "setVideoRef", (e) => {
                this.videoRef = e;
            }),
            N(this, "setProblemsTimeout", () => {
                null == this._problemsTimeout &&
                    (this._problemsTimeout = setTimeout(() => this.setState({ problems: !0 }), 10000));
            }),
            N(this, "clearProblemsTimeout", () => {
                clearTimeout(this._problemsTimeout), (this._problemsTimeout = null);
            });
        let { connected: t } = e;
        (this.state = {
            ready: t,
            hide: t,
            problems: !1,
            shouldRender: !t,
        }),
            (this._connectedSound.volume = 1);
    }
}
let P = c.ZP.connectStores([h.Z, E.Z, _.Z, f.Z], () => ({
    isTryingToConnect: h.Z.isTryingToConnect(),
    connected: h.Z.isConnected(),
    incident: E.Z.getIncident(),
    soundpack: _.Z.getSoundpack(),
    reducedMotion: f.Z.useReducedMotion,
}))((e) => {
    let { isTryingToConnect: t, connected: n, incident: i, soundpack: l, reducedMotion: a } = e;
    return t
        ? (0, r.jsx)(j, {
              reducedMotion: a,
              soundpack: l,
              connected: n,
              incident: i,
          })
        : null;
});
