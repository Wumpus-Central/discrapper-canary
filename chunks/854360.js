r.d(t, { default: () => y }), r(388685);
var n = r(951288),
    l = r(647438),
    i = r(442837),
    o = r(82659),
    a = r(755721),
    s = r(481060),
    c = r(749210),
    u = r(910693),
    p = r(501517),
    d = r(592125),
    g = r(51144),
    f = r(981631),
    O = r(388032),
    b = r(764295),
    j = r(541770);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function y(e) {
    var { guildId: t, user: r, location: y, modReportId: v } = e,
        P = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ["guildId", "user", "location", "modReportId"]);
    let [x, C] = l.useState(""),
        [E, w] = l.useState(!1),
        T = (0, u.sE)(t, {
            location: y,
            targetUserId: r.id,
        }),
        { isModReportClosed: k, isModReport: R } = (0, i.cj)([d.Z], () => {
            let e = d.Z.getChannel(v);
            return {
                isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
                isModReport: null == e ? void 0 : e.isModeratorReportChannel(),
            };
        }),
        N = l.useCallback(() => {
            if (
                (c.Z.kickUser(t, r.id, x, v).then(() => {
                    E && null != v && p.Z.resolveFlag(v);
                }),
                T(u.jQ.KICK),
                null != v)
            ) {
                var e;
                null == (e = P.onClose) || e.call(P);
            }
        }, [t, r.id, x, T, v, E, P]),
        S = l.useCallback((e) => {
            C(e);
        }, []);
    return null != v && R
        ? (0, n.jsx)(
              o.Modal,
              h(m({}, P), {
                  title: O.intl.formatToPlainString(O.t["1Ie87u"], { user: r.username }),
                  subtitle: O.intl.format(O.t["/yH0UV"], { user: "@".concat(g.ZP.getName(r)) }),
                  actions: [
                      {
                          text: O.intl.string(O.t["3glT6e"]),
                          onClick: N,
                          size: "sm",
                          variant: "critical-primary",
                      },
                  ],
                  actionBarInput: k
                      ? void 0
                      : (0, n.jsx)(a.$q, {
                            value: E,
                            onChange: (e, t) => {
                                w(t);
                            },
                            children: O.intl.string(b.default["8yIKen"]),
                        }),
                  children: (0, n.jsx)(s.xJW, {
                      titleClassName: j.title,
                      title: O.intl.string(null != v ? O.t.hmKy8P : O.t["+2QEPj"]),
                      className: j.spacing,
                      children: (0, n.jsx)(s.Kx8, {
                          maxLength: f.GNZ,
                          onChange: S,
                          value: x,
                          rows: 2,
                      }),
                  }),
              }),
          )
        : (0, n.jsxs)(
              s.ConfirmModal,
              h(
                  m(
                      {
                          header: O.intl.formatToPlainString(O.t["1Ie87u"], { user: r.username }),
                          confirmText: O.intl.string(O.t["3glT6e"]),
                          cancelText: O.intl.string(O.t["ETE/oK"]),
                          onConfirm: N,
                      },
                      P,
                  ),
                  {
                      children: [
                          (0, n.jsx)(s.Text, {
                              variant: "text-md/normal",
                              className: j.spacing,
                              children: O.intl.format(O.t["/yH0UV"], { user: "@".concat(g.ZP.getName(r)) }),
                          }),
                          (0, n.jsx)(s.xJW, {
                              title: O.intl.string(O.t["+2QEPj"]),
                              className: j.spacing,
                              children: (0, n.jsx)(s.Kx8, {
                                  maxLength: f.GNZ,
                                  onChange: S,
                                  value: x,
                                  rows: 2,
                              }),
                          }),
                      ],
                  },
              ),
          );
}
