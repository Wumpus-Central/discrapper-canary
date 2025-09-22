s.d(t, {
    Z: () => l,
    a: () => i,
});
var n,
    r = s(951288);
s(647438);
var a = s(481060),
    i =
        (((n = {})[(n.UNENROLLED = 0)] = "UNENROLLED"),
        (n[(n.ENROLLED = 1)] = "ENROLLED"),
        (n[(n.COMPLETED_25 = 2)] = "COMPLETED_25"),
        (n[(n.COMPLETED_50 = 3)] = "COMPLETED_50"),
        (n[(n.COMPLETED_75 = 4)] = "COMPLETED_75"),
        (n[(n.COMPLETED_100 = 5)] = "COMPLETED_100"),
        (n[(n.CLAIMED = 6)] = "CLAIMED"),
        n);
let l = function (e) {
    let { onChange: t, value: s } = e;
    return (0, r.jsxs)(a.xJW, {
        children: [
            (0, r.jsx)(a.vwX, { children: "User State" }),
            (0, r.jsx)(a.R94, {
                children: (0, r.jsx)(a.PhF, {
                    "aria-label": "User State",
                    options: [
                        {
                            label: "Unenrolled",
                            value: 0,
                        },
                        {
                            label: "Enrolled",
                            value: 1,
                        },
                        {
                            label: "25% Complete",
                            value: 2,
                        },
                        {
                            label: "50% Complete",
                            value: 3,
                        },
                        {
                            label: "75% Complete",
                            value: 4,
                        },
                        {
                            label: "100% Complete",
                            value: 5,
                        },
                        {
                            label: "Claimed",
                            value: 6,
                        },
                    ],
                    isSelected: (e) => e === s,
                    select: t,
                    serialize: String,
                }),
            }),
        ],
    });
};
