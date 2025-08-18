n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    c = n(493683),
    o = n(40851),
    a = n(549879),
    s = n(314897),
    u = n(981631),
    d = n(388032);
function f(e, t, n) {
    let f = (0, o.Aq)();
    return (0, i.e7)([s.default], () => s.default.getId() === e) || t === u.IlC.POPOUT
        ? null
        : (0, r.jsx)(l.sNh, {
              id: "message-user",
              label: d.intl.string(d.t.OAJQlJ),
              action: () => {
                  (0, a.i)(t, !0),
                      c.Z.openPrivateChannel({ recipientIds: e }),
                      f.dispatch(u.CkL.POPOUT_CLOSE),
                      (0, l.pTH)();
              },
              icon: n,
          });
}
