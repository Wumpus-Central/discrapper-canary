"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(158954),
    s = n(783420),
    a = n(204413),
    o = n(818415),
    l = n(788868),
    u = n(985018);
let c = (e) => {
    let {
            gradientColor: t,
            title: n,
            subtitle: c,
            onClose: d,
            onSecondaryClick: _,
            videoSrc: f,
            loopAt: p,
            children: h,
            ...m
        } = e,
        { subscribeButtonProps: E, subscriptionTier: g } = (0, a.$)({
            subscriptionTier: l.pe.TIER_2,
            defaultTextOverride: u.intl.string(u.t.pj0XBN),
        }),
        A = (0, o.A)(l.pe.TIER_2);
    return (0, r.jsx)(s.A, {
        subscriptionTier: g,
        children: (e) => {
            let { onClick: s } = e;
            return (0, r.jsx)(i.ExpressiveModal, {
                size: "md",
                onClose: async () => {
                    await d();
                },
                gradientColor: t,
                graphic: { type: "video", src: f, loop: !0, loopAt: p },
                title: n,
                subtitle: c,
                actions: [
                    { variant: "secondary", text: u.intl.string(u.t.ZnqyZ2), onClick: _ },
                    { ...E, onClick: s },
                ],
                ...(null != A && { badge: { text: A } }),
                ...m,
                children: h,
            });
        },
    });
};
