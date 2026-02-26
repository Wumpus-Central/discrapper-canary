i.d(t, { A: () => m });
var n = i(627968),
    l = i(64700),
    a = i(505779),
    s = i(990078),
    r = i(397927),
    c = i(524799),
    o = i(223273),
    d = i(985018),
    u = i(107701);
let m = function (e) {
    let { websites: t, reviews: i } = e,
        m = i?.steam ?? { rating: void 0, ratingCount: void 0 },
        x = t.find((e) => e.category === a.V.STEAM),
        g = l.useCallback(() => {
            null != x && window.open(`${x.url}?utm_source=discord`, "_blank");
        }, [x]);
    if (null == x) return null;
    let h = (0, c.j)(m.rating, m.ratingCount);
    return (0, n.jsxs)("div", {
        className: u.uW,
        children: [
            (0, n.jsx)("div", {
                className: u.Gf,
                children: (0, n.jsx)(r.Heading, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: d.intl.string(d.t.GaAQXP),
                }),
            }),
            (0, n.jsx)("div", {
                className: u.kL,
                children: (0, n.jsx)("div", {
                    className: u.WH,
                    children: (0, n.jsxs)("div", {
                        className: u.U6,
                        children: [
                            (0, n.jsx)("div", {
                                className: u.tN,
                                children: (0, n.jsx)(r.Heading, {
                                    variant: "heading-sm/medium",
                                    color: "text-strong",
                                    children: d.intl.string(d.t.whmopT),
                                }),
                            }),
                            (0, n.jsx)(
                                s.m,
                                {
                                    text:
                                        h === o.vI.NO_USER_REVIEWS
                                            ? d.intl.string(d.t.CLMt8J)
                                            : d.intl
                                                  .format(d.t["lzANJ/"], {
                                                      rating: m.rating,
                                                      rating_count: m.ratingCount?.toLocaleString(),
                                                  })
                                                  .toString(),
                                    children: (0, n.jsx)(r.DUT, {
                                        onClick: g,
                                        className: u.TN,
                                        "aria-label": d.intl.string(d.t.YNC5Di),
                                        children: (0, n.jsxs)("div", {
                                            className: u.Z0,
                                            children: [
                                                (0, n.jsx)(r.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-subtle",
                                                    children: (function (e) {
                                                        switch (e) {
                                                            case o.vI.NO_USER_REVIEWS:
                                                                return d.intl.string(d.t.CLMt8J);
                                                            case o.vI.OVERWHELMINGLY_POSITIVE:
                                                                return d.intl.string(d.t["75sx1S"]);
                                                            case o.vI.VERY_POSITIVE:
                                                                return d.intl.string(d.t["EkOVg+"]);
                                                            case o.vI.POSITIVE:
                                                                return d.intl.string(d.t.ZUkFtr);
                                                            case o.vI.MOSTLY_POSITIVE:
                                                                return d.intl.string(d.t.M7Z09a);
                                                            case o.vI.MIXED:
                                                                return d.intl.string(d.t.c8yuHR);
                                                            case o.vI.MOSTLY_NEGATIVE:
                                                                return d.intl.string(d.t.H0MSjG);
                                                            case o.vI.NEGATIVE:
                                                                return d.intl.string(d.t.vpLrgz);
                                                            case o.vI.VERY_NEGATIVE:
                                                                return d.intl.string(d.t["5spYuX"]);
                                                            case o.vI.OVERWHELMINGLY_NEGATIVE:
                                                                return d.intl.string(d.t.A8uk5J);
                                                            default:
                                                                return null;
                                                        }
                                                    })(h),
                                                }),
                                                null != m.ratingCount &&
                                                    h !== o.vI.NO_USER_REVIEWS &&
                                                    (0, n.jsx)(r.Text, {
                                                        variant: "text-xs/medium",
                                                        color: "text-subtle",
                                                        children: d.intl
                                                            .format(d.t.sgIoin, {
                                                                rating_count: m.ratingCount?.toLocaleString(),
                                                            })
                                                            .toString(),
                                                    }),
                                            ],
                                        }),
                                    }),
                                },
                                "open-steam-page",
                            ),
                        ],
                    }),
                }),
            }),
        ],
    });
};
