"use strict";
n.d(t, { A: () => B });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(342952),
    l = n(397927),
    u = n(956793),
    c = n(401843),
    d = n(475743),
    _ = n(672979),
    f = n(717306),
    p = n(323073),
    h = n(793574),
    m = n(688810),
    E = n(402216),
    g = n(450149),
    A = n(279250),
    I = n(734057),
    T = n(71393),
    S = n(576705),
    y = n(290863),
    v = n(607567),
    N = n(92240),
    C = n(257367),
    R = n(939496),
    O = n(584904),
    b = n(351638),
    D = n(316770),
    L = n(910607),
    w = n(70963),
    M = n(8738),
    x = n(652215),
    P = n(996988),
    k = n(985018),
    U = n(380297),
    G = n(402697),
    F = n(399162),
    V = n(181147);
function B(e) {
    let { user: t, currentUser: n, stream: i, className: B, onClose: H } = e,
        { themeType: j, theme: Y } = (0, R.E)(),
        W = (0, a.bG)([T.A], () => T.A.getGuild(i?.guildId)),
        K = (0, a.bG)([I.A], () => I.A.getChannel(i?.channelId)),
        $ = (0, a.yK)([v.Ay], () =>
            null != K
                ? v.Ay.getVoiceStatesForChannel(K).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : [],
        ),
        z = (0, a.bG)([y.A], () => y.A.findActivity(t.id, (e) => (0, _.A)(e) && !(0, f.A)(e))),
        { analyticsLocations: q } = (0, m.Ay)(h.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        Z = (0, N.A)({ display: "live", voiceChannelId: K?.id, user: t, stream: i, analyticsLocations: q }),
        X = (0, C.A)({ userId: t.id, onAction: Z }),
        { previewUrl: Q, isLoading: J } = (0, g.A)(i?.guildId, i?.channelId, i?.ownerId),
        [ee, et] = (0, A.zP)(K),
        en = (0, p.a9)() && (0, p.UK)(K?.id),
        er = (0, a.bG)([S.A], () => null != K && !en && S.A.canBasicChannel(x.hVb.CONNECT, K)),
        ei = (0, d.A)(J ? null : Q),
        es = J || null == Q ? ei : Q;
    if (null == W || null == K || !1 === i.discoverable) return null;
    let ea = () => {
            let e = (e) => {
                e.stopPropagation(),
                    ee &&
                        (Z({ action: "PRESS_IMAGE" }), u.default.selectVoiceChannel(i.channelId), (0, c.Nl)(i), H?.());
            };
            return null == es && J
                ? (0, r.jsx)("div", { className: G.VH, children: (0, r.jsx)(l.y$y, {}) })
                : null == es || en
                  ? (0, r.jsxs)(l.DUT, {
                        className: s()(G.VH, G.Lw, ee ? G.vk : G.r9),
                        onClick: e,
                        "aria-label": (0, A.CQ)(et),
                        "aria-disabled": !ee,
                        children: [
                            (0, r.jsx)("img", { alt: "", src: Y === x.NJ8.LIGHT ? V : F }),
                            j !== P.d.MODAL &&
                                j !== P.d.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: G.um,
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children: (0, A.CT)(et),
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-sm/medium",
                                            children: er ? k.intl.string(k.t.uQZTBV) : k.intl.string(k.t.pgUTZC),
                                        }),
                                    ],
                                }),
                        ],
                    })
                  : (0, r.jsxs)(l.DUT, {
                        className: s()(G.VH, G.Lw, ee ? G.vk : G.r9),
                        onClick: e,
                        "aria-label": (0, A.CQ)(et),
                        "aria-disabled": !ee,
                        children: [
                            (0, r.jsx)("img", { alt: "", src: es, className: G.Sl }),
                            j !== P.d.MODAL &&
                                j !== P.d.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: G.um,
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children: (0, A.CT)(et),
                                        }),
                                        (0, r.jsx)(l.pVd, { size: "xs", color: "currentColor", className: G.wI }),
                                    ],
                                }),
                        ],
                    });
        },
        eo = () =>
            j !== P.d.MODAL && j !== P.d.MODAL_V2
                ? null
                : (0, r.jsxs)("div", {
                      className: U.zH,
                      children: [
                          (0, r.jsx)(D.A, { channel: K, guild: W, onAction: Z, onClose: H }),
                          (0, r.jsx)(o.A, {
                              users: $,
                              guildId: W.id,
                              channelId: K.id,
                              maxUsers: L.k,
                              size: l._3J.SIZE_16,
                              onClickOverflow: (e) => {
                                  e?.stopPropagation(), Z?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                              },
                              onUserClick: (e) => e.stopPropagation(),
                              disableUserPopout: (e) => e === t.id,
                              overflowCountColor: "text-muted",
                              "aria-label": k.intl.string(k.t["jNqDh/"]),
                          }),
                          j === P.d.MODAL_V2 && eu(),
                      ],
                  }),
        el = () =>
            j === P.d.MODAL || j === P.d.MODAL_V2
                ? null
                : (0, r.jsx)(L.A, { user: t, guild: W, channel: K, onAction: Z, onClose: H }),
        eu = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)("div", {
                      className: U.o1,
                      children: (0, r.jsx)(w.Ay, { channel: K, onAction: Z, onClose: H }),
                  }),
        ec = null != z ? k.intl.formatToPlainString(k.t["4CQq9Q"], { name: z.name }) : k.intl.string(k.t["Jpkr/q"]);
    return (0, r.jsx)(m.f5, {
        value: q,
        children: (0, r.jsxs)(O.A, {
            ref: X,
            className: B,
            onAction: Z,
            onClose: H,
            "aria-label": ec,
            children: [
                (0, r.jsx)(b.A, {
                    text: ec,
                    tags: (0, r.jsx)(E.Ay, { size: E.ed.SMALL }),
                    contextMenu: (0, r.jsx)(M.A, { display: "live", user: t, onClose: H }),
                }),
                (0, r.jsxs)("div", {
                    className: U.rf,
                    children: [
                        (0, r.jsxs)("div", { className: U.Qs, children: [ea(), eo(), j === P.d.MODAL && eu()] }),
                        el(),
                    ],
                }),
                j !== P.d.MODAL && j !== P.d.MODAL_V2 && eu(),
            ],
        }),
    });
}
