"use strict";
s.d(e, { A: () => T });
var n = s(627968),
    a = s(64700),
    r = s(253018),
    i = s(311907),
    l = s(562465),
    o = s(397927),
    c = s(869388),
    p = s(147087),
    u = s(773669),
    d = s(186306),
    g = s(323350),
    f = s(711371),
    b = s(652215),
    x = s(985018),
    m = s(27013);
function T(t) {
    let e = (0, p.b)(),
        T = (0, i.bG)([c.A], () => c.A.getTransforms()),
        { selection: h } = t,
        S = null != h ? (0, g.WO)(f.VW.richValue(t), { mode: "plain", range: h, preventEmojiSurrogates: !1 }) : "",
        y = a.useCallback(
            (e) => {
                r.rL.focus(t),
                    d.o.withSingleEntry(t, () => {
                        t.deleteFragment(), t.insertText(e);
                    });
            },
            [t],
        ),
        A = (function (t, e) {
            let [s, r] = a.useState(!1),
                i = a.useCallback(async () => {
                    if (!s) {
                        r(!0), (0, o.showToast)((0, o.createToast)(x.intl.string(x.t.p54KYY), o.ToastType.AI));
                        try {
                            let s = await l.Bo.post({
                                url: b.Rsh.AI_FIX_GRAMMAR,
                                body: { content: t },
                                rejectWithError: !1,
                            });
                            s.ok &&
                                s.body &&
                                (e(s.body.content),
                                (0, o.showToast)((0, o.createToast)(x.intl.string(x.t.mxQpUY), o.ToastType.SUCCESS)));
                        } finally {
                            r(!1);
                        }
                    }
                }, [s, t, e]);
            return (0, n.jsx)(o.Drp, {
                id: "fix-grammar",
                label: s ? x.intl.string(x.t.p54KYY) : x.intl.string(x.t.fCpOHj),
                icon: o.Dud,
                action: i,
                disabled: s,
            });
        })(S, y),
        C = (function (t, e) {
            let [r, c] = a.useState(!1),
                p = (0, i.bG)([u.default], () => u.default.locale),
                d = a.useCallback(
                    async (s, n) => {
                        if (r) return;
                        let a = s ?? p;
                        c(!0);
                        let i = n ?? a;
                        (0, o.showToast)(
                            (0, o.createToast)(
                                x.intl.formatToPlainString(x.t.Znl8Z8, { targetLanguage: i }),
                                o.ToastType.AI,
                            ),
                        );
                        try {
                            let s = await l.Bo.post({
                                url: b.Rsh.AI_TRANSLATE,
                                body: { content: t, locale: a },
                                rejectWithError: !1,
                            });
                            s.ok &&
                                s.body &&
                                (e(s.body.content),
                                (0, o.showToast)(
                                    (0, o.createToast)(
                                        x.intl.formatToPlainString(x.t.FtVUqm, { targetLanguage: i }),
                                        o.ToastType.SUCCESS,
                                    ),
                                ));
                        } finally {
                            c(!1);
                        }
                    },
                    [r, p, t, e],
                ),
                g = (0, x.getAvailableLocales)().map((t) => {
                    let e;
                    try {
                        e = s(579832)(`./${t.value}.png`);
                    } catch (t) {
                        e = s(432706);
                    }
                    return (0, n.jsx)(
                        o.Drp,
                        {
                            id: `translate-${t.value}`,
                            label: t.name,
                            icon: () => (0, n.jsx)("img", { alt: "", src: e, className: m.M }),
                            leadingAccessory: { type: "image", src: e },
                            action: () => d(t.value, t.name),
                            disabled: r,
                        },
                        t.value,
                    );
                });
            return (0, n.jsx)(o.Drp, {
                id: "translate",
                label: r ? x.intl.string(x.t.SVKIdU) : x.intl.string(x.t["6epDlR"]),
                action: () => d(),
                disabled: r,
                children: g,
            });
        })(S, y),
        E = (function (t, e, s) {
            let [r, i] = a.useState(null),
                c = a.useCallback(
                    async (t) => {
                        if (null == r) {
                            i(t.id),
                                (0, o.showToast)(
                                    (0, o.createToast)(
                                        x.intl.formatToPlainString(x.t.rrf7Kf, { transformName: t.name }),
                                        o.ToastType.AI,
                                    ),
                                );
                            try {
                                let n = await l.Bo.post({
                                    url: b.Rsh.AI_TEXT_TRANSFORM,
                                    body: { content: e, prompt: t.prompt },
                                    rejectWithError: !1,
                                });
                                n.ok &&
                                    n.body &&
                                    (s(n.body.content),
                                    (0, o.showToast)(
                                        (0, o.createToast)(
                                            x.intl.formatToPlainString(x.t.qe4KvQ, { transformName: t.name }),
                                            o.ToastType.SUCCESS,
                                        ),
                                    ));
                            } finally {
                                i(null);
                            }
                        }
                    },
                    [r, e, s],
                );
            return t.map((t) => {
                let e = r === t.id;
                return (0, n.jsx)(
                    o.Drp,
                    {
                        id: `text-transform-${t.id}`,
                        label: e ? x.intl.formatToPlainString(x.t.rrf7Kf, { transformName: t.name }) : t.name,
                        icon: o.Dud,
                        action: () => c(t),
                        disabled: null != r,
                    },
                    t.id,
                );
            });
        })(T, S, y);
    return "" !== S.trim() && e
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  A,
                  C,
                  (0, n.jsxs)(o.Drp, {
                      id: "text-transforms",
                      label: x.intl.string(x.t["6YZezO"]),
                      icon: o.Dud,
                      children: [
                          E,
                          E.length > 0 ? (0, n.jsx)(o.bXX, {}) : null,
                          (0, n.jsx)(o.Drp, {
                              id: "manage-text-transforms",
                              label: x.intl.string(x.t.IcDoaD),
                              action: () => {
                                  (0, o.mMO)(async () => {
                                      let { default: t } = await s.e("54191").then(s.bind(s, 665906));
                                      return (e) => (0, n.jsx)(t, { ...e });
                                  });
                              },
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
