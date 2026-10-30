l.d(t, { J: () => c, _: () => d });
var n = l(582128),
    s = l(508425),
    a = l(559949),
    r = l(430571),
    o = l(872859),
    u = l(105292);
let c = {
        [s.z.SOLID]: o.default.OpWJ3f,
        [s.z.GRADIENT]: o.default["i9e/u1"],
        [s.z.NEON]: o.default.x68b1F,
        [s.z.TOON]: o.default.otpeeM,
        [s.z.POP]: o.default.cjQOKb,
        [s.z.GUMMY]: o.default.x9Gtie,
        [s.z.PRISM]: o.default["/M7psm"],
    },
    i = {
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
    return n.useMemo(
        () => ({
            name: u.intl.string(c[e] ?? o.default.OpWJ3f),
            defaultColors: t,
            previewStyles: { fontId: a.x.DEFAULT, effectId: e, colors: t },
            minContrastRatio: i[e] ?? 3,
        }),
        [e, t],
    );
}
