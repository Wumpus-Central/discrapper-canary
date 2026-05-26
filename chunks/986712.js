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
    f = n(688810),
    h = n(47167),
    p = n(71393),
    E = n(575731),
    m = n(92240),
    g = n(257367),
    A = n(939496),
    I = n(584904),
    T = n(351638),
    S = n(316770),
    N = n(735438),
    y = n(780645),
    C = n(834730),
    v = n(778712),
    O = n(562153),
    R = n(996988),
    b = n(242697);
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
        s = r === R.d.MODAL_V2 ? L : D,
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
                                        children: (0, i.jsx)(C.E, {
                                            variant: "text-xxs/semibold",
                                            lineClamp: 1,
                                            children: (0, i.jsx)(y.A, { children: o > 99 ? ">99" : `+${o}` }),
                                        }),
                                    })
                                  : (0, i.jsx)(l.m, {
                                        text: O.Ay.getName(n.guild_id, n.id, s),
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
    U = n(271683),
    k = n(882840),
    G = n(46054),
    F = n(345640),
    V = n(174459),
    B = n(531648),
    H = n(652215),
    j = n(375708),
    Y = n(237770);
function W(e) {
    let { voiceChannel: t, onAction: n, onClose: s } = e,
        { themeType: o } = (0, A.E)(),
        { analyticsLocations: l } = (0, f.Ay)(),
        u = (0, F.b)(t),
        c = (0, x.Ay)(t, !0),
        d = (0, k.l)(t),
        _ = r.useMemo(
            () => (null == d || "" === d ? null : G.A.parseVoiceChannelStatus(d, !0, { channelId: t.id })),
            [d, t.id],
        );
    return (r.useEffect(() => {
        null != _ &&
            V.default.track(H.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
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
                      o === R.d.POPOUT && s?.(),
                      (0, U.A)({ channel: t, sourceAnalyticsLocations: l });
              },
              children: [
                  (0, i.jsx)(B.A, {
                      text: _ ?? j.intl.string(j.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: Y.Qq,
                  }),
                  (0, i.jsx)(P.R, {
                      color: "currentColor",
                      size: "xxs",
                      className: a()(Y.rD, null != _ ? Y.R : void 0),
                      "aria-label": j.intl.string(j.t.bt75uw),
                  }),
              ],
          })
        : null != _
          ? (0, i.jsx)(B.A, { text: _, variant: "text-xs/normal", color: "text-subtle", className: Y.Qq })
          : null;
}
var K = n(70963),
    z = n(269587),
    $ = n(514566);
function q(e) {
    let { user: t, currentUser: n, voiceChannel: s, className: N, onClose: y } = e,
        { themeType: C } = (0, A.E)(),
        { analyticsLocations: v } = (0, f.Ay)(_.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        O = (0, m.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: s.id,
            user: t,
            analyticsLocations: v,
        }),
        b = (0, g.A)({ userId: t.id, onAction: O }),
        D = (0, o.bG)([p.A], () => p.A.getGuild(s.guild_id)),
        L = (0, E.A)(s),
        M = (0, h.Ay)(s),
        P = r.useId(),
        x = () =>
            (0, i.jsx)("div", { className: $.o1, children: (0, i.jsx)(K.Ay, { channel: s, onAction: O, onClose: y }) }),
        U =
            s.isDM() || s.isGroupDM()
                ? j.intl.string(j.t["9FaEzi"])
                : s.isGuildStageVoice()
                  ? j.intl.string(j.t.QygGCN)
                  : j.intl.string(j.t.msxteM);
    return (0, i.jsx)(f.f5, {
        value: v,
        children: (0, i.jsxs)(I.A, {
            ref: b,
            className: a()($.Nr, N),
            onAction: O,
            onClose: y,
            "aria-labelledby": P,
            children: [
                (0, i.jsx)(T.A, {
                    text: U,
                    tags: (() => {
                        if (t.id !== n.id) return null;
                        let e = s.isDM() || s.isGroupDM() ? j.intl.string(j.t["+DsWbX"]) : j.intl.string(j.t.xOVEjc);
                        return (0, i.jsx)(l.m, { text: e, children: (0, i.jsx)(u.m, { size: "xxs" }) });
                    })(),
                    contextMenu: (0, i.jsx)(z.A, { display: "voice", user: t, onClose: y }),
                }),
                (0, i.jsx)(c.A, { children: (0, i.jsx)(d.H, { id: P, children: `${U}, ${M}` }) }),
                (0, i.jsx)("div", {
                    className: $.rf,
                    children: (0, i.jsxs)("div", {
                        className: $.Qs,
                        children: [
                            (0, i.jsx)(w, { users: L, channel: s }),
                            (0, i.jsxs)("div", {
                                className: $.zH,
                                children: [
                                    (0, i.jsx)(S.A, { channel: s, guild: D, onAction: O, onClose: y }),
                                    s.isGuildVoice() && (0, i.jsx)(W, { voiceChannel: s, onAction: O, onClose: y }),
                                    C === R.d.MODAL_V2 && x(),
                                ],
                            }),
                            C === R.d.MODAL && x(),
                        ],
                    }),
                }),
                C !== R.d.MODAL && C !== R.d.MODAL_V2 && x(),
            ],
        }),
    });
}
