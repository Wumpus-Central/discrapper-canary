t(321073);
var i = t(906018),
    r = t(692768);
function a(e) {
    return Array.from(e).length;
}
t.d(
    n,
    {},
    {
        o: function (e, n) {
            let { pageId: t, content: o } = e,
                s = [];
            function l(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                s.push(i.Xd.create({ pageId: t, code: e, ...n }));
            }
            switch (o.oneofKind) {
                case "questions":
                    for (let e of o.questions.questions)
                        !(function (e, n, t) {
                            let r = e.id,
                                { kind: o } = e;
                            if ("info" === o.oneofKind || void 0 === o.oneofKind) return;
                            if (
                                (function (e) {
                                    let n = e?.kind;
                                    switch (n?.oneofKind) {
                                        case "choices":
                                            return 0 === n.choices.choiceIds.length;
                                        case "ranked":
                                            return 0 === n.ranked.rankedChoiceIds.length;
                                        case "text":
                                            return "" === n.text.text.trim();
                                        case "number":
                                            return !1;
                                        case "matrix":
                                            return 0 === n.matrix.rows.length;
                                        case "conjoint":
                                            return 0 === n.conjoint.chosenConceptIndexes.length;
                                        case "maxdiff":
                                            return 0 === n.maxdiff.picksPerSet.length;
                                        default:
                                            return !0;
                                    }
                                })(n)
                            ) {
                                e.required && t(i.u2.REQUIRED, { questionId: r });
                                return;
                            }
                            let s = n?.kind;
                            switch (o.oneofKind) {
                                case "singleChoice":
                                case "dropdown":
                                case "multiChoice": {
                                    if (s?.oneofKind !== "choices") return;
                                    let e =
                                            "singleChoice" === o.oneofKind
                                                ? o.singleChoice
                                                : "dropdown" === o.oneofKind
                                                  ? o.dropdown
                                                  : o.multiChoice,
                                        n = s.choices.choiceIds,
                                        l = e.choices.some((e) => e.exclusive && n.includes(e.id));
                                    if ("multiChoice" === o.oneofKind && !l) {
                                        let { minSelected: a, maxSelected: o } = e;
                                        (null != a && n.length < a.value && t(i.u2.TOO_FEW, { questionId: r }),
                                            null != o && n.length > o.value && t(i.u2.TOO_MANY, { questionId: r }));
                                    }
                                    for (let o of e.choices) {
                                        let e = s.choices.textByChoiceId[o.id];
                                        o.allowText && n.includes(o.id) && "" === (e ?? "").trim()
                                            ? t(i.u2.REQUIRED, { questionId: r, choiceId: o.id })
                                            : null != e &&
                                              null != o.textMaxLength &&
                                              a(e) > o.textMaxLength.value &&
                                              t(i.u2.TOO_LONG, { questionId: r, choiceId: o.id });
                                    }
                                    return;
                                }
                                case "rank": {
                                    let e = o.rank.rankTop?.value ?? o.rank.choices.length;
                                    s?.oneofKind === "ranked" &&
                                        s.ranked.rankedChoiceIds.length < e &&
                                        t(i.u2.TOO_FEW, { questionId: r });
                                    return;
                                }
                                case "freeText": {
                                    let { maxLength: e } = o.freeText;
                                    s?.oneofKind === "text" &&
                                        null != e &&
                                        a(s.text.text) > e.value &&
                                        t(i.u2.TOO_LONG, { questionId: r });
                                    return;
                                }
                                case "matrix": {
                                    if (s?.oneofKind !== "matrix" || !e.required) return;
                                    let n = new Set(
                                        s.matrix.rows.map((e) => {
                                            let { rowId: n } = e;
                                            return n;
                                        }),
                                    );
                                    for (let e of o.matrix.rows)
                                        n.has(e.id) || t(i.u2.REQUIRED, { questionId: r, rowId: e.id });
                                    return;
                                }
                            }
                        })(e, (0, r.uO)(n, e.id), l);
                    break;
                case "conjoint": {
                    let e = (0, r.uO)(n, t)?.kind;
                    (e?.oneofKind === "conjoint" ? e.conjoint.chosenConceptIndexes : []).length !==
                        o.conjoint.tasks.length && l(i.u2.REQUIRED);
                    break;
                }
                case "maxdiff": {
                    let e = (0, r.uO)(n, t)?.kind,
                        a = e?.oneofKind === "maxdiff" ? e.maxdiff : null,
                        s = a?.picksPerSet ?? [],
                        d = "" !== o.maxdiff.anchorQuestionText && (a?.anchor ?? i.Pc.UNSPECIFIED) === i.Pc.UNSPECIFIED;
                    (s.length !== o.maxdiff.sets.length ||
                        s.some((e) => {
                            let { mostItemId: n, leastItemId: t } = e;
                            return 0 === n || 0 === t;
                        }) ||
                        d) &&
                        l(i.u2.REQUIRED);
                }
            }
            return s;
        },
    },
);
