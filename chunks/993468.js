n.d(t, { default: () => T }), n(801541);
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(889137),
    l = n(158954),
    u = n(311907),
    d = n(397927),
    g = n(631670),
    c = n(963334),
    m = n(781436),
    E = n(836602),
    h = n(287809),
    S = n(927578),
    f = n(652215),
    _ = n(985018),
    O = n(197266);
function T(e) {
    var t;
    let { transitionState: n, onClose: s } = e,
        T = (0, u.bG)([h.default], () => {
            let e = h.default.getCurrentUser();
            return a()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e;
        }),
        A = r.useMemo(() => S.Ay.canEditDiscriminator(T) && !T.hasUniqueUsername(), [T]),
        [R, v] = r.useState(T.username),
        [y, L] = r.useState(T.discriminator),
        [p, C] = r.useState(""),
        [M, P] = r.useState(!1),
        b = (0, u.bG)([E.A], () => E.A.getErrors()),
        U = T.hasUniqueUsername(),
        w = (0, m.i)(R, U, !1, T.username),
        I = r.useRef(null),
        k = r.useMemo(() => b?.username?.[0] ?? b?.discriminator?.[0], [b]);
    r.useEffect(() => {
        n === d.ip4.ENTERED && I.current?.focus();
    }, [n]);
    let N = y !== T.discriminator;
    async function G(e) {
        e.preventDefault(), P(!0);
        let t = await (0, g.yu)({ username: R, discriminator: A ? y : void 0, password: p });
        P(!1), t?.ok && s();
    }
    return (0, i.jsx)("form", {
        onSubmit: G,
        children: (0, i.jsx)(l.Modal, {
            onClose: s,
            transitionState: n,
            title: _.intl.string(_.t.m5or54),
            subtitle: _.intl.string(_.t.SLJvy0),
            actions: [
                { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: s },
                { variant: "primary", text: _.intl.string(_.t.i4jeWR), type: "submit", loading: M },
            ],
            children: (0, i.jsxs)(d.BJc, {
                gap: 16,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)(d.BJc, {
                                direction: "horizontal",
                                gap: 4,
                                children: [
                                    (0, i.jsx)(d.ksK, {
                                        label: _.intl.string(_.t.TWzdWj),
                                        error: k,
                                        name: "username",
                                        value: R,
                                        maxLength: f.d0r,
                                        onChange: v,
                                        inputRef: I,
                                        fullWidth: !0,
                                        ...((t = T.hasUniqueUsername()),
                                        (0, o.YW)(w)
                                            .with({ type: c.q.ERROR, message: o.P.select() }, (e) => ({ error: e }))
                                            .with({ type: c.q.AVAILABLE, message: o.P.select() }, (e) => ({
                                                successMessage: e,
                                            }))
                                            .otherwise(() => (t ? { helperText: _.intl.string(_.t.z7c4bP) } : {}))),
                                    }),
                                    !T.hasUniqueUsername() &&
                                        (0, i.jsx)(d.ksK, {
                                            name: "discriminator",
                                            "aria-label": _.intl.string(_.t.ozumaN),
                                            maxLength: 4,
                                            value: y,
                                            onChange: L,
                                            disabled: !A,
                                            leading: "#",
                                        }),
                                ],
                            }),
                            N
                                ? (0, i.jsx)(d.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      className: O.Z,
                                      children: _.intl.string(_.t.mConUX),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(d.ksK, {
                        label: _.intl.string(_.t.TmdnJ3),
                        error: b?.password?.[0],
                        type: "password",
                        value: p,
                        onChange: C,
                    }),
                ],
            }),
        }),
    });
}
