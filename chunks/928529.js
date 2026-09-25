a.d(n, { default: () => m });
var i = a(477900),
    e = a(582128),
    l = a(189213),
    r = a(834730),
    s = a(939249),
    c = a(468689),
    o = a(976860),
    u = a(913122),
    d = a(652215),
    x = a(746080),
    h = a(375708),
    k = a(695416);
let m = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: a, onClose: m, transitionState: C, onConfirm: E } = t,
        {
            submitting: p,
            errorMessage: b,
            onSubmit: g,
        } = (function (t) {
            let { onSubmit: n, onClose: a } = t,
                [i, l] = e.useState(!1),
                [r, s] = e.useState(null),
                c = e.useCallback(async () => {
                    if (!i) {
                        (l(!0), s(null));
                        try {
                            (await n(), a());
                        } catch (t) {
                            (s(new u.LG(t).getAnyErrorMessage()), l(!1));
                        }
                    }
                }, [a, n, i]);
            return { submitting: i, errorMessage: r, onSubmit: c };
        })({ onSubmit: E, onClose: m }),
        S = e.useCallback(() => {
            (m(), c.A.close(), (0, o.pX)(d.BVt.CHANNEL(n, x.VV.MEMBER_APPLICATIONS)));
        }, [n, m]);
    return (0, i.jsxs)(l.a, {
        transitionState: C,
        onClose: m,
        title: h.intl.formatToPlainString(h.t.chV4Jb, { count: a }),
        actions: [
            { text: h.intl.string(h.t["ETE/oC"]), onClick: m, variant: "secondary" },
            { text: h.intl.string(h.t.LW0aUP), onClick: g, variant: "primary", loading: p },
        ],
        children: [
            (0, i.jsx)(r.E, {
                className: k.ij,
                color: "text-default",
                variant: "text-sm/normal",
                children: h.intl.string(h.t.uNQItz),
            }),
            (0, i.jsx)(s.D, {
                className: k.K2,
                onClick: S,
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
