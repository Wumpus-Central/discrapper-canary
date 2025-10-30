n.d(t, { default: () => m }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(793030),
    o = n(442837),
    a = n(481060),
    c = n(749210),
    u = n(910693),
    s = n(501517),
    d = n(592125),
    f = n(51144),
    _ = n(981631),
    g = n(388032),
    b = n(68468),
    p = n(643627);
function O(e) {
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
        v = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["guildId", "user", "location", "modReportId"]);
    let [h, j] = l.useState(""),
        [C, M] = l.useState(!1),
        A = (0, u.sE)(t, {
            location: m,
            targetUserId: n.id,
        }),
        { isModReportClosed: T, isModReport: S } = (0, o.cj)([d.Z], () => {
            let e = d.Z.getChannel(y);
            return {
                isModReportClosed: null == e ? void 0 : e.isArchivedThread(),
                isModReport: null == e ? void 0 : e.isModeratorReportChannel(),
            };
        }),
        I = l.useCallback(() => {
            if (
                (c.Z.kickUser(t, n.id, h, y).then(() => {
                    C && null != y && s.Z.resolveFlag(y);
                }),
                A(u.jQ.KICK),
                null != y)
            ) {
                var e;
                null == (e = v.onClose) || e.call(v);
            }
        }, [t, n.id, h, A, y, C, v]),
        P = l.useCallback((e) => {
            j(e);
        }, []);
    return null != y && S
        ? (0, r.jsx)(
              i.Modal,
              E(O({}, v), {
                  title: g.intl.formatToPlainString(g.t["1Ie87p"], { user: n.username }),
                  subtitle: g.intl.format(g.t["/yH0UT"], { user: "@".concat(f.ZP.getName(n)) }),
                  actions: [
                      {
                          text: g.intl.string(g.t["3glT6Z"]),
                          onClick: I,
                          size: "sm",
                          variant: "critical-primary",
                      },
                  ],
                  actionBarInput: T
                      ? void 0
                      : (0, r.jsx)(a.Checkbox, {
                            checked: C,
                            onChange: (e) => {
                                M(e);
                            },
                            label: g.intl.string(b.default["8yIKem"]),
                        }),
                  children: (0, r.jsx)(a.Kx8, {
                      label: g.intl.string(null != y ? g.t.hmKy8E : g.t["+2QEPt"]),
                      maxLength: _.GNZ,
                      onChange: P,
                      value: h,
                      rows: 2,
                  }),
              }),
          )
        : (0, r.jsxs)(
              a.ConfirmModal,
              E(
                  O(
                      {
                          header: g.intl.formatToPlainString(g.t["1Ie87p"], { user: n.username }),
                          confirmText: g.intl.string(g.t["3glT6Z"]),
                          cancelText: g.intl.string(g.t["ETE/oC"]),
                          onConfirm: I,
                      },
                      v,
                  ),
                  {
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-md/normal",
                              className: p.spacing,
                              children: g.intl.format(g.t["/yH0UT"], { user: "@".concat(f.ZP.getName(n)) }),
                          }),
                          (0, r.jsx)("div", {
                              className: p.spacing,
                              children: (0, r.jsx)(a.Kx8, {
                                  label: g.intl.string(g.t["+2QEPt"]),
                                  maxLength: _.GNZ,
                                  onChange: P,
                                  value: h,
                                  rows: 2,
                              }),
                          }),
                      ],
                  },
              ),
          );
}
