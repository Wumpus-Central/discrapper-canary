n.d(t, { Z: () => d }), n(388685), n(539854);
var a = n(951288),
    r = n(647438),
    l = n(704215),
    i = n(481060),
    o = n(581883),
    s = n(428967),
    c = n(972118);
let d = r.memo(function (e) {
    let { className: t, content: n, onChange: d } = e,
        u = l.z[n],
        { isDismissed: m, handleToggleDismissState: p } = (0, c.Z)(u),
        [h, x] = r.useState(!1),
        f = r.useCallback(() => {
            null == d || d(n), p();
        }, [d, p, n]),
        b = r.useCallback(
            (e) => {
                e.preventDefault(), x(!0), navigator.clipboard.writeText(n.toLowerCase());
            },
            [n],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(i.Kqy, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, a.jsx)(i.hU, {
                        size: "sm",
                        variant: "icon-only",
                        icon: h ? i.C2q : i.zTD,
                        onClick: b,
                        "aria-label": h ? "Copied" : "Copy",
                    }),
                    (0, a.jsx)(i.rsf, {
                        label: "".concat(n.toLowerCase(), " (").concat(l.z[n], ")"),
                        description: (0, s.qh)(u)
                            ? (function (e) {
                                  var t, n;
                                  let a =
                                      null == (n = o.Z.settings.userContent) ||
                                      null == (t = n.recurringDismissibleContentStates)
                                          ? void 0
                                          : t[e];
                                  if (null == a) return null;
                                  let r = [],
                                      { lastDismissedVersion: l, lastDismissedAtMs: i, lastDismissedObjectId: s } = a;
                                  if (
                                      (void 0 !== l && 0 !== l && r.push("last_dismissed_version: ".concat(l)),
                                      void 0 !== i)
                                  ) {
                                      let e = Number(i),
                                          t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
                                      r.push("last_dismissed_at: ".concat(t));
                                  }
                                  return (void 0 !== s && "0" !== s && r.push("last_dismissed_object_id: ".concat(s)),
                                  0 === r.length)
                                      ? null
                                      : r.join(", ");
                              })(u)
                            : null,
                        checked: m,
                        onChange: f,
                    }),
                ],
            }),
            (0, a.jsx)(i.izJ, {}),
        ],
    });
});
