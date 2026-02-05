n.d(t, { A: () => f }), n(323874), n(14289), n(35956);
var l = n(64700),
    a = n(966974),
    i = n(608461),
    r = n(214162),
    o = n(256095),
    s = n(676779),
    c = n(180662),
    u = n(969632),
    m = n(412136),
    d = n(985018);
function f(e, t, n, f) {
    let b = e.id,
        [p, h] = l.useState(
            () => f?.initialAnswers?.map((e) => ({ ...(0, u.YP)(), ...e })) ?? [(0, u.YP)(), (0, u.YP)()],
        ),
        [A, C] = l.useState(f?.initialQuestion ?? ""),
        [R, j] = l.useState(!1),
        [k, x] = l.useState(f?.initialDuration ?? m.fT.ONE_DAY),
        [_, w] = l.useState({}),
        [E, P] = l.useState(!1),
        N = p.filter((e) => (0, u.ND)(e)),
        I = p.filter((e) => (0, u.VD)(e)),
        S = A.length > 0 && N.length >= m.FW && 0 === I.length,
        [v, { error: D, loading: O }] = (0, i.A)(c.A.createPoll),
        y = p.length < m.Lu,
        T = p.length > m.FW,
        U = l.useCallback((e) => {
            w((e) => {
                let t = { ...e };
                return delete t.question, t;
            }),
                C(e);
        }, []),
        L = l.useCallback((e) => {
            let { text: t, index: n, localCreationAnswerId: l } = e;
            w((e) => {
                let t = { ...e };
                return delete t[`answer-${l}`], t;
            }),
                h((e) => {
                    let l = [...e];
                    return (l[n] = { ...l[n], text: t }), l;
                });
        }, []),
        K = l.useCallback((e, t) => {
            h((n) => {
                let l = [...n];
                return (l[t] = { ...l[t], image: e }), l;
            });
        }, []),
        Y = l.useCallback(
            (e, t, n) => {
                let l = p[t],
                    a = l.image?.mediaAttachmentState;
                null != a &&
                    a.mediaURL !== n &&
                    s.k7(e, l.localCreationAnswerId, (0, r.$P)(l.localCreationAnswerId, a.mediaURL));
            },
            [p],
        ),
        B = l.useCallback(
            async (e, t, n) => {
                let l = p[t].localCreationAnswerId;
                (Y(e, t), K(g(n, o.k.PREPARING), t), null == (await s.Sw(e, l, n)))
                    ? K(g(n, o.k.ERROR), t)
                    : K(g(n, o.k.READY_TO_UPLOAD), t);
            },
            [p, K, Y],
        ),
        W = l.useCallback(
            (e, t, n) => {
                let l = p[t].localCreationAnswerId,
                    a = URL.createObjectURL(n);
                Y(e, t), K(g(a, o.k.PREPARING), t), s._N(e, l, n), K(g(a, o.k.READY_TO_UPLOAD), t);
            },
            [p, K, Y],
        ),
        $ = l.useCallback(
            (e, t) => {
                Y(b, t), K({ emoji: e, stickerId: void 0, mediaAttachmentState: void 0 }, t);
            },
            [b, K, Y],
        ),
        q = l.useCallback((e) => {
            h((t) => {
                let n = [...t];
                return (n[e] = { ...n[e], image: void 0 }), n;
            });
        }, []),
        z = l.useCallback(() => {
            y && h((e) => [...e, (0, u.YP)()]);
        }, [y]),
        F = l.useCallback(
            (e) => {
                if (!T) return;
                let t = p.length;
                Y(b, e),
                    h((t) => {
                        let n = [...t];
                        return n.splice(e, 1), n;
                    }),
                    n?.({ indexToRemove: e, numberOfAnswers: t });
            },
            [p.length, T, b, n, Y],
        );
    l.useEffect(
        () => () => {
            s.AY(b);
        },
        [b],
    );
    let G = l.useCallback(() => {
            let e = !0,
                t = {};
            return (
                0 === A.trim().length && ((e = !1), (t.question = d.intl.string(d.t.gPX3oI))),
                p.filter((e) => (0, u.ND)(e)).length < m.FW &&
                    ((e = !1), (t[`answer-${p[0].localCreationAnswerId}`] = d.intl.string(d.t.fYvzEX))),
                p.forEach((n) => {
                    (0, u.VD)(n) && ((e = !1), (t[`answer-${n.localCreationAnswerId}`] = d.intl.string(d.t["8Qqkc+"])));
                }),
                w(t),
                P(!e),
                e
            );
        }, [p, A]),
        M = l.useCallback(async () => {
            await v({
                channel: e,
                question: A,
                answers: N,
                allowMultiSelect: R,
                duration: k,
                layout: a.Z.DEFAULT,
                onClose: t,
            });
        }, [A, N, R, k, v, e, t]),
        V = l.useCallback(() => {
            !O && G() && M();
        }, [M, O, G]);
    return {
        answers: p,
        question: A,
        setQuestion: C,
        allowMultiSelect: R,
        setAllowMultiSelect: j,
        duration: k,
        setDuration: x,
        canPost: S,
        canAddMoreAnswers: y,
        canRemoveMoreAnswers: T,
        handleQuestionChange: U,
        handleAnswerTextChange: L,
        handleGifSelect: B,
        handleEmojiSelect: $,
        handleCustomUpload: W,
        handleAddAnswer: z,
        handleRemoveAnswer: F,
        handleRemoveAnswerImage: q,
        fieldErrors: _,
        createPoll: M,
        handleSubmitPoll: V,
        submitting: O,
        createPollError: D,
        shouldFocusOnInvalidField: E,
        setShouldFocusOnInvalidField: P,
    };
}
function g(e, t) {
    return { mediaAttachmentState: { status: t, mediaURL: e }, emoji: void 0, stickerId: void 0 };
}
