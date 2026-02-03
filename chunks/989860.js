n.d(t, {
    I: () => p,
});
var r = n(627968),
    i = n(64700),
    l = n(582754),
    s = n(397927),
    a = n(736653),
    o = n(903223),
    c = n(997509),
    d = n(985018),
    u = n(600854),
    g = n(347953),
    m = n(622327);

function p(e) {
    let { guildId: t, canManageGuild: n, premiumProgressBarEnabled: p } = e,
        f = (0, a.Ay)(),
        h = i.useCallback((e) => {
            c.A.updateGuild({
                premiumProgressBarEnabled: e,
            });
        }, []);
    return (
        i.useEffect(() => {
            o.Ay.trackExposure({
                guildId: t,
                location: "guild-settings",
            });
        }, [t]),
        (0, r.jsxs)("div", {
            className: u.kL,
            children: [
                (0, r.jsx)("div", {
                    className: u.fi,
                    children: (0, r.jsx)(s.dOG, {
                        label: d.intl.string(d.t.Dl4mJS),
                        description: d.intl.string(d.t.xzHcod),
                        checked: p,
                        onChange: h,
                        disabled: !n,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: u.fi,
                    children: (0, r.jsx)("img", {
                        alt: d.intl.string(d.t.UOJp5a),
                        src: (0, l.qB)(f) ? m : g,
                        className: u.WI,
                    }),
                }),
            ],
        })
    );
}
