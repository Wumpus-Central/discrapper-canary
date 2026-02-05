"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(397927),
    u = n(654107),
    c = n(831209),
    d = n(543699),
    _ = n(950191),
    f = n(195898),
    p = n(576622),
    h = n(155886),
    m = n(652215),
    g = n(996988),
    E = n(346170);
let A = function (e) {
    let {
            style: t,
            src: n,
            backgroundSrc: a,
            userId: A,
            guildId: I,
            pulseSpeakingIndicator: T = !1,
            speaking: y = !1,
            ...S
        } = e,
        v = a ?? n,
        C = (0, u.Ay)(v, o.A.unsafe_rawColors.PRIMARY_800.css),
        b = (0, _.Ay)(A ?? m.dJq, I),
        N = (0, d.tM)(b?.themeColors?.[0]) ?? m.NJ8.DARK,
        { profileThemeStyle: R, profileThemeClassName: O } = (0, f.A)({
            theme: N,
            themeType: g.d.VIDEO_TILE_BACKGROUND,
            primaryColor: b?.themeColors?.[0] ?? null,
            secondaryColor: b?.themeColors?.[1] ?? null,
        }),
        { useProfileColors: D } = (0, h.a5)("VideoBackground-web");
    if (
        (i.useEffect(() => {
            null != A && D && (0, p.A)(A, void 0, { guildId: I, dispatchWait: !0 });
        }, [D, A, I]),
        null == n)
    )
        return null;
    let L = (0, r.jsx)(l.euF, { className: E.R, src: n, ...S }),
        w = { ...t, backgroundColor: C };
    return (0, r.jsx)("div", {
        style: D ? { ...t, ...R } : { ...w },
        className: s()(E.T, { [O]: D }),
        children: T ? (0, r.jsx)(c.A, { shouldAnimate: y, children: L }) : L,
    });
};
