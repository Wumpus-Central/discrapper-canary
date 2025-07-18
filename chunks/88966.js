t.d(n, { Z: () => f });
var r = t(255367);
t(73800);
var i = t(442837),
    l = t(481060),
    o = t(493683),
    a = t(40851),
    c = t(549879),
    s = t(314897),
    u = t(981631),
    d = t(388032);
function f(e, n, t) {
    let f = (0, a.Aq)();
    return (0, i.e7)([s.default], () => s.default.getId() === e) || n === u.IlC.POPOUT
        ? null
        : (0, r.jsx)(l.sNh, {
              id: 'message-user',
              label: d.intl.string(d.t.OAJQlJ),
              action: () => {
                  ((0, c.i)(n, !0), o.Z.openPrivateChannel({ recipientIds: e }), f.dispatch(u.CkL.POPOUT_CLOSE), (0, l.pTH)());
              },
              icon: t
          });
}
