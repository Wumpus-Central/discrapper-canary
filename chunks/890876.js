n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(475413),
    o = n(955418),
    a = n(388032),
    s = n(165957);
function l(e) {
    let { user: t, hideMessageInput: n, hideExampleButton: l } = e;
    return n
        ? (0, r.jsx)('footer', {
              className: s.footer,
              children:
                  !l &&
                  (0, r.jsx)(i.tG, {
                      text: a.intl.string(a.t.hZkfwc),
                      fullWidth: !0
                  })
          })
        : (0, r.jsx)('footer', {
              className: s.footer,
              inert: !0,
              children: (0, r.jsx)(o.Z, { user: t })
          });
}
