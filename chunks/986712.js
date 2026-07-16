l.d(t, { A: () => X });
var e = l(627968),
    n = l(64700),
    s = l(503698),
    a = l.n(s),
    d = l(17928),
    o = l(866665),
    r = l(885574),
    c = l(140735),
    A = l(707554),
    u = l(793574),
    h = l(688810),
    x = l(47167),
    g = l(71393),
    m = l(575731),
    p = l(92240),
    j = l(257367),
    C = l(939496),
    N = l(584904),
    _ = l(351638),
    v = l(316770),
    f = l(435558),
    O = l(3026),
    E = l(834730),
    I = l(778712),
    L = l(562153),
    S = l(996988),
    y = l(242697);
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
    V = [
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
function b(i) {
    let { users: t, channel: l } = i,
        { themeType: n } = (0, C.E)(),
        s = n === S.d.MODAL_V2 ? V : D,
        a = t.length > 4,
        d = t.length - 4 + 1,
        r = d >= 10 ? 3 : 1;
    return (0, e.jsx)("div", {
        className: y.kL,
        children: s[(0, f.clamp)(t.length - 1, 0, s.length - 1)].map((i, n) => {
            let s = t[n];
            return null == s
                ? null
                : (0, e.jsx)(
                      "div",
                      {
                          className: y.n1,
                          style: i,
                          children:
                              a && n === r
                                  ? (0, e.jsx)("div", {
                                        className: y.mB,
                                        children: (0, e.jsx)(E.E, {
                                            variant: "text-xxs/semibold",
                                            lineClamp: 1,
                                            children: (0, e.jsx)(O.A, { children: d > 99 ? ">99" : `+${d}` }),
                                        }),
                                    })
                                  : (0, e.jsx)(o.m, {
                                        text: L.Ay.getName(l.guild_id, l.id, s),
                                        children: (0, e.jsx)("img", {
                                            className: y.my,
                                            src: s.getAvatarURL(l.guild_id, (0, I.FT)(I._3.SIZE_80)),
                                            alt: "",
                                        }),
                                    }),
                      },
                      s.id,
                  );
        }),
    });
}
var T = l(939249),
    M = l(22231),
    P = l(532622),
    w = l(271683),
    G = l(882840),
    U = l(208971),
    k = l(46054),
    F = l(345640),
    R = l(174459),
    z = l(531648),
    H = l(652215),
    B = l(375708),
    Q = l(237770);
function Y(i) {
    let { voiceChannel: t, onAction: l, onClose: s } = i,
        { themeType: d } = (0, C.E)(),
        { analyticsLocations: o } = (0, h.Ay)(),
        r = (0, F.b)(t),
        c = (0, P.Ay)(t, !0),
        A = (0, U.G)((0, G.l)(t)),
        u = n.useMemo(
            () => (null == A || "" === A ? null : k.A.parseVoiceChannelStatus(A, !0, { channelId: t.id })),
            [A, t.id],
        );
    return (n.useEffect(() => {
        null != u &&
            R.default.track(H.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: o,
            });
    }, [u, t.id, t.guild_id, o]),
    c && r)
        ? (0, e.jsxs)(T.D, {
              className: Q.vk,
              onClick: (i) => {
                  i.stopPropagation(),
                      l({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
                      d === S.d.POPOUT && s?.(),
                      (0, w.A)({ channel: t, sourceAnalyticsLocations: o });
              },
              children: [
                  (0, e.jsx)(z.A, {
                      text: u ?? B.intl.string(B.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: Q.Qq,
                  }),
                  (0, e.jsx)(M.R, {
                      color: "currentColor",
                      size: "xxs",
                      className: a()(Q.rD, null != u ? Q.R : void 0),
                      "aria-label": B.intl.string(B.t.bt75uw),
                  }),
              ],
          })
        : null != u
          ? (0, e.jsx)(z.A, { text: u, variant: "text-xs/normal", color: "text-subtle", className: Q.Qq })
          : null;
}
var $ = l(70963),
    q = l(269587),
    J = l(514566);
function X(i) {
    let { user: t, currentUser: l, voiceChannel: s, className: f, onClose: O } = i,
        { themeType: E } = (0, C.E)(),
        { analyticsLocations: I } = (0, h.Ay)(u.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        L = (0, p.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: s.id,
            user: t,
            analyticsLocations: I,
        }),
        y = (0, j.A)({ userId: t.id, onAction: L }),
        D = (0, d.bG)([g.A], () => g.A.getGuild(s.guild_id)),
        V = (0, m.A)(s),
        T = (0, x.Ay)(s),
        M = n.useId();
    function P() {
        return (0, e.jsx)("div", {
            className: J.o1,
            children: (0, e.jsx)($.Ay, { channel: s, onAction: L, onClose: O }),
        });
    }
    let w =
        s.isDM() || s.isGroupDM()
            ? B.intl.string(B.t["9FaEzi"])
            : s.isGuildStageVoice()
              ? B.intl.string(B.t.QygGCN)
              : B.intl.string(B.t.msxteM);
    return (0, e.jsx)(h.f5, {
        value: I,
        children: (0, e.jsxs)(N.A, {
            ref: y,
            className: a()(J.Nr, f),
            onAction: L,
            onClose: O,
            "aria-labelledby": M,
            children: [
                (0, e.jsx)(_.A, {
                    text: w,
                    tags: (function () {
                        if (t.id !== l.id) return null;
                        let i = s.isDM() || s.isGroupDM() ? B.intl.string(B.t["+DsWbX"]) : B.intl.string(B.t.xOVEjc);
                        return (0, e.jsx)(o.m, { text: i, children: (0, e.jsx)(r.m, { size: "xxs" }) });
                    })(),
                    contextMenu: (0, e.jsx)(q.A, { display: "voice", user: t, onClose: O }),
                }),
                (0, e.jsx)(c.A, { children: (0, e.jsx)(A.H, { id: M, children: `${w}, ${T}` }) }),
                (0, e.jsx)("div", {
                    className: J.rf,
                    children: (0, e.jsxs)("div", {
                        className: J.Qs,
                        children: [
                            (0, e.jsx)(b, { users: V, channel: s }),
                            (0, e.jsxs)("div", {
                                className: J.zH,
                                children: [
                                    (0, e.jsx)(v.A, { channel: s, guild: D, onAction: L, onClose: O }),
                                    s.isGuildVoice() && (0, e.jsx)(Y, { voiceChannel: s, onAction: L, onClose: O }),
                                    E === S.d.MODAL_V2 && P(),
                                ],
                            }),
                            E === S.d.MODAL && P(),
                        ],
                    }),
                }),
                E !== S.d.MODAL && E !== S.d.MODAL_V2 && P(),
            ],
        }),
    });
}
