n.d(t, { e: () => f });
var l = n(951288);
n(647438);
var r = n(481060),
    a = n(592125),
    i = n(703558),
    o = n(626135),
    c = n(709054),
    s = n(127654),
    u = n(61994),
    d = n(39604),
    p = n(356659),
    m = n(981631);
async function f(e, t) {
    let { channelId: f, editMetadata: b, analyticsLocations: g } = t,
        h = a.Z.getChannel(f);
    if (null != h)
        try {
            var y;
            let t = await (0, d.rO)(e, b),
                n = null != (y = e.name) ? y : (0, p.yl)(c.default.extractTimestamp(e.id)),
                l = (0, u.Z)(n);
            await (0, s.d5)(
                [new File([t], "".concat("" !== l ? l : "clip", ".mp4"), { type: "video/mp4" })],
                h,
                i.d.ChannelMessage,
                {
                    filesMetadata: [{ clip: e }],
                    origin: "unknown:clip_share",
                },
            ),
                o.default.track(m.rMx.CLIP_SHARED, {
                    location_stack: g,
                    guild_id: h.guild_id,
                    channel_id: h.id,
                    channel_type: h.type,
                    application_id: e.applicationId,
                    clip_id: e.id,
                });
        } catch (e) {
            throw (p.jF.error(e), e);
        }
    else
        (0, r.ZDy)(async () => {
            let { default: t } = await n.e("99617").then(n.bind(n, 502801));
            return (n) => {
                var r, a;
                return (0, l.jsx)(
                    t,
                    ((r = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                l = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                l.forEach(function (t) {
                                    var l;
                                    (l = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = l);
                                });
                        }
                        return e;
                    })({}, n)),
                    (a = a =
                        {
                            clip: e,
                            editMetadata: b,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, l);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    r),
                );
            };
        });
}
