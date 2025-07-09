e.d(s, { default: () => h });
var n = e(255367);
e(73800);
var i = e(392711),
    a = e.n(i),
    l = e(554908),
    r = e(780384),
    o = e(481060),
    d = e(410030),
    c = e(313201),
    g = e(388032),
    m = e(556338),
    u = e(755524),
    b = e(788572),
    x = e(262529);
let p = [e(4921), e(663416), e(838295)],
    f = [u, b, x],
    v = [() => g.intl.string(g.t['w2o/6+']), () => g.intl.string(g.t.FiAvKi), () => g.intl.string(g.t.vKUFen), () => g.intl.string(g.t.veQl5e), () => g.intl.string(g.t.Pxb7BQ), () => g.intl.string(g.t['W03w+/']), () => g.intl.string(g.t['95HTb2']), () => g.intl.string(g.t['+XFel5']), () => g.intl.string(g.t.hedHen), () => g.intl.string(g.t.jgC65u)],
    h = (t) => {
        let { transitionState: s, onClose: e } = t,
            i = (0, d.ZP)(),
            u = (0, c.Dt)(),
            b = (0, r.wj)(i) ? f : p,
            x = (0, l.Z)(() => a().sample(b), [b]),
            h = (0, l.Z)(() => a().sample(v), []);
        return (0, n.jsxs)(o.Y0X, {
            transitionState: s,
            className: m.root,
            'aria-labelledby': u,
            parentComponent: 'FollowSuccessModal',
            children: [
                (0, n.jsx)('img', {
                    alt: '',
                    src: x,
                    className: m.image
                }),
                (0, n.jsxs)(o.hzk, {
                    className: m.modal,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            variant: 'heading-xl/semibold',
                            className: m.followSuccessHeader,
                            id: u,
                            children: h()
                        }),
                        (0, n.jsx)(o.Text, {
                            color: 'text-muted',
                            variant: 'text-md/medium',
                            className: m.body,
                            children: g.intl.string(g.t['2QbSeX'])
                        }),
                        (0, n.jsx)(o.zxk, {
                            variant: 'primary',
                            text: g.intl.string(g.t['+IrDzM']),
                            onClick: e
                        })
                    ]
                })
            ]
        });
    };
