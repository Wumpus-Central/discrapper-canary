s.d(e, {
    A: () => h,
}),
    s(896048),
    s(733351);
var n = s(627968),
    r = s(64700),
    a = s(253018),
    i = s(311907),
    l = s(562465),
    c = s(397927),
    o = s(147087),
    u = s(773669),
    p = s(186306),
    g = s(323350),
    d = s(711371),
    b = s(652215),
    f = s(985018),
    x = s(623116);

function h(t) {
    let e = (0, o.b)(),
        { selection: h } = t,
        y =
            null != h
                ? (0, g.WO)(d.VW.richValue(t), {
                      mode: "plain",
                      range: h,
                      preventEmojiSurrogates: !1,
                  })
                : "",
        m = r.useCallback(
            (e) => {
                a.rL.focus(t),
                    p.o.withSingleEntry(t, () => {
                        t.deleteFragment(), t.insertText(e);
                    });
            },
            [t],
        ),
        S = (function (t, e) {
            let [s, a] = r.useState(!1),
                i = r.useCallback(async () => {
                    if (!s) {
                        a(!0), (0, c.showToast)((0, c.createToast)(f.intl.string(f.t.p54KYY), c.ToastType.AI));
                        try {
                            let s = await l.Bo.post({
                                url: b.Rsh.AI_FIX_GRAMMAR,
                                body: {
                                    content: t,
                                },
                                rejectWithError: !1,
                            });
                            s.ok &&
                                s.body &&
                                (e(s.body.content),
                                (0, c.showToast)((0, c.createToast)(f.intl.string(f.t.mxQpUY), c.ToastType.SUCCESS)));
                        } finally {
                            a(!1);
                        }
                    }
                }, [s, t, e]);
            return (0, n.jsx)(c.Drp, {
                id: "fix-grammar",
                label: s ? f.intl.string(f.t.p54KYY) : f.intl.string(f.t.fCpOHj),
                icon: c.Dud,
                action: i,
                disabled: s,
            });
        })(y, m),
        T = (function (t, e) {
            let [a, o] = r.useState(!1),
                p = (0, i.bG)([u.default], () => u.default.locale),
                g = r.useCallback(
                    async (s, n) => {
                        if (a) return;
                        let r = null != s ? s : p;
                        o(!0);
                        let i = null != n ? n : r;
                        (0, c.showToast)(
                            (0, c.createToast)(
                                f.intl.formatToPlainString(f.t.Znl8Z8, {
                                    targetLanguage: i,
                                }),
                                c.ToastType.AI,
                            ),
                        );
                        try {
                            let s = await l.Bo.post({
                                url: b.Rsh.AI_TRANSLATE,
                                body: {
                                    content: t,
                                    locale: r,
                                },
                                rejectWithError: !1,
                            });
                            s.ok &&
                                s.body &&
                                (e(s.body.content),
                                (0, c.showToast)(
                                    (0, c.createToast)(
                                        f.intl.formatToPlainString(f.t.FtVUqm, {
                                            targetLanguage: i,
                                        }),
                                        c.ToastType.SUCCESS,
                                    ),
                                ));
                        } finally {
                            o(!1);
                        }
                    },
                    [a, p, t, e],
                ),
                d = (0, f.getAvailableLocales)().map((t) => {
                    let e;
                    try {
                        e = s(579832)("./".concat(t.value, ".png"));
                    } catch (t) {
                        e = s(432706);
                    }
                    return (0, n.jsx)(
                        c.Drp,
                        {
                            id: "translate-".concat(t.value),
                            label: t.name,
                            icon: () =>
                                (0, n.jsx)("img", {
                                    alt: "",
                                    src: e,
                                    className: x.M,
                                }),
                            leadingAccessory: {
                                type: "image",
                                src: e,
                            },
                            action: () => g(t.value, t.name),
                            disabled: a,
                        },
                        t.value,
                    );
                });
            return (0, n.jsx)(c.Drp, {
                id: "translate",
                label: a ? f.intl.string(f.t.SVKIdU) : f.intl.string(f.t["6epDlR"]),
                action: () => g(),
                disabled: a,
                children: d,
            });
        })(y, m);
    return "" !== y.trim() && e
        ? (0, n.jsxs)(n.Fragment, {
              children: [S, T],
          })
        : null;
}
