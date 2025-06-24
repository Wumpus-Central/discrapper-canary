n.d(t, { Z: () => to }), n(388685), n(539854);
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
    m = n(481060),
    g = n(475179),
    b = n(239091),
    _ = n(377993),
    y = n(697309),
    x = n(457868),
    C = n(561472),
    v = n(36311),
    j = n(112724),
    O = n(902840),
    E = n(110924),
    I = n(317381),
    S = n(82888),
    P = n(917107),
    Z = n(296797),
    N = n(100527),
    T = n(413523),
    A = n(358221),
    w = n(677601),
    R = n(541716),
    M = n(236091),
    k = n(663993),
    D = n(252618),
    L = n(201493),
    U = n(605236),
    B = n(174130),
    F = n(588322),
    G = n(446226),
    H = n(517525),
    V = n(445384),
    z = n(613464),
    W = n(705563),
    Y = n(730647),
    q = n(66999),
    K = n(826763),
    X = n(180216),
    Q = n(51486),
    J = n(168843),
    $ = n(442336),
    ee = n(57304),
    et = n(605953),
    en = n(405954),
    er = n(374306),
    ei = n(984370),
    el = n(910611),
    ea = n(915718),
    eo = n(518311),
    es = n(882378),
    ec = n(207868),
    eu = n(473065),
    ed = n(576171),
    ep = n(754688),
    eh = n(41776),
    ef = n(370774),
    em = n(134483),
    eg = n(703656),
    eb = n(359110),
    e_ = n(854709),
    ey = n(14091),
    ex = n(6025),
    eC = n(897473),
    ev = n(922482),
    ej = n(856393),
    eO = n(657218),
    eE = n(407908),
    eI = n(66556),
    eS = n(739830),
    eP = n(377929),
    eZ = n(900157),
    eN = n(108427),
    eT = n(892001),
    eA = n(402130),
    ew = n(524329),
    eR = n(995532),
    eM = n(738643),
    ek = n(433355),
    eD = n(592125),
    eL = n(703558),
    eU = n(486472),
    eB = n(731290),
    eF = n(430824),
    eG = n(158776),
    eH = n(19780),
    eV = n(768119),
    ez = n(944486),
    eW = n(914010),
    eY = n(594174),
    eq = n(979651),
    eK = n(933557),
    eX = n(287746),
    eQ = n(325708),
    eJ = n(335615),
    e$ = n(992744),
    e0 = n(923029),
    e1 = n(194082),
    e2 = n(176505),
    e3 = n(981631),
    e7 = n(918559),
    e8 = n(354459),
    e5 = n(921944),
    e6 = n(440493),
    e4 = n(157925),
    e9 = n(388032),
    te = n(100658);
function tt(e, t, n) {
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
function tn(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
let ti = (0, k.Un)({
    createPromise: () => Promise.all([n.e('22173'), n.e('71879')]).then(n.bind(n, 346975)),
    webpackId: 346975,
    renderLoader: () =>
        (0, r.jsx)('div', {
            className: te.loader,
            children: (0, r.jsx)(m.$jN, {})
        }),
    name: 'ForumChannel'
});
class tl extends i.PureComponent {
    componentDidMount() {
        (0, eN.e)('guild_channel');
    }
    componentDidUpdate(e) {
        null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({ topicExpanded: !1 }), this.openChannelModal();
    }
    openChannelContextMenu(e, t) {
        let { guild: i } = this.props;
        s()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            s()(null != i, 'Missing guild in Channel.openChannelContextMenu'),
            (0, b.jW)(e, async () => {
                let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tr(tn({}, n), {
                            channel: t,
                            guild: i
                        })
                    );
            });
    }
    openThreadContextMenu(e, t) {
        s()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            (0, b.jW)(e, async () => {
                let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                return (n) => (0, r.jsx)(e, tr(tn({}, n), { channel: t }));
            });
    }
    openDMContextMenu(e, t) {
        s()(null != t, 'Missing channel in Channel.openDMContextMenu');
        let i = eY.default.getUser(t.getRecipientId());
        s()(null != i, 'Missing user in Channel.openDMContextMenu'),
            (0, b.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('23331')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tr(tn({}, n), {
                            user: i,
                            channelSelected: !0,
                            channel: t
                        })
                    );
            });
    }
    shouldRenderCall() {
        let { channel: e, showCall: t, nsfwAllowed: n, nsfwAgree: r } = this.props;
        return (!(null == e ? void 0 : e.isNSFW()) || (n && r)) && t;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((s()(null != e, 'Missing channel in Channel.renderCall'), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e3.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(ej.Z, { channel: e }, e.id);
            case e3.d4z.GUILD_VOICE:
            case e3.d4z.DM:
            case e3.d4z.GROUP_DM:
            case e3.d4z.PUBLIC_THREAD:
            case e3.d4z.PRIVATE_THREAD:
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
        return (0, r.jsx)(S.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar
        });
    }
    renderChat() {
        let { channel: e, nsfwAgree: t, guild: n, nsfwAllowed: i, needSubscriptionToAccess: l } = this.props;
        if ((s()(null != e, 'Missing channel in Channel.renderChat'), l))
            return (s()(null != n, 'premium channels must exist within a guild'), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, r.jsx)(K.Z, { guildId: n.id })
                : (0, r.jsx)(Y.l, {
                      guildId: n.id,
                      children: (0, r.jsx)(X.Z, {
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
                ti,
                {
                    channel: e,
                    guild: n,
                    sidebarState: t
                },
                e.id
            );
        }
        return (0, r.jsx)(
            eX.Z,
            {
                channel: e,
                guild: n,
                chatInputType: R.Ie.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: i, needSubscriptionToAccess: l, section: a, showCall: o, showActivityPanel: c } = this.props;
        if ((s()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || l));
        else if (a === e3.ULH.PROFILE && t.isPrivate() && !o && !c) return (0, r.jsx)(eA.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (a === e3.ULH.MEMBERS)
            switch (t.type) {
                case e3.d4z.GROUP_DM:
                    return (0, r.jsx)(_.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e3.d4z.GUILD_DIRECTORY:
                case e3.d4z.GUILD_FORUM:
                case e3.d4z.GUILD_MEDIA:
                case e3.d4z.GUILD_ANNOUNCEMENT:
                case e3.d4z.GUILD_TEXT:
                    var u;
                    let d = !0 === e3.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null != (u = t.guild_id) ? u : t.id;
                    return (0, r.jsx)(eJ.Z, { channel: t }, 'channel-members-'.concat(d));
                case e3.d4z.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, r.jsx)(eJ.Z, { channel: n }, 'channel-members-'.concat(n.id));
                    break;
                case e3.d4z.PUBLIC_THREAD:
                case e3.d4z.PRIVATE_THREAD:
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
        else if (a === e3.ULH.SEARCH && null != e) return (0, r.jsx)(ey.Z, { searchId: e });
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
                    (0, m.ZDy)(
                        async () => {
                            let { default: e } = await n.e('53900').then(n.bind(n, 784280));
                            return (n) => (0, r.jsx)(e, tr(tn({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => V.Z.viewPrompt(e6.r.REAL_NAME_PROMPT, t),
                            modalKey: 'Guild Hub Real Name Modal'
                        }
                    ),
                l &&
                    (0, m.ZDy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (n) => (0, r.jsx)(e, tr(tn({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => (0, ew.y0)(t, a),
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
        if (n === e3.ULH.SIDEBAR_CHAT && null != i) {
            if ((null == t ? void 0 : t.isNSFW()) && (!o || !a)) return null;
            switch (i.type) {
                case eC.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(eO.Z, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location
                    });
                    break;
                case eC.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? F.Z : eZ.Z;
                    e = (0, r.jsx)(n, { channelId: i.channelId });
                    break;
                case eC.tI.VIEW_CHANNEL:
                case eC.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != l && null == e)
            if (l.type !== eC.jL.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t } = l.details;
                return (0, r.jsx)('div', {
                    style: { width: e3.$Y6 },
                    className: te.guildSidebar,
                    children: (0, r.jsx)(z.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => ex.Z.closeGuildSidebar(e)
                    })
                });
            }
        if (null == e) return null;
        let c = (null == t ? void 0 : t.type) != null && e3.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            u = s - e3.PrS - c;
        return (
            (u += y.qO),
            (0, r.jsx)(eQ.Z, {
                sidebarType: (null == t ? void 0 : t.type) != null && e3.TPd.GUILD_THREADS_ONLY.has(t.type) ? eQ.y.PostSidebar : eQ.y.ThreadSidebar,
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
        if (i) return (0, r.jsx)(e$.Z, {});
        if (null == e) return (0, r.jsx)(e0.Z, { channelId: this.props.channelId });
        let f = o === e3.ULH.SIDEBAR_CHAT,
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
                    'data-has-border': e.type !== e3.d4z.GUILD_VOICE,
                    className: a()(te.chat, {
                        [te.threadSidebarOpen]: f || m,
                        [te.threadSidebarFloating]: f && p
                    }),
                    children: [
                        g
                            ? (0, r.jsx)(C.Z, {
                                  style: { right: f ? d : void 0 },
                                  className: te.uploadArea,
                                  channel: e,
                                  draftType: eL.d.ChannelMessage
                              })
                            : null,
                        h || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)('div', {
                            className: a()(te.content, { [te.noChat]: l === e3.AEg.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()]
                        })
                    ]
                }),
                this.renderThreadSidebar(),
                (0, r.jsx)(Q.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            tt(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            tt(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                null != e && (0, eb.Kh)(e.id);
            }),
            tt(this, '_handleContextMenu', (e, t) => {
                switch (t.type) {
                    case e3.d4z.GUILD_VOICE:
                    case e3.d4z.GUILD_ANNOUNCEMENT:
                    case e3.d4z.GUILD_TEXT:
                    case e3.d4z.GUILD_FORUM:
                    case e3.d4z.GUILD_MEDIA:
                        this.openChannelContextMenu(e, t);
                        break;
                    case e3.d4z.ANNOUNCEMENT_THREAD:
                    case e3.d4z.PUBLIC_THREAD:
                    case e3.d4z.PRIVATE_THREAD:
                        this.openThreadContextMenu(e, t);
                        break;
                    case e3.d4z.DM:
                        this.openDMContextMenu(e, t);
                }
            }),
            tt(this, 'handleContextMenu', (e) => {
                s()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel);
            }),
            tt(this, 'handleParentContextMenu', (e) => {
                s()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel);
            }),
            tt(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            tt(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                s()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, eT.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        sourceAnalyticsLocations: [N.Z.CHANNEL_HEADER]
                    });
            }),
            tt(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e2.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(W.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            tt(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, r.jsx)(M.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            tt(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e8.fO.STREAM
                    ? null
                    : (0, r.jsx)(
                          H.Z,
                          {
                              size: e1.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t
                          },
                          'live-indicator'
                      );
            }),
            tt(this, 'renderHeaderToolbar', () => {
                let { channel: e, parentChannel: t, isLurking: n, showCall: i, showActivityPanel: l } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let a = [];
                if (e.isSystemDM()) return a;
                switch (e.type) {
                    case e3.d4z.GUILD_STAGE_VOICE:
                    case e3.d4z.GUILD_VOICE:
                        break;
                    case e3.d4z.DM:
                        a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            a.push((0, r.jsx)(ea.Z, { channel: e }, 'calls')),
                            a.push((0, r.jsx)(ee.Z, { channel: e }, 'pins')),
                            a.push(
                                (0, r.jsx)(
                                    eo.Z,
                                    {
                                        channel: e,
                                        tooltip: e9.intl.string(e9.t.Xjlbvr),
                                        location: 'ChannelHeaderToolbar-DM-AddFriendsButton'
                                    },
                                    'invite'
                                )
                            ),
                            a.push(
                                (0, r.jsx)(
                                    eu.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: i || l
                                    },
                                    'profile'
                                )
                            ),
                            a.push((0, r.jsx)(es.Z, { channel: e }, 'safety_tools')),
                            a.push((0, r.jsx)(en.Z, { channel: e }, 'chat-wallpaper'));
                        break;
                    case e3.d4z.GROUP_DM:
                        if ((a.push(this.renderJoinRequestInterviewButtons()), a.push(this.renderClipsEnabledIndicatorToolbarItem()), a.push(this.renderStreamQualityLiveIndicatorToolbarItem()), a.push((0, r.jsx)(ea.Z, { channel: e }, 'calls')), a.push((0, r.jsx)(ee.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = e9.intl.string(e9.t.Xjlbvr);
                            a.push(
                                (0, r.jsx)(
                                    eo.Z,
                                    {
                                        channel: e,
                                        tooltip: t,
                                        location: 'ChannelHeaderToolbar-GroupDM-AddFriendsButton'
                                    },
                                    'invite'
                                )
                            );
                        }
                        a.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members')), a.push((0, r.jsx)(en.Z, { channel: e }, 'chat-wallpaper'));
                        break;
                    case e3.d4z.ANNOUNCEMENT_THREAD:
                    case e3.d4z.PRIVATE_THREAD:
                    case e3.d4z.PUBLIC_THREAD:
                        a.push((0, r.jsx)(eE.Z, { channel: e })), null == t || t.isForumLikeChannel() || a.push((0, r.jsx)(eI.Z, { channel: t }, 'browser')), e.isVocalThread() && a.push((0, r.jsx)(ec.Z, { channel: e }, 'thread-call')), a.push((0, r.jsx)(eS.Z, { channel: e }, 'notifications')), a.push((0, r.jsx)(ee.Z, { channel: e }, 'pins')), e.isArchivedThread() || a.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members')), null != t && (0, O.Lp)(e) && a.push((0, r.jsx)(et.Z, { channel: e }, 'summaries')), a.push((0, r.jsx)(eP.Z, { channel: e }, 'threads-overflow'));
                        break;
                    case e3.d4z.GUILD_ANNOUNCEMENT:
                    case e3.d4z.GUILD_TEXT:
                        a.push((0, r.jsx)(B.Z, { channel: e }, 'favorites')), a.push((0, r.jsx)(eI.Z, { channel: e }, 'browser')), n || a.push((0, r.jsx)($.Z, { channel: e }, 'notifications')), a.push((0, r.jsx)(ee.Z, { channel: e }, 'pins')), a.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members')), (0, O.Lp)(e) && a.push((0, r.jsx)(et.Z, { channel: e }, 'summaries'));
                        break;
                    case e3.d4z.GUILD_FORUM:
                    case e3.d4z.GUILD_MEDIA:
                        n || (a.push((0, r.jsx)(er.Z, { channel: e }, 'forum-onboarding')), a.push((0, r.jsx)($.Z, { channel: e }, 'notifications'))), __OVERLAY__ || a.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members'));
                        break;
                    case e3.d4z.GUILD_DIRECTORY:
                        a.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members'));
                }
                return a;
            }),
            tt(this, 'renderMobileToolbar', () => {
                let { channel: e } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e3.d4z.GUILD_STAGE_VOICE:
                    case e3.d4z.GUILD_VOICE:
                    case e3.d4z.DM:
                        break;
                    case e3.d4z.GROUP_DM:
                        t.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members'));
                        break;
                    case e3.d4z.ANNOUNCEMENT_THREAD:
                    case e3.d4z.PRIVATE_THREAD:
                    case e3.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members'));
                        break;
                    case e3.d4z.GUILD_ANNOUNCEMENT:
                    case e3.d4z.GUILD_TEXT:
                    case e3.d4z.GUILD_FORUM:
                    case e3.d4z.GUILD_MEDIA:
                    case e3.d4z.GUILD_DIRECTORY:
                        t.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members'));
                }
                return t;
            }),
            tt(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)(m.zxk, {
                          size: m.zxk.Sizes.MIN,
                          color: m.zxk.Colors.PRIMARY,
                          className: te.followButton,
                          onClick: () =>
                              (0, m.ZDy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) => (0, r.jsx)(e, tn({ channel: t }, n));
                              }),
                          children: e9.intl.string(e9.t['3aOv+v'])
                      })
                    : null;
            }),
            tt(this, 'renderHeaderBar', () => {
                let { channel: e, channelName: t, parentChannel: n, guild: i, guildId: l, showCall: o, showActivityPanel: c, hasVideo: u, showHeaderGuildBreadcrumb: d, isFavorites: p } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderBar'), s()(null != t, 'Should not be null if channel is not null.');
                let h = e.isDM() && !e.isSystemDM() ? this.openUserProfile : d ? () => (0, eb.Kh)(e.id) : void 0,
                    f = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                return (0, r.jsxs)('div', {
                    className: te.subtitleContainer,
                    children: [
                        (0, r.jsx)(m.f6W, {
                            theme: u && o ? e3.BRd.DARK : void 0,
                            children: (s) =>
                                (0, r.jsxs)(
                                    ei.Z,
                                    {
                                        guildId: l,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (p && !(0, e_.X)()),
                                        showDivider: p && !(0, e_.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: a()(te.title, s),
                                        transparent: o || c,
                                        'aria-label': e9.intl.string(e9.t.BIYAqa),
                                        children: [
                                            d &&
                                                (0, r.jsx)(el.TS, {
                                                    channel: e,
                                                    guild: i,
                                                    caretPosition: 'right'
                                                }),
                                            (0, el.ud)({
                                                channel: e,
                                                channelName: t,
                                                parentChannel: n,
                                                guild: i,
                                                hasVideo: u,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: h,
                                                handleParentClick: f,
                                                renderFollowButton: this.renderFollowButton
                                            }),
                                            (0, el.v0)(e, i)
                                        ]
                                    },
                                    'header-'.concat(e.id)
                                )
                        }),
                        (0, r.jsx)(em.Z, { channelId: e.id })
                    ]
                });
            });
    }
}
let ta = (0, j.Z)(tl),
    to = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, a] = i.useState(null),
            o = (0, p.e7)([ez.Z], () => ez.Z.getChannelId()),
            s = (0, p.e7)([ez.Z], () => ez.Z.getVoiceChannelId()),
            c = (0, p.e7)([eD.Z], () => (null != n ? n : eD.Z.getChannel(o)), [o, n]),
            m = (0, p.e7)([eD.Z], () => eD.Z.getChannel(s), [s]),
            b = null == c ? void 0 : c.parent_id,
            _ = (0, p.e7)([eD.Z], () => eD.Z.getChannel(b), [b]),
            y = (0, p.e7)([eF.Z], () => eF.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: x } = (0, q.Z)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            C = (0, p.e7)(
                [A.Z],
                () => {
                    let e = null != o ? A.Z.getParticipants(o) : [],
                        t = null != o ? A.Z.getActivityParticipants(o) : [];
                    return e.length - t.length > 0;
                },
                [o]
            ),
            v = (0, G.Z)(),
            j = (0, p.e7)([ez.Z], () => {
                var e;
                return (null != (e = null == v ? void 0 : v.channelId) ? e : ez.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
            }),
            S = (0, p.e7)([I.ZP], () => (null != c ? I.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            N = (0, p.e7)([eH.Z], () => eH.Z.isConnected()),
            w = (0, E.Z)(N),
            R = N && !1 === w;
        i.useEffect(() => {
            j &&
                R &&
                null != S &&
                null != c &&
                g.Z.selectParticipant(
                    c.id,
                    (0, T.gN)({
                        applicationId: S.applicationId,
                        instanceId: S.compositeInstanceId
                    })
                );
        }, [R, c, j, S]);
        let M = (0, p.e7)([I.ZP], () => I.ZP.getCurrentEmbeddedActivity()),
            k = (0, p.e7)([I.ZP], () => I.ZP.getActivityPanelMode()),
            D = null != M && !(0, P.Z)(null == c ? void 0 : c.id) && k === e7.Ez.PANEL,
            L = (0, p.e7)([eq.Z], () => null != c && c.isVocalThread() && !u().isEmpty(eq.Z.getVoiceStatesForChannel(c.id)), [c]),
            B = null != c && c.isPrivate() && !D && C,
            F = (null == c ? void 0 : c.isGuildVocal()) || B || L,
            { welcomeModalChannelId: H } = (0, d.TH)(),
            V = (0, p.e7)([eh.Z], () => null != c && eh.Z.isLurking(c.guild_id), [c]),
            z = (0, p.e7)([eR.Z], () => eR.Z.hasSeen(null == c ? void 0 : c.guild_id, V), [c, V]),
            W = (0, p.e7)([A.Z, I.ZP], () => (null != I.ZP.getConnectedActivityLocation() && I.ZP.getActivityPanelMode() === e7.Ez.PANEL ? (I.ZP.getFocusedLayout() === e7.MI.NO_CHAT ? e3.AEg.NO_CHAT : e3.AEg.NORMAL) : null != o ? A.Z.getLayout(o) : e3.AEg.NORMAL), [o]),
            Y = (0, p.e7)([A.Z], () => (null != c ? A.Z.getSelectedParticipant(c.id) : null)),
            K = (0, p.e7)([eY.default], () => eY.default.getCurrentUser()),
            X = (0, ed.Z)(null == y ? void 0 : y.id),
            Q = (0, eM.Z)(H, null == y ? void 0 : y.id),
            { section: J, channelSidebarState: $ } = (0, p.cj)(
                [ek.ZP],
                () => ({
                    section: ek.ZP.getSection(o, null == c ? void 0 : c.isDM()),
                    channelSidebarState: ek.ZP.getSidebarState(o)
                }),
                [o, c]
            ),
            ee = null == y ? void 0 : y.id,
            et = (0, p.e7)([ek.ZP], () => ek.ZP.getGuildSidebarState(ee), [ee]),
            en = (0, p.e7)([eW.Z], () => eW.Z.getGuildId()) === e3.I_8,
            er = (0, ef.D)(),
            ei = (0, eK.ZP)(c),
            el = (0, eK.ZP)(c, !0),
            ea = null != c && s === c.id,
            eo = null != c && c.isGuildStageVoice();
        (0, Z.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, eg.s1)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === e4.Df) {
                    let { channelId: e } = null != (n = (0, ep.Qj)(null == r || null == (t = r.location) ? void 0 : t.pathname)) ? n : {};
                    null != e && a(e);
                }
            }, []);
        let es = {
                channel: c,
                inCurrentVoiceChannel: ea
            },
            ec = i.useRef(es);
        i.useEffect(() => {
            ec.current = es;
        }),
            i.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = ec.current;
                null != l && null != e && eo && e.id === l && !t && ((0, ev.Cq)(e), a(null));
            }, [l, eo]);
        let eu = (0, O.ts)(c),
            em = null != c && c.isPrivate(),
            eb = (0, E.Z)(em),
            e_ = (0, E.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = eb && !em,
                t = eb && em && (null == c ? void 0 : c.id) !== e_;
            (e || t) && (0, U.EW)(h.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e5.L.AUTO });
        }, [null == c ? void 0 : c.id, e_, em, eb]);
        let ey = (0, f.f9)();
        return (0, r.jsx)(
            ta,
            tr(
                tn(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: o,
                        channel: c,
                        channelName: ei,
                        formattedChannelName: el,
                        parentChannel: _,
                        voiceChannel: m,
                        layout: W,
                        needSubscriptionToAccess: x,
                        isLurking: V,
                        hasModalOpen: ey,
                        section: J,
                        channelSidebarState: $,
                        guildSidebarState: et,
                        guild: y,
                        searchId: (0, p.e7)([eV.Z], () => eV.Z.getCurrentSearchId()),
                        showCall: !x && F,
                        showActivityPanel: D,
                        nsfwAgree: (0, p.e7)([eB.Z], () => eB.Z.didAgree(null == c ? void 0 : c.guild_id)),
                        isMobile: (0, p.e7)([eG.Z], () => (null == c ? void 0 : c.type) === e3.d4z.DM && eG.Z.isMobileOnline(c.getRecipientId()), [c]),
                        isUnavailable: (0, p.e7)([eU.Z], () => (null == c ? void 0 : c.guild_id) != null && eU.Z.isUnavailable(c.guild_id), [c]),
                        showRealNameModal: X,
                        showWelcomeModal: !z && Q,
                        showFollowButton: ((null == c ? void 0 : c.type) === e3.d4z.GUILD_ANNOUNCEMENT && (null == y ? void 0 : y.hasFeature(e3.oNc.NEWS))) || !1
                    },
                    (0, p.cj)([eq.Z], () => ({ hasVideo: null != c && eq.Z.hasVideo(c.id) }), [c])
                ),
                {
                    inCall: ea,
                    selectedParticipant: Y,
                    nsfwAllowed: (null == K ? void 0 : K.nsfwAllowed) === !0,
                    showChannelSummaries: eu,
                    isFavorites: en,
                    showHeaderGuildBreadcrumb: en || er,
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: D,
                    embeddedActivity: M
                }
            )
        );
    });
