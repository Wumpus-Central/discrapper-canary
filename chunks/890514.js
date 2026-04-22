n.d(t, { S: () => o });
var i = n(627968),
    l = n(64700),
    s = n(691885),
    r = n(997509),
    a = n(985018);
function o(e) {
    let { canManageGuild: t, afkTimeout: n, afkChannelId: o, label: d } = e,
        c = l.useMemo(
            () => [
                { id: "1min", value: "60", label: a.intl.formatToPlainString(a.t.iXLF9W, { minutes: 1 }) },
                { id: "5min", value: "300", label: a.intl.formatToPlainString(a.t.iXLF9W, { minutes: 5 }) },
                { id: "15min", value: "900", label: a.intl.formatToPlainString(a.t.iXLF9W, { minutes: 15 }) },
                { id: "30min", value: "1800", label: a.intl.formatToPlainString(a.t.iXLF9W, { minutes: 30 }) },
                { id: "1hr", value: "3600", label: a.intl.formatToPlainString(a.t.xCjYxK, { hours: 1 }) },
            ],
            [],
        ),
        u = l.useCallback((e) => {
            r.A.updateGuild({ afkTimeout: parseInt(e, 10) });
        }, []);
    return (0, i.jsx)(s.l, {
        selectionMode: "single",
        label: d,
        value: n?.toString() ?? void 0,
        options: c,
        disabled: null == o || !t,
        onSelectionChange: u,
    });
}
