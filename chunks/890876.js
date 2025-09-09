n.d(t, { Z: () => l });
var r = n(951288);
n(647438);
var i = n(732380),
    a = n(955418),
    o = n(388032),
    s = n(116649);
function l(e) {
    let { user: t, hideMessageInput: n, hideExampleButton: l } = e;
    return n
        ? l
            ? null
            : (0, r.jsx)("div", {
                  className: s.footer,
                  children: (0, r.jsx)(i.O1, {
                      variant: "primary",
                      text: o.intl.string(o.t.hZkfwc),
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
