g.d(t, { S: () => h });
var v = g(54381);
g(473749);
var e = g(172751),
    r = g(510918),
    f = g(131085),
    B = g(948023);
function h(A) {
    let t = null === A.tag || 0 === A.tag.length ? "WUMP" : A.tag;
    return (0, v.jsx)("div", {
        className: B.badgeContainer,
        children: (0, v.jsx)(e.m0, {
            guildId: A.guildId,
            textClassName: B.tagText,
            guildTag: t,
            guildBadge:
                "string" == typeof A.badge
                    ? A.badge
                    : (0, v.jsx)(r.v, {
                          className: B.badgePreview,
                          badge: A.badge,
                          width: f.Gg.SIZE_12,
                          height: f.Gg.SIZE_12,
                          primaryTintColor: A.primaryColor,
                          secondaryTintColor: A.secondaryColor,
                      }),
        }),
    });
}
