n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(395011),
    c = n(897720),
    u = n(393172),
    m = n(968898),
    _ = n(95701),
    g = n(427157),
    x = n(288737),
    A = n(555528),
    h = n(287809),
    p = n(256415),
    f = n(403362),
    T = n(652215);
n(392164);
var S = n(985018),
    E = n(502040);
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = "456" + Math.floor(1e6 * Math.random());
    return {
        voiceState: new x.A({
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
        user: new g.A({ id: s, username: e }),
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
        t = (0, r.bG)([h.default], () => h.default.getCurrentUser()),
        {
            avatarSizeMode: n,
            displayNameMode: l,
            displayUserMode: g,
        } = (0, r.cf)([p.default], () => ({
            avatarSizeMode: p.default.getAvatarSizeMode(),
            displayNameMode: p.default.getDisplayNameMode(),
            displayUserMode: p.default.getDisplayUserMode(),
        })),
        [x] = s.useState(() => [
            b(S.intl.string(S.t.C0ZDvo), !0, !1),
            b(S.intl.string(S.t.iOtj8E), !1, !1, !0),
            b(S.intl.string(S.t["0oqNgL"]), !1, !0),
        ]),
        C = (0, r.bG)([d.A, A.A], () => {
            let e = d.A.getWidgetByType(T.uss.VOICE_V3);
            if (null == e) return null;
            let t = A.A.getWidget(e.id);
            return null != t && (0, c.ZO)(t) ? t : null;
        }),
        v = C?.meta?.voiceStatesMaxShown ?? 8,
        N = [null != t ? (((e = b(t.username)).user = t), e) : null, ...x].filter(f.Vq),
        I = [new Map(N.map((e) => [e.user.id, e])), N.map((e) => e.user.id)],
        j = (0, i.jsx)(o.NPJ, {
            theme: T.NJ8.MIDNIGHT,
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: a()(E.Y5, e),
                    children: [
                        (0, i.jsx)("div", {
                            className: E.kJ,
                            children: (0, i.jsx)(u.DH, {
                                id: "voice-widget",
                                title: S.intl.string(S.t.KNJ6Vq),
                                channel: (0, _.createChannelRecord)({
                                    id: "123",
                                    name: "Test Channel",
                                    type: T.rbe.GUILD_VOICE,
                                    guild_id: "456",
                                }),
                                overlayVoiceStates: I,
                                displayNameMode: l,
                                displayUserMode: g,
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
                            className: E.R$,
                            children: [
                                (0, i.jsx)(m.Pl, { children: S.intl.string(S.t.KNJ6Vq) }),
                                (0, i.jsx)(m.CS, {}),
                                (0, i.jsx)(m.O0, { id: C?.id ?? "voice-widget", pinned: C?.pinned ?? !1 }),
                            ],
                        }),
                    ],
                }),
        });
    return (0, i.jsx)("div", { className: E.F9, children: j });
}
