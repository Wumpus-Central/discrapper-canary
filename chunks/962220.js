n.d(t, { Z: () => h });
var i = n(39612),
    r = n(271579),
    a = n(756647),
    l = n(625128),
    o = n(626135),
    s = n(954824),
    c = n(751189),
    d = n(981631);
let u = 'template',
    h = {
        ...c.Z,
        openNativeAppModal(e) {
            l.Z.openNativeAppModal(e, d.Etm.GUILD_TEMPLATE_BROWSER);
        },
        openMobileApp(e, t) {
            if (null != platform.ua && platform.ua.toLowerCase().indexOf('googlebot') > -1) return;
            let n = null != e ? (0, i.Oh)(e) : (0, i.Gk)(),
                l = (0, r.WS)(),
                c = (0, r.ZP)(n, {
                    utmSource: u,
                    fingerprint: t,
                    attemptId: l
                });
            o.default.track(d.rMx.DEEP_LINK_CLICKED, {
                fingerprint: (0, a.K)(t),
                attempt_id: l,
                source: u,
                guild_template_code: e
            }),
                s.Z.launch(c, () => {});
        }
    };
