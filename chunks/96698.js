n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    s = n(118012),
    o = n(734829);
function c(e) {
    let { steps: t, stepIndex: n, onClick: r } = e;
    return (0, l.jsx)('div', {
        className: o.container,
        children: t.map((e, t) => {
            let c = n === t;
            return (0, l.jsxs)(
                a.P3F,
                {
                    onClick: () => r(t),
                    className: o.stepContainer,
                    children: [
                        (0, l.jsx)('div', { className: i()(o.progressBar, { [o.selectedProgressBar]: c }) }),
                        (0, l.jsx)(s.Z, {
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
