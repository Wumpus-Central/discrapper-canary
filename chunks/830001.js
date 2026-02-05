i.d(e, { f: () => p });
var n = i(627968),
    l = i(934551),
    s = i(311907),
    r = i(397927),
    a = i(73153),
    u = i(631670),
    o = i(252452),
    d = i(103738),
    T = i(745109),
    A = i(419954),
    S = i(933297),
    E = i(836602),
    g = i(854627),
    _ = i(287809),
    c = i(780964),
    I = i(358776),
    N = i(368631),
    C = i(633817),
    O = i(531525),
    L = i(652215),
    R = i(985018),
    b = i(722125);
let D = (0, A.t_)(c.X.PROFILE_PANEL, {
        usePredicate: () => !(0, I.dk)("LegacyProfilePanel"),
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        notice: { stores: [E.A], element: d.A },
        initialize: () => () =>
            a.h.wait(() => {
                (0, u.F7)(), o.A.clearSubsection(L.nc_.PROFILE_CUSTOMIZATION);
            }),
        StronglyDiscouragedCustomComponent: T.A,
        buildLayout: () => [],
    }),
    m = (0, A.t_)(c.X.PROFILE_PANEL, {
        usePredicate: () => (0, I.dk)("ProfilePanel"),
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        notice: { stores: [E.A], element: d.A },
        initialize: () => () =>
            a.h.wait(() => {
                (0, u.F7)(), o.A.clearSubsection(L.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [C.I],
    }),
    p = (0, A.i4)(c.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["vi7f+q"]),
        getLegacySearchKey: () => ((0, I.WJ)("ProfilePanel") ? void 0 : O.H.PROFILE_CUSTOMIZATION),
        icon: l.UserIcon,
        StronglyDiscouragedCustomComponent: () => {
            let t = (0, s.bG)([_.default], () => _.default.getCurrentUser()),
                { avatarSrc: e, avatarDecorationSrc: i } = (0, g.A)({ userId: t?.id, size: r._3J.SIZE_48 });
            return null == t
                ? null
                : (0, n.jsxs)("div", {
                      className: b.a5,
                      children: [
                          (0, n.jsx)(r.euF, {
                              src: e,
                              avatarDecoration: i,
                              size: r._3J.SIZE_48,
                              "aria-label": R.intl.string(R.t.lqaIxI),
                          }),
                          (0, n.jsxs)("div", {
                              className: b.FS,
                              children: [
                                  (0, n.jsx)(r.Text, {
                                      color: "text-strong",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: t.globalName ?? t.username,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: b.Fk,
                                      children: [
                                          (0, n.jsx)(r.Text, {
                                              variant: "text-sm/normal",
                                              color: "currentColor",
                                              lineClamp: 1,
                                              children: R.intl.string(R.t.Ip9nBS),
                                          }),
                                          (0, n.jsx)(l.PencilIcon, { size: "xxs", color: "currentColor" }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        trailing: { type: S.S.BADGE_NEW, getDismissibleContentTypes: N.Jn },
        buildLayout: () => ((0, I.WJ)("ProfilePanel") ? [m] : [D]),
    });
