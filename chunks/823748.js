(n.d(t, { Z: () => tu }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(392711),
    u = n.n(c),
    d = n(114858),
    p = n(442837),
    h = n(704215),
    f = n(952265),
    m = n(755721),
    g = n(481060),
    b = n(475179),
    _ = n(239091),
    y = n(377993),
    C = n(697309),
    x = n(457868),
    v = n(561472),
    O = n(36311),
    j = n(112724),
    E = n(902840),
    S = n(110924),
    I = n(317381),
    P = n(82888),
    Z = n(917107),
    N = n(296797),
    T = n(100527),
    A = n(413523),
    w = n(358221),
    R = n(677601),
    M = n(541716),
    D = n(236091),
    L = n(663993),
    k = n(252618),
    U = n(201493),
    B = n(266454),
    F = n(174130),
    H = n(588322),
    G = n(591472),
    V = n(446226),
    z = n(517525),
    W = n(445384),
    Y = n(613464),
    q = n(705563),
    K = n(730647),
    X = n(66999),
    Q = n(826763),
    J = n(180216),
    $ = n(51486),
    ee = n(168843),
    et = n(442336),
    en = n(57304),
    er = n(605953),
    ei = n(405954),
    el = n(374306),
    ea = n(984370),
    eo = n(910611),
    es = n(915718),
    ec = n(518311),
    eu = n(882378),
    ed = n(207868),
    ep = n(473065),
    eh = n(576171),
    ef = n(754688),
    em = n(41776),
    eg = n(370774),
    eb = n(134483),
    e_ = n(703656),
    ey = n(359110),
    eC = n(854709),
    ex = n(14091),
    ev = n(6025),
    eO = n(897473),
    ej = n(922482),
    eE = n(856393),
    eS = n(657218),
    eI = n(407908),
    eP = n(66556),
    eZ = n(739830),
    eN = n(377929),
    eT = n(900157),
    eA = n(108427),
    ew = n(892001),
    eR = n(402130),
    eM = n(524329),
    eD = n(995532),
    eL = n(738643),
    ek = n(433355),
    eU = n(592125),
    eB = n(703558),
    eF = n(486472),
    eH = n(731290),
    eG = n(430824),
    eV = n(158776),
    ez = n(19780),
    eW = n(768119),
    eY = n(944486),
    eq = n(914010),
    eK = n(594174),
    eX = n(979651),
    eQ = n(933557),
    eJ = n(287746),
    e$ = n(325708),
    e0 = n(335615),
    e1 = n(992744),
    e2 = n(923029),
    e3 = n(194082),
    e7 = n(176505),
    e8 = n(981631),
    e5 = n(918559),
    e6 = n(354459),
    e4 = n(921944),
    e9 = n(408491),
    te = n(440493),
    tt = n(157925),
    tn = n(388032),
    tr = n(100658);
function ti(e, t, n) {
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
function tl(e) {
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
                ti(e, t, n[t]);
            }));
    }
    return e;
}
function ta(e, t) {
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
let to = (0, L.Un)({
    createPromise: () => Promise.all([n.e('22173'), n.e('71879')]).then(n.bind(n, 346975)),
    webpackId: 346975,
    renderLoader: () =>
        (0, r.jsx)('div', {
            className: tr.loader,
            children: (0, r.jsx)(g.$jN, {})
        }),
    name: 'ForumChannel'
});
class ts extends i.PureComponent {
    componentDidMount() {
        (0, eA.e)('guild_channel');
    }
    componentDidUpdate(e) {
        (null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({ topicExpanded: !1 }), this.openChannelModal());
    }
    openChannelContextMenu(e, t) {
        let { guild: i } = this.props;
        (s()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            s()(null != i, 'Missing guild in Channel.openChannelContextMenu'),
            (0, _.jW)(e, async () => {
                let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        ta(tl({}, n), {
                            channel: t,
                            guild: i
                        })
                    );
            }));
    }
    openThreadContextMenu(e, t) {
        (s()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            (0, _.jW)(e, async () => {
                let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                return (n) => (0, r.jsx)(e, ta(tl({}, n), { channel: t }));
            }));
    }
    openDMContextMenu(e, t) {
        s()(null != t, 'Missing channel in Channel.openDMContextMenu');
        let i = eK.default.getUser(t.getRecipientId());
        (s()(null != i, 'Missing user in Channel.openDMContextMenu'),
            (0, _.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('56399')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        ta(tl({}, n), {
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
            case e8.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(eE.Z, { channel: e }, e.id);
            case e8.d4z.GUILD_VOICE:
            case e8.d4z.DM:
            case e8.d4z.GROUP_DM:
            case e8.d4z.PUBLIC_THREAD:
            case e8.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, r.jsx)(
                    R.Z,
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
        return (0, r.jsx)(P.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar
        });
    }
    renderChat() {
        let { channel: e, nsfwAgree: t, guild: n, nsfwAllowed: i, needSubscriptionToAccess: l } = this.props;
        if ((s()(null != e, 'Missing channel in Channel.renderChat'), l))
            return (s()(null != n, 'premium channels must exist within a guild'), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, r.jsx)(Q.Z, { guildId: n.id })
                : (0, r.jsx)(K.l, {
                      guildId: n.id,
                      children: (0, r.jsx)(J.Z, {
                          channelId: e.id,
                          guildId: n.id
                      })
                  });
        if (e.isNSFW() && (!i || !t))
            return (0, r.jsx)(O.Z, {
                guild: n,
                channelId: e.id
            });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                s()(null != n, 'directory channels must exist within a guild'),
                (0, r.jsx)(U.Z, {
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
            eJ.Z,
            {
                channel: e,
                guild: n,
                chatInputType: M.Ie.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: i, needSubscriptionToAccess: l, section: a, showCall: o, showActivityPanel: c, showFramePanel: u } = this.props;
        if ((s()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || l));
        else if (a === e8.ULH.PROFILE && t.isPrivate() && !o && !c && !u) return (0, r.jsx)(eR.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (a === e8.ULH.MEMBERS)
            switch (t.type) {
                case e8.d4z.GROUP_DM:
                    return (0, r.jsx)(y.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e8.d4z.GUILD_DIRECTORY:
                case e8.d4z.GUILD_FORUM:
                case e8.d4z.GUILD_MEDIA:
                case e8.d4z.GUILD_ANNOUNCEMENT:
                case e8.d4z.GUILD_TEXT:
                    var d;
                    let p = !0 === e8.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null != (d = t.guild_id) ? d : t.id;
                    return (0, r.jsx)(e0.Z, { channel: t }, 'channel-members-'.concat(p));
                case e8.d4z.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, r.jsx)(e0.Z, { channel: n }, 'channel-members-'.concat(n.id));
                    break;
                case e8.d4z.PUBLIC_THREAD:
                case e8.d4z.PRIVATE_THREAD:
                    if (!t.isArchivedThread() && null != i)
                        return (0, r.jsx)(
                            x.Z,
                            {
                                channel: t,
                                guild: i
                            },
                            'channel-members-'.concat(t.id)
                        );
            }
        else if (a === e8.ULH.SEARCH && null != e) return (0, r.jsx)(ex.Z, { searchId: e });
        return null;
    }
    openChannelModal() {
        let { channel: e, guildId: t, hasModalOpen: i, showWelcomeModal: l, isLurking: a, isUnavailable: o, showRealNameModal: s } = this.props;
        return (
            null == e ||
                null == t ||
                o ||
                i ||
                (s &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e('53900').then(n.bind(n, 784280));
                            return (n) => (0, r.jsx)(e, ta(tl({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => W.Z.viewPrompt(te.r.REAL_NAME_PROMPT, t),
                            modalKey: 'Guild Hub Real Name Modal'
                        }
                    ),
                l &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (n) => (0, r.jsx)(e, ta(tl({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => (0, eM.y0)(t, a),
                            modalKey: 'Guild Welcome Screen Modal'
                        }
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e,
            { channel: t, section: n, channelSidebarState: i, guildSidebarState: l, nsfwAgree: a, nsfwAllowed: o, width: s } = this.props;
        if (null == l && null == i) return null;
        if (n === e8.ULH.SIDEBAR_CHAT && null != i) {
            if ((null == t ? void 0 : t.isNSFW()) && (!o || !a)) return null;
            switch (i.type) {
                case eO.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(eS.Z, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location
                    });
                    break;
                case eO.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? H.Z : eT.Z;
                    e = (0, r.jsx)(n, { channelId: i.channelId });
                    break;
                case eO.tI.VIEW_CHANNEL:
                case eO.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != l && null == e)
            if (l.type !== eO.jL.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t } = l.details;
                return (0, r.jsx)('div', {
                    style: { width: e8.$Y6 },
                    className: tr.guildSidebar,
                    children: (0, r.jsx)(Y.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => ev.Z.closeGuildSidebar(e)
                    })
                });
            }
        if (null == e) return null;
        let c = (null == t ? void 0 : t.type) != null && e8.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            u = s - e8.PrS - c;
        return (
            (u += C.qO),
            (0, r.jsx)(e$.Z, {
                sidebarType: (null == t ? void 0 : t.type) != null && e8.TPd.GUILD_THREADS_ONLY.has(t.type) ? e$.y.PostSidebar : e$.y.ThreadSidebar,
                maxWidth: u,
                onWidthChange: this.handleThreadSidebarResize,
                children: e
            })
        );
    }
    render() {
        let { channel: e, guild: t, formattedChannelName: n, isUnavailable: i, layout: l, section: o, hasModalOpen: s, guildSidebarState: c, hasTextActivityInPanelMode: u } = this.props,
            { threadSidebarWidth: d, isThreadSidebarFloating: p } = this.state,
            h = this.shouldRenderCall();
        if (i) return (0, r.jsx)(e1.Z, {});
        if (null == e) return (0, r.jsx)(e2.Z, { channelId: this.props.channelId });
        let f = o === e8.ULH.SIDEBAR_CHAT,
            m = null != c && !f,
            g = !e.isForumLikeChannel() && !s,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(k.yY, {
                    location: b,
                    subsection: null != n ? n : void 0
                }),
                (0, r.jsxs)('div', {
                    'data-has-border': e.type !== e8.d4z.GUILD_VOICE,
                    className: a()(tr.chat, {
                        [tr.threadSidebarOpen]: f || m,
                        [tr.threadSidebarFloating]: f && p
                    }),
                    children: [
                        g
                            ? (0, r.jsx)(v.Z, {
                                  style: { right: f ? d : void 0 },
                                  className: tr.uploadArea,
                                  channel: e,
                                  draftType: eB.d.ChannelMessage
                              })
                            : null,
                        h || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)('div', {
                            className: a()(tr.content, { [tr.noChat]: l === e8.AEg.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()]
                        })
                    ]
                }),
                this.renderThreadSidebar(),
                (0, r.jsx)($.Z, {})
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            ti(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            ti(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                null != e && (0, ey.Kh)(e.id);
            }),
            ti(this, '_handleContextMenu', (e, t) => {
                switch (t.type) {
                    case e8.d4z.GUILD_VOICE:
                    case e8.d4z.GUILD_ANNOUNCEMENT:
                    case e8.d4z.GUILD_TEXT:
                    case e8.d4z.GUILD_FORUM:
                    case e8.d4z.GUILD_MEDIA:
                        this.openChannelContextMenu(e, t);
                        break;
                    case e8.d4z.ANNOUNCEMENT_THREAD:
                    case e8.d4z.PUBLIC_THREAD:
                    case e8.d4z.PRIVATE_THREAD:
                        this.openThreadContextMenu(e, t);
                        break;
                    case e8.d4z.DM:
                        this.openDMContextMenu(e, t);
                }
            }),
            ti(this, 'handleContextMenu', (e) => {
                (s()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel));
            }),
            ti(this, 'handleParentContextMenu', (e) => {
                (s()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel));
            }),
            ti(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            ti(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                (s()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, ew.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        sourceAnalyticsLocations: [T.Z.CHANNEL_HEADER]
                    }));
            }),
            ti(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e7.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(q.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            ti(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, r.jsx)(D.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            ti(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e6.fO.STREAM
                    ? null
                    : (0, r.jsx)(
                          z.Z,
                          {
                              size: e3.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t
                          },
                          'live-indicator'
                      );
            }),
            ti(this, 'renderHeaderToolbar', () => {
                let { channel: e, parentChannel: t, isLurking: n, showCall: i, showActivityPanel: l, showFramePanel: a } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let o = [];
                if (e.isSystemDM()) return o;
                switch (e.type) {
                    case e8.d4z.GUILD_STAGE_VOICE:
                    case e8.d4z.GUILD_VOICE:
                        break;
                    case e8.d4z.DM:
                        (o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            o.push((0, r.jsx)(es.Z, { channel: e }, 'calls')),
                            o.push((0, r.jsx)(en.Z, { channel: e }, 'pins')),
                            o.push(
                                (0, r.jsx)(
                                    ec.Z,
                                    {
                                        channel: e,
                                        tooltip: tn.intl.string(tn.t.Xjlbvr),
                                        location: 'ChannelHeaderToolbar-DM-AddFriendsButton'
                                    },
                                    'invite'
                                )
                            ),
                            o.push(
                                (0, r.jsx)(
                                    ep.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: i || l || a
                                    },
                                    'profile'
                                )
                            ),
                            o.push((0, r.jsx)(eu.Z, { channel: e }, 'safety_tools')),
                            o.push((0, r.jsx)(ei.Z, { channel: e }, 'chat-wallpaper')));
                        break;
                    case e8.d4z.GROUP_DM:
                        if ((o.push(this.renderJoinRequestInterviewButtons()), o.push(this.renderClipsEnabledIndicatorToolbarItem()), o.push(this.renderStreamQualityLiveIndicatorToolbarItem()), o.push((0, r.jsx)(es.Z, { channel: e }, 'calls')), o.push((0, r.jsx)(en.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = tn.intl.string(tn.t.Xjlbvr);
                            o.push(
                                (0, r.jsx)(
                                    ec.Z,
                                    {
                                        channel: e,
                                        tooltip: t,
                                        location: 'ChannelHeaderToolbar-GroupDM-AddFriendsButton'
                                    },
                                    'invite'
                                )
                            );
                        }
                        (o.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members')), o.push((0, r.jsx)(ei.Z, { channel: e }, 'chat-wallpaper')));
                        break;
                    case e8.d4z.ANNOUNCEMENT_THREAD:
                    case e8.d4z.PRIVATE_THREAD:
                    case e8.d4z.PUBLIC_THREAD:
                        (o.push((0, r.jsx)(eI.Z, { channel: e })), null == t || t.isForumLikeChannel() || o.push((0, r.jsx)(eP.Z, { channel: t }, 'browser')), e.isVocalThread() && o.push((0, r.jsx)(ed.Z, { channel: e }, 'thread-call')), o.push((0, r.jsx)(eZ.Z, { channel: e }, 'notifications')), o.push((0, r.jsx)(en.Z, { channel: e }, 'pins')), e.isArchivedThread() || o.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members')), null != t && (0, E.Lp)(e) && o.push((0, r.jsx)(er.Z, { channel: e }, 'summaries')), o.push((0, r.jsx)(eN.Z, { channel: e }, 'threads-overflow')));
                        break;
                    case e8.d4z.GUILD_ANNOUNCEMENT:
                    case e8.d4z.GUILD_TEXT:
                        (o.push((0, r.jsx)(F.Z, { channel: e }, 'favorites')), o.push((0, r.jsx)(eP.Z, { channel: e }, 'browser')), n || o.push((0, r.jsx)(et.Z, { channel: e }, 'notifications')), o.push((0, r.jsx)(en.Z, { channel: e }, 'pins')), o.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members')), (0, E.Lp)(e) && o.push((0, r.jsx)(er.Z, { channel: e }, 'summaries')));
                        break;
                    case e8.d4z.GUILD_FORUM:
                    case e8.d4z.GUILD_MEDIA:
                        (n || (o.push((0, r.jsx)(el.Z, { channel: e }, 'forum-onboarding')), o.push((0, r.jsx)(et.Z, { channel: e }, 'notifications'))), __OVERLAY__ || o.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members')));
                        break;
                    case e8.d4z.GUILD_DIRECTORY:
                        o.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members'));
                }
                return o;
            }),
            ti(this, 'renderMobileToolbar', () => {
                let { channel: e } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e8.d4z.GUILD_STAGE_VOICE:
                    case e8.d4z.GUILD_VOICE:
                    case e8.d4z.DM:
                        break;
                    case e8.d4z.GROUP_DM:
                        t.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members'));
                        break;
                    case e8.d4z.ANNOUNCEMENT_THREAD:
                    case e8.d4z.PRIVATE_THREAD:
                    case e8.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members'));
                        break;
                    case e8.d4z.GUILD_ANNOUNCEMENT:
                    case e8.d4z.GUILD_TEXT:
                    case e8.d4z.GUILD_FORUM:
                    case e8.d4z.GUILD_MEDIA:
                    case e8.d4z.GUILD_DIRECTORY:
                        t.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members'));
                }
                return t;
            }),
            ti(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)(m.zx, {
                          size: m.zx.Sizes.MIN,
                          color: m.zx.Colors.PRIMARY,
                          className: tr.followButton,
                          onClick: () =>
                              (0, g.ZDy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) => (0, r.jsx)(e, tl({ channel: t }, n));
                              }),
                          children: tn.intl.string(tn.t['3aOv+v'])
                      })
                    : null;
            }),
            ti(this, 'renderHeaderBar', (e) => {
                let { channel: t, channelName: n, parentChannel: i, guild: l, guildId: o, showCall: c, showActivityPanel: u, showFramePanel: d, hasVideo: p, showHeaderGuildBreadcrumb: h, isFavorites: f } = this.props;
                (s()(null != t, 'Missing channel in Channel.renderHeaderBar'), s()(null != n, 'Should not be null if channel is not null.'));
                let b = t.isDM() && !t.isSystemDM() ? this.openUserProfile : h ? () => (0, ey.Kh)(t.id) : void 0,
                    _ = (null == i ? void 0 : i.guild_id) != null && (null == i ? void 0 : i.id) != null ? this.handleTitleParentClick : void 0,
                    y = u || d,
                    C = c || y,
                    x = !C || (!1 === e && !y);
                return (0, r.jsxs)('div', {
                    className: tr.subtitleContainer,
                    children: [
                        (0, r.jsx)(g.f6W, {
                            theme: p && c ? e8.BRd.DARK : void 0,
                            children: (e) =>
                                (0, r.jsxs)(
                                    ea.Z,
                                    {
                                        guildId: o,
                                        channelId: t.id,
                                        channelType: t.type,
                                        hideSearch: t.isDirectory() || (f && !(0, eC.X)()),
                                        showDivider: f && !(0, eC.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: a()(tr.title, e),
                                        transparent: C,
                                        showToolbar: x,
                                        'aria-label': tn.intl.string(tn.t.BIYAqa),
                                        children: [
                                            h &&
                                                (0, r.jsx)(eo.TS, {
                                                    channel: t,
                                                    guild: l,
                                                    caretPosition: 'right'
                                                }),
                                            (0, eo.ud)({
                                                channel: t,
                                                channelName: n,
                                                parentChannel: i,
                                                guild: l,
                                                hasVideo: p,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: b,
                                                handleParentClick: _,
                                                renderFollowButton: this.renderFollowButton
                                            }),
                                            h
                                                ? (0, r.jsx)(m.zx, {
                                                      onClick: () => (0, e_.XU)(t.guild_id, t.id),
                                                      className: tr.followButton,
                                                      look: m.zx.Looks.FILLED,
                                                      color: m.zx.Colors.PRIMARY,
                                                      size: m.zx.Sizes.MIN,
                                                      children: tn.intl.string(tn.t.k5WiPT)
                                                  })
                                                : (0, eo.v0)(t, l)
                                        ]
                                    },
                                    'header-'.concat(t.id)
                                )
                        }),
                        (0, r.jsx)(eb.Z, { channelId: t.id })
                    ]
                });
            }));
    }
}
let tc = (0, j.Z)(ts),
    tu = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, a] = i.useState(null),
            o = (0, p.e7)([eY.Z], () => eY.Z.getChannelId()),
            s = (0, p.e7)([eY.Z], () => eY.Z.getVoiceChannelId()),
            c = (0, p.e7)([eU.Z], () => (null != n ? n : eU.Z.getChannel(o)), [o, n]),
            m = (0, p.e7)([eU.Z], () => eU.Z.getChannel(s), [s]),
            g = null == c ? void 0 : c.parent_id,
            _ = (0, p.e7)([eU.Z], () => eU.Z.getChannel(g), [g]),
            y = (0, p.e7)([eG.Z], () => eG.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: C } = (0, X.Z)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            x = (0, p.e7)(
                [w.Z],
                () => {
                    let e = null != o ? w.Z.getParticipants(o) : [],
                        t = null != o ? w.Z.getActivityParticipants(o) : [];
                    return e.length - t.length > 0;
                },
                [o]
            ),
            v = (0, V.Z)(),
            O = (0, p.e7)([eY.Z], () => {
                var e;
                return (null != (e = null == v ? void 0 : v.channelId) ? e : eY.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
            }),
            j = (0, p.e7)([I.ZP], () => (null != c ? I.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            P = (0, p.e7)([ez.Z], () => ez.Z.isConnected()),
            T = (0, S.Z)(P),
            R = P && !1 === T;
        i.useEffect(() => {
            O &&
                R &&
                null != j &&
                null != c &&
                b.Z.selectParticipant(
                    c.id,
                    (0, A.gN)({
                        applicationId: j.applicationId,
                        instanceId: j.compositeInstanceId
                    })
                );
        }, [R, c, O, j]);
        let M = (0, p.e7)([I.ZP], () => I.ZP.getCurrentEmbeddedActivity()),
            D = (0, p.e7)([I.ZP], () => I.ZP.getActivityPanelMode()),
            L = null != M && !(0, Z.Z)(null == c ? void 0 : c.id) && D === e5.Ez.PANEL,
            k = (0, p.e7)([eX.Z], () => null != c && c.isVocalThread() && !u().isEmpty(eX.Z.getVoiceStatesForChannel(c.id)), [c]),
            U = null != c && c.isPrivate() && !L && x,
            F = (null == c ? void 0 : c.isGuildVocal()) || U || k,
            H = (0, p.e7)([G.Z], () => G.Z.getFrameLayoutMode() === e9.U.FOCUSED),
            { welcomeModalChannelId: z } = (0, d.TH)(),
            W = (0, p.e7)([em.Z], () => null != c && em.Z.isLurking(c.guild_id), [c]),
            Y = (0, p.e7)([eD.Z], () => eD.Z.hasSeen(null == c ? void 0 : c.guild_id, W), [c, W]),
            q = (0, p.e7)([w.Z, I.ZP], () => (null != I.ZP.getConnectedActivityLocation() && I.ZP.getActivityPanelMode() === e5.Ez.PANEL ? (I.ZP.getFocusedLayout() === e5.MI.NO_CHAT ? e8.AEg.NO_CHAT : e8.AEg.NORMAL) : null != o ? w.Z.getLayout(o) : e8.AEg.NORMAL), [o]),
            K = (0, p.e7)([w.Z], () => (null != c ? w.Z.getSelectedParticipant(c.id) : null)),
            Q = (0, p.e7)([eK.default], () => eK.default.getCurrentUser()),
            J = (0, eh.Z)(null == y ? void 0 : y.id),
            $ = (0, eL.Z)(z, null == y ? void 0 : y.id),
            { section: ee, channelSidebarState: et } = (0, p.cj)(
                [ek.ZP],
                () => ({
                    section: ek.ZP.getSection(o, null == c ? void 0 : c.isDM()),
                    channelSidebarState: ek.ZP.getSidebarState(o)
                }),
                [o, c]
            ),
            en = null == y ? void 0 : y.id,
            er = (0, p.e7)([ek.ZP], () => ek.ZP.getGuildSidebarState(en), [en]),
            ei = (0, p.e7)([eq.Z], () => eq.Z.getGuildId()) === e8.I_8,
            el = (0, eg.D)(),
            ea = (0, eQ.ZP)(c),
            eo = (0, eQ.ZP)(c, !0),
            es = null != c && s === c.id,
            ec = null != c && c.isGuildStageVoice();
        ((0, N.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, e_.s1)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === tt.Df) {
                    let { channelId: e } = null != (n = (0, ef.Qj)(null == r || null == (t = r.location) ? void 0 : t.pathname)) ? n : {};
                    null != e && a(e);
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
                null != l && null != e && ec && e.id === l && !t && ((0, ej.Cq)(e), a(null));
            }, [l, ec]));
        let ep = (0, E.ts)(c),
            eb = null != c && c.isPrivate(),
            ey = (0, S.Z)(eb),
            eC = (0, S.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = ey && !eb,
                t = ey && eb && (null == c ? void 0 : c.id) !== eC;
            (e || t) && (0, B.Q3)(h.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e4.L.AUTO });
        }, [null == c ? void 0 : c.id, eC, eb, ey]);
        let ex = (0, f.f9)();
        return (0, r.jsx)(
            tc,
            ta(
                tl(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: o,
                        channel: c,
                        channelName: ea,
                        formattedChannelName: eo,
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
                        searchId: (0, p.e7)([eW.Z], () => eW.Z.getCurrentSearchId()),
                        showCall: !C && F,
                        showActivityPanel: L,
                        showFramePanel: H,
                        nsfwAgree: (0, p.e7)([eH.Z], () => eH.Z.didAgree(null == c ? void 0 : c.guild_id)),
                        isMobile: (0, p.e7)([eV.Z], () => (null == c ? void 0 : c.type) === e8.d4z.DM && eV.Z.isMobileOnline(c.getRecipientId()), [c]),
                        isUnavailable: (0, p.e7)([eF.Z], () => (null == c ? void 0 : c.guild_id) != null && eF.Z.isUnavailable(c.guild_id), [c]),
                        showRealNameModal: J,
                        showWelcomeModal: !Y && $,
                        showFollowButton: ((null == c ? void 0 : c.type) === e8.d4z.GUILD_ANNOUNCEMENT && (null == y ? void 0 : y.features.has(e8.oNc.NEWS))) || !1
                    },
                    (0, p.cj)([eX.Z], () => ({ hasVideo: null != c && eX.Z.hasVideo(c.id) }), [c])
                ),
                {
                    inCall: es,
                    selectedParticipant: K,
                    nsfwAllowed: (null == Q ? void 0 : Q.nsfwAllowed) === !0,
                    showChannelSummaries: ep,
                    isFavorites: ei,
                    showHeaderGuildBreadcrumb: ei || el,
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: L,
                    embeddedActivity: M
                }
            )
        );
    });
