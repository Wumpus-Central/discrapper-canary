t.d(n, { A: () => P });
var i = t(627968),
    l = t(64700),
    d = t(503698),
    r = t.n(d),
    s = t(311907),
    a = t(177953),
    c = t(534514),
    o = t(834730),
    u = t(939249),
    _ = t(97808),
    g = t(778712),
    h = t(573613),
    f = t(289873),
    v = t(442433),
    x = t(297413),
    m = t(489673),
    p = t(342296),
    A = t(961350),
    I = t(290863),
    j = t(461213),
    b = t(287809),
    N = t(826383),
    C = t(988794),
    E = t(985018),
    y = t(610324);
function k(e) {
    let { children: n } = e;
    return (0, i.jsxs)("div", {
        className: y.do,
        children: [
            (0, i.jsx)(m.A, {
                children: (0, i.jsx)("div", {
                    className: y.n1,
                    children: (0, i.jsx)(a.n, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: y.Kk,
                    }),
                }),
            }),
            n,
        ],
    });
}
function S() {
    return (0, i.jsx)(k, {
        children: (0, i.jsx)(c.D, {
            color: "text-strong",
            variant: "heading-xl/semibold",
            className: y.DD,
            children: E.intl.string(E.t.hW0mBR),
        }),
    });
}
function L() {
    return (0, i.jsx)(k, {
        children: (0, i.jsx)(c.D, {
            color: "text-default",
            variant: "heading-md/semibold",
            className: y.JU,
            children: E.intl.string(E.t.obChXk),
        }),
    });
}
function T(e) {
    let { count: n } = e;
    return (0, i.jsxs)("div", {
        className: y.f0,
        children: [
            (0, i.jsx)("div", {
                className: r()(y.Pc, y.uY),
                children: (0, i.jsx)(a.n, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: y.Kk,
                }),
            }),
            (0, i.jsx)(o.E, {
                color: "text-default",
                variant: "text-md/normal",
                children: E.intl.format(E.t.BdQTfR, { userRemainCount: n }),
            }),
        ],
    });
}
function D(e) {
    let { eventUser: n, guildId: t, onContextMenu: d } = e,
        a = l.useRef(null),
        c = (0, s.bG)([b.default], () => b.default.getUser(n.user_id)),
        o = (0, s.bG)(
            [j.A, I.A, A.default],
            () => (n.user_id === A.default.getId() ? j.A.getStatus() : I.A.getStatus(n.user_id, t)),
            [n.user_id, t],
        );
    return null == c
        ? null
        : (0, i.jsx)(p.A, {
              targetElementRef: a,
              userId: n.user_id,
              guildId: t,
              position: "left",
              spacing: 16,
              children: (e, l) => {
                  let { isShown: s } = l;
                  return (0, i.jsxs)(u.D, {
                      innerRef: a,
                      className: r()(y.f0, y.fv, { [y.wH]: s }),
                      onContextMenu: (e) => d(e, c),
                      ...e,
                      children: [
                          (0, i.jsx)(_.eu, {
                              src: c.getAvatarURL(t, 24),
                              "aria-label": c.username,
                              size: g._3.SIZE_24,
                              className: y.uY,
                              status: o,
                          }),
                          (0, i.jsx)(x.A, { user: c, className: y.sY, discriminatorClass: y.XU, nick: n.member?.nick }),
                      ],
                  });
              },
          });
}
function R(e) {
    let { eventUsers: n, guildId: t, usersNotShownCount: l = 0, onContextMenu: d } = e;
    return (0, i.jsxs)(h.Ip, {
        className: y.DK,
        children: [
            n.map((e) => (0, i.jsx)(D, { guildId: t, eventUser: e, onContextMenu: d }, e.user_id)),
            l > 0 && (0, i.jsx)(T, { count: l }),
        ],
    });
}
function w(e) {
    let { children: n, style: t } = e;
    return (0, i.jsx)("div", { className: y.kL, style: null != t ? t : {}, children: n });
}
function G(e) {
    let { children: n, height: t } = e;
    return (0, i.jsx)(w, { style: { height: t }, children: n });
}
function P(e) {
    let { guildEvent: n, recurrenceId: l, eventUsers: d, loading: r, error: s, containerHeight: a } = e,
        c = (0, N.A)(n.guild_id, n.id, l);
    if (r && 0 === d.length)
        return (0, i.jsx)(G, {
            height: a,
            children: (0, i.jsx)(f.y, { type: f.y.Type.SPINNING_CIRCLE, className: y.u1 }),
        });
    if (null != s && 0 === d.length) return (0, i.jsx)(G, { height: a, children: (0, i.jsx)(L, {}) });
    let o = 0;
    return (
        d.length >= C.C1 && c > C.C1 && (o = Math.max(c - d.length, 0)),
        0 === d.length
            ? (0, i.jsx)(G, { height: a, children: (0, i.jsx)(S, {}) })
            : (0, i.jsx)(w, {
                  children: (0, i.jsx)(R, {
                      eventUsers: d,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, v.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  t.e("97262"),
                                  t.e("92493"),
                                  t.e("53635"),
                                  t.e("32418"),
                                  t.e("53330"),
                              ]).then(t.bind(t, 668569));
                              return (t) => (0, i.jsx)(e, { ...t, user: n });
                          });
                      },
                      usersNotShownCount: o,
                  }),
              })
    );
}
