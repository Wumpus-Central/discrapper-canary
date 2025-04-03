n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    l = n(780384),
    o = n(481060),
    a = n(410030),
    s = n(367907),
    c = n(984370),
    u = n(981631),
    d = n(388032),
    p = n(578148),
    h = n(66737),
    f = n(525377);
let m = () => {
    let e = (0, a.ZP)();
    i.useEffect(() => {
        s.ZP.trackWithMetadata(u.rMx.GUILD_OUTAGE_VIEWED, {});
    }, []);
    let t = (0, l.wj)(e) ? h : f;
    return (0, r.jsxs)('div', {
        className: p.container,
        children: [
            (0, r.jsxs)(c.Z, {
                toolbar: (0, r.jsx)(i.Fragment, {}),
                children: [
                    (0, r.jsx)(c.Z.Icon, {
                        icon: o.VL1,
                        'aria-hidden': !0
                    }),
                    (0, r.jsx)(c.Z.Title, { children: d.NW.string(d.t['8LKcho']) })
                ]
            }),
            (0, r.jsxs)('div', {
                className: p.content,
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        className: p.splashImage,
                        src: t
                    }),
                    (0, r.jsx)(o.X6q, {
                        className: p.splashHeader,
                        variant: 'heading-lg/medium',
                        children: d.NW.string(d.t.m9gRVF)
                    }),
                    (0, r.jsx)(o.Text, {
                        className: p.splashText,
                        variant: 'text-md/normal',
                        children: d.NW.string(d.t['wC3j5+'])
                    })
                ]
            })
        ]
    });
};
