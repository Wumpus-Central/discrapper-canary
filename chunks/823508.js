n.d(t, {
    A: () => o,
});
var r = n(397927),
    l = n(267102),
    i = n(70456),
    a = n(652215);
let s = "guild-event-modal",
    o = () => {
        let e = (0, l.Us)() === a.BRT.POPOUT ? r.KX8 : r.SYi;
        return {
            modalKey: s,
            contextKey: e,
            onCloseRequest: () => {
                i.N.getState().canCloseModal && (0, r.OoC)(s, e);
            },
        };
    };
