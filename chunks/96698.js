n.d(t, { Z: () => o });
var l = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    s = n(68877);
function o(e) {
    let { steps: t, stepIndex: n, onClick: r } = e;
    return (0, l.jsx)("div", {
        className: s.container,
        children: t.map((e, t) => {
            let o = n === t;
            return (0, l.jsxs)(
                a.P3F,
                {
                    onClick: () => r(t),
                    className: s.stepContainer,
                    children: [
                        (0, l.jsx)("div", { className: i()(s.progressBar, { [s.selectedProgressBar]: o }) }),
                        (0, l.jsx)(a.Text, {
                            color: o ? "text-brand" : "text-muted",
                            variant: "text-xs/normal",
                            children: e,
                        }),
                    ],
                },
                e,
            );
        }),
    });
}
