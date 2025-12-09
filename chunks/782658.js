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
        D = null == P;
    i.useEffect(() => {
        D && o.ZP.resolveInvite(t);
    }, [t, D]);
    let w =
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
            return u.ZP.getGuildScheduledEvent(null == (e = w.guild_scheduled_event) ? void 0 : e.id);
        }, [w]),
        k = () => {
            null != w.channel && o.ZP.transitionToInviteSync(w);
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
            invite: w,
            message: n,
        });
    switch (w.state) {
        case C.r2o.RESOLVING:
            G = (0, r.jsx)(T.Z, {});
            break;
        case C.r2o.EXPIRED:
        case C.r2o.BANNED:
            G = (0, r.jsx)(I.Z, {
                banned: w.state === C.r2o.BANNED,
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
            switch ((0, f.VR)(w)) {
                case f.wx.GROUP_DM:
                    G = (0, r.jsx)(O.Z, {
                        onTransitionToInviteChannel: k,
                        onAcceptInstantInvite: U,
                        currentUserId: j,
                        invite: w,
                        message: n,
                    });
                    break;
                case f.wx.FRIEND:
                    G = (0, r.jsx)(y.Z, {
                        invite: w,
                        message: n,
                        getAcceptInviteContext: N,
                    });
                    break;
                default:
                    if ((0, f.TY)(w)) {
                        G = (0, r.jsx)(A.Z, {
                            onTransitionToInviteChannel: k,
                            onAcceptInstantInvite: U,
                            currentUserId: j,
                            message: n,
                            guild: L,
                            invite: w,
                        });
                        break;
                    }
                    if ((0, f.Tx)(w)) {
                        G = (0, r.jsx)(d.ZP, {
                            guildScheduledEvent: M,
                            guild: w.guild,
                            channel: w.channel,
                            isMember: null != L,
                            onAcceptInstantInvite: U,
                            onTransitionToInviteChannel: k,
                        });
                        break;
                    }
                    if ((0, f.P1)(w)) {
                        G = (0, r.jsx)(E.Z, {
                            invite: w,
                            getAcceptInviteContext: N,
                            message: n,
                        });
                        break;
                    }
                    (0, c.l)(w) &&
                        (G = (0, r.jsx)(S.Z, {
                            onTransitionToInviteChannel: k,
                            onAcceptInstantInvite: U,
                            isMemberOfGuild: null != L,
                            invite: w,
                            message: n,
                        }));
            }
    }
    return (0, r.jsx)(s.Z, {
        section: C.jXE.INVITE_LINK,
        children: G,
    });
}
