n.d(t, { default: () => d });
var i = n(627968),
    l = n(64700),
    s = n(189213),
    c = n(167417),
    a = n(975571),
    r = n(652215),
    o = n(375708);
function d(e) {
    let { modalProps: t, onConfirm: n } = e,
        [d, u] = l.useState({
            Account: { value: "Account", label: o.intl.string(o.t["rfe/x8"]), checked: !1 },
            Analytics: { value: "Analytics", label: o.intl.string(o.t["j+d6RN"]), checked: !1 },
            Activities: { value: "Activities", label: o.intl.string(o.t.KO88BS), checked: !1 },
            Ads: { value: "Ads", label: o.intl.string(o.t.wb7QJ3), checked: !1 },
            Messages: { value: "Messages", label: o.intl.string(o.t["0dO1t+"]), checked: !1 },
            Servers: { value: "Servers", label: o.intl.string(o.t.JN9c36), checked: !1 },
            Zendesk: { value: "Zendesk", label: o.intl.string(o.t.yaLeEB), checked: !1 },
        }),
        [k, h] = l.useState(!1),
        g = Object.values(d).some((e) => e.checked);
    return (0, i.jsx)(s.Modal, {
        title: o.intl.string(o.t.jxXMEz),
        subtitle: o.intl.format(o.t.fSv59b, { helpdeskArticle: a.A.getArticleURL(r.MVz.GDPR_PACKAGE_CONTENTS) }),
        transitionState: t.transitionState,
        onClose: t.onClose,
        actions: [
            {
                text: o.intl.string(o.t.jpVjsg),
                onClick: function () {
                    t.onClose();
                },
                variant: "secondary",
            },
            {
                text: o.intl.string(o.t.NYgNg9),
                onClick: function () {
                    if (!g) return void h(!0);
                    let e = Object.keys(d)
                        .filter((e) => d[e].checked)
                        .map((e) => d[e].value);
                    n?.(e), t.onClose();
                },
                variant: "primary",
            },
        ],
        children: (0, i.jsx)(c.$, {
            selectedValues: Object.keys(d).filter((e) => d[e].checked),
            options: Object.keys(d).map((e) => {
                let { label: t } = d[e];
                return { label: t, value: e };
            }),
            onChange: function (e) {
                u((t) => {
                    let n = { ...t };
                    return (
                        Object.keys(n).forEach((e) => {
                            n[e] = { ...n[e], checked: !1 };
                        }),
                        e.forEach((e) => {
                            n[e] = { ...n[e], checked: !0 };
                        }),
                        n
                    );
                }),
                    e.length > 0 && k && h(!1);
            },
            errorMessage: k ? o.intl.string(o.t.W1Rw3D) : void 0,
        }),
    });
}
