n.d(t, { _: () => d });
var a = n(951288);
n(647438);
var l = n(793030),
    s = n(135102),
    o = n(526689),
    r = n(229373),
    i = n(518027),
    u = n(119475),
    c = n(388032);
let d = (e) => {
    let { transitionState: t, onClose: n } = e,
        { send: d, sending: _, canSend: f } = (0, s.C$)();
    return (0, a.jsx)(l.Modal, {
        title: c.intl.string(u.default.zgFs8P),
        actions: [
            {
                variant: "primary",
                text: c.intl.string(c.t.TXNS7e),
                onClick: d,
                loading: _,
                disabled: !f(),
            },
        ],
        transitionState: t,
        onClose: n,
        input: (0, a.jsx)(r.K, {}),
        actionBarInput: (0, a.jsx)(i.J, {}),
        children: (0, a.jsx)(o.d, {}),
    });
};
