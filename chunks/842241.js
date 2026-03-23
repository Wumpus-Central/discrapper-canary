"use strict";
n.d(t, { A: () => j });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(342952),
    u = n(397927),
    c = n(956793),
    d = n(401843),
    _ = n(475743),
    f = n(672979),
    p = n(717306),
    h = n(323073),
    m = n(793574),
    E = n(688810),
    g = n(47167),
    A = n(402216),
    I = n(450149),
    T = n(279250),
    S = n(734057),
    y = n(71393),
    v = n(576705),
    N = n(290863),
    C = n(607567),
    R = n(92240),
    O = n(257367),
    b = n(939496),
    D = n(584904),
    L = n(351638),
    w = n(316770),
    M = n(910607),
    x = n(70963),
    P = n(8738),
    k = n(652215),
    U = n(996988),
    G = n(985018),
    F = n(380297),
    V = n(402697),
    B = n(399162),
    H = n(181147);
function j(e) {
    let { user: t, currentUser: n, stream: s, className: j, onClose: Y } = e,
        { themeType: W, theme: K } = (0, b.E)(),
        $ = (0, o.bG)([y.A], () => y.A.getGuild(s?.guildId)),
        z = (0, o.bG)([S.A], () => S.A.getChannel(s?.channelId)),
        q = (0, g.Ay)(z),
        Z = (0, o.yK)([C.Ay], () =>
            null != z
                ? C.Ay.getVoiceStatesForChannel(z).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : [],
        ),
        X = (0, o.bG)([N.A], () => N.A.findActivity(t.id, (e) => (0, f.A)(e) && !(0, p.A)(e))),
        { analyticsLocations: Q } = (0, E.Ay)(m.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        J = (0, R.A)({ display: "live", voiceChannelId: z?.id, user: t, stream: s, analyticsLocations: Q }),
        ee = (0, O.A)({ userId: t.id, onAction: J }),
        { previewUrl: et, isLoading: en } = (0, I.A)(s?.guildId, s?.channelId, s?.ownerId),
        [er, ei] = (0, T.zP)(z),
        es = (0, h.a9)() && (0, h.UK)(z?.id),
        ea = (0, o.bG)([v.A], () => null != z && !es && v.A.canBasicChannel(k.hVb.CONNECT, z)),
        eo = (0, _.A)(en ? null : et),
        el = en || null == et ? eo : et,
        eu = i.useId();
    if (null == $ || null == z || !1 === s.discoverable) return null;
    let ec = () => {
            let e = (e) => {
                e.stopPropagation(),
                    er &&
                        (J({ action: "PRESS_IMAGE" }), c.default.selectVoiceChannel(s.channelId), (0, d.Nl)(s), Y?.());
            };
            return null == el && en
                ? (0, r.jsx)("div", { className: V.VH, children: (0, r.jsx)(u.y$y, {}) })
                : null == el || es
                  ? (0, r.jsxs)(u.DUT, {
                        className: a()(V.VH, V.Lw, er ? V.vk : V.r9),
                        onClick: e,
                        "aria-label": (0, T.CQ)(ei),
                        "aria-disabled": !er,
                        children: [
                            (0, r.jsx)("img", { alt: "", src: K === k.NJ8.LIGHT ? H : B }),
                            W !== U.d.MODAL &&
                                W !== U.d.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            className: V.um,
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children: (0, T.CT)(ei),
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-sm/medium",
                                            children: ea ? G.intl.string(G.t.uQZTBV) : G.intl.string(G.t.pgUTZC),
                                        }),
                                    ],
                                }),
                        ],
                    })
                  : (0, r.jsxs)(u.DUT, {
                        className: a()(V.VH, V.Lw, er ? V.vk : V.r9),
                        onClick: e,
                        "aria-label": (0, T.CQ)(ei),
                        "aria-disabled": !er,
                        children: [
                            (0, r.jsx)("img", { alt: "", src: el, className: V.Sl }),
                            W !== U.d.MODAL &&
                                W !== U.d.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            className: V.um,
                                            variant: "text-sm/medium",
                                            color: "always-white",
                                            children: (0, T.CT)(ei),
                                        }),
                                        (0, r.jsx)(u.pVd, { size: "xs", color: "currentColor", className: V.wI }),
                                    ],
                                }),
                        ],
                    });
        },
        ed = () =>
            W !== U.d.MODAL && W !== U.d.MODAL_V2
                ? null
                : (0, r.jsxs)("div", {
                      className: F.zH,
                      children: [
                          (0, r.jsx)(w.A, { channel: z, guild: $, onAction: J, onClose: Y }),
                          (0, r.jsx)(l.A, {
                              users: Z,
                              guildId: $.id,
                              channelId: z.id,
                              maxUsers: M.k,
                              size: u._3J.SIZE_16,
                              onClickOverflow: (e) => {
                                  e?.stopPropagation(), J?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                              },
                              onUserClick: (e) => e.stopPropagation(),
                              disableUserPopout: (e) => e === t.id,
                              overflowCountColor: "text-muted",
                              "aria-label": G.intl.string(G.t["jNqDh/"]),
                          }),
                          W === U.d.MODAL_V2 && ef(),
                      ],
                  }),
        e_ = () =>
            W === U.d.MODAL || W === U.d.MODAL_V2
                ? null
                : (0, r.jsx)(M.A, { user: t, guild: $, channel: z, onAction: J, onClose: Y }),
        ef = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)("div", {
                      className: F.o1,
                      children: (0, r.jsx)(x.Ay, { channel: z, onAction: J, onClose: Y }),
                  }),
        ep = null != X ? G.intl.formatToPlainString(G.t["4CQq9Q"], { name: X.name }) : G.intl.string(G.t["Jpkr/q"]);
    return (0, r.jsx)(E.f5, {
        value: Q,
        children: (0, r.jsxs)(D.A, {
            ref: ee,
            className: j,
            onAction: J,
            onClose: Y,
            "aria-labelledby": eu,
            children: [
                (0, r.jsx)(L.A, {
                    text: ep,
                    tags: (0, r.jsx)(A.Ay, { size: A.ed.SMALL }),
                    contextMenu: (0, r.jsx)(P.A, { display: "live", user: t, onClose: Y }),
                }),
                (0, r.jsx)(u.AC4, { children: (0, r.jsx)(u.H, { id: eu, children: `${ep}, ${q}` }) }),
                (0, r.jsxs)("div", {
                    className: F.rf,
                    children: [
                        (0, r.jsxs)("div", { className: F.Qs, children: [ec(), ed(), W === U.d.MODAL && ef()] }),
                        e_(),
                    ],
                }),
                W !== U.d.MODAL && W !== U.d.MODAL_V2 && ef(),
            ],
        }),
    });
}
