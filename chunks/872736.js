n.d(t, { Z: () => a });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(695346),
    l = n(388032);
function a(e) {
    let t = s.R_.useSetting();
    return (0, i.jsx)(r.j7V, {
        hideBorder: !0,
        value: !t,
        onChange: () => s.R_.updateSetting(!t),
        note: t ? null : l.intl.formatToPlainString(l.t.aYhclZ, { username: e.legacyUsername }),
        children: l.intl.string(l.t['3cWDuL'])
    });
}
