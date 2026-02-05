"use strict";
n.d(t, { Ay: () => D });
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
    p = n(773669),
    h = n(403362),
    m = n(562153),
    g = n(939341),
    E = n(576757),
    A = n(583846),
    I = n(398328),
    T = n(176563),
    y = n(506326),
    S = n(910692),
    v = n(299846),
    C = n(652215),
    b = n(985018);
let N = (e, t) => b.intl.formatToPlainString(b.t.tAwI1k, { username: t.username, activity: e.extra.activity_name }),
    R = (e, t, n) => {
        let r = b.t["bES+y2"],
            i = m.Ay.getName(t.guild_id, t.id, n),
            a = e.extra.activity_name;
        return b.intl.formatToMarkdownString(r, { gameName: a, userName: i }).replaceAll("*", "");
    },
    O = (e) => {
        let { entry: t, channel: n, users: r, countOthers: i } = e,
            a = b.t["7j/5mg"];
        return b.intl
            .formatToMarkdownString(a, {
                gameName: t.extra.activity_name,
                user1: m.Ay.getName(n?.guild_id, n?.id, r[0]),
                user2: m.Ay.getName(n?.guild_id, n?.id, r[1]),
                countOthers: i,
            })
            .replaceAll("*", "");
    },
    D = (e) => {
        let { channel: t, entry: n, onReaction: m, onVoiceChannelPreview: D, disableActivityProfileLinks: L } = e,
            { largeImage: w } = (0, g.nO)({ entry: n, showCoverImage: !1 }),
            { user: x, details: P, activity: M, embeddedActivity: k } = (0, v.u)(n),
            { primaryColor: U, secondaryColor: G } = (0, T.A)(w?.src),
            V = (0, a.bG)([p.default], () => p.default.locale),
            { displayParticipants: F, participant1: B, participant2: j, numOtherParticipants: H } = (0, E.A)(n, 3),
            Y = () => {
                (0, _.hg)(n.extra.application_id);
            },
            W = i.useCallback(
                (e) => {
                    if (w?.src == null || null == t || null == x) return;
                    let r = H > 0 ? O({ entry: n, channel: t, users: [B, j], countOthers: H }) : R(n, t, x);
                    return (0, I.Vq)({
                        entry: n,
                        applicationImageSrc: w?.src,
                        avatarSrcs: F.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, A.As)(n, V),
                        colors: [U, G],
                        channelId: e,
                    });
                },
                [w?.src, t, F, n, V, H, B, j, U, G, x],
            ),
            { data: K } = (0, f.YY)(n.extra.application_id),
            z = (0, u.A)({ application: K, analyticsLocations: [d.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
        if (null == x) return null;
        let $ = (0, r.jsx)(y.iT, { location: y.N5.POPOUT, entry: n }),
            q = (0, r.jsx)(S.BC, {
                channel: t,
                userDescription: (0, A.JM)(n) ? b.t.vPg1JT : b.t.rPqqts,
                title: n.extra.activity_name,
                subtitle: P,
                badges: $,
                entry: n,
                showCoverImage: !1,
                onClickTitle: L ? void 0 : Y,
                onClickSubtitle: L ? void 0 : Y,
                onClickThumbnail: L ? void 0 : Y,
            }),
            Z = (0, o.A)(M, C.jUm.JOIN) || (0, l.A)(M),
            Q = Z
                ? (0, r.jsx)(c.A, {
                      embeddedActivity: k,
                      activity: M,
                      user: x,
                      variant: "primary",
                      size: "md",
                      icon: s.Ihz,
                  })
                : null,
            X =
                null == z
                    ? null
                    : (0, r.jsx)(s.Button, {
                          variant: "primary",
                          size: "md",
                          fullWidth: !0,
                          onClick: z,
                          text: b.intl.string(b.t["jaYS/h"]),
                          icon: s.hpF,
                      }),
            J =
                null != X || L
                    ? null
                    : (0, r.jsx)(s.Button, {
                          variant: "primary",
                          size: "md",
                          fullWidth: !0,
                          onClick: Y,
                          text: b.intl.string(b.t.GDWYR8),
                          icon: s.k9F,
                      }),
            ee = [X, Z && !L ? Q : J].filter(h.Vq);
        return (0, r.jsxs)(S.YN, {
            children: [
                q,
                (0, r.jsx)(S.Eh, {
                    children: (0, r.jsx)(S.fD, {
                        onReaction: m,
                        onVoiceChannelPreview: D,
                        user: x,
                        channel: t,
                        generateReactionImage: W,
                        reactionImageAltText: N(n, x),
                        entry: n,
                        buttons: ee,
                    }),
                }),
            ],
        });
    };
