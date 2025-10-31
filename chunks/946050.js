n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(670044),
    a = n(28391),
    o = n(526761),
    s = n(388032),
    c = n(58102);
function u(e) {
    let { channel: t, clearUnreadsNotice: n } = e;
    return (0, r.jsxs)("div", {
        className: c.notice,
        children: [
            (0, r.jsx)(l.Z, { id: t.id }),
            (0, r.jsx)("div", {
                className: c.info,
                children: (0, r.jsx)(i.Text, {
                    variant: "text-sm/medium",
                    children: s.intl.format(s.t.P6Y2N1, {}),
                }),
            }),
            (0, r.jsx)(i.Button, {
                variant: "secondary",
                text: s.intl.string(s.t.KyUKhT),
                icon: i.UEU,
                size: "sm",
                onClick: () => {
                    (0, a.Z)(t.guild_id, t.id, o.ic.UNREADS_ONLY_MENTIONS), n();
                },
            }),
        ],
    });
}
