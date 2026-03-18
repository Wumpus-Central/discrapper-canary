"use strict";
n.d(t, { I: () => x });
var i = n(627968),
    s = n(64700),
    l = n(582754),
    r = n(397927),
    a = n(736653),
    o = n(903223),
    d = n(997509),
    c = n(985018),
    u = n(600854),
    m = n(515176),
    g = n(2330);
function x(e) {
    let { guildId: t, canManageGuild: n, premiumProgressBarEnabled: x } = e,
        h = (0, a.Ay)(),
        _ = s.useCallback((e) => {
            d.A.updateGuild({ premiumProgressBarEnabled: e });
        }, []);
    return (
        s.useEffect(() => {
            o.Ay.trackExposure({ guildId: t, location: "guild-settings" });
        }, [t]),
        (0, i.jsxs)("div", {
            className: u.kL,
            children: [
                (0, i.jsx)("div", {
                    className: u.fi,
                    children: (0, i.jsx)(r.dOG, {
                        label: c.intl.string(c.t.Dl4mJS),
                        description: c.intl.string(c.t.O87mwg),
                        checked: x,
                        onChange: _,
                        disabled: !n,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: u.fi,
                    children: (0, i.jsx)("img", {
                        alt: c.intl.string(c.t.UOJp5a),
                        src: (0, l.qB)(h) ? m.A : g.A,
                        className: u.WI,
                    }),
                }),
            ],
        })
    );
}
