n.d(t, { Z: () => eo }), n(388685), n(642613);
var i,
    r = n(54381),
    a = n(473749),
    s = n(120356),
    o = n.n(s),
    l = n(442837),
    c = n(692547),
    d = n(28664),
    u = n(477690),
    f = n(481060),
    h = n(239091),
    p = n(765250),
    g = n(13245),
    b = n(872810),
    m = n(586902),
    y = n(835473),
    v = n(933557),
    O = n(600164),
    E = n(594190),
    x = n(925329),
    S = n(569545),
    _ = n(914923),
    Z = n(165393),
    j = n(989941),
    C = n(552282),
    I = n(345243),
    P = n(565799),
    w = n(501655),
    T = n(786915),
    N = n(7188),
    D = n(597998),
    k = n(199902),
    R = n(314897),
    A = n(592125),
    L = n(77498),
    M = n(131951),
    z = n(944486),
    V = n(606304),
    W = n(449224),
    U = n(938475),
    G = n(237997),
    B = n(136015),
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
    et = n(732113);
function en(e, t, n) {
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
function ei(e) {
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
function ea(e) {
    let {
            flipped: t = !1,
            locked: n = !1,
            user: i,
            nick: s,
            displayNameMode: c,
            displayUserMode: d,
            size: u = Q.ipw.LARGE,
            onClick: f,
            onContextMenu: h,
            context: p,
            guildId: g,
            voiceState: b,
        } = e,
        y = (0, q.Z)({ location: "overlay_voice_widget" }),
        v = (0, l.e7)([G.default], () => G.default.showKeybindIndicators),
        O = (0, l.e7)([R.default], () => R.default.getId()),
        E = (0, l.e7)([M.Z], () => M.Z.isLocalMute(i.id)),
        x = (0, l.e7)([k.Z], () => k.Z.getCurrentUserActiveStream()),
        S = (0, l.Wu)([k.Z], () => (null != x ? k.Z.getViewerIds(x) : [])),
        _ = (0, m.Z)({
            userId: i.id,
            context: p,
        }),
        Z = (0, l.e7)([V.Z], () => V.Z.isPrioritySpeaker(i.id, p)),
        j = (0, l.e7)([k.Z], () => null != k.Z.getStreamForUser(i.id, g)),
        C = a.useMemo(() => null != x && x.ownerId !== i.id && S.includes(i.id), [x, i.id, S]);
    if (d === Q.OYC.ONLY_WHILE_SPEAKING && n && !_) return null;
    let I = i.id === O,
        { mute: P, selfMute: w, suppress: T, deaf: N, selfDeaf: A } = b,
        L = y && v,
        z = w && (!I || !L);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(D.ZP, {
                guildId: g,
                onClick: n ? void 0 : (e) => (null == f ? void 0 : f(e, i)),
                onContextMenu: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
                className: o()(et.voiceUserWrapper, {
                    [et.faded]: !_,
                    [et.interactive]: !n,
                }),
                user: i,
                nick: s,
                speaking: !1,
                flipped: t,
                isStreaming: j,
                iconClassName: o()(et.voiceIcon, { [et.locked]: n }),
                isWatching: C,
                isOverlay: !0,
                size: u,
                priority: Z,
                mute: P || z || E,
                localMute: E,
                serverMute: P || T,
                deaf: N || A,
                serverDeaf: N,
                userNameClassName: o()(et.username, {
                    [et.locked]: n,
                    [et.hidden]: n && (c === Q.wC$.NEVER || (!_ && c === Q.wC$.ONLY_WHILE_SPEAKING)),
                }),
            }),
            I &&
                L &&
                (0, r.jsx)(K.Z, {
                    value: w,
                    action: Q.kg4.TOGGLE_MUTE,
                    shouldShow: !P && !T,
                }),
        ],
    });
}
class es extends (i = a.PureComponent) {
    renderVoiceUsers() {
        let {
                context: e,
                sortedVoiceStates: t,
                displayNameMode: n,
                displayUserMode: i,
                locked: a,
                isPreviewingInGame: s,
                channel: l,
                anchor: c,
                avatarSizeMode: d,
            } = this.props,
            f = null != c.right,
            h = t.map((t) => {
                var o;
                let { user: c, voiceState: u, member: h } = t;
                if (null == c || null == l || null == e) return null;
                let p = a || s;
                return (0, r.jsx)(
                    ea,
                    {
                        guildId: null == l ? void 0 : l.guild_id,
                        user: c,
                        nick: null != (o = null == h ? void 0 : h.nick) ? o : F.ZP.getName(c),
                        flipped: f,
                        voiceState: u,
                        displayNameMode: n,
                        displayUserMode: i,
                        size: d,
                        locked: p,
                        onContextMenu: this.handleUserContextMenu,
                        onClick: this.handleUserContextMenu,
                        context: e,
                    },
                    c.id,
                );
            });
        return (0, r.jsx)(J.ZP.Body, {
            className: o()({
                [u.Z.VOICE_WIDGET_TOP_MARGIN]: a,
                [et.lockedContainer]: a,
            }),
            children: (0, r.jsx)(D.eJ, {
                className: et.voiceList,
                children: h,
            }),
        });
    }
    renderHeader() {
        let { pinned: e, title: t, isPreviewingInGame: n } = this.props;
        return (0, r.jsxs)(J.ZP.Bar, {
            className: o()(et.draggableStartArea, { [et.preview]: n }),
            children: [
                (0, r.jsxs)(J.ZP.Content, {
                    dynamicSize: !0,
                    className: o()(et.content, { [et.hidden]: n }),
                    children: [
                        (0, r.jsx)(f.Vni, {
                            size: "custom",
                            color: c.Z.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: o()(et.icon, et.faded, et.dragIcon),
                        }),
                        (0, r.jsx)(f.gj8, {
                            size: "custom",
                            color: c.Z.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: o()(et.icon, et.faded, et.speakerIcon),
                        }),
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/normal",
                            style: { color: c.Z.unsafe_rawColors.PRIMARY_200.css },
                            className: et.title,
                            children: t,
                        }),
                    ],
                }),
                n
                    ? null
                    : (0, r.jsx)(J.ZP.Icon, {
                          icon: f.ewm,
                          label: ee.intl.string(ee.t.NiTd0e),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: "left",
                          size: 18,
                      }),
                n
                    ? null
                    : (0, r.jsx)(J.ZP.Icon, {
                          icon: e ? f.QVc : f.k5M,
                          label: e ? ee.intl.string(ee.t.cSu80j) : ee.intl.string(ee.t.cM8Vnm),
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
            channel: a,
            application: s,
            streamMetadata: l,
            streamApplication: c,
            stream: u,
        } = this.props;
        if (t || null == u || null == a) return null;
        let { sanitizedTitle: h, title: p } = (0, _.Z)(l);
        return (0, r.jsx)(J.ZP.Bar, {
            className: o()(et.streamerControls, {
                [et.hidden]: i,
                [et.unpinned]: !n,
            }),
            children: (0, r.jsxs)(J.ZP.Content, {
                className: et.streamerContent,
                dynamicSize: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: et.streamerInner,
                        children: [
                            (null == c ? void 0 : c.id) != null && c.id === (null == s ? void 0 : s.id)
                                ? (0, r.jsx)(x.Z, {
                                      className: et.gameIcon,
                                      game: s,
                                  })
                                : (0, r.jsx)(Z.Z, { title: h }),
                            (0, r.jsxs)(O.Z, {
                                direction: O.Z.Direction.VERTICAL,
                                justify: O.Z.Justify.BETWEEN,
                                className: et.streamerInfo,
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        className: et.streaming,
                                        variant: "text-sm/normal",
                                        children: ee.intl.string(ee.t.XKYej5),
                                    }),
                                    (0, r.jsx)(I.Z, { children: null != (e = null == c ? void 0 : c.name) ? e : p }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(O.Z, {
                        grow: 0,
                        children: [
                            (0, r.jsx)("div", {
                                className: et.streamerIconWrapper,
                                children: (0, r.jsx)(T.Z, {
                                    stream: u,
                                    iconClassName: et.streamerIcon,
                                    appContext: Q.IlC.OVERLAY,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: et.streamerIconWrapper,
                                children: (0, r.jsx)(N.Z, {
                                    stream: u,
                                    appContext: Q.IlC.OVERLAY,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: et.streamerIconWrapper,
                                children: (0, r.jsx)(d.u, {
                                    asContainer: !0,
                                    text: ee.intl.string(ee.t.S5anIc),
                                    children: (0, r.jsx)(f.P3F, {
                                        onClick: this.handleStopStream,
                                        "aria-label": ee.intl.string(ee.t.S5anIc),
                                        children: (0, r.jsx)(f.g5r, {
                                            size: "md",
                                            color: "currentColor",
                                            className: et.streamerIcon,
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
        (0, X.m3)(this.props, this.shouldDisplay());
    }
    componentDidUpdate(e) {
        (0, X.CR)(e, this.props, this.shouldDisplay);
    }
    shouldDisplay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
            { context: t, locked: n, pinned: i, sortedVoiceStates: r, channel: a } = e;
        return 0 !== r.length && null != t && null != a && (!n || !!i);
    }
    render() {
        let { context: e, lobbyId: t, locked: n, pinned: i, isPreviewingInGame: a, channel: s } = this.props;
        if (null == s || null == e || !this.shouldDisplay()) return null;
        let l = Q.t_t.UNPINNED;
        return (
            i && (l = Q.t_t.PINNED),
            a && (l = Q.t_t.IN_GAME_PREVIEW),
            n && (l = Q.t_t.IN_GAME),
            (0, r.jsxs)(J.ZP, {
                type: l,
                width: 380,
                children: [
                    n ? null : this.renderHeader(),
                    this.renderVoiceUsers(),
                    this.renderStreamerSettings(),
                    n
                        ? null
                        : (0, r.jsx)(Y.Z, {
                              className: o()({ [et.preview]: a }),
                              contentClassName: o()({ [et.hidden]: a }),
                              channel: s,
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
            en(this, "handleUserContextMenu", (e, t) => {
                let { context: i } = this.props;
                (0, h.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e("79695"), n.e("69220"), n.e("26465")]).then(
                        n.bind(n, 881351),
                    );
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            er(ei({}, n), {
                                user: t,
                                showMediaItems: !0,
                                mediaEngineContext: i,
                            }),
                        );
                });
            }),
            en(this, "handleOpenVoiceSettings", () => {
                let { context: e, channel: t, title: i } = this.props;
                (0, f.ZDy)(async () => {
                    let { default: a } = await n.e("51749").then(n.bind(n, 800740));
                    return (n) =>
                        (0, r.jsx)(
                            a,
                            er(ei({}, n), {
                                mediaEngineContext: e,
                                subtitle: null != t ? void 0 : i,
                            }),
                        );
                });
            }),
            en(this, "handlePin", () => {
                var e, t, n;
                let i = !this.props.pinned;
                g.Z.track(Q.rMx.OVERLAY_PIN_TOGGLED, {
                    pinned: i,
                    guild_id: null == (e = this.props.channel) ? void 0 : e.guild_id,
                    channel_id: null == (t = this.props.channel) ? void 0 : t.id,
                    channel_type: null == (n = this.props.channel) ? void 0 : n.type,
                    widget_type: Q.Odu.VOICE,
                });
                let { id: r } = this.props;
                (0, p.xh)(r);
            }),
            en(this, "handleStopStream", () => {
                let { stream: e } = this.props;
                null != e && b.g((0, S.V9)(e));
            });
    }
}
function eo(e) {
    var t;
    let n = (0, l.e7)([z.Z, A.Z], () => A.Z.getChannel(z.Z.getVoiceChannelId())),
        i = (0, v.ZP)(n),
        s = (function () {
            let [e] = (0, l.e7)(
                    [U.ZP, P.Z, z.Z, A.Z],
                    () => {
                        let e = A.Z.getChannel(z.Z.getVoiceChannelId());
                        return null == e
                            ? [[], -1]
                            : e.isGuildStageVoice()
                              ? [P.Z.getMutableParticipants(e.id, w.pV.SPEAKER), P.Z.getParticipantsVersion(e.id)]
                              : [U.ZP.getVoiceStatesForChannel(e), U.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    B.Q,
                ),
                t = (0, l.e7)([R.default], () => R.default.getId()),
                n = (0, q.Z)({ location: "voice_widget" });
            return a.useMemo(
                () => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : +(n.user.id === t))) : e),
                [e, t, n],
            );
        })(),
        o = (0, l.e7)([k.Z], () => k.Z.getStreamerActiveStreamMetadata()),
        c = (0, l.e7)([E.ZP, W.Z, L.Z], () => {
            var e;
            let t = (0, j.Z)(E.ZP, W.Z);
            return null != t ? (null == (e = L.Z.getGameByGameData(t)) ? void 0 : e.id) : null;
        }),
        d = (0, y.q)(c),
        u = (0, l.cj)([E.ZP, W.Z, k.Z, G.default], () => {
            let e = (0, j.Z)(E.ZP, W.Z),
                t = k.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: G.default.getDisplayUserMode(),
                displayNameMode: G.default.getDisplayNameMode(),
                avatarSizeMode: G.default.getAvatarSizeMode(),
                streamApplication: (null == o ? void 0 : o.pid) === (0, H.getPID)() ? (0, C.Z)(e) : null,
                stream: t,
            };
        });
    return (0, r.jsx)(
        es,
        er(ei(er(ei({}, u), { application: d }), e), {
            sortedVoiceStates: s,
            channel: n,
            title: null != i ? i : "",
            streamMetadata: o,
            streamApplication:
                null != (t = u.streamApplication)
                    ? t
                    : {
                          id: null,
                          name: null == o ? void 0 : o.sourceName,
                      },
        }),
    );
}
en(es, "defaultProps", { context: $.Yn.DEFAULT });
