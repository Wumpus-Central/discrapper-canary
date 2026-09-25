e.d(t, { WatchlistForBusiness: () => p });
var i = e(689097),
    n = e(382591),
    a = e(52891),
    u = e(55586),
    o = e(931320),
    l = e(367092),
    r = e(882865),
    c = e(701798),
    d = e(619923),
    h = e(230104),
    m = e(643290),
    b = e(799035),
    v = e(271977),
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
                        (s.preventDefault(), u.submit());
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
