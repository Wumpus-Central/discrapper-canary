n.d(t, { Tm: () => o, Wb: () => c, ug: () => d });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(622413),
    a = n(528241);
let o = 660;
function d(e) {
    return (0, i.jsx)(r.A, { ...e, className: s()(e.className, { [a.sN]: !e.isHorizontal, [a.wO]: e.isHorizontal }) });
}
let c = (e) => {
    let { isHorizontal: t } = e;
    return (0, i.jsx)(d, {
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
};
