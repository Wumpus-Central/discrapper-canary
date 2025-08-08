n.d(t, { Z: () => tc }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    u = n.n(c),
    d = n(114858),
    h = n(442837),
    p = n(704215),
    f = n(952265),
    g = n(755721),
    m = n(481060),
    b = n(475179),
    y = n(239091),
    x = n(377993),
    _ = n(697309),
    j = n(457868),
    O = n(561472),
    v = n(36311),
    C = n(112724),
    E = n(902840),
    S = n(110924),
    I = n(317381),
    Z = n(82888),
    P = n(917107),
    T = n(296797),
    N = n(622822),
    R = n(100527),
    w = n(413523),
    A = n(358221),
    D = n(677601),
    k = n(541716),
    L = n(236091),
    M = n(663993),
    U = n(252618),
    F = n(201493),
    H = n(266454),
    G = n(174130),
    B = n(588322),
    W = n(591472),
    V = n(446226),
    z = n(517525),
    Y = n(445384),
    q = n(613464),
    K = n(705563),
    Q = n(730647),
    X = n(66999),
    J = n(826763),
    $ = n(180216),
    ee = n(168843),
    et = n(442336),
    en = n(57304),
    er = n(605953),
    ei = n(405954),
    el = n(374306),
    ea = n(984370),
    es = n(910611),
    eo = n(915718),
    ec = n(518311),
    eu = n(882378),
    ed = n(207868),
    eh = n(473065),
    ep = n(576171),
    ef = n(754688),
    eg = n(41776),
    em = n(370774),
    eb = n(134483),
    ey = n(703656),
    ex = n(359110),
    e_ = n(607802),
    ej = n(14091),
    eO = n(6025),
    ev = n(897473),
    eC = n(922482),
    eE = n(856393),
    eS = n(657218),
    eI = n(407908),
    eZ = n(66556),
    eP = n(739830),
    eT = n(377929),
    eN = n(900157),
    eR = n(108427),
    ew = n(892001),
    eA = n(402130),
    eD = n(524329),
    ek = n(995532),
    eL = n(738643),
    eM = n(433355),
    eU = n(592125),
    eF = n(703558),
    eH = n(486472),
    eG = n(731290),
    eB = n(430824),
    eW = n(158776),
    eV = n(19780),
    ez = n(944486),
    eY = n(914010),
    eq = n(594174),
    eK = n(979651),
    eQ = n(933557),
    eX = n(287746),
    eJ = n(325708),
    e$ = n(335615),
    e0 = n(992744),
    e1 = n(923029),
    e3 = n(194082),
    e8 = n(176505),
    e7 = n(981631),
    e5 = n(918559),
    e2 = n(354459),
    e4 = n(921944),
    e6 = n(408491),
    e9 = n(440493),
    te = n(157925),
    tt = n(388032),
    tn = n(100658);
function tr(e, t, n) {
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
function ti(e) {
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
                tr(e, t, n[t]);
            });
    }
    return e;
}
function tl(e, t) {
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
let ta = (0, M.Un)({
    createPromise: () => Promise.all([n.e("22173"), n.e("71879")]).then(n.bind(n, 346975)),
    webpackId: 346975,
    renderLoader: () =>
        (0, r.jsx)("div", {
            className: tn.loader,
            children: (0, r.jsx)(m.$jN, {}),
        }),
    name: "ForumChannel",
});
class ts extends i.PureComponent {
    componentDidMount() {
        (0, eR.e)("guild_channel");
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
        o()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            o()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, y.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("24783"), n.e("49220")]).then(n.bind(n, 439635));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tl(ti({}, n), {
                            channel: t,
                            guild: i,
                        }),
                    );
            });
    }
    openThreadContextMenu(e, t) {
        o()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            (0, y.jW)(e, async () => {
                let { default: e } = await n.e("40157").then(n.bind(n, 422200));
                return (n) => (0, r.jsx)(e, tl(ti({}, n), { channel: t }));
            });
    }
    openDMContextMenu(e, t) {
        o()(null != t, "Missing channel in Channel.openDMContextMenu");
        let i = eq.default.getUser(t.getRecipientId());
        o()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, y.jW)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("70205"),
                    n.e("98783"),
                    n.e("57789"),
                    n.e("56826"),
                    n.e("91850"),
                ]).then(n.bind(n, 131404));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tl(ti({}, n), {
                            user: i,
                            channelSelected: !0,
                            channel: t,
                        }),
                    );
            });
    }
    shouldRenderCall() {
        let { channel: e, showCall: t, nsfwAllowed: n, nsfwAgree: r } = this.props;
        return (!(0, N.aC)(e) || (n && r)) && t;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e7.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(eE.Z, { channel: e }, e.id);
            case e7.d4z.GUILD_VOICE:
            case e7.d4z.DM:
            case e7.d4z.GROUP_DM:
            case e7.d4z.PUBLIC_THREAD:
            case e7.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, r.jsx)(
                    D.Z,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
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
        if ((o()(null != e, "Missing channel in Channel.renderEmbeddedActivityPanel"), t)) return null;
        let n = this.props.height - 200;
        return (0, r.jsx)(Z.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar,
        });
    }
    renderChat() {
        let { channel: e, nsfwAgree: t, guild: n, nsfwAllowed: i, needSubscriptionToAccess: l } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderChat"), l))
            return (o()(null != n, "premium channels must exist within a guild"),
            null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, r.jsx)(J.Z, { guildId: n.id })
                : (0, r.jsx)(Q.l, {
                      guildId: n.id,
                      children: (0, r.jsx)($.Z, {
                          channelId: e.id,
                          guildId: n.id,
                      }),
                  });
        if ((0, N.aC)(e) && (!i || !t))
            return (0, r.jsx)(v.Z, {
                guild: n,
                channelId: e.id,
            });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                o()(null != n, "directory channels must exist within a guild"),
                (0, r.jsx)(F.Z, {
                    channel: e,
                    guild: n,
                })
            );
        if (e.isForumLikeChannel()) {
            o()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, r.jsx)(
                ta,
                {
                    channel: e,
                    guild: n,
                    sidebarState: t,
                },
                e.id,
            );
        }
        return (0, r.jsx)(
            eX.Z,
            {
                channel: e,
                guild: n,
                chatInputType: k.Ie.NORMAL,
            },
            null != n ? n.id : "home",
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
            showActivityPanel: s,
            showFramePanel: c,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || i));
        else if (l === e7.ULH.PROFILE && e.isPrivate() && !a && !s && !c)
            return (0, r.jsx)(eA.Z, { channel: e }, "private-channel-profile-".concat(e.id));
        else if (l === e7.ULH.MEMBERS)
            switch (e.type) {
                case e7.d4z.GROUP_DM:
                    return (0, r.jsx)(x.Z, { channel: e }, "private-channel-recipients-".concat(e.id));
                case e7.d4z.GUILD_DIRECTORY:
                case e7.d4z.GUILD_FORUM:
                case e7.d4z.GUILD_MEDIA:
                case e7.d4z.GUILD_ANNOUNCEMENT:
                case e7.d4z.GUILD_TEXT:
                    var u;
                    let d = !0 === e7.TPd.GUILD_THREADS_ONLY.has(e.type) ? e.id : null != (u = e.guild_id) ? u : e.id;
                    return (0, r.jsx)(e$.Z, { channel: e }, "channel-members-".concat(d));
                case e7.d4z.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, r.jsx)(e$.Z, { channel: t }, "channel-members-".concat(t.id));
                    break;
                case e7.d4z.PUBLIC_THREAD:
                case e7.d4z.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, r.jsx)(
                            j.Z,
                            {
                                channel: e,
                                guild: n,
                            },
                            "channel-members-".concat(e.id),
                        );
            }
        else if (l === e7.ULH.SEARCH)
            return (0, r.jsx)(ej.Z, {
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
            isUnavailable: s,
            showRealNameModal: o,
        } = this.props;
        return (
            null == e ||
                null == t ||
                s ||
                i ||
                (o &&
                    (0, m.ZDy)(
                        async () => {
                            let { default: e } = await n.e("53900").then(n.bind(n, 784280));
                            return (n) => (0, r.jsx)(e, tl(ti({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => Y.Z.viewPrompt(e9.r.REAL_NAME_PROMPT, t),
                            modalKey: "Guild Hub Real Name Modal",
                        },
                    ),
                l &&
                    (0, m.ZDy)(
                        async () => {
                            let { default: e } = await n.e("77578").then(n.bind(n, 184782));
                            return (n) => (0, r.jsx)(e, tl(ti({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => (0, eD.y0)(t, a),
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
                nsfwAgree: a,
                nsfwAllowed: s,
                width: o,
            } = this.props;
        if (null == l && null == i) return null;
        if (n === e7.ULH.SIDEBAR_CHAT && null != i) {
            if ((0, N.aC)(t) && (!s || !a)) return null;
            switch (i.type) {
                case ev.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(eS.Z, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case ev.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? B.Z : eN.Z;
                    e = (0, r.jsx)(n, { channelId: i.channelId });
                    break;
                case ev.tI.VIEW_MOD_REPORT:
                    e = (0, r.jsx)(eN.Z, {
                        channelId: i.channelId,
                        baseChannelId: i.baseChannelId,
                    });
                    break;
                case ev.tI.VIEW_CHANNEL:
                case ev.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != l && null == e)
            if (l.type !== ev.jL.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t } = l.details;
                return (0, r.jsx)("div", {
                    style: { width: e7.$Y6 },
                    className: tn.guildSidebar,
                    children: (0, r.jsx)(q.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => eO.Z.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let c = (null == t ? void 0 : t.type) != null && e7.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            u = o - e7.PrS - c;
        return (
            (u += _.qO),
            (0, r.jsx)(eJ.Z, {
                sidebarType:
                    (null == t ? void 0 : t.type) != null && e7.TPd.GUILD_THREADS_ONLY.has(t.type)
                        ? eJ.y.PostSidebar
                        : eJ.y.ThreadSidebar,
                maxWidth: u,
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
                section: s,
                hasModalOpen: o,
                guildSidebarState: c,
                hasTextActivityInPanelMode: u,
            } = this.props,
            { threadSidebarWidth: d, isThreadSidebarFloating: h } = this.state,
            p = this.shouldRenderCall();
        if (i) return (0, r.jsx)(e0.Z, {});
        if (null == e) return (0, r.jsx)(e1.Z, { channelId: this.props.channelId });
        let f = s === e7.ULH.SIDEBAR_CHAT,
            g = null != c && !f,
            m = !e.isForumLikeChannel() && !o,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(U.yY, {
                    location: b,
                    subsection: null != n ? n : void 0,
                }),
                (0, r.jsxs)("div", {
                    "data-has-border": e.type !== e7.d4z.GUILD_VOICE,
                    className: a()(tn.chat, {
                        [tn.threadSidebarOpen]: f || g,
                        [tn.threadSidebarFloating]: f && h,
                    }),
                    children: [
                        m
                            ? (0, r.jsx)(O.Z, {
                                  style: { right: f ? d : void 0 },
                                  className: tn.uploadArea,
                                  channel: e,
                                  draftType: eF.d.ChannelMessage,
                              })
                            : null,
                        p || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)("div", {
                            className: a()(tn.content, { [tn.noChat]: l === e7.AEg.NO_CHAT }),
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
            tr(this, "state", {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1,
            }),
            tr(this, "handleTitleParentClick", () => {
                let { parentChannel: e } = this.props;
                null != e && (0, ex.Kh)(e.id);
            }),
            tr(this, "_handleContextMenu", (e, t) => {
                switch (t.type) {
                    case e7.d4z.GUILD_VOICE:
                    case e7.d4z.GUILD_ANNOUNCEMENT:
                    case e7.d4z.GUILD_TEXT:
                    case e7.d4z.GUILD_FORUM:
                    case e7.d4z.GUILD_MEDIA:
                        this.openChannelContextMenu(e, t);
                        break;
                    case e7.d4z.ANNOUNCEMENT_THREAD:
                    case e7.d4z.PUBLIC_THREAD:
                    case e7.d4z.PRIVATE_THREAD:
                        this.openThreadContextMenu(e, t);
                        break;
                    case e7.d4z.DM:
                        this.openDMContextMenu(e, t);
                }
            }),
            tr(this, "handleContextMenu", (e) => {
                o()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"),
                    this._handleContextMenu(e, this.props.channel);
            }),
            tr(this, "handleParentContextMenu", (e) => {
                o()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"),
                    this._handleContextMenu(e, this.props.parentChannel);
            }),
            tr(this, "handleThreadSidebarResize", (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t,
                });
            }),
            tr(this, "openUserProfile", () => {
                let { channel: e } = this.props;
                o()(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"),
                    (0, ew.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        sourceAnalyticsLocations: [R.Z.CHANNEL_HEADER],
                    });
            }),
            tr(this, "renderJoinRequestInterviewButtons", () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e8.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(K.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0,
                      })
                    : null;
            }),
            tr(this, "renderClipsEnabledIndicatorToolbarItem", () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, r.jsx)(L.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            tr(this, "renderStreamQualityLiveIndicatorToolbarItem", () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e2.fO.STREAM
                    ? null
                    : (0, r.jsx)(
                          z.Z,
                          {
                              size: e3.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t,
                          },
                          "live-indicator",
                      );
            }),
            tr(this, "renderHeaderToolbar", () => {
                let {
                    channel: e,
                    parentChannel: t,
                    isLurking: n,
                    showCall: i,
                    showActivityPanel: l,
                    showFramePanel: a,
                } = this.props;
                o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
                let s = [];
                if (e.isSystemDM()) return s;
                switch (e.type) {
                    case e7.d4z.GUILD_STAGE_VOICE:
                    case e7.d4z.GUILD_VOICE:
                        break;
                    case e7.d4z.DM:
                        s.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            s.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            s.push((0, r.jsx)(eo.Z, { channel: e }, "calls")),
                            s.push((0, r.jsx)(en.Z, { channel: e }, "pins")),
                            s.push(
                                (0, r.jsx)(
                                    ec.Z,
                                    {
                                        channel: e,
                                        tooltip: tt.intl.string(tt.t.Xjlbvr),
                                        location: "ChannelHeaderToolbar-DM-AddFriendsButton",
                                    },
                                    "invite",
                                ),
                            ),
                            s.push(
                                (0, r.jsx)(
                                    eh.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: i || l || a,
                                    },
                                    "profile",
                                ),
                            ),
                            s.push((0, r.jsx)(eu.Z, { channel: e }, "safety_tools")),
                            s.push((0, r.jsx)(ei.Z, { channel: e }, "chat-wallpaper"));
                        break;
                    case e7.d4z.GROUP_DM:
                        if (
                            (s.push(this.renderJoinRequestInterviewButtons()),
                            s.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            s.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            s.push((0, r.jsx)(eo.Z, { channel: e }, "calls")),
                            s.push((0, r.jsx)(en.Z, { channel: e }, "pins")),
                            !e.isManaged())
                        ) {
                            let t = tt.intl.string(tt.t.Xjlbvr);
                            s.push(
                                (0, r.jsx)(
                                    ec.Z,
                                    {
                                        channel: e,
                                        tooltip: t,
                                        location: "ChannelHeaderToolbar-GroupDM-AddFriendsButton",
                                    },
                                    "invite",
                                ),
                            );
                        }
                        s.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members")),
                            s.push((0, r.jsx)(ei.Z, { channel: e }, "chat-wallpaper"));
                        break;
                    case e7.d4z.ANNOUNCEMENT_THREAD:
                    case e7.d4z.PRIVATE_THREAD:
                    case e7.d4z.PUBLIC_THREAD:
                        s.push((0, r.jsx)(eI.Z, { channel: e })),
                            null == t || t.isForumLikeChannel() || s.push((0, r.jsx)(eZ.Z, { channel: t }, "browser")),
                            e.isVocalThread() && s.push((0, r.jsx)(ed.Z, { channel: e }, "thread-call")),
                            s.push((0, r.jsx)(eP.Z, { channel: e }, "notifications")),
                            s.push((0, r.jsx)(en.Z, { channel: e }, "pins")),
                            e.isArchivedThread() || s.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members")),
                            null != t && (0, E.Lp)(e) && s.push((0, r.jsx)(er.Z, { channel: e }, "summaries")),
                            s.push((0, r.jsx)(eT.Z, { channel: e }, "threads-overflow"));
                        break;
                    case e7.d4z.GUILD_ANNOUNCEMENT:
                    case e7.d4z.GUILD_TEXT:
                        s.push((0, r.jsx)(G.Z, { channel: e }, "favorites")),
                            s.push((0, r.jsx)(eZ.Z, { channel: e }, "browser")),
                            n || s.push((0, r.jsx)(et.Z, { channel: e }, "notifications")),
                            s.push((0, r.jsx)(en.Z, { channel: e }, "pins")),
                            s.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members")),
                            (0, E.Lp)(e) && s.push((0, r.jsx)(er.Z, { channel: e }, "summaries"));
                        break;
                    case e7.d4z.GUILD_FORUM:
                    case e7.d4z.GUILD_MEDIA:
                        n ||
                            (s.push((0, r.jsx)(el.Z, { channel: e }, "forum-onboarding")),
                            s.push((0, r.jsx)(et.Z, { channel: e }, "notifications"))),
                            __OVERLAY__ || s.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                        break;
                    case e7.d4z.GUILD_DIRECTORY:
                        s.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                }
                return s;
            }),
            tr(this, "renderMobileToolbar", () => {
                let { channel: e } = this.props;
                o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e7.d4z.GUILD_STAGE_VOICE:
                    case e7.d4z.GUILD_VOICE:
                    case e7.d4z.DM:
                        break;
                    case e7.d4z.GROUP_DM:
                        t.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                        break;
                    case e7.d4z.ANNOUNCEMENT_THREAD:
                    case e7.d4z.PRIVATE_THREAD:
                    case e7.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                        break;
                    case e7.d4z.GUILD_ANNOUNCEMENT:
                    case e7.d4z.GUILD_TEXT:
                    case e7.d4z.GUILD_FORUM:
                    case e7.d4z.GUILD_MEDIA:
                    case e7.d4z.GUILD_DIRECTORY:
                        t.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                }
                return t;
            }),
            tr(this, "renderFollowButton", () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)(g.zx, {
                          size: g.zx.Sizes.MIN,
                          color: g.zx.Colors.PRIMARY,
                          className: tn.followButton,
                          onClick: () =>
                              (0, m.ZDy)(async () => {
                                  let { default: e } = await n.e("54642").then(n.bind(n, 720589));
                                  return (n) => (0, r.jsx)(e, ti({ channel: t }, n));
                              }),
                          children: tt.intl.string(tt.t["3aOv+v"]),
                      })
                    : null;
            }),
            tr(this, "renderHeaderBar", (e) => {
                let {
                    channel: t,
                    channelName: n,
                    parentChannel: i,
                    guild: l,
                    guildId: s,
                    showCall: c,
                    showActivityPanel: u,
                    showFramePanel: d,
                    hasVideo: h,
                    showHeaderGuildBreadcrumb: p,
                    isFavorites: f,
                } = this.props;
                o()(null != t, "Missing channel in Channel.renderHeaderBar"),
                    o()(null != n, "Should not be null if channel is not null.");
                let b = t.isDM() && !t.isSystemDM() ? this.openUserProfile : p ? () => (0, ex.Kh)(t.id) : void 0,
                    y =
                        (null == i ? void 0 : i.guild_id) != null && (null == i ? void 0 : i.id) != null
                            ? this.handleTitleParentClick
                            : void 0,
                    x = u || d,
                    _ = c || x,
                    j = !_ || (!1 === e && !x);
                return (0, r.jsxs)("div", {
                    className: tn.subtitleContainer,
                    children: [
                        (0, r.jsx)(m.f6W, {
                            theme: h && c ? e7.BRd.DARK : void 0,
                            children: (e) =>
                                (0, r.jsxs)(
                                    ea.Z,
                                    {
                                        guildId: s,
                                        channelId: t.id,
                                        channelType: t.type,
                                        hideSearch: t.isDirectory() || (f && !(0, e_.X$)()),
                                        showDivider: f && !(0, e_.X$)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: a()(tn.title, e, { [tn.gdm]: t.type === e7.d4z.GROUP_DM }),
                                        transparent: _,
                                        showToolbar: j,
                                        "aria-label": tt.intl.string(tt.t.BIYAqa),
                                        children: [
                                            p &&
                                                (0, r.jsx)(es.TS, {
                                                    channel: t,
                                                    guild: l,
                                                    caretPosition: "right",
                                                }),
                                            (0, es.ud)({
                                                channel: t,
                                                channelName: n,
                                                parentChannel: i,
                                                guild: l,
                                                hasVideo: h,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: b,
                                                handleParentClick: y,
                                                renderFollowButton: this.renderFollowButton,
                                            }),
                                            p
                                                ? (0, r.jsx)(g.zx, {
                                                      onClick: () => (0, ey.XU)(t.guild_id, t.id),
                                                      className: tn.followButton,
                                                      look: g.zx.Looks.FILLED,
                                                      color: g.zx.Colors.PRIMARY,
                                                      size: g.zx.Sizes.MIN,
                                                      children: tt.intl.string(tt.t.k5WiPT),
                                                  })
                                                : (0, es.v0)(t, l),
                                        ],
                                    },
                                    "header-".concat(t.id),
                                ),
                        }),
                        (0, r.jsx)(eb.Z, { channelId: t.id }),
                    ],
                });
            });
    }
}
let to = (0, C.Z)(ts),
    tc = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, a] = i.useState(null),
            s = (0, h.e7)([ez.Z], () => ez.Z.getChannelId()),
            o = (0, h.e7)([ez.Z], () => ez.Z.getVoiceChannelId()),
            c = (0, h.e7)([eU.Z], () => (null != n ? n : eU.Z.getChannel(s)), [s, n]),
            g = (0, h.e7)([eU.Z], () => eU.Z.getChannel(o), [o]),
            m = null == c ? void 0 : c.parent_id,
            y = (0, h.e7)([eU.Z], () => eU.Z.getChannel(m), [m]),
            x = (0, h.e7)([eB.Z], () => eB.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: _ } = (0, X.Z)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            j = (0, h.e7)([A.Z], () => {
                let e = null != s ? A.Z.getParticipants(s) : [],
                    t = null != s ? A.Z.getActivityParticipants(s) : [];
                return e.length - t.length > 0;
            }, [s]),
            O = (0, V.Z)(),
            v = (0, h.e7)([ez.Z], () => {
                var e;
                return (
                    (null != (e = null == O ? void 0 : O.channelId) ? e : ez.Z.getVoiceChannelId()) ===
                    (null == c ? void 0 : c.id)
                );
            }),
            C = (0, h.e7)([I.ZP], () => (null != c ? I.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            Z = (0, h.e7)([eV.Z], () => eV.Z.isConnected()),
            N = (0, S.Z)(Z),
            R = Z && !1 === N;
        i.useEffect(() => {
            v &&
                R &&
                null != C &&
                null != c &&
                b.Z.selectParticipant(
                    c.id,
                    (0, w.gN)({
                        applicationId: C.applicationId,
                        instanceId: C.compositeInstanceId,
                    }),
                );
        }, [R, c, v, C]);
        let D = (0, h.e7)([I.ZP], () => I.ZP.getCurrentEmbeddedActivity()),
            k = (0, h.e7)([I.ZP], () => I.ZP.getActivityPanelMode()),
            L = null != D && !(0, P.Z)(null == c ? void 0 : c.id) && k === e5.Ez.PANEL,
            M = (0, h.e7)(
                [eK.Z],
                () => null != c && c.isVocalThread() && !u().isEmpty(eK.Z.getVoiceStatesForChannel(c.id)),
                [c],
            ),
            U = null != c && c.isPrivate() && !L && j,
            F = (null == c ? void 0 : c.isGuildVocal()) || U || M,
            G = (0, h.e7)([W.Z], () => W.Z.getFrameLayoutMode() === e6.U.FOCUSED),
            { welcomeModalChannelId: B } = (0, d.TH)(),
            z = (0, h.e7)([eg.Z], () => null != c && eg.Z.isLurking(c.guild_id), [c]),
            Y = (0, h.e7)([ek.Z], () => ek.Z.hasSeen(null == c ? void 0 : c.guild_id, z), [c, z]),
            q = (0, h.e7)(
                [A.Z, I.ZP],
                () =>
                    null != I.ZP.getConnectedActivityLocation() && I.ZP.getActivityPanelMode() === e5.Ez.PANEL
                        ? I.ZP.getFocusedLayout() === e5.MI.NO_CHAT
                            ? e7.AEg.NO_CHAT
                            : e7.AEg.NORMAL
                        : null != s
                          ? A.Z.getLayout(s)
                          : e7.AEg.NORMAL,
                [s],
            ),
            K = (0, h.e7)([A.Z], () => (null != c ? A.Z.getSelectedParticipant(c.id) : null)),
            Q = (0, h.e7)([eq.default], () => eq.default.getCurrentUser()),
            J = (0, ep.Z)(null == x ? void 0 : x.id),
            $ = (0, eL.Z)(B, null == x ? void 0 : x.id),
            { section: ee, channelSidebarState: et } = (0, h.cj)(
                [eM.ZP],
                () => ({
                    section: eM.ZP.getSection(s, null == c ? void 0 : c.isDM()),
                    channelSidebarState: eM.ZP.getSidebarState(s),
                }),
                [s, c],
            ),
            en = null == x ? void 0 : x.id,
            er = (0, h.e7)([eM.ZP], () => eM.ZP.getGuildSidebarState(en), [en]),
            ei = (0, h.e7)([eY.Z], () => eY.Z.getGuildId()) === e7.I_8,
            el = (0, em.D)(),
            ea = (0, eQ.ZP)(c),
            es = (0, eQ.ZP)(c, !0),
            eo = null != c && o === c.id,
            ec = null != c && c.isGuildStageVoice();
        (0, T.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, ey.s1)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === te.Df) {
                    let { channelId: e } =
                        null != (n = (0, ef.Qj)(null == r || null == (t = r.location) ? void 0 : t.pathname)) ? n : {};
                    null != e && a(e);
                }
            }, []);
        let eu = {
                channel: c,
                inCurrentVoiceChannel: eo,
            },
            ed = i.useRef(eu);
        i.useEffect(() => {
            ed.current = eu;
        }),
            i.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = ed.current;
                null != l && null != e && ec && e.id === l && !t && ((0, eC.Cq)(e), a(null));
            }, [l, ec]);
        let eh = (0, E.ts)(c),
            eb = null != c && c.isPrivate(),
            ex = (0, S.Z)(eb),
            e_ = (0, S.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = ex && !eb,
                t = ex && eb && (null == c ? void 0 : c.id) !== e_;
            (e || t) && (0, H.Q3)(p.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e4.L.AUTO });
        }, [null == c ? void 0 : c.id, e_, eb, ex]);
        let ej = (0, f.f9)();
        return (0, r.jsx)(
            to,
            tl(
                ti(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: s,
                        channel: c,
                        channelName: ea,
                        formattedChannelName: es,
                        parentChannel: y,
                        voiceChannel: g,
                        layout: q,
                        needSubscriptionToAccess: _,
                        isLurking: z,
                        hasModalOpen: ej,
                        section: ee,
                        channelSidebarState: et,
                        guildSidebarState: er,
                        guild: x,
                        showCall: !_ && F,
                        showActivityPanel: L,
                        showFramePanel: G,
                        nsfwAgree: (0, h.e7)([eG.Z], () => eG.Z.didAgree(null == c ? void 0 : c.guild_id)),
                        isMobile: (0, h.e7)(
                            [eW.Z],
                            () =>
                                (null == c ? void 0 : c.type) === e7.d4z.DM && eW.Z.isMobileOnline(c.getRecipientId()),
                            [c],
                        ),
                        isUnavailable: (0, h.e7)(
                            [eH.Z],
                            () => (null == c ? void 0 : c.guild_id) != null && eH.Z.isUnavailable(c.guild_id),
                            [c],
                        ),
                        showRealNameModal: J,
                        showWelcomeModal: !Y && $,
                        showFollowButton:
                            ((null == c ? void 0 : c.type) === e7.d4z.GUILD_ANNOUNCEMENT &&
                                (null == x ? void 0 : x.features.has(e7.oNc.NEWS))) ||
                            !1,
                    },
                    (0, h.cj)([eK.Z], () => ({ hasVideo: null != c && eK.Z.hasVideo(c.id) }), [c]),
                ),
                {
                    inCall: eo,
                    selectedParticipant: K,
                    nsfwAllowed: (null == Q ? void 0 : Q.nsfwAllowed) === !0,
                    showChannelSummaries: eh,
                    isFavorites: ei,
                    showHeaderGuildBreadcrumb: ei || el,
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: L,
                    embeddedActivity: D,
                },
            ),
        );
    });
