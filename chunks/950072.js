n.d(t, { A: () => u });
var l = n(627968),
    a = n(64700);
n(311907);
var r = n(602853),
    i = n(827734),
    s = n(939249),
    E = n(417454);
n(775602), n(967144);
var _ = n(818348);
function u(e) {
    let { guildId: t, role: n, className: u, canRemove: o = !1, onRemove: c = _.tE } = e,
        d = (0, r.r)(i.A.unsafe_rawColors.PRIMARY_300).hex(),
        A = n?.colorString ?? d,
        g = a.useMemo(() => ({ backgroundColor: `${A}27` }), [A]);
    return null == n
        ? null
        : (0, l.jsx)(s.D, {
              children: (0, l.jsx)(E.b_, { className: u, style: g, role: n, guildId: t, canRemove: o, onRemove: c }),
          });
}
