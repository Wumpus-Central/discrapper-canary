n.d(t, { A: () => C });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(397927),
    d = n(765671),
    c = n(4616),
    u = n(743674),
    A = n(426660),
    h = n(71393),
    _ = n(486020),
    m = n(998304),
    g = n(817818),
    p = n(967305),
    E = n(985018),
    I = n(490346),
    f = n(457898);
function C(e) {
    let { guildId: t, channelId: n } = e,
        { ref: r, width: C, height: T } = (0, d.Ay)(),
        N = a.useCallback(() => {
            null != t && null != n && ((0, g.sy)(t), (0, p.default)({ guildId: t, returnChannelId: n }));
        }, [t, n]),
        S = (0, s.bG)([h.A], () => h.A.getGuild(t)),
        x = a.useMemo(() => (null == S ? null : _.Ay.getGuildSplashURL({ id: S.id, splash: S.splash })), [S]),
        v = (0, u.S)(x);
    return (0, i.jsxs)("div", {
        className: l()(I.kf, f.iW, { [f.Me]: null == x }),
        ref: r,
        children: [
            null != x
                ? (0, i.jsx)(c.A, { className: f.xX, src: x, width: C, height: T, imageClassName: f.Iv })
                : (0, i.jsx)(A.A, {}),
            null != v &&
                null != x &&
                (0, i.jsx)("div", {
                    className: f.D7,
                    style: { background: `linear-gradient(180deg, ${(0, m.cb)(v, 0.16)} 0%, ${(0, m.cb)(v, 1)} 100%)` },
                }),
            null != x && (0, i.jsx)("div", { className: f.D7 }),
            (0, i.jsxs)("div", {
                className: l()(I.Cj, I.Vw),
                children: [
                    (0, i.jsxs)("div", {
                        className: I.wx,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                variant: "heading-xxl/normal",
                                color: "always-white",
                                children: E.intl.string(E.t.CCmhpF),
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-lg/normal",
                                color: "always-white",
                                children: E.intl.string(E.t.gRAHcZ),
                            }),
                        ],
                    }),
                    (0, i.jsx)(o.Button, {
                        variant: "overlay-primary",
                        size: "md",
                        text: E.intl.string(E.t.VVFjAC),
                        onClick: N,
                    }),
                ],
            }),
        ],
    });
}
