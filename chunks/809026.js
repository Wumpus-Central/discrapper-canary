function r(e) {
    if ((null == e ? void 0 : e.fields) == null) return null;
    let t = {},
        n = {};
    for (let r of e.fields)
        switch (r.rawName) {
            case 'poll_question_text':
                t.questionText = r.rawValue;
                break;
            case 'victor_answer_id':
                t.victorAnswerId = r.rawValue;
                break;
            case 'victor_answer_text':
                t.victorAnswerText = r.rawValue;
                break;
            case 'victor_answer_votes':
                t.victorAnswerVotes = parseInt(r.rawValue, 10);
                break;
            case 'total_votes':
                t.totalVotes = parseInt(r.rawValue, 10);
                break;
            case 'victor_answer_emoji_id':
                n.id = r.rawValue;
                break;
            case 'victor_answer_emoji_name':
                n.name = r.rawValue;
                break;
            case 'victor_answer_emoji_animated':
                n.animated = 'true' === r.rawValue;
        }
    if (null != n.name) {
        var r;
        (n.animated = null != (r = n.animated) && r), (t.victorEmoji = n);
    }
    return t;
}
n.d(t, { Z: () => r }), n(47120);
