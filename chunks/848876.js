n.d(e, { default: () => u }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(159691),
    a = n(481060),
    l = n(388032),
    s = n(658855);
function u(t) {
    let { onConfirm: e, onClose: n, guildName: u, transitionState: c } = t,
        [d, f] = i.useState(""),
        [m, p] = i.useState(null),
        x = i.useMemo(
            () => [
                {
                    text: l.intl.string(l.t["ETE/oC"]),
                    onClick: n,
                    variant: "secondary",
                },
                {
                    text: l.intl.string(l.t.l3hWP6),
                    variant: "critical-primary",
                    type: "submit",
                },
            ],
            [n],
        );
    return (0, r.jsx)("form", {
        onSubmit: function (t) {
            if ((t.preventDefault(), d.toLowerCase() !== u.toLowerCase())) return void p(l.intl.string(l.t["c2/DS/"]));
            null == e || e(), n();
        },
        children: (0, r.jsxs)(o.u_l, {
            title: l.intl.formatToPlainString(l.t.us7mC1, { name: u }),
            subtitle: l.intl.format(l.t["Zuo+Vd"], { name: u }),
            actions: x,
            onClose: n,
            transitionState: c,
            children: [
                (0, r.jsx)(a.oil, {
                    id: "text-entry-confirm",
                    type: "text",
                    label: l.intl.string(l.t.abprOC),
                    value: d,
                    autoComplete: "off",
                    onChange: f,
                    autoFocus: !0,
                }),
                null != m && "" !== m
                    ? (0, r.jsx)(a.Text, {
                          color: "text-feedback-critical",
                          variant: "text-xs/normal",
                          className: s.error,
                          children: m,
                      })
                    : null,
            ],
        }),
    });
}
