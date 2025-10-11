n.d(t, { U: () => p }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(544891),
    a = n(28664),
    s = n(481060),
    o = n(466721),
    c = n(375954),
    d = n(981631),
    u = n(388032);
async function h(e) {
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
function p(e) {
    let { parentChannel: t, parentMessageId: n, updateThreadSettings: l, threadSettings: d, textAreaState: p } = e,
        [f, g] = i.useState(!1),
        [m, b] = i.useState(!1),
        { enableAIFeatures: y } = o.C.useExperiment({ location: "CreateThreadSidebar" }),
        _ = i.useCallback(async () => {
            if (y) {
                g(!0);
                try {
                    let r = null;
                    if (null != n) {
                        var e;
                        let i = c.Z.getMessage(t.id, n);
                        r = null != (e = null == i ? void 0 : i.content) ? e : null;
                    } else p.textValue.trim().length >= 10 && (r = p.textValue);
                    if (null != r) {
                        let e = await h(r);
                        null != e && "" !== e.trim() && l({ name: e });
                    }
                } finally {
                    g(!1);
                }
            }
        }, [t.id, n, l, y, p.textValue]);
    i.useEffect(() => {
        b(!1), g(!1), t.id === d.parentChannelId && n !== d.parentMessageId && l({ name: "" });
    }, [n, l, t.id, d.parentChannelId, d.parentMessageId]),
        i.useEffect(() => {
            (null == d.name || "" === d.name.trim()) && !m && y && null != n && (b(!0), _());
        }, [t.id, n, l, d.name, m, y, _]);
    let j = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (y)
                    return {
                        icon: s.$2U,
                        onClick: _,
                        "aria-label": u.intl.string(u.t.ZF2oBg),
                        disabled: e || f || (null == n && p.textValue.trim().length < 10),
                        tooltip: u.intl.string(u.t.ZF2oBg),
                        loading: f,
                    };
            },
            [y, _, f, n, p.textValue],
        ),
        O = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return y
                    ? (0, r.jsx)(a.u, {
                          text: u.intl.string(u.t.ZF2oBg),
                          children: (0, r.jsx)(s.hU, {
                              icon: s.$2U,
                              variant: "secondary",
                              size: "sm",
                              "aria-label": u.intl.string(u.t.ZF2oBg),
                              onClick: _,
                              disabled: e || f || (null == n && p.textValue.trim().length < 10),
                              loading: f,
                              type: "button",
                          }),
                      })
                    : null;
            },
            [y, f, n, p.textValue, _],
        );
    return {
        isGeneratingAI: f,
        generateAIName: _,
        enableAIFeatures: y,
        renderAiGenerateButton: O,
        getThreadNameInputAccessory: j,
    };
}
