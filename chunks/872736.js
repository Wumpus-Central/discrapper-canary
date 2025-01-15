n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(695346),
    a = n(388032);
function l(e) {
    let t = r.R_.useSetting();
    return (0, i.jsx)(s.FormSwitch, {
        hideBorder: !0,
        value: !t,
        onChange: () => r.R_.updateSetting(!t),
        note: t ? null : a.intl.formatToPlainString(a.t.aYhclZ, { username: e.legacyUsername }),
        children: a.intl.string(a.t['3cWDuL'])
    });
}
