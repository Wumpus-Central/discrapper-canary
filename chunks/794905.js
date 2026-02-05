n.d(t, { A: () => o });
var i = n(64700),
    l = n(688810),
    a = n(399925),
    r = n(74847),
    s = n(602902);
let o = (e) => {
    let { analyticsLocations: t } = (0, l.Ay)();
    return {
        onShareClick: i.useCallback(
            async (n) => {
                let { clips: i, onShareComplete: l, messageReference: o } = n;
                if (0 === i.length) return;
                let d = (0, r.t)(e);
                (0, a.H1)(i.map((e) => e.id));
                try {
                    await (0, s.K)(i, { channelId: d ? e : void 0, analyticsLocations: t, messageReference: o });
                } catch (e) {
                } finally {
                    (0, a.H1)(null), l?.();
                }
            },
            [e, t],
        ),
    };
};
