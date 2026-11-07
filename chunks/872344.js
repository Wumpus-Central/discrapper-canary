n.d(e, { A: () => l });
var r = n(582128),
    u = n(858899),
    i = n(84512),
    a = n(792996);
function c(t) {
    let { text: e, ok: n } = (function (t) {
        switch (t) {
            case "dispatched":
                return { text: a.intl.string(i.default["um/5Kc"]), ok: !0 };
            case "rate_limited":
                return { text: a.intl.string(i.default.T1n7hc), ok: !1 };
            case "unauthorized":
                return { text: a.intl.string(i.default["30UxZU"]), ok: !1 };
            case "no_widget_config":
                return { text: a.intl.string(i.default["1UFWet"]), ok: !1 };
            case "undeliverable":
                return { text: a.intl.string(i.default.ypKX9A), ok: !1 };
            default:
                return { text: a.intl.string(i.default.BLKD4B), ok: !1 };
        }
    })(t);
    (0, u.P0)({ text: e, variant: n ? "success" : "critical" });
}
var s = n(384739);
function l(t) {
    let [e, n] = r.useState(!1),
        u = r.useRef(!0);
    r.useEffect(
        () => (
            (u.current = !0),
            () => {
                u.current = !1;
            }
        ),
        [],
    );
    let i = r.useCallback(() => {
        e ||
            null == t ||
            (n(!0),
            (0, s.i)(t)
                .then(c)
                .finally(() => {
                    u.current && n(!1);
                }));
    }, [t, e]);
    return { pending: e, refresh: i };
}
