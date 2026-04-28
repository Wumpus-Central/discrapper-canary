let l;
t.d(o, { A: () => c });
var e = t(440745),
    a = t.n(e),
    s = t(661531),
    n = t(702841),
    i = t(775602),
    d = t(543699);
let u = (r, o) => {
        let t = r.toRgb(),
            l = o.toRgb(),
            [e, s, n] = (0, d.tJ)([t.r, t.g, t.b], [l.r, l.g, l.b], 50);
        return a()({ r: e, g: s, b: n });
    },
    b = (r, o) => {
        let { h: t, s: l, l: e } = r.toHsl();
        return a()({ h: t, s: l * o, l: e });
    },
    g = a()(s.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex()),
    c =
        ((l = { dark: a()(s.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex()), light: g }),
        (r) => {
            let o = (0, n.bG)([i.A], () => i.A.saturation);
            if (null == r) return {};
            let t = {
                backgroundColors: ((r, o) => {
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
                                  border: u(o[0], o[1]).setAlpha(0.4),
                                  label: u(o[0], o[1]).isLight() ? r.dark : r.light,
                              };
                })(l, r.backgroundColors),
                buttonColors: ((r, o) => {
                    if (0 !== o.length)
                        return 1 === o.length
                            ? { primary: o[0], secondary: o[0], text: o[0].isLight() ? r.dark : r.light }
                            : { primary: o[0], secondary: o[1], text: u(o[0], o[1]).isLight() ? r.dark : r.light };
                })(l, r.buttonColors),
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
