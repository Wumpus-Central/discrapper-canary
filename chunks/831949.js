n.d(t, { C: () => h });
var i = n(311907),
    s = n(98207),
    l = n(700062),
    a = n(557722),
    r = n(419954),
    o = n(933297),
    d = n(961350),
    c = n(287809),
    u = n(87707),
    m = n(780964),
    g = n(272338),
    _ = n(946531),
    x = n(652215),
    A = n(985018);
let h = (0, r.zZ)(m.X.SMS_AUTH_CATEGORY, {
    useTitle: () => A.intl.string(A.t.wuHuI5),
    useSubtitle: () => (0, i.bG)([c.default], () => (0, u.BE)(c.default.getCurrentUser(), !0)),
    useHeaderDecoration: () => {
        let e = (0, i.bG)([c.default], () => c.default.getCurrentUser()?.hasFlag(x.nhx.MFA_SMS) ?? !1),
            t = (0, i.bG)([c.default], () => null != (0, u.BE)(c.default.getCurrentUser()));
        if (!e)
            return {
                type: o.WX.BUTTON_GROUP,
                buttons: [
                    {
                        type: o.UV.BUTTON,
                        id: "sms-setup-button",
                        text: A.intl.string(A.t.Age7yU),
                        onClick: p,
                        disabled: t,
                    },
                ],
            };
    },
    collapseOnEmpty: !1,
    usePredicate: () => {
        let e = (0, u.dI)(),
            t = (0, g.f)(),
            n = (0, i.bG)([d.default], () => d.default.hasTOTPEnabled());
        return e === u.gW.AVAILABLE && t && n;
    },
    buildLayout: () => [_._],
});
function p() {
    let e = c.default.getCurrentUser();
    null != e &&
        (null == e.phone
            ? (0, l.ZM)({ reason: a.d.USER_SETTINGS_UPDATE, onAddedPhone: s.A.enableSMS })
            : s.A.enableSMS());
}
