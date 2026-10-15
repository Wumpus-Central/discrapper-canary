t.d(n, { Ay: () => v, Oh: () => N, gn: () => E });
var l = t(477900),
    a = t(582128),
    r = t(17928),
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
    x = t(31717),
    f = t(576705),
    j = t(309010),
    y = t(625494),
    A = t(652215),
    C = t(73510);
t(827669);
var k = t(105292);
function I(e, n, t, l, a) {
    null != e &&
        ("" !== x.A.getDraft(e, x.C.ChannelMessage)
            ? (0, i.A)({
                  title: k.intl.string(k.t.pe26Cj),
                  subtitle: k.intl.string(k.t["+awCIy"]),
                  confirmText: k.intl.string(k.t.VkKicb),
                  onConfirm: () => r(),
                  onCloseCallback: () => {
                      y._.dispatch(A.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  },
              })
            : r());
    function r() {
        if (null == e) return;
        let r = g.A.getChannel(e);
        if (null == r) return;
        let { command: i, application: o } = u.EW({ channel: r, type: "channel" }, t, a);
        if (null != i && i.untranslatedName === n) {
            y._.dispatch(A.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
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
function E(e) {
    let { node: n, stateKey: t, children: i } = e,
        o = (0, r.bG)([g.A, j.Ay], () => g.A.getChannel(n.channelId ?? j.Ay.getChannelId()), [n.channelId]),
        { hasSendMessagePerm: s, hasUseAppCommandsPerm: c } = (0, r.cf)([f.A], () => ({
            hasSendMessagePerm: f.A.can(A.xBc.SEND_MESSAGES, o),
            hasUseAppCommandsPerm: f.A.can(A.xBc.USE_APPLICATION_COMMANDS, o),
        })),
        x = void 0 !== o ? { type: "channel", channel: o } : { type: "contextless" },
        { command: y } = u.D3(x, n.commandKey ?? ""),
        k = p.D_.useSetting(),
        E = a.useMemo(() => {
            if (null == y || null == o || y.untranslatedName !== n.commandName || k) return !1;
            let e = o.isPrivate();
            if ((0, h.UJ)(o) || (!e && !s)) return !1;
            let t = y?.applicationId === C.Ik.BUILT_IN;
            return !!e || !!t || !!c;
        }, [o, y, s, c, n.commandName, k]),
        N = a.useCallback(
            (e) => {
                (e?.stopPropagation(),
                    null != o &&
                        null != n.commandName &&
                        null != n.commandKey &&
                        I(o.id, n.commandName, n.commandKey, d.Oh.MENTION));
            },
            [o, n.commandKey, n.commandName],
        );
    return E
        ? (0, l.jsxs)(m.A, { role: "link", onClick: N, children: ["/", i] }, t)
        : (0, l.jsxs)("span", { children: ["/", i] });
}
function N(e) {
    let { commandId: n, commandName: t, commandDescription: a, applicationId: i, onClick: c } = e,
        u = (0, r.bG)([j.Ay], () => j.Ay.getChannelId());
    return (0, l.jsx)(o.m, {
        text: a,
        position: "top",
        children: (0, l.jsx)(s.$, {
            size: "sm",
            variant: "secondary",
            onClick: function (e) {
                (e?.stopPropagation(), I(u, t, n, d.Oh.POPULAR_COMMANDS, i), c?.(n));
            },
            text: `/${t}`,
        }),
    });
}
function v(e) {
    return { react: (e, n, t) => (0, l.jsx)(E, { node: e, stateKey: t.key, children: n(e.content, t) }) };
}
