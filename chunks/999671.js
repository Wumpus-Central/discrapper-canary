n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(235820),
    s = n(592125),
    c = n(944486),
    u = n(455199);
n(288552);
var d = n(981631),
    p = n(388032),
    m = n(413813);
function f(e) {
    let { closePopout: t, onSelect: n } = e,
        i = (0, a.e7)([s.Z, c.Z], () => s.Z.getChannel(c.Z.getChannelId())),
        {
            everyoneFilter: m,
            roleFilter: f,
            guildFilter: h
        } = (0, a.cj)([u.Z], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = u.Z;
            return {
                everyoneFilter: e,
                roleFilter: t,
                guildFilter: n
            };
        });
    return (0, r.jsxs)(l.v2r, {
        navId: 'mentions-filter',
        'aria-label': p.NW.string(p.t.pEasFR),
        onClose: t,
        onSelect: n,
        children: [
            (0, r.jsx)(l.S89, {
                id: 'Everyone',
                label: p.NW.string(p.t.cdyUsb),
                action: function () {
                    o.Z.setGuildFilter({ everyoneFilter: !m });
                },
                checked: m
            }),
            (0, r.jsx)(l.S89, {
                id: 'Roles',
                label: p.NW.string(p.t.lZejCg),
                action: function () {
                    o.Z.setGuildFilter({ roleFilter: !f });
                },
                checked: f
            }),
            null == i || i.isPrivate()
                ? null
                : (0, r.jsx)(l.S89, {
                      id: 'All Servers',
                      label: p.NW.string(p.t.GWMA6u),
                      action: function () {
                          o.Z.setGuildFilter({ guildFilter: h === d.NgX.THIS_SERVER ? d.NgX.ALL_SERVERS : d.NgX.THIS_SERVER });
                      },
                      checked: h === d.NgX.ALL_SERVERS
                  })
        ]
    });
}
function h() {
    let e = i.useRef(null);
    return (0, r.jsx)(l.yRy, {
        targetElementRef: e,
        align: 'right',
        animation: l.yRy.Animation.NONE,
        position: 'bottom',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(f, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, r.jsx)(l.M0o, {
                ref: e,
                tooltip: p.NW.string(p.t.pEasFR),
                color: l.YX$.TERTIARY,
                icon: (0, r.jsx)(l.gXV, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                className: m.controlButton,
                onClick: n
            });
        }
    });
}
