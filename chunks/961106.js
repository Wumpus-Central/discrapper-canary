i.d(t, {
    Z: function () {
        return x;
    }
}),
    i(47120),
    i(610138),
    i(216116),
    i(78328),
    i(815648);
var n = i(200651),
    r = i(192379),
    a = i(120356),
    o = i.n(a),
    l = i(399606),
    c = i(481060),
    s = i(626135),
    d = i(463571),
    u = i(894653),
    h = i(34674),
    _ = i(132871),
    p = i(147890),
    m = i(981631),
    f = i(388032),
    g = i(300739);
function x(e) {
    let { className: t } = e,
        i = (0, _.useApplicationDirectoryHistory)((e) => e.guildId),
        a = (0, l.e7)([u.Z], () => u.Z.getCategories()),
        x = r.useMemo(() => [(0, h.KQ)(), ...a], [a]),
        C = (0, _.getCurrentView)(),
        b = (e) => {
            let t = x.find((t) => t.id === e);
            s.default.track(m.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: t.name,
                category_id: t.id,
                current_page: null == C ? void 0 : C.type,
                guild_id: i
            }),
                (0, p.goToCategory)({ categoryId: t.id });
        };
    return (0, n.jsx)('nav', {
        className: o()(g.container, t),
        children: x.map((e) => {
            let t = e.id,
                i = e.name,
                r = (0, h.tu)(e),
                a = new URLSearchParams();
            return (
                a.set('category_id', t.toString()),
                (0, n.jsx)(
                    d.Z,
                    {
                        href: ''.concat(m.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(a),
                        children: (0, n.jsxs)(c.Clickable, {
                            className: g.category,
                            'aria-label': f.intl.formatToPlainString(f.t.AUeHHh, { categoryName: i }),
                            onClick: () => b(t),
                            children: [
                                (0, n.jsx)(r, {
                                    className: g.icon,
                                    size: 'md',
                                    color: 'currentColor'
                                }),
                                (0, n.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    children: i
                                })
                            ]
                        })
                    },
                    t
                )
            );
        })
    });
}
