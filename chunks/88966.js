t.d(n, { Z: () => g });
var l = t(200651);
t(192379);
var r = t(442837),
    i = t(481060),
    a = t(493683),
    o = t(40851),
    u = t(549879),
    s = t(314897),
    c = t(981631),
    d = t(388032);
function g(e, n, t) {
    let g = (0, o.Aq)();
    return (0, r.e7)([s.default], () => s.default.getId() === e) || n === c.IlC.POPOUT
        ? null
        : (0, l.jsx)(i.sNh, {
              id: 'message-user',
              label: d.NW.string(d.t.OAJQlJ),
              action: () => {
                  (0, u.i)(n, !0), a.Z.openPrivateChannel(e), g.dispatch(c.CkL.POPOUT_CLOSE), (0, i.pTH)();
              },
              icon: t
          });
}
