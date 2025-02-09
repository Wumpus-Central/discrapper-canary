n.d(t, { Z: () => tl }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(512969),
    h = n(442837),
    p = n(704215),
    m = n(952265),
    f = n(481060),
    g = n(475179),
    _ = n(239091),
    C = n(377993),
    x = n(697309),
    v = n(457868),
    E = n(561472),
    I = n(36311),
    b = n(112724),
    Z = n(902840),
    N = n(110924),
    T = n(317381),
    S = n(82888),
    j = n(917107),
    y = n(296797),
    A = n(413523),
    P = n(358221),
    R = n(677601),
    M = n(541716),
    L = n(236091),
    k = n(663993),
    O = n(252618),
    D = n(540059),
    w = n(201493),
    U = n(605236),
    B = n(174130),
    F = n(588322),
    H = n(446226),
    G = n(517525),
    V = n(445384),
    z = n(613464),
    W = n(705563),
    Y = n(730647),
    q = n(66999),
    K = n(826763),
    X = n(180216),
    J = n(51486),
    Q = n(168843),
    $ = n(442336),
    ee = n(57304),
    et = n(605953),
    en = n(374306),
    ei = n(984370),
    el = n(910611),
    ea = n(915718),
    er = n(518311),
    es = n(180539),
    eo = n(882378),
    ec = n(207868),
    ed = n(576171),
    eu = n(754688),
    eh = n(41776),
    ep = n(6242),
    em = n(757692),
    ef = n(134483),
    eg = n(703656),
    e_ = n(359110),
    eC = n(854709),
    ex = n(14091),
    ev = n(6025),
    eE = n(897473),
    eI = n(922482),
    eb = n(504185),
    eZ = n(657218),
    eN = n(66556),
    eT = n(739830),
    eS = n(377929),
    ej = n(900157),
    ey = n(108427),
    eA = n(171368),
    eP = n(430670),
    eR = n(524329),
    eM = n(995532),
    eL = n(738643),
    ek = n(433355),
    eO = n(592125),
    eD = n(703558),
    ew = n(486472),
    eU = n(731290),
    eB = n(430824),
    eF = n(158776),
    eH = n(19780),
    eG = n(768119),
    eV = n(944486),
    ez = n(914010),
    eW = n(594174),
    eY = n(979651),
    eq = n(933557),
    eK = n(287746),
    eX = n(325708),
    eJ = n(335615),
    eQ = n(992744),
    e$ = n(923029),
    e0 = n(194082),
    e1 = n(176505),
    e2 = n(981631),
    e3 = n(918559),
    e7 = n(354459),
    e4 = n(921944),
    e6 = n(440493),
    e9 = n(157925),
    e5 = n(388032),
    e8 = n(767839);
function te(e, t, n) {
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
let tt = (0, k.Un)({
    createPromise: () => n.e('49131').then(n.bind(n, 434878)),
    webpackId: 434878,
    renderLoader: () =>
        (0, i.jsx)('div', {
            className: e8.loader,
            children: (0, i.jsx)(f.$jN, {})
        }),
    name: 'ForumChannel'
});
class tn extends l.PureComponent {
    componentDidMount() {
        (0, ey.e)('guild_channel');
    }
    componentDidUpdate(e) {
        null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({ topicExpanded: !1 }), this.openChannelModal();
    }
    openChannelContextMenu(e, t) {
        let { guild: l } = this.props;
        o()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            o()(null != l, 'Missing guild in Channel.openChannelContextMenu'),
            (0, _.jW)(e, async () => {
                let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        channel: t,
                        guild: l
                    });
            });
    }
    openThreadContextMenu(e, t) {
        o()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            (0, _.jW)(e, async () => {
                let { default: e } = await n.e('78650').then(n.bind(n, 422200));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        channel: t
                    });
            });
    }
    openDMContextMenu(e, t) {
        o()(null != t, 'Missing channel in Channel.openDMContextMenu');
        let l = eW.default.getUser(t.getRecipientId());
        o()(null != l, 'Missing user in Channel.openDMContextMenu'),
            (0, _.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('56826'), n.e('59787')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: l,
                        channelSelected: !0,
                        channel: t
                    });
            });
    }
    shouldRenderCall() {
        let { channel: e, showCall: t, nsfwAllowed: n, nsfwAgree: i } = this.props;
        return (!(null == e ? void 0 : e.isNSFW()) || (n && i)) && t;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((o()(null != e, 'Missing channel in Channel.renderCall'), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e2.d4z.GUILD_STAGE_VOICE:
                return (0, i.jsx)(eb.Z, { channel: e }, e.id);
            case e2.d4z.GUILD_VOICE:
            case e2.d4z.DM:
            case e2.d4z.GROUP_DM:
            case e2.d4z.PUBLIC_THREAD:
            case e2.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, i.jsx)(
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
        if ((o()(null != e, 'Missing channel in Channel.renderEmbeddedActivityPanel'), t)) return null;
        let n = this.props.height - 200;
        return (0, i.jsx)(S.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar
        });
    }
    renderChat() {
        let { channel: e, nsfwAgree: t, guild: n, nsfwAllowed: l, needSubscriptionToAccess: a } = this.props;
        if ((o()(null != e, 'Missing channel in Channel.renderChat'), a))
            return (o()(null != n, 'premium channels must exist within a guild'), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, i.jsx)(K.Z, { guildId: n.id })
                : (0, i.jsx)(Y.l, {
                      guildId: n.id,
                      children: (0, i.jsx)(X.Z, {
                          channelId: e.id,
                          guildId: n.id
                      })
                  });
        if (e.isNSFW() && (!l || !t)) return (0, i.jsx)(I.Z, { guild: n });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                o()(null != n, 'directory channels must exist within a guild'),
                (0, i.jsx)(w.Z, {
                    channel: e,
                    guild: n
                })
            );
        if (e.isForumLikeChannel()) {
            o()(null != n, 'forum channels must exist within a guild');
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth
            };
            return (0, i.jsx)(
                tt,
                {
                    channel: e,
                    guild: n,
                    sidebarState: t
                },
                e.id
            );
        }
        return (0, i.jsx)(
            eK.Z,
            {
                channel: e,
                guild: n,
                chatInputType: M.Ie.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: l, needSubscriptionToAccess: a, section: r, showCall: s, showActivityPanel: c } = this.props;
        if ((o()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || a));
        else if (r === e2.ULH.PROFILE && t.isPrivate() && !s && !c) return (0, i.jsx)(eP.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (r === e2.ULH.MEMBERS)
            switch (t.type) {
                case e2.d4z.GROUP_DM:
                    return (0, i.jsx)(C.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e2.d4z.GUILD_DIRECTORY:
                case e2.d4z.GUILD_FORUM:
                case e2.d4z.GUILD_MEDIA:
                case e2.d4z.GUILD_ANNOUNCEMENT:
                case e2.d4z.GUILD_TEXT:
                    var d;
                    let u = !0 === e2.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (d = t.guild_id) && void 0 !== d ? d : t.id;
                    return (0, i.jsx)(eJ.Z, { channel: t }, 'channel-members-'.concat(u));
                case e2.d4z.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, i.jsx)(eJ.Z, { channel: n }, 'channel-members-'.concat(n.id));
                    break;
                case e2.d4z.PUBLIC_THREAD:
                case e2.d4z.PRIVATE_THREAD:
                    if (!t.isArchivedThread() && null != l)
                        return (0, i.jsx)(
                            v.Z,
                            {
                                channel: t,
                                guild: l
                            },
                            'channel-members-'.concat(t.id)
                        );
            }
        else if (r === e2.ULH.SEARCH && null != e) return (0, i.jsx)(ex.Z, { searchId: e });
        return null;
    }
    openChannelModal() {
        let { channel: e, guildId: t, hasModalOpen: l, showWelcomeModal: a, isLurking: r, isUnavailable: s, showRealNameModal: o } = this.props;
        return (
            null == e ||
                null == t ||
                s ||
                l ||
                (o &&
                    (0, f.ZDy)(
                        async () => {
                            let { default: e } = await n.e('53900').then(n.bind(n, 784280));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    guildId: t
                                });
                        },
                        {
                            onCloseCallback: () => V.Z.viewPrompt(e6.r.REAL_NAME_PROMPT, t),
                            modalKey: 'Guild Hub Real Name Modal'
                        }
                    ),
                a &&
                    (0, f.ZDy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    guildId: t
                                });
                        },
                        {
                            onCloseCallback: () => (0, eR.y0)(t, r),
                            modalKey: 'Guild Welcome Screen Modal'
                        }
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e;
        let { channel: t, section: n, channelSidebarState: l, guildSidebarState: a, nsfwAgree: r, nsfwAllowed: s, width: o, isRefreshEnabled: c } = this.props;
        if (null == a && null == l) return null;
        if (n === e2.ULH.SIDEBAR_CHAT && null != l) {
            if ((null == t ? void 0 : t.isNSFW()) && (!s || !r)) return null;
            switch (l.type) {
                case eE.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(eZ.Z, {
                        parentChannelId: l.parentChannelId,
                        parentMessageId: l.parentMessageId,
                        location: l.location
                    });
                    break;
                case eE.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? F.Z : ej.Z;
                    e = (0, i.jsx)(n, { channelId: l.channelId });
                    break;
                case eE.tI.VIEW_CHANNEL:
                case eE.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != a && null == e) {
            if (a.type === eE.jL.GUILD_MEMBER_MOD_VIEW) {
                let { guildId: e, userId: t } = a.details;
                return (0, i.jsx)('div', {
                    style: { width: e2.$Y6 },
                    className: e8.guildSidebar,
                    children: (0, i.jsx)(z.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => ev.Z.closeGuildSidebar(e)
                    })
                });
            }
            return null;
        }
        if (null == e) return null;
        let d = (null == t ? void 0 : t.type) != null && e2.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            u = o - e2.PrS - d;
        return (
            c && (u += x.qO),
            (0, i.jsx)(eX.Z, {
                sidebarType: (null == t ? void 0 : t.type) != null && e2.TPd.GUILD_THREADS_ONLY.has(t.type) ? eX.y.PostSidebar : eX.y.ThreadSidebar,
                maxWidth: u,
                onWidthChange: this.handleThreadSidebarResize,
                children: e
            })
        );
    }
    render() {
        let { channel: e, guild: t, formattedChannelName: n, isUnavailable: l, layout: a, section: s, hasModalOpen: o, guildSidebarState: c, hasTextActivityInPanelMode: d } = this.props,
            { threadSidebarWidth: u, isThreadSidebarFloating: h } = this.state,
            p = this.shouldRenderCall();
        if (l) return (0, i.jsx)(eQ.Z, {});
        if (null == e) return (0, i.jsx)(e$.Z, { channelId: this.props.channelId });
        let m = s === e2.ULH.SIDEBAR_CHAT,
            f = null != c && !m,
            g = !e.isForumLikeChannel() && !o,
            _ = null == t ? void 0 : t.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(O.yY, {
                    location: _,
                    subsection: null != n ? n : void 0
                }),
                (0, i.jsxs)('div', {
                    'data-has-border': e.type !== e2.d4z.GUILD_VOICE,
                    className: r()(e8.chat, {
                        [e8.threadSidebarOpen]: m || f,
                        [e8.threadSidebarFloating]: m && h
                    }),
                    children: [
                        g
                            ? (0, i.jsx)(E.Z, {
                                  style: { right: m ? u : void 0 },
                                  className: e8.uploadArea,
                                  channel: e,
                                  draftType: eD.d.ChannelMessage
                              })
                            : null,
                        p || d ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)('div', {
                            className: r()(e8.content, { [e8.noChat]: a === e2.AEg.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()]
                        })
                    ]
                }),
                this.renderThreadSidebar(),
                (0, i.jsx)(J.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            te(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            te(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                null != e && (0, e_.Kh)(e.id);
            }),
            te(this, '_handleContextMenu', (e, t) => {
                switch (t.type) {
                    case e2.d4z.GUILD_VOICE:
                    case e2.d4z.GUILD_ANNOUNCEMENT:
                    case e2.d4z.GUILD_TEXT:
                    case e2.d4z.GUILD_FORUM:
                    case e2.d4z.GUILD_MEDIA:
                        this.openChannelContextMenu(e, t);
                        break;
                    case e2.d4z.ANNOUNCEMENT_THREAD:
                    case e2.d4z.PUBLIC_THREAD:
                    case e2.d4z.PRIVATE_THREAD:
                        this.openThreadContextMenu(e, t);
                        break;
                    case e2.d4z.DM:
                        this.openDMContextMenu(e, t);
                }
            }),
            te(this, 'handleContextMenu', (e) => {
                o()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel);
            }),
            te(this, 'handleParentContextMenu', (e) => {
                o()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel);
            }),
            te(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            te(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                o()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, eA.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        analyticsLocation: { section: e2.jXE.CHANNEL_HEADER }
                    });
            }),
            te(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e1.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, i.jsx)(W.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            te(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, i.jsx)(L.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            te(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e7.fO.STREAM
                    ? null
                    : (0, i.jsx)(
                          G.Z,
                          {
                              size: e0.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t
                          },
                          'live-indicator'
                      );
            }),
            te(this, 'renderHeaderToolbar', () => {
                let { channel: e, parentChannel: t, isLurking: n, showCall: l, showActivityPanel: a } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let r = [];
                if (e.isSystemDM()) return r;
                switch (e.type) {
                    case e2.d4z.GUILD_STAGE_VOICE:
                    case e2.d4z.GUILD_VOICE:
                        break;
                    case e2.d4z.DM:
                        r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            r.push((0, i.jsx)(ea.Z, { channel: e }, 'calls')),
                            r.push((0, i.jsx)(ee.Z, { channel: e }, 'pins')),
                            r.push(
                                (0, i.jsx)(
                                    er.Z,
                                    {
                                        channel: e,
                                        tooltip: e5.intl.string(e5.t.Xjlbvr)
                                    },
                                    'invite'
                                )
                            ),
                            r.push(
                                (0, i.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: l || a
                                    },
                                    'profile'
                                )
                            ),
                            r.push((0, i.jsx)(eo.Z, { channel: e }, 'safety_tools'));
                        break;
                    case e2.d4z.GROUP_DM:
                        if ((r.push(this.renderJoinRequestInterviewButtons()), r.push(this.renderClipsEnabledIndicatorToolbarItem()), r.push(this.renderStreamQualityLiveIndicatorToolbarItem()), r.push((0, i.jsx)(ea.Z, { channel: e }, 'calls')), r.push((0, i.jsx)(ee.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = e5.intl.string(e5.t.Xjlbvr);
                            r.push(
                                (0, i.jsx)(
                                    er.Z,
                                    {
                                        channel: e,
                                        tooltip: t
                                    },
                                    'invite'
                                )
                            );
                        }
                        r.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.ANNOUNCEMENT_THREAD:
                    case e2.d4z.PRIVATE_THREAD:
                    case e2.d4z.PUBLIC_THREAD:
                        null == t || t.isForumLikeChannel() || r.push((0, i.jsx)(eN.Z, { channel: t }, 'browser')), e.isVocalThread() && r.push((0, i.jsx)(ec.Z, { channel: e }, 'thread-call')), r.push((0, i.jsx)(eT.Z, { channel: e }, 'notifications')), r.push((0, i.jsx)(ee.Z, { channel: e }, 'pins')), e.isArchivedThread() || r.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members')), null != t && (0, Z.Lp)(e) && r.push((0, i.jsx)(et.Z, { channel: e }, 'summaries')), r.push((0, i.jsx)(eS.Z, { channel: e }, 'threads-overflow'));
                        break;
                    case e2.d4z.GUILD_ANNOUNCEMENT:
                    case e2.d4z.GUILD_TEXT:
                        r.push((0, i.jsx)(B.Z, { channel: e }, 'favorites')), r.push((0, i.jsx)(eN.Z, { channel: e }, 'browser')), n || r.push((0, i.jsx)($.Z, { channel: e }, 'notifications')), r.push((0, i.jsx)(ee.Z, { channel: e }, 'pins')), r.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members')), (0, Z.Lp)(e) && r.push((0, i.jsx)(et.Z, { channel: e }, 'summaries'));
                        break;
                    case e2.d4z.GUILD_FORUM:
                    case e2.d4z.GUILD_MEDIA:
                        n || (r.push((0, i.jsx)(en.Z, { channel: e }, 'forum-onboarding')), r.push((0, i.jsx)($.Z, { channel: e }, 'notifications'))), __OVERLAY__ || r.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.GUILD_DIRECTORY:
                        r.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members'));
                }
                return r;
            }),
            te(this, 'renderMobileToolbar', () => {
                let { channel: e } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e2.d4z.GUILD_STAGE_VOICE:
                    case e2.d4z.GUILD_VOICE:
                    case e2.d4z.DM:
                        break;
                    case e2.d4z.GROUP_DM:
                        t.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.ANNOUNCEMENT_THREAD:
                    case e2.d4z.PRIVATE_THREAD:
                    case e2.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.GUILD_ANNOUNCEMENT:
                    case e2.d4z.GUILD_TEXT:
                    case e2.d4z.GUILD_FORUM:
                    case e2.d4z.GUILD_MEDIA:
                    case e2.d4z.GUILD_DIRECTORY:
                        t.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members'));
                }
                return t;
            }),
            te(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, i.jsx)(f.zxk, {
                          size: f.zxk.Sizes.MIN,
                          color: f.zxk.Colors.PRIMARY,
                          className: e8.followButton,
                          onClick: () =>
                              (0, f.ZDy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          channel: t,
                                          ...n
                                      });
                              }),
                          children: e5.intl.string(e5.t['3aOv+v'])
                      })
                    : null;
            }),
            te(this, 'renderHeaderBar', () => {
                let { channel: e, channelName: t, parentChannel: n, guild: l, guildId: a, showCall: s, showActivityPanel: c, hasVideo: d, headerGuildBreadcrumbPosition: u, isFavorites: h } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderBar'), o()(null != t, 'Should not be null if channel is not null.');
                let p = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
                    m = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                return (0, i.jsxs)('div', {
                    className: e8.subtitleContainer,
                    children: [
                        (0, i.jsx)(f.f6W, {
                            theme: d && s ? e2.BRd.DARK : void 0,
                            children: (o) =>
                                (0, i.jsxs)(
                                    ei.Z,
                                    {
                                        guildId: a,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (h && !(0, eC.X)()),
                                        showDivider: h && !(0, eC.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: r()(e8.title, o),
                                        transparent: s || c,
                                        'aria-label': e5.intl.string(e5.t.BIYAqa),
                                        children: [
                                            'left' === u &&
                                                (0, i.jsx)(el.TS, {
                                                    channel: e,
                                                    guild: l,
                                                    caretPosition: 'right'
                                                }),
                                            (0, el.ud)({
                                                channel: e,
                                                channelName: t,
                                                parentChannel: n,
                                                guild: l,
                                                hasVideo: d,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: p,
                                                handleParentClick: m,
                                                renderFollowButton: this.renderFollowButton
                                            }),
                                            'right' === u &&
                                                (0, i.jsx)(el.TS, {
                                                    channel: e,
                                                    guild: l,
                                                    caretPosition: 'left'
                                                }),
                                            (0, el.v0)(e, l)
                                        ]
                                    },
                                    'header-'.concat(e.id)
                                )
                        }),
                        (0, i.jsx)(ef.Z, { channelId: e.id })
                    ]
                });
            });
    }
}
let ti = (0, b.Z)(tn),
    tl = l.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [a, r] = l.useState(null),
            s = (0, h.e7)([eV.Z], () => eV.Z.getChannelId()),
            o = (0, h.e7)([eV.Z], () => eV.Z.getVoiceChannelId()),
            c = (0, h.e7)([eO.Z], () => (null != n ? n : eO.Z.getChannel(s)), [s, n]),
            f = (0, h.e7)([eO.Z], () => eO.Z.getChannel(o), [o]),
            _ = null == c ? void 0 : c.parent_id,
            C = (0, h.e7)([eO.Z], () => eO.Z.getChannel(_), [_]),
            x = (0, h.e7)([eB.Z], () => eB.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: v } = (0, q.Z)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0),
            E = (0, h.e7)(
                [P.Z],
                () => {
                    let e = null != s ? P.Z.getParticipants(s) : [],
                        t = null != s ? P.Z.getActivityParticipants(s) : [];
                    return e.length - t.length > 0;
                },
                [s]
            ),
            I = (0, H.Z)(),
            b = (0, h.e7)([eV.Z], () => {
                var e;
                return (null !== (e = null == I ? void 0 : I.channelId) && void 0 !== e ? e : eV.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
            }),
            S = (0, h.e7)([T.ZP], () => (null != c ? T.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            R = (0, h.e7)([eH.Z], () => eH.Z.isConnected()),
            M = (0, N.Z)(R),
            L = R && !1 === M;
        l.useEffect(() => {
            b && L && null != S && null != c && g.Z.selectParticipant(c.id, (0, A.oW)(S.applicationId));
        }, [L, c, b, S]);
        let k = (0, h.e7)([T.ZP], () => {
                var e;
                return T.ZP.getSelfEmbeddedActivityForChannel(null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : e2.lds);
            }),
            O = (0, h.e7)([T.ZP], () => T.ZP.getActivityPanelMode()),
            w = null != k && !(0, j.Z)(null == c ? void 0 : c.id) && O === e3.Ez.PANEL,
            B = (0, h.e7)([eY.Z], () => null != c && c.isVocalThread() && !d().isEmpty(eY.Z.getVoiceStatesForChannel(c.id)), [c]),
            F = null != c && c.isPrivate() && !w && E,
            G = (null == c ? void 0 : c.isGuildVocal()) || F || B,
            { welcomeModalChannelId: V } = (0, u.TH)(),
            z = (0, h.e7)([eh.Z], () => null != c && eh.Z.isLurking(c.guild_id), [c]),
            W = (0, h.e7)([eM.Z], () => eM.Z.hasSeen(null == c ? void 0 : c.guild_id, z), [c, z]),
            Y = (0, h.e7)([P.Z, T.ZP], () => (null != T.ZP.getConnectedActivityChannelId() && T.ZP.getActivityPanelMode() === e3.Ez.PANEL ? (T.ZP.getFocusedLayout() === e3.MI.NO_CHAT ? e2.AEg.NO_CHAT : e2.AEg.NORMAL) : null != s ? P.Z.getLayout(s) : e2.AEg.NORMAL), [s]),
            K = (0, h.e7)([P.Z], () => (null != c ? P.Z.getSelectedParticipant(c.id) : null)),
            X = (0, h.e7)([eW.default], () => eW.default.getCurrentUser()),
            J = (0, ed.Z)(null == x ? void 0 : x.id),
            Q = (0, eL.Z)(V, null == x ? void 0 : x.id),
            { section: $, channelSidebarState: ee } = (0, h.cj)(
                [ek.ZP],
                () => ({
                    section: ek.ZP.getSection(s, null == c ? void 0 : c.isDM()),
                    channelSidebarState: ek.ZP.getSidebarState(s)
                }),
                [s, c]
            ),
            et = null == x ? void 0 : x.id,
            en = (0, h.e7)([ek.ZP], () => ek.ZP.getGuildSidebarState(et), [et]),
            ei = (0, h.e7)([ez.Z], () => ez.Z.getGuildId()) === e2.I_8,
            el = (0, em.o)(K, X),
            ea = (0, ep.lL)('Channel', !0, X, el),
            er = (0, eq.ZP)(c),
            es = (0, eq.ZP)(c, !0),
            eo = null != c && o === c.id,
            ec = null != c && c.isGuildStageVoice();
        (0, y.Z)({ onTransition: void 0 }),
            l.useEffect(() => {
                var e, t, n;
                let i = (0, eg.s1)();
                if ((null == i ? void 0 : null === (e = i.location) || void 0 === e ? void 0 : e.state) === e9.Df) {
                    let { channelId: e } = null !== (n = (0, eu.Qj)(null == i ? void 0 : null === (t = i.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
                    null != e && r(e);
                }
            }, []);
        let ef = {
                channel: c,
                inCurrentVoiceChannel: eo
            },
            e_ = l.useRef(ef);
        l.useEffect(() => {
            e_.current = ef;
        }),
            l.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = e_.current;
                null != a && null != e && ec && e.id === a && !t && ((0, eI.Cq)(e), r(null));
            }, [a, ec]);
        let eC = (0, Z.ts)(c),
            ex = null != c && c.isPrivate(),
            ev = (0, N.Z)(ex),
            eE = (0, N.Z)(null == c ? void 0 : c.id);
        l.useEffect(() => {
            let e = ev && !ex,
                t = ev && ex && (null == c ? void 0 : c.id) !== eE;
            (e || t) && (0, U.EW)(p.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e4.L.AUTO });
        }, [null == c ? void 0 : c.id, eE, ex, ev]);
        let eb = (0, m.f9)(),
            eZ = (0, D.Q3)('Channel');
        return (0, i.jsx)(ti, {
            guildId: null == c ? void 0 : c.guild_id,
            channelId: s,
            channel: c,
            channelName: er,
            formattedChannelName: es,
            parentChannel: C,
            voiceChannel: f,
            layout: Y,
            needSubscriptionToAccess: v,
            isLurking: z,
            hasModalOpen: eb,
            section: $,
            channelSidebarState: ee,
            guildSidebarState: en,
            guild: x,
            searchId: (0, h.e7)([eG.Z], () => eG.Z.getCurrentSearchId()),
            showCall: !v && G,
            showActivityPanel: w,
            nsfwAgree: (0, h.e7)([eU.Z], () => eU.Z.didAgree(null == c ? void 0 : c.guild_id)),
            isMobile: (0, h.e7)([eF.Z], () => (null == c ? void 0 : c.type) === e2.d4z.DM && eF.Z.isMobileOnline(c.getRecipientId()), [c]),
            isUnavailable: (0, h.e7)([ew.Z], () => (null == c ? void 0 : c.guild_id) != null && ew.Z.isUnavailable(c.guild_id), [c]),
            showRealNameModal: J,
            showWelcomeModal: !W && Q,
            showFollowButton: ((null == c ? void 0 : c.type) === e2.d4z.GUILD_ANNOUNCEMENT && (null == x ? void 0 : x.hasFeature(e2.oNc.NEWS))) || !1,
            ...(0, h.cj)([eY.Z], () => ({ hasVideo: null != c && eY.Z.hasVideo(c.id) }), [c]),
            inCall: eo,
            selectedParticipant: K,
            nsfwAllowed: (null == X ? void 0 : X.nsfwAllowed) === !0,
            showChannelSummaries: eC,
            isFavorites: ei,
            headerGuildBreadcrumbPosition: ei ? 'left' : 'right',
            premiumIndicatorEnabled: ea.enabled,
            hasTextActivityInPanelMode: w,
            isRefreshEnabled: eZ
        });
    });
