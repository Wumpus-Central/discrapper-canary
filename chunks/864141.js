n.d(t, { Z: () => N });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(28664),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(933557),
    f = n(430824),
    _ = n(957575),
    p = n(323038),
    h = n(960870),
    m = n(139793),
    g = n(652853),
    E = n(336383),
    b = n(194811),
    y = n(265386),
    O = n(340266),
    v = n(849755),
    I = n(384298),
    T = n(670451),
    S = n(671955),
    A = n(388032),
    C = n(704543);
function N(e) {
    let { user: t, currentUser: n, voiceChannel: i, className: N, onClose: R } = e,
        { themeType: P } = (0, g.z)(),
        { analyticsLocations: w } = (0, u.ZP)(c.Z.USER_PROFILE_VOICE_ACTIVITY_CARD),
        D = (0, h.Z)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: i.id,
            user: t,
            analyticsLocations: w,
        }),
        x = (0, m.Z)({
            userId: t.id,
            onAction: D,
        }),
        L = (0, o.e7)([f.Z], () => f.Z.getGuild(i.guild_id)),
        M = (0, p.Z)(i),
        j = (0, d.ZP)(i),
        { channelStatusEnabled: k } = (0, _.D)({ location: "UserProfileVoiceActivityCard" }),
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
                children: (0, r.jsx)(I.Z, {
                    channel: i,
                    onAction: D,
                    onClose: R,
                }),
            }),
        B =
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
            onClose: R,
            "aria-label": "".concat(B, ", ").concat(j),
            children: [
                (0, r.jsx)(b.Z, {
                    text: B,
                    tags: U(),
                    contextMenu: (0, r.jsx)(T.Z, {
                        display: "voice",
                        user: t,
                        onClose: R,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: C.body,
                    children: (0, r.jsxs)("div", {
                        className: C.content,
                        children: [
                            (0, r.jsx)(O.Z, {
                                users: M,
                                channel: i,
                            }),
                            (0, r.jsxs)("div", {
                                className: C.details,
                                children: [
                                    (0, r.jsx)(y.Z, {
                                        channel: i,
                                        guild: L,
                                        onAction: D,
                                        onClose: R,
                                    }),
                                    k &&
                                        i.isGuildVoice() &&
                                        (0, r.jsx)(v.Z, {
                                            voiceChannel: i,
                                            onAction: D,
                                            onClose: R,
                                        }),
                                    P === S.l.MODAL_V2 && G(),
                                ],
                            }),
                            P === S.l.MODAL && G(),
                        ],
                    }),
                }),
                P !== S.l.MODAL && P !== S.l.MODAL_V2 && G(),
            ],
        }),
    });
}
