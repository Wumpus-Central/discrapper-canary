e.d(n, { default: () => d });
var i = e(477900);
e(582128);
var a = e(189213),
    s = e(28863),
    r = e(975571),
    l = e(40449),
    o = e(876891),
    c = e(375708);
function d(t) {
    let { transitionState: n, onClose: e, teenAgeRange: d } = t;
    return (0, i.jsx)(a.a, {
        transitionState: n,
        onClose: e,
        title: c.intl.string(o.default.AA3xYb),
        subtitle: c.intl.format(o.default["2+f8w1"], {
            teenAgeRange: d ?? l.CH,
            contentAndSettingsHook: (t, n) =>
                (0, i.jsx)(s.Anchor, { href: r.A.getArticleURL(c.intl.string(o.default.agiNYw)), children: t }, n),
        }),
        actions: [{ text: c.intl.string(c.t["NX+WJN"]), onClick: e }],
    });
}
