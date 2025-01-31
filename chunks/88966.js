l.d(n, { Z: () => c });
var t = l(200651);
l(192379);
var i = l(442837),
    r = l(481060),
    a = l(493683),
    d = l(40851),
    s = l(314897),
    u = l(981631),
    o = l(388032);
function c(e, n) {
    let l = (0, d.Aq)();
    return (0, i.e7)([s.default], () => s.default.getId() === e) || n === u.IlC.POPOUT
        ? null
        : (0, t.jsx)(r.sNh, {
              id: 'message-user',
              label: o.intl.string(o.t.OAJQlJ),
              action: () => {
                  a.Z.openPrivateChannel(e), l.dispatch(u.CkL.POPOUT_CLOSE), (0, r.pTH)();
              }
          });
}
