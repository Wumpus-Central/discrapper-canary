n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(442837),
    o = n(481060),
    s = n(493683),
    r = n(40851),
    d = n(314897),
    a = n(981631),
    u = n(388032);
function c(e, t, n) {
    let c = (0, r.Aq)();
    return (0, l.e7)([d.default], () => d.default.getId() === e) || t === a.IlC.POPOUT
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'message-user',
              label: u.intl.string(u.t.OAJQlJ),
              action: () => {
                  s.Z.openPrivateChannel(e), c.dispatch(a.CkL.POPOUT_CLOSE), (0, o.pTH)();
              },
              icon: n
          });
}
