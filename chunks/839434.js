n.d(t, { Z: () => el }), n(388685), n(642613);
var i,
    r = n(54381),
    s = n(473749),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    c = n(692547),
    d = n(28664),
    u = n(477690),
    h = n(481060),
    f = n(239091),
    p = n(765250),
    g = n(13245),
    m = n(872810),
    b = n(586902),
    y = n(835473),
    v = n(933557),
    O = n(600164),
    E = n(594190),
    x = n(925329),
    S = n(569545),
    Z = n(914923),
    j = n(165393),
    _ = n(989941),
    C = n(552282),
    I = n(345243),
    P = n(565799),
    w = n(501655),
    N = n(786915),
    T = n(7188),
    D = n(597998),
    k = n(199902),
    R = n(314897),
    A = n(592125),
    L = n(404577),
    M = n(131951),
    z = n(944486),
    V = n(606304),
    U = n(449224),
    W = n(938475),
    G = n(237997),
    B = n(136015),
    H = n(51144),
    F = n(145597),
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
function es(e) {
    let {
            flipped: t = !1,
            locked: n = !1,
            user: i,
            nick: o,
            displayNameMode: c,
            displayUserMode: d,
            size: u = Q.ipw.LARGE,
            onClick: h,
            onContextMenu: f,
            context: p,
            guildId: g,
            voiceState: m,
        } = e,
        y = (0, q.Z)({ location: "overlay_voice_widget" }),
        v = (0, a.e7)([G.default], () => G.default.showKeybindIndicators),
        O = (0, a.e7)([R.default], () => R.default.getId()),
        E = (0, a.e7)([M.Z], () => M.Z.isLocalMute(i.id)),
        x = (0, a.e7)([k.Z], () => k.Z.getCurrentUserActiveStream()),
        S = (0, a.Wu)([k.Z], () => (null != x ? k.Z.getViewerIds(x) : [])),
        Z = (0, b.Z)({
            userId: i.id,
            context: p,
        }),
        j = (0, a.e7)([V.Z], () => V.Z.isPrioritySpeaker(i.id, p)),
        _ = (0, a.e7)([k.Z], () => null != k.Z.getStreamForUser(i.id, g)),
        C = s.useMemo(() => null != x && x.ownerId !== i.id && S.includes(i.id), [x, i.id, S]);
    if (d === Q.OYC.ONLY_WHILE_SPEAKING && n && !Z) return null;
    let I = i.id === O,
        { mute: P, selfMute: w, suppress: N, deaf: T, selfDeaf: A } = m,
        L = y && v,
        z = w && (!I || !L);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(D.ZP, {
                guildId: g,
                onClick: n ? void 0 : (e) => (null == h ? void 0 : h(e, i)),
                onContextMenu: n ? void 0 : (e) => (null == f ? void 0 : f(e, i)),
                className: l()(et.voiceUserWrapper, {
                    [et.faded]: !Z,
                    [et.interactive]: !n,
                }),
                user: i,
                nick: o,
                speaking: !1,
                flipped: t,
                isStreaming: _,
                iconClassName: l()(et.voiceIcon, { [et.locked]: n }),
                isWatching: C,
                isOverlay: !0,
                size: u,
                priority: j,
                mute: P || z || E,
                localMute: E,
                serverMute: P || N,
                deaf: T || A,
                serverDeaf: T,
                userNameClassName: l()(et.username, {
                    [et.locked]: n,
                    [et.hidden]: n && (c === Q.wC$.NEVER || (!Z && c === Q.wC$.ONLY_WHILE_SPEAKING)),
                }),
            }),
            I &&
                L &&
                (0, r.jsx)(K.Z, {
                    value: w,
                    action: Q.kg4.TOGGLE_MUTE,
                    shouldShow: !P && !N,
                }),
        ],
    });
}
class eo extends (i = s.PureComponent) {
    renderVoiceUsers() {
        let {
                context: e,
                sortedVoiceStates: t,
                displayNameMode: n,
                displayUserMode: i,
                locked: s,
                isPreviewingInGame: o,
                channel: a,
                anchor: c,
                avatarSizeMode: d,
            } = this.props,
            h = null != c.right,
            f = t.map((t) => {
                var l;
                let { user: c, voiceState: u, member: f } = t;
                if (null == c || null == a || null == e) return null;
                let p = s || o;
                return (0, r.jsx)(
                    es,
                    {
                        guildId: null == a ? void 0 : a.guild_id,
                        user: c,
                        nick: null != (l = null == f ? void 0 : f.nick) ? l : H.ZP.getName(c),
                        flipped: h,
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
            className: l()({
                [u.Z.VOICE_WIDGET_TOP_MARGIN]: s,
                [et.lockedContainer]: s,
            }),
            children: (0, r.jsx)(D.eJ, {
                className: et.voiceList,
                children: f,
            }),
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
                        (0, r.jsx)(h.Vni, {
                            size: "custom",
                            color: c.Z.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: l()(et.icon, et.faded, et.dragIcon),
                        }),
                        (0, r.jsx)(h.gj8, {
                            size: "custom",
                            color: c.Z.unsafe_rawColors.WHITE.css,
                            width: 20,
                            height: 20,
                            className: l()(et.icon, et.faded, et.speakerIcon),
                        }),
                        (0, r.jsx)(h.Text, {
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
                          icon: h.ewm,
                          label: ee.intl.string(ee.t.NiTd0e),
                          onClick: this.handleOpenVoiceSettings,
                          tooltipPosition: "left",
                          size: 18,
                      }),
                n
                    ? null
                    : (0, r.jsx)(J.ZP.Icon, {
                          icon: e ? h.QVc : h.k5M,
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
            channel: s,
            application: o,
            streamMetadata: a,
            streamApplication: c,
            stream: u,
        } = this.props;
        if (t || null == u || null == s) return null;
        let { sanitizedTitle: f, title: p } = (0, Z.Z)(a);
        return (0, r.jsx)(J.ZP.Bar, {
            className: l()(et.streamerControls, {
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
                            (null == c ? void 0 : c.id) != null && c.id === (null == o ? void 0 : o.id)
                                ? (0, r.jsx)(x.Z, {
                                      className: et.gameIcon,
                                      game: o,
                                  })
                                : (0, r.jsx)(j.Z, { title: f }),
                            (0, r.jsxs)(O.Z, {
                                direction: O.Z.Direction.VERTICAL,
                                justify: O.Z.Justify.BETWEEN,
                                className: et.streamerInfo,
                                children: [
                                    (0, r.jsx)(h.Text, {
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
                                children: (0, r.jsx)(N.Z, {
                                    stream: u,
                                    iconClassName: et.streamerIcon,
                                    appContext: Q.IlC.OVERLAY,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: et.streamerIconWrapper,
                                children: (0, r.jsx)(T.Z, {
                                    stream: u,
                                    appContext: Q.IlC.OVERLAY,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: et.streamerIconWrapper,
                                children: (0, r.jsx)(d.u, {
                                    asContainer: !0,
                                    text: ee.intl.string(ee.t.S5anIc),
                                    children: (0, r.jsx)(h.P3F, {
                                        onClick: this.handleStopStream,
                                        "aria-label": ee.intl.string(ee.t.S5anIc),
                                        children: (0, r.jsx)(h.g5r, {
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
                (0, f.jW)(e, async () => {
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
                (0, h.ZDy)(async () => {
                    let { default: s } = await n.e("51749").then(n.bind(n, 800740));
                    return (n) =>
                        (0, r.jsx)(
                            s,
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
                null != e && m.g((0, S.V9)(e));
            });
    }
}
function el(e) {
    var t;
    let n = (0, a.e7)([z.Z, A.Z], () => A.Z.getChannel(z.Z.getVoiceChannelId())),
        i = (0, v.ZP)(n),
        o = (function () {
            let [e] = (0, a.e7)(
                    [W.ZP, P.Z, z.Z, A.Z],
                    () => {
                        let e = A.Z.getChannel(z.Z.getVoiceChannelId());
                        return null == e
                            ? [[], -1]
                            : e.isGuildStageVoice()
                              ? [P.Z.getMutableParticipants(e.id, w.pV.SPEAKER), P.Z.getParticipantsVersion(e.id)]
                              : [W.ZP.getVoiceStatesForChannel(e), W.ZP.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    B.Q,
                ),
                t = (0, a.e7)([R.default], () => R.default.getId()),
                n = (0, q.Z)({ location: "voice_widget" });
            return s.useMemo(
                () => (n ? [...e].sort((e, n) => (e.user.id === t ? -1 : +(n.user.id === t))) : e),
                [e, t, n],
            );
        })(),
        l = (0, a.e7)([k.Z], () => k.Z.getStreamerActiveStreamMetadata()),
        c = (0, a.e7)([E.ZP, U.Z, L.Z], () => {
            var e;
            let t = (0, _.Z)(E.ZP, U.Z);
            return null != t ? (null == (e = L.Z.getGameByGameData(t)) ? void 0 : e.id) : null;
        }),
        d = (0, y.q)(c),
        u = (0, a.cj)([E.ZP, U.Z, k.Z, G.default], () => {
            let e = (0, _.Z)(E.ZP, U.Z),
                t = k.Z.getCurrentUserActiveStream();
            return {
                displayUserMode: G.default.getDisplayUserMode(),
                displayNameMode: G.default.getDisplayNameMode(),
                avatarSizeMode: G.default.getAvatarSizeMode(),
                streamApplication: (null == l ? void 0 : l.pid) === (0, F.getPID)() ? (0, C.Z)(e) : null,
                stream: t,
            };
        });
    return (0, r.jsx)(
        eo,
        er(ei(er(ei({}, u), { application: d }), e), {
            sortedVoiceStates: o,
            channel: n,
            title: null != i ? i : "",
            streamMetadata: l,
            streamApplication:
                null != (t = u.streamApplication)
                    ? t
                    : {
                          id: null,
                          name: null == l ? void 0 : l.sourceName,
                      },
        }),
    );
}
en(eo, "defaultProps", { context: $.Yn.DEFAULT });
