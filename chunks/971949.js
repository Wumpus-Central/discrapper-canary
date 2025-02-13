a.d(t, { default: () => m });
var o = a(200651);
a(192379);
var e = a(692547),
    r = a(481060),
    s = a(906732),
    i = a(98278),
    c = a(790527),
    d = a(474936),
    l = a(981631),
    f = a(388032),
    u = a(136188),
    p = a(201679),
    L = a(860324);
function k(n, t) {
    return (0, o.jsx)(
        r.IGR,
        {
            text: n,
            className: p.newBadge,
            color: e.Z.unsafe_rawColors.BRAND_500.css
        },
        t
    );
}
function m(n) {
    let { guildCount: t, onClose: a, analyticsLocations: e, ...p } = n,
        m = function (n, t) {
            return (0, o.jsx)(
                r.P3F,
                {
                    className: u.learnMoreLink,
                    tag: 'span',
                    onClick: () => {
                        a(), (0, i.z)();
                    },
                    children: n
                },
                t
            );
        },
        { analyticsLocations: C } = (0, s.ZP)(e);
    return (0, o.jsx)(s.Gt, {
        value: C,
        children: (0, o.jsx)(c.Z, {
            artURL: L.Z,
            onClose: a,
            type: d.cd.GUILD_CAP_MODAL_UPSELL,
            title: f.intl.string(f.t.CoNXBw),
            body:
                t < l.DZw
                    ? f.intl.format(f.t['5qLH7O'], {
                          guildCount: t,
                          onAndMore: m,
                          newBadgeHook: k
                      })
                    : f.intl.format(f.t.mk9CS0, {
                          onAndMore: m,
                          newBadgeHook: k
                      }),
            context: t < l.DZw ? f.intl.formatToPlainString(f.t['C+Hqzs'], { guildCount: t }) : f.intl.string(f.t.m0xavb),
            glowUp: f.intl.format(f.t['6Dl5X1'], { onAndMore: m }),
            ...p
        })
    });
}
