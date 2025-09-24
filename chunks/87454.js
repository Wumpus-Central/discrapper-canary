n.d(t, { Z: () => p }), n(388685), n(539854);
var a = n(951288),
    r = n(647438),
    i = n(442837),
    l = n(704215),
    s = n(481060),
    o = n(581883),
    c = n(428967),
    d = n(972118),
    u = n(764668),
    m = n(197571);
let p = r.memo(function (e) {
    let { className: t, content: n, onChange: i } = e,
        o = l.z[n],
        { isDismissed: m, handleToggleDismissState: p } = (0, d.Z)(o),
        [x, f] = r.useState(!1),
        b = r.useCallback(() => {
            null == i || i(n), p();
        }, [i, p, n]),
        g = r.useCallback(
            (e) => {
                e.preventDefault(), f(!0), navigator.clipboard.writeText(n.toLowerCase());
            },
            [n],
        );
    return (0, a.jsx)(s.j7V, {
        value: m,
        onChange: b,
        className: t,
        children: (0, a.jsxs)("div", {
            className: u.container,
            children: [
                (0, a.jsxs)("div", {
                    className: u.textContainer,
                    children: [
                        (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: u.text,
                            children: "".concat(n.toLowerCase(), " (").concat(l.z[n], ")"),
                        }),
                        (0, c.qh)(o) && (0, a.jsx)(h, { content: o }),
                    ],
                }),
                (0, a.jsx)(s.hU, {
                    size: "sm",
                    variant: "icon-only",
                    icon: x ? s.C2q : s.zTD,
                    onClick: g,
                    "aria-label": x ? "Copied" : "Copy",
                }),
            ],
        }),
    });
});
function h(e) {
    let { content: t } = e,
        n = (0, i.e7)([o.Z], () => {
            var e, n;
            return null == (n = o.Z.settings.userContent) || null == (e = n.recurringDismissibleContentStates)
                ? void 0
                : e[t];
        });
    if (null == n) return null;
    let r = [],
        { lastDismissedVersion: l, lastDismissedAtMs: c, lastDismissedObjectId: d } = n;
    if ((void 0 !== l && 0 !== l && r.push("last_dismissed_version: ".concat(l)), void 0 !== c)) {
        let e = Number(c),
            t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
        r.push("last_dismissed_at: ".concat(t));
    }
    return (void 0 !== d && "0" !== d && r.push("last_dismissed_object_id: ".concat(d)), 0 === r.length)
        ? null
        : (0, a.jsx)(s.Text, {
              variant: "text-xs/normal",
              className: m.marginTop4,
              children: r.join(", "),
          });
}
