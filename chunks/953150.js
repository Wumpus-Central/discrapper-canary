"use strict";
n.d(t, { A: () => h });
var i,
    r = n(440745),
    s = n.n(r),
    a = n(661531),
    o = n(702841),
    l = n(775602),
    u = n(543699);
let c = (e, t) => {
    let n = e.toRgb(),
        i = t.toRgb(),
        [r, a, o] = (0, u.tJ)([n.r, n.g, n.b], [i.r, i.g, i.b], 50);
    return s()({ r, g: a, b: o });
};
function d(e, t) {
    let { h: n, s: i, l: r } = e.toHsl();
    return s()({ h: n, s: i * t, l: r });
}
let _ = s()(a.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex()),
    h =
        ((i = { dark: s()(a.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex()), light: _ }),
        (e) => {
            let t = (0, o.bG)([l.Ay], () => l.Ay.saturation);
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
                                  border: c(t[0], t[1]).setAlpha(0.4),
                                  label: c(t[0], t[1]).isLight() ? e.dark : e.light,
                              };
                })(i, e.backgroundColors),
                buttonColors: (function (e, t) {
                    if (0 !== t.length)
                        return 1 === t.length
                            ? { primary: t[0], secondary: t[0], text: t[0].isLight() ? e.dark : e.light }
                            : { primary: t[0], secondary: t[1], text: c(t[0], t[1]).isLight() ? e.dark : e.light };
                })(i, e.buttonColors),
                confettiColors: e.confettiColors,
            };
            return 1 === t
                ? { ...n }
                : {
                      backgroundColors:
                          null != n.backgroundColors
                              ? {
                                    primary: d(n.backgroundColors.primary, t),
                                    secondary: d(n.backgroundColors.secondary, t),
                                    tertiary:
                                        null != n.backgroundColors.tertiary
                                            ? d(n.backgroundColors.tertiary, t)
                                            : void 0,
                                    border: d(n.backgroundColors.border, t),
                                    label: d(n.backgroundColors.label, t),
                                }
                              : void 0,
                      buttonColors:
                          null != n.buttonColors
                              ? {
                                    primary: d(n.buttonColors.primary, t),
                                    secondary: d(n.buttonColors.secondary, t),
                                    text: d(n.buttonColors.text, t),
                                }
                              : void 0,
                      confettiColors: n.confettiColors.map((e) => d(e, t)),
                  };
        });
