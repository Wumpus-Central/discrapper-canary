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
    f = n(542256),
    _ = n(413605),
    p = n(314897),
    h = n(430824),
    m = n(701190),
    g = n(411198),
    E = n(610699),
    b = n(313876),
    y = n(778333),
    O = n(949981),
    v = n(680668),
    I = n(508273),
    T = n(143708),
    S = n(358595),
    A = n(135845),
    C = n(981631);
function N(e) {
    let { code: t, message: n, getAcceptInviteContext: N } = e,
        { invite: R, inviteError: P } = (0, a.cj)(
            [m.Z],
            () => ({
                invite: m.Z.getInvite(t),
                inviteError: m.Z.getInviteError(t),
            }),
            [t],
        ),
        D = null == R;
    i.useEffect(() => {
        D && o.ZP.resolveInvite(t);
    }, [t, D]);
    let w =
            null != R
                ? R
                : {
                      state: C.r2o.RESOLVING,
                      code: "",
                  },
        { analyticsLocations: L } = (0, l.ZP)(),
        x = (0, a.e7)([h.Z], () => ((null == R ? void 0 : R.guild) != null ? h.Z.getGuild(R.guild.id) : null), [R]),
        M = (0, a.e7)([p.default], () => p.default.getId()),
        j = (0, a.e7)([u.ZP], () => {
            var e;
            return u.ZP.getGuildScheduledEvent(null == (e = w.guild_scheduled_event) ? void 0 : e.id);
        }, [w]),
        k = () => {
            null != w.channel && o.ZP.transitionToInviteSync(w);
        },
        U = () => {
            let e = null == x && (null == R ? void 0 : R.guild) != null ? g.Qs(R.guild) : x;
            (0, f.o)({
                guild: e,
                isMember: null != x,
                analyticsLocations: L,
            }) === f.e.PROCEED &&
                o.ZP.acceptInviteAndTransitionToInviteChannel({
                    inviteKey: t,
                    context: N("Invite Button Embed"),
                });
        },
        G = (0, r.jsx)(v.Z, {
            onTransitionToInviteChannel: k,
            onAcceptInstantInvite: U,
            currentUserId: M,
            guild: x,
            invite: w,
            message: n,
        });
    switch (w.state) {
        case C.r2o.RESOLVING:
            G = (0, r.jsx)(S.Z, {});
            break;
        case C.r2o.EXPIRED:
        case C.r2o.BANNED:
            G = (0, r.jsx)(T.Z, {
                banned: w.state === C.r2o.BANNED,
                author: n.author,
                channelId: n.channel_id,
            });
            break;
        case C.r2o.ERROR:
            G = (0, r.jsx)(b.Z, {
                author: n.author,
                inviteError: P,
            });
            break;
        default:
            switch ((0, _.VR)(w)) {
                case _.wx.GROUP_DM:
                    G = (0, r.jsx)(O.Z, {
                        onTransitionToInviteChannel: k,
                        onAcceptInstantInvite: U,
                        currentUserId: M,
                        invite: w,
                        message: n,
                    });
                    break;
                case _.wx.FRIEND:
                    G = (0, r.jsx)(y.Z, {
                        invite: w,
                        message: n,
                        getAcceptInviteContext: N,
                    });
                    break;
                default:
                    if ((0, _.TY)(w)) {
                        G = (0, r.jsx)(A.Z, {
                            onTransitionToInviteChannel: k,
                            onAcceptInstantInvite: U,
                            currentUserId: M,
                            message: n,
                            guild: x,
                            invite: w,
                        });
                        break;
                    }
                    if ((0, _.Tx)(w)) {
                        G = (0, r.jsx)(d.ZP, {
                            guildScheduledEvent: j,
                            guild: w.guild,
                            channel: w.channel,
                            isMember: null != x,
                            onAcceptInstantInvite: U,
                            onTransitionToInviteChannel: k,
                        });
                        break;
                    }
                    if ((0, _.P1)(w)) {
                        G = (0, r.jsx)(E.Z, {
                            invite: w,
                            getAcceptInviteContext: N,
                            message: n,
                        });
                        break;
                    }
                    (0, c.l)(w) &&
                        (G = (0, r.jsx)(I.Z, {
                            onTransitionToInviteChannel: k,
                            onAcceptInstantInvite: U,
                            isMemberOfGuild: null != x,
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
