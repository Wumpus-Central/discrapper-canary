n.d(t, { A: () => w });
var l = n(627968),
    r = n(64700),
    s = n(503698),
    i = n.n(s),
    a = n(311907),
    c = n(397927),
    d = n(442433),
    u = n(297413),
    o = n(489673),
    f = n(342296),
    b = n(961350),
    x = n(290863),
    h = n(461213),
    g = n(287809),
    j = n(826383),
    v = n(988794),
    m = n(985018),
    _ = n(939947);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let { children: t } = e;
    return (0, l.jsxs)("div", {
        className: _.do,
        children: [
            (0, l.jsx)(o.A, {
                children: (0, l.jsx)("div", {
                    className: _.n1,
                    children: (0, l.jsx)(c.nFg, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: _.Kk,
                    }),
                }),
            }),
            t,
        ],
    });
}
function N() {
    return (0, l.jsx)(A, {
        children: (0, l.jsx)(c.Heading, {
            color: "text-strong",
            variant: "heading-xl/semibold",
            className: _.DD,
            children: m.intl.string(m.t.hW0mBR),
        }),
    });
}
function O() {
    return (0, l.jsx)(A, {
        children: (0, l.jsx)(c.Heading, {
            color: "text-default",
            variant: "heading-md/semibold",
            className: _.JU,
            children: m.intl.string(m.t.obChXk),
        }),
    });
}
function k(e) {
    let { count: t } = e;
    return (0, l.jsxs)("div", {
        className: _.f0,
        children: [
            (0, l.jsx)("div", {
                className: i()(_.Pc, _.uY),
                children: (0, l.jsx)(c.nFg, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: _.Kk,
                }),
            }),
            (0, l.jsx)(c.Text, {
                color: "text-default",
                variant: "text-md/normal",
                children: m.intl.format(m.t.BdQTfR, { userRemainCount: t }),
            }),
        ],
    });
}
function I(e) {
    let { eventUser: t, guildId: n, onContextMenu: s } = e,
        d = r.useRef(null),
        o = (0, a.bG)([g.default], () => g.default.getUser(t.user_id)),
        j = (0, a.bG)(
            [h.A, x.A, b.default],
            () => (t.user_id === b.default.getId() ? h.A.getStatus() : x.A.getStatus(t.user_id, n)),
            [t.user_id, n],
        );
    return null == o
        ? null
        : (0, l.jsx)(f.A, {
              targetElementRef: d,
              userId: t.user_id,
              guildId: n,
              position: "left",
              spacing: 16,
              children: (e, r) => {
                  var a;
                  let { isShown: f } = r;
                  return (0, l.jsxs)(
                      c.DUT,
                      y(
                          p(
                              {
                                  innerRef: d,
                                  className: i()(_.f0, _.fv, { [_.wH]: f }),
                                  onContextMenu: (e) => s(e, o),
                              },
                              e,
                          ),
                          {
                              children: [
                                  (0, l.jsx)(c.euF, {
                                      src: o.getAvatarURL(n, 24),
                                      "aria-label": o.username,
                                      size: c._3J.SIZE_24,
                                      className: _.uY,
                                      status: j,
                                  }),
                                  (0, l.jsx)(u.A, {
                                      user: o,
                                      className: _.sY,
                                      discriminatorClass: _.XU,
                                      nick: null == (a = t.member) ? void 0 : a.nick,
                                  }),
                              ],
                          },
                      ),
                  );
              },
          });
}
function S(e) {
    let { eventUsers: t, guildId: n, usersNotShownCount: r = 0, onContextMenu: s } = e;
    return (0, l.jsxs)(c.IpV, {
        className: _.DK,
        children: [
            t.map((e) =>
                (0, l.jsx)(
                    I,
                    {
                        guildId: n,
                        eventUser: e,
                        onContextMenu: s,
                    },
                    e.user_id,
                ),
            ),
            r > 0 && (0, l.jsx)(k, { count: r }),
        ],
    });
}
function C(e) {
    let { children: t, style: n } = e;
    return (0, l.jsx)("div", {
        className: _.kL,
        style: null != n ? n : {},
        children: t,
    });
}
function E(e) {
    let { children: t, height: n } = e;
    return (0, l.jsx)(C, {
        style: { height: n },
        children: t,
    });
}
function w(e) {
    let { guildEvent: t, recurrenceId: r, eventUsers: s, loading: i, error: a, containerHeight: u } = e,
        o = (0, j.A)(t.guild_id, t.id, r);
    if (i && 0 === s.length)
        return (0, l.jsx)(E, {
            height: u,
            children: (0, l.jsx)(c.y$y, {
                type: c.y$y.Type.SPINNING_CIRCLE,
                className: _.u1,
            }),
        });
    if (null != a && 0 === s.length)
        return (0, l.jsx)(E, {
            height: u,
            children: (0, l.jsx)(O, {}),
        });
    let f = 0;
    return (
        s.length >= v.C1 && o > v.C1 && (f = Math.max(o - s.length, 0)),
        0 === s.length
            ? (0, l.jsx)(E, {
                  height: u,
                  children: (0, l.jsx)(N, {}),
              })
            : (0, l.jsx)(C, {
                  children: (0, l.jsx)(S, {
                      eventUsers: s,
                      guildId: t.guild_id,
                      onContextMenu: function (e, t) {
                          (0, d.L3)(e, async () => {
                              let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("8893")]).then(
                                  n.bind(n, 668569),
                              );
                              return (n) => (0, l.jsx)(e, y(p({}, n), { user: t }));
                          });
                      },
                      usersNotShownCount: f,
                  }),
              })
    );
}
