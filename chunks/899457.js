n.d(t, {
    Z: () => s,
    a: () => i,
});
var a,
    r = n(54381),
    l = n(199849),
    i =
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
    return (0, r.jsx)(l.B6, {
        label: "User State",
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
        isSelected: (e) => e === n,
        select: t,
        serialize: String,
    });
};
