"use strict";
n.d(t, { A: () => q });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(990078),
    u = n(885574),
    c = n(140735),
    d = n(707554),
    _ = n(793574),
    h = n(688810),
    f = n(47167),
    p = n(71393),
    E = n(575731),
    m = n(92240),
    g = n(257367),
    A = n(939496),
    I = n(584904),
    T = n(351638),
    S = n(316770),
    y = n(735438),
    C = n(780645),
    N = n(834730),
    v = n(778712),
    R = n(562153),
    O = n(996988),
    b = n(17545);
let D = [
        [{ top: 15, left: 15, width: 28, height: 28 }],
        [
            { top: 7, left: 7, width: 20, height: 20 },
            { top: 25, left: 25, width: 26, height: 26 },
        ],
        [
            { top: 5, left: 10, width: 18, height: 18 },
            { top: 15, left: 31, width: 22, height: 22 },
            { top: 29, left: 5, width: 24, height: 24 },
        ],
        [
            { top: 5, left: 5, width: 22, height: 22 },
            { top: 7, left: 33, width: 18, height: 18 },
            { top: 33, left: 7, width: 18, height: 18 },
            { top: 31, left: 31, width: 22, height: 22 },
        ],
    ],
    L = [
        [{ top: 23, left: 23, width: 52, height: 52 }],
        [
            { top: 13, left: 13, width: 32, height: 32 },
            { top: 41, left: 41, width: 44, height: 44 },
        ],
        [
            { top: 9, left: 14, width: 31, height: 31 },
            { top: 27, left: 53, width: 34, height: 34 },
            { top: 52, left: 11, width: 36, height: 36 },
        ],
        [
            { top: 10, left: 10, width: 36, height: 36 },
            { top: 10, left: 57, width: 31, height: 31 },
            { top: 57, left: 10, width: 31, height: 31 },
            { top: 52, left: 52, width: 36, height: 36 },
        ],
    ];
function w(e) {
    let { users: t, channel: n } = e,
        { themeType: r } = (0, A.E)(),
        s = r === O.d.MODAL_V2 ? L : D,
        a = t.length > 4,
        o = t.length - 4 + 1,
        u = o >= 10 ? 3 : 1;
    return (0, i.jsx)("div", {
        className: b.kL,
        children: s[(0, y.clamp)(t.length - 1, 0, s.length - 1)].map((e, r) => {
            let s = t[r];
            return null == s
                ? null
                : (0, i.jsx)(
                      "div",
                      {
                          className: b.n1,
                          style: e,
                          children:
                              a && r === u
                                  ? (0, i.jsx)("div", {
                                        className: b.mB,
                                        children: (0, i.jsx)(N.E, {
                                            variant: "text-xxs/semibold",
                                            lineClamp: 1,
                                            children: (0, i.jsx)(C.A, { children: o > 99 ? ">99" : `+${o}` }),
                                        }),
                                    })
                                  : (0, i.jsx)(l.m, {
                                        text: R.Ay.getName(n.guild_id, n.id, s),
                                        children: (0, i.jsx)("img", {
                                            className: b.my,
                                            src: s.getAvatarURL(n.guild_id, (0, v.FT)(v._3.SIZE_80)),
                                            alt: "",
                                        }),
                                    }),
                      },
                      s.id,
                  );
        }),
    });
}
var M = n(939249),
    P = n(22231),
    x = n(532622),
    k = n(271683),
    U = n(882840),
    G = n(46054),
    F = n(345640),
    V = n(174459),
    B = n(531648),
    j = n(652215),
    H = n(375708),
    Y = n(380170);
function W(e) {
    let { voiceChannel: t, onAction: n, onClose: s } = e,
        { themeType: o } = (0, A.E)(),
        { analyticsLocations: l } = (0, h.Ay)(),
        u = (0, F.b)(t),
        c = (0, x.Ay)(t, !0),
        d = (0, U.l)(t),
        _ = r.useMemo(
            () => (null == d || "" === d ? null : G.A.parseVoiceChannelStatus(d, !0, { channelId: t.id })),
            [d, t.id],
        );
    return (r.useEffect(() => {
        null != _ &&
            V.default.track(j.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: l,
            });
    }, [_, t.id, t.guild_id, l]),
    c && u)
        ? (0, i.jsxs)(M.D, {
              className: Y.vk,
              onClick: (e) => {
                  e.stopPropagation(),
                      n({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
                      o === O.d.POPOUT && s?.(),
                      (0, k.A)({ channel: t, sourceAnalyticsLocations: l });
              },
              children: [
                  (0, i.jsx)(B.A, {
                      text: _ ?? H.intl.string(H.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: Y.Qq,
                  }),
                  (0, i.jsx)(P.R, {
                      color: "currentColor",
                      size: "xxs",
                      className: a()(Y.rD, null != _ ? Y.R : void 0),
                      "aria-label": H.intl.string(H.t.bt75uw),
                  }),
              ],
          })
        : null != _
          ? (0, i.jsx)(B.A, { text: _, variant: "text-xs/normal", color: "text-subtle", className: Y.Qq })
          : null;
}
var K = n(70963),
    $ = n(269587),
    z = n(726342);
function q(e) {
    let { user: t, currentUser: n, voiceChannel: s, className: y, onClose: C } = e,
        { themeType: N } = (0, A.E)(),
        { analyticsLocations: v } = (0, h.Ay)(_.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        R = (0, m.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: s.id,
            user: t,
            analyticsLocations: v,
        }),
        b = (0, g.A)({ userId: t.id, onAction: R }),
        D = (0, o.bG)([p.A], () => p.A.getGuild(s.guild_id)),
        L = (0, E.A)(s),
        M = (0, f.Ay)(s),
        P = r.useId();
    function x() {
        return (0, i.jsx)("div", {
            className: z.o1,
            children: (0, i.jsx)(K.Ay, { channel: s, onAction: R, onClose: C }),
        });
    }
    let k =
        s.isDM() || s.isGroupDM()
            ? H.intl.string(H.t["9FaEzi"])
            : s.isGuildStageVoice()
              ? H.intl.string(H.t.QygGCN)
              : H.intl.string(H.t.msxteM);
    return (0, i.jsx)(h.f5, {
        value: v,
        children: (0, i.jsxs)(I.A, {
            ref: b,
            className: a()(z.Nr, y),
            onAction: R,
            onClose: C,
            "aria-labelledby": P,
            children: [
                (0, i.jsx)(T.A, {
                    text: k,
                    tags: (() => {
                        if (t.id !== n.id) return null;
                        let e = s.isDM() || s.isGroupDM() ? H.intl.string(H.t["+DsWbX"]) : H.intl.string(H.t.xOVEjc);
                        return (0, i.jsx)(l.m, { text: e, children: (0, i.jsx)(u.m, { size: "xxs" }) });
                    })(),
                    contextMenu: (0, i.jsx)($.A, { display: "voice", user: t, onClose: C }),
                }),
                (0, i.jsx)(c.A, { children: (0, i.jsx)(d.H, { id: P, children: `${k}, ${M}` }) }),
                (0, i.jsx)("div", {
                    className: z.rf,
                    children: (0, i.jsxs)("div", {
                        className: z.Qs,
                        children: [
                            (0, i.jsx)(w, { users: L, channel: s }),
                            (0, i.jsxs)("div", {
                                className: z.zH,
                                children: [
                                    (0, i.jsx)(S.A, { channel: s, guild: D, onAction: R, onClose: C }),
                                    s.isGuildVoice() && (0, i.jsx)(W, { voiceChannel: s, onAction: R, onClose: C }),
                                    N === O.d.MODAL_V2 && x(),
                                ],
                            }),
                            N === O.d.MODAL && x(),
                        ],
                    }),
                }),
                N !== O.d.MODAL && N !== O.d.MODAL_V2 && x(),
            ],
        }),
    });
}
