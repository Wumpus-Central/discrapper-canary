t.d(a, { A: () => p });
var l = t(231723),
    o = t(192308),
    s = t(267102),
    d = t(70456),
    c = t(652215);
let n = "guild-event-modal",
    p = () => {
        let e = (0, s.Us)() === c.BRT.POPOUT ? l.KX : l.SY;
        return {
            modalKey: n,
            contextKey: e,
            stackNextByDefault: !0,
            onCloseRequest: () => {
                d.N.getState().canCloseModal && (0, o.closeModal)(n, e);
            },
        };
    };
