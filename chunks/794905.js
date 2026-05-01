"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(688810),
    s = n(948138),
    a = n(74847),
    o = n(602902);
let l = (e) => {
    let { analyticsLocations: t } = (0, r.Ay)();
    return {
        onShareClick: i.useCallback(
            async (n) => {
                let { clips: i, onShareComplete: r, messageReference: l } = n;
                if (0 === i.length) return;
                let u = (0, a.t)(e);
                (0, s.H1)(i.map((e) => e.id));
                try {
                    await (0, o.K)(i, { channelId: u ? e : void 0, analyticsLocations: t, messageReference: l });
                } catch (e) {
                } finally {
                    (0, s.H1)(null), r?.();
                }
            },
            [e, t],
        ),
    };
};
