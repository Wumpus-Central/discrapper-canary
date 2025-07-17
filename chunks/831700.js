(n.d(t, { Z: () => ee }), n(388685), n(415506));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(846519),
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
    v = n(446226),
    C = n(305325),
    j = n(281956),
    E = n(66999),
    x = n(554747),
    S = n(378844),
    I = n(340541),
    P = n(359110),
    N = n(155409),
    w = n(695346),
    Z = n(592125),
    T = n(430824),
    A = n(607744),
    R = n(496675),
    D = n(306680),
    L = n(9156),
    M = n(979651),
    k = n(934415),
    U = n(98597),
    G = n(648501),
    B = n(473403),
    V = n(830993),
    F = n(653577),
    H = n(207055),
    z = n(981631),
    W = n(647086),
    K = n(388032),
    Y = n(915887);
function q(e, t, n) {
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
function X(e) {
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
                q(e, t, n[t]);
            }));
    }
    return e;
}
function Q(e, t) {
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
class J extends U.ZP {
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
        return (0, k.rY)(e, M.Z, T.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return Y.containerUserOver;
        if (null != t)
            if (e > t) return Y.containerDragAfter;
            else return Y.containerDragBefore;
        return Y.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n } = this.props,
            i = null == (e = (0, y.D)(this.props.subtitle)) ? void 0 : e.subtitle,
            { hovered: l } = this.state;
        return (0, r.jsx)(F.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: i,
            hovered: l
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, r.jsx)(H.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: i,
            tabIndex: l,
            location: z.Sbl.GUILD_CHANNEL_LIST
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)('div', {
                  className: Y.channelInfo,
                  children: e
              });
    }
    render() {
        let { channel: e, selected: t, connected: n, unread: i, resolvedUnreadSetting: l, mentionCount: s, locked: a, sorting: u, isUserOver: d, connectChannelDropTarget: h, connectChannelDragSource: p, connectUserDropTarget: f, connectDragPreview: g, canReorderChannel: _, canMoveMembers: O, showTutorial: y, hasActiveEvent: v, embeddedApps: C, isSubscriptionGated: j, isFavoriteSuggestion: E, withGuildIcon: x } = this.props,
            { shouldShowActivities: S, shouldShowGuildVerificationPopout: P } = this.state,
            w = (0, I.jW)({ location: 'voice_channel' }).entrypoints,
            Z = this.getVoiceStatesCount(),
            T = (0, r.jsxs)('li', {
                ref: this.ref,
                className: o()(this.getModeClass(), { [Y.disabled]: this.isDisabled() }),
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
                            shouldShow: (S && !u && !d && !P) || P,
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
                                            B.ZP,
                                            Q(
                                                X(
                                                    {
                                                        ref: this.channelItemRef,
                                                        className: Y.iconVisibility,
                                                        iconClassName: o()({ [Y.iconLive]: v }),
                                                        hasActiveEvent: v,
                                                        channel: e,
                                                        selected: !E && t,
                                                        connected: n,
                                                        unread: n ? i : void 0,
                                                        resolvedUnreadSetting: l,
                                                        mentionCount: s,
                                                        locked: a,
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
                                                            mentionCount: s,
                                                            userCount: Z,
                                                            embeddedActivitiesCount: C.length,
                                                            isSubscriptionGated: j
                                                        }),
                                                        'aria-describedby': (0, b.Z)({
                                                            channel: e,
                                                            embeddedApps: C
                                                        }),
                                                        withGuildIcon: x
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
                                                                children: [this.renderOpenChatButton(), this.renderInviteButton(), w ? this.renderOptionsButton({ onContextMenu: this.handleContextMenu }) : this.renderEditButton(), this.renderChannelInfo()]
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
                (T = (0, r.jsx)(N.Z, {
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
            q(this, 'state', {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1
            }),
            q(this, 'ref', i.createRef()),
            q(this, 'channelItemRef', i.createRef()),
            q(this, 'activitiesHideTimeout', new a.V7()),
            q(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            q(this, 'handleVoiceConnect', () => {
                let { locked: e, connected: t, channel: n, unverifiedAccount: r, needSubscriptionToAccess: i } = this.props;
                (r && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    O.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: i,
                        locked: e
                    }));
            }),
            q(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = T.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, d.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                Q(X({}, n), {
                                    channel: t,
                                    guild: i
                                })
                            );
                    });
            }),
            q(this, 'handleMouseEnter', () => {
                (this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0
                    }));
            }),
            q(this, 'handleMouseLeave', () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1
                    })
                );
            }),
            q(this, 'closePopout', () => {
                (this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 }));
            }),
            q(this, 'handleClick', () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                (null != t && (0, j.n)(t) && (0, C.hk)(t), this.handleVoiceConnect());
            }),
            q(this, 'handleVoiceStatusClick', (e) => {
                let { connected: t, channel: n } = this.props;
                t && (e.stopPropagation(), (0, g.Z)({ channel: n }));
            }),
            q(this, 'renderPopout', () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: i, selected: l, guild: o } = this.props,
                    { shouldShowActivities: s, shouldShowGuildVerificationPopout: a } = this.state;
                if (s && !n && !i && !a) {
                    let n = w.SE.getSetting().includes(o.id);
                    return (0, r.jsx)(V.Z, {
                        onAction: this.closePopout,
                        guild: o,
                        channel: e,
                        voiceStates: t,
                        isChannelSelected: l,
                        shouldShowSettingNudge: n
                    });
                }
                if (a)
                    return (0, r.jsx)(S.Z, {
                        type: S.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            q(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(c.ua7, {
                        text: K.intl.string(K.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: i, onMouseLeave: l, onFocus: s, onBlur: a } = t;
                            return (0, r.jsx)(c.P3F, {
                                className: o()(Y.iconItem, n ? Y.alwaysShown : null),
                                onClick: () => {
                                    (u.Z.updateChatOpen(e.id, !0), (0, P.Kh)(e.id));
                                },
                                'aria-label': K.intl.string(K.t.ZXxLQk),
                                onMouseEnter: i,
                                onMouseLeave: l,
                                onFocus: s,
                                onBlur: a,
                                children: (0, r.jsx)(c.kBi, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: Y.actionIcon
                                })
                            });
                        }
                    });
            }),
            q(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? K.intl.string(K.t.rZfiNj) : null;
            }));
    }
}
let $ = (0, h.B)((0, p.Q)(J));
function ee(e) {
    let { guild: t, channel: n, disableSorting: i, isFavoriteCategory: l, selected: o, collapsed: a, voiceStates: c } = e,
        u = (0, s.cj)([D.ZP], () => ({
            unread: D.ZP.hasUnread(n.id),
            mentionCount: D.ZP.getMentionCount(n.id)
        })),
        d = (0, s.e7)([L.ZP], () => L.ZP.resolveUnreadSetting(n)),
        h = (0, s.cj)([Z.Z, A.Z, R.Z], () => {
            let e = Z.Z.getChannel(n.parent_id),
                r = A.Z.getCheck(n.guild_id);
            return {
                canManageChannel: R.Z.can(z.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== i && (t.id === W._ || (null != e ? R.Z.can(z.Plq.MANAGE_CHANNELS, e) : R.Z.can(z.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: R.Z.can(z.Plq.MOVE_MEMBERS, n),
                locked: !R.Z.can(z.Plq.CONNECT, n),
                bypassLimit: R.Z.can(z.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat
            };
        }),
        p = (0, s.e7)([M.Z], () => M.Z.hasVideo(n.id)),
        g = (0, f.ZP)(n),
        m = (0, _.ZP)(n),
        b = (0, x.qY)(n.id),
        { isSubscriptionGated: O, needSubscriptionToAccess: y } = (0, E.Z)(n.id),
        C = (0, v.Z)(),
        j = (0, s.e7)([L.ZP], () => L.ZP.isFavorite(t.id, n.id)),
        S = e.connected || (null == C ? void 0 : C.channelId) === n.id,
        I = (0, G.Z)({
            channel: n,
            isChannelSelected: o,
            isChannelCollapsed: a,
            voiceStates: c,
            isSubscriptionGated: O,
            needSubscriptionToAccess: y,
            enableConnectedUserLimit: !0,
            enableActivities: !0
        }),
        P = S && null == I;
    return (0, r.jsx)(
        $,
        Q(
            X(
                {
                    channelName: m,
                    embeddedApps: g,
                    embeddedActivityType: z.IIU.PLAYING,
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
                connected: S,
                isFavoriteSuggestion: l && !j,
                forceShowButtons: P,
                channelInfo: I,
                resolvedUnreadSetting: d
            }
        )
    );
}
