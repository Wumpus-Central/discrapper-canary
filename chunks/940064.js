n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    o = n(481060),
    l = n(665692),
    s = n(135807);
function c(e) {
    let { commands: t, className: n } = e;
    return (0, i.jsx)('div', {
        className: r()(s.list, n),
        children: t.map((e) =>
            (0, i.jsxs)(
                'div',
                {
                    className: s.row,
                    children: [
                        (0, i.jsxs)(o.Text, {
                            className: s.commandName,
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: [l.GI, e.displayName]
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            children: e.displayDescription
                        })
                    ]
                },
                e.id
            )
        )
    });
}
