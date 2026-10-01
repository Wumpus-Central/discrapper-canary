t.d(n, { Ay: () => N, Oh: () => v, gn: () => k });
var l = t(477900),
    r = t(582128),
    a = t(17928),
    i = t(314116),
    o = t(866665),
    s = t(821609),
    c = t(721768),
    u = t(842209),
    d = t(392054),
    m = t(332173),
    h = t(406704),
    p = t(885386),
    g = t(734057),
    f = t(31717),
    A = t(576705),
    y = t(309010),
    x = t(625494),
    E = t(652215),
    j = t(73510);
t(827669);
var I = t(375708);
function C(e, n, t, l, r) {
    null != e &&
        ("" !== f.A.getDraft(e, f.C.ChannelMessage)
            ? (0, i.A)({
                  title: I.intl.string(I.t.pe26Cj),
                  subtitle: I.intl.string(I.t["+awCIy"]),
                  confirmText: I.intl.string(I.t.VkKicb),
                  onConfirm: () => a(),
                  onCloseCallback: () => {
                      x._.dispatch(E.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  },
              })
            : a());
    function a() {
        if (null == e) return;
        let a = g.A.getChannel(e);
        if (null == a) return;
        let { command: i, application: o } = u.EW({ channel: a, type: "channel" }, t, r);
        if (null != i && i.untranslatedName === n) {
            x._.dispatch(E.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let n =
                null != o
                    ? {
                          type: d.Hf.APPLICATION,
                          id: o.id,
                          icon: o.icon,
                          name: o?.bot?.username ?? o.name,
                          application: o,
                      }
                    : null;
            (c.Gf({ channelId: e, command: null, section: null }),
                c.Gf({ channelId: e, command: i, section: n, location: l }));
        }
    }
}
function k(e) {
    let { node: n, stateKey: t, children: i } = e,
        o = (0, a.bG)([g.A, y.Ay], () => g.A.getChannel(n.channelId ?? y.Ay.getChannelId()), [n.channelId]),
        { hasSendMessagePerm: s, hasUseAppCommandsPerm: c } = (0, a.cf)([A.A], () => ({
            hasSendMessagePerm: A.A.can(E.xBc.SEND_MESSAGES, o),
            hasUseAppCommandsPerm: A.A.can(E.xBc.USE_APPLICATION_COMMANDS, o),
        })),
        f = void 0 !== o ? { type: "channel", channel: o } : { type: "contextless" },
        { command: x } = u.D3(f, n.commandKey ?? ""),
        I = p.D_.useSetting(),
        k = r.useMemo(() => {
            if (null == x || null == o || x.untranslatedName !== n.commandName || I) return !1;
            let e = o.isPrivate();
            if ((0, h.UJ)(o) || (!e && !s)) return !1;
            let t = x?.applicationId === j.Ik.BUILT_IN;
            return !!e || !!t || !!c;
        }, [o, x, s, c, n.commandName, I]),
        v = r.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    null != o &&
                        null != n.commandName &&
                        null != n.commandKey &&
                        C(o.id, n.commandName, n.commandKey, d.Oh.MENTION));
            },
            [o, n.commandKey, n.commandName],
        );
    return k
        ? (0, l.jsxs)(m.A, { role: "link", onClick: v, children: ["/", i] }, t)
        : (0, l.jsxs)("span", { children: ["/", i] });
}
function v(e) {
    let { commandId: n, commandName: t, commandDescription: r, applicationId: i, onClick: c } = e,
        u = (0, a.bG)([y.Ay], () => y.Ay.getChannelId());
    return (0, l.jsx)(o.m, {
        text: r,
        position: "top",
        children: (0, l.jsx)(s.$, {
            size: "sm",
            variant: "secondary",
            onClick: function (e) {
                (e?.stopPropagation(), C(u, t, n, d.Oh.POPULAR_COMMANDS, i), c?.(n));
            },
            text: `/${t}`,
        }),
    });
}
function N(e) {
    return { react: (e, n, t) => (0, l.jsx)(k, { node: e, stateKey: t.key, children: n(e.content, t) }) };
}
