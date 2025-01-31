n.d(t, {
    q: () =>
        function e(t) {
            return 'string' == typeof t || 'number' == typeof t ? t : t instanceof Array ? t.map(e).join('') : i.isValidElement(t) ? e(t.props.children) : void 0;
        }
});
var i = n(192379);
