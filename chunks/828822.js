t.d(n, { A: () => S }), t(321073);
var l = t(627968),
    i = t(64700),
    r = t(503698),
    a = t.n(r),
    s = t(311907),
    o = t(97808),
    d = t(861672),
    u = t(477782),
    c = t(265872),
    g = t(408278),
    A = t(22231),
    m = t(688810),
    f = t(601255),
    p = t(562819),
    x = t(919395),
    h = t(385612),
    v = t(696451),
    j = t(71393),
    I = t(927578),
    b = t(837921),
    C = t(84540),
    N = t(836602),
    y = t(718019),
    E = t(339984),
    P = t(985018),
    R = t(106106),
    O = t(338165);
let T = b.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function _(e) {
    let { onMenuClose: n, items: t, ...i } = e;
    return (0, l.jsx)(d.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": P.intl.string(P.t.YAgq3W),
        children: (0, l.jsx)(u.rX, { children: t }),
    });
}
function S(e) {
    let { user: n, guildId: t } = e,
        { avatarProps: r, eventHandlers: o } = (0, y.V)(e),
        [d, b] = i.useState(!1),
        S = i.useRef(null),
        D = i.useCallback(() => b(!1), []),
        k = (function (e) {
            let { user: n, guildId: t, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, m.Ay)(),
                d = null != t,
                c = (0, s.bG)([v.Ay], () => (null != t ? v.Ay.getMember(t, n.id) : null)),
                g = (0, s.bG)([N.A], () => N.A.getPendingChanges(t ?? void 0).pendingAvatar),
                A = d ? c?.avatar : n.avatar,
                b = (0, x.z5)(g, A),
                y = d && null != n.avatar,
                R = I.Ay.canUsePremiumProfileCustomization(n),
                O = R || null == t,
                T = R || null == t,
                _ = (0, s.bG)([j.A], () => (null != t ? j.A.getGuild(t) : null)),
                S = (0, x.a4)({ user: n }),
                D = (0, x.a4)({ user: n, guildId: t ?? void 0 }),
                { pendingAvatarDecoration: k } = (0, x.CP)(t ?? void 0),
                L = void 0 !== k,
                M = null != (0, f.A)(L ? k : D) && (L ? null != k : null != D),
                G = d && null != S,
                w = i.useCallback(() => {
                    r(),
                        (0, h.XD)({
                            uploadType: E.HL.AVATAR,
                            analyticsSource: a,
                            guildId: t ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, t]),
                U = i.useCallback(() => {
                    r(), (0, p.L)({ analyticsLocations: o, guild: _ ?? void 0, stackingBehavior: "stack" });
                }, [r, o, _]),
                F = i.useCallback(() => {
                    r(),
                        (0, h.rM)(null, A, (e) => (0, C.p)({ guildId: t ?? void 0, avatar: e })),
                        (0, x.WU)(y ? "reset" : "remove");
                }, [r, t, A, y]),
                V = i.useCallback(() => {
                    r(), (0, C.p)({ guildId: t ?? void 0, avatarDecoration: null });
                }, [r, t]);
            return i.useMemo(() => {
                let e = [];
                return (
                    O &&
                        e.push(
                            (0, l.jsx)(
                                u.Dr,
                                { id: "change-avatar", label: P.intl.string(P.t["4OynCD"]), action: w },
                                "change-avatar",
                            ),
                        ),
                    T &&
                        e.push(
                            (0, l.jsx)(
                                u.Dr,
                                { id: "change-decoration", label: P.intl.string(P.t.BVcYCx), action: U },
                                "change-decoration",
                            ),
                        ),
                    O &&
                        b &&
                        e.push(
                            y
                                ? (0, l.jsx)(
                                      u.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: P.intl.string(P.t.TDjKDm),
                                          action: F,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, l.jsx)(
                                      u.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: P.intl.string(P.t.twB3fz),
                                          action: F,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    T &&
                        M &&
                        e.push(
                            G
                                ? (0, l.jsx)(
                                      u.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: P.intl.string(P.t.JvcEcq),
                                          action: V,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, l.jsx)(
                                      u.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: P.intl.string(P.t.OrokWm),
                                          action: V,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [y, O, T, G, b, M, w, U, F, V]);
        })({ user: n, guildId: t, onClose: D });
    return 0 === k.length
        ? (0, l.jsx)(y.A, { ...e })
        : (0, l.jsxs)("div", {
              ...o,
              className: a()(R.my, R.vk, O.kL, { [O.MO]: d }),
              onMouseDown: (e) => {
                  S.current?.contains(e.target) || b(!0);
              },
              children: [
                  (0, l.jsx)(T, { ...r, imageClassName: a()(R.Lw, O.HU) }),
                  (0, l.jsx)(c.Y, {
                      targetElementRef: S,
                      shouldShow: d,
                      animation: c.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: D,
                      renderPopout: (e) => (0, l.jsx)(_, { ...e, items: k, onMenuClose: D }),
                      children: (e) =>
                          (0, l.jsx)("div", {
                              ref: S,
                              className: O.r9,
                              children: (0, l.jsx)(g.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: A.R,
                                  "aria-label": P.intl.string(P.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), b((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
