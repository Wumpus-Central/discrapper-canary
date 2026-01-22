n.d(t, {
    o: () => l,
});
var r = n(627968),
    i = n(64700),
    a = n(460890),
    s = n(834730),
    o = n(406743);

function l(e) {
    let { message: t } = e,
        { i18n: n } = i.useContext(a.VO);
    return (0, r.jsx)("div", {
        className: o.p,
        children: (0, r.jsx)(s.E, {
            variant: "text-md/medium",
            className: o.q,
            children: null != t ? t : n.LISTBOX_EMPTY_STATE,
        }),
    });
}
