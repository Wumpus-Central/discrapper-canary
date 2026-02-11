"use strict";
n.d(t, { Ay: () => L });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(833349),
    l = n(765379),
    u = n(359549),
    c = n(284525),
    d = n(793574),
    _ = n(297486),
    f = n(627363),
    h = n(773669),
    p = n(403362),
    g = n(562153),
    E = n(939341),
    A = n(576757),
    I = n(583846),
    T = n(398328),
    y = n(176563),
    S = n(506326),
    v = n(910692),
    C = n(299846),
    b = n(652215),
    N = n(985018);
let R = (e, t) => N.intl.formatToPlainString(N.t.tAwI1k, { username: t.username, activity: e.extra.activity_name }),
    O = (e, t, n) => {
        let r = N.t["bES+y2"],
            i = g.Ay.getName(t.guild_id, t.id, n),
            a = e.extra.activity_name;
        return N.intl.formatToMarkdownString(r, { gameName: a, userName: i }).replaceAll("*", "");
    },
    D = (e) => {
        let { entry: t, channel: n, users: r, countOthers: i } = e,
            a = N.t["7j/5mg"];
        return N.intl
            .formatToMarkdownString(a, {
                gameName: t.extra.activity_name,
                user1: g.Ay.getName(n?.guild_id, n?.id, r[0]),
                user2: g.Ay.getName(n?.guild_id, n?.id, r[1]),
                countOthers: i,
            })
            .replaceAll("*", "");
    },
    L = (e) => {
        let { channel: t, entry: n, onReaction: g, onVoiceChannelPreview: L, disableActivityProfileLinks: w } = e,
            { largeImage: x } = (0, E.nO)({ entry: n, showCoverImage: !1 }),
            { user: P, details: M, activity: k, embeddedActivity: U } = (0, C.u)(n),
            { primaryColor: G, secondaryColor: F } = (0, y.A)(x?.src),
            V = (0, a.bG)([h.default], () => h.default.locale),
            { displayParticipants: B, participant1: j, participant2: H, numOtherParticipants: Y } = (0, A.A)(n, 3),
            W = () => {
                (0, _.hg)(n.extra.application_id);
            },
            K = i.useCallback(
                (e) => {
                    if (x?.src == null || null == t || null == P) return;
                    let r = Y > 0 ? D({ entry: n, channel: t, users: [j, H], countOthers: Y }) : O(n, t, P);
                    return (0, T.Vq)({
                        entry: n,
                        applicationImageSrc: x?.src,
                        avatarSrcs: B.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, I.As)(n, V),
                        colors: [G, F],
                        channelId: e,
                    });
                },
                [x?.src, t, B, n, V, Y, j, H, G, F, P],
            ),
            { data: $ } = (0, f.YY)(n.extra.application_id),
            z = (0, u.A)({ application: $, analyticsLocations: [d.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
        if (null == P) return null;
        let q = (0, r.jsx)(S.iT, { location: S.N5.POPOUT, entry: n }),
            X = (0, r.jsx)(v.BC, {
                channel: t,
                userDescription: (0, I.JM)(n) ? N.t.vPg1JT : N.t.rPqqts,
                title: n.extra.activity_name,
                subtitle: M,
                badges: q,
                entry: n,
                showCoverImage: !1,
                onClickTitle: w ? void 0 : W,
                onClickSubtitle: w ? void 0 : W,
                onClickThumbnail: w ? void 0 : W,
            }),
            Z = (0, o.A)(k, b.jUm.JOIN) || (0, l.A)(k),
            Q = Z
                ? (0, r.jsx)(c.A, {
                      embeddedActivity: U,
                      activity: k,
                      user: P,
                      variant: "primary",
                      size: "md",
                      icon: s.Ihz,
                  })
                : null,
            J =
                null == z
                    ? null
                    : (0, r.jsx)(s.Button, {
                          variant: "primary",
                          size: "md",
                          fullWidth: !0,
                          onClick: z,
                          text: N.intl.string(N.t["jaYS/h"]),
                          icon: s.hpF,
                      }),
            ee =
                null != J || w
                    ? null
                    : (0, r.jsx)(s.Button, {
                          variant: "primary",
                          size: "md",
                          fullWidth: !0,
                          onClick: W,
                          text: N.intl.string(N.t.GDWYR8),
                          icon: s.k9F,
                      }),
            et = [J, Z && !w ? Q : ee].filter(p.Vq);
        return (0, r.jsxs)(v.YN, {
            children: [
                X,
                (0, r.jsx)(v.Eh, {
                    children: (0, r.jsx)(v.fD, {
                        onReaction: g,
                        onVoiceChannelPreview: L,
                        user: P,
                        channel: t,
                        generateReactionImage: K,
                        reactionImageAltText: R(n, P),
                        entry: n,
                        buttons: et,
                    }),
                }),
            ],
        });
    };
