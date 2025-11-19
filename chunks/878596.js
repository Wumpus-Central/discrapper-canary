n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(16207);
let o = (e) => {
    let { label: t, onClick: n, submitting: o } = e;
    return (0, r.jsx)(i.P3F, {
        onClick: o ? void 0 : n,
        className: a.button,
        children: (0, r.jsxs)("div", {
            className: a.contentContainer,
            children: [
                o
                    ? (0, r.jsx)(i.$jN, {
                          type: i.$jN.Type.PULSING_ELLIPSIS,
                          className: a.__invalid_spinner,
                      })
                    : (0, r.jsx)(i.Text, {
                          variant: "text-md/medium",
                          className: a.label,
                          children: t,
                      }),
                (0, r.jsx)(i.CJ0, {
                    size: "md",
                    color: "currentColor",
                    className: a.arrow,
                }),
            ],
        }),
    });
};
