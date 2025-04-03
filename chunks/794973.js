t.d(e, { Z: () => a });
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(493683),
    d = t(592125),
    s = t(388032);
function a(n, e) {
    let t = d.Z.getChannel(n);
    return null == t || t.isMultiUserDM()
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'close-dm',
              label: s.NW.string(s.t.jsvgc3),
              action: () => r.Z.closePrivateChannel(n, e)
          });
}
