n.d(t, { C: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(562465),
    a = n(990078),
    r = n(152367),
    o = n(408278),
    d = n(147087),
    c = n(320501),
    u = n(652215),
    h = n(985018);
async function A(e) {
    try {
        let t = await s.Bo.post({ url: u.Rsh.AI_TITLE, body: { content: e }, oldFormErrors: !0, rejectWithError: !1 });
        return t.ok ? (t.body?.title ?? null) : null;
    } catch (e) {
        return null;
    }
}
function _(e) {
    let { parentChannel: t, parentMessageId: n, updateThreadSettings: s, threadSettings: u, textAreaState: _ } = e,
        [m, g] = l.useState(!1),
        [p, f] = l.useState(!1),
        E = (0, d.b)(),
        x = l.useCallback(async () => {
            if (E) {
                g(!0);
                try {
                    let e = null;
                    if (null != n) {
                        let i = c.A.getMessage(t.id, n);
                        e = i?.getContentMessage()?.content ?? null;
                    } else _.textValue.trim().length >= 10 && (e = _.textValue);
                    if (null != e) {
                        let t = await A(e);
                        null != t && "" !== t.trim() && s({ name: t });
                    }
                } finally {
                    g(!1);
                }
            }
        }, [t.id, n, s, E, _.textValue]);
    l.useEffect(() => {
        f(!1), g(!1), t.id === u.parentChannelId && n !== u.parentMessageId && s({ name: "" });
    }, [n, s, t.id, u.parentChannelId, u.parentMessageId]),
        l.useEffect(() => {
            (null != u.name && "" !== u.name.trim()) || p || (E && null != n && (f(!0), x()));
        }, [t.id, n, s, u.name, p, E, x]);
    let I = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (E)
                    return {
                        icon: r.D,
                        onClick: x,
                        "aria-label": h.intl.string(h.t.ZF2oBs),
                        disabled: e || m || (null == n && _.textValue.trim().length < 10),
                        tooltip: h.intl.string(h.t.ZF2oBs),
                        loading: m,
                    };
            },
            [E, x, m, n, _.textValue],
        ),
        C = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return E
                    ? (0, i.jsx)(a.m, {
                          text: h.intl.string(h.t.ZF2oBs),
                          children: (0, i.jsx)(o.K, {
                              icon: r.D,
                              variant: "secondary",
                              size: "sm",
                              "aria-label": h.intl.string(h.t.ZF2oBs),
                              onClick: x,
                              disabled: e || m || (null == n && _.textValue.trim().length < 10),
                              loading: m,
                              type: "button",
                          }),
                      })
                    : null;
            },
            [E, m, n, _.textValue, x],
        );
    return {
        isGeneratingAI: m,
        generateAIName: x,
        enableAIFeatures: E,
        renderAiGenerateButton: C,
        getThreadNameInputAccessory: I,
    };
}
