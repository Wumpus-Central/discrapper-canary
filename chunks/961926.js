n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(536982),
    s = n(285318),
    a = n(456677),
    o = n(55889),
    c = n(300453),
    d = n(620436),
    u = n(273504),
    m = n(388032),
    h = n(318668);
function g(e) {
    var t, n, g;
    let { rule: x, onChangeRule: p } = e,
        f = r.useCallback(
            (e) => {
                p({
                    ...x,
                    triggerMetadata: {
                        ...x.triggerMetadata,
                        allowList: e
                    }
                });
            },
            [p, x]
        );
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: h.cardContentsContainer,
            children: [
                (0, i.jsxs)(c.Z, {
                    step: 1,
                    header: m.intl.string(m.t.CX5YfX),
                    children: [
                        (0, i.jsx)(s.Z, {
                            rule: x,
                            onChangeRule: p
                        }),
                        (0, i.jsx)(l.Z, {
                            onChange: f,
                            initialValue: null === (t = x.triggerMetadata) || void 0 === t ? void 0 : t.allowList,
                            maxWordCount: u.I3,
                            collapsed: (null === (n = x.triggerMetadata) || void 0 === n ? void 0 : n.allowList) == null || (null === (g = x.triggerMetadata) || void 0 === g ? void 0 : g.allowList.length) === 0
                        })
                    ]
                }),
                (0, i.jsx)(d.Z, { type: d.Z.Type.ARROW_DOWN }),
                (0, i.jsx)(c.Z, {
                    step: 2,
                    header: m.intl.string(m.t['18TOiY']),
                    children: (0, i.jsx)(a.Z, {
                        rule: x,
                        onChangeRule: p
                    })
                }),
                (0, i.jsx)(d.Z, { type: d.Z.Type.CROSS }),
                (0, i.jsx)(c.Z, {
                    step: 3,
                    header: m.intl.string(m.t.eq3gjo),
                    children: (0, i.jsx)(o.Z, {
                        rule: x,
                        onChangeRule: p
                    })
                })
            ]
        })
    });
}
