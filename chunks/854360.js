n.d(t, { default: () => O }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(82659),
    a = n(481060),
    s = n(749210),
    c = n(910693),
    u = n(501517),
    p = n(592125),
    d = n(51144),
    g = n(981631),
    f = n(388032),
    b = n(130883),
    m = n(602296);
function j(e) {
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
function y(e, t) {
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
function O(e) {
    var { guildId: t, user: n, location: O, modReportId: h } = e,
        v = (function (e, t) {
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
    let [x, P] = i.useState(""),
        [C, w] = i.useState(!1),
        k = (0, c.sE)(t, {
            location: O,
            targetUserId: n.id,
        }),
        { isModReportClosed: S, isModReport: I } = (0, l.cj)([p.Z], () => {
            let e = p.Z.getChannel(h);
            return {
                isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
                isModReport: null == e ? void 0 : e.isModeratorReportChannel(),
            };
        }),
        T = i.useCallback(() => {
            if (
                (s.Z.kickUser(t, n.id, x, h).then(() => {
                    C && null != h && u.Z.resolveFlag(h);
                }),
                k(c.jQ.KICK),
                null != h)
            ) {
                var e;
                null == (e = v.onClose) || e.call(v);
            }
        }, [t, n.id, x, k, h, C, v]),
        Z = i.useCallback((e) => {
            P(e);
        }, []);
    return null != h && I
        ? (0, r.jsx)(
              o.Modal,
              y(j({}, v), {
                  title: f.intl.formatToPlainString(f.t["1Ie87u"], { user: n.username }),
                  subtitle: f.intl.format(f.t["/yH0UV"], { user: "@".concat(d.ZP.getName(n)) }),
                  actions: [
                      {
                          text: f.intl.string(f.t["3glT6e"]),
                          onClick: T,
                          size: "sm",
                          variant: "critical-primary",
                      },
                  ],
                  actionBarInput: S
                      ? void 0
                      : (0, r.jsx)(a.XZJ, {
                            value: C,
                            onChange: (e, t) => {
                                w(t);
                            },
                            children: f.intl.string(b.default["8yIKen"]),
                        }),
                  children: (0, r.jsx)(a.xJW, {
                      titleClassName: m.title,
                      title: f.intl.string(null != h ? f.t.hmKy8P : f.t["+2QEPj"]),
                      className: m.spacing,
                      children: (0, r.jsx)(a.Kx8, {
                          maxLength: g.GNZ,
                          onChange: Z,
                          value: x,
                          rows: 2,
                      }),
                  }),
              }),
          )
        : (0, r.jsxs)(
              a.ConfirmModal,
              y(
                  j(
                      {
                          header: f.intl.formatToPlainString(f.t["1Ie87u"], { user: n.username }),
                          confirmText: f.intl.string(f.t["3glT6e"]),
                          cancelText: f.intl.string(f.t["ETE/oK"]),
                          onConfirm: T,
                      },
                      v,
                  ),
                  {
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-md/normal",
                              className: m.spacing,
                              children: f.intl.format(f.t["/yH0UV"], { user: "@".concat(d.ZP.getName(n)) }),
                          }),
                          (0, r.jsx)(a.xJW, {
                              title: f.intl.string(f.t["+2QEPj"]),
                              className: m.spacing,
                              children: (0, r.jsx)(a.Kx8, {
                                  maxLength: g.GNZ,
                                  onChange: Z,
                                  value: x,
                                  rows: 2,
                              }),
                          }),
                      ],
                  },
              ),
          );
}
