n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(235820),
    s = n(592125),
    o = n(944486),
    c = n(455199);
n(288552);
var d = n(981631),
    u = n(388032),
    m = n(661967);
function _(e) {
    let { closePopout: t, onSelect: n } = e,
        m = (0, l.e7)([s.Z, o.Z], () => s.Z.getChannel(o.Z.getChannelId())),
        {
            everyoneFilter: _,
            roleFilter: h,
            guildFilter: p
        } = (0, l.cj)([c.Z], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = c.Z;
            return {
                everyoneFilter: e,
                roleFilter: t,
                guildFilter: n
            };
        });
    return (0, i.jsxs)(a.v2r, {
        navId: 'mentions-filter',
        'aria-label': u.intl.string(u.t.pEasFR),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(a.S89, {
                id: 'Everyone',
                label: u.intl.string(u.t.cdyUsb),
                action: function () {
                    r.Z.setGuildFilter({ everyoneFilter: !_ });
                },
                checked: _
            }),
            (0, i.jsx)(a.S89, {
                id: 'Roles',
                label: u.intl.string(u.t.lZejCg),
                action: function () {
                    r.Z.setGuildFilter({ roleFilter: !h });
                },
                checked: h
            }),
            null == m || m.isPrivate()
                ? null
                : (0, i.jsx)(a.S89, {
                      id: 'All Servers',
                      label: u.intl.string(u.t.GWMA6u),
                      action: function () {
                          r.Z.setGuildFilter({ guildFilter: p === d.NgX.THIS_SERVER ? d.NgX.ALL_SERVERS : d.NgX.THIS_SERVER });
                      },
                      checked: p === d.NgX.ALL_SERVERS
                  })
        ]
    });
}
function h() {
    return (0, i.jsx)(a.yRy, {
        align: 'right',
        animation: a.yRy.Animation.NONE,
        position: 'bottom',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(_, { closePopout: t });
        },
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(a.M0o, {
                tooltip: u.intl.string(u.t.pEasFR),
                color: a.YX$.TERTIARY,
                icon: (0, i.jsx)(a.gXV, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                className: m.controlButton,
                onClick: t
            });
        }
    });
}
