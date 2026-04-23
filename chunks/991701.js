"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    l = n(97808),
    u = n(654107),
    c = n(831209),
    d = n(458024),
    _ = n(543699),
    f = n(950191),
    p = n(195898),
    h = n(576622),
    E = n(652215),
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
        v = (0, u.Ay)(N, o.A.unsafe_rawColors.PRIMARY_800.css),
        C = (0, f.Ay)(A ?? E.dJq, I),
        O = (0, _.tM)(C?.themeColors?.[0]) ?? E.NJ8.DARK,
        { profileThemeStyle: R, profileThemeClassName: b } = (0, p.A)({
            theme: O,
            themeType: m.d.VIDEO_TILE_BACKGROUND,
            primaryColor: C?.themeColors?.[0] ?? null,
            secondaryColor: C?.themeColors?.[1] ?? null,
        }),
        D = (0, d.Ay)("VideoBackground-web"),
        L = C?.themeColors?.[0] != null && C?.themeColors?.[1] != null,
        w = D && L;
    if (
        (i.useEffect(() => {
            null != A && D && (0, h.A)(A, void 0, { guildId: I, dispatchWait: !0 });
        }, [D, A, I]),
        null == n)
    )
        return null;
    let M = (0, r.jsx)(l.eu, { className: g.R, src: n, ...y }),
        P = { ...t, backgroundColor: v };
    return (0, r.jsx)("div", {
        style: w ? { ...t, ...R } : { ...P },
        className: a()(g.T, { [b]: w }),
        children: T ? (0, r.jsx)(c.A, { shouldAnimate: S, children: M }) : M,
    });
};
