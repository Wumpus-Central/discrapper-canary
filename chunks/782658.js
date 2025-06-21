n.d(t, { Z: () => R });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(447543),
    o = n(410575),
    s = n(758119),
    c = n(622822),
    u = n(906732),
    d = n(749958),
    p = n(997431),
    m = n(924301),
    f = n(11868),
    h = n(413605),
    g = n(451603),
    _ = n(885714),
    b = n(314897),
    E = n(430824),
    y = n(701190),
    x = n(411198),
    v = n(610699),
    O = n(313876),
    C = n(778333),
    j = n(949981),
    S = n(680668),
    I = n(508273),
    N = n(143708),
    T = n(358595),
    P = n(563917),
    A = n(135845),
    w = n(981631),
    Z = n(723359);
function R(e) {
    let { code: t, message: n, getAcceptInviteContext: R } = e,
        { invite: k, inviteError: D } = (0, l.cj)(
            [y.Z],
            () => ({
                invite: y.Z.getInvite(t),
                inviteError: y.Z.getInviteError(t)
            }),
            [t]
        ),
        M = null == k;
    i.useEffect(() => {
        M && a.ZP.resolveInvite(t);
    }, [t, M]);
    let L =
            null != k
                ? k
                : {
                      state: w.r2o.RESOLVING,
                      code: ''
                  },
        { analyticsLocations: U } = (0, u.ZP)(),
        F = (0, d.iU)(),
        B = (0, l.e7)([E.Z], () => ((null == k ? void 0 : k.guild) != null ? E.Z.getGuild(k.guild.id) : null), [k]),
        G = (0, l.e7)([b.default], () => b.default.getId()),
        H = (0, l.e7)(
            [m.ZP],
            () => {
                var e;
                return m.ZP.getGuildScheduledEvent(null == (e = L.guild_scheduled_event) ? void 0 : e.id);
            },
            [L]
        ),
        V = () => {
            null != L.channel && a.ZP.transitionToInviteSync(L);
        },
        z = () => {
            if (null == B && (null == k ? void 0 : k.guild) != null) {
                let e = x.Qs(k.guild);
                if ((0, c.bN)() && (0, c.Yt)(e)) return void (0, s.mN)(Z.L0.NSFW_SERVER_INVITE_EMBED);
            }
            (0, g.yU)()
                ? (0, _.Z)({
                      analyticsSource: { page: w.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: w.ZY5.INVITE_EMBED,
                          section: w.jXE.GUILD_CAP_UPSELL_MODAL
                      },
                      analyticsLocations: U
                  })
                : a.ZP.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: R('Invite Button Embed')
                  });
        },
        W = (0, r.jsx)(S.Z, {
            onTransitionToInviteChannel: V,
            onAcceptInstantInvite: z,
            currentUserId: G,
            guild: B,
            invite: L,
            message: n
        });
    switch (L.state) {
        case w.r2o.RESOLVING:
            W = (0, r.jsx)(T.Z, {});
            break;
        case w.r2o.EXPIRED:
        case w.r2o.BANNED:
            W = (0, r.jsx)(N.Z, {
                banned: L.state === w.r2o.BANNED,
                author: n.author,
                channelId: n.channel_id
            });
            break;
        case w.r2o.ERROR:
            W = (0, r.jsx)(O.Z, {
                author: n.author,
                inviteError: D
            });
            break;
        default:
            switch ((0, h.VR)(L)) {
                case h.wx.GROUP_DM:
                    W = (0, r.jsx)(j.Z, {
                        onTransitionToInviteChannel: V,
                        onAcceptInstantInvite: z,
                        currentUserId: G,
                        invite: L,
                        message: n
                    });
                    break;
                case h.wx.FRIEND:
                    W = (0, r.jsx)(C.Z, {
                        invite: L,
                        message: n,
                        getAcceptInviteContext: R
                    });
                    break;
                default:
                    if ((0, h.TY)(L)) {
                        W = (0, r.jsx)(A.Z, {
                            onTransitionToInviteChannel: V,
                            onAcceptInstantInvite: z,
                            currentUserId: G,
                            message: n,
                            guild: B,
                            invite: L
                        });
                        break;
                    }
                    if ((0, h.Tx)(L)) {
                        W = (0, r.jsx)(f.ZP, {
                            guildScheduledEvent: H,
                            guild: L.guild,
                            channel: L.channel,
                            isMember: null != B,
                            onAcceptInstantInvite: z,
                            onTransitionToInviteChannel: V
                        });
                        break;
                    }
                    if ((0, h.$P)(L)) {
                        W = (0, r.jsx)(P.Z, {
                            invite: L,
                            stageInstance: L.stage_instance,
                            guild: L.guild,
                            isMember: null != B,
                            message: n,
                            onTransitionToInviteChannel: V,
                            onAcceptInstantInvite: z
                        });
                        break;
                    }
                    if ((0, h.P1)(L)) {
                        W = (0, r.jsx)(v.Z, {
                            invite: L,
                            getAcceptInviteContext: R,
                            message: n
                        });
                        break;
                    }
                    F &&
                        (0, p.l)(L) &&
                        (W = (0, r.jsx)(I.Z, {
                            onTransitionToInviteChannel: V,
                            onAcceptInstantInvite: z,
                            isMemberOfGuild: null != B,
                            invite: L,
                            message: n,
                            currentUserId: G
                        }));
            }
    }
    return (0, r.jsx)(o.Z, {
        section: w.jXE.INVITE_LINK,
        children: W
    });
}
