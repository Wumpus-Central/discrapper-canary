n.d(t, { Z: () => d }), n(388685), n(539854);
var a = n(54381),
    r = n(473749),
    i = n(704215),
    l = n(481060),
    s = n(581883),
    o = n(428967),
    c = n(972118);
let d = r.memo(function (e) {
    let { className: t, content: n, onChange: d } = e,
        u = i.z[n],
        { isDismissed: m, handleToggleDismissState: p } = (0, c.Z)(u),
        [h, f] = r.useState(!1),
        x = r.useCallback(() => {
            null == d || d(n), p();
        }, [d, p, n]),
        b = r.useCallback(
            (e) => {
                e.preventDefault(), f(!0), navigator.clipboard.writeText(n.toLowerCase());
            },
            [n],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(l.Kqy, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, a.jsx)(l.hU, {
                        size: "sm",
                        variant: "icon-only",
                        icon: h ? l.C2q : l.zTD,
                        onClick: b,
                        "aria-label": h ? "Copied" : "Copy",
                    }),
                    (0, a.jsx)(l.rsf, {
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
                                  let r = [],
                                      { lastDismissedVersion: i, lastDismissedAtMs: l, lastDismissedObjectId: o } = a;
                                  if (
                                      (void 0 !== i && 0 !== i && r.push("last_dismissed_version: ".concat(i)),
                                      void 0 !== l)
                                  ) {
                                      let e = Number(l),
                                          t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
                                      r.push("last_dismissed_at: ".concat(t));
                                  }
                                  return (void 0 !== o && "0" !== o && r.push("last_dismissed_object_id: ".concat(o)),
                                  0 === r.length)
                                      ? null
                                      : r.join(", ");
                              })(u)
                            : null,
                        checked: m,
                        onChange: x,
                    }),
                ],
            }),
            (0, a.jsx)(l.izJ, {}),
        ],
    });
});
