"use strict";
n.d(t, { Ay: () => C, Oh: () => v, gn: () => N });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(314116),
    o = n(990078),
    l = n(821609),
    u = n(721768),
    c = n(842209),
    d = n(392054),
    _ = n(332173),
    f = n(406704),
    p = n(253932),
    h = n(734057),
    E = n(31717),
    m = n(576705),
    g = n(309010),
    A = n(203982),
    I = n(652215),
    T = n(73510);
n(827669);
var S = n(985018);
function y(e, t, n, r, i) {
    if (null == e) return;
    let s = () => {
        let s = h.A.getChannel(e);
        if (null == s) return;
        let { command: a, application: o } = c.EW({ channel: s, type: "channel" }, n, i);
        if (null != a && a.untranslatedName === t) {
            A._.dispatch(I.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let t =
                null != o
                    ? {
                          type: d.Hf.APPLICATION,
                          id: o.id,
                          icon: o.icon,
                          name: o?.bot?.username ?? o.name,
                          application: o,
                      }
                    : null;
            u.Gf({ channelId: e, command: null, section: null }),
                u.Gf({ channelId: e, command: a, section: t, location: r });
        }
    };
    "" !== E.A.getDraft(e, E.C.ChannelMessage)
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
function N(e) {
    let { node: t, stateKey: n, children: a } = e,
        o = (0, s.bG)([h.A, g.A], () => h.A.getChannel(t.channelId ?? g.A.getChannelId()), [t.channelId]),
        { hasSendMessagePerm: l, hasUseAppCommandsPerm: u } = (0, s.cf)([m.A], () => ({
            hasSendMessagePerm: m.A.can(I.xBc.SEND_MESSAGES, o),
            hasUseAppCommandsPerm: m.A.can(I.xBc.USE_APPLICATION_COMMANDS, o),
        })),
        E = void 0 !== o ? { type: "channel", channel: o } : { type: "contextless" },
        { command: A } = c.D3(E, t.commandKey ?? ""),
        S = p.D_.useSetting(),
        N = i.useMemo(() => {
            if (null == A || null == o || A.untranslatedName !== t.commandName || S) return !1;
            let e = o.isPrivate();
            if ((0, f.UJ)(o) || (!e && !l)) return !1;
            let n = A?.applicationId === T.Ik.BUILT_IN;
            return !!e || !!n || !!u;
        }, [o, A, l, u, t.commandName, S]),
        v = i.useCallback(
            (e) => {
                e?.stopPropagation(),
                    null != o &&
                        null != t.commandName &&
                        null != t.commandKey &&
                        y(o.id, t.commandName, t.commandKey, d.Oh.MENTION);
            },
            [o, t.commandKey, t.commandName],
        );
    return N
        ? (0, r.jsxs)(_.A, { role: "link", onClick: v, children: ["/", a] }, n)
        : (0, r.jsxs)("span", { children: ["/", a] });
}
function v(e) {
    let { commandId: t, commandName: n, commandDescription: i, applicationId: a, onClick: u } = e,
        c = (0, s.bG)([g.A], () => g.A.getChannelId());
    return (0, r.jsx)(o.m, {
        text: i,
        position: "top",
        children: (0, r.jsx)(l.$, {
            size: "sm",
            variant: "secondary",
            onClick: (e) => {
                e?.stopPropagation(), y(c, n, t, d.Oh.POPULAR_COMMANDS, a), u?.(t);
            },
            text: `/${n}`,
        }),
    });
}
function C(e) {
    return { react: (e, t, n) => (0, r.jsx)(N, { node: e, stateKey: n.key, children: t(e.content, n) }) };
}
