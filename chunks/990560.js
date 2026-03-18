n.d(t, { A: () => R });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(846293),
    s = n(820284),
    o = n(688810),
    d = n(107123),
    c = n(698441),
    u = n(427080),
    _ = n(346542),
    m = n(665066),
    h = n(95701),
    p = n(961350),
    g = n(71393),
    A = n(299091),
    x = n(860689),
    f = n(62350),
    C = n(882072),
    I = n(58262),
    E = n(309818),
    v = n(112007),
    b = n(877695),
    T = n(242907),
    y = n(168428),
    S = n(448894),
    N = n(818352),
    j = n(422844),
    L = n(652215);
function R(e) {
    let { code: t, message: n, getAcceptInviteContext: R } = e,
        { invite: P, inviteError: w } = (0, a.cf)(
            [A.A],
            () => ({ invite: A.A.getInvite(t), inviteError: A.A.getInviteError(t) }),
            [t],
        ),
        D = null == P;
    r.useEffect(() => {
        D && l.Ay.resolveInvite(t);
    }, [t, D]);
    let M = P ?? { state: L.elq.RESOLVING, code: "" },
        { analyticsLocations: k } = (0, o.Ay)(),
        O = (0, a.bG)([g.A], () => (P?.guild != null ? g.A.getGuild(P.guild.id) : null), [P]),
        U = (0, a.bG)([p.default], () => p.default.getId()),
        B = (0, a.bG)([c.Ay], () => c.Ay.getGuildScheduledEvent(M.guild_scheduled_event?.id), [M]),
        G = () => {
            null != M.channel && l.Ay.transitionToInviteSync(M);
        },
        F = function () {
            let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null == O && P?.guild != null ? x.DY(P.guild) : O;
            (0, m.g)({ guild: n, isMember: null != O, analyticsLocations: k }) === m.W.PROCEED &&
                l.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: R("Invite Button Embed"),
                    autoJoin: e,
                });
        },
        H = (0, i.jsx)(v.A, {
            onTransitionToInviteChannel: G,
            onAcceptInstantInvite: F,
            currentUserId: U,
            guild: O,
            invite: M,
            message: n,
        });
    switch (M.state) {
        case L.elq.RESOLVING:
            H = (0, i.jsx)(y.A, {});
            break;
        case L.elq.EXPIRED:
        case L.elq.BANNED:
            H = (0, i.jsx)(T.A, { banned: M.state === L.elq.BANNED, author: n.author, channelId: n.channel_id });
            break;
        case L.elq.ERROR:
            H = (0, i.jsx)(C.A, { author: n.author, inviteError: w });
            break;
        default:
            switch ((0, _.On)(M)) {
                case _.Xd.GROUP_DM:
                    H = (0, i.jsx)(E.A, {
                        onTransitionToInviteChannel: G,
                        onAcceptInstantInvite: F,
                        currentUserId: U,
                        invite: M,
                        message: n,
                    });
                    break;
                case _.Xd.FRIEND:
                    H = (0, i.jsx)(I.A, { invite: M, message: n, getAcceptInviteContext: R });
                    break;
                default:
                    if ((0, _.G4)(M)) {
                        if (
                            null != M.channel &&
                            (0, h.OY)(M.channel).isGuildVoice() &&
                            (0, j.MR)("InviteEmbed.isStreamInvite").enabled
                        ) {
                            H = (0, i.jsx)(N.A, {
                                onTransitionToInviteChannel: G,
                                onAcceptInstantInvite: F,
                                currentUserId: U,
                                guild: O,
                                invite: M,
                                message: n,
                            });
                            break;
                        }
                        H = (0, i.jsx)(S.A, {
                            onTransitionToInviteChannel: G,
                            onAcceptInstantInvite: F,
                            currentUserId: U,
                            message: n,
                            guild: O,
                            invite: M,
                        });
                        break;
                    }
                    if ((0, _.ly)(M)) {
                        H = (0, i.jsx)(u.Ay, {
                            guildScheduledEvent: B,
                            guild: M.guild,
                            channel: M.channel,
                            isMember: null != O,
                            onAcceptInstantInvite: F,
                            onTransitionToInviteChannel: G,
                        });
                        break;
                    }
                    if ((0, _.oK)(M)) {
                        H = (0, i.jsx)(f.A, { invite: M, getAcceptInviteContext: R, message: n });
                        break;
                    }
                    if (
                        null != M.channel &&
                        (0, h.OY)(M.channel).isGuildVoice() &&
                        (0, j.MR)("InviteEmbed.isGuildVoice").enabled
                    ) {
                        H = (0, i.jsx)(N.A, {
                            onTransitionToInviteChannel: G,
                            onAcceptInstantInvite: F,
                            currentUserId: U,
                            guild: O,
                            invite: M,
                            message: n,
                        });
                        break;
                    }
                    (0, d.v)(M) &&
                        (H = (0, i.jsx)(b.A, {
                            onTransitionToInviteChannel: G,
                            onAcceptInstantInvite: F,
                            isMemberOfGuild: null != O,
                            invite: M,
                            message: n,
                        }));
            }
    }
    return (0, i.jsx)(s.A, { section: L.JJy.INVITE_LINK, children: H });
}
