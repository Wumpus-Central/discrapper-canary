n.d(t, { _: () => d });
var r = n(951288);
n(647438);
var a = n(793030),
    o = n(135102),
    l = n(526689),
    s = n(229373),
    i = n(518027),
    c = n(24864),
    u = n(388032);
let d = (e) => {
    let { transitionState: t, onClose: n } = e,
        { send: d, sending: f, canSend: b } = (0, o.C$)();
    return (0, r.jsx)(a.Modal, {
        title: u.intl.string(c.default.zgFs8C),
        actions: [
            {
                variant: "primary",
                text: u.intl.string(u.t.TXNS7S),
                onClick: d,
                loading: f,
                disabled: !b(),
            },
        ],
        transitionState: t,
        onClose: n,
        input: (0, r.jsx)(s.K, {}),
        actionBarInput: (0, r.jsx)(i.J, {}),
        children: (0, r.jsx)(l.d, {}),
    });
};
