n.d(t, { Z: () => ea }), n(388685), n(642613);
var i,
    r = n(255367),
    o = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    c = n(692547),
    d = n(477690),
    u = n(481060),
    h = n(239091),
    p = n(765250),
    f = n(13245),
    g = n(872810),
    m = n(586902),
    y = n(835473),
    _ = n(933557),
    v = n(600164),
    O = n(118012),
    b = n(594190),
    E = n(925329),
    x = n(569545),
    S = n(914923),
    C = n(165393),
    j = n(989941),
    Z = n(552282),
    I = n(77880),
    P = n(345243),
    N = n(565799),
    w = n(501655),
    T = n(786915),
    k = n(7188),
    D = n(597998),
    R = n(199902),
    A = n(314897),
    L = n(592125),
    M = n(77498),
    z = n(131951),
    V = n(944486),
    W = n(606304),
    B = n(449224),
    U = n(938475),
    G = n(237997),
    F = n(136015),
    H = n(51144),
    Y = n(145597),
    K = n(244073),
    X = n(876205),
    J = n(906037),
    q = n(518084),
    Q = n(809357),
    $ = n(981631),
    ee = n(65154),
    et = n(388032),
    en = n(690200);
function ei(e, t, n) {
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
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                ei(e, t, n[t]);
            });
    }
    return e;
}
function eo(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function es(e) {
    let { flipped: t = !1, locked: n = !1, user: i, nick: s, displayNameMode: c, displayUserMode: d, size: u = $.ipw.LARGE, onClick: h, onContextMenu: p, context: f, guildId: g, voiceState: y } = e,
        _ = (0, Q.Z)({ location: 'overlay_voice_widget' }),
        v = (0, a.e7)([G.default], () => G.default.showKeybindIndicators),
        O = (0, a.e7)([A.default], () => A.default.getId()),
        b = (0, a.e7)([z.Z], () => z.Z.isLocalMute(i.id)),
        E = (0, a.e7)([R.Z], () => R.Z.getCurrentUserActiveStream()),
        x = (0, a.Wu)([R.Z], () => (null != E ? R.Z.getViewerIds(E) : [])),
        S = (0, m.Z)({
            userId: i.id,
            context: f
        }),
        C = (0, a.e7)([W.Z], () => W.Z.isPrioritySpeaker(i.id, f)),
        j = (0, a.e7)([R.Z], () => null != R.Z.getStreamForUser(i.id, g)),
        Z = o.useMemo(() => null != E && E.ownerId !== i.id && x.includes(i.id), [E, i.id, x]);
    if (d === $.OYC.ONLY_WHILE_SPEAKING && n && !S) return null;
    let I = i.id === O,
        { mute: P, selfMute: N, suppress: w, deaf: T, selfDeaf: k } = y,
        L = _ && v,
        M = N && (!I || !L);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(D.ZP, {
                guildId: g,
                onClick: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
                onContextMenu: n ? void 0 : (e) => (null == p ? void 0 : p(e, i)),
                className: l()(en.voiceUserWrapper, {
                    [en.faded]: !S,
                    [en.interactive]: !n
                }),
                user: i,
                nick: s,
                speaking: !1,
                flipped: t,
                isStreaming: j,
                iconClassName: l()(en.voiceIcon, { [en.locked]: n }),
                isWatching: Z,
                isOverlay: !0,
                size: u,
                priority: C,
                mute: P || M || b,
                localMute: b,
                serverMute: P || w,
                deaf: T || k,
                serverDeaf: T,
                userNameClassName: l()(en.username, {
                    [en.locked]: n,
                    [en.hidden]: n && (c === $.wC$.NEVER || (!S && c === $.wC$.ONLY_WHILE_SPEAKING))
                })
            }),
            I &&
                L &&
                (0, r.jsx)(X.Z, {
                    value: N,
                    action: $.kg4.TOGGLE_MUTE,
                    shouldShow: !P && !w
                })
        ]
    });
}
class el extends (i = o.PureComponent) {
    renderVoiceUsers() {
        let { context: e, sortedVoiceStates: t, displayNameMode: n, displayUserMode: i, locked: o, isPreviewingInGame: s, channel: a, anchor: c, avatarSizeMode: u } = this.props,
            h = null != c.right,
            p = t.map((t) => {
                var l;
                let { user: c, voiceState: d, member: p } = t;
                if (null == c || null == a || null == e) return null;
                let f = o || s;
                return (0, r.jsx)(
                    es,
                    {
                        guildId: null == a ? void 0 : a.guild_id,
                        user: c,
                        nick: null != (l = null == p ? void 0 : p.nick) ? l : H.ZP.getName(c),
                        flipped: h,
                        voiceState: d,
                        displayNameMode: n,
                        displayUserMode: i,
                        size: u,
                        locked: f,
                        onContextMenu: this.handleUserContextMenu,
                        onClick: this.handleUserContextMenu,
                        context: e
                    },
                    c.id
                );
            });
        return (0, r.jsx)(q.ZP.Body, {
            className: l()({
                [d.Z.VOICE_WIDGET_TOP_MARGIN]: o,
                [en.lockedContainer]: o
            }),
            children: (0, r.jsx)(D.eJ, {
                className: en.voiceList,
                children: p
            })
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, r.jsxs)(q.ZP.Bar, {
            className: l()(en.draggableStartArea, { [en.preview]: n }),
            children: [
                (0, r.jsxs)(q.ZP.Content, {
                    dynamicSize: !0,
                    className: l()(en.content, { [en.hidden]: n }),
                    children: [
                        (0, r.jsx)(u.Vni, {
                            size: 'custom',
                            color: c.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: l()(en.icon, en.faded, en.dragIcon)
                        }),
                        (0, r.jsx)(u.gj8, {
                            size: 'custom',
                            color: c.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: l()(en.icon, en.faded, en.speakerIcon)
                        }),
                        (0, r.jsx)(O.Z, {
                            color: c.Z.unsafe_rawColors.PRIMARY_200.css,
                            className: en.title,
                            children: t
                        })
                    ]
                }),
                n
                    ? null
                    : (0, r.jsx)(q.ZP.Icon, {
                          icon: u.ewm,
                          label: et.intl.string(et.t.NiTd0d),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: 'left',
                          size: 18
                      }),
                n
                    ? null
                    : (0, r.jsx)(q.ZP.Icon, {
                          icon: e ? u.QVc : u.k5M,
                          label: e ? et.intl.string(et.t.cSu80t) : et.intl.string(et.t.cM8Vnp),
                          onClick: this.handlePin,
                          tooltipPosition: 'left',
                          size: 18,
                          isActive: e
                      })
            ]
        });
    }
    renderStreamerSettings() {
        var e;
        let { locked: t, pinned: n, isPreviewingInGame: i, channel: o, application: s, streamMetadata: a, streamApplication: c, stream: d } = this.props;
        if (t || null == d || null == o) return null;
        let { sanitizedTitle: h, title: p } = (0, S.Z)(a);
        return (0, r.jsx)(q.ZP.Bar, {
            className: l()(en.streamerControls, {
                [en.hidden]: i,
                [en.unpinned]: !n
            }),
            children: (0, r.jsxs)(q.ZP.Content, {
                className: en.streamerContent,
                dynamicSize: !0,
                children: [
                    (0, r.jsxs)('div', {
                        className: en.streamerInner,
                        children: [
                            (null == c ? void 0 : c.id) != null && c.id === (null == s ? void 0 : s.id)
                                ? (0, r.jsx)(E.Z, {
                                      className: en.gameIcon,
                                      game: s
                                  })
                                : (0, r.jsx)(C.Z, { title: h }),
                            (0, r.jsxs)(v.Z, {
                                direction: v.Z.Direction.VERTICAL,
                                justify: v.Z.Justify.BETWEEN,
                                className: en.streamerInfo,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        className: en.streaming,
                                        variant: 'text-sm/normal',
                                        children: et.intl.string(et.t.XKYej4)
                                    }),
                                    (0, r.jsx)(P.Z, { children: null != (e = null == c ? void 0 : c.name) ? e : p })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)(v.Z, {
                        grow: 0,
                        children: [
                            (0, r.jsx)('div', {
                                className: en.streamerIconWrapper,
                                children: (0, r.jsx)(T.Z, {
                                    stream: d,
                                    iconClassName: en.streamerIcon,
                                    appContext: $.IlC.OVERLAY
                                })
                            }),
                            (0, r.jsx)('div', {
                                className: en.streamerIconWrapper,
                                children: (0, r.jsx)(k.Z, {
                                    stream: d,
                                    appContext: $.IlC.OVERLAY
                                })
                            }),
                            (0, r.jsx)('div', {
                                className: en.streamerIconWrapper,
                                children: (0, r.jsx)(u.DY3, {
                                    text: et.intl.string(et.t.S5anIS),
                                    children: (0, r.jsx)(u.zxk, {
                                        onClick: this.handleStopStream,
                                        look: u.zxk.Looks.BLANK,
                                        size: u.zxk.Sizes.NONE,
                                        children: (0, r.jsx)(u.g5r, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: en.streamerIcon
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        });
    }
    componentDidMount() {
        (0, J.m3)(this.props, this.shouldDisplay());
    }
    componentDidUpdate(e) {
        (0, J.CR)(e, this.props, this.shouldDisplay);
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            { context: t, locked: n, pinned: i, sortedVoiceStates: r, channel: o } = e;
        return 0 !== r.length && null != t && null != o && (!n || !!i);
    }
    render() {
        let { context: e, lobbyId: t, locked: n, pinned: i, isPreviewingInGame: o, channel: s, changeLeaveCallAndActivityIcons: a } = this.props;
        if (null == s || null == e || !this.shouldDisplay()) return null;
        let c = $.t_t.UNPINNED;
        return (
            i && (c = $.t_t.PINNED),
            o && (c = $.t_t.IN_GAME_PREVIEW),
            n && (c = $.t_t.IN_GAME),
            (0, r.jsxs)(q.ZP, {
                type: c,
                width: 380,
                children: [
                    n ? null : this.renderHeader(),
                    this.renderVoiceUsers(),
                    this.renderStreamerSettings(),
                    n
                        ? null
                        : (0, r.jsx)(K.Z, {
                              className: l()({ [en.preview]: o }),
                              contentClassName: l()({ [en.hidden]: o }),
                              channel: s,
                              lobbyId: t,
                              context: e,
                              pinned: i,
                              changeLeaveCallAndActivityIcons: a
                          })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            ei(this, 'handleUserContextMenu', (e, t) => {
                let { context: i } = this.props;
                (0, h.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('86423')]).then(n.bind(n, 881351));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            eo(er({}, n), {
                                user: t,
                                showMediaItems: !0,
                                mediaEngineContext: i
                            })
                        );
                });
            }),
            ei(this, 'handleOpenVoiceSettings', () => {
                let { context: e, channel: t, title: i } = this.props;
                (0, u.ZDy)(async () => {
                    let { default: o } = await n.e('66063').then(n.bind(n, 344516));
                    return (n) =>
                        (0, r.jsx)(
                            o,
                            eo(er({}, n), {
                                mediaEngineContext: e,
                                title: null != t ? null : i
                            })
                        );
                });
            }),
            ei(this, 'handlePin', () => {
                var e, t, n;
                let i = !this.props.pinned;
                f.Z.track($.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null == (e = this.props.channel) ? void 0 : e.guild_id,
                    channel_id: null == (t = this.props.channel) ? void 0 : t.id,
                    channel_type: null == (n = this.props.channel) ? void 0 : n.type,
                    widget_type: $.Odu.VOICE
                });
                let { id: r } = this.props;
                (0, p.xh)(r);
            }),
            ei(this, 'handleStopStream', () => {
                let { stream: e } = this.props;
                null != e && g.g((0, x.V9)(e));
            });
    }
}
function ea(e) {
    var t;
    let n = (0, a.e7)([V.Z, L.Z], () => L.Z.getChannel(V.Z.getVoiceChannelId())),
        i = (0, _.ZP)(n),
        s = (function () {
            let [e] = (0, a.e7)(
                    [U.ZP, N.Z, V.Z, L.Z],
                    () => {
                        let e = L.Z.getChannel(V.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [N.Z.getMutableParticipants(e.id, w.pV.SPEAKER), N.Z.getParticipantsVersion(e.id)] : [U.ZP.getVoiceStatesForChannel(e), U.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    F.Q
                ),
                t = (0, a.e7)([A.default], () => A.default.getId()),
                n = (0, Q.Z)({ location: 'voice_widget' });
            return o.useMemo(() => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : +(n.user.id === t))) : e), [e, t, n]);
        })(),
        l = (0, a.e7)([R.Z], () => R.Z.getStreamerActiveStreamMetadata()),
        c = (0, a.e7)([b.ZP, B.Z, M.Z], () => {
            var e;
            let t = (0, j.Z)(b.ZP, B.Z);
            return null != t ? (null == (e = M.Z.getGameByGameData(t)) ? void 0 : e.id) : null;
        }),
        { changeLeaveCallAndActivityIcons: d } = (0, I.A)({ location: 'VoiceWidget' }),
        u = (0, y.q)(c),
        h = (0, a.cj)([b.ZP, B.Z, R.Z, G.default], () => {
            let e = (0, j.Z)(b.ZP, B.Z),
                t = R.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: G.default.getDisplayUserMode(),
                displayNameMode: G.default.getDisplayNameMode(),
                avatarSizeMode: G.default.getAvatarSizeMode(),
                streamApplication: (null == l ? void 0 : l.pid) === (0, Y.getPID)() ? (0, Z.Z)(e) : null,
                stream: t
            };
        });
    return (0, r.jsx)(
        el,
        eo(er(eo(er({}, h), { application: u }), e), {
            sortedVoiceStates: s,
            channel: n,
            title: null != i ? i : '',
            streamMetadata: l,
            streamApplication:
                null != (t = h.streamApplication)
                    ? t
                    : {
                          id: null,
                          name: null == l ? void 0 : l.sourceName
                      },
            changeLeaveCallAndActivityIcons: d
        })
    );
}
ei(el, 'defaultProps', { context: ee.Yn.DEFAULT });
