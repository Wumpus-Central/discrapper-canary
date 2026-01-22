i.d(e, {
    f: () => G,
});
var n = i(627968),
    l = i(934551),
    s = i(311907),
    r = i(397927),
    u = i(73153),
    a = i(631670),
    o = i(252452),
    T = i(159001),
    A = i(833336),
    S = i(103738),
    E = i(745109),
    d = i(419954),
    _ = i(933297),
    I = i(854627),
    g = i(752319),
    c = i(287809),
    N = i(780964),
    O = i(358776),
    C = i(368631),
    L = i(633817),
    R = i(531525),
    b = i(652215),
    D = i(985018),
    P = i(722125);
let p = (0, d.t_)(N.X.PROFILE_PANEL, {
        usePredicate: () => !(0, O.dk)("LegacyProfilePanel"),
        useTitle: () => D.intl.string(D.t["vi7f+q"]),
        notice: {
            stores: [A.A, g.A],
            element: S.A,
        },
        initialize: () => () =>
            u.h.wait(() => {
                (0, T.sy)(), (0, a.F7)(), o.A.clearSubsection(b.nc_.PROFILE_CUSTOMIZATION);
            }),
        StronglyDiscouragedCustomComponent: E.A,
        buildLayout: () => [],
    }),
    m = (0, d.t_)(N.X.PROFILE_PANEL, {
        usePredicate: () => (0, O.dk)("ProfilePanel"),
        useTitle: () => D.intl.string(D.t["vi7f+q"]),
        notice: {
            stores: [A.A, g.A],
            element: S.A,
        },
        initialize: () => () =>
            u.h.wait(() => {
                (0, T.sy)(), (0, a.F7)(), o.A.clearSubsection(b.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [L.I],
    }),
    G = (0, d.i4)(N.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => D.intl.string(D.t["vi7f+q"]),
        getLegacySearchKey: () => ((0, O.WJ)("ProfilePanel") ? void 0 : R.H.PROFILE_CUSTOMIZATION),
        icon: l.UserIcon,
        stronglyDiscouragedCustomComponent: () => {
            var t;
            let e = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
                { avatarSrc: i, avatarDecorationSrc: u } = (0, I.A)({
                    userId: null == e ? void 0 : e.id,
                    size: r._3J.SIZE_48,
                });
            return null == e
                ? null
                : (0, n.jsxs)("div", {
                      className: P.a5,
                      children: [
                          (0, n.jsx)(r.euF, {
                              src: i,
                              avatarDecoration: u,
                              size: r._3J.SIZE_48,
                              "aria-label": D.intl.string(D.t.lqaIxI),
                          }),
                          (0, n.jsxs)("div", {
                              className: P.FS,
                              children: [
                                  (0, n.jsx)(r.Text, {
                                      color: "text-strong",
                                      variant: "text-md/medium",
                                      lineClamp: 1,
                                      children: null != (t = e.globalName) ? t : e.username,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: P.Fk,
                                      children: [
                                          (0, n.jsx)(r.Text, {
                                              variant: "text-sm/normal",
                                              color: "currentColor",
                                              lineClamp: 1,
                                              children: D.intl.string(D.t.Ip9nBS),
                                          }),
                                          (0, n.jsx)(l.PencilIcon, {
                                              size: "xxs",
                                              color: "currentColor",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        trailing: {
            type: _.S.BADGE_NEW,
            getDismissibleContentTypes: C.Jn,
        },
        buildLayout: () => ((0, O.WJ)("ProfilePanel") ? [m] : [p]),
    });
