n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(442433),
    c = n(609425),
    u = n(73392),
    h = n(769022),
    A = n(287809),
    _ = n(562153),
    m = n(850457);
n(281405);
var p = n(985018),
    g = n(803899);
function f(e) {
    let { channel: t } = e,
        [s, f] = l.useState(!1),
        x = l.useRef(null),
        E = l.useRef(null);
    l.useEffect(
        () => () => {
            clearTimeout(E.current);
        },
        [],
    );
    let I = (0, r.bG)([h.A, A.default], () => {
            let e = h.A.getLastLeftUserId(t.id);
            return null != e ? A.default.getUser(e) : null;
        }, [t.id]),
        C = _.Ay.useName(t.guild_id, t.id, I),
        N = (0, c.A)({ userId: I?.id, guildId: t.guild_id }),
        T = (0, u.a)({ displayNameStyles: N }),
        S = (e) => {
            e.preventDefault(),
                null != I &&
                    (0, d.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("97262"),
                            n.e("42128"),
                            n.e("84841"),
                            n.e("36382"),
                        ]).then(n.bind(n, 107632));
                        return (n) => (0, i.jsx)(e, { ...n, user: I, guildId: t.guild_id, channel: t });
                    });
        },
        b = () => {
            clearTimeout(E.current), (E.current = setTimeout(() => f(!0), 100));
        },
        v = () => {
            clearTimeout(E.current), (E.current = setTimeout(() => f(!1), 100));
        };
    return null == I
        ? null
        : (0, i.jsx)(o.YNO, {
              targetElementRef: x,
              position: "right",
              shouldShow: s,
              onRequestOpen: b,
              onRequestClose: v,
              useMouseEnter: !0,
              spacing: 17,
              renderPopout: () =>
                  (0, i.jsx)(m.A, { channel: t, source: "ghost_user", onMouseEnter: b, onMouseLeave: v }),
              children: (e) => {
                  let { onClick: n, ...l } = e;
                  return (0, i.jsxs)(o.DUT, {
                      innerRef: x,
                      className: g.nM,
                      "aria-haspopup": "dialog",
                      onClick: b,
                      onContextMenu: S,
                      ...l,
                      onMouseLeave: v,
                      children: [
                          (0, i.jsxs)("div", {
                              className: g.R3,
                              children: [
                                  (0, i.jsx)(o.euF, {
                                      src: I.getAvatarURL(t.guild_id, 24),
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
                              children: p.intl.format(p.t.TlVwqn, {
                                  user: C,
                                  userHook: (e, t) =>
                                      (0, i.jsx)(
                                          o.Text,
                                          {
                                              variant: "text-sm/semibold",
                                              className: a()(g.Xh, T),
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
