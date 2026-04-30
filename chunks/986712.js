l.d(i, { A: () => Z });
var t = l(627968),
    n = l(64700),
    s = l(503698),
    a = l.n(s),
    d = l(17928),
    o = l(990078),
    r = l(885574),
    c = l(140735),
    A = l(707554),
    h = l(793574),
    u = l(688810),
    x = l(47167),
    g = l(71393),
    m = l(575731),
    j = l(92240),
    p = l(257367),
    C = l(939496),
    _ = l(584904),
    N = l(351638),
    v = l(316770),
    f = l(735438),
    O = l(780645),
    I = l(834730),
    E = l(778712),
    y = l(562153),
    L = l(996988),
    S = l(242697);
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
    T = [
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
function V(e) {
    let { users: i, channel: l } = e,
        { themeType: n } = (0, C.E)(),
        s = n === L.d.MODAL_V2 ? T : b,
        a = i.length > 4,
        d = i.length - 4 + 1,
        r = d >= 10 ? 3 : 1;
    return (0, t.jsx)("div", {
        className: S.kL,
        children: s[(0, f.clamp)(i.length - 1, 0, s.length - 1)].map((e, n) => {
            let s = i[n];
            return null == s
                ? null
                : (0, t.jsx)(
                      "div",
                      {
                          className: S.n1,
                          style: e,
                          children:
                              a && n === r
                                  ? (0, t.jsx)("div", {
                                        className: S.mB,
                                        children: (0, t.jsx)(I.E, {
                                            variant: "text-xxs/semibold",
                                            lineClamp: 1,
                                            children: (0, t.jsx)(O.A, { children: d > 99 ? ">99" : `+${d}` }),
                                        }),
                                    })
                                  : (0, t.jsx)(o.m, {
                                        text: y.Ay.getName(l.guild_id, l.id, s),
                                        children: (0, t.jsx)("img", {
                                            className: S.my,
                                            src: s.getAvatarURL(l.guild_id, (0, E.FT)(E._3.SIZE_80)),
                                            alt: "",
                                        }),
                                    }),
                      },
                      s.id,
                  );
        }),
    });
}
var D = l(939249),
    w = l(22231),
    M = l(532622),
    P = l(271683),
    G = l(882840),
    U = l(46054),
    k = l(345640),
    F = l(954571),
    R = l(531648),
    z = l(652215),
    H = l(985018),
    Q = l(237770);
function B(e) {
    let { voiceChannel: i, onAction: l, onClose: s } = e,
        { themeType: d } = (0, C.E)(),
        { analyticsLocations: o } = (0, u.Ay)(),
        r = (0, k.b)(i),
        c = (0, M.Ay)(i, !0),
        A = (0, G.l)(i),
        h = n.useMemo(
            () => (null == A || "" === A ? null : U.A.parseVoiceChannelStatus(A, !0, { channelId: i.id })),
            [A, i.id],
        );
    return (n.useEffect(() => {
        null != h &&
            F.default.track(z.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                channel_id: i.id,
                guild_id: i.guild_id,
                location_stack: o,
            });
    }, [h, i.id, i.guild_id, o]),
    c && r)
        ? (0, t.jsxs)(D.D, {
              className: Q.vk,
              onClick: (e) => {
                  e.stopPropagation(),
                      l({ action: "PRESS_VOICE_CHANNEL_STATUS" }),
                      d === L.d.POPOUT && s?.(),
                      (0, P.A)({ channel: i, sourceAnalyticsLocations: o });
              },
              children: [
                  (0, t.jsx)(R.A, {
                      text: h ?? H.intl.string(H.t.Mgpxiw),
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: Q.Qq,
                  }),
                  (0, t.jsx)(w.R, {
                      color: "currentColor",
                      size: "xxs",
                      className: a()(Q.rD, null != h ? Q.R : void 0),
                      "aria-label": H.intl.string(H.t.bt75uw),
                  }),
              ],
          })
        : null != h
          ? (0, t.jsx)(R.A, { text: h, variant: "text-xs/normal", color: "text-subtle", className: Q.Qq })
          : null;
}
var Y = l(70963),
    $ = l(269587),
    q = l(514566);
function Z(e) {
    let { user: i, currentUser: l, voiceChannel: s, className: f, onClose: O } = e,
        { themeType: I } = (0, C.E)(),
        { analyticsLocations: E } = (0, u.Ay)(h.A.USER_PROFILE_VOICE_ACTIVITY_CARD),
        y = (0, j.A)({
            display: "voice",
            activity: { type: "VOICE" },
            voiceChannelId: s.id,
            user: i,
            analyticsLocations: E,
        }),
        S = (0, p.A)({ userId: i.id, onAction: y }),
        b = (0, d.bG)([g.A], () => g.A.getGuild(s.guild_id)),
        T = (0, m.A)(s),
        D = (0, x.Ay)(s),
        w = n.useId(),
        M = () =>
            (0, t.jsx)("div", { className: q.o1, children: (0, t.jsx)(Y.Ay, { channel: s, onAction: y, onClose: O }) }),
        P =
            s.isDM() || s.isGroupDM()
                ? H.intl.string(H.t["9FaEzi"])
                : s.isGuildStageVoice()
                  ? H.intl.string(H.t.QygGCN)
                  : H.intl.string(H.t.msxteM);
    return (0, t.jsx)(u.f5, {
        value: E,
        children: (0, t.jsxs)(_.A, {
            ref: S,
            className: a()(q.Nr, f),
            onAction: y,
            onClose: O,
            "aria-labelledby": w,
            children: [
                (0, t.jsx)(N.A, {
                    text: P,
                    tags: (() => {
                        if (i.id !== l.id) return null;
                        let e = s.isDM() || s.isGroupDM() ? H.intl.string(H.t["+DsWbX"]) : H.intl.string(H.t.xOVEjc);
                        return (0, t.jsx)(o.m, { text: e, children: (0, t.jsx)(r.m, { size: "xxs" }) });
                    })(),
                    contextMenu: (0, t.jsx)($.A, { display: "voice", user: i, onClose: O }),
                }),
                (0, t.jsx)(c.A, { children: (0, t.jsx)(A.H, { id: w, children: `${P}, ${D}` }) }),
                (0, t.jsx)("div", {
                    className: q.rf,
                    children: (0, t.jsxs)("div", {
                        className: q.Qs,
                        children: [
                            (0, t.jsx)(V, { users: T, channel: s }),
                            (0, t.jsxs)("div", {
                                className: q.zH,
                                children: [
                                    (0, t.jsx)(v.A, { channel: s, guild: b, onAction: y, onClose: O }),
                                    s.isGuildVoice() && (0, t.jsx)(B, { voiceChannel: s, onAction: y, onClose: O }),
                                    I === L.d.MODAL_V2 && M(),
                                ],
                            }),
                            I === L.d.MODAL && M(),
                        ],
                    }),
                }),
                I !== L.d.MODAL && I !== L.d.MODAL_V2 && M(),
            ],
        }),
    });
}
