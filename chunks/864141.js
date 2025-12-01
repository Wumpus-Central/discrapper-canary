n.d(t, { Z: () => N });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(28664),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(933557),
    f = n(430824),
    p = n(957575),
    _ = n(323038),
    m = n(960870),
    h = n(139793),
    g = n(652853),
    E = n(336383),
    b = n(194811),
    y = n(265386),
    O = n(340266),
    v = n(849755),
    S = n(384298),
    I = n(670451),
    T = n(671955),
    A = n(388032),
    C = n(704543);
function N(e) {
    let { user: t, currentUser: n, voiceChannel: i, className: N, onClose: P } = e,
        { themeType: R } = (0, g.z)(),
        { analyticsLocations: w } = (0, u.ZP)(c.Z.USER_PROFILE_VOICE_ACTIVITY_CARD),
        D = (0, m.Z)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: i.id,
            user: t,
            analyticsLocations: w,
        }),
        x = (0, h.Z)({
            userId: t.id,
            onAction: D,
        }),
        L = (0, o.e7)([f.Z], () => f.Z.getGuild(i.guild_id)),
        j = (0, _.Z)(i),
        M = (0, d.ZP)(i),
        { channelStatusEnabled: k } = (0, p.D)({ location: "UserProfileVoiceActivityCard" }),
        U = () => {
            if (t.id !== n.id) return null;
            let e = i.isDM() || i.isGroupDM() ? A.intl.string(A.t["+DsWbX"]) : A.intl.string(A.t.xOVEjc);
            return (0, r.jsx)(s.u, {
                text: e,
                children: (0, r.jsx)(l.d3s, { size: "xxs" }),
            });
        },
        G = () =>
            (0, r.jsx)("div", {
                className: C.actions,
                children: (0, r.jsx)(S.Z, {
                    channel: i,
                    onAction: D,
                    onClose: P,
                }),
            }),
        Z =
            i.isDM() || i.isGroupDM()
                ? A.intl.string(A.t["9FaEzi"])
                : i.isGuildStageVoice()
                  ? A.intl.string(A.t.QygGCN)
                  : A.intl.string(A.t.msxteM);
    return (0, r.jsx)(u.Gt, {
        value: w,
        children: (0, r.jsxs)(E.Z, {
            ref: x,
            className: a()(C.card, N),
            onAction: D,
            onClose: P,
            "aria-label": "".concat(Z, ", ").concat(M),
            children: [
                (0, r.jsx)(b.Z, {
                    text: Z,
                    tags: U(),
                    contextMenu: (0, r.jsx)(I.Z, {
                        display: "voice",
                        user: t,
                        onClose: P,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: C.body,
                    children: (0, r.jsxs)("div", {
                        className: C.content,
                        children: [
                            (0, r.jsx)(O.Z, {
                                users: j,
                                channel: i,
                            }),
                            (0, r.jsxs)("div", {
                                className: C.details,
                                children: [
                                    (0, r.jsx)(y.Z, {
                                        channel: i,
                                        guild: L,
                                        onAction: D,
                                        onClose: P,
                                    }),
                                    k &&
                                        i.isGuildVoice() &&
                                        (0, r.jsx)(v.Z, {
                                            voiceChannel: i,
                                            onAction: D,
                                            onClose: P,
                                        }),
                                    R === T.l.MODAL_V2 && G(),
                                ],
                            }),
                            R === T.l.MODAL && G(),
                        ],
                    }),
                }),
                R !== T.l.MODAL && R !== T.l.MODAL_V2 && G(),
            ],
        }),
    });
}
