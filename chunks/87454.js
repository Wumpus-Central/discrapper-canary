n.d(t, { Z: () => d }), n(388685), n(539854);
var a = n(951288),
    i = n(647438),
    l = n(704215),
    r = n(481060),
    s = n(581883),
    o = n(428967),
    c = n(972118);
let d = i.memo(function (e) {
    let { className: t, content: n, onChange: d } = e,
        u = l.z[n],
        { isDismissed: m, handleToggleDismissState: p } = (0, c.Z)(u),
        [h, x] = i.useState(!1),
        g = i.useCallback(() => {
            null == d || d(n), p();
        }, [d, p, n]),
        f = i.useCallback(
            (e) => {
                e.preventDefault(), x(!0), navigator.clipboard.writeText(n.toLowerCase());
            },
            [n],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(r.Kqy, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, a.jsx)(r.hU, {
                        size: "sm",
                        variant: "icon-only",
                        icon: h ? r.C2q : r.zTD,
                        onClick: f,
                        "aria-label": h ? "Copied" : "Copy",
                    }),
                    (0, a.jsx)(r.rsf, {
                        label: "".concat(n.toLowerCase(), " (").concat(l.z[n], ")"),
                        description: (0, o.qh)(u)
                            ? (function (e) {
                                  var t, n;
                                  let a =
                                      null == (n = s.Z.settings.userContent) ||
                                      null == (t = n.recurringDismissibleContentStates)
                                          ? void 0
                                          : t[e];
                                  if (null == a) return null;
                                  let i = [],
                                      { lastDismissedVersion: l, lastDismissedAtMs: r, lastDismissedObjectId: o } = a;
                                  if (
                                      (void 0 !== l && 0 !== l && i.push("last_dismissed_version: ".concat(l)),
                                      void 0 !== r)
                                  ) {
                                      let e = Number(r),
                                          t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
                                      i.push("last_dismissed_at: ".concat(t));
                                  }
                                  return (void 0 !== o && "0" !== o && i.push("last_dismissed_object_id: ".concat(o)),
                                  0 === i.length)
                                      ? null
                                      : i.join(", ");
                              })(u)
                            : null,
                        checked: m,
                        onChange: g,
                    }),
                ],
            }),
            (0, a.jsx)(r.izJ, {}),
        ],
    });
});
