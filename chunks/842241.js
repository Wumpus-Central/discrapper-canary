n.d(t, {
    A: () => F,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(342952),
    l = n(397927),
    c = n(956793),
    u = n(401843),
    d = n(475743),
    f = n(672979),
    p = n(717306),
    _ = n(323073),
    h = n(793574),
    m = n(688810),
    g = n(402216),
    E = n(450149),
    b = n(279250),
    y = n(734057),
    O = n(71393),
    A = n(576705),
    v = n(290863),
    S = n(607567),
    I = n(92240),
    T = n(257367),
    C = n(939496),
    N = n(584904),
    R = n(351638),
    w = n(316770),
    P = n(910607),
    D = n(70963),
    x = n(8738),
    L = n(652215),
    j = n(996988),
    M = n(985018),
    k = n(380297),
    U = n(402697),
    G = n(399162),
    V = n(181147);

function F(e) {
    let { user: t, currentUser: n, stream: i, className: F, onClose: B } = e,
        { themeType: H, theme: Y } = (0, C.E)(),
        W = (0, s.bG)([O.A], () => O.A.getGuild(null == i ? void 0 : i.guildId)),
        K = (0, s.bG)([y.A], () => y.A.getChannel(null == i ? void 0 : i.channelId)),
        z = (0, s.yK)([S.Ay], () =>
            null != K
                ? S.Ay.getVoiceStatesForChannel(K).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : [],
        ),
        q = (0, s.bG)([v.A], () => v.A.findActivity(t.id, (e) => (0, f.A)(e) && !(0, p.A)(e))),
        { analyticsLocations: X } = (0, m.Ay)(h.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        Z = (0, I.A)({
            display: "live",
            voiceChannelId: null == K ? void 0 : K.id,
            user: t,
            stream: i,
            analyticsLocations: X,
        }),
        Q = (0, T.A)({
            userId: t.id,
            onAction: Z,
        }),
        { previewUrl: $, isLoading: J } = (0, E.A)(
            null == i ? void 0 : i.guildId,
            null == i ? void 0 : i.channelId,
            null == i ? void 0 : i.ownerId,
        ),
        [ee, et] = (0, b.zP)(K),
        en = (0, _.a9)() && (0, _.UK)(null == K ? void 0 : K.id),
        er = (0, s.bG)([A.A], () => null != K && !en && A.A.canBasicChannel(L.hVb.CONNECT, K)),
        ei = (0, d.A)(J ? null : $),
        ea = J || null == $ ? ei : $;
    if (null == W || null == K || !1 === i.discoverable) return null;
    let es = () => {
            let e = (e) => {
                e.stopPropagation(),
                    ee &&
                        (Z({
                            action: "PRESS_IMAGE",
                        }),
                        c.default.selectVoiceChannel(i.channelId),
                        (0, u.Nl)(i),
                        null == B || B());
            };
            return null == ea && J
                ? (0, r.jsx)("div", {
                      className: U.VH,
                      children: (0, r.jsx)(l.y$y, {}),
                  })
                : null == ea || en
                  ? (0, r.jsxs)(l.DUT, {
                        className: a()(U.VH, U.Lw, ee ? U.vk : U.r9),
                        onClick: e,
                        "aria-label": (0, b.CQ)(et),
                        "aria-disabled": !ee,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                src: Y === L.NJ8.LIGHT ? V : G,
                            }),
                            H !== j.d.MODAL &&
                                H !== j.d.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: U.um,
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children: (0, b.CT)(et),
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-sm/medium",
                                            children: er ? M.intl.string(M.t.uQZTBV) : M.intl.string(M.t.pgUTZC),
                                        }),
                                    ],
                                }),
                        ],
                    })
                  : (0, r.jsxs)(l.DUT, {
                        className: a()(U.VH, U.Lw, ee ? U.vk : U.r9),
                        onClick: e,
                        "aria-label": (0, b.CQ)(et),
                        "aria-disabled": !ee,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                src: ea,
                                className: U.Sl,
                            }),
                            H !== j.d.MODAL &&
                                H !== j.d.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: U.um,
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children: (0, b.CT)(et),
                                        }),
                                        (0, r.jsx)(l.pVd, {
                                            size: "xs",
                                            color: "currentColor",
                                            className: U.wI,
                                        }),
                                    ],
                                }),
                        ],
                    });
        },
        eo = () =>
            H !== j.d.MODAL && H !== j.d.MODAL_V2
                ? null
                : (0, r.jsxs)("div", {
                      className: k.zH,
                      children: [
                          (0, r.jsx)(w.A, {
                              channel: K,
                              guild: W,
                              onAction: Z,
                              onClose: B,
                          }),
                          (0, r.jsx)(o.A, {
                              users: z,
                              guildId: W.id,
                              channelId: K.id,
                              maxUsers: P.k,
                              size: l._3J.SIZE_16,
                              onClickOverflow: (e) => {
                                  null == e || e.stopPropagation(),
                                      null == Z ||
                                          Z({
                                              action: "PRESS_VOICE_CHANNEL_AVATARS",
                                          });
                              },
                              onUserClick: (e) => e.stopPropagation(),
                              disableUserPopout: (e) => e === t.id,
                              overflowCountColor: "text-muted",
                              "aria-label": M.intl.string(M.t["jNqDh/"]),
                          }),
                          H === j.d.MODAL_V2 && ec(),
                      ],
                  }),
        el = () =>
            H === j.d.MODAL || H === j.d.MODAL_V2
                ? null
                : (0, r.jsx)(P.A, {
                      user: t,
                      guild: W,
                      channel: K,
                      onAction: Z,
                      onClose: B,
                  }),
        ec = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)("div", {
                      className: k.o1,
                      children: (0, r.jsx)(D.A, {
                          channel: K,
                          onAction: Z,
                          onClose: B,
                      }),
                  }),
        eu =
            null != q
                ? M.intl.formatToPlainString(M.t["4CQq9Q"], {
                      name: q.name,
                  })
                : M.intl.string(M.t["Jpkr/q"]);
    return (0, r.jsx)(m.f5, {
        value: X,
        children: (0, r.jsxs)(N.A, {
            ref: Q,
            className: F,
            onAction: Z,
            onClose: B,
            "aria-label": eu,
            children: [
                (0, r.jsx)(R.A, {
                    text: eu,
                    tags: (0, r.jsx)(g.Ay, {
                        size: g.ed.SMALL,
                    }),
                    contextMenu: (0, r.jsx)(x.A, {
                        display: "live",
                        user: t,
                        onClose: B,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: k.rf,
                    children: [
                        (0, r.jsxs)("div", {
                            className: k.Qs,
                            children: [es(), eo(), H === j.d.MODAL && ec()],
                        }),
                        el(),
                    ],
                }),
                H !== j.d.MODAL && H !== j.d.MODAL_V2 && ec(),
            ],
        }),
    });
}
