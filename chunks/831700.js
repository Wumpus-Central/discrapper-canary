n.d(t, { Z: () => ei }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(846519),
    c = n(28664),
    u = n(481060),
    d = n(475179),
    f = n(239091),
    h = n(146773),
    p = n(888651),
    g = n(619915),
    b = n(117358),
    m = n(526139),
    y = n(168611),
    O = n(201895),
    v = n(718589),
    j = n(933557),
    C = n(557135),
    x = n(873696),
    E = n(446226),
    S = n(305325),
    I = n(281956),
    _ = n(66999),
    P = n(554747),
    N = n(378844),
    Z = n(574176),
    w = n(763624),
    T = n(359110),
    A = n(155409),
    R = n(695346),
    D = n(592125),
    M = n(430824),
    L = n(607744),
    k = n(496675),
    G = n(306680),
    U = n(9156),
    B = n(979651),
    F = n(934415),
    V = n(98597),
    H = n(648501),
    z = n(473403),
    W = n(830993),
    K = n(653577),
    Y = n(207055),
    q = n(981631),
    Q = n(647086),
    X = n(388032),
    J = n(642915);
function $(e, t, n) {
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
function ee(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                $(e, t, n[t]);
            });
    }
    return e;
}
function et(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class en extends V.ZP {
    componentWillUnmount() {
        this.activitiesHideTimeout.stop();
    }
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null != (e = null == t ? void 0 : t.length) ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, F.rY)(e, B.Z, M.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return J.containerUserOver;
        if (null != t)
            if (e > t) return J.containerDragAfter;
            else return J.containerDragBefore;
        return J.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n, showEmptyChannelTopic: i } = this.props,
            l = null == (e = (0, x.D)(this.props.subtitle)) ? void 0 : e.subtitle,
            { hovered: a } = this.state;
        return (0, r.jsx)(K.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: l,
            hovered: a,
            showEmptyChannelTopic: i,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, r.jsx)(Y.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: i,
            tabIndex: l,
            location: q.Sbl.GUILD_CHANNEL_LIST,
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)("div", {
                  className: J.channelInfo,
                  children: e,
              });
    }
    render() {
        let {
                channel: e,
                selected: t,
                connected: n,
                unread: i,
                resolvedUnreadSetting: l,
                mentionCount: o,
                locked: s,
                sorting: d,
                isUserOver: f,
                connectChannelDropTarget: h,
                connectChannelDragSource: p,
                connectUserDropTarget: g,
                connectDragPreview: b,
                canReorderChannel: m,
                canMoveMembers: y,
                showTutorial: j,
                hasActiveEvent: C,
                embeddedApps: x,
                isSubscriptionGated: E,
                isFavoriteSuggestion: S,
                withGuildIcon: I,
                hasStartTime: _,
                shouldHighlightChannel: P,
                shouldUseAnimatedWaveform: N,
            } = this.props,
            { shouldShowActivities: Z, shouldShowGuildVerificationPopout: w } = this.state,
            T = P || N,
            R = this.getVoiceStatesCount(),
            D = (0, r.jsxs)("li", {
                ref: this.ref,
                className: a()(this.getModeClass(), {
                    [J.disabled]: this.isDisabled(),
                    [J.voiceChannelHighlightContainer]: P,
                }),
                "data-dnd-name": e.name,
                children: [
                    P &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", { className: J.voiceChannelHighlightBorder }),
                                (0, r.jsx)("div", { className: J.voiceChannelHighlightGlow }),
                            ],
                        }),
                    (0, r.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, r.jsx)(u.yRy, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            onRequestClose: this.closeGuildVerificationPopout,
                            shouldShow: (Z && !d && !f && !w) || w,
                            children: () =>
                                (0, r.jsx)(c.u, {
                                    text: this.getTooltipText(),
                                    children: (0, r.jsxs)(z.ZP, {
                                        ref: this.channelItemRef,
                                        className: J.iconVisibility,
                                        iconClassName: a()({ [J.iconLive]: C || _ || T }),
                                        hasActiveEvent: C,
                                        channel: e,
                                        selected: !S && t,
                                        connected: n,
                                        unread: n ? i : void 0,
                                        resolvedUnreadSetting: l,
                                        mentionCount: o,
                                        locked: s,
                                        subtitle: this.renderSubtitle(),
                                        onClick: () => {
                                            this.handleClick();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e);
                                        },
                                        connectDragPreview: b,
                                        isFavoriteSuggestion: S,
                                        "aria-label": (0, O.ZP)({
                                            channel: e,
                                            unread: i,
                                            mentionCount: o,
                                            userCount: R,
                                            embeddedActivitiesCount: x.length,
                                            isSubscriptionGated: E,
                                        }),
                                        "aria-describedby": (0, v.Z)({
                                            channel: e,
                                            embeddedApps: x,
                                        }),
                                        withGuildIcon: I,
                                        children: [
                                            S &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !S &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        this.renderOpenChatButton(),
                                                        this.renderInviteButton(),
                                                        this.renderEditButton(),
                                                        this.renderChannelInfo(),
                                                    ],
                                                }),
                                        ],
                                    }),
                                }),
                        }),
                    }),
                    this.renderVoiceUsers(),
                ],
            });
        return (
            y && (D = g(D)),
            m && (D = h(p(D))),
            j &&
                (D = (0, r.jsx)(A.Z, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: D,
                })),
            D
        );
    }
    constructor(...e) {
        super(...e),
            $(this, "state", {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1,
            }),
            $(this, "ref", i.createRef()),
            $(this, "channelItemRef", i.createRef()),
            $(this, "activitiesHideTimeout", new s.V7()),
            $(this, "closeGuildVerificationPopout", () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            $(this, "handleVoiceConnect", () => {
                let {
                    locked: e,
                    connected: t,
                    channel: n,
                    unverifiedAccount: r,
                    needSubscriptionToAccess: i,
                    enableOpenTIVForPing: l,
                    mentionCount: a,
                } = this.props;
                r && this.setState({ shouldShowGuildVerificationPopout: !0 });
                let o = l && a > 0;
                o && d.Z.updateChatOpen(n.id, !0),
                    C.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: i,
                        routeDirectlyToChannel: o,
                        locked: e,
                    });
            }),
            $(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    i = M.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, f.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("79695"),
                            n.e("18320"),
                            n.e("83331"),
                            n.e("81070"),
                        ]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                et(ee({}, n), {
                                    channel: t,
                                    guild: i,
                                }),
                            );
                    });
            }),
            $(this, "handleMouseEnter", () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0,
                    });
            }),
            $(this, "handleMouseLeave", () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1,
                    }),
                );
            }),
            $(this, "closePopout", () => {
                this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 });
            }),
            $(this, "handleClick", () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                null != t && (0, I.n)(t) && (0, S.hk)(t), this.handleVoiceConnect();
            }),
            $(this, "handleVoiceStatusClick", (e) => {
                let { connected: t, channel: n } = this.props;
                t && (e.stopPropagation(), (0, b.Z)({ channel: n }));
            }),
            $(this, "renderPopout", () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: i, selected: l, guild: a } = this.props,
                    { shouldShowActivities: o, shouldShowGuildVerificationPopout: s } = this.state;
                if (o && !n && !i && !s) {
                    let n = R.SE.getSetting().includes(a.id);
                    return (0, r.jsx)(W.Z, {
                        onAction: this.closePopout,
                        guild: a,
                        channel: e,
                        voiceStates: t,
                        isChannelSelected: l,
                        shouldShowSettingNudge: n,
                    });
                }
                if (s)
                    return (0, r.jsx)(N.Z, {
                        type: N.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout,
                    });
                throw Error("VoiceChannel.renderPopout: There must always be something to render");
            }),
            $(this, "renderOpenChatButton", () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(c.u, {
                        asContainer: !0,
                        text: X.intl.string(X.t.ZXxLQg),
                        children: (0, r.jsx)(u.P3F, {
                            className: a()(J.iconItem, n ? J.alwaysShown : null),
                            onClick: () => {
                                d.Z.updateChatOpen(e.id, !0), (0, T.Kh)(e.id);
                            },
                            "aria-label": X.intl.string(X.t.ZXxLQg),
                            children: (0, r.jsx)(u.kBi, {
                                size: "xs",
                                color: "currentColor",
                                className: J.actionIcon,
                            }),
                        }),
                    });
            }),
            $(this, "getTooltipText", () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? X.intl.string(X.t.rZfiNq) : null;
            });
    }
}
let er = (0, h.B)((0, p.Q)(en));
function ei(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: i,
            isFavoriteCategory: l,
            selected: a,
            collapsed: s,
            voiceStates: c,
        } = e,
        u = (0, o.cj)([G.ZP], () => ({
            unread: G.ZP.hasUnread(n.id),
            mentionCount: G.ZP.getMentionCount(n.id),
        })),
        d = (0, o.e7)([U.ZP], () => U.ZP.resolveUnreadSetting(n)),
        f = (0, o.cj)([D.Z, L.Z, k.Z], () => {
            let e = D.Z.getChannel(n.parent_id),
                r = L.Z.getCheck(n.guild_id);
            return {
                canManageChannel: k.Z.can(q.Plq.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    (t.id === Q._ ||
                        (null != e ? k.Z.can(q.Plq.MANAGE_CHANNELS, e) : k.Z.can(q.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: k.Z.can(q.Plq.MOVE_MEMBERS, n),
                locked: !k.Z.can(q.Plq.CONNECT, n),
                bypassLimit: k.Z.can(q.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat,
            };
        }),
        h = (0, o.e7)([B.Z], () => B.Z.hasVideo(n.id)),
        p = (0, g.ZP)(n),
        b = (0, j.ZP)(n),
        O = (0, P.qY)(n.id),
        v = (0, o.e7)([y.Z], () => null != y.Z.getStartTime(n), [n]),
        { isSubscriptionGated: C, needSubscriptionToAccess: x } = (0, _.Z)(n.id),
        S = (0, E.Z)(),
        I = (0, o.e7)([U.ZP], () => U.ZP.isFavorite(t.id, n.id)),
        N = e.connected || (null == S ? void 0 : S.channelId) === n.id,
        { enableHangStatus: T, showEmptyChannelTopic: A } = (0, Z.bN)({
            guildId: n.guild_id,
            location: "VoiceChannel",
        }),
        { enableOpenTIVForPing: R } = w.A.useExperiment(
            {
                guildId: n.guild_id,
                location: "VoiceChannel",
            },
            { autoTrackExposure: !1 },
        ),
        { enableHighlight: M, enableWaveformIcon: F } = (0, m.M)(t.id, "VoiceChannel"),
        V = null != c && c.length > 0,
        z = M && V,
        W = F && V,
        K = (0, H.Z)({
            channel: n,
            isChannelSelected: a,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: C,
            needSubscriptionToAccess: x,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        Y = N && null == K;
    return (0, r.jsx)(
        er,
        et(
            ee(
                {
                    channelName: b,
                    embeddedApps: p,
                    embeddedActivityType: q.IIU.PLAYING,
                    video: h,
                    hasActiveEvent: null != O,
                    isSubscriptionGated: C,
                    needSubscriptionToAccess: x,
                },
                u,
                f,
                e,
            ),
            {
                connected: N,
                isFavoriteSuggestion: l && !I,
                forceShowButtons: Y,
                channelInfo: K,
                resolvedUnreadSetting: d,
                enableHangStatus: T,
                showEmptyChannelTopic: A,
                enableOpenTIVForPing: R,
                hasChannelInfo: null != K,
                hasStartTime: v,
                shouldHighlightChannel: z,
                shouldUseAnimatedWaveform: W,
            },
        ),
    );
}
