"use strict";
n.d(t, { A: () => j });
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
    h = n(323073),
    p = n(793574),
    g = n(688810),
    E = n(402216),
    A = n(450149),
    I = n(279250),
    T = n(734057),
    y = n(71393),
    S = n(576705),
    v = n(290863),
    C = n(607567),
    b = n(92240),
    N = n(257367),
    R = n(939496),
    O = n(584904),
    D = n(351638),
    L = n(316770),
    w = n(910607),
    x = n(70963),
    P = n(8738),
    M = n(652215),
    k = n(996988),
    U = n(985018),
    G = n(380297),
    F = n(402697),
    V = n(399162),
    B = n(181147);
function j(e) {
    let { user: t, currentUser: n, stream: i, className: j, onClose: H } = e,
        { themeType: Y, theme: W } = (0, R.E)(),
        K = (0, s.bG)([y.A], () => y.A.getGuild(i?.guildId)),
        $ = (0, s.bG)([T.A], () => T.A.getChannel(i?.channelId)),
        z = (0, s.yK)([C.Ay], () =>
            null != $
                ? C.Ay.getVoiceStatesForChannel($).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : [],
        ),
        q = (0, s.bG)([v.A], () => v.A.findActivity(t.id, (e) => (0, _.A)(e) && !(0, f.A)(e))),
        { analyticsLocations: X } = (0, g.Ay)(p.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        Z = (0, b.A)({ display: "live", voiceChannelId: $?.id, user: t, stream: i, analyticsLocations: X }),
        Q = (0, N.A)({ userId: t.id, onAction: Z }),
        { previewUrl: J, isLoading: ee } = (0, A.A)(i?.guildId, i?.channelId, i?.ownerId),
        [et, en] = (0, I.zP)($),
        er = (0, h.a9)() && (0, h.UK)($?.id),
        ei = (0, s.bG)([S.A], () => null != $ && !er && S.A.canBasicChannel(M.hVb.CONNECT, $)),
        ea = (0, d.A)(ee ? null : J),
        es = ee || null == J ? ea : J;
    if (null == K || null == $ || !1 === i.discoverable) return null;
    let eo = () => {
            let e = (e) => {
                e.stopPropagation(),
                    et &&
                        (Z({ action: "PRESS_IMAGE" }), u.default.selectVoiceChannel(i.channelId), (0, c.Nl)(i), H?.());
            };
            return null == es && ee
                ? (0, r.jsx)("div", { className: F.VH, children: (0, r.jsx)(l.y$y, {}) })
                : null == es || er
                  ? (0, r.jsxs)(l.DUT, {
                        className: a()(F.VH, F.Lw, et ? F.vk : F.r9),
                        onClick: e,
                        "aria-label": (0, I.CQ)(en),
                        "aria-disabled": !et,
                        children: [
                            (0, r.jsx)("img", { alt: "", src: W === M.NJ8.LIGHT ? B : V }),
                            Y !== k.d.MODAL &&
                                Y !== k.d.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: F.um,
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children: (0, I.CT)(en),
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-sm/medium",
                                            children: ei ? U.intl.string(U.t.uQZTBV) : U.intl.string(U.t.pgUTZC),
                                        }),
                                    ],
                                }),
                        ],
                    })
                  : (0, r.jsxs)(l.DUT, {
                        className: a()(F.VH, F.Lw, et ? F.vk : F.r9),
                        onClick: e,
                        "aria-label": (0, I.CQ)(en),
                        "aria-disabled": !et,
                        children: [
                            (0, r.jsx)("img", { alt: "", src: es, className: F.Sl }),
                            Y !== k.d.MODAL &&
                                Y !== k.d.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: F.um,
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children: (0, I.CT)(en),
                                        }),
                                        (0, r.jsx)(l.pVd, { size: "xs", color: "currentColor", className: F.wI }),
                                    ],
                                }),
                        ],
                    });
        },
        el = () =>
            Y !== k.d.MODAL && Y !== k.d.MODAL_V2
                ? null
                : (0, r.jsxs)("div", {
                      className: G.zH,
                      children: [
                          (0, r.jsx)(L.A, { channel: $, guild: K, onAction: Z, onClose: H }),
                          (0, r.jsx)(o.A, {
                              users: z,
                              guildId: K.id,
                              channelId: $.id,
                              maxUsers: w.k,
                              size: l._3J.SIZE_16,
                              onClickOverflow: (e) => {
                                  e?.stopPropagation(), Z?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                              },
                              onUserClick: (e) => e.stopPropagation(),
                              disableUserPopout: (e) => e === t.id,
                              overflowCountColor: "text-muted",
                              "aria-label": U.intl.string(U.t["jNqDh/"]),
                          }),
                          Y === k.d.MODAL_V2 && ec(),
                      ],
                  }),
        eu = () =>
            Y === k.d.MODAL || Y === k.d.MODAL_V2
                ? null
                : (0, r.jsx)(w.A, { user: t, guild: K, channel: $, onAction: Z, onClose: H }),
        ec = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)("div", {
                      className: G.o1,
                      children: (0, r.jsx)(x.A, { channel: $, onAction: Z, onClose: H }),
                  }),
        ed = null != q ? U.intl.formatToPlainString(U.t["4CQq9Q"], { name: q.name }) : U.intl.string(U.t["Jpkr/q"]);
    return (0, r.jsx)(g.f5, {
        value: X,
        children: (0, r.jsxs)(O.A, {
            ref: Q,
            className: j,
            onAction: Z,
            onClose: H,
            "aria-label": ed,
            children: [
                (0, r.jsx)(D.A, {
                    text: ed,
                    tags: (0, r.jsx)(E.Ay, { size: E.ed.SMALL }),
                    contextMenu: (0, r.jsx)(P.A, { display: "live", user: t, onClose: H }),
                }),
                (0, r.jsxs)("div", {
                    className: G.rf,
                    children: [
                        (0, r.jsxs)("div", { className: G.Qs, children: [eo(), el(), Y === k.d.MODAL && ec()] }),
                        eu(),
                    ],
                }),
                Y !== k.d.MODAL && Y !== k.d.MODAL_V2 && ec(),
            ],
        }),
    });
}
