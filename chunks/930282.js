n.d(t, {
    HR: () => b,
    L5: () => g,
    ZP: () => h
});
var a = n(255367),
    o = n(73800),
    i = n(120356),
    r = n.n(i),
    c = n(653603),
    l = n.n(c),
    s = n(902704),
    u = n(453687),
    d = n(328966),
    m = n(981631),
    p = n(388032),
    _ = n(848697),
    f = n(73433);
function g(e, t) {
    return e.type === m.uaV.VOICE_HANGOUT_INVITE ? '' : e.hasFlag(m.iLy.SOURCE_MESSAGE_DELETED) ? p.intl.string(p.t.JOtgS0) : t;
}
function b(e, t) {
    var n, a;
    let { message: o } = t,
        { message: i } = e;
    return (0, s.Z)(e, t, ['message']) && o.content === i.content && o.state === i.state && (null == (n = o.editedTimestamp) ? void 0 : n.toString()) === (null == (a = i.editedTimestamp) ? void 0 : a.toString());
}
let h = o.memo(function (e) {
    var t;
    let { className: n, message: i, children: c, content: s, onUpdate: p, contentRef: b, compact: h } = e,
        T = i.state === m.yb.SEND_FAILED,
        y = i.state === m.yb.SENDING,
        C = i.isCommandType(),
        v = null == (t = i.editedTimestamp) ? void 0 : t.toString(),
        x = o.useRef(!1);
    return (
        o.useLayoutEffect(() => {
            x.current ? null != p && p() : (x.current = !0);
        }, [p, i.content, s, v, c]),
        (0, a.jsxs)('div', {
            id: (0, u.ut)(i),
            ref: b,
            className: r()(n, f.markup, {
                [_.messageContent]: !0,
                [_.isSending]: y && !C,
                [_.markupRtl]: 'rtl' === l()(i.content),
                [_.isFailed]: T,
                [_.isUnsupported]: i.isUnsupported
            }),
            children: [
                null != c ? c : g(i, s),
                (0, a.jsx)(d.Z, {
                    message: i,
                    compact: h,
                    location: d.H.WITH_CONTENT
                })
            ]
        })
    );
}, b);
