i.d(n, { default: () => k });
var a = i(627968),
    e = i(64700),
    l = i(189213),
    r = i(834730),
    s = i(939249),
    c = i(997509),
    o = i(976860),
    u = i(845584),
    d = i(652215),
    x = i(746080),
    h = i(985018),
    f = i(428127);
let k = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: i, onClose: k, transitionState: m, onConfirm: p } = t,
        {
            submitting: C,
            errorMessage: b,
            onSubmit: E,
        } = (function (t) {
            let { onSubmit: n, onClose: i } = t,
                [a, l] = e.useState(!1),
                [r, s] = e.useState(null),
                c = e.useCallback(async () => {
                    if (!a) {
                        l(!0), s(null);
                        try {
                            await n(), i();
                        } catch (t) {
                            s(new u.LG(t).getAnyErrorMessage()), l(!1);
                        }
                    }
                }, [i, n, a]);
            return { submitting: a, errorMessage: r, onSubmit: c };
        })({ onSubmit: p, onClose: k }),
        g = e.useCallback(() => {
            k(), c.A.close(), (0, o.pX)(d.BVt.CHANNEL(n, x.VV.MEMBER_APPLICATIONS));
        }, [n, k]);
    return (0, a.jsxs)(l.Modal, {
        transitionState: m,
        onClose: k,
        title: h.intl.formatToPlainString(h.t.chV4Jb, { count: i }),
        actions: [
            { text: h.intl.string(h.t["ETE/oC"]), onClick: k, variant: "secondary" },
            { text: h.intl.string(h.t.LW0aUP), onClick: E, variant: "primary", loading: C },
        ],
        children: [
            (0, a.jsx)(r.E, {
                className: f.ij,
                color: "text-default",
                variant: "text-sm/normal",
                children: h.intl.string(h.t.uNQItz),
            }),
            (0, a.jsx)(s.D, {
                className: f.K2,
                onClick: g,
                children: (0, a.jsx)(r.E, {
                    variant: "text-sm/normal",
                    color: "text-link",
                    children: h.intl.string(h.t.szESVF),
                }),
            }),
            null != b && (0, a.jsx)(r.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: b }),
        ],
    });
};
