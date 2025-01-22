n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    l = n(481060),
    o = n(665692),
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
                        (0, i.jsxs)(l.Text, {
                            className: s.commandName,
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: [o.GI, e.displayName]
                        }),
                        (0, i.jsx)(l.Text, {
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
