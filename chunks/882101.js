n.d(t, {
    BM: () => p,
    Ey: () => f,
    xv: () => _,
}),
    n(388685);
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(765400),
    o = n(937615),
    s = n(817460),
    l = n(290348),
    c = n(367719),
    u = n(388032),
    d = n(421778);
let f = (e) => {
    let { listingName: t } = e;
    return (0, r.jsx)(i.Heading, {
        variant: "text-md/normal",
        color: "interactive-text-active",
        className: d.tierName,
        children: t,
    });
};
function p(e) {
    let { image: t } = e;
    return null == t
        ? null
        : (0, r.jsx)("img", {
              src: t,
              alt: "",
              className: d.tierImage,
          });
}
let _ = (e) => {
    let { listingId: t, isListingPublished: n } = e,
        _ = (0, c.Z)(),
        [m] = l._T(t),
        [h] = l.d9(t, _),
        [g] = l.H9(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f, { listingName: m }),
            (0, r.jsx)(p, { image: h }),
            !n &&
                (0, r.jsx)("div", {
                    className: d.draftBadgeContainer,
                    children: (0, r.jsx)(a.v, {}),
                }),
            (0, r.jsx)(i.Text, {
                variant: "heading-xl/semibold",
                className: d.tierPrice,
                tag: "div",
                children: (0, o.T4)(g.price, g.currency),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "interactive-text-default",
                className: d.tierPeriod,
                children: u.intl.format(u.t.isLGyX, {
                    period: (0, s.JE)({
                        interval: g.interval,
                        interval_count: g.interval_count,
                    }),
                }),
            }),
        ],
    });
};
