n.d(t, { A: () => f, AddQuestionsContextMenu: () => v });
var i = n(627968);
n(64700);
var a = n(550079),
    r = n(477782),
    s = n(565787),
    l = n(673185),
    o = n(916099),
    c = n(622629),
    d = n(442433),
    u = n(828208),
    x = n(513461),
    h = n(557420),
    m = n(54948),
    j = n(985018);
function v(e) {
    let { addFormField: t, onSelect: n, guild: h, allowTerms: v } = e;
    return (0, i.jsx)(a.W, {
        "data-menu-migrated": !0,
        navId: "add-questions",
        onClose: d.Z_,
        "aria-label": j.intl.string(j.t.liqwPJ),
        onSelect: n,
        children: (0, i.jsxs)(r.rX, {
            children: [
                (0, i.jsx)(r.Dr, {
                    id: "text-input",
                    icon: (0, s.k)(u.A),
                    leadingAccessory: { type: "icon", icon: (0, s.k)(u.A) },
                    label: j.intl.string(j.t.w6Q9wz),
                    action: () => (0, m.PV)(x.rX.TEXT_INPUT, t, h),
                }),
                (0, i.jsx)(r.Dr, {
                    id: "paragraph",
                    icon: l.$,
                    leadingAccessory: { type: "icon", icon: l.$ },
                    label: j.intl.string(j.t.gG0JBN),
                    action: () => (0, m.PV)(x.rX.PARAGRAPH, t, h),
                }),
                (0, i.jsx)(r.Dr, {
                    id: "multiple-choice",
                    icon: o.j,
                    leadingAccessory: { type: "icon", icon: o.j },
                    label: j.intl.string(j.t.ooKh3m),
                    action: () => (0, m.PV)(x.rX.MULTIPLE_CHOICE, t, h),
                }),
                v &&
                    (0, i.jsx)(r.Dr, {
                        id: "terms",
                        icon: c.B,
                        leadingAccessory: { type: "icon", icon: c.B },
                        label: j.intl.string(j.t["3pz9t3"]),
                        action: () => (0, m.PV)(x.rX.TERMS, t, h),
                    }),
            ],
        }),
    });
}
let f = function (e) {
    let { addFormField: t, guild: n, allowTerms: a } = e;
    return (0, i.jsx)(h.d, {
        text: j.intl.string(j.t.CoHdoG),
        tooltipText: j.intl.string(j.t.nsI4dU),
        onClick: (e) => {
            (0, d.jA)(e, (e) => (0, i.jsx)(v, { ...e, addFormField: t, guild: n, allowTerms: a }), {
                position: "top",
                align: "center",
            });
        },
    });
};
