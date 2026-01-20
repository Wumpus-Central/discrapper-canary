n.d(t, {
    Z: () => s,
    a: () => l,
});
var a,
    r = n(54381),
    i = n(481060),
    l =
        (((a = {})[(a.UNENROLLED = 0)] = "UNENROLLED"),
        (a[(a.ENROLLED = 1)] = "ENROLLED"),
        (a[(a.COMPLETED_25 = 2)] = "COMPLETED_25"),
        (a[(a.COMPLETED_50 = 3)] = "COMPLETED_50"),
        (a[(a.COMPLETED_75 = 4)] = "COMPLETED_75"),
        (a[(a.COMPLETED_100 = 5)] = "COMPLETED_100"),
        (a[(a.CLAIMED = 6)] = "CLAIMED"),
        a);
let s = function (e) {
    let { onChange: t, value: n } = e;
    return (0, r.jsx)(i.PhF, {
        label: "User State",
        options: [
            {
                id: "unenrolled",
                label: "Unenrolled",
                value: 0,
            },
            {
                id: "enrolled",
                label: "Enrolled",
                value: 1,
            },
            {
                id: "25%",
                label: "25% Complete",
                value: 2,
            },
            {
                id: "50%",
                label: "50% Complete",
                value: 3,
            },
            {
                id: "75%",
                label: "75% Complete",
                value: 4,
            },
            {
                id: "100%",
                label: "100% Complete",
                value: 5,
            },
            {
                id: "claimed",
                label: "Claimed",
                value: 6,
            },
        ],
        value: n,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
