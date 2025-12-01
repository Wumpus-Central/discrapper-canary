n.d(t, { Z: () => N });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(447543),
    s = n(410575),
    l = n(906732),
    c = n(997431),
    u = n(924301),
    d = n(11868),
    f = n(413605),
    p = n(697037),
    _ = n(314897),
    m = n(430824),
    h = n(701190),
    g = n(411198),
    E = n(610699),
    b = n(313876),
    y = n(778333),
    O = n(949981),
    v = n(680668),
    S = n(508273),
    I = n(143708),
    T = n(358595),
    A = n(135845),
    C = n(981631);
function N(e) {
    let { code: t, message: n, getAcceptInviteContext: N } = e,
        { invite: P, inviteError: R } = (0, a.cj)(
            [h.Z],
            () => ({
                invite: h.Z.getInvite(t),
                inviteError: h.Z.getInviteError(t),
            }),
            [t],
        ),
        w = null == P;
    i.useEffect(() => {
        w && o.ZP.resolveInvite(t);
    }, [t, w]);
    let D =
            null != P
                ? P
                : {
                      state: C.r2o.RESOLVING,
                      code: "",
                  },
        { analyticsLocations: x } = (0, l.ZP)(),
        L = (0, a.e7)([m.Z], () => ((null == P ? void 0 : P.guild) != null ? m.Z.getGuild(P.guild.id) : null), [P]),
        j = (0, a.e7)([_.default], () => _.default.getId()),
        M = (0, a.e7)([u.ZP], () => {
            var e;
            return u.ZP.getGuildScheduledEvent(null == (e = D.guild_scheduled_event) ? void 0 : e.id);
        }, [D]),
        k = () => {
            null != D.channel && o.ZP.transitionToInviteSync(D);
        },
        U = () => {
            let e = null == L && (null == P ? void 0 : P.guild) != null ? g.Qs(P.guild) : L;
            (0, p.o)({
                guild: e,
                isMember: null != L,
                analyticsLocations: x,
            }) === p.e.PROCEED &&
                o.ZP.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: N("Invite Button Embed"),
                });
        },
        G = (0, r.jsx)(v.Z, {
            onTransitionToInviteChannel: k,
            onAcceptInstantInvite: U,
            currentUserId: j,
            guild: L,
            invite: D,
            message: n,
        });
    switch (D.state) {
        case C.r2o.RESOLVING:
            G = (0, r.jsx)(T.Z, {});
            break;
        case C.r2o.EXPIRED:
        case C.r2o.BANNED:
            G = (0, r.jsx)(I.Z, {
                banned: D.state === C.r2o.BANNED,
                author: n.author,
                channelId: n.channel_id,
            });
            break;
        case C.r2o.ERROR:
            G = (0, r.jsx)(b.Z, {
                author: n.author,
                inviteError: R,
            });
            break;
        default:
            switch ((0, f.VR)(D)) {
                case f.wx.GROUP_DM:
                    G = (0, r.jsx)(O.Z, {
                        onTransitionToInviteChannel: k,
                        onAcceptInstantInvite: U,
                        currentUserId: j,
                        invite: D,
                        message: n,
                    });
                    break;
                case f.wx.FRIEND:
                    G = (0, r.jsx)(y.Z, {
                        invite: D,
                        message: n,
                        getAcceptInviteContext: N,
                    });
                    break;
                default:
                    if ((0, f.TY)(D)) {
                        G = (0, r.jsx)(A.Z, {
                            onTransitionToInviteChannel: k,
                            onAcceptInstantInvite: U,
                            currentUserId: j,
                            message: n,
                            guild: L,
                            invite: D,
                        });
                        break;
                    }
                    if ((0, f.Tx)(D)) {
                        G = (0, r.jsx)(d.ZP, {
                            guildScheduledEvent: M,
                            guild: D.guild,
                            channel: D.channel,
                            isMember: null != L,
                            onAcceptInstantInvite: U,
                            onTransitionToInviteChannel: k,
                        });
                        break;
                    }
                    if ((0, f.P1)(D)) {
                        G = (0, r.jsx)(E.Z, {
                            invite: D,
                            getAcceptInviteContext: N,
                            message: n,
                        });
                        break;
                    }
                    (0, c.l)(D) &&
                        (G = (0, r.jsx)(S.Z, {
                            onTransitionToInviteChannel: k,
                            onAcceptInstantInvite: U,
                            isMemberOfGuild: null != L,
                            invite: D,
                            message: n,
                        }));
            }
    }
    return (0, r.jsx)(s.Z, {
        section: C.jXE.INVITE_LINK,
        children: G,
    });
}
