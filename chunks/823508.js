n.d(t, { A: () => o });
var i = n(397927),
    l = n(267102),
    s = n(70456),
    a = n(652215);
let r = "guild-event-modal",
    o = () => {
        let e = (0, l.Us)() === a.BRT.POPOUT ? i.KX8 : i.SYi;
        return {
            modalKey: r,
            contextKey: e,
            onCloseRequest: () => {
                s.N.getState().canCloseModal && (0, i.OoC)(r, e);
            },
        };
    };
