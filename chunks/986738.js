"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(827734),
    l = n(397927),
    r = n(823508),
    a = n(47868),
    o = n(985018);
function c(e) {
    let { className: t, guildId: c } = e,
        d = (0, r.A)();
    return (0, i.jsx)(a.A, {
        className: t,
        icon: (0, i.jsx)(l.CTc, { size: "custom", color: "currentColor", height: 20, width: 20 }),
        color: s.A.unsafe_rawColors.BRAND_500.css,
        title: o.intl.string(o.t["60lJ0C"]),
        description: o.intl.string(o.t["EYn7/y"]),
        onClick: function () {
            (0, l.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("68587"), n.e("51354"), n.e("342"), n.e("83336")]).then(
                    n.bind(n, 21653),
                );
                return (t) => (0, i.jsx)(e, { ...t, guildId: c });
            }, d);
        },
    });
}
