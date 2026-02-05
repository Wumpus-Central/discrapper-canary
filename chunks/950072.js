n.d(t, { A: () => _, C: () => c });
var l = n(627968),
    r = n(64700),
    a = n(311907),
    i = n(397927),
    s = n(417454),
    o = n(775602),
    E = n(967144),
    u = n(818348);
function c(e) {
    let { role: t, guildId: n } = e,
        r = (0, E.X_)(n, t ?? void 0, t?.colorStrings),
        s = (0, a.bG)([o.A], () => o.A.roleStyle),
        u = (0, i.rdh)(i.LU0.unsafe_rawColors.PRIMARY_300).hex(),
        c = t?.colorString ?? u;
    return null == t
        ? null
        : "dot" === s
          ? (0, l.jsx)(i.WYI, { color: c ?? void 0, colors: r, background: !1, tooltip: !1 })
          : (0, l.jsx)(i.RYH, { color: c ?? null, colors: r });
}
function _(e) {
    let { guildId: t, role: n, className: a, canRemove: o = !1, onRemove: E = u.tE } = e,
        c = (0, i.rdh)(i.LU0.unsafe_rawColors.PRIMARY_300).hex(),
        _ = n?.colorString ?? c,
        d = r.useMemo(() => ({ backgroundColor: `${_}27` }), [_]);
    return null == n
        ? null
        : (0, l.jsx)(i.DUT, {
              children: (0, l.jsx)(s.b_, { className: a, style: d, role: n, guildId: t, canRemove: o, onRemove: E }),
          });
}
