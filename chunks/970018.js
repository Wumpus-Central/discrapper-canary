l.d(t, { default: () => o });
var s = l(627968),
    i = l(64700),
    n = l(189213),
    c = l(167417),
    a = l(975571),
    r = l(652215),
    d = l(375708);
function o(e) {
    let { modalProps: t, onConfirm: l } = e,
        [o, u] = i.useState({
            Account: { value: "Account", label: d.intl.string(d.t["rfe/x8"]), checked: !1 },
            Analytics: { value: "Analytics", label: d.intl.string(d.t["j+d6RN"]), checked: !1 },
            Activities: { value: "Activities", label: d.intl.string(d.t.KO88BS), checked: !1 },
            Ads: { value: "Ads", label: d.intl.string(d.t.wb7QJ3), checked: !1 },
            Messages: { value: "Messages", label: d.intl.string(d.t["0dO1t+"]), checked: !1 },
            Servers: { value: "Servers", label: d.intl.string(d.t.JN9c36), checked: !1 },
            Zendesk: { value: "Zendesk", label: d.intl.string(d.t.yaLeEB), checked: !1 },
        }),
        [k, h] = i.useState(!1),
        g = Object.values(o).some((e) => e.checked);
    return (0, s.jsx)(n.Modal, {
        title: d.intl.string(d.t.jxXMEz),
        subtitle: d.intl.format(d.t.fSv59b, { helpdeskArticle: a.A.getArticleURL(r.MVz.GDPR_PACKAGE_CONTENTS) }),
        transitionState: t.transitionState,
        onClose: t.onClose,
        actions: [
            {
                text: d.intl.string(d.t.jpVjsg),
                onClick: () => {
                    t.onClose();
                },
                variant: "secondary",
            },
            {
                text: d.intl.string(d.t.NYgNg9),
                onClick: () => {
                    if (!g) return void h(!0);
                    let e = Object.keys(o)
                        .filter((e) => o[e].checked)
                        .map((e) => o[e].value);
                    l?.(e), t.onClose();
                },
                variant: "primary",
            },
        ],
        children: (0, s.jsx)(c.$, {
            selectedValues: Object.keys(o).filter((e) => o[e].checked),
            options: Object.keys(o).map((e) => {
                let { label: t } = o[e];
                return { label: t, value: e };
            }),
            onChange: (e) => {
                u((t) => {
                    let l = { ...t };
                    return (
                        Object.keys(l).forEach((e) => {
                            l[e] = { ...l[e], checked: !1 };
                        }),
                        e.forEach((e) => {
                            l[e] = { ...l[e], checked: !0 };
                        }),
                        l
                    );
                }),
                    e.length > 0 && k && h(!1);
            },
            errorMessage: k ? d.intl.string(d.t.W1Rw3D) : void 0,
        }),
    });
}
