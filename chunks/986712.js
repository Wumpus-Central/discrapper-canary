"use strict";
n.d(t, { A: () => Z });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(990078),
    d = n(885574),
    c = n(140735),
    u = n(707554),
    _ = n(793574),
    E = n(688810),
    A = n(47167),
    h = n(71393),
    I = n(575731),
    f = n(92240),
    p = n(257367),
    T = n(939496),
    m = n(584904),
    g = n(351638),
    S = n(316770),
    N = n(735438),
    C = n(3026),
    R = n(834730),
    O = n(778712),
    L = n(562153),
    D = n(996988),
    y = n(242697);
let v = [
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
    b = [
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
function M(e) {
    let { users: t, channel: n } = e,
        { themeType: r } = (0, T.E)(),
        a = r === D.d.MODAL_V2 ? b : v,
        s = t.length > 4,
        l = t.length - 4 + 1,
        d = l >= 10 ? 3 : 1;
    return (0, i.jsx)("div", {
        className: y.kL,
        children: a[(0, N.clamp)(t.length - 1, 0, a.length - 1)].map((e, r) => {
            let a = t[r];
            return null == a
                ? null
                : (0, i.jsx)(
                      "div",
                      {
                          className: y.n1,
                          style: e,
                          children:
                              s && r === d
                                  ? (0, i.jsx)("div", {
                                        className: y.mB,
                                        children: (0, i.jsx)(R.E, {
                                            variant: "text-xxs/semibold",
                                            lineClamp: 1,
                                            children: (0, i.jsx)(C.A, { children: l > 99 ? ">99" : `+${l}` }),
                                        }),
                                    })
                                  : (0, i.jsx)(o.m, {
                                        text: L.Ay.getName(n.guild_id, n.id, a),
                                        children: (0, i.jsx)("img", {
                                            className: y.my,
                                            src: a.getAvatarURL(n.guild_id, (0, O.FT)(O._3.SIZE_80)),
                                            alt: "",
                                        }),
                                    }),
                      },
                      a.id,
                  );
        }),
    });
}
var P = n(939249),
    U = n(22231),
    w = n(532622),
    G = n(271683),
    x = n(882840),
    k = n(208971),
    F = n(46054),
    V = n(345640),
    B = n(174459),
    H = n(531648),
    j = n(652215),
    W = n(375708),
    Y = n(237770);
function K(e) {
    let { voiceChannel: t, onAction: n, onClose: a } = e,
        { themeType: l } = (0, T.E)(),
        { analyticsLocations: o } = (0, E.Ay)(),
        d = (0, V.b)(t),
        c = (0, w.Ay)(t, !0),
        u = (0, k.G)((0, x.l)(t)),
        _ = r.useMemo(
            () => (null == u || "" === u ? null : F.A.parseVoiceChannelStatus(u, !0, { channelId: t.id })),
            [u, t.id],
        );
    return (r.useEffect(() => {
        null != _ &&
            B.default.track(j.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: o,
            });
    }, [_, t.id, t.guild_id, o]),
    c && d)
        ? (0, i.jsxs)(P.D, {
              className: Y.vk,
              onClick: (e) => {
                  e.stopPropagation(),
                      n({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
                      l === D.d.POPOUT && a?.(),
                      (0, G.A)({ channel: t, sourceAnalyticsLocations: o });
              },
              children: [
                  (0, i.jsx)(H.A, {
                      text: _ ?? W.intl.string(W.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: Y.Qq,
                  }),
                  (0, i.jsx)(U.R, {
                      color: "currentColor",
                      size: "xxs",
                      className: s()(Y.rD, null != _ ? Y.R : void 0),
                      "aria-label": W.intl.string(W.t.bt75uw),
                  }),
              ],
          })
        : null != _
          ? (0, i.jsx)(H.A, { text: _, variant: "text-xs/normal", color: "text-subtle", className: Y.Qq })
          : null;
}
var $ = n(70963),
    z = n(269587),
    q = n(514566);
function Z(e) {
    let { user: t, currentUser: n, voiceChannel: a, className: N, onClose: C } = e,
        { themeType: R } = (0, T.E)(),
        { analyticsLocations: O } = (0, E.Ay)(_.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        L = (0, f.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: a.id,
            user: t,
            analyticsLocations: O,
        }),
        y = (0, p.A)({ userId: t.id, onAction: L }),
        v = (0, l.bG)([h.A], () => h.A.getGuild(a.guild_id)),
        b = (0, I.A)(a),
        P = (0, A.Ay)(a),
        U = r.useId();
    function w() {
        return (0, i.jsx)("div", {
            className: q.o1,
            children: (0, i.jsx)($.Ay, { channel: a, onAction: L, onClose: C }),
        });
    }
    let G =
        a.isDM() || a.isGroupDM()
            ? W.intl.string(W.t["9FaEzi"])
            : a.isGuildStageVoice()
              ? W.intl.string(W.t.QygGCN)
              : W.intl.string(W.t.msxteM);
    return (0, i.jsx)(E.f5, {
        value: O,
        children: (0, i.jsxs)(m.A, {
            ref: y,
            className: s()(q.Nr, N),
            onAction: L,
            onClose: C,
            "aria-labelledby": U,
            children: [
                (0, i.jsx)(g.A, {
                    text: G,
                    tags: (() => {
                        if (t.id !== n.id) return null;
                        let e = a.isDM() || a.isGroupDM() ? W.intl.string(W.t["+DsWbX"]) : W.intl.string(W.t.xOVEjc);
                        return (0, i.jsx)(o.m, { text: e, children: (0, i.jsx)(d.m, { size: "xxs" }) });
                    })(),
                    contextMenu: (0, i.jsx)(z.A, { display: "voice", user: t, onClose: C }),
                }),
                (0, i.jsx)(c.A, { children: (0, i.jsx)(u.H, { id: U, children: `${G}, ${P}` }) }),
                (0, i.jsx)("div", {
                    className: q.rf,
                    children: (0, i.jsxs)("div", {
                        className: q.Qs,
                        children: [
                            (0, i.jsx)(M, { users: b, channel: a }),
                            (0, i.jsxs)("div", {
                                className: q.zH,
                                children: [
                                    (0, i.jsx)(S.A, { channel: a, guild: v, onAction: L, onClose: C }),
                                    a.isGuildVoice() && (0, i.jsx)(K, { voiceChannel: a, onAction: L, onClose: C }),
                                    R === D.d.MODAL_V2 && w(),
                                ],
                            }),
                            R === D.d.MODAL && w(),
                        ],
                    }),
                }),
                R !== D.d.MODAL && R !== D.d.MODAL_V2 && w(),
            ],
        }),
    });
}
