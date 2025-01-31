n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(477660),
    a = n.n(r),
    s = n(481060);
function o(e) {
    return (
        (e.paragraph = {
            ...e.paragraph,
            react: function (e, t, n) {
                return (0, i.jsx)('p', { children: t(e.content, n) }, n.key);
            }
        }),
        (e.link = {
            ...e.link,
            react: function (e, t, n) {
                let r = {};
                if (null != e.context) {
                    let t = e.context[e.target];
                    t && t.onClick ? ((r.onClick = t.onClick), (r.onContextMenu = t.onContextMenu)) : (r.onClick = t);
                }
                return (
                    null == r.onClick && (r.href = a().sanitizeUrl(e.target)),
                    (0, i.jsx)(
                        s.eee,
                        {
                            title: e.title,
                            ...r,
                            children: t(e.content, n)
                        },
                        n.key
                    )
                );
            }
        }),
        e
    );
}
