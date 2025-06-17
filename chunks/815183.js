n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var s = n(481060),
    o = n(153867),
    a = n(410030),
    i = n(583901),
    l = n(231338);
let c = function () {
    let e = (0, a.ZP)();
    return (0, r.jsxs)(s.xJW, {
        children: [
            (0, r.jsx)(s.vwX, {
                tag: s.RB0.H5,
                children: 'Theme'
            }),
            (0, r.jsxs)('div', {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    (0, r.jsx)(i.bD, {
                        theme: l.BR.LIGHT,
                        isSelected: e === l.BR.LIGHT,
                        onSelect: () => (0, o.ZI)({ theme: l.BR.LIGHT })
                    }),
                    (0, r.jsx)(i.bD, {
                        theme: l.BR.DARK,
                        isSelected: e === l.BR.DARK,
                        onSelect: () => (0, o.ZI)({ theme: l.BR.DARK })
                    })
                ]
            })
        ]
    });
};
