"use strict";
n.d(t, { H: () => d });
var r = n(64700),
    i = n(310784),
    s = n.n(i),
    a = n(508425),
    o = n(311907),
    l = n(775602),
    u = n(998304),
    c = n(898985);
function d(e) {
    let { displayNameStyles: t, backgroundColor: n } = e,
        i = (0, o.bG)([l.A], () => (l.A.desaturateUserColors ? l.A.saturation : 1)),
        d = t?.effectId ?? a.z.SOLID,
        _ = (0, c._)(d);
    return r.useMemo(
        () =>
            null == t
                ? []
                : t.colors.map((e) =>
                      (0, u.lZ)({
                          foreground: s()(e),
                          background: d === a.z.TOON ? s()("#333") : s()(n),
                          ratio: _.minContrastRatio,
                          saturationFactor: i,
                      }).hex(),
                  ),
        [t, d, _.minContrastRatio, i, n],
    );
}
