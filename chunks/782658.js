n.d(t, { Z: () => A });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(447543),
    l = n(410575),
    s = n(758119),
    c = n(622822),
    d = n(906732),
    u = n(924301),
    p = n(11868),
    m = n(413605),
    f = n(451603),
    h = n(885714),
    g = n(314897),
    _ = n(430824),
    b = n(701190),
    v = n(411198),
    y = n(610699),
    x = n(313876),
    E = n(778333),
    O = n(949981),
    j = n(680668),
    N = n(143708),
    C = n(358595),
    I = n(563917),
    S = n(135845),
    T = n(981631),
    P = n(723359);
function A(e) {
    let { code: t, author: n, getAcceptInviteContext: A } = e,
        { invite: w, inviteError: Z } = (0, a.cj)(
            [b.Z],
            () => ({
                invite: b.Z.getInvite(t),
                inviteError: b.Z.getInviteError(t)
            }),
            [t]
        ),
        k = null == w;
    i.useEffect(() => {
        k && o.ZP.resolveInvite(t);
    }, [t, k]);
    let R =
            null != w
                ? w
                : {
                      state: T.r2o.RESOLVING,
                      code: ''
                  },
        { analyticsLocations: D } = (0, d.ZP)(),
        L = (0, a.e7)([_.Z], () => ((null == w ? void 0 : w.guild) != null ? _.Z.getGuild(w.guild.id) : null), [w]),
        M = (0, a.e7)([g.default], () => g.default.getId()),
        W = (0, a.e7)(
            [u.ZP],
            () => {
                var e;
                return u.ZP.getGuildScheduledEvent(null === (e = R.guild_scheduled_event) || void 0 === e ? void 0 : e.id);
            },
            [R]
        ),
        F = () => {
            null != R.channel && o.ZP.transitionToInviteSync(R);
        },
        U = () => {
            if (null == L && (null == w ? void 0 : w.guild) != null) {
                let e = v.Qs(w.guild);
                if ((0, c.bN)() && (0, c.Yt)(e)) {
                    (0, s.mN)(P.L0.NSFW_SERVER_INVITE_EMBED);
                    return;
                }
            }
            (0, f.yU)()
                ? (0, h.Z)({
                      analyticsSource: { page: T.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: T.ZY5.INVITE_EMBED,
                          section: T.jXE.GUILD_CAP_UPSELL_MODAL
                      },
                      analyticsLocations: D
                  })
                : o.ZP.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: A('Invite Button Embed')
                  });
        },
        B = (0, r.jsx)(j.Z, {
            onTransitionToInviteChannel: F,
            onAcceptInstantInvite: U,
            currentUserId: M,
            guild: L,
            invite: R,
            author: n
        });
    switch (R.state) {
        case T.r2o.RESOLVING:
            B = (0, r.jsx)(C.Z, {});
            break;
        case T.r2o.EXPIRED:
        case T.r2o.BANNED:
            B = (0, r.jsx)(N.Z, {
                banned: R.state === T.r2o.BANNED,
                author: n
            });
            break;
        case T.r2o.ERROR:
            B = (0, r.jsx)(x.Z, {
                author: n,
                inviteError: Z
            });
            break;
        default:
            switch ((0, m.VR)(R)) {
                case m.wx.GROUP_DM:
                    B = (0, r.jsx)(O.Z, {
                        onTransitionToInviteChannel: F,
                        onAcceptInstantInvite: U,
                        currentUserId: M,
                        invite: R,
                        author: n
                    });
                    break;
                case m.wx.FRIEND:
                    B = (0, r.jsx)(E.Z, {
                        invite: R,
                        author: n,
                        getAcceptInviteContext: A
                    });
                    break;
                default:
                    if ((0, m.TY)(R)) {
                        B = (0, r.jsx)(S.Z, {
                            onTransitionToInviteChannel: F,
                            onAcceptInstantInvite: U,
                            currentUserId: M,
                            guild: L,
                            invite: R
                        });
                        break;
                    }
                    if ((0, m.Tx)(R)) {
                        B = (0, r.jsx)(p.ZP, {
                            guildScheduledEvent: W,
                            guild: R.guild,
                            channel: R.channel,
                            isMember: null != L,
                            onAcceptInstantInvite: U,
                            onTransitionToInviteChannel: F
                        });
                        break;
                    }
                    if ((0, m.$P)(R)) {
                        B = (0, r.jsx)(I.Z, {
                            invite: R,
                            stageInstance: R.stage_instance,
                            guild: R.guild,
                            isMember: null != L,
                            onTransitionToInviteChannel: F,
                            onAcceptInstantInvite: U
                        });
                        break;
                    }
                    (0, m.P1)(R) &&
                        (B = (0, r.jsx)(y.Z, {
                            invite: R,
                            getAcceptInviteContext: A
                        }));
            }
    }
    return (0, r.jsx)(l.Z, {
        section: T.jXE.INVITE_LINK,
        children: B
    });
}
