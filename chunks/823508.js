var o = a(231723),
    l = a(192308),
    s = a(267102),
    d = a(70456),
    n = a(652215);
let p = "guild-event-modal";
a.d(
    t,
    {},
    {
        A: function () {
            let e = (0, s.Us)() === n.BRT.POPOUT ? "popout" : o.SY;
            return {
                modalKey: p,
                contextKey: e,
                stackNextByDefault: !0,
                onCloseRequest: () => {
                    d.N.getState().canCloseModal && (0, l.Oo)(p, e);
                },
            };
        },
    },
);
