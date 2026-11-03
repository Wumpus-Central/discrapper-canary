t.d(l, { A: () => q });
var e = t(477900),
    n = t(582128),
    s = t(503698),
    a = t.n(s),
    d = t(17928),
    o = t(342952),
    r = t(289873),
    c = t(939249),
    u = t(834730),
    A = t(111159),
    h = t(778712),
    x = t(140735),
    g = t(707554),
    C = t(730852),
    m = t(401843),
    j = t(475743),
    p = t(672979),
    v = t(717306),
    N = t(323073),
    _ = t(597306),
    f = t(793574),
    O = t(688810),
    y = t(47167),
    E = t(402216),
    I = t(450149),
    b = t(711589),
    L = t(71393),
    S = t(576705),
    D = t(290863),
    M = t(607567),
    V = t(92240),
    T = t(257367),
    P = t(939496),
    w = t(584904),
    G = t(351638),
    U = t(316770),
    k = t(910607),
    F = t(70963),
    R = t(113469),
    z = t(652215),
    B = t(996988),
    H = t(105292),
    Q = t(260155),
    Y = t(202611),
    $ = t(399162),
    Z = t(181147);
function q(i) {
    let l,
        { user: t, currentUser: s, stream: q, className: J, onClose: K } = i,
        { themeType: X, theme: W } = (0, P.E)(),
        ii = (0, d.bG)([L.A], () => L.A.getGuild(q?.guildId)),
        { actionString: il, actionAriaLabel: it, canWatch: ie, channel: is } = (0, b.K)(q),
        ia = (0, y.Ay)(is),
        id = (0, d.yK)([M.Ay], () =>
            null != is
                ? M.Ay.getVoiceStatesForChannel(is).map((i) => {
                      let { user: l } = i;
                      return l;
                  })
                : [],
        ),
        io = (0, d.bG)([D.A], () => D.A.findActivity(t.id, (i) => (0, p.A)(i) && !(0, v.A)(i))),
        { analyticsLocations: ir } = (0, O.Ay)(f.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ic = (0, V.A)({ display: "live", voiceChannelId: is?.id, user: t, stream: q, analyticsLocations: ir }),
        iu = (0, T.A)({ userId: t.id, onAction: ic }),
        { previewUrl: iA, isLoading: ih } = (0, I.A)(q?.guildId, q?.channelId, q?.ownerId),
        ix = (0, _.a)() && (0, N.UK)(is?.id),
        ig = (0, d.bG)([S.A], () => null != is && !ix && S.A.canBasicChannel(z.hVb.CONNECT, is)),
        iC = (0, j.Ay)(ih ? null : iA),
        im = ih || null == iA ? iC : iA,
        ij = n.useId();
    if (null == ii || null == is || !1 === q.discoverable) return null;
    function ip() {
        return null == is || t.id === s.id
            ? null
            : (0, e.jsx)("div", {
                  className: Q.o1,
                  children: (0, e.jsx)(F.Ay, { channel: is, onAction: ic, onClose: K }),
              });
    }
    let iv = null != io ? H.intl.formatToPlainString(H.t["4CQq9Q"], { name: io.name }) : H.intl.string(H.t["Jpkr/q"]);
    return (0, e.jsx)(O.f5, {
        value: ir,
        children: (0, e.jsxs)(w.A, {
            ref: iu,
            className: J,
            onAction: ic,
            onClose: K,
            "aria-labelledby": ij,
            children: [
                (0, e.jsx)(G.A, {
                    text: iv,
                    tags: (0, e.jsx)(E.Ay, { size: E.ed.SMALL }),
                    contextMenu: (0, e.jsx)(R.A, { display: "live", user: t, onClose: K }),
                }),
                (0, e.jsx)(x.A, { children: (0, e.jsx)(g.H, { id: ij, children: `${iv}, ${ia}` }) }),
                (0, e.jsxs)("div", {
                    className: Q.rf,
                    children: [
                        (0, e.jsxs)("div", {
                            className: Q.Qs,
                            children: [
                                ((l = (i) => {
                                    (i.stopPropagation(),
                                        ie &&
                                            (ic({ action: "PRESS_IMAGE" }),
                                            C.default.selectVoiceChannel(q.channelId),
                                            (0, m.Nl)(q),
                                            K?.()));
                                }),
                                null == im && ih
                                    ? (0, e.jsx)("div", { className: Y.VH, children: (0, e.jsx)(r.y, {}) })
                                    : null == im || ix
                                      ? (0, e.jsxs)(c.D, {
                                            className: a()(Y.VH, Y.Lw, ie ? Y.vk : Y.r9),
                                            onClick: l,
                                            "aria-label": it,
                                            "aria-disabled": !ie,
                                            children: [
                                                (0, e.jsx)("img", { alt: "", src: W === z.NJ8.LIGHT ? Z : $ }),
                                                X !== B.d.MODAL &&
                                                    X !== B.d.MODAL_V2 &&
                                                    (0, e.jsxs)(e.Fragment, {
                                                        children: [
                                                            (0, e.jsx)(u.E, {
                                                                className: Y.um,
                                                                variant: "body-sm/medium",
                                                                color: "text-overlay-light",
                                                                children: il,
                                                            }),
                                                            (0, e.jsx)(u.E, {
                                                                variant: "body-sm/medium",
                                                                children: ig
                                                                    ? H.intl.string(H.t.uQZTBV)
                                                                    : H.intl.string(H.t.pgUTZC),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        })
                                      : (0, e.jsxs)(c.D, {
                                            className: a()(Y.VH, Y.Lw, ie ? Y.vk : Y.r9),
                                            onClick: l,
                                            "aria-label": it,
                                            "aria-disabled": !ie,
                                            children: [
                                                (0, e.jsx)("img", { alt: "", src: im, className: Y.Sl }),
                                                X !== B.d.MODAL &&
                                                    X !== B.d.MODAL_V2 &&
                                                    (0, e.jsxs)(e.Fragment, {
                                                        children: [
                                                            (0, e.jsx)(u.E, {
                                                                className: Y.um,
                                                                variant: "body-sm/medium",
                                                                color: "text-overlay-light",
                                                                children: il,
                                                            }),
                                                            (0, e.jsx)(A.p, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: Y.wI,
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        })),
                                null == ii || null == is || (X !== B.d.MODAL && X !== B.d.MODAL_V2)
                                    ? null
                                    : (0, e.jsxs)("div", {
                                          className: Q.zH,
                                          children: [
                                              (0, e.jsx)(U.A, { channel: is, guild: ii, onAction: ic, onClose: K }),
                                              (0, e.jsx)(o.A, {
                                                  users: id,
                                                  guildId: ii.id,
                                                  channelId: is.id,
                                                  maxUsers: k.k,
                                                  size: h._3.SIZE_16,
                                                  onClickOverflow: (i) => {
                                                      (i?.stopPropagation(),
                                                          ic?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" }));
                                                  },
                                                  onUserClick: (i) => i.stopPropagation(),
                                                  disableUserPopout: (i) => i === t.id,
                                                  overflowCountColor: "text-muted",
                                                  "aria-label": H.intl.string(H.t["jNqDh/"]),
                                              }),
                                              X === B.d.MODAL_V2 && ip(),
                                          ],
                                      }),
                                X === B.d.MODAL && ip(),
                            ],
                        }),
                        null == ii || null == is || X === B.d.MODAL || X === B.d.MODAL_V2
                            ? null
                            : (0, e.jsx)(k.A, { user: t, guild: ii, channel: is, onAction: ic, onClose: K }),
                    ],
                }),
                X !== B.d.MODAL && X !== B.d.MODAL_V2 && ip(),
            ],
        }),
    });
}
