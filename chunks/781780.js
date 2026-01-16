t.d(n, { Z: () => l });
var a = t(54381),
    o = t(963614),
    r = t(208156),
    c = t(701488),
    i = t(968352);
function l(e) {
    let { application: n, queryParams: t, url: l } = e;
    return (0, a.jsx)(r.J, {
        allowPopups: (0, o.h)(n),
        referrerPolicy: c.um.has(n.id) ? "no-referrer" : "origin",
        url: l,
        queryParams: t,
        className: i.iframe,
        shouldRefocus: !1,
    });
}
