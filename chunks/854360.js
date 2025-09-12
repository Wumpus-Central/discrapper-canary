r.d(t, { default: () => h }), r(388685);
var n = r(951288),
    l = r(647438),
    i = r(442837),
    o = r(82659),
    a = r(481060),
    s = r(749210),
    c = r(910693),
    u = r(501517),
    p = r(592125),
    d = r(51144),
    g = r(981631),
    f = r(388032),
    O = r(764295),
    b = r(541770);
function j(e) {
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
function m(e, t) {
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
function h(e) {
    var { guildId: t, user: r, location: h, modReportId: y } = e,
        v = (function (e, t) {
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
    let [P, x] = l.useState(""),
        [C, E] = l.useState(!1),
        w = (0, c.sE)(t, {
            location: h,
            targetUserId: r.id,
        }),
        { isModReportClosed: k, isModReport: T } = (0, i.cj)([p.Z], () => {
            let e = p.Z.getChannel(y);
            return {
                isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
                isModReport: null == e ? void 0 : e.isModeratorReportChannel(),
            };
        }),
        R = l.useCallback(() => {
            if (
                (s.Z.kickUser(t, r.id, P, y).then(() => {
                    C && null != y && u.Z.resolveFlag(y);
                }),
                w(c.jQ.KICK),
                null != y)
            ) {
                var e;
                null == (e = v.onClose) || e.call(v);
            }
        }, [t, r.id, P, w, y, C, v]),
        N = l.useCallback((e) => {
            x(e);
        }, []);
    return null != y && T
        ? (0, n.jsx)(
              o.Modal,
              m(j({}, v), {
                  title: f.intl.formatToPlainString(f.t["1Ie87u"], { user: r.username }),
                  subtitle: f.intl.format(f.t["/yH0UV"], { user: "@".concat(d.ZP.getName(r)) }),
                  actions: [
                      {
                          text: f.intl.string(f.t["3glT6e"]),
                          onClick: R,
                          size: "sm",
                          variant: "critical-primary",
                      },
                  ],
                  actionBarInput: k
                      ? void 0
                      : (0, n.jsx)(a.XZJ, {
                            checked: C,
                            onChange: (e) => {
                                E(e);
                            },
                            label: f.intl.string(O.default["8yIKen"]),
                        }),
                  children: (0, n.jsx)(a.xJW, {
                      titleClassName: b.title,
                      title: f.intl.string(null != y ? f.t.hmKy8P : f.t["+2QEPj"]),
                      className: b.spacing,
                      children: (0, n.jsx)(a.Kx8, {
                          maxLength: g.GNZ,
                          onChange: N,
                          value: P,
                          rows: 2,
                      }),
                  }),
              }),
          )
        : (0, n.jsxs)(
              a.ConfirmModal,
              m(
                  j(
                      {
                          header: f.intl.formatToPlainString(f.t["1Ie87u"], { user: r.username }),
                          confirmText: f.intl.string(f.t["3glT6e"]),
                          cancelText: f.intl.string(f.t["ETE/oK"]),
                          onConfirm: R,
                      },
                      v,
                  ),
                  {
                      children: [
                          (0, n.jsx)(a.Text, {
                              variant: "text-md/normal",
                              className: b.spacing,
                              children: f.intl.format(f.t["/yH0UV"], { user: "@".concat(d.ZP.getName(r)) }),
                          }),
                          (0, n.jsx)(a.xJW, {
                              title: f.intl.string(f.t["+2QEPj"]),
                              className: b.spacing,
                              children: (0, n.jsx)(a.Kx8, {
                                  maxLength: g.GNZ,
                                  onChange: N,
                                  value: P,
                                  rows: 2,
                              }),
                          }),
                      ],
                  },
              ),
          );
}
