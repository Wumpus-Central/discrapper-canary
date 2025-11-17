n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(235820),
    s = n(592125),
    c = n(944486),
    u = n(455199);
n(288552);
var d = n(981631),
    p = n(388032),
    f = n(407067);
function h(e) {
    let { closePopout: t, onSelect: n } = e,
        i = (0, l.e7)([s.Z, c.Z], () => s.Z.getChannel(c.Z.getChannelId())),
        {
            everyoneFilter: f,
            roleFilter: h,
            guildFilter: g,
        } = (0, l.cj)([u.ZP], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = u.ZP;
            return {
                everyoneFilter: e,
                roleFilter: t,
                guildFilter: n,
            };
        });
    return (0, r.jsxs)(o.v2r, {
        navId: "mentions-filter",
        "aria-label": p.intl.string(p.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, r.jsx)(o.S89, {
                id: "Everyone",
                label: p.intl.string(p.t.cdyUsV),
                action: function () {
                    a.Z.setGuildFilter({ everyoneFilter: !f });
                },
                checked: f,
            }),
            (0, r.jsx)(o.S89, {
                id: "Roles",
                label: p.intl.string(p.t.lZejCq),
                action: function () {
                    a.Z.setGuildFilter({ roleFilter: !h });
                },
                checked: h,
            }),
            null == i || i.isPrivate()
                ? null
                : (0, r.jsx)(o.S89, {
                      id: "All Servers",
                      label: p.intl.string(p.t.GWMA6s),
                      action: function () {
                          a.Z.setGuildFilter({
                              guildFilter: g === d.NgX.THIS_SERVER ? d.NgX.ALL_SERVERS : d.NgX.THIS_SERVER,
                          });
                      },
                      checked: g === d.NgX.ALL_SERVERS,
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
            return (0, r.jsx)(h, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, r.jsx)(o.M0o, {
                ref: e,
                tooltip: p.intl.string(p.t.pEasFX),
                color: o.YX$.TERTIARY,
                icon: (0, r.jsx)(o.gXV, {
                    size: "xs",
                    color: "currentColor",
                }),
                className: f.controlButton,
                onClick: n,
            });
        },
    });
}
