n.d(t, { Z: () => ta }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(843611),
    p = n(442837),
    h = n(704215),
    f = n(952265),
    g = n(481060),
    m = n(475179),
    b = n(239091),
    y = n(377993),
    _ = n(697309),
    j = n(457868),
    x = n(561472),
    O = n(36311),
    v = n(112724),
    C = n(902840),
    I = n(110924),
    E = n(317381),
    S = n(82888),
    Z = n(917107),
    T = n(296797),
    P = n(622822),
    N = n(100527),
    R = n(413523),
    w = n(358221),
    A = n(677601),
    D = n(541716),
    L = n(236091),
    M = n(663993),
    k = n(252618),
    U = n(201493),
    G = n(266454),
    H = n(174130),
    F = n(588322),
    B = n(591472),
    z = n(446226),
    V = n(517525),
    W = n(445384),
    Y = n(613464),
    q = n(705563),
    K = n(730647),
    Q = n(66999),
    X = n(826763),
    J = n(180216),
    $ = n(168843),
    ee = n(442336),
    et = n(57304),
    en = n(605953),
    er = n(374306),
    ei = n(984370),
    el = n(910611),
    ea = n(915718),
    es = n(518311),
    eo = n(882378),
    ec = n(207868),
    ed = n(473065),
    eu = n(576171),
    ep = n(754688),
    eh = n(41776),
    ef = n(370774),
    eg = n(134483),
    em = n(703656),
    eb = n(359110),
    ey = n(607802),
    e_ = n(14091),
    ej = n(6025),
    ex = n(897473),
    eO = n(922482),
    ev = n(504185),
    eC = n(657218),
    eI = n(407908),
    eE = n(66556),
    eS = n(131694),
    eZ = n(377929),
    eT = n(900157),
    eP = n(108427),
    eN = n(892001),
    eR = n(402130),
    ew = n(524329),
    eA = n(995532),
    eD = n(738643),
    eL = n(433355),
    eM = n(592125),
    ek = n(703558),
    eU = n(486472),
    eG = n(430824),
    eH = n(158776),
    eF = n(19780),
    eB = n(944486),
    ez = n(914010),
    eV = n(594174),
    eW = n(979651),
    eY = n(933557),
    eq = n(287746),
    eK = n(325708),
    eQ = n(335615),
    eX = n(992744),
    eJ = n(923029),
    e$ = n(194082),
    e0 = n(176505),
    e1 = n(981631),
    e8 = n(918559),
    e4 = n(354459),
    e2 = n(921944),
    e3 = n(408491),
    e7 = n(440493),
    e6 = n(157925),
    e5 = n(388032),
    e9 = n(97009);
function te(e, t, n) {
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
function tt(e) {
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
                te(e, t, n[t]);
            });
    }
    return e;
}
function tn(e, t) {
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
let tr = (0, M.Un)({
    createPromise: () => Promise.all([n.e("22173"), n.e("9456")]).then(n.bind(n, 346975)),
    webpackId: 346975,
    renderLoader: () =>
        (0, r.jsx)("div", {
            className: e9.loader,
            children: (0, r.jsx)(g.$jN, {}),
        }),
    name: "ForumChannel",
});
class ti extends i.PureComponent {
    componentDidMount() {
        (0, eP.e)("guild_channel");
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
            (0, b.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("24783"), n.e("41815")]).then(n.bind(n, 439635));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tn(tt({}, n), {
                            channel: t,
                            guild: i,
                        }),
                    );
            });
    }
    openThreadContextMenu(e, t) {
        o()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            (0, b.jW)(e, async () => {
                let { default: e } = await n.e("40157").then(n.bind(n, 422200));
                return (n) => (0, r.jsx)(e, tn(tt({}, n), { channel: t }));
            });
    }
    openDMContextMenu(e, t) {
        o()(null != t, "Missing channel in Channel.openDMContextMenu");
        let i = eV.default.getUser(t.getRecipientId());
        o()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, b.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("79695"), n.e("98783"), n.e("56826"), n.e("88855")]).then(
                    n.bind(n, 131404),
                );
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tn(tt({}, n), {
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
        if ((o()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e1.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(ev.Z, { channel: e }, e.id);
            case e1.d4z.GUILD_VOICE:
            case e1.d4z.DM:
            case e1.d4z.GROUP_DM:
            case e1.d4z.PUBLIC_THREAD:
            case e1.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, r.jsx)(
                    A.Z,
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
        return (0, r.jsx)(S.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar,
        });
    }
    renderChat() {
        let { channel: e, guild: t, needSubscriptionToAccess: n, channelIsContentGated: i } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderChat"), n))
            return (o()(null != t, "premium channels must exist within a guild"),
            null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, r.jsx)(X.Z, { guildId: t.id })
                : (0, r.jsx)(K.l, {
                      guildId: t.id,
                      children: (0, r.jsx)(J.Z, {
                          channelId: e.id,
                          guildId: t.id,
                      }),
                  });
        if (i)
            return (0, r.jsx)(O.Z, {
                guild: t,
                channelId: e.id,
            });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                o()(null != t, "directory channels must exist within a guild"),
                (0, r.jsx)(U.Z, {
                    channel: e,
                    guild: t,
                })
            );
        if (e.isForumLikeChannel()) {
            o()(null != t, "forum channels must exist within a guild");
            let n = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, r.jsx)(
                tr,
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
                chatInputType: D.Ie.NORMAL,
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
            showActivityPanel: s,
            showFramePanel: c,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || i));
        else if (l === e1.ULH.PROFILE && e.isPrivate() && !a && !s && !c)
            return (0, r.jsx)(eR.Z, { channel: e }, "private-channel-profile-".concat(e.id));
        else if (l === e1.ULH.MEMBERS)
            switch (e.type) {
                case e1.d4z.GROUP_DM:
                    return (0, r.jsx)(y.Z, { channel: e }, "private-channel-recipients-".concat(e.id));
                case e1.d4z.GUILD_DIRECTORY:
                case e1.d4z.GUILD_FORUM:
                case e1.d4z.GUILD_MEDIA:
                case e1.d4z.GUILD_ANNOUNCEMENT:
                case e1.d4z.GUILD_TEXT:
                    var d;
                    let u = !0 === e1.TPd.GUILD_THREADS_ONLY.has(e.type) ? e.id : null != (d = e.guild_id) ? d : e.id;
                    return (0, r.jsx)(eQ.Z, { channel: e }, "channel-members-".concat(u));
                case e1.d4z.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, r.jsx)(eQ.Z, { channel: t }, "channel-members-".concat(t.id));
                    break;
                case e1.d4z.PUBLIC_THREAD:
                case e1.d4z.PRIVATE_THREAD:
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
        else if (l === e1.ULH.SEARCH)
            return (0, r.jsx)(e_.Z, {
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
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e("53900").then(n.bind(n, 784280));
                            return (n) => (0, r.jsx)(e, tn(tt({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => W.Z.viewPrompt(e7.r.REAL_NAME_PROMPT, t),
                            modalKey: "Guild Hub Real Name Modal",
                        },
                    ),
                l &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e("90542").then(n.bind(n, 184782));
                            return (n) => (0, r.jsx)(e, tn(tt({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => (0, ew.y0)(t, a),
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
                channelIsContentGated: s,
            } = this.props;
        if (null == l && null == i) return null;
        if (n === e1.ULH.SIDEBAR_CHAT && null != i) {
            if (s) return null;
            switch (i.type) {
                case ex.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(eC.Z, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case ex.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? F.Z : eT.Z;
                    e = (0, r.jsx)(n, { channelId: i.channelId });
                    break;
                case ex.tI.VIEW_MOD_REPORT:
                    e = (0, r.jsx)(eT.Z, {
                        channelId: i.channelId,
                        baseChannelId: i.baseChannelId,
                    });
                    break;
                case ex.tI.VIEW_CHANNEL:
                case ex.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != l && null == e)
            if (l.type !== ex.jL.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t } = l.details;
                return (0, r.jsx)("div", {
                    style: { width: e1.$Y6 },
                    className: e9.guildSidebar,
                    children: (0, r.jsx)(Y.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => ej.Z.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = (null == t ? void 0 : t.type) != null && e1.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = a - e1.PrS - o;
        return (
            (c += _.qO),
            (0, r.jsx)(eK.Z, {
                sidebarType:
                    (null == t ? void 0 : t.type) != null && e1.TPd.GUILD_THREADS_ONLY.has(t.type)
                        ? eK.y.PostSidebar
                        : eK.y.ThreadSidebar,
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
                section: s,
                hasModalOpen: o,
                guildSidebarState: c,
                hasTextActivityInPanelMode: d,
            } = this.props,
            { threadSidebarWidth: u, isThreadSidebarFloating: p } = this.state,
            h = this.shouldRenderCall();
        if (i) return (0, r.jsx)(eX.Z, {});
        if (null == e) return (0, r.jsx)(eJ.Z, { channelId: this.props.channelId });
        let f = s === e1.ULH.SIDEBAR_CHAT,
            g = null != c && !f,
            m = !e.isForumLikeChannel() && !o,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(k.yY, {
                    location: b,
                    subsection: null != n ? n : void 0,
                }),
                (0, r.jsxs)("div", {
                    "data-has-border": e.type !== e1.d4z.GUILD_VOICE,
                    className: a()(e9.chat, {
                        [e9.threadSidebarOpen]: f || g,
                        [e9.threadSidebarFloating]: f && p,
                    }),
                    children: [
                        m
                            ? (0, r.jsx)(x.Z, {
                                  style: { right: f ? u : void 0 },
                                  className: e9.uploadArea,
                                  channel: e,
                                  draftType: ek.d.ChannelMessage,
                              })
                            : null,
                        h || d ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)("div", {
                            className: a()(e9.content, { [e9.noChat]: l === e1.AEg.NO_CHAT }),
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
            te(this, "state", {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1,
            }),
            te(this, "handleTitleParentClick", () => {
                let { parentChannel: e } = this.props;
                null != e && (0, eb.Kh)(e.id);
            }),
            te(this, "_handleContextMenu", (e, t) => {
                switch (t.type) {
                    case e1.d4z.GUILD_VOICE:
                    case e1.d4z.GUILD_ANNOUNCEMENT:
                    case e1.d4z.GUILD_TEXT:
                    case e1.d4z.GUILD_FORUM:
                    case e1.d4z.GUILD_MEDIA:
                        this.openChannelContextMenu(e, t);
                        break;
                    case e1.d4z.ANNOUNCEMENT_THREAD:
                    case e1.d4z.PUBLIC_THREAD:
                    case e1.d4z.PRIVATE_THREAD:
                        this.openThreadContextMenu(e, t);
                        break;
                    case e1.d4z.DM:
                        this.openDMContextMenu(e, t);
                }
            }),
            te(this, "handleContextMenu", (e) => {
                o()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"),
                    this._handleContextMenu(e, this.props.channel);
            }),
            te(this, "handleParentContextMenu", (e) => {
                o()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"),
                    this._handleContextMenu(e, this.props.parentChannel);
            }),
            te(this, "handleThreadSidebarResize", (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t,
                });
            }),
            te(this, "openUserProfile", () => {
                let { channel: e } = this.props;
                o()(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"),
                    (0, eN.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        sourceAnalyticsLocations: [N.Z.CHANNEL_HEADER],
                    });
            }),
            te(this, "renderJoinRequestInterviewButtons", () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e0.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(q.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0,
                      })
                    : null;
            }),
            te(this, "renderClipsEnabledIndicatorToolbarItem", () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, r.jsx)(L.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            te(this, "renderStreamQualityLiveIndicatorToolbarItem", () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e4.fO.STREAM
                    ? null
                    : (0, r.jsx)(
                          V.Z,
                          {
                              size: e$.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t,
                          },
                          "live-indicator",
                      );
            }),
            te(this, "renderHeaderToolbar", () => {
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
                    case e1.d4z.GUILD_STAGE_VOICE:
                    case e1.d4z.GUILD_VOICE:
                        break;
                    case e1.d4z.DM:
                        s.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            s.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            s.push((0, r.jsx)(ea.Z, { channel: e }, "calls")),
                            s.push((0, r.jsx)(et.Z, { channel: e }, "pins")),
                            s.push(
                                (0, r.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        tooltip: e5.intl.string(e5.t.Xjlbvr),
                                        location: "ChannelHeaderToolbar-DM-AddFriendsButton",
                                    },
                                    "invite",
                                ),
                            ),
                            s.push(
                                (0, r.jsx)(
                                    ed.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: i || l || a,
                                    },
                                    "profile",
                                ),
                            ),
                            s.push((0, r.jsx)(eo.Z, { channel: e }, "safety_tools"));
                        break;
                    case e1.d4z.GROUP_DM:
                        if (
                            (s.push(this.renderJoinRequestInterviewButtons()),
                            s.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            s.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            s.push((0, r.jsx)(ea.Z, { channel: e }, "calls")),
                            s.push((0, r.jsx)(et.Z, { channel: e }, "pins")),
                            !e.isManaged())
                        ) {
                            let t = e5.intl.string(e5.t.Xjlbvr);
                            s.push(
                                (0, r.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        tooltip: t,
                                        location: "ChannelHeaderToolbar-GroupDM-AddFriendsButton",
                                    },
                                    "invite",
                                ),
                            );
                        }
                        s.push((0, r.jsx)($.Z, { channelId: e.id }, "members"));
                        break;
                    case e1.d4z.ANNOUNCEMENT_THREAD:
                    case e1.d4z.PRIVATE_THREAD:
                    case e1.d4z.PUBLIC_THREAD:
                        e.isModeratorReportChannel() && s.push((0, r.jsx)(eI.Z, { channel: e })),
                            null == t || t.isForumLikeChannel() || s.push((0, r.jsx)(eE.Z, { channel: t }, "browser")),
                            e.isVocalThread() && s.push((0, r.jsx)(ec.Z, { channel: e }, "thread-call")),
                            s.push((0, r.jsx)(eS.Z, { channel: e }, "notifications")),
                            s.push((0, r.jsx)(et.Z, { channel: e }, "pins")),
                            e.isArchivedThread() || s.push((0, r.jsx)($.Z, { channelId: e.id }, "members")),
                            null != t && (0, C.Lp)(e) && s.push((0, r.jsx)(en.Z, { channel: e }, "summaries")),
                            s.push((0, r.jsx)(eZ.Z, { channel: e }, "threads-overflow"));
                        break;
                    case e1.d4z.GUILD_ANNOUNCEMENT:
                    case e1.d4z.GUILD_TEXT:
                        s.push((0, r.jsx)(H.Z, { channel: e }, "favorites")),
                            s.push((0, r.jsx)(eE.Z, { channel: e }, "browser")),
                            n || s.push((0, r.jsx)(ee.Z, { channel: e }, "notifications")),
                            s.push((0, r.jsx)(et.Z, { channel: e }, "pins")),
                            s.push((0, r.jsx)($.Z, { channelId: e.id }, "members")),
                            (0, C.Lp)(e) && s.push((0, r.jsx)(en.Z, { channel: e }, "summaries"));
                        break;
                    case e1.d4z.GUILD_FORUM:
                    case e1.d4z.GUILD_MEDIA:
                        n ||
                            (s.push((0, r.jsx)(er.Z, { channel: e }, "forum-onboarding")),
                            s.push((0, r.jsx)(ee.Z, { channel: e }, "notifications"))),
                            __OVERLAY__ || s.push((0, r.jsx)($.Z, { channelId: e.id }, "members"));
                        break;
                    case e1.d4z.GUILD_DIRECTORY:
                        s.push((0, r.jsx)($.Z, { channelId: e.id }, "members"));
                }
                return s;
            }),
            te(this, "renderMobileToolbar", () => {
                let { channel: e } = this.props;
                o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e1.d4z.GUILD_STAGE_VOICE:
                    case e1.d4z.GUILD_VOICE:
                    case e1.d4z.DM:
                        break;
                    case e1.d4z.GROUP_DM:
                        t.push((0, r.jsx)($.Z, { channelId: e.id }, "members"));
                        break;
                    case e1.d4z.ANNOUNCEMENT_THREAD:
                    case e1.d4z.PRIVATE_THREAD:
                    case e1.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, r.jsx)($.Z, { channelId: e.id }, "members"));
                        break;
                    case e1.d4z.GUILD_ANNOUNCEMENT:
                    case e1.d4z.GUILD_TEXT:
                    case e1.d4z.GUILD_FORUM:
                    case e1.d4z.GUILD_MEDIA:
                    case e1.d4z.GUILD_DIRECTORY:
                        t.push((0, r.jsx)($.Z, { channelId: e.id }, "members"));
                }
                return t;
            }),
            te(this, "renderFollowButton", () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)("div", {
                          className: e9.followButton,
                          children: (0, r.jsx)(g.zxk, {
                              variant: "secondary",
                              size: "sm",
                              text: e5.intl.string(e5.t["3aOv+v"]),
                              onClick: () =>
                                  (0, g.ZDy)(async () => {
                                      let { default: e } = await n.e("54642").then(n.bind(n, 720589));
                                      return (n) => (0, r.jsx)(e, tt({ channel: t }, n));
                                  }),
                          }),
                      })
                    : null;
            }),
            te(this, "renderHeaderBar", () => {
                let {
                    channel: e,
                    channelName: t,
                    parentChannel: n,
                    guild: i,
                    guildId: l,
                    showCall: s,
                    showActivityPanel: c,
                    showFramePanel: d,
                    hasVideo: u,
                    showHeaderGuildBreadcrumb: p,
                    isFavorites: h,
                } = this.props;
                o()(null != e, "Missing channel in Channel.renderHeaderBar"),
                    o()(null != t, "Should not be null if channel is not null.");
                let f = e.isDM() && !e.isSystemDM() ? this.openUserProfile : p ? () => (0, eb.Kh)(e.id) : void 0,
                    m =
                        (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null
                            ? this.handleTitleParentClick
                            : void 0,
                    b = c || d,
                    y = s || b;
                return (0, r.jsxs)("div", {
                    className: e9.subtitleContainer,
                    children: [
                        (0, r.jsx)(g.f6W, {
                            theme: u && s ? e1.BRd.DARK : void 0,
                            children: (s) =>
                                (0, r.jsxs)(
                                    ei.Z,
                                    {
                                        guildId: l,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (h && !(0, ey.X$)()),
                                        showDivider: h && !(0, ey.X$)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: a()(e9.title, s, { [e9.gdm]: e.type === e1.d4z.GROUP_DM }),
                                        transparent: y,
                                        hidden: d,
                                        "aria-label": e5.intl.string(e5.t.BIYAqa),
                                        children: [
                                            p &&
                                                (0, r.jsx)(el.TS, {
                                                    channel: e,
                                                    guild: i,
                                                    caretPosition: "right",
                                                }),
                                            (0, el.ud)({
                                                channel: e,
                                                channelName: t,
                                                parentChannel: n,
                                                guild: i,
                                                hasVideo: u,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: f,
                                                handleParentClick: m,
                                                renderFollowButton: this.renderFollowButton,
                                            }),
                                            p
                                                ? (0, r.jsx)("div", {
                                                      className: e9.followButton,
                                                      children: (0, r.jsx)(g.zxk, {
                                                          onClick: () => (0, em.XU)(e.guild_id, e.id),
                                                          variant: "secondary",
                                                          size: "sm",
                                                          text: e5.intl.string(e5.t.k5WiPT),
                                                      }),
                                                  })
                                                : (0, el.v0)(e, i),
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
let tl = (0, v.Z)(ti),
    ta = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, a] = i.useState(null),
            s = (0, p.e7)([eB.Z], () => eB.Z.getChannelId()),
            o = (0, p.e7)([eB.Z], () => eB.Z.getVoiceChannelId()),
            c = (0, p.e7)([eM.Z], () => (null != n ? n : eM.Z.getChannel(s)), [s, n]),
            g = (0, p.e7)([eM.Z], () => eM.Z.getChannel(o), [o]),
            b = null == c ? void 0 : c.parent_id,
            y = (0, p.e7)([eM.Z], () => eM.Z.getChannel(b), [b]),
            _ = (0, p.e7)([eG.Z], () => eG.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: j } = (0, Q.Z)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            x = (0, p.e7)([w.Z], () => {
                let e = null != s ? w.Z.getParticipants(s) : [],
                    t = null != s ? w.Z.getActivityParticipants(s) : [];
                return e.length - t.length > 0;
            }, [s]),
            O = (0, z.Z)(),
            v = (0, p.e7)([eB.Z], () => {
                var e;
                return (
                    (null != (e = null == O ? void 0 : O.channelId) ? e : eB.Z.getVoiceChannelId()) ===
                    (null == c ? void 0 : c.id)
                );
            }),
            S = (0, p.e7)([E.ZP], () => (null != c ? E.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            N = (0, p.e7)([eF.Z], () => eF.Z.isConnected()),
            A = (0, I.Z)(N),
            D = N && !1 === A;
        i.useEffect(() => {
            v &&
                D &&
                null != S &&
                null != c &&
                m.Z.selectParticipant(
                    c.id,
                    (0, R.gN)({
                        applicationId: S.applicationId,
                        instanceId: S.compositeInstanceId,
                    }),
                );
        }, [D, c, v, S]);
        let L = (0, p.e7)([E.ZP], () => E.ZP.getCurrentEmbeddedActivity()),
            M = (0, p.e7)([E.ZP], () => E.ZP.getActivityPanelMode()),
            k = null != L && !(0, Z.Z)(null == c ? void 0 : c.id) && M === e8.Ez.PANEL,
            U = (0, p.e7)(
                [eW.Z],
                () => null != c && c.isVocalThread() && !d().isEmpty(eW.Z.getVoiceStatesForChannel(c.id)),
                [c],
            ),
            H = null != c && c.isPrivate() && !k && x,
            F = (null == c ? void 0 : c.isGuildVocal()) || H || U,
            V = (0, p.e7)([B.Z], () => B.Z.getFrameLayoutMode() === e3.U.FOCUSED),
            { welcomeModalChannelId: W } = (0, u.TH)(),
            Y = (0, p.e7)([eh.Z], () => null != c && eh.Z.isLurking(c.guild_id), [c]),
            q = (0, p.e7)([eA.Z], () => eA.Z.hasSeen(null == c ? void 0 : c.guild_id, Y), [c, Y]),
            K = (0, p.e7)(
                [w.Z, E.ZP],
                () =>
                    null != E.ZP.getConnectedActivityLocation() && E.ZP.getActivityPanelMode() === e8.Ez.PANEL
                        ? E.ZP.getFocusedLayout() === e8.MI.NO_CHAT
                            ? e1.AEg.NO_CHAT
                            : e1.AEg.NORMAL
                        : null != s
                          ? w.Z.getLayout(s)
                          : e1.AEg.NORMAL,
                [s],
            ),
            X = (0, p.e7)([w.Z], () => (null != c ? w.Z.getSelectedParticipant(c.id) : null)),
            J = (0, P.$5)(c),
            $ = (0, eu.Z)(null == _ ? void 0 : _.id),
            ee = (0, eD.Z)(W, null == _ ? void 0 : _.id),
            { section: et, channelSidebarState: en } = (0, p.cj)(
                [eL.ZP],
                () => ({
                    section: eL.ZP.getSection(s, null == c ? void 0 : c.isDM()),
                    channelSidebarState: eL.ZP.getSidebarState(s),
                }),
                [s, c],
            ),
            er = null == _ ? void 0 : _.id,
            ei = (0, p.e7)([eL.ZP], () => eL.ZP.getGuildSidebarState(er), [er]),
            el = (0, p.e7)([ez.Z], () => ez.Z.getGuildId()) === e1.I_8,
            ea = (0, ef.D)(),
            es = (0, eY.ZP)(c),
            eo = (0, eY.ZP)(c, !0),
            ec = null != c && o === c.id,
            ed = null != c && c.isGuildStageVoice();
        (0, T.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, em.s1)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === e6.Df) {
                    let { channelId: e } =
                        null != (n = (0, ep.Qj)(null == r || null == (t = r.location) ? void 0 : t.pathname)) ? n : {};
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
                null != l && null != e && ed && e.id === l && !t && ((0, eO.Cq)(e), a(null));
            }, [l, ed]);
        let ey = (0, C.ts)(c),
            e_ = null != c && c.isPrivate(),
            ej = (0, I.Z)(e_),
            ex = (0, I.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = ej && !e_,
                t = ej && e_ && (null == c ? void 0 : c.id) !== ex;
            (e || t) && (0, G.Q3)(h.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e2.L.AUTO });
        }, [null == c ? void 0 : c.id, ex, e_, ej]);
        let ev = (0, f.f9)();
        return (0, r.jsx)(
            tl,
            tn(
                tt(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: s,
                        channel: c,
                        channelName: es,
                        formattedChannelName: eo,
                        parentChannel: y,
                        voiceChannel: g,
                        layout: K,
                        needSubscriptionToAccess: j,
                        isLurking: Y,
                        hasModalOpen: ev,
                        section: et,
                        channelSidebarState: en,
                        guildSidebarState: ei,
                        guild: _,
                        showCall: !j && F,
                        showActivityPanel: k,
                        showFramePanel: V,
                        channelIsContentGated: J,
                        isMobile: (0, p.e7)(
                            [eH.Z],
                            () =>
                                (null == c ? void 0 : c.type) === e1.d4z.DM && eH.Z.isMobileOnline(c.getRecipientId()),
                            [c],
                        ),
                        isUnavailable: (0, p.e7)(
                            [eU.Z],
                            () => (null == c ? void 0 : c.guild_id) != null && eU.Z.isUnavailable(c.guild_id),
                            [c],
                        ),
                        showRealNameModal: $,
                        showWelcomeModal: !q && ee,
                        showFollowButton:
                            ((null == c ? void 0 : c.type) === e1.d4z.GUILD_ANNOUNCEMENT &&
                                (null == _ ? void 0 : _.features.has(e1.oNc.NEWS))) ||
                            !1,
                    },
                    (0, p.cj)([eW.Z], () => ({ hasVideo: null != c && eW.Z.hasVideo(c.id) }), [c]),
                ),
                {
                    inCall: ec,
                    selectedParticipant: X,
                    showChannelSummaries: ey,
                    isFavorites: el,
                    showHeaderGuildBreadcrumb: el || ea,
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: k,
                    embeddedActivity: L,
                },
            ),
        );
    });
