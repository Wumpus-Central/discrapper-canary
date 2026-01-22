n.d(t, { C: () => p }), n(896048), n(733351);
var r = n(627968),
    l = n(64700),
    i = n(562465),
    a = n(990078),
    s = n(397927),
    o = n(147087),
    c = n(320501),
    u = n(652215),
    d = n(985018);
async function f(e) {
    try {
        var t, n;
        let r = await i.Bo.post({
            url: u.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        return r.ok && null != (t = null == (n = r.body) ? void 0 : n.title) ? t : null;
    } catch (e) {
        return null;
    }
}
function p(e) {
    let { parentChannel: t, parentMessageId: n, updateThreadSettings: i, threadSettings: u, textAreaState: p } = e,
        [h, b] = l.useState(!1),
        [g, m] = l.useState(!1),
        A = (0, o.b)(),
        y = l.useCallback(async () => {
            if (A) {
                b(!0);
                try {
                    let r = null;
                    if (null != n) {
                        var e;
                        let l = c.A.getMessage(t.id, n);
                        r = null != (e = null == l ? void 0 : l.content) ? e : null;
                    } else p.textValue.trim().length >= 10 && (r = p.textValue);
                    if (null != r) {
                        let e = await f(r);
                        null != e && "" !== e.trim() && i({ name: e });
                    }
                } finally {
                    b(!1);
                }
            }
        }, [t.id, n, i, A, p.textValue]);
    l.useEffect(() => {
        m(!1), b(!1), t.id === u.parentChannelId && n !== u.parentMessageId && i({ name: "" });
    }, [n, i, t.id, u.parentChannelId, u.parentMessageId]),
        l.useEffect(() => {
            (null != u.name && "" !== u.name.trim()) || g || (A && null != n && (m(!0), y()));
        }, [t.id, n, i, u.name, g, A, y]);
    let O = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (A)
                    return {
                        icon: s.Dud,
                        onClick: y,
                        "aria-label": d.intl.string(d.t.ZF2oBs),
                        disabled: e || h || (null == n && p.textValue.trim().length < 10),
                        tooltip: d.intl.string(d.t.ZF2oBs),
                        loading: h,
                    };
            },
            [A, y, h, n, p.textValue],
        ),
        j = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return A
                    ? (0, r.jsx)(a.m, {
                          text: d.intl.string(d.t.ZF2oBs),
                          children: (0, r.jsx)(s.K0, {
                              icon: s.Dud,
                              variant: "secondary",
                              size: "sm",
                              "aria-label": d.intl.string(d.t.ZF2oBs),
                              onClick: y,
                              disabled: e || h || (null == n && p.textValue.trim().length < 10),
                              loading: h,
                              type: "button",
                          }),
                      })
                    : null;
            },
            [A, h, n, p.textValue, y],
        );
    return {
        isGeneratingAI: h,
        generateAIName: y,
        enableAIFeatures: A,
        renderAiGenerateButton: j,
        getThreadNameInputAccessory: O,
    };
}
