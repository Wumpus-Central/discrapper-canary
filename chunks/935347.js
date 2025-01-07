n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(433517),
    u = n(481060),
    h = n(205355),
    m = n(607070),
    p = n(38618),
    g = n(197344),
    f = n(474873),
    _ = n(706454),
    E = n(215427),
    I = n(820254),
    C = n(358085),
    N = n(557177),
    v = n(998502),
    S = n(905656),
    T = n(981631),
    A = n(388032),
    b = n(38179);
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
class x extends r.PureComponent {
    createSound() {
        let { soundpack: e } = this.props,
            t = (0, N.uk)('discodo', e);
        return (t.volume = 1), t;
    }
    componentDidMount() {
        this.setProblemsTimeout();
    }
    componentDidUpdate(e, t) {
        let { ready: n, hide: i, problems: r } = this.state,
            { connected: l, soundpack: a } = this.props,
            s = l && n && !i && !r;
        e.soundpack !== a && (this._connectedSound = this.createSound()),
            e.connected !== l || s
                ? (l && null != this.videoRef && d.K.get(T.wli) && this._connectedSound.play(),
                  this.setState({
                      problems: !1,
                      hide: l
                  }))
                : t.hide !== i
                  ? (i ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({ shouldRender: !0 }), setTimeout(() => this.setState({ shouldRender: !i }), 200))
                  : t.problems !== r && r && h.Z.checkIncidents();
    }
    componentWillUnmount() {
        this.clearProblemsTimeout();
    }
    render() {
        let { connected: e, incident: t } = this.props,
            { hide: n } = this.state;
        if (!this.state.shouldRender) return null;
        {
            let r = this._loadingText,
                l = null;
            return (
                null != this._eventLoadingText && (r = this._eventLoadingText),
                null != t && ((r = t.name), (l = t.incident_updates[0].body)),
                (0, i.jsxs)('div', {
                    className: b.container,
                    'data-fade': n,
                    style: {
                        '--connecting-container-fade-duration': ''.concat(200, 'ms'),
                        '--connecting-content-fade-duration': ''.concat(150, 'ms')
                    },
                    children: [
                        (0, i.jsxs)('div', {
                            className: b.content,
                            children: [
                                (0, i.jsx)(S.Z, {
                                    autoPlay: !0,
                                    loop: !e,
                                    setRef: this.setVideoRef,
                                    onReady: this.handleReady,
                                    className: a()(b.spinner, this.state.ready ? b.ready : '')
                                }),
                                (0, i.jsxs)('div', {
                                    className: b.text,
                                    children: [
                                        null != t
                                            ? null
                                            : (0, i.jsx)('div', {
                                                  className: b.tipTitle,
                                                  children: A.intl.string(A.t.v0R1Li)
                                              }),
                                        (0, i.jsx)('div', {
                                            className: null != t ? b.title : b.tip,
                                            children: r
                                        }),
                                        (0, i.jsx)('div', {
                                            className: b.body,
                                            children: l
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: a()(b.problems, { [b.slideIn]: this.state.problems }),
                            children: [
                                (0, i.jsx)('div', {
                                    className: b.problemsText,
                                    children: A.intl.string(A.t.AG2zPD)
                                }),
                                (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsxs)(u.Anchor, {
                                            className: b.twitterLink,
                                            href: T.yXt.TWITTER_SUPPORT,
                                            target: '_blank',
                                            children: [
                                                (0, i.jsx)(u.XNeutralIcon, {
                                                    size: 'xs',
                                                    color: 'currentColor',
                                                    className: b.icon
                                                }),
                                                A.intl.string(A.t.KlyTbm)
                                            ]
                                        }),
                                        (0, i.jsxs)(u.Anchor, {
                                            className: b.statusLink,
                                            href: T.yXt.STATUS,
                                            target: '_blank',
                                            children: [(0, i.jsx)(I.Z, { className: b.icon }), A.intl.string(A.t.AgXXy8)]
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
                        A.intl.string(A.t.Ex79Ky),
                        A.intl.string(A.t['+v5zsb']),
                        A.intl.string(A.t['RLx6+f']),
                        A.intl.string(A.t.Q1PZkJ),
                        A.intl.string(A.t.x7sfVl),
                        A.intl.format(A.t.PHuQsb, {
                            tabHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'tab',
                                        className: b.keybind
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
                                    u.KeyCombo,
                                    {
                                        shortcut: 'f6',
                                        className: b.keybind
                                    },
                                    t
                                ),
                            tabHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'tab',
                                        className: b.keybind
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
                                    u.KeyCombo,
                                    {
                                        shortcut: 'mod+k',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.format(A.t.aes5VF, {
                            markUnreadHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'alt+click',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.format(A.t.md9Svr, {
                            markServerUnreadHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'shift+esc',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.format(A.t['X0Tu+v'], {
                            navigateUnreadHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'shift+alt+up',
                                        className: b.keybind
                                    },
                                    t
                                ),
                            downHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'down',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.format(A.t.AkoeIS, {
                            keyboardShortcutsHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'mod+/',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.format(A.t.P9sfAA, {
                            messageNewlineHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'shift+return',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.format(A.t['3Ox33d'], {
                            shiftHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'shift',
                                        className: b.keybind
                                    },
                                    t
                                )
                        }),
                        A.intl.format(A.t.enCV6e, {
                            upHook: (e, t) =>
                                (0, i.jsx)(
                                    u.KeyCombo,
                                    {
                                        shortcut: 'up',
                                        className: b.keybind
                                    },
                                    t
                                )
                        })
                    ];
                    return _.default.locale.startsWith('en-') && e.push(A.intl.string(A.t.dQ9Wqq)), e[o().random(e.length - 1)];
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
                this.setState({ ready: !0 }), (0, C.isDesktop)() && (v.ZP.send('UPDATED_QUOTES', ['Hold Tight \u2014 Loading Discord']), v.ZP.send('UPDATE_OPEN_ON_STARTUP'));
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
t.Z = c.ZP.connectStores([p.Z, E.Z, f.Z, m.Z], () => ({
    isTryingToConnect: p.Z.isTryingToConnect(),
    connected: p.Z.isConnected(),
    incident: E.Z.getIncident(),
    soundpack: f.Z.getSoundpack(),
    reducedMotion: m.Z.useReducedMotion
}))((e) => {
    let { isTryingToConnect: t, connected: n, incident: r, soundpack: l, reducedMotion: a } = e;
    return t
        ? (0, i.jsx)(x, {
              reducedMotion: a,
              soundpack: l,
              connected: n,
              incident: r
          })
        : null;
});
