a.d(n, { default: () => m });
var i = a(477900),
    l = a(582128),
    e = a(189213),
    r = a(834730),
    s = a(939249),
    c = a(727419),
    o = a(976860),
    u = a(627784),
    d = a(652215),
    h = a(746080),
    b = a(792996),
    k = a(695416);
let m = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: a, onClose: m, transitionState: x, onConfirm: C } = t,
        {
            submitting: E,
            errorMessage: p,
            onSubmit: g,
        } = (function (t) {
            let { onSubmit: n, onClose: a } = t,
                [i, e] = l.useState(!1),
                [r, s] = l.useState(null),
                c = l.useCallback(async () => {
                    if (!i) {
                        (e(!0), s(null));
                        try {
                            (await n(), a());
                        } catch (t) {
                            (s(new u.LG(t).getAnyErrorMessage()), e(!1));
                        }
                    }
                }, [a, n, i]);
            return { submitting: i, errorMessage: r, onSubmit: c };
        })({ onSubmit: C, onClose: m }),
        y = l.useCallback(() => {
            (m(), c.A.close(), (0, o.pX)(d.BVt.CHANNEL(n, h.VV.MEMBER_APPLICATIONS)));
        }, [n, m]);
    return (0, i.jsxs)(e.a, {
        transitionState: x,
        onClose: m,
        title: b.intl.formatToPlainString(b.t.chV4Jb, { count: a }),
        actions: [
            { text: b.intl.string(b.t["ETE/oC"]), onClick: m, variant: "secondary" },
            { text: b.intl.string(b.t.LW0aUP), onClick: g, variant: "primary", loading: E },
        ],
        children: [
            (0, i.jsx)(r.E, {
                className: k.ij,
                color: "text-default",
                variant: "body-sm/normal",
                children: b.intl.string(b.t.uNQItz),
            }),
            (0, i.jsx)(s.D, {
                className: k.K2,
                onClick: y,
                children: (0, i.jsx)(r.E, {
                    variant: "body-sm/normal",
                    color: "text-link",
                    children: b.intl.string(b.t.szESVF),
                }),
            }),
            null != p && (0, i.jsx)(r.E, { variant: "body-xs/normal", color: "text-feedback-critical", children: p }),
        ],
    });
};
