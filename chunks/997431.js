t.d(n, {
    M: function () {
        return i;
    }
});
function i(e, n) {
    if (null == e || '' === e) return null;
    let t = new Date(e);
    return !(t instanceof Date) || isNaN(t.getTime())
        ? null
        : t.toLocaleDateString(n, {
              year: 'numeric',
              month: 'short'
          });
}
