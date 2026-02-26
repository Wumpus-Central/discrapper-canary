n.d(t, { A: () => o });
var l = n(627968),
    r = n(64700);
n(311907);
var a = n(397927),
    i = n(417454);
n(775602), n(967144);
var s = n(818348);
function o(e) {
    let { guildId: t, role: n, className: o, canRemove: E = !1, onRemove: u = s.tE } = e,
        c = (0, a.rdh)(a.LU0.unsafe_rawColors.PRIMARY_300).hex(),
        _ = n?.colorString ?? c,
        d = r.useMemo(() => ({ backgroundColor: `${_}27` }), [_]);
    return null == n
        ? null
        : (0, l.jsx)(a.DUT, {
              children: (0, l.jsx)(i.b_, { className: o, style: d, role: n, guildId: t, canRemove: E, onRemove: u }),
          });
}
