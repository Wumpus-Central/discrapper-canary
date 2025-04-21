n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    o = n(493683),
    s = n(40851),
    a = n(549879),
    d = n(314897),
    c = n(981631),
    u = n(388032);
function g(e, t, n) {
    let g = (0, s.Aq)();
    return (0, r.e7)([d.default], () => d.default.getId() === e) || t === c.IlC.POPOUT
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'message-user',
              label: u.intl.string(u.t.OAJQlJ),
              action: () => {
                  (0, a.i)(t, !0), o.Z.openPrivateChannel({ recipientIds: e }), g.dispatch(c.CkL.POPOUT_CLOSE), (0, l.pTH)();
              },
              icon: n
          });
}
