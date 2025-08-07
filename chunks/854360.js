n.d(t, { default: () => b }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(749210),
    c = n(910693),
    s = n(501517),
    u = n(592125),
    d = n(51144),
    _ = n(981631),
    f = n(388032),
    g = n(130883),
    p = n(373283);
function m(e) {
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
function O(e, t) {
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
function b(e) {
    var { guildId: t, user: n, location: b, modReportId: E } = e,
        y = (function (e, t) {
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
    let [j, h] = i.useState(""),
        [x, v] = i.useState(!1),
        C = (0, c.sE)(t, {
            location: b,
            targetUserId: n.id,
        }),
        { isModReportClosed: M, isModReport: A } = (0, l.cj)([u.Z], () => {
            let e = u.Z.getChannel(E);
            return {
                isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
                isModReport: null == e ? void 0 : e.isModeratorReportChannel(),
            };
        }),
        S = i.useCallback(() => {
            if (
                (o.Z.kickUser(t, n.id, j, E).then(() => {
                    x && null != E && s.Z.resolveFlag(E);
                }),
                C(c.jQ.KICK),
                null != E)
            ) {
                var e;
                null == (e = y.onClose) || e.call(y);
            }
        }, [t, n.id, j, C, E, x, y]),
        T = i.useCallback((e) => {
            h(e);
        }, []);
    return null != E && A
        ? (0, r.jsxs)(
              a.Y0X,
              O(m({}, y), {
                  parentComponent: "KickConfirm",
                  children: [
                      (0, r.jsx)(a.xBx, {
                          separator: !1,
                          children: (0, r.jsxs)(a.Kqy, {
                              direction: "vertical",
                              justify: "space-between",
                              children: [
                                  (0, r.jsx)(a.olH, {
                                      className: p.closeButton,
                                      onClick: y.onClose,
                                  }),
                                  (0, r.jsx)(a.X6q, {
                                      variant: "heading-lg/semibold",
                                      children: f.intl.formatToPlainString(f.t["1Ie87u"], { user: n.username }),
                                  }),
                              ],
                          }),
                      }),
                      (0, r.jsxs)(a.hzk, {
                          children: [
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/normal",
                                  className: p.spacing,
                                  children: f.intl.format(f.t["/yH0UV"], { user: "@".concat(d.ZP.getName(n)) }),
                              }),
                              (0, r.jsx)(a.xJW, {
                                  titleClassName: p.title,
                                  title: f.intl.string(null != E ? f.t.hmKy8P : f.t["+2QEPj"]),
                                  className: p.spacing,
                                  children: (0, r.jsx)(a.Kx8, {
                                      maxLength: _.GNZ,
                                      onChange: T,
                                      value: j,
                                      rows: 2,
                                  }),
                              }),
                          ],
                      }),
                      (0, r.jsxs)(a.mzw, {
                          children: [
                              (0, r.jsx)(a.zxk, {
                                  variant: "critical-primary",
                                  size: "sm",
                                  text: f.intl.string(f.t["3glT6e"]),
                                  type: "submit",
                                  onClick: S,
                              }),
                              !M &&
                                  (0, r.jsx)(a.XZJ, {
                                      value: x,
                                      onChange: (e, t) => {
                                          v(t);
                                      },
                                      children: f.intl.string(g.default["8yIKen"]),
                                  }),
                          ],
                      }),
                  ],
              }),
          )
        : (0, r.jsxs)(
              a.ConfirmModal,
              O(
                  m(
                      {
                          header: f.intl.formatToPlainString(f.t["1Ie87u"], { user: n.username }),
                          confirmText: f.intl.string(f.t["3glT6e"]),
                          cancelText: f.intl.string(f.t["ETE/oK"]),
                          onConfirm: S,
                      },
                      y,
                  ),
                  {
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-md/normal",
                              className: p.spacing,
                              children: f.intl.format(f.t["/yH0UV"], { user: "@".concat(d.ZP.getName(n)) }),
                          }),
                          (0, r.jsx)(a.xJW, {
                              title: f.intl.string(f.t["+2QEPj"]),
                              className: p.spacing,
                              children: (0, r.jsx)(a.Kx8, {
                                  maxLength: _.GNZ,
                                  onChange: T,
                                  value: j,
                                  rows: 2,
                              }),
                          }),
                      ],
                  },
              ),
          );
}
