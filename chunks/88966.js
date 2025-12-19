t.d(n, { Z: () => g });
var l = t(54381);
t(473749);
var i = t(442837),
    r = t(481060),
    a = t(493683),
    o = t(728285),
    u = t(887413),
    s = t(314897),
    d = t(981631),
    c = t(388032);
function g(e, n, t) {
    let g = (0, o.Aq)();
    return (0, i.e7)([s.default], () => s.default.getId() === e) || n === d.IlC.POPOUT
        ? null
        : (0, l.jsx)(r.sNh, {
              id: "message-user",
              label: c.intl.string(c.t.OAJQlP),
              action: () => {
                  (0, u.i)(n, !0),
                      a.Z.openPrivateChannel({ recipientIds: e }),
                      g.dispatch(d.CkL.POPOUT_CLOSE),
                      (0, r.pTH)();
              },
              icon: t,
          });
}
