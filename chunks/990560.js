n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(846293),
    r = n(820284),
    o = n(688810),
    d = n(107123),
    c = n(698441),
    u = n(427080),
    m = n(21599),
    _ = n(346542),
    h = n(665066),
    p = n(95701),
    g = n(961350),
    A = n(734057),
    f = n(71393),
    x = n(299091),
    C = n(576705),
    E = n(860689),
    I = n(876884),
    v = n(62350),
    b = n(882072),
    T = n(58262),
    S = n(309818),
    y = n(112007),
    N = n(877695),
    j = n(242907),
    L = n(168428),
    R = n(448894),
    P = n(818352),
    w = n(422844),
    D = n(49170),
    k = n(652215);
function O(e) {
    let { code: t, message: n, getAcceptInviteContext: O } = e,
        { invite: M, inviteError: U } = (0, a.cf)(
            [x.A],
            () => ({ invite: x.A.getInvite(t), inviteError: x.A.getInviteError(t) }),
            [t],
        ),
        G = null == M,
        B = (0, m._U)(t, n.id);
    l.useEffect(() => {
        G && s.Ay.resolveInvite(t, void 0, { inviteInstanceId: B });
    }, [t, G, B]);
    let F = M ?? { state: k.elq.RESOLVING, code: "" },
        { analyticsLocations: H } = (0, o.Ay)(),
        V = (0, a.bG)([f.A], () => (M?.guild != null ? f.A.getGuild(M.guild.id) : null), [M]),
        q = (0, a.bG)([A.A, C.A], () => {
            let e = M?.channel?.id;
            if (null == e) return !1;
            let t = A.A.getChannel(e);
            return null != t && C.A.canBasicChannel(k.hVb.VIEW_CHANNEL, t);
        }, [M]),
        W = (0, a.bG)([g.default], () => g.default.getId()),
        z = (0, a.bG)([c.Ay], () => c.Ay.getGuildScheduledEvent(F.guild_scheduled_event?.id), [F]),
        Y = () => {
            null != F.channel && s.Ay.transitionToInviteSync(F);
        },
        Q = function () {
            let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null == V && M?.guild != null ? E.DY(M.guild) : V;
            (0, h.g)({ guild: n, isMember: null != V, analyticsLocations: H }) === h.W.PROCEED &&
                s.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: O("Invite Button Embed", t),
                    autoJoin: e,
                });
        },
        K = (0, i.jsx)(y.A, {
            onTransitionToInviteChannel: Y,
            onAcceptInstantInvite: Q,
            currentUserId: W,
            guild: V,
            invite: F,
            message: n,
        });
    switch (F.state) {
        case k.elq.RESOLVING:
            K = (0, i.jsx)(L.A, {});
            break;
        case k.elq.EXPIRED:
        case k.elq.BANNED:
            K = (0, i.jsx)(j.A, { banned: F.state === k.elq.BANNED, author: n.author, channelId: n.channel_id });
            break;
        case k.elq.ERROR:
            K = (0, i.jsx)(b.A, { author: n.author, inviteError: U });
            break;
        default:
            switch ((0, _.On)(F)) {
                case _.Xd.GROUP_DM:
                    K = (0, i.jsx)(S.A, {
                        onTransitionToInviteChannel: Y,
                        onAcceptInstantInvite: Q,
                        currentUserId: W,
                        invite: F,
                        message: n,
                    });
                    break;
                case _.Xd.FRIEND:
                    K = (0, i.jsx)(T.A, { invite: F, message: n, getAcceptInviteContext: O });
                    break;
                default:
                    if ((0, _.G4)(F)) {
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
                    if ((0, _.ly)(F)) {
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
                    if ((0, _.oK)(F)) {
                        K = (0, i.jsx)(v.A, { invite: F, getAcceptInviteContext: O, message: n });
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
    return (0, i.jsx)(r.A, { section: k.JJy.INVITE_LINK, children: K });
}
