n.d(l, { M: () => i });
function i(e, l) {
    if (null == e || '' === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
        ? null
        : n.toLocaleDateString(l, {
              year: 'numeric',
              month: 'short'
          });
}
