(n.d(t, { Z: () => en }), n(388685), n(415506));
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
    P = n(335353),
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
    G = n(63063),
    B = n(98597),
    V = n(648501),
    F = n(473403),
    H = n(830993),
    z = n(653577),
    W = n(207055),
    K = n(981631),
    Y = n(647086),
    q = n(388032),
    X = n(915887);
function Q(e, t, n) {
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
function J(e) {
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
                Q(e, t, n[t]);
            }));
    }
    return e;
}
function $(e, t) {
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
class ee extends B.ZP {
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
        if (n) return X.containerUserOver;
        if (null != t)
            if (e > t) return X.containerDragAfter;
            else return X.containerDragBefore;
        return X.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n } = this.props,
            i = null == (e = (0, y.D)(this.props.subtitle)) ? void 0 : e.subtitle,
            { hovered: l } = this.state;
        return (0, r.jsx)(z.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: i,
            hovered: l
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, r.jsx)(W.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: i,
            tabIndex: l,
            location: K.Sbl.GUILD_CHANNEL_LIST
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)('div', {
                  className: X.channelInfo,
                  children: e
              });
    }
    renderHDSplashedIcon() {
        let { channel: e, locked: t } = this.props;
        return t || !e.isHDStreamSplashed
            ? null
            : (0, r.jsx)(c.ua7, {
                  text: q.intl.string(q.t.gpF6QU),
                  children: (e) => {
                      let { onMouseEnter: t, onMouseLeave: n, onFocus: i, onBlur: l } = e;
                      return (0, r.jsx)(c.P3F, {
                          className: o()(X.iconItem, X.alwaysShown),
                          onClick: () => {
                              window.open(G.Z.getArticleURL(K.BhN.HD_STREAMING_POTION), '_blank');
                          },
                          'aria-label': q.intl.string(q.t.gpF6QU),
                          onMouseEnter: t,
                          onMouseLeave: n,
                          onFocus: i,
                          onBlur: l,
                          children: (0, r.jsx)(c.hh5, {
                              size: 'xs',
                              color: 'currentColor',
                              className: X.actionIcon
                          })
                      });
                  }
              });
    }
    render() {
        let { channel: e, selected: t, connected: n, unread: i, resolvedUnreadSetting: l, mentionCount: s, locked: a, sorting: u, isUserOver: d, connectChannelDropTarget: h, connectChannelDragSource: p, connectUserDropTarget: f, connectDragPreview: g, canReorderChannel: _, canMoveMembers: O, showTutorial: y, hasActiveEvent: v, embeddedApps: C, isSubscriptionGated: j, isFavoriteSuggestion: E, withGuildIcon: x } = this.props,
            { shouldShowActivities: S, shouldShowGuildVerificationPopout: N } = this.state,
            Z = (0, I.jW)({ location: 'voice_channel' }).entrypoints,
            T = this.getVoiceStatesCount(),
            A = (0, r.jsxs)('li', {
                ref: this.ref,
                className: o()(this.getModeClass(), { [X.disabled]: this.isDisabled() }),
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
                            shouldShow: (S && !u && !d && !N) || N,
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
                                        return (0, r.jsx)(P.Z, {
                                            channel: e,
                                            children: (0, r.jsxs)(
                                                F.ZP,
                                                $(
                                                    J(
                                                        {
                                                            ref: this.channelItemRef,
                                                            className: X.iconVisibility,
                                                            iconClassName: o()({ [X.iconLive]: v }),
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
                                                                userCount: T,
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
                                                                    children: [this.renderOpenChatButton(), this.renderInviteButton(), Z ? this.renderOptionsButton({ onContextMenu: this.handleContextMenu }) : this.renderEditButton(), this.renderChannelInfo(), this.renderHDSplashedIcon()]
                                                                })
                                                        ]
                                                    }
                                                )
                                            )
                                        });
                                    }
                                })
                        })
                    }),
                    this.renderVoiceUsers()
                ]
            });
        return (
            O && (A = f(A)),
            _ && (A = h(p(A))),
            y &&
                (A = (0, r.jsx)(w.Z, {
                    childRef: this.ref,
                    tutorialId: 'voice-conversations',
                    position: 'right',
                    offsetX: -20,
                    children: A
                })),
            A
        );
    }
    constructor(...e) {
        (super(...e),
            Q(this, 'state', {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1
            }),
            Q(this, 'ref', i.createRef()),
            Q(this, 'channelItemRef', i.createRef()),
            Q(this, 'activitiesHideTimeout', new a.V7()),
            Q(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            Q(this, 'handleVoiceConnect', () => {
                let { locked: e, connected: t, channel: n, unverifiedAccount: r, needSubscriptionToAccess: i } = this.props;
                (r && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    O.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: i,
                        locked: e
                    }));
            }),
            Q(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = A.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, d.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                $(J({}, n), {
                                    channel: t,
                                    guild: i
                                })
                            );
                    });
            }),
            Q(this, 'handleMouseEnter', () => {
                (this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0
                    }));
            }),
            Q(this, 'handleMouseLeave', () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1
                    })
                );
            }),
            Q(this, 'closePopout', () => {
                (this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 }));
            }),
            Q(this, 'handleClick', () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                (null != t && (0, j.n)(t) && (0, C.hk)(t), this.handleVoiceConnect());
            }),
            Q(this, 'handleVoiceStatusClick', (e) => {
                let { connected: t, channel: n } = this.props;
                t && (e.stopPropagation(), (0, g.Z)({ channel: n }));
            }),
            Q(this, 'renderPopout', () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: i, selected: l, guild: o } = this.props,
                    { shouldShowActivities: s, shouldShowGuildVerificationPopout: a } = this.state;
                if (s && !n && !i && !a) {
                    let n = Z.SE.getSetting().includes(o.id);
                    return (0, r.jsx)(H.Z, {
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
            Q(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(c.ua7, {
                        text: q.intl.string(q.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: i, onMouseLeave: l, onFocus: s, onBlur: a } = t;
                            return (0, r.jsx)(c.P3F, {
                                className: o()(X.iconItem, n ? X.alwaysShown : null),
                                onClick: () => {
                                    (u.Z.updateChatOpen(e.id, !0), (0, N.Kh)(e.id));
                                },
                                'aria-label': q.intl.string(q.t.ZXxLQk),
                                onMouseEnter: i,
                                onMouseLeave: l,
                                onFocus: s,
                                onBlur: a,
                                children: (0, r.jsx)(c.kBi, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: X.actionIcon
                                })
                            });
                        }
                    });
            }),
            Q(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? q.intl.string(q.t.rZfiNj) : null;
            }));
    }
}
let et = (0, h.B)((0, p.Q)(ee));
function en(e) {
    let { guild: t, channel: n, disableSorting: i, isFavoriteCategory: l, selected: o, collapsed: a, voiceStates: c } = e,
        u = (0, s.cj)([L.ZP], () => ({
            unread: L.ZP.hasUnread(n.id),
            mentionCount: L.ZP.getMentionCount(n.id)
        })),
        d = (0, s.e7)([M.ZP], () => M.ZP.resolveUnreadSetting(n)),
        h = (0, s.cj)([T.Z, R.Z, D.Z], () => {
            let e = T.Z.getChannel(n.parent_id),
                r = R.Z.getCheck(n.guild_id);
            return {
                canManageChannel: D.Z.can(K.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== i && (t.id === Y._ || (null != e ? D.Z.can(K.Plq.MANAGE_CHANNELS, e) : D.Z.can(K.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: D.Z.can(K.Plq.MOVE_MEMBERS, n),
                locked: !D.Z.can(K.Plq.CONNECT, n),
                bypassLimit: D.Z.can(K.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat
            };
        }),
        p = (0, s.e7)([k.Z], () => k.Z.hasVideo(n.id)),
        g = (0, f.ZP)(n),
        m = (0, _.ZP)(n),
        b = (0, x.qY)(n.id),
        { isSubscriptionGated: O, needSubscriptionToAccess: y } = (0, E.Z)(n.id),
        C = (0, v.Z)(),
        j = (0, s.e7)([M.ZP], () => M.ZP.isFavorite(t.id, n.id)),
        S = e.connected || (null == C ? void 0 : C.channelId) === n.id,
        I = (0, V.Z)({
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
        et,
        $(
            J(
                {
                    channelName: m,
                    embeddedApps: g,
                    embeddedActivityType: K.IIU.PLAYING,
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
