n.d(t, { A: () => U });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    c = n(177953),
    o = n(534514),
    d = n(834730),
    u = n(939249),
    _ = n(97808),
    h = n(778712),
    g = n(573613),
    A = n(289873),
    f = n(442433),
    p = n(297413),
    E = n(489673),
    m = n(342296),
    x = n(961350),
    v = n(290863),
    I = n(461213),
    C = n(287809),
    T = n(826383),
    S = n(988794),
    R = n(985018),
    N = n(610324);
function y(e) {
    let { children: t } = e;
    return (0, l.jsxs)("div", {
        className: N.do,
        children: [
            (0, l.jsx)(E.A, {
                children: (0, l.jsx)("div", {
                    className: N.n1,
                    children: (0, l.jsx)(c.n, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: N.Kk,
                    }),
                }),
            }),
            t,
        ],
    });
}
function b() {
    return (0, l.jsx)(y, {
        children: (0, l.jsx)(o.D, {
            color: "text-strong",
            variant: "heading-xl/semibold",
            className: N.DD,
            children: R.intl.string(R.t.hW0mBR),
        }),
    });
}
function L() {
    return (0, l.jsx)(y, {
        children: (0, l.jsx)(o.D, {
            color: "text-default",
            variant: "heading-md/semibold",
            className: N.JU,
            children: R.intl.string(R.t.obChXk),
        }),
    });
}
function j(e) {
    let { count: t } = e;
    return (0, l.jsxs)("div", {
        className: N.f0,
        children: [
            (0, l.jsx)("div", {
                className: s()(N.Pc, N.uY),
                children: (0, l.jsx)(c.n, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: N.Kk,
                }),
            }),
            (0, l.jsx)(d.E, {
                color: "text-default",
                variant: "text-md/normal",
                children: R.intl.format(R.t.BdQTfR, { userRemainCount: t }),
            }),
        ],
    });
}
function w(e) {
    let { eventUser: t, guildId: n, onContextMenu: r } = e,
        c = i.useRef(null),
        o = (0, a.bG)([C.default], () => C.default.getUser(t.user_id)),
        d = (0, a.bG)(
            [I.A, v.A, x.default],
            () => (t.user_id === x.default.getId() ? I.A.getStatus() : v.A.getStatus(t.user_id, n)),
            [t.user_id, n],
        );
    return null == o
        ? null
        : (0, l.jsx)(m.A, {
              targetElementRef: c,
              userId: t.user_id,
              guildId: n,
              position: "left",
              spacing: 16,
              children: (e, i) => {
                  let { isShown: a } = i;
                  return (0, l.jsxs)(u.D, {
                      innerRef: c,
                      className: s()(N.f0, N.fv, { [N.wH]: a }),
                      onContextMenu: (e) => r(e, o),
                      ...e,
                      children: [
                          (0, l.jsx)(_.eu, {
                              src: o.getAvatarURL(n, 24),
                              "aria-label": o.username,
                              size: h._3.SIZE_24,
                              className: N.uY,
                              status: d,
                          }),
                          (0, l.jsx)(p.A, { user: o, className: N.sY, discriminatorClass: N.XU, nick: t.member?.nick }),
                      ],
                  });
              },
          });
}
function P(e) {
    let { eventUsers: t, guildId: n, usersNotShownCount: i = 0, onContextMenu: r } = e;
    return (0, l.jsxs)(g.Ip, {
        className: N.DK,
        children: [
            t.map((e) => (0, l.jsx)(w, { guildId: n, eventUser: e, onContextMenu: r }, e.user_id)),
            i > 0 && (0, l.jsx)(j, { count: i }),
        ],
    });
}
function M(e) {
    let { children: t, style: n } = e;
    return (0, l.jsx)("div", { className: N.kL, style: null != n ? n : {}, children: t });
}
function D(e) {
    let { children: t, height: n } = e;
    return (0, l.jsx)(M, { style: { height: n }, children: t });
}
function U(e) {
    let { guildEvent: t, recurrenceId: i, eventUsers: r, loading: s, error: a, containerHeight: c } = e,
        o = (0, T.A)(t.guild_id, t.id, i);
    if (s && 0 === r.length)
        return (0, l.jsx)(D, {
            height: c,
            children: (0, l.jsx)(A.y, { type: A.y.Type.SPINNING_CIRCLE, className: N.u1 }),
        });
    if (null != a && 0 === r.length) return (0, l.jsx)(D, { height: c, children: (0, l.jsx)(L, {}) });
    let d = 0;
    return (
        r.length >= S.C1 && o > S.C1 && (d = Math.max(o - r.length, 0)),
        0 === r.length
            ? (0, l.jsx)(D, { height: c, children: (0, l.jsx)(b, {}) })
            : (0, l.jsx)(M, {
                  children: (0, l.jsx)(P, {
                      eventUsers: r,
                      guildId: t.guild_id,
                      onContextMenu: function (e, t) {
                          (0, f.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("92493"),
                                  n.e("53635"),
                                  n.e("32418"),
                                  n.e("53330"),
                              ]).then(n.bind(n, 668569));
                              return (n) => (0, l.jsx)(e, { ...n, user: t });
                          });
                      },
                      usersNotShownCount: d,
                  }),
              })
    );
}
