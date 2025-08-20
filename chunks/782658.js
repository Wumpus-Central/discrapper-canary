n.d(t, { Z: () => x });
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
    w = n(981631),
    D = n(723359);
function x(e) {
    let { code: t, message: n, getAcceptInviteContext: x } = e,
        { invite: L, inviteError: j } = (0, a.cj)(
            [y.Z],
            () => ({
                invite: y.Z.getInvite(t),
                inviteError: y.Z.getInviteError(t),
            }),
            [t],
        ),
        M = null == L;
    i.useEffect(() => {
        M && o.ZP.resolveInvite(t);
    }, [t, M]);
    let k =
            null != L
                ? L
                : {
                      state: w.r2o.RESOLVING,
                      code: "",
                  },
        { analyticsLocations: U } = (0, u.ZP)(),
        G = (0, d.v)(),
        B = (0, a.e7)([b.Z], () => ((null == L ? void 0 : L.guild) != null ? b.Z.getGuild(L.guild.id) : null), [L]),
        Z = (0, a.e7)([E.default], () => E.default.getId()),
        V = (0, a.e7)([_.ZP], () => {
            var e;
            return _.ZP.getGuildScheduledEvent(null == (e = k.guild_scheduled_event) ? void 0 : e.id);
        }, [k]),
        F = () => {
            null != k.channel && o.ZP.transitionToInviteSync(k);
        },
        H = () => {
            if (null == B && (null == L ? void 0 : L.guild) != null) {
                let e = O.Qs(L.guild);
                if ((0, c.bN)() && (0, c.Yt)(e)) return void (0, l.mN)(D.L0.NSFW_SERVER_INVITE_EMBED);
            }
            (0, m.yU)()
                ? (0, g.Z)({
                      analyticsSource: { page: w.ZY5.INVITE_EMBED },
                      analyticsLocation: {
                          page: w.ZY5.INVITE_EMBED,
                          section: w.jXE.GUILD_CAP_UPSELL_MODAL,
                      },
                      analyticsLocations: U,
                  })
                : o.ZP.acceptInviteAndTransitionToInviteChannel({
                      inviteKey: t,
                      context: x("Invite Button Embed"),
                  });
        },
        Y = (0, r.jsx)(A.Z, {
            onTransitionToInviteChannel: F,
            onAcceptInstantInvite: H,
            currentUserId: Z,
            guild: B,
            invite: k,
            message: n,
        });
    switch (k.state) {
        case w.r2o.RESOLVING:
            Y = (0, r.jsx)(R.Z, {});
            break;
        case w.r2o.EXPIRED:
        case w.r2o.BANNED:
            Y = (0, r.jsx)(N.Z, {
                banned: k.state === w.r2o.BANNED,
                author: n.author,
                channelId: n.channel_id,
            });
            break;
        case w.r2o.ERROR:
            Y = (0, r.jsx)(I.Z, {
                author: n.author,
                inviteError: j,
            });
            break;
        default:
            switch ((0, h.VR)(k)) {
                case h.wx.GROUP_DM:
                    Y = (0, r.jsx)(S.Z, {
                        onTransitionToInviteChannel: F,
                        onAcceptInstantInvite: H,
                        currentUserId: Z,
                        invite: k,
                        message: n,
                    });
                    break;
                case h.wx.FRIEND:
                    Y = (0, r.jsx)(T.Z, {
                        invite: k,
                        message: n,
                        getAcceptInviteContext: x,
                    });
                    break;
                default:
                    if ((0, h.TY)(k)) {
                        Y = (0, r.jsx)(P.Z, {
                            onTransitionToInviteChannel: F,
                            onAcceptInstantInvite: H,
                            currentUserId: Z,
                            message: n,
                            guild: B,
                            invite: k,
                        });
                        break;
                    }
                    if ((0, h.Tx)(k)) {
                        Y = (0, r.jsx)(p.ZP, {
                            guildScheduledEvent: V,
                            guild: k.guild,
                            channel: k.channel,
                            isMember: null != B,
                            onAcceptInstantInvite: H,
                            onTransitionToInviteChannel: F,
                        });
                        break;
                    }
                    if ((0, h.P1)(k)) {
                        Y = (0, r.jsx)(v.Z, {
                            invite: k,
                            getAcceptInviteContext: x,
                            message: n,
                        });
                        break;
                    }
                    !G &&
                        (0, f.l)(k) &&
                        (Y = (0, r.jsx)(C.Z, {
                            onTransitionToInviteChannel: F,
                            onAcceptInstantInvite: H,
                            isMemberOfGuild: null != B,
                            invite: k,
                            message: n,
                        }));
            }
    }
    return (0, r.jsx)(s.Z, {
        section: w.jXE.INVITE_LINK,
        children: Y,
    });
}
