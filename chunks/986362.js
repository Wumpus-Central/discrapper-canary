n.d(i, { default: () => c });
var e = n(477900);
n(582128);
var s = n(189213),
    a = n(28863),
    l = n(975571),
    r = n(876891),
    o = n(375708);
function c(t) {
    let { transitionState: i, onClose: n } = t;
    return (0, e.jsx)(s.Modal, {
        transitionState: i,
        onClose: n,
        title: o.intl.string(r.default.AA3xYb),
        subtitle: o.intl.format(r.default["2+f8w1"], {
            contentAndSettingsHook: (t, i) =>
                (0, e.jsx)(a.Anchor, { href: l.A.getArticleURL(o.intl.string(r.default.agiNYw)), children: t }, i),
        }),
        actions: [{ text: o.intl.string(o.t["NX+WJN"]), onClick: n }],
    });
}
