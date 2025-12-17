n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(388032),
    o = n(540203);
function c(e) {
    let {
        className: t,
        enabled: n,
        previewCTA: i,
        onPreview: c,
        onToggle: d,
        animateStatus: u,
        firstLine: g,
        secondLine: f,
        disabled: m,
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(t, o.enableContainer),
        children: [
            n
                ? (0, r.jsx)(a.dz2, {
                      size: "custom",
                      color: "currentColor",
                      width: 24,
                      height: 24,
                      className: l()(o.activeCircle, { [o.animate]: u }),
                  })
                : (0, r.jsx)(a.vdY, {
                      size: "custom",
                      color: "currentColor",
                      width: 24,
                      height: 24,
                      className: l()(o.editCircle, { [o.animate]: u }),
                  }),
            (0, r.jsxs)("div", {
                className: o.enableDescription,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: g,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        children: f,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: o.buttonContainer,
                children: [
                    null == c
                        ? null
                        : (0, r.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: o.previewButton,
                              children: (0, r.jsx)(a.Button, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: null != i ? i : s.intl.string(s.t["5U0kL8"]),
                                  onClick: c,
                                  disabled: m,
                              }),
                          }),
                    (0, r.jsx)(a.Button, {
                        variant: n ? "critical-primary" : "primary",
                        size: "sm",
                        disabled: null == d || !n || m,
                        text: n ? s.intl.string(s.t.R9GHya) : s.intl.string(s.t.JFfins),
                        onClick: d,
                    }),
                ],
            }),
        ],
    });
}
