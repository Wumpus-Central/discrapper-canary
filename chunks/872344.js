n.d(t, { A: () => c });
var i = n(582128),
    l = n(858899),
    r = n(84512),
    a = n(792996);
function s(e) {
    let { text: t, ok: n } = (function (e) {
        switch (e) {
            case "dispatched":
                return { text: a.intl.string(r.default["um/5Kc"]), ok: !0 };
            case "rate_limited":
                return { text: a.intl.string(r.default.T1n7hc), ok: !1 };
            case "unauthorized":
                return { text: a.intl.string(r.default["30UxZU"]), ok: !1 };
            case "no_widget_config":
                return { text: a.intl.string(r.default["1UFWet"]), ok: !1 };
            case "undeliverable":
                return { text: a.intl.string(r.default.ypKX9A), ok: !1 };
            default:
                return { text: a.intl.string(r.default.BLKD4B), ok: !1 };
        }
    })(e);
    (0, l.P0)({ text: t, variant: n ? "success" : "critical" });
}
var o = n(384739);
function c(e) {
    let [t, n] = i.useState(!1),
        l = i.useRef(!0);
    i.useEffect(
        () => (
            (l.current = !0),
            () => {
                l.current = !1;
            }
        ),
        [],
    );
    let r = i.useCallback(() => {
        t ||
            null == e ||
            (n(!0),
            (0, o.i)(e)
                .then(s)
                .finally(() => {
                    l.current && n(!1);
                }));
    }, [e, t]);
    return { pending: t, refresh: r };
}
