n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(493683),
    s = n(592125),
    a = n(388032);
function d(e, t) {
    let n = s.Z.getChannel(e);
    return null == n || n.isMultiUserDM()
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'close-dm',
              label: a.NW.string(a.t.jsvgc3),
              action: () => l.Z.closePrivateChannel(e, t)
          });
}
