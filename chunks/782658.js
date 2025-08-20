n.d(t, { Z: () => Z });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(447543),
    a = n(410575),
    s = n(758119),
    c = n(622822),
    u = n(906732),
    d = n(749958),
    p = n(997431),
    m = n(924301),
    f = n(11868),
    g = n(413605),
    _ = n(451603),
    h = n(885714),
    b = n(314897),
    E = n(430824),
    C = n(701190),
    v = n(411198),
    O = n(610699),
    y = n(313876),
    x = n(778333),
    j = n(949981),
    I = n(680668),
    S = n(508273),
    T = n(143708),
    P = n(358595),
    N = n(135845),
    A = n(981631),
    w = n(723359);
function Z(e) {
    let { code: t, message: n, getAcceptInviteContext: Z } = e,
        { invite: R, inviteError: D } = (0, l.cj)(
            [C.Z],
            () => ({
                invite: C.Z.getInvite(t),
                inviteError: C.Z.getInviteError(t),
            }),
            [t],
        ),
        L = null == R;
    i.useEffect(() => {
        L && o.ZP.resolveInvite(t);
    }, [t, L]);
    let M =
            null != R
                ? R
                : {
                      state: A.r2o.RESOLVING,
                      code: "",
                  },
        { analyticsLocations: k } = (0, u.ZP)(),
        U = (0, d.v)(),
        F = (0, l.e7)([E.Z], () => ((null == R ? void 0 : R.guild) != null ? E.Z.getGuild(R.guild.id) : null), [R]),
        B = (0, l.e7)([b.default], () => b.default.getId()),
        G = (0, l.e7)([m.ZP], () => {
            var e;
            return m.ZP.getGuildScheduledEvent(null == (e = M.guild_scheduled_event) ? void 0 : e.id);
        }, [M]),
        H = () => {
            null != M.channel && o.ZP.transitionToInviteSync(M);
        },
        V = () => {
            if (null == F && (null == R ? void 0 : R.guild) != null) {
                let e = v.Qs(R.guild);
                if ((0, c.bN)() && (0, c.Yt)(e)) return void (0, s.mN)(w.L0.NSFW_SERVER_INVITE_EMBED);
            }
            (0, _.yU)()
                ? (0, h.Z)({
                      analyticsSource: { page: A.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: A.ZY5.INVITE_EMBED,
                          section: A.jXE.GUILD_CAP_UPSELL_MODAL,
                      },
                      analyticsLocations: k,
                  })
                : o.ZP.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: Z("Invite Button Embed"),
                  });
        },
        z = (0, r.jsx)(I.Z, {
            onTransitionToInviteChannel: H,
            onAcceptInstantInvite: V,
            currentUserId: B,
            guild: F,
            invite: M,
            message: n,
        });
    switch (M.state) {
        case A.r2o.RESOLVING:
            z = (0, r.jsx)(P.Z, {});
            break;
        case A.r2o.EXPIRED:
        case A.r2o.BANNED:
            z = (0, r.jsx)(T.Z, {
                banned: M.state === A.r2o.BANNED,
                author: n.author,
                channelId: n.channel_id,
            });
            break;
        case A.r2o.ERROR:
            z = (0, r.jsx)(y.Z, {
                author: n.author,
                inviteError: D,
            });
            break;
        default:
            switch ((0, g.VR)(M)) {
                case g.wx.GROUP_DM:
                    z = (0, r.jsx)(j.Z, {
                        onTransitionToInviteChannel: H,
                        onAcceptInstantInvite: V,
                        currentUserId: B,
                        invite: M,
                        message: n,
                    });
                    break;
                case g.wx.FRIEND:
                    z = (0, r.jsx)(x.Z, {
                        invite: M,
                        message: n,
                        getAcceptInviteContext: Z,
                    });
                    break;
                default:
                    if ((0, g.TY)(M)) {
                        z = (0, r.jsx)(N.Z, {
                            onTransitionToInviteChannel: H,
                            onAcceptInstantInvite: V,
                            currentUserId: B,
                            message: n,
                            guild: F,
                            invite: M,
                        });
                        break;
                    }
                    if ((0, g.Tx)(M)) {
                        z = (0, r.jsx)(f.ZP, {
                            guildScheduledEvent: G,
                            guild: M.guild,
                            channel: M.channel,
                            isMember: null != F,
                            onAcceptInstantInvite: V,
                            onTransitionToInviteChannel: H,
                        });
                        break;
                    }
                    if ((0, g.P1)(M)) {
                        z = (0, r.jsx)(O.Z, {
                            invite: M,
                            getAcceptInviteContext: Z,
                            message: n,
                        });
                        break;
                    }
                    !U &&
                        (0, p.l)(M) &&
                        (z = (0, r.jsx)(S.Z, {
                            onTransitionToInviteChannel: H,
                            onAcceptInstantInvite: V,
                            isMemberOfGuild: null != F,
                            invite: M,
                            message: n,
                        }));
            }
    }
    return (0, r.jsx)(a.Z, {
        section: A.jXE.INVITE_LINK,
        children: z,
    });
}
