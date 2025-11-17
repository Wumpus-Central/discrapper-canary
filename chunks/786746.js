l.d(t, { default: () => o }), l(539854);
var i = l(54381);
l(473749);
var e = l(481060),
    s = l(239091),
    a = l(299206),
    r = l(867108),
    u = l(981631),
    d = l(388032);
function o(n) {
    let { role: t, guild: l, onSelect: o } = n,
        p = [],
        c = (0, r.Z)(l, t, u.pNK.INTEGRATIONS);
    null != c && p.push(c);
    let h = (0, a.Z)({
        id: t.id,
        label: d.intl.string(d.t.sMsaLg),
    });
    return (null != h && p.push(h), 0 === p.length)
        ? null
        : (0, i.jsx)(e.v2r, {
              navId: "guild-integrations-permission-role-context",
              "aria-label": d.intl.string(d.t["337Ja9"]),
              onClose: s.Zy,
              onSelect: o,
              children: p,
          });
}
