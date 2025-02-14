n.d(t, {
    l: () => d,
    v: () => c
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(144114),
    s = n(476770),
    u = n(815660),
    o = n(388032),
    a = n(35761);
function d() {
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(s.PU, {
            className: a.editableRequirementContainer,
            icon: l.AtH,
            text: o.intl.string(o.t.woMjLS),
            footnote: o.intl.string(o.t['jMh+TU']),
            meetsRequirement: !1,
            children: (0, i.jsx)(l.ua7, {
                text: o.intl.string(o.t.mGlP39),
                children: (e) =>
                    (0, i.jsx)(l.zxk, {
                        ...e,
                        size: l.zxk.Sizes.SMALL,
                        disabled: !0,
                        children: o.intl.string(o.t['13ofGh'])
                    })
            })
        })
    });
}
function c(e) {
    let { isUserVerified: t } = e,
        d = t ? o.intl.string(o.t.WWzQtb) : o.intl.string(o.t.woMjLS);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(s.PU, {
            className: a.editableRequirementContainer,
            icon: l.AtH,
            text: d,
            footnote: o.intl.string(o.t['jMh+TU']),
            meetsRequirement: t,
            children: (0, i.jsx)(l.zxk, {
                size: l.zxk.Sizes.SMALL,
                onClick: () => {
                    (0, l.ZDy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e('76540'), n.e('98523')]).then(n.bind(n, 607018));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    reason: r.L.GUILD_PHONE_REQUIRED,
                                    ...t
                                });
                        },
                        { modalKey: u.M }
                    );
                },
                children: o.intl.string(o.t['13ofGh'])
            })
        })
    });
}
