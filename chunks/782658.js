n.d(t, { Z: () => x });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(447543),
    s = n(410575),
    l = n(758119),
    c = n(622822),
    u = n(906732),
    d = n(749958),
    f = n(997431),
    _ = n(924301),
    p = n(11868),
    h = n(413605),
    m = n(451603),
    g = n(885714),
    E = n(314897),
    b = n(430824),
    y = n(701190),
    O = n(411198),
    v = n(610699),
    I = n(313876),
    T = n(778333),
    S = n(949981),
    A = n(680668),
    N = n(508273),
    C = n(143708),
    w = n(358595),
    R = n(563917),
    P = n(135845),
    D = n(981631),
    L = n(723359);
function x(e) {
    let { code: t, message: n, getAcceptInviteContext: x } = e,
        { invite: k, inviteError: j } = (0, a.cj)(
            [y.Z],
            () => ({
                invite: y.Z.getInvite(t),
                inviteError: y.Z.getInviteError(t)
            }),
            [t]
        ),
        M = null == k;
    i.useEffect(() => {
        M && o.ZP.resolveInvite(t);
    }, [t, M]);
    let U =
            null != k
                ? k
                : {
                      state: D.r2o.RESOLVING,
                      code: ''
                  },
        { analyticsLocations: G } = (0, u.ZP)(),
        B = (0, d.v)(),
        Z = (0, a.e7)([b.Z], () => ((null == k ? void 0 : k.guild) != null ? b.Z.getGuild(k.guild.id) : null), [k]),
        F = (0, a.e7)([E.default], () => E.default.getId()),
        V = (0, a.e7)(
            [_.ZP],
            () => {
                var e;
                return _.ZP.getGuildScheduledEvent(null == (e = U.guild_scheduled_event) ? void 0 : e.id);
            },
            [U]
        ),
        H = () => {
            null != U.channel && o.ZP.transitionToInviteSync(U);
        },
        Y = () => {
            if (null == Z && (null == k ? void 0 : k.guild) != null) {
                let e = O.Qs(k.guild);
                if ((0, c.bN)() && (0, c.Yt)(e)) return void (0, l.mN)(L.L0.NSFW_SERVER_INVITE_EMBED);
            }
            (0, m.yU)()
                ? (0, g.Z)({
                      analyticsSource: { page: D.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: D.ZY5.INVITE_EMBED,
                          section: D.jXE.GUILD_CAP_UPSELL_MODAL
                      },
                      analyticsLocations: G
                  })
                : o.ZP.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: x('Invite Button Embed')
                  });
        },
        W = (0, r.jsx)(A.Z, {
            onTransitionToInviteChannel: H,
            onAcceptInstantInvite: Y,
            currentUserId: F,
            guild: Z,
            invite: U,
            message: n
        });
    switch (U.state) {
        case D.r2o.RESOLVING:
            W = (0, r.jsx)(w.Z, {});
            break;
        case D.r2o.EXPIRED:
        case D.r2o.BANNED:
            W = (0, r.jsx)(C.Z, {
                banned: U.state === D.r2o.BANNED,
                author: n.author,
                channelId: n.channel_id
            });
            break;
        case D.r2o.ERROR:
            W = (0, r.jsx)(I.Z, {
                author: n.author,
                inviteError: j
            });
            break;
        default:
            switch ((0, h.VR)(U)) {
                case h.wx.GROUP_DM:
                    W = (0, r.jsx)(S.Z, {
                        onTransitionToInviteChannel: H,
                        onAcceptInstantInvite: Y,
                        currentUserId: F,
                        invite: U,
                        message: n
                    });
                    break;
                case h.wx.FRIEND:
                    W = (0, r.jsx)(T.Z, {
                        invite: U,
                        message: n,
                        getAcceptInviteContext: x
                    });
                    break;
                default:
                    if ((0, h.TY)(U)) {
                        W = (0, r.jsx)(P.Z, {
                            onTransitionToInviteChannel: H,
                            onAcceptInstantInvite: Y,
                            currentUserId: F,
                            message: n,
                            guild: Z,
                            invite: U
                        });
                        break;
                    }
                    if ((0, h.Tx)(U)) {
                        W = (0, r.jsx)(p.ZP, {
                            guildScheduledEvent: V,
                            guild: U.guild,
                            channel: U.channel,
                            isMember: null != Z,
                            onAcceptInstantInvite: Y,
                            onTransitionToInviteChannel: H
                        });
                        break;
                    }
                    if ((0, h.$P)(U)) {
                        W = (0, r.jsx)(R.Z, {
                            invite: U,
                            stageInstance: U.stage_instance,
                            guild: U.guild,
                            isMember: null != Z,
                            message: n,
                            onTransitionToInviteChannel: H,
                            onAcceptInstantInvite: Y
                        });
                        break;
                    }
                    if ((0, h.P1)(U)) {
                        W = (0, r.jsx)(v.Z, {
                            invite: U,
                            getAcceptInviteContext: x,
                            message: n
                        });
                        break;
                    }
                    !B &&
                        (0, f.l)(U) &&
                        (W = (0, r.jsx)(N.Z, {
                            onTransitionToInviteChannel: H,
                            onAcceptInstantInvite: Y,
                            isMemberOfGuild: null != Z,
                            invite: U,
                            message: n
                        }));
            }
    }
    return (0, r.jsx)(s.Z, {
        section: D.jXE.INVITE_LINK,
        children: W
    });
}
