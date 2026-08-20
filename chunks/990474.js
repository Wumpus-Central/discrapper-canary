"use strict";
n.d(t, { Ay: () => _, Oh: () => N, gn: () => S });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    r = n(314116),
    a = n(866665),
    o = n(821609),
    u = n(721768),
    c = n(842209),
    d = n(392054),
    h = n(332173),
    m = n(406704),
    f = n(885386),
    p = n(734057),
    g = n(31717),
    x = n(576705),
    A = n(309010),
    C = n(625494),
    E = n(652215),
    I = n(73510);
n(827669);
var y = n(375708);
function v(e, t, n, l, i) {
    null != e &&
        ("" !== g.A.getDraft(e, g.C.ChannelMessage)
            ? (0, r.A)({
                  title: y.intl.string(y.t.pe26Cj),
                  subtitle: y.intl.string(y.t["+awCIy"]),
                  confirmText: y.intl.string(y.t.VkKicb),
                  onConfirm: () => s(),
                  onCloseCallback: () => {
                      C._.dispatch(E.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  },
              })
            : s());
    function s() {
        if (null == e) return;
        let s = p.A.getChannel(e);
        if (null == s) return;
        let { command: r, application: a } = c.EW({ channel: s, type: "channel" }, n, i);
        if (null != r && r.untranslatedName === t) {
            C._.dispatch(E.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
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
            u.Gf({ channelId: e, command: null, section: null }),
                u.Gf({ channelId: e, command: r, section: t, location: l });
        }
    }
}
function S(e) {
    let { node: t, stateKey: n, children: r } = e,
        a = (0, s.bG)([p.A, A.Ay], () => p.A.getChannel(t.channelId ?? A.Ay.getChannelId()), [t.channelId]),
        { hasSendMessagePerm: o, hasUseAppCommandsPerm: u } = (0, s.cf)([x.A], () => ({
            hasSendMessagePerm: x.A.can(E.xBc.SEND_MESSAGES, a),
            hasUseAppCommandsPerm: x.A.can(E.xBc.USE_APPLICATION_COMMANDS, a),
        })),
        g = void 0 !== a ? { type: "channel", channel: a } : { type: "contextless" },
        { command: C } = c.D3(g, t.commandKey ?? ""),
        y = f.D_.useSetting(),
        S = i.useMemo(() => {
            if (null == C || null == a || C.untranslatedName !== t.commandName || y) return !1;
            let e = a.isPrivate();
            if ((0, m.UJ)(a) || (!e && !o)) return !1;
            let n = C?.applicationId === I.Ik.BUILT_IN;
            return !!e || !!n || !!u;
        }, [a, C, o, u, t.commandName, y]),
        N = i.useCallback(
            (e) => {
                e?.stopPropagation(),
                    null != a &&
                        null != t.commandName &&
                        null != t.commandKey &&
                        v(a.id, t.commandName, t.commandKey, d.Oh.MENTION);
            },
            [a, t.commandKey, t.commandName],
        );
    return S
        ? (0, l.jsxs)(h.A, { role: "link", onClick: N, children: ["/", r] }, n)
        : (0, l.jsxs)("span", { children: ["/", r] });
}
function N(e) {
    let { commandId: t, commandName: n, commandDescription: i, applicationId: r, onClick: u } = e,
        c = (0, s.bG)([A.Ay], () => A.Ay.getChannelId());
    return (0, l.jsx)(a.m, {
        text: i,
        position: "top",
        children: (0, l.jsx)(o.$, {
            size: "sm",
            variant: "secondary",
            onClick: function (e) {
                e?.stopPropagation(), v(c, n, t, d.Oh.POPULAR_COMMANDS, r), u?.(t);
            },
            text: `/${n}`,
        }),
    });
}
function _(e) {
    return { react: (e, t, n) => (0, l.jsx)(S, { node: e, stateKey: n.key, children: t(e.content, n) }) };
}
