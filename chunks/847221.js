n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(609425),
    d = n(73392),
    u = n(769022),
    h = n(287809),
    A = n(562153),
    _ = n(850457);
n(281405);
var m = n(985018),
    g = n(803899);
function p(e) {
    let { channel: t } = e,
        [n, s] = l.useState(!1),
        p = l.useRef(null),
        f = l.useRef(null);
    l.useEffect(
        () => () => {
            clearTimeout(f.current);
        },
        [],
    );
    let x = (0, r.bG)([u.A], () => u.A.getLastLeftUserId(t.id), [t.id]),
        E = (0, r.bG)([h.default], () => (null != x ? h.default.getUser(x) : null), [x]),
        I = A.Ay.useName(t.guild_id, t.id, E),
        C = (0, c.A)({ userId: E?.id, guildId: t.guild_id }),
        N = (0, d.a)({ displayNameStyles: C }),
        T = () => {
            clearTimeout(f.current), (f.current = setTimeout(() => s(!0), 100));
        },
        S = () => {
            clearTimeout(f.current), (f.current = setTimeout(() => s(!1), 100));
        };
    return null == x || null == E
        ? null
        : (0, i.jsx)(o.YNO, {
              targetElementRef: p,
              position: "right",
              shouldShow: n,
              onRequestOpen: T,
              onRequestClose: S,
              useMouseEnter: !0,
              spacing: 17,
              renderPopout: () =>
                  (0, i.jsx)(_.A, { channel: t, source: "ghost_user", onMouseEnter: T, onMouseLeave: S }),
              children: (e) => {
                  let { onClick: n, ...l } = e;
                  return (0, i.jsxs)(o.DUT, {
                      innerRef: p,
                      className: g.nM,
                      "aria-haspopup": "dialog",
                      onClick: T,
                      ...l,
                      onMouseLeave: S,
                      children: [
                          (0, i.jsxs)("div", {
                              className: g.R3,
                              children: [
                                  (0, i.jsx)(o.euF, {
                                      src: E.getAvatarURL(t.guild_id, 24),
                                      size: o._3J.SIZE_24,
                                      "aria-hidden": !0,
                                      status: o.clD.INVISIBLE,
                                      statusColor: "currentColor",
                                  }),
                                  (0, i.jsx)(o.O4, { className: g.SM }),
                              ],
                          }),
                          (0, i.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              className: g.Pf,
                              children: m.intl.format(m.t.TlVwqn, {
                                  user: I,
                                  userHook: (e, t) =>
                                      (0, i.jsx)(
                                          o.Text,
                                          {
                                              variant: "text-sm/semibold",
                                              className: a()(g.Xh, N),
                                              color: "text-muted",
                                              children: e,
                                          },
                                          t,
                                      ),
                                  labelHook: (e, t) =>
                                      (0, i.jsx)(
                                          o.Text,
                                          {
                                              variant: "text-sm/normal",
                                              className: g.cp,
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
