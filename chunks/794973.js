e.d(n, { Z: () => d });
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(493683),
    s = e(592125),
    a = e(388032);
function d(t, n) {
    let e = s.Z.getChannel(t);
    return null == e || e.isMultiUserDM()
        ? null
        : (0, i.jsx)(r.sNh, {
              id: "close-dm",
              label: a.intl.string(a.t.jsvgc3),
              action: () => l.Z.closePrivateChannel(t, n),
          });
}
