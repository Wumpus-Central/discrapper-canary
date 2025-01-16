var i = n(200651),
    l = n(192379),
    r = n(780384),
    a = n(481060),
    s = n(410030),
    o = n(367907),
    c = n(984370),
    d = n(981631),
    u = n(388032),
    h = n(610047),
    p = n(66737),
    m = n(525377);
t.Z = () => {
    let e = (0, s.ZP)();
    l.useEffect(() => {
        o.ZP.trackWithMetadata(d.rMx.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let t = (0, r.wj)(e) ? p : m;
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsxs)(c.Z, {
                toolbar: (0, i.jsx)(l.Fragment, {}),
                children: [
                    (0, i.jsx)(c.Z.Icon, {
                        icon: a.TextIcon,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(c.Z.Title, { children: u.intl.string(u.t['8LKcho']) })
                ]
            }),
            (0, i.jsxs)('div', {
                className: h.content,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        className: h.splashImage,
                        src: t
                    }),
                    (0, i.jsx)(a.Heading, {
                        className: h.splashHeader,
                        variant: 'heading-lg/medium',
                        children: u.intl.string(u.t.m9gRVF)
                    }),
                    (0, i.jsx)(a.Text, {
                        className: h.splashText,
                        variant: 'text-md/normal',
                        children: u.intl.string(u.t['wC3j5+'])
                    })
                ]
            })
        ]
    });
};
