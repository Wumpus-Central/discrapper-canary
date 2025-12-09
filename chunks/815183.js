n.d(t, { Z: () => c });
var a = n(54381),
    r = n(481060),
    i = n(153867),
    l = n(410030),
    s = n(583901),
    o = n(231338);
let c = function () {
    let e = (0, l.ZP)();
    return (0, a.jsx)(r.gNt, {
        label: "Theme",
        children: (0, a.jsxs)("div", {
            style: {
                display: "flex",
                justifyContent: "space-between",
            },
            children: [
                (0, a.jsx)(s.bD, {
                    theme: o.BR.LIGHT,
                    isSelected: e === o.BR.LIGHT,
                    onSelect: () => (0, i.ZI)({ theme: o.BR.LIGHT }),
                }),
                (0, a.jsx)(s.bD, {
                    theme: o.BR.DARK,
                    isSelected: e === o.BR.DARK,
                    onSelect: () => (0, i.ZI)({ theme: o.BR.DARK }),
                }),
            ],
        }),
    });
};
