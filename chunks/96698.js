t.d(n, { Z: () => d });
var l = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    s = t(481060),
    a = t(118012),
    o = t(645086);
function d(e) {
    let { steps: n, stepIndex: t, onClick: i } = e;
    return (0, l.jsx)('div', {
        className: o.container,
        children: n.map((e, n) => {
            let d = t === n;
            return (0, l.jsxs)(
                s.P3F,
                {
                    onClick: () => i(n),
                    className: o.stepContainer,
                    children: [
                        (0, l.jsx)('div', { className: r()(o.progressBar, { [o.selectedProgressBar]: d }) }),
                        (0, l.jsx)(a.Z, {
                            color: d ? a.Z.Colors.BRAND : a.Z.Colors.MUTED,
                            size: a.Z.Sizes.SIZE_12,
                            children: e
                        })
                    ]
                },
                e
            );
        })
    });
}
