n.d(t, { f: () => I });
var i = n(627968),
    s = n(934551),
    l = n(311907),
    a = n(397927),
    r = n(73153),
    o = n(631670),
    d = n(252452),
    c = n(103738),
    u = n(419954),
    _ = n(933297),
    g = n(836602),
    m = n(854627),
    A = n(287809),
    h = n(780964),
    p = n(368631),
    x = n(633817),
    E = n(652215),
    T = n(985018),
    S = n(722125);
let C = (0, u.t_)(h.X.PROFILE_PANEL, {
        useTitle: () => T.intl.string(T.t["vi7f+q"]),
        notice: { stores: [g.A], element: c.A },
        initialize: () => () =>
            r.h.wait(() => {
                (0, o.F7)(), d.A.clearSubsection(E.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [x.I],
    }),
    I = (0, u.i4)(h.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t["vi7f+q"]),
        icon: function () {
            let e = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
                { avatarSrc: t, avatarDecorationSrc: n } = (0, m.A)({ userId: e?.id, size: a._3J.SIZE_48 });
            return (0, i.jsx)(a.euF, { src: t, avatarDecoration: n, size: a._3J.SIZE_20, "aria-hidden": !0 });
        },
        StronglyDiscouragedCustomComponent: () => {
            let e = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
                { avatarSrc: t, avatarDecorationSrc: n } = (0, m.A)({ userId: e?.id, size: a._3J.SIZE_48 });
            return null == e
                ? null
                : (0, i.jsxs)("div", {
                      className: S.a5,
                      children: [
                          (0, i.jsx)(a.euF, {
                              src: t,
                              avatarDecoration: n,
                              size: a._3J.SIZE_48,
                              "aria-label": T.intl.string(T.t.lqaIxI),
                          }),
                          (0, i.jsxs)("div", {
                              className: S.FS,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      color: "text-strong",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: e.globalName ?? e.username,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: S.Fk,
                                      children: [
                                          (0, i.jsx)(a.Text, {
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
        trailing: { type: _.Si.BADGE_NEW, getDismissibleContentTypes: p.Jn },
        buildLayout: () => [C],
    });
