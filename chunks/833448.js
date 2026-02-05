"use strict";
n.d(t, { T: () => c });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(260509),
    o = n(287809),
    d = n(652215);
function c(e) {
    let t = e?.features.has(d.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING) === !0,
        c = e?.features.has(d.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) === !0,
        u = (0, l.bG)([o.default], () => o.default.getCurrentUser()),
        m = null != e && (0, a.bM)(e, u);
    s.useEffect(() => {
        null != e &&
            t &&
            m &&
            (0, r.mMO)(async () => {
                let { default: t } = await n.e("47175").then(n.bind(n, 75834));
                return (n) => (0, i.jsx)(t, { ...n, guildId: e.id, requireTeamSetup: c });
            });
    }, [t, c, e, m]);
}
