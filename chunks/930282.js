n.d(t, {
    HR: () => p,
    L5: () => m,
    ZP: () => b
});
var l = n(200651),
    r = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(653603),
    o = n.n(s),
    c = n(902704),
    u = n(453687),
    d = n(318713),
    f = n(981631),
    h = n(388032),
    _ = n(161441),
    g = n(852831);
function m(e, t) {
    return e.type === f.uaV.VOICE_HANGOUT_INVITE ? '' : e.hasFlag(f.iLy.SOURCE_MESSAGE_DELETED) ? h.NW.string(h.t.JOtgS0) : t;
}
function p(e, t) {
    var n, l;
    let { message: r } = t,
        { message: a } = e;
    return (0, c.Z)(e, t, ['message']) && r.content === a.content && r.state === a.state && (null == (n = r.editedTimestamp) ? void 0 : n.toString()) === (null == (l = a.editedTimestamp) ? void 0 : l.toString());
}
let b = r.memo(function (e) {
    var t;
    let { className: n, message: a, children: s, content: c, onUpdate: p, contentRef: b } = e,
        E = a.isEdited(),
        y = a.state === f.yb.SEND_FAILED,
        I = a.state === f.yb.SENDING,
        S = a.isCommandType(),
        A = null == (t = a.editedTimestamp) ? void 0 : t.toString(),
        O = r.useRef(!1);
    return (
        r.useLayoutEffect(() => {
            O.current ? null != p && p() : (O.current = !0);
        }, [p, a.content, c, A, s]),
        (0, l.jsxs)('div', {
            id: (0, u.ut)(a),
            ref: b,
            className: i()(n, g.markup, {
                [_.messageContent]: !0,
                [_.isSending]: I && !S,
                [_.markupRtl]: 'rtl' === o()(a.content),
                [_.isFailed]: y,
                [_.isUnsupported]: a.isUnsupported
            }),
            children: [
                null != s ? s : m(a, c),
                E &&
                    null != a.editedTimestamp &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            ' ',
                            (0, l.jsx)(d.Z, {
                                timestamp: a.editedTimestamp,
                                isEdited: !0,
                                isInline: !1,
                                children: (0, l.jsxs)('span', {
                                    className: _.edited,
                                    children: ['(', h.NW.string(h.t.C8sXIC), ')']
                                })
                            })
                        ]
                    })
            ]
        })
    );
}, p);
