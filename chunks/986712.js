i.d(t, { A: () => K });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    d = i(17928),
    r = i(990078),
    o = i(885574),
    c = i(140735),
    u = i(707554),
    A = i(793574),
    h = i(688810),
    g = i(47167),
    x = i(71393),
    m = i(575731),
    C = i(92240),
    _ = i(257367),
    p = i(939496),
    N = i(584904),
    f = i(351638),
    v = i(316770),
    j = i(735438),
    E = i(3026),
    S = i(834730),
    O = i(778712),
    I = i(562153),
    y = i(996988),
    T = i(242697);
let b = [
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
function M(e) {
    let { users: t, channel: i } = e,
        { themeType: n } = (0, p.E)(),
        s = n === y.d.MODAL_V2 ? L : b,
        a = t.length > 4,
        d = t.length - 4 + 1,
        o = d >= 10 ? 3 : 1;
    return (0, l.jsx)("div", {
        className: T.kL,
        children: s[(0, j.clamp)(t.length - 1, 0, s.length - 1)].map((e, n) => {
            let s = t[n];
            return null == s
                ? null
                : (0, l.jsx)(
                      "div",
                      {
                          className: T.n1,
                          style: e,
                          children:
                              a && n === o
                                  ? (0, l.jsx)("div", {
                                        className: T.mB,
                                        children: (0, l.jsx)(S.E, {
                                            variant: "text-xxs/semibold",
                                            lineClamp: 1,
                                            children: (0, l.jsx)(E.A, { children: d > 99 ? ">99" : `+${d}` }),
                                        }),
                                    })
                                  : (0, l.jsx)(r.m, {
                                        text: I.Ay.getName(i.guild_id, i.id, s),
                                        children: (0, l.jsx)("img", {
                                            className: T.my,
                                            src: s.getAvatarURL(i.guild_id, (0, O.FT)(O._3.SIZE_80)),
                                            alt: "",
                                        }),
                                    }),
                      },
                      s.id,
                  );
        }),
    });
}
var V = i(939249),
    D = i(22231),
    w = i(532622),
    G = i(271683),
    U = i(882840),
    P = i(46054),
    F = i(345640),
    k = i(954571),
    R = i(531648),
    H = i(652215),
    B = i(985018),
    z = i(237770);
function q(e) {
    let { voiceChannel: t, onAction: i, onClose: s } = e,
        { themeType: d } = (0, p.E)(),
        { analyticsLocations: r } = (0, h.Ay)(),
        o = (0, F.b)(t),
        c = (0, w.Ay)(t, !0),
        u = (0, U.l)(t),
        A = n.useMemo(
            () => (null == u || "" === u ? null : P.A.parseVoiceChannelStatus(u, !0, { channelId: t.id })),
            [u, t.id],
        );
    return (n.useEffect(() => {
        null != A &&
            k.default.track(H.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: r,
            });
    }, [A, t.id, t.guild_id, r]),
    c && o)
        ? (0, l.jsxs)(V.D, {
              className: z.vk,
              onClick: (e) => {
                  e.stopPropagation(),
                      i({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
                      d === y.d.POPOUT && s?.(),
                      (0, G.A)({ channel: t, sourceAnalyticsLocations: r });
              },
              children: [
                  (0, l.jsx)(R.A, {
                      text: A ?? B.intl.string(B.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: z.Qq,
                  }),
                  (0, l.jsx)(D.R, {
                      color: "currentColor",
                      size: "xxs",
                      className: a()(z.rD, null != A ? z.R : void 0),
                      "aria-label": B.intl.string(B.t.bt75uw),
                  }),
              ],
          })
        : null != A
          ? (0, l.jsx)(R.A, { text: A, variant: "text-xs/normal", color: "text-subtle", className: z.Qq })
          : null;
}
var $ = i(70963),
    Q = i(269587),
    Y = i(514566);
function K(e) {
    let { user: t, currentUser: i, voiceChannel: s, className: j, onClose: E } = e,
        { themeType: S } = (0, p.E)(),
        { analyticsLocations: O } = (0, h.Ay)(A.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        I = (0, C.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: s.id,
            user: t,
            analyticsLocations: O,
        }),
        T = (0, _.A)({ userId: t.id, onAction: I }),
        b = (0, d.bG)([x.A], () => x.A.getGuild(s.guild_id)),
        L = (0, m.A)(s),
        V = (0, g.Ay)(s),
        D = n.useId(),
        w = () =>
            (0, l.jsx)("div", { className: Y.o1, children: (0, l.jsx)($.Ay, { channel: s, onAction: I, onClose: E }) }),
        G =
            s.isDM() || s.isGroupDM()
                ? B.intl.string(B.t["9FaEzi"])
                : s.isGuildStageVoice()
                  ? B.intl.string(B.t.QygGCN)
                  : B.intl.string(B.t.msxteM);
    return (0, l.jsx)(h.f5, {
        value: O,
        children: (0, l.jsxs)(N.A, {
            ref: T,
            className: a()(Y.Nr, j),
            onAction: I,
            onClose: E,
            "aria-labelledby": D,
            children: [
                (0, l.jsx)(f.A, {
                    text: G,
                    tags: (() => {
                        if (t.id !== i.id) return null;
                        let e = s.isDM() || s.isGroupDM() ? B.intl.string(B.t["+DsWbX"]) : B.intl.string(B.t.xOVEjc);
                        return (0, l.jsx)(r.m, { text: e, children: (0, l.jsx)(o.m, { size: "xxs" }) });
                    })(),
                    contextMenu: (0, l.jsx)(Q.A, { display: "voice", user: t, onClose: E }),
                }),
                (0, l.jsx)(c.A, { children: (0, l.jsx)(u.H, { id: D, children: `${G}, ${V}` }) }),
                (0, l.jsx)("div", {
                    className: Y.rf,
                    children: (0, l.jsxs)("div", {
                        className: Y.Qs,
                        children: [
                            (0, l.jsx)(M, { users: L, channel: s }),
                            (0, l.jsxs)("div", {
                                className: Y.zH,
                                children: [
                                    (0, l.jsx)(v.A, { channel: s, guild: b, onAction: I, onClose: E }),
                                    s.isGuildVoice() && (0, l.jsx)(q, { voiceChannel: s, onAction: I, onClose: E }),
                                    S === y.d.MODAL_V2 && w(),
                                ],
                            }),
                            S === y.d.MODAL && w(),
                        ],
                    }),
                }),
                S !== y.d.MODAL && S !== y.d.MODAL_V2 && w(),
            ],
        }),
    });
}
