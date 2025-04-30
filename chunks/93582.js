n.d(t, { q: () => i });
var r = n(192379);
function i(e) {
    return 'string' == typeof e || 'number' == typeof e ? e : e instanceof Array ? e.map(i).join('') : r.isValidElement(e) ? i(e.props.children) : void 0;
}
