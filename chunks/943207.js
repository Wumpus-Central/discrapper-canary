n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(939249),
    a = n(658675),
    r = n(452027),
    o = n(123292),
    d = n(98207),
    u = n(235986),
    c = n(670492),
    g = n(957565),
    m = n(985018),
    _ = n(103579),
    A = n(818050);
function h(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        r = `${t.substr(0, 4)}-${t.substr(4)}`,
        o = s.useRef(null),
        d = s.useCallback(
            (e) => {
                "c" === e.key &&
                    e.metaKey &&
                    g.p5 &&
                    (e.preventDefault(), e.stopPropagation(), (0, g.C)(r), o?.current?.focus());
            },
            [r],
        );
    return (0, i.jsx)("li", {
        className: A.SX,
        children: (0, i.jsxs)(l.D, {
            innerRef: o,
            className: _.Uc,
            onKeyDown: d,
            children: [(0, i.jsx)(a.P, { checked: n }), (0, i.jsx)("span", { className: _.aY, children: r })],
        }),
    });
}
function p(e) {
    let { backupCodes: t } = e,
        n = s.useCallback((e) => e.map((e) => (0, i.jsx)(h, { code: e }, e.code)), []),
        l = s.useCallback(async () => {
            let e = c.A.getVerificationKey();
            await d.A.confirmViewBackupCodes(e, !0);
        }, []);
    return (0, i.jsxs)(r.D, {
        label: m.intl.string(m.t.GfqHPn),
        description: m.intl.format(m.t.OhmvYt, {}),
        children: [
            (0, i.jsxs)(u.A, {
                children: [
                    (0, i.jsx)(u.A.Child, {
                        children: (0, i.jsx)("ul", { className: _.Pm, children: n(t.slice(0, t.length / 2)) }),
                    }),
                    (0, i.jsx)(u.A.Child, {
                        children: (0, i.jsx)("ul", { className: _.Pm, children: n(t.slice(t.length / 2)) }),
                    }),
                ],
            }),
            (0, i.jsx)(o.Q, { textVariant: "text-sm/medium", onClick: l, text: m.intl.string(m.t.RIThUu) }),
        ],
    });
}
