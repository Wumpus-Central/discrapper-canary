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
    _ = n(419954),
    m = n(933297),
    g = n(836602),
    A = n(591179),
    x = n(854627),
    h = n(657331),
    p = n(961350),
    T = n(287809),
    E = n(780964),
    S = n(633817),
    f = n(652215),
    C = n(985018),
    b = n(812335);
let N = [
        { badgeType: m.Xi.NEW, dismissibleContent: a.M.WIDGETS_USER_SETTINGS_NEW_BADGE },
        { badgeType: m.Xi.NEW, dismissibleContent: a.M.DISPLAY_NAME_STYLES_NEW_BADGE },
    ],
    I = () => {
        let e = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
            { avatarSrc: t, avatarDecorationSrc: n } = (0, x.A)({ userId: e?.id, size: r._3J.SIZE_48 });
        return null == e
            ? null
            : (0, i.jsxs)("div", {
                  className: b.a5,
                  children: [
                      (0, i.jsx)(r.euF, {
                          src: t,
                          avatarDecoration: n,
                          size: r._3J.SIZE_48,
                          "aria-label": C.intl.string(C.t.lqaIxI),
                      }),
                      (0, i.jsxs)("div", {
                          className: b.FS,
                          children: [
                              (0, i.jsx)(r.Text, {
                                  color: "text-strong",
                                  variant: "text-md/medium",
                                  lineClamp: 1,
                                  children: e.globalName ?? e.username,
                              }),
                              (0, i.jsxs)("div", {
                                  className: b.Fk,
                                  children: [
                                      (0, i.jsx)(r.Text, {
                                          variant: "text-sm/normal",
                                          color: "currentColor",
                                          lineClamp: 1,
                                          children: C.intl.string(C.t.Ip9nBS),
                                      }),
                                      (0, i.jsx)(s.PencilIcon, { size: "xxs", color: "currentColor" }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    v = (0, _.t_)(E.X.PROFILE_PANEL, {
        useTitle: () => C.intl.string(C.t["vi7f+q"]),
        notice: { stores: [g.A], element: u.A },
        initialize: () => () =>
            o.h.wait(() => {
                (0, d.F7)(), c.A.clearSubsection(f.nc_.PROFILE_CUSTOMIZATION);
            }),
        buildLayout: () => [S.I],
    }),
    j = (0, _.i4)(E.X.PROFILE_SIDEBAR_ITEM, {
        useTitle: () => C.intl.string(C.t["vi7f+q"]),
        icon: R,
        StronglyDiscouragedCustomComponent: I,
        getDismissibleBadges: () => N,
        usePredicate: () => !(0, A.X)("user_settings_sidebar"),
        buildLayout: () => [v],
    }),
    y = (0, _.i4)(E.X.PROFILE_SIDEBAR_ITEM_WYSIWYG, {
        useTitle: () => C.intl.string(C.t["vi7f+q"]),
        icon: R,
        StronglyDiscouragedCustomComponent: I,
        getDismissibleBadges: () => N,
        usePredicate: () => (0, A.X)("user_settings_sidebar"),
        onClick: () => {
            let e = p.default.getId();
            (0, h.openUserProfileModal)({ userId: e });
        },
        buildLayout: () => [],
    });
function R() {
    let e = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
        { avatarSrc: t, avatarDecorationSrc: n } = (0, x.A)({ userId: e?.id, size: r._3J.SIZE_48 });
    return (0, i.jsx)(r.euF, { src: t, avatarDecoration: n, size: r._3J.SIZE_20, "aria-hidden": !0 });
}
