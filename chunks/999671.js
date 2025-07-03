n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    a = n(235820),
    s = n(592125),
    c = n(944486),
    u = n(455199);
n(288552);
var d = n(981631),
    h = n(388032),
    p = n(413813);
function f(e) {
    let { closePopout: t, onSelect: n } = e,
        i = (0, l.e7)([s.Z, c.Z], () => s.Z.getChannel(c.Z.getChannelId())),
        {
            everyoneFilter: p,
            roleFilter: f,
            guildFilter: g
        } = (0, l.cj)([u.Z], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = u.Z;
            return {
                everyoneFilter: e,
                roleFilter: t,
                guildFilter: n
            };
        });
    return (0, r.jsxs)(o.v2r, {
        navId: 'mentions-filter',
        'aria-label': h.intl.string(h.t.pEasFR),
        onClose: t,
        onSelect: n,
        children: [
            (0, r.jsx)(o.S89, {
                id: 'Everyone',
                label: h.intl.string(h.t.cdyUsb),
                action: function () {
                    a.Z.setGuildFilter({ everyoneFilter: !p });
                },
                checked: p
            }),
            (0, r.jsx)(o.S89, {
                id: 'Roles',
                label: h.intl.string(h.t.lZejCg),
                action: function () {
                    a.Z.setGuildFilter({ roleFilter: !f });
                },
                checked: f
            }),
            null == i || i.isPrivate()
                ? null
                : (0, r.jsx)(o.S89, {
                      id: 'All Servers',
                      label: h.intl.string(h.t.GWMA6u),
                      action: function () {
                          a.Z.setGuildFilter({ guildFilter: g === d.NgX.THIS_SERVER ? d.NgX.ALL_SERVERS : d.NgX.THIS_SERVER });
                      },
                      checked: g === d.NgX.ALL_SERVERS
                  })
        ]
    });
}
function g() {
    let e = i.useRef(null);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: e,
        align: 'right',
        animation: o.yRy.Animation.NONE,
        position: 'bottom',
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(f, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, r.jsx)(o.M0o, {
                ref: e,
                tooltip: h.intl.string(h.t.pEasFR),
                color: o.YX$.TERTIARY,
                icon: (0, r.jsx)(o.gXV, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                className: p.controlButton,
                onClick: n
            });
        }
    });
}
