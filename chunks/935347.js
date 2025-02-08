n.d(t, { Z: () => L }), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(433517),
    u = n(481060),
    h = n(205355),
    m = n(607070),
    p = n(38618),
    g = n(197344),
    _ = n(460181),
    f = n(474873),
    E = n(706454),
    I = n(215427),
    C = n(820254),
    N = n(358085),
    v = n(998502),
    T = n(905656),
    S = n(981631),
    Z = n(388032),
    A = n(38179);
function x(e, t, n) {
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
class b extends l.PureComponent {
    createSound() {
        let { soundpack: e } = this.props,
            t = (0, _.uk)('discodo', e);
        return (t.volume = 1), t;
    }
    componentDidMount() {
        this.setProblemsTimeout();
    }
    componentDidUpdate(e, t) {
        let { ready: n, hide: i, problems: l } = this.state,
            { connected: r, soundpack: a } = this.props,
            s = r && n && !i && !l;
        e.soundpack !== a && (this._connectedSound = this.createSound()),
            e.connected !== r || s
                ? (r && null != this.videoRef && d.K.get(S.wli) && this._connectedSound.play(),
                  this.setState({
                      problems: !1,
                      hide: r
                  }))
                : t.hide !== i
                  ? (i ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({ shouldRender: !0 }), setTimeout(() => this.setState({ shouldRender: !i }), 200))
                  : t.problems !== l && l && h.Z.checkIncidents();
    }
    componentWillUnmount() {
        this.clearProblemsTimeout();
    }
    render() {
        let { connected: e, incident: t } = this.props,
            { hide: n } = this.state;
        if (!this.state.shouldRender) return null;
        {
            let l = this._loadingText,
                r = null;
            return (
                null != this._eventLoadingText && (l = this._eventLoadingText),
                null != t && ((l = t.name), (r = t.incident_updates[0].body)),
                (0, i.jsxs)('div', {
                    className: A.container,
                    'data-fade': n,
                    style: {
                        '--connecting-container-fade-duration': ''.concat(200, 'ms'),
                        '--connecting-content-fade-duration': ''.concat(150, 'ms')
                    },
                    children: [
                        (0, i.jsxs)('div', {
                            className: A.content,
                            children: [
                                (0, i.jsx)(T.Z, {
                                    autoPlay: !0,
                                    loop: !e,
                                    setRef: this.setVideoRef,
                                    onReady: this.handleReady,
                                    className: a()(A.spinner, this.state.ready ? A.ready : '')
                                }),
                                (0, i.jsxs)('div', {
                                    className: A.text,
                                    children: [
                                        null != t
                                            ? null
                                            : (0, i.jsx)('div', {
                                                  className: A.tipTitle,
                                                  children: Z.intl.string(Z.t.v0R1Li)
                                              }),
                                        (0, i.jsx)('div', {
                                            className: null != t ? A.title : A.tip,
                                            children: l
                                        }),
                                        (0, i.jsx)('div', {
                                            className: A.body,
                                            children: r
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: a()(A.problems, { [A.slideIn]: this.state.problems }),
                            children: [
                                (0, i.jsx)('div', {
                                    className: A.problemsText,
                                    children: Z.intl.string(Z.t.AG2zPD)
                                }),
                                (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsxs)(u.eee, {
                                            className: A.twitterLink,
                                            href: S.yXt.TWITTER_SUPPORT,
                                            target: '_blank',
                                            children: [
                                                (0, i.jsx)(u.TAi, {
                                                    size: 'xs',
                                                    color: 'currentColor',
                                                    className: A.icon
                                                }),
                                                Z.intl.string(Z.t.KlyTbm)
                                            ]
                                        }),
                                        (0, i.jsxs)(u.eee, {
                                            className: A.statusLink,
                                            href: S.yXt.STATUS,
                                            target: '_blank',
                                            children: [(0, i.jsx)(C.Z, { className: A.icon }), Z.intl.string(Z.t.AgXXy8)]
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
            x(this, 'videoRef', null),
            x(this, '_noProblemsTimeout', null),
            x(this, '_problemsTimeout', null),
            x(this, '_connectedSound', this.createSound()),
            x(
                this,
                '_loadingText',
                (function () {
                    let e = [
                        Z.intl.string(Z.t.Ex79Ky),
                        Z.intl.string(Z.t['+v5zsb']),
                        Z.intl.string(Z.t['RLx6+f']),
                        Z.intl.string(Z.t.Q1PZkJ),
                        Z.intl.string(Z.t.x7sfVl),
                        Z.intl.format(Z.t.PHuQsb, {
                            tabHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'tab',
                                        className: A.keybind
                                    },
                                    t
                                )
                        }),
                        Z.intl.string(Z.t.UorX4e),
                        Z.intl.string(Z.t['il/GZm']),
                        Z.intl.string(Z.t.HKBJv7),
                        Z.intl.format(Z.t['FVVp7+'], {
                            F6Hook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'f6',
                                        className: A.keybind
                                    },
                                    t
                                ),
                            tabHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'tab',
                                        className: A.keybind
                                    },
                                    t
                                )
                        }),
                        Z.intl.string(Z.t['7Y1hFB']),
                        Z.intl.string(Z.t['UcCW7+']),
                        Z.intl.string(Z.t.E5GhfX),
                        Z.intl.string(Z.t.bANqo6),
                        Z.intl.string(Z.t.yOEVDg),
                        Z.intl.string(Z.t['u0Ra/P']),
                        Z.intl.string(Z.t.un4cQ0),
                        Z.intl.string(Z.t['2cyYx8']),
                        Z.intl.string(Z.t.KCmze3),
                        Z.intl.string(Z.t['C+hUc3']),
                        Z.intl.string(Z.t.I98MEB),
                        Z.intl.format(Z.t.c0YCIy, {}),
                        Z.intl.string(Z.t.z8AvIC),
                        Z.intl.string(Z.t.IjX3Pz),
                        Z.intl.string(Z.t.lg3CkZ),
                        Z.intl.string(Z.t['4GaLhY']),
                        Z.intl.string(Z.t.qHKbU1),
                        Z.intl.string(Z.t.mJxKDw),
                        Z.intl.string(Z.t.iiQBXF),
                        Z.intl.string(Z.t.YPD46e),
                        Z.intl.string(Z.t.O8BpgY),
                        Z.intl.string(Z.t.xzFwfn),
                        Z.intl.string(Z.t['4G3fsb']),
                        Z.intl.string(Z.t['/jPyKC']),
                        Z.intl.string(Z.t['8x7D5e']),
                        Z.intl.string(Z.t.G6Q8Hx),
                        Z.intl.string(Z.t['9Cx+xM']),
                        Z.intl.string(Z.t.WsZ8dX),
                        Z.intl.string(Z.t.btoe7O),
                        Z.intl.string(Z.t.E6Y0j4),
                        Z.intl.string(Z.t['7KZ819']),
                        Z.intl.string(Z.t.hm7OKi),
                        Z.intl.string(Z.t.H535i4),
                        Z.intl.string(Z.t['08WJUV']),
                        Z.intl.string(Z.t.hhtfys),
                        Z.intl.string(Z.t.on980d),
                        Z.intl.string(Z.t.AL6c09),
                        Z.intl.string(Z.t.iLTeFx),
                        Z.intl.string(Z.t.b3vSu7),
                        Z.intl.string(Z.t['f8ao5+']),
                        Z.intl.format(Z.t['1v1h8v'], { asterisks: '**' }),
                        Z.intl.format(Z.t.MUlAVV, {
                            quickSwitcherHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'mod+k',
                                        className: A.keybind
                                    },
                                    t
                                )
                        }),
                        Z.intl.format(Z.t.aes5VF, {
                            markUnreadHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'alt+click',
                                        className: A.keybind
                                    },
                                    t
                                )
                        }),
                        Z.intl.format(Z.t.md9Svr, {
                            markServerUnreadHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'shift+esc',
                                        className: A.keybind
                                    },
                                    t
                                )
                        }),
                        Z.intl.format(Z.t['X0Tu+v'], {
                            navigateUnreadHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'shift+alt+up',
                                        className: A.keybind
                                    },
                                    t
                                ),
                            downHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'down',
                                        className: A.keybind
                                    },
                                    t
                                )
                        }),
                        Z.intl.format(Z.t.AkoeIS, {
                            keyboardShortcutsHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'mod+/',
                                        className: A.keybind
                                    },
                                    t
                                )
                        }),
                        Z.intl.format(Z.t.P9sfAA, {
                            messageNewlineHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'shift+return',
                                        className: A.keybind
                                    },
                                    t
                                )
                        }),
                        Z.intl.format(Z.t['3Ox33d'], {
                            shiftHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'shift',
                                        className: A.keybind
                                    },
                                    t
                                )
                        }),
                        Z.intl.format(Z.t.enCV6e, {
                            upHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'up',
                                        className: A.keybind
                                    },
                                    t
                                )
                        })
                    ];
                    return E.default.locale.startsWith('en-') && e.push(Z.intl.string(Z.t.dQ9Wqq)), e[o().random(e.length - 1)];
                })()
            ),
            x(
                this,
                '_eventLoadingText',
                (function () {
                    let e = g.Z.getLoadingTips();
                    if (null != e && e.length > 0) return e[o().random(e.length - 1)];
                })()
            ),
            x(this, 'handleReady', () => {
                this.setState({ ready: !0 }), (0, N.isDesktop)() && (v.ZP.send('UPDATED_QUOTES', ['Hold Tight \u2014 Loading Discord']), v.ZP.send('UPDATE_OPEN_ON_STARTUP'));
            }),
            x(this, 'setVideoRef', (e) => {
                this.videoRef = e;
            }),
            x(this, 'setProblemsTimeout', () => {
                null == this._problemsTimeout && (this._problemsTimeout = setTimeout(() => this.setState({ problems: !0 }), 10000));
            }),
            x(this, 'clearProblemsTimeout', () => {
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
let L = c.ZP.connectStores([p.Z, I.Z, f.Z, m.Z], () => ({
    isTryingToConnect: p.Z.isTryingToConnect(),
    connected: p.Z.isConnected(),
    incident: I.Z.getIncident(),
    soundpack: f.Z.getSoundpack(),
    reducedMotion: m.Z.useReducedMotion
}))((e) => {
    let { isTryingToConnect: t, connected: n, incident: l, soundpack: r, reducedMotion: a } = e;
    return t
        ? (0, i.jsx)(b, {
              reducedMotion: a,
              soundpack: r,
              connected: n,
              incident: l
          })
        : null;
});
