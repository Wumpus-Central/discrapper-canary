n.d(t, { U: () => h }), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
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
        y = (0, o.o)(),
        O = i.useCallback(async () => {
            if (y) {
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
        }, [t.id, n, l, y, h.textValue]);
    i.useEffect(() => {
        b(!1), g(!1), t.id === d.parentChannelId && n !== d.parentMessageId && l({ name: "" });
    }, [n, l, t.id, d.parentChannelId, d.parentMessageId]),
        i.useEffect(() => {
            (null == d.name || "" === d.name.trim()) && !m && y && null != n && (b(!0), O());
        }, [t.id, n, l, d.name, m, y, O]);
    let x = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (y)
                    return {
                        icon: s.$2U,
                        onClick: O,
                        "aria-label": u.intl.string(u.t.ZF2oBs),
                        disabled: e || f || (null == n && h.textValue.trim().length < 10),
                        tooltip: u.intl.string(u.t.ZF2oBs),
                        loading: f,
                    };
            },
            [y, O, f, n, h.textValue],
        ),
        j = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return y
                    ? (0, r.jsx)(a.u, {
                          text: u.intl.string(u.t.ZF2oBs),
                          children: (0, r.jsx)(s.hU, {
                              icon: s.$2U,
                              variant: "secondary",
                              size: "sm",
                              "aria-label": u.intl.string(u.t.ZF2oBs),
                              onClick: O,
                              disabled: e || f || (null == n && h.textValue.trim().length < 10),
                              loading: f,
                              type: "button",
                          }),
                      })
                    : null;
            },
            [y, f, n, h.textValue, O],
        );
    return {
        isGeneratingAI: f,
        generateAIName: O,
        enableAIFeatures: y,
        renderAiGenerateButton: j,
        getThreadNameInputAccessory: x,
    };
}
