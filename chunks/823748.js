n.d(t, { Z: () => tr }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(512969),
    h = n(848246),
    p = n(442837),
    m = n(704215),
    f = n(952265),
    g = n(481060),
    _ = n(475179),
    C = n(239091),
    x = n(377993),
    v = n(697309),
    E = n(457868),
    I = n(561472),
    b = n(36311),
    Z = n(112724),
    N = n(902840),
    T = n(110924),
    S = n(317381),
    j = n(82888),
    y = n(917107),
    A = n(296797),
    P = n(413523),
    R = n(358221),
    M = n(677601),
    L = n(541716),
    k = n(236091),
    O = n(663993),
    D = n(252618),
    w = n(540059),
    U = n(201493),
    B = n(605236),
    F = n(174130),
    H = n(588322),
    G = n(446226),
    V = n(517525),
    z = n(445384),
    W = n(613464),
    q = n(705563),
    Y = n(730647),
    K = n(66999),
    X = n(826763),
    Q = n(180216),
    J = n(51486),
    $ = n(168843),
    ee = n(442336),
    et = n(57304),
    en = n(605953),
    ei = n(374306),
    el = n(984370),
    ea = n(910611),
    er = n(915718),
    es = n(518311),
    eo = n(180539),
    ec = n(882378),
    ed = n(207868),
    eu = n(576171),
    eh = n(754688),
    ep = n(41776),
    em = n(6242),
    ef = n(757692),
    eg = n(933843),
    e_ = n(134483),
    eC = n(703656),
    ex = n(359110),
    ev = n(854709),
    eE = n(14091),
    eI = n(6025),
    eb = n(897473),
    eZ = n(922482),
    eN = n(504185),
    eT = n(657218),
    eS = n(66556),
    ej = n(739830),
    ey = n(377929),
    eA = n(900157),
    eP = n(108427),
    eR = n(171368),
    eM = n(430670),
    eL = n(524329),
    ek = n(995532),
    eO = n(738643),
    eD = n(433355),
    ew = n(592125),
    eU = n(703558),
    eB = n(486472),
    eF = n(731290),
    eH = n(430824),
    eG = n(158776),
    eV = n(19780),
    ez = n(768119),
    eW = n(944486),
    eq = n(914010),
    eY = n(594174),
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
    e4 = n(918559),
    e6 = n(354459),
    e9 = n(921944),
    e8 = n(440493),
    e5 = n(157925),
    te = n(388032),
    tt = n(247627);
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
let ti = (0, O.Un)({
    createPromise: () => n.e('49131').then(n.bind(n, 434878)),
    webpackId: 434878,
    renderLoader: () =>
        (0, i.jsx)('div', {
            className: tt.loader,
            children: (0, i.jsx)(g.$jN, {})
        }),
    name: 'ForumChannel'
});
class tl extends l.PureComponent {
    componentDidMount() {
        (0, eP.e)('guild_channel');
    }
    componentDidUpdate(e) {
        null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({ topicExpanded: !1 }), this.openChannelModal();
    }
    openChannelContextMenu(e, t) {
        let { guild: l } = this.props;
        o()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            o()(null != l, 'Missing guild in Channel.openChannelContextMenu'),
            (0, C.jW)(e, async () => {
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
            (0, C.jW)(e, async () => {
                let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        channel: t
                    });
            });
    }
    openDMContextMenu(e, t) {
        o()(null != t, 'Missing channel in Channel.openDMContextMenu');
        let l = eY.default.getUser(t.getRecipientId());
        o()(null != l, 'Missing user in Channel.openDMContextMenu'),
            (0, C.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('56826'), n.e('95324')]).then(n.bind(n, 131404));
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
            case e7.d4z.GUILD_STAGE_VOICE:
                return (0, i.jsx)(eN.Z, { channel: e }, e.id);
            case e7.d4z.GUILD_VOICE:
            case e7.d4z.DM:
            case e7.d4z.GROUP_DM:
            case e7.d4z.PUBLIC_THREAD:
            case e7.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, i.jsx)(
                    M.Z,
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
        return (0, i.jsx)(j.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar
        });
    }
    renderChat() {
        let { channel: e, nsfwAgree: t, guild: n, nsfwAllowed: l, needSubscriptionToAccess: a } = this.props;
        if ((o()(null != e, 'Missing channel in Channel.renderChat'), a))
            return (o()(null != n, 'premium channels must exist within a guild'), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, i.jsx)(X.Z, { guildId: n.id })
                : (0, i.jsx)(Y.l, {
                      guildId: n.id,
                      children: (0, i.jsx)(Q.Z, {
                          channelId: e.id,
                          guildId: n.id
                      })
                  });
        if (e.isNSFW() && (!l || !t)) return (0, i.jsx)(b.Z, { guild: n });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                o()(null != n, 'directory channels must exist within a guild'),
                (0, i.jsx)(U.Z, {
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
                ti,
                {
                    channel: e,
                    guild: n,
                    sidebarState: t
                },
                e.id
            );
        }
        return (0, i.jsx)(
            eQ.Z,
            {
                channel: e,
                guild: n,
                chatInputType: L.Ie.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: l, needSubscriptionToAccess: a, section: r, showCall: s, showActivityPanel: c } = this.props;
        if ((o()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || a));
        else if (r === e7.ULH.PROFILE && t.isPrivate() && !s && !c) return (0, i.jsx)(eM.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (r === e7.ULH.MEMBERS)
            switch (t.type) {
                case e7.d4z.GROUP_DM:
                    return (0, i.jsx)(x.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e7.d4z.GUILD_DIRECTORY:
                case e7.d4z.GUILD_FORUM:
                case e7.d4z.GUILD_MEDIA:
                case e7.d4z.GUILD_ANNOUNCEMENT:
                case e7.d4z.GUILD_TEXT:
                    var d;
                    let u = !0 === e7.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (d = t.guild_id) && void 0 !== d ? d : t.id;
                    return (0, i.jsx)(e$.Z, { channel: t }, 'channel-members-'.concat(u));
                case e7.d4z.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, i.jsx)(e$.Z, { channel: n }, 'channel-members-'.concat(n.id));
                    break;
                case e7.d4z.PUBLIC_THREAD:
                case e7.d4z.PRIVATE_THREAD:
                    if (!t.isArchivedThread() && null != l)
                        return (0, i.jsx)(
                            E.Z,
                            {
                                channel: t,
                                guild: l
                            },
                            'channel-members-'.concat(t.id)
                        );
            }
        else if (r === e7.ULH.SEARCH && null != e) return (0, i.jsx)(eE.Z, { searchId: e });
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
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e('53900').then(n.bind(n, 784280));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    guildId: t
                                });
                        },
                        {
                            onCloseCallback: () => z.Z.viewPrompt(e8.r.REAL_NAME_PROMPT, t),
                            modalKey: 'Guild Hub Real Name Modal'
                        }
                    ),
                a &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    guildId: t
                                });
                        },
                        {
                            onCloseCallback: () => (0, eL.y0)(t, r),
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
        if (n === e7.ULH.SIDEBAR_CHAT && null != l) {
            if ((null == t ? void 0 : t.isNSFW()) && (!s || !r)) return null;
            switch (l.type) {
                case eb.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(eT.Z, {
                        parentChannelId: l.parentChannelId,
                        parentMessageId: l.parentMessageId,
                        location: l.location
                    });
                    break;
                case eb.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? H.Z : eA.Z;
                    e = (0, i.jsx)(n, { channelId: l.channelId });
                    break;
                case eb.tI.VIEW_CHANNEL:
                case eb.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != a && null == e) {
            if (a.type === eb.jL.GUILD_MEMBER_MOD_VIEW) {
                let { guildId: e, userId: t } = a.details;
                return (0, i.jsx)('div', {
                    style: { width: e7.$Y6 },
                    className: tt.guildSidebar,
                    children: (0, i.jsx)(W.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => eI.Z.closeGuildSidebar(e)
                    })
                });
            }
            return null;
        }
        if (null == e) return null;
        let d = (null == t ? void 0 : t.type) != null && e7.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            u = o - e7.PrS - d;
        return (
            c && (u += v.qO),
            (0, i.jsx)(eJ.Z, {
                sidebarType: (null == t ? void 0 : t.type) != null && e7.TPd.GUILD_THREADS_ONLY.has(t.type) ? eJ.y.PostSidebar : eJ.y.ThreadSidebar,
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
        if (l) return (0, i.jsx)(e0.Z, {});
        if (null == e) return (0, i.jsx)(e1.Z, { channelId: this.props.channelId });
        let m = s === e7.ULH.SIDEBAR_CHAT,
            f = null != c && !m,
            g = !e.isForumLikeChannel() && !o,
            _ = null == t ? void 0 : t.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(D.yY, {
                    location: _,
                    subsection: null != n ? n : void 0
                }),
                (0, i.jsxs)('div', {
                    'data-has-border': e.type !== e7.d4z.GUILD_VOICE,
                    className: r()(tt.chat, {
                        [tt.threadSidebarOpen]: m || f,
                        [tt.threadSidebarFloating]: m && h
                    }),
                    children: [
                        g
                            ? (0, i.jsx)(I.Z, {
                                  style: { right: m ? u : void 0 },
                                  className: tt.uploadArea,
                                  channel: e,
                                  draftType: eU.d.ChannelMessage
                              })
                            : null,
                        p || d ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)('div', {
                            className: r()(tt.content, { [tt.noChat]: a === e7.AEg.NO_CHAT }),
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
            tn(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            tn(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                null != e && (0, ex.Kh)(e.id);
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
                o()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel);
            }),
            tn(this, 'handleParentContextMenu', (e) => {
                o()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel);
            }),
            tn(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            tn(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                o()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, eR.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        analyticsLocation: { section: e7.jXE.CHANNEL_HEADER }
                    });
            }),
            tn(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e3.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, i.jsx)(q.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            tn(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, i.jsx)(k.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            tn(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e6.fO.STREAM
                    ? null
                    : (0, i.jsx)(
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
                let { channel: e, parentChannel: t, isLurking: n, showCall: l, showActivityPanel: a } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let r = [];
                if (e.isSystemDM()) return r;
                switch (e.type) {
                    case e7.d4z.GUILD_STAGE_VOICE:
                    case e7.d4z.GUILD_VOICE:
                        break;
                    case e7.d4z.DM:
                        r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            r.push((0, i.jsx)(er.Z, { channel: e }, 'calls')),
                            r.push((0, i.jsx)(et.Z, { channel: e }, 'pins')),
                            r.push(
                                (0, i.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        tooltip: te.intl.string(te.t.Xjlbvr)
                                    },
                                    'invite'
                                )
                            ),
                            r.push(
                                (0, i.jsx)(
                                    eo.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: l || a
                                    },
                                    'profile'
                                )
                            ),
                            r.push((0, i.jsx)(ec.Z, { channel: e }, 'safety_tools'));
                        break;
                    case e7.d4z.GROUP_DM:
                        if ((r.push(this.renderJoinRequestInterviewButtons()), r.push(this.renderClipsEnabledIndicatorToolbarItem()), r.push(this.renderStreamQualityLiveIndicatorToolbarItem()), r.push((0, i.jsx)(er.Z, { channel: e }, 'calls')), r.push((0, i.jsx)(et.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = te.intl.string(te.t.Xjlbvr);
                            r.push(
                                (0, i.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        tooltip: t
                                    },
                                    'invite'
                                )
                            );
                        }
                        r.push((0, i.jsx)($.Z, { channelId: e.id }, 'members'));
                        break;
                    case e7.d4z.ANNOUNCEMENT_THREAD:
                    case e7.d4z.PRIVATE_THREAD:
                    case e7.d4z.PUBLIC_THREAD:
                        null == t || t.isForumLikeChannel() || r.push((0, i.jsx)(eS.Z, { channel: t }, 'browser')), e.isVocalThread() && r.push((0, i.jsx)(ed.Z, { channel: e }, 'thread-call')), r.push((0, i.jsx)(ej.Z, { channel: e }, 'notifications')), r.push((0, i.jsx)(et.Z, { channel: e }, 'pins')), e.isArchivedThread() || r.push((0, i.jsx)($.Z, { channelId: e.id }, 'members')), null != t && (0, N.Lp)(e) && r.push((0, i.jsx)(en.Z, { channel: e }, 'summaries')), r.push((0, i.jsx)(ey.Z, { channel: e }, 'threads-overflow'));
                        break;
                    case e7.d4z.GUILD_ANNOUNCEMENT:
                    case e7.d4z.GUILD_TEXT:
                        r.push((0, i.jsx)(F.Z, { channel: e }, 'favorites')), r.push((0, i.jsx)(eS.Z, { channel: e }, 'browser')), n || r.push((0, i.jsx)(ee.Z, { channel: e }, 'notifications')), r.push((0, i.jsx)(et.Z, { channel: e }, 'pins')), r.push((0, i.jsx)($.Z, { channelId: e.id }, 'members')), (0, N.Lp)(e) && r.push((0, i.jsx)(en.Z, { channel: e }, 'summaries'));
                        break;
                    case e7.d4z.GUILD_FORUM:
                    case e7.d4z.GUILD_MEDIA:
                        n || (r.push((0, i.jsx)(ei.Z, { channel: e }, 'forum-onboarding')), r.push((0, i.jsx)(ee.Z, { channel: e }, 'notifications'))), __OVERLAY__ || r.push((0, i.jsx)($.Z, { channelId: e.id }, 'members'));
                        break;
                    case e7.d4z.GUILD_DIRECTORY:
                        r.push((0, i.jsx)($.Z, { channelId: e.id }, 'members'));
                }
                return r;
            }),
            tn(this, 'renderMobileToolbar', () => {
                let { channel: e } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e7.d4z.GUILD_STAGE_VOICE:
                    case e7.d4z.GUILD_VOICE:
                    case e7.d4z.DM:
                        break;
                    case e7.d4z.GROUP_DM:
                        t.push((0, i.jsx)($.Z, { channelId: e.id }, 'members'));
                        break;
                    case e7.d4z.ANNOUNCEMENT_THREAD:
                    case e7.d4z.PRIVATE_THREAD:
                    case e7.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, i.jsx)($.Z, { channelId: e.id }, 'members'));
                        break;
                    case e7.d4z.GUILD_ANNOUNCEMENT:
                    case e7.d4z.GUILD_TEXT:
                    case e7.d4z.GUILD_FORUM:
                    case e7.d4z.GUILD_MEDIA:
                    case e7.d4z.GUILD_DIRECTORY:
                        t.push((0, i.jsx)($.Z, { channelId: e.id }, 'members'));
                }
                return t;
            }),
            tn(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, i.jsx)(g.zxk, {
                          size: g.zxk.Sizes.MIN,
                          color: g.zxk.Colors.PRIMARY,
                          className: tt.followButton,
                          onClick: () =>
                              (0, g.ZDy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          channel: t,
                                          ...n
                                      });
                              }),
                          children: te.intl.string(te.t['3aOv+v'])
                      })
                    : null;
            }),
            tn(this, 'renderHeaderBar', () => {
                let { channel: e, channelName: t, parentChannel: n, guild: l, guildId: a, showCall: s, showActivityPanel: c, hasVideo: d, headerGuildBreadcrumbPosition: u, isFavorites: h } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderBar'), o()(null != t, 'Should not be null if channel is not null.');
                let p = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
                    m = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                return (0, i.jsxs)('div', {
                    className: tt.subtitleContainer,
                    children: [
                        (0, i.jsx)(g.f6W, {
                            theme: d && s ? e7.BRd.DARK : void 0,
                            children: (o) =>
                                (0, i.jsxs)(
                                    el.Z,
                                    {
                                        guildId: a,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (h && !(0, ev.X)()),
                                        showDivider: h && !(0, ev.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: r()(tt.title, o),
                                        transparent: s || c,
                                        'aria-label': te.intl.string(te.t.BIYAqa),
                                        children: [
                                            'left' === u &&
                                                (0, i.jsx)(ea.TS, {
                                                    channel: e,
                                                    guild: l,
                                                    caretPosition: 'right'
                                                }),
                                            (0, ea.ud)({
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
                                                (0, i.jsx)(ea.TS, {
                                                    channel: e,
                                                    guild: l,
                                                    caretPosition: 'left'
                                                }),
                                            (0, ea.v0)(e, l)
                                        ]
                                    },
                                    'header-'.concat(e.id)
                                )
                        }),
                        (0, i.jsx)(e_.Z, { channelId: e.id })
                    ]
                });
            });
    }
}
let ta = (0, Z.Z)(tl),
    tr = l.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [a, r] = l.useState(null),
            s = (0, p.e7)([eW.Z], () => eW.Z.getChannelId()),
            o = (0, p.e7)([eW.Z], () => eW.Z.getVoiceChannelId()),
            c = (0, p.e7)([ew.Z], () => (null != n ? n : ew.Z.getChannel(s)), [s, n]),
            g = (0, p.e7)([ew.Z], () => ew.Z.getChannel(o), [o]),
            C = null == c ? void 0 : c.parent_id,
            x = (0, p.e7)([ew.Z], () => ew.Z.getChannel(C), [C]),
            v = (0, p.e7)([eH.Z], () => eH.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: E } = (0, K.Z)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0),
            I = (0, p.e7)(
                [R.Z],
                () => {
                    let e = null != s ? R.Z.getParticipants(s) : [],
                        t = null != s ? R.Z.getActivityParticipants(s) : [];
                    return e.length - t.length > 0;
                },
                [s]
            ),
            b = (0, G.Z)(),
            Z = (0, p.e7)([eW.Z], () => {
                var e;
                return (null !== (e = null == b ? void 0 : b.channelId) && void 0 !== e ? e : eW.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
            }),
            j = (0, p.e7)([S.ZP], () => (null != c ? S.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            M = (0, p.e7)([eV.Z], () => eV.Z.isConnected()),
            L = (0, T.Z)(M),
            k = M && !1 === L;
        l.useEffect(() => {
            Z && k && null != j && null != c && _.Z.selectParticipant(c.id, (0, P.oW)(j.applicationId));
        }, [k, c, Z, j]);
        let O = (0, p.e7)([S.ZP], () => {
                var e;
                return S.ZP.getSelfEmbeddedActivityForChannel(null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : e7.lds);
            }),
            D = (0, p.e7)([S.ZP], () => S.ZP.getActivityPanelMode()),
            U = null != O && !(0, y.Z)(null == c ? void 0 : c.id) && D === e4.Ez.PANEL,
            F = (0, p.e7)([eK.Z], () => null != c && c.isVocalThread() && !d().isEmpty(eK.Z.getVoiceStatesForChannel(c.id)), [c]),
            H = null != c && c.isPrivate() && !U && I,
            V = (null == c ? void 0 : c.isGuildVocal()) || H || F,
            { welcomeModalChannelId: z } = (0, u.TH)(),
            W = (0, p.e7)([ep.Z], () => null != c && ep.Z.isLurking(c.guild_id), [c]),
            q = (0, p.e7)([ek.Z], () => ek.Z.hasSeen(null == c ? void 0 : c.guild_id, W), [c, W]),
            Y = (0, p.e7)([R.Z, S.ZP], () => (null != S.ZP.getConnectedActivityChannelId() && S.ZP.getActivityPanelMode() === e4.Ez.PANEL ? (S.ZP.getFocusedLayout() === e4.MI.NO_CHAT ? e7.AEg.NO_CHAT : e7.AEg.NORMAL) : null != s ? R.Z.getLayout(s) : e7.AEg.NORMAL), [s]),
            X = (0, p.e7)([R.Z], () => (null != c ? R.Z.getSelectedParticipant(c.id) : null)),
            Q = (0, p.e7)([eY.default], () => eY.default.getCurrentUser()),
            J = (0, eu.Z)(null == v ? void 0 : v.id),
            $ = (0, eO.Z)(z, null == v ? void 0 : v.id),
            { section: ee, channelSidebarState: et } = (0, p.cj)(
                [eD.ZP],
                () => ({
                    section: eD.ZP.getSection(s, null == c ? void 0 : c.isDM()),
                    channelSidebarState: eD.ZP.getSidebarState(s)
                }),
                [s, c]
            ),
            en = null == v ? void 0 : v.id,
            ei = (0, p.e7)([eD.ZP], () => eD.ZP.getGuildSidebarState(en), [en]),
            el = (0, p.e7)([eq.Z], () => eq.Z.getGuildId()) === e7.I_8,
            ea = (0, eg.So)(h.q.STREAM_HIGH_QUALITY),
            er = (0, ef.o)(X, Q),
            es = (0, em.lL)('Channel', !0, Q, er),
            eo = (0, eX.ZP)(c),
            ec = (0, eX.ZP)(c, !0),
            ed = null != c && o === c.id,
            e_ = null != c && c.isGuildStageVoice();
        (0, A.Z)({ onTransition: void 0 }),
            l.useEffect(() => {
                var e, t, n;
                let i = (0, eC.s1)();
                if ((null == i ? void 0 : null === (e = i.location) || void 0 === e ? void 0 : e.state) === e5.Df) {
                    let { channelId: e } = null !== (n = (0, eh.Qj)(null == i ? void 0 : null === (t = i.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
                    null != e && r(e);
                }
            }, []);
        let ex = {
                channel: c,
                inCurrentVoiceChannel: ed
            },
            ev = l.useRef(ex);
        l.useEffect(() => {
            ev.current = ex;
        }),
            l.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = ev.current;
                null != a && null != e && e_ && e.id === a && !t && ((0, eZ.Cq)(e), r(null));
            }, [a, e_]);
        let eE = (0, N.ts)(c),
            eI = null != c && c.isPrivate(),
            eb = (0, T.Z)(eI),
            eN = (0, T.Z)(null == c ? void 0 : c.id);
        l.useEffect(() => {
            let e = eb && !eI,
                t = eb && eI && (null == c ? void 0 : c.id) !== eN;
            (e || t) && (0, B.EW)(m.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e9.L.AUTO });
        }, [null == c ? void 0 : c.id, eN, eI, eb]);
        let eT = (0, f.f9)(),
            eS = (0, w.Q3)('Channel');
        return (0, i.jsx)(ta, {
            guildId: null == c ? void 0 : c.guild_id,
            channelId: s,
            channel: c,
            channelName: eo,
            formattedChannelName: ec,
            parentChannel: x,
            voiceChannel: g,
            layout: Y,
            needSubscriptionToAccess: E,
            isLurking: W,
            hasModalOpen: eT,
            section: ee,
            channelSidebarState: et,
            guildSidebarState: ei,
            guild: v,
            searchId: (0, p.e7)([ez.Z], () => ez.Z.getCurrentSearchId()),
            showCall: !E && V,
            showActivityPanel: U,
            nsfwAgree: (0, p.e7)([eF.Z], () => eF.Z.didAgree(null == c ? void 0 : c.guild_id)),
            isMobile: (0, p.e7)([eG.Z], () => (null == c ? void 0 : c.type) === e7.d4z.DM && eG.Z.isMobileOnline(c.getRecipientId()), [c]),
            isUnavailable: (0, p.e7)([eB.Z], () => (null == c ? void 0 : c.guild_id) != null && eB.Z.isUnavailable(c.guild_id), [c]),
            showRealNameModal: J,
            showWelcomeModal: !q && $,
            showFollowButton: ((null == c ? void 0 : c.type) === e7.d4z.GUILD_ANNOUNCEMENT && (null == v ? void 0 : v.hasFeature(e7.oNc.NEWS))) || !1,
            ...(0, p.cj)([eK.Z], () => ({ hasVideo: null != c && eK.Z.hasVideo(c.id) }), [c]),
            inCall: ed,
            selectedParticipant: X,
            nsfwAllowed: (null == Q ? void 0 : Q.nsfwAllowed) === !0,
            showChannelSummaries: eE,
            isFavorites: el,
            headerGuildBreadcrumbPosition: el ? 'left' : 'right',
            premiumIndicatorEnabled: ea || es.enabled,
            hasTextActivityInPanelMode: U,
            isRefreshEnabled: eS
        });
    });
