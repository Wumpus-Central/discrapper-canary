n.d(t, { A: () => z, e: () => O });
var i = n(284009),
    l = n.n(i),
    s = n(735438),
    a = n.n(s),
    r = n(966974),
    o = n(17928),
    d = n(765178),
    c = n(228366),
    u = n(157559),
    m = n(686956),
    h = n(720149),
    g = n(845584),
    A = n(58149),
    p = n(857071),
    x = n(301169),
    f = n(505527),
    C = n(9842),
    E = n(495544),
    v = n(734057),
    I = n(31717),
    _ = n(834942),
    j = n(232835),
    N = n(522602),
    T = n(627968);
n(64700);
var y = n(192308),
    S = n(636537),
    b = n(652215);
async function k(e) {
    let { channelId: t, messageId: n, answerIds: i } = e;
    try {
        await S.Bo.put({ url: b.Rsh.POLL_ANSWERS(t, n), body: { answer_ids: i }, rejectWithError: !1 });
    } catch (e) {
        throw new g.LG(e);
    }
}
async function L(e) {
    let { channelId: t, messageId: n } = e;
    try {
        await S.Bo.post({ url: b.Rsh.POLL_EXPIRE(t, n), rejectWithError: !1 });
    } catch (e) {
        throw new g.LG(e);
    }
}
var R = n(862780),
    P = n(951727),
    M = n(985018);
function D(e, t) {
    let n = [...t],
        i = 0,
        l = 0;
    for (let t of n) {
        let n = e?.find((e) => e.answer_id === parseInt(t))?.poll_media;
        n?.text != null && (i += 1), n?.emoji != null && (l += 1);
    }
    return { analyticsSelectedAnswerIds: n, selectedTextAnswersCount: i, selectedEmojiAnswersCount: l };
}
function w(e) {
    let { guildId: t, title: n, body: i } = e;
    u.A.show({
        title: n,
        body: i,
        confirmText: M.intl.string(M.t["9VLmlZ"]),
        cancelText: M.intl.string(M.t["2m+Sqk"]),
        onConfirm: () => {
            m.A.joinGuild(t, { source: b.Q4z.POLL_ALERT });
        },
    });
}
function O(e) {
    let { channelId: t, messageId: i, answerId: l } = e,
        s = v.A.getChannel(t);
    if (null == s) return;
    if (p.A.isLurking(s.guild_id))
        return void w({ guildId: s.guild_id, title: M.intl.string(M.t["7LpysO"]), body: M.intl.string(M.t["5sHHoy"]) });
    let a = j.A.getMessage(t, i);
    if (null == a || null == a.poll || 0 === a.poll.answers.length) return;
    let r = l ?? String(a.poll.answers[0].answer_id);
    !(function (e) {
        let { message: t, initialAnswerId: i } = e;
        (0, y.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("94232"), n.e("40183"), n.e("78195"), n.e("19794")]).then(
                n.bind(n, 716936),
            );
            return (n) => (0, T.jsx)(e, { ...n, message: t, initialAnswerId: i });
        });
    })({ message: a, initialAnswerId: r });
}
function U(e) {
    let { channelId: t, messageId: n, isEditing: i } = e;
    (0, R.A2)(t, n, (e) => ({
        channelId: t,
        selectedAnswerIds: new Set(),
        submitting: !1,
        editing: i,
        showResults: e?.showResults ?? !1,
    }));
}
function G(e) {
    let { channelId: t, messageId: n } = e,
        i = j.A.getMessage(t, n);
    return null == i ? [] : i.reactions.flatMap((e) => (!0 === e.me_vote ? e.emoji.name : []));
}
async function V(e) {
    let { channelId: t, messageId: n, answerIds: i } = e,
        l = G({ channelId: t, messageId: n }),
        s = a().difference(l, i),
        r = a().difference(i, l),
        d = E.default.getId(),
        u = [
            ...s.map((e) => ({ type: "MESSAGE_REACTION_REMOVE", id: e })),
            ...r.map((e) => ({ type: "MESSAGE_REACTION_ADD", id: e })),
        ],
        m = o.Ay.Emitter.batched(() => {
            let e;
            for (let { id: i, type: l } of u)
                e = c.h.dispatch({
                    type: l,
                    channelId: t,
                    messageId: n,
                    emoji: { id: i, name: i },
                    userId: d,
                    optimistic: !0,
                    reactionType: f.v.VOTE,
                });
            return e;
        });
    null != m && (await m);
}
async function B(e) {
    let { channelId: t, messageId: n } = e,
        i = v.A.getChannel(t);
    if (null == i) return;
    if (p.A.isLurking(i.guild_id))
        return void w({ guildId: i.guild_id, title: M.intl.string(M.t.Qic1FD), body: M.intl.string(M.t["5sHHoy"]) });
    if (!_.A.canChatInGuild(i.guild_id))
        return void u.A.show({ title: M.intl.string(M.t.p245wu), body: M.intl.string(M.t["U/uodt"]) });
    let s = (0, R.xt)(t, n);
    l()(null != s, "Must not be able to vote without existing state!");
    let a = G({ channelId: t, messageId: n });
    try {
        let e = [...s.selectedAnswerIds.values()];
        (0, R.A2)(
            t,
            n,
            (e) => (
                l()(null != e, "Must not be able to vote without existing state!"),
                { ...e, submitting: !0, editing: !1 }
            ),
        ),
            await V({ channelId: t, messageId: n, answerIds: e }),
            await k({ channelId: t, messageId: n, answerIds: e }),
            (0, R.A2)(t, n, () => void 0),
            d.O.announce(0 === e.length ? M.intl.string(M.t["xcvy+3"]) : M.intl.string(M.t.o20GSo));
    } catch (e) {
        u.A.show({
            title: M.intl.string(M.t.iufib1),
            body: e.getAnyErrorMessage?.() ?? e.message ?? M.intl.string(M.t.eAn6z2),
        }),
            await V({ channelId: t, messageId: n, answerIds: a }),
            (0, R.A2)(t, n, (e) => {
                if (null != e) return { ...e, submitting: !1, editing: !1 };
            });
    }
}
async function H(e) {
    let { channelId: t, messageId: n } = e,
        i = v.A.getChannel(t);
    if (null != i)
        return p.A.isLurking(i.guild_id)
            ? void w({ guildId: i.guild_id, title: M.intl.string(M.t.B9QnBp), body: M.intl.string(M.t.BVZCTn) })
            : ((0, R.A2)(t, n, (e) => ({
                  channelId: t,
                  selectedAnswerIds: new Set(),
                  submitting: !1,
                  editing: !1,
                  showResults: e?.showResults ?? !1,
              })),
              await B({ channelId: t, messageId: n }));
}
async function F(e) {
    let { channelId: t, messageId: n, type: i } = e;
    switch (i) {
        case "submit":
            await B({ channelId: t, messageId: n });
            break;
        case "remove":
            await H({ channelId: t, messageId: n });
            break;
        case "cancel":
            U({ channelId: t, messageId: n, isEditing: !1 });
            break;
        case "showVotes":
            !(function (e) {
                let { channelId: t, messageId: n } = e;
                (0, R.A2)(t, n, (e) => {
                    let i = null == e || !e.showResults,
                        l = j.A.getMessage(t, n),
                        s = null != l ? l.reactions.reduce((e, t) => e + (t.count_details?.vote ?? 0), 0) : 0;
                    return (
                        A.Ay.trackWithMetadata(b.HAw.POLL_SHOW_RESULTS_CLICKED, {
                            channel_id: t,
                            message_id: n,
                            show_results: i,
                            votes_count: s,
                        }),
                        {
                            channelId: t,
                            selectedAnswerIds: new Set(),
                            submitting: e?.submitting ?? !1,
                            editing: e?.submitting ?? !1,
                            showResults: i,
                        }
                    );
                });
            })({ channelId: t, messageId: n });
            break;
        case "showVoterDetails":
            O({ channelId: t, messageId: n });
            break;
        default:
            l()(!1, `Unknown poll action type: ${i}`);
    }
}
let z = {
    handlePollAnswerTapped: function (e) {
        let { answerId: t, ...n } = e,
            {
                channelId: i,
                messageId: s,
                message: a,
            } = (function (e) {
                let { channelId: t, messageId: n } = e,
                    i = j.A.getMessage(t, n);
                if (null != i) return { message: i, channelId: t, messageId: n };
                let s = C.A.getMessage(t, n);
                if (null != s.message) return { channelId: t, messageId: n, message: s.message };
                throw (l()(null != i, "Tapped on a non-existent poll message"), Error());
            })(n),
            { tapShouldOpenVotersModal: r } = (0, P.j8)(a) ?? {};
        if (!0 === r) return void O({ channelId: i, messageId: s, answerId: t });
        let o = a.poll?.allow_multiselect;
        (0, R.A2)(i, s, (e) => {
            if (null == e) {
                let e = new Set([t]),
                    {
                        analyticsSelectedAnswerIds: n,
                        selectedTextAnswersCount: l,
                        selectedEmojiAnswersCount: r,
                    } = D(a.poll?.answers, e);
                return (
                    A.Ay.trackWithMetadata(b.HAw.POLL_VOTE_SELECTED, {
                        channel_id: i,
                        message_id: s,
                        selected_answer_ids: n,
                        selected_text_answers_count: l,
                        selected_emoji_answers_count: r,
                    }),
                    { channelId: i, selectedAnswerIds: e, submitting: !1, editing: !1, showResults: !1 }
                );
            }
            let n = { ...e },
                l = new Set(n.selectedAnswerIds);
            if (((n.selectedAnswerIds = l), l.has(t))) l.delete(t);
            else {
                if (!o) for (let e of l) l.delete(e);
                l.add(t);
            }
            let {
                analyticsSelectedAnswerIds: r,
                selectedTextAnswersCount: d,
                selectedEmojiAnswersCount: c,
            } = D(a.poll?.answers, l);
            return (
                A.Ay.trackWithMetadata(b.HAw.POLL_VOTE_SELECTED, {
                    channel_id: i,
                    message_id: s,
                    selected_answer_ids: r,
                    selected_text_answers_count: d,
                    selected_emoji_answers_count: c,
                }),
                n
            );
        });
    },
    handlePollSubmitVote: B,
    handleUpdateVoteEditingState: U,
    handlePollActionTapped: F,
    createPoll: async function (e) {
        let { channel: t, question: n, answers: i, allowMultiSelect: l, duration: s, layout: a, onClose: o } = e,
            d = N.A.getUploads(t.id, I.C.Poll),
            c = i.map((e) => {
                let t = d?.findIndex((t) => t.id === e.localCreationAnswerId),
                    n = { attachment_ids: -1 !== t ? [`${t}`] : void 0 };
                a === r.Z.DEFAULT && (n.text = e.text?.trim());
                let i = e.image?.emoji;
                return (
                    null != i &&
                        (null != i.id
                            ? (n.emoji = { id: i.id, name: "" })
                            : null != i.optionallyDiverseSequence && (n.emoji = { name: i.optionallyDiverseSequence })),
                    { poll_media: n }
                );
            }),
            u = { question: { text: n.trim() }, answers: c, allow_multiselect: l, duration: s, layout_type: a };
        try {
            await h.A.sendPollMessage(t.id, u, {
                attachmentsToUpload: d,
                onAttachmentUploadError: (e, n, i) => {
                    (0, x.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: n, reason: i });
                },
            }),
                o?.();
        } catch (e) {
            if ("poll" === (e instanceof g.LG ? e : new g.LG(e)).getAnyErrorMessage() && null != e.text)
                throw { ...e, body: JSON.parse(e.text) };
            throw e;
        }
    },
    endPollEarly: async function (e) {
        let { channelId: t, messageId: n } = e;
        (await u.A.confirm({ title: M.intl.string(M.t["+rfkTK"]), body: M.intl.string(M.t.H2I1gL) })) &&
            (await L({ channelId: t, messageId: n }));
    },
};
