t.d(l, { A: () => J });
var e = t(477900),
    n = t(582128),
    s = t(503698),
    a = t.n(s),
    d = t(17928),
    o = t(866665),
    r = t(885574),
    c = t(140735),
    u = t(707554),
    A = t(793574),
    h = t(688810),
    x = t(47167),
    g = t(71393),
    C = t(575731),
    m = t(92240),
    j = t(257367),
    p = t(939496),
    v = t(584904),
    N = t(351638),
    _ = t(316770),
    f = t(435558),
    O = t(3026),
    y = t(834730),
    E = t(778712),
    I = t(562153),
    b = t(996988),
    L = t(378502);
let S = [
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
function M(i) {
    let { users: l, channel: t } = i,
        { themeType: n } = (0, p.E)(),
        s = n === b.d.MODAL_V2 ? D : S,
        a = l.length > 4,
        d = l.length - 4 + 1,
        r = d >= 10 ? 3 : 1;
    return (0, e.jsx)("div", {
        className: L.kL,
        children: s[(0, f.clamp)(l.length - 1, 0, s.length - 1)].map((i, n) => {
            let s = l[n];
            return null == s
                ? null
                : (0, e.jsx)(
                      "div",
                      {
                          className: L.n1,
                          style: i,
                          children:
                              a && n === r
                                  ? (0, e.jsx)("div", {
                                        className: L.mB,
                                        children: (0, e.jsx)(y.E, {
                                            variant: "footnote/semibold",
                                            lineClamp: 1,
                                            children: (0, e.jsx)(O.A, { children: d > 99 ? ">99" : `+${d}` }),
                                        }),
                                    })
                                  : (0, e.jsx)(o.m, {
                                        text: I.Ay.getName(t.guild_id, t.id, s),
                                        children: (0, e.jsx)("img", {
                                            className: L.my,
                                            src: s.getAvatarURL(t.guild_id, (0, E.FT)(E._3.SIZE_80)),
                                            alt: "",
                                        }),
                                    }),
                      },
                      s.id,
                  );
        }),
    });
}
var V = t(939249),
    T = t(22231),
    P = t(532622),
    w = t(271683),
    G = t(882840),
    U = t(208971),
    k = t(46054),
    F = t(345640),
    R = t(174459),
    z = t(531648),
    B = t(652215),
    H = t(105292),
    Q = t(105065);
function Y(i) {
    let { voiceChannel: l, onAction: t, onClose: s } = i,
        { themeType: d } = (0, p.E)(),
        { analyticsLocations: o } = (0, h.Ay)(),
        r = (0, F.b)(l),
        c = (0, P.Ay)(l, !0),
        u = (0, U.G)((0, G.l)(l)),
        A = n.useMemo(
            () => (null == u || "" === u ? null : k.A.parseVoiceChannelStatus(u, !0, { channelId: l.id })),
            [u, l.id],
        );
    return (n.useEffect(() => {
        null != A &&
            R.default.track(B.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: l.id,
                guild_id: l.guild_id,
                location_stack: o,
            });
    }, [A, l.id, l.guild_id, o]),
    c && r)
        ? (0, e.jsxs)(V.D, {
              className: Q.vk,
              onClick: (i) => {
                  (i.stopPropagation(),
                      t({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
                      d === b.d.POPOUT && s?.(),
                      (0, w.A)({ channel: l, sourceAnalyticsLocations: o }));
              },
              children: [
                  (0, e.jsx)(z.A, {
                      text: A ?? H.intl.string(H.t.Mgpxiw),
                      variant: "body-xs/normal",
                      color: "text-subtle",
                      className: Q.Qq,
                  }),
                  (0, e.jsx)(T.PencilIcon, {
                      color: "currentColor",
                      size: "xxs",
                      className: a()(Q.rD, null != A ? Q.R : void 0),
                      "aria-label": H.intl.string(H.t.bt75uw),
                  }),
              ],
          })
        : null != A
          ? (0, e.jsx)(z.A, { text: A, variant: "body-xs/normal", color: "text-subtle", className: Q.Qq })
          : null;
}
var $ = t(70963),
    Z = t(269587),
    q = t(260155);
function J(i) {
    let { user: l, currentUser: t, voiceChannel: s, className: f, onClose: O } = i,
        { themeType: y } = (0, p.E)(),
        { analyticsLocations: E } = (0, h.Ay)(A.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        I = (0, m.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: s.id,
            user: l,
            analyticsLocations: E,
        }),
        L = (0, j.A)({ userId: l.id, onAction: I }),
        S = (0, d.bG)([g.A], () => g.A.getGuild(s.guild_id)),
        D = (0, C.A)(s),
        V = (0, x.Ay)(s),
        T = n.useId();
    function P() {
        return (0, e.jsx)("div", {
            className: q.o1,
            children: (0, e.jsx)($.Ay, { channel: s, onAction: I, onClose: O }),
        });
    }
    let w =
        s.isDM() || s.isGroupDM()
            ? H.intl.string(H.t["9FaEzi"])
            : s.isGuildStageVoice()
              ? H.intl.string(H.t.QygGCN)
              : H.intl.string(H.t.msxteM);
    return (0, e.jsx)(h.f5, {
        value: E,
        children: (0, e.jsxs)(v.A, {
            ref: L,
            className: a()(q.Nr, f),
            onAction: I,
            onClose: O,
            "aria-labelledby": T,
            children: [
                (0, e.jsx)(N.A, {
                    text: w,
                    tags: (function () {
                        if (l.id !== t.id) return null;
                        let i = s.isDM() || s.isGroupDM() ? H.intl.string(H.t["+DsWbX"]) : H.intl.string(H.t.xOVEjc);
                        return (0, e.jsx)(o.m, {
                            text: i,
                            children: (0, e.jsx)(r.CircleInformationIcon, { size: "xxs" }),
                        });
                    })(),
                    contextMenu: (0, e.jsx)(Z.A, { display: "voice", user: l, onClose: O }),
                }),
                (0, e.jsx)(c.A, { children: (0, e.jsx)(u.H, { id: T, children: `${w}, ${V}` }) }),
                (0, e.jsx)("div", {
                    className: q.rf,
                    children: (0, e.jsxs)("div", {
                        className: q.Qs,
                        children: [
                            (0, e.jsx)(M, { users: D, channel: s }),
                            (0, e.jsxs)("div", {
                                className: q.zH,
                                children: [
                                    (0, e.jsx)(_.A, { channel: s, guild: S, onAction: I, onClose: O }),
                                    s.isGuildVoice() && (0, e.jsx)(Y, { voiceChannel: s, onAction: I, onClose: O }),
                                    y === b.d.MODAL_V2 && P(),
                                ],
                            }),
                            y === b.d.MODAL && P(),
                        ],
                    }),
                }),
                y !== b.d.MODAL && y !== b.d.MODAL_V2 && P(),
            ],
        }),
    });
}
