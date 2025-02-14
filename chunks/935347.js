n.d(t, { Z: () => L }), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    d = n(442837),
    c = n(433517),
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
    A = n(388032),
    Z = n(249630);
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
                ? (r && null != this.videoRef && c.K.get(S.wli) && this._connectedSound.play(),
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
                    className: Z.container,
                    'data-fade': n,
                    style: {
                        '--connecting-container-fade-duration': ''.concat(200, 'ms'),
                        '--connecting-content-fade-duration': ''.concat(150, 'ms')
                    },
                    children: [
                        (0, i.jsxs)('div', {
                            className: Z.content,
                            children: [
                                (0, i.jsx)(T.Z, {
                                    autoPlay: !0,
                                    loop: !e,
                                    setRef: this.setVideoRef,
                                    onReady: this.handleReady,
                                    className: a()(Z.spinner, this.state.ready ? Z.ready : '')
                                }),
                                (0, i.jsxs)('div', {
                                    className: Z.text,
                                    children: [
                                        null != t
                                            ? null
                                            : (0, i.jsx)('div', {
                                                  className: Z.tipTitle,
                                                  children: A.intl.string(A.t.v0R1Li)
                                              }),
                                        (0, i.jsx)('div', {
                                            className: null != t ? Z.title : Z.tip,
                                            children: l
                                        }),
                                        (0, i.jsx)('div', {
                                            className: Z.body,
                                            children: r
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: a()(Z.problems, { [Z.slideIn]: this.state.problems }),
                            children: [
                                (0, i.jsx)('div', {
                                    className: Z.problemsText,
                                    children: A.intl.string(A.t.AG2zPD)
                                }),
                                (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsxs)(u.eee, {
                                            className: Z.twitterLink,
                                            href: S.yXt.TWITTER_SUPPORT,
                                            target: '_blank',
                                            children: [
                                                (0, i.jsx)(u.TAi, {
                                                    size: 'xs',
                                                    color: 'currentColor',
                                                    className: Z.icon
                                                }),
                                                A.intl.string(A.t.KlyTbm)
                                            ]
                                        }),
                                        (0, i.jsxs)(u.eee, {
                                            className: Z.statusLink,
                                            href: S.yXt.STATUS,
                                            target: '_blank',
                                            children: [(0, i.jsx)(C.Z, { className: Z.icon }), A.intl.string(A.t.AgXXy8)]
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
                        A.intl.string(A.t.Ex79Ky),
                        A.intl.string(A.t['+v5zsb']),
                        A.intl.string(A.t['RLx6+f']),
                        A.intl.string(A.t.Q1PZkJ),
                        A.intl.string(A.t.x7sfVl),
                        A.intl.format(A.t.PHuQsb, {
                            tabHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'tab',
                                        className: Z.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.string(A.t.UorX4e),
                        A.intl.string(A.t['il/GZm']),
                        A.intl.string(A.t.HKBJv7),
                        A.intl.format(A.t['FVVp7+'], {
                            F6Hook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'f6',
                                        className: Z.keybind
                                    },
                                    t
                                ),
                            tabHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'tab',
                                        className: Z.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.string(A.t['7Y1hFB']),
                        A.intl.string(A.t['UcCW7+']),
                        A.intl.string(A.t.E5GhfX),
                        A.intl.string(A.t.bANqo6),
                        A.intl.string(A.t.yOEVDg),
                        A.intl.string(A.t['u0Ra/P']),
                        A.intl.string(A.t.un4cQ0),
                        A.intl.string(A.t['2cyYx8']),
                        A.intl.string(A.t.KCmze3),
                        A.intl.string(A.t['C+hUc3']),
                        A.intl.string(A.t.I98MEB),
                        A.intl.format(A.t.c0YCIy, {}),
                        A.intl.string(A.t.z8AvIC),
                        A.intl.string(A.t.IjX3Pz),
                        A.intl.string(A.t.lg3CkZ),
                        A.intl.string(A.t['4GaLhY']),
                        A.intl.string(A.t.qHKbU1),
                        A.intl.string(A.t.mJxKDw),
                        A.intl.string(A.t.iiQBXF),
                        A.intl.string(A.t.YPD46e),
                        A.intl.string(A.t.O8BpgY),
                        A.intl.string(A.t.xzFwfn),
                        A.intl.string(A.t['4G3fsb']),
                        A.intl.string(A.t['/jPyKC']),
                        A.intl.string(A.t['8x7D5e']),
                        A.intl.string(A.t.G6Q8Hx),
                        A.intl.string(A.t['9Cx+xM']),
                        A.intl.string(A.t.WsZ8dX),
                        A.intl.string(A.t.btoe7O),
                        A.intl.string(A.t.E6Y0j4),
                        A.intl.string(A.t['7KZ819']),
                        A.intl.string(A.t.hm7OKi),
                        A.intl.string(A.t.H535i4),
                        A.intl.string(A.t['08WJUV']),
                        A.intl.string(A.t.hhtfys),
                        A.intl.string(A.t.on980d),
                        A.intl.string(A.t.AL6c09),
                        A.intl.string(A.t.iLTeFx),
                        A.intl.string(A.t.b3vSu7),
                        A.intl.string(A.t['f8ao5+']),
                        A.intl.format(A.t['1v1h8v'], { asterisks: '**' }),
                        A.intl.format(A.t.MUlAVV, {
                            quickSwitcherHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'mod+k',
                                        className: Z.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.format(A.t.aes5VF, {
                            markUnreadHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'alt+click',
                                        className: Z.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.format(A.t.md9Svr, {
                            markServerUnreadHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'shift+esc',
                                        className: Z.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.format(A.t['X0Tu+v'], {
                            navigateUnreadHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'shift+alt+up',
                                        className: Z.keybind
                                    },
                                    t
                                ),
                            downHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'down',
                                        className: Z.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.format(A.t.AkoeIS, {
                            keyboardShortcutsHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'mod+/',
                                        className: Z.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.format(A.t.P9sfAA, {
                            messageNewlineHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'shift+return',
                                        className: Z.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.format(A.t['3Ox33d'], {
                            shiftHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'shift',
                                        className: Z.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.format(A.t.enCV6e, {
                            upHook: (e, t) =>
                                (0, i.jsx)(
                                    u.M2$,
                                    {
                                        shortcut: 'up',
                                        className: Z.keybind
                                    },
                                    t
                                )
                        })
                    ];
                    return E.default.locale.startsWith('en-') && e.push(A.intl.string(A.t.dQ9Wqq)), e[o().random(e.length - 1)];
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
let L = d.ZP.connectStores([p.Z, I.Z, f.Z, m.Z], () => ({
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
