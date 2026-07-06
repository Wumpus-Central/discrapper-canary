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
    E = n(71393),
    p = n(575731),
    m = n(92240),
    g = n(257367),
    A = n(939496),
    I = n(584904),
    T = n(351638),
    S = n(316770),
    N = n(735438),
    C = n(3026),
    y = n(834730),
    O = n(778712),
    R = n(562153),
    v = n(996988),
    b = n(242697);
let L = [
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
    D = [
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
        s = r === v.d.MODAL_V2 ? D : L,
        a = t.length > 4,
        o = t.length - 4 + 1,
        u = o >= 10 ? 3 : 1;
    return (0, i.jsx)("div", {
        className: b.kL,
        children: s[(0, N.clamp)(t.length - 1, 0, s.length - 1)].map((e, r) => {
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
                                        children: (0, i.jsx)(y.E, {
                                            variant: "text-xxs/semibold",
                                            lineClamp: 1,
                                            children: (0, i.jsx)(C.A, { children: o > 99 ? ">99" : `+${o}` }),
                                        }),
                                    })
                                  : (0, i.jsx)(l.m, {
                                        text: R.Ay.getName(n.guild_id, n.id, s),
                                        children: (0, i.jsx)("img", {
                                            className: b.my,
                                            src: s.getAvatarURL(n.guild_id, (0, O.FT)(O._3.SIZE_80)),
                                            alt: "",
                                        }),
                                    }),
                      },
                      s.id,
                  );
        }),
    });
}
var P = n(939249),
    M = n(22231),
    x = n(532622),
    U = n(271683),
    k = n(882840),
    G = n(46054),
    V = n(345640),
    F = n(174459),
    B = n(531648),
    H = n(652215),
    j = n(375708),
    W = n(237770);
function Y(e) {
    let { voiceChannel: t, onAction: n, onClose: s } = e,
        { themeType: o } = (0, A.E)(),
        { analyticsLocations: l } = (0, h.Ay)(),
        u = (0, V.b)(t),
        c = (0, x.Ay)(t, !0),
        d = (0, k.l)(t),
        _ = r.useMemo(
            () => (null == d || "" === d ? null : G.A.parseVoiceChannelStatus(d, !0, { channelId: t.id })),
            [d, t.id],
        );
    return (r.useEffect(() => {
        null != _ &&
            F.default.track(H.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: l,
            });
    }, [_, t.id, t.guild_id, l]),
    c && u)
        ? (0, i.jsxs)(P.D, {
              className: W.vk,
              onClick: (e) => {
                  e.stopPropagation(),
                      n({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
                      o === v.d.POPOUT && s?.(),
                      (0, U.A)({ channel: t, sourceAnalyticsLocations: l });
              },
              children: [
                  (0, i.jsx)(B.A, {
                      text: _ ?? j.intl.string(j.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: W.Qq,
                  }),
                  (0, i.jsx)(M.R, {
                      color: "currentColor",
                      size: "xxs",
                      className: a()(W.rD, null != _ ? W.R : void 0),
                      "aria-label": j.intl.string(j.t.bt75uw),
                  }),
              ],
          })
        : null != _
          ? (0, i.jsx)(B.A, { text: _, variant: "text-xs/normal", color: "text-subtle", className: W.Qq })
          : null;
}
var K = n(70963),
    $ = n(269587),
    z = n(514566);
function q(e) {
    let { user: t, currentUser: n, voiceChannel: s, className: N, onClose: C } = e,
        { themeType: y } = (0, A.E)(),
        { analyticsLocations: O } = (0, h.Ay)(_.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        R = (0, m.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: s.id,
            user: t,
            analyticsLocations: O,
        }),
        b = (0, g.A)({ userId: t.id, onAction: R }),
        L = (0, o.bG)([E.A], () => E.A.getGuild(s.guild_id)),
        D = (0, p.A)(s),
        P = (0, f.Ay)(s),
        M = r.useId();
    function x() {
        return (0, i.jsx)("div", {
            className: z.o1,
            children: (0, i.jsx)(K.Ay, { channel: s, onAction: R, onClose: C }),
        });
    }
    let U =
        s.isDM() || s.isGroupDM()
            ? j.intl.string(j.t["9FaEzi"])
            : s.isGuildStageVoice()
              ? j.intl.string(j.t.QygGCN)
              : j.intl.string(j.t.msxteM);
    return (0, i.jsx)(h.f5, {
        value: O,
        children: (0, i.jsxs)(I.A, {
            ref: b,
            className: a()(z.Nr, N),
            onAction: R,
            onClose: C,
            "aria-labelledby": M,
            children: [
                (0, i.jsx)(T.A, {
                    text: U,
                    tags: (() => {
                        if (t.id !== n.id) return null;
                        let e = s.isDM() || s.isGroupDM() ? j.intl.string(j.t["+DsWbX"]) : j.intl.string(j.t.xOVEjc);
                        return (0, i.jsx)(l.m, { text: e, children: (0, i.jsx)(u.m, { size: "xxs" }) });
                    })(),
                    contextMenu: (0, i.jsx)($.A, { display: "voice", user: t, onClose: C }),
                }),
                (0, i.jsx)(c.A, { children: (0, i.jsx)(d.H, { id: M, children: `${U}, ${P}` }) }),
                (0, i.jsx)("div", {
                    className: z.rf,
                    children: (0, i.jsxs)("div", {
                        className: z.Qs,
                        children: [
                            (0, i.jsx)(w, { users: D, channel: s }),
                            (0, i.jsxs)("div", {
                                className: z.zH,
                                children: [
                                    (0, i.jsx)(S.A, { channel: s, guild: L, onAction: R, onClose: C }),
                                    s.isGuildVoice() && (0, i.jsx)(Y, { voiceChannel: s, onAction: R, onClose: C }),
                                    y === v.d.MODAL_V2 && x(),
                                ],
                            }),
                            y === v.d.MODAL && x(),
                        ],
                    }),
                }),
                y !== v.d.MODAL && y !== v.d.MODAL_V2 && x(),
            ],
        }),
    });
}
