n.d(t, { Z: () => d }), n(388685), n(539854);
var a = n(54381),
    l = n(473749),
    r = n(704215),
    i = n(481060),
    s = n(581883),
    o = n(428967),
    c = n(972118);
let d = l.memo(function (e) {
    let { className: t, content: n, onChange: d } = e,
        u = r.z[n],
        { isDismissed: m, handleToggleDismissState: p } = (0, c.Z)(u),
        [h, x] = l.useState(!1),
        f = l.useCallback(() => {
            null == d || d(n), p();
        }, [d, p, n]),
        g = l.useCallback(
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
                        onClick: g,
                        "aria-label": h ? "Copied" : "Copy",
                    }),
                    (0, a.jsx)(i.rsf, {
                        label: "".concat(n.toLowerCase(), " (").concat(r.z[n], ")"),
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
                                      { lastDismissedVersion: r, lastDismissedAtMs: i, lastDismissedObjectId: o } = a;
                                  if (
                                      (void 0 !== r && 0 !== r && l.push("last_dismissed_version: ".concat(r)),
                                      void 0 !== i)
                                  ) {
                                      let e = Number(i),
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
                        onChange: f,
                    }),
                ],
            }),
            (0, a.jsx)(i.izJ, {}),
        ],
    });
});
