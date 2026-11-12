var n = s(582128),
    l = s(508425),
    a = s(559949),
    r = s(430571),
    o = s(842671),
    c = s(792996);
let i = {
        [l.z.SOLID]: o.default.OpWJ3f,
        [l.z.GRADIENT]: o.default["i9e/u1"],
        [l.z.NEON]: o.default.x68b1F,
        [l.z.TOON]: o.default.otpeeM,
        [l.z.POP]: o.default.cjQOKb,
        [l.z.GUMMY]: o.default.x9Gtie,
        [l.z.PRISM]: o.default["/M7psm"],
    },
    u = {
        [l.z.SOLID]: 3,
        [l.z.GRADIENT]: 2.5,
        [l.z.GLOW]: 2.5,
        [l.z.PRISM]: 2.5,
        [l.z.NEON]: 3,
        [l.z.TOON]: 3,
        [l.z.POP]: 3,
        [l.z.GUMMY]: 3,
    };
s.d(
    t,
    {},
    {
        J: i,
        _: function (e) {
            let t = (0, r.A)()[e];
            return n.useMemo(
                () => ({
                    name: c.intl.string(i[e] ?? o.default.OpWJ3f),
                    defaultColors: t,
                    previewStyles: { fontId: a.x.DEFAULT, effectId: e, colors: t },
                    minContrastRatio: u[e] ?? 3,
                }),
                [e, t],
            );
        },
    },
);
