l.d(t, { e: () => x });
var a = l(200651);
l(192379);
var n = l(481060),
    i = l(592125),
    s = l(703558),
    r = l(626135),
    o = l(709054),
    c = l(127654),
    d = l(61994),
    u = l(39604),
    m = l(356659),
    p = l(981631);
async function x(e, t) {
    let { channelId: x, editMetadata: v, analyticsLocations: h } = t,
        g = i.Z.getChannel(x);
    if (null != g)
        try {
            var C;
            let t = await (0, u.rO)(e, v),
                l = null !== (C = e.name) && void 0 !== C ? C : (0, m.yl)(o.default.extractTimestamp(e.id)),
                a = (0, d.Z)(l);
            (0, c.d)([new File([t], ''.concat('' !== a ? a : 'clip', '.mp4'), { type: 'video/mp4' })], g, s.d.ChannelMessage, { filesMetadata: [{ clip: e }] }),
                r.default.track(p.rMx.CLIP_SHARED, {
                    location_stack: h,
                    guild_id: g.guild_id,
                    channel_id: g.id,
                    channel_type: g.type,
                    application_id: e.applicationId,
                    clip_id: e.id
                });
        } catch (e) {
            throw (m.jF.error(e), e);
        }
    else
        (0, n.ZDy)(async () => {
            let { default: t } = await l.e('99617').then(l.bind(l, 502801));
            return (l) =>
                (0, a.jsx)(t, {
                    ...l,
                    clip: e,
                    editMetadata: v
                });
        });
}
