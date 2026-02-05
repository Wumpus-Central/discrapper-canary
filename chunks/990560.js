n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(846293),
    s = n(820284),
    o = n(688810),
    d = n(107123),
    c = n(698441),
    u = n(427080),
    m = n(346542),
    _ = n(665066),
    h = n(961350),
    p = n(71393),
    g = n(299091),
    A = n(860689),
    f = n(62350),
    x = n(882072),
    E = n(58262),
    C = n(309818),
    I = n(112007),
    T = n(877695),
    v = n(242907),
    N = n(168428),
    S = n(448894),
    b = n(652215);
function y(e) {
    let { code: t, message: n, getAcceptInviteContext: y } = e,
        { invite: j, inviteError: R } = (0, a.cf)(
            [g.A],
            () => ({ invite: g.A.getInvite(t), inviteError: g.A.getInviteError(t) }),
            [t],
        ),
        L = null == j;
    l.useEffect(() => {
        L && r.Ay.resolveInvite(t);
    }, [t, L]);
    let M = j ?? { state: b.elq.RESOLVING, code: "" },
        { analyticsLocations: O } = (0, o.Ay)(),
        P = (0, a.bG)([p.A], () => (j?.guild != null ? p.A.getGuild(j.guild.id) : null), [j]),
        D = (0, a.bG)([h.default], () => h.default.getId()),
        k = (0, a.bG)([c.Ay], () => c.Ay.getGuildScheduledEvent(M.guild_scheduled_event?.id), [M]),
        U = () => {
            null != M.channel && r.Ay.transitionToInviteSync(M);
        },
        w = () => {
            let e = null == P && j?.guild != null ? A.DY(j.guild) : P;
            (0, _.g)({ guild: e, isMember: null != P, analyticsLocations: O }) === _.W.PROCEED &&
                r.Ay.acceptInviteAndTransitionToInviteChannel({ inviteKey: t, context: y("Invite Button Embed") });
        },
        G = (0, i.jsx)(I.A, {
            onTransitionToInviteChannel: U,
            onAcceptInstantInvite: w,
            currentUserId: D,
            guild: P,
            invite: M,
            message: n,
        });
    switch (M.state) {
        case b.elq.RESOLVING:
            G = (0, i.jsx)(N.A, {});
            break;
        case b.elq.EXPIRED:
        case b.elq.BANNED:
            G = (0, i.jsx)(v.A, { banned: M.state === b.elq.BANNED, author: n.author, channelId: n.channel_id });
            break;
        case b.elq.ERROR:
            G = (0, i.jsx)(x.A, { author: n.author, inviteError: R });
            break;
        default:
            switch ((0, m.On)(M)) {
                case m.Xd.GROUP_DM:
                    G = (0, i.jsx)(C.A, {
                        onTransitionToInviteChannel: U,
                        onAcceptInstantInvite: w,
                        currentUserId: D,
                        invite: M,
                        message: n,
                    });
                    break;
                case m.Xd.FRIEND:
                    G = (0, i.jsx)(E.A, { invite: M, message: n, getAcceptInviteContext: y });
                    break;
                default:
                    if ((0, m.G4)(M)) {
                        G = (0, i.jsx)(S.A, {
                            onTransitionToInviteChannel: U,
                            onAcceptInstantInvite: w,
                            currentUserId: D,
                            message: n,
                            guild: P,
                            invite: M,
                        });
                        break;
                    }
                    if ((0, m.ly)(M)) {
                        G = (0, i.jsx)(u.Ay, {
                            guildScheduledEvent: k,
                            guild: M.guild,
                            channel: M.channel,
                            isMember: null != P,
                            onAcceptInstantInvite: w,
                            onTransitionToInviteChannel: U,
                        });
                        break;
                    }
                    if ((0, m.oK)(M)) {
                        G = (0, i.jsx)(f.A, { invite: M, getAcceptInviteContext: y, message: n });
                        break;
                    }
                    (0, d.v)(M) &&
                        (G = (0, i.jsx)(T.A, {
                            onTransitionToInviteChannel: U,
                            onAcceptInstantInvite: w,
                            isMemberOfGuild: null != P,
                            invite: M,
                            message: n,
                        }));
            }
    }
    return (0, i.jsx)(s.A, { section: b.JJy.INVITE_LINK, children: G });
}
