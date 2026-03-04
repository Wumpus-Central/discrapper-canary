"use strict";
n.d(t, { A: () => w });
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
    _ = n(721592),
    f = n(454058),
    x = n(406704),
    C = n(734057),
    E = n(696451),
    I = n(71393),
    N = n(576705),
    S = n(383501),
    b = n(222823),
    T = n(543465),
    v = n(287809),
    y = n(964918),
    j = n(557534),
    R = n(68437),
    O = n(166444),
    L = n(813513);
n(281405);
var M = n(652215),
    D = n(349828),
    G = n(728444);
class U extends j.Ay {
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
        c.A.preload(t ?? M.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: s, channelIsContentGated: l } = this.props,
            { shouldShowActivities: r } = this.state;
        return t.isModeratorReportChannel() || l
            ? null
            : null != s && s.length > 0 && r && !n
              ? (0, i.jsx)(L.A, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, i.jsx)(y.A, { ...e, channel: this.props.channel });
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
        if (t.type === M.rbe.GROUP_DM)
            return void (0, d.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("93057")]).then(n.bind(n, 4027));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === M.rbe.DM) {
            let s = v.default.getUser(t.getRecipientId());
            null != s &&
                (0, d.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("39778"),
                        n.e("96429"),
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
                let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("72467")]).then(
                    n.bind(n, 370372),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: s });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, i.jsx)("div", { className: G.yW, children: e });
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
                isFavoriteSuggestion: f,
                subtitle: x,
                forceTopLevelThread: C,
                embeddedApps: E,
                resolvedUnreadSetting: I,
                withGuildIcon: N,
                enableActivities: S,
            } = this.props,
            b = S && null != E && E.length > 0,
            T = (0, g.M)(x),
            v = (0, i.jsx)("li", {
                className: r()(this.getClassName(), { [G.r9]: this.isDisabled(), [G.wH]: n }),
                "data-dnd-name": e.name,
                onMouseEnter: c || b ? this.handleMouseEnter : void 0,
                onMouseLeave: c || b ? this.handleMouseLeave : void 0,
                children: (0, i.jsx)(o.YNO, {
                    targetElementRef: this.channelItemRef,
                    position: "right",
                    renderPopout: this.renderPopout,
                    onRequestClose: this.handleClosePopout,
                    spacing: 17,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (b && this.state.shouldShowActivities),
                    children: () =>
                        (0, i.jsxs)(O.Ay, {
                            ref: this.channelItemRef,
                            className: G.Ki,
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
                            connectDragPreview: m ? A : null,
                            isFavoriteSuggestion: f,
                            channelTypeOverride: C ? M.rbe.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: I,
                            withGuildIcon: N,
                            "aria-label": (0, p.Ay)({ channel: e, unread: l, mentionCount: d, isSubscriptionGated: _ }),
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
        return m ? u(h(v)) : v;
    }
}
let P = (0, u.a)(U);
function w(e) {
    let { channel: t, guild: n, disableSorting: s, isFavoriteCategory: l, muted: r, selected: o } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: d } = (0, x.NR)(t),
        u = (0, a.cf)([b.Ay], () => ({
            unread: b.Ay.hasUnread(t.id),
            ackMessageId: b.Ay.ackMessageId(t.id),
            isLowImportanceMention: b.Ay.getIsMentionLowImportance(t.id),
        })),
        p = (0, a.bG)([T.Ay], () => T.Ay.resolveUnreadSetting(t)),
        g = (0, a.cf)([C.A, N.A], () => {
            let e = C.A.getChannel(t.parent_id);
            return {
                canManageChannel: N.A.can(M.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== s &&
                    (n.id === D.Vc ||
                        (null != e ? N.A.can(M.xBc.MANAGE_CHANNELS, e) : N.A.can(M.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        I = (0, a.bG)([f.A], () => f.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: v, isSubscriptionGated: y } = (0, _.A)(t.id),
        j = (0, a.bG)([T.Ay], () => T.Ay.isFavorite(n.id, t.id)),
        O = (0, m.vL)(t),
        L = (0, h.Gp)(t.id),
        G = (0, R.A)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: y,
            needSubscriptionToAccess: v,
            isNewChannel: I,
            muted: r,
            enableActivities: L,
            resolvedUnreadSetting: p,
        }),
        U = (0, A.Ay)(t);
    return (0, a.bG)([S.A, E.Ay], () => S.A.getChannelId() !== t.id && E.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, i.jsx)(P, {
              ...u,
              ...g,
              ...e,
              hasActiveThreads: c,
              hasMoreActiveThreads: d,
              isSubscriptionGated: y,
              needSubscriptionToAccess: v,
              isNewChannel: I && e.canBeNewChannel,
              isFavoriteSuggestion: l && !j,
              channelIsContentGated: O,
              channelInfo: G,
              embeddedApps: U,
              resolvedUnreadSetting: p,
              hasChannelInfo: null != G,
              enableActivities: L,
          });
}
