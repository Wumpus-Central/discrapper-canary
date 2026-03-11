t.d(n, { A: () => S });
var i = t(627968),
    l = t(64700),
    d = t(503698),
    r = t.n(d),
    s = t(311907),
    a = t(397927),
    c = t(442433),
    o = t(297413),
    u = t(489673),
    _ = t(342296),
    g = t(961350),
    f = t(290863),
    h = t(461213),
    x = t(287809),
    m = t(826383),
    v = t(988794),
    p = t(985018),
    A = t(593185);
function I(e) {
    let { children: n } = e;
    return (0, i.jsxs)("div", {
        className: A.do,
        children: [
            (0, i.jsx)(u.A, {
                children: (0, i.jsx)("div", {
                    className: A.n1,
                    children: (0, i.jsx)(a.nFg, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: A.Kk,
                    }),
                }),
            }),
            n,
        ],
    });
}
function j() {
    return (0, i.jsx)(I, {
        children: (0, i.jsx)(a.Heading, {
            color: "text-strong",
            variant: "heading-xl/semibold",
            className: A.DD,
            children: p.intl.string(p.t.hW0mBR),
        }),
    });
}
function b() {
    return (0, i.jsx)(I, {
        children: (0, i.jsx)(a.Heading, {
            color: "text-default",
            variant: "heading-md/semibold",
            className: A.JU,
            children: p.intl.string(p.t.obChXk),
        }),
    });
}
function N(e) {
    let { count: n } = e;
    return (0, i.jsxs)("div", {
        className: A.f0,
        children: [
            (0, i.jsx)("div", {
                className: r()(A.Pc, A.uY),
                children: (0, i.jsx)(a.nFg, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: A.Kk,
                }),
            }),
            (0, i.jsx)(a.Text, {
                color: "text-default",
                variant: "text-md/normal",
                children: p.intl.format(p.t.BdQTfR, { userRemainCount: n }),
            }),
        ],
    });
}
function C(e) {
    let { eventUser: n, guildId: t, onContextMenu: d } = e,
        c = l.useRef(null),
        u = (0, s.bG)([x.default], () => x.default.getUser(n.user_id)),
        m = (0, s.bG)(
            [h.A, f.A, g.default],
            () => (n.user_id === g.default.getId() ? h.A.getStatus() : f.A.getStatus(n.user_id, t)),
            [n.user_id, t],
        );
    return null == u
        ? null
        : (0, i.jsx)(_.A, {
              targetElementRef: c,
              userId: n.user_id,
              guildId: t,
              position: "left",
              spacing: 16,
              children: (e, l) => {
                  let { isShown: s } = l;
                  return (0, i.jsxs)(a.DUT, {
                      innerRef: c,
                      className: r()(A.f0, A.fv, { [A.wH]: s }),
                      onContextMenu: (e) => d(e, u),
                      ...e,
                      children: [
                          (0, i.jsx)(a.euF, {
                              src: u.getAvatarURL(t, 24),
                              "aria-label": u.username,
                              size: a._3J.SIZE_24,
                              className: A.uY,
                              status: m,
                          }),
                          (0, i.jsx)(o.A, { user: u, className: A.sY, discriminatorClass: A.XU, nick: n.member?.nick }),
                      ],
                  });
              },
          });
}
function y(e) {
    let { eventUsers: n, guildId: t, usersNotShownCount: l = 0, onContextMenu: d } = e;
    return (0, i.jsxs)(a.IpV, {
        className: A.DK,
        children: [
            n.map((e) => (0, i.jsx)(C, { guildId: t, eventUser: e, onContextMenu: d }, e.user_id)),
            l > 0 && (0, i.jsx)(N, { count: l }),
        ],
    });
}
function k(e) {
    let { children: n, style: t } = e;
    return (0, i.jsx)("div", { className: A.kL, style: null != t ? t : {}, children: n });
}
function E(e) {
    let { children: n, height: t } = e;
    return (0, i.jsx)(k, { style: { height: t }, children: n });
}
function S(e) {
    let { guildEvent: n, recurrenceId: l, eventUsers: d, loading: r, error: s, containerHeight: o } = e,
        u = (0, m.A)(n.guild_id, n.id, l);
    if (r && 0 === d.length)
        return (0, i.jsx)(E, {
            height: o,
            children: (0, i.jsx)(a.y$y, { type: a.y$y.Type.SPINNING_CIRCLE, className: A.u1 }),
        });
    if (null != s && 0 === d.length) return (0, i.jsx)(E, { height: o, children: (0, i.jsx)(b, {}) });
    let _ = 0;
    return (
        d.length >= v.C1 && u > v.C1 && (_ = Math.max(u - d.length, 0)),
        0 === d.length
            ? (0, i.jsx)(E, { height: o, children: (0, i.jsx)(j, {}) })
            : (0, i.jsx)(k, {
                  children: (0, i.jsx)(y, {
                      eventUsers: d,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, c.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  t.e("97262"),
                                  t.e("3795"),
                                  t.e("32418"),
                                  t.e("4827"),
                              ]).then(t.bind(t, 668569));
                              return (t) => (0, i.jsx)(e, { ...t, user: n });
                          });
                      },
                      usersNotShownCount: _,
                  }),
              })
    );
}
