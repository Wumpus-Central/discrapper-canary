t.d(n, { Z: () => f });
var r = t(951288);
t(647438);
var i = t(442837),
    l = t(481060),
    o = t(493683),
    s = t(40851),
    a = t(549879),
    c = t(314897),
    d = t(981631),
    u = t(388032);
function f(e, n, t) {
    let f = (0, s.Aq)();
    return (0, i.e7)([c.default], () => c.default.getId() === e) || n === d.IlC.POPOUT
        ? null
        : (0, r.jsx)(l.sNh, {
              id: "message-user",
              label: u.intl.string(u.t.OAJQlJ),
              action: () => {
                  (0, a.i)(n, !0),
                      o.Z.openPrivateChannel({ recipientIds: e }),
                      f.dispatch(d.CkL.POPOUT_CLOSE),
                      (0, l.pTH)();
              },
              icon: t,
          });
}
