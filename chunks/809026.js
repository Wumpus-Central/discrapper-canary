function i(e) {
    if ((null == e ? void 0 : e.fields) == null) return null;
    let t = {},
        n = {};
    for (let i of e.fields)
        switch (i.rawName) {
            case 'poll_question_text':
                t.questionText = i.rawValue;
                break;
            case 'victor_answer_id':
                t.victorAnswerId = i.rawValue;
                break;
            case 'victor_answer_text':
                t.victorAnswerText = i.rawValue;
                break;
            case 'victor_answer_votes':
                t.victorAnswerVotes = parseInt(i.rawValue, 10);
                break;
            case 'total_votes':
                t.totalVotes = parseInt(i.rawValue, 10);
                break;
            case 'victor_answer_emoji_id':
                n.id = i.rawValue;
                break;
            case 'victor_answer_emoji_name':
                n.name = i.rawValue;
                break;
            case 'victor_answer_emoji_animated':
                n.animated = 'true' === i.rawValue;
        }
    if (null != n.name) {
        var i;
        (n.animated = null !== (i = n.animated) && void 0 !== i && i), (t.victorEmoji = n);
    }
    return t;
}
n.d(t, { Z: () => i }), n(47120);
