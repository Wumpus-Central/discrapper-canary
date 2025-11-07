n.d(t, { U: () => h }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(544891),
    a = n(28664),
    s = n(481060),
    o = n(39952),
    c = n(375954),
    d = n(981631),
    u = n(388032);
async function p(e) {
    try {
        var t, n;
        let r = await l.tn.post({
            url: d.ANM.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return r.ok && null != (n = null == (t = r.body) ? void 0 : t.title) ? n : null;
    } catch (e) {
        return null;
    }
}
function h(e) {
    let { parentChannel: t, parentMessageId: n, updateThreadSettings: l, threadSettings: d, textAreaState: h } = e,
        [f, g] = i.useState(!1),
        [m, b] = i.useState(!1),
        _ = (0, o.o)(),
        y = i.useCallback(async () => {
            if (_) {
                g(!0);
                try {
                    let r = null;
                    if (null != n) {
                        var e;
                        let i = c.Z.getMessage(t.id, n);
                        r = null != (e = null == i ? void 0 : i.content) ? e : null;
                    } else h.textValue.trim().length >= 10 && (r = h.textValue);
                    if (null != r) {
                        let e = await p(r);
                        null != e && "" !== e.trim() && l({ name: e });
                    }
                } finally {
                    g(!1);
                }
            }
        }, [t.id, n, l, _, h.textValue]);
    i.useEffect(() => {
        b(!1), g(!1), t.id === d.parentChannelId && n !== d.parentMessageId && l({ name: "" });
    }, [n, l, t.id, d.parentChannelId, d.parentMessageId]),
        i.useEffect(() => {
            (null == d.name || "" === d.name.trim()) && !m && _ && null != n && (b(!0), y());
        }, [t.id, n, l, d.name, m, _, y]);
    let x = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (_)
                    return {
                        icon: s.$2U,
                        onClick: y,
                        "aria-label": u.intl.string(u.t.ZF2oBs),
                        disabled: e || f || (null == n && h.textValue.trim().length < 10),
                        tooltip: u.intl.string(u.t.ZF2oBs),
                        loading: f,
                    };
            },
            [_, y, f, n, h.textValue],
        ),
        O = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return _
                    ? (0, r.jsx)(a.u, {
                          text: u.intl.string(u.t.ZF2oBs),
                          children: (0, r.jsx)(s.hU, {
                              icon: s.$2U,
                              variant: "secondary",
                              size: "sm",
                              "aria-label": u.intl.string(u.t.ZF2oBs),
                              onClick: y,
                              disabled: e || f || (null == n && h.textValue.trim().length < 10),
                              loading: f,
                              type: "button",
                          }),
                      })
                    : null;
            },
            [_, f, n, h.textValue, y],
        );
    return {
        isGeneratingAI: f,
        generateAIName: y,
        enableAIFeatures: _,
        renderAiGenerateButton: O,
        getThreadNameInputAccessory: x,
    };
}
