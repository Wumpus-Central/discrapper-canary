let l;
n.d(t, { A: () => p });
var r = n(440745),
    i = n.n(r),
    a = n(661531),
    s = n(702841),
    o = n(775602),
    u = n(543699);
let d = (e, t) => {
        let n = e.toRgb(),
            l = t.toRgb(),
            [r, a, s] = (0, u.tJ)([n.r, n.g, n.b], [l.r, l.g, l.b], 50);
        return i()({ r, g: a, b: s });
    },
    c = (e, t) => {
        let { h: n, s: l, l: r } = e.toHsl();
        return i()({ h: n, s: l * t, l: r });
    },
    C = i()(a.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex()),
    p =
        ((l = { dark: i()(a.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex()), light: C }),
        (e) => {
            let t = (0, s.bG)([o.A], () => o.A.saturation);
            if (null == e) return {};
            let n = {
                backgroundColors: ((e, t) => {
                    if (0 !== t.length)
                        return 1 === t.length
                            ? {
                                  primary: t[0],
                                  secondary: t[0],
                                  border: t[0].setAlpha(0.4),
                                  label: t[0].isLight() ? e.dark : e.light,
                              }
                            : {
                                  primary: t[0],
                                  secondary: t[1],
                                  tertiary: t.length > 2 ? t[2] : void 0,
                                  border: d(t[0], t[1]).setAlpha(0.4),
                                  label: d(t[0], t[1]).isLight() ? e.dark : e.light,
                              };
                })(l, e.backgroundColors),
                buttonColors: ((e, t) => {
                    if (0 !== t.length)
                        return 1 === t.length
                            ? { primary: t[0], secondary: t[0], text: t[0].isLight() ? e.dark : e.light }
                            : { primary: t[0], secondary: t[1], text: d(t[0], t[1]).isLight() ? e.dark : e.light };
                })(l, e.buttonColors),
                confettiColors: e.confettiColors,
            };
            return 1 === t
                ? { ...n }
                : {
                      backgroundColors:
                          null != n.backgroundColors
                              ? {
                                    primary: c(n.backgroundColors.primary, t),
                                    secondary: c(n.backgroundColors.secondary, t),
                                    tertiary:
                                        null != n.backgroundColors.tertiary
                                            ? c(n.backgroundColors.tertiary, t)
                                            : void 0,
                                    border: c(n.backgroundColors.border, t),
                                    label: c(n.backgroundColors.label, t),
                                }
                              : void 0,
                      buttonColors:
                          null != n.buttonColors
                              ? {
                                    primary: c(n.buttonColors.primary, t),
                                    secondary: c(n.buttonColors.secondary, t),
                                    text: c(n.buttonColors.text, t),
                                }
                              : void 0,
                      confettiColors: n.confettiColors.map((e) => c(e, t)),
                  };
        });
