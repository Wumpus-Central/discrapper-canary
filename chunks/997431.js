n.d(t, { M: () => i });
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
