"use strict";
n.d(t, { s: () => f }), n(667532);
var i = n(627968),
    s = n(64700),
    l = n(136722),
    r = n(311907),
    a = n(397927),
    o = n(47167),
    d = n(808728),
    c = n(576705),
    u = n(994500),
    m = n(287809),
    g = n(997509),
    x = n(875331),
    h = n(652215),
    _ = n(985018);
let A = "NO_CHANNEL",
    p = l.kg(h.xBc.VIEW_CHANNEL, h.xBc.CREATE_INSTANT_INVITE);
function f(e) {
    let { label: t, description: n, guildId: l, widgetEnabled: h, widgetChannelId: f, enableLocalUpdate: j } = e,
        N = (0, r.bG)([d.Ay], () => d.Ay.getChannels(l)),
        E = s.useMemo(() => {
            let e = [...N[d.I6], ...N[d.vM]]
                .filter((e) => {
                    let { channel: t } = e;
                    return t.guild_id === l;
                })
                .filter((e) => {
                    let { channel: t } = e;
                    return t.id === f || c.A.can(p, t);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return { id: t.id, value: t.id, label: (0, o.m1)(t, m.default, u.A, !0) };
                });
            return e.unshift({ id: "no-instant-invite", value: A, label: _.intl.string(_.t.u197b7) }), e;
        }, [N, l, f]),
        b = s.useCallback(
            (e) => {
                j ? (0, x.E)(l, h, e !== A ? e : null) : g.A.updateEmbed(l, h, e !== A ? e : null);
            },
            [l, h, j],
        );
    return (0, i.jsx)(a.l6P, {
        label: t,
        description: n,
        options: E,
        value: f ?? void 0,
        onSelectionChange: b,
        selectionMode: "single",
        fullWidth: !0,
    });
}
