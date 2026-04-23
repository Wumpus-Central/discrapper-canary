n.d(t, { _: () => c });
var i = n(627968);
n(64700);
var s = n(554146),
    l = n(882997),
    a = n(975571),
    r = n(916335),
    o = n(652215),
    d = n(985018),
    u = n(963133);
let c = () => {
    let e = a.A.getArticleURL(o.MVz.XBOX_CONNECTION);
    return (0, i.jsx)(r.Z, {
        title: d.intl.string(d.t["2okkZV"]),
        body: d.intl.format(d.t.OnERSS, { help_article: e }),
        img: (0, i.jsx)("img", { src: u, width: "auto", height: "45", alt: "" }),
        newIndicatorDismissibleContent: s.M.XBOX_ONE_WAY_RECONNECT,
        onClick: () => (0, l.A)({ platformType: o.fg2.XBOX, location: "Xbox two way upsell" }),
    });
};
