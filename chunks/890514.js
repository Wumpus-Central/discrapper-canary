n.d(t, { S: () => g });
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(997509),
    a = n(985018);
let c = "".concat(60),
    o = "".concat(300),
    d = "".concat(900),
    u = "".concat(1800),
    f = "".concat(3600);
function g(e) {
    var t;
    let { canManageGuild: n, afkTimeout: g, afkChannelId: b, label: m } = e,
        p = i.useMemo(
            () => [
                {
                    id: "1min",
                    value: c,
                    label: a.intl.formatToPlainString(a.t.iXLF9W, { minutes: 1 }),
                },
                {
                    id: "5min",
                    value: o,
                    label: a.intl.formatToPlainString(a.t.iXLF9W, { minutes: 5 }),
                },
                {
                    id: "15min",
                    value: d,
                    label: a.intl.formatToPlainString(a.t.iXLF9W, { minutes: 15 }),
                },
                {
                    id: "30min",
                    value: u,
                    label: a.intl.formatToPlainString(a.t.iXLF9W, { minutes: 30 }),
                },
                {
                    id: "1hr",
                    value: f,
                    label: a.intl.formatToPlainString(a.t.xCjYxK, { hours: 1 }),
                },
            ],
            [],
        ),
        x = i.useCallback((e) => {
            s.A.updateGuild({ afkTimeout: parseInt(e, 10) });
        }, []);
    return (0, r.jsx)(l.l6P, {
        selectionMode: "single",
        label: m,
        value: null != (t = null == g ? void 0 : g.toString()) ? t : void 0,
        options: p,
        disabled: null == b || !n,
        onSelectionChange: x,
    });
}
