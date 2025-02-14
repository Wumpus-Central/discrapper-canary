l.d(n, { Z: () => d });
var t = l(200651);
l(192379);
var i = l(120356),
    a = l.n(i),
    r = l(481060),
    s = l(118012),
    o = l(645086);
function d(e) {
    let { steps: n, stepIndex: l, onClick: i } = e;
    return (0, t.jsx)('div', {
        className: o.container,
        children: n.map((e, n) => {
            let d = l === n;
            return (0, t.jsxs)(
                r.P3F,
                {
                    onClick: () => i(n),
                    className: o.stepContainer,
                    children: [
                        (0, t.jsx)('div', { className: a()(o.progressBar, { [o.selectedProgressBar]: d }) }),
                        (0, t.jsx)(s.Z, {
                            color: d ? s.Z.Colors.BRAND : s.Z.Colors.MUTED,
                            size: s.Z.Sizes.SIZE_12,
                            children: e
                        })
                    ]
                },
                e
            );
        })
    });
}
