n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(892001),
    o = n(732380),
    a = n(955418),
    s = n(388032),
    l = n(200669);
function c(e) {
    let { user: t, hideMessageInput: n, hideViewFullProfileButton: c } = e;
    return n
        ? c
            ? null
            : (0, r.jsx)('div', {
                  className: l.footer,
                  children: (0, r.jsx)(o.O1, {
                      variant: 'primary',
                      text: s.intl.string(s.t['+Xp3ho']),
                      onClick: () =>
                          (0, i.openUserProfileModal)({
                              userId: t.id,
                              disableActionsForPreview: !0
                          }),
                      fullWidth: !0
                  })
              })
        : (0, r.jsx)('div', {
              className: l.footer,
              inert: !0,
              children: (0, r.jsx)(a.Z, { user: t })
          });
}
