n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    o = n(235820),
    l = n(592125),
    s = n(944486),
    c = n(455199);
n(288552);
var d = n(981631),
    u = n(388032),
    p = n(829540);
function m(e) {
    let { closePopout: t, onSelect: n } = e,
        p = (0, i.e7)([l.Z, s.Z], () => l.Z.getChannel(s.Z.getChannelId())),
        {
            everyoneFilter: m,
            roleFilter: f,
            guildFilter: h
        } = (0, i.cj)([c.Z], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = c.Z;
            return {
                everyoneFilter: e,
                roleFilter: t,
                guildFilter: n
            };
        });
    return (0, r.jsxs)(a.v2r, {
        navId: 'mentions-filter',
        'aria-label': u.NW.string(u.t.pEasFR),
        onClose: t,
        onSelect: n,
        children: [
            (0, r.jsx)(a.S89, {
                id: 'Everyone',
                label: u.NW.string(u.t.cdyUsb),
                action: function () {
                    o.Z.setGuildFilter({ everyoneFilter: !m });
                },
                checked: m
            }),
            (0, r.jsx)(a.S89, {
                id: 'Roles',
                label: u.NW.string(u.t.lZejCg),
                action: function () {
                    o.Z.setGuildFilter({ roleFilter: !f });
                },
                checked: f
            }),
            null == p || p.isPrivate()
                ? null
                : (0, r.jsx)(a.S89, {
                      id: 'All Servers',
                      label: u.NW.string(u.t.GWMA6u),
                      action: function () {
                          o.Z.setGuildFilter({ guildFilter: h === d.NgX.THIS_SERVER ? d.NgX.ALL_SERVERS : d.NgX.THIS_SERVER });
                      },
                      checked: h === d.NgX.ALL_SERVERS
                  })
        ]
    });
}
function f() {
    return (0, r.jsx)(a.yRy, {
        align: 'right',
        animation: a.yRy.Animation.NONE,
        position: 'bottom',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(m, { closePopout: t });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(a.M0o, {
                tooltip: u.NW.string(u.t.pEasFR),
                color: a.YX$.TERTIARY,
                icon: (0, r.jsx)(a.gXV, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                className: p.controlButton,
                onClick: t
            });
        }
    });
}
