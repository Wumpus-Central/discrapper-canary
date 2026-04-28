e.d(n, { default: () => w });
var t = e(627968),
    i = e(64700),
    r = e(17928),
    a = e(550079),
    s = e(477782),
    d = e(442433),
    o = e(847767),
    u = e(358367),
    c = e(212245),
    A = e(793574),
    E = e(688810),
    b = e(50268),
    h = e(346247),
    g = e(504049),
    C = e(696451),
    G = e(977997),
    M = e(696582),
    T = e(239211),
    U = e(399476),
    _ = e(301541),
    x = e(252726),
    p = e(845625),
    N = e(877133),
    j = e(137207),
    m = e(734057),
    y = e(232835),
    O = e(576705),
    S = e(652215),
    I = e(985018),
    L = e(192308),
    P = e(260509),
    f = e(71393),
    k = e(287809),
    D = e(243949),
    X = e(180798);
let w = (0, u.A)(
    (0, o.A)(
        function (l) {
            let n,
                o,
                {
                    user: u,
                    guildId: w,
                    channelId: Z,
                    context: v,
                    onSelect: W,
                    moderationAlertId: q,
                    analyticsLocation: B,
                    analyticsLocations: R,
                    onCloseContextMenu: V,
                    showTransferOwnershipItem: Y,
                } = l,
                { analyticsLocations: z } = (0, E.Ay)(A.A.CONTEXT_MENU),
                F = (0, c.p)(),
                J = R?.[0] ?? z[0],
                $ = (0, g.$9)(w, { location: J, targetUserId: u.id }),
                H = (0, r.bG)([G.A], () => G.A.getUserVoiceChannelId(w, u.id) ?? void 0, [w, u.id]),
                K = i.useCallback(() => {
                    $(g.Nj.COPY_ID);
                }, [$]),
                Q = (0, r.bG)([C.Ay], () => C.Ay.isMember(w, u.id), [w, u.id]),
                ll = (0, D.A)({ userId: u.id, guildId: w, sourceAnalyticsLocations: R }),
                ln = (0, _.A)(u.id, v),
                le = (0, h.A)({
                    guildId: w,
                    userId: u.id,
                    analyticsLocation: B ?? F.location,
                    analyticsLocations: [J],
                    context: v,
                }),
                lt = (0, T.A)({ user: u, guildId: w, location: J, channelId: Z }),
                li = (0, U.A)({ user: u, guildId: w, location: J, channelId: Z }),
                lr = (0, M.A)(u, w, Z ?? H, J),
                la = (function (l, n) {
                    let e = (0, r.bG)(
                            [O.A],
                            () => null != l && O.A.canWithPartialContext(S.xBc.MANAGE_MESSAGES, { channelId: l }),
                            [l],
                        ),
                        i = (0, r.bG)([m.A], () => m.A.getChannel(l), [l]),
                        a = (0, r.bG)([y.A], () => (null != l && null != n ? y.A.getMessage(l, n) : null)),
                        d = (0, N.kZ)(null != a ? a : null);
                    if (null == i || null == a) return null;
                    let o =
                            null != d && d.actions.hasOwnProperty(p.G.SET_COMPLETED)
                                ? p.G.UNSET_COMPLETED
                                : p.G.SET_COMPLETED,
                        u = o === p.G.SET_COMPLETED ? I.intl.string(I.t.VWNyUu) : I.intl.string(I.t.l9GqxI);
                    return e && null != n
                        ? (0, t.jsx)(
                              s.Dr,
                              {
                                  id: "mark-automod-alert-completed",
                                  label: u,
                                  action: () => {
                                      (0, j.E5)(n, i, o);
                                  },
                              },
                              "mark-automod-alert-completed",
                          )
                        : null;
                })(Z, q),
                ls =
                    ((n = (0, r.bG)([k.default], () => k.default.getCurrentUser())),
                    null == (o = (0, r.bG)([f.A], () => f.A.getGuild(w))) ||
                    null == n ||
                    u.id === o.ownerId ||
                    u.bot ||
                    !(0, P.ok)(o, n)
                        ? null
                        : (0, t.jsx)(s.Dr, {
                              id: "transfer-ownership",
                              color: "danger",
                              label: I.intl.string(I.t.Z5s7PM),
                              action: () =>
                                  (0, L.openModalLazy)(async () => {
                                      let { default: l } = await Promise.all([
                                          e.e("74920"),
                                          e.e("77084"),
                                          e.e("78410"),
                                      ]).then(e.bind(e, 753031));
                                      return (e) => (0, t.jsx)(l, { ...e, guild: o, fromUser: n, toUser: u });
                                  }),
                          })),
                ld = (0, X.A)(u.id, w, !1, J),
                lo = (0, b.A)({ id: u.id, label: I.intl.string(I.t["/AXYnE"]), onSuccess: K }),
                lu = (0, x.A)(u, w),
                lc = !!u?.isNonUserBot();
            return (0, t.jsxs)(a.W, {
                "data-menu-migrated": !0,
                navId: "user-context",
                onClose: () => {
                    (0, d.Z_)(), V?.();
                },
                "aria-label": I.intl.string(I.t.liqwPJ),
                onSelect: W,
                children: [
                    !lc &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsxs)(s.rX, { children: [ll, ln] }),
                                (0, t.jsxs)(s.rX, { children: [le, li, lt] }),
                                Q && (0, t.jsxs)(s.rX, { children: [ld, lr, lu] }),
                                null != q ? la : null,
                                Y && null != ls ? (0, t.jsx)(s.rX, { children: ls }) : null,
                            ],
                        }),
                    (0, t.jsx)(s.rX, { children: lo }),
                ],
            });
        },
        { object: S.ZSU.CONTEXT_MENU },
    ),
    [A.A.CONTEXT_MENU, A.A.GUILD_MODERATION_USER_MENU],
);
