n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(846293),
    r = n(820284),
    o = n(688810),
    d = n(107123),
    c = n(698441),
    u = n(427080),
    _ = n(21599),
    m = n(346542),
    h = n(665066),
    p = n(95701),
    g = n(961350),
    A = n(734057),
    x = n(71393),
    f = n(299091),
    C = n(576705),
    E = n(860689),
    I = n(876884),
    v = n(62350),
    b = n(882072),
    T = n(58262),
    y = n(309818),
    S = n(112007),
    N = n(877695),
    j = n(242907),
    L = n(168428),
    R = n(448894),
    P = n(818352),
    w = n(422844),
    D = n(49170),
    M = n(652215);
function k(e) {
    let { code: t, message: n, getAcceptInviteContext: k } = e,
        { invite: O, inviteError: U } = (0, a.cf)(
            [f.A],
            () => ({ invite: f.A.getInvite(t), inviteError: f.A.getInviteError(t) }),
            [t],
        ),
        B = null == O,
        G = (0, _._U)(t, n.id);
    l.useEffect(() => {
        B && s.Ay.resolveInvite(t, void 0, { inviteInstanceId: G });
    }, [t, B, G]);
    let F = O ?? { state: M.elq.RESOLVING, code: "" },
        { analyticsLocations: H } = (0, o.Ay)(),
        V = (0, a.bG)([x.A], () => (O?.guild != null ? x.A.getGuild(O.guild.id) : null), [O]),
        q = (0, a.bG)([A.A, C.A], () => {
            let e = O?.channel?.id;
            if (null == e) return !1;
            let t = A.A.getChannel(e);
            return null != t && C.A.canBasicChannel(M.hVb.VIEW_CHANNEL, t);
        }, [O]),
        W = (0, a.bG)([g.default], () => g.default.getId()),
        z = (0, a.bG)([c.Ay], () => c.Ay.getGuildScheduledEvent(F.guild_scheduled_event?.id), [F]),
        Y = () => {
            null != F.channel && s.Ay.transitionToInviteSync(F);
        },
        Q = function () {
            let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null == V && O?.guild != null ? E.DY(O.guild) : V;
            (0, h.g)({ guild: n, isMember: null != V, analyticsLocations: H }) === h.W.PROCEED &&
                s.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: k("Invite Button Embed", t),
                    autoJoin: e,
                });
        },
        K = (0, i.jsx)(S.A, {
            onTransitionToInviteChannel: Y,
            onAcceptInstantInvite: Q,
            currentUserId: W,
            guild: V,
            invite: F,
            message: n,
        });
    switch (F.state) {
        case M.elq.RESOLVING:
            K = (0, i.jsx)(L.A, {});
            break;
        case M.elq.EXPIRED:
        case M.elq.BANNED:
            K = (0, i.jsx)(j.A, { banned: F.state === M.elq.BANNED, author: n.author, channelId: n.channel_id });
            break;
        case M.elq.ERROR:
            K = (0, i.jsx)(b.A, { author: n.author, inviteError: U });
            break;
        default:
            switch ((0, m.On)(F)) {
                case m.Xd.GROUP_DM:
                    K = (0, i.jsx)(y.A, {
                        onTransitionToInviteChannel: Y,
                        onAcceptInstantInvite: Q,
                        currentUserId: W,
                        invite: F,
                        message: n,
                    });
                    break;
                case m.Xd.FRIEND:
                    K = (0, i.jsx)(T.A, { invite: F, message: n, getAcceptInviteContext: k });
                    break;
                default:
                    if ((0, m.G4)(F)) {
                        if (null != F.channel && (0, p.OY)(F.channel).isGuildVoice()) {
                            if (
                                null != F.guild &&
                                (0, I.c)({ location: "InviteEmbed.isStreamInvite", guildId: F.guild.id }).enabled &&
                                q
                            ) {
                                K = (0, i.jsx)(D.A, {
                                    onTransitionToInviteChannel: Y,
                                    onAcceptInstantInvite: Q,
                                    invite: F,
                                    message: n,
                                });
                                break;
                            }
                            if ((0, w.MR)("InviteEmbed.isStreamInvite").enabled) {
                                K = (0, i.jsx)(P.A, {
                                    onTransitionToInviteChannel: Y,
                                    onAcceptInstantInvite: Q,
                                    currentUserId: W,
                                    guild: V,
                                    invite: F,
                                    message: n,
                                });
                                break;
                            }
                        }
                        K = (0, i.jsx)(R.A, {
                            onTransitionToInviteChannel: Y,
                            onAcceptInstantInvite: Q,
                            currentUserId: W,
                            message: n,
                            guild: V,
                            invite: F,
                        });
                        break;
                    }
                    if ((0, m.ly)(F)) {
                        K = (0, i.jsx)(u.Ay, {
                            guildScheduledEvent: z,
                            guild: F.guild,
                            channel: F.channel,
                            isMember: null != V,
                            onAcceptInstantInvite: Q,
                            onTransitionToInviteChannel: Y,
                        });
                        break;
                    }
                    if ((0, m.oK)(F)) {
                        K = (0, i.jsx)(v.A, { invite: F, getAcceptInviteContext: k, message: n });
                        break;
                    }
                    if (null != F.channel && (0, p.OY)(F.channel).isGuildVoice()) {
                        if (
                            null != F.guild &&
                            (0, I.c)({ location: "InviteEmbed.isGuildVoice", guildId: F.guild.id }).enabled &&
                            q
                        ) {
                            K = (0, i.jsx)(D.A, {
                                onTransitionToInviteChannel: Y,
                                onAcceptInstantInvite: Q,
                                invite: F,
                                message: n,
                            });
                            break;
                        }
                        if ((0, w.MR)("InviteEmbed.isGuildVoice").enabled) {
                            K = (0, i.jsx)(P.A, {
                                onTransitionToInviteChannel: Y,
                                onAcceptInstantInvite: Q,
                                currentUserId: W,
                                guild: V,
                                invite: F,
                                message: n,
                            });
                            break;
                        }
                    }
                    (0, d.v)(F) &&
                        (K = (0, i.jsx)(N.A, {
                            onTransitionToInviteChannel: Y,
                            onAcceptInstantInvite: Q,
                            isMemberOfGuild: null != V,
                            invite: F,
                            message: n,
                        }));
            }
    }
    return (0, i.jsx)(r.A, { section: M.JJy.INVITE_LINK, children: K });
}
