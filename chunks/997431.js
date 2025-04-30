n.d(t, {
    M: () => o,
    l: () => s
});
var r = n(131704),
    i = n(411198),
    a = n(981631);
function o(e, t) {
    if (null == e || '' === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
        ? null
        : n.toLocaleDateString(t, {
              year: 'numeric',
              month: 'short'
          });
}
function s(e) {
    if (null == e.guild || (0, i.Qs)(e.guild).hasFeature(a.oNc.HUB)) return !1;
    let t = (null == e ? void 0 : e.channel) != null ? (0, r.jD)(e.channel) : null;
    return null == t || !t.isGuildVocal();
}
