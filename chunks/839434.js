n.d(t, { Z: () => ea }), n(388685), n(642613);
var i,
    r = n(951288),
    o = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    c = n(692547),
    d = n(28664),
    u = n(477690),
    h = n(755721),
    p = n(481060),
    f = n(239091),
    g = n(765250),
    m = n(13245),
    y = n(872810),
    O = n(586902),
    v = n(835473),
    _ = n(933557),
    b = n(600164),
    E = n(594190),
    S = n(925329),
    x = n(569545),
    j = n(914923),
    Z = n(662304),
    C = n(989941),
    I = n(552282),
    P = n(345243),
    w = n(565799),
    N = n(501655),
    T = n(786915),
    D = n(7188),
    k = n(597998),
    R = n(199902),
    A = n(314897),
    M = n(592125),
    L = n(77498),
    z = n(131951),
    V = n(944486),
    W = n(606304),
    U = n(449224),
    B = n(938475),
    G = n(237997),
    F = n(136015),
    H = n(51144),
    Y = n(145597),
    K = n(244073),
    X = n(876205),
    J = n(906037),
    Q = n(518084),
    q = n(809357),
    $ = n(981631),
    ee = n(65154),
    et = n(388032),
    en = n(226833);
function ei(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function el(e) {
    let {
            flipped: t = !1,
            locked: n = !1,
            user: i,
            nick: l,
            displayNameMode: c,
            displayUserMode: d,
            size: u = $.ipw.LARGE,
            onClick: h,
            onContextMenu: p,
            context: f,
            guildId: g,
            voiceState: m,
        } = e,
        y = (0, q.Z)({ location: "overlay_voice_widget" }),
        v = (0, a.e7)([G.default], () => G.default.showKeybindIndicators),
        _ = (0, a.e7)([A.default], () => A.default.getId()),
        b = (0, a.e7)([z.Z], () => z.Z.isLocalMute(i.id)),
        E = (0, a.e7)([R.Z], () => R.Z.getCurrentUserActiveStream()),
        S = (0, a.Wu)([R.Z], () => (null != E ? R.Z.getViewerIds(E) : [])),
        x = (0, O.Z)({
            userId: i.id,
            context: f,
        }),
        j = (0, a.e7)([W.Z], () => W.Z.isPrioritySpeaker(i.id, f)),
        Z = (0, a.e7)([R.Z], () => null != R.Z.getStreamForUser(i.id, g)),
        C = o.useMemo(() => null != E && E.ownerId !== i.id && S.includes(i.id), [E, i.id, S]);
    if (d === $.OYC.ONLY_WHILE_SPEAKING && n && !x) return null;
    let I = i.id === _,
        { mute: P, selfMute: w, suppress: N, deaf: T, selfDeaf: D } = m,
        M = y && v,
        L = w && (!I || !M);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(k.ZP, {
                guildId: g,
                onClick: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
                onContextMenu: n ? void 0 : (e) => (null == p ? void 0 : p(e, i)),
                className: s()(en.voiceUserWrapper, {
                    [en.faded]: !x,
                    [en.interactive]: !n,
                }),
                user: i,
                nick: l,
                speaking: !1,
                flipped: t,
                isStreaming: Z,
                iconClassName: s()(en.voiceIcon, { [en.locked]: n }),
                isWatching: C,
                isOverlay: !0,
                size: u,
                priority: j,
                mute: P || L || b,
                localMute: b,
                serverMute: P || N,
                deaf: T || D,
                serverDeaf: T,
                userNameClassName: s()(en.username, {
                    [en.locked]: n,
                    [en.hidden]: n && (c === $.wC$.NEVER || (!x && c === $.wC$.ONLY_WHILE_SPEAKING)),
                }),
            }),
            I &&
                M &&
                (0, r.jsx)(X.Z, {
                    value: w,
                    action: $.kg4.TOGGLE_MUTE,
                    shouldShow: !P && !N,
                }),
        ],
    });
}
class es extends (i = o.PureComponent) {
    renderVoiceUsers() {
        let {
                context: e,
                sortedVoiceStates: t,
                displayNameMode: n,
                displayUserMode: i,
                locked: o,
                isPreviewingInGame: l,
                channel: a,
                anchor: c,
                avatarSizeMode: d,
            } = this.props,
            h = null != c.right,
            p = t.map((t) => {
                var s;
                let { user: c, voiceState: u, member: p } = t;
                if (null == c || null == a || null == e) return null;
                let f = o || l;
                return (0, r.jsx)(
                    el,
                    {
                        guildId: null == a ? void 0 : a.guild_id,
                        user: c,
                        nick: null != (s = null == p ? void 0 : p.nick) ? s : H.ZP.getName(c),
                        flipped: h,
                        voiceState: u,
                        displayNameMode: n,
                        displayUserMode: i,
                        size: d,
                        locked: f,
                        onContextMenu: this.handleUserContextMenu,
                        onClick: this.handleUserContextMenu,
                        context: e,
                    },
                    c.id,
                );
            });
        return (0, r.jsx)(Q.ZP.Body, {
            className: s()({
                [u.Z.VOICE_WIDGET_TOP_MARGIN]: o,
                [en.lockedContainer]: o,
            }),
            children: (0, r.jsx)(k.eJ, {
                className: en.voiceList,
                children: p,
            }),
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, r.jsxs)(Q.ZP.Bar, {
            className: s()(en.draggableStartArea, { [en.preview]: n }),
            children: [
                (0, r.jsxs)(Q.ZP.Content, {
                    dynamicSize: !0,
                    className: s()(en.content, { [en.hidden]: n }),
                    children: [
                        (0, r.jsx)(p.Vni, {
                            size: "custom",
                            color: c.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: s()(en.icon, en.faded, en.dragIcon),
                        }),
                        (0, r.jsx)(p.gj8, {
                            size: "custom",
                            color: c.Z.unsafe_rawColors.WHITE_500.css,
                            width: 20,
                            height: 20,
                            className: s()(en.icon, en.faded, en.speakerIcon),
                        }),
                        (0, r.jsx)(p.Text, {
                            variant: "text-md/normal",
                            style: { color: c.Z.unsafe_rawColors.PRIMARY_200.css },
                            className: en.title,
                            children: t,
                        }),
                    ],
                }),
                n
                    ? null
                    : (0, r.jsx)(Q.ZP.Icon, {
                          icon: p.ewm,
                          label: et.intl.string(et.t.NiTd0d),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: "left",
                          size: 18,
                      }),
                n
                    ? null
                    : (0, r.jsx)(Q.ZP.Icon, {
                          icon: e ? p.QVc : p.k5M,
                          label: e ? et.intl.string(et.t.cSu80t) : et.intl.string(et.t.cM8Vnp),
                          onClick: this.handlePin,
                          tooltipPosition: "left",
                          size: 18,
                          isActive: e,
                      }),
            ],
        });
    }
    renderStreamerSettings() {
        var e;
        let {
            locked: t,
            pinned: n,
            isPreviewingInGame: i,
            channel: o,
            application: l,
            streamMetadata: a,
            streamApplication: c,
            stream: u,
        } = this.props;
        if (t || null == u || null == o) return null;
        let { sanitizedTitle: f, title: g } = (0, j.Z)(a);
        return (0, r.jsx)(Q.ZP.Bar, {
            className: s()(en.streamerControls, {
                [en.hidden]: i,
                [en.unpinned]: !n,
            }),
            children: (0, r.jsxs)(Q.ZP.Content, {
                className: en.streamerContent,
                dynamicSize: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: en.streamerInner,
                        children: [
                            (null == c ? void 0 : c.id) != null && c.id === (null == l ? void 0 : l.id)
                                ? (0, r.jsx)(S.Z, {
                                      className: en.gameIcon,
                                      game: l,
                                  })
                                : (0, r.jsx)(Z.Z, { title: f }),
                            (0, r.jsxs)(b.Z, {
                                direction: b.Z.Direction.VERTICAL,
                                justify: b.Z.Justify.BETWEEN,
                                className: en.streamerInfo,
                                children: [
                                    (0, r.jsx)(p.Text, {
                                        className: en.streaming,
                                        variant: "text-sm/normal",
                                        children: et.intl.string(et.t.XKYej4),
                                    }),
                                    (0, r.jsx)(P.Z, { children: null != (e = null == c ? void 0 : c.name) ? e : g }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(b.Z, {
                        grow: 0,
                        children: [
                            (0, r.jsx)("div", {
                                className: en.streamerIconWrapper,
                                children: (0, r.jsx)(T.Z, {
                                    stream: u,
                                    iconClassName: en.streamerIcon,
                                    appContext: $.IlC.OVERLAY,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: en.streamerIconWrapper,
                                children: (0, r.jsx)(D.Z, {
                                    stream: u,
                                    appContext: $.IlC.OVERLAY,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: en.streamerIconWrapper,
                                children: (0, r.jsx)(d.u, {
                                    asContainer: !0,
                                    text: et.intl.string(et.t.S5anIS),
                                    children: (0, r.jsx)(h.zx, {
                                        onClick: this.handleStopStream,
                                        look: h.zx.Looks.BLANK,
                                        size: h.zx.Sizes.NONE,
                                        children: (0, r.jsx)(p.g5r, {
                                            size: "md",
                                            color: "currentColor",
                                            className: en.streamerIcon,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
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
        let { context: e, lobbyId: t, locked: n, pinned: i, isPreviewingInGame: o, channel: l } = this.props;
        if (null == l || null == e || !this.shouldDisplay()) return null;
        let a = $.t_t.UNPINNED;
        return (
            i && (a = $.t_t.PINNED),
            o && (a = $.t_t.IN_GAME_PREVIEW),
            n && (a = $.t_t.IN_GAME),
            (0, r.jsxs)(Q.ZP, {
                type: a,
                width: 380,
                children: [
                    n ? null : this.renderHeader(),
                    this.renderVoiceUsers(),
                    this.renderStreamerSettings(),
                    n
                        ? null
                        : (0, r.jsx)(K.Z, {
                              className: s()({ [en.preview]: o }),
                              contentClassName: s()({ [en.hidden]: o }),
                              channel: l,
                              lobbyId: t,
                              context: e,
                              pinned: i,
                          }),
                ],
            })
        );
    }
    constructor(...e) {
        super(...e),
            ei(this, "handleUserContextMenu", (e, t) => {
                let { context: i } = this.props;
                (0, f.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            eo(er({}, n), {
                                user: t,
                                showMediaItems: !0,
                                mediaEngineContext: i,
                            }),
                        );
                });
            }),
            ei(this, "handleOpenVoiceSettings", () => {
                let { context: e, channel: t, title: i } = this.props;
                (0, p.ZDy)(async () => {
                    let { default: o } = await n.e("66063").then(n.bind(n, 344516));
                    return (n) =>
                        (0, r.jsx)(
                            o,
                            eo(er({}, n), {
                                mediaEngineContext: e,
                                title: null != t ? null : i,
                            }),
                        );
                });
            }),
            ei(this, "handlePin", () => {
                var e, t, n;
                let i = !this.props.pinned;
                m.Z.track($.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null == (e = this.props.channel) ? void 0 : e.guild_id,
                    channel_id: null == (t = this.props.channel) ? void 0 : t.id,
                    channel_type: null == (n = this.props.channel) ? void 0 : n.type,
                    widget_type: $.Odu.VOICE,
                });
                let { id: r } = this.props;
                (0, g.xh)(r);
            }),
            ei(this, "handleStopStream", () => {
                let { stream: e } = this.props;
                null != e && y.g((0, x.V9)(e));
            });
    }
}
function ea(e) {
    var t;
    let n = (0, a.e7)([V.Z, M.Z], () => M.Z.getChannel(V.Z.getVoiceChannelId())),
        i = (0, _.ZP)(n),
        l = (function () {
            let [e] = (0, a.e7)(
                    [B.ZP, w.Z, V.Z, M.Z],
                    () => {
                        let e = M.Z.getChannel(V.Z.getVoiceChannelId());
                        return null == e
                            ? [[], -1]
                            : e.isGuildStageVoice()
                              ? [w.Z.getMutableParticipants(e.id, N.pV.SPEAKER), w.Z.getParticipantsVersion(e.id)]
                              : [B.ZP.getVoiceStatesForChannel(e), B.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    F.Q,
                ),
                t = (0, a.e7)([A.default], () => A.default.getId()),
                n = (0, q.Z)({ location: "voice_widget" });
            return o.useMemo(
                () => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : +(n.user.id === t))) : e),
                [e, t, n],
            );
        })(),
        s = (0, a.e7)([R.Z], () => R.Z.getStreamerActiveStreamMetadata()),
        c = (0, a.e7)([E.ZP, U.Z, L.Z], () => {
            var e;
            let t = (0, C.Z)(E.ZP, U.Z);
            return null != t ? (null == (e = L.Z.getGameByGameData(t)) ? void 0 : e.id) : null;
        }),
        d = (0, v.q)(c),
        u = (0, a.cj)([E.ZP, U.Z, R.Z, G.default], () => {
            let e = (0, C.Z)(E.ZP, U.Z),
                t = R.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: G.default.getDisplayUserMode(),
                displayNameMode: G.default.getDisplayNameMode(),
                avatarSizeMode: G.default.getAvatarSizeMode(),
                streamApplication: (null == s ? void 0 : s.pid) === (0, Y.getPID)() ? (0, I.Z)(e) : null,
                stream: t,
            };
        });
    return (0, r.jsx)(
        es,
        eo(er(eo(er({}, u), { application: d }), e), {
            sortedVoiceStates: l,
            channel: n,
            title: null != i ? i : "",
            streamMetadata: s,
            streamApplication:
                null != (t = u.streamApplication)
                    ? t
                    : {
                          id: null,
                          name: null == s ? void 0 : s.sourceName,
                      },
        }),
    );
}
ei(es, "defaultProps", { context: ee.Yn.DEFAULT });
