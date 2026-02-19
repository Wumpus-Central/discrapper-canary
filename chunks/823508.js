"use strict";
n.d(t, { A: () => o });
var i = n(397927),
    s = n(267102),
    l = n(70456),
    r = n(652215);
let a = "guild-event-modal",
    o = () => {
        let e = (0, s.Us)() === r.BRT.POPOUT ? i.KX8 : i.SYi;
        return {
            modalKey: a,
            contextKey: e,
            onCloseRequest: () => {
                l.N.getState().canCloseModal && (0, i.OoC)(a, e);
            },
        };
    };
