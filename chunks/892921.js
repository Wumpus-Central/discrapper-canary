var i = t(477900);
t(582128);
var l = t(165862),
    s = t(477782),
    r = t(565787),
    o = t(673185),
    a = t(916099),
    c = t(622629),
    d = t(442433),
    u = t(828208),
    m = t(513461),
    x = t(557420),
    h = t(797446),
    f = t(792996);
function v(e) {
    let { addFormField: n, onSelect: t, guild: x, allowTerms: v } = e;
    return (0, i.jsx)(l.W, {
        "data-menu-migrated": !0,
        navId: "add-questions",
        onClose: d.Z_,
        "aria-label": f.intl.string(f.t.liqwPJ),
        onSelect: t,
        children: (0, i.jsxs)(s.rX, {
            children: [
                (0, i.jsx)(s.Dr, {
                    id: "text-input",
                    icon: (0, r.k)(u.A),
                    leadingAccessory: { type: "icon", icon: (0, r.k)(u.A) },
                    label: f.intl.string(f.t.w6Q9wz),
                    action: () => (0, h.PV)(m.rX.TEXT_INPUT, n, x),
                }),
                (0, i.jsx)(s.Dr, {
                    id: "paragraph",
                    icon: o.ChannelListIcon,
                    leadingAccessory: { type: "icon", icon: o.ChannelListIcon },
                    label: f.intl.string(f.t.gG0JBN),
                    action: () => (0, h.PV)(m.rX.PARAGRAPH, n, x),
                }),
                (0, i.jsx)(s.Dr, {
                    id: "multiple-choice",
                    icon: a.ListBulletsIcon,
                    leadingAccessory: { type: "icon", icon: a.ListBulletsIcon },
                    label: f.intl.string(f.t.ooKh3m),
                    action: () => (0, h.PV)(m.rX.MULTIPLE_CHOICE, n, x),
                }),
                v &&
                    (0, i.jsx)(s.Dr, {
                        id: "terms",
                        icon: c.BookCheckIcon,
                        leadingAccessory: { type: "icon", icon: c.BookCheckIcon },
                        label: f.intl.string(f.t["3pz9t3"]),
                        action: () => (0, h.PV)(m.rX.TERMS, n, x),
                    }),
            ],
        }),
    });
}
t.d(
    n,
    {},
    {
        A: function (e) {
            let { addFormField: n, guild: t, allowTerms: l } = e;
            return (0, i.jsx)(x.d, {
                text: f.intl.string(f.t.CoHdoG),
                tooltipText: f.intl.string(f.t.nsI4dU),
                onClick: function (e) {
                    (0, d.jA)(e, (e) => (0, i.jsx)(v, { ...e, addFormField: n, guild: t, allowTerms: l }), {
                        position: "top",
                        align: "center",
                    });
                },
            });
        },
        AddQuestionsContextMenu: v,
    },
);
