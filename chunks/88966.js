n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var l = n(442837),
    r = n(481060),
    o = n(493683),
    a = n(40851),
    s = n(549879),
    d = n(314897),
    u = n(981631),
    c = n(388032);
function f(e, t, n) {
    let f = (0, a.Aq)();
    return (0, l.e7)([d.default], () => d.default.getId() === e) || t === u.IlC.POPOUT
        ? null
        : (0, i.jsx)(r.sNh, {
              id: "message-user",
              label: c.intl.string(c.t.OAJQlJ),
              action: () => {
                  (0, s.i)(t, !0),
                      o.Z.openPrivateChannel({ recipientIds: e }),
                      f.dispatch(u.CkL.POPOUT_CLOSE),
                      (0, r.pTH)();
              },
              icon: n,
          });
}
