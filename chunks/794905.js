s.d(t, { A: () => d });
var a = s(64700),
    n = s(688810),
    i = s(607814),
    r = s(74847),
    o = s(602902);
let d = (e) => {
    let { analyticsLocations: t } = (0, n.Ay)();
    return {
        onShareClick: a.useCallback(
            async (s) => {
                let { clips: a, onShareComplete: n, messageReference: d } = s;
                if (0 === a.length) return;
                let l = (0, r.t)(e);
                (0, i.H1)(a.map((e) => e.id));
                try {
                    await (0, o.K)(a, { channelId: l ? e : void 0, analyticsLocations: t, messageReference: d });
                } catch (e) {
                } finally {
                    (0, i.H1)(null), n?.();
                }
            },
            [e, t],
        ),
    };
};
