n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var i = n(481060),
    o = n(64372);
let a = (e) => {
    let { label: t, onClick: n, submitting: a } = e;
    return (0, r.jsx)(i.P3F, {
        onClick: a ? void 0 : n,
        className: o.button,
        children: (0, r.jsxs)("div", {
            className: o.contentContainer,
            children: [
                a
                    ? (0, r.jsx)(i.$jN, {
                          type: i.$jN.Type.PULSING_ELLIPSIS,
                          className: o.__invalid_spinner,
                      })
                    : (0, r.jsx)(i.Text, {
                          variant: "text-md/medium",
                          className: o.label,
                          children: t,
                      }),
                (0, r.jsx)(i.CJ0, {
                    size: "md",
                    color: "currentColor",
                    className: o.arrow,
                }),
            ],
        }),
    });
};
