n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(442837),
    o = n(481060),
    r = n(493683),
    d = n(40851),
    s = n(314897),
    a = n(981631),
    u = n(388032);
function c(e, t, n) {
    let c = (0, d.Aq)();
    return (0, l.e7)([s.default], () => s.default.getId() === e) || t === a.IlC.POPOUT
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'message-user',
              label: u.intl.string(u.t.OAJQlJ),
              action: () => {
                  r.Z.openPrivateChannel(e), c.dispatch(a.CkL.POPOUT_CLOSE), (0, o.pTH)();
              },
              icon: n
          });
}
