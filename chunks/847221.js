n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(609425),
    c = n(73392),
    u = n(769022),
    h = n(287809),
    A = n(562153),
    _ = n(850457);
n(281405);
var m = n(985018),
    g = n(77676);
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
    let x = (0, r.bG)([u.A, h.default], () => {
            let e = u.A.getLastLeftUserId(t.id);
            return null != e ? h.default.getUser(e) : null;
        }, [t.id]),
        E = A.Ay.useName(t.guild_id, t.id, x),
        I = (0, d.A)({ userId: x?.id, guildId: t.guild_id }),
        C = (0, c.a)({ displayNameStyles: I }),
        N = () => {
            clearTimeout(f.current), (f.current = setTimeout(() => s(!0), 100));
        },
        T = () => {
            clearTimeout(f.current), (f.current = setTimeout(() => s(!1), 100));
        };
    return null == x
        ? null
        : (0, i.jsx)(o.YNO, {
              targetElementRef: p,
              position: "right",
              shouldShow: n,
              onRequestOpen: N,
              onRequestClose: T,
              useMouseEnter: !0,
              spacing: 17,
              renderPopout: () =>
                  (0, i.jsx)(_.A, { channel: t, source: "ghost_user", onMouseEnter: N, onMouseLeave: T }),
              children: (e) => {
                  let { onClick: n, ...l } = e;
                  return (0, i.jsxs)(o.DUT, {
                      innerRef: p,
                      className: g.nM,
                      "aria-haspopup": "dialog",
                      onClick: N,
                      ...l,
                      onMouseLeave: T,
                      children: [
                          (0, i.jsxs)("div", {
                              className: g.R3,
                              children: [
                                  (0, i.jsx)(o.euF, {
                                      src: x.getAvatarURL(t.guild_id, 24),
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
                                  user: E,
                                  userHook: (e, t) =>
                                      (0, i.jsx)(
                                          o.Text,
                                          {
                                              variant: "text-sm/semibold",
                                              className: a()(g.Xh, C),
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
