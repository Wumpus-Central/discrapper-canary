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
    b = n(388032),
    A = n(372296);
function Z(e, t, n) {
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
class x extends l.PureComponent {
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
                                                  children: b.intl.string(b.t.v0R1Li)
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
                                    children: b.intl.string(b.t.AG2zPD)
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
                                                b.intl.string(b.t.KlyTbm)
                                            ]
                                        }),
                                        (0, i.jsxs)(u.eee, {
                                            className: A.statusLink,
                                            href: S.yXt.STATUS,
                                            target: '_blank',
                                            children: [(0, i.jsx)(C.Z, { className: A.icon }), b.intl.string(b.t.AgXXy8)]
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
            Z(this, 'videoRef', null),
            Z(this, '_noProblemsTimeout', null),
            Z(this, '_problemsTimeout', null),
            Z(this, '_connectedSound', this.createSound()),
            Z(
                this,
                '_loadingText',
                (function () {
                    let e = [
                        b.intl.string(b.t.Ex79Ky),
                        b.intl.string(b.t['+v5zsb']),
                        b.intl.string(b.t['RLx6+f']),
                        b.intl.string(b.t.Q1PZkJ),
                        b.intl.string(b.t.x7sfVl),
                        b.intl.format(b.t.PHuQsb, {
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
                        b.intl.string(b.t.UorX4e),
                        b.intl.string(b.t['il/GZm']),
                        b.intl.string(b.t.HKBJv7),
                        b.intl.format(b.t['FVVp7+'], {
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
                        b.intl.string(b.t['7Y1hFB']),
                        b.intl.string(b.t['UcCW7+']),
                        b.intl.string(b.t.E5GhfX),
                        b.intl.string(b.t.bANqo6),
                        b.intl.string(b.t.yOEVDg),
                        b.intl.string(b.t['u0Ra/P']),
                        b.intl.string(b.t.un4cQ0),
                        b.intl.string(b.t['2cyYx8']),
                        b.intl.string(b.t.KCmze3),
                        b.intl.string(b.t['C+hUc3']),
                        b.intl.string(b.t.I98MEB),
                        b.intl.format(b.t.c0YCIy, {}),
                        b.intl.string(b.t.z8AvIC),
                        b.intl.string(b.t.IjX3Pz),
                        b.intl.string(b.t.lg3CkZ),
                        b.intl.string(b.t['4GaLhY']),
                        b.intl.string(b.t.qHKbU1),
                        b.intl.string(b.t.mJxKDw),
                        b.intl.string(b.t.iiQBXF),
                        b.intl.string(b.t.YPD46e),
                        b.intl.string(b.t.O8BpgY),
                        b.intl.string(b.t.xzFwfn),
                        b.intl.string(b.t['4G3fsb']),
                        b.intl.string(b.t['/jPyKC']),
                        b.intl.string(b.t['8x7D5e']),
                        b.intl.string(b.t.G6Q8Hx),
                        b.intl.string(b.t['9Cx+xM']),
                        b.intl.string(b.t.WsZ8dX),
                        b.intl.string(b.t.btoe7O),
                        b.intl.string(b.t.E6Y0j4),
                        b.intl.string(b.t['7KZ819']),
                        b.intl.string(b.t.hm7OKi),
                        b.intl.string(b.t.H535i4),
                        b.intl.string(b.t['08WJUV']),
                        b.intl.string(b.t.hhtfys),
                        b.intl.string(b.t.on980d),
                        b.intl.string(b.t.AL6c09),
                        b.intl.string(b.t.iLTeFx),
                        b.intl.string(b.t.b3vSu7),
                        b.intl.string(b.t['f8ao5+']),
                        b.intl.format(b.t['1v1h8v'], { asterisks: '**' }),
                        b.intl.format(b.t.MUlAVV, {
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
                        b.intl.format(b.t.aes5VF, {
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
                        b.intl.format(b.t.md9Svr, {
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
                        b.intl.format(b.t['X0Tu+v'], {
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
                        b.intl.format(b.t.AkoeIS, {
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
                        b.intl.format(b.t.P9sfAA, {
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
                        b.intl.format(b.t['3Ox33d'], {
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
                        b.intl.format(b.t.enCV6e, {
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
                    return E.default.locale.startsWith('en-') && e.push(b.intl.string(b.t.dQ9Wqq)), e[o().random(e.length - 1)];
                })()
            ),
            Z(
                this,
                '_eventLoadingText',
                (function () {
                    let e = g.Z.getLoadingTips();
                    if (null != e && e.length > 0) return e[o().random(e.length - 1)];
                })()
            ),
            Z(this, 'handleReady', () => {
                this.setState({ ready: !0 }), (0, N.isDesktop)() && (v.ZP.send('UPDATED_QUOTES', ['Hold Tight \u2014 Loading Discord']), v.ZP.send('UPDATE_OPEN_ON_STARTUP'));
            }),
            Z(this, 'setVideoRef', (e) => {
                this.videoRef = e;
            }),
            Z(this, 'setProblemsTimeout', () => {
                null == this._problemsTimeout && (this._problemsTimeout = setTimeout(() => this.setState({ problems: !0 }), 10000));
            }),
            Z(this, 'clearProblemsTimeout', () => {
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
        ? (0, i.jsx)(x, {
              reducedMotion: a,
              soundpack: r,
              connected: n,
              incident: l
          })
        : null;
});
