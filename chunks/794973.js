n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(493683),
    s = n(592125),
    a = n(388032);
function d(e, t) {
    let n = s.Z.getChannel(e);
    return null == n || n.isMultiUserDM()
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'close-dm',
              label: a.intl.string(a.t.jsvgc3),
              action: () => r.Z.closePrivateChannel(e, t)
          });
}
