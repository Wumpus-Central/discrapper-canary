n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(43990),
    d = n(395011),
    u = n(897720),
    c = n(393172),
    g = n(968898),
    m = n(95701),
    _ = n(427157),
    A = n(288737),
    h = n(555528),
    p = n(287809),
    x = n(256415),
    E = n(403362),
    T = n(652215);
n(392164);
var S = n(985018),
    f = n(481384);
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new A.A({
            channelId: "123",
            userId: s,
            sessionId: "789",
            mute: t,
            deaf: n,
            selfMute: !1,
            selfDeaf: !1,
            selfVideo: !1,
            selfStream: !1,
            discoverable: i,
        }),
        user: new _.A({ id: s, username: e }),
        member: {
            nick: e,
            userId: s,
            guildId: "890",
            roles: [],
            hoistRoleId: null,
            premiumSince: null,
            joinedAt: new Date().toISOString(),
            colorString: "#000000",
            colorStrings: { primaryColor: "#000000", secondaryColor: null, tertiaryColor: null },
        },
        nick: e,
        comparator: e,
        _isPlaceholder: !0,
    };
}
function C() {
    let e,
        t = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
        {
            avatarSizeMode: n,
            displayNameMode: l,
            displayUserMode: _,
        } = (0, r.cf)([x.default], () => ({
            avatarSizeMode: x.default.getAvatarSizeMode(),
            displayNameMode: x.default.getDisplayNameMode(),
            displayUserMode: x.default.getDisplayUserMode(),
        })),
        [A] = s.useState(() => [
            b(S.intl.string(S.t.C0ZDvo), !0, !1),
            b(S.intl.string(S.t.iOtj8E), !1, !1, !0),
            b(S.intl.string(S.t["0oqNgL"]), !1, !0),
        ]),
        C = (0, r.bG)([d.A, h.A], () => {
            let e = d.A.getWidgetByType(T.uss.VOICE_V3);
            if (null == e) return null;
            let t = h.A.getWidget(e.id);
            return null != t && (0, u.ZO)(t) ? t : null;
        }),
        v = C?.meta?.voiceStatesMaxShown ?? 8,
        N = [null != t ? (((e = b(t.username)).user = t), e) : null, ...A].filter(E.Vq),
        I = [new Map(N.map((e) => [e.user.id, e])), N.map((e) => e.user.id)],
        y = (0, i.jsx)(o.N, {
            theme: T.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: a()(f.Y5, e),
                    children: [
                        (0, i.jsx)("div", {
                            className: f.kJ,
                            children: (0, i.jsx)(c.DH, {
                                id: "voice-widget",
                                title: S.intl.string(S.t.KNJ6Vq),
                                channel: (0, m.createChannelRecord)({
                                    id: "123",
                                    name: "Test Channel",
                                    type: T.rbe.GUILD_VOICE,
                                    guild_id: "456",
                                }),
                                overlayVoiceStates: I,
                                displayNameMode: l,
                                displayUserMode: _,
                                avatarSizeMode: n,
                                widget: T.uss.VOICE,
                                anchorLeft: !0,
                                application: null,
                                stream: null,
                                streamApplication: null,
                                streamMetadata: null,
                                locked: !1,
                                pinned: !1,
                                isSettingsPreview: !0,
                                isPreviewingInGame: !1,
                                maxDisplayedVoiceStates: v,
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: f.R$,
                            children: [
                                (0, i.jsx)(g.Pl, { children: S.intl.string(S.t.KNJ6Vq) }),
                                (0, i.jsx)(g.CS, {}),
                                (0, i.jsx)(g.O0, { id: C?.id ?? "voice-widget", pinned: C?.pinned ?? !1 }),
                            ],
                        }),
                    ],
                }),
        });
    return (0, i.jsx)("div", { className: f.F9, children: y });
}
