n.d(t, { A: () => R });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(846293),
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
    S = n(168428),
    y = n(448894),
    N = n(818352),
    j = n(422844),
    L = n(652215);
function R(e) {
    let { code: t, message: n, getAcceptInviteContext: R } = e,
        { invite: P, inviteError: M } = (0, l.cf)(
            [A.A],
            () => ({ invite: A.A.getInvite(t), inviteError: A.A.getInviteError(t) }),
            [t],
        ),
        D = null == P;
    r.useEffect(() => {
        D && a.Ay.resolveInvite(t);
    }, [t, D]);
    let w = P ?? { state: L.elq.RESOLVING, code: "" },
        { analyticsLocations: O } = (0, o.Ay)(),
        k = (0, l.bG)([g.A], () => (P?.guild != null ? g.A.getGuild(P.guild.id) : null), [P]),
        U = (0, l.bG)([p.default], () => p.default.getId()),
        G = (0, l.bG)([c.Ay], () => c.Ay.getGuildScheduledEvent(w.guild_scheduled_event?.id), [w]),
        B = () => {
            null != w.channel && a.Ay.transitionToInviteSync(w);
        },
        F = () => {
            let e = null == k && P?.guild != null ? x.DY(P.guild) : k;
            (0, m.g)({ guild: e, isMember: null != k, analyticsLocations: O }) === m.W.PROCEED &&
                a.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t, context: R("Invite Button Embed") });
        },
        H = (0, i.jsx)(v.A, {
            onTransitionToInviteChannel: B,
            onAcceptInstantInvite: F,
            currentUserId: U,
            guild: k,
            invite: w,
            message: n,
        });
    switch (w.state) {
        case L.elq.RESOLVING:
            H = (0, i.jsx)(S.A, {});
            break;
        case L.elq.EXPIRED:
        case L.elq.BANNED:
            H = (0, i.jsx)(T.A, { banned: w.state === L.elq.BANNED, author: n.author, channelId: n.channel_id });
            break;
        case L.elq.ERROR:
            H = (0, i.jsx)(C.A, { author: n.author, inviteError: M });
            break;
        default:
            switch ((0, _.On)(w)) {
                case _.Xd.GROUP_DM:
                    H = (0, i.jsx)(E.A, {
                        onTransitionToInviteChannel: B,
                        onAcceptInstantInvite: F,
                        currentUserId: U,
                        invite: w,
                        message: n,
                    });
                    break;
                case _.Xd.FRIEND:
                    H = (0, i.jsx)(I.A, { invite: w, message: n, getAcceptInviteContext: R });
                    break;
                default:
                    if ((0, _.G4)(w)) {
                        if (
                            null != w.channel &&
                            (0, h.OY)(w.channel).isGuildVoice() &&
                            (0, j.MR)("InviteEmbed.isStreamInvite").enabled
                        ) {
                            H = (0, i.jsx)(N.A, {
                                onTransitionToInviteChannel: B,
                                onAcceptInstantInvite: F,
                                currentUserId: U,
                                guild: k,
                                invite: w,
                                message: n,
                            });
                            break;
                        }
                        H = (0, i.jsx)(y.A, {
                            onTransitionToInviteChannel: B,
                            onAcceptInstantInvite: F,
                            currentUserId: U,
                            message: n,
                            guild: k,
                            invite: w,
                        });
                        break;
                    }
                    if ((0, _.ly)(w)) {
                        H = (0, i.jsx)(u.Ay, {
                            guildScheduledEvent: G,
                            guild: w.guild,
                            channel: w.channel,
                            isMember: null != k,
                            onAcceptInstantInvite: F,
                            onTransitionToInviteChannel: B,
                        });
                        break;
                    }
                    if ((0, _.oK)(w)) {
                        H = (0, i.jsx)(f.A, { invite: w, getAcceptInviteContext: R, message: n });
                        break;
                    }
                    if (
                        null != w.channel &&
                        (0, h.OY)(w.channel).isGuildVoice() &&
                        (0, j.MR)("InviteEmbed.isGuildVoice").enabled
                    ) {
                        H = (0, i.jsx)(N.A, {
                            onTransitionToInviteChannel: B,
                            onAcceptInstantInvite: F,
                            currentUserId: U,
                            guild: k,
                            invite: w,
                            message: n,
                        });
                        break;
                    }
                    (0, d.v)(w) &&
                        (H = (0, i.jsx)(b.A, {
                            onTransitionToInviteChannel: B,
                            onAcceptInstantInvite: F,
                            isMemberOfGuild: null != k,
                            invite: w,
                            message: n,
                        }));
            }
    }
    return (0, i.jsx)(s.A, { section: L.JJy.INVITE_LINK, children: H });
}
