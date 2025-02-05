n.d(t, { Z: () => _ });
var i = n(39612),
    r = n(271579),
    l = n(756647),
    a = n(625128),
    o = n(626135),
    s = n(954824),
    c = n(751189),
    d = n(981631);
let u = 'template',
    _ = {
        ...c.Z,
        openNativeAppModal(e) {
            a.Z.openNativeAppModal(e, d.Etm.GUILD_TEMPLATE_BROWSER);
        },
        openMobileApp(e, t) {
            if (null != platform.ua && platform.ua.toLowerCase().indexOf('googlebot') > -1) return;
            let n = null != e ? (0, i.Oh)(e) : (0, i.Gk)(),
                a = (0, r.WS)(),
                c = (0, r.ZP)(n, {
                    utmSource: u,
                    fingerprint: t,
                    attemptId: a
                });
            o.default.track(d.rMx.DEEP_LINK_CLICKED, {
                fingerprint: (0, l.K)(t),
                attempt_id: a,
                source: u,
                guild_template_code: e
            }),
                s.Z.launch(c, () => {});
        }
    };
