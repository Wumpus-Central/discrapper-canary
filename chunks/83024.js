a.d(n, { default: () => f });
var e = a(627968),
    i = a(64700),
    l = a(158954),
    r = a(397927),
    s = a(997509),
    c = a(976860),
    o = a(465105),
    u = a(652215),
    d = a(746080),
    x = a(985018),
    h = a(442146);
let f = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: a, onClose: f, transitionState: k, onConfirm: m } = t,
        {
            submitting: C,
            errorMessage: p,
            onSubmit: b,
        } = (0, o.A)({
            onSubmit: m,
            onClose: f,
        }),
        g = i.useCallback(() => {
            f(), s.A.close(), (0, c.pX)(u.BVt.CHANNEL(n, d.VV.MEMBER_APPLICATIONS));
        }, [n, f]);
    return (0, e.jsxs)(l.Modal, {
        transitionState: k,
        onClose: f,
        title: x.intl.formatToPlainString(x.t.chV4Jb, { count: a }),
        actions: [
            {
                text: x.intl.string(x.t["ETE/oC"]),
                onClick: f,
                variant: "secondary",
            },
            {
                text: x.intl.string(x.t.LW0aUP),
                onClick: b,
                variant: "primary",
                loading: C,
            },
        ],
        children: [
            (0, e.jsx)(r.Text, {
                className: h.ij,
                color: "text-default",
                variant: "text-sm/normal",
                children: x.intl.string(x.t.uNQItz),
            }),
            (0, e.jsx)(r.DUT, {
                className: h.K2,
                onClick: g,
                children: (0, e.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-link",
                    children: x.intl.string(x.t.szESVF),
                }),
            }),
            null != p &&
                (0, e.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    children: p,
                }),
        ],
    });
};
