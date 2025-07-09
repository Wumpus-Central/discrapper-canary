(n.d(t, { Z: () => tc }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(392711),
    u = n.n(c),
    d = n(114858),
    p = n(442837),
    h = n(704215),
    f = n(952265),
    m = n(481060),
    g = n(475179),
    b = n(239091),
    _ = n(377993),
    y = n(697309),
    C = n(457868),
    x = n(561472),
    v = n(36311),
    O = n(112724),
    j = n(902840),
    E = n(110924),
    S = n(317381),
    I = n(82888),
    P = n(917107),
    Z = n(296797),
    N = n(100527),
    T = n(413523),
    A = n(358221),
    w = n(677601),
    R = n(541716),
    k = n(236091),
    M = n(663993),
    D = n(252618),
    L = n(201493),
    U = n(266454),
    B = n(174130),
    F = n(588322),
    H = n(591472),
    G = n(446226),
    V = n(517525),
    z = n(445384),
    W = n(613464),
    Y = n(705563),
    q = n(730647),
    K = n(66999),
    X = n(826763),
    Q = n(180216),
    J = n(51486),
    $ = n(168843),
    ee = n(442336),
    et = n(57304),
    en = n(605953),
    er = n(405954),
    ei = n(374306),
    el = n(984370),
    eo = n(910611),
    ea = n(915718),
    es = n(518311),
    ec = n(882378),
    eu = n(207868),
    ed = n(473065),
    ep = n(576171),
    eh = n(754688),
    ef = n(41776),
    em = n(370774),
    eg = n(134483),
    eb = n(703656),
    e_ = n(359110),
    ey = n(854709),
    eC = n(14091),
    ex = n(6025),
    ev = n(897473),
    eO = n(922482),
    ej = n(856393),
    eE = n(657218),
    eS = n(407908),
    eI = n(66556),
    eP = n(739830),
    eZ = n(377929),
    eN = n(900157),
    eT = n(108427),
    eA = n(892001),
    ew = n(402130),
    eR = n(524329),
    ek = n(995532),
    eM = n(738643),
    eD = n(433355),
    eL = n(592125),
    eU = n(703558),
    eB = n(486472),
    eF = n(731290),
    eH = n(430824),
    eG = n(158776),
    eV = n(19780),
    ez = n(768119),
    eW = n(944486),
    eY = n(914010),
    eq = n(594174),
    eK = n(979651),
    eX = n(933557),
    eQ = n(287746),
    eJ = n(325708),
    e$ = n(335615),
    e0 = n(992744),
    e1 = n(923029),
    e2 = n(194082),
    e3 = n(176505),
    e7 = n(981631),
    e8 = n(918559),
    e5 = n(354459),
    e6 = n(921944),
    e4 = n(408491),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function ti(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                tr(e, t, n[t]);
            }));
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
let to = (0, M.Un)({
    createPromise: () => Promise.all([n.e('22173'), n.e('71879')]).then(n.bind(n, 346975)),
    webpackId: 346975,
    renderLoader: () =>
        (0, r.jsx)('div', {
            className: tn.loader,
            children: (0, r.jsx)(m.$jN, {})
        }),
    name: 'ForumChannel'
});
class ta extends i.PureComponent {
    componentDidMount() {
        (0, eT.e)('guild_channel');
    }
    componentDidUpdate(e) {
        (null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({ topicExpanded: !1 }), this.openChannelModal());
    }
    openChannelContextMenu(e, t) {
        let { guild: i } = this.props;
        (s()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            s()(null != i, 'Missing guild in Channel.openChannelContextMenu'),
            (0, b.jW)(e, async () => {
                let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tl(ti({}, n), {
                            channel: t,
                            guild: i
                        })
                    );
            }));
    }
    openThreadContextMenu(e, t) {
        (s()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            (0, b.jW)(e, async () => {
                let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                return (n) => (0, r.jsx)(e, tl(ti({}, n), { channel: t }));
            }));
    }
    openDMContextMenu(e, t) {
        s()(null != t, 'Missing channel in Channel.openDMContextMenu');
        let i = eq.default.getUser(t.getRecipientId());
        (s()(null != i, 'Missing user in Channel.openDMContextMenu'),
            (0, b.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('56399')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tl(ti({}, n), {
                            user: i,
                            channelSelected: !0,
                            channel: t
                        })
                    );
            }));
    }
    shouldRenderCall() {
        let { channel: e, showCall: t, nsfwAllowed: n, nsfwAgree: r } = this.props;
        return (!(null == e ? void 0 : e.isNSFW()) || (n && r)) && t;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((s()(null != e, 'Missing channel in Channel.renderCall'), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e7.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(ej.Z, { channel: e }, e.id);
            case e7.d4z.GUILD_VOICE:
            case e7.d4z.DM:
            case e7.d4z.GROUP_DM:
            case e7.d4z.PUBLIC_THREAD:
            case e7.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, r.jsx)(
                    w.Z,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t
                    },
                    'call-'.concat(e.id)
                );
            default:
                return null;
        }
    }
    renderEmbeddedActivityPanel() {
        let { channel: e } = this.props,
            t = this.shouldRenderCall();
        if ((s()(null != e, 'Missing channel in Channel.renderEmbeddedActivityPanel'), t)) return null;
        let n = this.props.height - 200;
        return (0, r.jsx)(I.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar
        });
    }
    renderChat() {
        let { channel: e, nsfwAgree: t, guild: n, nsfwAllowed: i, needSubscriptionToAccess: l } = this.props;
        if ((s()(null != e, 'Missing channel in Channel.renderChat'), l))
            return (s()(null != n, 'premium channels must exist within a guild'), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, r.jsx)(X.Z, { guildId: n.id })
                : (0, r.jsx)(q.l, {
                      guildId: n.id,
                      children: (0, r.jsx)(Q.Z, {
                          channelId: e.id,
                          guildId: n.id
                      })
                  });
        if (e.isNSFW() && (!i || !t))
            return (0, r.jsx)(v.Z, {
                guild: n,
                channelId: e.id
            });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                s()(null != n, 'directory channels must exist within a guild'),
                (0, r.jsx)(L.Z, {
                    channel: e,
                    guild: n
                })
            );
        if (e.isForumLikeChannel()) {
            s()(null != n, 'forum channels must exist within a guild');
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth
            };
            return (0, r.jsx)(
                to,
                {
                    channel: e,
                    guild: n,
                    sidebarState: t
                },
                e.id
            );
        }
        return (0, r.jsx)(
            eQ.Z,
            {
                channel: e,
                guild: n,
                chatInputType: R.Ie.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: i, needSubscriptionToAccess: l, section: o, showCall: a, showActivityPanel: c, showFramePanel: u } = this.props;
        if ((s()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || l));
        else if (o === e7.ULH.PROFILE && t.isPrivate() && !a && !c && !u) return (0, r.jsx)(ew.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (o === e7.ULH.MEMBERS)
            switch (t.type) {
                case e7.d4z.GROUP_DM:
                    return (0, r.jsx)(_.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e7.d4z.GUILD_DIRECTORY:
                case e7.d4z.GUILD_FORUM:
                case e7.d4z.GUILD_MEDIA:
                case e7.d4z.GUILD_ANNOUNCEMENT:
                case e7.d4z.GUILD_TEXT:
                    var d;
                    let p = !0 === e7.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null != (d = t.guild_id) ? d : t.id;
                    return (0, r.jsx)(e$.Z, { channel: t }, 'channel-members-'.concat(p));
                case e7.d4z.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, r.jsx)(e$.Z, { channel: n }, 'channel-members-'.concat(n.id));
                    break;
                case e7.d4z.PUBLIC_THREAD:
                case e7.d4z.PRIVATE_THREAD:
                    if (!t.isArchivedThread() && null != i)
                        return (0, r.jsx)(
                            C.Z,
                            {
                                channel: t,
                                guild: i
                            },
                            'channel-members-'.concat(t.id)
                        );
            }
        else if (o === e7.ULH.SEARCH && null != e) return (0, r.jsx)(eC.Z, { searchId: e });
        return null;
    }
    openChannelModal() {
        let { channel: e, guildId: t, hasModalOpen: i, showWelcomeModal: l, isLurking: o, isUnavailable: a, showRealNameModal: s } = this.props;
        return (
            null == e ||
                null == t ||
                a ||
                i ||
                (s &&
                    (0, m.ZDy)(
                        async () => {
                            let { default: e } = await n.e('53900').then(n.bind(n, 784280));
                            return (n) => (0, r.jsx)(e, tl(ti({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => z.Z.viewPrompt(e9.r.REAL_NAME_PROMPT, t),
                            modalKey: 'Guild Hub Real Name Modal'
                        }
                    ),
                l &&
                    (0, m.ZDy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (n) => (0, r.jsx)(e, tl(ti({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => (0, eR.y0)(t, o),
                            modalKey: 'Guild Welcome Screen Modal'
                        }
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e,
            { channel: t, section: n, channelSidebarState: i, guildSidebarState: l, nsfwAgree: o, nsfwAllowed: a, width: s } = this.props;
        if (null == l && null == i) return null;
        if (n === e7.ULH.SIDEBAR_CHAT && null != i) {
            if ((null == t ? void 0 : t.isNSFW()) && (!a || !o)) return null;
            switch (i.type) {
                case ev.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(eE.Z, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location
                    });
                    break;
                case ev.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? F.Z : eN.Z;
                    e = (0, r.jsx)(n, { channelId: i.channelId });
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
                return (0, r.jsx)('div', {
                    style: { width: e7.$Y6 },
                    className: tn.guildSidebar,
                    children: (0, r.jsx)(W.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => ex.Z.closeGuildSidebar(e)
                    })
                });
            }
        if (null == e) return null;
        let c = (null == t ? void 0 : t.type) != null && e7.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            u = s - e7.PrS - c;
        return (
            (u += y.qO),
            (0, r.jsx)(eJ.Z, {
                sidebarType: (null == t ? void 0 : t.type) != null && e7.TPd.GUILD_THREADS_ONLY.has(t.type) ? eJ.y.PostSidebar : eJ.y.ThreadSidebar,
                maxWidth: u,
                onWidthChange: this.handleThreadSidebarResize,
                children: e
            })
        );
    }
    render() {
        let { channel: e, guild: t, formattedChannelName: n, isUnavailable: i, layout: l, section: a, hasModalOpen: s, guildSidebarState: c, hasTextActivityInPanelMode: u } = this.props,
            { threadSidebarWidth: d, isThreadSidebarFloating: p } = this.state,
            h = this.shouldRenderCall();
        if (i) return (0, r.jsx)(e0.Z, {});
        if (null == e) return (0, r.jsx)(e1.Z, { channelId: this.props.channelId });
        let f = a === e7.ULH.SIDEBAR_CHAT,
            m = null != c && !f,
            g = !e.isForumLikeChannel() && !s,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(D.yY, {
                    location: b,
                    subsection: null != n ? n : void 0
                }),
                (0, r.jsxs)('div', {
                    'data-has-border': e.type !== e7.d4z.GUILD_VOICE,
                    className: o()(tn.chat, {
                        [tn.threadSidebarOpen]: f || m,
                        [tn.threadSidebarFloating]: f && p
                    }),
                    children: [
                        g
                            ? (0, r.jsx)(x.Z, {
                                  style: { right: f ? d : void 0 },
                                  className: tn.uploadArea,
                                  channel: e,
                                  draftType: eU.d.ChannelMessage
                              })
                            : null,
                        h || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)('div', {
                            className: o()(tn.content, { [tn.noChat]: l === e7.AEg.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()]
                        })
                    ]
                }),
                this.renderThreadSidebar(),
                (0, r.jsx)(J.Z, {})
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            tr(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            tr(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                null != e && (0, e_.Kh)(e.id);
            }),
            tr(this, '_handleContextMenu', (e, t) => {
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
            tr(this, 'handleContextMenu', (e) => {
                (s()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel));
            }),
            tr(this, 'handleParentContextMenu', (e) => {
                (s()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel));
            }),
            tr(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            tr(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                (s()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, eA.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        sourceAnalyticsLocations: [N.Z.CHANNEL_HEADER]
                    }));
            }),
            tr(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e3.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(Y.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            tr(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, r.jsx)(k.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            tr(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e5.fO.STREAM
                    ? null
                    : (0, r.jsx)(
                          V.Z,
                          {
                              size: e2.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t
                          },
                          'live-indicator'
                      );
            }),
            tr(this, 'renderHeaderToolbar', () => {
                let { channel: e, parentChannel: t, isLurking: n, showCall: i, showActivityPanel: l, showFramePanel: o } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let a = [];
                if (e.isSystemDM()) return a;
                switch (e.type) {
                    case e7.d4z.GUILD_STAGE_VOICE:
                    case e7.d4z.GUILD_VOICE:
                        break;
                    case e7.d4z.DM:
                        (a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            a.push((0, r.jsx)(ea.Z, { channel: e }, 'calls')),
                            a.push((0, r.jsx)(et.Z, { channel: e }, 'pins')),
                            a.push(
                                (0, r.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        tooltip: tt.intl.string(tt.t.Xjlbvr),
                                        location: 'ChannelHeaderToolbar-DM-AddFriendsButton'
                                    },
                                    'invite'
                                )
                            ),
                            a.push(
                                (0, r.jsx)(
                                    ed.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: i || l || o
                                    },
                                    'profile'
                                )
                            ),
                            a.push((0, r.jsx)(ec.Z, { channel: e }, 'safety_tools')),
                            a.push((0, r.jsx)(er.Z, { channel: e }, 'chat-wallpaper')));
                        break;
                    case e7.d4z.GROUP_DM:
                        if ((a.push(this.renderJoinRequestInterviewButtons()), a.push(this.renderClipsEnabledIndicatorToolbarItem()), a.push(this.renderStreamQualityLiveIndicatorToolbarItem()), a.push((0, r.jsx)(ea.Z, { channel: e }, 'calls')), a.push((0, r.jsx)(et.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = tt.intl.string(tt.t.Xjlbvr);
                            a.push(
                                (0, r.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        tooltip: t,
                                        location: 'ChannelHeaderToolbar-GroupDM-AddFriendsButton'
                                    },
                                    'invite'
                                )
                            );
                        }
                        (a.push((0, r.jsx)($.Z, { channelId: e.id }, 'members')), a.push((0, r.jsx)(er.Z, { channel: e }, 'chat-wallpaper')));
                        break;
                    case e7.d4z.ANNOUNCEMENT_THREAD:
                    case e7.d4z.PRIVATE_THREAD:
                    case e7.d4z.PUBLIC_THREAD:
                        (a.push((0, r.jsx)(eS.Z, { channel: e })), null == t || t.isForumLikeChannel() || a.push((0, r.jsx)(eI.Z, { channel: t }, 'browser')), e.isVocalThread() && a.push((0, r.jsx)(eu.Z, { channel: e }, 'thread-call')), a.push((0, r.jsx)(eP.Z, { channel: e }, 'notifications')), a.push((0, r.jsx)(et.Z, { channel: e }, 'pins')), e.isArchivedThread() || a.push((0, r.jsx)($.Z, { channelId: e.id }, 'members')), null != t && (0, j.Lp)(e) && a.push((0, r.jsx)(en.Z, { channel: e }, 'summaries')), a.push((0, r.jsx)(eZ.Z, { channel: e }, 'threads-overflow')));
                        break;
                    case e7.d4z.GUILD_ANNOUNCEMENT:
                    case e7.d4z.GUILD_TEXT:
                        (a.push((0, r.jsx)(B.Z, { channel: e }, 'favorites')), a.push((0, r.jsx)(eI.Z, { channel: e }, 'browser')), n || a.push((0, r.jsx)(ee.Z, { channel: e }, 'notifications')), a.push((0, r.jsx)(et.Z, { channel: e }, 'pins')), a.push((0, r.jsx)($.Z, { channelId: e.id }, 'members')), (0, j.Lp)(e) && a.push((0, r.jsx)(en.Z, { channel: e }, 'summaries')));
                        break;
                    case e7.d4z.GUILD_FORUM:
                    case e7.d4z.GUILD_MEDIA:
                        (n || (a.push((0, r.jsx)(ei.Z, { channel: e }, 'forum-onboarding')), a.push((0, r.jsx)(ee.Z, { channel: e }, 'notifications'))), __OVERLAY__ || a.push((0, r.jsx)($.Z, { channelId: e.id }, 'members')));
                        break;
                    case e7.d4z.GUILD_DIRECTORY:
                        a.push((0, r.jsx)($.Z, { channelId: e.id }, 'members'));
                }
                return a;
            }),
            tr(this, 'renderMobileToolbar', () => {
                let { channel: e } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e7.d4z.GUILD_STAGE_VOICE:
                    case e7.d4z.GUILD_VOICE:
                    case e7.d4z.DM:
                        break;
                    case e7.d4z.GROUP_DM:
                        t.push((0, r.jsx)($.Z, { channelId: e.id }, 'members'));
                        break;
                    case e7.d4z.ANNOUNCEMENT_THREAD:
                    case e7.d4z.PRIVATE_THREAD:
                    case e7.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, r.jsx)($.Z, { channelId: e.id }, 'members'));
                        break;
                    case e7.d4z.GUILD_ANNOUNCEMENT:
                    case e7.d4z.GUILD_TEXT:
                    case e7.d4z.GUILD_FORUM:
                    case e7.d4z.GUILD_MEDIA:
                    case e7.d4z.GUILD_DIRECTORY:
                        t.push((0, r.jsx)($.Z, { channelId: e.id }, 'members'));
                }
                return t;
            }),
            tr(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)(m.zxk, {
                          size: m.zxk.Sizes.MIN,
                          color: m.zxk.Colors.PRIMARY,
                          className: tn.followButton,
                          onClick: () =>
                              (0, m.ZDy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) => (0, r.jsx)(e, ti({ channel: t }, n));
                              }),
                          children: tt.intl.string(tt.t['3aOv+v'])
                      })
                    : null;
            }),
            tr(this, 'renderHeaderBar', () => {
                let { channel: e, channelName: t, parentChannel: n, guild: i, guildId: l, showCall: a, showActivityPanel: c, showFramePanel: u, hasVideo: d, showHeaderGuildBreadcrumb: p, isFavorites: h } = this.props;
                (s()(null != e, 'Missing channel in Channel.renderHeaderBar'), s()(null != t, 'Should not be null if channel is not null.'));
                let f = e.isDM() && !e.isSystemDM() ? this.openUserProfile : p ? () => (0, e_.Kh)(e.id) : void 0,
                    g = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                return (0, r.jsxs)('div', {
                    className: tn.subtitleContainer,
                    children: [
                        (0, r.jsx)(m.f6W, {
                            theme: d && a ? e7.BRd.DARK : void 0,
                            children: (s) =>
                                (0, r.jsxs)(
                                    el.Z,
                                    {
                                        guildId: l,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (h && !(0, ey.X)()),
                                        showDivider: h && !(0, ey.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: o()(tn.title, s),
                                        transparent: a || c || u,
                                        'aria-label': tt.intl.string(tt.t.BIYAqa),
                                        children: [
                                            p &&
                                                (0, r.jsx)(eo.TS, {
                                                    channel: e,
                                                    guild: i,
                                                    caretPosition: 'right'
                                                }),
                                            (0, eo.ud)({
                                                channel: e,
                                                channelName: t,
                                                parentChannel: n,
                                                guild: i,
                                                hasVideo: d,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: f,
                                                handleParentClick: g,
                                                renderFollowButton: this.renderFollowButton
                                            }),
                                            p
                                                ? (0, r.jsx)(m.zxk, {
                                                      onClick: () => (0, eb.XU)(e.guild_id, e.id),
                                                      className: tn.followButton,
                                                      look: m.zxk.Looks.FILLED,
                                                      color: m.zxk.Colors.PRIMARY,
                                                      size: m.zxk.Sizes.MIN,
                                                      children: tt.intl.string(tt.t.k5WiPT)
                                                  })
                                                : (0, eo.v0)(e, i)
                                        ]
                                    },
                                    'header-'.concat(e.id)
                                )
                        }),
                        (0, r.jsx)(eg.Z, { channelId: e.id })
                    ]
                });
            }));
    }
}
let ts = (0, O.Z)(ta),
    tc = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, o] = i.useState(null),
            a = (0, p.e7)([eW.Z], () => eW.Z.getChannelId()),
            s = (0, p.e7)([eW.Z], () => eW.Z.getVoiceChannelId()),
            c = (0, p.e7)([eL.Z], () => (null != n ? n : eL.Z.getChannel(a)), [a, n]),
            m = (0, p.e7)([eL.Z], () => eL.Z.getChannel(s), [s]),
            b = null == c ? void 0 : c.parent_id,
            _ = (0, p.e7)([eL.Z], () => eL.Z.getChannel(b), [b]),
            y = (0, p.e7)([eH.Z], () => eH.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: C } = (0, K.Z)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            x = (0, p.e7)(
                [A.Z],
                () => {
                    let e = null != a ? A.Z.getParticipants(a) : [],
                        t = null != a ? A.Z.getActivityParticipants(a) : [];
                    return e.length - t.length > 0;
                },
                [a]
            ),
            v = (0, G.Z)(),
            O = (0, p.e7)([eW.Z], () => {
                var e;
                return (null != (e = null == v ? void 0 : v.channelId) ? e : eW.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
            }),
            I = (0, p.e7)([S.ZP], () => (null != c ? S.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            N = (0, p.e7)([eV.Z], () => eV.Z.isConnected()),
            w = (0, E.Z)(N),
            R = N && !1 === w;
        i.useEffect(() => {
            O &&
                R &&
                null != I &&
                null != c &&
                g.Z.selectParticipant(
                    c.id,
                    (0, T.gN)({
                        applicationId: I.applicationId,
                        instanceId: I.compositeInstanceId
                    })
                );
        }, [R, c, O, I]);
        let k = (0, p.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
            M = (0, p.e7)([S.ZP], () => S.ZP.getActivityPanelMode()),
            D = null != k && !(0, P.Z)(null == c ? void 0 : c.id) && M === e8.Ez.PANEL,
            L = (0, p.e7)([eK.Z], () => null != c && c.isVocalThread() && !u().isEmpty(eK.Z.getVoiceStatesForChannel(c.id)), [c]),
            B = null != c && c.isPrivate() && !D && x,
            F = (null == c ? void 0 : c.isGuildVocal()) || B || L,
            V = (0, p.e7)([H.Z], () => H.Z.getFrameLayoutMode() === e4.U.FOCUSED),
            { welcomeModalChannelId: z } = (0, d.TH)(),
            W = (0, p.e7)([ef.Z], () => null != c && ef.Z.isLurking(c.guild_id), [c]),
            Y = (0, p.e7)([ek.Z], () => ek.Z.hasSeen(null == c ? void 0 : c.guild_id, W), [c, W]),
            q = (0, p.e7)([A.Z, S.ZP], () => (null != S.ZP.getConnectedActivityLocation() && S.ZP.getActivityPanelMode() === e8.Ez.PANEL ? (S.ZP.getFocusedLayout() === e8.MI.NO_CHAT ? e7.AEg.NO_CHAT : e7.AEg.NORMAL) : null != a ? A.Z.getLayout(a) : e7.AEg.NORMAL), [a]),
            X = (0, p.e7)([A.Z], () => (null != c ? A.Z.getSelectedParticipant(c.id) : null)),
            Q = (0, p.e7)([eq.default], () => eq.default.getCurrentUser()),
            J = (0, ep.Z)(null == y ? void 0 : y.id),
            $ = (0, eM.Z)(z, null == y ? void 0 : y.id),
            { section: ee, channelSidebarState: et } = (0, p.cj)(
                [eD.ZP],
                () => ({
                    section: eD.ZP.getSection(a, null == c ? void 0 : c.isDM()),
                    channelSidebarState: eD.ZP.getSidebarState(a)
                }),
                [a, c]
            ),
            en = null == y ? void 0 : y.id,
            er = (0, p.e7)([eD.ZP], () => eD.ZP.getGuildSidebarState(en), [en]),
            ei = (0, p.e7)([eY.Z], () => eY.Z.getGuildId()) === e7.I_8,
            el = (0, em.D)(),
            eo = (0, eX.ZP)(c),
            ea = (0, eX.ZP)(c, !0),
            es = null != c && s === c.id,
            ec = null != c && c.isGuildStageVoice();
        ((0, Z.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, eb.s1)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === te.Df) {
                    let { channelId: e } = null != (n = (0, eh.Qj)(null == r || null == (t = r.location) ? void 0 : t.pathname)) ? n : {};
                    null != e && o(e);
                }
            }, []));
        let eu = {
                channel: c,
                inCurrentVoiceChannel: es
            },
            ed = i.useRef(eu);
        (i.useEffect(() => {
            ed.current = eu;
        }),
            i.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = ed.current;
                null != l && null != e && ec && e.id === l && !t && ((0, eO.Cq)(e), o(null));
            }, [l, ec]));
        let eg = (0, j.ts)(c),
            e_ = null != c && c.isPrivate(),
            ey = (0, E.Z)(e_),
            eC = (0, E.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = ey && !e_,
                t = ey && e_ && (null == c ? void 0 : c.id) !== eC;
            (e || t) && (0, U.Q3)(h.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e6.L.AUTO });
        }, [null == c ? void 0 : c.id, eC, e_, ey]);
        let ex = (0, f.f9)();
        return (0, r.jsx)(
            ts,
            tl(
                ti(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: a,
                        channel: c,
                        channelName: eo,
                        formattedChannelName: ea,
                        parentChannel: _,
                        voiceChannel: m,
                        layout: q,
                        needSubscriptionToAccess: C,
                        isLurking: W,
                        hasModalOpen: ex,
                        section: ee,
                        channelSidebarState: et,
                        guildSidebarState: er,
                        guild: y,
                        searchId: (0, p.e7)([ez.Z], () => ez.Z.getCurrentSearchId()),
                        showCall: !C && F,
                        showActivityPanel: D,
                        showFramePanel: V,
                        nsfwAgree: (0, p.e7)([eF.Z], () => eF.Z.didAgree(null == c ? void 0 : c.guild_id)),
                        isMobile: (0, p.e7)([eG.Z], () => (null == c ? void 0 : c.type) === e7.d4z.DM && eG.Z.isMobileOnline(c.getRecipientId()), [c]),
                        isUnavailable: (0, p.e7)([eB.Z], () => (null == c ? void 0 : c.guild_id) != null && eB.Z.isUnavailable(c.guild_id), [c]),
                        showRealNameModal: J,
                        showWelcomeModal: !Y && $,
                        showFollowButton: ((null == c ? void 0 : c.type) === e7.d4z.GUILD_ANNOUNCEMENT && (null == y ? void 0 : y.features.has(e7.oNc.NEWS))) || !1
                    },
                    (0, p.cj)([eK.Z], () => ({ hasVideo: null != c && eK.Z.hasVideo(c.id) }), [c])
                ),
                {
                    inCall: es,
                    selectedParticipant: X,
                    nsfwAllowed: (null == Q ? void 0 : Q.nsfwAllowed) === !0,
                    showChannelSummaries: eg,
                    isFavorites: ei,
                    showHeaderGuildBreadcrumb: ei || el,
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: D,
                    embeddedActivity: k
                }
            )
        );
    });
