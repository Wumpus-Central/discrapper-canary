n.d(t, { Z: () => P }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(433517),
    d = n(481060),
    p = n(205355),
    f = n(607070),
    h = n(38618),
    g = n(197344),
    m = n(460181),
    b = n(474873),
    _ = n(706454),
    O = n(215427),
    E = n(820254),
    y = n(358085),
    v = n(998502),
    I = n(905656),
    S = n(981631),
    C = n(388032),
    T = n(744749);
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
            o = l && n && !r && !i;
        e.soundpack !== a && (this._connectedSound = this.createSound()),
            e.connected !== l || o
                ? (l && null != this.videoRef && u.K.get(S.wli) && this._connectedSound.play(),
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
                                                  children: C.intl.string(C.t.v0R1Li),
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
                                    children: C.intl.string(C.t.AG2zPD),
                                }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsxs)(d.eee, {
                                            className: T.twitterLink,
                                            href: S.yXt.TWITTER_SUPPORT,
                                            target: "_blank",
                                            children: [
                                                (0, r.jsx)(d.TAi, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: T.icon,
                                                }),
                                                C.intl.string(C.t.KlyTbm),
                                            ],
                                        }),
                                        (0, r.jsxs)(d.eee, {
                                            className: T.statusLink,
                                            href: S.yXt.STATUS,
                                            target: "_blank",
                                            children: [
                                                (0, r.jsx)(E.Z, { className: T.icon }),
                                                C.intl.string(C.t.AgXXy8),
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
                        C.intl.string(C.t.Ex79Ky),
                        C.intl.string(C.t["+v5zsb"]),
                        C.intl.string(C.t["RLx6+f"]),
                        C.intl.string(C.t.Q1PZkJ),
                        C.intl.string(C.t.x7sfVl),
                        C.intl.format(C.t.PHuQsb, {
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
                        C.intl.string(C.t.UorX4e),
                        C.intl.string(C.t["il/GZm"]),
                        C.intl.string(C.t.HKBJv7),
                        C.intl.format(C.t["FVVp7+"], {
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
                        C.intl.string(C.t["7Y1hFB"]),
                        C.intl.string(C.t["UcCW7+"]),
                        C.intl.string(C.t.E5GhfX),
                        C.intl.string(C.t.bANqo6),
                        C.intl.string(C.t.yOEVDg),
                        C.intl.string(C.t["u0Ra/P"]),
                        C.intl.string(C.t.un4cQ0),
                        C.intl.string(C.t["2cyYx8"]),
                        C.intl.string(C.t.KCmze3),
                        C.intl.string(C.t.I98MEB),
                        C.intl.format(C.t.c0YCIy, {}),
                        C.intl.string(C.t.z8AvIC),
                        C.intl.string(C.t.IjX3Pz),
                        C.intl.string(C.t.lg3CkZ),
                        C.intl.string(C.t["4GaLhY"]),
                        C.intl.string(C.t.qHKbU1),
                        C.intl.string(C.t.mJxKDw),
                        C.intl.string(C.t.iiQBXF),
                        C.intl.string(C.t.YPD46e),
                        C.intl.string(C.t.O8BpgY),
                        C.intl.string(C.t.xzFwfn),
                        C.intl.string(C.t["4G3fsb"]),
                        C.intl.string(C.t["/jPyKC"]),
                        C.intl.string(C.t["8x7D5e"]),
                        C.intl.string(C.t.G6Q8Hx),
                        C.intl.string(C.t["9Cx+xM"]),
                        C.intl.string(C.t.WsZ8dX),
                        C.intl.string(C.t.btoe7O),
                        C.intl.string(C.t.E6Y0j4),
                        C.intl.string(C.t["7KZ819"]),
                        C.intl.string(C.t.hm7OKi),
                        C.intl.string(C.t.H535i4),
                        C.intl.string(C.t["08WJUV"]),
                        C.intl.string(C.t.hhtfys),
                        C.intl.string(C.t.on980d),
                        C.intl.string(C.t.AL6c09),
                        C.intl.string(C.t.iLTeFx),
                        C.intl.string(C.t.b3vSu7),
                        C.intl.string(C.t["f8ao5+"]),
                        C.intl.format(C.t["1v1h8v"], { asterisks: "**" }),
                        C.intl.format(C.t.MUlAVV, {
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
                        C.intl.format(C.t.aes5VF, {
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
                        C.intl.format(C.t.md9Svr, {
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
                        C.intl.format(C.t["X0Tu+v"], {
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
                        C.intl.format(C.t.AkoeIS, {
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
                        C.intl.format(C.t.P9sfAA, {
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
                        C.intl.format(C.t["3Ox33d"], {
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
                        C.intl.format(C.t.enCV6e, {
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
                        _.default.locale.startsWith("en-") && e.push(C.intl.string(C.t.dQ9Wqq)),
                        e[s().random(e.length - 1)]
                    );
                })(),
            ),
            N(
                this,
                "_eventLoadingText",
                (function () {
                    let e = g.Z.getLoadingTips();
                    if (null != e && e.length > 0) return e[s().random(e.length - 1)];
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
let P = c.ZP.connectStores([h.Z, O.Z, b.Z, f.Z], () => ({
    isTryingToConnect: h.Z.isTryingToConnect(),
    connected: h.Z.isConnected(),
    incident: O.Z.getIncident(),
    soundpack: b.Z.getSoundpack(),
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
