n.d(t, { f: () => I });
var i = n(627968),
    s = n(934551),
    l = n(311907),
    a = n(554146),
    r = n(397927),
    o = n(73153),
    d = n(631670),
    c = n(252452),
    u = n(103738),
    _ = n(419954),
    g = n(933297),
    m = n(836602),
    A = n(854627),
    h = n(287809),
    p = n(780964),
    x = n(633817),
    E = n(652215),
    T = n(985018),
    S = n(722125);
let C = [
        { badgeType: g.Xi.NEW, dismissibleContent: a.M.WIDGETS_USER_SETTINGS_NEW_BADGE },
        { badgeType: g.Xi.NEW, dismissibleContent: a.M.DISPLAY_NAME_STYLES_NEW_BADGE },
    ],
    f = (0, _.t_)(p.X.PROFILE_PANEL, {
        useTitle: () => T.intl.string(T.t["vi7f+q"]),
        notice: { stores: [m.A], element: u.A },
        initialize: () => () =>
            o.h.wait(() => {
                (0, d.F7)(), c.A.clearSubsection(E.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [x.I],
    }),
    I = (0, _.i4)(p.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t["vi7f+q"]),
        icon: function () {
            let e = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
                { avatarSrc: t, avatarDecorationSrc: n } = (0, A.A)({ userId: e?.id, size: r._3J.SIZE_48 });
            return (0, i.jsx)(r.euF, { src: t, avatarDecoration: n, size: r._3J.SIZE_20, "aria-hidden": !0 });
        },
        StronglyDiscouragedCustomComponent: () => {
            let e = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
                { avatarSrc: t, avatarDecorationSrc: n } = (0, A.A)({ userId: e?.id, size: r._3J.SIZE_48 });
            return null == e
                ? null
                : (0, i.jsxs)("div", {
                      className: S.a5,
                      children: [
                          (0, i.jsx)(r.euF, {
                              src: t,
                              avatarDecoration: n,
                              size: r._3J.SIZE_48,
                              "aria-label": T.intl.string(T.t.lqaIxI),
                          }),
                          (0, i.jsxs)("div", {
                              className: S.FS,
                              children: [
                                  (0, i.jsx)(r.Text, {
                                      color: "text-strong",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: e.globalName ?? e.username,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: S.Fk,
                                      children: [
                                          (0, i.jsx)(r.Text, {
                                              variant: "text-sm/normal",
                                              color: "currentColor",
                                              lineClamp: 1,
                                              children: T.intl.string(T.t.Ip9nBS),
                                          }),
                                          (0, i.jsx)(s.PencilIcon, { size: "xxs", color: "currentColor" }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        getDismissibleBadges: () => C,
        buildLayout: () => [f],
    });
