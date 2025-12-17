r.d(n, { Z: () => m });
var t = r(54381);
r(473749);
var i = r(442837),
    o = r(481060),
    s = r(493683),
    a = r(728285),
    c = r(887413),
    d = r(314897),
    l = r(981631),
    u = r(388032);
function m(e, n, r) {
    let m = (0, a.Aq)();
    return (0, i.e7)([d.default], () => d.default.getId() === e) || n === l.IlC.POPOUT
        ? null
        : (0, t.jsx)(o.sNh, {
              id: "message-user",
              label: u.intl.string(u.t.OAJQlP),
              action: () => {
                  (0, c.i)(n, !0),
                      s.Z.openPrivateChannel({ recipientIds: e }),
                      m.dispatch(l.CkL.POPOUT_CLOSE),
                      (0, o.pTH)();
              },
              icon: r,
          });
}
