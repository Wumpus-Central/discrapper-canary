t.d(n, { Ay: () => v, Oh: () => N, gn: () => k });
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
    g = t(734057),
    f = t(31717),
    x = t(576705),
    j = t(309010),
    A = t(625494),
    y = t(652215),
    C = t(73510);
t(827669);
var E = t(105292);
function I(e, n, t, l, a) {
    null != e &&
        ("" !== f.A.getDraft(e, f.C.ChannelMessage)
            ? (0, r.A)({
                  title: E.intl.string(E.t.pe26Cj),
                  subtitle: E.intl.string(E.t["+awCIy"]),
                  confirmText: E.intl.string(E.t.VkKicb),
                  onConfirm: () => i(),
                  onCloseCallback: () => {
                      A._.dispatch(y.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  },
              })
            : i());
    function i() {
        if (null == e) return;
        let i = g.A.getChannel(e);
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
function k(e) {
    let { node: n, stateKey: t, children: r } = e,
        s = (0, i.bG)([g.A, j.Ay], () => g.A.getChannel(n.channelId ?? j.Ay.getChannelId()), [n.channelId]),
        { hasSendMessagePerm: o, hasUseAppCommandsPerm: c } = (0, i.cf)([x.A], () => ({
            hasSendMessagePerm: x.A.can(y.xBc.SEND_MESSAGES, s),
            hasUseAppCommandsPerm: x.A.can(y.xBc.USE_APPLICATION_COMMANDS, s),
        })),
        f = void 0 !== s ? { type: "channel", channel: s } : { type: "contextless" },
        { command: A } = u.D3(f, n.commandKey ?? ""),
        E = p.D_.useSetting(),
        k = a.useMemo(() => {
            if (null == A || null == s || A.untranslatedName !== n.commandName || E) return !1;
            let e = s.isPrivate();
            if ((0, h.UJ)(s) || (!e && !o)) return !1;
            let t = A?.applicationId === C.Ik.BUILT_IN;
            return !!e || !!t || !!c;
        }, [s, A, o, c, n.commandName, E]),
        N = a.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    null != s &&
                        null != n.commandName &&
                        null != n.commandKey &&
                        I(s.id, n.commandName, n.commandKey, d.Oh.MENTION));
            },
            [s, n.commandKey, n.commandName],
        );
    return k
        ? (0, l.jsxs)(m.A, { role: "link", onClick: N, children: ["/", r] }, t)
        : (0, l.jsxs)("span", { children: ["/", r] });
}
function N(e) {
    let { commandId: n, commandName: t, commandDescription: a, applicationId: r, onClick: c } = e,
        u = (0, i.bG)([j.Ay], () => j.Ay.getChannelId());
    return (0, l.jsx)(s.m, {
        text: a,
        position: "top",
        children: (0, l.jsx)(o.$, {
            size: "sm",
            variant: "secondary",
            onClick: function (e) {
                (e?.stopPropagation(), I(u, t, n, d.Oh.POPULAR_COMMANDS, r), c?.(n));
            },
            text: `/${t}`,
        }),
    });
}
function v(e) {
    return { react: (e, n, t) => (0, l.jsx)(k, { node: e, stateKey: t.key, children: n(e.content, t) }) };
}
