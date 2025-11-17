n.d(e, { default: () => u }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(159691),
    a = n(481060),
    l = n(388032),
    s = n(658855);
function u(t) {
    let { onConfirm: e, onClose: n, guildName: u, transitionState: c } = t,
        [d, m] = i.useState(""),
        [p, f] = i.useState(null),
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
            if ((t.preventDefault(), d.toLowerCase() !== u.toLowerCase())) return void f(l.intl.string(l.t["c2/DS/"]));
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
                    onChange: m,
                    autoFocus: !0,
                }),
                null != p && "" !== p
                    ? (0, r.jsx)(a.Text, {
                          color: "text-danger",
                          variant: "text-xs/normal",
                          className: s.error,
                          children: p,
                      })
                    : null,
            ],
        }),
    });
}
