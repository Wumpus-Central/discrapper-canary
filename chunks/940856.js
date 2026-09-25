n.d(i, { S: () => o });
var a = n(477900);
(n(582128), n(284009), n(17928));
var e = n(139033),
    l = n(189213),
    r = n(192308),
    s = n(830215);
n(287809);
var c = n(375708);
function o(t) {
    return s.A.verifyResend()
        .then(() => {
            (0, e.A)({ title: c.intl.string(c.t.LykQYk), subtitle: c.intl.format(c.t.azKEPy, { email: t.email }) });
        })
        .catch((t) => {
            let { body: i } = t,
                n = c.intl.string(c.t.XcrQN5);
            (null != i && i.email && (n = i.email),
                (0, r.openModal)((t) =>
                    (0, a.jsx)(l.a, {
                        actions: [{ variant: "primary", text: c.intl.string(c.t.BddRzS), onClick: t.onClose }],
                        title: c.intl.string(c.t.VbTh0E),
                        subtitle: n,
                        ...t,
                    }),
                ));
        });
}
