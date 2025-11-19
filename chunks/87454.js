n.d(t, { Z: () => d }), n(388685), n(539854);
var a = n(54381),
    l = n(473749),
    i = n(704215),
    r = n(481060),
    s = n(581883),
    o = n(428967),
    c = n(972118);
let d = l.memo(function (e) {
    let { className: t, content: n, onChange: d } = e,
        u = i.z[n],
        { isDismissed: m, handleToggleDismissState: p } = (0, c.Z)(u),
        [h, x] = l.useState(!1),
        g = l.useCallback(() => {
            null == d || d(n), p();
        }, [d, p, n]),
        f = l.useCallback(
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
                        label: "".concat(n.toLowerCase(), " (").concat(i.z[n], ")"),
                        description: (0, o.qh)(u)
                            ? (function (e) {
                                  var t, n;
                                  let a =
                                      null == (n = s.Z.settings.userContent) ||
                                      null == (t = n.recurringDismissibleContentStates)
                                          ? void 0
                                          : t[e];
                                  if (null == a) return null;
                                  let l = [],
                                      { lastDismissedVersion: i, lastDismissedAtMs: r, lastDismissedObjectId: o } = a;
                                  if (
                                      (void 0 !== i && 0 !== i && l.push("last_dismissed_version: ".concat(i)),
                                      void 0 !== r)
                                  ) {
                                      let e = Number(r),
                                          t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
                                      l.push("last_dismissed_at: ".concat(t));
                                  }
                                  return (void 0 !== o && "0" !== o && l.push("last_dismissed_object_id: ".concat(o)),
                                  0 === l.length)
                                      ? null
                                      : l.join(", ");
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
