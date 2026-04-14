n.d(t, { A: () => N, f: () => v });
var i = n(627968),
    s = n(934551),
    l = n(311907),
    r = n(397927),
    a = n(73153),
    o = n(631670),
    d = n(252452),
    c = n(103738),
    u = n(419954),
    m = n(836602),
    g = n(591179),
    _ = n(854627),
    x = n(657331),
    h = n(961350),
    A = n(287809),
    p = n(780964),
    T = n(932625),
    f = n(652215),
    S = n(985018),
    E = n(630044);
let b = () => {
        let e = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: n } = (0, _.A)({ userId: e?.id, size: r._3J.SIZE_48 });
        return null == e
            ? null
            : (0, i.jsxs)("div", {
                  className: E.a5,
                  children: [
                      (0, i.jsx)(r.euF, {
                          src: t,
                          avatarDecoration: n,
                          size: r._3J.SIZE_48,
                          "aria-label": S.intl.string(S.t.lqaIxI),
                      }),
                      (0, i.jsxs)("div", {
                          className: E.FS,
                          children: [
                              (0, i.jsx)(r.Text, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, i.jsxs)("div", {
                                  className: E.Fk,
                                  children: [
                                      (0, i.jsx)(r.Text, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: S.intl.string(S.t.Ip9nBS),
                                      }),
                                      (0, i.jsx)(s.PencilIcon, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    C = (0, u.t_)(p.X.PROFILE_PANEL, {
        useTitle: () => S.intl.string(S.t["vi7f+q"]),
        notice: { stores: [m.A], element: c.A },
        initialize: () => () =>
            a.h.wait(() => {
                (0, o.F7)(), d.A.clearSubsection(f.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [T.I],
    }),
    v = (0, u.i4)(p.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t["vi7f+q"]),
        icon: I,
        StronglyDiscouragedCustomComponent: b,
        usePredicate: () => !(0, g.X)("user_settings_sidebar"),
        buildLayout: () => [C],
    }),
    N = (0, u.i4)(p.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => S.intl.string(S.t["vi7f+q"]),
        icon: I,
        StronglyDiscouragedCustomComponent: b,
        usePredicate: () => (0, g.X)("user_settings_sidebar"),
        onClick: () => {
            let e = h.default.getId();
            (0, x.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function I() {
    let e = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, _.A)({ userId: e?.id, size: r._3J.SIZE_48 });
    return (0, i.jsx)(r.euF, { src: t, avatarDecoration: n, size: r._3J.SIZE_20, "aria-hidden": !0 });
}
