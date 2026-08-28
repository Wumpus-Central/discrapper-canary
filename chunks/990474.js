"use strict";
n.d(t, { Ay: () => _, Oh: () => v, gn: () => N });
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
    E = n(625494),
    C = n(652215),
    I = n(73510);
n(827669);
var y = n(375708);
function S(e, t, n, l, i) {
    null != e &&
        ("" !== g.A.getDraft(e, g.C.ChannelMessage)
            ? (0, r.A)({
                  title: y.intl.string(y.t.pe26Cj),
                  subtitle: y.intl.string(y.t["+awCIy"]),
                  confirmText: y.intl.string(y.t.VkKicb),
                  onConfirm: () => s(),
                  onCloseCallback: () => {
                      E._.dispatch(C.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  },
              })
            : s());
    function s() {
        if (null == e) return;
        let s = p.A.getChannel(e);
        if (null == s) return;
        let { command: r, application: a } = c.EW({ channel: s, type: "channel" }, n, i);
        if (null != r && r.untranslatedName === t) {
            E._.dispatch(C.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
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
function N(e) {
    let { node: t, stateKey: n, children: r } = e,
        a = (0, s.bG)([p.A, A.Ay], () => p.A.getChannel(t.channelId ?? A.Ay.getChannelId()), [t.channelId]),
        { hasSendMessagePerm: o, hasUseAppCommandsPerm: u } = (0, s.cf)([x.A], () => ({
            hasSendMessagePerm: x.A.can(C.xBc.SEND_MESSAGES, a),
            hasUseAppCommandsPerm: x.A.can(C.xBc.USE_APPLICATION_COMMANDS, a),
        })),
        g = void 0 !== a ? { type: "channel", channel: a } : { type: "contextless" },
        { command: E } = c.D3(g, t.commandKey ?? ""),
        y = f.D_.useSetting(),
        N = i.useMemo(() => {
            if (null == E || null == a || E.untranslatedName !== t.commandName || y) return !1;
            let e = a.isPrivate();
            if ((0, m.UJ)(a) || (!e && !o)) return !1;
            let n = E?.applicationId === I.Ik.BUILT_IN;
            return !!e || !!n || !!u;
        }, [a, E, o, u, t.commandName, y]),
        v = i.useCallback(
            (e) => {
                e?.stopPropagation(),
                    null != a &&
                        null != t.commandName &&
                        null != t.commandKey &&
                        S(a.id, t.commandName, t.commandKey, d.Oh.MENTION);
            },
            [a, t.commandKey, t.commandName],
        );
    return N
        ? (0, l.jsxs)(h.A, { role: "link", onClick: v, children: ["/", r] }, n)
        : (0, l.jsxs)("span", { children: ["/", r] });
}
function v(e) {
    let { commandId: t, commandName: n, commandDescription: i, applicationId: r, onClick: u } = e,
        c = (0, s.bG)([A.Ay], () => A.Ay.getChannelId());
    return (0, l.jsx)(a.m, {
        text: i,
        position: "top",
        children: (0, l.jsx)(o.$, {
            size: "sm",
            variant: "secondary",
            onClick: function (e) {
                e?.stopPropagation(), S(c, n, t, d.Oh.POPULAR_COMMANDS, r), u?.(t);
            },
            text: `/${n}`,
        }),
    });
}
function _(e) {
    return { react: (e, t, n) => (0, l.jsx)(N, { node: e, stateKey: n.key, children: t(e.content, n) }) };
}
