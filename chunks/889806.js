n.d(t, {
    A: () => B,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    c = n(308528),
    u = n(442433),
    d = n(676002),
    h = n(811024),
    p = n(685399),
    g = n(323073),
    f = n(963027),
    m = n(5932),
    b = n(721592),
    A = n(454058),
    y = n(406704),
    O = n(734057),
    _ = n(696451),
    j = n(71393),
    x = n(576705),
    v = n(383501),
    E = n(222823),
    C = n(543465),
    S = n(287809),
    I = n(964918),
    N = n(557534),
    T = n(68437),
    P = n(166444),
    w = n(813513),
    R = n(652215),
    D = n(349828),
    L = n(728444);

function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            });
    }
    return e;
}

function k(e, t) {
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
class U extends N.Ay {
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        null != this.enterTimer && (clearTimeout(this.enterTimer), (this.enterTimer = null)),
            null != this.exitTimer && (clearTimeout(this.exitTimer), (this.exitTimer = null));
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)("div", {
                  className: L.yW,
                  children: e,
              });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: l,
                unread: i,
                hasActiveThreads: a,
                hasMoreActiveThreads: c,
                mentionCount: u,
                connectChannelDropTarget: d,
                connectChannelDragSource: h,
                connectDragPreview: p,
                canReorderChannel: g,
                isSubscriptionGated: b,
                isFavoriteSuggestion: A,
                subtitle: y,
                forceTopLevelThread: O,
                embeddedApps: _,
                resolvedUnreadSetting: j,
                withGuildIcon: x,
                enableActivities: v,
            } = this.props,
            E = v && null != _ && _.length > 0,
            C = (0, m.M)(y),
            S = (0, r.jsx)("li", {
                className: s()(this.getClassName(), {
                    [L.r9]: this.isDisabled(),
                    [L.wH]: n,
                }),
                "data-dnd-name": e.name,
                onMouseEnter: c || E ? this.handleMouseEnter : void 0,
                onMouseLeave: c || E ? this.handleMouseLeave : void 0,
                children: (0, r.jsx)(o.YNO, {
                    targetElementRef: this.channelItemRef,
                    position: "right",
                    renderPopout: this.renderPopout,
                    onRequestClose: this.handleClosePopout,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (E && this.state.shouldShowActivities),
                    children: () =>
                        (0, r.jsxs)(P.Ay, {
                            ref: this.channelItemRef,
                            className: L.Ki,
                            channel: e,
                            guild: t,
                            selected: !A && n,
                            muted: l,
                            unread: i,
                            mentionCount: u,
                            hasActiveThreads: a,
                            subtitle: null == C ? void 0 : C.subtitle,
                            subtitleColor: null == C ? void 0 : C.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: g ? p : null,
                            isFavoriteSuggestion: A,
                            channelTypeOverride: O ? R.rbe.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: j,
                            withGuildIcon: x,
                            "aria-label": (0, f.Ay)({
                                channel: e,
                                unread: i,
                                mentionCount: u,
                                isSubscriptionGated: b,
                            }),
                            children: [
                                A &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            this.renderAcceptSuggestionButton(),
                                            this.renderRemoveSuggestionButton(),
                                        ],
                                    }),
                                !A &&
                                    (0, r.jsxs)(r.Fragment, {
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
        return g ? d(h(S)) : S;
    }
    constructor(...e) {
        super(...e),
            M(this, "state", {
                shouldShowThreadsPopout: !1,
                shouldShowActivities: !1,
            }),
            M(this, "channelItemRef", l.createRef()),
            M(this, "enterTimer", null),
            M(this, "exitTimer", null),
            M(this, "handleMouseEnter", () => {
                (this.props.channelIsContentGated && null == this.props.embeddedApps) ||
                    (this.resetTextChannelPopoutTimers(),
                    (this.enterTimer = setTimeout(() => {
                        null != this.props.embeddedApps && this.props.embeddedApps.length > 0
                            ? this.setState({
                                  shouldShowActivities: !0,
                              })
                            : this.props.channelIsContentGated ||
                              this.setState({
                                  shouldShowThreadsPopout: !0,
                              });
                    }, 200)));
            }),
            M(this, "handleMouseLeave", () => {
                this.resetTextChannelPopoutTimers(),
                    (this.exitTimer = setTimeout(() => {
                        this.state.shouldShowActivities &&
                            this.setState({
                                shouldShowActivities: !1,
                            }),
                            this.state.shouldShowThreadsPopout &&
                                this.setState({
                                    shouldShowThreadsPopout: !1,
                                });
                    }, 250));
            }),
            M(this, "handleThreadsPopoutClose", () => {
                this.resetTextChannelPopoutTimers(),
                    this.setState({
                        shouldShowThreadsPopout: !1,
                    });
            }),
            M(this, "handleActivitiesPopoutClose", () => {
                this.resetTextChannelPopoutTimers(),
                    this.setState({
                        shouldShowActivities: !1,
                    });
            }),
            M(this, "handleClosePopout", () => {
                this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
                    this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
            }),
            M(this, "handleMouseDown", () => {
                this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
                let { channel: e } = this.props,
                    t = e.getGuildId();
                c.A.preload(null != t ? t : R.ME, e.id);
            }),
            M(this, "renderPopout", (e) => {
                let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
                    { shouldShowActivities: s } = this.state;
                return t.isModeratorReportChannel() || i
                    ? null
                    : null != l && l.length > 0 && s && !n
                      ? (0, r.jsx)(w.A, {
                            onAction: this.handleActivitiesPopoutClose,
                            channel: t,
                        })
                      : (0, r.jsx)(
                            I.A,
                            k(G({}, e), {
                                channel: this.props.channel,
                            }),
                        );
            }),
            M(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props;
                if (t.type === R.rbe.GROUP_DM)
                    return void (0, u.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                k(G({}, n), {
                                    channel: t,
                                    selected: !0,
                                }),
                            );
                    });
                if (t.type === R.rbe.DM) {
                    let l = S.default.getUser(t.getRecipientId());
                    null != l &&
                        (0, u.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("29534"),
                                n.e("39778"),
                                n.e("54266"),
                            ]).then(n.bind(n, 385913));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    k(G({}, n), {
                                        user: l,
                                        channel: t,
                                        showModalItems: !1,
                                    }),
                                );
                        });
                    return;
                }
                if (t.isModeratorReportChannel())
                    return void (0, u.L3)(e, async () => {
                        let { default: e } = await n.e("78580").then(n.bind(n, 907647));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                k(G({}, n), {
                                    channel: t,
                                }),
                            );
                    });
                let l = j.A.getGuild(t.getGuildId());
                null != l &&
                    (0, u.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("77666")]).then(
                            n.bind(n, 370372),
                        );
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                k(G({}, n), {
                                    channel: t,
                                    guild: l,
                                }),
                            );
                    });
            });
    }
}
let V = (0, d.a)(U);

function B(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: s, selected: o } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, y.NR)(t),
        d = (0, a.cf)([E.Ay], () => ({
            unread: E.Ay.hasUnread(t.id),
            ackMessageId: E.Ay.ackMessageId(t.id),
            isLowImportanceMention: E.Ay.getIsMentionLowImportance(t.id),
        })),
        f = (0, a.bG)([C.Ay], () => C.Ay.resolveUnreadSetting(t)),
        m = (0, a.cf)([O.A, x.A], () => {
            let e = O.A.getChannel(t.parent_id);
            return {
                canManageChannel: x.A.can(R.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    (n.id === D.V ||
                        (null != e ? x.A.can(R.xBc.MANAGE_CHANNELS, e) : x.A.can(R.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        j = (0, a.bG)([A.A], () => A.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: S, isSubscriptionGated: I } = (0, b.A)(t.id),
        N = (0, a.bG)([C.Ay], () => C.Ay.isFavorite(n.id, t.id)),
        P = (0, g.vL)(t),
        w = (0, h.Gp)(t.id),
        L = (0, T.A)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: I,
            needSubscriptionToAccess: S,
            isNewChannel: j,
            muted: s,
            enableActivities: w,
            resolvedUnreadSetting: f,
        }),
        M = (0, p.Ay)(t);
    return (0, a.bG)([v.A, _.Ay], () => v.A.getChannelId() !== t.id && _.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, r.jsx)(
              V,
              k(G({}, d, m, e), {
                  hasActiveThreads: c,
                  hasMoreActiveThreads: u,
                  isSubscriptionGated: I,
                  needSubscriptionToAccess: S,
                  isNewChannel: j && e.canBeNewChannel,
                  isFavoriteSuggestion: i && !N,
                  channelIsContentGated: P,
                  channelInfo: L,
                  embeddedApps: M,
                  resolvedUnreadSetting: f,
                  hasChannelInfo: null != L,
                  enableActivities: w,
              }),
          );
}
