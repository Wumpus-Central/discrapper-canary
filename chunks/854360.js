n.d(t, { default: () => m }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(82659),
    o = n(481060),
    c = n(749210),
    u = n(910693),
    s = n(501517),
    d = n(592125),
    _ = n(51144),
    f = n(981631),
    g = n(388032),
    O = n(130883),
    p = n(602296);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    var { guildId: t, user: n, location: m, modReportId: y } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["guildId", "user", "location", "modReportId"]);
    let [v, h] = i.useState(""),
        [M, C] = i.useState(!1),
        A = (0, u.sE)(t, {
            location: m,
            targetUserId: n.id,
        }),
        { isModReportClosed: S, isModReport: P } = (0, l.cj)([d.Z], () => {
            let e = d.Z.getChannel(y);
            return {
                isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
                isModReport: null == e ? void 0 : e.isModeratorReportChannel(),
            };
        }),
        T = i.useCallback(() => {
            if (
                (c.Z.kickUser(t, n.id, v, y).then(() => {
                    M && null != y && s.Z.resolveFlag(y);
                }),
                A(u.jQ.KICK),
                null != y)
            ) {
                var e;
                null == (e = j.onClose) || e.call(j);
            }
        }, [t, n.id, v, A, y, M, j]),
        x = i.useCallback((e) => {
            h(e);
        }, []);
    return null != y && P
        ? (0, r.jsx)(
              a.Modal,
              E(b({}, j), {
                  title: g.intl.formatToPlainString(g.t["1Ie87u"], { user: n.username }),
                  subtitle: g.intl.format(g.t["/yH0UV"], { user: "@".concat(_.ZP.getName(n)) }),
                  actions: [
                      {
                          text: g.intl.string(g.t["3glT6e"]),
                          onClick: T,
                          size: "sm",
                          variant: "critical-primary",
                      },
                  ],
                  actionBarInput: S
                      ? void 0
                      : (0, r.jsx)(o.XZJ, {
                            value: M,
                            onChange: (e, t) => {
                                C(t);
                            },
                            children: g.intl.string(O.default["8yIKen"]),
                        }),
                  children: (0, r.jsx)(o.xJW, {
                      titleClassName: p.title,
                      title: g.intl.string(null != y ? g.t.hmKy8P : g.t["+2QEPj"]),
                      className: p.spacing,
                      children: (0, r.jsx)(o.Kx8, {
                          maxLength: f.GNZ,
                          onChange: x,
                          value: v,
                          rows: 2,
                      }),
                  }),
              }),
          )
        : (0, r.jsxs)(
              o.ConfirmModal,
              E(
                  b(
                      {
                          header: g.intl.formatToPlainString(g.t["1Ie87u"], { user: n.username }),
                          confirmText: g.intl.string(g.t["3glT6e"]),
                          cancelText: g.intl.string(g.t["ETE/oK"]),
                          onConfirm: T,
                      },
                      j,
                  ),
                  {
                      children: [
                          (0, r.jsx)(o.Text, {
                              variant: "text-md/normal",
                              className: p.spacing,
                              children: g.intl.format(g.t["/yH0UV"], { user: "@".concat(_.ZP.getName(n)) }),
                          }),
                          (0, r.jsx)(o.xJW, {
                              title: g.intl.string(g.t["+2QEPj"]),
                              className: p.spacing,
                              children: (0, r.jsx)(o.Kx8, {
                                  maxLength: f.GNZ,
                                  onChange: x,
                                  value: v,
                                  rows: 2,
                              }),
                          }),
                      ],
                  },
              ),
          );
}
