n.d(t, {
    Z: function () {
        return et;
    }
}),
    n(47120),
    n(411104);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(846519),
    s = n(481060),
    c = n(475179),
    u = n(239091),
    d = n(146773),
    h = n(888651),
    p = n(619915),
    f = n(339340),
    m = n(201895),
    g = n(718589),
    v = n(933557),
    C = n(557135),
    x = n(873696),
    I = n(215339),
    _ = n(832382),
    Z = n(446226),
    b = n(305325),
    S = n(281956),
    N = n(66999),
    E = n(554747),
    y = n(378844),
    j = n(574176),
    T = n(359110),
    P = n(155409),
    A = n(695346),
    w = n(447564),
    M = n(592125),
    L = n(430824),
    R = n(607744),
    D = n(496675),
    G = n(306680),
    B = n(9156),
    k = n(979651),
    U = n(934415),
    O = n(63063),
    V = n(98597),
    H = n(648501),
    F = n(473403),
    W = n(830993),
    z = n(653577),
    q = n(207055),
    Y = n(981631),
    Q = n(647086),
    J = n(388032),
    K = n(831746);
function X(e, t, n) {
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
class $ extends V.ZP {
    componentWillUnmount() {
        this.activitiesHideTimeout.stop();
    }
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, U.rY)(e, k.Z, L.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return K.containerUserOver;
        if (null != t) return e > t ? K.containerDragAfter : K.containerDragBefore;
        return K.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n, enableHangStatus: l, allowChannelTopic: r } = this.props,
            a = null === (e = (0, x.D)(this.props.subtitle)) || void 0 === e ? void 0 : e.subtitle,
            { hovered: o } = this.state;
        return (0, i.jsx)(z.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: a,
            hovered: o,
            enableHangStatus: l,
            allowChannelTopic: r
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: r } = this.props;
        return (0, i.jsx)(q.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: r,
            location: Y.Sbl.GUILD_CHANNEL_LIST
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, i.jsx)('div', {
                  className: K.channelInfo,
                  children: e
              });
    }
    renderHDSplashedIcon() {
        let { channel: e, locked: t } = this.props;
        return t || !e.isHDStreamSplashed
            ? null
            : (0, i.jsx)(s.Tooltip, {
                  text: J.intl.string(J.t.gpF6QU),
                  children: (t) => {
                      let { onMouseEnter: n, onMouseLeave: l, onFocus: a, onBlur: o } = t;
                      return (0, i.jsx)(s.Clickable, {
                          className: r()(K.iconItem, K.alwaysShown),
                          onClick: () => {
                              (0, I.X)('VoiceChannel') ? (0, w.openHDPotionModal)(e, 'VoiceChannel') : window.open(O.Z.getArticleURL(Y.BhN.HD_STREAMING_POTION), '_blank');
                          },
                          'aria-label': J.intl.string(J.t.gpF6QU),
                          onMouseEnter: n,
                          onMouseLeave: l,
                          onFocus: a,
                          onBlur: o,
                          children: (0, i.jsx)(s.PotionIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: K.actionIcon
                          })
                      });
                  }
              });
    }
    render() {
        let { channel: e, selected: t, connected: n, unread: l, resolvedUnreadSetting: a, mentionCount: o, locked: c, sorting: u, isUserOver: d, connectChannelDropTarget: h, connectChannelDragSource: p, connectUserDropTarget: f, connectDragPreview: v, canReorderChannel: C, canMoveMembers: x, showTutorial: I, hasActiveEvent: Z, embeddedApps: b, isSubscriptionGated: S, isFavoriteSuggestion: N, withGuildIcon: E } = this.props,
            { shouldShowActivities: y, shouldShowGuildVerificationPopout: j } = this.state,
            T = this.getVoiceStatesCount(),
            A = (0, i.jsxs)('li', {
                className: r()(this.getModeClass(), { [K.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: [
                    (0, i.jsx)('div', {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, i.jsx)(s.Popout, {
                            position: 'right',
                            renderPopout: this.renderPopout,
                            spacing: 0,
                            onRequestClose: this.closeGuildVerificationPopout,
                            shouldShow: (y && !u && !d && !j) || j,
                            children: () =>
                                (0, i.jsx)(s.Tooltip, {
                                    text: this.getTooltipText(),
                                    children: (s) => {
                                        let { onClick: u, onContextMenu: d, ...h } = s;
                                        return (0, i.jsx)(_.Z, {
                                            channel: e,
                                            children: (0, i.jsxs)(F.Z, {
                                                className: K.iconVisibility,
                                                iconClassName: r()({ [K.iconLive]: Z }),
                                                hasActiveEvent: Z,
                                                channel: e,
                                                selected: !N && t,
                                                connected: n,
                                                unread: n ? l : void 0,
                                                resolvedUnreadSetting: a,
                                                mentionCount: o,
                                                locked: c,
                                                subtitle: this.renderSubtitle(),
                                                onClick: () => {
                                                    this.handleClick(), null == u || u();
                                                },
                                                onContextMenu: (e) => {
                                                    this.handleContextMenu(e), null == d || d();
                                                },
                                                connectDragPreview: v,
                                                isFavoriteSuggestion: N,
                                                'aria-label': (0, m.ZP)({
                                                    channel: e,
                                                    unread: l,
                                                    mentionCount: o,
                                                    userCount: T,
                                                    embeddedActivitiesCount: b.length,
                                                    isSubscriptionGated: S
                                                }),
                                                'aria-describedby': (0, g.Z)({
                                                    channel: e,
                                                    embeddedApps: b
                                                }),
                                                withGuildIcon: E,
                                                ...h,
                                                children: [N && this.renderAcceptSuggestionButton(), N && this.renderRemoveSuggestionButton(), !N && this.renderOpenChatButton(), !N && this.renderInviteButton(), !N && this.renderEditButton(), !N && this.renderChannelInfo(), !N && this.renderHDSplashedIcon()]
                                            })
                                        });
                                    }
                                })
                        })
                    }),
                    this.renderVoiceUsers()
                ]
            });
        return (
            x && (A = f(A)),
            C && (A = h(p(A))),
            I &&
                (A = (0, i.jsx)(P.Z, {
                    tutorialId: 'voice-conversations',
                    position: 'right',
                    offsetX: -20,
                    children: A
                })),
            A
        );
    }
    constructor(...e) {
        super(...e),
            X(this, 'state', {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1
            }),
            X(this, 'activitiesHideTimeout', new o.V7()),
            X(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            X(this, 'handleVoiceConnect', () => {
                let { locked: e, connected: t, channel: n, unverifiedAccount: i, needSubscriptionToAccess: l } = this.props;
                i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    C.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: l,
                        locked: e
                    });
            }),
            X(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    l = L.Z.getGuild(t.getGuildId());
                null != l &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: l
                            });
                    });
            }),
            X(this, 'handleMouseEnter', () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0
                    });
            }),
            X(this, 'handleMouseLeave', () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1
                    })
                );
            }),
            X(this, 'closePopout', () => {
                this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 });
            }),
            X(this, 'handleClick', () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                null != t && (0, S.n)(t) && (0, b.hk)(t), this.handleVoiceConnect();
            }),
            X(this, 'handleVoiceStatusClick', (e) => {
                let { connected: t, channel: l } = this.props;
                t &&
                    (e.stopPropagation(),
                    (0, s.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    channel: l,
                                    ...t
                                });
                        },
                        { modalKey: f.VOICE_CHANNEL_STATUS_MODAL_KEY }
                    ));
            }),
            X(this, 'renderPopout', () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: l, selected: r, guild: a } = this.props,
                    { shouldShowActivities: o, shouldShowGuildVerificationPopout: s } = this.state;
                if (o && !n && !l && !s) {
                    let n = A.SE.getSetting().includes(a.id);
                    return (0, i.jsx)(W.Z, {
                        onAction: this.closePopout,
                        guild: a,
                        channel: e,
                        voiceStates: t,
                        isChannelSelected: r,
                        shouldShowSettingNudge: n
                    });
                }
                if (s)
                    return (0, i.jsx)(y.Z, {
                        type: y.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            X(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, i.jsx)(s.Tooltip, {
                        text: J.intl.string(J.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: l, onMouseLeave: a, onFocus: o, onBlur: u } = t;
                            return (0, i.jsx)(s.Clickable, {
                                className: r()(K.iconItem, n ? K.alwaysShown : null),
                                onClick: () => {
                                    c.Z.updateChatOpen(e.id, !0), (0, T.Kh)(e.id);
                                },
                                'aria-label': J.intl.string(J.t.ZXxLQk),
                                onMouseEnter: l,
                                onMouseLeave: a,
                                onFocus: o,
                                onBlur: u,
                                children: (0, i.jsx)(s.ChatIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: K.actionIcon
                                })
                            });
                        }
                    });
            }),
            X(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? J.intl.string(J.t.rZfiNj) : null;
            });
    }
}
let ee = (0, d.B)((0, h.Q)($));
function et(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: r, selected: o, collapsed: s, voiceStates: c } = e,
        u = (0, a.cj)([G.ZP], () => ({
            unread: G.ZP.hasUnread(n.id),
            mentionCount: G.ZP.getMentionCount(n.id)
        })),
        d = (0, a.e7)([B.ZP], () => B.ZP.resolveUnreadSetting(n)),
        h = (0, a.cj)([M.Z, R.Z, D.Z], () => {
            let e = M.Z.getChannel(n.parent_id),
                i = R.Z.getCheck(n.guild_id);
            return {
                canManageChannel: D.Z.can(Y.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== l && (t.id === Q._ || (null != e ? D.Z.can(Y.Plq.MANAGE_CHANNELS, e) : D.Z.can(Y.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: D.Z.can(Y.Plq.MOVE_MEMBERS, n),
                locked: !D.Z.can(Y.Plq.CONNECT, n),
                bypassLimit: D.Z.can(Y.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat
            };
        }),
        f = (0, a.e7)([k.Z], () => k.Z.hasVideo(n.id)),
        m = (0, p.ZP)(n),
        g = (0, v.ZP)(n),
        C = (0, E.qY)(n.id),
        { isSubscriptionGated: x, needSubscriptionToAccess: I } = (0, N.Z)(n.id),
        _ = (0, Z.Z)(),
        b = (0, a.e7)([B.ZP], () => B.ZP.isFavorite(t.id, n.id)),
        S = e.connected || (null == _ ? void 0 : _.channelId) === n.id,
        { enableHangStatus: y, allowChannelTopic: T } = j.n.useExperiment(
            {
                guildId: n.guild_id,
                location: 'VoiceChannel'
            },
            { autoTrackExposure: !1 }
        ),
        P = (0, H.Z)({
            channel: n,
            isChannelSelected: o,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: x,
            needSubscriptionToAccess: I,
            enableConnectedUserLimit: !0,
            enableActivities: !0
        }),
        A = S && null == P;
    return (0, i.jsx)(ee, {
        channelName: g,
        embeddedApps: m,
        embeddedActivityType: Y.IIU.PLAYING,
        video: f,
        hasActiveEvent: null != C,
        isSubscriptionGated: x,
        needSubscriptionToAccess: I,
        ...u,
        ...h,
        ...e,
        connected: S,
        isFavoriteSuggestion: r && !b,
        forceShowButtons: A,
        channelInfo: P,
        enableHangStatus: y,
        allowChannelTopic: T,
        resolvedUnreadSetting: d
    });
}
