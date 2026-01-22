n.d(t, {
    H: () => d,
});
var r = n(64700),
    i = n(310784),
    a = n.n(i),
    s = n(508425),
    o = n(311907),
    l = n(775602),
    c = n(998304),
    u = n(898985);

function d(e) {
    var t;
    let { displayNameStyles: n, backgroundColor: i } = e,
        d = (0, o.bG)([l.A], () => (l.A.desaturateUserColors ? l.A.saturation : 1)),
        f = null != (t = null == n ? void 0 : n.effectId) ? t : s.z.SOLID,
        p = (0, u._)(f);
    return r.useMemo(
        () =>
            null == n
                ? []
                : n.colors.map((e) =>
                      (0, c.lZ)({
                          foreground: a()(e),
                          background: f === s.z.TOON ? a()("#333") : a()(i),
                          ratio: p.minContrastRatio,
                          saturationFactor: d,
                      }).hex(),
                  ),
        [n, f, p.minContrastRatio, d, i],
    );
}
