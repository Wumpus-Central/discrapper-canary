n.d(t, { A: () => H });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(172218),
    o = n(311907),
    d = n(397927),
    c = n(308528),
    u = n(442433),
    h = n(676002),
    A = n(811024),
    _ = n(685399),
    m = n(323073),
    g = n(963027),
    p = n(5932),
    f = n(414808),
    x = n(302005),
    E = n(721592),
    I = n(454058),
    C = n(824865),
    N = n(406704),
    T = n(734057),
    S = n(696451),
    b = n(71393),
    y = n(576705),
    v = n(383501),
    j = n(222823),
    R = n(543465),
    O = n(287809),
    L = n(964918),
    M = n(557534),
    D = n(68437),
    U = n(166444),
    G = n(813513);
n(281405);
var P = n(652215),
    k = n(349828),
    w = n(928409);
class B extends M.Ay {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1 };
    channelItemRef = l.createRef();
    assignRef = (e, t) => {
        null != e && (e.current = t);
    };
    setChannelItemRef = (e) => {
        (this.channelItemRef.current = e), this.assignRef(this.props.channelItemRef, e);
    };
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
        c.A.preload(t ?? P.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: s } = this.props,
            { shouldShowActivities: a } = this.state;
        return t.isModeratorReportChannel() || s
            ? null
            : null != l && l.length > 0 && a && !n
              ? (0, i.jsx)(G.A, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, i.jsx)(L.A, { ...e, channel: this.props.channel });
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
        if (t.type === P.rbe.GROUP_DM)
            return void (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === P.rbe.DM) {
            let l = O.default.getUser(t.getRecipientId());
            null != l &&
                (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("39778"),
                        n.e("34408"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, i.jsx)(e, { ...n, user: l, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, u.L3)(e, async () => {
                let { default: e } = await n.e("78580").then(n.bind(n, 907647));
                return (n) => (0, i.jsx)(e, { ...n, channel: t });
            });
        let l = b.A.getGuild(t.getGuildId());
        null != l &&
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("2381"), n.e("77666")]).then(
                    n.bind(n, 370372),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, i.jsx)("div", { className: w.yW, children: e });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: l,
                unread: s,
                hasActiveThreads: r,
                hasMoreActiveThreads: o,
                mentionCount: c,
                connectChannelDropTarget: u,
                connectChannelDragSource: h,
                connectDragPreview: A,
                canReorderChannel: _,
                isSubscriptionGated: m,
                isFavoriteSuggestion: x,
                subtitle: E,
                forceTopLevelThread: I,
                embeddedApps: N,
                resolvedUnreadSetting: T,
                enableActivities: S,
                showMenuItemPopover: b,
                markMenuItemPopoverAsDismissed: y,
                channelItemRef: v,
                isSuggestedSection: j,
            } = this.props,
            R = v ?? this.channelItemRef,
            O = !b && o,
            L = !b && S && null != N && N.length > 0,
            M = (0, p.M)(E),
            D = (0, i.jsxs)("li", {
                className: a()(this.getClassName(), { [w.r9]: this.isDisabled(), [w.wH]: n }),
                "data-dnd-name": e.name,
                onMouseEnter: O || L ? this.handleMouseEnter : void 0,
                onMouseLeave: O || L ? this.handleMouseLeave : void 0,
                children: [
                    (0, i.jsx)(d.YNO, {
                        targetElementRef: R,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (O && this.state.shouldShowThreadsPopout) || (L && this.state.shouldShowActivities),
                        children: () =>
                            (0, i.jsxs)(U.Ay, {
                                ref: this.setChannelItemRef,
                                className: w.Ki,
                                channel: e,
                                guild: t,
                                selected: !x && n,
                                muted: l,
                                unread: s,
                                mentionCount: c,
                                hasActiveThreads: r,
                                subtitle: M?.subtitle,
                                subtitleColor: M?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: _ ? A : null,
                                isFavoriteSuggestion: x,
                                channelTypeOverride: I ? P.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: T,
                                transitionExtras: j ? { source: C.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, g.Ay)({
                                    channel: e,
                                    unread: s,
                                    mentionCount: c,
                                    isSubscriptionGated: m,
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
                    b && (0, i.jsx)(f.A, { targetElementRef: R, markMenuItemPopoverAsDismissed: y }),
                ],
            });
        return _ ? u(h(D)) : D;
    }
}
let V = (0, h.a)(B);
function H(e) {
    let { channel: t, guild: n, disableSorting: s, isFavoriteCategory: a, muted: d, selected: c } = e,
        { hasActiveThreads: u, hasMoreActiveThreads: h } = (0, N.NR)(t),
        g = (0, o.cf)([j.Ay], () => ({
            unread: j.Ay.hasUnread(t.id),
            ackMessageId: j.Ay.ackMessageId(t.id),
            isLowImportanceMention: j.Ay.getIsMentionLowImportance(t.id),
        })),
        p = (0, o.bG)([R.Ay], () => R.Ay.resolveUnreadSetting(t)),
        f = (0, o.cf)([T.A, y.A], () => {
            let e = T.A.getChannel(t.parent_id);
            return {
                canManageChannel: y.A.can(P.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== s &&
                    (n.id === k.Vc ||
                        (null != e ? y.A.can(P.xBc.MANAGE_CHANNELS, e) : y.A.can(P.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        C = (0, o.bG)([I.A], () => I.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: b, isSubscriptionGated: O } = (0, E.A)(t.id),
        L = (0, o.bG)([R.Ay], () => R.Ay.isFavorite(n.id, t.id)),
        M = (0, m.ni)(t),
        U = (0, A.Gp)(t.id),
        G = (0, D.A)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: c,
            isSubscriptionGated: O,
            needSubscriptionToAccess: b,
            isNewChannel: C,
            muted: d,
            enableActivities: U,
            resolvedUnreadSetting: p,
        }),
        w = (0, _.Ay)(t),
        [B, H] = l.useState(!1),
        F = (0, r.K)(
            l.useCallback((e) => {
                H(e);
            }, []),
        ),
        { showMenuItemPopover: K, markMenuItemPopoverAsDismissed: W } = (0, x.z)({
            location: "TextChannel",
            isChannelSelected: c,
            isTargetInViewport: B,
            channelType: t.type,
            isPopoverAllowed: n.id !== k.Vc,
        });
    return (0, o.bG)([v.A, S.Ay], () => v.A.getChannelId() !== t.id && S.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, i.jsx)(V, {
              ...g,
              ...f,
              ...e,
              hasActiveThreads: u,
              hasMoreActiveThreads: h,
              isSubscriptionGated: O,
              needSubscriptionToAccess: b,
              isNewChannel: C && e.canBeNewChannel,
              isFavoriteSuggestion: a && !L,
              channelIsContentGated: M,
              channelInfo: G,
              embeddedApps: w,
              resolvedUnreadSetting: p,
              hasChannelInfo: null != G,
              enableActivities: U,
              showMenuItemPopover: K,
              markMenuItemPopoverAsDismissed: W,
              channelItemRef: F,
          });
}
