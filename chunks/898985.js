"use strict";
n.d(t, { J: () => u, _: () => d });
var i = n(64700),
    r = n(508425),
    s = n(559949),
    a = n(430571),
    o = n(864386),
    l = n(375708);
let u = {
        [r.z.SOLID]: o.default.OpWJ3f,
        [r.z.GRADIENT]: o.default["i9e/u1"],
        [r.z.NEON]: o.default.x68b1F,
        [r.z.TOON]: o.default.otpeeM,
        [r.z.POP]: o.default.cjQOKb,
        [r.z.GUMMY]: o.default.x9Gtie,
        [r.z.PRISM]: o.default["/M7psm"],
    },
    c = {
        [r.z.SOLID]: 3,
        [r.z.GRADIENT]: 2.5,
        [r.z.GLOW]: 2.5,
        [r.z.PRISM]: 2.5,
        [r.z.NEON]: 3,
        [r.z.TOON]: 3,
        [r.z.POP]: 3,
        [r.z.GUMMY]: 3,
    };
function d(e) {
    let t = (0, a.A)()[e];
    return i.useMemo(
        () => ({
            name: l.intl.string(u[e] ?? o.default.OpWJ3f),
            defaultColors: t,
            previewStyles: { fontId: s.x.DEFAULT, effectId: e, colors: t },
            minContrastRatio: c[e] ?? 3,
        }),
        [e, t],
    );
}
