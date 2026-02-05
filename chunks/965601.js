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
        [g, m] = l.useState(!1),
        [p, _] = l.useState(!1),
        x = (0, o.b)(),
        f = l.useCallback(async () => {
            if (x) {
                m(!0);
                try {
                    let e = null;
                    if (null != n) {
                        let i = d.A.getMessage(t.id, n);
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
        }, [t.id, n, s, x, A.textValue]);
    l.useEffect(() => {
        _(!1), m(!1), t.id === c.parentChannelId && n !== c.parentMessageId && s({ name: "" });
    }, [n, s, t.id, c.parentChannelId, c.parentMessageId]),
        l.useEffect(() => {
            (null != c.name && "" !== c.name.trim()) || p || (x && null != n && (_(!0), f()));
        }, [t.id, n, s, c.name, p, x, f]);
    let E = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (x)
                    return {
                        icon: r.Dud,
                        onClick: f,
                        "aria-label": u.intl.string(u.t.ZF2oBs),
                        disabled: e || g || (null == n && A.textValue.trim().length < 10),
                        tooltip: u.intl.string(u.t.ZF2oBs),
                        loading: g,
                    };
            },
            [x, f, g, n, A.textValue],
        ),
        C = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return x
                    ? (0, i.jsx)(a.m, {
                          text: u.intl.string(u.t.ZF2oBs),
                          children: (0, i.jsx)(r.K0, {
                              icon: r.Dud,
                              variant: "secondary",
                              size: "sm",
                              "aria-label": u.intl.string(u.t.ZF2oBs),
                              onClick: f,
                              disabled: e || g || (null == n && A.textValue.trim().length < 10),
                              loading: g,
                              type: "button",
                          }),
                      })
                    : null;
            },
            [x, g, n, A.textValue, f],
        );
    return {
        isGeneratingAI: g,
        generateAIName: f,
        enableAIFeatures: x,
        renderAiGenerateButton: C,
        getThreadNameInputAccessory: E,
    };
}
