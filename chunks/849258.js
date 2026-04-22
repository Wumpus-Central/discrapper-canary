"use strict";
n.d(t, { Ay: () => R });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(808666),
    a = n(821609),
    o = n(414499),
    c = n(323384),
    u = n(833349),
    d = n(765379),
    h = n(359549),
    m = n(284525),
    p = n(793574),
    f = n(297486),
    g = n(627363),
    _ = n(773669),
    x = n(403362),
    A = n(562153),
    C = n(939341),
    E = n(576757),
    I = n(583846),
    v = n(398328),
    y = n(176563),
    S = n(506326),
    b = n(910692),
    N = n(299846),
    T = n(652215),
    j = n(985018);
let R = (e) => {
    let { channel: t, entry: n, onReaction: R, onVoiceChannelPreview: w, disableActivityProfileLinks: L } = e,
        { largeImage: M } = (0, C.nO)({ entry: n, showCoverImage: !1 }),
        { user: k, details: O, activity: P, embeddedActivity: D } = (0, N.u)(n),
        { primaryColor: U, secondaryColor: V } = (0, y.A)(M?.src),
        G = (0, s.bG)([_.default], () => _.default.locale),
        { displayParticipants: F, participant1: B, participant2: H, numOtherParticipants: W } = (0, E.A)(n, 3),
        K = () => {
            (0, f.hg)(n.extra.application_id);
        },
        z = l.useCallback(
            (e) => {
                let i, l, s;
                if (M?.src == null || null == t || null == k) return;
                let r =
                    W > 0
                        ? ((e) => {
                              let { entry: t, channel: n, users: i, countOthers: l } = e,
                                  s = j.t["7j/5mg"];
                              return j.intl
                                  .formatToMarkdownString(s, {
                                      gameName: t.extra.activity_name,
                                      user1: A.Ay.getName(n?.guild_id, n?.id, i[0]),
                                      user2: A.Ay.getName(n?.guild_id, n?.id, i[1]),
                                      countOthers: l,
                                  })
                                  .replaceAll("*", "");
                          })({ entry: n, channel: t, users: [B, H], countOthers: W })
                        : ((i = j.t["bES+y2"]),
                          (l = A.Ay.getName(t.guild_id, t.id, k)),
                          (s = n.extra.activity_name),
                          j.intl.formatToMarkdownString(i, { gameName: s, userName: l }).replaceAll("*", ""));
                return (0, v.Vq)({
                    entry: n,
                    applicationImageSrc: M?.src,
                    avatarSrcs: F.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: r,
                    timestamp: (0, I.As)(n, G),
                    colors: [U, V],
                    channelId: e,
                });
            },
            [M?.src, t, F, n, G, W, B, H, U, V, k],
        ),
        { data: Z } = (0, g.YY)(n.extra.application_id),
        q = (0, h.A)({ application: Z, analyticsLocations: [p.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == k) return null;
    let Y = (0, i.jsx)(S.iT, { location: S.N5.POPOUT, entry: n }),
        J = (0, i.jsx)(b.BC, {
            channel: t,
            userDescription: (0, I.JM)(n) ? j.t.vPg1JT : j.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: O,
            badges: Y,
            entry: n,
            showCoverImage: !1,
            onClickTitle: L ? void 0 : K,
            onClickSubtitle: L ? void 0 : K,
            onClickThumbnail: L ? void 0 : K,
        }),
        $ = (0, u.A)(P, T.jUm.JOIN) || (0, d.A)(P),
        X = $
            ? (0, i.jsx)(m.A, { embeddedActivity: D, activity: P, user: k, variant: "primary", size: "md", icon: r.I })
            : null,
        Q =
            null == q
                ? null
                : (0, i.jsx)(a.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: q,
                      text: j.intl.string(j.t["jaYS/h"]),
                      icon: o.h,
                  }),
        ee =
            null != Q || L
                ? null
                : (0, i.jsx)(a.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: K,
                      text: j.intl.string(j.t.GDWYR8),
                      icon: c.k,
                  }),
        et = [Q, $ && !L ? X : ee].filter(x.Vq);
    return (0, i.jsxs)(b.YN, {
        children: [
            J,
            (0, i.jsx)(b.Eh, {
                children: (0, i.jsx)(b.fD, {
                    onReaction: R,
                    onVoiceChannelPreview: w,
                    user: k,
                    channel: t,
                    generateReactionImage: z,
                    reactionImageAltText: j.intl.formatToPlainString(j.t.tAwI1k, {
                        username: k.username,
                        activity: n.extra.activity_name,
                    }),
                    entry: n,
                    buttons: et,
                }),
            }),
        ],
    });
};
