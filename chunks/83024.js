a.d(n, { default: () => k });
var i = a(627968),
    e = a(64700),
    l = a(189213),
    r = a(834730),
    s = a(939249),
    c = a(997509),
    o = a(976860),
    u = a(465105),
    d = a(652215),
    x = a(746080),
    h = a(985018),
    f = a(428127);
let k = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: a, onClose: k, transitionState: m, onConfirm: p } = t,
        { submitting: C, errorMessage: b, onSubmit: E } = (0, u.A)({ onSubmit: p, onClose: k }),
        g = e.useCallback(() => {
            k(), c.A.close(), (0, o.pX)(d.BVt.CHANNEL(n, x.VV.MEMBER_APPLICATIONS));
        }, [n, k]);
    return (0, i.jsxs)(l.Modal, {
        transitionState: m,
        onClose: k,
        title: h.intl.formatToPlainString(h.t.chV4Jb, { count: a }),
        actions: [
            { text: h.intl.string(h.t["ETE/oC"]), onClick: k, variant: "secondary" },
            { text: h.intl.string(h.t.LW0aUP), onClick: E, variant: "primary", loading: C },
        ],
        children: [
            (0, i.jsx)(r.E, {
                className: f.ij,
                color: "text-default",
                variant: "text-sm/normal",
                children: h.intl.string(h.t.uNQItz),
            }),
            (0, i.jsx)(s.D, {
                className: f.K2,
                onClick: g,
                children: (0, i.jsx)(r.E, {
                    variant: "text-sm/normal",
                    color: "text-link",
                    children: h.intl.string(h.t.szESVF),
                }),
            }),
            null != b && (0, i.jsx)(r.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: b }),
        ],
    });
};
