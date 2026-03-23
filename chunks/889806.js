"use strict";
n.d(t, { A: () => B });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(172218),
    o = n(311907),
    c = n(397927),
    d = n(308528),
    u = n(442433),
    h = n(676002),
    A = n(811024),
    m = n(685399),
    _ = n(323073),
    p = n(963027),
    g = n(5932),
    f = n(570622),
    x = n(414808),
    C = n(721592),
    E = n(454058),
    I = n(406704),
    N = n(734057),
    b = n(696451),
    S = n(71393),
    T = n(576705),
    v = n(383501),
    y = n(222823),
    j = n(543465),
    R = n(287809),
    O = n(964918),
    L = n(557534),
    M = n(68437),
    D = n(166444),
    G = n(813513);
n(281405);
var U = n(652215),
    P = n(349828),
    w = n(728444);
class k extends L.Ay {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1 };
    channelItemRef = s.createRef();
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
        d.A.preload(t ?? U.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: s, channelIsContentGated: l } = this.props,
            { shouldShowActivities: a } = this.state;
        return t.isModeratorReportChannel() || l
            ? null
            : null != s && s.length > 0 && a && !n
              ? (0, i.jsx)(G.A, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, i.jsx)(O.A, { ...e, channel: this.props.channel });
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
        if (t.type === U.rbe.GROUP_DM)
            return void (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === U.rbe.DM) {
            let s = R.default.getUser(t.getRecipientId());
            null != s &&
                (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("39778"),
                        n.e("38389"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, i.jsx)(e, { ...n, user: s, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, u.L3)(e, async () => {
                let { default: e } = await n.e("78580").then(n.bind(n, 907647));
                return (n) => (0, i.jsx)(e, { ...n, channel: t });
            });
        let s = S.A.getGuild(t.getGuildId());
        null != s &&
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("77666")]).then(
                    n.bind(n, 370372),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: s });
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
                muted: s,
                unread: l,
                hasActiveThreads: r,
                hasMoreActiveThreads: o,
                mentionCount: d,
                connectChannelDropTarget: u,
                connectChannelDragSource: h,
                connectDragPreview: A,
                canReorderChannel: m,
                isSubscriptionGated: _,
                isFavoriteSuggestion: f,
                subtitle: C,
                forceTopLevelThread: E,
                embeddedApps: I,
                resolvedUnreadSetting: N,
                enableActivities: b,
                showMenuItemPopover: S,
                markMenuItemPopoverAsDismissed: T,
                channelItemRef: v,
            } = this.props,
            y = v ?? this.channelItemRef,
            j = !S && o,
            R = !S && b && null != I && I.length > 0,
            O = (0, g.M)(C),
            L = (0, i.jsxs)("li", {
                className: a()(this.getClassName(), { [w.r9]: this.isDisabled(), [w.wH]: n }),
                "data-dnd-name": e.name,
                onMouseEnter: j || R ? this.handleMouseEnter : void 0,
                onMouseLeave: j || R ? this.handleMouseLeave : void 0,
                children: [
                    (0, i.jsx)(c.YNO, {
                        targetElementRef: y,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (j && this.state.shouldShowThreadsPopout) || (R && this.state.shouldShowActivities),
                        children: () =>
                            (0, i.jsxs)(D.Ay, {
                                ref: this.setChannelItemRef,
                                className: w.Ki,
                                channel: e,
                                guild: t,
                                selected: !f && n,
                                muted: s,
                                unread: l,
                                mentionCount: d,
                                hasActiveThreads: r,
                                subtitle: O?.subtitle,
                                subtitleColor: O?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: m ? A : null,
                                isFavoriteSuggestion: f,
                                channelTypeOverride: E ? U.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: N,
                                "aria-label": (0, p.Ay)({
                                    channel: e,
                                    unread: l,
                                    mentionCount: d,
                                    isSubscriptionGated: _,
                                }),
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
                    S && (0, i.jsx)(x.A, { targetElementRef: y, markMenuItemPopoverAsDismissed: T }),
                ],
            });
        return m ? u(h(L)) : L;
    }
}
let V = (0, h.a)(k);
function B(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: a, muted: c, selected: d } = e,
        { hasActiveThreads: u, hasMoreActiveThreads: h } = (0, I.NR)(t),
        p = (0, o.cf)([y.Ay], () => ({
            unread: y.Ay.hasUnread(t.id),
            ackMessageId: y.Ay.ackMessageId(t.id),
            isLowImportanceMention: y.Ay.getIsMentionLowImportance(t.id),
        })),
        g = (0, o.bG)([j.Ay], () => j.Ay.resolveUnreadSetting(t)),
        x = (0, o.cf)([N.A, T.A], () => {
            let e = N.A.getChannel(t.parent_id);
            return {
                canManageChannel: T.A.can(U.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    (n.id === P.Vc ||
                        (null != e ? T.A.can(U.xBc.MANAGE_CHANNELS, e) : T.A.can(U.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        S = (0, o.bG)([E.A], () => E.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: R, isSubscriptionGated: O } = (0, C.A)(t.id),
        L = (0, o.bG)([j.Ay], () => j.Ay.isFavorite(n.id, t.id)),
        D = (0, _.vL)(t),
        G = (0, A.Gp)(t.id),
        w = (0, M.A)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: d,
            isSubscriptionGated: O,
            needSubscriptionToAccess: R,
            isNewChannel: S,
            muted: c,
            enableActivities: G,
            resolvedUnreadSetting: g,
        }),
        k = (0, m.Ay)(t),
        [B, H] = s.useState(!1),
        F = (0, r.K)(
            s.useCallback((e) => {
                H(e);
            }, []),
        ),
        { showMenuItemPopover: K, markMenuItemPopoverAsDismissed: W } = (0, f.z)({
            location: "TextChannel",
            isChannelSelected: d,
            isTargetInViewport: B,
            channelType: t.type,
            isPopoverAllowed: n.id !== P.Vc,
        });
    return (0, o.bG)([v.A, b.Ay], () => v.A.getChannelId() !== t.id && b.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, i.jsx)(V, {
              ...p,
              ...x,
              ...e,
              hasActiveThreads: u,
              hasMoreActiveThreads: h,
              isSubscriptionGated: O,
              needSubscriptionToAccess: R,
              isNewChannel: S && e.canBeNewChannel,
              isFavoriteSuggestion: a && !L,
              channelIsContentGated: D,
              channelInfo: w,
              embeddedApps: k,
              resolvedUnreadSetting: g,
              hasChannelInfo: null != w,
              enableActivities: G,
              showMenuItemPopover: K,
              markMenuItemPopoverAsDismissed: W,
              channelItemRef: F,
          });
}
