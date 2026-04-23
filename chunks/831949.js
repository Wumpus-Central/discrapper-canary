n.d(t, { C: () => p });
var i = n(311907),
    s = n(98207),
    l = n(700062),
    a = n(557722),
    r = n(419954),
    o = n(933297),
    d = n(961350),
    u = n(287809),
    c = n(87707),
    g = n(780964),
    m = n(272338),
    _ = n(946531),
    A = n(652215),
    h = n(985018);
let p = (0, r.zZ)(g.X.SMS_AUTH_CATEGORY, {
    useTitle: () => h.intl.string(h.t.wuHuI5),
    useSubtitle: () => (0, i.bG)([u.default], () => (0, c.BE)(u.default.getCurrentUser(), !0)),
    useHeaderDecoration: () => {
        let e = (0, i.bG)([u.default], () => u.default.getCurrentUser()?.hasFlag(A.nhx.MFA_SMS) ?? !1),
            t = (0, i.bG)([u.default], () => null != (0, c.BE)(u.default.getCurrentUser()));
        if (!e)
            return {
                type: o.WX.BUTTON_GROUP,
                buttons: [
                    {
                        type: o.UV.BUTTON,
                        id: "sms-setup-button",
                        text: h.intl.string(h.t.Age7yU),
                        onClick: x,
                        disabled: t,
                    },
                ],
            };
    },
    collapseOnEmpty: !1,
    usePredicate: () => {
        let e = (0, c.dI)(),
            t = (0, m.f)(),
            n = (0, i.bG)([d.default], () => d.default.hasTOTPEnabled());
        return e === c.gW.AVAILABLE && t && n;
    },
    buildLayout: () => [_._],
});
function x() {
    let e = u.default.getCurrentUser();
    null != e &&
        (null == e.phone
            ? (0, l.ZM)({ reason: a.d.USER_SETTINGS_UPDATE, onAddedPhone: s.A.enableSMS })
            : s.A.enableSMS());
}
