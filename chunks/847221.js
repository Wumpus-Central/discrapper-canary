"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(769022),
    o = n(287809),
    c = n(562153),
    d = n(850457);
n(281405);
var u = n(985018),
    h = n(77676);
function A(e) {
    let { channel: t } = e,
        [n, A] = s.useState(!1),
        m = s.useRef(null),
        _ = s.useRef(null);
    s.useEffect(
        () => () => {
            clearTimeout(_.current);
        },
        [],
    );
    let p = (0, l.bG)([r.A], () => r.A.getLastLeftUserId(t.id), [t.id]),
        g = (0, l.bG)([o.default], () => (null != p ? o.default.getUser(p) : null), [p]),
        f = c.Ay.useName(t.guild_id, t.id, g),
        x = () => {
            clearTimeout(_.current), A(!0);
        },
        E = () => {
            _.current = setTimeout(() => A(!1), 100);
        };
    return null == p || null == g
        ? null
        : (0, i.jsx)(a.YNO, {
              targetElementRef: m,
              position: "right",
              shouldShow: n,
              onRequestOpen: x,
              onRequestClose: E,
              useMouseEnter: !0,
              spacing: 17,
              renderPopout: () =>
                  (0, i.jsx)(d.A, { channel: t, source: "ghost_user", onMouseEnter: x, onMouseLeave: E }),
              children: (e) => {
                  let { onClick: n, ...s } = e;
                  return (0, i.jsxs)(a.DUT, {
                      innerRef: m,
                      className: h.nM,
                      "aria-haspopup": "dialog",
                      onClick: x,
                      ...s,
                      onMouseLeave: E,
                      children: [
                          (0, i.jsxs)("div", {
                              className: h.R3,
                              children: [
                                  (0, i.jsx)(a.euF, {
                                      src: g.getAvatarURL(t.guild_id, 24),
                                      size: a._3J.SIZE_24,
                                      "aria-hidden": !0,
                                      status: a.clD.INVISIBLE,
                                      statusColor: "currentColor",
                                  }),
                                  (0, i.jsx)(a.O4, { className: h.SM }),
                              ],
                          }),
                          (0, i.jsx)(a.Text, {
                              variant: "text-sm/normal",
                              className: h.Pf,
                              children: u.intl.format(u.t.TlVwqn, {
                                  user: f,
                                  userHook: (e, t) =>
                                      (0, i.jsx)(
                                          a.Text,
                                          {
                                              variant: "text-sm/semibold",
                                              className: h.Xh,
                                              color: "text-muted",
                                              children: e,
                                          },
                                          t,
                                      ),
                                  labelHook: (e, t) =>
                                      (0, i.jsx)(
                                          a.Text,
                                          {
                                              variant: "text-sm/normal",
                                              className: h.cp,
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
