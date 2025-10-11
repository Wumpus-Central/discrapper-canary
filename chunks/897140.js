e.d(s, { default: () => h });
var n = e(951288);
e(647438);
var i = e(392711),
    a = e.n(i),
    l = e(548680),
    o = e(780384),
    r = e(481060),
    d = e(410030),
    c = e(313201),
    g = e(388032),
    u = e(360217),
    m = e(755524),
    b = e(788572),
    p = e(262529);
let x = [e(4921), e(663416), e(838295)],
    f = [m, b, p],
    v = [
        () => g.intl.string(g.t["w2o/6+"]),
        () => g.intl.string(g.t.FiAvKi),
        () => g.intl.string(g.t.vKUFen),
        () => g.intl.string(g.t.veQl5e),
        () => g.intl.string(g.t.Pxb7BQ),
        () => g.intl.string(g.t["W03w+/"]),
        () => g.intl.string(g.t["95HTb2"]),
        () => g.intl.string(g.t["+XFel5"]),
        () => g.intl.string(g.t.hedHen),
        () => g.intl.string(g.t.jgC65u),
    ],
    h = (t) => {
        let { transitionState: s, onClose: e } = t,
            i = (0, d.ZP)(),
            m = (0, c.Dt)(),
            b = (0, o.wj)(i) ? f : x,
            p = (0, l.Z)(() => a().sample(b), [b]),
            h = (0, l.Z)(() => a().sample(v), []);
        return (0, n.jsxs)(r.Y0X, {
            transitionState: s,
            className: u.root,
            "aria-labelledby": m,
            parentComponent: "FollowSuccessModal",
            children: [
                (0, n.jsx)("img", {
                    alt: "",
                    src: p,
                    className: u.image,
                }),
                (0, n.jsxs)(r.hzk, {
                    className: u.modal,
                    children: [
                        (0, n.jsx)(r.Heading, {
                            variant: "heading-xl/semibold",
                            className: u.followSuccessHeader,
                            id: m,
                            children: h(),
                        }),
                        (0, n.jsx)(r.Text, {
                            color: "text-muted",
                            variant: "text-md/medium",
                            className: u.body,
                            children: g.intl.string(g.t["2QbSeX"]),
                        }),
                        (0, n.jsx)(r.Button, {
                            variant: "primary",
                            text: g.intl.string(g.t["+IrDzM"]),
                            onClick: e,
                        }),
                    ],
                }),
            ],
        });
    };
