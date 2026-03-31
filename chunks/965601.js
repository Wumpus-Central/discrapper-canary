n.d(t, { C: () => A });
var i = n(627968),
    l = n(64700),
    s = n(562465),
    a = n(990078),
    r = n(397927),
    o = n(147087),
    c = n(320501),
    d = n(652215),
    u = n(985018);
async function h(e) {
    try {
        let t = await s.Bo.post({ url: d.Rsh.AI_TITLE, body: { content: e }, oldFormErrors: !0, rejectWithError: !1 });
        return t.ok ? (t.body?.title ?? null) : null;
    } catch (e) {
        return null;
    }
}
function A(e) {
    let { parentChannel: t, parentMessageId: n, updateThreadSettings: s, threadSettings: d, textAreaState: A } = e,
        [_, m] = l.useState(!1),
        [g, p] = l.useState(!1),
        f = (0, o.b)(),
        x = l.useCallback(async () => {
            if (f) {
                m(!0);
                try {
                    let e = null;
                    if (null != n) {
                        let i = c.A.getMessage(t.id, n);
                        e = i?.content ?? null;
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
        p(!1), m(!1), t.id === d.parentChannelId && n !== d.parentMessageId && s({ name: "" });
    }, [n, s, t.id, d.parentChannelId, d.parentMessageId]),
        l.useEffect(() => {
            (null != d.name && "" !== d.name.trim()) || g || (f && null != n && (p(!0), x()));
        }, [t.id, n, s, d.name, g, f, x]);
    let E = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (f)
                    return {
                        icon: r.Dud,
                        onClick: x,
                        "aria-label": u.intl.string(u.t.ZF2oBs),
                        disabled: e || _ || (null == n && A.textValue.trim().length < 10),
                        tooltip: u.intl.string(u.t.ZF2oBs),
                        loading: _,
                    };
            },
            [f, x, _, n, A.textValue],
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
                              onClick: x,
                              disabled: e || _ || (null == n && A.textValue.trim().length < 10),
                              loading: _,
                              type: "button",
                          }),
                      })
                    : null;
            },
            [f, _, n, A.textValue, x],
        );
    return {
        isGeneratingAI: _,
        generateAIName: x,
        enableAIFeatures: f,
        renderAiGenerateButton: I,
        getThreadNameInputAccessory: E,
    };
}
