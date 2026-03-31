n.d(t, { A: () => P });
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(846293),
    s = n(820284),
    o = n(688810),
    d = n(107123),
    c = n(698441),
    u = n(427080),
    _ = n(21599),
    m = n(346542),
    h = n(665066),
    p = n(95701),
    g = n(961350),
    A = n(71393),
    x = n(299091),
    f = n(860689),
    C = n(62350),
    I = n(882072),
    E = n(58262),
    b = n(309818),
    v = n(112007),
    T = n(877695),
    y = n(242907),
    S = n(168428),
    N = n(448894),
    j = n(818352),
    L = n(422844),
    R = n(652215);
function P(e) {
    let { code: t, message: n, getAcceptInviteContext: P } = e,
        { invite: w, inviteError: M } = (0, r.cf)(
            [x.A],
            () => ({ invite: x.A.getInvite(t), inviteError: x.A.getInviteError(t) }),
            [t],
        ),
        D = null == w,
        k = (0, _._U)(t, n.id);
    a.useEffect(() => {
        D && l.Ay.resolveInvite(t, void 0, { inviteInstanceId: k });
    }, [t, D, k]);
    let O = w ?? { state: R.elq.RESOLVING, code: "" },
        { analyticsLocations: U } = (0, o.Ay)(),
        B = (0, r.bG)([A.A], () => (w?.guild != null ? A.A.getGuild(w.guild.id) : null), [w]),
        G = (0, r.bG)([g.default], () => g.default.getId()),
        F = (0, r.bG)([c.Ay], () => c.Ay.getGuildScheduledEvent(O.guild_scheduled_event?.id), [O]),
        H = () => {
            null != O.channel && l.Ay.transitionToInviteSync(O);
        },
        V = function () {
            let { autoJoin: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = null == B && w?.guild != null ? f.DY(w.guild) : B;
            (0, h.g)({ guild: n, isMember: null != B, analyticsLocations: U }) === h.W.PROCEED &&
                l.Ay.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: P("Invite Button Embed", t),
                    autoJoin: e,
                });
        },
        q = (0, i.jsx)(v.A, {
            onTransitionToInviteChannel: H,
            onAcceptInstantInvite: V,
            currentUserId: G,
            guild: B,
            invite: O,
            message: n,
        });
    switch (O.state) {
        case R.elq.RESOLVING:
            q = (0, i.jsx)(S.A, {});
            break;
        case R.elq.EXPIRED:
        case R.elq.BANNED:
            q = (0, i.jsx)(y.A, { banned: O.state === R.elq.BANNED, author: n.author, channelId: n.channel_id });
            break;
        case R.elq.ERROR:
            q = (0, i.jsx)(I.A, { author: n.author, inviteError: M });
            break;
        default:
            switch ((0, m.On)(O)) {
                case m.Xd.GROUP_DM:
                    q = (0, i.jsx)(b.A, {
                        onTransitionToInviteChannel: H,
                        onAcceptInstantInvite: V,
                        currentUserId: G,
                        invite: O,
                        message: n,
                    });
                    break;
                case m.Xd.FRIEND:
                    q = (0, i.jsx)(E.A, { invite: O, message: n, getAcceptInviteContext: P });
                    break;
                default:
                    if ((0, m.G4)(O)) {
                        if (
                            null != O.channel &&
                            (0, p.OY)(O.channel).isGuildVoice() &&
                            (0, L.MR)("InviteEmbed.isStreamInvite").enabled
                        ) {
                            q = (0, i.jsx)(j.A, {
                                onTransitionToInviteChannel: H,
                                onAcceptInstantInvite: V,
                                currentUserId: G,
                                guild: B,
                                invite: O,
                                message: n,
                            });
                            break;
                        }
                        q = (0, i.jsx)(N.A, {
                            onTransitionToInviteChannel: H,
                            onAcceptInstantInvite: V,
                            currentUserId: G,
                            message: n,
                            guild: B,
                            invite: O,
                        });
                        break;
                    }
                    if ((0, m.ly)(O)) {
                        q = (0, i.jsx)(u.Ay, {
                            guildScheduledEvent: F,
                            guild: O.guild,
                            channel: O.channel,
                            isMember: null != B,
                            onAcceptInstantInvite: V,
                            onTransitionToInviteChannel: H,
                        });
                        break;
                    }
                    if ((0, m.oK)(O)) {
                        q = (0, i.jsx)(C.A, { invite: O, getAcceptInviteContext: P, message: n });
                        break;
                    }
                    if (
                        null != O.channel &&
                        (0, p.OY)(O.channel).isGuildVoice() &&
                        (0, L.MR)("InviteEmbed.isGuildVoice").enabled
                    ) {
                        q = (0, i.jsx)(j.A, {
                            onTransitionToInviteChannel: H,
                            onAcceptInstantInvite: V,
                            currentUserId: G,
                            guild: B,
                            invite: O,
                            message: n,
                        });
                        break;
                    }
                    (0, d.v)(O) &&
                        (q = (0, i.jsx)(T.A, {
                            onTransitionToInviteChannel: H,
                            onAcceptInstantInvite: V,
                            isMemberOfGuild: null != B,
                            invite: O,
                            message: n,
                        }));
            }
    }
    return (0, i.jsx)(s.A, { section: R.JJy.INVITE_LINK, children: q });
}
