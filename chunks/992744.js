n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    l = n(780384),
    a = n(481060),
    s = n(410030),
    o = n(367907),
    c = n(984370),
    d = n(981631),
    u = n(388032),
    p = n(483710),
    h = n(66737),
    f = n(525377);
let g = () => {
    let e = (0, s.ZP)();
    i.useEffect(() => {
        o.ZP.trackWithMetadata(d.rMx.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let t = (0, l.wj)(e) ? h : f;
    return (0, r.jsxs)("div", {
        className: p.container,
        children: [
            (0, r.jsxs)(c.Z, {
                toolbar: (0, r.jsx)(i.Fragment, {}),
                children: [
                    (0, r.jsx)(c.Z.Icon, {
                        icon: a.VL1,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(c.Z.Title, { children: u.intl.string(u.t["8LKchl"]) }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: p.content,
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        className: p.splashImage,
                        src: t,
                    }),
                    (0, r.jsx)(a.Heading, {
                        className: p.splashHeader,
                        variant: "heading-lg/medium",
                        children: u.intl.string(u.t.m9gRVN),
                    }),
                    (0, r.jsx)(a.Text, {
                        className: p.splashText,
                        variant: "text-md/normal",
                        children: u.intl.string(u.t.wC3j56),
                    }),
                ],
            }),
        ],
    });
};
