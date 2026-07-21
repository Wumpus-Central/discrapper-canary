e.d(t, { WatchlistForBusiness: () => p });
var i = e(526245),
    n = e(158547),
    a = e(635687),
    u = e(327022),
    o = e(412012),
    l = e(595760),
    r = e(695149),
    c = e(537674),
    d = e(783159),
    h = e(582052),
    m = e(575918),
    b = e(387391),
    v = e(786414),
    f = ({ onFinish: s }) => {
        let { t } = (0, i.n)(),
            [e, u] = (0, a.u)(() => (0, v.E)());
        if (
            ((0, n._)(() => {
                u.load();
            }, [u]),
            (0, a.c)({ status: "finished" === e.status ? "finished" : "loading", onFinish: s }),
            "finished" === e.status)
        )
            return null;
        if ("submitting" === e.status)
            return (0, n.v)(b.t, {
                variant: "loading",
                icon: (0, n.v)(o.t, { size: 64 }),
                title: t("watchlistForBusiness.processing"),
                subtitle: t("common.wontTakeLong"),
            });
        if ("success" === e.status)
            return (0, n.v)(b.t, { variant: "success", icon: (0, n.v)(c.t, { size: 64 }), title: t("common.done") });
        if ("form" === e.status || "idle" === e.status) {
            let s = "form" === e.status ? e : null;
            return (0, n.v)(l.t, {
                className: "IncodeWatchlistForBusinessPage",
                title: t("watchlistForBusiness.title"),
                hideFooterBranding: !0,
                children: (0, n.v)("form", {
                    class: "IncodeWatchlistForBusinessForm",
                    onSubmit: (s) => {
                        s.preventDefault(), u.submit();
                    },
                    autoComplete: "off",
                    children: [
                        (0, n.v)(m.t, {
                            id: "watchlist-for-business-country",
                            label: t("watchlistForBusiness.country"),
                            value: s?.country ?? "US",
                            onChange: (s) => u.setCountry(s),
                            "data-testid": "watchlist-for-business-country-selector",
                        }),
                        (0, n.v)(d.t, {
                            id: "businessName",
                            name: "businessName",
                            label: t("watchlistForBusiness.businessName"),
                            value: s?.businessName ?? "",
                            onInput: (s) => u.setBusinessName(s.target.value),
                        }),
                        (0, n.v)(r.t, {
                            type: "submit",
                            disabled: !s?.isValid,
                            "data-testid": "watchlist-for-business-submit",
                            children: t("watchlistForBusiness.continue"),
                        }),
                    ],
                }),
            });
        }
        return null;
    },
    p = ({ onFinish: s }) => (0, n.v)(u.t, { children: (0, n.v)(f, { onFinish: s }) });
(0, h.t)(p, "incode-watchlist-for-business");
