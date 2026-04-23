l.d(n, { default: () => O });
var t = l(627968),
    i = l(64700),
    s = l(189213),
    a = l(939249),
    r = l(658675),
    c = l(17928),
    o = l(998445),
    d = l(834730),
    u = l(857071),
    h = l(931991),
    m = l(571909),
    v = l(660110),
    x = l(734057),
    C = l(71393),
    N = l(845584),
    A = l(284009),
    g = l.n(A),
    j = l(956793),
    k = l(849736),
    E = l(790535),
    p = l(763827),
    y = l(988794);
async function f(e, n) {
    let { entity_type: l } = e;
    switch (l) {
        case y.Ps.STAGE_INSTANCE: {
            let n = p.A.getChannelId(),
                l = x.A.getChannel(e.channel_id);
            g()(null != l, "could not find channel"),
                n !== l.id && (await E.cy(l, !0), await E.jA(l, null)),
                await (0, k.e7)(l, !1, !0);
            break;
        }
        case y.Ps.VOICE: {
            let n = p.A.getChannelId(),
                l = x.A.getChannel(e.channel_id);
            g()(null != l, "could not find channel"), n !== l.id && j.default.selectVoiceChannel(l.id);
        }
    }
}
l(321073);
var _ = l(755584),
    w = l(602146),
    I = l(95701),
    G = l(496092),
    S = l(652215);
async function P(e, n) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        t = [];
    t.push(...l);
    let i = await _.A.createChannel({
        guildId: e.id,
        type: S.rbe.GUILD_STAGE_VOICE,
        name: n.substring(0, 100),
        permissionOverwrites: t,
    });
    if (null == i || 201 !== i.status) throw Error("Can't create channel for event");
    return (0, I.UE)(i.body);
}
async function T(e, n) {
    let { entity_type: l } = e;
    if (l === y.Ps.STAGE_INSTANCE) {
        let l = await (function (e, n) {
            let { guild_id: l, channel_id: t } = e,
                i = C.A.getGuild(l);
            if (null == i) return Promise.resolve(null);
            let s = x.A.getChannel(t);
            return null == s ? P(i, e.name, n) : Promise.resolve(s);
        })(e, n);
        g()(null != l, "could not find or create channel");
    }
}
async function b(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { channel_id: l, entity_type: t, name: i, id: s, guild_id: a } = e;
    switch (t) {
        case y.Ps.STAGE_INSTANCE:
            g()(null != l, "channel_id is required"), await (0, w.yG)(l, i, y.dD.GUILD_ONLY, n, s);
            break;
        case y.Ps.VOICE:
            g()(null != l, "channel_id is required"), await G.A.startEvent(s, a);
            break;
        case y.Ps.EXTERNAL:
            await G.A.startEvent(s, a);
    }
}
let L = { onSuccess: () => {}, permissionOverwrites: [] };
var U = l(691012),
    M = l(779519),
    B = l(985018),
    D = l(682043);
function O(e) {
    let { transitionState: n, event: l, onSuccess: A, onClose: g } = e,
        { guild_id: j, privacy_level: k } = l,
        E = (0, c.bG)([x.A], () => x.A.getChannel(l.channel_id), [l]),
        p = (0, c.bG)([C.A], () => C.A.getGuild(j), [j]),
        { canManageGuildEvent: _ } = (0, h.nr)(E ?? p),
        w = _(l),
        I = (0, c.bG)([u.A], () => u.A.isLurking(j), [j]),
        G = l.entity_type === y.Ps.STAGE_INSTANCE,
        [S, P] = i.useState(G),
        [O, { loading: R, error: V }] = (function () {
            let [e, n] = i.useState(!1),
                [l, t] = i.useState(null);
            return [
                async function (e, l) {
                    let { onSuccess: i = L.onSuccess, permissionOverwrites: s = L.permissionOverwrites } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : L;
                    n(!0);
                    try {
                        await T(e, s),
                            await b(e, l),
                            await f(e, i),
                            await (function (e, n) {
                                let { entity_type: l } = e;
                                switch (l) {
                                    case y.Ps.STAGE_INSTANCE:
                                    case y.Ps.VOICE:
                                    case y.Ps.EXTERNAL:
                                        n?.();
                                }
                                return Promise.resolve();
                            })(e, i),
                            n(!1);
                    } catch (e) {
                        t(new N.LG(e)), n(!1);
                    }
                    n(!1);
                },
                { loading: e, error: l },
            ];
        })();
    if (!w) return null;
    let J = k === y.dD.PUBLIC ? B.intl.string(B.t.HhlaLP) : B.intl.string(B.t.GI3xXd),
        q = () => {
            A?.(), g(), (0, m.ek)(!1);
        },
        X = async () => {
            await O(l, S, { onSuccess: q });
        };
    return (0, t.jsxs)(s.Modal, {
        transitionState: n,
        onClose: g,
        title: l.name,
        subtitle: B.intl.format(B.t.UMajol, {
            privacyLevel: J,
            privacyLevelHook: (e, n) =>
                k !== y.dD.PUBLIC
                    ? null
                    : (0, t.jsxs)(
                          "div",
                          {
                              className: D.ro,
                              children: [
                                  (0, t.jsx)(o.L, { size: "xs", color: "currentColor", className: D.HJ }),
                                  (0, t.jsx)(d.E, { variant: "text-md/normal", children: e }),
                              ],
                          },
                          n,
                      ),
        }),
        actionBarInput: G
            ? (0, t.jsxs)(a.D, {
                  onClick: () => P(!S),
                  className: D.Qy,
                  children: [
                      (0, t.jsx)(r.P, { checked: S }),
                      (0, t.jsx)(d.E, {
                          color: "text-default",
                          variant: "text-sm/normal",
                          children: B.intl.string(B.t["Pe+Pwp"]),
                      }),
                  ],
              })
            : void 0,
        actions: [{ variant: "active", text: B.intl.string(B.t.cK1GGY), onClick: X, loading: R }],
        children: [
            (0, t.jsx)(M.A, {
                guild: p,
                channel: E,
                name: l.name,
                description: l.description ?? void 0,
                imageSource: (0, U.A)(l),
                isActive: !1,
                isUserLurking: I,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: l,
                hideAgeVerificationNotice: !0,
            }),
            y.Tn.has(l.entity_type) && (0, t.jsx)(v.A, { className: D.XI, channelId: l.channel_id }),
            null != V && null != V.getAnyErrorMessage()
                ? (0, t.jsx)(d.E, {
                      color: "text-feedback-critical",
                      variant: "text-sm/normal",
                      className: D.gJ,
                      children: V.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
