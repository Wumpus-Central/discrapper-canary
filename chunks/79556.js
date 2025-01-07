n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    s = n(493683),
    c = n(239091),
    u = n(146773),
    d = n(595519),
    h = n(619915),
    p = n(201895),
    f = n(873696),
    m = n(66999),
    g = n(22082),
    v = n(665906),
    C = n(592125),
    x = n(430824),
    I = n(496675),
    _ = n(306680),
    Z = n(9156),
    b = n(594174),
    S = n(109446),
    N = n(98597),
    E = n(648501),
    y = n(473403),
    j = n(304471),
    T = n(981631),
    P = n(647086),
    A = n(831746);
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
class M extends N.ZP {
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
                  className: A.channelInfo,
                  children: e
              });
    }
    render() {
        let { channel: e, guild: t, selected: n, muted: l, unread: a, hasActiveThreads: s, hasMoreActiveThreads: c, mentionCount: u, connectChannelDropTarget: d, connectChannelDragSource: h, connectDragPreview: m, canReorderChannel: g, isSubscriptionGated: v, isFavoriteSuggestion: C, subtitle: x, forceTopLevelThread: I, embeddedApps: _, resolvedUnreadSetting: Z, withGuildIcon: b, enableActivities: S } = this.props,
            N = S && null != _ && _.length > 0,
            E = (0, f.D)(x),
            j = (0, i.jsx)('li', {
                className: r()(this.getClassName(), {
                    [A.disabled]: this.isDisabled(),
                    [A.selected]: n
                }),
                'data-dnd-name': e.name,
                onMouseEnter: c || N ? this.handleMouseEnter : void 0,
                onMouseLeave: c || N ? this.handleMouseLeave : void 0,
                children: (0, i.jsx)(o.Popout, {
                    position: 'right',
                    renderPopout: this.renderPopout,
                    spacing: 0,
                    onRequestClose: this.handleClosePopout,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (N && this.state.shouldShowActivities),
                    children: () =>
                        (0, i.jsxs)(y.Z, {
                            className: A.iconVisibility,
                            channel: e,
                            guild: t,
                            selected: !C && n,
                            muted: l,
                            unread: a,
                            mentionCount: u,
                            hasActiveThreads: s,
                            subtitle: null == E ? void 0 : E.subtitle,
                            subtitleColor: null == E ? void 0 : E.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: g ? m : null,
                            isFavoriteSuggestion: C,
                            channelTypeOverride: I ? T.d4z.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: Z,
                            withGuildIcon: b,
                            'aria-label': (0, p.ZP)({
                                channel: e,
                                unread: a,
                                mentionCount: u,
                                isSubscriptionGated: v
                            }),
                            children: [C && this.renderAcceptSuggestionButton(), C && this.renderRemoveSuggestionButton(), !C && this.renderInviteButton(), !C && this.renderEditButton(), !C && this.renderChannelInfo()]
                        })
                })
            });
        return g ? d(h(j)) : j;
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
                if (!!this.props.canShowThreadPreviewForUser || null != this.props.embeddedApps)
                    this.resetTextChannelPopoutTimers(),
                        (this.enterTimer = setTimeout(() => {
                            null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({ shouldShowActivities: !0 }) : this.props.canShowThreadPreviewForUser && this.setState({ shouldShowThreadsPopout: !0 });
                        }, 200));
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
                s.Z.preload(null != t ? t : T.ME, e.id);
            }),
            w(this, 'renderPopout', (e) => {
                let { channel: t, sorting: n, embeddedApps: l } = this.props,
                    { shouldShowActivities: r } = this.state;
                return null != l && l.length > 0 && r && !n
                    ? (0, i.jsx)(j.Z, {
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
                if (t.type === T.d4z.GROUP_DM) {
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
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
                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('56826'), n.e('5606')]).then(n.bind(n, 131404));
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
                let l = x.Z.getGuild(t.getGuildId());
                null != l &&
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('54310')]).then(n.bind(n, 373651));
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
let L = (0, u.B)(M);
function R(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: r, muted: o, selected: s } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, v.JQ)(t),
        p = (0, a.cj)([_.ZP], () => ({
            unread: _.ZP.hasUnread(t.id),
            ackMessageId: _.ZP.ackMessageId(t.id),
            isLowImportanceMention: _.ZP.getIsMentionLowImportance(t.id)
        })),
        f = (0, a.e7)([Z.ZP], () => Z.ZP.resolveUnreadSetting(t)),
        x = (0, a.cj)([C.Z, I.Z], () => {
            let e = C.Z.getChannel(t.parent_id);
            return {
                canManageChannel: I.Z.can(T.Plq.MANAGE_CHANNELS, t),
                canReorderChannel: !0 !== l && (n.id === P._ || (null != e ? I.Z.can(T.Plq.MANAGE_CHANNELS, e) : I.Z.can(T.Plq.MANAGE_CHANNELS, n)))
            };
        }),
        S = (0, a.e7)([g.Z], () => g.Z.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: N, isSubscriptionGated: y } = (0, m.Z)(t.id),
        j = (0, a.e7)([Z.ZP], () => Z.ZP.isFavorite(n.id, t.id)),
        A = (0, a.e7)(
            [b.default],
            () => {
                let e = b.default.getCurrentUser();
                return null != e && (!t.isNSFW() || e.nsfwAllowed);
            },
            [t]
        ),
        w = (0, d.NX)(t.id),
        M = (0, E.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: s,
            isSubscriptionGated: y,
            needSubscriptionToAccess: N,
            isNewChannel: S,
            muted: o,
            enableActivities: w,
            resolvedUnreadSetting: f
        }),
        R = (0, h.ZP)(t);
    return (0, i.jsx)(L, {
        ...p,
        ...x,
        ...e,
        hasActiveThreads: c,
        hasMoreActiveThreads: u,
        isSubscriptionGated: y,
        needSubscriptionToAccess: N,
        isNewChannel: S && e.canBeNewChannel,
        isFavoriteSuggestion: r && !j,
        canShowThreadPreviewForUser: A,
        channelInfo: M,
        embeddedApps: R,
        resolvedUnreadSetting: f,
        hasChannelInfo: null != M,
        enableActivities: w
    });
}
