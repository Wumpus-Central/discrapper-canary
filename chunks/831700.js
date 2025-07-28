(n.d(t, { Z: () => et }), n(388685), n(415506));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(846519),
    c = n(481060),
    u = n(475179),
    d = n(239091),
    h = n(146773),
    p = n(888651),
    f = n(619915),
    g = n(117358),
    m = n(201895),
    b = n(718589),
    _ = n(933557),
    O = n(557135),
    y = n(873696),
    C = n(446226),
    v = n(305325),
    j = n(281956),
    E = n(66999),
    S = n(554747),
    x = n(378844),
    I = n(574176),
    P = n(340541),
    N = n(359110),
    w = n(155409),
    Z = n(695346),
    T = n(592125),
    A = n(430824),
    R = n(607744),
    D = n(496675),
    L = n(306680),
    M = n(9156),
    k = n(979651),
    U = n(934415),
    G = n(98597),
    B = n(648501),
    V = n(473403),
    F = n(830993),
    H = n(653577),
    z = n(207055),
    W = n(981631),
    K = n(647086),
    Y = n(388032),
    q = n(915887);
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
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                X(e, t, n[t]);
            }));
    }
    return e;
}
function J(e, t) {
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
class $ extends G.ZP {
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
        return (0, U.rY)(e, k.Z, A.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return q.containerUserOver;
        if (null != t)
            if (e > t) return q.containerDragAfter;
            else return q.containerDragBefore;
        return q.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n, enableHangStatus: i, allowChannelTopic: l } = this.props,
            o = null == (e = (0, y.D)(this.props.subtitle)) ? void 0 : e.subtitle,
            { hovered: a } = this.state;
        return (0, r.jsx)(H.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: o,
            hovered: a,
            enableHangStatus: i,
            allowChannelTopic: l
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, r.jsx)(z.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: i,
            tabIndex: l,
            location: W.Sbl.GUILD_CHANNEL_LIST
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)('div', {
                  className: q.channelInfo,
                  children: e
              });
    }
    render() {
        let { channel: e, selected: t, connected: n, unread: i, resolvedUnreadSetting: l, mentionCount: a, locked: s, sorting: u, isUserOver: d, connectChannelDropTarget: h, connectChannelDragSource: p, connectUserDropTarget: f, connectDragPreview: g, canReorderChannel: _, canMoveMembers: O, showTutorial: y, hasActiveEvent: C, embeddedApps: v, isSubscriptionGated: j, isFavoriteSuggestion: E, withGuildIcon: S } = this.props,
            { shouldShowActivities: x, shouldShowGuildVerificationPopout: I } = this.state,
            N = (0, P.jW)({ location: 'voice_channel' }).entrypoints,
            Z = this.getVoiceStatesCount(),
            T = (0, r.jsxs)('li', {
                ref: this.ref,
                className: o()(this.getModeClass(), { [q.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: [
                    (0, r.jsx)('div', {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, r.jsx)(c.yRy, {
                            targetElementRef: this.channelItemRef,
                            position: 'right',
                            renderPopout: this.renderPopout,
                            spacing: 0,
                            onRequestClose: this.closeGuildVerificationPopout,
                            shouldShow: (x && !u && !d && !I) || I,
                            children: () =>
                                (0, r.jsx)(c.ua7, {
                                    text: this.getTooltipText(),
                                    children: (c) => {
                                        var { onClick: u, onContextMenu: d } = c,
                                            h = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    i = (function (e, t) {
                                                        if (null == e) return {};
                                                        var n,
                                                            r,
                                                            i = {},
                                                            l = Object.keys(e);
                                                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                                        return i;
                                                    })(e, t);
                                                if (Object.getOwnPropertySymbols) {
                                                    var l = Object.getOwnPropertySymbols(e);
                                                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                                                }
                                                return i;
                                            })(c, ['onClick', 'onContextMenu']);
                                        return (0, r.jsxs)(
                                            V.ZP,
                                            J(
                                                Q(
                                                    {
                                                        ref: this.channelItemRef,
                                                        className: q.iconVisibility,
                                                        iconClassName: o()({ [q.iconLive]: C }),
                                                        hasActiveEvent: C,
                                                        channel: e,
                                                        selected: !E && t,
                                                        connected: n,
                                                        unread: n ? i : void 0,
                                                        resolvedUnreadSetting: l,
                                                        mentionCount: a,
                                                        locked: s,
                                                        subtitle: this.renderSubtitle(),
                                                        onClick: () => {
                                                            (this.handleClick(), null == u || u());
                                                        },
                                                        onContextMenu: (e) => {
                                                            (this.handleContextMenu(e), null == d || d());
                                                        },
                                                        connectDragPreview: g,
                                                        isFavoriteSuggestion: E,
                                                        'aria-label': (0, m.ZP)({
                                                            channel: e,
                                                            unread: i,
                                                            mentionCount: a,
                                                            userCount: Z,
                                                            embeddedActivitiesCount: v.length,
                                                            isSubscriptionGated: j
                                                        }),
                                                        'aria-describedby': (0, b.Z)({
                                                            channel: e,
                                                            embeddedApps: v
                                                        }),
                                                        withGuildIcon: S
                                                    },
                                                    h
                                                ),
                                                {
                                                    children: [
                                                        E &&
                                                            (0, r.jsxs)(r.Fragment, {
                                                                children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
                                                            }),
                                                        !E &&
                                                            (0, r.jsxs)(r.Fragment, {
                                                                children: [this.renderOpenChatButton(), this.renderInviteButton(), N ? this.renderOptionsButton({ onContextMenu: this.handleContextMenu }) : this.renderEditButton(), this.renderChannelInfo()]
                                                            })
                                                    ]
                                                }
                                            )
                                        );
                                    }
                                })
                        })
                    }),
                    this.renderVoiceUsers()
                ]
            });
        return (
            O && (T = f(T)),
            _ && (T = h(p(T))),
            y &&
                (T = (0, r.jsx)(w.Z, {
                    childRef: this.ref,
                    tutorialId: 'voice-conversations',
                    position: 'right',
                    offsetX: -20,
                    children: T
                })),
            T
        );
    }
    constructor(...e) {
        (super(...e),
            X(this, 'state', {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1
            }),
            X(this, 'ref', i.createRef()),
            X(this, 'channelItemRef', i.createRef()),
            X(this, 'activitiesHideTimeout', new s.V7()),
            X(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            X(this, 'handleVoiceConnect', () => {
                let { locked: e, connected: t, channel: n, unverifiedAccount: r, needSubscriptionToAccess: i } = this.props;
                (r && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    O.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: i,
                        locked: e
                    }));
            }),
            X(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = A.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, d.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                J(Q({}, n), {
                                    channel: t,
                                    guild: i
                                })
                            );
                    });
            }),
            X(this, 'handleMouseEnter', () => {
                (this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0
                    }));
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
                (this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 }));
            }),
            X(this, 'handleClick', () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                (null != t && (0, j.n)(t) && (0, v.hk)(t), this.handleVoiceConnect());
            }),
            X(this, 'handleVoiceStatusClick', (e) => {
                let { connected: t, channel: n } = this.props;
                t && (e.stopPropagation(), (0, g.Z)({ channel: n }));
            }),
            X(this, 'renderPopout', () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: i, selected: l, guild: o } = this.props,
                    { shouldShowActivities: a, shouldShowGuildVerificationPopout: s } = this.state;
                if (a && !n && !i && !s) {
                    let n = Z.SE.getSetting().includes(o.id);
                    return (0, r.jsx)(F.Z, {
                        onAction: this.closePopout,
                        guild: o,
                        channel: e,
                        voiceStates: t,
                        isChannelSelected: l,
                        shouldShowSettingNudge: n
                    });
                }
                if (s)
                    return (0, r.jsx)(x.Z, {
                        type: x.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            X(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(c.ua7, {
                        text: Y.intl.string(Y.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: i, onMouseLeave: l, onFocus: a, onBlur: s } = t;
                            return (0, r.jsx)(c.P3F, {
                                className: o()(q.iconItem, n ? q.alwaysShown : null),
                                onClick: () => {
                                    (u.Z.updateChatOpen(e.id, !0), (0, N.Kh)(e.id));
                                },
                                'aria-label': Y.intl.string(Y.t.ZXxLQk),
                                onMouseEnter: i,
                                onMouseLeave: l,
                                onFocus: a,
                                onBlur: s,
                                children: (0, r.jsx)(c.kBi, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: q.actionIcon
                                })
                            });
                        }
                    });
            }),
            X(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? Y.intl.string(Y.t.rZfiNj) : null;
            }));
    }
}
let ee = (0, h.B)((0, p.Q)($));
function et(e) {
    let { guild: t, channel: n, disableSorting: i, isFavoriteCategory: l, selected: o, collapsed: s, voiceStates: c } = e,
        u = (0, a.cj)([L.ZP], () => ({
            unread: L.ZP.hasUnread(n.id),
            mentionCount: L.ZP.getMentionCount(n.id)
        })),
        d = (0, a.e7)([M.ZP], () => M.ZP.resolveUnreadSetting(n)),
        h = (0, a.cj)([T.Z, R.Z, D.Z], () => {
            let e = T.Z.getChannel(n.parent_id),
                r = R.Z.getCheck(n.guild_id);
            return {
                canManageChannel: D.Z.can(W.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== i && (t.id === K._ || (null != e ? D.Z.can(W.Plq.MANAGE_CHANNELS, e) : D.Z.can(W.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: D.Z.can(W.Plq.MOVE_MEMBERS, n),
                locked: !D.Z.can(W.Plq.CONNECT, n),
                bypassLimit: D.Z.can(W.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat
            };
        }),
        p = (0, a.e7)([k.Z], () => k.Z.hasVideo(n.id)),
        g = (0, f.ZP)(n),
        m = (0, _.ZP)(n),
        b = (0, S.qY)(n.id),
        { isSubscriptionGated: O, needSubscriptionToAccess: y } = (0, E.Z)(n.id),
        v = (0, C.Z)(),
        j = (0, a.e7)([M.ZP], () => M.ZP.isFavorite(t.id, n.id)),
        x = e.connected || (null == v ? void 0 : v.channelId) === n.id,
        { enableHangStatus: P, allowChannelTopic: N } = I.n.useExperiment(
            {
                guildId: n.guild_id,
                location: 'VoiceChannel'
            },
            { autoTrackExposure: !1 }
        ),
        w = (0, B.Z)({
            channel: n,
            isChannelSelected: o,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: O,
            needSubscriptionToAccess: y,
            enableConnectedUserLimit: !0,
            enableActivities: !0
        }),
        Z = x && null == w;
    return (0, r.jsx)(
        ee,
        J(
            Q(
                {
                    channelName: m,
                    embeddedApps: g,
                    embeddedActivityType: W.IIU.PLAYING,
                    video: p,
                    hasActiveEvent: null != b,
                    isSubscriptionGated: O,
                    needSubscriptionToAccess: y
                },
                u,
                h,
                e
            ),
            {
                connected: x,
                isFavoriteSuggestion: l && !j,
                forceShowButtons: Z,
                channelInfo: w,
                resolvedUnreadSetting: d,
                enableHangStatus: P,
                allowChannelTopic: N
            }
        )
    );
}
