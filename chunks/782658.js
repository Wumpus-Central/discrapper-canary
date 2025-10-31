n.d(t, { Z: () => D });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(447543),
    s = n(410575),
    l = n(758119),
    c = n(622822),
    u = n(906732),
    d = n(997431),
    f = n(924301),
    _ = n(11868),
    p = n(413605),
    h = n(451603),
    m = n(885714),
    g = n(314897),
    E = n(430824),
    b = n(701190),
    y = n(411198),
    O = n(610699),
    v = n(313876),
    I = n(778333),
    T = n(949981),
    S = n(680668),
    A = n(508273),
    C = n(143708),
    N = n(358595),
    R = n(135845),
    P = n(981631),
    w = n(723359);
function D(e) {
    let { code: t, message: n, getAcceptInviteContext: D } = e,
        { invite: x, inviteError: L } = (0, a.cj)(
            [b.Z],
            () => ({
                invite: b.Z.getInvite(t),
                inviteError: b.Z.getInviteError(t),
            }),
            [t],
        ),
        M = null == x;
    i.useEffect(() => {
        M && o.ZP.resolveInvite(t);
    }, [t, M]);
    let j =
            null != x
                ? x
                : {
                      state: P.r2o.RESOLVING,
                      code: "",
                  },
        { analyticsLocations: k } = (0, u.ZP)(),
        U = (0, a.e7)([E.Z], () => ((null == x ? void 0 : x.guild) != null ? E.Z.getGuild(x.guild.id) : null), [x]),
        G = (0, a.e7)([g.default], () => g.default.getId()),
        B = (0, a.e7)([f.ZP], () => {
            var e;
            return f.ZP.getGuildScheduledEvent(null == (e = j.guild_scheduled_event) ? void 0 : e.id);
        }, [j]),
        Z = () => {
            null != j.channel && o.ZP.transitionToInviteSync(j);
        },
        F = () => {
            if (null == U && (null == x ? void 0 : x.guild) != null) {
                let e = y.Qs(x.guild);
                if ((0, c.bN)() && (0, c.Yt)(e)) return void (0, l.mN)(w.L0.NSFW_SERVER_INVITE_EMBED);
            }
            (0, h.yU)()
                ? (0, m.Z)({
                      analyticsSource: { page: P.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: P.ZY5.INVITE_EMBED,
                          section: P.jXE.GUILD_CAP_UPSELL_MODAL,
                      },
                      analyticsLocations: k,
                  })
                : o.ZP.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: D("Invite Button Embed"),
                  });
        },
        V = (0, r.jsx)(S.Z, {
            onTransitionToInviteChannel: Z,
            onAcceptInstantInvite: F,
            currentUserId: G,
            guild: U,
            invite: j,
            message: n,
        });
    switch (j.state) {
        case P.r2o.RESOLVING:
            V = (0, r.jsx)(N.Z, {});
            break;
        case P.r2o.EXPIRED:
        case P.r2o.BANNED:
            V = (0, r.jsx)(C.Z, {
                banned: j.state === P.r2o.BANNED,
                author: n.author,
                channelId: n.channel_id,
            });
            break;
        case P.r2o.ERROR:
            V = (0, r.jsx)(v.Z, {
                author: n.author,
                inviteError: L,
            });
            break;
        default:
            switch ((0, p.VR)(j)) {
                case p.wx.GROUP_DM:
                    V = (0, r.jsx)(T.Z, {
                        onTransitionToInviteChannel: Z,
                        onAcceptInstantInvite: F,
                        currentUserId: G,
                        invite: j,
                        message: n,
                    });
                    break;
                case p.wx.FRIEND:
                    V = (0, r.jsx)(I.Z, {
                        invite: j,
                        message: n,
                        getAcceptInviteContext: D,
                    });
                    break;
                default:
                    if ((0, p.TY)(j)) {
                        V = (0, r.jsx)(R.Z, {
                            onTransitionToInviteChannel: Z,
                            onAcceptInstantInvite: F,
                            currentUserId: G,
                            message: n,
                            guild: U,
                            invite: j,
                        });
                        break;
                    }
                    if ((0, p.Tx)(j)) {
                        V = (0, r.jsx)(_.ZP, {
                            guildScheduledEvent: B,
                            guild: j.guild,
                            channel: j.channel,
                            isMember: null != U,
                            onAcceptInstantInvite: F,
                            onTransitionToInviteChannel: Z,
                        });
                        break;
                    }
                    if ((0, p.P1)(j)) {
                        V = (0, r.jsx)(O.Z, {
                            invite: j,
                            getAcceptInviteContext: D,
                            message: n,
                        });
                        break;
                    }
                    (0, d.l)(j) &&
                        (V = (0, r.jsx)(A.Z, {
                            onTransitionToInviteChannel: Z,
                            onAcceptInstantInvite: F,
                            isMemberOfGuild: null != U,
                            invite: j,
                            message: n,
                        }));
            }
    }
    return (0, r.jsx)(s.Z, {
        section: P.jXE.INVITE_LINK,
        children: V,
    });
}
