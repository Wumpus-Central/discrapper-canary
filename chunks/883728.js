i.d(t, { Z: () => s });
var n = i(200651);
i(192379);
var a = i(374470),
    o = i(239091);
let s = (e) => {
    let { facepileRef: t, goToThread: s, channel: l } = e;
    return {
        handleLeftClick: (e) => {
            var i;
            ((0, a.k)(e.target) && (null === (i = t.current) || void 0 === i ? void 0 : i.contains(e.target))) || s(l, e.shiftKey);
        },
        handleRightClick: (e) =>
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([i.e('38902'), i.e('11300')]).then(i.bind(i, 422200));
                return (t) =>
                    (0, n.jsx)(e, {
                        ...t,
                        channel: l
                    });
            })
    };
};
