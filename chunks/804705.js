n.d(t, { F: () => o });
var r = n(704215),
    i = n(266454),
    l = n(822857);
let o = (e) => {
    let { location: t } = e,
        { enabled: n } = (0, l.hl)({ location: t }),
        o = (0, i.Nj)(r.z.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL),
        a = (0, i.Nj)(r.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK),
        s = (0, i.Nj)(r.z.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK);
    return (!!n && !o) || (!!o && (!a || !s));
};
