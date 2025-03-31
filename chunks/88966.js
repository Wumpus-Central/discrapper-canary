n.d(t, { Z: () => g });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(493683),
    o = n(40851),
    u = n(549879),
    s = n(314897),
    d = n(981631),
    c = n(388032);
function g(e, t, n) {
    let g = (0, o.Aq)();
    return (0, i.e7)([s.default], () => s.default.getId() === e) || t === d.IlC.POPOUT
        ? null
        : (0, l.jsx)(r.sNh, {
              id: 'message-user',
              label: c.NW.string(c.t.OAJQlJ),
              action: () => {
                  (0, u.i)(t, !0), a.Z.openPrivateChannel(e), g.dispatch(d.CkL.POPOUT_CLOSE), (0, r.pTH)();
              },
              icon: n
          });
}
