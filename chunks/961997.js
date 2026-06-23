e.d(n, { k: () => A, o: () => x });
var i = e(627968),
    a = e(64700),
    l = e(503698),
    s = e.n(l),
    r = e(508602),
    o = e(189213),
    c = e(982168),
    u = e(607470),
    d = e(59318),
    I = e(633387),
    E = e(390248),
    _ = e(961440),
    C = e(375708),
    p = e(515052);
function v(t) {
    let { attachment: n } = t,
        { url: e, description: a } = n;
    return null == e ? null : (0, i.jsx)(m, { url: e, description: a });
}
function h(t) {
    let { embed: n } = t;
    if (!_.Tj.has(n.type)) return null;
    let e = void 0 !== n.video && n.type !== r.A.GIFV ? n.video.url : (n.thumbnail?.url ?? n.image?.url);
    return null == e ? null : (0, i.jsx)(m, { url: e });
}
function m(t) {
    let { url: n, description: e } = t,
        a = (0, d.r1)(n);
    return (0, i.jsx)("div", {
        className: p.il,
        children: a
            ? (0, i.jsx)(u.A, { className: s()(p.Ki, p.$_), controls: !0, src: n })
            : (0, i.jsx)("img", { className: s()(p.Sl, p.$_), src: n, alt: e }),
    });
}
function x(t) {
    c.A.pop(), (0, I.r)({ id: "explicit-media-false-positive-modal", text: C.intl.string(C.t.gFsTKu) }), t();
}
function A(t) {
    let {
            channelId: n,
            messageId: e,
            isReportFalsePositiveLoading: l,
            analyticsContext: s,
            attachmentPreview: r,
            embedPreview: c,
            onConfirmPress: u,
            transitionState: d,
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
            u?.(),
                (0, E.hv)({
                    action: E.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                    channelId: n,
                    messageId: e,
                    context: s,
                });
        }, [n, e, s, u]);
    return (
        a.useEffect(() => {
            (0, E.hv)({ action: E.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED, channelId: n, messageId: e, context: s });
        }, [n, e, s]),
        (0, i.jsxs)(o.Modal, {
            transitionState: d,
            onClose: I,
            title: C.intl.string(C.t.TPpVkI),
            subtitle: C.intl.string(C.t["z4du/I"]),
            actions: [
                { text: C.intl.string(C.t["ETE/oC"]), onClick: _, variant: "secondary", disabled: l },
                { text: C.intl.string(C.t["cY+Oob"]), onClick: p, loading: l, disabled: l },
            ],
            children: [null != r && (0, i.jsx)(v, { attachment: r }), null != c && (0, i.jsx)(h, { embed: c })],
        })
    );
}
