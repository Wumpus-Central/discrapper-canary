"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(97808),
    u = n(654107),
    d = n(831209),
    c = n(458024),
    _ = n(543699),
    f = n(950191),
    E = n(195898),
    h = n(576622),
    p = n(652215),
    m = n(996988),
    g = n(564548);
let A = function (e) {
    let {
            style: t,
            src: n,
            backgroundSrc: s,
            userId: A,
            guildId: I,
            pulseSpeakingIndicator: T = !1,
            speaking: S = !1,
            ...y
        } = e,
        N = s ?? n,
        O = (0, u.Ay)(N, o.A.unsafe_rawColors.PRIMARY_800.css),
        R = (0, f.Ay)(A ?? p.dJq, I),
        v = (0, _.tM)(R?.themeColors?.[0]) ?? p.NJ8.DARK,
        { profileThemeStyle: C, profileThemeClassName: b } = (0, E.A)({
            theme: v,
            themeType: m.d.VIDEO_TILE_BACKGROUND,
            primaryColor: R?.themeColors?.[0] ?? null,
            secondaryColor: R?.themeColors?.[1] ?? null,
        }),
        D = (0, c.Ay)("VideoBackground-web"),
        L = R?.themeColors?.[0] != null && R?.themeColors?.[1] != null,
        w = D && L;
    if (
        (i.useEffect(() => {
            null != A && D && (0, h.A)(A, void 0, { guildId: I, dispatchWait: !0 });
        }, [D, A, I]),
        null == n)
    )
        return null;
    let M = (0, r.jsx)(l.eu, { className: g.R, src: n, ...y }),
        P = { ...t, backgroundColor: O };
    return (0, r.jsx)("div", {
        style: w ? { ...t, ...C } : { ...P },
        className: a()(g.T, { [b]: w }),
        children: T ? (0, r.jsx)(d.A, { shouldAnimate: S, children: M }) : M,
    });
};
