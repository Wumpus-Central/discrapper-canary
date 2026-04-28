"use strict";
l.d(t, { A: () => c });
var n = l(627968),
    i = l(64700);
l(17928);
var s = l(602853),
    a = l(661531),
    r = l(939249),
    o = l(417454);
l(775602), l(967144);
var d = l(818348);
function c(e) {
    let { guildId: t, role: l, className: c, canRemove: u = !1, onRemove: h = d.tE } = e,
        g = (0, s.r)(a.A.unsafe_rawColors.PRIMARY_300).hex(),
        m = l?.colorString ?? g,
        p = i.useMemo(() => ({ backgroundColor: `${m}27` }), [m]);
    return null == l
        ? null
        : (0, n.jsx)(r.D, {
              children: (0, n.jsx)(o.b_, { className: c, style: p, role: l, guildId: t, canRemove: u, onRemove: h }),
          });
}
