n.d(t, { Z: () => R });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(447543),
    s = n(410575),
    o = n(758119),
    c = n(622822),
    d = n(906732),
    u = n(924301),
    m = n(997321),
    h = n(413605),
    _ = n(451603),
    p = n(885714),
    g = n(314897),
    f = n(430824),
    x = n(701190),
    E = n(411198),
    C = n(610699),
    v = n(313876),
    I = n(778333),
    N = n(949981),
    S = n(680668),
    T = n(143708),
    b = n(358595),
    A = n(563917),
    j = n(135845),
    y = n(981631),
    Z = n(723359);
function R(e) {
    let { code: t, author: n, getAcceptInviteContext: R } = e,
        { invite: L, inviteError: P } = (0, a.cj)(
            [x.Z],
            () => ({
                invite: x.Z.getInvite(t),
                inviteError: x.Z.getInviteError(t)
            }),
            [t]
        ),
        k = null == L;
    l.useEffect(() => {
        k && r.Z.resolveInvite(t);
    }, [t, k]);
    let M =
            null != L
                ? L
                : {
                      state: y.r2o.RESOLVING,
                      code: ''
                  },
        { analyticsLocations: O } = (0, d.ZP)(),
        D = (0, a.e7)([f.Z], () => ((null == L ? void 0 : L.guild) != null ? f.Z.getGuild(L.guild.id) : null), [L]),
        w = (0, a.e7)([g.default], () => g.default.getId()),
        F = (0, a.e7)(
            [u.ZP],
            () => {
                var e;
                return u.ZP.getGuildScheduledEvent(null === (e = M.guild_scheduled_event) || void 0 === e ? void 0 : e.id);
            },
            [M]
        ),
        U = () => {
            null != M.channel && r.Z.transitionToInviteSync(M);
        },
        B = () => {
            if (null == D && (null == L ? void 0 : L.guild) != null) {
                let e = E.Qs(L.guild);
                if ((0, c.b)() && (0, c.Y)(e)) {
                    (0, o.mN)(Z.L0.NSFW_SERVER_INVITE_EMBED);
                    return;
                }
            }
            (0, _.yU)()
                ? (0, p.Z)({
                      analyticsSource: { page: y.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: y.ZY5.INVITE_EMBED,
                          section: y.jXE.GUILD_CAP_UPSELL_MODAL
                      },
                      analyticsLocations: O
                  })
                : r.Z.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: R('Invite Button Embed')
                  });
        },
        G = (0, i.jsx)(S.Z, {
            onTransitionToInviteChannel: U,
            onAcceptInstantInvite: B,
            currentUserId: w,
            guild: D,
            invite: M,
            author: n
        });
    switch (M.state) {
        case y.r2o.RESOLVING:
            G = (0, i.jsx)(b.Z, {});
            break;
        case y.r2o.EXPIRED:
        case y.r2o.BANNED:
            G = (0, i.jsx)(T.Z, {
                banned: M.state === y.r2o.BANNED,
                author: n
            });
            break;
        case y.r2o.ERROR:
            G = (0, i.jsx)(v.Z, {
                author: n,
                inviteError: P
            });
            break;
        default:
            switch ((0, h.VR)(M)) {
                case h.wx.GROUP_DM:
                    G = (0, i.jsx)(N.Z, {
                        onTransitionToInviteChannel: U,
                        onAcceptInstantInvite: B,
                        currentUserId: w,
                        invite: M,
                        author: n
                    });
                    break;
                case h.wx.FRIEND:
                    G = (0, i.jsx)(I.Z, {
                        invite: M,
                        author: n,
                        getAcceptInviteContext: R
                    });
                    break;
                default:
                    if ((0, h.TY)(M)) {
                        G = (0, i.jsx)(j.Z, {
                            onTransitionToInviteChannel: U,
                            onAcceptInstantInvite: B,
                            currentUserId: w,
                            guild: D,
                            invite: M
                        });
                        break;
                    }
                    if ((0, h.Tx)(M)) {
                        G = (0, i.jsx)(m.ZP, {
                            guildScheduledEvent: F,
                            guild: M.guild,
                            channel: M.channel,
                            isMember: null != D,
                            onAcceptInstantInvite: B,
                            onTransitionToInviteChannel: U
                        });
                        break;
                    }
                    if ((0, h.$P)(M)) {
                        G = (0, i.jsx)(A.Z, {
                            stageInstance: M.stage_instance,
                            guild: M.guild,
                            isMember: null != D,
                            onTransitionToInviteChannel: U,
                            onAcceptInstantInvite: B
                        });
                        break;
                    }
                    (0, h.P1)(M) &&
                        (G = (0, i.jsx)(C.Z, {
                            invite: M,
                            getAcceptInviteContext: R
                        }));
            }
    }
    return (0, i.jsx)(s.Z, {
        section: y.jXE.INVITE_LINK,
        children: G
    });
}
