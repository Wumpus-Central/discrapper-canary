n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(210724),
    o = n(130653),
    s = n(78826),
    l = n(434366),
    c = n(981028);
let u = function (e) {
    let { quest: t } = e;
    return (0, r.jsxs)(i.Zbd, {
        className: l.barCard,
        children: [
            (0, r.jsx)(i.X6q, {
                className: l.barHeading,
                variant: "heading-lg/semibold",
                children: "Quest Bar Preview",
            }),
            (0, r.jsx)("div", {
                className: l.fixedBarContainer,
                children: (0, r.jsx)("div", {
                    className: l.fixedBarWrapper,
                    children: (0, r.jsx)("div", {
                        className: c.panels,
                        children: (0, r.jsx)(o.Z, {
                            children: (0, r.jsx)(s.p, {
                                source: "preview",
                                questId: t.id,
                                children: (0, r.jsx)(a.P, { quest: t }),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
};
