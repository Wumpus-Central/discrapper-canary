n.d(t, {
    Z: function () {
        return er;
    }
}),
    n(47120);
var i,
    s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(442837),
    d = n(692547),
    c = n(477690),
    u = n(481060),
    h = n(239091),
    p = n(765250),
    f = n(13245),
    g = n(872810),
    m = n(586902),
    v = n(835473),
    x = n(933557),
    Z = n(600164),
    S = n(118012),
    _ = n(594190),
    E = n(925329),
    C = n(569545),
    I = n(914923),
    y = n(165393),
    N = n(989941),
    b = n(552282),
    T = n(345243),
    O = n(565799),
    j = n(501655),
    M = n(786915),
    w = n(7188),
    P = n(597998),
    R = n(199902),
    k = n(314897),
    A = n(592125),
    D = n(77498),
    L = n(131951),
    z = n(944486),
    B = n(606304),
    V = n(449224),
    W = n(938475),
    U = n(237997),
    F = n(136015),
    G = n(51144),
    H = n(145597),
    Y = n(244073),
    K = n(876205),
    X = n(906037),
    Q = n(518084),
    J = n(809357),
    q = n(981631),
    $ = n(65154),
    ee = n(388032),
    et = n(651314);
function en(e, t, n) {
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
function ei(e) {
    let { flipped: t = !1, locked: n = !1, user: i, nick: a, displayNameMode: d, displayUserMode: c, size: u = q.ipw.LARGE, onClick: h, onContextMenu: p, context: f, guildId: g, voiceState: v } = e,
        x = (0, J.Z)({ location: 'overlay_voice_widget' }),
        Z = (0, l.e7)([U.Z], () => U.Z.showKeybindIndicators),
        S = (0, l.e7)([k.default], () => k.default.getId()),
        _ = (0, l.e7)([L.Z], () => L.Z.isLocalMute(i.id)),
        E = (0, l.e7)([R.Z], () => R.Z.getCurrentUserActiveStream()),
        C = (0, l.Wu)([R.Z], () => (null != E ? R.Z.getViewerIds(E) : [])),
        I = (0, m.Z)({
            userId: i.id,
            context: f
        }),
        y = (0, l.e7)([B.Z], () => B.Z.isPrioritySpeaker(i.id, f)),
        N = (0, l.e7)([R.Z], () => null != R.Z.getStreamForUser(i.id, g)),
        b = r.useMemo(() => null != E && E.ownerId !== i.id && C.includes(i.id), [E, i.id, C]);
    if (c === q.OYC.ONLY_WHILE_SPEAKING && n && !I) return null;
    let T = i.id === S,
        { mute: O, selfMute: j, suppress: M, deaf: w, selfDeaf: A } = v,
        D = x && Z,
        z = j && (!T || !D);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(P.ZP, {
                guildId: g,
                onClick: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
                onContextMenu: n ? void 0 : (e) => (null == p ? void 0 : p(e, i)),
                className: o()(et.voiceUserWrapper, {
                    [et.faded]: !I,
                    [et.interactive]: !n
                }),
                user: i,
                nick: a,
                speaking: !1,
                flipped: t,
                isStreaming: N,
                iconClassName: o()(et.voiceIcon, { [et.locked]: n }),
                isWatching: b,
                isOverlay: !0,
                size: u,
                priority: y,
                mute: O || z || _,
                localMute: _,
                serverMute: O || M,
                deaf: w || A,
                serverDeaf: w,
                userNameClassName: o()(et.username, {
                    [et.locked]: n,
                    [et.hidden]: n && (d === q.wC$.NEVER || (!I && d === q.wC$.ONLY_WHILE_SPEAKING))
                })
            }),
            T &&
                D &&
                (0, s.jsx)(K.Z, {
                    value: j,
                    action: q.kg4.TOGGLE_MUTE,
                    shouldShow: !O && !M
                })
        ]
    });
}
class es extends (i = r.PureComponent) {
    renderVoiceUsers() {
        let { context: e, sortedVoiceStates: t, displayNameMode: n, displayUserMode: i, locked: r, isPreviewingInGame: a, channel: l, anchor: d, avatarSizeMode: u } = this.props,
            h = null != d.right,
            p = t.map((t) => {
                var o;
                let { user: d, voiceState: c, member: p } = t;
                if (null == d || null == l || null == e) return null;
                let f = r || a;
                return (0, s.jsx)(
                    ei,
                    {
                        guildId: null == l ? void 0 : l.guild_id,
                        user: d,
                        nick: null !== (o = null == p ? void 0 : p.nick) && void 0 !== o ? o : G.ZP.getName(d),
                        flipped: h,
                        voiceState: c,
                        displayNameMode: n,
                        displayUserMode: i,
                        size: u,
                        locked: f,
                        onContextMenu: this.handleUserContextMenu,
                        onClick: this.handleUserContextMenu,
                        context: e
                    },
                    d.id
                );
            });
        return (0, s.jsx)(Q.ZP.Body, {
            className: o()({
                [c.Z.VOICE_WIDGET_TOP_MARGIN]: r,
                [et.lockedContainer]: r
            }),
            children: (0, s.jsx)(P.eJ, {
                className: et.voiceList,
                children: p
            })
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, s.jsxs)(Q.ZP.Bar, {
            className: o()(et.draggableStartArea, { [et.preview]: n }),
            children: [
                (0, s.jsxs)(Q.ZP.Content, {
                    dynamicSize: !0,
                    className: o()(et.content, { [et.hidden]: n }),
                    children: [
                        (0, s.jsx)(u.DragIcon, {
                            size: 'custom',
                            color: d.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: o()(et.icon, et.faded, et.dragIcon)
                        }),
                        (0, s.jsx)(u.VoiceNormalIcon, {
                            size: 'custom',
                            color: d.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: o()(et.icon, et.faded, et.speakerIcon)
                        }),
                        (0, s.jsx)(S.Z, {
                            color: d.Z.unsafe_rawColors.PRIMARY_200.css,
                            className: et.title,
                            children: t
                        })
                    ]
                }),
                n
                    ? null
                    : (0, s.jsx)(Q.ZP.Icon, {
                          icon: u.SettingsIcon,
                          label: ee.intl.string(ee.t.NiTd0d),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: 'left',
                          size: 18
                      }),
                n
                    ? null
                    : (0, s.jsx)(Q.ZP.Icon, {
                          icon: e ? u.PinUprightSlashIcon : u.PinUprightIcon,
                          label: e ? ee.intl.string(ee.t.cSu80t) : ee.intl.string(ee.t.cM8Vnp),
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
        let { locked: t, pinned: n, isPreviewingInGame: i, channel: r, application: a, streamMetadata: l, streamApplication: d, stream: c } = this.props;
        if (t || null == c || null == r) return null;
        let { sanitizedTitle: h, title: p } = (0, I.Z)(l);
        return (0, s.jsx)(Q.ZP.Bar, {
            className: o()(et.streamerControls, {
                [et.hidden]: i,
                [et.unpinned]: !n
            }),
            children: (0, s.jsxs)(Q.ZP.Content, {
                className: et.streamerContent,
                dynamicSize: !0,
                children: [
                    (0, s.jsxs)('div', {
                        className: et.streamerInner,
                        children: [
                            (null == d ? void 0 : d.id) != null && d.id === (null == a ? void 0 : a.id)
                                ? (0, s.jsx)(E.Z, {
                                      className: et.gameIcon,
                                      game: a
                                  })
                                : (0, s.jsx)(y.Z, { title: h }),
                            (0, s.jsxs)(Z.Z, {
                                direction: Z.Z.Direction.VERTICAL,
                                justify: Z.Z.Justify.BETWEEN,
                                className: et.streamerInfo,
                                children: [
                                    (0, s.jsx)(u.Text, {
                                        className: et.streaming,
                                        variant: 'text-sm/normal',
                                        children: ee.intl.string(ee.t.XKYej4)
                                    }),
                                    (0, s.jsx)(T.Z, { children: null !== (e = null == d ? void 0 : d.name) && void 0 !== e ? e : p })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsxs)(Z.Z, {
                        grow: 0,
                        children: [
                            (0, s.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, s.jsx)(M.Z, {
                                    stream: c,
                                    iconClassName: et.streamerIcon,
                                    appContext: q.IlC.OVERLAY
                                })
                            }),
                            (0, s.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, s.jsx)(w.Z, {
                                    stream: c,
                                    appContext: q.IlC.OVERLAY
                                })
                            }),
                            (0, s.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, s.jsx)(u.TooltipContainer, {
                                    text: ee.intl.string(ee.t.S5anIS),
                                    children: (0, s.jsx)(u.Button, {
                                        onClick: this.handleStopStream,
                                        look: u.Button.Looks.BLANK,
                                        size: u.Button.Sizes.NONE,
                                        children: (0, s.jsx)(u.ScreenXIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: et.streamerIcon
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
        (0, X.m3)(this.props, this.shouldDisplay());
    }
    componentDidUpdate(e) {
        (0, X.CR)(e, this.props, this.shouldDisplay);
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            { context: t, locked: n, pinned: i, sortedVoiceStates: s, channel: r } = e;
        return 0 !== s.length && null != t && null != r && (!n || !!i) && !0;
    }
    render() {
        let { context: e, lobbyId: t, locked: n, pinned: i, isPreviewingInGame: r, channel: a } = this.props;
        if (null == a || null == e || !this.shouldDisplay()) return null;
        let l = q.t_t.UNPINNED;
        return (
            i && (l = q.t_t.PINNED),
            r && (l = q.t_t.IN_GAME_PREVIEW),
            n && (l = q.t_t.IN_GAME),
            (0, s.jsxs)(Q.ZP, {
                type: l,
                width: 380,
                children: [
                    n ? null : this.renderHeader(),
                    this.renderVoiceUsers(),
                    this.renderStreamerSettings(),
                    n
                        ? null
                        : (0, s.jsx)(Y.Z, {
                              className: o()({ [et.preview]: r }),
                              contentClassName: o()({ [et.hidden]: r }),
                              channel: a,
                              lobbyId: t,
                              context: e,
                              pinned: i
                          })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            en(this, 'handleUserContextMenu', (e, t) => {
                let { context: i } = this.props;
                (0, h.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('57375')]).then(n.bind(n, 881351));
                    return (n) =>
                        (0, s.jsx)(e, {
                            ...n,
                            user: t,
                            showMediaItems: !0,
                            mediaEngineContext: i
                        });
                });
            }),
            en(this, 'handleOpenVoiceSettings', () => {
                let { context: e, channel: t, title: i } = this.props;
                (0, u.openModalLazy)(async () => {
                    let { default: r } = await n.e('66063').then(n.bind(n, 344516));
                    return (n) =>
                        (0, s.jsx)(r, {
                            ...n,
                            mediaEngineContext: e,
                            title: null != t ? null : i
                        });
                });
            }),
            en(this, 'handlePin', () => {
                var e, t, n;
                let i = !this.props.pinned;
                f.Z.track(q.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null === (e = this.props.channel) || void 0 === e ? void 0 : e.guild_id,
                    channel_id: null === (t = this.props.channel) || void 0 === t ? void 0 : t.id,
                    channel_type: null === (n = this.props.channel) || void 0 === n ? void 0 : n.type,
                    widget_type: q.Odu.VOICE
                });
                let { id: s } = this.props;
                (0, p.xh)(s);
            }),
            en(this, 'handleStopStream', () => {
                let { stream: e } = this.props;
                if (null != e) g.g((0, C.V9)(e));
            });
    }
}
en(es, 'defaultProps', { context: $.Yn.DEFAULT });
function er(e) {
    var t;
    let n = (0, l.e7)([z.Z, A.Z], () => A.Z.getChannel(z.Z.getVoiceChannelId())),
        i = (0, x.ZP)(n),
        a = (function () {
            let [e] = (0, l.e7)(
                    [W.ZP, O.Z, z.Z, A.Z],
                    () => {
                        let e = A.Z.getChannel(z.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [O.Z.getMutableParticipants(e.id, j.pV.SPEAKER), O.Z.getParticipantsVersion(e.id)] : [W.ZP.getVoiceStatesForChannel(e), W.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    F.Q
                ),
                t = (0, l.e7)([k.default], () => k.default.getId()),
                n = (0, J.Z)({ location: 'voice_widget' });
            return r.useMemo(() => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : n.user.id === t ? 1 : 0)) : e), [e, t, n]);
        })(),
        o = (0, l.e7)([R.Z], () => R.Z.getStreamerActiveStreamMetadata()),
        d = (0, l.e7)([_.ZP, V.Z, D.Z], () => {
            var e;
            let t = (0, N.Z)(_.ZP, V.Z);
            return null != t ? (null === (e = D.Z.getGameByGameData(t)) || void 0 === e ? void 0 : e.id) : null;
        }),
        c = (0, v.q)(d),
        u = (0, l.cj)([_.ZP, V.Z, R.Z, U.Z], () => {
            let e = (0, N.Z)(_.ZP, V.Z),
                t = R.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: U.Z.getDisplayUserMode(),
                displayNameMode: U.Z.getDisplayNameMode(),
                avatarSizeMode: U.Z.getAvatarSizeMode(),
                streamApplication: (null == o ? void 0 : o.pid) === (0, H.QF)() ? (0, b.Z)(e) : null,
                stream: t
            };
        });
    return (0, s.jsx)(es, {
        ...u,
        application: c,
        ...e,
        sortedVoiceStates: a,
        channel: n,
        title: null != i ? i : '',
        streamMetadata: o,
        streamApplication:
            null !== (t = u.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == o ? void 0 : o.sourceName
                  }
    });
}
