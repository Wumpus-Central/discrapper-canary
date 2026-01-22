n.d(t, { w: () => T }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(110259),
    u = n(417597),
    d = n(397927),
    f = n(846293),
    p = n(774300),
    h = n(793574),
    b = n(688810),
    g = n(139286),
    m = n(854627),
    A = n(696451),
    y = n(71393),
    O = n(958590),
    j = n(576705),
    v = n(427262),
    x = n(582904),
    E = n(652215),
    _ = n(985018),
    C = n(357694),
    S = n(248789);
function I(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let N = "VoiceInviteSuggestionsPopover";
function T(e) {
    let { channel: t, onHoverOrFocus: i, setPopoutRef: s, closePopout: u } = e,
        f = l.useRef(null),
        p = (0, x.L7)(f),
        m = (0, x.kt)({ channel: t }),
        { analyticsLocations: A } = (0, b.Ay)(h.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, g.A)({
        name: c.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: c.ImpressionTypes.POPOUT,
        properties: {
            voice_channel_id: t.id,
            voice_guild_id: t.guild_id,
            location_stack: A,
        },
    }),
        l.useEffect(() => {
            null == s || s(f.current);
        }, [s]),
        l.useEffect(() => {
            null == i || i(p.isHoveringOrFocusing);
        }, [i, p]);
    let O = l.useCallback(() => {
        let e = y.A.getGuild(t.guild_id);
        o()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, d.mMO)(async () => {
                let { default: l } = await Promise.all([n.e("43600"), n.e("28136"), n.e("42821")]).then(
                    n.bind(n, 234355),
                );
                return (n) => {
                    var i, a;
                    return (0, r.jsx)(
                        l,
                        ((i = I({}, n)),
                        (a = a =
                            {
                                guild: e,
                                channel: t,
                                source: E.PE1.VOICE_INVITE_SUGGESTIONS,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        i),
                    );
                };
            }),
            u();
    }, [t, u]);
    return (0, r.jsx)("div", {
        ref: f,
        "aria-label": _.intl.string(_.t.o53CL2),
        className: a()(S.popover, C.oO),
        children: (0, r.jsx)("div", {
            className: C.vW,
            children: (0, r.jsxs)("ul", {
                className: C.p_,
                children: [
                    m.map((e) =>
                        (0, r.jsx)(
                            P,
                            {
                                channel: t,
                                user: e,
                            },
                            e.id,
                        ),
                    ),
                    (0, r.jsxs)(d.DUT, {
                        tag: "li",
                        onClick: O,
                        className: a()(C.nM, C.vk),
                        children: [
                            (0, r.jsx)("div", {
                                className: C.R4,
                                children: (0, r.jsx)(d.nFg, {
                                    size: "xs",
                                    className: C.Kk,
                                }),
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: C.UU,
                                lineClamp: 1,
                                children: _.intl.string(_.t.NOP3Ry),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function P(e) {
    let { channel: t, user: n } = e,
        i = l.useRef(null),
        s = (0, u.bG)([A.Ay], () => A.Ay.getMember(t.guild_id, n.id), [t.guild_id, n.id]),
        { isHoveringOrFocusing: o } = (0, x.L7)(i),
        [c, h] = l.useState(null),
        b = "success" === c || "sending" === c,
        g = l.useCallback(async () => {
            if (b) return;
            async function e() {
                var e, n, r;
                let l = null != (e = O.A.getInvite(t.id, {})) ? e : null;
                if (null == l) {
                    if (!j.A.can(E.xBc.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await f.Ay.createInvite(t.id, {}, N);
                    } catch (e) {
                        return null;
                    }
                    l = null != (r = O.A.getInvite(t.id, {})) ? r : null;
                }
                return null != (n = null == l ? void 0 : l.code) ? n : null;
            }
            h("sending");
            let r = await e();
            null == r
                ? h(null)
                : p.A.enqueue(
                      {
                          type: p.F.USER,
                          user: n,
                          inviteKey: r,
                          location: N,
                          inviteAnalyticsMetadata: { source: E.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          h(e ? "success" : null);
                      },
                  );
        }, [b, n, t]),
        {
            avatarDecorationSrc: y,
            avatarSrc: S,
            eventHandlers: T,
        } = (0, m.A)({
            userId: n.id,
            size: d._3J.SIZE_24,
            animateOnHover: !o,
            guildId: t.guild_id,
        });
    if (null == s) return null;
    let P = v.Ay.getName(n),
        w = _.intl.string(_.t.jYnGPG);
    return (0, r.jsxs)(d.DUT, {
        innerRef: i,
        tag: "li",
        className: a()(C.nM, { [C.vk]: !b }),
        "aria-disabled": b,
        onClick: g,
        "aria-label": w,
        children: [
            (0, r.jsx)(
                d.euF,
                I(
                    {
                        className: C.my,
                        "aria-label": P,
                        size: d._3J.SIZE_24,
                        src: S,
                        avatarDecoration: y,
                    },
                    T,
                ),
            ),
            (0, r.jsx)(d.Text, {
                variant: "text-md/medium",
                className: C.UU,
                lineClamp: 1,
                children: P,
            }),
            "sending" === c &&
                (0, r.jsx)("div", {
                    className: C.r$,
                    children: (0, r.jsx)(d.nvX, {
                        dotRadius: 2,
                        themed: !0,
                    }),
                }),
            "success" === c &&
                (0, r.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: C.h5,
                    lineClamp: 1,
                    children: _.intl.string(_.t["8BEiNn"]),
                }),
            null == c &&
                (0, r.jsx)("div", {
                    className: C.SB,
                    children: (0, r.jsx)(d.Rvf, {
                        color: "currentColor",
                        size: "xs",
                        className: C.Kk,
                    }),
                }),
        ],
    });
}
