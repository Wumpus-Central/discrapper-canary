t.d(n, {
    Z: function () {
        return s;
    }
});
var l = t(200651);
t(192379);
var i = t(911969),
    r = t(861529),
    a = t(568248),
    o = t(510368);
function s(e) {
    let { components: n, accessory: t } = e;
    return (0, l.jsx)('div', {
        children: (0, l.jsxs)('div', {
            className: o.children,
            children: [
                (0, l.jsx)('div', {
                    className: o.textChildren,
                    children: n.map((e) => (0, l.jsx)(r.Z, { ...e }, e.id))
                }),
                (0, l.jsx)('div', {
                    children: (function (e) {
                        if (e.type === i.re.THUMBNAIL) return (0, l.jsx)(a.Z, { ...e });
                    })(t)
                })
            ]
        })
    });
}
