var i = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    r = n(622413),
    a = n(255314);
function o(e) {
    return (0, i.jsx)(r.A, { ...e, className: s()(e.className, { [a.sN]: !e.isHorizontal, [a.wO]: e.isHorizontal }) });
}
n.d(
    t,
    {},
    {
        W: (e) => {
            let { isHorizontal: t } = e;
            return (0, i.jsx)(o, {
                ...e,
                media: function () {
                    return (0, i.jsx)("div", {
                        className: a.FR,
                        children: (0, i.jsx)("div", {
                            className: s()(a.Wv, { [a._n]: t }),
                            children: (0, i.jsx)("div", { className: a.h$ }),
                        }),
                    });
                },
                title: function () {
                    return (0, i.jsx)("div", { className: s()(a.GE, { [a.E9]: t }) });
                },
            });
        },
        u: o,
    },
);
