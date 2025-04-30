n.d(t, { Z: () => el }), n(388685), n(642613);
var i,
    r = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
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
    v = n(933557),
    _ = n(600164),
    O = n(118012),
    b = n(594190),
    x = n(925329),
    E = n(569545),
    S = n(914923),
    C = n(165393),
    Z = n(989941),
    j = n(552282),
    I = n(345243),
    P = n(565799),
    N = n(501655),
    w = n(786915),
    T = n(7188),
    k = n(597998),
    D = n(199902),
    A = n(314897),
    R = n(592125),
    L = n(77498),
    M = n(131951),
    z = n(944486),
    V = n(606304),
    W = n(449224),
    U = n(938475),
    B = n(237997),
    G = n(136015),
    F = n(51144),
    H = n(145597),
    Y = n(244073),
    K = n(876205),
    X = n(906037),
    J = n(518084),
    q = n(809357),
    Q = n(981631),
    $ = n(65154),
    ee = n(388032),
    et = n(690200);
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
                en(e, t, n[t]);
            });
    }
    return e;
}
function er(e, t) {
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
    let { flipped: t = !1, locked: n = !1, user: i, nick: o, displayNameMode: c, displayUserMode: d, size: u = Q.ipw.LARGE, onClick: h, onContextMenu: p, context: f, guildId: g, voiceState: y } = e,
        v = (0, q.Z)({ location: 'overlay_voice_widget' }),
        _ = (0, a.e7)([B.default], () => B.default.showKeybindIndicators),
        O = (0, a.e7)([A.default], () => A.default.getId()),
        b = (0, a.e7)([M.Z], () => M.Z.isLocalMute(i.id)),
        x = (0, a.e7)([D.Z], () => D.Z.getCurrentUserActiveStream()),
        E = (0, a.Wu)([D.Z], () => (null != x ? D.Z.getViewerIds(x) : [])),
        S = (0, m.Z)({
            userId: i.id,
            context: f
        }),
        C = (0, a.e7)([V.Z], () => V.Z.isPrioritySpeaker(i.id, f)),
        Z = (0, a.e7)([D.Z], () => null != D.Z.getStreamForUser(i.id, g)),
        j = s.useMemo(() => null != x && x.ownerId !== i.id && E.includes(i.id), [x, i.id, E]);
    if (d === Q.OYC.ONLY_WHILE_SPEAKING && n && !S) return null;
    let I = i.id === O,
        { mute: P, selfMute: N, suppress: w, deaf: T, selfDeaf: R } = y,
        L = v && _,
        z = N && (!I || !L);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(k.ZP, {
                guildId: g,
                onClick: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
                onContextMenu: n ? void 0 : (e) => (null == p ? void 0 : p(e, i)),
                className: l()(et.voiceUserWrapper, {
                    [et.faded]: !S,
                    [et.interactive]: !n
                }),
                user: i,
                nick: o,
                speaking: !1,
                flipped: t,
                isStreaming: Z,
                iconClassName: l()(et.voiceIcon, { [et.locked]: n }),
                isWatching: j,
                isOverlay: !0,
                size: u,
                priority: C,
                mute: P || z || b,
                localMute: b,
                serverMute: P || w,
                deaf: T || R,
                serverDeaf: T,
                userNameClassName: l()(et.username, {
                    [et.locked]: n,
                    [et.hidden]: n && (c === Q.wC$.NEVER || (!S && c === Q.wC$.ONLY_WHILE_SPEAKING))
                })
            }),
            I &&
                L &&
                (0, r.jsx)(K.Z, {
                    value: N,
                    action: Q.kg4.TOGGLE_MUTE,
                    shouldShow: !P && !w
                })
        ]
    });
}
class eo extends (i = s.PureComponent) {
    renderVoiceUsers() {
        let { context: e, sortedVoiceStates: t, displayNameMode: n, displayUserMode: i, locked: s, isPreviewingInGame: o, channel: a, anchor: c, avatarSizeMode: u } = this.props,
            h = null != c.right,
            p = t.map((t) => {
                var l;
                let { user: c, voiceState: d, member: p } = t;
                if (null == c || null == a || null == e) return null;
                let f = s || o;
                return (0, r.jsx)(
                    es,
                    {
                        guildId: null == a ? void 0 : a.guild_id,
                        user: c,
                        nick: null != (l = null == p ? void 0 : p.nick) ? l : F.ZP.getName(c),
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
        return (0, r.jsx)(J.ZP.Body, {
            className: l()({
                [d.Z.VOICE_WIDGET_TOP_MARGIN]: s,
                [et.lockedContainer]: s
            }),
            children: (0, r.jsx)(k.eJ, {
                className: et.voiceList,
                children: p
            })
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, r.jsxs)(J.ZP.Bar, {
            className: l()(et.draggableStartArea, { [et.preview]: n }),
            children: [
                (0, r.jsxs)(J.ZP.Content, {
                    dynamicSize: !0,
                    className: l()(et.content, { [et.hidden]: n }),
                    children: [
                        (0, r.jsx)(u.Vni, {
                            size: 'custom',
                            color: c.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: l()(et.icon, et.faded, et.dragIcon)
                        }),
                        (0, r.jsx)(u.gj8, {
                            size: 'custom',
                            color: c.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: l()(et.icon, et.faded, et.speakerIcon)
                        }),
                        (0, r.jsx)(O.Z, {
                            color: c.Z.unsafe_rawColors.PRIMARY_200.css,
                            className: et.title,
                            children: t
                        })
                    ]
                }),
                n
                    ? null
                    : (0, r.jsx)(J.ZP.Icon, {
                          icon: u.ewm,
                          label: ee.intl.string(ee.t.NiTd0d),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: 'left',
                          size: 18
                      }),
                n
                    ? null
                    : (0, r.jsx)(J.ZP.Icon, {
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
        let { locked: t, pinned: n, isPreviewingInGame: i, channel: s, application: o, streamMetadata: a, streamApplication: c, stream: d } = this.props;
        if (t || null == d || null == s) return null;
        let { sanitizedTitle: h, title: p } = (0, S.Z)(a);
        return (0, r.jsx)(J.ZP.Bar, {
            className: l()(et.streamerControls, {
                [et.hidden]: i,
                [et.unpinned]: !n
            }),
            children: (0, r.jsxs)(J.ZP.Content, {
                className: et.streamerContent,
                dynamicSize: !0,
                children: [
                    (0, r.jsxs)('div', {
                        className: et.streamerInner,
                        children: [
                            (null == c ? void 0 : c.id) != null && c.id === (null == o ? void 0 : o.id)
                                ? (0, r.jsx)(x.Z, {
                                      className: et.gameIcon,
                                      game: o
                                  })
                                : (0, r.jsx)(C.Z, { title: h }),
                            (0, r.jsxs)(_.Z, {
                                direction: _.Z.Direction.VERTICAL,
                                justify: _.Z.Justify.BETWEEN,
                                className: et.streamerInfo,
                                children: [
                                    (0, r.jsx)(u.Text, {
                                        className: et.streaming,
                                        variant: 'text-sm/normal',
                                        children: ee.intl.string(ee.t.XKYej4)
                                    }),
                                    (0, r.jsx)(I.Z, { children: null != (e = null == c ? void 0 : c.name) ? e : p })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)(_.Z, {
                        grow: 0,
                        children: [
                            (0, r.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, r.jsx)(w.Z, {
                                    stream: d,
                                    iconClassName: et.streamerIcon,
                                    appContext: Q.IlC.OVERLAY
                                })
                            }),
                            (0, r.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, r.jsx)(T.Z, {
                                    stream: d,
                                    appContext: Q.IlC.OVERLAY
                                })
                            }),
                            (0, r.jsx)('div', {
                                className: et.streamerIconWrapper,
                                children: (0, r.jsx)(u.DY3, {
                                    text: ee.intl.string(ee.t.S5anIS),
                                    children: (0, r.jsx)(u.zxk, {
                                        onClick: this.handleStopStream,
                                        look: u.zxk.Looks.BLANK,
                                        size: u.zxk.Sizes.NONE,
                                        children: (0, r.jsx)(u.g5r, {
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
            { context: t, locked: n, pinned: i, sortedVoiceStates: r, channel: s } = e;
        return 0 !== r.length && null != t && null != s && (!n || !!i);
    }
    render() {
        let { context: e, lobbyId: t, locked: n, pinned: i, isPreviewingInGame: s, channel: o } = this.props;
        if (null == o || null == e || !this.shouldDisplay()) return null;
        let a = Q.t_t.UNPINNED;
        return (
            i && (a = Q.t_t.PINNED),
            s && (a = Q.t_t.IN_GAME_PREVIEW),
            n && (a = Q.t_t.IN_GAME),
            (0, r.jsxs)(J.ZP, {
                type: a,
                width: 380,
                children: [
                    n ? null : this.renderHeader(),
                    this.renderVoiceUsers(),
                    this.renderStreamerSettings(),
                    n
                        ? null
                        : (0, r.jsx)(Y.Z, {
                              className: l()({ [et.preview]: s }),
                              contentClassName: l()({ [et.hidden]: s }),
                              channel: o,
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
                    let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('86423')]).then(n.bind(n, 881351));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            er(ei({}, n), {
                                user: t,
                                showMediaItems: !0,
                                mediaEngineContext: i
                            })
                        );
                });
            }),
            en(this, 'handleOpenVoiceSettings', () => {
                let { context: e, channel: t, title: i } = this.props;
                (0, u.ZDy)(async () => {
                    let { default: s } = await n.e('66063').then(n.bind(n, 344516));
                    return (n) =>
                        (0, r.jsx)(
                            s,
                            er(ei({}, n), {
                                mediaEngineContext: e,
                                title: null != t ? null : i
                            })
                        );
                });
            }),
            en(this, 'handlePin', () => {
                var e, t, n;
                let i = !this.props.pinned;
                f.Z.track(Q.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null == (e = this.props.channel) ? void 0 : e.guild_id,
                    channel_id: null == (t = this.props.channel) ? void 0 : t.id,
                    channel_type: null == (n = this.props.channel) ? void 0 : n.type,
                    widget_type: Q.Odu.VOICE
                });
                let { id: r } = this.props;
                (0, p.xh)(r);
            }),
            en(this, 'handleStopStream', () => {
                let { stream: e } = this.props;
                null != e && g.g((0, E.V9)(e));
            });
    }
}
function el(e) {
    var t;
    let n = (0, a.e7)([z.Z, R.Z], () => R.Z.getChannel(z.Z.getVoiceChannelId())),
        i = (0, v.ZP)(n),
        o = (function () {
            let [e] = (0, a.e7)(
                    [U.ZP, P.Z, z.Z, R.Z],
                    () => {
                        let e = R.Z.getChannel(z.Z.getVoiceChannelId());
                        return null == e ? [[], -1] : e.isGuildStageVoice() ? [P.Z.getMutableParticipants(e.id, N.pV.SPEAKER), P.Z.getParticipantsVersion(e.id)] : [U.ZP.getVoiceStatesForChannel(e), U.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    G.Q
                ),
                t = (0, a.e7)([A.default], () => A.default.getId()),
                n = (0, q.Z)({ location: 'voice_widget' });
            return s.useMemo(() => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : +(n.user.id === t))) : e), [e, t, n]);
        })(),
        l = (0, a.e7)([D.Z], () => D.Z.getStreamerActiveStreamMetadata()),
        c = (0, a.e7)([b.ZP, W.Z, L.Z], () => {
            var e;
            let t = (0, Z.Z)(b.ZP, W.Z);
            return null != t ? (null == (e = L.Z.getGameByGameData(t)) ? void 0 : e.id) : null;
        }),
        d = (0, y.q)(c),
        u = (0, a.cj)([b.ZP, W.Z, D.Z, B.default], () => {
            let e = (0, Z.Z)(b.ZP, W.Z),
                t = D.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: B.default.getDisplayUserMode(),
                displayNameMode: B.default.getDisplayNameMode(),
                avatarSizeMode: B.default.getAvatarSizeMode(),
                streamApplication: (null == l ? void 0 : l.pid) === (0, H.getPID)() ? (0, j.Z)(e) : null,
                stream: t
            };
        });
    return (0, r.jsx)(
        eo,
        er(ei(er(ei({}, u), { application: d }), e), {
            sortedVoiceStates: o,
            channel: n,
            title: null != i ? i : '',
            streamMetadata: l,
            streamApplication:
                null != (t = u.streamApplication)
                    ? t
                    : {
                          id: null,
                          name: null == l ? void 0 : l.sourceName
                      }
        })
    );
}
en(eo, 'defaultProps', { context: $.Yn.DEFAULT });
