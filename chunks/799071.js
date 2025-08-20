n.d(t, { Z: () => s }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(173511),
    o = n(481060);
function s() {
    let [e, t] = i.useState("");
    return (0, r.jsxs)(o.hjN, {
        title: "Text components",
        tag: o.RB0.H1,
        children: [
            (0, r.jsx)(o.oil, {
                placeholder: "Enter custom text...",
                onChange: (e) => t(e),
            }),
            (0, r.jsx)(o.$i$, { style: { margin: "10px 0" } }),
            a.O.map((t) =>
                "code" === t
                    ? null
                    : (0, r.jsx)(
                          o.Text,
                          {
                              variant: t,
                              children: "" !== e ? "".concat(e, " (").concat(t, ")") : t,
                          },
                          t,
                      ),
            ),
        ],
    });
}
