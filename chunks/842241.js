"use strict";
n.d(t, { A: () => B });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
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
    g = n(402216),
    E = n(450149),
    A = n(279250),
    I = n(734057),
    T = n(71393),
    y = n(576705),
    S = n(290863),
    v = n(607567),
    C = n(92240),
    b = n(257367),
    N = n(939496),
    R = n(584904),
    O = n(351638),
    D = n(316770),
    L = n(910607),
    w = n(70963),
    x = n(8738),
    P = n(652215),
    M = n(996988),
    k = n(985018),
    U = n(380297),
    G = n(402697),
    V = n(399162),
    F = n(181147);
function B(e) {
    let { user: t, currentUser: n, stream: i, className: B, onClose: j } = e,
        { themeType: H, theme: Y } = (0, N.E)(),
        W = (0, s.bG)([T.A], () => T.A.getGuild(i?.guildId)),
        K = (0, s.bG)([I.A], () => I.A.getChannel(i?.channelId)),
        z = (0, s.yK)([v.Ay], () =>
            null != K
                ? v.Ay.getVoiceStatesForChannel(K).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : [],
        ),
        $ = (0, s.bG)([S.A], () => S.A.findActivity(t.id, (e) => (0, _.A)(e) && !(0, f.A)(e))),
        { analyticsLocations: q } = (0, m.Ay)(h.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        Z = (0, C.A)({ display: "live", voiceChannelId: K?.id, user: t, stream: i, analyticsLocations: q }),
        Q = (0, b.A)({ userId: t.id, onAction: Z }),
        { previewUrl: X, isLoading: J } = (0, E.A)(i?.guildId, i?.channelId, i?.ownerId),
        [ee, et] = (0, A.zP)(K),
        en = (0, p.a9)() && (0, p.UK)(K?.id),
        er = (0, s.bG)([y.A], () => null != K && !en && y.A.canBasicChannel(P.hVb.CONNECT, K)),
        ei = (0, d.A)(J ? null : X),
        ea = J || null == X ? ei : X;
    if (null == W || null == K || !1 === i.discoverable) return null;
    let es = () => {
            let e = (e) => {
                e.stopPropagation(),
                    ee &&
                        (Z({ action: "PRESS_IMAGE" }), u.default.selectVoiceChannel(i.channelId), (0, c.Nl)(i), j?.());
            };
            return null == ea && J
                ? (0, r.jsx)("div", { className: G.VH, children: (0, r.jsx)(l.y$y, {}) })
                : null == ea || en
                  ? (0, r.jsxs)(l.DUT, {
                        className: a()(G.VH, G.Lw, ee ? G.vk : G.r9),
                        onClick: e,
                        "aria-label": (0, A.CQ)(et),
                        "aria-disabled": !ee,
                        children: [
                            (0, r.jsx)("img", { alt: "", src: Y === P.NJ8.LIGHT ? F : V }),
                            H !== M.d.MODAL &&
                                H !== M.d.MODAL_V2 &&
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
                        className: a()(G.VH, G.Lw, ee ? G.vk : G.r9),
                        onClick: e,
                        "aria-label": (0, A.CQ)(et),
                        "aria-disabled": !ee,
                        children: [
                            (0, r.jsx)("img", { alt: "", src: ea, className: G.Sl }),
                            H !== M.d.MODAL &&
                                H !== M.d.MODAL_V2 &&
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
            H !== M.d.MODAL && H !== M.d.MODAL_V2
                ? null
                : (0, r.jsxs)("div", {
                      className: U.zH,
                      children: [
                          (0, r.jsx)(D.A, { channel: K, guild: W, onAction: Z, onClose: j }),
                          (0, r.jsx)(o.A, {
                              users: z,
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
                          H === M.d.MODAL_V2 && eu(),
                      ],
                  }),
        el = () =>
            H === M.d.MODAL || H === M.d.MODAL_V2
                ? null
                : (0, r.jsx)(L.A, { user: t, guild: W, channel: K, onAction: Z, onClose: j }),
        eu = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)("div", {
                      className: U.o1,
                      children: (0, r.jsx)(w.A, { channel: K, onAction: Z, onClose: j }),
                  }),
        ec = null != $ ? k.intl.formatToPlainString(k.t["4CQq9Q"], { name: $.name }) : k.intl.string(k.t["Jpkr/q"]);
    return (0, r.jsx)(m.f5, {
        value: q,
        children: (0, r.jsxs)(R.A, {
            ref: Q,
            className: B,
            onAction: Z,
            onClose: j,
            "aria-label": ec,
            children: [
                (0, r.jsx)(O.A, {
                    text: ec,
                    tags: (0, r.jsx)(g.Ay, { size: g.ed.SMALL }),
                    contextMenu: (0, r.jsx)(x.A, { display: "live", user: t, onClose: j }),
                }),
                (0, r.jsxs)("div", {
                    className: U.rf,
                    children: [
                        (0, r.jsxs)("div", { className: U.Qs, children: [es(), eo(), H === M.d.MODAL && eu()] }),
                        el(),
                    ],
                }),
                H !== M.d.MODAL && H !== M.d.MODAL_V2 && eu(),
            ],
        }),
    });
}
