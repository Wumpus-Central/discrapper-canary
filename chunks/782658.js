n.d(t, { Z: () => k });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(447543),
    l = n(410575),
    s = n(758119),
    c = n(622822),
    d = n(906732),
    u = n(749958),
    p = n(924301),
    m = n(11868),
    f = n(413605),
    h = n(451603),
    g = n(885714),
    _ = n(131704),
    b = n(314897),
    v = n(430824),
    y = n(701190),
    x = n(411198),
    E = n(610699),
    O = n(313876),
    j = n(778333),
    N = n(949981),
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
        L && o.ZP.resolveInvite(t);
    }, [t, L]);
    let M =
            null != R
                ? R
                : {
                      state: w.r2o.RESOLVING,
                      code: ''
                  },
        { analyticsLocations: W } = (0, d.ZP)(),
        F = (0, u.O)(),
        U = (0, a.e7)([v.Z], () => ((null == R ? void 0 : R.guild) != null ? v.Z.getGuild(R.guild.id) : null), [R]),
        B = (0, a.e7)([b.default], () => b.default.getId()),
        G = (0, a.e7)(
            [p.ZP],
            () => {
                var e;
                return p.ZP.getGuildScheduledEvent(null === (e = M.guild_scheduled_event) || void 0 === e ? void 0 : e.id);
            },
            [M]
        ),
        H = () => {
            null != M.channel && o.ZP.transitionToInviteSync(M);
        },
        V = () => {
            if (null == U && (null == R ? void 0 : R.guild) != null) {
                let e = x.Qs(R.guild);
                if ((0, c.bN)() && (0, c.Yt)(e)) {
                    (0, s.mN)(Z.L0.NSFW_SERVER_INVITE_EMBED);
                    return;
                }
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
                : o.ZP.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: k('Invite Button Embed')
                  });
        },
        z = (0, r.jsx)(C.Z, {
            onTransitionToInviteChannel: H,
            onAcceptInstantInvite: V,
            currentUserId: B,
            guild: U,
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
                    z = (0, r.jsx)(N.Z, {
                        onTransitionToInviteChannel: H,
                        onAcceptInstantInvite: V,
                        currentUserId: B,
                        invite: M,
                        author: n
                    });
                    break;
                case f.wx.FRIEND:
                    z = (0, r.jsx)(j.Z, {
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
                            guild: U,
                            invite: M
                        });
                        break;
                    }
                    if ((0, f.Tx)(M)) {
                        z = (0, r.jsx)(m.ZP, {
                            guildScheduledEvent: G,
                            guild: M.guild,
                            channel: M.channel,
                            isMember: null != U,
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
                            isMember: null != U,
                            onTransitionToInviteChannel: H,
                            onAcceptInstantInvite: V
                        });
                        break;
                    }
                    if (
                        ((0, f.P1)(M) &&
                            (z = (0, r.jsx)(E.Z, {
                                invite: M,
                                getAcceptInviteContext: k
                            })),
                        F)
                    ) {
                        let e = (null == R ? void 0 : R.channel) != null ? (0, _.jD)(R.channel) : null;
                        (null != e && e.isGuildVocal()) ||
                            (z = (0, r.jsx)(I.Z, {
                                onTransitionToInviteChannel: H,
                                onAcceptInstantInvite: V,
                                guild: U,
                                invite: M,
                                author: n,
                                currentUserId: B
                            }));
                    }
            }
    }
    return (0, r.jsx)(l.Z, {
        section: w.jXE.INVITE_LINK,
        children: z
    });
}
