"use strict";
s.d(e, { A: () => h });
var a = s(627968),
    n = s(64700),
    r = s(253018),
    i = s(311907),
    c = s(562465),
    l = s(397927),
    o = s(147087),
    p = s(773669),
    u = s(186306),
    g = s(323350),
    d = s(711371),
    b = s(652215),
    f = s(985018),
    x = s(27013);
function h(t) {
    let e = (0, o.b)(),
        { selection: h } = t,
        T = null != h ? (0, g.WO)(d.VW.richValue(t), { mode: "plain", range: h, preventEmojiSurrogates: !1 }) : "",
        y = n.useCallback(
            (e) => {
                r.rL.focus(t),
                    u.o.withSingleEntry(t, () => {
                        t.deleteFragment(), t.insertText(e);
                    });
            },
            [t],
        ),
        m = (function (t, e) {
            let [s, r] = n.useState(!1),
                i = n.useCallback(async () => {
                    if (!s) {
                        r(!0), (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.p54KYY), l.ToastType.AI));
                        try {
                            let s = await c.Bo.post({
                                url: b.Rsh.AI_FIX_GRAMMAR,
                                body: { content: t },
                                rejectWithError: !1,
                            });
                            s.ok &&
                                s.body &&
                                (e(s.body.content),
                                (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.mxQpUY), l.ToastType.SUCCESS)));
                        } finally {
                            r(!1);
                        }
                    }
                }, [s, t, e]);
            return (0, a.jsx)(l.Drp, {
                id: "fix-grammar",
                label: s ? f.intl.string(f.t.p54KYY) : f.intl.string(f.t.fCpOHj),
                icon: l.Dud,
                action: i,
                disabled: s,
            });
        })(T, y),
        S = (function (t, e) {
            let [r, o] = n.useState(!1),
                u = (0, i.bG)([p.default], () => p.default.locale),
                g = n.useCallback(
                    async (s, a) => {
                        if (r) return;
                        let n = s ?? u;
                        o(!0);
                        let i = a ?? n;
                        (0, l.showToast)(
                            (0, l.createToast)(
                                f.intl.formatToPlainString(f.t.Znl8Z8, { targetLanguage: i }),
                                l.ToastType.AI,
                            ),
                        );
                        try {
                            let s = await c.Bo.post({
                                url: b.Rsh.AI_TRANSLATE,
                                body: { content: t, locale: n },
                                rejectWithError: !1,
                            });
                            s.ok &&
                                s.body &&
                                (e(s.body.content),
                                (0, l.showToast)(
                                    (0, l.createToast)(
                                        f.intl.formatToPlainString(f.t.FtVUqm, { targetLanguage: i }),
                                        l.ToastType.SUCCESS,
                                    ),
                                ));
                        } finally {
                            o(!1);
                        }
                    },
                    [r, u, t, e],
                ),
                d = (0, f.getAvailableLocales)().map((t) => {
                    let e;
                    try {
                        e = s(579832)(`./${t.value}.png`);
                    } catch (t) {
                        e = s(432706);
                    }
                    return (0, a.jsx)(
                        l.Drp,
                        {
                            id: `translate-${t.value}`,
                            label: t.name,
                            icon: () => (0, a.jsx)("img", { alt: "", src: e, className: x.M }),
                            leadingAccessory: { type: "image", src: e },
                            action: () => g(t.value, t.name),
                            disabled: r,
                        },
                        t.value,
                    );
                });
            return (0, a.jsx)(l.Drp, {
                id: "translate",
                label: r ? f.intl.string(f.t.SVKIdU) : f.intl.string(f.t["6epDlR"]),
                action: () => g(),
                disabled: r,
                children: d,
            });
        })(T, y);
    return "" !== T.trim() && e ? (0, a.jsxs)(a.Fragment, { children: [m, S] }) : null;
}
