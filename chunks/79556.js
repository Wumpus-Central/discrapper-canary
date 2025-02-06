n.d(t, { Z: () => M }), n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
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
    Z = n(306680),
    I = n(9156),
    b = n(594174),
    S = n(109446),
    N = n(98597),
    E = n(648501),
    j = n(473403),
    y = n(304471),
    A = n(981631),
    P = n(647086),
    T = n(831746);
function w(e, t, n) {
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
class R extends N.ZP {
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
                  className: T.channelInfo,
                  children: e
              });
    }
    render() {
        let { channel: e, guild: t, selected: n, muted: l, unread: a, hasActiveThreads: s, hasMoreActiveThreads: c, mentionCount: d, connectChannelDropTarget: u, connectChannelDragSource: h, connectDragPreview: g, canReorderChannel: f, isSubscriptionGated: _, isFavoriteSuggestion: v, subtitle: C, forceTopLevelThread: x, embeddedApps: Z, resolvedUnreadSetting: I, withGuildIcon: b, enableActivities: S } = this.props,
            N = S && null != Z && Z.length > 0,
            E = (0, m.D)(C),
            y = (0, i.jsx)('li', {
                className: r()(this.getClassName(), {
                    [T.disabled]: this.isDisabled(),
                    [T.selected]: n
                }),
                'data-dnd-name': e.name,
                onMouseEnter: c || N ? this.handleMouseEnter : void 0,
                onMouseLeave: c || N ? this.handleMouseLeave : void 0,
                children: (0, i.jsx)(o.yRy, {
                    position: 'right',
                    renderPopout: this.renderPopout,
                    spacing: 0,
                    onRequestClose: this.handleClosePopout,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (N && this.state.shouldShowActivities),
                    children: () =>
                        (0, i.jsxs)(j.Z, {
                            className: T.iconVisibility,
                            channel: e,
                            guild: t,
                            selected: !v && n,
                            muted: l,
                            unread: a,
                            mentionCount: d,
                            hasActiveThreads: s,
                            subtitle: null == E ? void 0 : E.subtitle,
                            subtitleColor: null == E ? void 0 : E.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: f ? g : null,
                            isFavoriteSuggestion: v,
                            channelTypeOverride: x ? A.d4z.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: I,
                            withGuildIcon: b,
                            'aria-label': (0, p.ZP)({
                                channel: e,
                                unread: a,
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
            w(this, 'state', {
                shouldShowThreadsPopout: !1,
                shouldShowActivities: !1
            }),
            w(this, 'enterTimer', 0),
            w(this, 'exitTimer', 0),
            w(this, 'handleMouseEnter', () => {
                (this.props.canShowThreadPreviewForUser || null != this.props.embeddedApps) &&
                    (this.resetTextChannelPopoutTimers(),
                    (this.enterTimer = setTimeout(() => {
                        null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({ shouldShowActivities: !0 }) : this.props.canShowThreadPreviewForUser && this.setState({ shouldShowThreadsPopout: !0 });
                    }, 200)));
            }),
            w(this, 'handleMouseLeave', () => {
                this.resetTextChannelPopoutTimers(),
                    (this.exitTimer = setTimeout(() => {
                        this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }), this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
                    }, 250));
            }),
            w(this, 'handleThreadsPopoutClose', () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
            }),
            w(this, 'handleActivitiesPopoutClose', () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
            }),
            w(this, 'handleClosePopout', () => {
                this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
            }),
            w(this, 'handleMouseDown', () => {
                this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
                let { channel: e } = this.props,
                    t = e.getGuildId();
                s.Z.preload(null != t ? t : A.ME, e.id);
            }),
            w(this, 'renderPopout', (e) => {
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
            w(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props;
                if (t.type === A.d4z.GROUP_DM) {
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('25421'), n.e('95491')]).then(n.bind(n, 354741));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                channel: t,
                                selected: !0
                            });
                    });
                    return;
                }
                if (t.type === A.d4z.DM) {
                    let l = b.default.getUser(t.getRecipientId());
                    null != l &&
                        (0, c.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('56826'), n.e('5606')]).then(n.bind(n, 131404));
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
let L = (0, d.B)(R);
function M(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: r, muted: o, selected: s } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: d } = (0, _.JQ)(t),
        p = (0, a.cj)([Z.ZP], () => ({
            unread: Z.ZP.hasUnread(t.id),
            ackMessageId: Z.ZP.ackMessageId(t.id),
            isLowImportanceMention: Z.ZP.getIsMentionLowImportance(t.id)
        })),
        m = (0, a.e7)([I.ZP], () => I.ZP.resolveUnreadSetting(t)),
        C = (0, a.cj)([v.Z, x.Z], () => {
            let e = v.Z.getChannel(t.parent_id);
            return {
                canManageChannel: x.Z.can(A.Plq.MANAGE_CHANNELS, t),
                canReorderChannel: !0 !== l && (n.id === P._ || (null != e ? x.Z.can(A.Plq.MANAGE_CHANNELS, e) : x.Z.can(A.Plq.MANAGE_CHANNELS, n)))
            };
        }),
        S = (0, a.e7)([f.Z], () => f.Z.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: N, isSubscriptionGated: j } = (0, g.Z)(t.id),
        y = (0, a.e7)([I.ZP], () => I.ZP.isFavorite(n.id, t.id)),
        T = (0, a.e7)(
            [b.default],
            () => {
                let e = b.default.getCurrentUser();
                return null != e && (!t.isNSFW() || e.nsfwAllowed);
            },
            [t]
        ),
        w = (0, u.NX)(t.id),
        R = (0, E.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: s,
            isSubscriptionGated: j,
            needSubscriptionToAccess: N,
            isNewChannel: S,
            muted: o,
            enableActivities: w,
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
        canShowThreadPreviewForUser: T,
        channelInfo: R,
        embeddedApps: M,
        resolvedUnreadSetting: m,
        hasChannelInfo: null != R,
        enableActivities: w
    });
}
