n.d(t, { Z: () => L });
var r = n(951288),
    i = n(647438),
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
    C = n(508273),
    N = n(143708),
    R = n(358595),
    P = n(135845),
    D = n(981631),
    w = n(723359);
function L(e) {
    let { code: t, message: n, getAcceptInviteContext: L } = e,
        { invite: x, inviteError: M } = (0, a.cj)(
            [y.Z],
            () => ({
                invite: y.Z.getInvite(t),
                inviteError: y.Z.getInviteError(t),
            }),
            [t],
        ),
        k = null == x;
    i.useEffect(() => {
        k && o.ZP.resolveInvite(t);
    }, [t, k]);
    let j =
            null != x
                ? x
                : {
                      state: D.r2o.RESOLVING,
                      code: "",
                  },
        { analyticsLocations: U } = (0, u.ZP)(),
        G = (0, d.v)(),
        B = (0, a.e7)([b.Z], () => ((null == x ? void 0 : x.guild) != null ? b.Z.getGuild(x.guild.id) : null), [x]),
        Z = (0, a.e7)([E.default], () => E.default.getId()),
        F = (0, a.e7)([_.ZP], () => {
            var e;
            return _.ZP.getGuildScheduledEvent(null == (e = j.guild_scheduled_event) ? void 0 : e.id);
        }, [j]),
        V = () => {
            null != j.channel && o.ZP.transitionToInviteSync(j);
        },
        H = () => {
            if (null == B && (null == x ? void 0 : x.guild) != null) {
                let e = O.Qs(x.guild);
                if ((0, c.bN)() && (0, c.Yt)(e)) return void (0, l.mN)(w.L0.NSFW_SERVER_INVITE_EMBED);
            }
            (0, m.yU)()
                ? (0, g.Z)({
                      analyticsSource: { page: D.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: D.ZY5.INVITE_EMBED,
                          section: D.jXE.GUILD_CAP_UPSELL_MODAL,
                      },
                      analyticsLocations: U,
                  })
                : o.ZP.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: L("Invite Button Embed"),
                  });
        },
        Y = (0, r.jsx)(A.Z, {
            onTransitionToInviteChannel: V,
            onAcceptInstantInvite: H,
            currentUserId: Z,
            guild: B,
            invite: j,
            message: n,
        });
    switch (j.state) {
        case D.r2o.RESOLVING:
            Y = (0, r.jsx)(R.Z, {});
            break;
        case D.r2o.EXPIRED:
        case D.r2o.BANNED:
            Y = (0, r.jsx)(N.Z, {
                banned: j.state === D.r2o.BANNED,
                author: n.author,
                channelId: n.channel_id,
            });
            break;
        case D.r2o.ERROR:
            Y = (0, r.jsx)(I.Z, {
                author: n.author,
                inviteError: M,
            });
            break;
        default:
            switch ((0, h.VR)(j)) {
                case h.wx.GROUP_DM:
                    Y = (0, r.jsx)(S.Z, {
                        onTransitionToInviteChannel: V,
                        onAcceptInstantInvite: H,
                        currentUserId: Z,
                        invite: j,
                        message: n,
                    });
                    break;
                case h.wx.FRIEND:
                    Y = (0, r.jsx)(T.Z, {
                        invite: j,
                        message: n,
                        getAcceptInviteContext: L,
                    });
                    break;
                default:
                    if ((0, h.TY)(j)) {
                        Y = (0, r.jsx)(P.Z, {
                            onTransitionToInviteChannel: V,
                            onAcceptInstantInvite: H,
                            currentUserId: Z,
                            message: n,
                            guild: B,
                            invite: j,
                        });
                        break;
                    }
                    if ((0, h.Tx)(j)) {
                        Y = (0, r.jsx)(p.ZP, {
                            guildScheduledEvent: F,
                            guild: j.guild,
                            channel: j.channel,
                            isMember: null != B,
                            onAcceptInstantInvite: H,
                            onTransitionToInviteChannel: V,
                        });
                        break;
                    }
                    if ((0, h.P1)(j)) {
                        Y = (0, r.jsx)(v.Z, {
                            invite: j,
                            getAcceptInviteContext: L,
                            message: n,
                        });
                        break;
                    }
                    !G &&
                        (0, f.l)(j) &&
                        (Y = (0, r.jsx)(C.Z, {
                            onTransitionToInviteChannel: V,
                            onAcceptInstantInvite: H,
                            isMemberOfGuild: null != B,
                            invite: j,
                            message: n,
                        }));
            }
    }
    return (0, r.jsx)(s.Z, {
        section: D.jXE.INVITE_LINK,
        children: Y,
    });
}
