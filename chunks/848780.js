r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651),
    a = r(442837),
    o = r(481060),
    s = r(695346),
    l = r(699516),
    u = r(388032);
function c(e) {
    let { userId: n, onClick: r } = e;
    if (!(0, a.e7)([l.Z], () => l.Z.isIgnored(n))) return null;
    let c = () => {
        s.Rt.updateSetting(!0), r();
    };
    return (0, i.jsx)(o.Button, {
        look: o.ButtonLooks.LINK,
        size: o.ButtonSizes.MIN,
        onClick: c,
        color: o.ButtonColors.LINK,
        children: u.intl.string(u.t.QbcRCA)
    });
}
