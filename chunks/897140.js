e.d(s, { default: () => v });
var n = e(255367);
e(73800);
var i = e(392711),
    a = e.n(i),
    l = e(554908),
    o = e(780384),
    r = e(481060),
    d = e(410030),
    c = e(313201),
    g = e(388032),
    u = e(556338),
    b = e(755524),
    m = e(788572),
    x = e(262529);
let p = [e(4921), e(663416), e(838295)],
    f = [b, m, x],
    h = [() => g.intl.string(g.t['w2o/6+']), () => g.intl.string(g.t.FiAvKi), () => g.intl.string(g.t.vKUFen), () => g.intl.string(g.t.veQl5e), () => g.intl.string(g.t.Pxb7BQ), () => g.intl.string(g.t['W03w+/']), () => g.intl.string(g.t['95HTb2']), () => g.intl.string(g.t['+XFel5']), () => g.intl.string(g.t.hedHen), () => g.intl.string(g.t.jgC65u)],
    v = (t) => {
        let { transitionState: s, onClose: e } = t,
            i = (0, d.ZP)(),
            b = (0, c.Dt)(),
            m = (0, o.wj)(i) ? f : p,
            x = (0, l.Z)(() => a().sample(m), [m]),
            v = (0, l.Z)(() => a().sample(h), []);
        return (0, n.jsxs)(r.Y0X, {
            transitionState: s,
            className: u.root,
            'aria-labelledby': b,
            parentComponent: 'FollowSuccessModal',
            children: [
                (0, n.jsx)('img', {
                    alt: '',
                    src: x,
                    className: u.image
                }),
                (0, n.jsxs)(r.hzk, {
                    className: u.modal,
                    children: [
                        (0, n.jsx)(r.X6q, {
                            variant: 'heading-xl/semibold',
                            className: u.followSuccessHeader,
                            id: b,
                            children: v()
                        }),
                        (0, n.jsx)(r.Text, {
                            color: 'text-muted',
                            variant: 'text-md/medium',
                            className: u.body,
                            children: g.intl.string(g.t['2QbSeX'])
                        }),
                        (0, n.jsx)(r.zxk, {
                            onClick: e,
                            children: g.intl.string(g.t['+IrDzM'])
                        })
                    ]
                })
            ]
        });
    };
