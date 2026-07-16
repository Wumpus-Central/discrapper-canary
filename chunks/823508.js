t.d(a, { A: () => u });
var l = t(231723),
    o = t(192308),
    s = t(267102),
    d = t(70456),
    n = t(652215);
let c = "guild-event-modal",
    u = function () {
        let e = (0, s.Us)() === n.BRT.POPOUT ? l.KX : l.SY;
        return {
            modalKey: c,
            contextKey: e,
            stackNextByDefault: !0,
            onCloseRequest: () => {
                d.N.getState().canCloseModal && (0, o.closeModal)(c, e);
            },
        };
    };
