n.d(t, { A: () => o });
var i = n(64700),
    a = n(688810),
    r = n(399925),
    l = n(74847),
    s = n(602902);
let o = (e) => {
    let { analyticsLocations: t } = (0, a.Ay)();
    return {
        onShareClick: i.useCallback(
            async (n) => {
                let { clips: i, onShareComplete: a, messageReference: o } = n;
                if (0 === i.length) return;
                let d = (0, l.t)(e);
                (0, r.H1)(i.map((e) => e.id));
                try {
                    await (0, s.K)(i, { channelId: d ? e : void 0, analyticsLocations: t, messageReference: o });
                } catch (e) {
                } finally {
                    (0, r.H1)(null), a?.();
                }
            },
            [e, t],
        ),
    };
};
