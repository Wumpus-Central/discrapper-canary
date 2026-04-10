"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    r = n(688810),
    s = n(399925),
    l = n(74847),
    a = n(602902);
let c = (e) => {
    let { analyticsLocations: t } = (0, r.Ay)();
    return {
        onShareClick: i.useCallback(
            async (n) => {
                let { clips: i, onShareComplete: r, messageReference: c } = n;
                if (0 === i.length) return;
                let o = (0, l.t)(e);
                (0, s.H1)(i.map((e) => e.id));
                try {
                    await (0, a.K)(i, { channelId: o ? e : void 0, analyticsLocations: t, messageReference: c });
                } catch (e) {
                } finally {
                    (0, s.H1)(null), r?.();
                }
            },
            [e, t],
        ),
    };
};
