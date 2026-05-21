e.d(t, { A: () => J });
var l = e(627968),
    n = e(64700),
    s = e(503698),
    a = e.n(s),
    d = e(17928),
    o = e(990078),
    r = e(885574),
    c = e(140735),
    A = e(707554),
    u = e(793574),
    h = e(688810),
    x = e(47167),
    g = e(71393),
    m = e(575731),
    j = e(92240),
    p = e(257367),
    C = e(939496),
    N = e(584904),
    _ = e(351638),
    v = e(316770),
    f = e(735438),
    O = e(780645),
    E = e(834730),
    I = e(778712),
    S = e(562153),
    L = e(996988),
    y = e(242697);
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
    let { users: t, channel: e } = i,
        { themeType: n } = (0, C.E)(),
        s = n === L.d.MODAL_V2 ? V : D,
        a = t.length > 4,
        d = t.length - 4 + 1,
        r = d >= 10 ? 3 : 1;
    return (0, l.jsx)("div", {
        className: y.kL,
        children: s[(0, f.clamp)(t.length - 1, 0, s.length - 1)].map((i, n) => {
            let s = t[n];
            return null == s
                ? null
                : (0, l.jsx)(
                      "div",
                      {
                          className: y.n1,
                          style: i,
                          children:
                              a && n === r
                                  ? (0, l.jsx)("div", {
                                        className: y.mB,
                                        children: (0, l.jsx)(E.E, {
                                            variant: "text-xxs/semibold",
                                            lineClamp: 1,
                                            children: (0, l.jsx)(O.A, { children: d > 99 ? ">99" : `+${d}` }),
                                        }),
                                    })
                                  : (0, l.jsx)(o.m, {
                                        text: S.Ay.getName(e.guild_id, e.id, s),
                                        children: (0, l.jsx)("img", {
                                            className: y.my,
                                            src: s.getAvatarURL(e.guild_id, (0, I.FT)(I._3.SIZE_80)),
                                            alt: "",
                                        }),
                                    }),
                      },
                      s.id,
                  );
        }),
    });
}
var T = e(939249),
    M = e(22231),
    P = e(532622),
    w = e(271683),
    G = e(882840),
    U = e(46054),
    k = e(345640),
    F = e(174459),
    R = e(531648),
    z = e(652215),
    H = e(375708),
    B = e(237770);
function Q(i) {
    let { voiceChannel: t, onAction: e, onClose: s } = i,
        { themeType: d } = (0, C.E)(),
        { analyticsLocations: o } = (0, h.Ay)(),
        r = (0, k.b)(t),
        c = (0, P.Ay)(t, !0),
        A = (0, G.l)(t),
        u = n.useMemo(
            () => (null == A || "" === A ? null : U.A.parseVoiceChannelStatus(A, !0, { channelId: t.id })),
            [A, t.id],
        );
    return (n.useEffect(() => {
        null != u &&
            F.default.track(z.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: t.id,
                guild_id: t.guild_id,
                location_stack: o,
            });
    }, [u, t.id, t.guild_id, o]),
    c && r)
        ? (0, l.jsxs)(T.D, {
              className: B.vk,
              onClick: (i) => {
                  i.stopPropagation(),
                      e({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
                      d === L.d.POPOUT && s?.(),
                      (0, w.A)({ channel: t, sourceAnalyticsLocations: o });
              },
              children: [
                  (0, l.jsx)(R.A, {
                      text: u ?? H.intl.string(H.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: B.Qq,
                  }),
                  (0, l.jsx)(M.R, {
                      color: "currentColor",
                      size: "xxs",
                      className: a()(B.rD, null != u ? B.R : void 0),
                      "aria-label": H.intl.string(H.t.bt75uw),
                  }),
              ],
          })
        : null != u
          ? (0, l.jsx)(R.A, { text: u, variant: "text-xs/normal", color: "text-subtle", className: B.Qq })
          : null;
}
var Y = e(70963),
    $ = e(269587),
    q = e(514566);
function J(i) {
    let { user: t, currentUser: e, voiceChannel: s, className: f, onClose: O } = i,
        { themeType: E } = (0, C.E)(),
        { analyticsLocations: I } = (0, h.Ay)(u.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        S = (0, j.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: s.id,
            user: t,
            analyticsLocations: I,
        }),
        y = (0, p.A)({ userId: t.id, onAction: S }),
        D = (0, d.bG)([g.A], () => g.A.getGuild(s.guild_id)),
        V = (0, m.A)(s),
        T = (0, x.Ay)(s),
        M = n.useId(),
        P = () =>
            (0, l.jsx)("div", { className: q.o1, children: (0, l.jsx)(Y.Ay, { channel: s, onAction: S, onClose: O }) }),
        w =
            s.isDM() || s.isGroupDM()
                ? H.intl.string(H.t["9FaEzi"])
                : s.isGuildStageVoice()
                  ? H.intl.string(H.t.QygGCN)
                  : H.intl.string(H.t.msxteM);
    return (0, l.jsx)(h.f5, {
        value: I,
        children: (0, l.jsxs)(N.A, {
            ref: y,
            className: a()(q.Nr, f),
            onAction: S,
            onClose: O,
            "aria-labelledby": M,
            children: [
                (0, l.jsx)(_.A, {
                    text: w,
                    tags: (() => {
                        if (t.id !== e.id) return null;
                        let i = s.isDM() || s.isGroupDM() ? H.intl.string(H.t["+DsWbX"]) : H.intl.string(H.t.xOVEjc);
                        return (0, l.jsx)(o.m, { text: i, children: (0, l.jsx)(r.m, { size: "xxs" }) });
                    })(),
                    contextMenu: (0, l.jsx)($.A, { display: "voice", user: t, onClose: O }),
                }),
                (0, l.jsx)(c.A, { children: (0, l.jsx)(A.H, { id: M, children: `${w}, ${T}` }) }),
                (0, l.jsx)("div", {
                    className: q.rf,
                    children: (0, l.jsxs)("div", {
                        className: q.Qs,
                        children: [
                            (0, l.jsx)(b, { users: V, channel: s }),
                            (0, l.jsxs)("div", {
                                className: q.zH,
                                children: [
                                    (0, l.jsx)(v.A, { channel: s, guild: D, onAction: S, onClose: O }),
                                    s.isGuildVoice() && (0, l.jsx)(Q, { voiceChannel: s, onAction: S, onClose: O }),
                                    E === L.d.MODAL_V2 && P(),
                                ],
                            }),
                            E === L.d.MODAL && P(),
                        ],
                    }),
                }),
                E !== L.d.MODAL && E !== L.d.MODAL_V2 && P(),
            ],
        }),
    });
}
