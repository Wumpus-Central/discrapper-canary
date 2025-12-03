n.d(t, { Z: () => x }), n(539854);
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
    b = n(108427),
    E = n(706454),
    O = n(215427),
    v = n(820254),
    y = n(358085),
    I = n(998502),
    C = n(905656),
    S = n(981631),
    T = n(388032),
    N = n(744749);
function j(e, t, n) {
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
class P extends i.PureComponent {
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
                ? (l && (0, b.t)(),
                  l && null != this.videoRef && u.K.get(S.wli) && this._connectedSound.play(),
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
                    className: N.container,
                    "data-fade": n,
                    style: {
                        "--connecting-container-fade-duration": "".concat(200, "ms"),
                        "--connecting-content-fade-duration": "".concat(150, "ms"),
                    },
                    children: [
                        (0, r.jsxs)("div", {
                            className: N.content,
                            children: [
                                (0, r.jsx)(C.Z, {
                                    autoPlay: !0,
                                    loop: !e,
                                    setRef: this.setVideoRef,
                                    onReady: this.handleReady,
                                    className: a()(N.spinner, this.state.ready ? N.ready : ""),
                                }),
                                (0, r.jsxs)("div", {
                                    className: N.text,
                                    children: [
                                        null != t
                                            ? null
                                            : (0, r.jsx)("div", {
                                                  className: N.tipTitle,
                                                  children: T.intl.string(T.t.v0R1Lh),
                                              }),
                                        (0, r.jsx)("div", {
                                            className: null != t ? N.title : N.tip,
                                            children: i,
                                        }),
                                        (0, r.jsx)("div", {
                                            className: N.body,
                                            children: l,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: a()(N.problems, { [N.slideIn]: this.state.problems }),
                            children: [
                                (0, r.jsx)("div", {
                                    className: N.problemsText,
                                    children: T.intl.string(T.t.AG2zPM),
                                }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsxs)(d.Anchor, {
                                            className: N.twitterLink,
                                            href: S.yXt.TWITTER_SUPPORT,
                                            target: "_blank",
                                            children: [
                                                (0, r.jsx)(d.TAi, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: N.icon,
                                                }),
                                                T.intl.string(T.t.KlyTbj),
                                            ],
                                        }),
                                        (0, r.jsxs)(d.Anchor, {
                                            className: N.statusLink,
                                            href: S.yXt.STATUS,
                                            target: "_blank",
                                            children: [
                                                (0, r.jsx)(v.Z, { className: N.icon }),
                                                T.intl.string(T.t.AgXXyy),
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
            j(this, "videoRef", null),
            j(this, "_noProblemsTimeout", null),
            j(this, "_problemsTimeout", null),
            j(this, "_connectedSound", this.createSound()),
            j(
                this,
                "_loadingText",
                (function () {
                    let e = [
                        T.intl.string(T.t.Ex79K6),
                        T.intl.string(T.t["+v5zsT"]),
                        T.intl.string(T.t["RLx6+Y"]),
                        T.intl.string(T.t.Q1PZkN),
                        T.intl.string(T.t.x7sfVg),
                        T.intl.format(T.t.PHuQsQ, {
                            tabHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "tab",
                                        className: N.keybind,
                                    },
                                    t,
                                ),
                        }),
                        T.intl.string(T.t.UorX4T),
                        T.intl.string(T.t["il/GZt"]),
                        T.intl.string(T.t.HKBJvw),
                        T.intl.format(T.t.FVVp79, {
                            F6Hook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "f6",
                                        className: N.keybind,
                                    },
                                    t,
                                ),
                            tabHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "tab",
                                        className: N.keybind,
                                    },
                                    t,
                                ),
                        }),
                        T.intl.string(T.t["7Y1hFH"]),
                        T.intl.string(T.t.UcCW71),
                        T.intl.string(T.t.E5Ghfc),
                        T.intl.string(T.t.bANqo8),
                        T.intl.string(T.t.yOEVDr),
                        T.intl.string(T.t["u0Ra/G"]),
                        T.intl.string(T.t.un4cQ7),
                        T.intl.string(T.t["2cyYx1"]),
                        T.intl.string(T.t.KCmze1),
                        T.intl.string(T.t.I98MEE),
                        T.intl.format(T.t.c0YCIx, {}),
                        T.intl.string(T.t.z8AvIN),
                        T.intl.string(T.t.IjX3P1),
                        T.intl.string(T.t.lg3Ckc),
                        T.intl.string(T.t["4GaLhY"]),
                        T.intl.string(T.t.qHKbUw),
                        T.intl.string(T.t.mJxKDw),
                        T.intl.string(T.t.iiQBXF),
                        T.intl.string(T.t.YPD46Q),
                        T.intl.string(T.t.O8Bpga),
                        T.intl.string(T.t.xzFwfi),
                        T.intl.string(T.t["4G3fsX"]),
                        T.intl.string(T.t["/jPyKC"]),
                        T.intl.string(T.t["8x7D5c"]),
                        T.intl.string(T.t.G6Q8H3),
                        T.intl.string(T.t["9Cx+xL"]),
                        T.intl.string(T.t.WsZ8dW),
                        T.intl.string(T.t.btoe7M),
                        T.intl.string(T.t.E6Y0j7),
                        T.intl.string(T.t["7KZ81/"]),
                        T.intl.string(T.t.hm7OKu),
                        T.intl.string(T.t["H535i+"]),
                        T.intl.string(T.t["08WJUR"]),
                        T.intl.string(T.t.hhtfyi),
                        T.intl.string(T.t.on980U),
                        T.intl.string(T.t.AL6c01),
                        T.intl.string(T.t.iLTeF6),
                        T.intl.string(T.t.b3vSu7),
                        T.intl.string(T.t.f8ao58),
                        T.intl.format(T.t["1v1h8o"], { asterisks: "**" }),
                        T.intl.format(T.t.MUlAVW, {
                            quickSwitcherHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "mod+k",
                                        className: N.keybind,
                                    },
                                    t,
                                ),
                        }),
                        T.intl.format(T.t.aes5VI, {
                            markUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "alt+click",
                                        className: N.keybind,
                                    },
                                    t,
                                ),
                        }),
                        T.intl.format(T.t.md9Svv, {
                            markServerUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "shift+esc",
                                        className: N.keybind,
                                    },
                                    t,
                                ),
                        }),
                        T.intl.format(T.t["X0Tu+u"], {
                            navigateUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "shift+alt+up",
                                        className: N.keybind,
                                    },
                                    t,
                                ),
                            downHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "down",
                                        className: N.keybind,
                                    },
                                    t,
                                ),
                        }),
                        T.intl.format(T.t.AkoeIY, {
                            keyboardShortcutsHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "mod+/",
                                        className: N.keybind,
                                    },
                                    t,
                                ),
                        }),
                        T.intl.format(T.t.P9sfAH, {
                            messageNewlineHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "shift+return",
                                        className: N.keybind,
                                    },
                                    t,
                                ),
                        }),
                        T.intl.format(T.t["3Ox33f"], {
                            shiftHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "shift",
                                        className: N.keybind,
                                    },
                                    t,
                                ),
                        }),
                        T.intl.format(T.t.enCV6b, {
                            upHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: "up",
                                        className: N.keybind,
                                    },
                                    t,
                                ),
                        }),
                    ];
                    return (
                        E.default.locale.startsWith("en-") && e.push(T.intl.string(T.t.dQ9Wqk)),
                        e[o().random(e.length - 1)]
                    );
                })(),
            ),
            j(
                this,
                "_eventLoadingText",
                (function () {
                    let e = g.Z.getLoadingTips();
                    if (null != e && e.length > 0) return e[o().random(e.length - 1)];
                })(),
            ),
            j(this, "handleReady", () => {
                this.setState({ ready: !0 }),
                    (0, y.isDesktop)() &&
                        (I.ZP.send("UPDATED_QUOTES", ["Hold Tight \u2014 Loading Discord"]),
                        I.ZP.send("UPDATE_OPEN_ON_STARTUP"));
            }),
            j(this, "setVideoRef", (e) => {
                this.videoRef = e;
            }),
            j(this, "setProblemsTimeout", () => {
                null == this._problemsTimeout &&
                    (this._problemsTimeout = setTimeout(() => this.setState({ problems: !0 }), 10000));
            }),
            j(this, "clearProblemsTimeout", () => {
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
let x = c.ZP.connectStores([h.Z, O.Z, _.Z, f.Z], () => ({
    isTryingToConnect: h.Z.isTryingToConnect(),
    connected: h.Z.isConnected(),
    incident: O.Z.getIncident(),
    soundpack: _.Z.getSoundpack(),
    reducedMotion: f.Z.useReducedMotion,
}))((e) => {
    let { isTryingToConnect: t, connected: n, incident: i, soundpack: l, reducedMotion: a } = e;
    return t
        ? (0, r.jsx)(P, {
              reducedMotion: a,
              soundpack: l,
              connected: n,
              incident: i,
          })
        : null;
});
