n.d(t, { Z: () => g });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(493683),
    o = n(40851),
    u = n(549879),
    s = n(314897),
    c = n(981631),
    d = n(388032);
function g(e, t, n) {
    let g = (0, o.Aq)();
    return (0, i.e7)([s.default], () => s.default.getId() === e) || t === c.IlC.POPOUT
        ? null
        : (0, l.jsx)(r.sNh, {
              id: 'message-user',
              label: d.NW.string(d.t.OAJQlJ),
              action: () => {
                  (0, u.i)(t, !0), a.Z.openPrivateChannel(e), g.dispatch(c.CkL.POPOUT_CLOSE), (0, r.pTH)();
              },
              icon: n
          });
}
