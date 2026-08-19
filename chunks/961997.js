e.d(n, { k: () => S, o: () => x });
var i = e(477900),
    a = e(582128),
    l = e(503698),
    s = e.n(l),
    o = e(508602),
    r = e(189213),
    c = e(982168),
    d = e(607470),
    u = e(59318),
    I = e(633387),
    E = e(390248),
    _ = e(961440),
    C = e(375708),
    p = e(758884);
function h(t) {
    let { attachment: n } = t,
        { url: e, description: a } = n;
    return null == e ? null : (0, i.jsx)(m, { url: e, description: a });
}
function v(t) {
    let { embed: n } = t;
    if (!_.Tj.has(n.type)) return null;
    let e = void 0 !== n.video && n.type !== o.A.GIFV ? n.video.url : (n.thumbnail?.url ?? n.image?.url);
    return null == e ? null : (0, i.jsx)(m, { url: e });
}
function m(t) {
    let { url: n, description: e } = t,
        a = (0, u.r1)(n);
    return (0, i.jsx)("div", {
        className: p.il,
        children: a
            ? (0, i.jsx)(d.A, { className: s()(p.Ki, p.$_), controls: !0, src: n })
            : (0, i.jsx)("img", { className: s()(p.Sl, p.$_), src: n, alt: e }),
    });
}
function x(t) {
    c.A.pop(), (0, I.r)({ id: "explicit-media-false-positive-modal", text: C.intl.string(C.t.gFsTKu) }), t();
}
function S(t) {
    let {
            channelId: n,
            messageId: e,
            isReportFalsePositiveLoading: l,
            analyticsContext: s,
            attachmentPreview: o,
            embedPreview: c,
            onConfirmPress: d,
            transitionState: u,
            onClose: I,
        } = t,
        _ = a.useCallback(() => {
            (0, E.hv)({
                action: E.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: n,
                messageId: e,
                context: s,
            }),
                I();
        }, [n, e, s, I]),
        p = a.useCallback(() => {
            d?.(),
                (0, E.hv)({
                    action: E.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: n,
                    messageId: e,
                    context: s,
                });
        }, [n, e, s, d]);
    return (
        a.useEffect(() => {
            (0, E.hv)({ action: E.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId: n, messageId: e, context: s });
        }, [n, e, s]),
        (0, i.jsxs)(r.Modal, {
            transitionState: u,
            onClose: I,
            title: C.intl.string(C.t.TPpVkI),
            subtitle: C.intl.string(C.t["z4du/I"]),
            actions: [
                { text: C.intl.string(C.t["ETE/oC"]), onClick: _, variant: "secondary", disabled: l },
                { text: C.intl.string(C.t["cY+Oob"]), onClick: p, loading: l, disabled: l },
            ],
            children: [null != o && (0, i.jsx)(h, { attachment: o }), null != c && (0, i.jsx)(v, { embed: c })],
        })
    );
}
