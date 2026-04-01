"use strict";
n.d(t, { I: () => g });
var i = n(627968),
    s = n(64700),
    l = n(582754),
    r = n(397927),
    a = n(736653),
    o = n(997509),
    d = n(985018),
    c = n(114113),
    u = n(515176),
    m = n(2330);
function g(e) {
    let { canManageGuild: t, premiumProgressBarEnabled: n } = e,
        g = (0, a.Ay)(),
        x = s.useCallback((e) => {
            o.A.updateGuild({ premiumProgressBarEnabled: e });
        }, []);
    return (0, i.jsxs)("div", {
        className: c.kL,
        children: [
            (0, i.jsx)("div", {
                className: c.fi,
                children: (0, i.jsx)(r.dOG, {
                    label: d.intl.string(d.t.Dl4mJS),
                    description: d.intl.string(d.t.O87mwg),
                    checked: n,
                    onChange: x,
                    disabled: !t,
                }),
            }),
            (0, i.jsx)("div", {
                className: c.fi,
                children: (0, i.jsx)("img", {
                    alt: d.intl.string(d.t.UOJp5a),
                    src: (0, l.qB)(g) ? u.A : m.A,
                    className: c.WI,
                }),
            }),
        ],
    });
}
