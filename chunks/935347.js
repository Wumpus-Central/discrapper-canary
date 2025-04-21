n.d(t, { Z: () => j }), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(433517),
    d = n(481060),
    p = n(205355),
    h = n(607070),
    f = n(38618),
    g = n(197344),
    m = n(460181),
    b = n(474873),
    _ = n(706454),
    E = n(215427),
    O = n(820254),
    y = n(358085),
    I = n(998502),
    v = n(905656),
    C = n(981631),
    S = n(388032),
    N = n(64648);
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
            { connected: l, soundpack: a } = this.props,
            o = l && n && !r && !i;
        e.soundpack !== a && (this._connectedSound = this.createSound()),
            e.connected !== l || o
                ? (l && null != this.videoRef && u.K.get(C.wli) && this._connectedSound.play(),
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
                    className: N.container,
                    'data-fade': n,
                    style: {
                        '--connecting-container-fade-duration': ''.concat(200, 'ms'),
                        '--connecting-content-fade-duration': ''.concat(150, 'ms')
                    },
                    children: [
                        (0, r.jsxs)('div', {
                            className: N.content,
                            children: [
                                (0, r.jsx)(v.Z, {
                                    autoPlay: !0,
                                    loop: !e,
                                    setRef: this.setVideoRef,
                                    onReady: this.handleReady,
                                    className: a()(N.spinner, this.state.ready ? N.ready : '')
                                }),
                                (0, r.jsxs)('div', {
                                    className: N.text,
                                    children: [
                                        null != t
                                            ? null
                                            : (0, r.jsx)('div', {
                                                  className: N.tipTitle,
                                                  children: S.intl.string(S.t.v0R1Li)
                                              }),
                                        (0, r.jsx)('div', {
                                            className: null != t ? N.title : N.tip,
                                            children: i
                                        }),
                                        (0, r.jsx)('div', {
                                            className: N.body,
                                            children: l
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: a()(N.problems, { [N.slideIn]: this.state.problems }),
                            children: [
                                (0, r.jsx)('div', {
                                    className: N.problemsText,
                                    children: S.intl.string(S.t.AG2zPD)
                                }),
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsxs)(d.eee, {
                                            className: N.twitterLink,
                                            href: C.yXt.TWITTER_SUPPORT,
                                            target: '_blank',
                                            children: [
                                                (0, r.jsx)(d.TAi, {
                                                    size: 'xs',
                                                    color: 'currentColor',
                                                    className: N.icon
                                                }),
                                                S.intl.string(S.t.KlyTbm)
                                            ]
                                        }),
                                        (0, r.jsxs)(d.eee, {
                                            className: N.statusLink,
                                            href: C.yXt.STATUS,
                                            target: '_blank',
                                            children: [(0, r.jsx)(O.Z, { className: N.icon }), S.intl.string(S.t.AgXXy8)]
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
                        S.intl.string(S.t.Ex79Ky),
                        S.intl.string(S.t['+v5zsb']),
                        S.intl.string(S.t['RLx6+f']),
                        S.intl.string(S.t.Q1PZkJ),
                        S.intl.string(S.t.x7sfVl),
                        S.intl.format(S.t.PHuQsb, {
                            tabHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'tab',
                                        className: N.keybind
                                    },
                                    t
                                )
                        }),
                        S.intl.string(S.t.UorX4e),
                        S.intl.string(S.t['il/GZm']),
                        S.intl.string(S.t.HKBJv7),
                        S.intl.format(S.t['FVVp7+'], {
                            F6Hook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'f6',
                                        className: N.keybind
                                    },
                                    t
                                ),
                            tabHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'tab',
                                        className: N.keybind
                                    },
                                    t
                                )
                        }),
                        S.intl.string(S.t['7Y1hFB']),
                        S.intl.string(S.t['UcCW7+']),
                        S.intl.string(S.t.E5GhfX),
                        S.intl.string(S.t.bANqo6),
                        S.intl.string(S.t.yOEVDg),
                        S.intl.string(S.t['u0Ra/P']),
                        S.intl.string(S.t.un4cQ0),
                        S.intl.string(S.t['2cyYx8']),
                        S.intl.string(S.t.KCmze3),
                        S.intl.string(S.t['C+hUc3']),
                        S.intl.string(S.t.I98MEB),
                        S.intl.format(S.t.c0YCIy, {}),
                        S.intl.string(S.t.z8AvIC),
                        S.intl.string(S.t.IjX3Pz),
                        S.intl.string(S.t.lg3CkZ),
                        S.intl.string(S.t['4GaLhY']),
                        S.intl.string(S.t.qHKbU1),
                        S.intl.string(S.t.mJxKDw),
                        S.intl.string(S.t.iiQBXF),
                        S.intl.string(S.t.YPD46e),
                        S.intl.string(S.t.O8BpgY),
                        S.intl.string(S.t.xzFwfn),
                        S.intl.string(S.t['4G3fsb']),
                        S.intl.string(S.t['/jPyKC']),
                        S.intl.string(S.t['8x7D5e']),
                        S.intl.string(S.t.G6Q8Hx),
                        S.intl.string(S.t['9Cx+xM']),
                        S.intl.string(S.t.WsZ8dX),
                        S.intl.string(S.t.btoe7O),
                        S.intl.string(S.t.E6Y0j4),
                        S.intl.string(S.t['7KZ819']),
                        S.intl.string(S.t.hm7OKi),
                        S.intl.string(S.t.H535i4),
                        S.intl.string(S.t['08WJUV']),
                        S.intl.string(S.t.hhtfys),
                        S.intl.string(S.t.on980d),
                        S.intl.string(S.t.AL6c09),
                        S.intl.string(S.t.iLTeFx),
                        S.intl.string(S.t.b3vSu7),
                        S.intl.string(S.t['f8ao5+']),
                        S.intl.format(S.t['1v1h8v'], { asterisks: '**' }),
                        S.intl.format(S.t.MUlAVV, {
                            quickSwitcherHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'mod+k',
                                        className: N.keybind
                                    },
                                    t
                                )
                        }),
                        S.intl.format(S.t.aes5VF, {
                            markUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'alt+click',
                                        className: N.keybind
                                    },
                                    t
                                )
                        }),
                        S.intl.format(S.t.md9Svr, {
                            markServerUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'shift+esc',
                                        className: N.keybind
                                    },
                                    t
                                )
                        }),
                        S.intl.format(S.t['X0Tu+v'], {
                            navigateUnreadHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'shift+alt+up',
                                        className: N.keybind
                                    },
                                    t
                                ),
                            downHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'down',
                                        className: N.keybind
                                    },
                                    t
                                )
                        }),
                        S.intl.format(S.t.AkoeIS, {
                            keyboardShortcutsHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'mod+/',
                                        className: N.keybind
                                    },
                                    t
                                )
                        }),
                        S.intl.format(S.t.P9sfAA, {
                            messageNewlineHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'shift+return',
                                        className: N.keybind
                                    },
                                    t
                                )
                        }),
                        S.intl.format(S.t['3Ox33d'], {
                            shiftHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'shift',
                                        className: N.keybind
                                    },
                                    t
                                )
                        }),
                        S.intl.format(S.t.enCV6e, {
                            upHook: (e, t) =>
                                (0, r.jsx)(
                                    d.M2$,
                                    {
                                        shortcut: 'up',
                                        className: N.keybind
                                    },
                                    t
                                )
                        })
                    ];
                    return _.default.locale.startsWith('en-') && e.push(S.intl.string(S.t.dQ9Wqq)), e[s().random(e.length - 1)];
                })()
            ),
            T(
                this,
                '_eventLoadingText',
                (function () {
                    let e = g.Z.getLoadingTips();
                    if (null != e && e.length > 0) return e[s().random(e.length - 1)];
                })()
            ),
            T(this, 'handleReady', () => {
                this.setState({ ready: !0 }), (0, y.isDesktop)() && (I.ZP.send('UPDATED_QUOTES', ['Hold Tight \u2014 Loading Discord']), I.ZP.send('UPDATE_OPEN_ON_STARTUP'));
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
let j = c.ZP.connectStores([f.Z, E.Z, b.Z, h.Z], () => ({
    isTryingToConnect: f.Z.isTryingToConnect(),
    connected: f.Z.isConnected(),
    incident: E.Z.getIncident(),
    soundpack: b.Z.getSoundpack(),
    reducedMotion: h.Z.useReducedMotion
}))((e) => {
    let { isTryingToConnect: t, connected: n, incident: i, soundpack: l, reducedMotion: a } = e;
    return t
        ? (0, r.jsx)(P, {
              reducedMotion: a,
              soundpack: l,
              connected: n,
              incident: i
          })
        : null;
});
