n.d(t, { Z: () => to }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(392711),
    u = n.n(c),
    d = n(512969),
    p = n(442837),
    h = n(704215),
    f = n(952265),
    m = n(481060),
    g = n(475179),
    b = n(239091),
    _ = n(377993),
    C = n(697309),
    v = n(457868),
    y = n(561472),
    x = n(36311),
    j = n(112724),
    O = n(902840),
    N = n(110924),
    E = n(317381),
    P = n(82888),
    I = n(917107),
    S = n(296797),
    Z = n(413523),
    T = n(358221),
    A = n(677601),
    w = n(541716),
    R = n(236091),
    k = n(663993),
    M = n(252618),
    L = n(540059),
    D = n(201493),
    W = n(605236),
    U = n(174130),
    B = n(588322),
    F = n(446226),
    H = n(517525),
    G = n(445384),
    V = n(613464),
    z = n(705563),
    q = n(730647),
    Y = n(66999),
    K = n(826763),
    X = n(180216),
    Q = n(51486),
    J = n(168843),
    $ = n(442336),
    ee = n(57304),
    et = n(605953),
    en = n(374306),
    er = n(984370),
    ei = n(910611),
    el = n(915718),
    eo = n(518311),
    ea = n(180539),
    es = n(882378),
    ec = n(207868),
    eu = n(576171),
    ed = n(754688),
    ep = n(41776),
    eh = n(6242),
    ef = n(757692),
    em = n(134483),
    eg = n(703656),
    eb = n(359110),
    e_ = n(854709),
    eC = n(14091),
    ev = n(6025),
    ey = n(897473),
    ex = n(922482),
    ej = n(504185),
    eO = n(657218),
    eN = n(66556),
    eE = n(739830),
    eP = n(377929),
    eI = n(900157),
    eS = n(108427),
    eZ = n(171368),
    eT = n(430670),
    eA = n(524329),
    ew = n(995532),
    eR = n(738643),
    ek = n(433355),
    eM = n(592125),
    eL = n(703558),
    eD = n(486472),
    eW = n(731290),
    eU = n(430824),
    eB = n(158776),
    eF = n(19780),
    eH = n(768119),
    eG = n(944486),
    eV = n(914010),
    ez = n(594174),
    eq = n(979651),
    eY = n(933557),
    eK = n(287746),
    eX = n(325708),
    eQ = n(335615),
    eJ = n(992744),
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
    e8 = n(527194);
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
function tt(e) {
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
let tr = (0, k.Un)({
    createPromise: () => n.e('49131').then(n.bind(n, 434878)),
    webpackId: 434878,
    renderLoader: () =>
        (0, r.jsx)('div', {
            className: e8.loader,
            children: (0, r.jsx)(m.$jN, {})
        }),
    name: 'ForumChannel'
});
class ti extends i.PureComponent {
    componentDidMount() {
        (0, eS.e)('guild_channel');
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
                        tn(tt({}, n), {
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
                return (n) => (0, r.jsx)(e, tn(tt({}, n), { channel: t }));
            });
    }
    openDMContextMenu(e, t) {
        s()(null != t, 'Missing channel in Channel.openDMContextMenu');
        let i = ez.default.getUser(t.getRecipientId());
        s()(null != i, 'Missing user in Channel.openDMContextMenu'),
            (0, b.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('56826'), n.e('23284')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tn(tt({}, n), {
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
            case e2.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(ej.Z, { channel: e }, e.id);
            case e2.d4z.GUILD_VOICE:
            case e2.d4z.DM:
            case e2.d4z.GROUP_DM:
            case e2.d4z.PUBLIC_THREAD:
            case e2.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, r.jsx)(
                    A.Z,
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
                ? (0, r.jsx)(K.Z, { guildId: n.id })
                : (0, r.jsx)(q.l, {
                      guildId: n.id,
                      children: (0, r.jsx)(X.Z, {
                          channelId: e.id,
                          guildId: n.id
                      })
                  });
        if (e.isNSFW() && (!i || !t)) return (0, r.jsx)(x.Z, { guild: n });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                s()(null != n, 'directory channels must exist within a guild'),
                (0, r.jsx)(D.Z, {
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
                tr,
                {
                    channel: e,
                    guild: n,
                    sidebarState: t
                },
                e.id
            );
        }
        return (0, r.jsx)(
            eK.Z,
            {
                channel: e,
                guild: n,
                chatInputType: w.Ie.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: i, needSubscriptionToAccess: l, section: o, showCall: a, showActivityPanel: c } = this.props;
        if ((s()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || l));
        else if (o === e2.ULH.PROFILE && t.isPrivate() && !a && !c) return (0, r.jsx)(eT.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (o === e2.ULH.MEMBERS)
            switch (t.type) {
                case e2.d4z.GROUP_DM:
                    return (0, r.jsx)(_.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e2.d4z.GUILD_DIRECTORY:
                case e2.d4z.GUILD_FORUM:
                case e2.d4z.GUILD_MEDIA:
                case e2.d4z.GUILD_ANNOUNCEMENT:
                case e2.d4z.GUILD_TEXT:
                    var u;
                    let d = !0 === e2.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (u = t.guild_id) && void 0 !== u ? u : t.id;
                    return (0, r.jsx)(eQ.Z, { channel: t }, 'channel-members-'.concat(d));
                case e2.d4z.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, r.jsx)(eQ.Z, { channel: n }, 'channel-members-'.concat(n.id));
                    break;
                case e2.d4z.PUBLIC_THREAD:
                case e2.d4z.PRIVATE_THREAD:
                    if (!t.isArchivedThread() && null != i)
                        return (0, r.jsx)(
                            v.Z,
                            {
                                channel: t,
                                guild: i
                            },
                            'channel-members-'.concat(t.id)
                        );
            }
        else if (o === e2.ULH.SEARCH && null != e) return (0, r.jsx)(eC.Z, { searchId: e });
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
                            return (n) => (0, r.jsx)(e, tn(tt({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => G.Z.viewPrompt(e6.r.REAL_NAME_PROMPT, t),
                            modalKey: 'Guild Hub Real Name Modal'
                        }
                    ),
                l &&
                    (0, m.ZDy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (n) => (0, r.jsx)(e, tn(tt({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => (0, eA.y0)(t, o),
                            modalKey: 'Guild Welcome Screen Modal'
                        }
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e;
        let { channel: t, section: n, channelSidebarState: i, guildSidebarState: l, nsfwAgree: o, nsfwAllowed: a, width: s, isRefreshEnabled: c } = this.props;
        if (null == l && null == i) return null;
        if (n === e2.ULH.SIDEBAR_CHAT && null != i) {
            if ((null == t ? void 0 : t.isNSFW()) && (!a || !o)) return null;
            switch (i.type) {
                case ey.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(eO.Z, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location
                    });
                    break;
                case ey.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? B.Z : eI.Z;
                    e = (0, r.jsx)(n, { channelId: i.channelId });
                    break;
                case ey.tI.VIEW_CHANNEL:
                case ey.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != l && null == e) {
            if (l.type === ey.jL.GUILD_MEMBER_MOD_VIEW) {
                let { guildId: e, userId: t } = l.details;
                return (0, r.jsx)('div', {
                    style: { width: e2.$Y6 },
                    className: e8.guildSidebar,
                    children: (0, r.jsx)(V.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => ev.Z.closeGuildSidebar(e)
                    })
                });
            }
            return null;
        }
        if (null == e) return null;
        let u = (null == t ? void 0 : t.type) != null && e2.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            d = s - e2.PrS - u;
        return (
            c && (d += C.qO),
            (0, r.jsx)(eX.Z, {
                sidebarType: (null == t ? void 0 : t.type) != null && e2.TPd.GUILD_THREADS_ONLY.has(t.type) ? eX.y.PostSidebar : eX.y.ThreadSidebar,
                maxWidth: d,
                onWidthChange: this.handleThreadSidebarResize,
                children: e
            })
        );
    }
    render() {
        let { channel: e, guild: t, formattedChannelName: n, isUnavailable: i, layout: l, section: a, hasModalOpen: s, guildSidebarState: c, hasTextActivityInPanelMode: u } = this.props,
            { threadSidebarWidth: d, isThreadSidebarFloating: p } = this.state,
            h = this.shouldRenderCall();
        if (i) return (0, r.jsx)(eJ.Z, {});
        if (null == e) return (0, r.jsx)(e$.Z, { channelId: this.props.channelId });
        let f = a === e2.ULH.SIDEBAR_CHAT,
            m = null != c && !f,
            g = !e.isForumLikeChannel() && !s,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(M.yY, {
                    location: b,
                    subsection: null != n ? n : void 0
                }),
                (0, r.jsxs)('div', {
                    'data-has-border': e.type !== e2.d4z.GUILD_VOICE,
                    className: o()(e8.chat, {
                        [e8.threadSidebarOpen]: f || m,
                        [e8.threadSidebarFloating]: f && p
                    }),
                    children: [
                        g
                            ? (0, r.jsx)(y.Z, {
                                  style: { right: f ? d : void 0 },
                                  className: e8.uploadArea,
                                  channel: e,
                                  draftType: eL.d.ChannelMessage
                              })
                            : null,
                        h || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)('div', {
                            className: o()(e8.content, { [e8.noChat]: l === e2.AEg.NO_CHAT }),
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
            te(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            te(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                null != e && (0, eb.Kh)(e.id);
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
                s()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel);
            }),
            te(this, 'handleParentContextMenu', (e) => {
                s()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel);
            }),
            te(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            te(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                s()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, eZ.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        analyticsLocation: { section: e2.jXE.CHANNEL_HEADER }
                    });
            }),
            te(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e1.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(z.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            te(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, r.jsx)(R.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            te(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e7.fO.STREAM
                    ? null
                    : (0, r.jsx)(
                          H.Z,
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
                let { channel: e, parentChannel: t, isLurking: n, showCall: i, showActivityPanel: l } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let o = [];
                if (e.isSystemDM()) return o;
                switch (e.type) {
                    case e2.d4z.GUILD_STAGE_VOICE:
                    case e2.d4z.GUILD_VOICE:
                        break;
                    case e2.d4z.DM:
                        o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            o.push((0, r.jsx)(el.Z, { channel: e }, 'calls')),
                            o.push((0, r.jsx)(ee.Z, { channel: e }, 'pins')),
                            o.push(
                                (0, r.jsx)(
                                    eo.Z,
                                    {
                                        channel: e,
                                        tooltip: e5.NW.string(e5.t.Xjlbvr)
                                    },
                                    'invite'
                                )
                            ),
                            o.push(
                                (0, r.jsx)(
                                    ea.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: i || l
                                    },
                                    'profile'
                                )
                            ),
                            o.push((0, r.jsx)(es.Z, { channel: e }, 'safety_tools'));
                        break;
                    case e2.d4z.GROUP_DM:
                        if ((o.push(this.renderJoinRequestInterviewButtons()), o.push(this.renderClipsEnabledIndicatorToolbarItem()), o.push(this.renderStreamQualityLiveIndicatorToolbarItem()), o.push((0, r.jsx)(el.Z, { channel: e }, 'calls')), o.push((0, r.jsx)(ee.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = e5.NW.string(e5.t.Xjlbvr);
                            o.push(
                                (0, r.jsx)(
                                    eo.Z,
                                    {
                                        channel: e,
                                        tooltip: t
                                    },
                                    'invite'
                                )
                            );
                        }
                        o.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.ANNOUNCEMENT_THREAD:
                    case e2.d4z.PRIVATE_THREAD:
                    case e2.d4z.PUBLIC_THREAD:
                        null == t || t.isForumLikeChannel() || o.push((0, r.jsx)(eN.Z, { channel: t }, 'browser')), e.isVocalThread() && o.push((0, r.jsx)(ec.Z, { channel: e }, 'thread-call')), o.push((0, r.jsx)(eE.Z, { channel: e }, 'notifications')), o.push((0, r.jsx)(ee.Z, { channel: e }, 'pins')), e.isArchivedThread() || o.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members')), null != t && (0, O.Lp)(e) && o.push((0, r.jsx)(et.Z, { channel: e }, 'summaries')), o.push((0, r.jsx)(eP.Z, { channel: e }, 'threads-overflow'));
                        break;
                    case e2.d4z.GUILD_ANNOUNCEMENT:
                    case e2.d4z.GUILD_TEXT:
                        o.push((0, r.jsx)(U.Z, { channel: e }, 'favorites')), o.push((0, r.jsx)(eN.Z, { channel: e }, 'browser')), n || o.push((0, r.jsx)($.Z, { channel: e }, 'notifications')), o.push((0, r.jsx)(ee.Z, { channel: e }, 'pins')), o.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members')), (0, O.Lp)(e) && o.push((0, r.jsx)(et.Z, { channel: e }, 'summaries'));
                        break;
                    case e2.d4z.GUILD_FORUM:
                    case e2.d4z.GUILD_MEDIA:
                        n || (o.push((0, r.jsx)(en.Z, { channel: e }, 'forum-onboarding')), o.push((0, r.jsx)($.Z, { channel: e }, 'notifications'))), __OVERLAY__ || o.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.GUILD_DIRECTORY:
                        o.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members'));
                }
                return o;
            }),
            te(this, 'renderMobileToolbar', () => {
                let { channel: e } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e2.d4z.GUILD_STAGE_VOICE:
                    case e2.d4z.GUILD_VOICE:
                    case e2.d4z.DM:
                        break;
                    case e2.d4z.GROUP_DM:
                        t.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.ANNOUNCEMENT_THREAD:
                    case e2.d4z.PRIVATE_THREAD:
                    case e2.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.GUILD_ANNOUNCEMENT:
                    case e2.d4z.GUILD_TEXT:
                    case e2.d4z.GUILD_FORUM:
                    case e2.d4z.GUILD_MEDIA:
                    case e2.d4z.GUILD_DIRECTORY:
                        t.push((0, r.jsx)(J.Z, { channelId: e.id }, 'members'));
                }
                return t;
            }),
            te(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)(m.zxk, {
                          size: m.zxk.Sizes.MIN,
                          color: m.zxk.Colors.PRIMARY,
                          className: e8.followButton,
                          onClick: () =>
                              (0, m.ZDy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) => (0, r.jsx)(e, tt({ channel: t }, n));
                              }),
                          children: e5.NW.string(e5.t['3aOv+v'])
                      })
                    : null;
            }),
            te(this, 'renderHeaderBar', () => {
                let { channel: e, channelName: t, parentChannel: n, guild: i, guildId: l, showCall: a, showActivityPanel: c, hasVideo: u, headerGuildBreadcrumbPosition: d, isFavorites: p } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderBar'), s()(null != t, 'Should not be null if channel is not null.');
                let h = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
                    f = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                return (0, r.jsxs)('div', {
                    className: e8.subtitleContainer,
                    children: [
                        (0, r.jsx)(m.f6W, {
                            theme: u && a ? e2.BRd.DARK : void 0,
                            children: (s) =>
                                (0, r.jsxs)(
                                    er.Z,
                                    {
                                        guildId: l,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (p && !(0, e_.X)()),
                                        showDivider: p && !(0, e_.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: o()(e8.title, s),
                                        transparent: a || c,
                                        'aria-label': e5.NW.string(e5.t.BIYAqa),
                                        children: [
                                            'left' === d &&
                                                (0, r.jsx)(ei.TS, {
                                                    channel: e,
                                                    guild: i,
                                                    caretPosition: 'right'
                                                }),
                                            (0, ei.ud)({
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
                                            'right' === d &&
                                                (0, r.jsx)(ei.TS, {
                                                    channel: e,
                                                    guild: i,
                                                    caretPosition: 'left'
                                                }),
                                            (0, ei.v0)(e, i)
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
let tl = (0, j.Z)(ti),
    to = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, o] = i.useState(null),
            a = (0, p.e7)([eG.Z], () => eG.Z.getChannelId()),
            s = (0, p.e7)([eG.Z], () => eG.Z.getVoiceChannelId()),
            c = (0, p.e7)([eM.Z], () => (null != n ? n : eM.Z.getChannel(a)), [a, n]),
            m = (0, p.e7)([eM.Z], () => eM.Z.getChannel(s), [s]),
            b = null == c ? void 0 : c.parent_id,
            _ = (0, p.e7)([eM.Z], () => eM.Z.getChannel(b), [b]),
            C = (0, p.e7)([eU.Z], () => eU.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: v } = (0, Y.Z)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0),
            y = (0, p.e7)(
                [T.Z],
                () => {
                    let e = null != a ? T.Z.getParticipants(a) : [],
                        t = null != a ? T.Z.getActivityParticipants(a) : [];
                    return e.length - t.length > 0;
                },
                [a]
            ),
            x = (0, F.Z)(),
            j = (0, p.e7)([eG.Z], () => {
                var e;
                return (null !== (e = null == x ? void 0 : x.channelId) && void 0 !== e ? e : eG.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
            }),
            P = (0, p.e7)([E.ZP], () => (null != c ? E.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            A = (0, p.e7)([eF.Z], () => eF.Z.isConnected()),
            w = (0, N.Z)(A),
            R = A && !1 === w;
        i.useEffect(() => {
            j &&
                R &&
                null != P &&
                null != c &&
                g.Z.selectParticipant(
                    c.id,
                    (0, Z.gN)({
                        applicationId: P.applicationId,
                        instanceId: P.compositeInstanceId
                    })
                );
        }, [R, c, j, P]);
        let k = (0, p.e7)([E.ZP], () => {
                var e;
                return E.ZP.getSelfEmbeddedActivityForChannel(null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : e2.lds);
            }),
            M = (0, p.e7)([E.ZP], () => E.ZP.getActivityPanelMode()),
            D = null != k && !(0, I.Z)(null == c ? void 0 : c.id) && M === e3.Ez.PANEL,
            U = (0, p.e7)([eq.Z], () => null != c && c.isVocalThread() && !u().isEmpty(eq.Z.getVoiceStatesForChannel(c.id)), [c]),
            B = null != c && c.isPrivate() && !D && y,
            H = (null == c ? void 0 : c.isGuildVocal()) || B || U,
            { welcomeModalChannelId: G } = (0, d.TH)(),
            V = (0, p.e7)([ep.Z], () => null != c && ep.Z.isLurking(c.guild_id), [c]),
            z = (0, p.e7)([ew.Z], () => ew.Z.hasSeen(null == c ? void 0 : c.guild_id, V), [c, V]),
            q = (0, p.e7)([T.Z, E.ZP], () => (null != E.ZP.getConnectedActivityChannelId() && E.ZP.getActivityPanelMode() === e3.Ez.PANEL ? (E.ZP.getFocusedLayout() === e3.MI.NO_CHAT ? e2.AEg.NO_CHAT : e2.AEg.NORMAL) : null != a ? T.Z.getLayout(a) : e2.AEg.NORMAL), [a]),
            K = (0, p.e7)([T.Z], () => (null != c ? T.Z.getSelectedParticipant(c.id) : null)),
            X = (0, p.e7)([ez.default], () => ez.default.getCurrentUser()),
            Q = (0, eu.Z)(null == C ? void 0 : C.id),
            J = (0, eR.Z)(G, null == C ? void 0 : C.id),
            { section: $, channelSidebarState: ee } = (0, p.cj)(
                [ek.ZP],
                () => ({
                    section: ek.ZP.getSection(a, null == c ? void 0 : c.isDM()),
                    channelSidebarState: ek.ZP.getSidebarState(a)
                }),
                [a, c]
            ),
            et = null == C ? void 0 : C.id,
            en = (0, p.e7)([ek.ZP], () => ek.ZP.getGuildSidebarState(et), [et]),
            er = (0, p.e7)([eV.Z], () => eV.Z.getGuildId()) === e2.I_8,
            ei = (0, ef.o)(K, X),
            el = (0, eh.lL)('Channel', !0, X, ei),
            eo = (0, eY.ZP)(c),
            ea = (0, eY.ZP)(c, !0),
            es = null != c && s === c.id,
            ec = null != c && c.isGuildStageVoice();
        (0, S.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, eg.s1)();
                if ((null == r ? void 0 : null === (e = r.location) || void 0 === e ? void 0 : e.state) === e9.Df) {
                    let { channelId: e } = null !== (n = (0, ed.Qj)(null == r ? void 0 : null === (t = r.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
                    null != e && o(e);
                }
            }, []);
        let em = {
                channel: c,
                inCurrentVoiceChannel: es
            },
            eb = i.useRef(em);
        i.useEffect(() => {
            eb.current = em;
        }),
            i.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = eb.current;
                null != l && null != e && ec && e.id === l && !t && ((0, ex.Cq)(e), o(null));
            }, [l, ec]);
        let e_ = (0, O.ts)(c),
            eC = null != c && c.isPrivate(),
            ev = (0, N.Z)(eC),
            ey = (0, N.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = ev && !eC,
                t = ev && eC && (null == c ? void 0 : c.id) !== ey;
            (e || t) && (0, W.EW)(h.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e4.L.AUTO });
        }, [null == c ? void 0 : c.id, ey, eC, ev]);
        let ej = (0, f.f9)(),
            eO = (0, L.Q3)('Channel');
        return (0, r.jsx)(
            tl,
            tn(
                tt(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: a,
                        channel: c,
                        channelName: eo,
                        formattedChannelName: ea,
                        parentChannel: _,
                        voiceChannel: m,
                        layout: q,
                        needSubscriptionToAccess: v,
                        isLurking: V,
                        hasModalOpen: ej,
                        section: $,
                        channelSidebarState: ee,
                        guildSidebarState: en,
                        guild: C,
                        searchId: (0, p.e7)([eH.Z], () => eH.Z.getCurrentSearchId()),
                        showCall: !v && H,
                        showActivityPanel: D,
                        nsfwAgree: (0, p.e7)([eW.Z], () => eW.Z.didAgree(null == c ? void 0 : c.guild_id)),
                        isMobile: (0, p.e7)([eB.Z], () => (null == c ? void 0 : c.type) === e2.d4z.DM && eB.Z.isMobileOnline(c.getRecipientId()), [c]),
                        isUnavailable: (0, p.e7)([eD.Z], () => (null == c ? void 0 : c.guild_id) != null && eD.Z.isUnavailable(c.guild_id), [c]),
                        showRealNameModal: Q,
                        showWelcomeModal: !z && J,
                        showFollowButton: ((null == c ? void 0 : c.type) === e2.d4z.GUILD_ANNOUNCEMENT && (null == C ? void 0 : C.hasFeature(e2.oNc.NEWS))) || !1
                    },
                    (0, p.cj)([eq.Z], () => ({ hasVideo: null != c && eq.Z.hasVideo(c.id) }), [c])
                ),
                {
                    inCall: es,
                    selectedParticipant: K,
                    nsfwAllowed: (null == X ? void 0 : X.nsfwAllowed) === !0,
                    showChannelSummaries: e_,
                    isFavorites: er,
                    headerGuildBreadcrumbPosition: er ? 'left' : 'right',
                    premiumIndicatorEnabled: el.enabled,
                    hasTextActivityInPanelMode: D,
                    isRefreshEnabled: eO
                }
            )
        );
    });
