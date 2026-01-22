n.d(t, {
    A: () => p,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(733351);
var r = n(64700),
    l = n(966974),
    a = n(608461),
    i = n(214162),
    o = n(256095),
    c = n(676779),
    s = n(180662),
    u = n(969632),
    f = n(412136),
    d = n(985018);

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function p(e, t, n, p) {
    var O, j;
    let y = e.id,
        [h, v] = r.useState(() => {
            var e, t;
            return null !=
                (e = null == p || null == (t = p.initialAnswers) ? void 0 : t.map((e) => b({}, (0, u.YP)(), e)))
                ? e
                : [(0, u.YP)(), (0, u.YP)()];
        }),
        [w, P] = r.useState(null != (O = null == p ? void 0 : p.initialQuestion) ? O : ""),
        [A, C] = r.useState(!1),
        [R, k] = r.useState(null != (j = null == p ? void 0 : p.initialDuration) ? j : f.fT.ONE_DAY),
        [E, x] = r.useState({}),
        [S, D] = r.useState(!1),
        N = h.filter((e) => (0, u.ND)(e)),
        I = h.filter((e) => (0, u.VD)(e)),
        _ = w.length > 0 && N.length >= f.FW && 0 === I.length,
        [T, { error: U, loading: L }] = (0, a.A)(s.A.createPoll),
        K = h.length < f.Lu,
        Y = h.length > f.FW,
        q = r.useCallback((e) => {
            x((e) => {
                let t = b({}, e);
                return delete t.question, t;
            }),
                P(e);
        }, []),
        z = r.useCallback((e) => {
            let { text: t, index: n, localCreationAnswerId: r } = e;
            x((e) => {
                let t = b({}, e);
                return delete t["answer-".concat(r)], t;
            }),
                v((e) => {
                    let r = [...e];
                    return (
                        (r[n] = m(b({}, r[n]), {
                            text: t,
                        })),
                        r
                    );
                });
        }, []),
        F = r.useCallback((e, t) => {
            v((n) => {
                let r = [...n];
                return (
                    (r[t] = m(b({}, r[t]), {
                        image: e,
                    })),
                    r
                );
            });
        }, []),
        B = r.useCallback(
            (e, t, n) => {
                var r;
                let l = h[t],
                    a = null == (r = l.image) ? void 0 : r.mediaAttachmentState;
                null != a &&
                    a.mediaURL !== n &&
                    c.k7(e, l.localCreationAnswerId, (0, i.$P)(l.localCreationAnswerId, a.mediaURL));
            },
            [h],
        ),
        G = r.useCallback(
            async (e, t, n) => {
                let r = h[t].localCreationAnswerId;
                (B(e, t), F(g(n, o.k.PREPARING), t), null == (await c.Sw(e, r, n)))
                    ? F(g(n, o.k.ERROR), t)
                    : F(g(n, o.k.READY_TO_UPLOAD), t);
            },
            [h, F, B],
        ),
        W = r.useCallback(
            (e, t, n) => {
                let r = h[t].localCreationAnswerId,
                    l = URL.createObjectURL(n);
                B(e, t), F(g(l, o.k.PREPARING), t), c._N(e, r, n), F(g(l, o.k.READY_TO_UPLOAD), t);
            },
            [h, F, B],
        ),
        M = r.useCallback(
            (e, t) => {
                B(y, t),
                    F(
                        {
                            emoji: e,
                            stickerId: void 0,
                            mediaAttachmentState: void 0,
                        },
                        t,
                    );
            },
            [y, F, B],
        ),
        V = r.useCallback((e) => {
            v((t) => {
                let n = [...t];
                return (
                    (n[e] = m(b({}, n[e]), {
                        image: void 0,
                    })),
                    n
                );
            });
        }, []),
        H = r.useCallback(() => {
            K && v((e) => [...e, (0, u.YP)()]);
        }, [K]),
        Z = r.useCallback(
            (e) => {
                if (!Y) return;
                let t = h.length;
                B(y, e),
                    v((t) => {
                        let n = [...t];
                        return n.splice(e, 1), n;
                    }),
                    null == n ||
                        n({
                            indexToRemove: e,
                            numberOfAnswers: t,
                        });
            },
            [h.length, Y, y, n, B],
        );
    r.useEffect(
        () => () => {
            c.AY(y);
        },
        [y],
    );
    let X = r.useCallback(() => {
            let e = !0,
                t = {};
            return (
                0 === w.trim().length && ((e = !1), (t.question = d.intl.string(d.t.gPX3oI))),
                h.filter((e) => (0, u.ND)(e)).length < f.FW &&
                    ((e = !1), (t["answer-".concat(h[0].localCreationAnswerId)] = d.intl.string(d.t.fYvzEX))),
                h.forEach((n) => {
                    (0, u.VD)(n) &&
                        ((e = !1), (t["answer-".concat(n.localCreationAnswerId)] = d.intl.string(d.t["8Qqkc+"])));
                }),
                x(t),
                D(!e),
                e
            );
        }, [h, w]),
        Q = r.useCallback(async () => {
            await T({
                channel: e,
                question: w,
                answers: N,
                allowMultiSelect: A,
                duration: R,
                layout: l.Z.DEFAULT,
                onClose: t,
            });
        }, [w, N, A, R, T, e, t]),
        $ = r.useCallback(() => {
            !L && X() && Q();
        }, [Q, L, X]);
    return {
        answers: h,
        question: w,
        setQuestion: P,
        allowMultiSelect: A,
        setAllowMultiSelect: C,
        duration: R,
        setDuration: k,
        canPost: _,
        canAddMoreAnswers: K,
        canRemoveMoreAnswers: Y,
        handleQuestionChange: q,
        handleAnswerTextChange: z,
        handleGifSelect: G,
        handleEmojiSelect: M,
        handleCustomUpload: W,
        handleAddAnswer: H,
        handleRemoveAnswer: Z,
        handleRemoveAnswerImage: V,
        fieldErrors: E,
        createPoll: Q,
        handleSubmitPoll: $,
        submitting: L,
        createPollError: U,
        shouldFocusOnInvalidField: S,
        setShouldFocusOnInvalidField: D,
    };
}

function g(e, t) {
    return {
        mediaAttachmentState: {
            status: t,
            mediaURL: e,
        },
        emoji: void 0,
        stickerId: void 0,
    };
}
