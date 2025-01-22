r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(194359),
    l = r(699516),
    u = r(388032);
function c(e) {
    let { user: n, color: r, location: c, onAction: d } = e;
    return !(0, a.e7)([l.Z], () => l.Z.isFriend(n.id)) || n.isNonUserBot()
        ? null
        : (0, i.jsx)(o.MenuItem, {
              id: 'remove-friend',
              color: r,
              label: u.intl.string(u.t.cvSt1N),
              action: () => {
                  (0, o.openModal)((e) =>
                      (0, i.jsx)(o.ConfirmModal, {
                          header: u.intl.formatToPlainString(u.t.fPLvZW, { name: n.username }),
                          confirmText: u.intl.string(u.t.cvSt1N),
                          cancelText: u.intl.string(u.t['ETE/oK']),
                          onConfirm: () => {
                              null == d || d(), s.Z.removeFriend(n.id, null != c ? { location: c } : void 0);
                          },
                          ...e,
                          children: (0, i.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              children: u.intl.format(u.t.l5FFq6, { name: n.username })
                          })
                      })
                  );
              }
          });
}
