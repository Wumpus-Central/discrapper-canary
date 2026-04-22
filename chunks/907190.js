n.d(i, { default: () => o });
var e = n(627968);
n(64700);
var r = n(834730),
    a = n(886722),
    l = n(975571),
    s = n(652215),
    d = n(985018);
function o(t) {
    let { listing: i, transitionState: n, onClose: o, ...u } = t;
    return (0, e.jsx)(a.A, {
        sku_id: i.id,
        sku_name: i.name,
        guild_id: i.guild_id,
        header: d.intl.formatToPlainString(d.t.avKMZo, { listingName: i.name }),
        transitionState: n,
        onClose: o,
        ...u,
        children: (0, e.jsx)(r.E, {
            variant: "text-md/normal",
            children: d.intl.format(d.t.jkvpmk, {
                listingName: i.name,
                monetizationTermsUrl: l.A.getArticleURL(s.MVz.CREATOR_TERMS),
                communityGuidelinesUrl: s.X7G.GUIDELINES,
            }),
        }),
    });
}
