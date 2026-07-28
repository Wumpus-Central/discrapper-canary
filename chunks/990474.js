"use strict";
n.d(t, { Ay: () => R, Oh: () => O, gn: () => C });
var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(314116),
    l = n(866665),
    o = n(821609),
    d = n(721768),
    c = n(842209),
    u = n(392054),
    _ = n(332173),
    E = n(406704),
    A = n(885386),
    h = n(734057),
    I = n(31717),
    f = n(576705),
    p = n(309010),
    T = n(625494),
    m = n(652215),
    g = n(73510);
n(827669);
var S = n(375708);
function N(e, t, n, i, r) {
    null != e &&
        ("" !== I.A.getDraft(e, I.C.ChannelMessage)
            ? (0, s.A)({
                  title: S.intl.string(S.t.pe26Cj),
                  subtitle: S.intl.string(S.t["+awCIy"]),
                  confirmText: S.intl.string(S.t.VkKicb),
                  onConfirm: () => a(),
                  onCloseCallback: () => {
                      T._.dispatch(m.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  },
              })
            : a());
    function a() {
        if (null == e) return;
        let a = h.A.getChannel(e);
        if (null == a) return;
        let { command: s, application: l } = c.EW({ channel: a, type: "channel" }, n, r);
        if (null != s && s.untranslatedName === t) {
            T._.dispatch(m.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let t =
                null != l
                    ? {
                          type: u.Hf.APPLICATION,
                          id: l.id,
                          icon: l.icon,
                          name: l?.bot?.username ?? l.name,
                          application: l,
                      }
                    : null;
            d.Gf({ channelId: e, command: null, section: null }),
                d.Gf({ channelId: e, command: s, section: t, location: i });
        }
    }
}
function C(e) {
    let { node: t, stateKey: n, children: s } = e,
        l = (0, a.bG)([h.A, p.Ay], () => h.A.getChannel(t.channelId ?? p.Ay.getChannelId()), [t.channelId]),
        { hasSendMessagePerm: o, hasUseAppCommandsPerm: d } = (0, a.cf)([f.A], () => ({
            hasSendMessagePerm: f.A.can(m.xBc.SEND_MESSAGES, l),
            hasUseAppCommandsPerm: f.A.can(m.xBc.USE_APPLICATION_COMMANDS, l),
        })),
        I = void 0 !== l ? { type: "channel", channel: l } : { type: "contextless" },
        { command: T } = c.D3(I, t.commandKey ?? ""),
        S = A.D_.useSetting(),
        C = r.useMemo(() => {
            if (null == T || null == l || T.untranslatedName !== t.commandName || S) return !1;
            let e = l.isPrivate();
            if ((0, E.UJ)(l) || (!e && !o)) return !1;
            let n = T?.applicationId === g.Ik.BUILT_IN;
            return !!e || !!n || !!d;
        }, [l, T, o, d, t.commandName, S]),
        O = r.useCallback(
            (e) => {
                e?.stopPropagation(),
                    null != l &&
                        null != t.commandName &&
                        null != t.commandKey &&
                        N(l.id, t.commandName, t.commandKey, u.Oh.MENTION);
            },
            [l, t.commandKey, t.commandName],
        );
    return C
        ? (0, i.jsxs)(_.A, { role: "link", onClick: O, children: ["/", s] }, n)
        : (0, i.jsxs)("span", { children: ["/", s] });
}
function O(e) {
    let { commandId: t, commandName: n, commandDescription: r, applicationId: s, onClick: d } = e,
        c = (0, a.bG)([p.Ay], () => p.Ay.getChannelId());
    return (0, i.jsx)(l.m, {
        text: r,
        position: "top",
        children: (0, i.jsx)(o.$, {
            size: "sm",
            variant: "secondary",
            onClick: function (e) {
                e?.stopPropagation(), N(c, n, t, u.Oh.POPULAR_COMMANDS, s), d?.(t);
            },
            text: `/${n}`,
        }),
    });
}
function R(e) {
    return { react: (e, t, n) => (0, i.jsx)(C, { node: e, stateKey: n.key, children: t(e.content, n) }) };
}
