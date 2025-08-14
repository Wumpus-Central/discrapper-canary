n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(670044),
    a = n(28391),
    s = n(526761),
    l = n(388032),
    c = n(58102);
function u(e) {
    let { channel: t, clearUnreadsNotice: n } = e;
    return (0, r.jsxs)("div", {
        className: c.notice,
        children: [
            (0, r.jsx)(o.Z, { id: t.id }),
            (0, r.jsx)("div", {
                className: c.info,
                children: (0, r.jsx)(i.Text, {
                    variant: "text-sm/medium",
                    children: l.intl.format(l.t.P6Y2Nz, {}),
                }),
            }),
            (0, r.jsx)(i.zxk, {
                variant: "secondary",
                text: l.intl.string(l.t.KyUKhY),
                icon: i.UEU,
                size: "sm",
                onClick: () => {
                    (0, a.Z)(t.guild_id, t.id, s.ic.UNREADS_ONLY_MENTIONS), n();
                },
            }),
        ],
    });
}
