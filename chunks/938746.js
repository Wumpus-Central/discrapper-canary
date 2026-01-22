n.d(e, {
    A: () => y,
}),
    n(896048),
    n(733351);
var l = n(627968),
    r = n(64700),
    a = n(253018),
    i = n(311907),
    s = n(562465),
    o = n(397927),
    c = n(147087),
    u = n(773669),
    d = n(186306),
    p = n(323350),
    b = n(711371),
    g = n(652215),
    f = n(985018),
    h = n(623116);

function y(t) {
    let e = (0, c.b)(),
        { selection: y } = t,
        m =
            null != y
                ? (0, p.WO)(b.VW.richValue(t), {
                      mode: "plain",
                      range: y,
                      preventEmojiSurrogates: !1,
                  })
                : "",
        T = r.useCallback(
            (e) => {
                a.rL.focus(t),
                    d.o.withSingleEntry(t, () => {
                        t.deleteFragment(), t.insertText(e);
                    });
            },
            [t],
        ),
        S = (function (t, e) {
            let [n, a] = r.useState(!1),
                i = r.useCallback(async () => {
                    if (!n) {
                        a(!0), (0, o.showToast)((0, o.createToast)(f.intl.string(f.t.p54KYY), o.ToastType.AI));
                        try {
                            let n = await s.Bo.post({
                                url: g.Rsh.AI_FIX_GRAMMAR,
                                body: {
                                    content: t,
                                },
                                rejectWithError: !1,
                            });
                            n.ok &&
                                n.body &&
                                (e(n.body.content),
                                (0, o.showToast)((0, o.createToast)(f.intl.string(f.t.mxQpUY), o.ToastType.SUCCESS)));
                        } finally {
                            a(!1);
                        }
                    }
                }, [n, t, e]);
            return (0, l.jsx)(o.Drp, {
                id: "fix-grammar",
                label: n ? f.intl.string(f.t.p54KYY) : f.intl.string(f.t.fCpOHj),
                icon: o.Dud,
                action: i,
                disabled: n,
            });
        })(m, T),
        j = (function (t, e) {
            let [a, c] = r.useState(!1),
                d = (0, i.bG)([u.default], () => u.default.locale),
                p = r.useCallback(
                    async (n, l) => {
                        if (a) return;
                        let r = null != n ? n : d;
                        c(!0);
                        let i = null != l ? l : r;
                        (0, o.showToast)(
                            (0, o.createToast)(
                                f.intl.formatToPlainString(f.t.Znl8Z8, {
                                    targetLanguage: i,
                                }),
                                o.ToastType.AI,
                            ),
                        );
                        try {
                            let n = await s.Bo.post({
                                url: g.Rsh.AI_TRANSLATE,
                                body: {
                                    content: t,
                                    locale: r,
                                },
                                rejectWithError: !1,
                            });
                            n.ok &&
                                n.body &&
                                (e(n.body.content),
                                (0, o.showToast)(
                                    (0, o.createToast)(
                                        f.intl.formatToPlainString(f.t.FtVUqm, {
                                            targetLanguage: i,
                                        }),
                                        o.ToastType.SUCCESS,
                                    ),
                                ));
                        } finally {
                            c(!1);
                        }
                    },
                    [a, d, t, e],
                ),
                b = (0, f.getAvailableLocales)().map((t) => {
                    let e;
                    try {
                        e = n(579832)("./".concat(t.value, ".png"));
                    } catch (t) {
                        e = n(432706);
                    }
                    return (0, l.jsx)(
                        o.Drp,
                        {
                            id: "translate-".concat(t.value),
                            label: t.name,
                            icon: () =>
                                (0, l.jsx)("img", {
                                    alt: "",
                                    src: e,
                                    className: h.M,
                                }),
                            action: () => p(t.value, t.name),
                            disabled: a,
                        },
                        t.value,
                    );
                });
            return (0, l.jsx)(o.Drp, {
                id: "translate",
                label: a ? f.intl.string(f.t.SVKIdU) : f.intl.string(f.t["6epDlR"]),
                action: () => p(),
                disabled: a,
                children: b,
            });
        })(m, T);
    return "" !== m.trim() && e
        ? (0, l.jsxs)(l.Fragment, {
              children: [S, j],
          })
        : null;
}
