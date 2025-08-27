n.d(t, { _: () => d });
var a = n(951288);
n(647438);
var o = n(82659),
    r = n(135102),
    s = n(526689),
    l = n(229373),
    i = n(518027),
    u = n(119475),
    c = n(388032);
let d = (e) => {
    let { transitionState: t, onClose: n } = e,
        { send: d, sending: _, canSend: f } = (0, r.C$)();
    return (0, a.jsx)(o.Modal, {
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
        input: (0, a.jsx)(l.K, {}),
        actionBarInput: (0, a.jsx)(i.J, {}),
        children: (0, a.jsx)(s.d, {}),
    });
};
