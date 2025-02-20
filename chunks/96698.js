n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    s = n(118012),
    o = n(919913);
function c(e) {
    let { steps: t, stepIndex: n, onClick: l } = e;
    return (0, r.jsx)('div', {
        className: o.container,
        children: t.map((e, t) => {
            let c = n === t;
            return (0, r.jsxs)(
                a.P3F,
                {
                    onClick: () => l(t),
                    className: o.stepContainer,
                    children: [
                        (0, r.jsx)('div', { className: i()(o.progressBar, { [o.selectedProgressBar]: c }) }),
                        (0, r.jsx)(s.Z, {
                            color: c ? s.Z.Colors.BRAND : s.Z.Colors.MUTED,
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
