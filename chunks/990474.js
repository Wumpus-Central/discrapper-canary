"use strict";
n.d(t, { Ay: () => b, Oh: () => C, gn: () => v });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(314116),
    o = n(990078),
    l = n(397927),
    u = n(721768),
    c = n(842209),
    d = n(392054),
    _ = n(332173),
    f = n(406704),
    p = n(253932),
    h = n(734057),
    m = n(31717),
    g = n(576705),
    E = n(309010),
    A = n(203982),
    I = n(652215),
    T = n(73510);
n(827669);
var y = n(985018);
function S(e, t, n, r, i) {
    if (null == e) return;
    let a = () => {
        let a = h.A.getChannel(e);
        if (null == a) return;
        let { command: s, application: o } = c.EW({ channel: a, type: "channel" }, n, i);
        if (null != s && s.untranslatedName === t) {
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
                u.Gf({ channelId: e, command: s, section: t, location: r });
        }
    };
    "" !== m.A.getDraft(e, m.C.ChannelMessage)
        ? (0, s.A)({
              title: y.intl.string(y.t.pe26Cj),
              subtitle: y.intl.string(y.t["+awCIy"]),
              confirmText: y.intl.string(y.t.VkKicb),
              onConfirm: () => a(),
              onCloseCallback: () => {
                  A._.dispatch(I.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
              },
          })
        : a();
}
function v(e) {
    let { node: t, stateKey: n, children: s } = e,
        o = (0, a.bG)([h.A, E.A], () => h.A.getChannel(t.channelId ?? E.A.getChannelId()), [t.channelId]),
        { hasSendMessagePerm: l, hasUseAppCommandsPerm: u } = (0, a.cf)([g.A], () => ({
            hasSendMessagePerm: g.A.can(I.xBc.SEND_MESSAGES, o),
            hasUseAppCommandsPerm: g.A.can(I.xBc.USE_APPLICATION_COMMANDS, o),
        })),
        m = void 0 !== o ? { type: "channel", channel: o } : { type: "contextless" },
        { command: A } = c.D3(m, t.commandKey ?? ""),
        y = p.D_.useSetting(),
        v = i.useMemo(() => {
            if (null == A || null == o || A.untranslatedName !== t.commandName || y) return !1;
            let e = o.isPrivate();
            if ((0, f.UJ)(o) || (!e && !l)) return !1;
            let n = A?.applicationId === T.Ik.BUILT_IN;
            return !!e || !!n || !!u;
        }, [o, A, l, u, t.commandName, y]),
        C = i.useCallback(
            (e) => {
                e?.stopPropagation(),
                    null != o &&
                        null != t.commandName &&
                        null != t.commandKey &&
                        S(o.id, t.commandName, t.commandKey, d.Oh.MENTION);
            },
            [o, t.commandKey, t.commandName],
        );
    return v
        ? (0, r.jsxs)(_.A, { role: "link", onClick: C, children: ["/", s] }, n)
        : (0, r.jsxs)("span", { children: ["/", s] });
}
function C(e) {
    let { commandId: t, commandName: n, commandDescription: i, applicationId: s, onClick: u } = e,
        c = (0, a.bG)([E.A], () => E.A.getChannelId()),
        _ = (e) => {
            e?.stopPropagation(), S(c, n, t, d.Oh.POPULAR_COMMANDS, s), u?.(t);
        };
    return (0, r.jsx)(o.m, {
        text: i,
        position: "top",
        children: (0, r.jsx)(l.Button, { size: "sm", variant: "secondary", onClick: _, text: `/${n}` }),
    });
}
function b(e) {
    return { react: (e, t, n) => (0, r.jsx)(v, { node: e, stateKey: n.key, children: t(e.content, n) }) };
}
