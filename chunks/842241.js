i.d(t, { A: () => K });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    d = i(311907),
    r = i(342952),
    o = i(289873),
    c = i(939249),
    u = i(834730),
    A = i(111159),
    h = i(778712),
    g = i(140735),
    x = i(707554),
    m = i(956793),
    C = i(401843),
    _ = i(475743),
    p = i(672979),
    N = i(717306),
    f = i(323073),
    v = i(793574),
    j = i(688810),
    E = i(47167),
    S = i(402216),
    O = i(450149),
    I = i(279250),
    y = i(734057),
    T = i(71393),
    b = i(576705),
    L = i(290863),
    M = i(607567),
    V = i(92240),
    D = i(257367),
    w = i(939496),
    G = i(584904),
    U = i(351638),
    P = i(316770),
    F = i(910607),
    k = i(70963),
    R = i(8738),
    H = i(652215),
    B = i(996988),
    z = i(985018),
    q = i(514566),
    $ = i(478846),
    Q = i(399162),
    Y = i(181147);
function K(e) {
    let t,
        { user: i, currentUser: s, stream: K, className: X, onClose: J } = e,
        { themeType: W, theme: Z } = (0, w.E)(),
        ee = (0, d.bG)([T.A], () => T.A.getGuild(K?.guildId)),
        et = (0, d.bG)([y.A], () => y.A.getChannel(K?.channelId)),
        ei = (0, E.Ay)(et),
        el = (0, d.yK)([M.Ay], () =>
            null != et
                ? M.Ay.getVoiceStatesForChannel(et).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : [],
        ),
        en = (0, d.bG)([L.A], () => L.A.findActivity(i.id, (e) => (0, p.A)(e) && !(0, N.A)(e))),
        { analyticsLocations: es } = (0, j.Ay)(v.A.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ea = (0, V.A)({ display: "live", voiceChannelId: et?.id, user: i, stream: K, analyticsLocations: es }),
        ed = (0, D.A)({ userId: i.id, onAction: ea }),
        { previewUrl: er, isLoading: eo } = (0, O.A)(K?.guildId, K?.channelId, K?.ownerId),
        [ec, eu] = (0, I.zP)(et),
        eA = (0, f.a9)() && (0, f.UK)(et?.id),
        eh = (0, d.bG)([b.A], () => null != et && !eA && b.A.canBasicChannel(H.hVb.CONNECT, et)),
        eg = (0, _.A)(eo ? null : er),
        ex = eo || null == er ? eg : er,
        em = n.useId();
    if (null == ee || null == et || !1 === K.discoverable) return null;
    let eC = () =>
            i.id === s.id
                ? null
                : (0, l.jsx)("div", {
                      className: q.o1,
                      children: (0, l.jsx)(k.Ay, { channel: et, onAction: ea, onClose: J }),
                  }),
        e_ = null != en ? z.intl.formatToPlainString(z.t["4CQq9Q"], { name: en.name }) : z.intl.string(z.t["Jpkr/q"]);
    return (0, l.jsx)(j.f5, {
        value: es,
        children: (0, l.jsxs)(G.A, {
            ref: ed,
            className: X,
            onAction: ea,
            onClose: J,
            "aria-labelledby": em,
            children: [
                (0, l.jsx)(U.A, {
                    text: e_,
                    tags: (0, l.jsx)(S.Ay, { size: S.ed.SMALL }),
                    contextMenu: (0, l.jsx)(R.A, { display: "live", user: i, onClose: J }),
                }),
                (0, l.jsx)(g.A, { children: (0, l.jsx)(x.H, { id: em, children: `${e_}, ${ei}` }) }),
                (0, l.jsxs)("div", {
                    className: q.rf,
                    children: [
                        (0, l.jsxs)("div", {
                            className: q.Qs,
                            children: [
                                ((t = (e) => {
                                    e.stopPropagation(),
                                        ec &&
                                            (ea({ action: "PRESS_IMAGE" }),
                                            m.default.selectVoiceChannel(K.channelId),
                                            (0, C.Nl)(K),
                                            J?.());
                                }),
                                null == ex && eo
                                    ? (0, l.jsx)("div", { className: $.VH, children: (0, l.jsx)(o.y, {}) })
                                    : null == ex || eA
                                      ? (0, l.jsxs)(c.D, {
                                            className: a()($.VH, $.Lw, ec ? $.vk : $.r9),
                                            onClick: t,
                                            "aria-label": (0, I.CQ)(eu),
                                            "aria-disabled": !ec,
                                            children: [
                                                (0, l.jsx)("img", { alt: "", src: Z === H.NJ8.LIGHT ? Y : Q }),
                                                W !== B.d.MODAL &&
                                                    W !== B.d.MODAL_V2 &&
                                                    (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            (0, l.jsx)(u.E, {
                                                                className: $.um,
                                                                variant: "text-sm/medium",
                                                                color: "always-white",
                                                                children: (0, I.CT)(eu),
                                                            }),
                                                            (0, l.jsx)(u.E, {
                                                                variant: "text-sm/medium",
                                                                children: eh
                                                                    ? z.intl.string(z.t.uQZTBV)
                                                                    : z.intl.string(z.t.pgUTZC),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        })
                                      : (0, l.jsxs)(c.D, {
                                            className: a()($.VH, $.Lw, ec ? $.vk : $.r9),
                                            onClick: t,
                                            "aria-label": (0, I.CQ)(eu),
                                            "aria-disabled": !ec,
                                            children: [
                                                (0, l.jsx)("img", { alt: "", src: ex, className: $.Sl }),
                                                W !== B.d.MODAL &&
                                                    W !== B.d.MODAL_V2 &&
                                                    (0, l.jsxs)(l.Fragment, {
                                                        children: [
                                                            (0, l.jsx)(u.E, {
                                                                className: $.um,
                                                                variant: "text-sm/medium",
                                                                color: "always-white",
                                                                children: (0, I.CT)(eu),
                                                            }),
                                                            (0, l.jsx)(A.p, {
                                                                size: "xs",
                                                                color: "currentColor",
                                                                className: $.wI,
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        })),
                                W !== B.d.MODAL && W !== B.d.MODAL_V2
                                    ? null
                                    : (0, l.jsxs)("div", {
                                          className: q.zH,
                                          children: [
                                              (0, l.jsx)(P.A, { channel: et, guild: ee, onAction: ea, onClose: J }),
                                              (0, l.jsx)(r.A, {
                                                  users: el,
                                                  guildId: ee.id,
                                                  channelId: et.id,
                                                  maxUsers: F.k,
                                                  size: h._3.SIZE_16,
                                                  onClickOverflow: (e) => {
                                                      e?.stopPropagation(),
                                                          ea?.({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
                                                  },
                                                  onUserClick: (e) => e.stopPropagation(),
                                                  disableUserPopout: (e) => e === i.id,
                                                  overflowCountColor: "text-muted",
                                                  "aria-label": z.intl.string(z.t["jNqDh/"]),
                                              }),
                                              W === B.d.MODAL_V2 && eC(),
                                          ],
                                      }),
                                W === B.d.MODAL && eC(),
                            ],
                        }),
                        W === B.d.MODAL || W === B.d.MODAL_V2
                            ? null
                            : (0, l.jsx)(F.A, { user: i, guild: ee, channel: et, onAction: ea, onClose: J }),
                    ],
                }),
                W !== B.d.MODAL && W !== B.d.MODAL_V2 && eC(),
            ],
        }),
    });
}
