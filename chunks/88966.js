t.d(n, { Z: () => f });
var r = t(255367);
t(73800);
var i = t(442837),
    l = t(481060),
    o = t(493683),
    a = t(40851),
    s = t(549879),
    c = t(314897),
    d = t(981631),
    u = t(388032);
function f(e, n, t) {
    let f = (0, a.Aq)();
    return (0, i.e7)([c.default], () => c.default.getId() === e) || n === d.IlC.POPOUT
        ? null
        : (0, r.jsx)(l.sNh, {
              id: 'message-user',
              label: u.intl.string(u.t.OAJQlJ),
              action: () => {
                  (0, s.i)(n, !0), o.Z.openPrivateChannel({ recipientIds: e }), f.dispatch(d.CkL.POPOUT_CLOSE), (0, l.pTH)();
              },
              icon: t
          });
}
