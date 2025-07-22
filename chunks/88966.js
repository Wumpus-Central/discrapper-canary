n.d(t, { Z: () => g });
var l = n(255367);
n(73800);
var i = n(442837),
    r = n(481060),
    o = n(493683),
    a = n(40851),
    s = n(549879),
    u = n(314897),
    d = n(981631),
    c = n(388032);
function g(e, t, n) {
    let g = (0, a.Aq)();
    return (0, i.e7)([u.default], () => u.default.getId() === e) || t === d.IlC.POPOUT
        ? null
        : (0, l.jsx)(r.sNh, {
              id: 'message-user',
              label: c.intl.string(c.t.OAJQlJ),
              action: () => {
                  ((0, s.i)(t, !0), o.Z.openPrivateChannel({ recipientIds: e }), g.dispatch(d.CkL.POPOUT_CLOSE), (0, r.pTH)());
              },
              icon: n
          });
}
