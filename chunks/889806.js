"use strict";
n.d(t, { A: () => V });
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
    m = n(323073),
    p = n(963027),
    g = n(5932),
    _ = n(570622),
    f = n(414808),
    x = n(721592),
    C = n(454058),
    E = n(406704),
    I = n(734057),
    N = n(696451),
    S = n(71393),
    b = n(576705),
    T = n(383501),
    v = n(222823),
    y = n(543465),
    j = n(287809),
    R = n(964918),
    O = n(557534),
    L = n(68437),
    M = n(166444),
    D = n(813513);
n(281405);
var G = n(652215),
    U = n(349828),
    P = n(728444);
class w extends O.Ay {
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
        c.A.preload(t ?? G.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: s, channelIsContentGated: l } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || l
            ? null
            : null != s && s.length > 0 && r && !n
              ? (0, i.jsx)(D.A, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, i.jsx)(R.A, { ...e, channel: this.props.channel });
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
        if (t.type === G.rbe.GROUP_DM)
            return void (0, d.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("15438")]).then(n.bind(n, 4027));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === G.rbe.DM) {
            let s = j.default.getUser(t.getRecipientId());
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
        let s = S.A.getGuild(t.getGuildId());
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
        return null == e ? null : (0, i.jsx)("div", { className: P.yW, children: e });
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
                canReorderChannel: m,
                isSubscriptionGated: _,
                isFavoriteSuggestion: x,
                subtitle: C,
                forceTopLevelThread: E,
                embeddedApps: I,
                resolvedUnreadSetting: N,
                withGuildIcon: S,
                enableActivities: b,
                showMenuItemPopover: T,
                markMenuItemPopoverAsDismissed: v,
                isPremium: y,
            } = this.props,
            j = !T && c,
            R = !T && b && null != I && I.length > 0,
            O = (0, g.M)(C),
            L = (0, i.jsxs)("li", {
                className: r()(this.getClassName(), { [P.r9]: this.isDisabled(), [P.wH]: n }),
                "data-dnd-name": e.name,
                onMouseEnter: j || R ? this.handleMouseEnter : void 0,
                onMouseLeave: j || R ? this.handleMouseLeave : void 0,
                children: [
                    (0, i.jsx)(o.YNO, {
                        targetElementRef: this.channelItemRef,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (j && this.state.shouldShowThreadsPopout) || (R && this.state.shouldShowActivities),
                        children: () =>
                            (0, i.jsxs)(M.Ay, {
                                ref: this.channelItemRef,
                                className: P.Ki,
                                channel: e,
                                guild: t,
                                selected: !x && n,
                                muted: s,
                                unread: l,
                                mentionCount: d,
                                hasActiveThreads: a,
                                subtitle: O?.subtitle,
                                subtitleColor: O?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: m ? A : null,
                                isFavoriteSuggestion: x,
                                channelTypeOverride: E ? G.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: N,
                                withGuildIcon: S,
                                "aria-label": (0, p.Ay)({
                                    channel: e,
                                    unread: l,
                                    mentionCount: d,
                                    isSubscriptionGated: _,
                                }),
                                children: [
                                    x &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    !x &&
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
                    T &&
                        (0, i.jsx)(f.A, {
                            targetElementRef: this.channelItemRef,
                            isPremium: y ?? !1,
                            markMenuItemPopoverAsDismissed: v,
                        }),
                ],
            });
        return m ? u(h(L)) : L;
    }
}
let k = (0, u.a)(w);
function V(e) {
    let { channel: t, guild: n, disableSorting: s, isFavoriteCategory: l, muted: r, selected: o } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: d } = (0, E.NR)(t),
        u = (0, a.cf)([v.Ay], () => ({
            unread: v.Ay.hasUnread(t.id),
            ackMessageId: v.Ay.ackMessageId(t.id),
            isLowImportanceMention: v.Ay.getIsMentionLowImportance(t.id),
        })),
        p = (0, a.bG)([y.Ay], () => y.Ay.resolveUnreadSetting(t)),
        g = (0, a.cf)([I.A, b.A], () => {
            let e = I.A.getChannel(t.parent_id);
            return {
                canManageChannel: b.A.can(G.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== s &&
                    (n.id === U.Vc ||
                        (null != e ? b.A.can(G.xBc.MANAGE_CHANNELS, e) : b.A.can(G.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        f = (0, a.bG)([C.A], () => C.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: S, isSubscriptionGated: j } = (0, x.A)(t.id),
        R = (0, a.bG)([y.Ay], () => y.Ay.isFavorite(n.id, t.id)),
        O = (0, m.vL)(t),
        M = (0, h.Gp)(t.id),
        D = (0, L.A)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: j,
            needSubscriptionToAccess: S,
            isNewChannel: f,
            muted: r,
            enableActivities: M,
            resolvedUnreadSetting: p,
        }),
        P = (0, A.Ay)(t),
        {
            showMenuItemPopover: w,
            markMenuItemPopoverAsDismissed: V,
            isPremium: B,
        } = (0, _.z)({
            location: "TextChannel",
            isChannelSelected: o,
            channelType: t.type,
            isPopoverAllowed: n.id !== U.Vc,
        });
    return (0, a.bG)([T.A, N.Ay], () => T.A.getChannelId() !== t.id && N.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, i.jsx)(k, {
              ...u,
              ...g,
              ...e,
              hasActiveThreads: c,
              hasMoreActiveThreads: d,
              isSubscriptionGated: j,
              needSubscriptionToAccess: S,
              isNewChannel: f && e.canBeNewChannel,
              isFavoriteSuggestion: l && !R,
              channelIsContentGated: O,
              channelInfo: D,
              embeddedApps: P,
              resolvedUnreadSetting: p,
              hasChannelInfo: null != D,
              enableActivities: M,
              showMenuItemPopover: w,
              markMenuItemPopoverAsDismissed: V,
              isPremium: B,
          });
}
