n.d(t, { Z: () => to }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(392711),
    u = n.n(c),
    d = n(828700),
    p = n(442837),
    f = n(704215),
    h = n(952265),
    g = n(481060),
    m = n(475179),
    b = n(239091),
    y = n(697309),
    v = n(457868),
    O = n(561472),
    j = n(112724),
    x = n(902840),
    C = n(110924),
    E = n(317381),
    S = n(82888),
    _ = n(917107),
    I = n(296797),
    P = n(622822),
    Z = n(100527),
    N = n(413523),
    T = n(358221),
    A = n(598006),
    w = n(677601),
    R = n(541716),
    D = n(236091),
    M = n(663993),
    k = n(252618),
    L = n(201493),
    U = n(266454),
    G = n(174130),
    B = n(588322),
    F = n(591472),
    H = n(446226),
    V = n(517525),
    z = n(445384),
    W = n(613464),
    K = n(705563),
    Y = n(730647),
    q = n(66999),
    X = n(826763),
    Q = n(180216),
    J = n(168843),
    $ = n(442336),
    ee = n(57304),
    et = n(605953),
    en = n(374306),
    er = n(984370),
    ei = n(910611),
    el = n(915718),
    ea = n(518311),
    eo = n(882378),
    es = n(207868),
    ec = n(473065),
    eu = n(576171),
    ed = n(754688),
    ep = n(41776),
    ef = n(370774),
    eh = n(471760),
    eg = n(801604),
    em = n(703656),
    eb = n(359110),
    ey = n(607802),
    ev = n(673676),
    eO = n(6025),
    ej = n(897473),
    ex = n(922482),
    eC = n(504185),
    eE = n(657218),
    eS = n(407908),
    e_ = n(66556),
    eI = n(739830),
    eP = n(377929),
    eZ = n(900157),
    eN = n(108427),
    eT = n(892001),
    eA = n(402130),
    ew = n(271172),
    eR = n(524329),
    eD = n(995532),
    eM = n(738643),
    ek = n(433355),
    eL = n(592125),
    eU = n(703558),
    eG = n(486472),
    eB = n(430824),
    eF = n(158776),
    eH = n(19780),
    eV = n(944486),
    ez = n(914010),
    eW = n(594174),
    eK = n(979651),
    eY = n(933557),
    eq = n(287746),
    eX = n(325708),
    eQ = n(335615),
    eJ = n(992744),
    e$ = n(923029),
    e0 = n(194082),
    e1 = n(176505),
    e4 = n(981631),
    e3 = n(918559),
    e7 = n(354459),
    e8 = n(921944),
    e2 = n(408491),
    e5 = n(440493),
    e6 = n(157925),
    e9 = n(388032),
    te = n(978966);
function tt(e, t, n) {
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
function tn(e) {
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
                tt(e, t, n[t]);
            });
    }
    return e;
}
function tr(e, t) {
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
let ti = (0, M.Un)({
    createPromise: () => n.e("49131").then(n.bind(n, 346975)),
    webpackId: 346975,
    renderLoader: () =>
        (0, r.jsx)("div", {
            className: te.loader,
            children: (0, r.jsx)(g.$jN, {}),
        }),
    name: "ForumChannel",
});
class tl extends i.PureComponent {
    componentDidMount() {
        (0, eN.e)("guild_channel");
    }
    componentDidUpdate(e) {
        null != this.props.channel &&
            null != e.channel &&
            this.props.channel.id !== e.channel.id &&
            this.state.topicExpanded &&
            this.setState({ topicExpanded: !1 }),
            this.openChannelModal();
    }
    openChannelContextMenu(e, t) {
        let { guild: i } = this.props;
        s()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            s()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, b.jW)(e, async () => {
                let { default: e } = await n.e("24783").then(n.bind(n, 439635));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tr(tn({}, n), {
                            channel: t,
                            guild: i,
                        }),
                    );
            });
    }
    openThreadContextMenu(e, t) {
        s()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            (0, b.jW)(e, async () => {
                let { default: e } = await n.e("40157").then(n.bind(n, 422200));
                return (n) => (0, r.jsx)(e, tr(tn({}, n), { channel: t }));
            });
    }
    openDMContextMenu(e, t) {
        s()(null != t, "Missing channel in Channel.openDMContextMenu");
        let i = eW.default.getUser(t.getRecipientId());
        s()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, b.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("79695"), n.e("66165"), n.e("56826"), n.e("93896")]).then(
                    n.bind(n, 131404),
                );
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tr(tn({}, n), {
                            user: i,
                            channelSelected: !0,
                            channel: t,
                        }),
                    );
            });
    }
    shouldRenderCall() {
        let { showCall: e, channelIsContentGated: t } = this.props;
        return !t && e;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((s()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e4.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(
                    eC.Z,
                    {
                        channel: e,
                        popoutType: A.P.NO_POPOUT,
                    },
                    e.id,
                );
            case e4.d4z.GUILD_VOICE:
            case e4.d4z.DM:
            case e4.d4z.GROUP_DM:
            case e4.d4z.PUBLIC_THREAD:
            case e4.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, r.jsx)(
                    w.Z,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                        popoutType: A.P.NO_POPOUT,
                    },
                    "call-".concat(e.id),
                );
            default:
                return null;
        }
    }
    renderEmbeddedActivityPanel() {
        let { channel: e } = this.props,
            t = this.shouldRenderCall();
        if ((s()(null != e, "Missing channel in Channel.renderEmbeddedActivityPanel"), t)) return null;
        let n = this.props.height - 200;
        return (0, r.jsx)(S.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar,
        });
    }
    renderChat() {
        let { channel: e, guild: t, needSubscriptionToAccess: n, channelIsContentGated: i, inCall: l } = this.props;
        if ((s()(null != e, "Missing channel in Channel.renderChat"), n))
            return (s()(null != t, "premium channels must exist within a guild"),
            null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, r.jsx)(X.Z, { guildId: t.id })
                : (0, r.jsx)(Y.l, {
                      guildId: t.id,
                      children: (0, r.jsx)(Q.Z, {
                          channelId: e.id,
                          guildId: t.id,
                      }),
                  });
        if (i)
            return (0, r.jsx)(ew.Z, {
                guild: t,
                channelId: e.id,
            });
        if (e.isGuildVocal() || (l && e.isVocalThread())) return null;
        if (e.isDirectory())
            return (
                s()(null != t, "directory channels must exist within a guild"),
                (0, r.jsx)(L.Z, {
                    channel: e,
                    guild: t,
                })
            );
        if (e.isForumLikeChannel()) {
            s()(null != t, "forum channels must exist within a guild");
            let n = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, r.jsx)(
                ti,
                {
                    channel: e,
                    guild: t,
                    sidebarState: n,
                },
                e.id,
            );
        }
        return (0, r.jsx)(
            eq.Z,
            {
                channel: e,
                guild: t,
                chatInputType: R.Ie.NORMAL,
            },
            null != t ? t.id : "home",
        );
    }
    renderSidebar() {
        let {
            channel: e,
            parentChannel: t,
            guild: n,
            needSubscriptionToAccess: i,
            section: l,
            showCall: a,
            showActivityPanel: o,
            showFramePanel: c,
        } = this.props;
        if ((s()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || i));
        else if (l === e4.ULH.PROFILE && e.isPrivate() && !a && !o && !c)
            return (0, r.jsx)(eA.Z, { channel: e }, "private-channel-profile-".concat(e.id));
        else if (l === e4.ULH.MEMBERS)
            switch (e.type) {
                case e4.d4z.GROUP_DM:
                    return (0, r.jsx)(eh.Z, { channel: e }, "private-channel-recipients-".concat(e.id));
                case e4.d4z.GUILD_DIRECTORY:
                case e4.d4z.GUILD_FORUM:
                case e4.d4z.GUILD_MEDIA:
                case e4.d4z.GUILD_ANNOUNCEMENT:
                case e4.d4z.GUILD_TEXT:
                    var u;
                    let d = !0 === e4.TPd.GUILD_THREADS_ONLY.has(e.type) ? e.id : null != (u = e.guild_id) ? u : e.id;
                    return (0, r.jsx)(eQ.C, { channel: e }, "channel-members-".concat(d));
                case e4.d4z.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, r.jsx)(eQ.C, { channel: t }, "channel-members-".concat(t.id));
                    break;
                case e4.d4z.PUBLIC_THREAD:
                case e4.d4z.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, r.jsx)(
                            v.Z,
                            {
                                channel: e,
                                guild: n,
                            },
                            "channel-members-".concat(e.id),
                        );
            }
        else if (l === e4.ULH.SEARCH)
            return (0, r.jsx)(ev.Z, {
                guildId: null == n ? void 0 : n.id,
                channelId: e.id,
            });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: t,
            hasModalOpen: i,
            showWelcomeModal: l,
            isLurking: a,
            isUnavailable: o,
            showRealNameModal: s,
        } = this.props;
        return (
            null == e ||
                null == t ||
                o ||
                i ||
                (s &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e("53900").then(n.bind(n, 784280));
                            return (n) => (0, r.jsx)(e, tr(tn({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => z.Z.viewPrompt(e5.r.REAL_NAME_PROMPT, t),
                            modalKey: "Guild Hub Real Name Modal",
                        },
                    ),
                l &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e("90542").then(n.bind(n, 184782));
                            return (n) => (0, r.jsx)(e, tr(tn({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => (0, eR.y0)(t, a),
                            modalKey: "Guild Welcome Screen Modal",
                        },
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e,
            {
                channel: t,
                section: n,
                channelSidebarState: i,
                guildSidebarState: l,
                width: a,
                channelIsContentGated: o,
            } = this.props;
        if (null == l && null == i) return null;
        if (n === e4.ULH.SIDEBAR_CHAT && null != i) {
            if (o) return null;
            switch (i.type) {
                case ej.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(eE.Z, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case ej.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? B.Z : eZ.Z;
                    e = (0, r.jsx)(n, { channelId: i.channelId });
                    break;
                case ej.tI.VIEW_MOD_REPORT:
                    e = (0, r.jsx)(eZ.Z, {
                        channelId: i.channelId,
                        baseChannelId: i.baseChannelId,
                    });
                    break;
                case ej.tI.VIEW_CHANNEL:
                case ej.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != l && null == e)
            if (l.type !== ej.jL.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = l.details;
                return (0, r.jsx)("div", {
                    style: { width: e4.$Y6 },
                    className: te.guildSidebar,
                    children: (0, r.jsx)(W.Z, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => eO.Z.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let s = (null == t ? void 0 : t.type) != null && e4.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = a - e4.PrS - s;
        return (
            (c += y.qO),
            (0, r.jsx)(eX.Z, {
                sidebarType:
                    (null == t ? void 0 : t.type) != null && e4.TPd.GUILD_THREADS_ONLY.has(t.type)
                        ? eX.y.PostSidebar
                        : eX.y.ThreadSidebar,
                maxWidth: c,
                onWidthChange: this.handleThreadSidebarResize,
                children: e,
            })
        );
    }
    render() {
        let {
                channel: e,
                guild: t,
                formattedChannelName: n,
                isUnavailable: i,
                layout: l,
                section: o,
                hasModalOpen: s,
                guildSidebarState: c,
                hasTextActivityInPanelMode: u,
            } = this.props,
            { threadSidebarWidth: d, isThreadSidebarFloating: p } = this.state,
            f = this.shouldRenderCall();
        if (i) return (0, r.jsx)(eJ.Z, {});
        if (null == e) return (0, r.jsx)(e$.Z, { channelId: this.props.channelId });
        let h = o === e4.ULH.SIDEBAR_CHAT,
            g = null != c && !h,
            m = !e.isForumLikeChannel() && !s,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(k.yY, {
                    location: b,
                    subsection: null != n ? n : void 0,
                }),
                (0, r.jsxs)("div", {
                    "data-has-border": e.type !== e4.d4z.GUILD_VOICE,
                    className: a()(te.chat, {
                        [te.threadSidebarOpen]: h || g,
                        [te.threadSidebarFloating]: h && p,
                    }),
                    children: [
                        m
                            ? (0, r.jsx)(O.Z, {
                                  style: { right: h ? d : void 0 },
                                  className: te.uploadArea,
                                  channel: e,
                                  draftType: eU.d.ChannelMessage,
                              })
                            : null,
                        f || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)("div", {
                            className: a()(te.content, { [te.noChat]: l === e4.AEg.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            tt(this, "state", {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1,
            }),
            tt(this, "handleTitleParentClick", () => {
                let { parentChannel: e } = this.props;
                null != e && (0, eb.Kh)(e.id);
            }),
            tt(this, "_handleContextMenu", (e, t) => {
                switch (t.type) {
                    case e4.d4z.GUILD_VOICE:
                    case e4.d4z.GUILD_ANNOUNCEMENT:
                    case e4.d4z.GUILD_TEXT:
                    case e4.d4z.GUILD_FORUM:
                    case e4.d4z.GUILD_MEDIA:
                        this.openChannelContextMenu(e, t);
                        break;
                    case e4.d4z.ANNOUNCEMENT_THREAD:
                    case e4.d4z.PUBLIC_THREAD:
                    case e4.d4z.PRIVATE_THREAD:
                        this.openThreadContextMenu(e, t);
                        break;
                    case e4.d4z.DM:
                        this.openDMContextMenu(e, t);
                }
            }),
            tt(this, "handleContextMenu", (e) => {
                s()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"),
                    this._handleContextMenu(e, this.props.channel);
            }),
            tt(this, "handleParentContextMenu", (e) => {
                s()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"),
                    this._handleContextMenu(e, this.props.parentChannel);
            }),
            tt(this, "handleThreadSidebarResize", (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t,
                });
            }),
            tt(this, "openUserProfile", () => {
                let { channel: e } = this.props;
                s()(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"),
                    (0, eT.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        sourceAnalyticsLocations: [Z.Z.CHANNEL_HEADER],
                    });
            }),
            tt(this, "renderJoinRequestInterviewButtons", () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e1.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(K.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0,
                      })
                    : null;
            }),
            tt(this, "renderClipsEnabledIndicatorToolbarItem", () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, r.jsx)(D.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            tt(this, "renderStreamQualityLiveIndicatorToolbarItem", () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e7.fO.STREAM
                    ? null
                    : (0, r.jsx)(
                          V.Z,
                          {
                              size: e0.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t,
                          },
                          "live-indicator",
                      );
            }),
            tt(this, "renderHeaderToolbar", () => {
                let {
                    channel: e,
                    parentChannel: t,
                    isLurking: n,
                    showCall: i,
                    showActivityPanel: l,
                    showFramePanel: a,
                } = this.props;
                s()(null != e, "Missing channel in Channel.renderHeaderToolbar");
                let o = [];
                if (e.isSystemDM()) return o;
                switch (e.type) {
                    case e4.d4z.GUILD_STAGE_VOICE:
                    case e4.d4z.GUILD_VOICE:
                        break;
                    case e4.d4z.DM:
                        o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            o.push((0, r.jsx)(el.Z, { channel: e }, "calls")),
                            o.push((0, r.jsx)(ee.Z, { channel: e }, "pins")),
                            o.push(
                                (0, r.jsx)(
                                    ea.Z,
                                    {
                                        channel: e,
                                        tooltip: e9.intl.string(e9.t.Xjlbvs),
                                        location: "ChannelHeaderToolbar-DM-AddFriendsButton",
                                    },
                                    "invite",
                                ),
                            ),
                            o.push(
                                (0, r.jsx)(
                                    ec.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: i || l || a,
                                    },
                                    "profile",
                                ),
                            ),
                            o.push((0, r.jsx)(eo.Z, { channel: e }, "safety_tools"));
                        break;
                    case e4.d4z.GROUP_DM:
                        if (
                            (o.push(this.renderJoinRequestInterviewButtons()),
                            o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            o.push((0, r.jsx)(el.Z, { channel: e }, "calls")),
                            o.push((0, r.jsx)(ee.Z, { channel: e }, "pins")),
                            !e.isManaged())
                        ) {
                            let t = e9.intl.string(e9.t.Xjlbvs);
                            o.push(
                                (0, r.jsx)(
                                    ea.Z,
                                    {
                                        channel: e,
                                        tooltip: t,
                                        location: "ChannelHeaderToolbar-GroupDM-AddFriendsButton",
                                    },
                                    "invite",
                                ),
                            );
                        }
                        o.push((0, r.jsx)(J.Z, { channelId: e.id }, "members"));
                        break;
                    case e4.d4z.ANNOUNCEMENT_THREAD:
                    case e4.d4z.PRIVATE_THREAD:
                    case e4.d4z.PUBLIC_THREAD:
                        e.isModeratorReportChannel() && o.push((0, r.jsx)(eS.Z, { channel: e })),
                            null == t || t.isForumLikeChannel() || o.push((0, r.jsx)(e_.Z, { channel: t }, "browser")),
                            e.isVocalThread() && o.push((0, r.jsx)(es.Z, { channel: e }, "thread-call")),
                            o.push((0, r.jsx)(eI.Z, { channel: e }, "notifications")),
                            o.push((0, r.jsx)(ee.Z, { channel: e }, "pins")),
                            e.isArchivedThread() || o.push((0, r.jsx)(J.Z, { channelId: e.id }, "members")),
                            null != t && (0, x.Lp)(e) && o.push((0, r.jsx)(et.Z, { channel: e }, "summaries")),
                            o.push((0, r.jsx)(eP.Z, { channel: e }, "threads-overflow"));
                        break;
                    case e4.d4z.GUILD_ANNOUNCEMENT:
                    case e4.d4z.GUILD_TEXT:
                        o.push((0, r.jsx)(G.Z, { channel: e }, "favorites")),
                            o.push((0, r.jsx)(e_.Z, { channel: e }, "browser")),
                            n || o.push((0, r.jsx)($.Z, { channel: e }, "notifications")),
                            o.push((0, r.jsx)(ee.Z, { channel: e }, "pins")),
                            o.push((0, r.jsx)(J.Z, { channelId: e.id }, "members")),
                            (0, x.Lp)(e) && o.push((0, r.jsx)(et.Z, { channel: e }, "summaries"));
                        break;
                    case e4.d4z.GUILD_FORUM:
                    case e4.d4z.GUILD_MEDIA:
                        n ||
                            (o.push((0, r.jsx)(en.Z, { channel: e }, "forum-onboarding")),
                            o.push((0, r.jsx)($.Z, { channel: e }, "notifications"))),
                            __OVERLAY__ || o.push((0, r.jsx)(J.Z, { channelId: e.id }, "members"));
                        break;
                    case e4.d4z.GUILD_DIRECTORY:
                        o.push((0, r.jsx)(J.Z, { channelId: e.id }, "members"));
                }
                return o;
            }),
            tt(this, "renderMobileToolbar", () => {
                let { channel: e } = this.props;
                s()(null != e, "Missing channel in Channel.renderHeaderToolbar");
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e4.d4z.GUILD_STAGE_VOICE:
                    case e4.d4z.GUILD_VOICE:
                    case e4.d4z.DM:
                        break;
                    case e4.d4z.GROUP_DM:
                        t.push((0, r.jsx)(J.Z, { channelId: e.id }, "members"));
                        break;
                    case e4.d4z.ANNOUNCEMENT_THREAD:
                    case e4.d4z.PRIVATE_THREAD:
                    case e4.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, r.jsx)(J.Z, { channelId: e.id }, "members"));
                        break;
                    case e4.d4z.GUILD_ANNOUNCEMENT:
                    case e4.d4z.GUILD_TEXT:
                    case e4.d4z.GUILD_FORUM:
                    case e4.d4z.GUILD_MEDIA:
                    case e4.d4z.GUILD_DIRECTORY:
                        t.push((0, r.jsx)(J.Z, { channelId: e.id }, "members"));
                }
                return t;
            }),
            tt(this, "renderFollowButton", () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)("div", {
                          className: te.followButton,
                          children: (0, r.jsx)(g.Button, {
                              variant: "secondary",
                              size: "sm",
                              text: e9.intl.string(e9.t["3aOv+h"]),
                              onClick: () =>
                                  (0, g.ZDy)(async () => {
                                      let { default: e } = await n.e("96964").then(n.bind(n, 807007));
                                      return (n) => (0, r.jsx)(e, tn({ channel: t }, n));
                                  }),
                          }),
                      })
                    : null;
            }),
            tt(this, "renderHeaderBar", () => {
                let {
                    channel: e,
                    channelName: t,
                    parentChannel: n,
                    guild: i,
                    guildId: l,
                    showCall: o,
                    showActivityPanel: c,
                    showFramePanel: u,
                    hasVideo: d,
                    showHeaderGuildBreadcrumb: p,
                    isFavorites: f,
                } = this.props;
                s()(null != e, "Missing channel in Channel.renderHeaderBar"),
                    s()(null != t, "Should not be null if channel is not null.");
                let h = e.isDM() && !e.isSystemDM() ? this.openUserProfile : p ? () => (0, eb.Kh)(e.id) : void 0,
                    m =
                        (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null
                            ? this.handleTitleParentClick
                            : void 0,
                    b = c || u,
                    y = o || b;
                return (0, r.jsxs)("div", {
                    className: te.subtitleContainer,
                    children: [
                        (0, r.jsx)(g.f6W, {
                            theme: d && o ? e4.BRd.DARK : void 0,
                            children: (o) =>
                                (0, r.jsxs)(
                                    er.Z,
                                    {
                                        guildId: l,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (f && !(0, ey.X$)()),
                                        showDivider: f && !(0, ey.X$)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: a()(te.title, o, { [te.gdm]: e.type === e4.d4z.GROUP_DM }),
                                        transparent: y,
                                        hidden: u,
                                        "aria-label": e9.intl.string(e9.t.BIYAqa),
                                        children: [
                                            p &&
                                                (0, r.jsx)(ei.TS, {
                                                    channel: e,
                                                    guild: i,
                                                    caretPosition: "right",
                                                }),
                                            (0, ei.ud)({
                                                channel: e,
                                                channelName: t,
                                                parentChannel: n,
                                                guild: i,
                                                hasVideo: d,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: h,
                                                handleParentClick: m,
                                                renderFollowButton: this.renderFollowButton,
                                            }),
                                            p
                                                ? (0, r.jsx)("div", {
                                                      className: te.followButton,
                                                      children: (0, r.jsx)(g.Button, {
                                                          onClick: () => (0, em.XU)(e.guild_id, e.id),
                                                          variant: "secondary",
                                                          size: "sm",
                                                          text: e9.intl.string(e9.t.k5WiPf),
                                                      }),
                                                  })
                                                : (0, ei.v0)(e, i),
                                        ],
                                    },
                                    "header-".concat(e.id),
                                ),
                        }),
                        (0, r.jsx)(eg.Z, { channelId: e.id }),
                    ],
                });
            });
    }
}
let ta = (0, j.Z)(tl),
    to = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, a] = i.useState(null),
            o = (0, p.e7)([eV.Z], () => eV.Z.getChannelId()),
            s = (0, p.e7)([eV.Z], () => eV.Z.getVoiceChannelId()),
            c = (0, p.e7)([eL.Z], () => (null != n ? n : eL.Z.getChannel(o)), [o, n]),
            g = (0, p.e7)([eL.Z], () => eL.Z.getChannel(s), [s]),
            b = null == c ? void 0 : c.parent_id,
            y = (0, p.e7)([eL.Z], () => eL.Z.getChannel(b), [b]),
            v = (0, p.e7)([eB.Z], () => eB.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: O } = (0, q.Z)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            j = (0, p.e7)([T.Z], () => {
                let e = null != o ? T.Z.getParticipants(o) : [],
                    t = null != o ? T.Z.getActivityParticipants(o) : [];
                return e.length - t.length > 0;
            }, [o]),
            S = (0, H.Z)(),
            Z = (0, p.e7)([eV.Z], () => {
                var e;
                return (
                    (null != (e = null == S ? void 0 : S.channelId) ? e : eV.Z.getVoiceChannelId()) ===
                    (null == c ? void 0 : c.id)
                );
            }),
            A = (0, p.e7)([E.ZP], () => (null != c ? E.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            w = (0, p.e7)([eH.Z], () => eH.Z.isConnected()),
            R = (0, C.Z)(w),
            D = w && !1 === R;
        i.useEffect(() => {
            Z &&
                D &&
                null != A &&
                null != c &&
                m.Z.selectParticipant(
                    c.id,
                    (0, N.gN)({
                        applicationId: A.applicationId,
                        instanceId: A.compositeInstanceId,
                    }),
                );
        }, [D, c, Z, A]);
        let M = (0, p.e7)([E.ZP], () => E.ZP.getCurrentEmbeddedActivity()),
            k = (0, p.e7)([E.ZP], () => E.ZP.getActivityPanelMode()),
            L = null != M && !(0, _.Z)(null == c ? void 0 : c.id) && k === e3.Ez.PANEL,
            G = (0, p.e7)(
                [eK.Z],
                () => null != c && c.isVocalThread() && !u().isEmpty(eK.Z.getVoiceStatesForChannel(c.id)),
                [c],
            ),
            B = null != c && c.isPrivate() && !L && j,
            V = (null == c ? void 0 : c.isGuildVocal()) || B || G,
            z = (0, p.e7)([F.Z], () => F.Z.getFrameLayoutMode() === e2.U.FOCUSED),
            { welcomeModalChannelId: W } = (0, d.TH)(),
            K = (0, p.e7)([ep.Z], () => null != c && ep.Z.isLurking(c.guild_id), [c]),
            Y = (0, p.e7)([eD.Z], () => eD.Z.hasSeen(null == c ? void 0 : c.guild_id, K), [c, K]),
            X = (0, p.e7)(
                [T.Z, E.ZP],
                () =>
                    null != E.ZP.getConnectedActivityLocation() && E.ZP.getActivityPanelMode() === e3.Ez.PANEL
                        ? E.ZP.getFocusedLayout() === e3.MI.NO_CHAT
                            ? e4.AEg.NO_CHAT
                            : e4.AEg.NORMAL
                        : null != o
                          ? T.Z.getLayout(o)
                          : e4.AEg.NORMAL,
                [o],
            ),
            Q = (0, p.e7)([T.Z], () => (null != c ? T.Z.getSelectedParticipant(c.id) : null)),
            J = (0, P.$5)(c),
            $ = (0, eu.Z)(null == v ? void 0 : v.id),
            ee = (0, eM.Z)(W, null == v ? void 0 : v.id),
            { section: et, channelSidebarState: en } = (0, p.cj)(
                [ek.ZP],
                () => ({
                    section: ek.ZP.getSection(o, null == c ? void 0 : c.isDM()),
                    channelSidebarState: ek.ZP.getSidebarState(o),
                }),
                [o, c],
            ),
            er = null == v ? void 0 : v.id,
            ei = (0, p.e7)([ek.ZP], () => ek.ZP.getGuildSidebarState(er), [er]),
            el = (0, p.e7)([ez.Z], () => ez.Z.getGuildId()) === e4.I_8,
            ea = (0, ef.D)(),
            eo = (0, eY.ZP)(c),
            es = (0, eY.ZP)(c, !0),
            ec = null != c && s === c.id,
            eh = null != c && c.isGuildStageVoice();
        (0, I.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, em.s1)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === e6.Df) {
                    let { channelId: e } =
                        null != (n = (0, ed.Qj)(null == r || null == (t = r.location) ? void 0 : t.pathname)) ? n : {};
                    null != e && a(e);
                }
            }, []);
        let eg = {
                channel: c,
                inCurrentVoiceChannel: ec,
            },
            eb = i.useRef(eg);
        i.useEffect(() => {
            eb.current = eg;
        }),
            i.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = eb.current;
                null != l && null != e && eh && e.id === l && !t && ((0, ex.Cq)(e), a(null));
            }, [l, eh]);
        let ey = (0, x.ts)(c),
            ev = null != c && c.isPrivate(),
            eO = (0, C.Z)(ev),
            ej = (0, C.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = eO && !ev,
                t = eO && ev && (null == c ? void 0 : c.id) !== ej;
            (e || t) && (0, U.Q3)(f.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e8.L.AUTO });
        }, [null == c ? void 0 : c.id, ej, ev, eO]);
        let eC = (0, h.useHasAnyModalOpen)();
        return (0, r.jsx)(
            ta,
            tr(
                tn(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: o,
                        channel: c,
                        channelName: eo,
                        formattedChannelName: es,
                        parentChannel: y,
                        voiceChannel: g,
                        layout: X,
                        needSubscriptionToAccess: O,
                        isLurking: K,
                        hasModalOpen: eC,
                        section: et,
                        channelSidebarState: en,
                        guildSidebarState: ei,
                        guild: v,
                        showCall: !O && V,
                        showActivityPanel: L,
                        showFramePanel: z,
                        channelIsContentGated: J,
                        isMobile: (0, p.e7)(
                            [eF.Z],
                            () =>
                                (null == c ? void 0 : c.type) === e4.d4z.DM && eF.Z.isMobileOnline(c.getRecipientId()),
                            [c],
                        ),
                        isUnavailable: (0, p.e7)(
                            [eG.Z],
                            () => (null == c ? void 0 : c.guild_id) != null && eG.Z.isUnavailable(c.guild_id),
                            [c],
                        ),
                        showRealNameModal: $,
                        showWelcomeModal: !Y && ee,
                        showFollowButton:
                            ((null == c ? void 0 : c.type) === e4.d4z.GUILD_ANNOUNCEMENT &&
                                (null == v ? void 0 : v.features.has(e4.GuildFeatures.NEWS))) ||
                            !1,
                    },
                    (0, p.cj)([eK.Z], () => ({ hasVideo: null != c && eK.Z.hasVideo(c.id) }), [c]),
                ),
                {
                    inCall: ec,
                    selectedParticipant: Q,
                    showChannelSummaries: ey,
                    isFavorites: el,
                    showHeaderGuildBreadcrumb: el || ea,
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: L,
                    embeddedActivity: M,
                },
            ),
        );
    });
