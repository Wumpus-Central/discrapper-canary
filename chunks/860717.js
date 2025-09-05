r.d(t, { Z: () => a });
var n = r(951288);
r(647438);
var i = r(481060),
    l = r(86419),
    o = r(750312);
function a(e) {
    let { user: t, widget: r, containerClassName: a, disableInteraction: c } = e;
    return (0, n.jsxs)(o.Z, {
        userId: t.id,
        widget: r,
        className: a,
        disableInteraction: c,
        children: [
            (0, n.jsx)(i.Text, { variant: "text-md/normal" }),
            (0, n.jsx)(i.P3F, {
                onClick: function () {
                    (0, l.y8)(r.type);
                },
                children: (0, n.jsx)(i.XHJ, { color: i.TVs.colors.STATUS_DANGER }),
            }),
        ],
    });
}
