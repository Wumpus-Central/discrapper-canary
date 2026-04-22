n.d(t, { A: () => c });
var i = n(231723),
    l = n(192308),
    a = n(267102),
    s = n(70456),
    r = n(652215);
let o = "guild-event-modal",
    c = () => {
        let e = (0, a.Us)() === r.BRT.POPOUT ? i.KX : i.SY;
        return {
            modalKey: o,
            contextKey: e,
            onCloseRequest: () => {
                s.N.getState().canCloseModal && (0, l.closeModal)(o, e);
            },
        };
    };
