n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(892001),
    a = n(475413),
    o = n(955418),
    s = n(388032),
    l = n(200669);
function c(e) {
    let { user: t, hideMessageInput: n, hideExampleButton: c, showViewFullProfileButton: u } = e;
    return n
        ? u
            ? (0, r.jsx)('footer', {
                  className: l.footer,
                  children: (0, r.jsx)(a.tG, {
                      text: s.intl.string(s.t['+Xp3ho']),
                      onClick: () =>
                          (0, i.openUserProfileModal)({
                              userId: t.id,
                              disableActionsForPreview: !0
                          }),
                      fullWidth: !0
                  })
              })
            : (0, r.jsx)('footer', {
                  className: l.footer,
                  children:
                      !c &&
                      (0, r.jsx)(a.tG, {
                          text: s.intl.string(s.t.hZkfwc),
                          fullWidth: !0
                      })
              })
        : (0, r.jsx)('footer', {
              className: l.footer,
              inert: !0,
              children: (0, r.jsx)(o.Z, { user: t })
          });
}
