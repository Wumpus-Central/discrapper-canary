t.d(o, { A: () => g });
var n,
    l = t(440745),
    a = t.n(l),
    e = t(661531),
    s = t(702841),
    i = t(775602),
    u = t(543699);
function d(r, o) {
    let t = r.toRgb(),
        n = o.toRgb(),
        [l, e, s] = (0, u.tJ)([t.r, t.g, t.b], [n.r, n.g, n.b], 50);
    return a()({ r: l, g: e, b: s });
}
function b(r, o) {
    let { h: t, s: n, l } = r.toHsl();
    return a()({ h: t, s: n * o, l });
}
let c = a()(e.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex()),
    g =
        ((n = { dark: a()(e.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex()), light: c }),
        (r) => {
            let o = (0, s.bG)([i.Ay], () => i.Ay.saturation);
            if (null == r) return {};
            let t = {
                backgroundColors: (function (r, o) {
                    if (0 !== o.length)
                        return 1 === o.length
                            ? {
                                  primary: o[0],
                                  secondary: o[0],
                                  border: o[0].setAlpha(0.4),
                                  label: o[0].isLight() ? r.dark : r.light,
                              }
                            : {
                                  primary: o[0],
                                  secondary: o[1],
                                  tertiary: o.length > 2 ? o[2] : void 0,
                                  border: d(o[0], o[1]).setAlpha(0.4),
                                  label: d(o[0], o[1]).isLight() ? r.dark : r.light,
                              };
                })(n, r.backgroundColors),
                buttonColors: (function (r, o) {
                    if (0 !== o.length)
                        return 1 === o.length
                            ? { primary: o[0], secondary: o[0], text: o[0].isLight() ? r.dark : r.light }
                            : { primary: o[0], secondary: o[1], text: d(o[0], o[1]).isLight() ? r.dark : r.light };
                })(n, r.buttonColors),
                confettiColors: r.confettiColors,
            };
            return 1 === o
                ? { ...t }
                : {
                      backgroundColors:
                          null != t.backgroundColors
                              ? {
                                    primary: b(t.backgroundColors.primary, o),
                                    secondary: b(t.backgroundColors.secondary, o),
                                    tertiary:
                                        null != t.backgroundColors.tertiary
                                            ? b(t.backgroundColors.tertiary, o)
                                            : void 0,
                                    border: b(t.backgroundColors.border, o),
                                    label: b(t.backgroundColors.label, o),
                                }
                              : void 0,
                      buttonColors:
                          null != t.buttonColors
                              ? {
                                    primary: b(t.buttonColors.primary, o),
                                    secondary: b(t.buttonColors.secondary, o),
                                    text: b(t.buttonColors.text, o),
                                }
                              : void 0,
                      confettiColors: t.confettiColors.map((r) => b(r, o)),
                  };
        });
