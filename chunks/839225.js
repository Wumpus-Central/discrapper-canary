n.d(e, { default: () => d });
var i = n(627968);
n(64700);
var o = n(17928),
    l = n(366010),
    a = n(736653),
    s = n(832163),
    r = n(533562),
    u = n(971690);
function d(t) {
    let e = (0, o.bG)([s.A], () => s.A.getConfig()),
        n = (0, o.bG)([s.A], () => s.A.getAnnouncementModalContentConfig()),
        d = (0, r.W)() ?? n?.applicationId,
        b = (0, a.Ay)(),
        c = e?.announcementModalConfig?.version ?? 0;
    if (0 === c) return null;
    let g = (0, l.M)(b) ? (n?.darkThemeLogoUrl ?? "") : (n?.lightThemeLogoUrl ?? ""),
        p = n?.backgroundUrl ?? "",
        f = n?.titles ?? [],
        h = n?.subtitle ?? "",
        k = n?.features?.map((t) => ({ assetUrl: t.assetUrl, title: t.title, subtitle: t.subtitle })) ?? [],
        A = n?.buttonText ?? "";
    return (0, i.jsx)(u.A, {
        ...t,
        version: c,
        applicationId: d,
        logo: g,
        backgroundImage: p,
        titles: f,
        subtitle: h,
        features: k,
        buttonText: A,
    });
}
