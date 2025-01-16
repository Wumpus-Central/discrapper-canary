t.d(n, {
    Z: function () {
        return c;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(493683),
    u = t(40851),
    o = t(314897),
    d = t(981631),
    s = t(388032);
function c(e, n) {
    let t = (0, u.Aq)();
    return (0, i.e7)([o.default], () => o.default.getId() === e) || n === d.IlC.POPOUT
        ? null
        : (0, l.jsx)(r.MenuItem, {
              id: 'message-user',
              label: s.intl.string(s.t.OAJQlJ),
              action: () => {
                  a.Z.openPrivateChannel(e), t.dispatch(d.CkL.POPOUT_CLOSE), (0, r.closeAllModals)();
              }
          });
}
