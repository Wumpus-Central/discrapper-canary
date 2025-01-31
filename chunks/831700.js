n.d(t, { Z: () => ee }), n(47120), n(411104);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(846519),
    s = n(481060),
    c = n(475179),
    d = n(239091),
    u = n(146773),
    h = n(888651),
    p = n(619915),
    m = n(339340),
    g = n(201895),
    f = n(718589),
    _ = n(933557),
    v = n(557135),
    x = n(873696),
    C = n(446226),
    Z = n(305325),
    I = n(281956),
    b = n(66999),
    S = n(554747),
    N = n(378844),
    E = n(335353),
    j = n(896835),
    y = n(359110),
    P = n(155409),
    A = n(695346),
    T = n(447564),
    w = n(592125),
    R = n(430824),
    L = n(607744),
    M = n(496675),
    D = n(306680),
    G = n(9156),
    k = n(979651),
    B = n(934415),
    O = n(63063),
    U = n(98597),
    V = n(648501),
    F = n(473403),
    H = n(830993),
    z = n(653577),
    W = n(207055),
    q = n(981631),
    Y = n(647086),
    Q = n(388032),
    J = n(831746);
function K(e, t, n) {
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
class X extends U.ZP {
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
        return (0, B.rY)(e, k.Z, R.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        return n ? J.containerUserOver : null != t ? (e > t ? J.containerDragAfter : J.containerDragBefore) : J.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n } = this.props,
            l = null === (e = (0, x.D)(this.props.subtitle)) || void 0 === e ? void 0 : e.subtitle,
            { hovered: r } = this.state;
        return (0, i.jsx)(z.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: l,
            hovered: r
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: l, tabIndex: r } = this.props;
        return (0, i.jsx)(W.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: l,
            tabIndex: r,
            location: q.Sbl.GUILD_CHANNEL_LIST
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, i.jsx)('div', {
                  className: J.channelInfo,
                  children: e
              });
    }
    renderHDSplashedIcon() {
        let { channel: e, locked: t } = this.props;
        return t || !e.isHDStreamSplashed
            ? null
            : (0, i.jsx)(s.ua7, {
                  text: Q.intl.string(Q.t.gpF6QU),
                  children: (t) => {
                      let { onMouseEnter: n, onMouseLeave: l, onFocus: a, onBlur: o } = t;
                      return (0, i.jsx)(s.P3F, {
                          className: r()(J.iconItem, J.alwaysShown),
                          onClick: () => {
                              (0, j.X)('VoiceChannel') ? (0, T.k)(e, 'VoiceChannel') : window.open(O.Z.getArticleURL(q.BhN.HD_STREAMING_POTION), '_blank');
                          },
                          'aria-label': Q.intl.string(Q.t.gpF6QU),
                          onMouseEnter: n,
                          onMouseLeave: l,
                          onFocus: a,
                          onBlur: o,
                          children: (0, i.jsx)(s.hh5, {
                              size: 'xs',
                              color: 'currentColor',
                              className: J.actionIcon
                          })
                      });
                  }
              });
    }
    render() {
        let { channel: e, selected: t, connected: n, unread: l, resolvedUnreadSetting: a, mentionCount: o, locked: c, sorting: d, isUserOver: u, connectChannelDropTarget: h, connectChannelDragSource: p, connectUserDropTarget: m, connectDragPreview: _, canReorderChannel: v, canMoveMembers: x, showTutorial: C, hasActiveEvent: Z, embeddedApps: I, isSubscriptionGated: b, isFavoriteSuggestion: S, withGuildIcon: N } = this.props,
            { shouldShowActivities: j, shouldShowGuildVerificationPopout: y } = this.state,
            A = this.getVoiceStatesCount(),
            T = (0, i.jsxs)('li', {
                className: r()(this.getModeClass(), { [J.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: [
                    (0, i.jsx)('div', {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, i.jsx)(s.yRy, {
                            position: 'right',
                            renderPopout: this.renderPopout,
                            spacing: 0,
                            onRequestClose: this.closeGuildVerificationPopout,
                            shouldShow: (j && !d && !u && !y) || y,
                            children: () =>
                                (0, i.jsx)(s.ua7, {
                                    text: this.getTooltipText(),
                                    children: (s) => {
                                        let { onClick: d, onContextMenu: u, ...h } = s;
                                        return (0, i.jsx)(E.Z, {
                                            channel: e,
                                            children: (0, i.jsxs)(F.Z, {
                                                className: J.iconVisibility,
                                                iconClassName: r()({ [J.iconLive]: Z }),
                                                hasActiveEvent: Z,
                                                channel: e,
                                                selected: !S && t,
                                                connected: n,
                                                unread: n ? l : void 0,
                                                resolvedUnreadSetting: a,
                                                mentionCount: o,
                                                locked: c,
                                                subtitle: this.renderSubtitle(),
                                                onClick: () => {
                                                    this.handleClick(), null == d || d();
                                                },
                                                onContextMenu: (e) => {
                                                    this.handleContextMenu(e), null == u || u();
                                                },
                                                connectDragPreview: _,
                                                isFavoriteSuggestion: S,
                                                'aria-label': (0, g.ZP)({
                                                    channel: e,
                                                    unread: l,
                                                    mentionCount: o,
                                                    userCount: A,
                                                    embeddedActivitiesCount: I.length,
                                                    isSubscriptionGated: b
                                                }),
                                                'aria-describedby': (0, f.Z)({
                                                    channel: e,
                                                    embeddedApps: I
                                                }),
                                                withGuildIcon: N,
                                                ...h,
                                                children: [S && this.renderAcceptSuggestionButton(), S && this.renderRemoveSuggestionButton(), !S && this.renderOpenChatButton(), !S && this.renderInviteButton(), !S && this.renderEditButton(), !S && this.renderChannelInfo(), !S && this.renderHDSplashedIcon()]
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
            x && (T = m(T)),
            v && (T = h(p(T))),
            C &&
                (T = (0, i.jsx)(P.Z, {
                    tutorialId: 'voice-conversations',
                    position: 'right',
                    offsetX: -20,
                    children: T
                })),
            T
        );
    }
    constructor(...e) {
        super(...e),
            K(this, 'state', {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1
            }),
            K(this, 'activitiesHideTimeout', new o.V7()),
            K(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            K(this, 'handleVoiceConnect', () => {
                let { locked: e, connected: t, channel: n, unverifiedAccount: i, needSubscriptionToAccess: l } = this.props;
                i && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    v.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: l,
                        locked: e
                    });
            }),
            K(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    l = R.Z.getGuild(t.getGuildId());
                null != l &&
                    (0, d.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: l
                            });
                    });
            }),
            K(this, 'handleMouseEnter', () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0
                    });
            }),
            K(this, 'handleMouseLeave', () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1
                    })
                );
            }),
            K(this, 'closePopout', () => {
                this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 });
            }),
            K(this, 'handleClick', () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                null != t && (0, I.n)(t) && (0, Z.hk)(t), this.handleVoiceConnect();
            }),
            K(this, 'handleVoiceStatusClick', (e) => {
                let { connected: t, channel: l } = this.props;
                t &&
                    (e.stopPropagation(),
                    (0, s.ZDy)(
                        async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    channel: l,
                                    ...t
                                });
                        },
                        { modalKey: m.a }
                    ));
            }),
            K(this, 'renderPopout', () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: l, selected: r, guild: a } = this.props,
                    { shouldShowActivities: o, shouldShowGuildVerificationPopout: s } = this.state;
                if (o && !n && !l && !s) {
                    let n = A.SE.getSetting().includes(a.id);
                    return (0, i.jsx)(H.Z, {
                        onAction: this.closePopout,
                        guild: a,
                        channel: e,
                        voiceStates: t,
                        isChannelSelected: r,
                        shouldShowSettingNudge: n
                    });
                }
                if (s)
                    return (0, i.jsx)(N.Z, {
                        type: N.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            K(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, i.jsx)(s.ua7, {
                        text: Q.intl.string(Q.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: l, onMouseLeave: a, onFocus: o, onBlur: d } = t;
                            return (0, i.jsx)(s.P3F, {
                                className: r()(J.iconItem, n ? J.alwaysShown : null),
                                onClick: () => {
                                    c.Z.updateChatOpen(e.id, !0), (0, y.Kh)(e.id);
                                },
                                'aria-label': Q.intl.string(Q.t.ZXxLQk),
                                onMouseEnter: l,
                                onMouseLeave: a,
                                onFocus: o,
                                onBlur: d,
                                children: (0, i.jsx)(s.kBi, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: J.actionIcon
                                })
                            });
                        }
                    });
            }),
            K(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? Q.intl.string(Q.t.rZfiNj) : null;
            });
    }
}
let $ = (0, u.B)((0, h.Q)(X));
function ee(e) {
    let { guild: t, channel: n, disableSorting: l, isFavoriteCategory: r, selected: o, collapsed: s, voiceStates: c } = e,
        d = (0, a.cj)([D.ZP], () => ({
            unread: D.ZP.hasUnread(n.id),
            mentionCount: D.ZP.getMentionCount(n.id)
        })),
        u = (0, a.e7)([G.ZP], () => G.ZP.resolveUnreadSetting(n)),
        h = (0, a.cj)([w.Z, L.Z, M.Z], () => {
            let e = w.Z.getChannel(n.parent_id),
                i = L.Z.getCheck(n.guild_id);
            return {
                canManageChannel: M.Z.can(q.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== l && (t.id === Y._ || (null != e ? M.Z.can(q.Plq.MANAGE_CHANNELS, e) : M.Z.can(q.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: M.Z.can(q.Plq.MOVE_MEMBERS, n),
                locked: !M.Z.can(q.Plq.CONNECT, n),
                bypassLimit: M.Z.can(q.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !i.canChat
            };
        }),
        m = (0, a.e7)([k.Z], () => k.Z.hasVideo(n.id)),
        g = (0, p.ZP)(n),
        f = (0, _.ZP)(n),
        v = (0, S.qY)(n.id),
        { isSubscriptionGated: x, needSubscriptionToAccess: Z } = (0, b.Z)(n.id),
        I = (0, C.Z)(),
        N = (0, a.e7)([G.ZP], () => G.ZP.isFavorite(t.id, n.id)),
        E = e.connected || (null == I ? void 0 : I.channelId) === n.id,
        j = (0, V.Z)({
            channel: n,
            isChannelSelected: o,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: x,
            needSubscriptionToAccess: Z,
            enableConnectedUserLimit: !0,
            enableActivities: !0
        }),
        y = E && null == j;
    return (0, i.jsx)($, {
        channelName: f,
        embeddedApps: g,
        embeddedActivityType: q.IIU.PLAYING,
        video: m,
        hasActiveEvent: null != v,
        isSubscriptionGated: x,
        needSubscriptionToAccess: Z,
        ...d,
        ...h,
        ...e,
        connected: E,
        isFavoriteSuggestion: r && !N,
        forceShowButtons: y,
        channelInfo: j,
        resolvedUnreadSetting: u
    });
}
