n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(475413),
    a = n(955418),
    o = n(388032),
    s = n(155493);
function l(e) {
    let { user: t, hideMessageInput: n, hideExampleButton: l } = e;
    return n
        ? l
            ? null
            : (0, r.jsx)("div", {
                  className: s.footer,
                  children: (0, r.jsx)(i.i6, {
                      variant: "primary",
                      text: o.intl.string(o.t.hZkfwY),
                      onClick: () => {},
                      fullWidth: !0,
                  }),
              })
        : (0, r.jsx)("div", {
              className: s.footer,
              inert: !0,
              children: (0, r.jsx)(a.Z, { user: t }),
          });
}
