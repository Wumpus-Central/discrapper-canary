"use strict";
n.d(t, { Ay: () => b, Oh: () => S, gn: () => y });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(314116),
    a = n(990078),
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
    A = n(203982),
    C = n(652215),
    E = n(73510);
n(827669);
var I = n(985018);
function v(e, t, n, i, l) {
    if (null == e) return;
    let s = () => {
        let s = f.A.getChannel(e);
        if (null == s) return;
        let { command: r, application: a } = u.EW({ channel: s, type: "channel" }, n, l);
        if (null != r && r.untranslatedName === t) {
            A._.dispatch(C.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let t =
                null != a
                    ? {
                          type: d.Hf.APPLICATION,
                          id: a.id,
                          icon: a.icon,
                          name: a?.bot?.username ?? a.name,
                          application: a,
                      }
                    : null;
            c.Gf({ channelId: e, command: null, section: null }),
                c.Gf({ channelId: e, command: r, section: t, location: i });
        }
    };
    "" !== g.A.getDraft(e, g.C.ChannelMessage)
        ? (0, r.A)({
              title: I.intl.string(I.t.pe26Cj),
              subtitle: I.intl.string(I.t["+awCIy"]),
              confirmText: I.intl.string(I.t.VkKicb),
              onConfirm: () => s(),
              onCloseCallback: () => {
                  A._.dispatch(C.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
              },
          })
        : s();
}
function y(e) {
    let { node: t, stateKey: n, children: r } = e,
        a = (0, s.bG)([f.A, x.A], () => f.A.getChannel(t.channelId ?? x.A.getChannelId()), [t.channelId]),
        { hasSendMessagePerm: o, hasUseAppCommandsPerm: c } = (0, s.cf)([_.A], () => ({
            hasSendMessagePerm: _.A.can(C.xBc.SEND_MESSAGES, a),
            hasUseAppCommandsPerm: _.A.can(C.xBc.USE_APPLICATION_COMMANDS, a),
        })),
        g = void 0 !== a ? { type: "channel", channel: a } : { type: "contextless" },
        { command: A } = u.D3(g, t.commandKey ?? ""),
        I = p.D_.useSetting(),
        y = l.useMemo(() => {
            if (null == A || null == a || A.untranslatedName !== t.commandName || I) return !1;
            let e = a.isPrivate();
            if ((0, m.UJ)(a) || (!e && !o)) return !1;
            let n = A?.applicationId === E.Ik.BUILT_IN;
            return !!e || !!n || !!c;
        }, [a, A, o, c, t.commandName, I]),
        S = l.useCallback(
            (e) => {
                e?.stopPropagation(),
                    null != a &&
                        null != t.commandName &&
                        null != t.commandKey &&
                        v(a.id, t.commandName, t.commandKey, d.Oh.MENTION);
            },
            [a, t.commandKey, t.commandName],
        );
    return y
        ? (0, i.jsxs)(h.A, { role: "link", onClick: S, children: ["/", r] }, n)
        : (0, i.jsxs)("span", { children: ["/", r] });
}
function S(e) {
    let { commandId: t, commandName: n, commandDescription: l, applicationId: r, onClick: c } = e,
        u = (0, s.bG)([x.A], () => x.A.getChannelId());
    return (0, i.jsx)(a.m, {
        text: l,
        position: "top",
        children: (0, i.jsx)(o.$, {
            size: "sm",
            variant: "secondary",
            onClick: (e) => {
                e?.stopPropagation(), v(u, n, t, d.Oh.POPULAR_COMMANDS, r), c?.(t);
            },
            text: `/${n}`,
        }),
    });
}
function b(e) {
    return { react: (e, t, n) => (0, i.jsx)(y, { node: e, stateKey: n.key, children: t(e.content, n) }) };
}
