n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(695346),
    a = n(388032);
function l(e) {
    let t = s.R_.useSetting();
    return (0, i.jsx)(r.FormSwitch, {
        hideBorder: !0,
        value: !t,
        onChange: () => s.R_.updateSetting(!t),
        note: t ? null : a.intl.formatToPlainString(a.t.aYhclZ, { username: e.legacyUsername }),
        children: a.intl.string(a.t['3cWDuL'])
    });
}
