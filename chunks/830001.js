i.d(e, { f: () => G });
var n = i(627968),
    l = i(934551),
    s = i(311907),
    r = i(397927),
    a = i(73153),
    u = i(631670),
    o = i(252452),
    d = i(159001),
    T = i(833336),
    A = i(103738),
    S = i(745109),
    E = i(419954),
    g = i(933297),
    _ = i(836602),
    c = i(854627),
    I = i(287809),
    N = i(780964),
    C = i(358776),
    O = i(368631),
    L = i(633817),
    R = i(531525),
    b = i(652215),
    D = i(985018),
    m = i(722125);
let p = (0, E.t_)(N.X.PROFILE_PANEL, {
        usePredicate: () => !(0, C.dk)("LegacyProfilePanel"),
        useTitle: () => D.intl.string(D.t["vi7f+q"]),
        notice: { stores: [T.A, _.A], element: A.A },
        initialize: () => () =>
            a.h.wait(() => {
                (0, d.sy)(), (0, u.F7)(), o.A.clearSubsection(b.nc_.PROFILE_CUSTOMIZATION);
            }),
        StronglyDiscouragedCustomComponent: S.A,
        buildLayout: () => [],
    }),
    P = (0, E.t_)(N.X.PROFILE_PANEL, {
        usePredicate: () => (0, C.dk)("ProfilePanel"),
        useTitle: () => D.intl.string(D.t["vi7f+q"]),
        notice: { stores: [T.A, _.A], element: A.A },
        initialize: () => () =>
            a.h.wait(() => {
                (0, d.sy)(), (0, u.F7)(), o.A.clearSubsection(b.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [L.I],
    }),
    G = (0, E.i4)(N.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => D.intl.string(D.t["vi7f+q"]),
        getLegacySearchKey: () => ((0, C.WJ)("ProfilePanel") ? void 0 : R.H.PROFILE_CUSTOMIZATION),
        icon: l.UserIcon,
        StronglyDiscouragedCustomComponent: () => {
            let t = (0, s.bG)([I.default], () => I.default.getCurrentUser()),
                { avatarSrc: e, avatarDecorationSrc: i } = (0, c.A)({ userId: t?.id, size: r._3J.SIZE_48 });
            return null == t
                ? null
                : (0, n.jsxs)("div", {
                      className: m.a5,
                      children: [
                          (0, n.jsx)(r.euF, {
                              src: e,
                              avatarDecoration: i,
                              size: r._3J.SIZE_48,
                              "aria-label": D.intl.string(D.t.lqaIxI),
                          }),
                          (0, n.jsxs)("div", {
                              className: m.FS,
                              children: [
                                  (0, n.jsx)(r.Text, {
                                      color: "text-strong",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: t.globalName ?? t.username,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: m.Fk,
                                      children: [
                                          (0, n.jsx)(r.Text, {
                                              variant: "text-sm/normal",
                                              color: "currentColor",
                                              lineClamp: 1,
                                              children: D.intl.string(D.t.Ip9nBS),
                                          }),
                                          (0, n.jsx)(l.PencilIcon, { size: "xxs", color: "currentColor" }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        trailing: { type: g.S.BADGE_NEW, getDismissibleContentTypes: O.Jn },
        buildLayout: () => ((0, C.WJ)("ProfilePanel") ? [P] : [p]),
    });
