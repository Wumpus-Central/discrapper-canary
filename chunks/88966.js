n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    l = n(493683),
    s = n(40851),
    a = n(549879),
    d = n(314897),
    c = n(981631),
    u = n(388032);
function g(e, t, n) {
    let g = (0, s.Aq)();
    return (0, i.e7)([d.default], () => d.default.getId() === e) || t === c.IlC.POPOUT
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'message-user',
              label: u.NW.string(u.t.OAJQlJ),
              action: () => {
                  (0, a.i)(t, !0), l.Z.openPrivateChannel({ recipientIds: e }), g.dispatch(c.CkL.POPOUT_CLOSE), (0, o.pTH)();
              },
              icon: n
          });
}
