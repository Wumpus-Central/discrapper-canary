l.d(t, { A: () => q });
var e = l(477900),
    n = l(582128),
    s = l(503698),
    a = l.n(s),
    d = l(17928),
    o = l(342952),
    r = l(289873),
    c = l(939249),
    u = l(834730),
    A = l(111159),
    h = l(778712),
    x = l(140735),
    g = l(707554),
    m = l(730852),
    C = l(401843),
    j = l(475743),
    p = l(672979),
    v = l(717306),
    N = l(323073),
    _ = l(597306),
    f = l(793574),
    O = l(688810),
    E = l(47167),
    I = l(402216),
    L = l(450149),
    y = l(711589),
    S = l(71393),
    D = l(576705),
    M = l(290863),
    V = l(607567),
    b = l(92240),
    T = l(257367),
    P = l(939496),
    w = l(584904),
    G = l(351638),
    U = l(316770),
    k = l(910607),
    F = l(70963),
    R = l(269587),
    z = l(652215),
    B = l(996988),
    H = l(660183),
    Q = l(260155),
    Y = l(202611),
    $ = l(399162),
    Z = l(181147);
function q(i) {
    let t,
        { user: l, currentUser: s, stream: q, className: J, onClose: K } = i,
        { themeType: X, theme: W } = (0, P.E)(),
        ii = (0, d.bG)([S.A], () => S.A.getGuild(q?.guildId)),
        { actionString: it, actionAriaLabel: il, canWatch: ie, channel: is } = (0, y.K)(q),
        ia = (0, E.Ay)(is),
        id = (0, d.yK)([V.Ay], () =>
            null != is
                ? V.Ay.getVoiceStatesForChannel(is).map((i) => {
                      let { user: t } = i;
                      return t;
                  })
                : [],
        ),
        io = (0, d.bG)([M.A], () => M.A.findActivity(l.id, (i) => (0, p.A)(i) && !(0, v.A)(i))),
        { analyticsLocations: ir } = (0, O.Ay)(f.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ic = (0, b.A)({ display: "live", voiceChannelId: is?.id, user: l, stream: q, analyticsLocations: ir }),
        iu = (0, T.A)({ userId: l.id, onAction: ic }),
        { previewUrl: iA, isLoading: ih } = (0, L.A)(q?.guildId, q?.channelId, q?.ownerId),
        ix = (0, _.a)() && (0, N.UK)(is?.id),
        ig = (0, d.bG)([D.A], () => null != is && !ix && D.A.canBasicChannel(z.hVb.CONNECT, is)),
        im = (0, j.Ay)(ih ? null : iA),
        iC = ih || null == iA ? im : iA,
        ij = n.useId();
    if (null == ii || null == is || !1 === q.discoverable) return null;
    function ip() {
        return null == is || l.id === s.id
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
                    tags: (0, e.jsx)(I.Ay, { size: I.ed.SMALL }),
                    contextMenu: (0, e.jsx)(R.A, { display: "live", user: l, onClose: K }),
                }),
                (0, e.jsx)(x.A, { children: (0, e.jsx)(g.H, { id: ij, children: `${iv}, ${ia}` }) }),
                (0, e.jsxs)("div", {
                    className: Q.rf,
                    children: [
                        (0, e.jsxs)("div", {
                            className: Q.Qs,
                            children: [
                                ((t = (i) => {
                                    (i.stopPropagation(),
                                        ie &&
                                            (ic({ action: "PRESS_IMAGE" }),
                                            m.default.selectVoiceChannel(q.channelId),
                                            (0, C.Nl)(q),
                                            K?.()));
                                }),
                                null == iC && ih
                                    ? (0, e.jsx)("div", { className: Y.VH, children: (0, e.jsx)(r.y, {}) })
                                    : null == iC || ix
                                      ? (0, e.jsxs)(c.D, {
                                            className: a()(Y.VH, Y.Lw, ie ? Y.vk : Y.r9),
                                            onClick: t,
                                            "aria-label": il,
                                            "aria-disabled": !ie,
                                            children: [
                                                (0, e.jsx)("img", { alt: "", src: W === z.NJ8.LIGHT ? Z : $ }),
                                                X !== B.d.MODAL &&
                                                    X !== B.d.MODAL_V2 &&
                                                    (0, e.jsxs)(e.Fragment, {
                                                        children: [
                                                            (0, e.jsx)(u.E, {
                                                                className: Y.um,
                                                                variant: "text-sm/medium",
                                                                color: "text-overlay-light",
                                                                children: it,
                                                            }),
                                                            (0, e.jsx)(u.E, {
                                                                variant: "text-sm/medium",
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
                                            onClick: t,
                                            "aria-label": il,
                                            "aria-disabled": !ie,
                                            children: [
                                                (0, e.jsx)("img", { alt: "", src: iC, className: Y.Sl }),
                                                X !== B.d.MODAL &&
                                                    X !== B.d.MODAL_V2 &&
                                                    (0, e.jsxs)(e.Fragment, {
                                                        children: [
                                                            (0, e.jsx)(u.E, {
                                                                className: Y.um,
                                                                variant: "text-sm/medium",
                                                                color: "text-overlay-light",
                                                                children: it,
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
                                                  disableUserPopout: (i) => i === l.id,
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
                            : (0, e.jsx)(k.A, { user: l, guild: ii, channel: is, onAction: ic, onClose: K }),
                    ],
                }),
                X !== B.d.MODAL && X !== B.d.MODAL_V2 && ip(),
            ],
        }),
    });
}
