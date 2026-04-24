let o;
r.d(e, { A: () => _ });
var l = r(440745),
    n = r.n(l),
    a = r(661531),
    i = r(702841),
    s = r(775602),
    u = r(543699);
let d = (t, e) => {
        let r = t.toRgb(),
            o = e.toRgb(),
            [l, a, i] = (0, u.tJ)([r.r, r.g, r.b], [o.r, o.g, o.b], 50);
        return n()({ r: l, g: a, b: i });
    },
    c = (t, e) => {
        let { h: r, s: o, l } = t.toHsl();
        return n()({ h: r, s: o * e, l });
    },
    E = n()(a.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex()),
    _ =
        ((o = { dark: n()(a.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex()), light: E }),
        (t) => {
            let e = (0, i.bG)([s.A], () => s.A.saturation);
            if (null == t) return {};
            let r = {
                backgroundColors: ((t, e) => {
                    if (0 !== e.length)
                        return 1 === e.length
                            ? {
                                  primary: e[0],
                                  secondary: e[0],
                                  border: e[0].setAlpha(0.4),
                                  label: e[0].isLight() ? t.dark : t.light,
                              }
                            : {
                                  primary: e[0],
                                  secondary: e[1],
                                  tertiary: e.length > 2 ? e[2] : void 0,
                                  border: d(e[0], e[1]).setAlpha(0.4),
                                  label: d(e[0], e[1]).isLight() ? t.dark : t.light,
                              };
                })(o, t.backgroundColors),
                buttonColors: ((t, e) => {
                    if (0 !== e.length)
                        return 1 === e.length
                            ? { primary: e[0], secondary: e[0], text: e[0].isLight() ? t.dark : t.light }
                            : { primary: e[0], secondary: e[1], text: d(e[0], e[1]).isLight() ? t.dark : t.light };
                })(o, t.buttonColors),
                confettiColors: t.confettiColors,
            };
            return 1 === e
                ? { ...r }
                : {
                      backgroundColors:
                          null != r.backgroundColors
                              ? {
                                    primary: c(r.backgroundColors.primary, e),
                                    secondary: c(r.backgroundColors.secondary, e),
                                    tertiary:
                                        null != r.backgroundColors.tertiary
                                            ? c(r.backgroundColors.tertiary, e)
                                            : void 0,
                                    border: c(r.backgroundColors.border, e),
                                    label: c(r.backgroundColors.label, e),
                                }
                              : void 0,
                      buttonColors:
                          null != r.buttonColors
                              ? {
                                    primary: c(r.buttonColors.primary, e),
                                    secondary: c(r.buttonColors.secondary, e),
                                    text: c(r.buttonColors.text, e),
                                }
                              : void 0,
                      confettiColors: r.confettiColors.map((t) => c(t, e)),
                  };
        });
