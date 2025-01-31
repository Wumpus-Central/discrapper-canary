e.d(t, { Z: () => d });
var i = e(200651);
e(192379);
var l = e(481060),
    r = e(493683),
    a = e(592125),
    s = e(388032);
function d(n, t) {
    let e = a.Z.getChannel(n);
    return null == e || e.isMultiUserDM()
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'close-dm',
              label: s.intl.string(s.t.jsvgc3),
              action: () => r.Z.closePrivateChannel(n, t)
          });
}
