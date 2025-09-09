n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(153867),
    o = n(410030),
    s = n(583901),
    l = n(231338);
let c = function () {
    let e = (0, o.ZP)();
    return (0, r.jsxs)(i.xJW, {
        children: [
            (0, r.jsx)(i.vwX, { children: "Theme" }),
            (0, r.jsxs)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                },
                children: [
                    (0, r.jsx)(s.bD, {
                        theme: l.BR.LIGHT,
                        isSelected: e === l.BR.LIGHT,
                        onSelect: () => (0, a.ZI)({ theme: l.BR.LIGHT }),
                    }),
                    (0, r.jsx)(s.bD, {
                        theme: l.BR.DARK,
                        isSelected: e === l.BR.DARK,
                        onSelect: () => (0, a.ZI)({ theme: l.BR.DARK }),
                    }),
                ],
            }),
        ],
    });
};
