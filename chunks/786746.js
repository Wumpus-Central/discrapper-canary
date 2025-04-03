i.d(t, { default: () => o }), i(653041);
var l = i(200651);
i(192379);
var e = i(481060),
    s = i(239091),
    a = i(299206),
    r = i(867108),
    u = i(981631),
    d = i(388032);
function o(n) {
    let { role: t, guild: i, onSelect: o } = n,
        p = [],
        c = (0, r.Z)(i, t, u.pNK.INTEGRATIONS);
    null != c && p.push(c);
    let h = (0, a.Z)({
        id: t.id,
        label: d.NW.string(d.t.sMsaLi)
    });
    return (null != h && p.push(h), 0 === p.length)
        ? null
        : (0, l.jsx)(e.v2r, {
              navId: 'guild-integrations-permission-role-context',
              'aria-label': d.NW.string(d.t['337Ja2']),
              onClose: s.Zy,
              onSelect: o,
              children: p
          });
}
