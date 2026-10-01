n.d(t, { J: () => i, _: () => d });
var l = n(582128),
    s = n(508425),
    a = n(559949),
    r = n(430571),
    o = n(701974),
    u = n(375708);
let i = {
        [s.z.SOLID]: o.default.OpWJ3f,
        [s.z.GRADIENT]: o.default["i9e/u1"],
        [s.z.NEON]: o.default.x68b1F,
        [s.z.TOON]: o.default.otpeeM,
        [s.z.POP]: o.default.cjQOKb,
        [s.z.GUMMY]: o.default.x9Gtie,
        [s.z.PRISM]: o.default["/M7psm"],
    },
    c = {
        [s.z.SOLID]: 3,
        [s.z.GRADIENT]: 2.5,
        [s.z.GLOW]: 2.5,
        [s.z.PRISM]: 2.5,
        [s.z.NEON]: 3,
        [s.z.TOON]: 3,
        [s.z.POP]: 3,
        [s.z.GUMMY]: 3,
    };
function d(e) {
    let t = (0, r.A)()[e];
    return l.useMemo(
        () => ({
            name: u.intl.string(i[e] ?? o.default.OpWJ3f),
            defaultColors: t,
            previewStyles: { fontId: a.x.DEFAULT, effectId: e, colors: t },
            minContrastRatio: c[e] ?? 3,
        }),
        [e, t],
    );
}
