t.d(n, { default: () => M });
var i = t(627968),
    a = t(64700),
    l = t(189213),
    s = t(939249),
    r = t(658675),
    c = t(17928),
    o = t(998445),
    u = t(834730),
    d = t(857071),
    h = t(931991),
    A = t(571909),
    v = t(660110),
    g = t(734057),
    y = t(71393),
    E = t(913122),
    f = t(284009),
    p = t.n(f),
    _ = t(730852),
    C = t(849736),
    m = t(790535),
    w = t(763827),
    I = t(988794);
async function N(e, n) {
    let { entity_type: t } = e;
    switch (t) {
        case I.Ps.STAGE_INSTANCE: {
            let n = w.A.getChannelId(),
                t = g.A.getChannel(e.channel_id);
            p()(null != t, "could not find channel"),
                n !== t.id && (await m.cy(t, !0), await m.jA(t, null)),
                await (0, C.e7)(t, !1, !0);
            break;
        }
        case I.Ps.VOICE: {
            let n = w.A.getChannelId(),
                t = g.A.getChannel(e.channel_id);
            p()(null != t, "could not find channel"), n !== t.id && _.default.selectVoiceChannel(t.id);
        }
    }
}
t(321073);
var P = t(755584),
    S = t(602146),
    x = t(95701),
    G = t(496092),
    k = t(652215);
async function L(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = [];
    i.push(...t);
    let a = await P.A.createChannel({
        guildId: e.id,
        type: k.rbe.GUILD_STAGE_VOICE,
        name: n.substring(0, 100),
        permissionOverwrites: i,
    });
    if (null == a || 201 !== a.status) throw Error("Can't create channel for event");
    return (0, x.UE)(a.body);
}
async function T(e, n) {
    let { entity_type: t } = e;
    if (t === I.Ps.STAGE_INSTANCE) {
        let t = await (function (e, n) {
            let { guild_id: t, channel_id: i } = e,
                a = y.A.getGuild(t);
            if (null == a) return Promise.resolve(null);
            let l = g.A.getChannel(i);
            return null == l ? L(a, e.name, n) : Promise.resolve(l);
        })(e, n);
        p()(null != t, "could not find or create channel");
    }
}
async function b(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { channel_id: t, entity_type: i, name: a, id: l, guild_id: s } = e;
    switch (i) {
        case I.Ps.STAGE_INSTANCE:
            p()(null != t, "channel_id is required"), await (0, S.yG)(t, a, I.dD.GUILD_ONLY, n, l);
            break;
        case I.Ps.VOICE:
            p()(null != t, "channel_id is required"), await G.default.startEvent(l, s);
            break;
        case I.Ps.EXTERNAL:
            await G.default.startEvent(l, s);
    }
}
let j = { onSuccess: () => {}, permissionOverwrites: [] };
var O = t(691012),
    U = t(779519),
    D = t(375708),
    V = t(682043);
function M(e) {
    let { transitionState: n, event: t, onSuccess: f, onClose: p } = e,
        { guild_id: _, privacy_level: C } = t,
        m = (0, c.bG)([g.A], () => g.A.getChannel(t.channel_id), [t]),
        w = (0, c.bG)([y.A], () => y.A.getGuild(_), [_]),
        { canManageGuildEvent: P } = (0, h.nr)(m ?? w),
        S = P(t),
        x = (0, c.bG)([d.A], () => d.A.isLurking(_), [_]),
        G = t.entity_type === I.Ps.STAGE_INSTANCE,
        [k, L] = a.useState(G),
        [M, { loading: X, error: B }] = (function () {
            let [e, n] = a.useState(!1),
                [t, i] = a.useState(null);
            return [
                async function (e, t) {
                    let { onSuccess: a = j.onSuccess, permissionOverwrites: l = j.permissionOverwrites } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : j;
                    n(!0);
                    try {
                        await T(e, l),
                            await b(e, t),
                            await N(e, a),
                            await (function (e, n) {
                                let { entity_type: t } = e;
                                switch (t) {
                                    case I.Ps.STAGE_INSTANCE:
                                    case I.Ps.VOICE:
                                    case I.Ps.EXTERNAL:
                                        n?.();
                                }
                                return Promise.resolve();
                            })(e, a),
                            n(!1);
                    } catch (e) {
                        i(new E.LG(e)), n(!1);
                    }
                    n(!1);
                },
                { loading: e, error: t },
            ];
        })();
    if (!S) return null;
    let H = C === I.dD.PUBLIC ? D.intl.string(D.t.HhlaLP) : D.intl.string(D.t.GI3xXd);
    function q() {
        f?.(), p(), (0, A.ek)(!1);
    }
    async function J() {
        await M(t, k, { onSuccess: q });
    }
    return (0, i.jsxs)(l.Modal, {
        transitionState: n,
        onClose: p,
        title: t.name,
        subtitle: D.intl.format(D.t.UMajol, {
            privacyLevel: H,
            privacyLevelHook: function (e, n) {
                return C !== I.dD.PUBLIC
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: V.ro,
                              children: [
                                  (0, i.jsx)(o.L, { size: "xs", color: "currentColor", className: V.HJ }),
                                  (0, i.jsx)(u.E, { variant: "text-md/normal", children: e }),
                              ],
                          },
                          n,
                      );
            },
        }),
        actionBarInput: G
            ? (0, i.jsxs)(s.D, {
                  onClick: () => L(!k),
                  className: V.Qy,
                  children: [
                      (0, i.jsx)(r.P, { checked: k }),
                      (0, i.jsx)(u.E, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: D.intl.string(D.t["Pe+Pwp"]),
                      }),
                  ],
              })
            : void 0,
        actions: [{ variant: "active", text: D.intl.string(D.t.cK1GGY), onClick: J, loading: X }],
        children: [
            (0, i.jsx)(U.A, {
                guild: w,
                channel: m,
                name: t.name,
                description: t.description ?? void 0,
                imageSource: (0, O.A)(t),
                isActive: !1,
                isUserLurking: x,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: t,
                hideAgeVerificationNotice: !0,
            }),
            I.Tn.has(t.entity_type) && (0, i.jsx)(v.A, { className: V.XI, channelId: t.channel_id }),
            null != B && null != B.getAnyErrorMessage()
                ? (0, i.jsx)(u.E, {
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      className: V.gJ,
                      children: B.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
