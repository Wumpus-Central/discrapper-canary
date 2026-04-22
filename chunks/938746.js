"use strict";
s.d(e, { A: () => A });
var n = s(627968),
    r = s(64700),
    a = s(253018),
    i = s(311907),
    l = s(562465),
    c = s(691540),
    o = s(857250),
    u = s(97483),
    p = s(477782),
    d = s(152367),
    g = s(192308),
    f = s(869388),
    b = s(147087),
    x = s(773669),
    m = s(186306),
    S = s(323350),
    h = s(711371),
    C = s(652215),
    T = s(985018),
    y = s(27013);
function A(t) {
    let e = (0, b.b)(),
        A = (0, i.bG)([f.A], () => f.A.getTransforms()),
        { selection: E } = t,
        j = null != E ? (0, S.WO)(h.VW.richValue(t), { mode: "plain", range: E, preventEmojiSurrogates: !1 }) : "",
        D = r.useCallback(
            (e) => {
                a.rL.focus(t),
                    m.o.withSingleEntry(t, () => {
                        t.deleteFragment(), t.insertText(e);
                    });
            },
            [t],
        ),
        k = (function (t, e) {
            let [s, a] = r.useState(!1),
                i = r.useCallback(async () => {
                    if (!s) {
                        a(!0), (0, c.P0)((0, o.o)(T.intl.string(T.t.p54KYY), u.Ck.AI));
                        try {
                            let s = await l.Bo.post({
                                url: C.Rsh.AI_FIX_GRAMMAR,
                                body: { content: t },
                                rejectWithError: !1,
                            });
                            s.ok &&
                                s.body &&
                                (e(s.body.content), (0, c.P0)((0, o.o)(T.intl.string(T.t.mxQpUY), u.Ck.SUCCESS)));
                        } finally {
                            a(!1);
                        }
                    }
                }, [s, t, e]);
            return (0, n.jsx)(p.Dr, {
                id: "fix-grammar",
                label: s ? T.intl.string(T.t.p54KYY) : T.intl.string(T.t.fCpOHj),
                icon: d.D,
                action: i,
                disabled: s,
            });
        })(j, D),
        _ = (function (t, e) {
            let [a, d] = r.useState(!1),
                g = (0, i.bG)([x.default], () => x.default.locale),
                f = r.useCallback(
                    async (s, n) => {
                        if (a) return;
                        let r = s ?? g;
                        d(!0);
                        let i = n ?? r;
                        (0, c.P0)((0, o.o)(T.intl.formatToPlainString(T.t.Znl8Z8, { targetLanguage: i }), u.Ck.AI));
                        try {
                            let s = await l.Bo.post({
                                url: C.Rsh.AI_TRANSLATE,
                                body: { content: t, locale: r },
                                rejectWithError: !1,
                            });
                            s.ok &&
                                s.body &&
                                (e(s.body.content),
                                (0, c.P0)(
                                    (0, o.o)(
                                        T.intl.formatToPlainString(T.t.FtVUqm, { targetLanguage: i }),
                                        u.Ck.SUCCESS,
                                    ),
                                ));
                        } finally {
                            d(!1);
                        }
                    },
                    [a, g, t, e],
                ),
                b = (0, T.getAvailableLocales)().map((t) => {
                    let e;
                    try {
                        e = s(579832)(`./${t.value}.png`);
                    } catch (t) {
                        e = s(432706);
                    }
                    return (0, n.jsx)(
                        p.Dr,
                        {
                            id: `translate-${t.value}`,
                            label: t.name,
                            icon: () => (0, n.jsx)("img", { alt: "", src: e, className: y.M }),
                            leadingAccessory: { type: "image", src: e },
                            action: () => f(t.value, t.name),
                            disabled: a,
                        },
                        t.value,
                    );
                });
            return (0, n.jsx)(p.Dr, {
                id: "translate",
                label: a ? T.intl.string(T.t.SVKIdU) : T.intl.string(T.t["6epDlR"]),
                action: () => f(),
                disabled: a,
                children: b,
            });
        })(j, D),
        L = (function (t, e, s) {
            let [a, i] = r.useState(null),
                g = r.useCallback(
                    async (t) => {
                        if (null == a) {
                            i(t.id),
                                (0, c.P0)(
                                    (0, o.o)(
                                        T.intl.formatToPlainString(T.t.rrf7Kf, { transformName: t.name }),
                                        u.Ck.AI,
                                    ),
                                );
                            try {
                                let n = await l.Bo.post({
                                    url: C.Rsh.AI_TEXT_TRANSFORM,
                                    body: { content: e, prompt: t.prompt },
                                    rejectWithError: !1,
                                });
                                n.ok &&
                                    n.body &&
                                    (s(n.body.content),
                                    (0, c.P0)(
                                        (0, o.o)(
                                            T.intl.formatToPlainString(T.t.qe4KvQ, { transformName: t.name }),
                                            u.Ck.SUCCESS,
                                        ),
                                    ));
                            } finally {
                                i(null);
                            }
                        }
                    },
                    [a, e, s],
                );
            return t.map((t) => {
                let e = a === t.id;
                return (0, n.jsx)(
                    p.Dr,
                    {
                        id: `text-transform-${t.id}`,
                        label: e ? T.intl.formatToPlainString(T.t.rrf7Kf, { transformName: t.name }) : t.name,
                        icon: d.D,
                        action: () => g(t),
                        disabled: null != a,
                    },
                    t.id,
                );
            });
        })(A, j, D);
    return "" !== j.trim() && e
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  k,
                  _,
                  (0, n.jsxs)(p.Dr, {
                      id: "text-transforms",
                      label: T.intl.string(T.t["6YZezO"]),
                      icon: d.D,
                      children: [
                          L,
                          L.length > 0 ? (0, n.jsx)(p.bX, {}) : null,
                          (0, n.jsx)(p.Dr, {
                              id: "manage-text-transforms",
                              label: T.intl.string(T.t.IcDoaD),
                              action: () => {
                                  (0, g.openModalLazy)(async () => {
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
