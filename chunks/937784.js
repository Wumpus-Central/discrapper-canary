n.d(t, { e: () => f });
var r = n(200651);
n(192379);
var l = n(481060),
    a = n(592125),
    i = n(703558),
    o = n(626135),
    s = n(709054),
    c = n(127654),
    u = n(61994),
    d = n(39604),
    p = n(356659),
    m = n(981631);
async function f(e, t) {
    let { channelId: f, editMetadata: b, analyticsLocations: g } = t,
        j = a.Z.getChannel(f);
    if (null != j)
        try {
            var h;
            let t = await (0, d.rO)(e, b),
                n = null != (h = e.name) ? h : (0, p.yl)(s.default.extractTimestamp(e.id)),
                r = (0, u.Z)(n);
            (0, c.d)([new File([t], ''.concat('' !== r ? r : 'clip', '.mp4'), { type: 'video/mp4' })], j, i.d.ChannelMessage, { filesMetadata: [{ clip: e }] }),
                o.default.track(m.rMx.CLIP_SHARED, {
                    location_stack: g,
                    guild_id: j.guild_id,
                    channel_id: j.id,
                    channel_type: j.type,
                    application_id: e.applicationId,
                    clip_id: e.id
                });
        } catch (e) {
            throw (p.jF.error(e), e);
        }
    else
        (0, l.ZDy)(async () => {
            let { default: t } = await Promise.all([n.e('62117'), n.e('99617')]).then(n.bind(n, 502801));
            return (n) => {
                var l, a;
                return (0, r.jsx)(
                    t,
                    ((l = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, n)),
                    (a = a =
                        {
                            clip: e,
                            editMetadata: b
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    l)
                );
            };
        });
}
