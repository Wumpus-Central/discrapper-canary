n.d(t, { Tm: () => o, Wb: () => d, ug: () => c });
var i = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    a = n(622413),
    r = n(255314);
let o = 660;
function c(e) {
    return (0, i.jsx)(a.A, { ...e, className: s()(e.className, { [r.sN]: !e.isHorizontal, [r.wO]: e.isHorizontal }) });
}
let d = (e) => {
    let { isHorizontal: t } = e;
    return (0, i.jsx)(c, {
        ...e,
        media: function () {
            return (0, i.jsx)("div", {
                className: r.FR,
                children: (0, i.jsx)("div", {
                    className: s()(r.Wv, { [r._n]: t }),
                    children: (0, i.jsx)("div", { className: r.h$ }),
                }),
            });
        },
        title: function () {
            return (0, i.jsx)("div", { className: s()(r.GE, { [r.E9]: t }) });
        },
    });
};
