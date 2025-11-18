n.d(t, { Z: () => u });
var i = n(54381);
n(473749);
var r = n(481060),
    l = n(670044),
    a = n(28391),
    o = n(526761),
    s = n(388032),
    c = n(637177);
function u(e) {
    let { channel: t, clearUnreadsNotice: n } = e;
    return (0, i.jsxs)("div", {
        className: c.notice,
        children: [
            (0, i.jsx)(l.Z, { id: t.id }),
            (0, i.jsx)("div", {
                className: c.info,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-sm/medium",
                    children: s.intl.format(s.t.P6Y2N1, {}),
                }),
            }),
            (0, i.jsx)(r.Button, {
                variant: "secondary",
                text: s.intl.string(s.t.KyUKhT),
                icon: r.UEU,
                size: "sm",
                onClick: () => {
                    (0, a.Z)(t.guild_id, t.id, o.ic.UNREADS_ONLY_MENTIONS), n();
                },
            }),
        ],
    });
}
