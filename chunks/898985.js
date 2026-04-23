"use strict";
n.d(t, { _: () => d });
var r = n(64700),
    i = n(508425),
    s = n(559949),
    a = n(430571),
    o = n(864386),
    l = n(985018);
let u = {
        [i.z.SOLID]: o.default.OpWJ3f,
        [i.z.GRADIENT]: o.default["i9e/u1"],
        [i.z.GLOW]: o.default["Ra3/93"],
        [i.z.NEON]: o.default.x68b1F,
        [i.z.TOON]: o.default.otpeeM,
        [i.z.POP]: o.default.cjQOKb,
    },
    c = { [i.z.SOLID]: 3, [i.z.GRADIENT]: 2.5, [i.z.GLOW]: 2.5, [i.z.NEON]: 3, [i.z.TOON]: 3, [i.z.POP]: 3 };
function d(e) {
    let t = (0, a.A)(e);
    return r.useMemo(
        () => ({
            name: l.intl.string(u[e] ?? o.default.OpWJ3f),
            defaultColors: t,
            previewStyles: { fontId: s.x.DEFAULT, effectId: e, colors: t },
            minContrastRatio: c[e] ?? 3,
        }),
        [e, t],
    );
}
