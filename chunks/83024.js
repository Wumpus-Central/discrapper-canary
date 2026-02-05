e.d(n, { default: () => f });
var a = e(627968),
    i = e(64700),
    l = e(158954),
    r = e(397927),
    s = e(997509),
    c = e(976860),
    o = e(465105),
    u = e(652215),
    x = e(746080),
    d = e(985018),
    h = e(442146);
let f = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: e, onClose: f, transitionState: k, onConfirm: m } = t,
        { submitting: p, errorMessage: C, onSubmit: b } = (0, o.A)({ onSubmit: m, onClose: f }),
        T = i.useCallback(() => {
            f(), s.A.close(), (0, c.pX)(u.BVt.CHANNEL(n, x.VV.MEMBER_APPLICATIONS));
        }, [n, f]);
    return (0, a.jsxs)(l.Modal, {
        transitionState: k,
        onClose: f,
        title: d.intl.formatToPlainString(d.t.chV4Jb, { count: e }),
        actions: [
            { text: d.intl.string(d.t["ETE/oC"]), onClick: f, variant: "secondary" },
            { text: d.intl.string(d.t.LW0aUP), onClick: b, variant: "primary", loading: p },
        ],
        children: [
            (0, a.jsx)(r.Text, {
                className: h.ij,
                color: "text-default",
                variant: "text-sm/normal",
                children: d.intl.string(d.t.uNQItz),
            }),
            (0, a.jsx)(r.DUT, {
                className: h.K2,
                onClick: T,
                children: (0, a.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-link",
                    children: d.intl.string(d.t.szESVF),
                }),
            }),
            null != C &&
                (0, a.jsx)(r.Text, { variant: "text-xs/normal", color: "text-feedback-critical", children: C }),
        ],
    });
};
