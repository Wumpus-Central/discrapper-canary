n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(854627),
    a = n(778712),
    l = n(985018),
    o = n(431543);
function c(e) {
    let { referrer: t, enablePremiumBrandRefresh: n } = e,
        { avatarSrc: c, eventHandlers: d } = (0, r.A)({
            userId: t?.id,
            size: n ? a._3.SIZE_24 : a._3.SIZE_32,
            animateOnHover: !0,
        });
    return (0, i.jsx)("div", {
        className: o.E2,
        children: (0, i.jsxs)("div", {
            className: o.hA,
            children: [
                (0, i.jsx)("div", {
                    className: o.kR,
                    children: (0, i.jsx)(s.euF, {
                        className: o.Kk,
                        src: c,
                        "aria-label": t.username,
                        size: a._3.SIZE_32,
                        ...d,
                    }),
                }),
                (0, i.jsx)(s.Heading, {
                    variant: "heading-sm/normal",
                    className: o.Mn,
                    color: "text-strong",
                    children: l.intl.format(l.t.IqxblS, { username: null != t.globalName ? t.globalName : t.username }),
                }),
            ],
        }),
    });
}
