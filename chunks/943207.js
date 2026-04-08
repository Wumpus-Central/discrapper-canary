n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(98207),
    r = n(235986),
    o = n(670492),
    d = n(957565),
    c = n(985018),
    u = n(596192),
    m = n(153335);
function g(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        a = `${t.substr(0, 4)}-${t.substr(4)}`,
        r = s.useRef(null),
        o = s.useCallback(
            (e) => {
                "c" === e.key &&
                    e.metaKey &&
                    d.p5 &&
                    (e.preventDefault(), e.stopPropagation(), (0, d.C)(a), r?.current?.focus());
            },
            [a],
        );
    return (0, i.jsx)("li", {
        className: m.SX,
        children: (0, i.jsxs)(l.DUT, {
            innerRef: r,
            className: u.Uc,
            onKeyDown: o,
            children: [(0, i.jsx)(l.P7L, { checked: n }), (0, i.jsx)("span", { className: u.aY, children: a })],
        }),
    });
}
function _(e) {
    let { backupCodes: t } = e,
        n = s.useCallback((e) => e.map((e) => (0, i.jsx)(g, { code: e }, e.code)), []),
        d = s.useCallback(async () => {
            let e = o.A.getVerificationKey();
            await a.A.confirmViewBackupCodes(e, !0);
        }, []);
    return (0, i.jsxs)(l.D0$, {
        label: c.intl.string(c.t.GfqHPn),
        description: c.intl.format(c.t.OhmvYt, {}),
        children: [
            (0, i.jsxs)(r.A, {
                children: [
                    (0, i.jsx)(r.A.Child, {
                        children: (0, i.jsx)("ul", { className: u.Pm, children: n(t.slice(0, t.length / 2)) }),
                    }),
                    (0, i.jsx)(r.A.Child, {
                        children: (0, i.jsx)("ul", { className: u.Pm, children: n(t.slice(t.length / 2)) }),
                    }),
                ],
            }),
            (0, i.jsx)(l.QWc, { textVariant: "text-sm/medium", onClick: d, text: c.intl.string(c.t.RIThUu) }),
        ],
    });
}
