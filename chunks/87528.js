i.d(t, {
    Z: function () {
        return g;
    }
}),
    i(47120),
    i(724458),
    i(653041);
var n = i(200651),
    a = i(192379),
    r = i(912370),
    o = i(477690),
    l = i(313201),
    c = i(626135),
    s = i(463571),
    d = i(744142),
    u = i(132871),
    _ = i(147890),
    p = i(216547),
    h = i(57716),
    m = i(981631),
    f = i(805540);
function g(e) {
    let {
            collection: t,
            collection: { id: i, title: g, application_directory_collection_items: x }
        } = e,
        [C, b] = a.useState(300),
        [I, v] = a.useState(4),
        A = parseFloat(o.Z.COLLECTION_LIST_CARD_GAP),
        N = (0, u.useApplicationDirectoryHistory)((e) => e.guildId),
        L = (0, h.Z)({ collection: t });
    a.useEffect(() => {
        function e() {
            var e;
            let t = null === (e = L.current) || void 0 === e ? void 0 : e.offsetWidth,
                i = 1;
            return null == t ? 300 : (t >= 500 && (i = 2), t >= 700 && (i = 3), t >= 1000 && (i = 4), v(i), (t - (i - 1) * A) / i);
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
    }, [A, L]);
    let T = (0, l.Dt)();
    return (0, n.jsx)('div', {
        ref: L,
        children: (0, n.jsx)(p.Z, {
            header: g,
            headerId: T,
            tileWidth: C,
            tileMargin: A,
            onScroll: (e) => {
                let { tileIndex: t } = e,
                    n = x.slice(t, t + I).reduce((e, t) => (t.type === r.C.APPLICATION && null != t.application && e.push(t.application.id), e), []);
                c.default.track(m.rMx.APP_DIRECTORY_COLLECTION_SCROLLED, {
                    collection_id: i,
                    offset: t,
                    results: n,
                    guild_id: N
                });
            },
            children: (0, n.jsx)('ul', {
                'aria-labelledby': T,
                className: f.itemsContainer,
                children: x.map((e) => {
                    if (e.type === r.C.APPLICATION && null != e.application)
                        return (0, n.jsx)(
                            'li',
                            {
                                style: { width: C },
                                className: f.itemContainer,
                                children: (0, n.jsx)(s.Z, {
                                    className: f.seoAnchor,
                                    href: m.Z5c.APPLICATION_DIRECTORY_PROFILE(e.application.id),
                                    children: (0, n.jsx)(d.Z, {
                                        application: e.application,
                                        onClick: (t) => {
                                            let { mutualGuilds: n } = t;
                                            c.default.track(m.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                                collection_id: i,
                                                application_id: e.application.id,
                                                guild_id: N,
                                                shown_mutual_guilds_count: n.length
                                            }),
                                                (0, _.goToApplication)({ applicationId: e.application.id });
                                        },
                                        animatesOnHover: !0
                                    })
                                })
                            },
                            e.id
                        );
                })
            })
        })
    });
}
