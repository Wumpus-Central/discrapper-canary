n.d(t, { I: () => g });
var r = n(627968),
    i = n(64700),
    l = n(582754),
    s = n(397927),
    a = n(736653),
    c = n(997509),
    o = n(985018),
    d = n(600854),
    u = n(347953),
    f = n(622327);
function g(e) {
    let { canManageGuild: t, premiumProgressBarEnabled: n } = e,
        g = (0, a.Ay)(),
        b = i.useCallback((e) => {
            c.A.updateGuild({ premiumProgressBarEnabled: e });
        }, []);
    return (0, r.jsxs)("div", {
        className: d.kL,
        children: [
            (0, r.jsx)("div", {
                className: d.fi,
                children: (0, r.jsx)(s.dOG, {
                    label: o.intl.string(o.t.Dl4mJS),
                    description: o.intl.string(o.t.xzHcod),
                    checked: n,
                    onChange: b,
                    disabled: !t,
                }),
            }),
            (0, r.jsx)("div", {
                className: d.fi,
                children: (0, r.jsx)("img", {
                    alt: o.intl.string(o.t.UOJp5a),
                    src: (0, l.qB)(g) ? f : u,
                    className: d.WI,
                }),
            }),
        ],
    });
}
