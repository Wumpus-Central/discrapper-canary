n.d(t, { Z: () => ts }), n(388685), n(539854);
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
    C = n(457868),
    x = n(561472),
    v = n(36311),
    j = n(112724),
    O = n(902840),
    E = n(110924),
    I = n(317381),
    P = n(82888),
    S = n(917107),
    Z = n(296797),
    N = n(100527),
    T = n(413523),
    A = n(358221),
    w = n(677601),
    R = n(541716),
    M = n(236091),
    k = n(663993),
    L = n(252618),
    D = n(540059),
    U = n(201493),
    B = n(605236),
    F = n(174130),
    G = n(588322),
    H = n(446226),
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
    ea = n(910611),
    eo = n(915718),
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
    ej = n(922482),
    eO = n(856393),
    eE = n(657218),
    eI = n(407908),
    eP = n(66556),
    eS = n(739830),
    eZ = n(377929),
    eN = n(900157),
    eT = n(108427),
    eA = n(892001),
    ew = n(402130),
    eR = n(524329),
    eM = n(995532),
    ek = n(738643),
    eL = n(433355),
    eD = n(592125),
    eU = n(703558),
    eB = n(486472),
    eF = n(731290),
    eG = n(430824),
    eH = n(158776),
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
    e4 = n(921944),
    e6 = n(440493),
    e9 = n(157925),
    te = n(388032),
    tt = n(100658);
function tn(e, t, n) {
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
function tr(e) {
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
                tn(e, t, n[t]);
            });
    }
    return e;
}
function ti(e, t) {
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
let tl = (0, k.Un)({
    createPromise: () => n.e('49131').then(n.bind(n, 346975)),
    webpackId: 346975,
    renderLoader: () =>
        (0, r.jsx)('div', {
            className: tt.loader,
            children: (0, r.jsx)(m.$jN, {})
        }),
    name: 'ForumChannel'
});
class ta extends i.PureComponent {
    componentDidMount() {
        (0, eT.e)('guild_channel');
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
                        ti(tr({}, n), {
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
                return (n) => (0, r.jsx)(e, ti(tr({}, n), { channel: t }));
            });
    }
    openDMContextMenu(e, t) {
        s()(null != t, 'Missing channel in Channel.openDMContextMenu');
        let i = eq.default.getUser(t.getRecipientId());
        s()(null != i, 'Missing user in Channel.openDMContextMenu'),
            (0, b.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('23331')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        ti(tr({}, n), {
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
            case e7.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(eO.Z, { channel: e }, e.id);
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
        return (0, r.jsx)(P.Z, {
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
                tl,
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
        let { searchId: e, channel: t, parentChannel: n, guild: i, needSubscriptionToAccess: l, section: a, showCall: o, showActivityPanel: c } = this.props;
        if ((s()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || l));
        else if (a === e7.ULH.PROFILE && t.isPrivate() && !o && !c) return (0, r.jsx)(ew.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (a === e7.ULH.MEMBERS)
            switch (t.type) {
                case e7.d4z.GROUP_DM:
                    return (0, r.jsx)(_.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e7.d4z.GUILD_DIRECTORY:
                case e7.d4z.GUILD_FORUM:
                case e7.d4z.GUILD_MEDIA:
                case e7.d4z.GUILD_ANNOUNCEMENT:
                case e7.d4z.GUILD_TEXT:
                    var u;
                    let d = !0 === e7.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null != (u = t.guild_id) ? u : t.id;
                    return (0, r.jsx)(e$.Z, { channel: t }, 'channel-members-'.concat(d));
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
        else if (a === e7.ULH.SEARCH && null != e) return (0, r.jsx)(eC.Z, { searchId: e });
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
                            return (n) => (0, r.jsx)(e, ti(tr({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => z.Z.viewPrompt(e6.r.REAL_NAME_PROMPT, t),
                            modalKey: 'Guild Hub Real Name Modal'
                        }
                    ),
                l &&
                    (0, m.ZDy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (n) => (0, r.jsx)(e, ti(tr({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => (0, eR.y0)(t, a),
                            modalKey: 'Guild Welcome Screen Modal'
                        }
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e,
            { channel: t, section: n, channelSidebarState: i, guildSidebarState: l, nsfwAgree: a, nsfwAllowed: o, width: s, isRefreshEnabled: c } = this.props;
        if (null == l && null == i) return null;
        if (n === e7.ULH.SIDEBAR_CHAT && null != i) {
            if ((null == t ? void 0 : t.isNSFW()) && (!o || !a)) return null;
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
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? G.Z : eN.Z;
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
                    className: tt.guildSidebar,
                    children: (0, r.jsx)(W.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => ex.Z.closeGuildSidebar(e)
                    })
                });
            }
        if (null == e) return null;
        let u = (null == t ? void 0 : t.type) != null && e7.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            d = s - e7.PrS - u;
        return (
            c && (d += y.qO),
            (0, r.jsx)(eJ.Z, {
                sidebarType: (null == t ? void 0 : t.type) != null && e7.TPd.GUILD_THREADS_ONLY.has(t.type) ? eJ.y.PostSidebar : eJ.y.ThreadSidebar,
                maxWidth: d,
                onWidthChange: this.handleThreadSidebarResize,
                children: e
            })
        );
    }
    render() {
        let { channel: e, guild: t, formattedChannelName: n, isUnavailable: i, layout: l, section: o, hasModalOpen: s, guildSidebarState: c, hasTextActivityInPanelMode: u } = this.props,
            { threadSidebarWidth: d, isThreadSidebarFloating: p } = this.state,
            h = this.shouldRenderCall();
        if (i) return (0, r.jsx)(e0.Z, {});
        if (null == e) return (0, r.jsx)(e1.Z, { channelId: this.props.channelId });
        let f = o === e7.ULH.SIDEBAR_CHAT,
            m = null != c && !f,
            g = !e.isForumLikeChannel() && !s,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(L.yY, {
                    location: b,
                    subsection: null != n ? n : void 0
                }),
                (0, r.jsxs)('div', {
                    'data-has-border': e.type !== e7.d4z.GUILD_VOICE,
                    className: a()(tt.chat, {
                        [tt.threadSidebarOpen]: f || m,
                        [tt.threadSidebarFloating]: f && p
                    }),
                    children: [
                        g
                            ? (0, r.jsx)(x.Z, {
                                  style: { right: f ? d : void 0 },
                                  className: tt.uploadArea,
                                  channel: e,
                                  draftType: eU.d.ChannelMessage
                              })
                            : null,
                        h || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)('div', {
                            className: a()(tt.content, { [tt.noChat]: l === e7.AEg.NO_CHAT }),
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
        super(...e),
            tn(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            tn(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                null != e && (0, e_.Kh)(e.id);
            }),
            tn(this, '_handleContextMenu', (e, t) => {
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
            tn(this, 'handleContextMenu', (e) => {
                s()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel);
            }),
            tn(this, 'handleParentContextMenu', (e) => {
                s()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel);
            }),
            tn(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            tn(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                s()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, eA.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        sourceAnalyticsLocations: [N.Z.CHANNEL_HEADER]
                    });
            }),
            tn(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e3.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(Y.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            tn(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, r.jsx)(M.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            tn(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
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
            tn(this, 'renderHeaderToolbar', () => {
                let { channel: e, parentChannel: t, isLurking: n, showCall: i, showActivityPanel: l } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let a = [];
                if (e.isSystemDM()) return a;
                switch (e.type) {
                    case e7.d4z.GUILD_STAGE_VOICE:
                    case e7.d4z.GUILD_VOICE:
                        break;
                    case e7.d4z.DM:
                        a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            a.push((0, r.jsx)(eo.Z, { channel: e }, 'calls')),
                            a.push((0, r.jsx)(et.Z, { channel: e }, 'pins')),
                            a.push(
                                (0, r.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        tooltip: te.intl.string(te.t.Xjlbvr),
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
                                        showCallOrActivityPanel: i || l
                                    },
                                    'profile'
                                )
                            ),
                            a.push((0, r.jsx)(ec.Z, { channel: e }, 'safety_tools')),
                            a.push((0, r.jsx)(er.Z, { channel: e }, 'chat-wallpaper'));
                        break;
                    case e7.d4z.GROUP_DM:
                        if ((a.push(this.renderJoinRequestInterviewButtons()), a.push(this.renderClipsEnabledIndicatorToolbarItem()), a.push(this.renderStreamQualityLiveIndicatorToolbarItem()), a.push((0, r.jsx)(eo.Z, { channel: e }, 'calls')), a.push((0, r.jsx)(et.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = te.intl.string(te.t.Xjlbvr);
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
                        a.push((0, r.jsx)($.Z, { channelId: e.id }, 'members')), a.push((0, r.jsx)(er.Z, { channel: e }, 'chat-wallpaper'));
                        break;
                    case e7.d4z.ANNOUNCEMENT_THREAD:
                    case e7.d4z.PRIVATE_THREAD:
                    case e7.d4z.PUBLIC_THREAD:
                        a.push((0, r.jsx)(eI.Z, { channel: e })), null == t || t.isForumLikeChannel() || a.push((0, r.jsx)(eP.Z, { channel: t }, 'browser')), e.isVocalThread() && a.push((0, r.jsx)(eu.Z, { channel: e }, 'thread-call')), a.push((0, r.jsx)(eS.Z, { channel: e }, 'notifications')), a.push((0, r.jsx)(et.Z, { channel: e }, 'pins')), e.isArchivedThread() || a.push((0, r.jsx)($.Z, { channelId: e.id }, 'members')), null != t && (0, O.Lp)(e) && a.push((0, r.jsx)(en.Z, { channel: e }, 'summaries')), a.push((0, r.jsx)(eZ.Z, { channel: e }, 'threads-overflow'));
                        break;
                    case e7.d4z.GUILD_ANNOUNCEMENT:
                    case e7.d4z.GUILD_TEXT:
                        a.push((0, r.jsx)(F.Z, { channel: e }, 'favorites')), a.push((0, r.jsx)(eP.Z, { channel: e }, 'browser')), n || a.push((0, r.jsx)(ee.Z, { channel: e }, 'notifications')), a.push((0, r.jsx)(et.Z, { channel: e }, 'pins')), a.push((0, r.jsx)($.Z, { channelId: e.id }, 'members')), (0, O.Lp)(e) && a.push((0, r.jsx)(en.Z, { channel: e }, 'summaries'));
                        break;
                    case e7.d4z.GUILD_FORUM:
                    case e7.d4z.GUILD_MEDIA:
                        n || (a.push((0, r.jsx)(ei.Z, { channel: e }, 'forum-onboarding')), a.push((0, r.jsx)(ee.Z, { channel: e }, 'notifications'))), __OVERLAY__ || a.push((0, r.jsx)($.Z, { channelId: e.id }, 'members'));
                        break;
                    case e7.d4z.GUILD_DIRECTORY:
                        a.push((0, r.jsx)($.Z, { channelId: e.id }, 'members'));
                }
                return a;
            }),
            tn(this, 'renderMobileToolbar', () => {
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
            tn(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)(m.zxk, {
                          size: m.zxk.Sizes.MIN,
                          color: m.zxk.Colors.PRIMARY,
                          className: tt.followButton,
                          onClick: () =>
                              (0, m.ZDy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) => (0, r.jsx)(e, tr({ channel: t }, n));
                              }),
                          children: te.intl.string(te.t['3aOv+v'])
                      })
                    : null;
            }),
            tn(this, 'renderHeaderBar', () => {
                let { channel: e, channelName: t, parentChannel: n, guild: i, guildId: l, showCall: o, showActivityPanel: c, hasVideo: u, showHeaderGuildBreadcrumb: d, isFavorites: p } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderBar'), s()(null != t, 'Should not be null if channel is not null.');
                let h = e.isDM() && !e.isSystemDM() ? this.openUserProfile : d ? () => (0, e_.Kh)(e.id) : void 0,
                    f = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                return (0, r.jsxs)('div', {
                    className: tt.subtitleContainer,
                    children: [
                        (0, r.jsx)(m.f6W, {
                            theme: u && o ? e7.BRd.DARK : void 0,
                            children: (s) =>
                                (0, r.jsxs)(
                                    el.Z,
                                    {
                                        guildId: l,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (p && !(0, ey.X)()),
                                        showDivider: p && !(0, ey.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: a()(tt.title, s),
                                        transparent: o || c,
                                        'aria-label': te.intl.string(te.t.BIYAqa),
                                        children: [
                                            d &&
                                                (0, r.jsx)(ea.TS, {
                                                    channel: e,
                                                    guild: i,
                                                    caretPosition: 'right'
                                                }),
                                            (0, ea.ud)({
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
                                            (0, ea.v0)(e, i)
                                        ]
                                    },
                                    'header-'.concat(e.id)
                                )
                        }),
                        (0, r.jsx)(eg.Z, { channelId: e.id })
                    ]
                });
            });
    }
}
let to = (0, j.Z)(ta),
    ts = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, a] = i.useState(null),
            o = (0, p.e7)([eW.Z], () => eW.Z.getChannelId()),
            s = (0, p.e7)([eW.Z], () => eW.Z.getVoiceChannelId()),
            c = (0, p.e7)([eD.Z], () => (null != n ? n : eD.Z.getChannel(o)), [o, n]),
            m = (0, p.e7)([eD.Z], () => eD.Z.getChannel(s), [s]),
            b = null == c ? void 0 : c.parent_id,
            _ = (0, p.e7)([eD.Z], () => eD.Z.getChannel(b), [b]),
            y = (0, p.e7)([eG.Z], () => eG.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: C } = (0, K.Z)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            x = (0, p.e7)(
                [A.Z],
                () => {
                    let e = null != o ? A.Z.getParticipants(o) : [],
                        t = null != o ? A.Z.getActivityParticipants(o) : [];
                    return e.length - t.length > 0;
                },
                [o]
            ),
            v = (0, H.Z)(),
            j = (0, p.e7)([eW.Z], () => {
                var e;
                return (null != (e = null == v ? void 0 : v.channelId) ? e : eW.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
            }),
            P = (0, p.e7)([I.ZP], () => (null != c ? I.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            N = (0, p.e7)([eV.Z], () => eV.Z.isConnected()),
            w = (0, E.Z)(N),
            R = N && !1 === w;
        i.useEffect(() => {
            j &&
                R &&
                null != P &&
                null != c &&
                g.Z.selectParticipant(
                    c.id,
                    (0, T.gN)({
                        applicationId: P.applicationId,
                        instanceId: P.compositeInstanceId
                    })
                );
        }, [R, c, j, P]);
        let M = (0, p.e7)([I.ZP], () => I.ZP.getCurrentEmbeddedActivity()),
            k = (0, p.e7)([I.ZP], () => I.ZP.getActivityPanelMode()),
            L = null != M && !(0, S.Z)(null == c ? void 0 : c.id) && k === e8.Ez.PANEL,
            U = (0, p.e7)([eK.Z], () => null != c && c.isVocalThread() && !u().isEmpty(eK.Z.getVoiceStatesForChannel(c.id)), [c]),
            F = null != c && c.isPrivate() && !L && x,
            G = (null == c ? void 0 : c.isGuildVocal()) || F || U,
            { welcomeModalChannelId: V } = (0, d.TH)(),
            z = (0, p.e7)([ef.Z], () => null != c && ef.Z.isLurking(c.guild_id), [c]),
            W = (0, p.e7)([eM.Z], () => eM.Z.hasSeen(null == c ? void 0 : c.guild_id, z), [c, z]),
            Y = (0, p.e7)([A.Z, I.ZP], () => (null != I.ZP.getConnectedActivityLocation() && I.ZP.getActivityPanelMode() === e8.Ez.PANEL ? (I.ZP.getFocusedLayout() === e8.MI.NO_CHAT ? e7.AEg.NO_CHAT : e7.AEg.NORMAL) : null != o ? A.Z.getLayout(o) : e7.AEg.NORMAL), [o]),
            q = (0, p.e7)([A.Z], () => (null != c ? A.Z.getSelectedParticipant(c.id) : null)),
            X = (0, p.e7)([eq.default], () => eq.default.getCurrentUser()),
            Q = (0, ep.Z)(null == y ? void 0 : y.id),
            J = (0, ek.Z)(V, null == y ? void 0 : y.id),
            { section: $, channelSidebarState: ee } = (0, p.cj)(
                [eL.ZP],
                () => ({
                    section: eL.ZP.getSection(o, null == c ? void 0 : c.isDM()),
                    channelSidebarState: eL.ZP.getSidebarState(o)
                }),
                [o, c]
            ),
            et = null == y ? void 0 : y.id,
            en = (0, p.e7)([eL.ZP], () => eL.ZP.getGuildSidebarState(et), [et]),
            er = (0, p.e7)([eY.Z], () => eY.Z.getGuildId()) === e7.I_8,
            ei = (0, em.D)(),
            el = (0, eX.ZP)(c),
            ea = (0, eX.ZP)(c, !0),
            eo = null != c && s === c.id,
            es = null != c && c.isGuildStageVoice();
        (0, Z.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, eb.s1)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === e9.Df) {
                    let { channelId: e } = null != (n = (0, eh.Qj)(null == r || null == (t = r.location) ? void 0 : t.pathname)) ? n : {};
                    null != e && a(e);
                }
            }, []);
        let ec = {
                channel: c,
                inCurrentVoiceChannel: eo
            },
            eu = i.useRef(ec);
        i.useEffect(() => {
            eu.current = ec;
        }),
            i.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = eu.current;
                null != l && null != e && es && e.id === l && !t && ((0, ej.Cq)(e), a(null));
            }, [l, es]);
        let ed = (0, O.ts)(c),
            eg = null != c && c.isPrivate(),
            e_ = (0, E.Z)(eg),
            ey = (0, E.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = e_ && !eg,
                t = e_ && eg && (null == c ? void 0 : c.id) !== ey;
            (e || t) && (0, B.EW)(h.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e4.L.AUTO });
        }, [null == c ? void 0 : c.id, ey, eg, e_]);
        let eC = (0, f.f9)(),
            ex = (0, D.Q3)('Channel');
        return (0, r.jsx)(
            to,
            ti(
                tr(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: o,
                        channel: c,
                        channelName: el,
                        formattedChannelName: ea,
                        parentChannel: _,
                        voiceChannel: m,
                        layout: Y,
                        needSubscriptionToAccess: C,
                        isLurking: z,
                        hasModalOpen: eC,
                        section: $,
                        channelSidebarState: ee,
                        guildSidebarState: en,
                        guild: y,
                        searchId: (0, p.e7)([ez.Z], () => ez.Z.getCurrentSearchId()),
                        showCall: !C && G,
                        showActivityPanel: L,
                        nsfwAgree: (0, p.e7)([eF.Z], () => eF.Z.didAgree(null == c ? void 0 : c.guild_id)),
                        isMobile: (0, p.e7)([eH.Z], () => (null == c ? void 0 : c.type) === e7.d4z.DM && eH.Z.isMobileOnline(c.getRecipientId()), [c]),
                        isUnavailable: (0, p.e7)([eB.Z], () => (null == c ? void 0 : c.guild_id) != null && eB.Z.isUnavailable(c.guild_id), [c]),
                        showRealNameModal: Q,
                        showWelcomeModal: !W && J,
                        showFollowButton: ((null == c ? void 0 : c.type) === e7.d4z.GUILD_ANNOUNCEMENT && (null == y ? void 0 : y.hasFeature(e7.oNc.NEWS))) || !1
                    },
                    (0, p.cj)([eK.Z], () => ({ hasVideo: null != c && eK.Z.hasVideo(c.id) }), [c])
                ),
                {
                    inCall: eo,
                    selectedParticipant: q,
                    nsfwAllowed: (null == X ? void 0 : X.nsfwAllowed) === !0,
                    showChannelSummaries: ed,
                    isFavorites: er,
                    showHeaderGuildBreadcrumb: er || ei,
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: L,
                    isRefreshEnabled: ex,
                    embeddedActivity: M
                }
            )
        );
    });
