n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    a = n(493683),
    o = n(40851),
    u = n(549879),
    c = n(314897),
    s = n(981631),
    d = n(388032);
function f(e, t, n) {
    let f = (0, o.Aq)();
    return (0, l.e7)([c.default], () => c.default.getId() === e) || t === s.IlC.POPOUT
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'message-user',
              label: d.NW.string(d.t.OAJQlJ),
              action: () => {
                  (0, u.i)(t, !0), a.Z.openPrivateChannel({ recipientIds: e }), f.dispatch(s.CkL.POPOUT_CLOSE), (0, i.pTH)();
              },
              icon: n
          });
}
