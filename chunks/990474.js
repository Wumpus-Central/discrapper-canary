"use strict";
n.d(t, { Ay: () => O, Oh: () => R, gn: () => C });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(314116),
    o = n(990078),
    l = n(821609),
    d = n(721768),
    _ = n(842209),
    u = n(392054),
    c = n(332173),
    E = n(406704),
    h = n(253932),
    m = n(734057),
    f = n(31717),
    g = n(576705),
    p = n(309010),
    A = n(625494),
    I = n(652215),
    T = n(73510);
n(827669);
var S = n(985018);
function N(e, t, n, i, r) {
    if (null == e) return;
    let s = () => {
        let s = m.A.getChannel(e);
        if (null == s) return;
        let { command: a, application: o } = _.EW({ channel: s, type: "channel" }, n, r);
        if (null != a && a.untranslatedName === t) {
            A._.dispatch(I.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let t =
                null != o
                    ? {
                          type: u.Hf.APPLICATION,
                          id: o.id,
                          icon: o.icon,
                          name: o?.bot?.username ?? o.name,
                          application: o,
                      }
                    : null;
            d.Gf({ channelId: e, command: null, section: null }),
                d.Gf({ channelId: e, command: a, section: t, location: i });
        }
    };
    "" !== f.A.getDraft(e, f.C.ChannelMessage)
        ? (0, a.A)({
              title: S.intl.string(S.t.pe26Cj),
              subtitle: S.intl.string(S.t["+awCIy"]),
              confirmText: S.intl.string(S.t.VkKicb),
              onConfirm: () => s(),
              onCloseCallback: () => {
                  A._.dispatch(I.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
              },
          })
        : s();
}
function C(e) {
    let { node: t, stateKey: n, children: a } = e,
        o = (0, s.bG)([m.A, p.A], () => m.A.getChannel(t.channelId ?? p.A.getChannelId()), [t.channelId]),
        { hasSendMessagePerm: l, hasUseAppCommandsPerm: d } = (0, s.cf)([g.A], () => ({
            hasSendMessagePerm: g.A.can(I.xBc.SEND_MESSAGES, o),
            hasUseAppCommandsPerm: g.A.can(I.xBc.USE_APPLICATION_COMMANDS, o),
        })),
        f = void 0 !== o ? { type: "channel", channel: o } : { type: "contextless" },
        { command: A } = _.D3(f, t.commandKey ?? ""),
        S = h.D_.useSetting(),
        C = r.useMemo(() => {
            if (null == A || null == o || A.untranslatedName !== t.commandName || S) return !1;
            let e = o.isPrivate();
            if ((0, E.UJ)(o) || (!e && !l)) return !1;
            let n = A?.applicationId === T.Ik.BUILT_IN;
            return !!e || !!n || !!d;
        }, [o, A, l, d, t.commandName, S]),
        R = r.useCallback(
            (e) => {
                e?.stopPropagation(),
                    null != o &&
                        null != t.commandName &&
                        null != t.commandKey &&
                        N(o.id, t.commandName, t.commandKey, u.Oh.MENTION);
            },
            [o, t.commandKey, t.commandName],
        );
    return C
        ? (0, i.jsxs)(c.A, { role: "link", onClick: R, children: ["/", a] }, n)
        : (0, i.jsxs)("span", { children: ["/", a] });
}
function R(e) {
    let { commandId: t, commandName: n, commandDescription: r, applicationId: a, onClick: d } = e,
        _ = (0, s.bG)([p.A], () => p.A.getChannelId());
    return (0, i.jsx)(o.m, {
        text: r,
        position: "top",
        children: (0, i.jsx)(l.$, {
            size: "sm",
            variant: "secondary",
            onClick: (e) => {
                e?.stopPropagation(), N(_, n, t, u.Oh.POPULAR_COMMANDS, a), d?.(t);
            },
            text: `/${n}`,
        }),
    });
}
function O(e) {
    return { react: (e, t, n) => (0, i.jsx)(C, { node: e, stateKey: n.key, children: t(e.content, n) }) };
}
