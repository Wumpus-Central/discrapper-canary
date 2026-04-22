n.d(t, { A: () => y, f: () => I });
var i = n(627968),
    s = n(22231),
    l = n(311907),
    a = n(778712),
    r = n(97808),
    o = n(834730),
    d = n(73153),
    u = n(631670),
    c = n(252452),
    g = n(103738),
    m = n(419954),
    _ = n(836602),
    A = n(591179),
    h = n(854627),
    p = n(657331),
    x = n(961350),
    E = n(287809),
    T = n(780964),
    S = n(932625),
    f = n(652215),
    b = n(985018),
    C = n(881324);
let v = () => {
        let e = (0, l.bG)([E.default], () => E.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: n } = (0, h.A)({ userId: e?.id, size: a._3.SIZE_48 });
        return null == e
            ? null
            : (0, i.jsxs)("div", {
                  className: C.a5,
                  children: [
                      (0, i.jsx)(r.eu, {
                          src: t,
                          avatarDecoration: n,
                          size: a._3.SIZE_48,
                          "aria-label": b.intl.string(b.t.lqaIxI),
                      }),
                      (0, i.jsxs)("div", {
                          className: C.FS,
                          children: [
                              (0, i.jsx)(o.E, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, i.jsxs)("div", {
                                  className: C.Fk,
                                  children: [
                                      (0, i.jsx)(o.E, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: b.intl.string(b.t.Ip9nBS),
                                      }),
                                      (0, i.jsx)(s.R, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    N = (0, m.t_)(T.X.PROFILE_PANEL, {
        useTitle: () => b.intl.string(b.t["vi7f+q"]),
        notice: { stores: [_.A], element: g.A },
        initialize: () => () =>
            d.h.wait(() => {
                (0, u.F7)(), c.A.clearSubsection(f.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [S.I],
    }),
    I = (0, m.i4)(T.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => b.intl.string(b.t["vi7f+q"]),
        icon: j,
        StronglyDiscouragedCustomComponent: v,
        usePredicate: () => !(0, A.X)("user_settings_sidebar"),
        buildLayout: () => [N],
    }),
    y = (0, m.i4)(T.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => b.intl.string(b.t["vi7f+q"]),
        icon: j,
        StronglyDiscouragedCustomComponent: v,
        usePredicate: () => (0, A.X)("user_settings_sidebar"),
        onClick: () => {
            let e = x.default.getId();
            (0, p.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function j() {
    let e = (0, l.bG)([E.default], () => E.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, h.A)({ userId: e?.id, size: a._3.SIZE_48 });
    return (0, i.jsx)(r.eu, { src: t, avatarDecoration: n, size: a._3.SIZE_20, "aria-hidden": !0 });
}
