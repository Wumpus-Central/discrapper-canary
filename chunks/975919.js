n.d(t, { _: () => d });
var r = n(54381);
n(473749);
var a = n(793030),
    o = n(135102),
    l = n(526689),
    c = n(229373),
    s = n(518027),
    i = n(831989),
    u = n(388032);
let d = (e) => {
    let { transitionState: t, onClose: n } = e,
        { send: d, sending: b, canSend: f } = (0, o.C$)();
    return (0, r.jsx)(a.Modal, {
        title: u.intl.string(i.default.zgFs8C),
        actions: [
            {
                variant: "primary",
                text: u.intl.string(u.t.TXNS7S),
                onClick: d,
                loading: b,
                disabled: !f(),
            },
        ],
        transitionState: t,
        onClose: n,
        input: (0, r.jsx)(c.K, {}),
        actionBarInput: (0, r.jsx)(s.J, {}),
        children: (0, r.jsx)(l.d, {}),
    });
};
