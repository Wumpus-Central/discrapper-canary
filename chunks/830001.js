i.d(t, { f: () => R });
var n = i(627968),
    l = i(934551),
    s = i(311907),
    r = i(397927),
    a = i(73153),
    u = i(631670),
    o = i(252452),
    d = i(103738),
    _ = i(745109),
    T = i(419954),
    A = i(933297),
    S = i(836602),
    E = i(854627),
    c = i(287809),
    g = i(780964),
    I = i(358776),
    C = i(368631),
    N = i(633817),
    O = i(531525),
    b = i(652215),
    L = i(985018),
    m = i(722125);
let p = (0, T.t_)(g.X.PROFILE_PANEL, {
        usePredicate: () => !(0, I.dk)("LegacyProfilePanel"),
        useTitle: () => L.intl.string(L.t["vi7f+q"]),
        notice: { stores: [S.A], element: d.A },
        initialize: () => () =>
            a.h.wait(() => {
                (0, u.F7)(), o.A.clearSubsection(b.nc_.PROFILE_CUSTOMIZATION);
            }),
        StronglyDiscouragedCustomComponent: _.A,
        buildLayout: () => [],
    }),
    D = (0, T.t_)(g.X.PROFILE_PANEL, {
        usePredicate: () => (0, I.dk)("ProfilePanel"),
        useTitle: () => L.intl.string(L.t["vi7f+q"]),
        notice: { stores: [S.A], element: d.A },
        initialize: () => () =>
            a.h.wait(() => {
                (0, u.F7)(), o.A.clearSubsection(b.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [N.I],
    }),
    R = (0, T.i4)(g.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => L.intl.string(L.t["vi7f+q"]),
        getLegacySearchKey: () => ((0, I.WJ)("ProfilePanel") ? void 0 : O.H.PROFILE_CUSTOMIZATION),
        icon: l.UserIcon,
        StronglyDiscouragedCustomComponent: () => {
            let e = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
                { avatarSrc: t, avatarDecorationSrc: i } = (0, E.A)({ userId: e?.id, size: r._3J.SIZE_48 });
            return null == e
                ? null
                : (0, n.jsxs)("div", {
                      className: m.a5,
                      children: [
                          (0, n.jsx)(r.euF, {
                              src: t,
                              avatarDecoration: i,
                              size: r._3J.SIZE_48,
                              "aria-label": L.intl.string(L.t.lqaIxI),
                          }),
                          (0, n.jsxs)("div", {
                              className: m.FS,
                              children: [
                                  (0, n.jsx)(r.Text, {
                                      color: "text-strong",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: e.globalName ?? e.username,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: m.Fk,
                                      children: [
                                          (0, n.jsx)(r.Text, {
                                              variant: "text-sm/normal",
                                              color: "currentColor",
                                              lineClamp: 1,
                                              children: L.intl.string(L.t.Ip9nBS),
                                          }),
                                          (0, n.jsx)(l.PencilIcon, { size: "xxs", color: "currentColor" }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        trailing: { type: A.Si.BADGE_NEW, getDismissibleContentTypes: C.Jn },
        buildLayout: () => ((0, I.WJ)("ProfilePanel") ? [D] : [p]),
    });
