n.d(t, { C: () => A });
var i = n(627968),
    l = n(64700),
    s = n(562465),
    a = n(990078),
    r = n(397927),
    o = n(147087),
    d = n(320501),
    c = n(652215),
    u = n(985018);
async function h(e) {
    try {
        let t = await s.Bo.post({ url: c.Rsh.AI_TITLE, body: { content: e }, oldFormErrors: !0, rejectWithError: !1 });
        return t.ok ? (t.body?.title ?? null) : null;
    } catch (e) {
        return null;
    }
}
function A(e) {
    let { parentChannel: t, parentMessageId: n, updateThreadSettings: s, threadSettings: c, textAreaState: A } = e,
        [_, m] = l.useState(!1),
        [p, g] = l.useState(!1),
        f = (0, o.b)(),
        E = l.useCallback(async () => {
            if (f) {
                m(!0);
                try {
                    let e = null;
                    if (null != n) {
                        let i = d.A.getMessage(t.id, n);
                        e = i?.getContentMessage()?.content ?? null;
                    } else A.textValue.trim().length >= 10 && (e = A.textValue);
                    if (null != e) {
                        let t = await h(e);
                        null != t && "" !== t.trim() && s({ name: t });
                    }
                } finally {
                    m(!1);
                }
            }
        }, [t.id, n, s, f, A.textValue]);
    l.useEffect(() => {
        g(!1), m(!1), t.id === c.parentChannelId && n !== c.parentMessageId && s({ name: "" });
    }, [n, s, t.id, c.parentChannelId, c.parentMessageId]),
        l.useEffect(() => {
            (null != c.name && "" !== c.name.trim()) || p || (f && null != n && (g(!0), E()));
        }, [t.id, n, s, c.name, p, f, E]);
    let x = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (f)
                    return {
                        icon: r.Dud,
                        onClick: E,
                        "aria-label": u.intl.string(u.t.ZF2oBs),
                        disabled: e || _ || (null == n && A.textValue.trim().length < 10),
                        tooltip: u.intl.string(u.t.ZF2oBs),
                        loading: _,
                    };
            },
            [f, E, _, n, A.textValue],
        ),
        I = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return f
                    ? (0, i.jsx)(a.m, {
                          text: u.intl.string(u.t.ZF2oBs),
                          children: (0, i.jsx)(r.K0, {
                              icon: r.Dud,
                              variant: "secondary",
                              size: "sm",
                              "aria-label": u.intl.string(u.t.ZF2oBs),
                              onClick: E,
                              disabled: e || _ || (null == n && A.textValue.trim().length < 10),
                              loading: _,
                              type: "button",
                          }),
                      })
                    : null;
            },
            [f, _, n, A.textValue, E],
        );
    return {
        isGeneratingAI: _,
        generateAIName: E,
        enableAIFeatures: f,
        renderAiGenerateButton: I,
        getThreadNameInputAccessory: x,
    };
}
