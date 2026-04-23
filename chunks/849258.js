"use strict";
n.d(t, { Ay: () => D });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(808666),
    o = n(821609),
    l = n(414499),
    u = n(323384),
    c = n(833349),
    d = n(765379),
    _ = n(359549),
    f = n(284525),
    p = n(793574),
    h = n(297486),
    E = n(627363),
    m = n(773669),
    g = n(403362),
    A = n(562153),
    I = n(939341),
    T = n(576757),
    S = n(583846),
    y = n(398328),
    N = n(176563),
    v = n(506326),
    C = n(910692),
    O = n(299846),
    R = n(652215),
    b = n(985018);
let D = (e) => {
    let { channel: t, entry: n, onReaction: D, onVoiceChannelPreview: L, disableActivityProfileLinks: w } = e,
        { largeImage: M } = (0, I.nO)({ entry: n, showCoverImage: !1 }),
        { user: P, details: x, activity: k, embeddedActivity: U } = (0, O.u)(n),
        { primaryColor: G, secondaryColor: F } = (0, N.A)(M?.src),
        V = (0, s.bG)([m.default], () => m.default.locale),
        { displayParticipants: B, participant1: H, participant2: j, numOtherParticipants: Y } = (0, T.A)(n, 3),
        W = () => {
            (0, h.hg)(n.extra.application_id);
        },
        K = i.useCallback(
            (e) => {
                let r, i, s;
                if (M?.src == null || null == t || null == P) return;
                let a =
                    Y > 0
                        ? ((e) => {
                              let { entry: t, channel: n, users: r, countOthers: i } = e,
                                  s = b.t["7j/5mg"];
                              return b.intl
                                  .formatToMarkdownString(s, {
                                      gameName: t.extra.activity_name,
                                      user1: A.Ay.getName(n?.guild_id, n?.id, r[0]),
                                      user2: A.Ay.getName(n?.guild_id, n?.id, r[1]),
                                      countOthers: i,
                                  })
                                  .replaceAll("*", "");
                          })({ entry: n, channel: t, users: [H, j], countOthers: Y })
                        : ((r = b.t["bES+y2"]),
                          (i = A.Ay.getName(t.guild_id, t.id, P)),
                          (s = n.extra.activity_name),
                          b.intl.formatToMarkdownString(r, { gameName: s, userName: i }).replaceAll("*", ""));
                return (0, y.Vq)({
                    entry: n,
                    applicationImageSrc: M?.src,
                    avatarSrcs: B.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: a,
                    timestamp: (0, S.As)(n, V),
                    colors: [G, F],
                    channelId: e,
                });
            },
            [M?.src, t, B, n, V, Y, H, j, G, F, P],
        ),
        { data: $ } = (0, E.YY)(n.extra.application_id),
        z = (0, _.A)({ application: $, analyticsLocations: [p.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == P) return null;
    let q = (0, r.jsx)(v.iT, { location: v.N5.POPOUT, entry: n }),
        X = (0, r.jsx)(C.BC, {
            channel: t,
            userDescription: (0, S.JM)(n) ? b.t.vPg1JT : b.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: x,
            badges: q,
            entry: n,
            showCoverImage: !1,
            onClickTitle: w ? void 0 : W,
            onClickSubtitle: w ? void 0 : W,
            onClickThumbnail: w ? void 0 : W,
        }),
        Q = (0, c.A)(k, R.jUm.JOIN) || (0, d.A)(k),
        Z = Q
            ? (0, r.jsx)(f.A, { embeddedActivity: U, activity: k, user: P, variant: "primary", size: "md", icon: a.I })
            : null,
        J =
            null == z
                ? null
                : (0, r.jsx)(o.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: z,
                      text: b.intl.string(b.t["jaYS/h"]),
                      icon: l.h,
                  }),
        ee =
            null != J || w
                ? null
                : (0, r.jsx)(o.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: W,
                      text: b.intl.string(b.t.GDWYR8),
                      icon: u.k,
                  }),
        et = [J, Q && !w ? Z : ee].filter(g.Vq);
    return (0, r.jsxs)(C.YN, {
        children: [
            X,
            (0, r.jsx)(C.Eh, {
                children: (0, r.jsx)(C.fD, {
                    onReaction: D,
                    onVoiceChannelPreview: L,
                    user: P,
                    channel: t,
                    generateReactionImage: K,
                    reactionImageAltText: b.intl.formatToPlainString(b.t.tAwI1k, {
                        username: P.username,
                        activity: n.extra.activity_name,
                    }),
                    entry: n,
                    buttons: et,
                }),
            }),
        ],
    });
};
