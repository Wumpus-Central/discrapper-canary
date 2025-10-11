n.d(t, { Z: () => el }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(846519),
    c = n(28664),
    u = n(481060),
    d = n(475179),
    p = n(239091),
    h = n(146773),
    f = n(888651),
    g = n(619915),
    m = n(117358),
    b = n(973285),
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
    w = n(340541),
    T = n(763624),
    A = n(359110),
    R = n(155409),
    D = n(695346),
    L = n(592125),
    M = n(430824),
    k = n(607744),
    G = n(496675),
    U = n(306680),
    B = n(9156),
    V = n(979651),
    F = n(934415),
    H = n(98597),
    z = n(648501),
    W = n(473403),
    K = n(830993),
    Y = n(653577),
    q = n(207055),
    X = n(981631),
    Q = n(647086),
    J = n(388032),
    $ = n(55940);
function ee(e, t, n) {
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
function et(e) {
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
                ee(e, t, n[t]);
            });
    }
    return e;
}
function en(e, t) {
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
class er extends H.ZP {
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
        return (0, F.rY)(e, V.Z, M.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return $.containerUserOver;
        if (null != t)
            if (e > t) return $.containerDragAfter;
            else return $.containerDragBefore;
        return $.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n, enableHangStatus: i, showEmptyChannelTopic: l } = this.props,
            o = null == (e = (0, x.D)(this.props.subtitle)) ? void 0 : e.subtitle,
            { hovered: a } = this.state;
        return (0, r.jsx)(Y.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: o,
            hovered: a,
            enableHangStatus: i,
            showEmptyChannelTopic: l,
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, r.jsx)(q.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: i,
            tabIndex: l,
            location: X.Sbl.GUILD_CHANNEL_LIST,
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)("div", {
                  className: $.channelInfo,
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
                isUserOver: p,
                connectChannelDropTarget: h,
                connectChannelDragSource: f,
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
            } = this.props,
            { shouldShowActivities: P, shouldShowGuildVerificationPopout: N } = this.state,
            Z = (0, w.jW)({ location: "voice_channel" }).entrypoints,
            T = this.getVoiceStatesCount(),
            A = (0, r.jsxs)("li", {
                ref: this.ref,
                className: o()(this.getModeClass(), { [$.disabled]: this.isDisabled() }),
                "data-dnd-name": e.name,
                children: [
                    (0, r.jsx)("div", {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, r.jsx)(u.yRy, {
                            targetElementRef: this.channelItemRef,
                            position: "right",
                            renderPopout: this.renderPopout,
                            spacing: 0,
                            onRequestClose: this.closeGuildVerificationPopout,
                            shouldShow: (P && !d && !p && !N) || N,
                            children: () =>
                                (0, r.jsx)(c.u, {
                                    text: this.getTooltipText(),
                                    children: (0, r.jsxs)(W.ZP, {
                                        ref: this.channelItemRef,
                                        className: $.iconVisibility,
                                        iconClassName: o()({ [$.iconLive]: j || I }),
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
                                            userCount: T,
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
                                                        Z
                                                            ? this.renderOptionsButton({
                                                                  onContextMenu: this.handleContextMenu,
                                                              })
                                                            : this.renderEditButton(),
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
            _ && (A = g(A)),
            b && (A = h(f(A))),
            v &&
                (A = (0, r.jsx)(R.Z, {
                    childRef: this.ref,
                    tutorialId: "voice-conversations",
                    position: "right",
                    offsetX: -20,
                    children: A,
                })),
            A
        );
    }
    constructor(...e) {
        super(...e),
            ee(this, "state", {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1,
            }),
            ee(this, "ref", i.createRef()),
            ee(this, "channelItemRef", i.createRef()),
            ee(this, "activitiesHideTimeout", new s.V7()),
            ee(this, "closeGuildVerificationPopout", () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            ee(this, "handleVoiceConnect", () => {
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
            ee(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    i = M.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, p.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("79695"),
                            n.e("18320"),
                            n.e("83331"),
                            n.e("81070"),
                        ]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                en(et({}, n), {
                                    channel: t,
                                    guild: i,
                                }),
                            );
                    });
            }),
            ee(this, "handleMouseEnter", () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0,
                    });
            }),
            ee(this, "handleMouseLeave", () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1,
                    }),
                );
            }),
            ee(this, "closePopout", () => {
                this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 });
            }),
            ee(this, "handleClick", () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                null != t && (0, S.n)(t) && (0, E.hk)(t), this.handleVoiceConnect();
            }),
            ee(this, "handleVoiceStatusClick", (e) => {
                let { connected: t, channel: n } = this.props;
                t && (e.stopPropagation(), (0, m.Z)({ channel: n }));
            }),
            ee(this, "renderPopout", () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: i, selected: l, guild: o } = this.props,
                    { shouldShowActivities: a, shouldShowGuildVerificationPopout: s } = this.state;
                if (a && !n && !i && !s) {
                    let n = D.SE.getSetting().includes(o.id);
                    return (0, r.jsx)(K.Z, {
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
            ee(this, "renderOpenChatButton", () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(c.u, {
                        asContainer: !0,
                        text: J.intl.string(J.t.ZXxLQk),
                        children: (0, r.jsx)(u.P3F, {
                            className: o()($.iconItem, n ? $.alwaysShown : null),
                            onClick: () => {
                                d.Z.updateChatOpen(e.id, !0), (0, A.Kh)(e.id);
                            },
                            "aria-label": J.intl.string(J.t.ZXxLQk),
                            children: (0, r.jsx)(u.kBi, {
                                size: "xs",
                                color: "currentColor",
                                className: $.actionIcon,
                            }),
                        }),
                    });
            }),
            ee(this, "getTooltipText", () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? J.intl.string(J.t.rZfiNj) : null;
            });
    }
}
let ei = (0, h.B)((0, f.Q)(er));
function el(e) {
    let {
            guild: t,
            channel: n,
            disableSorting: i,
            isFavoriteCategory: l,
            selected: o,
            collapsed: s,
            voiceStates: c,
        } = e,
        u = (0, a.cj)([U.ZP], () => ({
            unread: U.ZP.hasUnread(n.id),
            mentionCount: U.ZP.getMentionCount(n.id),
        })),
        d = (0, a.e7)([B.ZP], () => B.ZP.resolveUnreadSetting(n)),
        p = (0, a.cj)([L.Z, k.Z, G.Z], () => {
            let e = L.Z.getChannel(n.parent_id),
                r = k.Z.getCheck(n.guild_id);
            return {
                canManageChannel: G.Z.can(X.Plq.MANAGE_CHANNELS, n),
                canReorderChannel:
                    !0 !== i &&
                    (t.id === Q._ ||
                        (null != e ? G.Z.can(X.Plq.MANAGE_CHANNELS, e) : G.Z.can(X.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: G.Z.can(X.Plq.MOVE_MEMBERS, n),
                locked: !G.Z.can(X.Plq.CONNECT, n),
                bypassLimit: G.Z.can(X.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat,
            };
        }),
        h = (0, a.e7)([V.Z], () => V.Z.hasVideo(n.id)),
        f = (0, g.ZP)(n),
        m = (0, v.ZP)(n),
        y = (0, P.qY)(n.id),
        { enabled: O } = b.W.useExperiment({
            guildId: t.id,
            location: "VoiceChannel",
        }),
        j = (0, a.e7)([_.Z], () => !!O && null != _.Z.getStartTime(n), [n, O]),
        { isSubscriptionGated: x, needSubscriptionToAccess: E } = (0, I.Z)(n.id),
        S = (0, C.Z)(),
        N = (0, a.e7)([B.ZP], () => B.ZP.isFavorite(t.id, n.id)),
        w = e.connected || (null == S ? void 0 : S.channelId) === n.id,
        { enableHangStatus: A, showEmptyChannelTopic: R } = (0, Z.bN)({
            guildId: n.guild_id,
            location: "VoiceChannel",
        }),
        { enableOpenTIVForPing: D } = T.A.useExperiment(
            {
                guildId: n.guild_id,
                location: "VoiceChannel",
            },
            { autoTrackExposure: !1 },
        ),
        M = (0, z.Z)({
            channel: n,
            isChannelSelected: o,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: x,
            needSubscriptionToAccess: E,
            enableConnectedUserLimit: !0,
            enableActivities: !0,
        }),
        F = w && null == M;
    return (0, r.jsx)(
        ei,
        en(
            et(
                {
                    channelName: m,
                    embeddedApps: f,
                    embeddedActivityType: X.IIU.PLAYING,
                    video: h,
                    hasActiveEvent: null != y,
                    isSubscriptionGated: x,
                    needSubscriptionToAccess: E,
                },
                u,
                p,
                e,
            ),
            {
                connected: w,
                isFavoriteSuggestion: l && !N,
                forceShowButtons: F,
                channelInfo: M,
                resolvedUnreadSetting: d,
                enableHangStatus: A,
                showEmptyChannelTopic: R,
                enableOpenTIVForPing: D,
                hasChannelInfo: null != M,
                hasStartTime: j,
            },
        ),
    );
}
