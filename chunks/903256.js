i.d(a, { default: () => k });
var n = i(627968),
    c = i(64700),
    s = i(192308),
    o = i(772707),
    e = i(793574),
    l = i(564064),
    r = i(408166),
    d = i(976860),
    p = i(830543),
    u = i(652215),
    b = i(758836),
    f = i(375708);
function k(t) {
    let { transitionState: a, onClose: i, orbsAmount: k } = t,
        C = c.useCallback(() => {
            (0, s.closeAllModals)(), (0, p.default)(), (0, r.default)(), (0, d.pX)(u.BVt.NITRO_HOME);
        }, []),
        h = c.useCallback(() => {
            (0, s.closeAllModals)(),
                (0, l.Cz)({ tab: b.G2.ORBS, analyticsLocations: [], analyticsSource: e.A.PREMIUM_MARKETING });
        }, []);
    return (0, n.jsx)(o.k, {
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/d10c8e811697992fc3186c034d2767ec2c93ab49f8c742eb640f4bd1b10a0c8e.svg",
            aspectRatio: "16/9",
        },
        gradientColor: "nitro-pink",
        title: f.intl.formatToPlainString(f.t["O2/Bj8"], { orbAmount: k }),
        subtitle: f.intl.format(f.t.qiZPb6, { orbAmount: k }),
        onClose: i,
        transitionState: a,
        actions: [
            { text: f.intl.string(f.t.CvXwDY), variant: "secondary", onClick: C },
            { text: f.intl.string(f.t.OhOWfI), variant: "primary", onClick: h },
        ],
    });
}
