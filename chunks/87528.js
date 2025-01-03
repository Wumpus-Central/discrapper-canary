i.d(t, {
    Z: function () {
        return g;
    }
}),
    i(47120),
    i(724458),
    i(653041);
var n = i(200651),
    r = i(192379),
    a = i(912370),
    o = i(477690),
    l = i(313201),
    c = i(626135),
    s = i(463571),
    d = i(744142),
    u = i(132871),
    h = i(147890),
    _ = i(216547),
    p = i(57716),
    m = i(981631),
    f = i(805540);
function g(e) {
    let {
            collection: t,
            collection: { id: i, title: g, application_directory_collection_items: x }
        } = e,
        [C, b] = r.useState(300),
        [I, v] = r.useState(4),
        N = parseFloat(o.Z.COLLECTION_LIST_CARD_GAP),
        A = (0, u.useApplicationDirectoryHistory)((e) => e.guildId),
        L = (0, p.Z)({ collection: t });
    r.useEffect(() => {
        function e() {
            var e;
            let t = null === (e = L.current) || void 0 === e ? void 0 : e.offsetWidth,
                i = 1;
            return null == t ? 300 : (t >= 500 && (i = 2), t >= 700 && (i = 3), t >= 1000 && (i = 4), v(i), (t - (i - 1) * N) / i);
        }
        let t = L.current;
        if (null == t) return;
        let i = new ResizeObserver(() => {
            b(e());
        });
        return (
            b(e()),
            i.observe(t),
            () => {
                i.disconnect();
            }
        );
    }, [N, L]);
    let j = (0, l.Dt)();
    return (0, n.jsx)('div', {
        ref: L,
        children: (0, n.jsx)(_.Z, {
            header: g,
            headerId: j,
            tileWidth: C,
            tileMargin: N,
            onScroll: (e) => {
                let { tileIndex: t } = e,
                    n = x.slice(t, t + I).reduce((e, t) => {
                        let { type: i, application: n } = t;
                        return i === a.C.APPLICATION && null != n && e.push(n.id), e;
                    }, []);
                c.default.track(m.rMx.APP_DIRECTORY_COLLECTION_SCROLLED, {
                    collection_id: i,
                    offset: t,
                    results: n,
                    guild_id: A
                });
            },
            children: (0, n.jsx)('ul', {
                'aria-labelledby': j,
                className: f.itemsContainer,
                children: x.map((e) => {
                    let { id: t, type: r, application: o } = e;
                    if (r === a.C.APPLICATION && null != o)
                        return (0, n.jsx)(
                            'li',
                            {
                                style: { width: C },
                                className: f.itemContainer,
                                children: (0, n.jsx)(s.Z, {
                                    className: f.seoAnchor,
                                    href: m.Z5c.APPLICATION_DIRECTORY_PROFILE(o.id),
                                    children: (0, n.jsx)(d.Z, {
                                        application: o,
                                        onClick: (e) => {
                                            let { mutualGuilds: t } = e;
                                            c.default.track(m.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                                collection_id: i,
                                                application_id: o.id,
                                                guild_id: A,
                                                shown_mutual_guilds_count: t.length
                                            }),
                                                (0, h.goToApplication)({ applicationId: o.id });
                                        },
                                        animatesOnHover: !0
                                    })
                                })
                            },
                            t
                        );
                })
            })
        })
    });
}
