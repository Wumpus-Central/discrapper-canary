n.d(t, {
    Z: function () {
        return P;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(447543),
    o = n(410575),
    s = n(758119),
    c = n(622822),
    u = n(906732),
    d = n(924301),
    m = n(997321),
    h = n(413605),
    f = n(451603),
    p = n(885714),
    _ = n(314897),
    g = n(430824),
    E = n(701190),
    C = n(411198),
    I = n(610699),
    x = n(313876),
    N = n(778333),
    v = n(949981),
    T = n(680668),
    S = n(143708),
    A = n(358595),
    b = n(563917),
    j = n(135845),
    R = n(981631),
    Z = n(723359);
function P(e) {
    let { code: t, author: n, getAcceptInviteContext: P } = e,
        { invite: L, inviteError: y } = (0, l.cj)(
            [E.Z],
            () => ({
                invite: E.Z.getInvite(t),
                inviteError: E.Z.getInviteError(t)
            }),
            [t]
        ),
        O = null == L;
    r.useEffect(() => {
        O && a.Z.resolveInvite(t);
    }, [t, O]);
    let M =
            null != L
                ? L
                : {
                      state: R.r2o.RESOLVING,
                      code: ''
                  },
        { analyticsLocations: k } = (0, u.ZP)(),
        D = (0, l.e7)([g.Z], () => ((null == L ? void 0 : L.guild) != null ? g.Z.getGuild(L.guild.id) : null), [L]),
        B = (0, l.e7)([_.default], () => _.default.getId()),
        U = (0, l.e7)(
            [d.ZP],
            () => {
                var e;
                return d.ZP.getGuildScheduledEvent(null === (e = M.guild_scheduled_event) || void 0 === e ? void 0 : e.id);
            },
            [M]
        ),
        w = () => {
            null != M.channel && a.Z.transitionToInviteSync(M);
        },
        F = () => {
            if (null == D && (null == L ? void 0 : L.guild) != null) {
                let e = C.Qs(L.guild);
                if ((0, c.b)() && (0, c.Y)(e)) {
                    (0, s.mN)(Z.L0.NSFW_SERVER_INVITE_EMBED);
                    return;
                }
            }
            (0, f.yU)()
                ? (0, p.Z)({
                      analyticsSource: { page: R.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: R.ZY5.INVITE_EMBED,
                          section: R.jXE.GUILD_CAP_UPSELL_MODAL
                      },
                      analyticsLocations: k
                  })
                : a.Z.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: P('Invite Button Embed')
                  });
        },
        G = (0, i.jsx)(T.Z, {
            onTransitionToInviteChannel: w,
            onAcceptInstantInvite: F,
            currentUserId: B,
            guild: D,
            invite: M,
            author: n
        });
    switch (M.state) {
        case R.r2o.RESOLVING:
            G = (0, i.jsx)(A.Z, {});
            break;
        case R.r2o.EXPIRED:
        case R.r2o.BANNED:
            G = (0, i.jsx)(S.Z, {
                banned: M.state === R.r2o.BANNED,
                author: n
            });
            break;
        case R.r2o.ERROR:
            G = (0, i.jsx)(x.Z, {
                author: n,
                inviteError: y
            });
            break;
        default:
            switch ((0, h.VR)(M)) {
                case h.wx.GROUP_DM:
                    G = (0, i.jsx)(v.Z, {
                        onTransitionToInviteChannel: w,
                        onAcceptInstantInvite: F,
                        currentUserId: B,
                        invite: M,
                        author: n
                    });
                    break;
                case h.wx.FRIEND:
                    G = (0, i.jsx)(N.Z, {
                        invite: M,
                        author: n,
                        getAcceptInviteContext: P
                    });
                    break;
                default:
                    if ((0, h.TY)(M)) {
                        G = (0, i.jsx)(j.Z, {
                            onTransitionToInviteChannel: w,
                            onAcceptInstantInvite: F,
                            currentUserId: B,
                            guild: D,
                            invite: M
                        });
                        break;
                    }
                    if ((0, h.Tx)(M)) {
                        G = (0, i.jsx)(m.ZP, {
                            guildScheduledEvent: U,
                            guild: M.guild,
                            channel: M.channel,
                            isMember: null != D,
                            onAcceptInstantInvite: F,
                            onTransitionToInviteChannel: w
                        });
                        break;
                    }
                    if ((0, h.$P)(M)) {
                        G = (0, i.jsx)(b.Z, {
                            stageInstance: M.stage_instance,
                            guild: M.guild,
                            isMember: null != D,
                            onTransitionToInviteChannel: w,
                            onAcceptInstantInvite: F
                        });
                        break;
                    }
                    (0, h.P1)(M) &&
                        (G = (0, i.jsx)(I.Z, {
                            invite: M,
                            getAcceptInviteContext: P
                        }));
            }
    }
    return (0, i.jsx)(o.Z, {
        section: R.jXE.INVITE_LINK,
        children: G
    });
}
