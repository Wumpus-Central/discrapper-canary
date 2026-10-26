t.d(n, { A: () => u });
var i = t(477900);
t(582128);
var l = t(661531),
    s = t(192308),
    a = t(81466),
    r = t(823508),
    o = t(47868),
    c = t(105292);
function u(e) {
    let { className: n, guildId: u } = e,
        d = (0, r.A)();
    return (0, i.jsx)(o.A, {
        className: n,
        icon: (0, i.jsx)(a.CalendarIcon, { size: "custom", color: "currentColor", height: 20, width: 20 }),
        color: l.A.unsafe_rawColors.BRAND_500.css,
        title: c.intl.string(c.t["60lJ0C"]),
        description: c.intl.string(c.t["EYn7/y"]),
        onClick: function () {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("670870"),
                    t.e("884841"),
                    t.e("998835"),
                    t.e("468555"),
                    t.e("862179"),
                    t.e("191601"),
                    t.e("936875"),
                    t.e("370017"),
                    t.e("730931"),
                    t.e("711162"),
                    t.e("948054"),
                    t.e("159957"),
                    t.e("728136"),
                    t.e("216084"),
                    t.e("409391"),
                    t.e("810262"),
                    t.e("901922"),
                    t.e("756684"),
                    t.e("970644"),
                    t.e("752695"),
                    t.e("449347"),
                    t.e("853934"),
                    t.e("468248"),
                    t.e("469647"),
                    t.e("670089"),
                    t.e("870160"),
                    t.e("454450"),
                    t.e("222689"),
                ]).then(t.bind(t, 303224));
                return (n) => (0, i.jsx)(e, { ...n, guildId: u });
            }, d);
        },
    });
}
