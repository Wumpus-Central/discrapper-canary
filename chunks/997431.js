n.d(t, {
    M: () => i,
    u: () => o
});
var r = n(981631);
function i(e, t) {
    if (null == e || '' === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
        ? null
        : n.toLocaleDateString(t, {
              year: 'numeric',
              month: 'short'
          });
}
function o(e) {
    return e.hasFeature(r.oNc.GUILD_TAGS);
}
