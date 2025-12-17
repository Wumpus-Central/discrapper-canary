n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(681715),
    o = n(481060),
    s = n(235820),
    c = n(592125),
    u = n(944486),
    d = n(455199),
    f = n(981631),
    h = n(388032);
function p(e) {
    let { closePopout: t, onSelect: n } = e,
        i = (0, l.e7)([c.Z, u.Z], () => c.Z.getChannel(u.Z.getChannelId())),
        {
            everyoneFilter: a,
            roleFilter: p,
            guildFilter: g,
        } = (0, l.cj)([d.ZP], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = d.ZP;
            return {
                everyoneFilter: e,
                roleFilter: t,
                guildFilter: n,
            };
        });
    return (0, r.jsxs)(o.v2r, {
        navId: "mentions-filter",
        "aria-label": h.intl.string(h.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, r.jsx)(o.S89, {
                id: "Everyone",
                label: h.intl.string(h.t.cdyUsV),
                action: function () {
                    s.Z.setGuildFilter({ everyoneFilter: !a });
                },
                checked: a,
            }),
            (0, r.jsx)(o.S89, {
                id: "Roles",
                label: h.intl.string(h.t.lZejCq),
                action: function () {
                    s.Z.setGuildFilter({ roleFilter: !p });
                },
                checked: p,
            }),
            null == i || i.isPrivate()
                ? null
                : (0, r.jsx)(o.S89, {
                      id: "All Servers",
                      label: h.intl.string(h.t.GWMA6s),
                      action: function () {
                          s.Z.setGuildFilter({
                              guildFilter: g === f.NgX.THIS_SERVER ? f.NgX.ALL_SERVERS : f.NgX.THIS_SERVER,
                          });
                      },
                      checked: g === f.NgX.ALL_SERVERS,
                  }),
        ],
    });
}
function g() {
    let e = i.useRef(null);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: e,
        align: "right",
        animation: o.yRy.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(p, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, r.jsx)(a.u, {
                text: h.intl.string(h.t.pEasFX),
                targetElementRef: e,
                children: (0, r.jsx)(o.hU, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": h.intl.string(h.t.pEasFX),
                    color: o.YX$.TERTIARY,
                    icon: o.gXV,
                    onClick: n,
                }),
            });
        },
    });
}
