n.d(t, { Z: () => ei }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(846519),
    c = n(28664),
    u = n(481060),
    d = n(475179),
    f = n(239091),
    h = n(146773),
    p = n(888651),
    g = n(619915),
    m = n(117358),
    b = n(526139),
    _ = n(168611),
    y = n(201895),
    O = n(718589),
    v = n(933557),
    j = n(557135),
    x = n(873696),
    C = n(446226),
    E = n(305325),
    S = n(281956),
    I = n(66999),
    P = n(554747),
    N = n(378844),
    Z = n(574176),
    w = n(763624),
    T = n(359110),
    A = n(155409),
    R = n(695346),
    D = n(592125),
    L = n(430824),
    M = n(607744),
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
    X = n(647086),
    Q = n(388032),
    J = n(55940);
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
        return (0, F.rY)(e, B.Z, L.Z);
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
            { hovered: o } = this.state;
        return (0, r.jsx)(K.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: l,
            hovered: o,
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
                mentionCount: a,
                locked: s,
                sorting: d,
                isUserOver: f,
                connectChannelDropTarget: h,
                connectChannelDragSource: p,
                connectUserDropTarget: g,
                connectDragPreview: m,
                canReorderChannel: b,
                canMoveMembers: _,
                showTutorial: v,
                hasActiveEvent: j,
                embeddedApps: x,
                isSubscriptionGated: C,
                isFavoriteSuggestion: E,
                withGuildIcon: S,
                hasStartTime: I,
                shouldHighlightChannel: P,
                shouldUseAnimatedWaveform: N,
            } = this.props,
            { shouldShowActivities: Z, shouldShowGuildVerificationPopout: w } = this.state,
            T = P || N,
            R = this.getVoiceStatesCount(),
            D = (0, r.jsxs)("li", {
                ref: this.ref,
                className: o()(this.getModeClass(), {
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
                                        iconClassName: o()({ [J.iconLive]: j || I || T }),
                                        hasActiveEvent: j,
                                        channel: e,
                                        selected: !E && t,
                                        connected: n,
                                        unread: n ? i : void 0,
                                        resolvedUnreadSetting: l,
                                        mentionCount: a,
                                        locked: s,
                                        subtitle: this.renderSubtitle(),
                                        onClick: () => {
                                            this.handleClick();
                                        },
                                        onContextMenu: (e) => {
                                            this.handleContextMenu(e);
                                        },
                                        connectDragPreview: m,
                                        isFavoriteSuggestion: E,
                                        "aria-label": (0, y.ZP)({
                                            channel: e,
                                            unread: i,
                                            mentionCount: a,
                                            userCount: R,
                                            embeddedActivitiesCount: x.length,
                                            isSubscriptionGated: C,
                                        }),
                                        "aria-describedby": (0, O.Z)({
                                            channel: e,
                                            embeddedApps: x,
                                        }),
                                        withGuildIcon: S,
                                        children: [
                                            E &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        this.renderAcceptSuggestionButton(),
                                                        this.renderRemoveSuggestionButton(),
                                                    ],
                                                }),
                                            !E &&
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
            _ && (D = g(D)),
            b && (D = h(p(D))),
            v &&
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
                    mentionCount: o,
                } = this.props;
                r && this.setState({ shouldShowGuildVerificationPopout: !0 });
                let a = l && o > 0;
                a && d.Z.updateChatOpen(n.id, !0),
                    j.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: i,
                        routeDirectlyToChannel: a,
                        locked: e,
                    });
            }),
            $(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    i = L.Z.getGuild(t.getGuildId());
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
                null != t && (0, S.n)(t) && (0, E.hk)(t), this.handleVoiceConnect();
            }),
            $(this, "handleVoiceStatusClick", (e) => {
                let { connected: t, channel: n } = this.props;
                t && (e.stopPropagation(), (0, m.Z)({ channel: n }));
            }),
            $(this, "renderPopout", () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: i, selected: l, guild: o } = this.props,
                    { shouldShowActivities: a, shouldShowGuildVerificationPopout: s } = this.state;
                if (a && !n && !i && !s) {
                    let n = R.SE.getSetting().includes(o.id);
                    return (0, r.jsx)(W.Z, {
                        onAction: this.closePopout,
                        guild: o,
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
                        text: Q.intl.string(Q.t.ZXxLQg),
                        children: (0, r.jsx)(u.P3F, {
                            className: o()(J.iconItem, n ? J.alwaysShown : null),
                            onClick: () => {
                                d.Z.updateChatOpen(e.id, !0), (0, T.Kh)(e.id);
                            },
                            "aria-label": Q.intl.string(Q.t.ZXxLQg),
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
                return this.isFull() && !e ? Q.intl.string(Q.t.rZfiNq) : null;
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
            selected: o,
            collapsed: s,
            voiceStates: c,
        } = e,
        u = (0, a.cj)([G.ZP], () => ({
            unread: G.ZP.hasUnread(n.id),
            mentionCount: G.ZP.getMentionCount(n.id),
        })),
        d = (0, a.e7)([U.ZP], () => U.ZP.resolveUnreadSetting(n)),
        f = (0, a.cj)([D.Z, M.Z, k.Z], () => {
            let e = D.Z.getChannel(n.parent_id),
                r = M.Z.getCheck(n.guild_id);
            return {
                canManageChannel: k.Z.can(q.Plq.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    (t.id === X._ ||
                        (null != e ? k.Z.can(q.Plq.MANAGE_CHANNELS, e) : k.Z.can(q.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: k.Z.can(q.Plq.MOVE_MEMBERS, n),
                locked: !k.Z.can(q.Plq.CONNECT, n),
                bypassLimit: k.Z.can(q.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat,
            };
        }),
        h = (0, a.e7)([B.Z], () => B.Z.hasVideo(n.id)),
        p = (0, g.ZP)(n),
        m = (0, v.ZP)(n),
        y = (0, P.qY)(n.id),
        O = (0, a.e7)([_.Z], () => null != _.Z.getStartTime(n), [n]),
        { isSubscriptionGated: j, needSubscriptionToAccess: x } = (0, I.Z)(n.id),
        E = (0, C.Z)(),
        S = (0, a.e7)([U.ZP], () => U.ZP.isFavorite(t.id, n.id)),
        N = e.connected || (null == E ? void 0 : E.channelId) === n.id,
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
        { enableHighlight: L, enableWaveformIcon: F } = (0, b.M)(t.id, "VoiceChannel"),
        V = null != c && c.length > 0,
        z = L && V,
        W = F && V,
        K = (0, H.Z)({
            channel: n,
            isChannelSelected: o,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: j,
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
                    channelName: m,
                    embeddedApps: p,
                    embeddedActivityType: q.IIU.PLAYING,
                    video: h,
                    hasActiveEvent: null != y,
                    isSubscriptionGated: j,
                    needSubscriptionToAccess: x,
                },
                u,
                f,
                e,
            ),
            {
                connected: N,
                isFavoriteSuggestion: l && !S,
                forceShowButtons: Y,
                channelInfo: K,
                resolvedUnreadSetting: d,
                enableHangStatus: T,
                showEmptyChannelTopic: A,
                enableOpenTIVForPing: R,
                hasChannelInfo: null != K,
                hasStartTime: O,
                shouldHighlightChannel: z,
                shouldUseAnimatedWaveform: W,
            },
        ),
    );
}
