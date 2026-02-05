n.d(t, { A: () => x, AddQuestionsContextMenu: () => u });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(442433),
    r = n(828208),
    a = n(513461),
    c = n(557420),
    d = n(322388),
    o = n(985018);
function u(e) {
    let { addFormField: t, onSelect: n, guild: c, allowTerms: u } = e;
    return (0, i.jsx)(s.W1t, {
        "data-menu-migrated": !0,
        navId: "add-questions",
        onClose: l.Z_,
        "aria-label": o.intl.string(o.t.liqwPJ),
        onSelect: n,
        children: (0, i.jsxs)(s.rXV, {
            children: [
                (0, i.jsx)(s.Drp, {
                    id: "text-input",
                    icon: (0, s.kHD)(r.A),
                    leadingAccessory: { type: "icon", icon: (0, s.kHD)(r.A) },
                    label: o.intl.string(o.t.w6Q9wz),
                    action: () => (0, d.PV)(a.rX.TEXT_INPUT, t, c),
                }),
                (0, i.jsx)(s.Drp, {
                    id: "paragraph",
                    icon: s.$tc,
                    leadingAccessory: { type: "icon", icon: s.$tc },
                    label: o.intl.string(o.t.gG0JBN),
                    action: () => (0, d.PV)(a.rX.PARAGRAPH, t, c),
                }),
                (0, i.jsx)(s.Drp, {
                    id: "multiple-choice",
                    icon: s.jsc,
                    leadingAccessory: { type: "icon", icon: s.jsc },
                    label: o.intl.string(o.t.ooKh3m),
                    action: () => (0, d.PV)(a.rX.MULTIPLE_CHOICE, t, c),
                }),
                u &&
                    (0, i.jsx)(s.Drp, {
                        id: "terms",
                        icon: s.B8Q,
                        leadingAccessory: { type: "icon", icon: s.B8Q },
                        label: o.intl.string(o.t["3pz9t3"]),
                        action: () => (0, d.PV)(a.rX.TERMS, t, c),
                    }),
            ],
        }),
    });
}
let x = function (e) {
    let { addFormField: t, guild: n, allowTerms: s } = e;
    return (0, i.jsx)(c.d, {
        text: o.intl.string(o.t.CoHdoG),
        tooltipText: o.intl.string(o.t.nsI4dU),
        onClick: (e) => {
            (0, l.jA)(e, (e) => (0, i.jsx)(u, { ...e, addFormField: t, guild: n, allowTerms: s }), {
                position: "top",
                align: "center",
            });
        },
    });
};
