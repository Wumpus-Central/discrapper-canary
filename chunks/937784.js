n.d(t, { e: () => S }), n(539854), n(388685);
var r = n(54381);
n(473749);
var i = n(952265),
    a = n(481060),
    o = n(912332),
    s = n(623292),
    l = n(592125),
    c = n(703558),
    u = n(375954),
    d = n(626135),
    f = n(709054),
    p = n(127654),
    _ = n(894694),
    m = n(61994),
    h = n(39604),
    g = n(356659),
    E = n(981631);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function S(e, t) {
    let { channelId: b, analyticsLocations: O, messageReference: S } = t,
        I = l.Z.getChannel(b);
    if (null != I) {
        if (null != S) {
            let e = u.Z.getMessage(S.channel_id, S.message_id);
            null != e &&
                (0, s.fE)({
                    message: e,
                    channel: I,
                    shouldMention: !1,
                    showMentionToggle: !1,
                });
        }
        try {
            let t = [],
                n = [];
            for (let r of e) {
                var T;
                let e = await (0, h.rO)(r),
                    i = null != (T = r.name) ? T : (0, g.yl)(f.default.extractTimestamp(r.id)),
                    a = (0, m.Z)(i);
                if (r.type === _.NJ.CLIP || r.type === _.NJ.VOICE_CLIP) {
                    let i = "".concat("" !== a ? a : "clip", ".mp4");
                    t.push(new File([e], i, { type: "video/mp4" })), n.push({ clip: r });
                } else if (r.type === _.NJ.SCREENSHOT) {
                    let r = "".concat("" !== a ? a : "screenshot", ".jpeg");
                    t.push(new File([e], r, { type: "image/jpeg" })), n.push({});
                }
                d.default.track(E.rMx.CLIP_SHARED, {
                    location_stack: O,
                    guild_id: I.guild_id,
                    channel_id: I.id,
                    channel_type: I.type,
                    application_id: r.applicationId,
                    clip_id: r.id,
                });
            }
            (0, p.d)(t, I, c.d.ChannelMessage, {
                filesMetadata: n,
                origin: "unknown:clip_share",
            }),
                i.closeAllModals();
        } catch (e) {
            throw (g.jF.error(e), e);
        }
    } else
        (0, a.ZDy)(
            async () => {
                let { default: t } = await Promise.all([n.e("36653"), n.e("33648"), n.e("25881")]).then(
                    n.bind(n, 502801),
                );
                return (n) =>
                    (0, r.jsx)(
                        t,
                        v(y({}, n), {
                            clips: e,
                            analyticsLocations: O,
                        }),
                    );
            },
            {
                stackingBehavior: "stack",
                modalKey: o.so,
            },
        );
}
