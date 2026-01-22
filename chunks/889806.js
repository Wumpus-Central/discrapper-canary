n.d(t, {
    A: () => F,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(308528),
    u = n(442433),
    d = n(676002),
    f = n(811024),
    p = n(685399),
    h = n(323073),
    b = n(963027),
    g = n(5932),
    m = n(721592),
    A = n(454058),
    y = n(406704),
    O = n(734057),
    j = n(696451),
    v = n(71393),
    x = n(576705),
    E = n(383501),
    _ = n(222823),
    C = n(543465),
    S = n(287809),
    I = n(964918),
    N = n(557534),
    T = n(68437),
    P = n(166444),
    w = n(813513),
    R = n(652215),
    D = n(349828),
    M = n(728444);

function L(e, t, n) {
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
                L(e, t, n[t]);
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
        clearTimeout(this.enterTimer), clearTimeout(this.exitTimer);
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)("div", {
                  className: M.yW,
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
                hasActiveThreads: s,
                hasMoreActiveThreads: c,
                mentionCount: u,
                connectChannelDropTarget: d,
                connectChannelDragSource: f,
                connectDragPreview: p,
                canReorderChannel: h,
                isSubscriptionGated: m,
                isFavoriteSuggestion: A,
                subtitle: y,
                forceTopLevelThread: O,
                embeddedApps: j,
                resolvedUnreadSetting: v,
                withGuildIcon: x,
                enableActivities: E,
            } = this.props,
            _ = E && null != j && j.length > 0,
            C = (0, g.M)(y),
            S = (0, r.jsx)("li", {
                className: a()(this.getClassName(), {
                    [M.r9]: this.isDisabled(),
                    [M.wH]: n,
                }),
                "data-dnd-name": e.name,
                onMouseEnter: c || _ ? this.handleMouseEnter : void 0,
                onMouseLeave: c || _ ? this.handleMouseLeave : void 0,
                children: (0, r.jsx)(o.YNO, {
                    targetElementRef: this.channelItemRef,
                    position: "right",
                    renderPopout: this.renderPopout,
                    onRequestClose: this.handleClosePopout,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (_ && this.state.shouldShowActivities),
                    children: () =>
                        (0, r.jsxs)(P.Ay, {
                            ref: this.channelItemRef,
                            className: M.Ki,
                            channel: e,
                            guild: t,
                            selected: !A && n,
                            muted: l,
                            unread: i,
                            mentionCount: u,
                            hasActiveThreads: s,
                            subtitle: null == C ? void 0 : C.subtitle,
                            subtitleColor: null == C ? void 0 : C.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: h ? p : null,
                            isFavoriteSuggestion: A,
                            channelTypeOverride: O ? R.rbe.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: v,
                            withGuildIcon: x,
                            "aria-label": (0, b.Ay)({
                                channel: e,
                                unread: i,
                                mentionCount: u,
                                isSubscriptionGated: m,
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
        return h ? d(f(S)) : S;
    }
    constructor(...e) {
        super(...e),
            L(this, "state", {
                shouldShowThreadsPopout: !1,
                shouldShowActivities: !1,
            }),
            L(this, "channelItemRef", l.createRef()),
            L(this, "enterTimer", 0),
            L(this, "exitTimer", 0),
            L(this, "handleMouseEnter", () => {
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
            L(this, "handleMouseLeave", () => {
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
            L(this, "handleThreadsPopoutClose", () => {
                this.resetTextChannelPopoutTimers(),
                    this.setState({
                        shouldShowThreadsPopout: !1,
                    });
            }),
            L(this, "handleActivitiesPopoutClose", () => {
                this.resetTextChannelPopoutTimers(),
                    this.setState({
                        shouldShowActivities: !1,
                    });
            }),
            L(this, "handleClosePopout", () => {
                this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
                    this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
            }),
            L(this, "handleMouseDown", () => {
                this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
                let { channel: e } = this.props,
                    t = e.getGuildId();
                c.A.preload(null != t ? t : R.ME, e.id);
            }),
            L(this, "renderPopout", (e) => {
                let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: i } = this.props,
                    { shouldShowActivities: a } = this.state;
                return t.isModeratorReportChannel() || i
                    ? null
                    : null != l && l.length > 0 && a && !n
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
            L(this, "handleContextMenu", (e) => {
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
                let l = v.A.getGuild(t.getGuildId());
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

function F(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: i, muted: a, selected: o } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, y.NR)(t),
        d = (0, s.cf)([_.Ay], () => ({
            unread: _.Ay.hasUnread(t.id),
            ackMessageId: _.Ay.ackMessageId(t.id),
            isLowImportanceMention: _.Ay.getIsMentionLowImportance(t.id),
        })),
        b = (0, s.bG)([C.Ay], () => C.Ay.resolveUnreadSetting(t)),
        g = (0, s.cf)([O.A, x.A], () => {
            let e = O.A.getChannel(t.parent_id);
            return {
                canManageChannel: x.A.can(R.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    (n.id === D.V ||
                        (null != e ? x.A.can(R.xBc.MANAGE_CHANNELS, e) : x.A.can(R.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        v = (0, s.bG)([A.A], () => A.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: S, isSubscriptionGated: I } = (0, m.A)(t.id),
        N = (0, s.bG)([C.Ay], () => C.Ay.isFavorite(n.id, t.id)),
        P = (0, h.vL)(t),
        w = (0, f.Gp)(t.id),
        M = (0, T.A)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: I,
            needSubscriptionToAccess: S,
            isNewChannel: v,
            muted: a,
            enableActivities: w,
            resolvedUnreadSetting: b,
        }),
        L = (0, p.Ay)(t);
    return (0, s.bG)([E.A, j.Ay], () => E.A.getChannelId() !== t.id && j.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, r.jsx)(
              V,
              k(G({}, d, g, e), {
                  hasActiveThreads: c,
                  hasMoreActiveThreads: u,
                  isSubscriptionGated: I,
                  needSubscriptionToAccess: S,
                  isNewChannel: v && e.canBeNewChannel,
                  isFavoriteSuggestion: i && !N,
                  channelIsContentGated: P,
                  channelInfo: M,
                  embeddedApps: L,
                  resolvedUnreadSetting: b,
                  hasChannelInfo: null != M,
                  enableActivities: w,
              }),
          );
}
