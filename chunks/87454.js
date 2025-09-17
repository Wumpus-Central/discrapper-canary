n.d(t, { Z: () => _ }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    l = n(581883),
    c = n(428967),
    u = n(972118),
    d = n(561735),
    f = n(10198);
let _ = i.memo(function (e) {
    let { className: t, content: n, onChange: a } = e,
        l = o.z[n],
        { isDismissed: f, handleToggleDismissState: _ } = (0, u.Z)(l),
        [h, m] = i.useState(!1),
        g = i.useCallback(() => {
            null == a || a(n), _();
        }, [a, _, n]),
        E = i.useCallback(
            (e) => {
                e.preventDefault(), m(!0), navigator.clipboard.writeText(n.toLowerCase());
            },
            [n],
        );
    return (0, r.jsx)(s.j7V, {
        value: f,
        onChange: g,
        className: t,
        children: (0, r.jsxs)("div", {
            className: d.container,
            children: [
                (0, r.jsxs)("div", {
                    className: d.textContainer,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: d.text,
                            children: "".concat(n.toLowerCase(), " (").concat(o.z[n], ")"),
                        }),
                        (0, c.qh)(l) && (0, r.jsx)(p, { content: l }),
                    ],
                }),
                (0, r.jsx)(s.hU, {
                    size: "sm",
                    variant: "icon-only",
                    icon: h ? s.C2q : s.zTD,
                    onClick: E,
                    "aria-label": h ? "Copied" : "Copy",
                }),
            ],
        }),
    });
});
function p(e) {
    let { content: t } = e,
        n = (0, a.e7)([l.Z], () => {
            var e, n;
            return null == (n = l.Z.settings.userContent) || null == (e = n.recurringDismissibleContentStates)
                ? void 0
                : e[t];
        });
    if (null == n) return null;
    let i = [],
        { lastDismissedVersion: o, lastDismissedAtMs: c, lastDismissedObjectId: u } = n;
    if ((void 0 !== o && 0 !== o && i.push("last_dismissed_version: ".concat(o)), void 0 !== c)) {
        let e = Number(c),
            t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
        i.push("last_dismissed_at: ".concat(t));
    }
    return (void 0 !== u && "0" !== u && i.push("last_dismissed_object_id: ".concat(u)), 0 === i.length)
        ? null
        : (0, r.jsx)(s.Text, {
              variant: "text-xs/normal",
              className: f.marginTop4,
              children: i.join(", "),
          });
}
