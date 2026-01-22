n.d(t, { A: () => l });
var r = n(64700),
    i = n(688810),
    a = n(399925),
    s = n(74847),
    o = n(602902);
let l = (e) => {
    let { analyticsLocations: t } = (0, i.Ay)();
    return {
        onShareClick: r.useCallback(
            async (n) => {
                let { clips: r, onShareComplete: i, messageReference: l } = n;
                if (0 === r.length) return;
                let c = (0, s.t)(e);
                (0, a.H1)(r.map((e) => e.id));
                try {
                    await (0, o.K)(r, {
                        channelId: c ? e : void 0,
                        analyticsLocations: t,
                        messageReference: l,
                    });
                } catch (e) {
                } finally {
                    (0, a.H1)(null), null == i || i();
                }
            },
            [e, t],
        ),
    };
};
