n.d(t, { Z: () => j }), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(442837),
    u = n(433517),
    d = n(481060),
    p = n(205355),
    h = n(607070),
    g = n(38618),
    f = n(197344),
    m = n(460181),
    b = n(474873),
    _ = n(706454),
    E = n(215427),
    O = n(820254),
    N = n(358085),
    v = n(998502),
    y = n(905656),
    I = n(981631),
    C = n(388032),
    S = n(79537);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class P extends i.PureComponent {
    createSound() {
        let { soundpack: e } = this.props,
            t = (0, m.uk)('discodo', e);
        return (t.volume = 1), t;
    }
    componentDidMount() {
        this.setProblemsTimeout();
    }
    componentDidUpdate(e, t) {
        let { ready: n, hide: r, problems: i } = this.state,
            { connected: l, soundpack: o } = this.props,
            a = l && n && !r && !i;
        e.soundpack !== o && (this._connectedSound = this.createSound()),
            e.connected !== l || a
                ? (l && null != this.videoRef && u.K.get(I.wli) && this._connectedSound.play(),
                  this.setState({
                      problems: !1,
                      hide: l
                  }))
                : t.hide !== r
                  ? (r ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({ shouldRender: !0 }), setTimeout(() => this.setState({ shouldRender: !r }), 200))
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
                (0, r.jsxs)('div', {
                    className: S.container,
                    'data-fade': n,
                    style: {
                        '--connecting-container-fade-duration': ''.concat(200, 'ms'),
                        '--connecting-content-fade-duration': ''.concat(150, 'ms')
                    },
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.content,
                            children: [
                                (0, r.jsx)(y.Z, {
                                    autoPlay: !0,
                                    loop: !e,
                                    setRef: this.setVideoRef,
                                    onReady: this.handleReady,
                                    className: o()(S.spinner, this.state.ready ? S.ready : '')
                                }),
                                (0, r.jsxs)('div', {
                                    className: S.text,
                                    children: [
                                        null != t
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: S.tipTitle,
                                                  children: C.NW.string(C.t.v0R1Li)
                                              }),
                                        (0, r.jsx)('div', {
                                            className: null != t ? S.title : S.tip,
                                            children: i
                                        }),
                                        (0, r.jsx)('div', {
                                            className: S.body,
                                            children: l
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: o()(S.problems, { [S.slideIn]: this.state.problems }),
                            children: [
                                (0, r.jsx)('div', {
                                    className: S.problemsText,
                                    children: C.NW.string(C.t.AG2zPD)
                                }),
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsxs)(d.eee, {
                                            className: S.twitterLink,
                                            href: I.yXt.TWITTER_SUPPORT,
                                            target: '_blank',
                                            children: [
                                                (0, r.jsx)(d.TAi, {
                                                    size: 'xs',
                                                    color: 'currentColor',
                                                    className: S.icon
                                                }),
                                                C.NW.string(C.t.KlyTbm)
                                            ]
                                        }),
                                        (0, r.jsxs)(d.eee, {
                                            className: S.statusLink,
                                            href: I.yXt.STATUS,
                                            target: '_blank',
                                            children: [(0, r.jsx)(O.Z, { className: S.icon }), C.NW.string(C.t.AgXXy8)]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            );
        }
    }
    constructor(e) {
        super(e),
            T(this, 'videoRef', null),
            T(this, '_noProblemsTimeout', null),
            T(this, '_problemsTimeout', null),
            T(this, '_connectedSound', this.createSound()),
            T(
                this,
                '_loadingText',
                (function () {
                    let e = [
                        C.NW.string(C.t.Ex79Ky),
                        C.NW.string(C.t['+v5zsb']),
                        C.NW.string(C.t['RLx6+f']),
                        C.NW.string(C.t.Q1PZkJ),
                        C.NW.string(C.t.x7sfVl),
                        C.NW.format(C.t.PHuQsb, {
                            tabHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'tab',
                                        className: S.keybind
                                    },
                                    t
                                )
                        }),
                        C.NW.string(C.t.UorX4e),
                        C.NW.string(C.t['il/GZm']),
                        C.NW.string(C.t.HKBJv7),
                        C.NW.format(C.t['FVVp7+'], {
                            F6Hook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'f6',
                                        className: S.keybind
                                    },
                                    t
                                ),
                            tabHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'tab',
                                        className: S.keybind
                                    },
                                    t
                                )
                        }),
                        C.NW.string(C.t['7Y1hFB']),
                        C.NW.string(C.t['UcCW7+']),
                        C.NW.string(C.t.E5GhfX),
                        C.NW.string(C.t.bANqo6),
                        C.NW.string(C.t.yOEVDg),
                        C.NW.string(C.t['u0Ra/P']),
                        C.NW.string(C.t.un4cQ0),
                        C.NW.string(C.t['2cyYx8']),
                        C.NW.string(C.t.KCmze3),
                        C.NW.string(C.t['C+hUc3']),
                        C.NW.string(C.t.I98MEB),
                        C.NW.format(C.t.c0YCIy, {}),
                        C.NW.string(C.t.z8AvIC),
                        C.NW.string(C.t.IjX3Pz),
                        C.NW.string(C.t.lg3CkZ),
                        C.NW.string(C.t['4GaLhY']),
                        C.NW.string(C.t.qHKbU1),
                        C.NW.string(C.t.mJxKDw),
                        C.NW.string(C.t.iiQBXF),
                        C.NW.string(C.t.YPD46e),
                        C.NW.string(C.t.O8BpgY),
                        C.NW.string(C.t.xzFwfn),
                        C.NW.string(C.t['4G3fsb']),
                        C.NW.string(C.t['/jPyKC']),
                        C.NW.string(C.t['8x7D5e']),
                        C.NW.string(C.t.G6Q8Hx),
                        C.NW.string(C.t['9Cx+xM']),
                        C.NW.string(C.t.WsZ8dX),
                        C.NW.string(C.t.btoe7O),
                        C.NW.string(C.t.E6Y0j4),
                        C.NW.string(C.t['7KZ819']),
                        C.NW.string(C.t.hm7OKi),
                        C.NW.string(C.t.H535i4),
                        C.NW.string(C.t['08WJUV']),
                        C.NW.string(C.t.hhtfys),
                        C.NW.string(C.t.on980d),
                        C.NW.string(C.t.AL6c09),
                        C.NW.string(C.t.iLTeFx),
                        C.NW.string(C.t.b3vSu7),
                        C.NW.string(C.t['f8ao5+']),
                        C.NW.format(C.t['1v1h8v'], { asterisks: '**' }),
                        C.NW.format(C.t.MUlAVV, {
                            quickSwitcherHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'mod+k',
                                        className: S.keybind
                                    },
                                    t
                                )
                        }),
                        C.NW.format(C.t.aes5VF, {
                            markUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'alt+click',
                                        className: S.keybind
                                    },
                                    t
                                )
                        }),
                        C.NW.format(C.t.md9Svr, {
                            markServerUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'shift+esc',
                                        className: S.keybind
                                    },
                                    t
                                )
                        }),
                        C.NW.format(C.t['X0Tu+v'], {
                            navigateUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'shift+alt+up',
                                        className: S.keybind
                                    },
                                    t
                                ),
                            downHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'down',
                                        className: S.keybind
                                    },
                                    t
                                )
                        }),
                        C.NW.format(C.t.AkoeIS, {
                            keyboardShortcutsHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'mod+/',
                                        className: S.keybind
                                    },
                                    t
                                )
                        }),
                        C.NW.format(C.t.P9sfAA, {
                            messageNewlineHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'shift+return',
                                        className: S.keybind
                                    },
                                    t
                                )
                        }),
                        C.NW.format(C.t['3Ox33d'], {
                            shiftHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'shift',
                                        className: S.keybind
                                    },
                                    t
                                )
                        }),
                        C.NW.format(C.t.enCV6e, {
                            upHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'up',
                                        className: S.keybind
                                    },
                                    t
                                )
                        })
                    ];
                    return _.default.locale.startsWith('en-') && e.push(C.NW.string(C.t.dQ9Wqq)), e[s().random(e.length - 1)];
                })()
            ),
            T(
                this,
                '_eventLoadingText',
                (function () {
                    let e = f.Z.getLoadingTips();
                    if (null != e && e.length > 0) return e[s().random(e.length - 1)];
                })()
            ),
            T(this, 'handleReady', () => {
                this.setState({ ready: !0 }), (0, N.isDesktop)() && (v.ZP.send('UPDATED_QUOTES', ['Hold Tight \u2014 Loading Discord']), v.ZP.send('UPDATE_OPEN_ON_STARTUP'));
            }),
            T(this, 'setVideoRef', (e) => {
                this.videoRef = e;
            }),
            T(this, 'setProblemsTimeout', () => {
                null == this._problemsTimeout && (this._problemsTimeout = setTimeout(() => this.setState({ problems: !0 }), 10000));
            }),
            T(this, 'clearProblemsTimeout', () => {
                clearTimeout(this._problemsTimeout), (this._problemsTimeout = null);
            });
        let { connected: t } = e;
        (this.state = {
            ready: t,
            hide: t,
            problems: !1,
            shouldRender: !t
        }),
            (this._connectedSound.volume = 1);
    }
}
let j = c.ZP.connectStores([g.Z, E.Z, b.Z, h.Z], () => ({
    isTryingToConnect: g.Z.isTryingToConnect(),
    connected: g.Z.isConnected(),
    incident: E.Z.getIncident(),
    soundpack: b.Z.getSoundpack(),
    reducedMotion: h.Z.useReducedMotion
}))((e) => {
    let { isTryingToConnect: t, connected: n, incident: i, soundpack: l, reducedMotion: o } = e;
    return t
        ? (0, r.jsx)(P, {
              reducedMotion: o,
              soundpack: l,
              connected: n,
              incident: i
          })
        : null;
});
