n.d(t, { A: () => f }), n(323874), n(14289), n(35956);
var a = n(64700),
    l = n(966974),
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
        [p, h] = a.useState(
            () => f?.initialAnswers?.map((e) => ({ ...(0, u.YP)(), ...e })) ?? [(0, u.YP)(), (0, u.YP)()],
        ),
        [A, C] = a.useState(f?.initialQuestion ?? ""),
        [R, j] = a.useState(!1),
        [k, x] = a.useState(f?.initialDuration ?? m.fT.ONE_DAY),
        [_, w] = a.useState({}),
        [E, P] = a.useState(!1),
        I = p.filter((e) => (0, u.ND)(e)),
        S = p.filter((e) => (0, u.VD)(e)),
        N = A.length > 0 && I.length >= m.FW && 0 === S.length,
        [v, { error: D, loading: y }] = (0, i.A)(c.A.createPoll),
        O = p.length < m.Lu,
        T = p.length > m.FW,
        L = a.useCallback((e) => {
            w((e) => {
                let t = { ...e };
                return delete t.question, t;
            }),
                C(e);
        }, []),
        U = a.useCallback((e) => {
            let { text: t, index: n, localCreationAnswerId: a } = e;
            w((e) => {
                let t = { ...e };
                return delete t[`answer-${a}`], t;
            }),
                h((e) => {
                    let a = [...e];
                    return (a[n] = { ...a[n], text: t }), a;
                });
        }, []),
        K = a.useCallback((e, t) => {
            h((n) => {
                let a = [...n];
                return (a[t] = { ...a[t], image: e }), a;
            });
        }, []),
        Y = a.useCallback(
            (e, t, n) => {
                let a = p[t],
                    l = a.image?.mediaAttachmentState;
                null != l &&
                    l.mediaURL !== n &&
                    s.k7(e, a.localCreationAnswerId, (0, r.$P)(a.localCreationAnswerId, l.mediaURL));
            },
            [p],
        ),
        B = a.useCallback(
            async (e, t, n) => {
                let a = p[t].localCreationAnswerId;
                (Y(e, t), K(g(n, o.k.PREPARING), t), null == (await s.Sw(e, a, n)))
                    ? K(g(n, o.k.ERROR), t)
                    : K(g(n, o.k.READY_TO_UPLOAD), t);
            },
            [p, K, Y],
        ),
        W = a.useCallback(
            (e, t, n) => {
                let a = p[t].localCreationAnswerId,
                    l = URL.createObjectURL(n);
                Y(e, t), K(g(l, o.k.PREPARING), t), s._N(e, a, n), K(g(l, o.k.READY_TO_UPLOAD), t);
            },
            [p, K, Y],
        ),
        F = a.useCallback(
            (e, t) => {
                Y(b, t), K({ emoji: e, stickerId: void 0, mediaAttachmentState: void 0 }, t);
            },
            [b, K, Y],
        ),
        q = a.useCallback((e) => {
            h((t) => {
                let n = [...t];
                return (n[e] = { ...n[e], image: void 0 }), n;
            });
        }, []),
        M = a.useCallback(() => {
            O && h((e) => [...e, (0, u.YP)()]);
        }, [O]),
        $ = a.useCallback(
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
    a.useEffect(
        () => () => {
            s.AY(b);
        },
        [b],
    );
    let G = a.useCallback(() => {
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
        z = a.useCallback(async () => {
            await v({
                channel: e,
                question: A,
                answers: I,
                allowMultiSelect: R,
                duration: k,
                layout: l.Z.DEFAULT,
                onClose: t,
            });
        }, [A, I, R, k, v, e, t]),
        H = a.useCallback(() => {
            !y && G() && z();
        }, [z, y, G]);
    return {
        answers: p,
        question: A,
        setQuestion: C,
        allowMultiSelect: R,
        setAllowMultiSelect: j,
        duration: k,
        setDuration: x,
        canPost: N,
        canAddMoreAnswers: O,
        canRemoveMoreAnswers: T,
        handleQuestionChange: L,
        handleAnswerTextChange: U,
        handleGifSelect: B,
        handleEmojiSelect: F,
        handleCustomUpload: W,
        handleAddAnswer: M,
        handleRemoveAnswer: $,
        handleRemoveAnswerImage: q,
        fieldErrors: _,
        createPoll: z,
        handleSubmitPoll: H,
        submitting: y,
        createPollError: D,
        shouldFocusOnInvalidField: E,
        setShouldFocusOnInvalidField: P,
    };
}
function g(e, t) {
    return { mediaAttachmentState: { status: t, mediaURL: e }, emoji: void 0, stickerId: void 0 };
}
