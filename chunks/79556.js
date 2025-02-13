n.d(t, { Z: () => M }), n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(442837),
    a = n(481060),
    s = n(493683),
    c = n(239091),
    d = n(146773),
    u = n(595519),
    h = n(619915),
    p = n(201895),
    m = n(873696),
    g = n(66999),
    f = n(22082),
    _ = n(665906),
    v = n(592125),
    C = n(430824),
    x = n(496675),
    I = n(306680),
    Z = n(9156),
    b = n(594174),
    S = n(109446),
    N = n(98597),
    E = n(648501),
    j = n(473403),
    y = n(304471),
    T = n(981631),
    A = n(647086),
    P = n(952107);
function R(e, t, n) {
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
class w extends N.ZP {
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        clearTimeout(this.enterTimer), clearTimeout(this.exitTimer);
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, i.jsx)('div', {
                  className: P.channelInfo,
                  children: e
              });
    }
    render() {
        let { channel: e, guild: t, selected: n, muted: l, unread: o, hasActiveThreads: s, hasMoreActiveThreads: c, mentionCount: d, connectChannelDropTarget: u, connectChannelDragSource: h, connectDragPreview: g, canReorderChannel: f, isSubscriptionGated: _, isFavoriteSuggestion: v, subtitle: C, forceTopLevelThread: x, embeddedApps: I, resolvedUnreadSetting: Z, withGuildIcon: b, enableActivities: S } = this.props,
            N = S && null != I && I.length > 0,
            E = (0, m.D)(C),
            y = (0, i.jsx)('li', {
                className: r()(this.getClassName(), {
                    [P.disabled]: this.isDisabled(),
                    [P.selected]: n
                }),
                'data-dnd-name': e.name,
                onMouseEnter: c || N ? this.handleMouseEnter : void 0,
                onMouseLeave: c || N ? this.handleMouseLeave : void 0,
                children: (0, i.jsx)(a.yRy, {
                    position: 'right',
                    renderPopout: this.renderPopout,
                    spacing: 0,
                    onRequestClose: this.handleClosePopout,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (N && this.state.shouldShowActivities),
                    children: () =>
                        (0, i.jsxs)(j.Z, {
                            className: P.iconVisibility,
                            channel: e,
                            guild: t,
                            selected: !v && n,
                            muted: l,
                            unread: o,
                            mentionCount: d,
                            hasActiveThreads: s,
                            subtitle: null == E ? void 0 : E.subtitle,
                            subtitleColor: null == E ? void 0 : E.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: f ? g : null,
                            isFavoriteSuggestion: v,
                            channelTypeOverride: x ? T.d4z.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: Z,
                            withGuildIcon: b,
                            'aria-label': (0, p.ZP)({
                                channel: e,
                                unread: o,
                                mentionCount: d,
                                isSubscriptionGated: _
                            }),
                            children: [v && this.renderAcceptSuggestionButton(), v && this.renderRemoveSuggestionButton(), !v && this.renderInviteButton(), !v && this.renderEditButton(), !v && this.renderChannelInfo()]
                        })
                })
            });
        return f ? u(h(y)) : y;
    }
    constructor(...e) {
        super(...e),
            R(this, 'state', {
                shouldShowThreadsPopout: !1,
                shouldShowActivities: !1
            }),
            R(this, 'enterTimer', 0),
            R(this, 'exitTimer', 0),
            R(this, 'handleMouseEnter', () => {
                (this.props.canShowThreadPreviewForUser || null != this.props.embeddedApps) &&
                    (this.resetTextChannelPopoutTimers(),
                    (this.enterTimer = setTimeout(() => {
                        null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({ shouldShowActivities: !0 }) : this.props.canShowThreadPreviewForUser && this.setState({ shouldShowThreadsPopout: !0 });
                    }, 200)));
            }),
            R(this, 'handleMouseLeave', () => {
                this.resetTextChannelPopoutTimers(),
                    (this.exitTimer = setTimeout(() => {
                        this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }), this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
                    }, 250));
            }),
            R(this, 'handleThreadsPopoutClose', () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
            }),
            R(this, 'handleActivitiesPopoutClose', () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
            }),
            R(this, 'handleClosePopout', () => {
                this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
            }),
            R(this, 'handleMouseDown', () => {
                this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
                let { channel: e } = this.props,
                    t = e.getGuildId();
                s.Z.preload(null != t ? t : T.ME, e.id);
            }),
            R(this, 'renderPopout', (e) => {
                let { channel: t, sorting: n, embeddedApps: l } = this.props,
                    { shouldShowActivities: r } = this.state;
                return null != l && l.length > 0 && r && !n
                    ? (0, i.jsx)(y.Z, {
                          onAction: this.handleActivitiesPopoutClose,
                          channel: t
                      })
                    : (0, i.jsx)(S.Z, {
                          ...e,
                          channel: this.props.channel
                      });
            }),
            R(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props;
                if (t.type === T.d4z.GROUP_DM) {
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('25421'), n.e('23352')]).then(n.bind(n, 354741));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                selected: !0
                            });
                    });
                    return;
                }
                if (t.type === T.d4z.DM) {
                    let l = b.default.getUser(t.getRecipientId());
                    null != l &&
                        (0, c.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('56826'), n.e('90384')]).then(n.bind(n, 131404));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: l,
                                    channel: t,
                                    showModalItems: !1
                                });
                        });
                    return;
                }
                let l = C.Z.getGuild(t.getGuildId());
                null != l &&
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('44011')]).then(n.bind(n, 373651));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: l
                            });
                    });
            });
    }
}
let L = (0, d.B)(w);
function M(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: r, muted: a, selected: s } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: d } = (0, _.JQ)(t),
        p = (0, o.cj)([I.ZP], () => ({
            unread: I.ZP.hasUnread(t.id),
            ackMessageId: I.ZP.ackMessageId(t.id),
            isLowImportanceMention: I.ZP.getIsMentionLowImportance(t.id)
        })),
        m = (0, o.e7)([Z.ZP], () => Z.ZP.resolveUnreadSetting(t)),
        C = (0, o.cj)([v.Z, x.Z], () => {
            let e = v.Z.getChannel(t.parent_id);
            return {
                canManageChannel: x.Z.can(T.Plq.MANAGE_CHANNELS, t),
                canReorderChannel: !0 !== l && (n.id === A._ || (null != e ? x.Z.can(T.Plq.MANAGE_CHANNELS, e) : x.Z.can(T.Plq.MANAGE_CHANNELS, n)))
            };
        }),
        S = (0, o.e7)([f.Z], () => f.Z.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: N, isSubscriptionGated: j } = (0, g.Z)(t.id),
        y = (0, o.e7)([Z.ZP], () => Z.ZP.isFavorite(n.id, t.id)),
        P = (0, o.e7)(
            [b.default],
            () => {
                let e = b.default.getCurrentUser();
                return null != e && (!t.isNSFW() || e.nsfwAllowed);
            },
            [t]
        ),
        R = (0, u.NX)(t.id),
        w = (0, E.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: s,
            isSubscriptionGated: j,
            needSubscriptionToAccess: N,
            isNewChannel: S,
            muted: a,
            enableActivities: R,
            resolvedUnreadSetting: m
        }),
        M = (0, h.ZP)(t);
    return (0, i.jsx)(L, {
        ...p,
        ...C,
        ...e,
        hasActiveThreads: c,
        hasMoreActiveThreads: d,
        isSubscriptionGated: j,
        needSubscriptionToAccess: N,
        isNewChannel: S && e.canBeNewChannel,
        isFavoriteSuggestion: r && !y,
        canShowThreadPreviewForUser: P,
        channelInfo: w,
        embeddedApps: M,
        resolvedUnreadSetting: m,
        hasChannelInfo: null != w,
        enableActivities: R
    });
}
