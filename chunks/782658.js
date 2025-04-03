n.d(t, { Z: () => k });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(447543),
    o = n(410575),
    s = n(758119),
    c = n(622822),
    u = n(906732),
    d = n(749958),
    p = n(924301),
    m = n(11868),
    f = n(413605),
    h = n(451603),
    g = n(885714),
    _ = n(131704),
    b = n(314897),
    x = n(430824),
    y = n(701190),
    E = n(411198),
    v = n(610699),
    O = n(313876),
    N = n(778333),
    j = n(949981),
    C = n(680668),
    I = n(508273),
    S = n(143708),
    T = n(358595),
    P = n(563917),
    A = n(135845),
    w = n(981631),
    Z = n(723359);
function k(e) {
    let { code: t, author: n, getAcceptInviteContext: k } = e,
        { invite: R, inviteError: D } = (0, a.cj)(
            [y.Z],
            () => ({
                invite: y.Z.getInvite(t),
                inviteError: y.Z.getInviteError(t)
            }),
            [t]
        ),
        L = null == R;
    i.useEffect(() => {
        L && l.ZP.resolveInvite(t);
    }, [t, L]);
    let M =
            null != R
                ? R
                : {
                      state: w.r2o.RESOLVING,
                      code: ''
                  },
        { analyticsLocations: W } = (0, u.ZP)(),
        U = (0, d.O)(),
        F = (0, a.e7)([x.Z], () => ((null == R ? void 0 : R.guild) != null ? x.Z.getGuild(R.guild.id) : null), [R]),
        B = (0, a.e7)([b.default], () => b.default.getId()),
        G = (0, a.e7)(
            [p.ZP],
            () => {
                var e;
                return p.ZP.getGuildScheduledEvent(null == (e = M.guild_scheduled_event) ? void 0 : e.id);
            },
            [M]
        ),
        H = () => {
            null != M.channel && l.ZP.transitionToInviteSync(M);
        },
        V = () => {
            if (null == F && (null == R ? void 0 : R.guild) != null) {
                let e = E.Qs(R.guild);
                if ((0, c.bN)() && (0, c.Yt)(e)) return void (0, s.mN)(Z.L0.NSFW_SERVER_INVITE_EMBED);
            }
            (0, h.yU)()
                ? (0, g.Z)({
                      analyticsSource: { page: w.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: w.ZY5.INVITE_EMBED,
                          section: w.jXE.GUILD_CAP_UPSELL_MODAL
                      },
                      analyticsLocations: W
                  })
                : l.ZP.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: k('Invite Button Embed')
                  });
        },
        z = (0, r.jsx)(C.Z, {
            onTransitionToInviteChannel: H,
            onAcceptInstantInvite: V,
            currentUserId: B,
            guild: F,
            invite: M,
            author: n
        });
    switch (M.state) {
        case w.r2o.RESOLVING:
            z = (0, r.jsx)(T.Z, {});
            break;
        case w.r2o.EXPIRED:
        case w.r2o.BANNED:
            z = (0, r.jsx)(S.Z, {
                banned: M.state === w.r2o.BANNED,
                author: n
            });
            break;
        case w.r2o.ERROR:
            z = (0, r.jsx)(O.Z, {
                author: n,
                inviteError: D
            });
            break;
        default:
            switch ((0, f.VR)(M)) {
                case f.wx.GROUP_DM:
                    z = (0, r.jsx)(j.Z, {
                        onTransitionToInviteChannel: H,
                        onAcceptInstantInvite: V,
                        currentUserId: B,
                        invite: M,
                        author: n
                    });
                    break;
                case f.wx.FRIEND:
                    z = (0, r.jsx)(N.Z, {
                        invite: M,
                        author: n,
                        getAcceptInviteContext: k
                    });
                    break;
                default:
                    if ((0, f.TY)(M)) {
                        z = (0, r.jsx)(A.Z, {
                            onTransitionToInviteChannel: H,
                            onAcceptInstantInvite: V,
                            currentUserId: B,
                            guild: F,
                            invite: M
                        });
                        break;
                    }
                    if ((0, f.Tx)(M)) {
                        z = (0, r.jsx)(m.ZP, {
                            guildScheduledEvent: G,
                            guild: M.guild,
                            channel: M.channel,
                            isMember: null != F,
                            onAcceptInstantInvite: V,
                            onTransitionToInviteChannel: H
                        });
                        break;
                    }
                    if ((0, f.$P)(M)) {
                        z = (0, r.jsx)(P.Z, {
                            invite: M,
                            stageInstance: M.stage_instance,
                            guild: M.guild,
                            isMember: null != F,
                            onTransitionToInviteChannel: H,
                            onAcceptInstantInvite: V
                        });
                        break;
                    }
                    if (
                        ((0, f.P1)(M) &&
                            (z = (0, r.jsx)(v.Z, {
                                invite: M,
                                getAcceptInviteContext: k
                            })),
                        U)
                    ) {
                        let e = (null == R ? void 0 : R.channel) != null ? (0, _.jD)(R.channel) : null;
                        (null != e && e.isGuildVocal()) ||
                            (z = (0, r.jsx)(I.Z, {
                                onTransitionToInviteChannel: H,
                                onAcceptInstantInvite: V,
                                guild: F,
                                invite: M,
                                author: n,
                                currentUserId: B
                            }));
                    }
            }
    }
    return (0, r.jsx)(o.Z, {
        section: w.jXE.INVITE_LINK,
        children: z
    });
}
