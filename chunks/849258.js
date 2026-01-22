n.d(t, {
    Ay: () => w,
}),
    n(747238),
    n(812715),
    n(866193);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(833349),
    l = n(765379),
    c = n(359549),
    u = n(284525),
    d = n(793574),
    f = n(297486),
    p = n(627363),
    _ = n(773669),
    h = n(403362),
    m = n(562153),
    g = n(939341),
    E = n(576757),
    b = n(583846),
    y = n(398328),
    O = n(176563),
    A = n(506326),
    v = n(910692),
    S = n(299846),
    I = n(652215),
    T = n(985018);
let C = (e, t) =>
        T.intl.formatToPlainString(T.t.tAwI1k, {
            username: t.username,
            activity: e.extra.activity_name,
        }),
    N = (e, t, n) => {
        let r = T.t["bES+y2"],
            i = m.Ay.getName(t.guild_id, t.id, n),
            a = e.extra.activity_name;
        return T.intl
            .formatToMarkdownString(r, {
                gameName: a,
                userName: i,
            })
            .replaceAll("*", "");
    },
    R = (e) => {
        let { entry: t, channel: n, users: r, countOthers: i } = e,
            a = T.t["7j/5mg"];
        return T.intl
            .formatToMarkdownString(a, {
                gameName: t.extra.activity_name,
                user1: m.Ay.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[0]),
                user2: m.Ay.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[1]),
                countOthers: i,
            })
            .replaceAll("*", "");
    },
    w = (e) => {
        let { channel: t, entry: n, onReaction: m, onVoiceChannelPreview: w, disableActivityProfileLinks: P } = e,
            { largeImage: D } = (0, g.nO)({
                entry: n,
                showCoverImage: !1,
            }),
            { user: x, details: L, activity: j, embeddedActivity: M } = (0, S.u)(n),
            { primaryColor: k, secondaryColor: U } = (0, O.A)(null == D ? void 0 : D.src),
            G = (0, a.bG)([_.default], () => _.default.locale),
            { displayParticipants: V, participant1: F, participant2: B, numOtherParticipants: H } = (0, E.A)(n, 3),
            Y = () => {
                (0, f.hg)(n.extra.application_id);
            },
            W = i.useCallback(
                (e) => {
                    if ((null == D ? void 0 : D.src) == null || null == t || null == x) return;
                    let r =
                        H > 0
                            ? R({
                                  entry: n,
                                  channel: t,
                                  users: [F, B],
                                  countOthers: H,
                              })
                            : N(n, t, x);
                    return (0, y.Vq)({
                        entry: n,
                        applicationImageSrc: null == D ? void 0 : D.src,
                        avatarSrcs: V.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, b.As)(n, G),
                        colors: [k, U],
                        channelId: e,
                    });
                },
                [null == D ? void 0 : D.src, t, V, n, G, H, F, B, k, U, x],
            ),
            { data: K } = (0, p.YY)(n.extra.application_id),
            z = (0, c.A)({
                application: K,
                analyticsLocations: [d.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT],
            });
        if (null == x) return null;
        let q = (0, r.jsx)(A.iT, {
                location: A.N5.POPOUT,
                entry: n,
            }),
            X = (0, r.jsx)(v.BC, {
                channel: t,
                userDescription: (0, b.JM)(n) ? T.t.vPg1JT : T.t.rPqqts,
                title: n.extra.activity_name,
                subtitle: L,
                badges: q,
                entry: n,
                showCoverImage: !1,
                onClickTitle: P ? void 0 : Y,
                onClickSubtitle: P ? void 0 : Y,
                onClickThumbnail: P ? void 0 : Y,
            }),
            Z = (0, o.A)(j, I.jUm.JOIN) || (0, l.A)(j),
            Q = Z
                ? (0, r.jsx)(u.A, {
                      embeddedActivity: M,
                      activity: j,
                      user: x,
                      variant: "primary",
                      size: "md",
                      icon: s.Ihz,
                  })
                : null,
            $ =
                null == z
                    ? null
                    : (0, r.jsx)(s.Button, {
                          variant: "primary",
                          size: "md",
                          fullWidth: !0,
                          onClick: z,
                          text: T.intl.string(T.t["jaYS/h"]),
                          icon: s.hpF,
                      }),
            J =
                null != $ || P
                    ? null
                    : (0, r.jsx)(s.Button, {
                          variant: "primary",
                          size: "md",
                          fullWidth: !0,
                          onClick: Y,
                          text: T.intl.string(T.t.GDWYR8),
                          icon: s.k9F,
                      }),
            ee = [$, Z && !P ? Q : J].filter(h.Vq);
        return (0, r.jsxs)(v.YN, {
            children: [
                X,
                (0, r.jsx)(v.Eh, {
                    children: (0, r.jsx)(v.fD, {
                        onReaction: m,
                        onVoiceChannelPreview: w,
                        user: x,
                        channel: t,
                        generateReactionImage: W,
                        reactionImageAltText: C(n, x),
                        entry: n,
                        buttons: ee,
                    }),
                }),
            ],
        });
    };
