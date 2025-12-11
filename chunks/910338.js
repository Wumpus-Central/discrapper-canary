e.d(s, { default: () => h });
var a = e(54381);
e(473749);
var n = e(392711),
    i = e.n(n),
    l = e(35387),
    o = e(780384),
    r = e(481060),
    d = e(410030),
    c = e(313201),
    g = e(388032),
    m = e(15245),
    u = e(755524),
    p = e(788572),
    x = e(262529);
let f = [e(4921), e(663416), e(838295)],
    b = [u, p, x],
    v = [
        () => g.intl.string(g.t["w2o/60"]),
        () => g.intl.string(g.t.FiAvKg),
        () => g.intl.string(g.t.vKUFek),
        () => g.intl.string(g.t.veQl5T),
        () => g.intl.string(g.t.Pxb7BR),
        () => g.intl.string(g.t["W03w++"]),
        () => g.intl.string(g.t["95HTb5"]),
        () => g.intl.string(g.t["+XFelz"]),
        () => g.intl.string(g.t.hedHel),
        () => g.intl.string(g.t.jgC65t),
    ],
    h = (t) => {
        let { transitionState: s, onClose: e } = t,
            n = (0, d.ZP)(),
            u = (0, c.Dt)(),
            p = (0, o.wj)(n) ? b : f,
            x = (0, l.Z)(() => i().sample(p), [p]),
            h = (0, l.Z)(() => i().sample(v), []);
        return (0, a.jsxs)(r.Y0X, {
            transitionState: s,
            className: m.root,
            "aria-labelledby": u,
            parentComponent: "FollowSuccessModal",
            children: [
                (0, a.jsx)("img", {
                    alt: "",
                    src: x,
                    className: m.image,
                }),
                (0, a.jsxs)(r.hzk, {
                    className: m.modal,
                    children: [
                        (0, a.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            className: m.followSuccessHeader,
                            id: u,
                            children: h(),
                        }),
                        (0, a.jsx)(r.Text, {
                            color: "text-muted",
                            variant: "text-md/medium",
                            className: m.body,
                            children: g.intl.string(g.t["2QbSea"]),
                        }),
                        (0, a.jsx)(r.Button, {
                            variant: "primary",
                            text: g.intl.string(g.t["+IrDzN"]),
                            onClick: e,
                        }),
                    ],
                }),
            ],
        });
    };
