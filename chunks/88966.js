n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(493683),
    a = n(40851),
    s = n(549879),
    u = n(314897),
    d = n(981631),
    c = n(388032);
function f(e, t, n) {
    let f = (0, a.Aq)();
    return (0, l.e7)([u.default], () => u.default.getId() === e) || t === d.IlC.POPOUT
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'message-user',
              label: c.NW.string(c.t.OAJQlJ),
              action: () => {
                  (0, s.i)(t, !0), o.Z.openPrivateChannel({ recipientIds: e }), f.dispatch(d.CkL.POPOUT_CLOSE), (0, r.pTH)();
              },
              icon: n
          });
}
