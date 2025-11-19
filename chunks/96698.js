n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    s = n(583289);
function o(e) {
    let { steps: t, stepIndex: n, onClick: l } = e;
    return (0, r.jsx)("div", {
        className: s.container,
        children: t.map((e, t) => {
            let o = n === t;
            return (0, r.jsxs)(
                a.P3F,
                {
                    onClick: () => l(t),
                    className: s.stepContainer,
                    children: [
                        (0, r.jsx)("div", { className: i()(s.progressBar, { [s.selectedProgressBar]: o }) }),
                        (0, r.jsx)(a.Text, {
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
