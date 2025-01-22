r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(477660),
    o = r.n(a),
    s = r(481060);
function l(e) {
    return (
        (e.paragraph = {
            ...e.paragraph,
            react: function (e, n, r) {
                return (0, i.jsx)('p', { children: n(e.content, r) }, r.key);
            }
        }),
        (e.link = {
            ...e.link,
            react: function (e, n, r) {
                let a = {};
                if (null != e.context) {
                    let n = e.context[e.target];
                    n && n.onClick ? ((a.onClick = n.onClick), (a.onContextMenu = n.onContextMenu)) : (a.onClick = n);
                }
                return (
                    null == a.onClick && (a.href = o().sanitizeUrl(e.target)),
                    (0, i.jsx)(
                        s.Anchor,
                        {
                            title: e.title,
                            ...a,
                            children: n(e.content, r)
                        },
                        r.key
                    )
                );
            }
        }),
        e
    );
}
