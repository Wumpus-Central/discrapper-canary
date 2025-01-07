t.d(n, {
    Z: function () {
        return c;
    }
});
var l = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    a = t(481060),
    s = t(118012),
    o = t(913943);
function c(e) {
    let { steps: n, stepIndex: t, onClick: i } = e;
    return (0, l.jsx)('div', {
        className: o.container,
        children: n.map((e, n) => {
            let c = t === n;
            return (0, l.jsxs)(
                a.Clickable,
                {
                    onClick: () => i(n),
                    className: o.stepContainer,
                    children: [
                        (0, l.jsx)('div', { className: r()(o.progressBar, { [o.selectedProgressBar]: c }) }),
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
