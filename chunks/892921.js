n.d(t, { A: () => f, AddQuestionsContextMenu: () => j });
var i = n(627968);
n(64700);
var a = n(861672),
    r = n(477782),
    l = n(565787),
    s = n(673185),
    o = n(916099),
    d = n(622629),
    c = n(442433),
    u = n(828208),
    x = n(513461),
    h = n(557420),
    v = n(322388),
    m = n(985018);
function j(e) {
    let { addFormField: t, onSelect: n, guild: h, allowTerms: j } = e;
    return (0, i.jsx)(a.W, {
        "data-menu-migrated": !0,
        navId: "add-questions",
        onClose: c.Z_,
        "aria-label": m.intl.string(m.t.liqwPJ),
        onSelect: n,
        children: (0, i.jsxs)(r.rX, {
            children: [
                (0, i.jsx)(r.Dr, {
                    id: "text-input",
                    icon: (0, l.k)(u.A),
                    leadingAccessory: { type: "icon", icon: (0, l.k)(u.A) },
                    label: m.intl.string(m.t.w6Q9wz),
                    action: () => (0, v.PV)(x.rX.TEXT_INPUT, t, h),
                }),
                (0, i.jsx)(r.Dr, {
                    id: "paragraph",
                    icon: s.$,
                    leadingAccessory: { type: "icon", icon: s.$ },
                    label: m.intl.string(m.t.gG0JBN),
                    action: () => (0, v.PV)(x.rX.PARAGRAPH, t, h),
                }),
                (0, i.jsx)(r.Dr, {
                    id: "multiple-choice",
                    icon: o.j,
                    leadingAccessory: { type: "icon", icon: o.j },
                    label: m.intl.string(m.t.ooKh3m),
                    action: () => (0, v.PV)(x.rX.MULTIPLE_CHOICE, t, h),
                }),
                j &&
                    (0, i.jsx)(r.Dr, {
                        id: "terms",
                        icon: d.B,
                        leadingAccessory: { type: "icon", icon: d.B },
                        label: m.intl.string(m.t["3pz9t3"]),
                        action: () => (0, v.PV)(x.rX.TERMS, t, h),
                    }),
            ],
        }),
    });
}
let f = function (e) {
    let { addFormField: t, guild: n, allowTerms: a } = e;
    return (0, i.jsx)(h.d, {
        text: m.intl.string(m.t.CoHdoG),
        tooltipText: m.intl.string(m.t.nsI4dU),
        onClick: (e) => {
            (0, c.jA)(e, (e) => (0, i.jsx)(j, { ...e, addFormField: t, guild: n, allowTerms: a }), {
                position: "top",
                align: "center",
            });
        },
    });
};
