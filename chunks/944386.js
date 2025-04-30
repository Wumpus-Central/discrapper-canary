n.d(t, { u: () => p });
var r = n(192379),
    i = n(493773),
    o = n(367907),
    a = n(592125),
    s = n(944486),
    l = n(626135),
    c = n(255963),
    u = n(185923),
    d = n(981631);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = (e) => {
    let { emojiId: t, currentGuildId: n, popoutData: f, nonce: p, demoMode: h } = e,
        { current: m } = r.useRef(
            _(
                {
                    guild_id: n,
                    emoji_id: t
                },
                (0, o.v_)(a.Z.getChannel(s.Z.getChannelId(n)))
            )
        );
    return (
        (0, i.ZP)(() => {
            var e;
            (0, c.x)(u.qR.TrackOpenPopoutUsed),
                h ||
                    l.default.track(
                        d.rMx.OPEN_POPOUT,
                        _(
                            {
                                type: null != (e = null == f ? void 0 : f.analyticsType) ? e : 'Standard Emoji Popout',
                                nonce: p
                            },
                            m
                        )
                    );
        }),
        m
    );
};
