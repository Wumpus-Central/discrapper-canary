n.d(t, {
    Jy: () => d,
    OJ: () => f,
    eJ: () => _,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(159691),
    s = n(481060),
    l = n(231338),
    c = n(388032),
    u = n(196684);
let d = (e) => {
        let { children: t } = e;
        return (0, r.jsx)(s.Heading, {
            variant: "heading-sm/medium",
            color: "header-primary",
            className: u.noticeText,
            children: t,
        });
    },
    f = (e) => {
        let { text: t, onClick: n } = e;
        return (0, r.jsx)(o.zxk, {
            onClick: n,
            text: t,
            size: "sm",
            icon: s.SrA,
            variant: "secondary",
        });
    };
function _(e) {
    let { className: t, ref: n, children: i, onClick: o } = e;
    return (0, r.jsx)(s.f6W, {
        theme: l.BR.DARKER,
        children: (e) =>
            (0, r.jsxs)("div", {
                ref: n,
                className: a()(u.notice, e, t),
                children: [
                    (0, r.jsx)("div", {
                        className: u.noticeContent,
                        children: i,
                    }),
                    (0, r.jsx)(s.P3F, {
                        focusProps: { offset: 6 },
                        className: u.closeButton,
                        onClick: o,
                        "aria-label": c.intl.string(c.t.WAI6xu),
                        children: (0, r.jsx)(s.Dio, { size: "sm" }),
                    }),
                ],
            }),
    });
}
