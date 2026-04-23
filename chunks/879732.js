n.d(t, { default: () => j });
var l = n(627968),
    i = n(64700),
    r = n(17928),
    a = n(550079),
    o = n(477782),
    d = n(442433),
    u = n(847767),
    s = n(358367),
    c = n(212245),
    A = n(793574),
    E = n(688810),
    _ = n(50268),
    g = n(346247),
    I = n(504049),
    S = n(696451),
    f = n(977997),
    M = n(696582),
    y = n(239211),
    O = n(399476),
    N = n(301541),
    h = n(252726),
    R = n(845625),
    p = n(877133),
    m = n(137207),
    T = n(734057),
    b = n(232835),
    U = n(576705),
    L = n(652215),
    C = n(985018),
    G = n(192308),
    D = n(260509),
    x = n(71393),
    P = n(287809),
    v = n(243949),
    B = n(180798);
let j = (0, s.A)(
    (0, u.A)(
        function (e) {
            let t,
                u,
                {
                    user: s,
                    guildId: j,
                    channelId: w,
                    context: F,
                    onSelect: k,
                    moderationAlertId: V,
                    analyticsLocation: K,
                    analyticsLocations: W,
                    onCloseContextMenu: H,
                    showTransferOwnershipItem: Y,
                } = e,
                { analyticsLocations: z } = (0, E.Ay)(A.A.CONTEXT_MENU),
                X = (0, c.p)(),
                q = W?.[0] ?? z[0],
                J = (0, I.$9)(j, { location: q, targetUserId: s.id }),
                Q = (0, r.bG)([f.A], () => f.A.getUserVoiceChannelId(j, s.id) ?? void 0, [j, s.id]),
                Z = i.useCallback(() => {
                    J(I.Nj.COPY_ID);
                }, [J]),
                $ = (0, r.bG)([S.Ay], () => S.Ay.isMember(j, s.id), [j, s.id]),
                ee = (0, v.A)({ userId: s.id, guildId: j, sourceAnalyticsLocations: W }),
                et = (0, N.A)(s.id, F),
                en = (0, g.A)({
                    guildId: j,
                    userId: s.id,
                    analyticsLocation: K ?? X.location,
                    analyticsLocations: [q],
                    context: F,
                }),
                el = (0, y.A)({ user: s, guildId: j, location: q, channelId: w }),
                ei = (0, O.A)({ user: s, guildId: j, location: q, channelId: w }),
                er = (0, M.A)(s, j, w ?? Q, q),
                ea = (function (e, t) {
                    let n = (0, r.bG)(
                            [U.A],
                            () => null != e && U.A.canWithPartialContext(L.xBc.MANAGE_MESSAGES, { channelId: e }),
                            [e],
                        ),
                        i = (0, r.bG)([T.A], () => T.A.getChannel(e), [e]),
                        a = (0, r.bG)([b.A], () => (null != e && null != t ? b.A.getMessage(e, t) : null)),
                        d = (0, p.kZ)(null != a ? a : null);
                    if (null == i || null == a) return null;
                    let u =
                            null != d && d.actions.hasOwnProperty(R.G.SET_COMPLETED)
                                ? R.G.UNSET_COMPLETED
                                : R.G.SET_COMPLETED,
                        s = u === R.G.SET_COMPLETED ? C.intl.string(C.t.VWNyUu) : C.intl.string(C.t.l9GqxI);
                    return n && null != t
                        ? (0, l.jsx)(
                              o.Dr,
                              {
                                  id: "mark-automod-alert-completed",
                                  label: s,
                                  action: () => {
                                      (0, m.E5)(t, i, u);
                                  },
                              },
                              "mark-automod-alert-completed",
                          )
                        : null;
                })(w, V),
                eo =
                    ((t = (0, r.bG)([P.default], () => P.default.getCurrentUser())),
                    null == (u = (0, r.bG)([x.A], () => x.A.getGuild(j))) ||
                    null == t ||
                    s.id === u.ownerId ||
                    s.bot ||
                    !(0, D.ok)(u, t)
                        ? null
                        : (0, l.jsx)(o.Dr, {
                              id: "transfer-ownership",
                              color: "danger",
                              label: C.intl.string(C.t.Z5s7PM),
                              action: () =>
                                  (0, G.openModalLazy)(async () => {
                                      let { default: e } = await n.e("85868").then(n.bind(n, 753031));
                                      return (n) => (0, l.jsx)(e, { ...n, guild: u, fromUser: t, toUser: s });
                                  }),
                          })),
                ed = (0, B.A)(s.id, j, !1, q),
                eu = (0, _.A)({ id: s.id, label: C.intl.string(C.t["/AXYnE"]), onSuccess: Z }),
                es = (0, h.A)(s, j),
                ec = !!s?.isNonUserBot();
            return (0, l.jsxs)(a.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: () => {
                    (0, d.Z_)(), H?.();
                },
                "aria-label": C.intl.string(C.t.liqwPJ),
                onSelect: k,
                children: [
                    !ec &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(o.rX, { children: [ee, et] }),
                                (0, l.jsxs)(o.rX, { children: [en, ei, el] }),
                                $ && (0, l.jsxs)(o.rX, { children: [ed, er, es] }),
                                null != V ? ea : null,
                                Y && null != eo ? (0, l.jsx)(o.rX, { children: eo }) : null,
                            ],
                        }),
                    (0, l.jsx)(o.rX, { children: eu }),
                ],
            });
        },
        { object: L.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.GUILD_MODERATION_USER_MENU],
);
