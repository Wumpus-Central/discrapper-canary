t.d(n, { Ay: () => N, Oh: () => v, gn: () => E });
var l = t(477900),
    a = t(582128),
    i = t(17928),
    r = t(314116),
    s = t(866665),
    o = t(821609),
    c = t(721768),
    u = t(842209),
    d = t(392054),
    m = t(332173),
    h = t(406704),
    p = t(253932),
    x = t(734057),
    g = t(31717),
    j = t(576705),
    f = t(309010),
    A = t(625494),
    y = t(652215),
    k = t(73510);
t(827669);
var I = t(105292);
function C(e, n, t, l, a) {
    null != e &&
        ("" !== g.A.getDraft(e, g.C.ChannelMessage)
            ? (0, r.A)({
                  title: I.intl.string(I.t.pe26Cj),
                  subtitle: I.intl.string(I.t["+awCIy"]),
                  confirmText: I.intl.string(I.t.VkKicb),
                  onConfirm: () => i(),
                  onCloseCallback: () => {
                      A._.dispatch(y.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  },
              })
            : i());
    function i() {
        if (null == e) return;
        let i = x.A.getChannel(e);
        if (null == i) return;
        let { command: r, application: s } = u.EW({ channel: i, type: "channel" }, t, a);
        if (null != r && r.untranslatedName === n) {
            A._.dispatch(y.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let n =
                null != s
                    ? {
                          type: d.Hf.APPLICATION,
                          id: s.id,
                          icon: s.icon,
                          name: s?.bot?.username ?? s.name,
                          application: s,
                      }
                    : null;
            (c.Gf({ channelId: e, command: null, section: null }),
                c.Gf({ channelId: e, command: r, section: n, location: l }));
        }
    }
}
function E(e) {
    let { node: n, stateKey: t, children: r } = e,
        s = (0, i.bG)([x.A, f.Ay], () => x.A.getChannel(n.channelId ?? f.Ay.getChannelId()), [n.channelId]),
        { hasSendMessagePerm: o, hasUseAppCommandsPerm: c } = (0, i.cf)([j.A], () => ({
            hasSendMessagePerm: j.A.can(y.xBc.SEND_MESSAGES, s),
            hasUseAppCommandsPerm: j.A.can(y.xBc.USE_APPLICATION_COMMANDS, s),
        })),
        g = void 0 !== s ? { type: "channel", channel: s } : { type: "contextless" },
        { command: A } = u.D3(g, n.commandKey ?? ""),
        I = p.D_.useSetting(),
        E = a.useMemo(() => {
            if (null == A || null == s || A.untranslatedName !== n.commandName || I) return !1;
            let e = s.isPrivate();
            if ((0, h.UJ)(s) || (!e && !o)) return !1;
            let t = A?.applicationId === k.Ik.BUILT_IN;
            return !!e || !!t || !!c;
        }, [s, A, o, c, n.commandName, I]),
        v = a.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    null != s &&
                        null != n.commandName &&
                        null != n.commandKey &&
                        C(s.id, n.commandName, n.commandKey, d.Oh.MENTION));
            },
            [s, n.commandKey, n.commandName],
        );
    return E
        ? (0, l.jsxs)(m.A, { role: "link", onClick: v, children: ["/", r] }, t)
        : (0, l.jsxs)("span", { children: ["/", r] });
}
function v(e) {
    let { commandId: n, commandName: t, commandDescription: a, applicationId: r, onClick: c } = e,
        u = (0, i.bG)([f.Ay], () => f.Ay.getChannelId());
    return (0, l.jsx)(s.m, {
        text: a,
        position: "top",
        children: (0, l.jsx)(o.$, {
            size: "sm",
            variant: "secondary",
            onClick: function (e) {
                (e?.stopPropagation(), C(u, t, n, d.Oh.POPULAR_COMMANDS, r), c?.(n));
            },
            text: `/${t}`,
        }),
    });
}
function N(e) {
    return { react: (e, n, t) => (0, l.jsx)(E, { node: e, stateKey: t.key, children: n(e.content, t) }) };
}
