"use strict";
n.d(t, { Ay: () => S, Oh: () => b, gn: () => y });
var l = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(314116),
    r = n(990078),
    o = n(821609),
    c = n(721768),
    u = n(842209),
    d = n(392054),
    h = n(332173),
    m = n(406704),
    p = n(253932),
    f = n(734057),
    g = n(31717),
    _ = n(576705),
    x = n(309010),
    C = n(625494),
    A = n(652215),
    E = n(73510);
n(827669);
var I = n(985018);
function v(e, t, n, l, i) {
    if (null == e) return;
    let s = () => {
        let s = f.A.getChannel(e);
        if (null == s) return;
        let { command: a, application: r } = u.EW({ channel: s, type: "channel" }, n, i);
        if (null != a && a.untranslatedName === t) {
            C._.dispatch(A.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let t =
                null != r
                    ? {
                          type: d.Hf.APPLICATION,
                          id: r.id,
                          icon: r.icon,
                          name: r?.bot?.username ?? r.name,
                          application: r,
                      }
                    : null;
            c.Gf({ channelId: e, command: null, section: null }),
                c.Gf({ channelId: e, command: a, section: t, location: l });
        }
    };
    "" !== g.A.getDraft(e, g.C.ChannelMessage)
        ? (0, a.A)({
              title: I.intl.string(I.t.pe26Cj),
              subtitle: I.intl.string(I.t["+awCIy"]),
              confirmText: I.intl.string(I.t.VkKicb),
              onConfirm: () => s(),
              onCloseCallback: () => {
                  C._.dispatch(A.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
              },
          })
        : s();
}
function y(e) {
    let { node: t, stateKey: n, children: a } = e,
        r = (0, s.bG)([f.A, x.A], () => f.A.getChannel(t.channelId ?? x.A.getChannelId()), [t.channelId]),
        { hasSendMessagePerm: o, hasUseAppCommandsPerm: c } = (0, s.cf)([_.A], () => ({
            hasSendMessagePerm: _.A.can(A.xBc.SEND_MESSAGES, r),
            hasUseAppCommandsPerm: _.A.can(A.xBc.USE_APPLICATION_COMMANDS, r),
        })),
        g = void 0 !== r ? { type: "channel", channel: r } : { type: "contextless" },
        { command: C } = u.D3(g, t.commandKey ?? ""),
        I = p.D_.useSetting(),
        y = i.useMemo(() => {
            if (null == C || null == r || C.untranslatedName !== t.commandName || I) return !1;
            let e = r.isPrivate();
            if ((0, m.UJ)(r) || (!e && !o)) return !1;
            let n = C?.applicationId === E.Ik.BUILT_IN;
            return !!e || !!n || !!c;
        }, [r, C, o, c, t.commandName, I]),
        b = i.useCallback(
            (e) => {
                e?.stopPropagation(),
                    null != r &&
                        null != t.commandName &&
                        null != t.commandKey &&
                        v(r.id, t.commandName, t.commandKey, d.Oh.MENTION);
            },
            [r, t.commandKey, t.commandName],
        );
    return y
        ? (0, l.jsxs)(h.A, { role: "link", onClick: b, children: ["/", a] }, n)
        : (0, l.jsxs)("span", { children: ["/", a] });
}
function b(e) {
    let { commandId: t, commandName: n, commandDescription: i, applicationId: a, onClick: c } = e,
        u = (0, s.bG)([x.A], () => x.A.getChannelId());
    return (0, l.jsx)(r.m, {
        text: i,
        position: "top",
        children: (0, l.jsx)(o.$, {
            size: "sm",
            variant: "secondary",
            onClick: (e) => {
                e?.stopPropagation(), v(u, n, t, d.Oh.POPULAR_COMMANDS, a), c?.(t);
            },
            text: `/${n}`,
        }),
    });
}
function S(e) {
    return { react: (e, t, n) => (0, l.jsx)(y, { node: e, stateKey: n.key, children: t(e.content, n) }) };
}
