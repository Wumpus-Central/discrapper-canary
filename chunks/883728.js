n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var a = n(374470),
    o = n(239091);
let s = (e) => {
    let { facepileRef: t, goToThread: s, channel: l } = e;
    return {
        handleLeftClick: (e) => {
            var n;
            ((0, a.k)(e.target) && (null === (n = t.current) || void 0 === n ? void 0 : n.contains(e.target))) || s(l, e.shiftKey);
        },
        handleRightClick: (e) =>
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('38902'), n.e('77564'), n.e('18383')]).then(n.bind(n, 422200));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channel: l
                    });
            })
    };
};
