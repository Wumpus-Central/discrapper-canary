t.d(n, { Ay: () => v, Oh: () => N, gn: () => I });
var l = t(477900),
    a = t(582128),
    i = t(17928),
    r = t(314116),
    o = t(866665),
    s = t(821609),
    c = t(721768),
    u = t(842209),
    d = t(392054),
    m = t(332173),
    h = t(406704),
    p = t(885386),
    g = t(734057),
    x = t(31717),
    f = t(576705),
    j = t(309010),
    A = t(625494),
    y = t(652215),
    C = t(73510);
t(827669);
var k = t(105292);
function E(e, n, t, l, a) {
    null != e &&
        ("" !== x.A.getDraft(e, x.C.ChannelMessage)
            ? (0, r.A)({
                  title: k.intl.string(k.t.pe26Cj),
                  subtitle: k.intl.string(k.t["+awCIy"]),
                  confirmText: k.intl.string(k.t.VkKicb),
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
        let { command: r, application: o } = u.EW({ channel: i, type: "channel" }, t, a);
        if (null != r && r.untranslatedName === n) {
            A._.dispatch(y.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
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
                c.Gf({ channelId: e, command: r, section: n, location: l }));
        }
    }
}
function I(e) {
    let { node: n, stateKey: t, children: r } = e,
        o = (0, i.bG)([g.A, j.Ay], () => g.A.getChannel(n.channelId ?? j.Ay.getChannelId()), [n.channelId]),
        { hasSendMessagePerm: s, hasUseAppCommandsPerm: c } = (0, i.cf)([f.A], () => ({
            hasSendMessagePerm: f.A.can(y.xBc.SEND_MESSAGES, o),
            hasUseAppCommandsPerm: f.A.can(y.xBc.USE_APPLICATION_COMMANDS, o),
        })),
        x = void 0 !== o ? { type: "channel", channel: o } : { type: "contextless" },
        { command: A } = u.D3(x, n.commandKey ?? ""),
        k = p.D_.useSetting(),
        I = a.useMemo(() => {
            if (null == A || null == o || A.untranslatedName !== n.commandName || k) return !1;
            let e = o.isPrivate();
            if ((0, h.UJ)(o) || (!e && !s)) return !1;
            let t = A?.applicationId === C.Ik.BUILT_IN;
            return !!e || !!t || !!c;
        }, [o, A, s, c, n.commandName, k]),
        N = a.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    null != o &&
                        null != n.commandName &&
                        null != n.commandKey &&
                        E(o.id, n.commandName, n.commandKey, d.Oh.MENTION));
            },
            [o, n.commandKey, n.commandName],
        );
    return I
        ? (0, l.jsxs)(m.A, { role: "link", onClick: N, children: ["/", r] }, t)
        : (0, l.jsxs)("span", { children: ["/", r] });
}
function N(e) {
    let { commandId: n, commandName: t, commandDescription: a, applicationId: r, onClick: c } = e,
        u = (0, i.bG)([j.Ay], () => j.Ay.getChannelId());
    return (0, l.jsx)(o.m, {
        text: a,
        position: "top",
        children: (0, l.jsx)(s.$, {
            size: "sm",
            variant: "secondary",
            onClick: function (e) {
                (e?.stopPropagation(), E(u, t, n, d.Oh.POPULAR_COMMANDS, r), c?.(n));
            },
            text: `/${t}`,
        }),
    });
}
function v(e) {
    return { react: (e, n, t) => (0, l.jsx)(I, { node: e, stateKey: t.key, children: n(e.content, t) }) };
}
