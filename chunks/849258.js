"use strict";
n.d(t, { Ay: () => D });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
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
    E = n(939341),
    g = n(576757),
    A = n(583846),
    I = n(398328),
    T = n(176563),
    S = n(506326),
    y = n(910692),
    v = n(299846),
    N = n(652215),
    C = n(985018);
let b = (e, t) => C.intl.formatToPlainString(C.t.tAwI1k, { username: t.username, activity: e.extra.activity_name }),
    R = (e, t, n) => {
        let r = C.t["bES+y2"],
            i = m.Ay.getName(t.guild_id, t.id, n),
            s = e.extra.activity_name;
        return C.intl.formatToMarkdownString(r, { gameName: s, userName: i }).replaceAll("*", "");
    },
    O = (e) => {
        let { entry: t, channel: n, users: r, countOthers: i } = e,
            s = C.t["7j/5mg"];
        return C.intl
            .formatToMarkdownString(s, {
                gameName: t.extra.activity_name,
                user1: m.Ay.getName(n?.guild_id, n?.id, r[0]),
                user2: m.Ay.getName(n?.guild_id, n?.id, r[1]),
                countOthers: i,
            })
            .replaceAll("*", "");
    },
    D = (e) => {
        let { channel: t, entry: n, onReaction: m, onVoiceChannelPreview: D, disableActivityProfileLinks: L } = e,
            { largeImage: w } = (0, E.nO)({ entry: n, showCoverImage: !1 }),
            { user: x, details: M, activity: P, embeddedActivity: k } = (0, v.u)(n),
            { primaryColor: U, secondaryColor: G } = (0, T.A)(w?.src),
            F = (0, s.bG)([p.default], () => p.default.locale),
            { displayParticipants: V, participant1: B, participant2: H, numOtherParticipants: j } = (0, g.A)(n, 3),
            Y = () => {
                (0, _.hg)(n.extra.application_id);
            },
            W = i.useCallback(
                (e) => {
                    if (w?.src == null || null == t || null == x) return;
                    let r = j > 0 ? O({ entry: n, channel: t, users: [B, H], countOthers: j }) : R(n, t, x);
                    return (0, I.Vq)({
                        entry: n,
                        applicationImageSrc: w?.src,
                        avatarSrcs: V.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: r,
                        timestamp: (0, A.As)(n, F),
                        colors: [U, G],
                        channelId: e,
                    });
                },
                [w?.src, t, V, n, F, j, B, H, U, G, x],
            ),
            { data: K } = (0, f.YY)(n.extra.application_id),
            z = (0, u.A)({ application: K, analyticsLocations: [d.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
        if (null == x) return null;
        let $ = (0, r.jsx)(S.iT, { location: S.N5.POPOUT, entry: n }),
            q = (0, r.jsx)(y.BC, {
                channel: t,
                userDescription: (0, A.JM)(n) ? C.t.vPg1JT : C.t.rPqqts,
                title: n.extra.activity_name,
                subtitle: M,
                badges: $,
                entry: n,
                showCoverImage: !1,
                onClickTitle: L ? void 0 : Y,
                onClickSubtitle: L ? void 0 : Y,
                onClickThumbnail: L ? void 0 : Y,
            }),
            Z = (0, o.A)(P, N.jUm.JOIN) || (0, l.A)(P),
            X = Z
                ? (0, r.jsx)(c.A, {
                      embeddedActivity: k,
                      activity: P,
                      user: x,
                      variant: "primary",
                      size: "md",
                      icon: a.Ihz,
                  })
                : null,
            Q =
                null == z
                    ? null
                    : (0, r.jsx)(a.Button, {
                          variant: "primary",
                          size: "md",
                          fullWidth: !0,
                          onClick: z,
                          text: C.intl.string(C.t["jaYS/h"]),
                          icon: a.hpF,
                      }),
            J =
                null != Q || L
                    ? null
                    : (0, r.jsx)(a.Button, {
                          variant: "primary",
                          size: "md",
                          fullWidth: !0,
                          onClick: Y,
                          text: C.intl.string(C.t.GDWYR8),
                          icon: a.k9F,
                      }),
            ee = [Q, Z && !L ? X : J].filter(h.Vq);
        return (0, r.jsxs)(y.YN, {
            children: [
                q,
                (0, r.jsx)(y.Eh, {
                    children: (0, r.jsx)(y.fD, {
                        onReaction: m,
                        onVoiceChannelPreview: D,
                        user: x,
                        channel: t,
                        generateReactionImage: W,
                        reactionImageAltText: b(n, x),
                        entry: n,
                        buttons: ee,
                    }),
                }),
            ],
        });
    };
