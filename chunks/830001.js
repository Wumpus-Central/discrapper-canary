n.d(t, { A: () => y, f: () => j });
var i = n(627968),
    s = n(934551),
    l = n(311907),
    a = n(554146),
    r = n(397927),
    o = n(73153),
    d = n(631670),
    c = n(252452),
    u = n(103738),
    m = n(419954),
    g = n(933297),
    _ = n(836602),
    A = n(591179),
    x = n(854627),
    h = n(657331),
    p = n(961350),
    T = n(287809),
    f = n(780964),
    E = n(633817),
    S = n(652215),
    b = n(985018),
    C = n(77311);
let N = [{ badgeType: g.Xi.NEW, dismissibleContent: a.M.DISPLAY_NAME_STYLES_NEW_BADGE }],
    v = () => {
        let e = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: n } = (0, x.A)({ userId: e?.id, size: r._3J.SIZE_48 });
        return null == e
            ? null
            : (0, i.jsxs)("div", {
                  className: C.a5,
                  children: [
                      (0, i.jsx)(r.euF, {
                          src: t,
                          avatarDecoration: n,
                          size: r._3J.SIZE_48,
                          "aria-label": b.intl.string(b.t.lqaIxI),
                      }),
                      (0, i.jsxs)("div", {
                          className: C.FS,
                          children: [
                              (0, i.jsx)(r.Text, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, i.jsxs)("div", {
                                  className: C.Fk,
                                  children: [
                                      (0, i.jsx)(r.Text, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: b.intl.string(b.t.Ip9nBS),
                                      }),
                                      (0, i.jsx)(s.PencilIcon, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    I = (0, m.t_)(f.X.PROFILE_PANEL, {
        useTitle: () => b.intl.string(b.t["vi7f+q"]),
        notice: { stores: [_.A], element: u.A },
        initialize: () => () =>
            o.h.wait(() => {
                (0, d.F7)(), c.A.clearSubsection(S.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [E.I],
    }),
    j = (0, m.i4)(f.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => b.intl.string(b.t["vi7f+q"]),
        icon: O,
        StronglyDiscouragedCustomComponent: v,
        getDismissibleBadges: () => N,
        usePredicate: () => !(0, A.X)("user_settings_sidebar"),
        buildLayout: () => [I],
    }),
    y = (0, m.i4)(f.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => b.intl.string(b.t["vi7f+q"]),
        icon: O,
        StronglyDiscouragedCustomComponent: v,
        getDismissibleBadges: () => N,
        usePredicate: () => (0, A.X)("user_settings_sidebar"),
        onClick: () => {
            let e = p.default.getId();
            (0, h.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function O() {
    let e = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, x.A)({ userId: e?.id, size: r._3J.SIZE_48 });
    return (0, i.jsx)(r.euF, { src: t, avatarDecoration: n, size: r._3J.SIZE_20, "aria-hidden": !0 });
}
