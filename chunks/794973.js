e.d(t, { Z: () => a });
var i = e(255367);
e(73800);
var l = e(481060),
    r = e(493683),
    d = e(592125),
    s = e(388032);
function a(n, t) {
    let e = d.Z.getChannel(n);
    return null == e || e.isMultiUserDM()
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'close-dm',
              label: s.intl.string(s.t.jsvgc3),
              action: () => r.Z.closePrivateChannel(n, t)
          });
}
