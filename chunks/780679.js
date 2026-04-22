"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(411335),
    a = n(650583),
    o = n(985018);
function d(e) {
    let { rule: t, onChangeRule: n } = e,
        [d, c] = s.useState(t.name);
    return (0, i.jsx)(l.ksK, {
        label: o.intl.string(o.t.WVAHxF),
        onChange: (e) => {
            c(e), n({ ...t, name: e });
        },
        onClick: (e) => e.stopPropagation(),
        onKeyDown: (e) => {
            e.key === a.dh.SPACE && e.stopPropagation();
        },
        placeholder: o.intl.string(o.t["5AO43K"]),
        maxLength: r.NX,
        value: d,
    });
}
