"use strict";
n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(308528),
    d = n(442433),
    u = n(676002),
    h = n(811024),
    A = n(685399),
    p = n(323073),
    g = n(963027),
    m = n(5932),
    _ = n(721592),
    f = n(454058),
    x = n(406704),
    C = n(734057),
    E = n(696451),
    I = n(71393),
    N = n(576705),
    b = n(383501),
    S = n(222823),
    T = n(543465),
    y = n(287809),
    v = n(644836),
    j = n(964918),
    R = n(557534),
    O = n(68437),
    L = n(166444),
    M = n(813513),
    D = n(652215),
    G = n(349828),
    U = n(728444);
class P extends R.Ay {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1 };
    channelItemRef = s.createRef();
    enterTimer = null;
    exitTimer = null;
    handleMouseEnter = () => {
        (this.props.channelIsContentGated && null == this.props.embeddedApps) ||
            (this.resetTextChannelPopoutTimers(),
            (this.enterTimer = setTimeout(() => {
                null != this.props.embeddedApps && this.props.embeddedApps.length > 0
                    ? this.setState({ shouldShowActivities: !0 })
                    : this.props.channelIsContentGated || this.setState({ shouldShowThreadsPopout: !0 });
            }, 200)));
    };
    handleMouseLeave = () => {
        this.resetTextChannelPopoutTimers(),
            (this.exitTimer = setTimeout(() => {
                this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }),
                    this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
            }, 250));
    };
    handleThreadsPopoutClose = () => {
        this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
    };
    handleActivitiesPopoutClose = () => {
        this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
    };
    handleClosePopout = () => {
        this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
            this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
    };
    handleMouseDown = () => {
        this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
        let { channel: e } = this.props,
            t = e.getGuildId();
        c.A.preload(t ?? D.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: s, channelIsContentGated: l } = this.props,
            { shouldShowActivities: r } = this.state;
        if (t.isModeratorReportChannel() || l) return null;
        let { standardPopoverGap: a } = (0, v.eP)({ guildId: t.getGuildId() ?? void 0, location: "TextChannel" });
        return null != s && s.length > 0 && r && !n
            ? (0, i.jsx)(M.A, { onAction: this.handleActivitiesPopoutClose, channel: t, isStandardGap: null != a })
            : (0, i.jsx)(j.A, { ...e, channel: this.props.channel, isStandardGap: null != a });
    };
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        null != this.enterTimer && (clearTimeout(this.enterTimer), (this.enterTimer = null)),
            null != this.exitTimer && (clearTimeout(this.exitTimer), (this.exitTimer = null));
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props;
        if (t.type === D.rbe.GROUP_DM)
            return void (0, d.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("15438")]).then(n.bind(n, 4027));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === D.rbe.DM) {
            let s = y.default.getUser(t.getRecipientId());
            null != s &&
                (0, d.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("39778"),
                        n.e("31885"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, i.jsx)(e, { ...n, user: s, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, d.L3)(e, async () => {
                let { default: e } = await n.e("78580").then(n.bind(n, 907647));
                return (n) => (0, i.jsx)(e, { ...n, channel: t });
            });
        let s = I.A.getGuild(t.getGuildId());
        null != s &&
            (0, d.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("77666")]).then(
                    n.bind(n, 370372),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: s });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, i.jsx)("div", { className: U.yW, children: e });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: s,
                unread: l,
                hasActiveThreads: a,
                hasMoreActiveThreads: c,
                mentionCount: d,
                connectChannelDropTarget: u,
                connectChannelDragSource: h,
                connectDragPreview: A,
                canReorderChannel: p,
                isSubscriptionGated: _,
                isFavoriteSuggestion: f,
                subtitle: x,
                forceTopLevelThread: C,
                embeddedApps: E,
                resolvedUnreadSetting: I,
                withGuildIcon: N,
                enableActivities: b,
            } = this.props,
            S = b && null != E && E.length > 0,
            T = (0, m.M)(x),
            { standardPopoverGap: y } = (0, v.eP)({ guildId: e.getGuildId() ?? void 0, location: "TextChannel" }),
            j = (0, i.jsx)("li", {
                className: r()(this.getClassName(), { [U.r9]: this.isDisabled(), [U.wH]: n }),
                "data-dnd-name": e.name,
                onMouseEnter: c || S ? this.handleMouseEnter : void 0,
                onMouseLeave: c || S ? this.handleMouseLeave : void 0,
                children: (0, i.jsx)(o.YNO, {
                    targetElementRef: this.channelItemRef,
                    position: "right",
                    renderPopout: this.renderPopout,
                    onRequestClose: this.handleClosePopout,
                    spacing: y ?? void 0,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (S && this.state.shouldShowActivities),
                    children: () =>
                        (0, i.jsxs)(L.Ay, {
                            ref: this.channelItemRef,
                            className: U.Ki,
                            channel: e,
                            guild: t,
                            selected: !f && n,
                            muted: s,
                            unread: l,
                            mentionCount: d,
                            hasActiveThreads: a,
                            subtitle: T?.subtitle,
                            subtitleColor: T?.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: p ? A : null,
                            isFavoriteSuggestion: f,
                            channelTypeOverride: C ? D.rbe.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: I,
                            withGuildIcon: N,
                            "aria-label": (0, g.Ay)({ channel: e, unread: l, mentionCount: d, isSubscriptionGated: _ }),
                            children: [
                                f &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            this.renderAcceptSuggestionButton(),
                                            this.renderRemoveSuggestionButton(),
                                        ],
                                    }),
                                !f &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            this.renderChannelInfo(),
                                            this.renderInviteButton(),
                                            this.renderEditButton(),
                                        ],
                                    }),
                            ],
                        }),
                }),
            });
        return p ? u(h(j)) : j;
    }
}
let w = (0, u.a)(P);
function k(e) {
    let { channel: t, guild: n, disableSorting: s, isFavoriteCategory: l, muted: r, selected: o } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: d } = (0, x.NR)(t),
        u = (0, a.cf)([S.Ay], () => ({
            unread: S.Ay.hasUnread(t.id),
            ackMessageId: S.Ay.ackMessageId(t.id),
            isLowImportanceMention: S.Ay.getIsMentionLowImportance(t.id),
        })),
        g = (0, a.bG)([T.Ay], () => T.Ay.resolveUnreadSetting(t)),
        m = (0, a.cf)([C.A, N.A], () => {
            let e = C.A.getChannel(t.parent_id);
            return {
                canManageChannel: N.A.can(D.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== s &&
                    (n.id === G.Vc ||
                        (null != e ? N.A.can(D.xBc.MANAGE_CHANNELS, e) : N.A.can(D.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        I = (0, a.bG)([f.A], () => f.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: y, isSubscriptionGated: v } = (0, _.A)(t.id),
        j = (0, a.bG)([T.Ay], () => T.Ay.isFavorite(n.id, t.id)),
        R = (0, p.vL)(t),
        L = (0, h.Gp)(t.id),
        M = (0, O.A)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: v,
            needSubscriptionToAccess: y,
            isNewChannel: I,
            muted: r,
            enableActivities: L,
            resolvedUnreadSetting: g,
        }),
        U = (0, A.Ay)(t);
    return (0, a.bG)([b.A, E.Ay], () => b.A.getChannelId() !== t.id && E.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, i.jsx)(w, {
              ...u,
              ...m,
              ...e,
              hasActiveThreads: c,
              hasMoreActiveThreads: d,
              isSubscriptionGated: v,
              needSubscriptionToAccess: y,
              isNewChannel: I && e.canBeNewChannel,
              isFavoriteSuggestion: l && !j,
              channelIsContentGated: R,
              channelInfo: M,
              embeddedApps: U,
              resolvedUnreadSetting: g,
              hasChannelInfo: null != M,
              enableActivities: L,
          });
}
