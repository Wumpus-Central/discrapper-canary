n.d(t, { Z: () => el }), n(47120);
var i,
    s = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(442837),
    d = n(692547),
    c = n(477690),
    u = n(481060),
    h = n(239091),
    p = n(765250),
    g = n(13245),
    m = n(872810),
    f = n(586902),
    _ = n(835473),
    v = n(933557),
    x = n(600164),
    Z = n(118012),
    S = n(594190),
    E = n(925329),
    C = n(569545),
    I = n(914923),
    y = n(165393),
    N = n(989941),
    T = n(552282),
    b = n(345243),
    O = n(565799),
    j = n(501655),
    k = n(786915),
    M = n(7188),
    w = n(597998),
    P = n(199902),
    R = n(314897),
    D = n(592125),
    A = n(77498),
    L = n(131951),
    z = n(944486),
    B = n(606304),
    V = n(449224),
    W = n(938475),
    F = n(237997),
    U = n(136015),
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
    et = n(414470);
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
    let { flipped: t = !1, locked: n = !1, user: i, nick: a, displayNameMode: d, displayUserMode: c, size: u = q.ipw.LARGE, onClick: h, onContextMenu: p, context: g, guildId: m, voiceState: _ } = e,
        v = (0, J.Z)({ location: 'overlay_voice_widget' }),
        x = (0, o.e7)([F.Z], () => F.Z.showKeybindIndicators),
        Z = (0, o.e7)([R.default], () => R.default.getId()),
        S = (0, o.e7)([L.Z], () => L.Z.isLocalMute(i.id)),
        E = (0, o.e7)([P.Z], () => P.Z.getCurrentUserActiveStream()),
        C = (0, o.Wu)([P.Z], () => (null != E ? P.Z.getViewerIds(E) : [])),
        I = (0, f.Z)({
            userId: i.id,
            context: g
        }),
        y = (0, o.e7)([B.Z], () => B.Z.isPrioritySpeaker(i.id, g)),
        N = (0, o.e7)([P.Z], () => null != P.Z.getStreamForUser(i.id, m)),
        T = l.useMemo(() => null != E && E.ownerId !== i.id && C.includes(i.id), [E, i.id, C]);
    if (c === q.OYC.ONLY_WHILE_SPEAKING && n && !I) return null;
    let b = i.id === Z,
        { mute: O, selfMute: j, suppress: k, deaf: M, selfDeaf: D } = _,
        A = v && x,
        z = j && (!b || !A);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(w.ZP, {
                guildId: m,
                onClick: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
                onContextMenu: n ? void 0 : (e) => (null == p ? void 0 : p(e, i)),
                className: r()(et.voiceUserWrapper, {
                    [et.faded]: !I,
                    [et.interactive]: !n
                }),
                user: i,
                nick: a,
                speaking: !1,
                flipped: t,
                isStreaming: N,
                iconClassName: r()(et.voiceIcon, { [et.locked]: n }),
                isWatching: T,
                isOverlay: !0,
                size: u,
                priority: y,
                mute: O || z || S,
                localMute: S,
                serverMute: O || k,
                deaf: M || D,
                serverDeaf: M,
                userNameClassName: r()(et.username, {
                    [et.locked]: n,
                    [et.hidden]: n && (d === q.wC$.NEVER || (!I && d === q.wC$.ONLY_WHILE_SPEAKING))
                })
            }),
            b &&
                A &&
                (0, s.jsx)(K.Z, {
                    value: j,
                    action: q.kg4.TOGGLE_MUTE,
                    shouldShow: !O && !k
                })
        ]
    });
}
class es extends (i = l.PureComponent) {
    renderVoiceUsers() {
        let { context: e, sortedVoiceStates: t, displayNameMode: n, displayUserMode: i, locked: l, isPreviewingInGame: a, channel: o, anchor: d, avatarSizeMode: u } = this.props,
            h = null != d.right,
            p = t.map((t) => {
                var r;
                let { user: d, voiceState: c, member: p } = t;
                if (null == d || null == o || null == e) return null;
                let g = l || a;
                return (0, s.jsx)(
                    ei,
                    {
                        guildId: null == o ? void 0 : o.guild_id,
                        user: d,
                        nick: null !== (r = null == p ? void 0 : p.nick) && void 0 !== r ? r : G.ZP.getName(d),
                        flipped: h,
                        voiceState: c,
                        displayNameMode: n,
                        displayUserMode: i,
                        size: u,
                        locked: g,
                        onContextMenu: this.handleUserContextMenu,
                        onClick: this.handleUserContextMenu,
                        context: e
                    },
                    d.id
                );
            });
        return (0, s.jsx)(Q.ZP.Body, {
            className: r()({
                [c.Z.VOICE_WIDGET_TOP_MARGIN]: l,
                [et.lockedContainer]: l
            }),
            children: (0, s.jsx)(w.eJ, {
                className: et.voiceList,
                children: p
            })
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, s.jsxs)(Q.ZP.Bar, {
            className: r()(et.draggableStartArea, { [et.preview]: n }),
            children: [
                (0, s.jsxs)(Q.ZP.Content, {
                    dynamicSize: !0,
                    className: r()(et.content, { [et.hidden]: n }),
                    children: [
                        (0, s.jsx)(u.Vni, {
                            size: 'custom',
                            color: d.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: r()(et.icon, et.faded, et.dragIcon)
                        }),
                        (0, s.jsx)(u.gj8, {
                            size: 'custom',
                            color: d.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: r()(et.icon, et.faded, et.speakerIcon)
                        }),
                        (0, s.jsx)(Z.Z, {
                            color: d.Z.unsafe_rawColors.PRIMARY_200.css,
                            className: et.title,
                            children: t
                        })
                    ]
                }),
                n
                    ? null
                    : (0, s.jsx)(Q.ZP.Icon, {
                          icon: u.ewm,
                          label: ee.intl.string(ee.t.NiTd0d),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: 'left',
                          size: 18
                      }),
                n
                    ? null
                    : (0, s.jsx)(Q.ZP.Icon, {
                          icon: e ? u.QVc : u.k5M,
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
        let { locked: t, pinned: n, isPreviewingInGame: i, channel: l, application: a, streamMetadata: o, streamApplication: d, stream: c } = this.props;
        if (t || null == c || null == l) return null;
        let { sanitizedTitle: h, title: p } = (0, I.Z)(o);
        return (0, s.jsx)(Q.ZP.Bar, {
            className: r()(et.streamerControls, {
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
                            (0, s.jsxs)(x.Z, {
                                direction: x.Z.Direction.VERTICAL,
                                justify: x.Z.Justify.BETWEEN,
                                className: et.streamerInfo,
                                children: [
                                    (0, s.jsx)(u.Text, {
                                        className: et.streaming,
                                        variant: 'text-sm/normal',
                                        children: ee.intl.string(ee.t.XKYej4)
                                    }),
                                    (0, s.jsx)(b.Z, { children: null !== (e = null == d ? void 0 : d.name) && void 0 !== e ? e : p })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsxs)(x.Z, {
                        grow: 0,
                        children: [
                            (0, s.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, s.jsx)(k.Z, {
                                    stream: c,
                                    iconClassName: et.streamerIcon,
                                    appContext: q.IlC.OVERLAY
                                })
                            }),
                            (0, s.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, s.jsx)(M.Z, {
                                    stream: c,
                                    appContext: q.IlC.OVERLAY
                                })
                            }),
                            (0, s.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, s.jsx)(u.DY3, {
                                    text: ee.intl.string(ee.t.S5anIS),
                                    children: (0, s.jsx)(u.zxk, {
                                        onClick: this.handleStopStream,
                                        look: u.zxk.Looks.BLANK,
                                        size: u.zxk.Sizes.NONE,
                                        children: (0, s.jsx)(u.g5r, {
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
            { context: t, locked: n, pinned: i, sortedVoiceStates: s, channel: l } = e;
        return 0 !== s.length && null != t && null != l && (!n || !!i);
    }
    render() {
        let { context: e, lobbyId: t, locked: n, pinned: i, isPreviewingInGame: l, channel: a } = this.props;
        if (null == a || null == e || !this.shouldDisplay()) return null;
        let o = q.t_t.UNPINNED;
        return (
            i && (o = q.t_t.PINNED),
            l && (o = q.t_t.IN_GAME_PREVIEW),
            n && (o = q.t_t.IN_GAME),
            (0, s.jsxs)(Q.ZP, {
                type: o,
                width: 380,
                children: [
                    n ? null : this.renderHeader(),
                    this.renderVoiceUsers(),
                    this.renderStreamerSettings(),
                    n
                        ? null
                        : (0, s.jsx)(Y.Z, {
                              className: r()({ [et.preview]: l }),
                              contentClassName: r()({ [et.hidden]: l }),
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
                    let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('18509')]).then(n.bind(n, 881351));
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
                (0, u.ZDy)(async () => {
                    let { default: l } = await n.e('66063').then(n.bind(n, 344516));
                    return (n) =>
                        (0, s.jsx)(l, {
                            ...n,
                            mediaEngineContext: e,
                            title: null != t ? null : i
                        });
                });
            }),
            en(this, 'handlePin', () => {
                var e, t, n;
                let i = !this.props.pinned;
                g.Z.track(q.rMx.OVERLAY_PIN_TOGGLED, {
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
                null != e && m.g((0, C.V9)(e));
            });
    }
}
function el(e) {
    var t;
    let n = (0, o.e7)([z.Z, D.Z], () => D.Z.getChannel(z.Z.getVoiceChannelId())),
        i = (0, v.ZP)(n),
        a = (function () {
            let [e] = (0, o.e7)(
                    [W.ZP, O.Z, z.Z, D.Z],
                    () => {
                        let e = D.Z.getChannel(z.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [O.Z.getMutableParticipants(e.id, j.pV.SPEAKER), O.Z.getParticipantsVersion(e.id)] : [W.ZP.getVoiceStatesForChannel(e), W.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    U.Q
                ),
                t = (0, o.e7)([R.default], () => R.default.getId()),
                n = (0, J.Z)({ location: 'voice_widget' });
            return l.useMemo(() => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : n.user.id === t ? 1 : 0)) : e), [e, t, n]);
        })(),
        r = (0, o.e7)([P.Z], () => P.Z.getStreamerActiveStreamMetadata()),
        d = (0, o.e7)([S.ZP, V.Z, A.Z], () => {
            var e;
            let t = (0, N.Z)(S.ZP, V.Z);
            return null != t ? (null === (e = A.Z.getGameByGameData(t)) || void 0 === e ? void 0 : e.id) : null;
        }),
        c = (0, _.q)(d),
        u = (0, o.cj)([S.ZP, V.Z, P.Z, F.Z], () => {
            let e = (0, N.Z)(S.ZP, V.Z),
                t = P.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: F.Z.getDisplayUserMode(),
                displayNameMode: F.Z.getDisplayNameMode(),
                avatarSizeMode: F.Z.getAvatarSizeMode(),
                streamApplication: (null == r ? void 0 : r.pid) === (0, H.QF)() ? (0, T.Z)(e) : null,
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
        streamMetadata: r,
        streamApplication:
            null !== (t = u.streamApplication) && void 0 !== t
                ? t
                : {
                      id: null,
                      name: null == r ? void 0 : r.sourceName
                  }
    });
}
en(es, 'defaultProps', { context: $.Yn.DEFAULT });
