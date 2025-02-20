n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(493683),
    o = n(40851),
    u = n(314897),
    s = n(981631),
    d = n(388032);
function c(e, t, n) {
    let c = (0, o.Aq)();
    return (0, i.e7)([u.default], () => u.default.getId() === e) || t === s.IlC.POPOUT
        ? null
        : (0, l.jsx)(r.sNh, {
              id: 'message-user',
              label: d.NW.string(d.t.OAJQlJ),
              action: () => {
                  a.Z.openPrivateChannel(e), c.dispatch(s.CkL.POPOUT_CLOSE), (0, r.pTH)();
              },
              icon: n
          });
}
