t.d(n, { A: () => g });
var l = t(858899),
    u = t(582128),
    r = t(79733),
    a = t(809526),
    i = t(105292);
function o(e) {
    return null != e && e.upToDate && "publish" === e.action && !e.awaitingApproval;
}
function s(e, n) {
    return null != n
        ? n
        : null == e
          ? i.intl.string(a.default["120EFN"])
          : o(e) && !e.publishing
            ? i.intl.string(a.default.kAfbEN)
            : e.label;
}
var c = t(373540),
    d = t(477900),
    f = t(189213),
    p = t(144228),
    b = t(192308);
function h(e) {
    let { options: n, onDone: t, transitionState: l, onClose: r } = e,
        [o, s] = u.useState(n.selected_destination_id),
        c = i.intl.string(a.default.lJrOGW);
    return (0, d.jsx)(f.a, {
        transitionState: l,
        onClose: r,
        title: c,
        size: "sm",
        actions: [
            { text: i.intl.string(a.default.y83r6D), variant: "secondary", onClick: r },
            {
                text: i.intl.string(a.default.zh1Izp),
                variant: "primary",
                onClick: () => {
                    (t(o), r());
                },
            },
        ],
        children: (0, d.jsx)(p.z, {
            label: c,
            options: n.destinations.map((e) => {
                let { id: n, label: t } = e;
                return { name: t, value: n };
            }),
            value: o,
            onChange: s,
        }),
    });
}
let m = {
    showPublishBlocked: c.A,
    promptPublishDestination: function (e) {
        return new Promise((n) => {
            let t = null;
            (0, b.openModal)(
                (n) =>
                    (0, d.jsx)(h, {
                        ...n,
                        options: e,
                        onDone: (e) => {
                            t = e;
                        },
                    }),
                { onCloseCallback: () => n(t) },
            );
        });
    },
    showError: (e) => (0, l.P0)({ text: e, variant: "critical" }),
};
function g(e, n, t) {
    return (function (e, n, t, l) {
        let [a, i] = u.useState(null),
            c = u.useRef(null),
            d = u.useCallback(() => {
                (null != c.current && clearTimeout(c.current), (c.current = null));
            }, []);
        u.useEffect(() => d, [d]);
        let f = u.useMemo(
                () => ({
                    ...l,
                    showConfirmation: (e) => {
                        (d(),
                            i(e),
                            (c.current = setTimeout(() => {
                                ((c.current = null), i(null));
                            }, 1500)));
                    },
                }),
                [l, d],
            ),
            p = u.useMemo(() => ({ guildId: n, platform: f, busy: t }), [n, f, t]),
            b = (0, r.Ay)(e, p),
            h = b?.publishing === !0;
        u.useEffect(() => {
            h && (d(), i(null));
        }, [h, d]);
        let m = h ? null : a;
        return {
            publishOptions: p,
            publish: b,
            publishing: h,
            confirmation: m,
            variant: o(b) ? "secondary" : "primary",
            text: s(b, m),
            label: s(b, null),
            indicator: null == b ? null : b.publishing ? "publishing" : o(b) ? null : "unpublished",
        };
    })(e, n, t, m);
}
