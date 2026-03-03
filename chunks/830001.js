i.d(e, { f: () => m });
var n = i(627968),
    l = i(934551),
    s = i(311907),
    r = i(397927),
    a = i(73153),
    u = i(631670),
    o = i(252452),
    d = i(103738),
    A = i(745109),
    T = i(419954),
    S = i(933297),
    E = i(836602),
    g = i(854627),
    c = i(287809),
    _ = i(780964),
    I = i(358776),
    C = i(368631),
    N = i(633817),
    O = i(531525),
    L = i(652215),
    b = i(985018),
    D = i(722125);
let p = (0, T.t_)(_.X.PROFILE_PANEL, {
        usePredicate: () => !(0, I.dk)("LegacyProfilePanel"),
        useTitle: () => b.intl.string(b.t["vi7f+q"]),
        notice: { stores: [E.A], element: d.A },
        initialize: () => () =>
            a.h.wait(() => {
                (0, u.F7)(), o.A.clearSubsection(L.nc_.PROFILE_CUSTOMIZATION);
            }),
        StronglyDiscouragedCustomComponent: A.A,
        buildLayout: () => [],
    }),
    R = (0, T.t_)(_.X.PROFILE_PANEL, {
        usePredicate: () => (0, I.dk)("ProfilePanel"),
        useTitle: () => b.intl.string(b.t["vi7f+q"]),
        notice: { stores: [E.A], element: d.A },
        initialize: () => () =>
            a.h.wait(() => {
                (0, u.F7)(), o.A.clearSubsection(L.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [N.I],
    }),
    m = (0, T.i4)(_.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => b.intl.string(b.t["vi7f+q"]),
        getLegacySearchKey: () => ((0, I.WJ)("ProfilePanel") ? void 0 : O.H.PROFILE_CUSTOMIZATION),
        icon: function () {
            let t = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
                { avatarSrc: e, avatarDecorationSrc: i } = (0, g.A)({ userId: t?.id, size: r._3J.SIZE_48 });
            return (0, n.jsx)(r.euF, { src: e, avatarDecoration: i, size: r._3J.SIZE_20, "aria-hidden": !0 });
        },
        StronglyDiscouragedCustomComponent: () => {
            let t = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
                { avatarSrc: e, avatarDecorationSrc: i } = (0, g.A)({ userId: t?.id, size: r._3J.SIZE_48 });
            return null == t
                ? null
                : (0, n.jsxs)("div", {
                      className: D.a5,
                      children: [
                          (0, n.jsx)(r.euF, {
                              src: e,
                              avatarDecoration: i,
                              size: r._3J.SIZE_48,
                              "aria-label": b.intl.string(b.t.lqaIxI),
                          }),
                          (0, n.jsxs)("div", {
                              className: D.FS,
                              children: [
                                  (0, n.jsx)(r.Text, {
                                      color: "text-strong",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: t.globalName ?? t.username,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: D.Fk,
                                      children: [
                                          (0, n.jsx)(r.Text, {
                                              variant: "text-sm/normal",
                                              color: "currentColor",
                                              lineClamp: 1,
                                              children: b.intl.string(b.t.Ip9nBS),
                                          }),
                                          (0, n.jsx)(l.PencilIcon, { size: "xxs", color: "currentColor" }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        trailing: { type: S.Si.BADGE_NEW, getDismissibleContentTypes: C.Jn },
        buildLayout: () => ((0, I.WJ)("ProfilePanel") ? [R] : [p]),
    });
