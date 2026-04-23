n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(265872),
    d = n(939249),
    c = n(97808),
    u = n(778712),
    h = n(652215),
    A = n(406810),
    _ = n(834730),
    m = n(442433),
    g = n(609425),
    p = n(73392),
    f = n(769022),
    E = n(287809),
    x = n(562153),
    I = n(850457);
n(281405);
var C = n(985018),
    b = n(601884);
function N(e) {
    let { channel: t } = e,
        [s, N] = l.useState(!1),
        S = l.useRef(null),
        v = l.useRef(null);
    l.useEffect(
        () => () => {
            clearTimeout(v.current);
        },
        [],
    );
    let T = (0, r.bG)([f.A, E.default], () => {
            let e = f.A.getLastLeftUserId(t.id);
            return null != e ? E.default.getUser(e) : null;
        }, [t.id]),
        y = x.Ay.useName(t.guild_id, t.id, T),
        j = (0, g.A)({ userId: T?.id, guildId: t.guild_id }),
        R = (0, p.a)({ displayNameStyles: j }),
        L = (e) => {
            e.preventDefault(),
                null != T &&
                    (0, m.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("97262"),
                            n.e("42128"),
                            n.e("84841"),
                            n.e("96474"),
                        ]).then(n.bind(n, 107632));
                        return (n) => (0, i.jsx)(e, { ...n, user: T, guildId: t.guild_id, channel: t });
                    });
        },
        O = () => {
            clearTimeout(v.current), (v.current = setTimeout(() => N(!0), 100));
        },
        G = () => {
            clearTimeout(v.current), (v.current = setTimeout(() => N(!1), 100));
        };
    return null == T
        ? null
        : (0, i.jsx)(o.Y, {
              targetElementRef: S,
              position: "right",
              shouldShow: s,
              onRequestOpen: O,
              onRequestClose: G,
              useMouseEnter: !0,
              spacing: 17,
              renderPopout: () =>
                  (0, i.jsx)(I.A, { channel: t, source: "ghost_user", onMouseEnter: O, onMouseLeave: G }),
              children: (e) => {
                  let { onClick: n, ...l } = e;
                  return (0, i.jsxs)(d.D, {
                      innerRef: S,
                      className: b.nM,
                      "aria-haspopup": "dialog",
                      onClick: O,
                      onContextMenu: L,
                      ...l,
                      onMouseLeave: G,
                      children: [
                          (0, i.jsxs)("div", {
                              className: b.R3,
                              children: [
                                  (0, i.jsx)(c.eu, {
                                      src: T.getAvatarURL(t.guild_id, 24),
                                      size: u._3.SIZE_24,
                                      "aria-hidden": !0,
                                      status: h.clD.INVISIBLE,
                                      statusColor: "currentColor",
                                  }),
                                  (0, i.jsx)(A.O, { className: b.SM }),
                              ],
                          }),
                          (0, i.jsx)(_.E, {
                              variant: "text-sm/normal",
                              className: b.Pf,
                              children: C.intl.format(C.t.TlVwqn, {
                                  user: y,
                                  userHook: (e, t) =>
                                      (0, i.jsx)(
                                          _.E,
                                          {
                                              variant: "text-sm/semibold",
                                              className: a()(b.Xh, R),
                                              color: "text-muted",
                                              children: e,
                                          },
                                          t,
                                      ),
                                  labelHook: (e, t) =>
                                      (0, i.jsx)(
                                          _.E,
                                          {
                                              variant: "text-sm/normal",
                                              className: b.cp,
                                              color: "text-muted",
                                              children: e,
                                          },
                                          t,
                                      ),
                              }),
                          }),
                      ],
                  });
              },
          });
}
