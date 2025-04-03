a.d(i, { default: () => j }), a(47120), a(266796);
var s = a(200651),
    t = a(192379),
    n = a(120356),
    o = a.n(n),
    l = a(481060),
    r = a(313201),
    m = a(309081),
    d = a(35463),
    c = a(489887),
    h = a(388032),
    u = a(787791);
let x = (0, r.hQ)();
function j(e) {
    var i;
    let { channelId: a, answer: n, onSave: r, transitionState: j, onClose: _ } = e,
        {
            emoji: g,
            hasUpload: p,
            upload: k,
            mediaUrl: v,
            mediaFilename: w
        } = (0, d.Z)({
            channelId: a,
            localCreationAnswerId: n.localCreationAnswerId,
            image: n.image
        }),
        [C, N] = t.useState(null != (i = null == k ? void 0 : k.description) ? i : '');
    return (0, s.jsxs)(l.Y0X, {
        size: l.CgR.DYNAMIC,
        className: o()(u.modal, {
            [u.hasImage]: p,
            [u.hasEmoji]: null != g
        }),
        transitionState: j,
        'aria-label': h.NW.string(h.t.QbhHBQ),
        children: [
            (0, s.jsx)(m.I, {
                hasUpload: p,
                mediaUrl: v,
                mediaFilename: w,
                imageClassName: u.imagePreview,
                emoji: g,
                emojiClassName: u.emojiPreview
            }),
            (0, s.jsxs)(l.hzk, {
                className: u.content,
                children: [
                    (0, s.jsx)(l.vwX, {
                        tag: l.RB0.LABEL,
                        htmlFor: x,
                        children: h.NW.string(h.t['/2Gnoa'])
                    }),
                    (0, s.jsx)(l.oil, {
                        id: x,
                        value: C,
                        inputClassName: u.input,
                        onChange: N,
                        maxLength: c.WA,
                        autoFocus: !0
                    })
                ]
            }),
            (0, s.jsxs)(l.mzw, {
                className: u.footer,
                children: [
                    (0, s.jsx)(l.zxk, {
                        look: l.iLD.FILLED,
                        size: l.zxk.Sizes.MEDIUM,
                        onClick: () => {
                            null != C && r(C), _();
                        },
                        children: (0, s.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            children: h.NW.string(h.t.R3BPHx)
                        })
                    }),
                    (0, s.jsx)(l.zxk, {
                        look: l.iLD.LINK,
                        size: l.zxk.Sizes.MEDIUM,
                        onClick: _,
                        children: (0, s.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            children: h.NW.string(h.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
}
