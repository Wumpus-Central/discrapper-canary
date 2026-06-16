o.d(r, { A: () => d });
var s = o(627968),
    a = o(64700);
o(17928);
var l = o(602853),
    n = o(661531),
    u = o(939249),
    c = o(417454);
o(775602), o(967144);
var t = o(818348);
function d(e) {
    let { guildId: r, role: o, className: d, canRemove: i = !1, onRemove: h = t.tE } = e,
        p = (0, l.r)(n.A.unsafe_rawColors.PRIMARY_300).hex(),
        k = o?.colorString ?? p,
        v = a.useMemo(() => ({ backgroundColor: `${k}27` }), [k]);
    return null == o
        ? null
        : (0, s.jsx)(u.D, {
              children: (0, s.jsx)(c.b_, { className: d, style: v, role: o, guildId: r, canRemove: i, onRemove: h }),
          });
}
