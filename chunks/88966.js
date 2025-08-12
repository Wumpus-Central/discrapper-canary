r.d(n, { Z: () => m });
var t = r(255367);
r(73800);
var i = r(442837),
    s = r(481060),
    o = r(493683),
    l = r(40851),
    a = r(549879),
    d = r(314897),
    c = r(981631),
    u = r(388032);
function m(e, n, r) {
    let m = (0, l.Aq)();
    return (0, i.e7)([d.default], () => d.default.getId() === e) || n === c.IlC.POPOUT
        ? null
        : (0, t.jsx)(s.sNh, {
              id: "message-user",
              label: u.intl.string(u.t.OAJQlJ),
              action: () => {
                  (0, a.i)(n, !0),
                      o.Z.openPrivateChannel({ recipientIds: e }),
                      m.dispatch(c.CkL.POPOUT_CLOSE),
                      (0, s.pTH)();
              },
              icon: r,
          });
}
